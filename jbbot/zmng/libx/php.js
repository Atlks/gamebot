/**
 * 模拟PHP sprintf 的函数
 * @returns string
 */

try{
    require("./secury.js")
}catch (e){

}

try{
    require("../ref.js")
}catch (e){

}
try{
    require("./ref.js")
}catch (e){

}
try{
    const winlogger = require("./logger.js");
}catch (e){

}
try{
    require(__dirname+"/./secury.js")
}catch (e){
     console.log(e)
}

try{

    global["sprintf"] = sprintf;
    global["字符串连接"] = sprintf;
    global["call_user_func"] = call_user_func;
    global["call_user_funcV2"] = call_user_funcV2;

    global["removeBlankLines"] = removeBlankLines;
    global['echo']=echo
    global["console_log"] = console_log;
    global["时间戳"] = time;
    global["time"] = time;
    global["echo"] = echo;
    global["str_replace"] = str_replace;global["require_once"] = require_once;global["explode"] = explode;


}catch (e)
{

}


function sprintf() {
    let args = arguments, string = args[0];
    for (let i = 1; i < args.length; i++) {
        let item = arguments[i];
        string = string.replace('%s', item);
    }
    return string;
}






  function call_user_funcV2(cb, params) {


    echo("\r\n\r\n");
    arg = JSON.stringify(params);
    echo("******" + cb + arg);
    //in js   apply fun is Fun obj proty.meth..heyou bind call ...

    if (isset("window"))
        func = window[cb];
    else
        func = global[cb];

    //  func=eval(cb);

    //window[cb];
    $r =   func.apply("thisobj", params);
    echo(sprintf("[%s] ret==>%s", cb, $r));
    echo("\r\n\r\n");
    return $r;
}


//    call_user_func(funcs[i], ["ddd", "cc"]);
  function call_user_func(cb, params) {


    echo("\r\n\r\n");
    arg = JSON.stringify(params);
    echo("******" + cb + arg);


    var winlogger = require("zmng/libx/logger");

    winlogger.info("******" + cb + arg)

    //in js   apply fun is Fun obj proty.meth..heyou bind call ...

    if (isset("window"))
        func = window[cb];
    else
        func = global[cb];

    //  func=eval(cb);

    //window[cb];
    $r =   func.apply("thisobj", params);
    let msg = sprintf("[%s] ret==>%s", cb, $r);
    echo(msg);

    winlogger.info(msg)
    echo("\r\n\r\n");
    return $r;
}



function removeBlankLines($t) {
    $t = $t.replace(/(\n[\s\t]*\r*\n)/g, '\n');

    $t = $t.replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g, '')

    return $t;
}


function funtion_exist(funcName) {
    if (typeof eval(funcName) === "function") { //是函数    其中 FunName 为函数名称
        return true;
    } else { //不是函数
        return false;
    }
}

//console_log( isset("module"))
function isset(varname) {
    try {
        varname = trim(varname);
        rzt = typeof (eval(varname));
        return typeof (varname) != "undefined";
    } catch (e) {
        console_log("[43isset()] " + e.message);
        //  console_log(e);
        return false;
    }

}


function substr(string, start, length) {
    return string.substring(start, length + start);

}

function echo(str) {
    var funname = arguments.callee.name;
    // arguments.callee.name
    let arg = JSON.stringify(arguments);
    console.log(":145 " + funname + arg);
    console.log(str)
    return str;
}

function console_log(str) {
    console.log(str)
}

//alert(module)
//if(module!=undefined)
// for use in broswer


// sec from 1970
function time() {
    var timestamp = Date.parse(new Date());
    return timestamp;
}


function trim(str) {
    return str.trim();
}



function explode(sprtr, str) {
    return str.split(sprtr);
}


function str_replace(find, replace, string) {
    return string.replaceAll(find, replace);

}



function require_once($f) {
    try {
        require($f)
    } catch (e) {
        //  console.log(e)
    }

}

function strpos(string, find, start) {
    return string.indexOf(find, start);

}

function startwith(str, wz) {
    return str.startsWith(wz);

}

function strlen(str) {
    return str.length;
}

function strtolower(str) {
    return str.toLowerCase();
}



try{
    window["funtion_exist"]=funtion_exist;

}catch (e){}