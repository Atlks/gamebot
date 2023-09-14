


global['oplog_add']=oplog_add
try{
    require("../libx/autoload.js")
}catch (e){}

try{
    require("../libx/db.js") 
}catch (e) {
    
}

function  oplog_add(rcd)
{

    log_fun_enter(arguments)
    if(isWinformEnv())
    {
        let rcdInShell=encodeURIComponent( JSON.stringify(rcd)  )
        let f=encodeURIComponent("__rootdir__/db/opLogColl.json");
        var hedtx=window.external.callFun("pdo_insert "+rcdInShell+" "+ f);
    }
    else
    {
        let file = __dirname + "/../db/opLogColl.json";
        pdo_insert(rcd, file);

    }


}



global["oplog_qry"] = oplog_qry;

  function oplog_qry(uname) {

  //  await import("../lowdbx/lowdbX.js")
    let dbfile = __dirname + "/../db/opLogColl.json";

    console.log("dbfile=>" + dbfile)
//  pdo_exec_insert()


    let _ = require('lodash');
    rzt = pdo_query({}, dbfile);


    rzt = _.orderBy(rzt, ['time'], ['desc']);
    rzt = rzt.slice(0, 300)
    return json_encode(rzt)

}






//oplog_add({})