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
try{
    require("./datetime")
    require( __dirname+"/datetime.js")
    require("./datetime.js")
 //   var {readFileSync,writeFileSync,appendFileSync} = require("fs");
    global["readFileSync"]=readFileSync;
    global["writeFileSync"]=writeFileSync;
    global["appendFileSync"]=appendFileSync;
    global['log_enterFun' ]=log_enterFun
    global['log_fun_enter' ]=log_fun_enter

    global['log_fun_ret' ]=log_fun_ret
    global['log_errV2' ]=log_errV2

    global['errorSeriz' ]=errorSeriz
    global['log_warn'] = log_warn
    global['log_err'] = log_err
    global['log_info'] = log_info

}catch (e){
    //maybe use in html env

}

function  appendFileSync(f,msg)
{
    if (isWinformEnv())
    {

        callOBj = "appendFileSync " + encodeURIComponent(f)+" "+encodeURIComponent(msg);

       return  window.external.callFun(callOBj)
    }

    else {
        //win env   node env
        var  fs = require("fs");

        fs.appendFileSync(f,msg)
    }
}

function log_info(msg) {
    try {
        //  logger606.info(msg);   info: Sep-05-2023 18:34:26:
        appendFileSync("./log636.log", curDatetime() + " info " + msg + "\r\n")
    } catch (e) {
        console.log(e)
    }

}


function log_enterFun(arguments) {

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);

}

function log_fun_enter(arguments) {

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);
    log_info("*********=>" + funname + arg)

}

function log_fun_ret(arguments,retVal) {

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);

  //  "*********=>" + funname + arg
    console.log("["+funname+"] ret=>"+retVal);

}



function err_castSerizErr(e) {
    let s= errorSeriz(e)
     return json_decode(s)
}

function log_errV2(e,arguments) {

    try{
        var funname = arguments.callee.name;
        // arguments.callee.name
        arg = JSON.stringify(arguments);

        //  "*********=>" + funname + arg
        let eo={"e":err_castSerizErr(e),"fun":funname,"args":arguments }

        console.log(eo);
        let msg=json_encode(eo)
        appendFileSync("./err_log636.log", curDatetime() + " ERR " + msg + "\r\n")
      return eo;
    }catch (e){
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

function log_err(e) {
   // require("./fp_ati1990")
    try {
        if(  typeof(e)=='string')
            msg=e;
        else
        {
            const msg = errorSeriz(e);


        }
        //  logger606.info(msg);   info: Sep-05-2023 18:34:26:
        appendFileSync("./err_log636.log", curDatetime() + " ERR " + msg + "\r\n")
    } catch (e) {
        console.log(e)
    }
}


function log_warn(e) {
    require("./fp_ati1990")
    try {

        if(  typeof(e)=='string')
           msg=e;
        else
        {
            let eobj={"stack":e.stack,"msg":e.message}
            msg=json_encode(eobj)
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