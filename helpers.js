const uuidV1 = require('uuid/v1');
const uuidV4 = require('uuid/v4');

/*transformation helpers
TO DO:
Introduce global scope for helpers.
enable operations across the entire data set.
*/

h = {
  date:function (source, param) {
    /* return a javascript date "string" in Z format*/
    //array
    if(source && source.prop && source.prop.constructor === Array){
      var a = []
      for (var i = 0; i < source.length; i++) {
        a[i] = this.date(source[i], param);
      }

      return a;
    }

    //single value
    if (source){
      var d = Date.parse(source);
      return new Date(d);
    }
    return new Date();
  },
  alternativeValue:function(source, param){
    /*
    return a different value for source with a specified value. return source if no specified value provided.
    source - the value from source
    paaram - {source_value: alternative_value}
    */
    //array
    if(source && source.prop && source.prop.constructor === Array){
      var a = []
      for (var i = 0; i < source.length; i++) {
        a[i] = this.alternativeValue(source[i], param);
      }

      return a;
    }

    //single value

    if (param[source]){
      return param[source];
    }
    else{
      return source;
    }
  },
  yesOrNo:function (source,param){
    /*
    for belan source ONLY
    return the true (yes) value if source is ture
    other wise return the false (no) value
    */

    //array
    if(source && source.prop && source.prop.constructor === Array){
      var a = []
      for (var i = 0; i < source.length; i++) {
        a[i] = this.yesOrNo(source[i], param);
      }

      return a;
    }

    //single value
    if (source){
      return param["true"];
    }
    return param["false"];
  },
  genUUID: function (param){
    /*
    defualt uuid generation is v1 - time based
    v4 random uuid is selectable
    */

    if (param === "V4"){
      return uuidV4();
    }
    return uuidV1();
  },
  simObjectID : function (source, param){
    /*
      return a simulated ObjectID as those used in mongoDB
      caution: this is not a genuine ObjectID generator, which uses
      real cluster machine information to generate clustrer-wise unqie
      id.
    */
    var unixtime = (new Date().getTime())/1000|0 ;
    unixtime = unixtime.toString(16);
    var machineID = parseInt(Math.random() * 16777215) ;
    machineID = ("0000000" +  machineID.toString(16)).substr(-6);
    var ProcessID  = parseInt(process.pid);
    ProcessID = ("0000" +  ProcessID.toString(16)).substr(-4);
    var Counter =  parseInt(Math.random() * 16777215) ;
    Counter = ("0000000" +  Counter.toString(16)).substr(-6);
    return  unixtime + machineID + ProcessID + Counter;

    if (param.global) {

    }
},
removeProp:function (){
  /*
  remove properties from the source objects
  */
},
valueOfKey:function (source, param){
  /*
  return all values of a given key from the source object

  Note: This filter only words woth object or object array
  */

},
lookupRefValue:function (source,param){
  /*
    lookup a value from another definiton
    Note: This creates a relationship that may not present in the original input data.
    Since DOD is not focus on data modification rather than data representation,
    always consider including the relationship in the input data first instead
    of generate them on the fly. It could negatively impact the maintainability
    of your defintions.
  */


}

};

module.exports = h;
