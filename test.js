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

// var def_view5 = {
//   id:"/view5",
//   type:"object",
//   source:"/",
//   query:"[*]",
//   properties:{
//     buildOns:{
//       type:"array",
//       items:{
//         $ref:"/view5/buildons5"
//       }
//     },
//     locked:{type:"string"},
//     guid:{type:"string"},
//     title:{type:"string"},
//     created:{type:"string"},
//     modified:{type:"string"},
//     sectionGuid:{type:"string"},
//     viewPostRefs:{
//       type:"array",
//       items:{
//         $ref:"/view5/viewpostrefs5"
//       }
//     },
//     linkedViewReferences:{type:"string"},
//     authors:{type:"string"},
//     active:{type:"string"},
//     settingInfo:{type:"string"},
//     primaryAuthorId:{type:"string"},
//     published:{type:"string"}
//   }
// };
//
//
// var data5 = jf.readFileSync('kf5viewpost.json');
// var f = function (){
//   var id = "/view5/viewpostrefs5";
//   var q = "[*][viewPostRefs][postInfo][authors]";
//   var r = jq(q,{data:data5}).value;
//
// var count = {};
// for (var i = 0; i < r.length; i++) {
//   if(count[r[i].guid]){
//     count[r[i].guid] ++;
//   }
//   else{
//     count[r[i].guid] = 1;
//   }
// }
//
//   return Object.keys(count).length;
// }
//
// var data5 = jf.readFileSync('kf5viewpost.json');
//
//
//
// console.log(f());

