


function isset(varname) {
    try {
        varname = varname.trim();
        rzt = typeof (eval(varname));
        return typeof (varname) != "undefined";
    } catch (e) {
        console.log(e.message);
        //  console_log(e);
        return false;
    }

}

if (isset("module"))
    module.exports = {http_get }


function  get($url)
{
    return http_get($url);
}

//http_get("urllll",2)
async function http_get($url) {
    console.log("\r\n");
    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);

    //  console.log($url);
    var request = require('sync-request');
    var res = await request('GET', $url);
    let body =await res.getBody().toString();
    console.log(" [http_get():] ret=>" + body);
    console.log("\r\n");
    return body;

}