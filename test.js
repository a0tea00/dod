var jq = require('json-query');
var jf = require('jsonfile');
// var data = {root:[
//   {M1:"1", O1:"yes", M2:{M3:"yes",O2:"YES"}},
//   {M1:"2", O1:"yes", M2:{M3:"yes",O2:null}},
//   {M1:"3", O1:"yes", M2:{M3:"yes"}},
//   {M1:"4", M2:{M3:"yes",O2:"YES"}},
//   {M1:"5", M2:{M3:"yes",O2:null}},
//   {M1:"6", M2:{M3:"yes"}},
//   {M1:"7", O1: null, M2:{M3:"yes",O2:"YES"}},
//   {M1:"8", O1: null, M2:{M3:"yes",O2:null}},
//   {M1:"9", O1: null, M2:{M3:"yes"}}
// ]};
// var r = Query('root[*O1]' ,{data:data});
// console.log(r);

var def_view5 = {
  id:"/view5",
  type:"object",
  source:"/",
  query:"[*]",
  properties:{
    buildOns:{
      type:"array",
      items:{
        $ref:"/view5/buildons5"
      }
    },
    locked:{type:"string"},
    guid:{type:"string"},
    title:{type:"string"},
    created:{type:"string"},
    modified:{type:"string"},
    sectionGuid:{type:"string"},
    viewPostRefs:{
      type:"array",
      items:{
        $ref:"/view5/viewpostrefs5"
      }
    },
    linkedViewReferences:{type:"string"},
    authors:{type:"string"},
    active:{type:"string"},
    settingInfo:{type:"string"},
    primaryAuthorId:{type:"string"},
    published:{type:"string"}
  }
};


var data5 = jf.readFileSync('kf5viewpost.json');
var f = function (){
  var id = "/view5/viewpostrefs5";
  var q = "[*][viewPostRefs][postInfo][authors]";
  var r = jq(q,{data:data5}).value;

var count = {};
for (var i = 0; i < r.length; i++) {
  if(count[r[i].guid]){
    count[r[i].guid] ++;
  }
  else{
    count[r[i].guid] = 1;
  }
}

  return Object.keys(count).length;
}

var data5 = jf.readFileSync('kf5viewpost.json');



console.log(f());
