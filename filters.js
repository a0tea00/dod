
/*
data filters
(Data set reduce functions)



*/
function Filter(){
  this.global = {}; //pass level global scope object

};
Filter.prototype.unique = function (data , keyMap, param) {
  var map = {};
  var data2 = [];
  var keyMap2 = [];
  for (var i = 0; i < data.length; i++) {
    if(!map[data[i][param]]){
      map[data[i][param]] = 1;//just give a dummy vale to the key
      data2.push(data[i]);

      // push the same index's keyMap value to the filtered keyMap
      for (var key in keyMap) {
        if (keyMaps.hasOwnProperty(key)) {
          keyMap2.push(keyMap[key][i])
        }
      }

    }
  }
  return {d:data2, m:keyMap2};
};

Filter.prototype.extract = function(data , keyMap, param){

//TODO:
// reduce the data to one property array
};

module.exports = Filter;
