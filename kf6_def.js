 var kf6_authors = {
   "_def":"/Author",
   "type":"object",
   "source":"path/to/Authors.js",
   "query":"...",
   "properties":{
     "_id": {
        "type":"String",
        "source":"",
        "path":"",
      },
      "lastName": {
        "type":"String",
        "source":"",
        "path":"",
      },
      "firstName":{
        "type":"String",
        "source":"",
        "path":"",
      }
   }

};

var kf6_contribution ={
     "_id":{
      "type":"_id",
      "target":"",
      "source":"url/to/authors.json",
      "path":"$..lastName"
    },
    communityId:{

    },
    "authors":{
        "type":"array",
        "target":{
                "type":"String",
                "target":"",
                "source":"",
                "path":""
        },
        "source":"",
        "path":""
    },
    "permission": {
      "type":"string",
      "target":"",
      "source":"url/to/authors.json",
      "path":"$..role"
    },
    "created": {
      "type":"string",
      "target":"",
      "source":"url/to/authors.json",
      "path":"$..role"
    },
    "_groupMembers": {
        "type":"array",
        "target":null,
        "source":"",
        "path":""
    },
    "type":{
      "type":"_constant",
      "target":"string",
      "source":"string",
      "path":"Note"
    },
    "title": {
        "type":"string",
        "target":"",
        "source":"url/to/authors.json",
        "path":"$..role"
    },
    "keywords": {
        "type":"array",
        "target":null,
        "source":"",
        "path":""
    },
    "data": {
        "type":"object",
        "target":{
             "body":{
                "type":"string",
                "target":"",
                "source":"url/to/authors.json/$..role",
                "path":"ub path"
            }
        },
        "source":"url/to/authors.json",
        "path":"$..role"

    },
    "modified": {
        "type":"string",
        "target":"",
        "source":"url/to/authors.json",
        "path":"$..role"
    },
    "text4search": {
        "type":"string",
        "target":"",
        "source":"url/to/authors.json",
        "path":"$..role"
    },
    "status": {
        "type":"string",
        "target":"",
        "source":"url/to/authors.json",
        "path":"$..role"
    }
};

var kf6_link1 = {
        "to": "57e2952ecfcbf3eb0fcd8597",
        "created": "2016-09-21T14:11:58.502Z",
        "type": "contains",
        "_from": {
            "type":"$ref",
            "target":{
                "type":"object",
                "target":"",
                "source":"",
                "path":"_id=from"
            },
            "source":"url/to/authors.json",
            "path":"$..role"
        },
        "_id": "57e2952ecfcbf3eb0fcd8599",
        "from": "57cdd71ec288f40d78f2fe8e",
        "_to": {
            "created": "2016-09-21T14:11:58.307Z",
            "type": "Note",
            "title": "",
            "status": "unsaved",
            "authors": [
                "57d452b9f2ab52ef08aeec83"
            ],
            "modified": "2016-09-21T14:11:58.307Z",
            "permission": "protected"
          }
        };
module.exports.kf6_authors = kf6_authors;
module.exports.kf6_contribution =kf6_contribution;
module.exports.kf6_link1 = kf6_link1;
