var jq = require('json-query');
var jf = require('jsonfile');
var fs =require('fs');

var data5 = jf.readFileSync('kf5viewpost.json');
var def_viewpost5 ={
  id:"/",
  type:"array",
  data:data5,
  query:null,
  items:{
    $ref:"/view5"
  },
  output:"output_file_name.txt"
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
  id:"/view5/viewpostrefs5",
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
  id:"/view5/buildons5"
};
var def_author5 = {
  id:"/view5/viewpostrefs5/authors5",
  type:"object",
  source:"/view5/viewpostrefs5",
  query:"[authors]",
  properties:{
    userName:{type:"sring"},
    lastName:{type:"sring"},
    guid:{type:"sring"},
    email:{type:"sring"},
    firstName:{type:"sring"}
  }
};


var def_author6 = {
  id:"/author6",
  type:"object",
  source:"/view5/viewpostrefs5/authors5",
    properties:{
      userName: {path:"[userName]", option:{}},
      lastName: {ptah:"[lastName]"},
      userId: {value:""},
      _id: {ptah:"[lastName]"},
      firstName: {path:"[firstName]"},
      email: {path:"[email]"},
      created: {value:""},
      type: {value:"Author"},
      title: {value:""},
      modified: {type:"DateTime", value:"$now",option:{format:"Z"}},
      permission: {value:"protected"}
    }
};
// var data5 = jf.readFileSync('kf5viewpost.json');
// var r = jq('[*][12]',{data:data5, context:"."}).value;


// var r = jq('[*][viewPostRefs]',{data:data5, context:"."}).value;


// var stream ="";
// for (var key in r) {
//   if (r.hasOwnProperty(key)) {
//     stream +=key+"\n";
//   }
// }

// jf.writeFileSync("view5.json",r);
// fs.writeFileSync("view5.txt",stream);

// jf.writeFileSync("view5_buildons5.json",r);
// fs.writeFileSync("view5_buildons5.txt",stream);

// console.log(r);
// console.log(stream);

/*classs constructor*/
function Def(defs){
  this.defTree = {};
  this.sourceMap = {};
  for (var i = 0; i < defs.length; i++) {
      if(defs[i].id){
        this.defTree[defs[i].id] =defs[i];
      }else{
        console.error("No id was found...");
        console.error(defs[i]);
        process.exit();
      }
  }
}

/*string utility*/
Def.prototype.getLevel = function(idString){
  idString = idString.replace(/\/$/,"");
  return (idString.split("/").length-1);
};
/*string utility*/
Def.prototype.getParent = function (idString) {
  return;
};

/*resovle data for the given id*/
Def.prototype.resolveData = function (id, def) {

  if(!def.defTree[id]){
    //exit if id does not exist in the def
    console.error(id + " is not resolvable!");
    process.exit();
  }

  //trace data from source
  if (!def.defTree[id].data){
      if(!def.defTree[id].source){
        console.error(id + " has no data soruce defined!\n Resolve failed.");
        process.exit();
      }
      var q  = def.defTree[id].query?  def.defTree[id].query : "[*]";

      var d = this.resolveData(def.defTree[id].source, def)
      def.defTree[id].data = jq (q, {data:d}).value;//return the query value

  }
    return def.defTree[id].data;

};


/*get the data source ready*/
Def.prototype.resolveDef = function (id) {
  var d = this.resolveData(id, this);

};

var inDef = new Def([def_viewpost5,def_view5,def_post5,def_buildons5,def_author5, def_author6]);
var outDef = new Def([def_author6])

inDef.resolveDef("/author6");

console.log(inDef.defTree["/view5"].data);

var count = {};
for (var i = 0; i < inDef.defTree["/author6"].data.length; i++) {
  if(count[inDef.defTree["/author6"].data[i].guid]){
    count[inDef.defTree["/author6"].data[i].guid] ++;
  }
  else{
    count[inDef.defTree["/author6"].data[i].guid] = 1;
  }
}

console.log(Object.keys(count).length);


//493


// console.log(myDef.DefTree);
