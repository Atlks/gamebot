

global['oplog_add']=oplog_add
try{
    require("../libx/autoload.js")
}catch (e){}
require("../libx/db.js")
function  oplog_add(rcd)
{
    let file = __dirname + "/../db/opLogColl.json";

    pdo_insert(rcd, file);
}







//oplog_add({})