var d = {
    "buildOns": [
        {
            "guid": "1cb96888-cf4b-495f-a572-7c327bfdea32",
            "buildsOn": "2a068c41-70b7-4a22-a3ee-ddf63a676308",
            "built": "9244ce10-e1f6-4e02-9939-3917f82cc6e1",
            "created": "Sep 28, 2015 2:58:06 PM"
        },
        {
            "guid": "4f814f83-a1c0-4f2d-b289-459920da01dc",
            "buildsOn": "ddb0114f-fde9-4fc7-bd07-9ed1a4ec834e",
            "built": "49598616-742c-4282-8514-6b13fc01213c",
            "created": "Dec 7, 2015 2:44:34 PM"
        },
        {
            "guid": "32e9b6a0-bc7c-4059-bcce-6d4eaa209f11",
            "buildsOn": "d396469c-fe4d-4db7-9b17-f7df85bd75ca",
            "built": "dd7909a7-a3dd-4391-8bf7-5960b8abc236",
            "created": "Nov 20, 2015 9:53:13 AM"
        },
        {
            "guid": "86108247-eacf-4a15-8ef7-38e7d35f417f",
            "buildsOn": "eb64b0e8-8d11-465e-bb2a-81f80483d49b",
            "built": "be3ce181-f318-450d-b8f2-97cdeac1c715",
            "created": "Nov 2, 2015 2:53:46 PM"
        },
        {
            "guid": "9d389408-7758-4ac6-9cc2-bdfcbab4fdb3",
            "buildsOn": "6bc1db77-a2c2-46c7-a48e-2fa23ef0dff2",
            "built": "a642b0cf-ce7c-44df-887c-19f417d11e1d",
            "created": "Nov 13, 2015 9:59:20 AM"
        },
        {
            "guid": "ea4a51ef-969c-4038-a0d0-9489bcafdf10",
            "buildsOn": "83218fa8-10ef-4321-bafe-6b6e46096d81",
            "built": "ddc8323a-180a-461d-be3e-3f199527de6a",
            "created": "Nov 11, 2015 10:01:30 AM"
        },
        {
            "guid": "587dba13-7c38-4f99-9028-38f9e45c2a87",
            "buildsOn": "b3f3e502-4ff4-4a0b-9cd9-0f8984a66688",
            "built": "a642b0cf-ce7c-44df-887c-19f417d11e1d",
            "created": "Nov 11, 2015 9:52:28 AM"
        },
        {
            "guid": "8836dfac-93ac-4352-a069-4ee7a5250113",
            "buildsOn": "0833f1e5-d378-49ce-aaf6-3b43a9b030a3",
            "built": "9f0d8e10-997e-47ea-8e2c-1d5da03d1a48",
            "created": "Dec 4, 2015 10:02:44 AM"
        },
        {
            "guid": "75a5dc5e-d07c-47fd-81ef-eea04de5b3ea",
            "buildsOn": "d514c1a5-89d4-4444-8858-ccf0e83bcee3",
            "built": "deea3f7b-7675-42e6-a215-0cb2f224d78e",
            "created": "Dec 7, 2015 2:41:58 PM"
        },
        {
            "guid": "9ce5dde2-e39d-44ba-8329-8e332fd3ee39",
            "buildsOn": "81007860-e6be-4485-8e43-51b6dc82207a",
            "built": "281d8f30-e606-4b64-bd89-f873cdecaa65",
            "created": "Nov 11, 2015 9:58:32 AM"
        },
        {
            "guid": "20e29848-8f13-45d9-b752-7c447a385936",
            "buildsOn": "364079a7-fd57-480c-a567-eacbdf7bbfe2",
            "built": "a723d554-4b0f-460f-b2ac-59007c1208cc",
            "created": "Nov 2, 2015 3:00:17 PM"
        },
        {
            "guid": "8a9bed9c-2692-4b14-b980-d728b58c06d6",
            "buildsOn": "11367484-324a-487d-b866-c8f354a74d42",
            "built": "35ac753f-134a-48a3-87f7-cd53ff36e40e",
            "created": "Nov 11, 2015 9:45:56 AM"
        },
        {
            "guid": "21b31839-63a5-483e-bc0d-fb6e886c0821",
            "buildsOn": "a26eacf7-c1f7-4e70-804d-7e0f4df87355",
            "built": "5c5d87cc-bfa4-4514-9901-09539d77dbbe",
            "created": "Sep 29, 2015 12:25:52 PM"
        },
        {
            "guid": "b3c43098-c460-4345-8cdd-9429809bb47e",
            "buildsOn": "7656c592-4722-465e-9cbf-3f3b35bdfa88",
            "built": "a642b0cf-ce7c-44df-887c-19f417d11e1d",
            "created": "Nov 13, 2015 10:08:25 AM"
        },
        {
            "guid": "484a7014-07f9-4af5-8aff-23bccdbf0a43",
            "buildsOn": "9e823bca-ae94-4bee-b063-7c2c1acd8d0a",
            "built": "fb395b87-4f98-4be7-8f45-14cf3fbff0d9",
            "created": "Oct 23, 2015 10:19:29 AM"
        },
        {
            "guid": "ae09e59e-50ab-46ba-a9bb-1ebe78c8eac7",
            "buildsOn": "9f0d8e10-997e-47ea-8e2c-1d5da03d1a48",
            "built": "83218fa8-10ef-4321-bafe-6b6e46096d81",
            "created": "Nov 20, 2015 9:56:26 AM"
        },
        {
            "guid": "79398928-b65b-4a80-9b04-dc83225894bb",
            "buildsOn": "47f445b0-0f5a-4c8a-a9bd-e9d7752e1c7b",
            "built": "b3376376-f356-4d94-b4c3-002069bdd377",
            "created": "Sep 29, 2015 12:10:30 PM"
        },
        {
            "guid": "c4b37e31-3c86-4e81-9f1a-36bf670a261f",
            "buildsOn": "c410b1cf-8e31-4d1b-86eb-8b2c745b91ba",
            "built": "252eda29-ba62-4e5d-84d6-6ee430bdbf8e",
            "created": "Nov 2, 2015 2:59:12 PM"
        },
        {
            "guid": "c89709f9-db75-477a-9754-c079347d4e5b",
            "buildsOn": "8e42f5e6-05f3-4fc3-ade7-a1f3ce4a2769",
            "built": "0e88bc3c-5488-40fc-a261-7cc499223cdb",
            "created": "Sep 14, 2015 2:47:19 PM"
        },
        {
            "guid": "79865476-6f71-4093-83cb-811ad27c1f7c",
            "buildsOn": "252eda29-ba62-4e5d-84d6-6ee430bdbf8e",
            "built": "dbfbc6ed-d07c-4257-8f58-a108bb47273c",
            "created": "Nov 2, 2015 2:56:36 PM"
        },
        {
            "guid": "783e44cb-060b-4fdc-a0f7-8f52adc861de",
            "buildsOn": "59f057fc-448a-41aa-aeda-a493d2acd01c",
            "built": "de4c9f98-bf86-4933-91e6-c29329b5e371",
            "created": "Oct 23, 2015 10:19:10 AM"
        },
        {
            "guid": "3bfb2c92-13d9-4acd-8f01-5c5a4d90263e",
            "buildsOn": "2b14f42e-f63c-4eda-bb72-55a0b889e10e",
            "built": "c3dacb70-d8dd-4540-b6d8-5087ee459dc6",
            "created": "Nov 20, 2015 8:20:16 AM"
        },
        {
            "guid": "f450a3a2-78fb-4a05-b409-609612a56ef6",
            "buildsOn": "5ee4274e-f53d-4a8d-a1c6-7cc4fc20a2ab",
            "built": "63e50d79-198d-43d8-a462-ba10305e8183",
            "created": "Sep 28, 2015 2:54:47 PM"
        },
        {
            "guid": "364bb0ce-c44c-447f-a5ce-395ae614d023",
            "buildsOn": "6cf27309-782b-4aed-b473-4014a953f1e0",
            "built": "a642b0cf-ce7c-44df-887c-19f417d11e1d",
            "created": "Nov 11, 2015 9:56:23 AM"
        },
        {
            "guid": "84b47c69-17fb-44fc-96af-f8da3159a317",
            "buildsOn": "f589d09e-994a-4977-8e36-34e5e2dacdb8",
            "built": "35ac753f-134a-48a3-87f7-cd53ff36e40e",
            "created": "Nov 11, 2015 9:38:35 AM"
        },
        {
            "guid": "f1628ef0-3076-4311-abf6-81d41b4a1ac8",
            "buildsOn": "783ca0c3-5743-49a3-9034-39b97e7350e9",
            "built": "a642b0cf-ce7c-44df-887c-19f417d11e1d",
            "created": "Nov 11, 2015 9:53:44 AM"
        },
        {
            "guid": "f914b1bb-b933-45ea-a7d1-43457e1bfbd7",
            "buildsOn": "7e857d2c-c1b9-4a3b-8a72-966a4c271ed7",
            "built": "252eda29-ba62-4e5d-84d6-6ee430bdbf8e",
            "created": "Nov 13, 2015 10:07:26 AM"
        },
        {
            "guid": "76c7e92b-cf14-4374-97f0-282d52a76575",
            "buildsOn": "832130e2-fb9b-418f-b463-27b431cbb284",
            "built": "dd7909a7-a3dd-4391-8bf7-5960b8abc236",
            "created": "Oct 23, 2015 10:15:33 AM"
        },
        {
            "guid": "825eb940-55c3-476c-8742-f6ec2d8f753b",
            "buildsOn": "35ac753f-134a-48a3-87f7-cd53ff36e40e",
            "built": "c65aa17a-9b98-4c6b-ba1d-868c0a1c33b0",
            "created": "Nov 2, 2015 3:00:18 PM"
        },
        {
            "guid": "b49c0aab-ced2-491d-8372-e575a8a79623",
            "buildsOn": "5121edff-0b0d-4f0f-bdb3-1d3055376372",
            "built": "91422951-7cc0-4976-868b-1ac69379a5b8",
            "created": "Nov 11, 2015 9:55:25 AM"
        },
        {
            "guid": "725b1542-44a5-4950-8b6c-053b5d12e32c",
            "buildsOn": "d08aedd0-15cc-4a23-8f3d-9eabcac6bb17",
            "built": "cc630017-6fc2-4e0d-ad64-e5317d6e094c",
            "created": "Nov 19, 2015 4:57:53 PM"
        },
        {
            "guid": "6a1e49b3-ebc5-4021-b6a9-898d98214ae4",
            "buildsOn": "7495f958-8b1e-42cb-80e8-d5229d5fbc43",
            "built": "07d7e6e5-6952-4dd8-b87e-5ba0a0ec8efa",
            "created": "Nov 2, 2015 2:52:32 PM"
        },
        {
            "guid": "7b70f712-88a6-4fcb-8e9d-662da25ff522",
            "buildsOn": "34ddd70d-f84b-4fdf-aaf7-03d0fd2df856",
            "built": "96546204-0ea0-4d3c-a21d-89d92d2c25be",
            "created": "Sep 28, 2015 2:58:22 PM"
        },
        {
            "guid": "d8e6d50b-5c5f-4e66-93c8-fb03cd0e89a3",
            "buildsOn": "5e5d71f4-da71-45a3-a64d-359ca2cbbd7e",
            "built": "07d7e6e5-6952-4dd8-b87e-5ba0a0ec8efa",
            "created": "Oct 23, 2015 10:22:44 AM"
        },
        {
            "guid": "4aa330e5-906d-480b-8996-6df0f98ad41c",
            "buildsOn": "8fc40a62-712f-4cf6-a010-dd305ee2349f",
            "built": "292548a9-cad2-4b2c-ae00-7cc8bda604ba",
            "created": "Dec 4, 2015 10:08:42 AM"
        },
        {
            "guid": "0bede810-cb90-4764-84a8-ee5a33d50c8a",
            "buildsOn": "d1d01eeb-a06a-44ee-ad0b-d77b4a75a029",
            "built": "df2bc54c-5251-4d31-9f1c-be3d4f6f5bc5",
            "created": "Nov 11, 2015 9:35:17 AM"
        },
        {
            "guid": "0acd1dd6-b17a-406d-8115-e33450a38c5a",
            "buildsOn": "aef5bb21-fee4-4e8b-aa5e-45c48eec460f",
            "built": "bc6396a7-9d27-4e0b-a143-a8464e7a4d66",
            "created": "Dec 4, 2015 9:58:26 AM"
        },
        {
            "guid": "0ed6c488-f705-400c-ab96-1cafde101d18",
            "buildsOn": "be2f1edd-8c8f-4553-b4fa-f8e44bcb0059",
            "built": "f290626c-c020-46bb-bd10-0795fa699451",
            "created": "Sep 14, 2015 2:48:18 PM"
        },
        {
            "guid": "38be4fb3-5798-40cb-85a7-c6fe04bdf72f",
            "buildsOn": "c973266b-df8d-48e2-9b83-aaac9970bbe5",
            "built": "dd7909a7-a3dd-4391-8bf7-5960b8abc236",
            "created": "Sep 13, 2015 5:05:24 PM"
        },
        {
            "guid": "849ff23d-d966-411b-949c-1fec6c6011ed",
            "buildsOn": "51235b6a-7a69-47c0-96d8-5f868eb8ebb1",
            "built": "11367484-324a-487d-b866-c8f354a74d42",
            "created": "Nov 13, 2015 9:57:08 AM"
        },
        {
            "guid": "f023b901-f717-4dad-b0f4-2bb20a3c2636",
            "buildsOn": "2b14f42e-f63c-4eda-bb72-55a0b889e10e",
            "built": "c3dacb70-d8dd-4540-b6d8-5087ee459dc6",
            "created": "Nov 20, 2015 8:20:16 AM"
        },
        {
            "guid": "2e752d01-6e10-4e66-91ee-bcaecd83ab7e",
            "buildsOn": "b97573f0-27c5-4a3f-af47-22b0f0172ee4",
            "built": "dd7909a7-a3dd-4391-8bf7-5960b8abc236",
            "created": "Sep 29, 2015 12:15:56 PM"
        },
        {
            "guid": "c0c6c0b5-5002-40f2-b31e-3f2e4cc082c9",
            "buildsOn": "8ac12531-ba9a-441a-b296-caa38bdb13bd",
            "built": "0e88bc3c-5488-40fc-a261-7cc499223cdb",
            "created": "Nov 20, 2015 9:54:48 AM"
        },
        {
            "guid": "45d0d32f-983c-4d68-ad34-45292da16c20",
            "buildsOn": "8ca9928e-0ca6-49be-9e1b-e7ec7751cc86",
            "built": "dd7909a7-a3dd-4391-8bf7-5960b8abc236",
            "created": "Sep 13, 2015 5:08:28 PM"
        },
        {
            "guid": "b84f9b40-b93a-40e8-b74c-306862c3525c",
            "buildsOn": "360647aa-70f1-4a98-8273-51170bb4747d",
            "built": "d8830843-54ea-4b3e-aa80-5586572a5dc4",
            "created": "Sep 14, 2015 2:48:05 PM"
        },
        {
            "guid": "fa6f87fc-c347-41c0-9395-bdfac8e2bc55",
            "buildsOn": "4dd48e5d-cf9c-44d0-ba59-f1d8d78aca31",
            "built": "ddf1ed76-c97b-47ad-9310-545e4ab34583",
            "created": "Sep 14, 2015 2:56:30 PM"
        },
        {
            "guid": "5aff635b-d097-4f0a-a729-4568306c69f3",
            "buildsOn": "208270ae-7f74-4553-bdff-f66a6ffa12f3",
            "built": "d1d01eeb-a06a-44ee-ad0b-d77b4a75a029",
            "created": "Dec 4, 2015 10:07:33 AM"
        },
        {
            "guid": "75a967b0-7a3c-4a09-9aa8-e920fe2b89df",
            "buildsOn": "f51ebd2d-a4a4-4bc3-bffd-1739195bb1b1",
            "built": "03caf663-2a4c-45a9-b161-c2baead808dc",
            "created": "Sep 29, 2015 12:23:04 PM"
        },
        {
            "guid": "a0256de6-948a-4744-b860-1b4c9f6c194e",
            "buildsOn": "d176bc45-51b6-4921-a9ab-1a83cb331371",
            "built": "dd7909a7-a3dd-4391-8bf7-5960b8abc236",
            "created": "Sep 14, 2015 2:52:46 PM"
        },
        {
            "guid": "ae97c1a7-b43c-4204-8364-a9ed0b169724",
            "buildsOn": "2b7b4f47-cb30-459a-8c14-bc1591bfad99",
            "built": "d2959f41-6eb6-4df2-b073-57b3d7e89440",
            "created": "Nov 11, 2015 9:46:23 AM"
        },
        {
            "guid": "7749e9c4-69fe-4c6c-b088-064415c5b080",
            "buildsOn": "b2c9b67f-81d5-41a4-95bf-5e8f62df58bc",
            "built": "96546204-0ea0-4d3c-a21d-89d92d2c25be",
            "created": "Oct 23, 2015 10:09:19 AM"
        },
        {
            "guid": "2752f77e-dc32-42f7-8da2-10a4c40e3252",
            "buildsOn": "e5fb5aea-4f5d-4e02-b3dc-52ef7789742a",
            "built": "eb02cd82-aa65-4ff4-b000-2bf21c627530",
            "created": "Nov 11, 2015 9:46:55 AM"
        },
        {
            "guid": "2ab80b82-8fb0-4e4b-b2a6-c880ba171ac7",
            "buildsOn": "a4a822ed-de91-441d-8099-bb2886c4d97b",
            "built": "00f8faed-f024-46fc-96a2-e9a85ba2de75",
            "created": "Nov 19, 2015 5:07:06 PM"
        },
        {
            "guid": "6daa1f7e-a93d-4db2-be6f-111b1478a3a0",
            "buildsOn": "281d8f30-e606-4b64-bd89-f873cdecaa65",
            "built": "a642b0cf-ce7c-44df-887c-19f417d11e1d",
            "created": "Nov 11, 2015 9:52:38 AM"
        },
        {
            "guid": "38fe881e-7b92-4e57-8bf0-e76f9025a4fc",
            "buildsOn": "ddc8323a-180a-461d-be3e-3f199527de6a",
            "built": "281d8f30-e606-4b64-bd89-f873cdecaa65",
            "created": "Nov 11, 2015 9:55:41 AM"
        },
        {
            "guid": "f6126497-52c9-418c-ab46-a404f68daffd",
            "buildsOn": "bc6396a7-9d27-4e0b-a143-a8464e7a4d66",
            "built": "d0f38027-0f1c-4b46-8cf4-e3c9c56f7932",
            "created": "Dec 4, 2015 9:55:14 AM"
        },
        {
            "guid": "f337c061-0b00-4fba-b1c9-36a3ae0b40a2",
            "buildsOn": "a4a822ed-de91-441d-8099-bb2886c4d97b",
            "built": "00f8faed-f024-46fc-96a2-e9a85ba2de75",
            "created": "Nov 19, 2015 5:07:06 PM"
        },
        {
            "guid": "1310e8d6-045a-4872-b2a5-1934fc29236f",
            "buildsOn": "156da250-8ce9-40e6-8485-26c6d152e028",
            "built": "c3dacb70-d8dd-4540-b6d8-5087ee459dc6",
            "created": "Nov 20, 2015 8:20:16 AM"
        },
        {
            "guid": "08150f3a-17e4-43ae-852b-c0fbd0f74702",
            "buildsOn": "f10e5178-d063-4a49-8189-04863c6d3f8f",
            "built": "6bc1db77-a2c2-46c7-a48e-2fa23ef0dff2",
            "created": "Nov 13, 2015 10:06:16 AM"
        },
        {
            "guid": "ce398066-9945-4e82-bb22-f23700f9f19f",
            "buildsOn": "d0aa2726-f910-4feb-8543-309cfc829fe5",
            "built": "dd7909a7-a3dd-4391-8bf7-5960b8abc236",
            "created": "Sep 13, 2015 5:10:40 PM"
        },
        {
            "guid": "ddbba36e-ccf5-4cf4-8f06-211efcb3d96f",
            "buildsOn": "d06399d3-ff79-45ed-8cea-b0a14788046e",
            "built": "cc630017-6fc2-4e0d-ad64-e5317d6e094c",
            "created": "Nov 19, 2015 4:57:53 PM"
        },
        {
            "guid": "5b767f66-a582-4526-8a31-88b45529b06d",
            "buildsOn": "156da250-8ce9-40e6-8485-26c6d152e028",
            "built": "c3dacb70-d8dd-4540-b6d8-5087ee459dc6",
            "created": "Nov 20, 2015 8:20:16 AM"
        },
        {
            "guid": "76d1a97d-7551-43e6-b544-52f633be183c",
            "buildsOn": "f7e3cd0c-a1e5-43b3-8732-77d9c0e8575a",
            "built": "aef5bb21-fee4-4e8b-aa5e-45c48eec460f",
            "created": "Dec 4, 2015 10:01:41 AM"
        },
        {
            "guid": "84215318-4361-4d11-a426-6d33e8758db3",
            "buildsOn": "386d5a4b-29b0-42a5-828c-59b93bc43b03",
            "built": "cc630017-6fc2-4e0d-ad64-e5317d6e094c",
            "created": "Nov 20, 2015 9:56:06 AM"
        },
        {
            "guid": "fce6cf0f-457c-4134-b0d7-026a9968a2c6",
            "buildsOn": "05b8e69c-3474-4cd0-ab77-fd35290a13dd",
            "built": "bc756140-c775-4ccb-8547-d41168347135",
            "created": "Nov 13, 2015 10:09:08 AM"
        },
        {
            "guid": "814f6369-727e-4930-8c37-c0bdb278cc6c",
            "buildsOn": "d08aedd0-15cc-4a23-8f3d-9eabcac6bb17",
            "built": "cc630017-6fc2-4e0d-ad64-e5317d6e094c",
            "created": "Nov 19, 2015 4:57:53 PM"
        },
        {
            "guid": "5646f0ee-fa4e-4701-8dc3-5ed08a9a7623",
            "buildsOn": "bc756140-c775-4ccb-8547-d41168347135",
            "built": "6cf27309-782b-4aed-b473-4014a953f1e0",
            "created": "Nov 11, 2015 9:59:24 AM"
        },
        {
            "guid": "601f6485-7685-4718-bd4f-6d412c331335",
            "buildsOn": "d5062585-5280-4ca7-ad70-51ecdeb98fd4",
            "built": "783ca0c3-5743-49a3-9034-39b97e7350e9",
            "created": "Nov 13, 2015 9:45:08 AM"
        },
        {
            "guid": "cf2e2b38-c9fc-462d-8323-c6eeac83d007",
            "buildsOn": "ba69e4ca-06af-4948-a7cc-3f665d9bbb42",
            "built": "de4c9f98-bf86-4933-91e6-c29329b5e371",
            "created": "Sep 29, 2015 12:26:53 PM"
        },
        {
            "guid": "af5054da-b529-4604-9c96-1c5af980ce67",
            "buildsOn": "ccc9742a-b264-44f7-b4ff-2a5040181781",
            "built": "b3376376-f356-4d94-b4c3-002069bdd377",
            "created": "Sep 29, 2015 12:20:58 PM"
        },
        {
            "guid": "6243c016-8ee2-472a-8021-541a04760452",
            "buildsOn": "d06399d3-ff79-45ed-8cea-b0a14788046e",
            "built": "cc630017-6fc2-4e0d-ad64-e5317d6e094c",
            "created": "Nov 19, 2015 4:57:53 PM"
        },
        {
            "guid": "cf8cf87e-3e73-4c26-8c5c-2c0c55569dc5",
            "buildsOn": "6502c689-f221-4ac1-9fdc-f4120a5a3b45",
            "built": "292548a9-cad2-4b2c-ae00-7cc8bda604ba",
            "created": "Dec 7, 2015 2:38:17 PM"
        },
        {
            "guid": "f831db82-d9f2-4540-800c-cdc18adfee87",
            "buildsOn": "e10f1f2b-6f8d-4dc1-931e-f3fb86d86e34",
            "built": "9244ce10-e1f6-4e02-9939-3917f82cc6e1",
            "created": "Sep 14, 2015 2:51:12 PM"
        },
        {
            "guid": "59fc6e6c-7476-4bde-a380-e76f9c684de5",
            "buildsOn": "04186d0b-f63a-4f8e-85cf-cdabec2d8324",
            "built": "292548a9-cad2-4b2c-ae00-7cc8bda604ba",
            "created": "Dec 4, 2015 10:05:47 AM"
        },
        {
            "guid": "574787cc-24ea-4c7b-a522-6b67b7b0fce9",
            "buildsOn": "1f56c755-fcc4-4e10-8ddb-791a75b7aeef",
            "built": "eb02cd82-aa65-4ff4-b000-2bf21c627530",
            "created": "Nov 11, 2015 9:47:30 AM"
        },
        {
            "guid": "7a47df69-923d-4b71-89c0-6a268b8f8067",
            "buildsOn": "6d4d6fc2-62b1-4927-9848-1e20bbe064ba",
            "built": "9005aaa5-d812-414a-bd31-cbbb0b39dfd9",
            "created": "Nov 11, 2015 9:39:12 AM"
        },
        {
            "guid": "f478a48e-40f2-4a39-9f2b-fbe313a36419",
            "buildsOn": "49598616-742c-4282-8514-6b13fc01213c",
            "built": "20ad4d7c-c8fb-4c49-a25f-e928c65de0bf",
            "created": "Dec 4, 2015 10:09:21 AM"
        },
        {
            "guid": "702e28b2-0f1b-4fa3-b3f0-14921aff2225",
            "buildsOn": "1979c9e5-52bb-4b98-9e75-98e5edd34b41",
            "built": "b3376376-f356-4d94-b4c3-002069bdd377",
            "created": "Sep 29, 2015 12:21:07 PM"
        },
        {
            "guid": "fc379faa-0645-41fc-8b7e-e36ab07132f1",
            "buildsOn": "91422951-7cc0-4976-868b-1ac69379a5b8",
            "built": "a642b0cf-ce7c-44df-887c-19f417d11e1d",
            "created": "Nov 11, 2015 9:51:27 AM"
        },
        {
            "guid": "70fd8f9e-33ba-4d61-950a-672cbaf57051",
            "buildsOn": "eb02cd82-aa65-4ff4-b000-2bf21c627530",
            "built": "c2c11e47-c2fa-47d9-b95a-28ba545313ad",
            "created": "Nov 11, 2015 9:42:44 AM"
        },
        {
            "guid": "0e5c594a-d4d6-4790-98d2-04b2f91eb795",
            "buildsOn": "a723d554-4b0f-460f-b2ac-59007c1208cc",
            "built": "dd7909a7-a3dd-4391-8bf7-5960b8abc236",
            "created": "Sep 13, 2015 5:02:47 PM"
        },
        {
            "guid": "83a894fe-a6e8-4325-bc0b-bee48c5867d2",
            "buildsOn": "20ad4d7c-c8fb-4c49-a25f-e928c65de0bf",
            "built": "f7e3cd0c-a1e5-43b3-8732-77d9c0e8575a",
            "created": "Dec 4, 2015 10:03:55 AM"
        },
        {
            "guid": "855cea50-24ab-4f9b-8057-2c616fedbefc",
            "buildsOn": "b211c45c-9c12-48ae-9d3e-b1ee59565d59",
            "built": "47f445b0-0f5a-4c8a-a9bd-e9d7752e1c7b",
            "created": "Sep 29, 2015 12:16:27 PM"
        },
        {
            "guid": "7f0dc804-d46e-402d-bb43-0144c79ae92b",
            "buildsOn": "3b9d8b4b-a25f-4b87-a19d-bbcec74ff6bb",
            "built": "0e88bc3c-5488-40fc-a261-7cc499223cdb",
            "created": "Nov 11, 2015 9:41:29 AM"
        },
        {
            "guid": "6156d70a-06f8-4bcc-a541-f88dffec55ef",
            "buildsOn": "c8b5fdd9-fbd3-428f-a464-b470021a86bc",
            "built": "67230688-d18b-4e06-8cc4-c577ed8dd742",
            "created": "Nov 20, 2015 9:58:39 AM"
        },
        {
            "guid": "df14c258-a180-435a-9368-c6fe19deaa62",
            "buildsOn": "f290626c-c020-46bb-bd10-0795fa699451",
            "built": "0e88bc3c-5488-40fc-a261-7cc499223cdb",
            "created": "Sep 14, 2015 2:44:22 PM"
        },
        {
            "guid": "7289bed3-0017-4c34-8fde-344b5d126773",
            "buildsOn": "6d94851d-7245-4fa9-a1ca-bf8f890355a7",
            "built": "63e50d79-198d-43d8-a462-ba10305e8183",
            "created": "Sep 14, 2015 2:51:28 PM"
        },
        {
            "guid": "1653e7a6-910f-493f-8e78-e8fc1bd2271e",
            "buildsOn": "733e7249-a4df-489c-9f9c-06a0100aaca6",
            "built": "ef0c815b-03a8-4f8d-9ca2-d55c20b14e6b",
            "created": "Nov 2, 2015 3:00:19 PM"
        },
        {
            "guid": "9e1fcf91-9122-4b3a-b220-f5ebe4d8e805",
            "buildsOn": "d0f38027-0f1c-4b46-8cf4-e3c9c56f7932",
            "built": "292548a9-cad2-4b2c-ae00-7cc8bda604ba",
            "created": "Dec 4, 2015 9:51:19 AM"
        },
        {
            "guid": "c08e4bf8-42e9-4a95-8c14-7e25c9a6122c",
            "buildsOn": "7c6a5497-6caf-454a-9e8c-473dafe4f626",
            "built": "83218fa8-10ef-4321-bafe-6b6e46096d81",
            "created": "Nov 20, 2015 10:03:56 AM"
        },
        {
            "guid": "57d1ba1e-6ef9-4631-b595-82e798d87b3e",
            "buildsOn": "ec6852e2-7377-46fc-aedc-e5042af627e5",
            "built": "3826f62c-a8ed-4982-9e12-cf0e501c2a4e",
            "created": "Sep 29, 2015 12:15:56 PM"
        },
        {
            "guid": "8e7465ab-c31b-4501-b108-3a4847be879f",
            "buildsOn": "9005aaa5-d812-414a-bd31-cbbb0b39dfd9",
            "built": "fb395b87-4f98-4be7-8f45-14cf3fbff0d9",
            "created": "Nov 11, 2015 9:36:52 AM"
        },
        {
            "guid": "9b409f04-5858-4be5-938b-75140c065939",
            "buildsOn": "05aad48c-bf54-4fe2-bf43-505c786ba251",
            "built": "07d7e6e5-6952-4dd8-b87e-5ba0a0ec8efa",
            "created": "Sep 28, 2015 2:59:10 PM"
        },
        {
            "guid": "e877b508-1cfa-4fcb-be06-94e7a5ab319b",
            "buildsOn": "cc89f3f2-cc5e-4575-8b3b-08eb7080277e",
            "built": "a642b0cf-ce7c-44df-887c-19f417d11e1d",
            "created": "Nov 20, 2015 9:47:33 AM"
        },
        {
            "guid": "78087b41-60b4-4ec2-89c7-ec6875bd8a7a",
            "buildsOn": "07ebefd8-5d96-4db2-b82e-2d84f3462ad2",
            "built": "292548a9-cad2-4b2c-ae00-7cc8bda604ba",
            "created": "Dec 4, 2015 9:54:57 AM"
        },
        {
            "guid": "01176e4b-1ab2-499e-8b2d-dc37f969dbbf",
            "buildsOn": "6e8fb2fb-aab4-41fd-ba42-61504bf86ed6",
            "built": "d19d71a1-ac27-4bde-b2d3-4dbd535ccfdd",
            "created": "Nov 11, 2015 9:49:23 AM"
        },
        {
            "guid": "52c1569f-8a50-4565-8d2b-4a9dea521695",
            "buildsOn": "1057193a-11f9-4ff4-8d15-e99ceaaa7b6e",
            "built": "e10f1f2b-6f8d-4dc1-931e-f3fb86d86e34",
            "created": "Dec 4, 2015 10:09:04 AM"
        },
        {
            "guid": "0c6e5d07-f0a8-452e-9021-15b28c42d500",
            "buildsOn": "a48adf5a-4ecc-4d1a-8c10-b03b4a4d451e",
            "built": "0e88bc3c-5488-40fc-a261-7cc499223cdb",
            "created": "Sep 29, 2015 12:28:11 PM"
        }
    ],
    "guid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
    "locked": false,
    "title": "Light: Sun Space and Satellites",
    "created": "Sep 8, 2015 1:36:47 PM",
    "modified": "Nov 19, 2015 5:05:02 PM",
    "sectionGuid": "254ede30-2164-4d22-899e-8a500cfe3d82",
    "viewPostRefs": [
        {
            "statusForAuthor": {
                "postGuid": "ae4edf8e-a605-4dda-8b0b-200bce093835",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_54da03df-c449-4bbf-bdfe-bf83cb5f49eb_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>-&nbsp;<span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_54da03df-c449-4bbf-bdfe-bf83cb5f49eb_content\" class=\"kfSupportContent\"></span>As you read this note there is a slight chance a fireball just crashed into earth. now are you wondering. <em>why aren't we dead? </em>the atmosphere; It's like we are endlessly battling a dragon and we block every fireball it sends. although sometimes we are too slow. And&nbsp;<em>THAT'S</em> how the dinosaurs died. And&nbsp;<em>THAT'S </em>how the 7 continents where made. and&nbsp;<em>THAT'S </em>how there's a big meteor bump in china. now who <em>sends</em> these fireballs.</p>\n<p><span style=\"font-family: verdana,geneva;\"><span style=\"font-size: 36pt;\">THE SUN.</span>- </span><span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_54da03df-c449-4bbf-bdfe-bf83cb5f49eb_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "ae4edf8e-a605-4dda-8b0b-200bce093835",
                "riseAbove": false,
                "attachments": [],
                "title": "The dark side of the sun",
                "created": "Sep 29, 2015 12:12:03 PM",
                "modified": "Sep 29, 2015 12:25:46 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Alexander",
                        "lastName": "H",
                        "guid": "af22be6c-2092-47af-9f00-87b472360119",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Alexander"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "af22be6c-2092-47af-9f00-87b472360119",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "ae4edf8e-a605-4dda-8b0b-200bce093835",
                "point": {
                    "y": 368,
                    "x": 229
                }
            },
            "rotation": 0.0,
            "guid": "de4c9f98-bf86-4933-91e6-c29329b5e371",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "8fc69ea9-e8ca-4aaa-b32f-b98939dd5431",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_7389866e-169d-439d-923e-8c72b7cf4a5c_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- is if&nbsp;<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_7389866e-169d-439d-923e-8c72b7cf4a5c_content\" class=\"kfSupportContent\"> </span>you take 2 sticks and rub them together for a while and you get fire in like 1 hour.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_7389866e-169d-439d-923e-8c72b7cf4a5c_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "8fc69ea9-e8ca-4aaa-b32f-b98939dd5431",
                "riseAbove": false,
                "attachments": [],
                "title": "sticks to make fire",
                "created": "Sep 14, 2015 2:51:12 PM",
                "modified": "Nov 13, 2015 9:52:17 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Avery",
                        "lastName": "M",
                        "guid": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Avery"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "8fc69ea9-e8ca-4aaa-b32f-b98939dd5431",
                "point": {
                    "y": 106,
                    "x": 823
                }
            },
            "rotation": 0.0,
            "guid": "e10f1f2b-6f8d-4dc1-931e-f3fb86d86e34",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "ea73e588-4421-45a8-b554-250975031da4",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>Space &nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_7c19375a-6371-42ad-8dd1-0dbd81c38a3e_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>-how close have astronauts gotten to the sun.I probably&nbsp; going to guess 20 miles.</p>\n\n",
                "guid": "ea73e588-4421-45a8-b554-250975031da4",
                "riseAbove": false,
                "attachments": [],
                "title": "Space",
                "created": "Nov 11, 2015 9:45:14 AM",
                "modified": "Nov 20, 2015 9:39:02 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Harrisona",
                        "lastName": "A",
                        "guid": "d9dbd733-d6e8-48f0-9c48-561407b2f988",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Harrison"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "d9dbd733-d6e8-48f0-9c48-561407b2f988",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "ea73e588-4421-45a8-b554-250975031da4",
                "point": {
                    "y": 96,
                    "x": 515
                }
            },
            "rotation": 0.0,
            "guid": "a642b0cf-ce7c-44df-887c-19f417d11e1d",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "fef12a06-b0cb-4f27-9d7e-ed6cd5c57215",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_5e8ec943-f341-4f74-bfb1-db42608be9ef_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_5e8ec943-f341-4f74-bfb1-db42608be9ef_content\" class=\"kfSupportContent\"> </span>if there are satelite in space is there light in space?- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_5e8ec943-f341-4f74-bfb1-db42608be9ef_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "fef12a06-b0cb-4f27-9d7e-ed6cd5c57215",
                "riseAbove": false,
                "attachments": [],
                "title": "satelite in space ",
                "created": "Sep 14, 2015 2:36:52 PM",
                "modified": "Sep 14, 2015 2:42:12 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Avery",
                        "lastName": "M",
                        "guid": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Avery"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "fef12a06-b0cb-4f27-9d7e-ed6cd5c57215",
                "point": {
                    "y": 248,
                    "x": 828
                }
            },
            "rotation": 0.0,
            "guid": "0e88bc3c-5488-40fc-a261-7cc499223cdb",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "e0aef520-a88a-446e-b11c-efb4e8380b7b",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_7f92d903-3442-4ab8-ac0c-2ca04b2d3afc_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_7f92d903-3442-4ab8-ac0c-2ca04b2d3afc_content\" class=\"kfSupportContent\"> </span>is that if something moved at the speed of light-something <em>solid </em>that is-it would rip a hole in time in space. Like a black hole or a portal to a parallel universe! But if it was a portal then if you entered it it would collapse or... or if you got through you would destroy the both universes-or more-because&nbsp; 2 of you would be in the same place. I am not completely sure.&nbsp; - <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_7f92d903-3442-4ab8-ac0c-2ca04b2d3afc_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "e0aef520-a88a-446e-b11c-efb4e8380b7b",
                "riseAbove": false,
                "attachments": [],
                "title": "Danger of solid light speed",
                "created": "Oct 26, 2015 2:53:15 PM",
                "modified": "Nov 13, 2015 9:45:40 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Kingsley",
                        "lastName": "S",
                        "guid": "78c67bf2-95d2-42fe-911a-26168fa2a6f1",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Kingsley"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "78c67bf2-95d2-42fe-911a-26168fa2a6f1",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "e0aef520-a88a-446e-b11c-efb4e8380b7b",
                "point": {
                    "y": 351,
                    "x": 1458
                }
            },
            "rotation": 0.0,
            "guid": "be3ce181-f318-450d-b8f2-97cdeac1c715",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "46fb1c79-bb5a-4dc9-973a-a22343a4999a",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; &nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_f33d8602-3399-40c7-8afe-18f58ead0979_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_f33d8602-3399-40c7-8afe-18f58ead0979_content\" class=\"kfSupportContent\"> </span>how to make fire?- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_f33d8602-3399-40c7-8afe-18f58ead0979_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;<span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_ff8643f2-07df-4e92-bfcb-a265651737ee_content\" class=\"kfSupportContent\"></span></p>\n\n",
                "guid": "46fb1c79-bb5a-4dc9-973a-a22343a4999a",
                "riseAbove": false,
                "attachments": [],
                "title": "fire",
                "created": "Sep 14, 2015 2:48:53 PM",
                "modified": "Sep 14, 2015 2:49:56 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Husnain",
                        "lastName": "A",
                        "guid": "a3bc7829-1bd9-4dea-897b-d56fa6bc6ad1",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Husnain"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a3bc7829-1bd9-4dea-897b-d56fa6bc6ad1",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "46fb1c79-bb5a-4dc9-973a-a22343a4999a",
                "point": {
                    "y": 130,
                    "x": 849
                }
            },
            "rotation": 0.0,
            "guid": "9244ce10-e1f6-4e02-9939-3917f82cc6e1",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "52dea4fd-d635-4cb4-b6a0-c1205e4d0693",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": true,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "copierId": "de63ab28-39a5-4452-b96c-a145684cec50",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_05e3b7dc-2b62-4b35-926e-78d9afd9c12c_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_05e3b7dc-2b62-4b35-926e-78d9afd9c12c_content\" class=\"kfSupportContent\"> </span>I think that Antartica does not get summer because it is so far from the equator.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_05e3b7dc-2b62-4b35-926e-78d9afd9c12c_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "52dea4fd-d635-4cb4-b6a0-c1205e4d0693",
                "riseAbove": false,
                "attachments": [],
                "title": "The Cold",
                "created": "Nov 13, 2015 10:02:32 AM",
                "modified": "Nov 13, 2015 10:02:32 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Zara",
                        "lastName": "M",
                        "guid": "fa0b4d07-d51a-4a43-83d1-c2f56b09bb03",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Zara"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "fa0b4d07-d51a-4a43-83d1-c2f56b09bb03",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "52dea4fd-d635-4cb4-b6a0-c1205e4d0693",
                "point": {
                    "y": 380,
                    "x": 889
                }
            },
            "rotation": 0.0,
            "guid": "156da250-8ce9-40e6-8485-26c6d152e028",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "949aa6cf-e1ec-4ac9-b75a-af74696e7df4",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"883edd26-8ae4-489e-863e-60371392d672_40e5aa3e-db78-4a9b-9910-cc6d20d9cc75_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">A different theory</span> </span>- <span id=\"883edd26-8ae4-489e-863e-60371392d672_40e5aa3e-db78-4a9b-9910-cc6d20d9cc75_content\" class=\"kfSupportContent\"> </span>They say the dinosaurs were wiped out by 1 of the three... 1. a meteor 2. global warming 3.... I don't know. but it could be anyone of the 2.... or more.- <span id=\"883edd26-8ae4-489e-863e-60371392d672_40e5aa3e-db78-4a9b-9910-cc6d20d9cc75_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "949aa6cf-e1ec-4ac9-b75a-af74696e7df4",
                "riseAbove": false,
                "attachments": [],
                "title": "well..",
                "created": "Sep 29, 2015 12:26:53 PM",
                "modified": "Nov 13, 2015 9:49:56 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Kingsley",
                        "lastName": "S",
                        "guid": "78c67bf2-95d2-42fe-911a-26168fa2a6f1",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Kingsley"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "78c67bf2-95d2-42fe-911a-26168fa2a6f1",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "949aa6cf-e1ec-4ac9-b75a-af74696e7df4",
                "point": {
                    "y": 329,
                    "x": 201
                }
            },
            "rotation": 0.0,
            "guid": "ba69e4ca-06af-4948-a7cc-3f665d9bbb42",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "4d94f0d2-22e7-4bc6-bd31-52da25847352",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_fd7b58c6-40c3-419b-82a7-60869b0305e0_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_fd7b58c6-40c3-419b-82a7-60869b0305e0_content\" class=\"kfSupportContent\"> </span>What is light? how does it form? Are color so maraculous that they glow? (literely) &nbsp; - <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_fd7b58c6-40c3-419b-82a7-60869b0305e0_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "4d94f0d2-22e7-4bc6-bd31-52da25847352",
                "riseAbove": false,
                "attachments": [],
                "title": "what is it light",
                "created": "Sep 14, 2015 2:37:02 PM",
                "modified": "Nov 13, 2015 9:54:13 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Nicola",
                        "lastName": "P",
                        "guid": "4f21c14c-2992-4a33-967c-caa052984eb0",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Nicola"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "4f21c14c-2992-4a33-967c-caa052984eb0",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "4d94f0d2-22e7-4bc6-bd31-52da25847352",
                "point": {
                    "y": 427,
                    "x": 1360
                }
            },
            "rotation": 0.0,
            "guid": "f311c662-b6f9-4520-8f1f-5d08ec109cca",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "598ee768-bcd2-41c0-9f7a-123409b846d8",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_aa859c98-640e-4473-b1a3-8147c1888ea1_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_aa859c98-640e-4473-b1a3-8147c1888ea1_content\" class=\"kfSupportContent\"> </span>Is light faster then flash- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_aa859c98-640e-4473-b1a3-8147c1888ea1_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "598ee768-bcd2-41c0-9f7a-123409b846d8",
                "riseAbove": false,
                "attachments": [],
                "title": "flash",
                "created": "Nov 11, 2015 9:48:41 AM",
                "modified": "Nov 11, 2015 9:48:41 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Coen",
                        "lastName": "R",
                        "guid": "bf6fb158-8844-4727-866b-4d8ca3fe1723",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Coen"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "bf6fb158-8844-4727-866b-4d8ca3fe1723",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "598ee768-bcd2-41c0-9f7a-123409b846d8",
                "point": {
                    "y": 403,
                    "x": 1354
                }
            },
            "rotation": 0.0,
            "guid": "01605e4d-1c0a-48cb-bf6e-5b308c1cf875",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "91a9d3f5-c213-4354-90c5-34439dd95f19",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"883edd26-8ae4-489e-863e-60371392d672_586f1613-e315-46cd-ba82-c74af6bf4648_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">A different theory</span> </span>- I<span id=\"883edd26-8ae4-489e-863e-60371392d672_586f1613-e315-46cd-ba82-c74af6bf4648_content\" class=\"kfSupportContent\"></span> agree. in Canada's Wonderland there is a slide called \"The Black Hole\", it is completely back in the inside and the outside! But maybe other slides are white and the lights are off inside, And people just think it's black. {But I don't think that black is the word for \"Nothingness\"} - <span id=\"883edd26-8ae4-489e-863e-60371392d672_586f1613-e315-46cd-ba82-c74af6bf4648_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "91a9d3f5-c213-4354-90c5-34439dd95f19",
                "riseAbove": false,
                "attachments": [],
                "title": "the dark",
                "created": "Nov 20, 2015 9:58:39 AM",
                "modified": "Nov 20, 2015 10:01:15 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Ellau",
                        "lastName": "U",
                        "guid": "45b2876f-b4d8-4006-bc3c-c80983664244",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Ella"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "45b2876f-b4d8-4006-bc3c-c80983664244",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "91a9d3f5-c213-4354-90c5-34439dd95f19",
                "point": {
                    "y": 631,
                    "x": 574
                }
            },
            "rotation": 0.0,
            "guid": "c8b5fdd9-fbd3-428f-a464-b470021a86bc",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "c7bcbab3-dbb3-4c13-a264-7f617c02f273",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; &nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_7d4eb2c9-a79c-43d3-a251-07f83ee22149_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>-&nbsp;<span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_7d4eb2c9-a79c-43d3-a251-07f83ee22149_content\" class=\"kfSupportContent\"></span>How can light be natural?- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_7d4eb2c9-a79c-43d3-a251-07f83ee22149_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "c7bcbab3-dbb3-4c13-a264-7f617c02f273",
                "riseAbove": false,
                "attachments": [],
                "title": "All Artificial",
                "created": "Sep 29, 2015 12:28:25 PM",
                "modified": "Sep 29, 2015 12:28:25 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Alexander",
                        "lastName": "H",
                        "guid": "af22be6c-2092-47af-9f00-87b472360119",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Alexander"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "af22be6c-2092-47af-9f00-87b472360119",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "c7bcbab3-dbb3-4c13-a264-7f617c02f273",
                "point": {
                    "y": 335,
                    "x": 1341
                }
            },
            "rotation": 0.0,
            "guid": "2ee04659-726d-4640-af89-c42c81367697",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "8fa07427-8d5d-4247-bacc-41597ddb5d6b",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_fd80ebb6-f885-49a1-af5d-de3c06b88526_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- do your eyes reflect light?<span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_fd80ebb6-f885-49a1-af5d-de3c06b88526_content\" class=\"kfSupportContent\"></span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_fd80ebb6-f885-49a1-af5d-de3c06b88526_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_a6aad25e-c62a-423e-9164-882f353e8c03_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_a6aad25e-c62a-423e-9164-882f353e8c03_content\" class=\"kfSupportContent\"> </span>I think it does reflect light because when you look into someones eyes you see light and reflections.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_a6aad25e-c62a-423e-9164-882f353e8c03_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp; By Avery and Nicola</p>\n\n",
                "guid": "8fa07427-8d5d-4247-bacc-41597ddb5d6b",
                "riseAbove": false,
                "attachments": [],
                "title": "eyes",
                "created": "Dec 4, 2015 10:02:19 AM",
                "modified": "Dec 4, 2015 10:09:31 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Avery",
                        "lastName": "M",
                        "guid": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Avery"
                    },
                    {
                        "userName": "Nicola",
                        "lastName": "P",
                        "guid": "4f21c14c-2992-4a33-967c-caa052984eb0",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Nicola"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "8fa07427-8d5d-4247-bacc-41597ddb5d6b",
                "point": {
                    "y": 390,
                    "x": 411
                }
            },
            "rotation": 0.0,
            "guid": "e9fef998-075c-45ba-8b1f-34410751b079",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "a32c1a42-5760-4fb7-98f4-2b98978decfc",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_49ae3cb6-4be5-43f8-a5ae-6e9e23a7c957_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>-&nbsp;<span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_49ae3cb6-4be5-43f8-a5ae-6e9e23a7c957_content\" class=\"kfSupportContent\"></span><span style=\"font-family: comic sans ms,sans-serif;\">how many years do you think it will take until the sun burns out</span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_49ae3cb6-4be5-43f8-a5ae-6e9e23a7c957_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "a32c1a42-5760-4fb7-98f4-2b98978decfc",
                "riseAbove": false,
                "attachments": [],
                "title": "burns out",
                "created": "Nov 11, 2015 9:59:08 AM",
                "modified": "Nov 13, 2015 9:47:45 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Ellau",
                        "lastName": "U",
                        "guid": "45b2876f-b4d8-4006-bc3c-c80983664244",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Ella"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "45b2876f-b4d8-4006-bc3c-c80983664244",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "a32c1a42-5760-4fb7-98f4-2b98978decfc",
                "point": {
                    "y": 23,
                    "x": 209
                }
            },
            "rotation": 0.0,
            "guid": "a297ead6-7810-4e0e-988a-585089ed4d22",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "e89f7a11-ffa6-46a1-a1e3-2fb5fbb24f37",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": true,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "copierId": "de63ab28-39a5-4452-b96c-a145684cec50",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_727e69d4-6cf9-428d-8bf8-d9fa689805e4_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>-&nbsp;<span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_727e69d4-6cf9-428d-8bf8-d9fa689805e4_content\" class=\"kfSupportContent\"></span>i wonder why there is no summer in Antarctica- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_727e69d4-6cf9-428d-8bf8-d9fa689805e4_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "e89f7a11-ffa6-46a1-a1e3-2fb5fbb24f37",
                "riseAbove": false,
                "attachments": [],
                "title": "light antartica",
                "created": "Sep 29, 2015 12:22:31 PM",
                "modified": "Nov 13, 2015 9:52:45 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Husnain",
                        "lastName": "A",
                        "guid": "a3bc7829-1bd9-4dea-897b-d56fa6bc6ad1",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Husnain"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a3bc7829-1bd9-4dea-897b-d56fa6bc6ad1",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "e89f7a11-ffa6-46a1-a1e3-2fb5fbb24f37",
                "point": {
                    "y": 351,
                    "x": 861
                }
            },
            "rotation": 0.0,
            "guid": "c3dacb70-d8dd-4540-b6d8-5087ee459dc6",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "1adf72c9-3966-491f-9c5f-83273a3c4421",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp; <span id=\"f5a2f488-d05c-453d-8bbf-f4fe8bd9306b_e1a45895-0068-4235-87ad-6590d1fbc88c_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">Evidence</span> </span>- <span id=\"f5a2f488-d05c-453d-8bbf-f4fe8bd9306b_e1a45895-0068-4235-87ad-6590d1fbc88c_content\" class=\"kfSupportContent\"> </span>to make fire you can get a magnifling glass and put it to the sun and move and put the magnifling glass to the wood and there you get fire.Once at my old school we tried it and it worked we lit a leaf on fire.Lauren- <span id=\"f5a2f488-d05c-453d-8bbf-f4fe8bd9306b_e1a45895-0068-4235-87ad-6590d1fbc88c_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "1adf72c9-3966-491f-9c5f-83273a3c4421",
                "riseAbove": false,
                "attachments": [],
                "title": "how to make fire",
                "created": "Sep 28, 2015 2:58:06 PM",
                "modified": "Nov 13, 2015 9:47:08 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Laurenk",
                        "lastName": "K",
                        "guid": "76c4b72c-af48-4629-be90-e93be126e960",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Lauren"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "76c4b72c-af48-4629-be90-e93be126e960",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "1adf72c9-3966-491f-9c5f-83273a3c4421",
                "point": {
                    "y": 0,
                    "x": 1054
                }
            },
            "rotation": 0.0,
            "guid": "2a068c41-70b7-4a22-a3ee-ddf63a676308",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "2ad1a7d9-c1df-40cf-b3dd-89b9c9171814",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_564d3bde-c005-45c3-b800-9354d6aeaf21_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_564d3bde-c005-45c3-b800-9354d6aeaf21_content\" class=\"kfSupportContent\"> </span>how does fire have different colors like red, yellow, orange, and blue! how does it work?- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_564d3bde-c005-45c3-b800-9354d6aeaf21_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "2ad1a7d9-c1df-40cf-b3dd-89b9c9171814",
                "riseAbove": false,
                "attachments": [],
                "title": "how does the coler of fire work?",
                "created": "Sep 28, 2015 2:53:53 PM",
                "modified": "Sep 28, 2015 2:54:57 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Liviaw",
                        "lastName": "W",
                        "guid": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Livia"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "2ad1a7d9-c1df-40cf-b3dd-89b9c9171814",
                "point": {
                    "y": 387,
                    "x": 1292
                }
            },
            "rotation": 0.0,
            "guid": "07d7e6e5-6952-4dd8-b87e-5ba0a0ec8efa",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "2fefebd5-623a-4ec6-9b3b-bcb3da717086",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_8312f664-5fb4-4c7d-839b-dd7e75dcc9a4_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-There's light in the arctic.<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_8312f664-5fb4-4c7d-839b-dd7e75dcc9a4_content\" class=\"kfSupportContent\"></span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_8312f664-5fb4-4c7d-839b-dd7e75dcc9a4_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "2fefebd5-623a-4ec6-9b3b-bcb3da717086",
                "riseAbove": false,
                "attachments": [],
                "title": "light in arctic",
                "created": "Nov 11, 2015 9:48:11 AM",
                "modified": "Nov 11, 2015 9:48:11 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Danielca",
                        "lastName": "C",
                        "guid": "0081a70e-cd6b-425b-92f9-519daabab157",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Daniel"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "0081a70e-cd6b-425b-92f9-519daabab157",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "2fefebd5-623a-4ec6-9b3b-bcb3da717086",
                "point": {
                    "y": 352,
                    "x": 648
                }
            },
            "rotation": 0.0,
            "guid": "b2ae9c61-7a5a-43e4-9c2f-864b4b74d7b6",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "31e95708-3ebc-41f0-94ea-c2fd43e0ffe5",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_e20bc171-677c-4baf-9daa-12bea0f3b2cc_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>-If<span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_e20bc171-677c-4baf-9daa-12bea0f3b2cc_content\" class=\"kfSupportContent\"></span> we didn't have the sun we would not get food because food also powers us.As well as plants give us oxigen. If we didn't have the sun there would be no plants so we can breathe.- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_e20bc171-677c-4baf-9daa-12bea0f3b2cc_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "31e95708-3ebc-41f0-94ea-c2fd43e0ffe5",
                "riseAbove": false,
                "attachments": [],
                "title": "why the suns important",
                "created": "Sep 29, 2015 12:23:04 PM",
                "modified": "Nov 13, 2015 9:49:49 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Laurenk",
                        "lastName": "K",
                        "guid": "76c4b72c-af48-4629-be90-e93be126e960",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Lauren"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "76c4b72c-af48-4629-be90-e93be126e960",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "31e95708-3ebc-41f0-94ea-c2fd43e0ffe5",
                "point": {
                    "y": 262,
                    "x": 321
                }
            },
            "rotation": 0.0,
            "guid": "f51ebd2d-a4a4-4bc3-bffd-1739195bb1b1",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "959a040f-3bdd-4965-9eab-9b28e6cf4f98",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_2bff66e0-8c34-4144-b8fb-fce7a927abd1_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_2bff66e0-8c34-4144-b8fb-fce7a927abd1_content\" class=\"kfSupportContent\"> </span>i wonder how people make mirrors?- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_2bff66e0-8c34-4144-b8fb-fce7a927abd1_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "959a040f-3bdd-4965-9eab-9b28e6cf4f98",
                "riseAbove": false,
                "attachments": [],
                "title": "i wonder",
                "created": "Nov 11, 2015 9:37:42 AM",
                "modified": "Nov 11, 2015 9:37:42 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Husnain",
                        "lastName": "A",
                        "guid": "a3bc7829-1bd9-4dea-897b-d56fa6bc6ad1",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Husnain"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a3bc7829-1bd9-4dea-897b-d56fa6bc6ad1",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "959a040f-3bdd-4965-9eab-9b28e6cf4f98",
                "point": {
                    "y": 344,
                    "x": 1532
                }
            },
            "rotation": 0.0,
            "guid": "d19d71a1-ac27-4bde-b2d3-4dbd535ccfdd",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "fdc8eb7b-7c63-47bf-b0be-0880e0e7c06c",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_c984807c-b795-4c90-94e7-d845008b3a21_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_c984807c-b795-4c90-94e7-d845008b3a21_content\" class=\"kfSupportContent\"> </span>Thomas Edison was the firs one to discover the light bulb- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_c984807c-b795-4c90-94e7-d845008b3a21_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "fdc8eb7b-7c63-47bf-b0be-0880e0e7c06c",
                "riseAbove": false,
                "attachments": [],
                "title": "light",
                "created": "Dec 7, 2015 2:41:57 PM",
                "modified": "Dec 7, 2015 2:41:57 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Laurenk",
                        "lastName": "K",
                        "guid": "76c4b72c-af48-4629-be90-e93be126e960",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Lauren"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "76c4b72c-af48-4629-be90-e93be126e960",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "fdc8eb7b-7c63-47bf-b0be-0880e0e7c06c",
                "point": {
                    "y": 398,
                    "x": 1064
                }
            },
            "rotation": 0.0,
            "guid": "d514c1a5-89d4-4444-8858-ccf0e83bcee3",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "f6aa84f4-e3be-48bb-a4a8-ea0df9903844",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"883edd26-8ae4-489e-863e-60371392d672_5f96a2c2-886b-4870-9045-21bf8a73b83a_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">A different theory</span> </span>-&nbsp;<span id=\"883edd26-8ae4-489e-863e-60371392d672_5f96a2c2-886b-4870-9045-21bf8a73b83a_content\" class=\"kfSupportContent\"></span>lots and lots and lots of millions of light years away. the sun is so hot that we can feel it on earth so in space you have to stay very far away from the sun.- <span id=\"883edd26-8ae4-489e-863e-60371392d672_5f96a2c2-886b-4870-9045-21bf8a73b83a_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "f6aa84f4-e3be-48bb-a4a8-ea0df9903844",
                "riseAbove": false,
                "attachments": [],
                "title": "a different theory",
                "created": "Nov 13, 2015 10:06:15 AM",
                "modified": "Nov 13, 2015 10:06:15 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Kingsley",
                        "lastName": "S",
                        "guid": "78c67bf2-95d2-42fe-911a-26168fa2a6f1",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Kingsley"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "78c67bf2-95d2-42fe-911a-26168fa2a6f1",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "f6aa84f4-e3be-48bb-a4a8-ea0df9903844",
                "point": {
                    "y": 201,
                    "x": 313
                }
            },
            "rotation": 0.0,
            "guid": "f10e5178-d063-4a49-8189-04863c6d3f8f",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "802f13f2-1e62-46d5-b8a5-31a990bcfc0e",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; You would need the proper tools to do that.&nbsp; It looks like a pies of wood with a hole in the middle, and then there is a stick you put in the hole and you spin the stick until it gets hot. Then you get fire! </p>\n\n",
                "guid": "802f13f2-1e62-46d5-b8a5-31a990bcfc0e",
                "riseAbove": false,
                "attachments": [],
                "title": "proper tools",
                "created": "Dec 4, 2015 10:09:03 AM",
                "modified": "Dec 4, 2015 10:09:03 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Liviaw",
                        "lastName": "W",
                        "guid": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Livia"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "802f13f2-1e62-46d5-b8a5-31a990bcfc0e",
                "point": {
                    "y": 150,
                    "x": 916
                }
            },
            "rotation": 0.0,
            "guid": "1057193a-11f9-4ff4-8d15-e99ceaaa7b6e",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "de7e536e-4fc3-4280-896a-61c692649302",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_da5146aa-e1dc-40c5-972f-cdb06d0d49a2_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_da5146aa-e1dc-40c5-972f-cdb06d0d49a2_content\" class=\"kfSupportContent\"> </span>I think that the source of water, for example an ocean, reflects the sky. ( I know I sound crazy but think about it if your in a desert the sky is still blue) So I think instead of the sky reflecting off water its the opposite!~ - <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_da5146aa-e1dc-40c5-972f-cdb06d0d49a2_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "de7e536e-4fc3-4280-896a-61c692649302",
                "riseAbove": false,
                "attachments": [],
                "title": "why is water blue?",
                "created": "Sep 14, 2015 2:57:01 PM",
                "modified": "Nov 13, 2015 9:35:46 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Nicola",
                        "lastName": "P",
                        "guid": "4f21c14c-2992-4a33-967c-caa052984eb0",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Nicola"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "4f21c14c-2992-4a33-967c-caa052984eb0",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "de7e536e-4fc3-4280-896a-61c692649302",
                "point": {
                    "y": 414,
                    "x": 1374
                }
            },
            "rotation": 0.0,
            "guid": "4be72029-719b-4a40-990f-ba80cfb17d4f",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "58894f30-0b05-4d3b-9836-796229cabc18",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>You could go AWAY from the sun, OR You could smash into the sun, R.I.P. OR alive. &nbsp;</p>\n\n",
                "guid": "58894f30-0b05-4d3b-9836-796229cabc18",
                "riseAbove": false,
                "attachments": [],
                "title": "Yeah, or...",
                "created": "Nov 13, 2015 10:09:07 AM",
                "modified": "Nov 13, 2015 10:09:07 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Alexander",
                        "lastName": "H",
                        "guid": "af22be6c-2092-47af-9f00-87b472360119",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Alexander"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "af22be6c-2092-47af-9f00-87b472360119",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "58894f30-0b05-4d3b-9836-796229cabc18",
                "point": {
                    "y": 163,
                    "x": 686
                }
            },
            "rotation": 0.0,
            "guid": "05b8e69c-3474-4cd0-ab77-fd35290a13dd",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "269f256e-f5f6-4937-8b51-b034abc66da8",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": true,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "copierId": "de63ab28-39a5-4452-b96c-a145684cec50",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_d1f760eb-1be7-482c-bdf2-e6921655b360_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_d1f760eb-1be7-482c-bdf2-e6921655b360_content\" class=\"kfSupportContent\"> </span>I think that the sun gives off light because its sooooooooooooo hot that it gives off light.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_d1f760eb-1be7-482c-bdf2-e6921655b360_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "269f256e-f5f6-4937-8b51-b034abc66da8",
                "riseAbove": false,
                "attachments": [],
                "title": "Hot",
                "created": "Oct 23, 2015 10:19:42 AM",
                "modified": "Oct 23, 2015 10:19:42 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Stella",
                        "lastName": "G",
                        "guid": "5b7b31b5-ba40-43cc-aa78-b23ae5f652ce",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Stella"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "5b7b31b5-ba40-43cc-aa78-b23ae5f652ce",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "269f256e-f5f6-4937-8b51-b034abc66da8",
                "point": {
                    "y": 403,
                    "x": 205
                }
            },
            "rotation": 0.0,
            "guid": "d08aedd0-15cc-4a23-8f3d-9eabcac6bb17",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "0c3006a4-bdd6-4884-b951-edecddfc196a",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_1942cb35-aa22-4dc8-a924-71f7c71d9c96_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- is that light<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_1942cb35-aa22-4dc8-a924-71f7c71d9c96_content\" class=\"kfSupportContent\"> </span>it goes so fast nothing can catch up to it. - <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_1942cb35-aa22-4dc8-a924-71f7c71d9c96_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n\n",
                "guid": "0c3006a4-bdd6-4884-b951-edecddfc196a",
                "riseAbove": false,
                "attachments": [],
                "title": "so fast ",
                "created": "Sep 29, 2015 12:10:30 PM",
                "modified": "Nov 13, 2015 9:50:27 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Avery",
                        "lastName": "M",
                        "guid": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Avery"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "0c3006a4-bdd6-4884-b951-edecddfc196a",
                "point": {
                    "y": 384,
                    "x": 1317
                }
            },
            "rotation": 0.0,
            "guid": "47f445b0-0f5a-4c8a-a9bd-e9d7752e1c7b",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "e9ce4fe7-c9ac-4924-813d-4cc7b2593c0d",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_fda3f209-9ae8-41d0-82d6-fc3e987f5bf0_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_fda3f209-9ae8-41d0-82d6-fc3e987f5bf0_content\" class=\"kfSupportContent\"> </span>it is so bright.- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_fda3f209-9ae8-41d0-82d6-fc3e987f5bf0_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "e9ce4fe7-c9ac-4924-813d-4cc7b2593c0d",
                "riseAbove": false,
                "attachments": [],
                "title": "why it blinds you",
                "created": "Dec 7, 2015 2:44:33 PM",
                "modified": "Dec 7, 2015 2:44:33 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Laurenk",
                        "lastName": "K",
                        "guid": "76c4b72c-af48-4629-be90-e93be126e960",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Lauren"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "76c4b72c-af48-4629-be90-e93be126e960",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "e9ce4fe7-c9ac-4924-813d-4cc7b2593c0d",
                "point": {
                    "y": 435,
                    "x": 562
                }
            },
            "rotation": 0.0,
            "guid": "ddb0114f-fde9-4fc7-bd07-9ed1a4ec834e",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "b5166f12-9cac-4ccb-a100-e6d69bc52829",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_0afd9f35-7be5-4b29-b408-0ce6734042a2_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>-is that it hurts your eyes because the light rays are so strong that the light can burn your skin and your eyes.<span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_0afd9f35-7be5-4b29-b408-0ce6734042a2_content\" class=\"kfSupportContent\"></span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_0afd9f35-7be5-4b29-b408-0ce6734042a2_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "b5166f12-9cac-4ccb-a100-e6d69bc52829",
                "riseAbove": false,
                "attachments": [],
                "title": "Burning",
                "created": "Dec 4, 2015 9:54:56 AM",
                "modified": "Dec 4, 2015 9:55:39 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Harrisona",
                        "lastName": "A",
                        "guid": "d9dbd733-d6e8-48f0-9c48-561407b2f988",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Harrison"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "d9dbd733-d6e8-48f0-9c48-561407b2f988",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "b5166f12-9cac-4ccb-a100-e6d69bc52829",
                "point": {
                    "y": 44,
                    "x": 397
                }
            },
            "rotation": 0.0,
            "guid": "07ebefd8-5d96-4db2-b82e-2d84f3462ad2",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "963651d4-d958-4c21-99c5-b3ebe6d82ec8",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_b31fac6f-492b-45e5-bf9c-3a410b8793ef_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_b31fac6f-492b-45e5-bf9c-3a410b8793ef_content\" class=\"kfSupportContent\"> </span><span style=\"font-family: comic sans ms,sans-serif;\">what year was light created?</span></p>\n<p>{the answer can be an idea}- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_b31fac6f-492b-45e5-bf9c-3a410b8793ef_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "963651d4-d958-4c21-99c5-b3ebe6d82ec8",
                "riseAbove": false,
                "attachments": [],
                "title": "created",
                "created": "Nov 11, 2015 9:48:43 AM",
                "modified": "Nov 13, 2015 9:46:10 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Ellau",
                        "lastName": "U",
                        "guid": "45b2876f-b4d8-4006-bc3c-c80983664244",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Ella"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "45b2876f-b4d8-4006-bc3c-c80983664244",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "963651d4-d958-4c21-99c5-b3ebe6d82ec8",
                "point": {
                    "y": 530,
                    "x": 468
                }
            },
            "rotation": 0.0,
            "guid": "967561ab-4376-4541-8cd2-cc13aa019e0a",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "0d7566b0-be9e-4968-9c7b-0a2bdc6974dc",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_58c0fca5-37a2-4bfc-8055-010eb6335f5b_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>-what the first light was<span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_58c0fca5-37a2-4bfc-8055-010eb6335f5b_content\" class=\"kfSupportContent\"></span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_58c0fca5-37a2-4bfc-8055-010eb6335f5b_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "0d7566b0-be9e-4968-9c7b-0a2bdc6974dc",
                "riseAbove": false,
                "attachments": [],
                "title": "history of light",
                "created": "Nov 11, 2015 9:34:15 AM",
                "modified": "Nov 11, 2015 9:34:15 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Danielca",
                        "lastName": "C",
                        "guid": "0081a70e-cd6b-425b-92f9-519daabab157",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Daniel"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "0081a70e-cd6b-425b-92f9-519daabab157",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "0d7566b0-be9e-4968-9c7b-0a2bdc6974dc",
                "point": {
                    "y": 501,
                    "x": 77
                }
            },
            "rotation": 0.0,
            "guid": "6640b0b3-880c-4188-ad86-3e289382c4d9",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "ffea61ce-c2d7-4f8c-bacb-dc15d1984e4c",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_75fc0a7e-c59d-49e6-8bfb-58919688e7dd_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_75fc0a7e-c59d-49e6-8bfb-58919688e7dd_content\" class=\"kfSupportContent\"> </span>But why does brightness hurt?- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_75fc0a7e-c59d-49e6-8bfb-58919688e7dd_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "ffea61ce-c2d7-4f8c-bacb-dc15d1984e4c",
                "riseAbove": false,
                "attachments": [],
                "title": "brightness",
                "created": "Dec 4, 2015 9:55:13 AM",
                "modified": "Dec 4, 2015 9:55:13 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Ellau",
                        "lastName": "U",
                        "guid": "45b2876f-b4d8-4006-bc3c-c80983664244",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Ella"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "45b2876f-b4d8-4006-bc3c-c80983664244",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "ffea61ce-c2d7-4f8c-bacb-dc15d1984e4c",
                "point": {
                    "y": 166,
                    "x": 277
                }
            },
            "rotation": 0.0,
            "guid": "bc6396a7-9d27-4e0b-a143-a8464e7a4d66",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "53a661b9-861a-4dfc-9e0d-0a7d2e30d25d",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b6b71092-83fb-4ded-a6cd-68f0e974cded_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b6b71092-83fb-4ded-a6cd-68f0e974cded_content\" class=\"kfSupportContent\"> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b6b71092-83fb-4ded-a6cd-68f0e974cded_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;<span id=\"mce_1\"> </span>That is inpossible actuly! because we get hot in the summer FROM THE SUN, and we are like 3000000 miles away!!!! So that means that if you were 20 miles away you would burn in half a second!</p>\n\n",
                "guid": "53a661b9-861a-4dfc-9e0d-0a7d2e30d25d",
                "riseAbove": false,
                "attachments": [],
                "title": "too CLOSE",
                "created": "Nov 11, 2015 10:01:30 AM",
                "modified": "Nov 13, 2015 9:52:35 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Liviaw",
                        "lastName": "W",
                        "guid": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Livia"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "53a661b9-861a-4dfc-9e0d-0a7d2e30d25d",
                "point": {
                    "y": 21,
                    "x": 774
                }
            },
            "rotation": 0.0,
            "guid": "83218fa8-10ef-4321-bafe-6b6e46096d81",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "3ab1811e-3c09-4d3f-bbd7-167b9ffb67b0",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_835fe39e-5d1e-4291-b8d6-4b25c6cb671a_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- how many miles does the speed of light go? - <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_835fe39e-5d1e-4291-b8d6-4b25c6cb671a_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n\n",
                "guid": "3ab1811e-3c09-4d3f-bbd7-167b9ffb67b0",
                "riseAbove": false,
                "attachments": [],
                "title": "SOL?",
                "created": "Nov 13, 2015 9:59:18 AM",
                "modified": "Nov 13, 2015 10:02:10 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Alexander",
                        "lastName": "H",
                        "guid": "af22be6c-2092-47af-9f00-87b472360119",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Alexander"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "af22be6c-2092-47af-9f00-87b472360119",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "3ab1811e-3c09-4d3f-bbd7-167b9ffb67b0",
                "point": {
                    "y": 366,
                    "x": 1471
                }
            },
            "rotation": 0.0,
            "guid": "4f1743d3-9942-4486-87aa-0bfe5976b1e7",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "f5960ca9-e674-40dc-b349-cf935bfd375d",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_f12467a5-4c72-462c-8bf3-b1edc1cb58ae_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span><span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_f12467a5-4c72-462c-8bf3-b1edc1cb58ae_content\" class=\"kfSupportContent\"></span>is that - <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_f12467a5-4c72-462c-8bf3-b1edc1cb58ae_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp;&nbsp;&nbsp;</span> I know where you want to go if you go 2 miles away from the sun YOUR GRAVE!!!!!!!&nbsp; <span id=\"mce_1\">&nbsp;</span>&nbsp;&nbsp;</p>\n\n",
                "guid": "f5960ca9-e674-40dc-b349-cf935bfd375d",
                "riseAbove": false,
                "attachments": [],
                "title": "Dangerous",
                "created": "Nov 11, 2015 9:59:24 AM",
                "modified": "Nov 13, 2015 10:00:08 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Harrisona",
                        "lastName": "A",
                        "guid": "d9dbd733-d6e8-48f0-9c48-561407b2f988",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Harrison"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "d9dbd733-d6e8-48f0-9c48-561407b2f988",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "f5960ca9-e674-40dc-b349-cf935bfd375d",
                "point": {
                    "y": 187,
                    "x": 575
                }
            },
            "rotation": 0.0,
            "guid": "bc756140-c775-4ccb-8547-d41168347135",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "538bfdda-5e93-4747-a71b-c792c3445aeb",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"f5a2f488-d05c-453d-8bbf-f4fe8bd9306b_2a9e9f10-9065-487f-b991-30df9c234fe3_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">Evidence</span> </span>- Well, CONCRETE evidence. Some couple hundred millennia ago: A star exploded. (BIG BANG) And shattered into a couple thousand trillion bits. So those bits (Known as stardust) were the earth, sun and the planets. I call the star the \"Tessa\" The sun that made us all.&nbsp;</p>\n\n",
                "guid": "538bfdda-5e93-4747-a71b-c792c3445aeb",
                "riseAbove": false,
                "attachments": [],
                "title": "First things first.",
                "created": "Nov 11, 2015 9:47:26 AM",
                "modified": "Nov 11, 2015 9:51:58 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Alexander",
                        "lastName": "H",
                        "guid": "af22be6c-2092-47af-9f00-87b472360119",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Alexander"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "af22be6c-2092-47af-9f00-87b472360119",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "538bfdda-5e93-4747-a71b-c792c3445aeb",
                "point": {
                    "y": 211,
                    "x": 669
                }
            },
            "rotation": 0.0,
            "guid": "ff798826-83cb-4a08-a91b-46e571b19b70",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "2924d465-ae4a-4e8b-a8b6-d029202b0efa",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_1a04b3e1-26da-4e23-98da-3fa10d51d76d_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-&nbsp;<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_1a04b3e1-26da-4e23-98da-3fa10d51d76d_content\" class=\"kfSupportContent\"></span>I'm guessing that the stars show of some light... but it's pretty much black. maybe they put a headlight on he suit or something. - <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_1a04b3e1-26da-4e23-98da-3fa10d51d76d_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "2924d465-ae4a-4e8b-a8b6-d029202b0efa",
                "riseAbove": false,
                "attachments": [],
                "title": "way to see",
                "created": "Sep 14, 2015 2:47:19 PM",
                "modified": "Sep 14, 2015 2:47:37 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Alexander",
                        "lastName": "H",
                        "guid": "af22be6c-2092-47af-9f00-87b472360119",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Alexander"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "af22be6c-2092-47af-9f00-87b472360119",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "2924d465-ae4a-4e8b-a8b6-d029202b0efa",
                "point": {
                    "y": 206,
                    "x": 812
                }
            },
            "rotation": 0.0,
            "guid": "8e42f5e6-05f3-4fc3-ade7-a1f3ce4a2769",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "744fa3ef-7b03-452c-99b5-be19bae867a7",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; &nbsp; <span id=\"883edd26-8ae4-489e-863e-60371392d672_1e00713a-add9-42e3-9a94-4789f06afcd4_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">A different theory</span> </span>- - <span id=\"883edd26-8ae4-489e-863e-60371392d672_1e00713a-add9-42e3-9a94-4789f06afcd4_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_9df35c87-4799-4263-ba93-112489976246_content\" class=\"kfSupportContent\"> </span>20 miles away would melt you and ship. At least 300 miles away. The sun is that hot.- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_9df35c87-4799-4263-ba93-112489976246_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "744fa3ef-7b03-452c-99b5-be19bae867a7",
                "riseAbove": false,
                "attachments": [],
                "title": "melt",
                "created": "Nov 11, 2015 9:55:25 AM",
                "modified": "Nov 11, 2015 9:57:33 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Isaac",
                        "lastName": "F",
                        "guid": "de333b1d-c02d-4707-8bb5-807993df364e",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Isaac"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "de333b1d-c02d-4707-8bb5-807993df364e",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "744fa3ef-7b03-452c-99b5-be19bae867a7",
                "point": {
                    "y": 95,
                    "x": 764
                }
            },
            "rotation": 0.0,
            "guid": "5121edff-0b0d-4f0f-bdb3-1d3055376372",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "0e05f966-30b0-493f-b488-571819056c21",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": true,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "copierId": "de63ab28-39a5-4452-b96c-a145684cec50",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_2e96b128-f295-4f63-8ffa-613015a080b4_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_2e96b128-f295-4f63-8ffa-613015a080b4_content\" class=\"kfSupportContent\"> </span>how does the sun give of light <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_2e96b128-f295-4f63-8ffa-613015a080b4_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp; </p>\n\n",
                "guid": "0e05f966-30b0-493f-b488-571819056c21",
                "riseAbove": false,
                "attachments": [],
                "title": "sun",
                "created": "Oct 23, 2015 10:15:36 AM",
                "modified": "Oct 23, 2015 10:15:58 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Sami",
                        "lastName": "I",
                        "guid": "3510453f-a280-4d5d-b1f2-69b5a4fcf940",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Sam"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "3510453f-a280-4d5d-b1f2-69b5a4fcf940",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "0e05f966-30b0-493f-b488-571819056c21",
                "point": {
                    "y": 297,
                    "x": 311
                }
            },
            "rotation": 0.0,
            "guid": "cc630017-6fc2-4e0d-ad64-e5317d6e094c",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "c940ade8-714c-44e2-a7ce-0f50a6280d22",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; I would want to go to space and yes I agree with you 20 miles</p>\n\n",
                "guid": "c940ade8-714c-44e2-a7ce-0f50a6280d22",
                "riseAbove": false,
                "attachments": [],
                "title": "Yes",
                "created": "Nov 11, 2015 9:51:27 AM",
                "modified": "Nov 11, 2015 9:51:27 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Annas",
                        "lastName": "S",
                        "guid": "b296c05c-28e4-4261-8678-ce31f895cf51",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Anna"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "b296c05c-28e4-4261-8678-ce31f895cf51",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "c940ade8-714c-44e2-a7ce-0f50a6280d22",
                "point": {
                    "y": 84,
                    "x": 700
                }
            },
            "rotation": 0.0,
            "guid": "91422951-7cc0-4976-868b-1ac69379a5b8",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "a9376a0b-750b-4c52-9ef5-268116080da6",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;</p>\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_f0a040b3-e088-4eb6-850f-77c280dffdab_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_f0a040b3-e088-4eb6-850f-77c280dffdab_content\" class=\"kfSupportContent\"> </span>you don't get older if you travel at the seed off light!!!!</p>\n\n",
                "guid": "a9376a0b-750b-4c52-9ef5-268116080da6",
                "riseAbove": false,
                "attachments": [],
                "title": "lite",
                "created": "Sep 29, 2015 12:21:07 PM",
                "modified": "Sep 29, 2015 12:22:06 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Henrym",
                        "lastName": "M",
                        "guid": "00a13724-1126-4d5d-99db-6e34218b6264",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Henry"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "00a13724-1126-4d5d-99db-6e34218b6264",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "a9376a0b-750b-4c52-9ef5-268116080da6",
                "point": {
                    "y": 380,
                    "x": 1324
                }
            },
            "rotation": 0.0,
            "guid": "1979c9e5-52bb-4b98-9e75-98e5edd34b41",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "ea2fe437-7ea9-41b2-bca3-99a2ebb900bf",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_081d4505-2243-42cf-8a18-705a4e9017a5_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_081d4505-2243-42cf-8a18-705a4e9017a5_content\" class=\"kfSupportContent\"> </span>ware does light come from?&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_9219595f-a6da-45d0-95bd-07f1bb01083a_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_9219595f-a6da-45d0-95bd-07f1bb01083a_content\" class=\"kfSupportContent\"> </span>light comes from heat its so hot that some how it gives off light very cool I think that heat is so hot that it makes light - <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_9219595f-a6da-45d0-95bd-07f1bb01083a_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;&nbsp;</p>\n\n",
                "guid": "ea2fe437-7ea9-41b2-bca3-99a2ebb900bf",
                "riseAbove": false,
                "attachments": [],
                "title": "heat and light",
                "created": "Dec 4, 2015 9:53:39 AM",
                "modified": "Dec 4, 2015 9:57:08 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Toby",
                        "lastName": "F",
                        "guid": "a4bbb0d0-3ca5-4246-98c7-b39b452622d0",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Toby"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a4bbb0d0-3ca5-4246-98c7-b39b452622d0",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "ea2fe437-7ea9-41b2-bca3-99a2ebb900bf",
                "point": {
                    "y": 161,
                    "x": 384
                }
            },
            "rotation": 0.0,
            "guid": "ad5bdf72-434d-4b87-84b5-955148191053",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "37e2cbae-23be-402f-a88a-16c7d59a4fd6",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_4570c254-38c5-44b0-9848-dd0114d6f513_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-You would burn if you stand on the sun.<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_4570c254-38c5-44b0-9848-dd0114d6f513_content\" class=\"kfSupportContent\"></span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_4570c254-38c5-44b0-9848-dd0114d6f513_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "37e2cbae-23be-402f-a88a-16c7d59a4fd6",
                "riseAbove": false,
                "attachments": [],
                "title": "burning",
                "created": "Nov 11, 2015 9:42:04 AM",
                "modified": "Nov 20, 2015 9:54:24 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Danielca",
                        "lastName": "C",
                        "guid": "0081a70e-cd6b-425b-92f9-519daabab157",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Daniel"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "0081a70e-cd6b-425b-92f9-519daabab157",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "37e2cbae-23be-402f-a88a-16c7d59a4fd6",
                "point": {
                    "y": 360,
                    "x": 1488
                }
            },
            "rotation": 0.0,
            "guid": "d40ac548-1cb9-4739-9ff7-dd68daa7d54c",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "43609d51-e8fc-4cc0-8c36-c50b31b34aab",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_f361acca-e9a5-42c4-957f-e6c31288c2e9_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-&nbsp;<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_f361acca-e9a5-42c4-957f-e6c31288c2e9_content\" class=\"kfSupportContent\"></span>How fast is light- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_f361acca-e9a5-42c4-957f-e6c31288c2e9_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "43609d51-e8fc-4cc0-8c36-c50b31b34aab",
                "riseAbove": false,
                "attachments": [],
                "title": "fast",
                "created": "Oct 23, 2015 10:12:11 AM",
                "modified": "Oct 23, 2015 10:12:11 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Coen",
                        "lastName": "R",
                        "guid": "bf6fb158-8844-4727-866b-4d8ca3fe1723",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Coen"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "bf6fb158-8844-4727-866b-4d8ca3fe1723",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "43609d51-e8fc-4cc0-8c36-c50b31b34aab",
                "point": {
                    "y": 409,
                    "x": 1430
                }
            },
            "rotation": 0.0,
            "guid": "fb395b87-4f98-4be7-8f45-14cf3fbff0d9",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "70bd9e7a-046a-4c9f-8082-f53ade513fbc",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": true,
                "modified": "Dec 4, 2015 10:03:51 AM",
                "likes": false,
                "starred": false,
                "guid": "16dd133c-3ebf-4b73-a7f2-860166397441",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_38ba30bb-7768-480f-9766-e72f14423879_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_38ba30bb-7768-480f-9766-e72f14423879_content\" class=\"kfSupportContent\"> Lots of stars that makes some&nbsp; light and the earth might from cities and forest fires. </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_38ba30bb-7768-480f-9766-e72f14423879_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "70bd9e7a-046a-4c9f-8082-f53ade513fbc",
                "riseAbove": false,
                "attachments": [],
                "title": "earth lights",
                "created": "Sep 29, 2015 12:28:11 PM",
                "modified": "Nov 13, 2015 10:03:05 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Nicola",
                        "lastName": "P",
                        "guid": "4f21c14c-2992-4a33-967c-caa052984eb0",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Nicola"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "4f21c14c-2992-4a33-967c-caa052984eb0",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "70bd9e7a-046a-4c9f-8082-f53ade513fbc",
                "point": {
                    "y": 245,
                    "x": 717
                }
            },
            "rotation": 0.0,
            "guid": "a48adf5a-4ecc-4d1a-8c10-b03b4a4d451e",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "9ce9d2ed-1f4a-4032-90c4-8621c5e6298e",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_f02d0082-c2c5-4f40-a315-9086e5829c4f_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_f02d0082-c2c5-4f40-a315-9086e5829c4f_content\" class=\"kfSupportContent\"> </span>How did someone come up with the idea of the candle?- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_f02d0082-c2c5-4f40-a315-9086e5829c4f_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "9ce9d2ed-1f4a-4032-90c4-8621c5e6298e",
                "riseAbove": false,
                "attachments": [],
                "title": "Candle",
                "created": "Sep 29, 2015 12:15:56 PM",
                "modified": "Sep 29, 2015 12:15:56 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Zara",
                        "lastName": "M",
                        "guid": "fa0b4d07-d51a-4a43-83d1-c2f56b09bb03",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Zara"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "fa0b4d07-d51a-4a43-83d1-c2f56b09bb03",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "9ce9d2ed-1f4a-4032-90c4-8621c5e6298e",
                "point": {
                    "y": 511,
                    "x": 8
                }
            },
            "rotation": 0.0,
            "guid": "ec6852e2-7377-46fc-aedc-e5042af627e5",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "70df0db2-6e6b-4316-bf02-145d22b15ee2",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; &nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_43b6d2aa-4ba7-4531-9f74-dc51c14780c0_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_43b6d2aa-4ba7-4531-9f74-dc51c14780c0_content\" class=\"kfSupportContent\"> </span>Light can be many different colours- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_43b6d2aa-4ba7-4531-9f74-dc51c14780c0_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "70df0db2-6e6b-4316-bf02-145d22b15ee2",
                "riseAbove": false,
                "attachments": [],
                "title": "light colours!!!",
                "created": "Oct 23, 2015 10:17:45 AM",
                "modified": "Oct 23, 2015 10:17:45 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Danielca",
                        "lastName": "C",
                        "guid": "0081a70e-cd6b-425b-92f9-519daabab157",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Daniel"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "0081a70e-cd6b-425b-92f9-519daabab157",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "70df0db2-6e6b-4316-bf02-145d22b15ee2",
                "point": {
                    "y": 324,
                    "x": 1317
                }
            },
            "rotation": 0.0,
            "guid": "9a2b3804-49a9-4c24-a03c-4d33aaad8ca9",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "a8c41809-3d3b-4625-ab4c-17164f16fac5",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_7624e814-021e-4558-b57f-2d69ccb78fbe_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_7624e814-021e-4558-b57f-2d69ccb78fbe_content\" class=\"kfSupportContent\"> </span>I think not only would we not be able to see it would be to cold to live.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_7624e814-021e-4558-b57f-2d69ccb78fbe_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;&nbsp;</p>\n\n",
                "guid": "a8c41809-3d3b-4625-ab4c-17164f16fac5",
                "riseAbove": false,
                "attachments": [],
                "title": "to cold",
                "created": "Sep 29, 2015 12:15:56 PM",
                "modified": "Sep 29, 2015 12:15:56 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Toby",
                        "lastName": "F",
                        "guid": "a4bbb0d0-3ca5-4246-98c7-b39b452622d0",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Toby"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a4bbb0d0-3ca5-4246-98c7-b39b452622d0",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "a8c41809-3d3b-4625-ab4c-17164f16fac5",
                "point": {
                    "y": 186,
                    "x": 20
                }
            },
            "rotation": 0.0,
            "guid": "b97573f0-27c5-4a3f-af47-22b0f0172ee4",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "27ed9b65-333b-4d9c-8087-00f4fadea8eb",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_d004838c-f987-4fdd-bd08-00940a3099bf_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_d004838c-f987-4fdd-bd08-00940a3099bf_content\" class=\"kfSupportContent\"> </span>i would say light will always be faster than sound.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_d004838c-f987-4fdd-bd08-00940a3099bf_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "27ed9b65-333b-4d9c-8087-00f4fadea8eb",
                "riseAbove": false,
                "attachments": [],
                "title": "always",
                "created": "Oct 23, 2015 10:24:29 AM",
                "modified": "Oct 23, 2015 10:24:29 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Husnain",
                        "lastName": "A",
                        "guid": "a3bc7829-1bd9-4dea-897b-d56fa6bc6ad1",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Husnain"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a3bc7829-1bd9-4dea-897b-d56fa6bc6ad1",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "27ed9b65-333b-4d9c-8087-00f4fadea8eb",
                "point": {
                    "y": 404,
                    "x": 1405
                }
            },
            "rotation": 0.0,
            "guid": "11d091c5-2f1b-4d1a-838d-04b6c706967b",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "8c021e70-4c4f-4d2c-a9ba-d71bcb452227",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"883edd26-8ae4-489e-863e-60371392d672_ee8bf009-0be0-47ca-8ebd-1bc1516da283_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">A different theory</span> </span>-is that I think they would live after all they are in a spaceship.<span id=\"883edd26-8ae4-489e-863e-60371392d672_ee8bf009-0be0-47ca-8ebd-1bc1516da283_content\" class=\"kfSupportContent\"></span>- <span id=\"883edd26-8ae4-489e-863e-60371392d672_ee8bf009-0be0-47ca-8ebd-1bc1516da283_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "8c021e70-4c4f-4d2c-a9ba-d71bcb452227",
                "riseAbove": false,
                "attachments": [],
                "title": "Spaceship",
                "created": "Nov 13, 2015 9:45:08 AM",
                "modified": "Nov 13, 2015 9:45:08 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Harrisona",
                        "lastName": "A",
                        "guid": "d9dbd733-d6e8-48f0-9c48-561407b2f988",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Harrison"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "d9dbd733-d6e8-48f0-9c48-561407b2f988",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "8c021e70-4c4f-4d2c-a9ba-d71bcb452227",
                "point": {
                    "y": 102,
                    "x": 365
                }
            },
            "rotation": 0.0,
            "guid": "d5062585-5280-4ca7-ad70-51ecdeb98fd4",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "4ea73f6b-8890-4ba0-93e6-1fc2da08ba8c",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp; <span id=\"883edd26-8ae4-489e-863e-60371392d672_9b75351f-f77a-4f14-91b9-ed8ffee5b95d_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">A different theory</span> </span>- <span id=\"883edd26-8ae4-489e-863e-60371392d672_9b75351f-f77a-4f14-91b9-ed8ffee5b95d_content\" class=\"kfSupportContent\"> </span>- <span id=\"883edd26-8ae4-489e-863e-60371392d672_9b75351f-f77a-4f14-91b9-ed8ffee5b95d_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp; plants live on water earth and SUN. the plants create food and oxygen for us. a person can survive for 21 days without food. sun pretty much powers everything. including us.</p>\n\n",
                "guid": "4ea73f6b-8890-4ba0-93e6-1fc2da08ba8c",
                "riseAbove": false,
                "attachments": [],
                "title": "survival ",
                "created": "Sep 14, 2015 2:56:30 PM",
                "modified": "Sep 14, 2015 2:57:23 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Alexander",
                        "lastName": "H",
                        "guid": "af22be6c-2092-47af-9f00-87b472360119",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Alexander"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "af22be6c-2092-47af-9f00-87b472360119",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "4ea73f6b-8890-4ba0-93e6-1fc2da08ba8c",
                "point": {
                    "y": 181,
                    "x": 69
                }
            },
            "rotation": 0.0,
            "guid": "4dd48e5d-cf9c-44d0-ba59-f1d8d78aca31",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "7f25e03a-e047-441f-bb8d-49e0058ecc93",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; &nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_f31c3d5e-71a3-4401-8325-ca084644b926_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_f31c3d5e-71a3-4401-8325-ca084644b926_content\" class=\"kfSupportContent\"> </span>I think if light makes glue look big I think it can make a person look big like Harrison said.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_f31c3d5e-71a3-4401-8325-ca084644b926_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "7f25e03a-e047-441f-bb8d-49e0058ecc93",
                "riseAbove": false,
                "attachments": [],
                "title": "Shadow",
                "created": "Sep 28, 2015 2:58:22 PM",
                "modified": "Nov 13, 2015 9:45:35 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Zara",
                        "lastName": "M",
                        "guid": "fa0b4d07-d51a-4a43-83d1-c2f56b09bb03",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Zara"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "fa0b4d07-d51a-4a43-83d1-c2f56b09bb03",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "7f25e03a-e047-441f-bb8d-49e0058ecc93",
                "point": {
                    "y": 383,
                    "x": 1472
                }
            },
            "rotation": 0.0,
            "guid": "34ddd70d-f84b-4fdf-aaf7-03d0fd2df856",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "703bd12c-30e6-41b8-a980-62ef5375d6a3",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_4570c254-38c5-44b0-9848-dd0114d6f513_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-You would burn if you stand on the sun because it is the hotest thing on earth. <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_4570c254-38c5-44b0-9848-dd0114d6f513_content\" class=\"kfSupportContent\"></span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_4570c254-38c5-44b0-9848-dd0114d6f513_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "703bd12c-30e6-41b8-a980-62ef5375d6a3",
                "riseAbove": false,
                "attachments": [],
                "title": "burning",
                "created": "Nov 11, 2015 9:42:02 AM",
                "modified": "Nov 20, 2015 9:53:33 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Danielca",
                        "lastName": "C",
                        "guid": "0081a70e-cd6b-425b-92f9-519daabab157",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Daniel"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "0081a70e-cd6b-425b-92f9-519daabab157",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "703bd12c-30e6-41b8-a980-62ef5375d6a3",
                "point": {
                    "y": 410,
                    "x": 300
                }
            },
            "rotation": 0.0,
            "guid": "a9b450ed-3111-4251-874f-9fa8611c7a8e",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "60899b1f-e834-4c2a-862a-a832c3b29134",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_334d941a-02fa-4ab9-9cd0-54676ffc42f5_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>-&nbsp;<span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_334d941a-02fa-4ab9-9cd0-54676ffc42f5_content\" class=\"kfSupportContent\"></span>who was the first person to make fire- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_334d941a-02fa-4ab9-9cd0-54676ffc42f5_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "60899b1f-e834-4c2a-862a-a832c3b29134",
                "riseAbove": false,
                "attachments": [],
                "title": "Who?",
                "created": "Sep 29, 2015 12:27:46 PM",
                "modified": "Sep 29, 2015 12:27:46 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Annas",
                        "lastName": "S",
                        "guid": "b296c05c-28e4-4261-8678-ce31f895cf51",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Anna"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "b296c05c-28e4-4261-8678-ce31f895cf51",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "60899b1f-e834-4c2a-862a-a832c3b29134",
                "point": {
                    "y": 84,
                    "x": 872
                }
            },
            "rotation": 0.0,
            "guid": "dbf98d5b-bb46-4131-985a-c4a2690d1bb1",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "ef9df8e9-6843-4870-a064-74b46a5ba44b",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_e3b5fe0f-5c42-49cb-89ff-13e11e47c206_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_e3b5fe0f-5c42-49cb-89ff-13e11e47c206_content\" class=\"kfSupportContent\"></span><span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_1eb8b089-5e5e-423d-8e2f-5e5f4090962c_content\" class=\"kfSupportContent\"></span>the satalite's probably have little lights on them and their solar panels reflect sunlight.- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_1eb8b089-5e5e-423d-8e2f-5e5f4090962c_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "ef9df8e9-6843-4870-a064-74b46a5ba44b",
                "riseAbove": false,
                "attachments": [],
                "title": "also",
                "created": "Sep 14, 2015 2:48:17 PM",
                "modified": "Nov 13, 2015 9:49:09 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Kingsley",
                        "lastName": "S",
                        "guid": "78c67bf2-95d2-42fe-911a-26168fa2a6f1",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Kingsley"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "78c67bf2-95d2-42fe-911a-26168fa2a6f1",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "ef9df8e9-6843-4870-a064-74b46a5ba44b",
                "point": {
                    "y": 315,
                    "x": 759
                }
            },
            "rotation": 0.0,
            "guid": "be2f1edd-8c8f-4553-b4fa-f8e44bcb0059",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "661fa074-cc80-46d2-89ea-4c109ee24b76",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_c2dba3c9-5e2c-4820-a5bd-76bcf4ff1f63_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_c2dba3c9-5e2c-4820-a5bd-76bcf4ff1f63_content\" class=\"kfSupportContent\"> </span>light travels so fast you can't see it. and if there was no light we would freeze becous the sun would not be there. - <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_c2dba3c9-5e2c-4820-a5bd-76bcf4ff1f63_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "661fa074-cc80-46d2-89ea-4c109ee24b76",
                "riseAbove": false,
                "attachments": [],
                "title": "light travels fast and more",
                "created": "Sep 29, 2015 12:16:27 PM",
                "modified": "Sep 29, 2015 12:27:29 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Kai",
                        "lastName": "G",
                        "guid": "bd696134-9060-4dde-85c9-9652afac4d16",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Kai"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "bd696134-9060-4dde-85c9-9652afac4d16",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "661fa074-cc80-46d2-89ea-4c109ee24b76",
                "point": {
                    "y": 410,
                    "x": 1301
                }
            },
            "rotation": 0.0,
            "guid": "b211c45c-9c12-48ae-9d3e-b1ee59565d59",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "c4cbcdc4-375f-40a5-a794-92126a65399c",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b953c8fe-1055-4d4c-b761-09529c7b8a74_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b953c8fe-1055-4d4c-b761-09529c7b8a74_content\" class=\"kfSupportContent\"> </span>the sun is really hot and big, but maybe some one did do but they probably died. - <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b953c8fe-1055-4d4c-b761-09529c7b8a74_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "c4cbcdc4-375f-40a5-a794-92126a65399c",
                "riseAbove": false,
                "attachments": [],
                "title": "maybe some one ",
                "created": "Nov 11, 2015 9:52:27 AM",
                "modified": "Nov 11, 2015 9:56:48 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Avery",
                        "lastName": "M",
                        "guid": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Avery"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "c4cbcdc4-375f-40a5-a794-92126a65399c",
                "point": {
                    "y": 33,
                    "x": 465
                }
            },
            "rotation": 0.0,
            "guid": "b3f3e502-4ff4-4a0b-9cd9-0f8984a66688",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "2e170e60-c1da-417e-8701-89dadee82c9e",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_d31f5d55-bdd8-401b-afe6-f7b5d8b92ab2_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_d31f5d55-bdd8-401b-afe6-f7b5d8b92ab2_content\" class=\"kfSupportContent\"> how do you know that people are doing the same thing on different planets?</span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_d31f5d55-bdd8-401b-afe6-f7b5d8b92ab2_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "2e170e60-c1da-417e-8701-89dadee82c9e",
                "riseAbove": false,
                "attachments": [],
                "title": "how do you know",
                "created": "Nov 2, 2015 2:53:45 PM",
                "modified": "Nov 2, 2015 2:53:45 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Laurenk",
                        "lastName": "K",
                        "guid": "76c4b72c-af48-4629-be90-e93be126e960",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Lauren"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "76c4b72c-af48-4629-be90-e93be126e960",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "2e170e60-c1da-417e-8701-89dadee82c9e",
                "point": {
                    "y": 378,
                    "x": 1466
                }
            },
            "rotation": 0.0,
            "guid": "eb64b0e8-8d11-465e-bb2a-81f80483d49b",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "f4555ee1-8a3e-4fd8-a044-cd1ff7aa4391",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_e680e4a0-95f9-4e66-9a1a-7ea4ca60b4b9_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_e680e4a0-95f9-4e66-9a1a-7ea4ca60b4b9_content\" class=\"kfSupportContent\"> </span>It was white because the flashlight light was white.- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_e680e4a0-95f9-4e66-9a1a-7ea4ca60b4b9_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp; </p>\n\n",
                "guid": "f4555ee1-8a3e-4fd8-a044-cd1ff7aa4391",
                "riseAbove": false,
                "attachments": [],
                "title": "flashlight",
                "created": "Nov 11, 2015 9:47:30 AM",
                "modified": "Nov 11, 2015 9:49:37 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Isaac",
                        "lastName": "F",
                        "guid": "de333b1d-c02d-4707-8bb5-807993df364e",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Isaac"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "de333b1d-c02d-4707-8bb5-807993df364e",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "f4555ee1-8a3e-4fd8-a044-cd1ff7aa4391",
                "point": {
                    "y": 338,
                    "x": 1615
                }
            },
            "rotation": 0.0,
            "guid": "1f56c755-fcc4-4e10-8ddb-791a75b7aeef",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "235e38c6-36db-409b-bd75-b598a633f490",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_3c2f8765-3eb1-4c93-9e62-43dd83b1da43_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>-Blue orgin makes a resuable rocket ship<span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_3c2f8765-3eb1-4c93-9e62-43dd83b1da43_content\" class=\"kfSupportContent\"></span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_3c2f8765-3eb1-4c93-9e62-43dd83b1da43_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "235e38c6-36db-409b-bd75-b598a633f490",
                "riseAbove": false,
                "attachments": [],
                "title": "Rocket",
                "created": "Dec 4, 2015 9:48:03 AM",
                "modified": "Dec 4, 2015 9:48:03 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Danielca",
                        "lastName": "C",
                        "guid": "0081a70e-cd6b-425b-92f9-519daabab157",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Daniel"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "0081a70e-cd6b-425b-92f9-519daabab157",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "235e38c6-36db-409b-bd75-b598a633f490",
                "point": {
                    "y": 73,
                    "x": 351
                }
            },
            "rotation": 0.0,
            "guid": "905286c9-7a76-4c8c-90b3-dd260bd25c3f",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "d975ef84-bb31-4e6e-b2b3-f8ed75aa71ba",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_30f52887-3f57-4cc2-9598-680bede08f27_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_30f52887-3f57-4cc2-9598-680bede08f27_content\" class=\"kfSupportContent\"> </span>how far does light travel across the universe in one year? It's definitely a BIG number!<span id=\"mce_2\"></span> - <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_30f52887-3f57-4cc2-9598-680bede08f27_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n<p>&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_13ca4f2d-38f0-49ac-8c9a-aa645f562f68_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_13ca4f2d-38f0-49ac-8c9a-aa645f562f68_content\" class=\"kfSupportContent\"> </span>is that the first number of how far light travels in one year is a 9.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_13ca4f2d-38f0-49ac-8c9a-aa645f562f68_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "d975ef84-bb31-4e6e-b2b3-f8ed75aa71ba",
                "riseAbove": false,
                "attachments": [],
                "title": "How Far?",
                "created": "Sep 14, 2015 2:43:55 PM",
                "modified": "Sep 14, 2015 2:44:26 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Kingsley",
                        "lastName": "S",
                        "guid": "78c67bf2-95d2-42fe-911a-26168fa2a6f1",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Kingsley"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "78c67bf2-95d2-42fe-911a-26168fa2a6f1",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "d975ef84-bb31-4e6e-b2b3-f8ed75aa71ba",
                "point": {
                    "y": 352,
                    "x": 1440
                }
            },
            "rotation": 0.0,
            "guid": "f25fbe20-a466-4b5b-9fa4-05ee05aa4841",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "751b484a-946a-4a93-affd-b67a7ccff4c5",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; very very very fast!</p>\n\n",
                "guid": "751b484a-946a-4a93-affd-b67a7ccff4c5",
                "riseAbove": false,
                "attachments": [],
                "title": "so fast!",
                "created": "Oct 23, 2015 10:19:28 AM",
                "modified": "Oct 23, 2015 10:19:28 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Annas",
                        "lastName": "S",
                        "guid": "b296c05c-28e4-4261-8678-ce31f895cf51",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Anna"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "b296c05c-28e4-4261-8678-ce31f895cf51",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "751b484a-946a-4a93-affd-b67a7ccff4c5",
                "point": {
                    "y": 435,
                    "x": 1412
                }
            },
            "rotation": 0.0,
            "guid": "9e823bca-ae94-4bee-b063-7c2c1acd8d0a",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "b6454b80-c32f-47af-b425-b18b7539f1a7",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_6921c82f-841b-4f79-a8e3-4865349a6481_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>-Why the sun is so bright.<span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_6921c82f-841b-4f79-a8e3-4865349a6481_content\" class=\"kfSupportContent\"></span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_6921c82f-841b-4f79-a8e3-4865349a6481_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "b6454b80-c32f-47af-b425-b18b7539f1a7",
                "riseAbove": false,
                "attachments": [],
                "title": "suns brightnes",
                "created": "Nov 13, 2015 9:58:12 AM",
                "modified": "Nov 13, 2015 9:58:12 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Danielca",
                        "lastName": "C",
                        "guid": "0081a70e-cd6b-425b-92f9-519daabab157",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Daniel"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "0081a70e-cd6b-425b-92f9-519daabab157",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "b6454b80-c32f-47af-b425-b18b7539f1a7",
                "point": {
                    "y": 448,
                    "x": 223
                }
            },
            "rotation": 0.0,
            "guid": "180db65f-78a4-4f46-aef6-e801bc663035",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "522760f9-5545-4f3d-8072-22c4aa6fd200",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_c73c0f59-787a-45dd-b849-cb117ed12ce7_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-I think it depends on how far away the source of light and the screen, I also think that it depends on different angles and the size of the light source and the object.&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_c73c0f59-787a-45dd-b849-cb117ed12ce7_content\" class=\"kfSupportContent\"> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_c73c0f59-787a-45dd-b849-cb117ed12ce7_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "522760f9-5545-4f3d-8072-22c4aa6fd200",
                "riseAbove": false,
                "attachments": [],
                "title": "distance, angles, and size",
                "created": "Oct 23, 2015 10:09:18 AM",
                "modified": "Nov 13, 2015 10:04:03 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Nicola",
                        "lastName": "P",
                        "guid": "4f21c14c-2992-4a33-967c-caa052984eb0",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Nicola"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "4f21c14c-2992-4a33-967c-caa052984eb0",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "522760f9-5545-4f3d-8072-22c4aa6fd200",
                "point": {
                    "y": 407,
                    "x": 1432
                }
            },
            "rotation": 0.0,
            "guid": "b2c9b67f-81d5-41a4-95bf-5e8f62df58bc",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "406b647d-f031-4090-80c5-7134248eb15a",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_c692bb0a-df06-44db-89dc-b713623b4ab1_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- The sun helps the plants grow and that helps us to breathe.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_c692bb0a-df06-44db-89dc-b713623b4ab1_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "406b647d-f031-4090-80c5-7134248eb15a",
                "riseAbove": false,
                "attachments": [],
                "title": "Plants growing and humans breathing",
                "created": "Sep 13, 2015 5:05:24 PM",
                "modified": "Sep 13, 2015 5:05:24 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Robin",
                        "lastName": "S",
                        "guid": "de63ab28-39a5-4452-b96c-a145684cec50",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Robin"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "de63ab28-39a5-4452-b96c-a145684cec50",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "406b647d-f031-4090-80c5-7134248eb15a",
                "point": {
                    "y": 226,
                    "x": 8
                }
            },
            "rotation": 0.0,
            "guid": "c973266b-df8d-48e2-9b83-aaac9970bbe5",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "021575bd-c2c6-4201-a973-3f7b013b4df7",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_71f84101-a2c2-4ed1-acee-8fafc34a167c_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_71f84101-a2c2-4ed1-acee-8fafc34a167c_content\" class=\"kfSupportContent\"> </span>How does a flashlight blind you?- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_71f84101-a2c2-4ed1-acee-8fafc34a167c_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "021575bd-c2c6-4201-a973-3f7b013b4df7",
                "riseAbove": false,
                "attachments": [],
                "title": "flashlight",
                "created": "Dec 4, 2015 10:09:20 AM",
                "modified": "Dec 4, 2015 10:09:20 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Amira",
                        "lastName": "F",
                        "guid": "20a3dada-c832-4ee4-85f1-a6accac0a4e2",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Amira"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "20a3dada-c832-4ee4-85f1-a6accac0a4e2",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "021575bd-c2c6-4201-a973-3f7b013b4df7",
                "point": {
                    "y": 330,
                    "x": 590
                }
            },
            "rotation": 0.0,
            "guid": "49598616-742c-4282-8514-6b13fc01213c",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "7a237a61-436f-4a16-acb2-5e69b9359d6a",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_6fc13599-3c8d-4ff5-a3e9-ce8b61246277_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-I wonder what is faster light or hubble - <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_6fc13599-3c8d-4ff5-a3e9-ce8b61246277_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "7a237a61-436f-4a16-acb2-5e69b9359d6a",
                "riseAbove": false,
                "attachments": [],
                "title": "faster",
                "created": "Nov 11, 2015 9:36:51 AM",
                "modified": "Nov 13, 2015 9:47:32 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Husnain",
                        "lastName": "A",
                        "guid": "a3bc7829-1bd9-4dea-897b-d56fa6bc6ad1",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Husnain"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a3bc7829-1bd9-4dea-897b-d56fa6bc6ad1",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "7a237a61-436f-4a16-acb2-5e69b9359d6a",
                "point": {
                    "y": 385,
                    "x": 1485
                }
            },
            "rotation": 0.0,
            "guid": "9005aaa5-d812-414a-bd31-cbbb0b39dfd9",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "060fbf05-aa5e-4356-a3e4-a20c33e815c8",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; &nbsp; &nbsp; &nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_b1d7f9ed-1007-4cbb-9e02-a6c3bdfee304_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_b1d7f9ed-1007-4cbb-9e02-a6c3bdfee304_content\" class=\"kfSupportContent\"> </span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_b1d7f9ed-1007-4cbb-9e02-a6c3bdfee304_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;<span id=\"mce_2\">&nbsp;</span>&nbsp;<span id=\"mce_0\">&nbsp;</span>&nbsp; UV/Ultra violet light is highly dangerous to germs it pretty much it fry's them but at a high frequency it can do some bad things to your nerves system and become <strong>a crispy potato!!!!!!!! </strong>but UV rays are out side of the Atmosphere but the holes we make in the Atmosphere make the UV come through the holes and do extreme damage to us like turning in to a crispy potato or losing your skin and dying up<span style=\"font-size: 14pt;\"><span style=\"font-size: 8pt;\"><span style=\"font-size: 24pt;\"><strong>.</strong></span></span></span></p>\n\n",
                "guid": "060fbf05-aa5e-4356-a3e4-a20c33e815c8",
                "riseAbove": false,
                "attachments": [],
                "title": "UV rays",
                "created": "Nov 11, 2015 9:37:02 AM",
                "modified": "Nov 20, 2015 9:50:13 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Kai",
                        "lastName": "G",
                        "guid": "bd696134-9060-4dde-85c9-9652afac4d16",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Kai"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "bd696134-9060-4dde-85c9-9652afac4d16",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "060fbf05-aa5e-4356-a3e4-a20c33e815c8",
                "point": {
                    "y": 387,
                    "x": 1406
                }
            },
            "rotation": 0.0,
            "guid": "3a91e8bd-543d-4dc8-8c2f-e055c15847b9",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "eee27045-8db8-4f59-a7fd-963b72b89dba",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p><span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_213d8527-0050-413e-93fb-a3ce2d137f6a_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- You know how when you look at the sun its so bright. But once by accidentley I looked at the sun when the sun was going down and it was not bright. <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_213d8527-0050-413e-93fb-a3ce2d137f6a_content\" class=\"kfSupportContent\"> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_213d8527-0050-413e-93fb-a3ce2d137f6a_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n\n",
                "guid": "eee27045-8db8-4f59-a7fd-963b72b89dba",
                "riseAbove": false,
                "attachments": [],
                "title": "Sun Going Down",
                "created": "Nov 20, 2015 9:57:19 AM",
                "modified": "Nov 20, 2015 9:57:19 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Husnain",
                        "lastName": "A",
                        "guid": "a3bc7829-1bd9-4dea-897b-d56fa6bc6ad1",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Husnain"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a3bc7829-1bd9-4dea-897b-d56fa6bc6ad1",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "eee27045-8db8-4f59-a7fd-963b72b89dba",
                "point": {
                    "y": 126,
                    "x": 967
                }
            },
            "rotation": 0.0,
            "guid": "bb931276-fe42-432a-bcc1-2901c568775b",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "db0390c5-c70c-453f-8fe3-a894c77640e9",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_fc800a10-f500-438c-8295-4118af0b5320_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_fc800a10-f500-438c-8295-4118af0b5320_content\" class=\"kfSupportContent\"> </span>without light we could not live because we need trees and they can not live without the sun, also we could not live without light and we could not see and we would crash into everything, then it would be hard for people to help other people and if someone got hurt then someone could not help them.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_fc800a10-f500-438c-8295-4118af0b5320_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "db0390c5-c70c-453f-8fe3-a894c77640e9",
                "riseAbove": false,
                "attachments": [],
                "title": "without light",
                "created": "Nov 20, 2015 9:53:12 AM",
                "modified": "Nov 20, 2015 9:55:41 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Stella",
                        "lastName": "G",
                        "guid": "5b7b31b5-ba40-43cc-aa78-b23ae5f652ce",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Stella"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "5b7b31b5-ba40-43cc-aa78-b23ae5f652ce",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "db0390c5-c70c-453f-8fe3-a894c77640e9",
                "point": {
                    "y": 125,
                    "x": 10
                }
            },
            "rotation": 0.0,
            "guid": "d396469c-fe4d-4db7-9b17-f7df85bd75ca",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "3b4242c0-6c19-406a-8d1d-d4704ad29a42",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_ea8c8a2b-6bfd-43b7-9208-5f48133dabfb_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_ea8c8a2b-6bfd-43b7-9208-5f48133dabfb_content\" class=\"kfSupportContent\"> </span>who made the first candle?- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_ea8c8a2b-6bfd-43b7-9208-5f48133dabfb_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "3b4242c0-6c19-406a-8d1d-d4704ad29a42",
                "riseAbove": false,
                "attachments": [],
                "title": "candle",
                "created": "Sep 14, 2015 2:43:41 PM",
                "modified": "Sep 14, 2015 2:43:41 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Stella",
                        "lastName": "G",
                        "guid": "5b7b31b5-ba40-43cc-aa78-b23ae5f652ce",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Stella"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "5b7b31b5-ba40-43cc-aa78-b23ae5f652ce",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "3b4242c0-6c19-406a-8d1d-d4704ad29a42",
                "point": {
                    "y": 491,
                    "x": 7
                }
            },
            "rotation": 0.0,
            "guid": "3826f62c-a8ed-4982-9e12-cf0e501c2a4e",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "473ff4ff-e2ec-458f-a8b6-2b7d05b41de8",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"f5a2f488-d05c-453d-8bbf-f4fe8bd9306b_3d7c8997-8942-4939-9fc7-10084bf25671_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">Evidence</span> </span>- <span id=\"f5a2f488-d05c-453d-8bbf-f4fe8bd9306b_3d7c8997-8942-4939-9fc7-10084bf25671_content\" class=\"kfSupportContent\"> </span>Why don't we just look up on Google how close you can get to the sun- <span id=\"f5a2f488-d05c-453d-8bbf-f4fe8bd9306b_3d7c8997-8942-4939-9fc7-10084bf25671_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "473ff4ff-e2ec-458f-a8b6-2b7d05b41de8",
                "riseAbove": false,
                "attachments": [],
                "title": "Let's ask Google",
                "created": "Nov 20, 2015 9:47:32 AM",
                "modified": "Nov 20, 2015 9:47:32 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Laurenk",
                        "lastName": "K",
                        "guid": "76c4b72c-af48-4629-be90-e93be126e960",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Lauren"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "76c4b72c-af48-4629-be90-e93be126e960",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "473ff4ff-e2ec-458f-a8b6-2b7d05b41de8",
                "point": {
                    "y": 143,
                    "x": 525
                }
            },
            "rotation": 0.0,
            "guid": "cc89f3f2-cc5e-4575-8b3b-08eb7080277e",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "9f895ede-0f22-4fbe-8b62-446983780c7b",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; Yes because there is the stars the sun and the moon to make light</p>\n\n",
                "guid": "9f895ede-0f22-4fbe-8b62-446983780c7b",
                "riseAbove": false,
                "attachments": [],
                "title": "yes",
                "created": "Sep 14, 2015 2:44:22 PM",
                "modified": "Sep 14, 2015 2:44:22 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Annas",
                        "lastName": "S",
                        "guid": "b296c05c-28e4-4261-8678-ce31f895cf51",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Anna"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "b296c05c-28e4-4261-8678-ce31f895cf51",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "9f895ede-0f22-4fbe-8b62-446983780c7b",
                "point": {
                    "y": 282,
                    "x": 745
                }
            },
            "rotation": 0.0,
            "guid": "f290626c-c020-46bb-bd10-0795fa699451",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "71f99280-d18d-489b-8c61-b54fe7419129",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_f3771923-3eab-431a-9aac-853ef3411a95_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_f3771923-3eab-431a-9aac-853ef3411a95_content\" class=\"kfSupportContent\"> </span>if we use the flashlight on the spin wheels how dose it&nbsp; turn white in the dark? - <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_f3771923-3eab-431a-9aac-853ef3411a95_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "71f99280-d18d-489b-8c61-b54fe7419129",
                "riseAbove": false,
                "attachments": [],
                "title": "spin wheels",
                "created": "Nov 11, 2015 9:36:53 AM",
                "modified": "Nov 11, 2015 9:37:35 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Avery",
                        "lastName": "M",
                        "guid": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Avery"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "71f99280-d18d-489b-8c61-b54fe7419129",
                "point": {
                    "y": 332,
                    "x": 1505
                }
            },
            "rotation": 0.0,
            "guid": "c2c11e47-c2fa-47d9-b95a-28ba545313ad",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "277ca8c9-b2a5-40a2-ba77-c1e820bf1372",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_8ad440fd-fa20-48b7-912d-ce3920dc6bd4_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_8ad440fd-fa20-48b7-912d-ce3920dc6bd4_content\" class=\"kfSupportContent\"> </span>the sun is really bright and because the sun is so bright it hurts your eye and your eye can't handle it so it damages your eye.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_8ad440fd-fa20-48b7-912d-ce3920dc6bd4_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "277ca8c9-b2a5-40a2-ba77-c1e820bf1372",
                "riseAbove": false,
                "attachments": [],
                "title": "really bright",
                "created": "Dec 4, 2015 10:05:46 AM",
                "modified": "Dec 4, 2015 10:05:46 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Stella",
                        "lastName": "G",
                        "guid": "5b7b31b5-ba40-43cc-aa78-b23ae5f652ce",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Stella"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "5b7b31b5-ba40-43cc-aa78-b23ae5f652ce",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "277ca8c9-b2a5-40a2-ba77-c1e820bf1372",
                "point": {
                    "y": 121,
                    "x": 274
                }
            },
            "rotation": 0.0,
            "guid": "04186d0b-f63a-4f8e-85cf-cdabec2d8324",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "8b2572ac-800e-4006-ada5-6aadf5ad4d24",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_12bcec92-057f-4e00-a634-d6a3db9d14bc_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_12bcec92-057f-4e00-a634-d6a3db9d14bc_content\" class=\"kfSupportContent\"> </span>-We need light because it powers our bodies. (Alexander) &nbsp;<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_12bcec92-057f-4e00-a634-d6a3db9d14bc_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n\n",
                "guid": "8b2572ac-800e-4006-ada5-6aadf5ad4d24",
                "riseAbove": false,
                "attachments": [],
                "title": "Light Powers our bodies",
                "created": "Sep 13, 2015 5:02:47 PM",
                "modified": "Sep 13, 2015 5:09:41 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Robin",
                        "lastName": "S",
                        "guid": "de63ab28-39a5-4452-b96c-a145684cec50",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Robin"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "de63ab28-39a5-4452-b96c-a145684cec50",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "8b2572ac-800e-4006-ada5-6aadf5ad4d24",
                "point": {
                    "y": 100,
                    "x": 144
                }
            },
            "rotation": 0.0,
            "guid": "a723d554-4b0f-460f-b2ac-59007c1208cc",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "e9bf8c30-18d7-4b40-848b-0781c534937c",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_a91cab06-9b44-49fe-b4ba-adb81c734db3_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-&nbsp;<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_a91cab06-9b44-49fe-b4ba-adb81c734db3_content\" class=\"kfSupportContent\"></span>I think that its because when the spin wheel is in brighter light it dose not work as well.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_a91cab06-9b44-49fe-b4ba-adb81c734db3_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "e9bf8c30-18d7-4b40-848b-0781c534937c",
                "riseAbove": false,
                "attachments": [],
                "title": "well",
                "created": "Nov 11, 2015 9:46:55 AM",
                "modified": "Nov 11, 2015 9:46:55 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Stella",
                        "lastName": "G",
                        "guid": "5b7b31b5-ba40-43cc-aa78-b23ae5f652ce",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Stella"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "5b7b31b5-ba40-43cc-aa78-b23ae5f652ce",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "e9bf8c30-18d7-4b40-848b-0781c534937c",
                "point": {
                    "y": 393,
                    "x": 1547
                }
            },
            "rotation": 0.0,
            "guid": "e5fb5aea-4f5d-4e02-b3dc-52ef7789742a",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "e68320c4-0d04-4152-852b-2fcc3f6281ae",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_fab075d4-3fee-4314-a1bf-7443a245a54f_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_fab075d4-3fee-4314-a1bf-7443a245a54f_content\" class=\"kfSupportContent\"> </span>does all light blind you, or hurt you eyes? Or is it just the sun?</p>\n<p>&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_1e691533-dc05-491d-bf8d-59b1555c0f0f_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_1e691533-dc05-491d-bf8d-59b1555c0f0f_content\" class=\"kfSupportContent\"> </span>I think that it is all light, but I'm not sure yet. -&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_fab075d4-3fee-4314-a1bf-7443a245a54f_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;</p>\n\n",
                "guid": "e68320c4-0d04-4152-852b-2fcc3f6281ae",
                "riseAbove": false,
                "attachments": [],
                "title": "all light",
                "created": "Dec 4, 2015 10:08:41 AM",
                "modified": "Dec 4, 2015 10:09:39 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Ellau",
                        "lastName": "U",
                        "guid": "45b2876f-b4d8-4006-bc3c-c80983664244",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Ella"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "45b2876f-b4d8-4006-bc3c-c80983664244",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "e68320c4-0d04-4152-852b-2fcc3f6281ae",
                "point": {
                    "y": 63,
                    "x": 294
                }
            },
            "rotation": 0.0,
            "guid": "8fc40a62-712f-4cf6-a010-dd305ee2349f",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "70310a63-52b2-4db4-8a81-cbea70182815",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_6c31acc6-51d7-45e3-bd8b-bbafd1a69abd_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_6c31acc6-51d7-45e3-bd8b-bbafd1a69abd_content\" class=\"kfSupportContent\"> </span>I watched a movie about antarctica and it sayed that every 2 months it changes day or night. so for 2 months its night and 2&nbsp; months its day!!! its incredible!!!- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_6c31acc6-51d7-45e3-bd8b-bbafd1a69abd_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "70310a63-52b2-4db4-8a81-cbea70182815",
                "riseAbove": false,
                "attachments": [],
                "title": "Incredible!!",
                "created": "Nov 13, 2015 9:57:08 AM",
                "modified": "Nov 13, 2015 9:57:08 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Liviaw",
                        "lastName": "W",
                        "guid": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Livia"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "70310a63-52b2-4db4-8a81-cbea70182815",
                "point": {
                    "y": 497,
                    "x": 758
                }
            },
            "rotation": 0.0,
            "guid": "51235b6a-7a69-47c0-96d8-5f868eb8ebb1",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "2280f950-55a3-4fb4-a152-28a6a8a8b6f5",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>chill &nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_2da36094-487d-48c8-b1ad-e14e853b507e_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_2da36094-487d-48c8-b1ad-e14e853b507e_content\" class=\"kfSupportContent\"> </span>what would happen to the world without light&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_3297ecf1-226a-4765-a5a3-9986991fb255_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-&nbsp;<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_3297ecf1-226a-4765-a5a3-9986991fb255_content\" class=\"kfSupportContent\"></span>we would freeze in seconds we need light in are body its one of the top things in the world that we need light is also very fast lots of people have different theory's about light its very cool I know that light is faster then sound amazing right!!!!!! - <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_3297ecf1-226a-4765-a5a3-9986991fb255_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_2da36094-487d-48c8-b1ad-e14e853b507e_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "2280f950-55a3-4fb4-a152-28a6a8a8b6f5",
                "riseAbove": false,
                "attachments": [],
                "title": "very cold!!!",
                "created": "Oct 23, 2015 10:18:24 AM",
                "modified": "Nov 13, 2015 9:59:21 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Toby",
                        "lastName": "F",
                        "guid": "a4bbb0d0-3ca5-4246-98c7-b39b452622d0",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Toby"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a4bbb0d0-3ca5-4246-98c7-b39b452622d0",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "2280f950-55a3-4fb4-a152-28a6a8a8b6f5",
                "point": {
                    "y": 44,
                    "x": 197
                }
            },
            "rotation": 0.0,
            "guid": "9652c4f3-9882-4103-8df4-3eea4252335b",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "3e0c1e8e-822c-4854-a407-dddec4bd7cbf",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_8b1950fa-29a2-4925-b32f-9720580ff85a_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- If there was no sun, humans would freeze.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_8b1950fa-29a2-4925-b32f-9720580ff85a_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp; &nbsp; (Daniel)</p>\n\n",
                "guid": "3e0c1e8e-822c-4854-a407-dddec4bd7cbf",
                "riseAbove": false,
                "attachments": [],
                "title": "Freezing",
                "created": "Sep 13, 2015 5:08:28 PM",
                "modified": "Sep 13, 2015 5:09:53 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Robin",
                        "lastName": "S",
                        "guid": "de63ab28-39a5-4452-b96c-a145684cec50",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Robin"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "de63ab28-39a5-4452-b96c-a145684cec50",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "3e0c1e8e-822c-4854-a407-dddec4bd7cbf",
                "point": {
                    "y": 105,
                    "x": 76
                }
            },
            "rotation": 0.0,
            "guid": "8ca9928e-0ca6-49be-9e1b-e7ec7751cc86",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "d153fd9c-5f4c-4034-a3cb-5eb61da38cd3",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_a2c0062e-0671-4bce-a7ba-7d786cc7253c_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_a2c0062e-0671-4bce-a7ba-7d786cc7253c_content\" class=\"kfSupportContent\"> </span>I think you would have to stay 900km away or you and ship would melt.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_a2c0062e-0671-4bce-a7ba-7d786cc7253c_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "d153fd9c-5f4c-4034-a3cb-5eb61da38cd3",
                "riseAbove": false,
                "attachments": [],
                "title": "how far away",
                "created": "Nov 13, 2015 9:59:19 AM",
                "modified": "Nov 13, 2015 9:59:19 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Laurenk",
                        "lastName": "K",
                        "guid": "76c4b72c-af48-4629-be90-e93be126e960",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Lauren"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "76c4b72c-af48-4629-be90-e93be126e960",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "d153fd9c-5f4c-4034-a3cb-5eb61da38cd3",
                "point": {
                    "y": 189,
                    "x": 454
                }
            },
            "rotation": 0.0,
            "guid": "6bc1db77-a2c2-46c7-a48e-2fa23ef0dff2",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "07c2162e-13ab-4a90-8552-daac6f9a2066",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_6a99d694-98e9-4454-a5ca-5ae33442cf05_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>-&nbsp;<span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_6a99d694-98e9-4454-a5ca-5ae33442cf05_content\" class=\"kfSupportContent\"></span>who was the first person to find light?- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_6a99d694-98e9-4454-a5ca-5ae33442cf05_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "07c2162e-13ab-4a90-8552-daac6f9a2066",
                "riseAbove": false,
                "attachments": [],
                "title": "first",
                "created": "Sep 14, 2015 2:39:22 PM",
                "modified": "Sep 14, 2015 2:39:22 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Stella",
                        "lastName": "G",
                        "guid": "5b7b31b5-ba40-43cc-aa78-b23ae5f652ce",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Stella"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "5b7b31b5-ba40-43cc-aa78-b23ae5f652ce",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "07c2162e-13ab-4a90-8552-daac6f9a2066",
                "point": {
                    "y": 547,
                    "x": 9
                }
            },
            "rotation": 0.0,
            "guid": "773190ce-21ca-4419-bde6-059f82daae0e",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "69ad6c93-cf0b-46f8-bd96-e7fcacd3ba81",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; &nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_6db8f1fc-3d97-4204-9f07-409cec737d8a_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>-We need to understand why is the sun so bright? <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_6db8f1fc-3d97-4204-9f07-409cec737d8a_content\" class=\"kfSupportContent\"> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_6db8f1fc-3d97-4204-9f07-409cec737d8a_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp; &nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_4dad7c8a-1b52-4eb6-9469-02345371e8d0_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-are theory is that the sun is a fireball ! Stella/Stephanie<span id=\"mce_1\">&nbsp;</span> <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_4dad7c8a-1b52-4eb6-9469-02345371e8d0_content\" class=\"kfSupportContent\"> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_4dad7c8a-1b52-4eb6-9469-02345371e8d0_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "69ad6c93-cf0b-46f8-bd96-e7fcacd3ba81",
                "riseAbove": false,
                "attachments": [],
                "title": "sun so bright",
                "created": "Nov 2, 2015 2:55:13 PM",
                "modified": "Nov 13, 2015 10:01:14 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Stephaniem",
                        "lastName": "M",
                        "guid": "7bbda1ab-35a9-4143-bd4a-be9ccdcdb907",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Stephanie"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "7bbda1ab-35a9-4143-bd4a-be9ccdcdb907",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "69ad6c93-cf0b-46f8-bd96-e7fcacd3ba81",
                "point": {
                    "y": 337,
                    "x": 446
                }
            },
            "rotation": 0.0,
            "guid": "df2bc54c-5251-4d31-9f1c-be3d4f6f5bc5",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "d4a7a3a6-79ba-4807-b4cc-7a584d8c9c92",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_c08fffa2-269d-49cd-812d-bfd8484fd3a8_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span>&nbsp;</span> <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_1a061c89-4b75-4398-b14a-7dc5a92e93e4_content\" class=\"kfSupportContent\"></span>Does light give off some kind of frequency? And when something reaches light speed does it give off a loud KRACK! like a sonic boom? Hmmmm.<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_46b2c334-0b2e-487e-a3d6-cd529a934adc_content\" class=\"kfSupportContent\"></span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_46b2c334-0b2e-487e-a3d6-cd529a934adc_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_9cf48f6d-3ede-4534-8f48-5b3b0cff3583_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_9cf48f6d-3ede-4534-8f48-5b3b0cff3583_content\" class=\"kfSupportContent\"> </span>is that if&nbsp; it gave off a sound it would be 90X louder than a sonic boom. but know one really knows because this feat hasn't been achieved. if anyone knows please ad on. (or if you have another theory.)- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_9cf48f6d-3ede-4534-8f48-5b3b0cff3583_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;<span id=\"mce_0\"></span></p>\n\n",
                "guid": "d4a7a3a6-79ba-4807-b4cc-7a584d8c9c92",
                "riseAbove": false,
                "attachments": [],
                "title": "Sound Of Light",
                "created": "Sep 29, 2015 12:10:09 PM",
                "modified": "Sep 29, 2015 12:20:22 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Kingsley",
                        "lastName": "S",
                        "guid": "78c67bf2-95d2-42fe-911a-26168fa2a6f1",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Kingsley"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "78c67bf2-95d2-42fe-911a-26168fa2a6f1",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "d4a7a3a6-79ba-4807-b4cc-7a584d8c9c92",
                "point": {
                    "y": 347,
                    "x": 1371
                }
            },
            "rotation": 0.0,
            "guid": "1f6e7659-4b2d-4a8f-83cc-60c5a2a6dd6a",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "951ced78-58b5-42bb-a592-e05978f2d74d",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_7f7262d4-25c7-4a72-b82c-612698aec87a_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_7f7262d4-25c7-4a72-b82c-612698aec87a_content\" class=\"kfSupportContent\"> </span>because sun is like a flash light and light can blind you- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_7f7262d4-25c7-4a72-b82c-612698aec87a_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "951ced78-58b5-42bb-a592-e05978f2d74d",
                "riseAbove": false,
                "attachments": [],
                "title": "flash light",
                "created": "Dec 4, 2015 10:03:54 AM",
                "modified": "Dec 4, 2015 10:03:54 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Coen",
                        "lastName": "R",
                        "guid": "bf6fb158-8844-4727-866b-4d8ca3fe1723",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Coen"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "bf6fb158-8844-4727-866b-4d8ca3fe1723",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "951ced78-58b5-42bb-a592-e05978f2d74d",
                "point": {
                    "y": 240,
                    "x": 475
                }
            },
            "rotation": 0.0,
            "guid": "20ad4d7c-c8fb-4c49-a25f-e928c65de0bf",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "14ee48ab-02f3-4b38-b434-67ff3eb016e6",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_0ebc6847-a8ac-4599-acce-1b434de4b310_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- I think that&nbsp; about 3000 miles is about right! because if it were 20 miles...</p>\n<p><span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_0ebc6847-a8ac-4599-acce-1b434de4b310_content\" class=\"kfSupportContent\">well you would probably die </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_0ebc6847-a8ac-4599-acce-1b434de4b310_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "14ee48ab-02f3-4b38-b434-67ff3eb016e6",
                "riseAbove": false,
                "attachments": [],
                "title": "Probably NOT",
                "created": "Nov 11, 2015 9:52:37 AM",
                "modified": "Nov 13, 2015 9:59:12 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Liviaw",
                        "lastName": "W",
                        "guid": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Livia"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "14ee48ab-02f3-4b38-b434-67ff3eb016e6",
                "point": {
                    "y": 63,
                    "x": 566
                }
            },
            "rotation": 0.0,
            "guid": "281d8f30-e606-4b64-bd89-f873cdecaa65",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "043365bc-5d9a-4985-ae07-7997e4e9ad43",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_675fef0c-4e21-47b3-8e40-695426cec568_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-light can blind you because it is so bright! <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_675fef0c-4e21-47b3-8e40-695426cec568_content\" class=\"kfSupportContent\"></span> <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_675fef0c-4e21-47b3-8e40-695426cec568_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;</p>\n\n",
                "guid": "043365bc-5d9a-4985-ae07-7997e4e9ad43",
                "riseAbove": false,
                "attachments": [],
                "title": "dangerous light",
                "created": "Nov 11, 2015 9:56:36 AM",
                "modified": "Nov 20, 2015 9:57:32 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Danielca",
                        "lastName": "C",
                        "guid": "0081a70e-cd6b-425b-92f9-519daabab157",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Daniel"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "0081a70e-cd6b-425b-92f9-519daabab157",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "043365bc-5d9a-4985-ae07-7997e4e9ad43",
                "point": {
                    "y": 315,
                    "x": 1481
                }
            },
            "rotation": 0.0,
            "guid": "b022b40d-73e4-4d3a-ad69-f36623958830",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "a5bbaf26-cce7-4263-9956-cfe28f0f136d",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"883edd26-8ae4-489e-863e-60371392d672_25dfa219-de4f-4a90-9f9b-6d68776c99dd_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">A different theory</span> </span>- light<span id=\"883edd26-8ae4-489e-863e-60371392d672_25dfa219-de4f-4a90-9f9b-6d68776c99dd_content\" class=\"kfSupportContent\"></span> can reflect on black paper.- <span id=\"883edd26-8ae4-489e-863e-60371392d672_25dfa219-de4f-4a90-9f9b-6d68776c99dd_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "a5bbaf26-cce7-4263-9956-cfe28f0f136d",
                "riseAbove": false,
                "attachments": [],
                "title": "can",
                "created": "Nov 2, 2015 2:59:11 PM",
                "modified": "Nov 2, 2015 2:59:11 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Isaac",
                        "lastName": "F",
                        "guid": "de333b1d-c02d-4707-8bb5-807993df364e",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Isaac"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "de333b1d-c02d-4707-8bb5-807993df364e",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "a5bbaf26-cce7-4263-9956-cfe28f0f136d",
                "point": {
                    "y": 440,
                    "x": 1326
                }
            },
            "rotation": 0.0,
            "guid": "c410b1cf-8e31-4d1b-86eb-8b2c745b91ba",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "fa911d4b-07bd-489f-bdd2-9f64d90db818",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_66555d47-e4e0-46d5-bf79-feb190d9c5ec_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>its blue red purple&nbsp;</p>\n<p>i think!!!<span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_66555d47-e4e0-46d5-bf79-feb190d9c5ec_content\" class=\"kfSupportContent\"></span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_66555d47-e4e0-46d5-bf79-feb190d9c5ec_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "fa911d4b-07bd-489f-bdd2-9f64d90db818",
                "riseAbove": false,
                "attachments": [],
                "title": "blue red !!",
                "created": "Nov 2, 2015 2:52:31 PM",
                "modified": "Nov 2, 2015 2:52:31 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Toby",
                        "lastName": "F",
                        "guid": "a4bbb0d0-3ca5-4246-98c7-b39b452622d0",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Toby"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a4bbb0d0-3ca5-4246-98c7-b39b452622d0",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "fa911d4b-07bd-489f-bdd2-9f64d90db818",
                "point": {
                    "y": 360,
                    "x": 1272
                }
            },
            "rotation": 0.0,
            "guid": "7495f958-8b1e-42cb-80e8-d5229d5fbc43",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "0c7c456e-6023-4c2a-86c9-9a65be45ad06",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>Why does light travel so fast?</p>\n<p>by:Anna &amp; Amira </p>\n<p>&nbsp;</p>\n\n",
                "guid": "0c7c456e-6023-4c2a-86c9-9a65be45ad06",
                "riseAbove": false,
                "attachments": [],
                "title": "Travel",
                "created": "Nov 2, 2015 3:01:05 PM",
                "modified": "Nov 13, 2015 9:50:28 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Annas",
                        "lastName": "S",
                        "guid": "b296c05c-28e4-4261-8678-ce31f895cf51",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Anna"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "b296c05c-28e4-4261-8678-ce31f895cf51",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "0c7c456e-6023-4c2a-86c9-9a65be45ad06",
                "point": {
                    "y": 424,
                    "x": 1361
                }
            },
            "rotation": 0.0,
            "guid": "a0865cb3-31de-4bf2-9475-333083cce918",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "d08e2155-9384-445c-a53c-e06e55acac89",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; Here lets make a compromise 50 miles.</p>\n\n",
                "guid": "d08e2155-9384-445c-a53c-e06e55acac89",
                "riseAbove": false,
                "attachments": [],
                "title": "50 Miles",
                "created": "Nov 11, 2015 9:55:41 AM",
                "modified": "Nov 11, 2015 9:55:41 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Harrisona",
                        "lastName": "A",
                        "guid": "d9dbd733-d6e8-48f0-9c48-561407b2f988",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Harrison"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "d9dbd733-d6e8-48f0-9c48-561407b2f988",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "d08e2155-9384-445c-a53c-e06e55acac89",
                "point": {
                    "y": 60,
                    "x": 698
                }
            },
            "rotation": 0.0,
            "guid": "ddc8323a-180a-461d-be3e-3f199527de6a",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "6a69efd7-74f4-4ebd-9727-1a14f0bcd268",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_1a93bda7-3f36-4518-9e8f-2c0e775cc398_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_1a93bda7-3f36-4518-9e8f-2c0e775cc398_content\" class=\"kfSupportContent\"> </span>me and my dad look up why is the sky blue, it said that little molecules breack up in the sky, that makes lots of colors and it makes blue. - <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_1a93bda7-3f36-4518-9e8f-2c0e775cc398_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "6a69efd7-74f4-4ebd-9727-1a14f0bcd268",
                "riseAbove": false,
                "attachments": [],
                "title": "breaking in the sky ",
                "created": "Sep 28, 2015 2:54:47 PM",
                "modified": "Nov 20, 2015 9:29:37 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Avery",
                        "lastName": "M",
                        "guid": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Avery"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "6a69efd7-74f4-4ebd-9727-1a14f0bcd268",
                "point": {
                    "y": 389,
                    "x": 1309
                }
            },
            "rotation": 0.0,
            "guid": "5ee4274e-f53d-4a8d-a1c6-7cc4fc20a2ab",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "ef89a799-61d6-4c8b-ba99-ac42ea4b7943",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"883edd26-8ae4-489e-863e-60371392d672_a6b4e010-3fba-4059-a149-f7b5971b3e2a_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">A different theory</span> </span>-now I have changed my mind and go with 1,000 miles big change eh.&nbsp; <span id=\"883edd26-8ae4-489e-863e-60371392d672_a6b4e010-3fba-4059-a149-f7b5971b3e2a_content\" class=\"kfSupportContent\"></span>- <span id=\"883edd26-8ae4-489e-863e-60371392d672_a6b4e010-3fba-4059-a149-f7b5971b3e2a_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n\n",
                "guid": "ef89a799-61d6-4c8b-ba99-ac42ea4b7943",
                "riseAbove": false,
                "attachments": [],
                "title": "Change",
                "created": "Nov 13, 2015 10:08:24 AM",
                "modified": "Nov 13, 2015 10:08:24 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Harrisona",
                        "lastName": "A",
                        "guid": "d9dbd733-d6e8-48f0-9c48-561407b2f988",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Harrison"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "d9dbd733-d6e8-48f0-9c48-561407b2f988",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "ef89a799-61d6-4c8b-ba99-ac42ea4b7943",
                "point": {
                    "y": 62,
                    "x": 403
                }
            },
            "rotation": 0.0,
            "guid": "7656c592-4722-465e-9cbf-3f3b35bdfa88",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "b671e078-42c8-48db-9891-efc42ded6ec4",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_89f62071-f1d1-4707-8eee-cb9ddff15d1d_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_89f62071-f1d1-4707-8eee-cb9ddff15d1d_content\" class=\"kfSupportContent\"> </span>is that&nbsp; fireflies have glow gens in their back- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_89f62071-f1d1-4707-8eee-cb9ddff15d1d_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n\n",
                "guid": "b671e078-42c8-48db-9891-efc42ded6ec4",
                "riseAbove": false,
                "attachments": [],
                "title": "fire fleis",
                "created": "Sep 29, 2015 12:13:38 PM",
                "modified": "Sep 29, 2015 12:13:38 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Sami",
                        "lastName": "I",
                        "guid": "3510453f-a280-4d5d-b1f2-69b5a4fcf940",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Sam"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "3510453f-a280-4d5d-b1f2-69b5a4fcf940",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "b671e078-42c8-48db-9891-efc42ded6ec4",
                "point": {
                    "y": 401,
                    "x": 1355
                }
            },
            "rotation": 0.0,
            "guid": "39b9ad0f-2195-47f1-b208-a8824d210895",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "a06b1423-e95d-45a7-bf87-f5128d1e22a5",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; &nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_c33399c2-320d-4d7b-a7bf-bfe42a307b24_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_c33399c2-320d-4d7b-a7bf-bfe42a307b24_content\" class=\"kfSupportContent\"> </span>how did Tomas Edison invent the light bulb?- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_c33399c2-320d-4d7b-a7bf-bfe42a307b24_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;<span id=\"mce_2\">&nbsp;</span>&nbsp;&nbsp;</p>\n\n",
                "guid": "a06b1423-e95d-45a7-bf87-f5128d1e22a5",
                "riseAbove": false,
                "attachments": [],
                "title": "light bulb",
                "created": "Sep 29, 2015 12:12:26 PM",
                "modified": "Sep 29, 2015 12:14:16 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Stephaniem",
                        "lastName": "M",
                        "guid": "7bbda1ab-35a9-4143-bd4a-be9ccdcdb907",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Stephanie"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "7bbda1ab-35a9-4143-bd4a-be9ccdcdb907",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "a06b1423-e95d-45a7-bf87-f5128d1e22a5",
                "point": {
                    "y": 426,
                    "x": 1316
                }
            },
            "rotation": 0.0,
            "guid": "ecd871b2-6373-4815-9905-849e92112422",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "3c13a353-7c03-4b14-b9cf-4a88ffc33efc",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_2eacda2c-dfa8-4237-bfe3-10a946191ee4_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-&nbsp;<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_2eacda2c-dfa8-4237-bfe3-10a946191ee4_content\" class=\"kfSupportContent\"></span>I mean more like 1000 miles away- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_2eacda2c-dfa8-4237-bfe3-10a946191ee4_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "3c13a353-7c03-4b14-b9cf-4a88ffc33efc",
                "riseAbove": false,
                "attachments": [],
                "title": "yes..",
                "created": "Dec 4, 2015 10:02:43 AM",
                "modified": "Dec 7, 2015 2:40:58 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Liviaw",
                        "lastName": "W",
                        "guid": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Livia"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "3c13a353-7c03-4b14-b9cf-4a88ffc33efc",
                "point": {
                    "y": 27,
                    "x": 988
                }
            },
            "rotation": 0.0,
            "guid": "0833f1e5-d378-49ce-aaf6-3b43a9b030a3",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "08a90d23-998b-440c-8843-a5dd97f837c1",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;<span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_01bc9dfc-4a24-4bc3-a489-3d17281ca66e_start\" class=\"mceNonEditable kfSupportStartTag\"><span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_01bc9dfc-4a24-4bc3-a489-3d17281ca66e_content\" class=\"kfSupportContent\"> </span>if there were no mirrors what will happen?- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_01bc9dfc-4a24-4bc3-a489-3d17281ca66e_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;&nbsp;</p>\n\n",
                "guid": "08a90d23-998b-440c-8843-a5dd97f837c1",
                "riseAbove": false,
                "attachments": [],
                "title": "what will happen",
                "created": "Nov 2, 2015 2:55:14 PM",
                "modified": "Nov 2, 2015 2:56:08 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Avery",
                        "lastName": "M",
                        "guid": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Avery"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "08a90d23-998b-440c-8843-a5dd97f837c1",
                "point": {
                    "y": 360,
                    "x": 1446
                }
            },
            "rotation": 0.0,
            "guid": "ef0c815b-03a8-4f8d-9ca2-d55c20b14e6b",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "09becdb3-bd94-43c9-bb5e-9fdbc97dd8a1",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_5bb90c1c-fba1-4e75-ad7e-2f3050c4a911_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_5bb90c1c-fba1-4e75-ad7e-2f3050c4a911_content\" class=\"kfSupportContent\"> </span>Why is space black?</p>\n<p>&nbsp;</p>\n<p>&nbsp;from Nicola - <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_5bb90c1c-fba1-4e75-ad7e-2f3050c4a911_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "09becdb3-bd94-43c9-bb5e-9fdbc97dd8a1",
                "riseAbove": false,
                "attachments": [],
                "title": "why black?",
                "created": "Nov 2, 2015 2:54:54 PM",
                "modified": "Nov 2, 2015 2:54:54 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Alexander",
                        "lastName": "H",
                        "guid": "af22be6c-2092-47af-9f00-87b472360119",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Alexander"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "af22be6c-2092-47af-9f00-87b472360119",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "09becdb3-bd94-43c9-bb5e-9fdbc97dd8a1",
                "point": {
                    "y": 405,
                    "x": 703
                }
            },
            "rotation": 0.0,
            "guid": "c65aa17a-9b98-4c6b-ba1d-868c0a1c33b0",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "96289b00-5514-4c7b-a73c-b974122968d2",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"f5a2f488-d05c-453d-8bbf-f4fe8bd9306b_1fd2f42c-178d-472a-a229-6c0e15eafd3f_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">Evidence</span> </span>-&nbsp;<span id=\"f5a2f488-d05c-453d-8bbf-f4fe8bd9306b_1fd2f42c-178d-472a-a229-6c0e15eafd3f_content\" class=\"kfSupportContent\"></span>I think that people make mirrors out of a special type of glass that you CANT see through but it reflects whatever you put in front of it- <span id=\"f5a2f488-d05c-453d-8bbf-f4fe8bd9306b_1fd2f42c-178d-472a-a229-6c0e15eafd3f_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "96289b00-5514-4c7b-a73c-b974122968d2",
                "riseAbove": false,
                "attachments": [],
                "title": "my theory",
                "created": "Nov 11, 2015 9:49:22 AM",
                "modified": "Nov 11, 2015 9:50:15 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Liviaw",
                        "lastName": "W",
                        "guid": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Livia"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "96289b00-5514-4c7b-a73c-b974122968d2",
                "point": {
                    "y": 382,
                    "x": 1547
                }
            },
            "rotation": 0.0,
            "guid": "6e8fb2fb-aab4-41fd-ba42-61504bf86ed6",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "141f9bc2-3bac-4b08-8ac8-d3f0f4d3ddbd",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_98eb60fe-1d98-4933-80d0-c14816df654e_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_98eb60fe-1d98-4933-80d0-c14816df654e_content\" class=\"kfSupportContent\"> </span>different&nbsp; people have different theory's about how light travels! - <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_98eb60fe-1d98-4933-80d0-c14816df654e_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "141f9bc2-3bac-4b08-8ac8-d3f0f4d3ddbd",
                "riseAbove": false,
                "attachments": [],
                "title": "people",
                "created": "Sep 29, 2015 12:25:52 PM",
                "modified": "Nov 13, 2015 9:58:08 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Toby",
                        "lastName": "F",
                        "guid": "a4bbb0d0-3ca5-4246-98c7-b39b452622d0",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Toby"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a4bbb0d0-3ca5-4246-98c7-b39b452622d0",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "141f9bc2-3bac-4b08-8ac8-d3f0f4d3ddbd",
                "point": {
                    "y": 360,
                    "x": 1366
                }
            },
            "rotation": 0.0,
            "guid": "a26eacf7-c1f7-4e70-804d-7e0f4df87355",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "7e1b1d12-7c19-4e6d-92d0-b1d4f77b8de4",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"883edd26-8ae4-489e-863e-60371392d672_f09be71a-8549-4017-8b15-f03f491037cd_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">A different theory</span> </span>- <span id=\"883edd26-8ae4-489e-863e-60371392d672_f09be71a-8549-4017-8b15-f03f491037cd_content\" class=\"kfSupportContent\"> </span>The fire balls are comets and asteroids. And I don't think that's how 7 continents were made. &nbsp; &nbsp; &nbsp; - <span id=\"883edd26-8ae4-489e-863e-60371392d672_f09be71a-8549-4017-8b15-f03f491037cd_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "7e1b1d12-7c19-4e6d-92d0-b1d4f77b8de4",
                "riseAbove": false,
                "attachments": [],
                "title": "sun",
                "created": "Oct 23, 2015 10:19:09 AM",
                "modified": "Nov 13, 2015 9:56:17 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Henrym",
                        "lastName": "M",
                        "guid": "00a13724-1126-4d5d-99db-6e34218b6264",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Henry"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "00a13724-1126-4d5d-99db-6e34218b6264",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "7e1b1d12-7c19-4e6d-92d0-b1d4f77b8de4",
                "point": {
                    "y": 277,
                    "x": 249
                }
            },
            "rotation": 0.0,
            "guid": "59f057fc-448a-41aa-aeda-a493d2acd01c",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "e06b1fa7-0ec6-43dc-bbda-8efca3e79103",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": true,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "copierId": "de63ab28-39a5-4452-b96c-a145684cec50",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_a9b306f7-7d64-40d7-83ae-8ba048323d95_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-&nbsp;<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_a9b306f7-7d64-40d7-83ae-8ba048323d95_content\" class=\"kfSupportContent\"></span>I think so- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_a9b306f7-7d64-40d7-83ae-8ba048323d95_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "e06b1fa7-0ec6-43dc-bbda-8efca3e79103",
                "riseAbove": false,
                "attachments": [],
                "title": "yes",
                "created": "Sep 29, 2015 12:27:49 PM",
                "modified": "Sep 29, 2015 12:27:49 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Coen",
                        "lastName": "R",
                        "guid": "bf6fb158-8844-4727-866b-4d8ca3fe1723",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Coen"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "bf6fb158-8844-4727-866b-4d8ca3fe1723",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "e06b1fa7-0ec6-43dc-bbda-8efca3e79103",
                "point": {
                    "y": 314,
                    "x": 861
                }
            },
            "rotation": 0.0,
            "guid": "2b14f42e-f63c-4eda-bb72-55a0b889e10e",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "11fdbc75-01d1-4c4f-86d8-a8e94c56ad6f",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_96f16785-592f-4343-a51f-6e3547474073_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_96f16785-592f-4343-a51f-6e3547474073_content\" class=\"kfSupportContent\"> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_96f16785-592f-4343-a51f-6e3547474073_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;yeah but what way if it went up down at&nbsp; antartica&nbsp; would&nbsp; the only&nbsp; place getting day wich is<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_f718f6d2-a87d-47ef-a2d5-216f1b678b30_content\" class=\"kfSupportContent\"></span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_f718f6d2-a87d-47ef-a2d5-216f1b678b30_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp; weird</p>\n\n",
                "guid": "11fdbc75-01d1-4c4f-86d8-a8e94c56ad6f",
                "riseAbove": false,
                "attachments": [],
                "title": "how does antartica get day",
                "created": "Nov 11, 2015 9:45:55 AM",
                "modified": "Nov 13, 2015 9:54:55 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Sami",
                        "lastName": "I",
                        "guid": "3510453f-a280-4d5d-b1f2-69b5a4fcf940",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Sam"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "3510453f-a280-4d5d-b1f2-69b5a4fcf940",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "11fdbc75-01d1-4c4f-86d8-a8e94c56ad6f",
                "point": {
                    "y": 471,
                    "x": 733
                }
            },
            "rotation": 0.0,
            "guid": "11367484-324a-487d-b866-c8f354a74d42",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "7445cd1c-c359-4fcb-b62f-bf7d421066fc",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_5a89c456-0982-4652-b040-57f40dd46621_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_5a89c456-0982-4652-b040-57f40dd46621_content\" class=\"kfSupportContent\"> </span>the sun is 149.6 million km, the closest some wane can get is 3,000,000.million miles - <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_5a89c456-0982-4652-b040-57f40dd46621_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "7445cd1c-c359-4fcb-b62f-bf7d421066fc",
                "riseAbove": false,
                "attachments": [],
                "title": "Earth",
                "created": "Nov 20, 2015 10:03:55 AM",
                "modified": "Nov 20, 2015 10:07:04 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Henrym",
                        "lastName": "M",
                        "guid": "00a13724-1126-4d5d-99db-6e34218b6264",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Henry"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "00a13724-1126-4d5d-99db-6e34218b6264",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "7445cd1c-c359-4fcb-b62f-bf7d421066fc",
                "point": {
                    "y": 81,
                    "x": 940
                }
            },
            "rotation": 0.0,
            "guid": "7c6a5497-6caf-454a-9e8c-473dafe4f626",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "59d8f23e-6291-45aa-bcfe-ea47ced8fa6b",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b8913d0a-4bfb-4f53-958b-129a9b24d1d2_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b8913d0a-4bfb-4f53-958b-129a9b24d1d2_content\" class=\"kfSupportContent\"> </span>I think that the sun is so bright that it gives off light.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b8913d0a-4bfb-4f53-958b-129a9b24d1d2_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "59d8f23e-6291-45aa-bcfe-ea47ced8fa6b",
                "riseAbove": false,
                "attachments": [],
                "title": "so bright",
                "created": "Nov 20, 2015 9:56:05 AM",
                "modified": "Dec 4, 2015 9:50:14 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Avery",
                        "lastName": "M",
                        "guid": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Avery"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "59d8f23e-6291-45aa-bcfe-ea47ced8fa6b",
                "point": {
                    "y": 334,
                    "x": 312
                }
            },
            "rotation": 0.0,
            "guid": "386d5a4b-29b0-42a5-828c-59b93bc43b03",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "f83ad0f0-32ac-4e58-800f-c27b0229b8d3",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_8901db1c-fe6c-47d4-85b4-c88a3346426a_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>-what are nutrinos? <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_8901db1c-fe6c-47d4-85b4-c88a3346426a_content\" class=\"kfSupportContent\"> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_8901db1c-fe6c-47d4-85b4-c88a3346426a_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "f83ad0f0-32ac-4e58-800f-c27b0229b8d3",
                "riseAbove": false,
                "attachments": [],
                "title": "what are nutrinos",
                "created": "Sep 14, 2015 2:43:39 PM",
                "modified": "Sep 14, 2015 2:44:27 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Theo",
                        "lastName": "F",
                        "guid": "f2d28a94-128d-43f0-a1f0-bf3080443874",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Theo"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "f2d28a94-128d-43f0-a1f0-bf3080443874",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "f83ad0f0-32ac-4e58-800f-c27b0229b8d3",
                "point": {
                    "y": 390,
                    "x": 1357
                }
            },
            "rotation": 0.0,
            "guid": "022b2c1e-e7bc-4284-b7aa-ca381d98865d",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "ecd4fb9d-08c6-4e6e-a04d-833e954adf39",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; i think 100 miles. it could be 3000 miles. the sun is very hot. the sun is like fire!&nbsp;&nbsp;</p>\n\n",
                "guid": "ecd4fb9d-08c6-4e6e-a04d-833e954adf39",
                "riseAbove": false,
                "attachments": [],
                "title": "like fire",
                "created": "Nov 11, 2015 9:58:32 AM",
                "modified": "Nov 13, 2015 9:58:48 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Avery",
                        "lastName": "M",
                        "guid": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Avery"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "ecd4fb9d-08c6-4e6e-a04d-833e954adf39",
                "point": {
                    "y": 31,
                    "x": 609
                }
            },
            "rotation": 0.0,
            "guid": "81007860-e6be-4485-8e43-51b6dc82207a",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "6644a2a8-cb11-4779-a913-201bdbb7b337",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; If you will, I recommend that you take the nearest pencil and do the following:&nbsp;</p>\n<p>1. Twiddle it very fast and stare at the pencil part.</p>\n<p>2. If you don't see the colours: Red, green, White, and a bit of black. Take it to a darker space with some white light shining and then, twiddle.&nbsp;</p>\n<p>3. If you see the colours; Yippe. If you don't; Try again.</p>\n<p>I'm crossing my fingers that this works.</p>\n\n",
                "guid": "6644a2a8-cb11-4779-a913-201bdbb7b337",
                "riseAbove": false,
                "attachments": [],
                "title": "Fast and not-so-furious",
                "created": "Nov 11, 2015 9:35:12 AM",
                "modified": "Nov 11, 2015 9:42:09 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Alexander",
                        "lastName": "H",
                        "guid": "af22be6c-2092-47af-9f00-87b472360119",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Alexander"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "af22be6c-2092-47af-9f00-87b472360119",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "6644a2a8-cb11-4779-a913-201bdbb7b337",
                "point": {
                    "y": 571,
                    "x": 220
                }
            },
            "rotation": 0.0,
            "guid": "699d423a-23ce-44db-8c2e-e18bfa62d117",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "b481f215-b5ec-4696-bea3-6f0e01bb229f",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_a019b5d3-3721-4a56-9739-2178d48cec3a_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_a019b5d3-3721-4a56-9739-2178d48cec3a_content\" class=\"kfSupportContent\"> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_a019b5d3-3721-4a56-9739-2178d48cec3a_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp; there is a shield that protects our earth from the frequent fireballs sent from the sun. the pressure from the sun probably gives the sky it's color.&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_ab19ce0a-4453-4f01-8cc2-0188d555bab5_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_ab19ce0a-4453-4f01-8cc2-0188d555bab5_content\" class=\"kfSupportContent\"> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_ab19ce0a-4453-4f01-8cc2-0188d555bab5_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp;&nbsp; </span>then how does it get overcast? </p>\n\n",
                "guid": "b481f215-b5ec-4696-bea3-6f0e01bb229f",
                "riseAbove": false,
                "attachments": [],
                "title": "under pressure",
                "created": "Sep 14, 2015 2:51:27 PM",
                "modified": "Sep 14, 2015 2:52:16 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Alexander",
                        "lastName": "H",
                        "guid": "af22be6c-2092-47af-9f00-87b472360119",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Alexander"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "af22be6c-2092-47af-9f00-87b472360119",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "b481f215-b5ec-4696-bea3-6f0e01bb229f",
                "point": {
                    "y": 390,
                    "x": 1450
                }
            },
            "rotation": 0.0,
            "guid": "6d94851d-7245-4fa9-a1ca-bf8f890355a7",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "2ecbeb63-f561-4e3a-98d9-155a76192daa",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_beb29c31-e036-4fb3-82d4-9de60cacd521_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_beb29c31-e036-4fb3-82d4-9de60cacd521_content\" class=\"kfSupportContent\"> i did that once it was really hot</span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_beb29c31-e036-4fb3-82d4-9de60cacd521_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "2ecbeb63-f561-4e3a-98d9-155a76192daa",
                "riseAbove": false,
                "attachments": [],
                "title": "really hot",
                "created": "Sep 14, 2015 2:48:04 PM",
                "modified": "Sep 14, 2015 2:48:04 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Avery",
                        "lastName": "M",
                        "guid": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Avery"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a163d08b-f1db-49bf-90f5-22f21c4e5b1e",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "2ecbeb63-f561-4e3a-98d9-155a76192daa",
                "point": {
                    "y": 522,
                    "x": 351
                }
            },
            "rotation": 0.0,
            "guid": "360647aa-70f1-4a98-8273-51170bb4747d",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "225133a0-c940-4096-9980-d5ec09b2362f",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_ee4d610d-93de-47ca-bdbe-48869e9090bf_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_ee4d610d-93de-47ca-bdbe-48869e9090bf_content\" class=\"kfSupportContent\"> </span>I think light can reflect off of black paper but not as well as mirrors it really can!!!- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_ee4d610d-93de-47ca-bdbe-48869e9090bf_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "225133a0-c940-4096-9980-d5ec09b2362f",
                "riseAbove": false,
                "attachments": [],
                "title": "black paper reflect",
                "created": "Nov 13, 2015 10:07:26 AM",
                "modified": "Nov 13, 2015 10:08:14 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Toby",
                        "lastName": "F",
                        "guid": "a4bbb0d0-3ca5-4246-98c7-b39b452622d0",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Toby"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a4bbb0d0-3ca5-4246-98c7-b39b452622d0",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "225133a0-c940-4096-9980-d5ec09b2362f",
                "point": {
                    "y": 434,
                    "x": 1362
                }
            },
            "rotation": 0.0,
            "guid": "7e857d2c-c1b9-4a3b-8a72-966a4c271ed7",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "9c1a3836-c361-4498-9f1b-b408b57cb966",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": true,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "copierId": "de63ab28-39a5-4452-b96c-a145684cec50",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_a4eaae1f-f310-4590-b297-11da36de1d81_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-The sun is made up of hot gases and like fire sort of it gives of heat and light. &nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_a4eaae1f-f310-4590-b297-11da36de1d81_content\" class=\"kfSupportContent\"></span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_a4eaae1f-f310-4590-b297-11da36de1d81_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp;&nbsp; </span></p>\n\n",
                "guid": "9c1a3836-c361-4498-9f1b-b408b57cb966",
                "riseAbove": false,
                "attachments": [],
                "title": "gas",
                "created": "Oct 23, 2015 10:19:47 AM",
                "modified": "Oct 23, 2015 10:20:44 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Nicola",
                        "lastName": "P",
                        "guid": "4f21c14c-2992-4a33-967c-caa052984eb0",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Nicola"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "4f21c14c-2992-4a33-967c-caa052984eb0",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "9c1a3836-c361-4498-9f1b-b408b57cb966",
                "point": {
                    "y": 305,
                    "x": 383
                }
            },
            "rotation": 0.0,
            "guid": "d06399d3-ff79-45ed-8cea-b0a14788046e",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "66fa0336-c644-44dd-8c4c-61e7e7fe7ea9",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_db54fdaa-7f34-42f6-ac48-5f6ad20c32c3_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-&nbsp;<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_db54fdaa-7f34-42f6-ac48-5f6ad20c32c3_content\" class=\"kfSupportContent\"></span>I think it has to do with the miterel- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_db54fdaa-7f34-42f6-ac48-5f6ad20c32c3_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "66fa0336-c644-44dd-8c4c-61e7e7fe7ea9",
                "riseAbove": false,
                "attachments": [],
                "title": "the miterel",
                "created": "Sep 28, 2015 2:59:10 PM",
                "modified": "Sep 28, 2015 2:59:10 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Kai",
                        "lastName": "G",
                        "guid": "bd696134-9060-4dde-85c9-9652afac4d16",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Kai"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "bd696134-9060-4dde-85c9-9652afac4d16",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "66fa0336-c644-44dd-8c4c-61e7e7fe7ea9",
                "point": {
                    "y": 371,
                    "x": 1369
                }
            },
            "rotation": 0.0,
            "guid": "05aad48c-bf54-4fe2-bf43-505c786ba251",
            "display": 2
        },
        {
            "statusForAuthor": {
                "postGuid": "45839e64-afa6-454c-8e81-a067d8bf332d",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_d1089bcf-aab5-46f4-b86a-cd906c29881c_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-<span style=\"font-size: 10pt;\">When its night if you look in the sky it is dark&nbsp; because&nbsp; the sun is on the other side of the world so there is light there but not here. Like when my cousin was in China it was 2 at night here and 2 in the after there in China. Livia-Lauren<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_d1089bcf-aab5-46f4-b86a-cd906c29881c_content\" class=\"kfSupportContent\"> </span>- </span><span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_d1089bcf-aab5-46f4-b86a-cd906c29881c_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span><span style=\"font-size: 10pt;\">&nbsp;&nbsp;</span></p>\n\n",
                "guid": "45839e64-afa6-454c-8e81-a067d8bf332d",
                "riseAbove": false,
                "attachments": [],
                "title": "other side of the world",
                "created": "Nov 2, 2015 3:00:18 PM",
                "modified": "Nov 13, 2015 9:55:00 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Laurenk",
                        "lastName": "K",
                        "guid": "76c4b72c-af48-4629-be90-e93be126e960",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Lauren"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "76c4b72c-af48-4629-be90-e93be126e960",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "45839e64-afa6-454c-8e81-a067d8bf332d",
                "point": {
                    "y": 440,
                    "x": 671
                }
            },
            "rotation": 0.0,
            "guid": "35ac753f-134a-48a3-87f7-cd53ff36e40e",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "6bc23df5-5829-4ba4-9e92-efa703c4124d",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;<span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_02e86dc5-72d5-48ff-bde7-26398c5e5a40_start\" class=\"mceNonEditable kfSupportStartTag\"><span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_02e86dc5-72d5-48ff-bde7-26398c5e5a40_content\" class=\"kfSupportContent\"> </span>UV rays are critical in germ defense, UV rays usually fry germs to a crisp. in some hospitals when an infected patient leaves a room they send in a robot to flash fry the room in UV rays so that they can kill germs. But Kai is right. UV rays are dangerous. You would turn into a potato chip if you got the full force of the ray. The atmosphere keeps out some UV rays but not all of them. this is why we have to save the environment. more holes in the atmosphere the more UV rays getting through.&nbsp;&nbsp; - <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_02e86dc5-72d5-48ff-bde7-26398c5e5a40_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;</p>\n<p>&nbsp;</p>\n\n",
                "guid": "6bc23df5-5829-4ba4-9e92-efa703c4124d",
                "riseAbove": false,
                "attachments": [],
                "title": "UV rays are tools",
                "created": "Nov 11, 2015 9:37:57 AM",
                "modified": "Nov 20, 2015 9:25:00 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Kingsley",
                        "lastName": "S",
                        "guid": "78c67bf2-95d2-42fe-911a-26168fa2a6f1",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Kingsley"
                    },
                    {
                        "userName": "Kai",
                        "lastName": "G",
                        "guid": "bd696134-9060-4dde-85c9-9652afac4d16",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Kai"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "78c67bf2-95d2-42fe-911a-26168fa2a6f1",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "6bc23df5-5829-4ba4-9e92-efa703c4124d",
                "point": {
                    "y": 381,
                    "x": 1414
                }
            },
            "rotation": 0.0,
            "guid": "89796c93-67a3-46e7-93a1-9a1201c4098a",
            "display": 2
        },
        {
            "statusForAuthor": {
                "postGuid": "96476d3a-e258-4b64-92bc-676159f2732f",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_985e63fb-584e-411b-ac92-c2d84eeb51d1_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_985e63fb-584e-411b-ac92-c2d84eeb51d1_content\" class=\"kfSupportContent\"> </span>what is light?- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_985e63fb-584e-411b-ac92-c2d84eeb51d1_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;<span id=\"mce_2\"> &nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_0ce2e32d-b25e-46b1-9638-e4cb0a56ed50_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_0ce2e32d-b25e-46b1-9638-e4cb0a56ed50_content\" class=\"kfSupportContent\"> </span>is. light is a&nbsp; of energy that travels very very fast!!!!- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_0ce2e32d-b25e-46b1-9638-e4cb0a56ed50_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;<br></span></p>\n\n",
                "guid": "96476d3a-e258-4b64-92bc-676159f2732f",
                "riseAbove": false,
                "attachments": [],
                "title": "what is light",
                "created": "Sep 14, 2015 2:41:32 PM",
                "modified": "Sep 14, 2015 2:50:49 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Toby",
                        "lastName": "F",
                        "guid": "a4bbb0d0-3ca5-4246-98c7-b39b452622d0",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Toby"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a4bbb0d0-3ca5-4246-98c7-b39b452622d0",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "96476d3a-e258-4b64-92bc-676159f2732f",
                "point": {
                    "y": 208,
                    "x": 1051
                }
            },
            "rotation": 0.0,
            "guid": "e21a9ae2-a30d-4d56-8ebf-711524088246",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "977fa549-f6e2-4cd6-a512-79e8ca0ded7c",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_dd1392e4-c1e9-4956-9ed5-a6ecb02b7968_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_dd1392e4-c1e9-4956-9ed5-a6ecb02b7968_content\" class=\"kfSupportContent\"> </span>light is one of the most imported things in are body- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_dd1392e4-c1e9-4956-9ed5-a6ecb02b7968_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "977fa549-f6e2-4cd6-a512-79e8ca0ded7c",
                "riseAbove": false,
                "attachments": [],
                "title": "body light!!!!!!",
                "created": "Nov 2, 2015 3:00:17 PM",
                "modified": "Nov 2, 2015 3:00:19 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Toby",
                        "lastName": "F",
                        "guid": "a4bbb0d0-3ca5-4246-98c7-b39b452622d0",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Toby"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a4bbb0d0-3ca5-4246-98c7-b39b452622d0",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "977fa549-f6e2-4cd6-a512-79e8ca0ded7c",
                "point": {
                    "y": 146,
                    "x": 204
                }
            },
            "rotation": 0.0,
            "guid": "364079a7-fd57-480c-a567-eacbdf7bbfe2",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "e88b3b94-dfed-42eb-b011-9346a17beb83",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_91ca7d35-96eb-44da-9d7d-6b24c68fe2f2_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_91ca7d35-96eb-44da-9d7d-6b24c68fe2f2_content\" class=\"kfSupportContent\"> </span>It hurts because the light source is so bright and your eyes can't handle it- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_91ca7d35-96eb-44da-9d7d-6b24c68fe2f2_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "e88b3b94-dfed-42eb-b011-9346a17beb83",
                "riseAbove": false,
                "attachments": [],
                "title": "why your eyes hurt when you look at a light source",
                "created": "Dec 7, 2015 2:38:16 PM",
                "modified": "Dec 7, 2015 2:38:16 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Laurenk",
                        "lastName": "K",
                        "guid": "76c4b72c-af48-4629-be90-e93be126e960",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Lauren"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "76c4b72c-af48-4629-be90-e93be126e960",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "e88b3b94-dfed-42eb-b011-9346a17beb83",
                "point": {
                    "y": 4,
                    "x": 472
                }
            },
            "rotation": 0.0,
            "guid": "6502c689-f221-4ac1-9fdc-f4120a5a3b45",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "3165cdfd-7b3b-4c66-a01a-fdc88bfd7856",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b5b7a968-962d-444f-8f30-2a2c2df9cb13_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-<span style=\"text-decoration: underline;\"><span style=\"text-decoration: line-through;\"><em><strong>L</strong></em></span></span><em><strong>ight can be every where</strong></em><span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b5b7a968-962d-444f-8f30-2a2c2df9cb13_content\" class=\"kfSupportContent\"></span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b5b7a968-962d-444f-8f30-2a2c2df9cb13_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "3165cdfd-7b3b-4c66-a01a-fdc88bfd7856",
                "riseAbove": false,
                "attachments": [],
                "title": "LIght is everywhere",
                "created": "Dec 4, 2015 9:58:13 AM",
                "modified": "Dec 4, 2015 9:59:10 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Danielca",
                        "lastName": "C",
                        "guid": "0081a70e-cd6b-425b-92f9-519daabab157",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Daniel"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "0081a70e-cd6b-425b-92f9-519daabab157",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "3165cdfd-7b3b-4c66-a01a-fdc88bfd7856",
                "point": {
                    "y": 200,
                    "x": 159
                }
            },
            "rotation": 0.0,
            "guid": "b5f25aaa-5902-4e21-918c-78cc47fa579a",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "616c3d20-ba6d-4891-97c2-1cd1a663c88a",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_c3f0d22a-a261-4401-aefd-768c553d1335_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span><span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_c3f0d22a-a261-4401-aefd-768c553d1335_content\" class=\"kfSupportContent\"></span>light might travel by echoing but echoing fast.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_c3f0d22a-a261-4401-aefd-768c553d1335_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;<span id=\"mce_1\">&nbsp;</span>&nbsp;</p>\n<p>By: Anna &amp; Amira</p>\n\n",
                "guid": "616c3d20-ba6d-4891-97c2-1cd1a663c88a",
                "riseAbove": false,
                "attachments": [],
                "title": "Travel",
                "created": "Nov 2, 2015 3:06:00 PM",
                "modified": "Nov 13, 2015 10:08:15 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Annas",
                        "lastName": "S",
                        "guid": "b296c05c-28e4-4261-8678-ce31f895cf51",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Anna"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "b296c05c-28e4-4261-8678-ce31f895cf51",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "616c3d20-ba6d-4891-97c2-1cd1a663c88a",
                "point": {
                    "y": 355,
                    "x": 1537
                }
            },
            "rotation": 0.0,
            "guid": "09d6f20f-52fb-4373-84e6-32234e0cfe38",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "22d5939a-556c-4f0a-83a8-c0c26ee38013",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_f7d1f51a-7218-4e1b-9087-8962c9e8188c_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>-How are day and night created?- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_f7d1f51a-7218-4e1b-9087-8962c9e8188c_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n<p>&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b11483b5-7a2e-477b-8ae4-978c028959d7_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- The sun is in the middle of the galaxy , the moon rotates around the earth and pulls the water and the earth rotates by itself and when it rotates that's why you can't see the sun.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b11483b5-7a2e-477b-8ae4-978c028959d7_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp; (Henry)</p>\n\n",
                "guid": "22d5939a-556c-4f0a-83a8-c0c26ee38013",
                "riseAbove": false,
                "attachments": [],
                "title": "How are day and night created?",
                "created": "Sep 13, 2015 5:07:44 PM",
                "modified": "Sep 13, 2015 5:11:13 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Robin",
                        "lastName": "S",
                        "guid": "de63ab28-39a5-4452-b96c-a145684cec50",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Robin"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "de63ab28-39a5-4452-b96c-a145684cec50",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "22d5939a-556c-4f0a-83a8-c0c26ee38013",
                "point": {
                    "y": 384,
                    "x": 640
                }
            },
            "rotation": 0.0,
            "guid": "15402a73-bfdf-489d-907f-8feb4f2ca75e",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "eb4f2341-c129-47f0-989b-c5b3a9e0e285",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; &nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_9a7a71be-b608-42d6-aa3a-ef114590ffaa_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-Light creates food<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_9a7a71be-b608-42d6-aa3a-ef114590ffaa_content\" class=\"kfSupportContent\"></span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_9a7a71be-b608-42d6-aa3a-ef114590ffaa_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;<span id=\"mce_3\">&nbsp;</span>&nbsp;&nbsp;</p>\n\n",
                "guid": "eb4f2341-c129-47f0-989b-c5b3a9e0e285",
                "riseAbove": false,
                "attachments": [],
                "title": "food",
                "created": "Nov 11, 2015 9:36:00 AM",
                "modified": "Nov 11, 2015 9:36:00 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Danielca",
                        "lastName": "C",
                        "guid": "0081a70e-cd6b-425b-92f9-519daabab157",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Daniel"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "0081a70e-cd6b-425b-92f9-519daabab157",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "eb4f2341-c129-47f0-989b-c5b3a9e0e285",
                "point": {
                    "y": 131,
                    "x": 113
                }
            },
            "rotation": 0.0,
            "guid": "002dd00d-2f64-4539-92d2-0d6fe3cf9eed",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "6397fe0f-e8f6-4e2f-9a66-61e0c0e451b5",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_af956115-19d3-4963-9f4e-12943265f1a5_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-Its imposible to stand on the sun for a minute because you would <strong><em>burn</em></strong><span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_af956115-19d3-4963-9f4e-12943265f1a5_content\" class=\"kfSupportContent\"></span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_af956115-19d3-4963-9f4e-12943265f1a5_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "6397fe0f-e8f6-4e2f-9a66-61e0c0e451b5",
                "riseAbove": false,
                "attachments": [],
                "title": "imposobility",
                "created": "Dec 4, 2015 10:01:42 AM",
                "modified": "Dec 4, 2015 10:01:42 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Danielca",
                        "lastName": "C",
                        "guid": "0081a70e-cd6b-425b-92f9-519daabab157",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Daniel"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "0081a70e-cd6b-425b-92f9-519daabab157",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "6397fe0f-e8f6-4e2f-9a66-61e0c0e451b5",
                "point": {
                    "y": 255,
                    "x": 222
                }
            },
            "rotation": 0.0,
            "guid": "2fc3c9d5-0fdf-47ab-a720-cafb5be7c0e7",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "8f88b17f-2949-4b82-896c-5cb01f690635",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_3bc652b0-4867-44c4-beef-93a7ad348e34_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_3bc652b0-4867-44c4-beef-93a7ad348e34_content\" class=\"kfSupportContent\"> light is a vary usful thing because if we did not have light we would probobly not have great homes and we would freeze in 7 min. we would also live in a dark abyss. so i think light is a great thing</span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_3bc652b0-4867-44c4-beef-93a7ad348e34_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp;&nbsp; </span></p>\n\n",
                "guid": "8f88b17f-2949-4b82-896c-5cb01f690635",
                "riseAbove": false,
                "attachments": [],
                "title": "life without light",
                "created": "Sep 14, 2015 2:40:38 PM",
                "modified": "Sep 14, 2015 2:47:43 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Liviaw",
                        "lastName": "W",
                        "guid": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Livia"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "8f88b17f-2949-4b82-896c-5cb01f690635",
                "point": {
                    "y": 148,
                    "x": 9
                }
            },
            "rotation": 0.0,
            "guid": "ddf1ed76-c97b-47ad-9310-545e4ab34583",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "d7ccc79a-c9a9-4522-a1a2-dcaadf192b92",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_f8e39787-567e-4851-80da-a5a897de762a_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_f8e39787-567e-4851-80da-a5a897de762a_content\" class=\"kfSupportContent\"> </span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_f8e39787-567e-4851-80da-a5a897de762a_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;is electricity completely natural? as Kingsley said. now imagine a giant generator whipping up electricity to power L.E.D. now imagine a bolt of lightning. many ask: \"What's the difference?\"well look up... that right above you is artificial light. but if bolts of lightning were to power the light above you it wouldn't be different. build on if you agree. &nbsp;&nbsp;&nbsp; <span id=\"mce_1\">&nbsp;</span>&nbsp;&nbsp;</p>\n\n",
                "guid": "d7ccc79a-c9a9-4522-a1a2-dcaadf192b92",
                "riseAbove": false,
                "attachments": [],
                "title": "modified",
                "created": "Sep 14, 2015 2:35:36 PM",
                "modified": "Sep 14, 2015 2:43:57 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Alexander",
                        "lastName": "H",
                        "guid": "af22be6c-2092-47af-9f00-87b472360119",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Alexander"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "af22be6c-2092-47af-9f00-87b472360119",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "d7ccc79a-c9a9-4522-a1a2-dcaadf192b92",
                "point": {
                    "y": 387,
                    "x": 1352
                }
            },
            "rotation": 0.0,
            "guid": "8afdb7c1-7cc7-4e64-a41a-6f07568461f2",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "93148ef4-ce01-45de-8943-e8db59fcbd26",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_74ddab21-1650-48a5-9966-77184c8a95c7_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- If there wasn't lights on cars and lamps at night then you can't see any cars and you can get in accidents easily.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_74ddab21-1650-48a5-9966-77184c8a95c7_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "93148ef4-ce01-45de-8943-e8db59fcbd26",
                "riseAbove": false,
                "attachments": [],
                "title": "Accidents",
                "created": "Sep 13, 2015 5:10:40 PM",
                "modified": "Sep 13, 2015 5:10:40 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Robin",
                        "lastName": "S",
                        "guid": "de63ab28-39a5-4452-b96c-a145684cec50",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Robin"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "de63ab28-39a5-4452-b96c-a145684cec50",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "93148ef4-ce01-45de-8943-e8db59fcbd26",
                "point": {
                    "y": 57,
                    "x": 10
                }
            },
            "rotation": 0.0,
            "guid": "d0aa2726-f910-4feb-8543-309cfc829fe5",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "0f2824dc-3858-4d07-b7f4-2c42b8cca5e8",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": true,
                "modified": "Dec 10, 2015 9:23:05 PM",
                "likes": false,
                "starred": false,
                "guid": "216f1224-6f92-4a4c-a62d-89fae6142306",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_db753c9a-d16c-4992-9d51-5588aac622db_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-is that the sun puts out so much light that it can melt metal. Even if you put your <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_db753c9a-d16c-4992-9d51-5588aac622db_content\" class=\"kfSupportContent\"></span>hand up&nbsp; beside a light its pretty hot&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_db753c9a-d16c-4992-9d51-5588aac622db_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;<span id=\"mce_3\">&nbsp;</span></p>\n\n",
                "guid": "0f2824dc-3858-4d07-b7f4-2c42b8cca5e8",
                "riseAbove": false,
                "attachments": [],
                "title": "Heat",
                "created": "Sep 14, 2015 2:43:08 PM",
                "modified": "Sep 14, 2015 2:45:35 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Harrisona",
                        "lastName": "A",
                        "guid": "d9dbd733-d6e8-48f0-9c48-561407b2f988",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Harrison"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "d9dbd733-d6e8-48f0-9c48-561407b2f988",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "0f2824dc-3858-4d07-b7f4-2c42b8cca5e8",
                "point": {
                    "y": 398,
                    "x": 485
                }
            },
            "rotation": 0.0,
            "guid": "d8830843-54ea-4b3e-aa80-5586572a5dc4",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "a86d7aa1-a385-4308-9512-4d95bccfc74e",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b9c05255-6089-4ff8-b024-8d79d79ec9b8_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b9c05255-6089-4ff8-b024-8d79d79ec9b8_content\" class=\"kfSupportContent\"> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b9c05255-6089-4ff8-b024-8d79d79ec9b8_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;&nbsp; Space is a... Well beautiful place: The silence, the sights and the stars. The three S's. Yet it can also be: Terrifying, Treacherous and Tearing. All because of GRAVITY. Spinning out of control, Floating away from earth, Away from home. Forever.</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>ISH</p>\n\n",
                "guid": "a86d7aa1-a385-4308-9512-4d95bccfc74e",
                "riseAbove": false,
                "attachments": [],
                "title": "GRAVITY",
                "created": "Nov 11, 2015 10:00:30 AM",
                "modified": "Nov 20, 2015 9:48:51 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Alexander",
                        "lastName": "H",
                        "guid": "af22be6c-2092-47af-9f00-87b472360119",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Alexander"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "af22be6c-2092-47af-9f00-87b472360119",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "a86d7aa1-a385-4308-9512-4d95bccfc74e",
                "point": {
                    "y": 701,
                    "x": 618
                }
            },
            "rotation": 0.0,
            "guid": "24629684-7cde-4c65-b8a4-420c3d878702",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "d5630f1a-46f1-4904-9bd4-e2acd7d7291a",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": true,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "copierId": "de63ab28-39a5-4452-b96c-a145684cec50",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_0c383d7d-d248-443a-a099-9418465e75f5_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_0c383d7d-d248-443a-a099-9418465e75f5_content\" class=\"kfSupportContent\"> </span>what is hubble?<span id=\"mce_0\"> </span>&nbsp; - <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_0c383d7d-d248-443a-a099-9418465e75f5_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "d5630f1a-46f1-4904-9bd4-e2acd7d7291a",
                "riseAbove": false,
                "attachments": [],
                "title": "i wonder ",
                "created": "Nov 11, 2015 9:56:27 AM",
                "modified": "Nov 20, 2015 9:59:05 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Husnain",
                        "lastName": "A",
                        "guid": "a3bc7829-1bd9-4dea-897b-d56fa6bc6ad1",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Husnain"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a3bc7829-1bd9-4dea-897b-d56fa6bc6ad1",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "d5630f1a-46f1-4904-9bd4-e2acd7d7291a",
                "point": {
                    "y": 257,
                    "x": 618
                }
            },
            "rotation": 0.0,
            "guid": "a4a822ed-de91-441d-8099-bb2886c4d97b",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "384c5314-4d82-4f1d-ba2b-9323c7bd2806",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_b6c3a120-2df0-4c57-bcd2-38d81e08765b_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_b6c3a120-2df0-4c57-bcd2-38d81e08765b_content\" class=\"kfSupportContent\"> </span>How does sun blind you?- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_b6c3a120-2df0-4c57-bcd2-38d81e08765b_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "384c5314-4d82-4f1d-ba2b-9323c7bd2806",
                "riseAbove": false,
                "attachments": [],
                "title": "blind you",
                "created": "Dec 4, 2015 10:01:40 AM",
                "modified": "Dec 4, 2015 10:01:40 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Amira",
                        "lastName": "F",
                        "guid": "20a3dada-c832-4ee4-85f1-a6accac0a4e2",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Amira"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "20a3dada-c832-4ee4-85f1-a6accac0a4e2",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "384c5314-4d82-4f1d-ba2b-9323c7bd2806",
                "point": {
                    "y": 220,
                    "x": 408
                }
            },
            "rotation": 0.0,
            "guid": "f7e3cd0c-a1e5-43b3-8732-77d9c0e8575a",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "88593a29-c3f4-4e9e-8114-67976f859574",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_0e2b8a89-481c-4d7a-80d1-c00ac74a739e_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-That is true but I was wondering&nbsp; if light was only in one place. For example, because the earth rotates sometimes we get night and sometimes day.&nbsp; If the sun was only in one place then maybe only Canada would get light.&nbsp; The earth goes around the sun but sometimes we face the other way.<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_0e2b8a89-481c-4d7a-80d1-c00ac74a739e_content\" class=\"kfSupportContent\"></span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_0e2b8a89-481c-4d7a-80d1-c00ac74a739e_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "88593a29-c3f4-4e9e-8114-67976f859574",
                "riseAbove": false,
                "attachments": [],
                "title": "thats true",
                "created": "Nov 11, 2015 9:38:35 AM",
                "modified": "Nov 13, 2015 10:07:06 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Husnain",
                        "lastName": "A",
                        "guid": "a3bc7829-1bd9-4dea-897b-d56fa6bc6ad1",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Husnain"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "a3bc7829-1bd9-4dea-897b-d56fa6bc6ad1",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "88593a29-c3f4-4e9e-8114-67976f859574",
                "point": {
                    "y": 475,
                    "x": 623
                }
            },
            "rotation": 0.0,
            "guid": "f589d09e-994a-4977-8e36-34e5e2dacdb8",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "c6f75f2c-1cf9-4ff9-a478-3215cf0e36b9",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_7f02de26-5cf5-4156-bb0a-e290361bf701_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_7f02de26-5cf5-4156-bb0a-e290361bf701_content\" class=\"kfSupportContent\"> </span>Because it is bright- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_7f02de26-5cf5-4156-bb0a-e290361bf701_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "c6f75f2c-1cf9-4ff9-a478-3215cf0e36b9",
                "riseAbove": false,
                "attachments": [],
                "title": "bright",
                "created": "Dec 4, 2015 9:51:18 AM",
                "modified": "Dec 4, 2015 9:51:18 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Coen",
                        "lastName": "R",
                        "guid": "bf6fb158-8844-4727-866b-4d8ca3fe1723",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Coen"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "bf6fb158-8844-4727-866b-4d8ca3fe1723",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "c6f75f2c-1cf9-4ff9-a478-3215cf0e36b9",
                "point": {
                    "y": 48,
                    "x": 296
                }
            },
            "rotation": 0.0,
            "guid": "d0f38027-0f1c-4b46-8cf4-e3c9c56f7932",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "43945eff-2a72-49e7-af09-94d7d1746ee6",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p><span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_83b138a9-c951-4f22-854c-51dbdf12066b_content\" class=\"kfSupportContent\"></span>&nbsp; </p>\n\n",
                "guid": "43945eff-2a72-49e7-af09-94d7d1746ee6",
                "riseAbove": false,
                "attachments": [],
                "title": "[Draft]",
                "created": "Dec 4, 2015 9:56:01 AM",
                "modified": "Dec 4, 2015 9:56:01 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Coen",
                        "lastName": "R",
                        "guid": "bf6fb158-8844-4727-866b-4d8ca3fe1723",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Coen"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "bf6fb158-8844-4727-866b-4d8ca3fe1723",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "43945eff-2a72-49e7-af09-94d7d1746ee6",
                "point": {
                    "y": 99,
                    "x": 17
                }
            },
            "rotation": 0.0,
            "guid": "62c2563d-e28e-45ab-987e-fd2ee227469d",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "5625d8bf-b5dd-4bd0-b931-9500b8ac1037",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_d3392225-98ee-4465-a1ea-3f91b7af9242_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_d3392225-98ee-4465-a1ea-3f91b7af9242_content\" class=\"kfSupportContent\"> </span>who was the first person to discover light and what year was it in?- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_d3392225-98ee-4465-a1ea-3f91b7af9242_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;<span id=\"mce_1\">&nbsp;</span>&nbsp;&nbsp;</p>\n\n",
                "guid": "5625d8bf-b5dd-4bd0-b931-9500b8ac1037",
                "riseAbove": false,
                "attachments": [],
                "title": "First Person",
                "created": "Dec 4, 2015 9:51:35 AM",
                "modified": "Dec 4, 2015 9:51:35 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Annas",
                        "lastName": "S",
                        "guid": "b296c05c-28e4-4261-8678-ce31f895cf51",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Anna"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "b296c05c-28e4-4261-8678-ce31f895cf51",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "5625d8bf-b5dd-4bd0-b931-9500b8ac1037",
                "point": {
                    "y": 372,
                    "x": 1076
                }
            },
            "rotation": 0.0,
            "guid": "deea3f7b-7675-42e6-a215-0cb2f224d78e",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "1c1d4c85-0f6d-495e-96d4-3ea474cc4443",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; &nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_13ed1cf9-8ec1-4d89-90f3-db087148b408_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>-how fast is light <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_13ed1cf9-8ec1-4d89-90f3-db087148b408_content\" class=\"kfSupportContent\"> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_13ed1cf9-8ec1-4d89-90f3-db087148b408_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;<span id=\"mce_0\">&nbsp; </span></p>\n<p>&nbsp; <span id=\"mce_3\">&nbsp;</span>&nbsp;&nbsp;</p>\n<p>&nbsp;</p>\n\n",
                "guid": "1c1d4c85-0f6d-495e-96d4-3ea474cc4443",
                "riseAbove": false,
                "attachments": [],
                "title": "fast",
                "created": "Sep 29, 2015 12:20:38 PM",
                "modified": "Nov 13, 2015 9:44:15 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Coen",
                        "lastName": "R",
                        "guid": "bf6fb158-8844-4727-866b-4d8ca3fe1723",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Coen"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "bf6fb158-8844-4727-866b-4d8ca3fe1723",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "1c1d4c85-0f6d-495e-96d4-3ea474cc4443",
                "point": {
                    "y": 351,
                    "x": 1400
                }
            },
            "rotation": 0.0,
            "guid": "5c5d87cc-bfa4-4514-9901-09539d77dbbe",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "86902886-7add-400a-b286-b60f8035d1b9",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_2fead0c8-1738-45d3-8a3e-8b45d3fd7754_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_2fead0c8-1738-45d3-8a3e-8b45d3fd7754_content\" class=\"kfSupportContent\"> </span>because bright goes in to your eyes and it makes you blind....- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_2fead0c8-1738-45d3-8a3e-8b45d3fd7754_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "86902886-7add-400a-b286-b60f8035d1b9",
                "riseAbove": false,
                "attachments": [],
                "title": "blind",
                "created": "Dec 4, 2015 9:58:26 AM",
                "modified": "Dec 4, 2015 9:58:26 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Coen",
                        "lastName": "R",
                        "guid": "bf6fb158-8844-4727-866b-4d8ca3fe1723",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Coen"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "bf6fb158-8844-4727-866b-4d8ca3fe1723",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "86902886-7add-400a-b286-b60f8035d1b9",
                "point": {
                    "y": 182,
                    "x": 370
                }
            },
            "rotation": 0.0,
            "guid": "aef5bb21-fee4-4e8b-aa5e-45c48eec460f",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "35369745-fe7d-4801-90c2-40e22c048d07",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_e60df826-891e-4209-8172-88406145cc0a_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_e60df826-891e-4209-8172-88406145cc0a_content\" class=\"kfSupportContent\"> </span>how fast dos lite travel- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_e60df826-891e-4209-8172-88406145cc0a_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "35369745-fe7d-4801-90c2-40e22c048d07",
                "riseAbove": false,
                "attachments": [],
                "title": "lite",
                "created": "Sep 28, 2015 2:57:12 PM",
                "modified": "Sep 28, 2015 2:57:12 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Henrym",
                        "lastName": "M",
                        "guid": "00a13724-1126-4d5d-99db-6e34218b6264",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Henry"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "00a13724-1126-4d5d-99db-6e34218b6264",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "35369745-fe7d-4801-90c2-40e22c048d07",
                "point": {
                    "y": 354,
                    "x": 1276
                }
            },
            "rotation": 0.0,
            "guid": "b3376376-f356-4d94-b4c3-002069bdd377",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "d1ed0417-e772-444f-81dc-763d5bcc9674",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;</p>\n<p>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_1f5f46a0-08c3-4a43-823c-996f75998d4c_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_1f5f46a0-08c3-4a43-823c-996f75998d4c_content\" class=\"kfSupportContent\"> </span>What are the common colours of light? I know the really common colours are yellow, and white but what are the rare colours? &nbsp;<span id=\"mce_1\"> </span>&nbsp;&nbsp;&nbsp; <span id=\"mce_1\"><br></span></p>\n\n",
                "guid": "d1ed0417-e772-444f-81dc-763d5bcc9674",
                "riseAbove": false,
                "attachments": [],
                "title": "Colours",
                "created": "Nov 11, 2015 9:46:24 AM",
                "modified": "Nov 20, 2015 9:51:29 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Annas",
                        "lastName": "S",
                        "guid": "b296c05c-28e4-4261-8678-ce31f895cf51",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Anna"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "b296c05c-28e4-4261-8678-ce31f895cf51",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "d1ed0417-e772-444f-81dc-763d5bcc9674",
                "point": {
                    "y": 366,
                    "x": 1437
                }
            },
            "rotation": 0.0,
            "guid": "735e7061-15ff-4435-8b4d-5380db9b621f",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "c122ea0e-116a-4da2-bc4e-9f81e8705035",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": true,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "copierId": "de63ab28-39a5-4452-b96c-a145684cec50",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_0852e85a-1a58-44b5-b7ff-d634ec0ff7c8_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>- H<span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_0852e85a-1a58-44b5-b7ff-d634ec0ff7c8_content\" class=\"kfSupportContent\"></span>ubble is a satellite and in Hubble's pictures&nbsp; you can go 1000 light years away it is hared to explain, but it's like you can move in the pictures&nbsp; - <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_0852e85a-1a58-44b5-b7ff-d634ec0ff7c8_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "c122ea0e-116a-4da2-bc4e-9f81e8705035",
                "riseAbove": false,
                "attachments": [],
                "title": "huble",
                "created": "Nov 11, 2015 9:51:23 AM",
                "modified": "Dec 4, 2015 10:00:02 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Henrym",
                        "lastName": "M",
                        "guid": "00a13724-1126-4d5d-99db-6e34218b6264",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Henry"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "00a13724-1126-4d5d-99db-6e34218b6264",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "c122ea0e-116a-4da2-bc4e-9f81e8705035",
                "point": {
                    "y": 226,
                    "x": 530
                }
            },
            "rotation": 0.0,
            "guid": "00f8faed-f024-46fc-96a2-e9a85ba2de75",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "8191e2bc-7f05-4d9c-b36a-52a65c056232",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_0a4709c2-6702-443c-8654-4a823b694511_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_0a4709c2-6702-443c-8654-4a823b694511_content\" class=\"kfSupportContent\"> </span>yes it is the sun,at my cotage i think i saw a satellite it was moving fast and it was blinking i think it was reflecting- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_0a4709c2-6702-443c-8654-4a823b694511_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "8191e2bc-7f05-4d9c-b36a-52a65c056232",
                "riseAbove": false,
                "attachments": [],
                "title": "sun reflecting",
                "created": "Nov 20, 2015 9:54:47 AM",
                "modified": "Nov 20, 2015 10:00:39 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Stephaniem",
                        "lastName": "M",
                        "guid": "7bbda1ab-35a9-4143-bd4a-be9ccdcdb907",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Stephanie"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "7bbda1ab-35a9-4143-bd4a-be9ccdcdb907",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "8191e2bc-7f05-4d9c-b36a-52a65c056232",
                "point": {
                    "y": 258,
                    "x": 995
                }
            },
            "rotation": 0.0,
            "guid": "8ac12531-ba9a-441a-b296-caa38bdb13bd",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "1114b499-7231-4df8-92aa-7fffb5220133",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_7633b779-28cc-48bd-a4dc-587aac95d254_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_7633b779-28cc-48bd-a4dc-587aac95d254_content\" class=\"kfSupportContent\"> </span>is you need light because if we didn't have light we would <span style=\"font-size: 18pt; font-family: arial black,avant garde;\">die </span>because light powers plants and plants power us. people wouldn't stay alive because we would not be able to see.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_7633b779-28cc-48bd-a4dc-587aac95d254_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "1114b499-7231-4df8-92aa-7fffb5220133",
                "riseAbove": false,
                "attachments": [],
                "title": "why we need light",
                "created": "Oct 23, 2015 10:15:33 AM",
                "modified": "Nov 13, 2015 9:51:29 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Laurenk",
                        "lastName": "K",
                        "guid": "76c4b72c-af48-4629-be90-e93be126e960",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Lauren"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "76c4b72c-af48-4629-be90-e93be126e960",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "1114b499-7231-4df8-92aa-7fffb5220133",
                "point": {
                    "y": 180,
                    "x": 160
                }
            },
            "rotation": 0.0,
            "guid": "832130e2-fb9b-418f-b463-27b431cbb284",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "7d2363d3-1a1c-4130-9803-7efabf9a512b",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_3a75ea7a-3a32-4c52-b00e-784ab0fd236f_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-is that light makes you look really big in a shadow<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_3a75ea7a-3a32-4c52-b00e-784ab0fd236f_content\" class=\"kfSupportContent\"></span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_3a75ea7a-3a32-4c52-b00e-784ab0fd236f_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "7d2363d3-1a1c-4130-9803-7efabf9a512b",
                "riseAbove": false,
                "attachments": [],
                "title": "Big shadow",
                "created": "Sep 28, 2015 2:54:24 PM",
                "modified": "Sep 28, 2015 2:54:24 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Harrisona",
                        "lastName": "A",
                        "guid": "d9dbd733-d6e8-48f0-9c48-561407b2f988",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Harrison"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "d9dbd733-d6e8-48f0-9c48-561407b2f988",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "7d2363d3-1a1c-4130-9803-7efabf9a512b",
                "point": {
                    "y": 437,
                    "x": 1501
                }
            },
            "rotation": 0.0,
            "guid": "96546204-0ea0-4d3c-a21d-89d92d2c25be",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "e72b573f-a848-4d7d-940e-3dacef5f1d4c",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; I think that the earth can't be 3000000 miles away!</p>\n\n",
                "guid": "e72b573f-a848-4d7d-940e-3dacef5f1d4c",
                "riseAbove": false,
                "attachments": [],
                "title": "Earth",
                "created": "Nov 20, 2015 9:56:26 AM",
                "modified": "Nov 20, 2015 9:56:26 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Henrym",
                        "lastName": "M",
                        "guid": "00a13724-1126-4d5d-99db-6e34218b6264",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Henry"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "00a13724-1126-4d5d-99db-6e34218b6264",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "e72b573f-a848-4d7d-940e-3dacef5f1d4c",
                "point": {
                    "y": 35,
                    "x": 905
                }
            },
            "rotation": 0.0,
            "guid": "9f0d8e10-997e-47ea-8e2c-1d5da03d1a48",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "033d3f06-81af-4c90-924b-2f497cb20ed1",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp;<span id=\"mce_1\"><span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_3e9dba19-37a4-485c-bfe4-b8a12373dc37_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_3e9dba19-37a4-485c-bfe4-b8a12373dc37_content\" class=\"kfSupportContent\"> Are theory because then you could not have mouth mirrors and then you would have lots of cavitits and also you could burn yourself when your welding. Stella/Stephanie<span id=\"mce_1\">&nbsp; </span></span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_3e9dba19-37a4-485c-bfe4-b8a12373dc37_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</span></p>\n\n",
                "guid": "033d3f06-81af-4c90-924b-2f497cb20ed1",
                "riseAbove": false,
                "attachments": [],
                "title": "mirrors",
                "created": "Nov 2, 2015 3:00:19 PM",
                "modified": "Nov 13, 2015 10:02:57 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Stephaniem",
                        "lastName": "M",
                        "guid": "7bbda1ab-35a9-4143-bd4a-be9ccdcdb907",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Stephanie"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "7bbda1ab-35a9-4143-bd4a-be9ccdcdb907",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "033d3f06-81af-4c90-924b-2f497cb20ed1",
                "point": {
                    "y": 379,
                    "x": 1465
                }
            },
            "rotation": 0.0,
            "guid": "733e7249-a4df-489c-9f9c-06a0100aaca6",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "c000ccff-949e-437d-88e4-31aa82392f73",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_fa9cfe51-6a03-47f9-a7ad-1b56e0801ded_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_fa9cfe51-6a03-47f9-a7ad-1b56e0801ded_content\" class=\"kfSupportContent\"> </span>Why does the spin wheel turn white in the dark but brown in the light?- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_fa9cfe51-6a03-47f9-a7ad-1b56e0801ded_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "c000ccff-949e-437d-88e4-31aa82392f73",
                "riseAbove": false,
                "attachments": [],
                "title": "White and Brown",
                "created": "Nov 11, 2015 9:42:43 AM",
                "modified": "Nov 11, 2015 9:42:43 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Zara",
                        "lastName": "M",
                        "guid": "fa0b4d07-d51a-4a43-83d1-c2f56b09bb03",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Zara"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "fa0b4d07-d51a-4a43-83d1-c2f56b09bb03",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "c000ccff-949e-437d-88e4-31aa82392f73",
                "point": {
                    "y": 364,
                    "x": 1518
                }
            },
            "rotation": 0.0,
            "guid": "eb02cd82-aa65-4ff4-b000-2bf21c627530",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "ccb25ff0-a1ad-4c4a-9ef2-51dbf9eec8c6",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_5b3cb5c1-0b74-4cda-acb9-2deecbdd9499_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_5b3cb5c1-0b74-4cda-acb9-2deecbdd9499_content\" class=\"kfSupportContent\"> </span>I think that the sky turns blue because the suns light against the black of space makes the sky appear blue. When our side of earth rotates away from the sun, the light goes away therefore we see the black of space and there side sees blue.&nbsp; - <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_5b3cb5c1-0b74-4cda-acb9-2deecbdd9499_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "ccb25ff0-a1ad-4c4a-9ef2-51dbf9eec8c6",
                "riseAbove": false,
                "attachments": [],
                "title": "why is the sky blue?",
                "created": "Sep 14, 2015 2:41:29 PM",
                "modified": "Sep 29, 2015 12:25:19 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Nicola",
                        "lastName": "P",
                        "guid": "4f21c14c-2992-4a33-967c-caa052984eb0",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Nicola"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "4f21c14c-2992-4a33-967c-caa052984eb0",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "ccb25ff0-a1ad-4c4a-9ef2-51dbf9eec8c6",
                "point": {
                    "y": 365,
                    "x": 1379
                }
            },
            "rotation": 0.0,
            "guid": "63e50d79-198d-43d8-a462-ba10305e8183",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "ba602636-186f-4e20-a0d7-df43355a9625",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>Light travels very very fast!!!!!&nbsp; </p>\n\n",
                "guid": "ba602636-186f-4e20-a0d7-df43355a9625",
                "riseAbove": false,
                "attachments": [],
                "title": "Fast",
                "created": "Sep 29, 2015 12:20:58 PM",
                "modified": "Sep 29, 2015 12:20:58 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Annas",
                        "lastName": "S",
                        "guid": "b296c05c-28e4-4261-8678-ce31f895cf51",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Anna"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "b296c05c-28e4-4261-8678-ce31f895cf51",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "ba602636-186f-4e20-a0d7-df43355a9625",
                "point": {
                    "y": 414,
                    "x": 1333
                }
            },
            "rotation": 0.0,
            "guid": "ccc9742a-b264-44f7-b4ff-2a5040181781",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "92c31343-6d96-49a9-ba1d-5735a4bb3c95",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;</p>\n<p>&nbsp;&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_feccf6d4-ee2c-449f-b338-26feccbc16c0_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>- fire has different colors because it depends on how <span style=\"font-size: 18pt; font-family: comic sans ms,sans-serif;\">hot</span> it is. I think blue is the hottest.</p>\n\n",
                "guid": "92c31343-6d96-49a9-ba1d-5735a4bb3c95",
                "riseAbove": false,
                "attachments": [],
                "title": "why fire is  different colors",
                "created": "Oct 23, 2015 10:22:44 AM",
                "modified": "Nov 13, 2015 9:52:16 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Laurenk",
                        "lastName": "K",
                        "guid": "76c4b72c-af48-4629-be90-e93be126e960",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Lauren"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "76c4b72c-af48-4629-be90-e93be126e960",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "92c31343-6d96-49a9-ba1d-5735a4bb3c95",
                "point": {
                    "y": 407,
                    "x": 1338
                }
            },
            "rotation": 0.0,
            "guid": "5e5d71f4-da71-45a3-a64d-359ca2cbbd7e",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "77cdcd44-dbe9-4a44-801a-5878563de534",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_e31e8fce-6410-46a5-913a-886fedd8ff98_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_e31e8fce-6410-46a5-913a-886fedd8ff98_content\" class=\"kfSupportContent\"> </span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_e31e8fce-6410-46a5-913a-886fedd8ff98_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp; if we dident have sun then plants wouldent be able to grow and they would die, then we woldent get oxygen and we would die too. so that means that the sun is a vary help full thing</p>\n\n",
                "guid": "77cdcd44-dbe9-4a44-801a-5878563de534",
                "riseAbove": false,
                "attachments": [],
                "title": "the sun realy helps",
                "created": "Sep 28, 2015 2:47:22 PM",
                "modified": "Oct 23, 2015 10:07:00 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Liviaw",
                        "lastName": "W",
                        "guid": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Livia"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "77cdcd44-dbe9-4a44-801a-5878563de534",
                "point": {
                    "y": 296,
                    "x": 450
                }
            },
            "rotation": 0.0,
            "guid": "03caf663-2a4c-45a9-b161-c2baead808dc",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "e1bb8f20-746d-4ea6-aa5b-757ffc27f30c",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_3263030e-9832-4a9e-90a3-aa6f11fe5078_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_3263030e-9832-4a9e-90a3-aa6f11fe5078_content\" class=\"kfSupportContent\"> </span>light can not reflect on everything... like black paper - <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_3263030e-9832-4a9e-90a3-aa6f11fe5078_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "e1bb8f20-746d-4ea6-aa5b-757ffc27f30c",
                "riseAbove": false,
                "attachments": [],
                "title": "light cannot",
                "created": "Nov 2, 2015 2:56:36 PM",
                "modified": "Nov 2, 2015 2:56:36 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Laurenk",
                        "lastName": "K",
                        "guid": "76c4b72c-af48-4629-be90-e93be126e960",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Lauren"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "76c4b72c-af48-4629-be90-e93be126e960",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "e1bb8f20-746d-4ea6-aa5b-757ffc27f30c",
                "point": {
                    "y": 403,
                    "x": 1337
                }
            },
            "rotation": 0.0,
            "guid": "252eda29-ba62-4e5d-84d6-6ee430bdbf8e",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "ac3ee4d9-c981-4f3b-81c9-32e7659128bf",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; &nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_1cd9eb20-e2e0-4a58-973c-4e8f38fd6326_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_1cd9eb20-e2e0-4a58-973c-4e8f38fd6326_content\" class=\"kfSupportContent\"> </span>I think that the sun is bright because its made of FIRE and fire is an element&nbsp; that is VARY VARY HOT!!!!- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_1cd9eb20-e2e0-4a58-973c-4e8f38fd6326_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "ac3ee4d9-c981-4f3b-81c9-32e7659128bf",
                "riseAbove": false,
                "attachments": [],
                "title": "sooo hot",
                "created": "Nov 11, 2015 9:35:16 AM",
                "modified": "Nov 11, 2015 9:35:16 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Liviaw",
                        "lastName": "W",
                        "guid": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Livia"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "e4ce7114-ad79-4aeb-b47a-505e2713429a",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "ac3ee4d9-c981-4f3b-81c9-32e7659128bf",
                "point": {
                    "y": 368,
                    "x": 499
                }
            },
            "rotation": 0.0,
            "guid": "d1d01eeb-a06a-44ee-ad0b-d77b4a75a029",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "3c737130-dd02-4857-a820-d4defeccff09",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"883edd26-8ae4-489e-863e-60371392d672_e256ef19-a0d3-4dba-afd2-a71cd1aca0b6_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">A different theory</span> </span>- <span id=\"883edd26-8ae4-489e-863e-60371392d672_e256ef19-a0d3-4dba-afd2-a71cd1aca0b6_content\" class=\"kfSupportContent\"> </span>I agree with you but I also think it has lava and the black spots on the sun are cooler than the red or orange spots.- <span id=\"883edd26-8ae4-489e-863e-60371392d672_e256ef19-a0d3-4dba-afd2-a71cd1aca0b6_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;<span id=\"mce_3\">&nbsp;</span>&nbsp;</p>\n\n",
                "guid": "3c737130-dd02-4857-a820-d4defeccff09",
                "riseAbove": false,
                "attachments": [],
                "title": "sun",
                "created": "Dec 4, 2015 10:07:32 AM",
                "modified": "Dec 4, 2015 10:08:33 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Henrym",
                        "lastName": "M",
                        "guid": "00a13724-1126-4d5d-99db-6e34218b6264",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Henry"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "00a13724-1126-4d5d-99db-6e34218b6264",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "3c737130-dd02-4857-a820-d4defeccff09",
                "point": {
                    "y": 400,
                    "x": 561
                }
            },
            "rotation": 0.0,
            "guid": "208270ae-7f74-4553-bdff-f66a6ffa12f3",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "404bf273-edec-4eec-9b87-bd352eba9483",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>I think your right&nbsp; </p>\n\n",
                "guid": "404bf273-edec-4eec-9b87-bd352eba9483",
                "riseAbove": false,
                "attachments": [],
                "title": "usane bult",
                "created": "Nov 11, 2015 9:39:12 AM",
                "modified": "Nov 11, 2015 9:39:12 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Coen",
                        "lastName": "R",
                        "guid": "bf6fb158-8844-4727-866b-4d8ca3fe1723",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Coen"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "bf6fb158-8844-4727-866b-4d8ca3fe1723",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "404bf273-edec-4eec-9b87-bd352eba9483",
                "point": {
                    "y": 410,
                    "x": 1521
                }
            },
            "rotation": 0.0,
            "guid": "6d4d6fc2-62b1-4927-9848-1e20bbe064ba",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "528f5d20-b89e-4d77-878f-ba8a39c4dd22",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"883edd26-8ae4-489e-863e-60371392d672_a6fe04e6-c128-4f19-896d-18e9ee9326c7_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">A different theory</span> </span>-<span id=\"883edd26-8ae4-489e-863e-60371392d672_a6fe04e6-c128-4f19-896d-18e9ee9326c7_content\" class=\"kfSupportContent\">is that if astronauts got even 60 miles from the sun they will get burned.</span>- <span id=\"883edd26-8ae4-489e-863e-60371392d672_a6fe04e6-c128-4f19-896d-18e9ee9326c7_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;&nbsp; <span id=\"883edd26-8ae4-489e-863e-60371392d672_06514b34-aed7-4a03-9d17-e6297136d145_content\" class=\"kfSupportContent\"></span><span id=\"883edd26-8ae4-489e-863e-60371392d672_5d0e29bb-d8ae-40e0-85ff-b9b0e4dde4d3_content\" class=\"kfSupportContent\"></span></p>\n\n",
                "guid": "528f5d20-b89e-4d77-878f-ba8a39c4dd22",
                "riseAbove": false,
                "attachments": [],
                "title": "too close",
                "created": "Nov 11, 2015 9:53:43 AM",
                "modified": "Nov 11, 2015 9:58:14 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Theo",
                        "lastName": "F",
                        "guid": "f2d28a94-128d-43f0-a1f0-bf3080443874",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Theo"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "f2d28a94-128d-43f0-a1f0-bf3080443874",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "528f5d20-b89e-4d77-878f-ba8a39c4dd22",
                "point": {
                    "y": 140,
                    "x": 363
                }
            },
            "rotation": 0.0,
            "guid": "783ca0c3-5743-49a3-9034-39b97e7350e9",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "36a5dc00-66dd-42b8-93b2-348e8acd18ce",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_c47af915-7de7-4e41-9a3e-d70af5602de4_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_c47af915-7de7-4e41-9a3e-d70af5602de4_content\" class=\"kfSupportContent\"> </span>There is light in space because the sun lives there- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_c47af915-7de7-4e41-9a3e-d70af5602de4_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "36a5dc00-66dd-42b8-93b2-348e8acd18ce",
                "riseAbove": false,
                "attachments": [],
                "title": "light in space",
                "created": "Nov 11, 2015 9:41:28 AM",
                "modified": "Nov 11, 2015 9:41:28 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Laurenk",
                        "lastName": "K",
                        "guid": "76c4b72c-af48-4629-be90-e93be126e960",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Lauren"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "76c4b72c-af48-4629-be90-e93be126e960",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "36a5dc00-66dd-42b8-93b2-348e8acd18ce",
                "point": {
                    "y": 269,
                    "x": 835
                }
            },
            "rotation": 0.0,
            "guid": "3b9d8b4b-a25f-4b87-a19d-bbcec74ff6bb",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "7e2c78bf-4c1e-4e2e-85bf-0586418c1a4c",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;</p>\n<p>&nbsp;&nbsp;&nbsp; <span id=\"883edd26-8ae4-489e-863e-60371392d672_4c778da6-0db5-451b-936d-3d112cdd4fa2_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">A different theory</span> </span>- <span id=\"883edd26-8ae4-489e-863e-60371392d672_4c778da6-0db5-451b-936d-3d112cdd4fa2_content\" class=\"kfSupportContent\"> </span>Black holes are NOT BLACK. Actually they can be a variety of colors, black is the word for \"Nothingness\" Apparently black is the opposite of light.</p>\n\n",
                "guid": "7e2c78bf-4c1e-4e2e-85bf-0586418c1a4c",
                "riseAbove": false,
                "attachments": [],
                "title": "black holes",
                "created": "Nov 2, 2015 2:58:05 PM",
                "modified": "Nov 20, 2015 9:36:51 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Alexander",
                        "lastName": "H",
                        "guid": "af22be6c-2092-47af-9f00-87b472360119",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Alexander"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "af22be6c-2092-47af-9f00-87b472360119",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "7e2c78bf-4c1e-4e2e-85bf-0586418c1a4c",
                "point": {
                    "y": 574,
                    "x": 552
                }
            },
            "rotation": 0.0,
            "guid": "67230688-d18b-4e06-8cc4-c577ed8dd742",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "129f454e-6c87-4034-8c97-01463e518c0a",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_4570c254-38c5-44b0-9848-dd0114d6f513_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-You would burn if you stand on the sun.<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_4570c254-38c5-44b0-9848-dd0114d6f513_content\" class=\"kfSupportContent\"></span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_4570c254-38c5-44b0-9848-dd0114d6f513_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "129f454e-6c87-4034-8c97-01463e518c0a",
                "riseAbove": false,
                "attachments": [],
                "title": "burning",
                "created": "Nov 11, 2015 9:42:02 AM",
                "modified": "Nov 13, 2015 9:44:30 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Danielca",
                        "lastName": "C",
                        "guid": "0081a70e-cd6b-425b-92f9-519daabab157",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Daniel"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "0081a70e-cd6b-425b-92f9-519daabab157",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "129f454e-6c87-4034-8c97-01463e518c0a",
                "point": {
                    "y": 399,
                    "x": 1394
                }
            },
            "rotation": 0.0,
            "guid": "49bba5f7-f024-4688-a5e4-d417ddaea0ee",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "eb8bc6fe-900b-4a12-b2f3-07c3e08d47b0",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_f6da37bf-fcc8-4ba5-b67a-38fff7d5e86d_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_f6da37bf-fcc8-4ba5-b67a-38fff7d5e86d_content\" class=\"kfSupportContent\"></span><span style=\"font-family: comic sans ms,sans-serif;\">the first person alive </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_f6da37bf-fcc8-4ba5-b67a-38fff7d5e86d_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "eb8bc6fe-900b-4a12-b2f3-07c3e08d47b0",
                "riseAbove": false,
                "attachments": [],
                "title": "alive",
                "created": "Nov 11, 2015 9:46:22 AM",
                "modified": "Nov 13, 2015 9:45:12 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Ellau",
                        "lastName": "U",
                        "guid": "45b2876f-b4d8-4006-bc3c-c80983664244",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Ella"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "45b2876f-b4d8-4006-bc3c-c80983664244",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "eb8bc6fe-900b-4a12-b2f3-07c3e08d47b0",
                "point": {
                    "y": 569,
                    "x": 86
                }
            },
            "rotation": 0.0,
            "guid": "2b7b4f47-cb30-459a-8c14-bc1591bfad99",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "fcb9e04d-7ca7-435b-acaf-080283943b8d",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; ARE YOU KIDDING ME? I would do ANYTHING to go to space! But... the distance is probably more than 20 miles. (Depending on where you want to go)&nbsp;</p>\n\n",
                "guid": "fcb9e04d-7ca7-435b-acaf-080283943b8d",
                "riseAbove": false,
                "attachments": [],
                "title": "Why not?",
                "created": "Nov 11, 2015 9:56:22 AM",
                "modified": "Nov 11, 2015 9:56:22 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Alexander",
                        "lastName": "H",
                        "guid": "af22be6c-2092-47af-9f00-87b472360119",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Alexander"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "af22be6c-2092-47af-9f00-87b472360119",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "fcb9e04d-7ca7-435b-acaf-080283943b8d",
                "point": {
                    "y": 113,
                    "x": 676
                }
            },
            "rotation": 0.0,
            "guid": "6cf27309-782b-4aed-b473-4014a953f1e0",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "95c87027-7f63-4bb2-9125-5be7888b811a",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; Some people think that they could live life without light.&nbsp;</p>\n<p><span style=\"font-size: 12pt;\"><strong>WRONG WRONG WRONG WRONG WRONG WRONG WRONG.</strong></span></p>\n<p><span style=\"font-size: 8pt;\">Wrong x 100000000000= Those people.</span></p>\n<p><span style=\"font-size: 10pt;\">Look, either they would fall asleep for a long time (That means eternity) or die. There's a higher chance you would die: 99.9999999999999999999% actually,&nbsp;</span></p>\n\n",
                "guid": "95c87027-7f63-4bb2-9125-5be7888b811a",
                "riseAbove": false,
                "attachments": [],
                "title": "Without light?!",
                "created": "Dec 7, 2015 2:41:09 PM",
                "modified": "Dec 7, 2015 2:44:09 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Alexander",
                        "lastName": "H",
                        "guid": "af22be6c-2092-47af-9f00-87b472360119",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Alexander"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "af22be6c-2092-47af-9f00-87b472360119",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "95c87027-7f63-4bb2-9125-5be7888b811a",
                "point": {
                    "y": 1,
                    "x": 37
                }
            },
            "rotation": 0.0,
            "guid": "90e0e580-bf97-49c2-b097-3e93daebeec9",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "e18f2096-16d4-44d1-82b1-df9fb7e37dda",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b6e63656-076b-49d7-9c2b-b5399a95af43_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>-Light can reflect very well<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b6e63656-076b-49d7-9c2b-b5399a95af43_content\" class=\"kfSupportContent\"></span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_b6e63656-076b-49d7-9c2b-b5399a95af43_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "e18f2096-16d4-44d1-82b1-df9fb7e37dda",
                "riseAbove": false,
                "attachments": [],
                "title": "daniels theory",
                "created": "Nov 2, 2015 2:54:17 PM",
                "modified": "Nov 13, 2015 9:55:36 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Danielca",
                        "lastName": "C",
                        "guid": "0081a70e-cd6b-425b-92f9-519daabab157",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Daniel"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "0081a70e-cd6b-425b-92f9-519daabab157",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "e18f2096-16d4-44d1-82b1-df9fb7e37dda",
                "point": {
                    "y": 378,
                    "x": 1342
                }
            },
            "rotation": 0.0,
            "guid": "dbfbc6ed-d07c-4257-8f58-a108bb47273c",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "f38d4b7a-a5ce-469f-9a44-1d5e7cb65ea7",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_e6e742dc-701f-414e-a896-568a764a7a50_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- Why is light important?. (&nbsp;<span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_5437f6ee-14e9-44ce-a7b7-5e58a1bf0e59_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- Because if there is no light for example the sun, we wouldn't be able to see. (Livia)</p>\n<p><span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_e6e742dc-701f-414e-a896-568a764a7a50_content\" class=\"kfSupportContent\"><span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_5437f6ee-14e9-44ce-a7b7-5e58a1bf0e59_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</span>&nbsp;&nbsp;<span id=\"mce_7\">&nbsp;</span>&nbsp;&nbsp;</p>\n\n",
                "guid": "f38d4b7a-a5ce-469f-9a44-1d5e7cb65ea7",
                "riseAbove": false,
                "attachments": [],
                "title": "Importance of Light",
                "created": "Sep 13, 2015 5:01:56 PM",
                "modified": "Sep 13, 2015 5:09:29 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Robin",
                        "lastName": "S",
                        "guid": "de63ab28-39a5-4452-b96c-a145684cec50",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Robin"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "de63ab28-39a5-4452-b96c-a145684cec50",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "f38d4b7a-a5ce-469f-9a44-1d5e7cb65ea7",
                "point": {
                    "y": 25,
                    "x": 67
                }
            },
            "rotation": 0.0,
            "guid": "dd7909a7-a3dd-4391-8bf7-5960b8abc236",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "c0d69512-f906-4552-93ea-b5b7826da01b",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p style=\"text-align: left;\">&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_d314d949-4264-4161-a248-577eaa305505_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_d314d949-4264-4161-a248-577eaa305505_content\" class=\"kfSupportContent\"> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_d314d949-4264-4161-a248-577eaa305505_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;electricity is both because if you got&nbsp; electricuted then you would get hurt or go to the hospital but if you got hit by lightning you will get really hurt or even maybe die but both would really hurt.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; </p>\n<p>-( Lauren + Ella)</p>\n<p>&nbsp;</p>\n\n",
                "guid": "c0d69512-f906-4552-93ea-b5b7826da01b",
                "riseAbove": false,
                "attachments": [],
                "title": "natural/fake",
                "created": "Sep 14, 2015 2:41:32 PM",
                "modified": "Nov 13, 2015 9:45:26 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Laurenk",
                        "lastName": "K",
                        "guid": "76c4b72c-af48-4629-be90-e93be126e960",
                        "email": "jicsstudent@gmail.com",
                        "firstName": "Lauren"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "76c4b72c-af48-4629-be90-e93be126e960",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "c0d69512-f906-4552-93ea-b5b7826da01b",
                "point": {
                    "y": 315,
                    "x": 1419
                }
            },
            "rotation": 0.0,
            "guid": "82f94955-aca1-4b4e-9bed-1e55bbe6c7f1",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "125614d3-cb22-4685-b197-f432d6657839",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_656caffb-e299-4176-af49-0fe419c0f480_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_656caffb-e299-4176-af49-0fe419c0f480_content\" class=\"kfSupportContent\"> </span>who was the first person who saw light?- <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_656caffb-e299-4176-af49-0fe419c0f480_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "125614d3-cb22-4685-b197-f432d6657839",
                "riseAbove": false,
                "attachments": [],
                "title": "first",
                "created": "Sep 29, 2015 12:06:29 PM",
                "modified": "Sep 29, 2015 12:06:29 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Stella",
                        "lastName": "G",
                        "guid": "5b7b31b5-ba40-43cc-aa78-b23ae5f652ce",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Stella"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "5b7b31b5-ba40-43cc-aa78-b23ae5f652ce",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "125614d3-cb22-4685-b197-f432d6657839",
                "point": {
                    "y": 540,
                    "x": 79
                }
            },
            "rotation": 0.0,
            "guid": "d2959f41-6eb6-4df2-b073-57b3d7e89440",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "ec35ef57-06b8-4405-842e-cc174ba95057",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_82701be4-a7e3-4221-9719-4476cfc878b6_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">I need to understand</span> </span>-&nbsp;<span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_82701be4-a7e3-4221-9719-4476cfc878b6_content\" class=\"kfSupportContent\"></span><span style=\"font-family: arial,helvetica,sans-serif;\">when you stare at the sun, why does it hurt your eyes?</span> - <span id=\"abca6c4d-c3e8-4604-8dc2-f7fe0239d592_82701be4-a7e3-4221-9719-4476cfc878b6_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "ec35ef57-06b8-4405-842e-cc174ba95057",
                "riseAbove": false,
                "attachments": [],
                "title": "why does it hurt?",
                "created": "Dec 4, 2015 9:49:47 AM",
                "modified": "Dec 4, 2015 9:49:47 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Ellau",
                        "lastName": "U",
                        "guid": "45b2876f-b4d8-4006-bc3c-c80983664244",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Ella"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "45b2876f-b4d8-4006-bc3c-c80983664244",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "ec35ef57-06b8-4405-842e-cc174ba95057",
                "point": {
                    "y": 9,
                    "x": 311
                }
            },
            "rotation": 0.0,
            "guid": "292548a9-cad2-4b2c-ae00-7cc8bda604ba",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "b4c53e45-a7c5-4f31-81ee-beff96d47e9e",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp; <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_32699aca-cb02-4294-91a6-6dcd9bcc46f4_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">My theory</span> </span>- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_32699aca-cb02-4294-91a6-6dcd9bcc46f4_content\" class=\"kfSupportContent\"> </span>is that without sunlight or any light the world would be a tundra of snow and ice, and even if humans and other things were alive life would be <em>very </em>hard, plus humans would probably be wiped out by sickness, frostbite, and starvation.- <span id=\"366ec9ea-b3fa-4819-b0ac-27c9be756ace_32699aca-cb02-4294-91a6-6dcd9bcc46f4_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;&nbsp;&nbsp;</p>\n\n",
                "guid": "b4c53e45-a7c5-4f31-81ee-beff96d47e9e",
                "riseAbove": false,
                "attachments": [],
                "title": "arctic world",
                "created": "Sep 14, 2015 2:52:46 PM",
                "modified": "Sep 14, 2015 2:54:25 PM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Kingsley",
                        "lastName": "S",
                        "guid": "78c67bf2-95d2-42fe-911a-26168fa2a6f1",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Kingsley"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "78c67bf2-95d2-42fe-911a-26168fa2a6f1",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "b4c53e45-a7c5-4f31-81ee-beff96d47e9e",
                "point": {
                    "y": 80,
                    "x": 221
                }
            },
            "rotation": 0.0,
            "guid": "d176bc45-51b6-4921-a9ab-1a83cb331371",
            "display": 0
        },
        {
            "statusForAuthor": {
                "postGuid": "79f14f3a-2d2f-4339-b78b-7f60005dc3ff",
                "authorGuid": "75ecace9-1c22-46cd-8f69-75acc8bee31b",
                "beenRead": false,
                "likes": false,
                "starred": false,
                "guid": "default",
                "canEdit": false
            },
            "copy": false,
            "viewGuid": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
            "postInfo": {
                "body": "\n\n\n\n\n<p>&nbsp;&nbsp;&nbsp; <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_01de5b87-a08c-403a-9999-6c87ccdc21d7_start\" class=\"mceNonEditable kfSupportStartTag\"> <span class=\"kfSupportStartMark\">&nbsp;&nbsp;</span> <span class=\"kfSupportStartLabel\">New information</span> </span>- T<span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_01de5b87-a08c-403a-9999-6c87ccdc21d7_content\" class=\"kfSupportContent\"></span>here are three sources of light. The first one is incandescence, it is a source of light, but when you touch it is hot, like the sun. The second source is luminescence it is a source of light but when you touch it is not hot for example a firefly. The third source of light is triboluminescence it is when you crush something like sugar cubes it gives out blue light because all of the atoms burst, but you have to do this in the dark.- <span id=\"c06956f2-6b86-417c-b914-e76cd9af0cd5_01de5b87-a08c-403a-9999-6c87ccdc21d7_end\" class=\"mceNonEditable kfSupportEndMark\"> &nbsp;&nbsp; </span>&nbsp;&nbsp;</p>\n\n",
                "guid": "79f14f3a-2d2f-4339-b78b-7f60005dc3ff",
                "riseAbove": false,
                "attachments": [],
                "title": "Three Sources of Light",
                "created": "Sep 14, 2015 2:40:23 PM",
                "modified": "Nov 13, 2015 9:48:22 AM",
                "likeCount": 0,
                "promisingIdeaRefs": [],
                "postType": "NOTE",
                "authors": [
                    {
                        "userName": "Zara",
                        "lastName": "M",
                        "guid": "fa0b4d07-d51a-4a43-83d1-c2f56b09bb03",
                        "email": "jicsstudents@gmail.com",
                        "firstName": "Zara"
                    }
                ],
                "promisingIdeas": [],
                "primaryAuthorId": "fa0b4d07-d51a-4a43-83d1-c2f56b09bb03",
                "annotations": [],
                "referenceList": []
            },
            "height": 0,
            "width": 0,
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "79f14f3a-2d2f-4339-b78b-7f60005dc3ff",
                "point": {
                    "y": 261,
                    "x": 47
                }
            },
            "rotation": 0.0,
            "guid": "296a412b-2e6a-4dbe-93ff-4cb0e2162153",
            "display": 0
        }
    ],
    "linkedViewReferences": [
        {
            "guid": "fcb76f66-78f9-4f41-8695-e5bbd688049a",
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "540a14c6-3fd0-4354-ba9f-56fadbb15d33",
                "point": {
                    "y": 417,
                    "x": 0
                }
            },
            "viewReferenceId": "540a14c6-3fd0-4354-ba9f-56fadbb15d33"
        },
        {
            "guid": "4bc5b3d1-f8f3-483f-a738-4ccdc0ee9a3c",
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "fd63228f-8bb5-426a-8806-e0cc8d51c5c6",
                "point": {
                    "y": 382,
                    "x": 0
                }
            },
            "viewReferenceId": "fd63228f-8bb5-426a-8806-e0cc8d51c5c6"
        },
        {
            "guid": "2980a81a-777b-4de0-88f5-572d6ae464c2",
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "e5ee22fe-cca7-470c-a6b5-e1f30bf648fb",
                "point": {
                    "y": 298,
                    "x": 0
                }
            },
            "viewReferenceId": "e5ee22fe-cca7-470c-a6b5-e1f30bf648fb"
        },
        {
            "guid": "0dc7a3d9-790d-4622-9f81-41e220a2aa42",
            "location": {
                "refType": "VIEWPOSTREF",
                "referenceId": "9a17e69d-8f2e-48a7-a005-56370f59de36",
                "point": {
                    "y": 344,
                    "x": 0
                }
            },
            "viewReferenceId": "9a17e69d-8f2e-48a7-a005-56370f59de36"
        }
    ],
    "authors": [
        {
            "userName": "Robin",
            "lastName": "S",
            "guid": "de63ab28-39a5-4452-b96c-a145684cec50",
            "email": "jicsstudents@gmail.com",
            "firstName": "Robin"
        }
    ],
    "active": true,
    "settingInfo": {
        "viewId": "2885d7df-c29b-43b8-9f5b-7ae2a8fdc540",
        "fontFamily": "Helvetica",
        "linkColor": "000000",
        "backgroundColor": "FFFFFF",
        "fontSize": 10,
        "guid": "3fe32363-ad28-49ed-a127-dded40504242"
    },
    "primaryAuthorId": "de63ab28-39a5-4452-b96c-a145684cec50",
    "published": true
};

// var r = jq("[viewPostRefs][postInfo][1][body]", {data:d})
// console.log(r);

var d2= [
  {key: 3, value:1},
  {key: 2, value:2},
  {key: 1, value:4},
  {key: 4, value:3},

];
var r = jq("[value]", {data:d2});
console.log(r);
