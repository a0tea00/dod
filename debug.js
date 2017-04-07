var jf = require('jsonfile');
var fs =require('fs');
var Def = require('./Definition.js')
var jq = require('json-query');

//kf5 definitions
// data def does not have to be having properties defined
//however, following the json schema convension enable schema validation (future work).
var def_buildOn5={
  id:"/buildOn5",
  data:"kf5buildon.json",
  query:"[**]"
}

var def_viewpost5 ={
  id:"/",
  type:"array",
  data:"kf5viewpost.json",
  query:null,
  items:{
    ref:"/view5"
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
        ref:"/view5/buildons5"
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
        ref:"/view5/viewpostrefs5"
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
  query:"[viewPostRefs]",
  properties:{
    viewGuid:{type:"string"},
    postInfo:{
      type:"object",
      properties:{
        body:{type:"string"},
        guid:{type:"string"},
        title:{type:"string"},
        created:{type:"string"},
        modified:{type:"string"},
        authors:{
          type:"array",
          items:{ref:"/view5/viewpostrefs5/authors"}
        },
        modified:{type:"string"}
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
        body:{type:"string"},
        guid:{type:"string"},
        title:{type:"string"},
        created:{type:"string"},
        modified:{type:"string"},
        authors:{
          type:"array",
          items:{ref:"/view5/viewpostrefs5/authors"}
        },
        modified:{type:"string"}
      }
  };
var def_buildons5_view= {
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
  keys:["guid"],
  properties:{
    userName:{type:"string"},
    lastName:{type:"string"},
    guid:{type:"string"},
    email:{type:"string"},
    firstName:{type:"string"}
  }
};

//kf 6 definitions
// output def has to have properties defined in order to be resolved

var def_view6 = {
  id:"/view6",
  type:"object",
  source:"/view5",
    properties:{
      __v: {value:0},
      __t: {value:"KContribution"},
      kf5_id: {source:"guid"},
      _id:{helper:{name:"SimObjectID"}},
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
       kf5_id: {source:"guid"},
       _id:{helper:{name:"SimObjectID"}},
       group: {value:null},
       authors: {query:"[authors][guid]"},
       permission: {value:null},
       created: {source:"created", helper:{name:"date"}},
       _groupMembers: {value:[]},
       type: {source: "postType", helper:{name:"alternativeValue", param:{"NOTE":"Note", "DRAWING":"Drawing"}}},
       title: {source:"title"},
       keywords: {value:[]},
       data: { ref:"/contribution6/body", key:"kf5_id", sourceKey:"guid"},
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
      kf5_id: {source:"guid"},
      _id:{helper:{name:"SimObjectID"}},
      firstName: {source:"firstName"},
      email: {source:"email"},
      created: {value:""},
      type: {value:"Author"},
      title: {value:""},
      modified: {helper: {name:"date"}},
      permission: {value:"protected"}
    }
};

var def_buildOns6_view = {//_to _from includes are not required
  id:"/view6/buildons6",
  type:"object",
  source:"/view5/buildons5",
  properties:{
    __v: {value:0},
    to: {source:"built"},
    created: {source:"created", helper:{name:"date"}},
    type: {value:"buildson"},
    modified: {value:null},
    _id: {helper:{name:"SimObjectID"}},
    from: {source:"buildsOn"}
  }
};

var def_buildOns6 ={ //_to _from includes are not required
  id:"/buildons6",
  type:"object",
  source:"/buildOn5",
  properties:{
    __v: {value:0},
    to: {source:"to"},
    created: {value:null},
    type: {source:"type"},
    modified: {value:null},
    kf5_id: {source:"guid"},
    _id:{helper:{name:"SimObjectID"}},
    from: {source:"from"}
  }

};

var def_contains6 ={ //_to _from includes are not required
  id:"/view6/contains6",
  type:"object",
  source:"/view5/viewpostrefs5",
  properties:{
    __v: {value:0},
    to: {query:"[postInfo][guid]"},
    created: {query: "[postInfo][created]", helper:{name:"date"}},
    type: {value:"contains"},
    modified: {value:null},
    kf5_id: {source:"guid"},
    _id:{helper:{name:"SimObjectID"}},
    from: {source:"viewGuid"}
  }

};

var def_author_id_map={
  id:"/author6_ids",
  source:"/author6",
  properties:{
    kf5_id:{source:"kf5_id"},
    kf6_id:{source:"_id"}
  }


};


var inDef = new Def([def_buildOn5, def_viewpost5, def_postref5, def_view5,def_post5,def_buildons5_view,def_author5, def_author6, def_view6, def_body6, def_contribution6, def_buildOns6, def_buildOns6_view , def_contains6, def_author_id_map]);


/*
process flow:
resolve the Definition with the given order.
(external processing is possible)
*/

inDef.resolveDef("/view6");
inDef.resolveDef("/contribution6");
inDef.resolveDef("/author6");
inDef.resolveDef("/buildons6");
inDef.resolveDef("/view6/buildons6");
inDef.resolveDef("/view6/contains6");
inDef.resolveDef("/author6_ids");

// console.log(inDef.defTree["/author6"].data);
//console.log(inDef.defTree["/view6"].data);
// console.log(inDef.defTree["/contribution6"].data);
// console.log(inDef.defTree["/buildons6"].data);
// console.log(inDef.defTree["/view6/contains6"].data);

jf.writeFileSync("authors6.json", inDef.defTree["/author6"].data );
jf.writeFileSync("view6.json", inDef.defTree["/view6"].data );
jf.writeFileSync("contribution6.json", inDef.defTree["/contribution6"].data );
jf.writeFileSync("buildons6.json", inDef.defTree["/buildons6"].data );
jf.writeFileSync("buildons6_view.json", inDef.defTree["/view6/buildons6"].data );
jf.writeFileSync("contains6.json", inDef.defTree["/view6/contains6"].data );
jf.writeFileSync("author6_ids.json", inDef.defTree["/author6_ids"].data );
