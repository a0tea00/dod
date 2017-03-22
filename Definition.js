var Query = require('json-query');


function Definition(def, isDefFile){
  this.definedOdjects = [];

  function getFile(def){
    // TO DO: read json from file, return json object
    return undefined;
  }

  /*constructor*/
  if (this instanceof Definition ){
      this.def = (isDefFile ? getFile(def) : def);
  }else{
    return new Definition(def, isDefFile);
  }
};

  /*run given query on def*/
  Definition.prototype.runQuery = function (query, option){
    option = (option ? option : {});
    option.data = this.def;
    return  Query(query, option);

  };



  /*validate def by looking for _id*/
  Definition.prototype.validateDef = function(){
    var _def = this.runQuery('[*]',null).key;
    //console.log(_def);
    if (_def){
      return (_def.indexOf("_def")>=0 && _def.indexOf("type")>=0 && _def.indexOf("source")>=0 && _def.indexOf("query")>=0 && _def.indexOf("properties")>=0) // _id is type of _id
    }
    return false; // no _id
  }

/*Parse Object Structure*/
  Definition.prototype.parseDef = function(def){
    if(!this.validateDef){
      process.stderr.write("Read Definition Error: Invalid Definition!");
      process.exit();
    }

    this.sources = [];
    this.ObjectDefs = {};
    var rootSource = this.runQuery(['source']).value;
    this.ObjectDefs = this.runQuery('properties[*]');
    //TO DO:
    // build the object with all fields and the path of the fields

    process.stdout.write(console.log(this.ObjectDefs));


    //first the root source for the object
    this.sources[0] = rootSource;
    //other source in the properties
    for (var i = 0; i < subSource.length; i++) {
      this.sources[i+1] = subSource[i];

    }

  }

/*return source paths in the definition*/
  Definition.prototype.getSource = function () {
    if (!this.sources){
      this.parseDef(this.def);
      //
      this.sources = [1,2,3];
    }

      return this.sources;

  };


function QueryBuilder(){

};

module.exports.QueryBuilder = QueryBuilder;
 module.exports.Definition = Definition;
