var jq = require('json-query');
var jf = require('jsonfile');
var Filter = require('./filters.js');
var Helper = require('./helpers.js');
/*classs constructor*/
function Def(defs, callBack){
  this.defTree = {};
  this.error = {};
  for (var i = 0; i < defs.length; i++) {
      if(defs[i].id){
        this.defTree[defs[i].id] =defs[i];

        //read data files
        if(defs[i].data){
          defs[i].data = jf.readFileSync(defs[i].data);
        }

      }else{
        console.error("No id was found...");
        console.error(defs[i]);
        process.exit();
      }
  }
}

/*string utility*/
Def.prototype.getLevel = function(idString){
  idString = idString.replace(/\/$/,"");
  return (idString.split("/").length-1);
};

/*resovle data for the given id*/
Def.prototype.resolveData = function (id, def) {

  if(!def.defTree[id]){
    //exit if id does not exist in the def
    console.error(id + " is not resolvable!");
    process.exit();
  }

  //trace data from source
  if (!def.defTree[id].data){
      if(!def.defTree[id].source){
        console.error(id + " has no data soruce defined!\n Resolve failed.");
        process.exit();
      }
      var q  = def.defTree[id].query?  def.defTree[id].query : "[*]";
      //1 . query the base data set
      var ds = this.resolveData(def.defTree[id].source, def)

      def.defTree[id].data = jq (q, {data:ds.d}).value;//return the query value
      def.defTree[id].keyMap = null; //deafult key map to null

      //2. key mapping if key is provided
      if(def.defTree[id].keys){
        def.defTree[id].keyMap = {};
        for (var i = 0; i < def.defTree[id].keys.length; i++) {
          var keyQuery = "["+def.defTree[id].keys[i]+"]";
          def.defTree[id].keyMap[def.defTree[id].keys[i]] = jq(keyQuery, {data:d}).value

          //key map wiil fail if the key length is not the data length
          if (def.defTree[id].keyMap[def.defTree[id].keys[i]].length !=   def.defTree[id].data.length){
            console.error(id + " cannot use " + id+"."+def.defTree[id].keys[i] +" as key. Data is invalid!");
            process.exit();
          }
        }
      }
  }

    return {d:def.defTree[id].data, m:def.defTree[id].keyMap};

};

/*
resovle a particular def
limitiation: dependency will not automatic resolve if one of the def changed
*/
Def.prototype.resolveDef = function (id) {
  var propArray = []
  //1. get data
  var ds = this.resolveData(id, this);
  this.defTree[id].data = ds.d;
  this.defTree[id].keyMap = ds.m;

  //2. apply filters
  if (this.defTree[id].filter && this.defTree[id].filter.length > 0 ){
    for (var i = 0; i < this.defTree[id].filter.length; i++) {
      var fds = Filter[this.defTree[id].filter[i].name](this.defTree[id].data , this.defTree[id].keyMap, this.defTree[id].filter[i].param);
    }
  }

  //3. transform data
  //gather properties
  for (var key in this.defTree[id].properties) {
    if (this.defTree[id].properties.hasOwnProperty(key)) {
      propArray.push({key: key, value: this.defTree[id].properties[key]});
    }
  }


  //mapping objects
  for (var i = 0; i < this.defTree[id].data.length; i++) {
    var objDataTraget = {};
    var objDataSource = this.defTree[id].data[i];

    //loop through the properties in the def
    for (var j = 0; j < propArray.length; j++) {

        // 1. direct mapping
        if (propArray[j].value.source && !propArray[j].value.helper){
            objDataTraget[propArray[j].key] =  objDataSource[propArray[j].value.source];
            // console.log(propArray[j].value.source);
          }
        //2. constant value
        else if(propArray[j].value.value){
          objDataTraget[propArray[j].key] = propArray[j].value.value;
          // console.log(propArray[j].value.value);
        }

        //3. helper function (with or without source)
        else if(propArray[j].value.helper){
          objDataTraget[propArray[j].key] = Helper[propArray[j].value.helper.name](objDataSource[propArray[j].value.source], propArray[j].value.helper.param);
          // console.log(Helper[propArray[j].value.helper.name]);
        }

        //4. Advanced - use reference
        else if(propArray[j].value.ref){
          if (!this.defTree[propArray[j].value.ref]){
            console.error("Cannot resovle reference " + propArray[j].value.ref + " in " + id +"." + propArray[j].key);
            process.exit();
          }
          if (!this.defTree[propArray[j].value.ref].data || !this.defTree[propArray[j].value.ref].keyMap) {
            console.error("");
          }
          //To DO
        }

        //5. Advanced - use JSON Query
        else if (propArray[j].value.query){
            objDataTraget[propArray[j].key] = jq(propArray[j].value.query, {data:objDataSource}).value;

        }
      }

      //replace the source data with the new traget data object
      this.defTree[id].data[i] = objDataTraget;
  }

};

module.exports = Def;
