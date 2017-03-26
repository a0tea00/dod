
/*
data filters
TO DO:
ALl filters should handle keyMap when indexing is enabled.

//follow this pair convension for dat and keyMap: {d:data, m:keyMap}
*/
f = {
  //this filter is not currrently working with keyMap
  unique:function (data , keyMap, param) {
    //TO DO: handle keyMap
    var map = {};
    var data2 = [];
    var keyMap2 = [];
    for (var i = 0; i < data.length; i++) {
      if(!map[data[i][param]]){
        map[data[i][param]] = 1;
        data2.push(data[i]);

        for (var key in keyMap) {
          if (keyMaps.hasOwnProperty(key)) {
            keyMap2.push(keyMap[key][i])
          }
        }

      }
    }
    return {d:data2, m:keyMap2};
  },
  conbine:function(data, keyMap, param){
    //TODO return a combined array of data
  },
  innerQuery: function (data,keyMap,param){
    //TODO perfrom a query on the data
  }

};

module.exports = f;
