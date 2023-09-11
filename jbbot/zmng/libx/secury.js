// for db http  url cmd lib core warp

//global['call_func'] = call_func
global['call_funcNoEx'] = call_funcNoEx


require("./php");
require("./core")
require("./fp_ati1990")

async function call_func_dp(fun, params) {
   let arg = JSON.stringify(arguments);
   // arg = JSON.stringify(params);
   let ivkFundbg = "******[call_func]" + arg
    console.log(ivkFundbg);
    log_info(ivkFundbg)

    //in js   apply fun is Fun obj proty.meth..heyou bind call ...

    if (isset("window"))
        func = window[fun];
    else
        func = global[fun];

    //  func=eval(cb);

    try {
        $r = await func.apply("thisobj", params);
        let str = sprintf("[%s] ret==>%s", fun, $r);
        echo(str);
        log_info(str)
        // echo("\r\n\r\n");
        return $r;
    } catch (e) {
        console.log(e)

        log_err("e at:" + fun + arg)
        log_err(json_encode(e));
        throw  e;
    }

}


async function call_funcNoEx(fun, params) {

   // arg = JSON.stringify(params);
    arg = JSON.stringify(arguments);
 let   ivkFundbg = "******call_funcNoEx "   + arg
    console.log(ivkFundbg);
    log_info(ivkFundbg)


    //in js   apply fun is Fun obj proty.meth..heyou bind call ...



    //  func=eval(cb);

    try {
        if (isset("window"))
            func = window[fun];
        else
            func = global[fun];

        if(func== undefined)
        {
            let eobj={"enterFunArgs": ivkFundbg,"msg":" cant find fun:"+fun}
            throw  eobj;
        }

        $r = await func.apply("thisobj", params);
        let str = sprintf("[%s] ret==>%s", fun, $r);
        echo(str);
        log_info(str)
        // echo("\r\n\r\n");
        return $r;
    } catch (e) {
        console.log(e)

        log_err("e at:" + fun + arg)
        let eobj={"stack":e.stack,"msg":e.message}
        log_err(json_encode(eobj));
    }

}


async function http_get000($url, opt = {timeout: 5000}) {
    // const winlogger = require("logger");
    let funname;
    // var callerName;
    try {
        throw new Error();
    } catch (e) {
        funname = __METHOD__(e);

    }
    var arg = JSON.stringify(arguments);
    let ivkFundbg = "=>" + funname + arg;
    console.log(ivkFundbg);
    log_info(ivkFundbg)

}