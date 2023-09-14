
require ("./file.js")
require ("./logger.js")
require ("./db.js")


let dbfile = __dirname + "/../db/scoreLogColl.json";
let   data = pdo_query({"uname":"777"}, dbfile);
console.log( JSON.stringify(data)
    )
