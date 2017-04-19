var jq = require('json-query');
var jf = require('jsonfile');
var Filter = require('./filters.js');
var Helper = require('./helpers.js');
/*classs constructor*/
function Def(defs, callBack){
  this.defTree = {};
  this.error = {};
  this.f = new Filter();
  for (var i = 0; i < defs.length; i++) {
      //gather all the ids
      if(defs[i].id){
        if (!this.defTree[defs[i].id]){
          this.defTree[defs[i].id] =defs[i];
        }
        else{
          //Duplicate id error
          console.error("Duplicate id defined!");
          console.error(this.defTree[defs[i].id]);
          console.error(defs[i]);

        }
        //read data files if provided
        //Limitiation: indexing and filters are not applicable for source file def
        if(defs[i].data){
          defs[i].data = jf.readFileSync(defs[i].data);
            //first time query
            var q = defs[i].query? defs[i].query : "[*]";
            defs[i].data = jq(defs[i].query, {data:defs[i].data}).value;
        }

      }else{
        //No id error
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
      def.defTree[id].data = []; //init data to be an array
      def.defTree[id].keyMap = null;//deafult key map to null

      //Release 0.4.0 - multiple source support for def
      //if source is not an Array, convert it to be a single item array
      if( def.defTree[id].source.constructor !== Array){
        def.defTree[id].source = [def.defTree[id].source];
      }
      //resolve all the data in sources
      for (var i = 0; i < def.defTree[id].source.length; i++) {
        console.log("resoveling data: " +def.defTree[id].source[i] );
        var ds = this.resolveData(def.defTree[id].source[i], def)

        def.defTree[id].data = def.defTree[id].data.concat ( jq (q, {data:ds.d}).value); //return the query value and concat to the exisiting array

      }


      // //1 . query the base data set
      //
      // var ds = this.resolveData(def.defTree[id].source, def)
      //
      // def.defTree[id].data = jq (q, {data:ds.d}).value;//return the query value
      // def.defTree[id].keyMap = null; //deafult key map to null
      //
      // //2. key mapping if key is provided
      // if(def.defTree[id].keys){
      //   def.defTree[id].keyMap = {};
      //   for (var i = 0; i < def.defTree[id].keys.length; i++) {
      //     var keyQuery = "["+def.defTree[id].keys[i]+"]";
      //     // keyMap is keyed by the key, and value is the array of the queried values
      //     //index order should match the original data
      //     def.defTree[id].keyMap[def.defTree[id].keys[i]] = jq(keyQuery, {data:def.defTree[id].data}).value
      //
      //     //key map wiil fail if the key length is not the data length
      //     if (def.defTree[id].keyMap[def.defTree[id].keys[i]].length !=   def.defTree[id].data.length){
      //       console.error(def.defTree[id].keyMap[def.defTree[id].keys[i]].length +"!="+ def.defTree[id].data.length);
      //       console.error(id + " cannot use " + id+"."+def.defTree[id].keys[i] +" as key. Data is invalid!");
      //       process.exit();
      //     }
      //   }
      // }
    }

    //2. key mapping if key is provided
    if(def.defTree[id].keys){
      def.defTree[id].keyMap = {};
      for (var i = 0; i < def.defTree[id].keys.length; i++) {
        var keyQuery = "["+def.defTree[id].keys[i]+"]";
        // keyMap is keyed by the key, and value is the array of the queried values
        //index order should match the original data
        def.defTree[id].keyMap[def.defTree[id].keys[i]] = jq(keyQuery, {data:def.defTree[id].data}).value

        //key map wiil fail if the key length is not the data length
        if (def.defTree[id].keyMap[def.defTree[id].keys[i]].length !=   def.defTree[id].data.length){
          console.error(def.defTree[id].keyMap[def.defTree[id].keys[i]].length +"!="+ def.defTree[id].data.length);
          console.error(id + " cannot use " + id+"."+def.defTree[id].keys[i] +" as key. Data is invalid!");
          process.exit();
        }
      }
    }

    //follow this pair convension for dat and keyMap: {d:data, m:keyMap}
    return {d:def.defTree[id].data, m:def.defTree[id].keyMap};

};

/*
utility to apply filter to value
*/

Def.prototype.applyHelper = function (input, helper){
  return r = Helper[helper.name]? Helper[helper.name](input, helper.param) : "Invalid Helper Call!";
};

/*
resovle a particular def
limitiation:
1. dependency will not automatic resolve if one of the def changed
2. filters can only be applied to def that is explicitly beging resolved
3. duplicated key is not yet supported

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
      //Filters are now independ toeach other
      //this.f is the filter instance in each Def pass
      ds = this.f[this.defTree[id].filter[i].name](this.defTree[id].data , this.defTree[id].keyMap, this.defTree[id].filter[i].param);

      this.defTree[id].data = ds.d;
      this.defTree[id].keyMap = ds.m;
    }
  }

  //3. transform data
  if(!this.defTree[id].properties){
    console.error(id + " does not contain property or includes definitions. Resolve failed.");
    process.exit();
  }
  //gather properties
  for (var key in this.defTree[id].properties) {
    if (this.defTree[id].properties.hasOwnProperty(key)) {
      propArray.push({key: key, value: this.defTree[id].properties[key]});
    }
  }

  if(propArray.length !== 0){//transformation is skpped if property array is empty


  //mapping objects
    for (var i = 0; i < this.defTree[id].data.length; i++) {
      var objDataTraget = {};
      var objDataSource = this.defTree[id].data[i];

      //loop through the properties in the def
      for (var j = 0; j < propArray.length; j++) {

          // 1. direct mapping
          if (propArray[j].value.source){

              objDataTraget[propArray[j].key] =  objDataSource[propArray[j].value.source]? objDataSource[propArray[j].value.source] : "Invalid Mapping!";
            }
          //2. constant value
          else if(propArray[j].value.value){

            objDataTraget[propArray[j].key] = propArray[j].value.value;
            // console.log(propArray[j].value.value);
          }

          //3. Advanced - use reference
          // limitiation: compound keys are not yet supported
          // no graceful error handling if reference is not valid
          else if(propArray[j].value.ref){
            if (!this.defTree[propArray[j].value.ref]){
              console.error("Cannot resovle reference " + propArray[j].value.ref + " in " + id +"." + propArray[j].key);
              process.exit();
            }
            if (!this.defTree[propArray[j].value.ref].data || !this.defTree[propArray[j].value.ref].keyMap) {
              // try to resolve refrence if it has not been resolved
              this.resolveDef(propArray[j].value.ref);
            }

            //validate refrence key exists
            if(!this.defTree[propArray[j].value.ref].keyMap[propArray[j].value.sourceKey]){
              console.error(propArray[j].value.ref + " is not indexed by " + propArray[j].value.sourceKey + ". Resolve failed.");
            }

            //validate local key exists
            if (!objDataTraget[propArray[j].value.key]){
              console.error(propArray[j].value.key + " is not defined in "+id + ", or it is defined after " + propArray[j].key +".");
              process.exit();
            }

            //search the keyMap in the reference object for traget index

            //TODO: return multiple indexes if keys are not unique

            var index = this.defTree[propArray[j].value.ref].keyMap[propArray[j].value.sourceKey].indexOf(objDataTraget[propArray[j].value.key]);

            if (index < 0){// use null if index not found
              objDataTraget[propArray[j].key] = null;
            }else{
              //if a property is defined, only use the property
              if (propArray[j].value.prop){
                objDataTraget[propArray[j].key] = this.defTree[propArray[j].value.ref].data[index][propArray[j].value.prop];
              }
              else{
                // otherwise, take the entire data object
                 //get the soruce data by the given index
                objDataTraget[propArray[j].key] = this.defTree[propArray[j].value.ref].data[index];
              }

            }
          }

          //4. Advanced - use JSON Query
          else if (propArray[j].value.query){
              objDataTraget[propArray[j].key] = jq(propArray[j].value.query, {data:objDataSource}).value;

          }


          //finally, applay helper function (with or without source)
          if(propArray[j].value.helper){

            objDataTraget[propArray[j].key] = this.applyHelper(objDataTraget[propArray[j].key], propArray[j].value.helper);

            // console.log(Helper[propArray[j].value.helper.name]);
          }

        }

        //replace the source data with the new traget data object
        this.defTree[id].data[i] = objDataTraget;
    }
  }
};

module.exports = Def;
