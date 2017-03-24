var jf = require('jsonfile');
var fs =require('fs');
var Def = require('./Definition.js')


//kf5 definitions
var def_viewpost5 ={
  id:"/",
  type:"array",
  data:"kf5viewpost.json",
  query:null,
  items:{
    $ref:"/view5"
  }
};

var def_view5 = {
  id:"/view5",
  type:"object",
  source:"/",
  query:null,
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
var def_postref5 = {
  id:"/view5/viewpostrefs5",
  type:"object",
  source:"/view5",
  query:"[viewPostRefs][postInfo]",
  properties:{
    postInfo:{
      type:"object",
      properties:{
        body:{type:"sring"},
        guid:{type:"sring"},
        title:{type:"sring"},
        created:{type:"sring"},
        modified:{type:"sring"},
        authors:{
          type:"array",
          items:{$ref:"/view5/viewpostrefs5/authors"}
        },
        modified:{type:"sring"}
      }
    }
  }
};
var def_post5 = {
  id:"/view5/viewpostrefs5/postInfo5",
  type:"object",
  source:"/view5",
  query:"[viewPostRefs][postInfo]",
  properties:{
        body:{type:"sring"},
        guid:{type:"sring"},
        title:{type:"sring"},
        created:{type:"sring"},
        modified:{type:"sring"},
        authors:{
          type:"array",
          items:{$ref:"/view5/viewpostrefs5/authors"}
        },
        modified:{type:"sring"}
      }
  };
var def_buildons5= {
  id:"/view5/buildons5",
  type:"object",
  source:"/view5",
  query:"[buildOns]",
  properties:{

      }
};
var def_author5 = {
  id:"/view5/viewpostrefs5/postInfo5/authors5",
  type:"object",
  source:"/view5/viewpostrefs5/postInfo5",
  query:"[authors]",
  properties:{
    userName:{type:"sring"},
    lastName:{type:"sring"},
    guid:{type:"sring"},
    email:{type:"sring"},
    firstName:{type:"sring"}
  }
};

//kf 6 definitions
var def_view6 = {
  id:"/view6",
  type:"object",
  source:"/view5",
    properties:{
      __v: {value:0},
      __t: {value:"KContribution"},
      _id: {source:"guid"},
      group: {value:null},
      authors: {query:"[authors][guid]"},
      permission: {source: "published" , helper:{name:"yesOrNo",param:{"true":"public","false":"protected"}}},
      created: {source:"created", helper:{name:"date"}},
      _groupMembers: {value:[]},
      type: {value:"View"},
      title: {source:"title"},
      keywords: {value:[]},
      modified: {source:"modified", helper:{name:"date"}},
      communityId: {value:""},
      status: {value:"active"}
    }

}

var def_body6={
  id:"/contribution6/body",
  type:"object",
  source: "/view5/viewpostrefs5/postInfo5",
  query:"[body]",
  keys:["guid"],
  properties:{
    body:{source: "body"}
  }
}

var def_contribution6 = {
  id:"/contribution6",
  source: "/view5/viewpostrefs5/postInfo5",
  properties:{
       __v: {value:1},
       __t: {value:"KContribution"},
       _id: {source:"guid"},// key must be define before reference
       group: {value:null},
       authors: {query:"[authors][guid]"},
       permission: {value:null},
       created: {source:"created", helper:{name:"date"}},
       _groupMembers: {value:[]},
       type: {source: "postType", helper:{name:"alternativeValue", param:{"NOTE":"Note", "DRAWING":"Drawing"}}},
       title: {source:"title"},
       keywords: {value:[]},
       data: { ref:"/contribution6/body", key:"id", sourceKey:"guid"},
       modified: {source: "modified",helper:{name:"date"}},
       text4search: {value:""},
       status: {value:"active"}
  }

}

var def_author6 = {
  id:"/author6",
  type:"object",
  source:"/view5/viewpostrefs5/postInfo5/authors5",
  filter: [{name: "unique", param:"guid"}],
    properties:{
      userName: {source:"userName"},
      lastName: {source:"lastName"},
      userId: {value:""},
      _id: {source:"guid"},
      firstName: {source:"firstName"},
      email: {source:"email"},
      created: {value:""},
      type: {value:"Author"},
      title: {value:""},
      modified: {helper: {name:"date"}},
      permission: {value:"protected"}
    }
};

var def_buildOns6 = {};

var def_contains6 ={};

var def_links6={};


var inDef = new Def([def_viewpost5,def_view5,def_post5,def_buildons5,def_author5, def_author6, def_view6, def_body6, def_contribution6]);


/*
process flow:
resolve the Definition with the given order.
(external processing is possible)
*/

// inDef.resolveDef("/author6");
// inDef.resolveDef("/view6");
inDef.resolveDef("/contribution6");

// console.log(inDef.defTree["/author6"].data);
//console.log(inDef.defTree["/view6"].data);
console.log(inDef.defTree["/contribution6"].keyMap);

// jf.writeFileSync("authors6.json", inDef.defTree["/author6"].data )
// jf.writeFileSync("view6.json", inDef.defTree["/view6"].data )
