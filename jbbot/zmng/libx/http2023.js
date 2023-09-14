//const {default: chalk} = require("chalk");
//const {default: fetch} = require("node-fetch");

try{
     require("./logger.js");
}catch (e){}

try{
    require("./fp_ati1990.js")
}catch (e){}

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

// if (isset("module"))
//     module.exports = {http_get }


function  get($url)
{
    return http_get($url);
}

//http_get("urllll",2)
//   function http_get_syncReqLib($url) {
//     console.log("\r\n");
//     var funname = arguments.callee.name;
//     // arguments.callee.name
//     arg = JSON.stringify(arguments);
//     console.log("*********=>" + funname + arg);
//
//     //  console.log($url);
//     var request = require('sync-request');
//     var res = await request('GET', $url);
//     let body =await res.getBody().toString();
//     console.log(" [http_get():] ret=>" + body);
//     console.log("\r\n");
//     return body;
//
// }
global["http_get"]=http_get;global["fetchx"]=http_get;
function  strip_tagsx($t)
{
    $t= strip_tags($t);
    $t=removeBlankLines($t);return $t;
}
function  strip_tags($t)
{
    result=$t;
  //  var result = $t.replace(/<\/?.+?>/g,"")
    //result = $t.replace(/<\/?.+?>/g,"")   //cant replace img mlt line


    result = result.replace(/<style>[\s\S]*?<\/style>/igm,"")
   // var regex=/<style>[\s\S]*?<\/style>/ig;
  result = result.replace(/<\/?[^>]*>/img,"")

        //.replace(/ /g,"");
    return result;
}

try{
     require("./logger.js");
}catch (e){}
try{
     require("./libx/logger.js");
}catch (e){}

//http_get("http://localhost:8000/tmot",{ timeout: 5000 })
async  function  http_get($url,opt)
{
   // const winlogger = require("logger");
    let   funname;
    // var callerName;
    try { throw new Error(); }
    catch (e) {
        funname = __METHOD__(e);

    }
    var arg = JSON.stringify(arguments);
    let ivkFundbg = "=>" + funname + arg;
    console.log(ivkFundbg);
    log_info(ivkFundbg)




    try {
        let lasterr;
        // setTimeout(() => {
        //     lasterr = "timeout:" + json_encode(opt)
        // //    throw  "timeout:" + json_encode(opt)
        //
        // }, opt?.timeout);
        let s = await http_get_core($url, opt);
        if(lasterr)
        {
            let errObj={"fun":funname + arg,"ex":"timeout","errmsg":lasterr};

            throw  errObj;
        }
        if (!lasterr){

            console.log("[http_get] ret=>"+s);
            log_info(" [http_get] ret=>"+s)

         }
        return  s;

    }catch (e)
    {

       console.log(e)

        log_err("e at:"+funname + arg)
        log_err( e );
        throw  e;
    }

}

async  function  http_get_core($url,opt)
{
    require("esm-hook");
    const chalk = require('chalk').default
    //  console.log(chalk.blue('你好'))


    console.log("\r\n");
    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    echo(chalk.bgYellow( chalk.green("*********=>" + funname + arg) ))   ;

    require("esm-hook");
    const fetch = require('node-fetch').default



//fetch("http://127.0.0.1:80/web/upload.php")


    const res = await fetch($url, opt );
    console.log(" res.statusCode=>"+ res.statusCode)

    console.log(" res.status=>"+ res.status)



    var result = await res.text();



    if(res.status!=200)
    {
        result=strip_tagsx(result);// result=removeBlankLines(result)
        let errobj={"type":"ex",
            "fun":"[http_get_core]",
            "fetchOpt":opt,
            "url":$url,
            "httpStatuCode":res.status, "httpRzt_clr":result}
        throw errobj;
    }




    // console.log(result)
    let rzt110 = " [http_get_core():] ret=>" + result;
    // console.log(rzt110);
    echo(chalk.bgYellow( chalk.greenBright(rzt110) ))   ;
    console.log("\r\n");
    return result;
}


function delHtmlTag(result) {
    return strip_tags(result)
}

function removeBlankLines($t){
  $t = $t.replace(/(\n[\s\t]*\r*\n)/g, '\n');

   $t=  $t .replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g, '')

 return $t;
}



