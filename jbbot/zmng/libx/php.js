/**
 * 模拟PHP sprintf 的函数
 * @returns string
 */
function sprintf() {
    let args = arguments, string = args[0];
    for (let i = 1; i < args.length; i++) {
        let item = arguments[i];
        string = string.replace('%s', item);
    }
    return string;
}


//    call_user_func(funcs[i], ["ddd", "cc"]);
async function call_user_func(cb, params) {

    echo("\r\n\r\n");
    arg= JSON.stringify(params)  ;
    echo ( "******"+cb+  arg);
    //in js   apply fun is Fun obj proty.meth..heyou bind call ...

    if( isset("window"))
       func =window[cb];
    else
        func =global[cb];

  //  func=eval(cb);

        //window[cb];
    $r=func.apply(cb, params);
    echo( sprintf("[%s():] ret==>%s",cb,$r));
    echo("\r\n\r\n");
    return $r;
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
        console_log("[43isset()] "+e.message);
        //  console_log(e);
        return false;
    }

}


function substr(string, start, length) {
    return string.substring(start, length + start);

}

function echo(str) {
    console.log(str)
}
function console_log(str) {
    console.log(str)
}

//alert(module)
//if(module!=undefined)
// for use in broswer
if (isset("module"))
    module.exports = {call_user_func,isset,time,echo,substr, console_log, sprintf, startwith, str_replace, strtolower, strlen, strpos, trim, sprintf}

// sec from 1970
function time()
{
    var timestamp = Date.parse(new Date());
    return timestamp;
}

function trim(str) {
    return str.trim();
}

function str_replace(find, replace, string) {
    return string.replaceAll(find, replace);

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