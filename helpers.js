/*transformation helpers*/
h = {
  date:function (source, param) {
    /* return a javascript data string in Z format*/
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
    if (source){
      return param["true"];
    }
    return param["false"];
  }

};

module.exports = h;
