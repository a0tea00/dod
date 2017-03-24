/*
data filters
TO DO:
ALl filters should handle keyMap when indexing is enabled.

*/
f = {
  //this filter is not currrently working with keyMap
  unique:function (data , keyMap, param) {
    //TO DO: handle keyMap
    var map = {};
    var data2 = [];
    for (var i = 0; i < data.length; i++) {
      if(!map[data[i][param]]){
        map[data[i][param]] = 1;
        data2.push(data[i]);
      }
    }
    return data2;
  }

};

module.exports = f;
