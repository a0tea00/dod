/*data filters*/
f = {
  unique:function (data , param) {
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
