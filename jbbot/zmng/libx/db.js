// import _ from 'lodash';

function pdo_exec_query(qryDsl, dbfile) {
    //  alert("上分成功")
    // await import("../lowdbx/lowdbX.js")

    //   console.log("ini_db_conn=>"+global["ini_db_conn"])
    return pdo_query(qryDsl, dbfile);
}


global["pdo_query"] = pdo_query




  function pdo_query(qryDsl, dbfile) {

log_enterFun(arguments)
   // var  _ = await import("lodash")  not err,but cant use _.flt said cant find this fun
    // import  lds = require('lodash') ;
     console.log("::23")
    let data;
    var {readFileSync, writeFileSync, appendFileSync} = require("fs");
    var txt = readFileSync(dbfile).toString();
    console.log(" dbtxt len100 =>"+ txt.substring(0,100))
    data = JSON.parse(txt)

    require("esm-hook");
  //  const _ = require('lodash').default
    const _ = require('lodash')
    let rzt =  _.filter(data, qryDsl)
    //console.log("rzt is=>"+JSON.stringify(rzt) )
    return rzt;

}





global['pdo_insert'] = pdo_insert

async function pdo_insert(rcd, dbfile) {

   // f=f.replace("__rootdir__",__dirname)
    dbfile=dbfile.replace("__rootdir__/",__dirname+"/../")
    let arg = JSON.stringify(arguments);
    let ivkFundbg = "******[pdo_insert]" + arg
    console.log(ivkFundbg);
    log_info(ivkFundbg)

    //   require("secury")
    let a = [];
    a.push(rcd);
    a.push(dbfile)
    return await call_funcNoEx("pdo_insert_coreV2", a)

}

// async function pdo_conn(file) {
//
//
//     const defaultData = []
//     //  file = join(__dirname, file);
//     let jsonFile = new JSONFileSync(file);
//     let db = new LowSync(
//         jsonFile, defaultData);
//     db.read()
//     //  var rcd = {"u": 123, "age": 19}
//     // db.data.push(rcd)
//     return db;
//
// }

//global["pdo_conn"] = pdo_conn

// require("./autoload")
// pdo_insert_coreV2({time:curDateTime()},__dirname+"/db820.txt")

global['pdo_insert_coreV2'] = pdo_insert_coreV2

function pdo_connV2(dbfile) {

    require("./file.js")

    if(!file_exists(dbfile))
        writeFileSyncx(dbfile,"[]");
    let data2 = readFileAsJson(dbfile);
    let db = {
        data: data2
        , dbf: dbfile,
        write: function () {
            writeFileSyncx(dbfile,   json_encode( this.data));
        }
    };
    return db;
}

function pdo_insert_coreV2(rcd, dbfile) {
    //  alert("上分成功")
    log_enterFun(arguments)
    // await import("../lowdbx/lowdbX.js")
    console.log("54 pdo_insert_coreV2")

    //   console.log("ini_db_conn=>"+global["ini_db_conn"])
    try {
        require("../libx/secury")
    } catch (e) {
        console.log("---warning----")
        //in ems test ,weillerr
        console.log(e)
    }

    // let arg = JSON.stringify(arguments);
    // let ivkFundbg = "******[pdo_insert_coreV2]" + arg
    // log_info(ivkFundbg)
    let db;
    console.log("68 pdo_insert_coreV2")
    db = pdo_connV2(dbfile)

    if( typeof rcd=="string")
        rcd=JSON.parse(rcd)
    db.data.push(rcd)

// Finally write db.data content to file
    db.write()
    return db;
}
