var jf = require('jsonfile');
var fs =require('fs');
var Def = require('./Definition.js')
var jq = require('json-query');

///////////////////////////////////////////////////////////////////////////////
//pipeline 2 -  get all kf_id from pipeline 1 outputs and generate a kf 6 id map

//take outputs from pipeline 1
var p1_view6 = {
  id:"/p1/view6",
  data:"view6.json"
}

var p1_contribution6 = {
  id:"/p1/contribution6",
  data:"contribution6.json"
}

var p1_author6 = {
  id:"/p1/author6",
  data:"authors6.json"
};

var p1_link1 = {
  id:"/p1/links1",
  data:"buildons6.json"
};

var p1_link2 ={
  id:"/p1/links2",
  data:"buildons6_view.json"
};

var p1_link3 ={
  id:"/p1/links3",
  data:"contains6.json"
};

//pipeline 2 output def
var p2_kf5_id_view = {
  id:"/p2/id1",
  source:"/p1/view6",
  properties:{
    kf5_id:{source:"kf5_id"}
  }

}
var p2_kf5_id_contribution = {
  id:"/p2/id2",
  source:"/p1/contribution6",
  properties:{
    kf5_id:{source:"kf5_id"}
  }
}
var p2_kf5_id_author = {
  id:"/p2/id3",
  source:"/p1/author6",
  properties:{
    kf5_id:{source:"kf5_id"}
  }
}


var p2_link = {//put all 3 links files together, get ready for the next pipeline
  id:"/p2/links",
  source:["/p1/links1","/p1/links2","/p1/links3"],
  properties:{
    __v: {value:0},
    to: {source:"to"},
    created: {source:"created"},
    type: {source:"type"},
    modified: {source:"modified"},
    kf5_id: {source:"kf5_id"},
    from: {source:"from"}
  }
};

var p2_kf5_id ={ // combine all the id and give a new
  id:"/p2/id",
  source:["/p2/id1","/p2/id2","/p2/id3","/p2/links"],
  properties:{
    kf5_id:{source:"kf5_id"},
    _id:{helper:{name:"simObjectID"}}
  }
}
/*
process flow:
*/
var p2 = new Def([p1_view6, p1_contribution6, p1_author6, p1_link1, p1_link2, p1_link3, p2_kf5_id_view, p2_kf5_id_contribution, p2_kf5_id_author, p2_kf5_id, p2_link]);

//resolve the id map and the combined link
p2.resolveDef("/p2/id");
p2.resolveDef("/p2/links");


jf.writeFileSync("p2_id.json", p2.defTree["/p2/id"].data );
jf.writeFileSync("p2_links.json", p2.defTree["/p2/links"].data );
//end of pipeline 2
