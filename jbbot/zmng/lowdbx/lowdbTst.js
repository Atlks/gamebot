import {query} from "express";
import path from 'path';
import {fileURLToPath} from 'url';


import moment from "moment";


global['curDatetime2'] = curDatetime2

  function curDatetime2() {
    return moment().format("MM/DD/YYYY HH:mm:ss")
}

// async function main() {


// function curDatetime2() {
//     return moment().format("MM/DD/YYYY HH:mm:ss")
// }


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

await import("../lowdbx/lowdbX.js")
let dbfile = __dirname + "/../scoreLogColl.json";

//  require("datetime.js")


function curDateTime2() {
    return moment().format("MM/DD/YYYY HH:mm:ss")
}

var rcd = {"uname": 123, "score": 11, "类型": "下分", "time": curDateTime2()}
dbfile = __dirname + "/../scoreLogColl.json";
await pdo_insert(rcd, dbfile);

process.exit()


//insert
var rcd = {"uname": uname, "score": score, "类型": "下分", "time": curDateTime()}
dbfile = __dirname + "/../scoreLogColl.json";
await pdo_exec_insert(rcd, dbfile);


//  ## query(

let _ = require('lodash');
let {filter, sortBy, map, uniq, groupBy} = require('lodash');
rzt = pdo_query({'uname': uname}, dbfile);
//  _.sortBy()

console.log(rzt)


// //  pdo_exec_insert()
// let data;
// data = pdo_exec_query(dbfile)
//
// var _ = require('lodash');
// rzt = _.filter(data, {'uname': "u1"})
// console.log(rzt)
// // console.log(data)

//}
// async function curDatetime2() {
//     return moment().format("MM/DD/YYYY HH:mm:ss")
// }
// // (async () => )();
// main()


