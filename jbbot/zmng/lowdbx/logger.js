const {createLogger, format, transports} = require("winston");
const {appendFileSync} = require("fs");

logger606 = createLogger({
    transports: [
        new transports.File({
            filename: "logs/log403.log",
            level: "info",
            format: format.combine(
                format.timestamp({format: "MMM-DD-YYYY HH:mm:ss"}),
                format.align(),
                format.printf(
                    (info) =>
                        `${info.level}: ${[info.timestamp]}: ${info.message}`
                )
            ),
        }),
    ],
});
module.exports = logger606;

require("datetime")

function log_info(msg) {
    try {
        //  logger606.info(msg);   info: Sep-05-2023 18:34:26:
        appendFileSync("./log636.log", curDatetime() + " info " + msg + "\r\n")
    } catch (e) {
        console.log(e)
    }

}

function log_err(e) {
    require("fp_ati1990")
    try {
        if(  typeof(e)=='string')
            msg=e;
        else
        {
            msg=json_encode(e)    //cuztm errobj
            if(msg.length<5)
            {
                //sys error
                let eobj={"stack":e.stack,"msg":e.message}
                msg=json_encode(eobj)
            }


        }
        //  logger606.info(msg);   info: Sep-05-2023 18:34:26:
        appendFileSync("./err_log636.log", curDatetime() + " ERR " + msg + "\r\n")
    } catch (e) {
        console.log(e)
    }
}
global['log_warn'] = log_warn
function log_warn(e) {
    require("fp_ati1990")
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
global['log_err'] = log_err
global['log_info'] = log_info

try {
    window['log_info'] = log_info
} catch (e) {
}