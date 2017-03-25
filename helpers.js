const uuidV1 = require('uuid/v1');
const uuidV4 = require('uuid/v4');

/*transformation helpers*/

h = {
  date:function (source, param) {
    /* return a javascript data string in Z format*/
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
  }

};

module.exports = h;
