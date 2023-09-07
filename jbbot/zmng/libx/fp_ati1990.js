





//   cd  zmng/libx
//cd  zmng/lowdbx
//  npm publish --access=public

require("./logger.js")

try{
    require("./logger")
}catch (e){}
//  npm publish --access=public
try{
    require("./php");
    require("./secury");
}catch (e){}

require("./php");
require("./secury");

/**
 * 模拟PHP sprintf 的函数
 * @returns string
 */
try {
    require("./enc.js")
} catch (e) {
    console.log(e)
}
require("./dsl")
try {
    require("./enc")
} catch (e) {

   // console.log(e)
}

global["curDateTime"] = curDateTime;
require("./logger")
function curDateTime() {
    var sd = require('silly-datetime');
    var time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    return time;
}

global["array_sum"] = array_sum;

function array_sum(arr) {
    var sum = 0;
    var sum = arr.reduce(function (prev, curr) {
        return prev + curr;
    }, 0);
    return sum;
}


const {join, dirname} = require('path')
global["dirname"] = dirname;

global["sprintf"] = sprintf;

function sprintf() {
    let args = arguments, string = args[0];
    for (let i = 1; i < args.length; i++) {
        let item = arguments[i];
        string = string.replace('%s', item);
    }
    return string;
}

//global["call_func"] = call_func;



require("./enc")
global["call_user_func"] = call_user_func;

//    call_user_func(funcs[i], ["ddd", "cc"]);

global["removeBlankLines"] = removeBlankLines;

function removeBlankLines($t) {
    $t = $t.replace(/(\n[\s\t]*\r*\n)/g, '\n');

    $t = $t.replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g, '')

    return $t;
}

/**
 *   try {
 *                 if(typeof FunName === "function") { //是函数    其中 FunName 为函数名称
 *                     alert("is function");
 *                 } else { //不是函数
 *                     alert("not is function");
 *
 *                 }
 *             } catch(e) {}
 * @param funcName
 * @returns {boolean}
 */
function funtion_exist(funcName) {
    try {
        if (typeof eval(funcName) === "function") { //是函数    其中 FunName 为函数名称
            return true;
        } else { //不是函数
            return false;
        }
    } catch(e) {
        return  false
    }
}
global['__METHOD__']=__METHOD__

function __METHOD__(e) {
    //Error
    //     at loadToTableVue (C:\modyfing\jbbot\zmng\node_modules\ui.js:116:17)
    //     at main (C:\modyfing\jbbot\zmng\node_modules\uiT.js:7:5)
    let arr = e.stack.split("\n")
    // var re = /(\w+)@|at (\w+) \(/g, st = e.stack, m;
    // re.exec(st), m = re.exec(st);
    // callerName = m[1] || m[2];
    let  funname = arr[1]
    funname = funname.trim();
    let brk = funname.indexOf("(")
    funname = funname.substr(3, brk - 3)
    return funname.trim();
}

global['display']=echo

//echo( funtion_exist("isset"))

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

global["substr"] = substr;
function substr(string, start, length) {
    return string.substring(start, length + start);

}

global["startwith"] = str_starts_with;
global["str_starts_with"] = str_starts_with;
function str_starts_with(string, wzstr) {
    return string.startsWith(string,wzstr)

}

require("./易语言")

function echo(str) {
    console.log(str)
}
global["echo"] = echo;


function console_log(str) {
    console.log(str)
}

global["console_log"] = console_log;

//alert(module)
//if(module!=undefined)
// for use in broswer
if (isset("module"))
    module.exports = {
        call_user_func,
        isset,
        time,
        echo,
        substr,
        console_log,
        sprintf,
        startwith,
        str_replace,
        strtolower,
        strlen,
        strpos,
        trim,
        sprintf
    }

// sec from 1970
function time() {
    var timestamp = Date.parse(new Date());
    return timestamp;
}

global["array_filter"] = array_filter;
function  array_filter(arr)
{
    let newArr=arr.filter(i=>
        i && i.trim())
    newArr= newArr.map(i=>i.trim())
    return newArr
}
global["foreach"] = foreach;
function  foreach(arr,f)
{
    for (const v of arr) {

       rzt= f(v);

        if(rzt=="$break")
            break;
    }
}
global["time"] = time;
global["echo"] = echo;
global["trim"] = trim;
global["修剪"] = trim;
function trim(str) {
    return str.trim();
}

global["explode"] = explode;

global["var_dump"] = var_dump;

function var_dump(s) {
    echo(s)
}

global["log"] = log;

function log(s) {
    echo(s)
}

global["key"] = key;
global["current"] = current;

function key(obj) {
    return Object.keys(obj)[0]

}

// a={"k1":123}
// echo(key(a))
function current(obj) {
    Object.values(obj)[0]

}

//   apidoc -i zmng/ -o apidocOtpt/

/**
 * * @api  api expld
 * @apiName GetUser
 * * @apiGroup Groupxx
 * * @apiDescription str split
 *
 */


function explode(sprtr, str) {
    return str.split(sprtr);
}

global["str_replace"] = str_replace;

function str_replace(find, replace, string) {
    return string.replaceAll(find, replace);

}

global["require_once"] = require_once;

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
global["startwith"] = startwith;
function startwith(str, wz) {
    return str.startsWith(wz);

}

function strlen(str) {
    return str.length;
}

function strtolower(str) {
    return str.toLowerCase();
}

//echo(repeat("a",5))
function repeat(str, n) {
    var arr = new Array(n + 1);
    return arr.join(str);
}