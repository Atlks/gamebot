import {join, dirname} from 'path'
import {Low, LowSync} from 'lowdb'
import {fileURLToPath} from 'url'
import {JSONFile, JSONFileSync} from 'lowdb/node'
import _ from 'lodash';

//only for test
// import aaaa from '../node_modules/secury.js';
// import bbb from '../node_modules/logger.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
// const file = join(__dirname, '../coll_user.json')
// console.log('data path --->', file)
// const adapter = new JSONFile(file)
//
// const defaultData = []
// const db = new Low(adapter, defaultData)

//export default db


//cd  zmng/lowdbx
//  npm publish --access=public

async function ini_db_conn(file) {


    const defaultData = []
    //  file = join(__dirname, file);
    let jsonFile = new JSONFileSync(file);
    let db = new Low(
        jsonFile, defaultData);
    await db.read()
    //  var rcd = {"u": 123, "age": 19}
    // db.data.push(rcd)
    return db;

}


function pdo_conn(file) {


    const defaultData = []
    //  file = join(__dirname, file);
    let jsonFile = new JSONFileSync(file);
    let db = new LowSync(
        jsonFile, defaultData);
    db.read()
    //  var rcd = {"u": 123, "age": 19}
    // db.data.push(rcd)
    return db;

}

global["pdo_conn"] = pdo_conn
global["pdo_query"] = pdo_query


let dbfile = __dirname + "/../scoreLogColl.json";
console.log(pdo_query({}, dbfile))

function pdo_query(qryDsl, dbfile) {


    // import  lds   from 'lodash';
    // import  lds = require('lodash') ;

    let data;
    data = db_rd(dbfile)
    let rzt = _.filter(data, qryDsl)
    return rzt;

}


global["pdo_exec_query"] = pdo_exec_query

function db_rd(dbfile) {
    let db;

    db = pdo_conn(dbfile)
    db.read()

    return db.data;
}

function pdo_exec_query(qryDsl, dbfile) {
    //  alert("上分成功")
    // await import("../lowdbx/lowdbX.js")

    //   console.log("ini_db_conn=>"+global["ini_db_conn"])
    return pdo_query(qryDsl, dbfile);
}

function pdo_insert(rcd, dbfile) {


   let arg = JSON.stringify(arguments);
   let  ivkFundbg = "******[pdo_insert]"   + arg
    console.log(ivkFundbg);
    log_info(ivkFundbg)

 //   require("secury")
    let a = [];
    a.push(rcd);
    a.push(dbfile)
    return call_funcNoEx("pdo_insert_core", a)

}

global['pdo_insert_core']=pdo_insert_core
function pdo_insert_core(rcd, dbfile) {
    //  alert("上分成功")
    // await import("../lowdbx/lowdbX.js")

    //   console.log("ini_db_conn=>"+global["ini_db_conn"])
    try{
        require("../libx/secury")
    }catch (e){
        console.log("---warning----")
        //in ems test ,weillerr
        console.log(e)
    }

    let arg = JSON.stringify(arguments);
    let  ivkFundbg = "******[pdo_insert_core]"   + arg
    log_info(ivkFundbg)
    let db;

    db = pdo_conn(dbfile)

    db.data.push(rcd)

// Finally write db.data content to file
    db.write()
    return db;
}


async function pdo_exec_insertAsync(rcd, dbfile) {
    //  alert("上分成功")
    // await import("../lowdbx/lowdbX.js")

    //   console.log("ini_db_conn=>"+global["ini_db_conn"])

    let db;

    db = await pdo_conn(dbfile)

    db.data.push(rcd)

// Finally write db.data content to file
    await db.write()
    return db;
}

global["pdo_insert"] = pdo_insert
//global["pdo_exec_insert"] = pdo_insert

global["ini_db_conn"] = ini_db_conn

export {ini_db_conn};
// Read data from JSON file, this will set db.data content
// If JSON file doesn't exist, defaultData is used instead
// await db.read()
//
// var rcd={"u":123,"age":19}
// db.data.push(rcd)
//
// // Finally write db.data content to file
// await db.write()


//  cd zmng/lowdbx
//  npm publish --access=public