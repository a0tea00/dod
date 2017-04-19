var jf = require('jsonfile');
var fs =require('fs');
var Def = require('./Definition.js')
var jq = require('json-query');

///////////////////////////////////////////////////////////////////
//pepeline 3 -> put new _id from pipeline 2 to pipeline 1 outputs

//input def
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

var p2_kf5_id ={
  id:"/p2/id",
  data:"p2_id.json"
}


var p2_links={
  id:"/p2/links",
  data:"p2_links.json"
}

//intermedia def
var p3_objectID ={
  id:"/p3/id",
  source:"/p2/id",
  keys:["kf5_id"],
  properties:{} //skip transformation
}

//output def
var p3_view6 = {
  id:"/p3/view6",
  source:"/p1/view6",
  properties:{
    __v: {value:0},
    __t: {value:"KContribution"},
    kf5_id: {source:"kf5_id"},
    _id:{ref:"/p3/id", key:"kf5_id", sourceKey:"kf5_id", prop:"_id"},
    group: {source:"group"},
    authors: {source:"authors"},
    permission: {source:"permission"},
    created: {source:"created"},
    _groupMembers: {source:"_groupMembers"},
    type: {source:"type"},
    title: {source:"title"},
    keywords: {source:"keywords"},
    modified: {source:"modified"},
    communityId: {source:"communityId"},
    status: {source:"status"},
  }
};

var p3_contribution6 = {
  id:"/p3/contribution6",
  source: "/p1/contribution6",
  properties:{
       __v: {source:"__v"},
       __t: {source:"__t"},
       kf5_id: {source:"kf5_id"},
       _id:{ref:"/p3/id", key:"kf5_id", sourceKey:"kf5_id", prop:"_id"},
       group: {source:"group"},
       authors: {source:"authors"},
       permission: {source:"permission"},
       created: {source:"created"},
       _groupMembers: {source:"_groupMembers"},
       type: {source:"type"},
       title: {source:"title"},
       keywords: {source:"keywords"},
       data: {source:"data"},
       modified: {source:"modified"},
       text4search: {source:"text4search"},
       status: {source:"status"}
  }

}

var p3_author6 = {
  id:"/p3/author6",
  source:"/p1/author6",
    properties:{
      userName: {source:"userName"},
      lastName: {source:"lastName"},
      userId: {source:"userId"},
      kf5_id: {source:"kf5_id"},
      _id:{ref:"/p3/id", key:"kf5_id", sourceKey:"kf5_id", prop:"_id"},
      firstName: {source:"firstName"},
      email: {source:"email"},
      created: {source:"created"},
      type: {source:"type"},
      title: {source:"title"},
      modified: {source: "modified"},
      permission: {source:"permission"}
    }
};


var p3_links ={
  id:"/p3/links",
  type:"object",
  source:"/p2/links",
  properties:{
    __v: {source:"__v"},
    kf5_to:{source:"to"},
    kf5_id: {source:"kf5_id"},
    kf5_from: {source:"from"},
    to:{ref:"/p3/id", key:"kf5_to", sourceKey:"kf5_id", prop:"_id"},
    from:{ref:"/p3/id", key:"kf5_from", sourceKey:"kf5_id", prop:"_id"},
    _id:{ref:"/p3/id", key:"kf5_id", sourceKey:"kf5_id", prop:"_id"},
    created: {source:"created"},
    type: {source:"type"},
    modified: {source:"modified"}
  }

};


var p3 = new Def([p2_kf5_id,p3_objectID, p3_view6, p1_view6, p1_contribution6, p1_author6, p2_links,p3_contribution6,p3_author6, p3_links]);




/*
process flow:
resolve the Definition with the given order.
(external processing is possible)
*/

p3.resolveDef("/p3/view6");
p3.resolveDef("/p3/contribution6");
p3.resolveDef("/p3/author6");
p3.resolveDef("/p3/links");


jf.writeFileSync("p3_view.json", p3.defTree["/p3/view6"].data );
jf.writeFileSync("p3_contribution.json", p3.defTree["/p3/contribution6"].data );
jf.writeFileSync("p3_author.json", p3.defTree["/p3/author6"].data );
jf.writeFileSync("p3_links.json", p3.defTree["/p3/links"].data );

//end of pipeline 3
