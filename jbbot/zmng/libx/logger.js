// const {createLogger, format, transports} = require("winston");
// const {appendFileSync} = require("fs");
// require("./datetime.js")
// logger606 = createLogger({
//     transports: [
//         new transports.File({
//             filename: "logs/log403.log",
//             level: "info",
//             format: format.combine(
//                 format.timestamp({format: "MMM-DD-YYYY HH:mm:ss"}),
//                 format.align(),
//                 format.printf(
//                     (info) =>
//                         `${info.level}: ${[info.timestamp]}: ${info.message}`
//                 )
//             ),
//         }),
//     ],
// });
// module.exports = logger606;

//require("datetime")
try {
    require("./datetime")
    require(__dirname + "/datetime.js")
    require("./datetime.js")
    //   var {readFileSync,writeFileSync,appendFileSync} = require("fs");
    global["readFileSync"] = readFileSync;
    global["writeFileSync"] = writeFileSync;
    global["appendFileSync"] = appendFileSync;
    global['log_enterFun'] = log_enterFun
    global['log_fun_enter'] = log_fun_enter

    global['log_fun_ret'] = log_fun_ret
    global['log_errV2'] = log_errV2

    global['errorSeriz'] = errorSeriz
    global['log_warn'] = log_warn
    global['log_err'] = log_err
    global['log_info'] = log_info

} catch (e) {
    //maybe use in html env

}

function appendFileSyncAllenv(f, msg) {
    //alert("appendFileSyncAllenv")
   require("./sys")
    if (isWinformEnv()) {

        callOBj = "appendFileSync " + encodeURIComponent(f) + " " + encodeURIComponent(msg);

        // alert(callOBj)
        return window.external.callFun(callOBj)
    } else {
        //win env   node env
        let fs = require("fs");
      //  alert(fs)

        fs.appendFileSync(f, msg)
    }
}

// require("./sys")
// appendFileSyncAllenv("log906.log","aaa")

try{
    require("./file2023")
}catch (e){}
try{
    require("./libx/file2023")
}catch (e){}

try{
    require("./sys")
}catch (e){}
try{
    require("./libx/sys")
}catch (e){}

global['log_info']=log_info
function log_info(msg) {
   // require("./file2023")
    try {
        //  logger606.info(msg);   info: Sep-05-2023 18:34:26:
        appendFileV2("./log636.log", curDatetime() + " info " + msg + "\r\n")
    } catch (e) {
        console.log(e)
    }

}

function log_enterFun_console(arguments) {

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);

}

function log_enterFun(arguments) {

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);

}

try {
    global['log_enterFun_console'] = log_enterFun_console
} catch (e) {
}

function log_fun_enter(arguments) {

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);
    log_info("*********=>" + funname + arg)

}

function log_fun_ret(arguments, retVal) {

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);

    //  "*********=>" + funname + arg
    console.log("[" + funname + "] ret=>" + retVal);

}


function err_castSerizErr(e) {
    let s = errorSeriz(e)
    return json_decode(s)
}

function log_errV2(e, arguments) {

    try {
        var funname = arguments.callee.name;
        // arguments.callee.name
        arg = JSON.stringify(arguments);

        //  "*********=>" + funname + arg
        let eo = {"e": err_castSerizErr(e), "fun": funname, "args": arguments}

        console.log(eo);
        let msg = json_encode(eo)
        appendFileSync("./err_log636.log", curDatetime() + " ERR " + msg + "\r\n")
        return eo;
    } catch (e) {
        console.log(e)
    }


}


function errorSeriz(e) {
    msg = json_encode(e)    //cuztm errobj
    if (msg.length < 5) {
        //sys error
        let eobj = {"stack": e.stack, "msg": e.message}
        msg = json_encode(eobj)
    }
    return msg;
}

global['log_err']=log_err

function log_err(e) {
    // require("./fp_ati1990")
    //alert("logeerr")
    var msg = ""
    try {
        if (typeof (e) == 'string')
            msg = e;
        else {
            msg = JSON.stringify(e)
            if (msg == "{}")
                msg = errorSeriz(e);


        }
        //  logger606.info(msg);   info: Sep-05-2023 18:34:26:
        appendFileSyncAllenv("./err_log636.log", curDatetime() + " ERR " + msg + "\r\n")
    } catch (e) {
        // alert(e)
        console.log(e)
    }
}


function log_warn(e) {
    require("./fp_ati1990")
    try {

        if (typeof (e) == 'string')
            msg = e;
        else {
            let eobj = {"stack": e.stack, "msg": e.message}
            msg = json_encode(eobj)
        }

        //  logger606.info(msg);   info: Sep-05-2023 18:34:26:
        appendFileSync("./warn_log636.log", curDatetime() + " info " + msg + "\r\n")
    } catch (e) {
        console.log(e)
    }
}

// const winlogger = require("logger");
// winlogger.info(url);


try {
    window['log_info'] = log_info
} catch (e) {
}