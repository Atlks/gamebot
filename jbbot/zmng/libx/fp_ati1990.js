//   cd  zmng/libx
//cd  zmng/lowdbx
//  npm publish --access=public
//  C:\prgrm\nodejs\npm.cmd  publish --access=public


try {
    require("./logger")
} catch (e) {
}
//  npm publish --access=public
try {
    require("./php");
    require("./secury");
} catch (e) {
}


try {
    require("./php");
    require("./secury");

} catch (e) {
}

/**
 * 模拟PHP sprintf 的函数
 * @returns string
 */
try {
    require("./enc.js")
} catch (e) {
    console.log(e)
}

try {
    require("./dsl")
    require("./enc")
} catch (e) {

    // console.log(e)
}


function curDateTime() {
    var sd = require('silly-datetime');
    var time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
    return time;
}


function array_sum(arr) {
    var sum = 0;
    var sum = arr.reduce(function (prev, curr) {
        return prev + curr;
    }, 0);
    return sum;
}


try {
    global["curDateTime"] = curDateTime;
    require("./logger")
    global["array_sum"] = array_sum;


    global["sprintf"] = sprintf;
} catch (e) {

}


function sprintf() {
    let args = arguments, string = args[0];
    for (let i = 1; i < args.length; i++) {
        let item = arguments[i];
        string = string.replace('%s', item);
    }
    return string;
}

//global["call_func"] = call_func;


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
    } catch (e) {
        return false
    }
}


function __METHOD__(e) {
    //Error
    //     at loadToTableVue (C:\modyfing\jbbot\zmng\node_modules\ui.js:116:17)
    //     at main (C:\modyfing\jbbot\zmng\node_modules\uiT.js:7:5)
    let arr = e.stack.split("\n")
    // var re = /(\w+)@|at (\w+) \(/g, st = e.stack, m;
    // re.exec(st), m = re.exec(st);
    // callerName = m[1] || m[2];
    let funname = arr[1]
    funname = funname.trim();
    let brk = funname.indexOf("(")
    funname = funname.substr(3, brk - 3)
    return funname.trim();
}

try {
    global['display'] = echo
    global['__METHOD__'] = __METHOD__
    require("./enc")
    global["call_user_func"] = call_user_func;

//    call_user_func(funcs[i], ["ddd", "cc"]);

    global["removeBlankLines"] = removeBlankLines;
} catch (e) {

}


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

function substr(string, start, length) {
    return string.substring(start, length + start);

}


function str_starts_with(string, wzstr) {
    return string.startsWith(string, wzstr)

}


function echo_dp(str) {
    console.log(str)
}


try {
    require("./易语言")
    global["echo"] = echo;

    global["startwith"] = str_starts_with;
    global["str_starts_with"] = str_starts_with;

    global["substr"] = substr;
    global["console_log"] = console_log;
} catch (e) {

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


function array_filter(arr) {
    let newArr = arr.filter(function (i) {
            return i && i.trim()
        }
    )
    newArr = newArr.map(function (i) {
        return i.trim()
    })
    return newArr
}

function foreach(arr, f) {
    for (var i = 0; i < arr.length; i++)
        //   for (const v of arr)
    {
        let v = arr[i];
        let rzt = f(v);

        if (rzt == "$break")
            break;
    }
}

try {
    global["time"] = time;
    global["echo"] = echo;
    global["trim"] = trim;
    global["修剪"] = trim;
    global["foreach"] = foreach;
    global["array_filter"] = array_filter;
    global["explode"] = explode;

    global["var_dump"] = var_dump;
    global["key"] = key;
    global["current"] = current;

    global["log"] = log;
} catch (e) {
}

function trim(str) {
    return str.trim();
}


function var_dump(s) {
    echo(s)
}


function log(s) {
    echo(s)
}


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

try {
    global["startwith"] = startwith;

    global["require_once"] = require_once;
    global["str_replace"] = str_replace;
} catch (e) {

}


String.prototype.startWith=function(str){
    var reg=new RegExp("^"+str);
    return reg.test(this);
}
function startwith(str, wz) {
    try{
        return str.startsWith(wz);
    }catch (e) {
        return  str.startWith(wz)
    }


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