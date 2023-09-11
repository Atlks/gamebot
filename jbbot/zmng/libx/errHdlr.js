try {
    const winlogger = require("./logger.js");
} catch (e) {
}

try {
    require("./libx/logger.js");
} catch (e) {
}

//require("./logger")

try {
     if (window)
        window.onerror = function (message, source, lineno, colno, error) {


            console.log("******EEE----##### msg:" + message);
            console.log("source:" + source);
            console.log("lineno:" + lineno)

            console.log("colno:" + colno);
            console.log("error:" + error);
            a = {"error": error, "msg": message, "source": source, "lineno": lineno}

            msg = JSON.stringify(a)
            log_err(msg)
            if (source.indexOf("bootstrap.min.js") < 0)
            {
              //  alert("有错误" + "msg:"+message +" err:" +error)
                alert(msg)
            }



        }

} catch (e) {

    console.log("-------e------")
    console.log(e.message)
}


try {
    window["winlogger"] = winlogger
} catch (e) {
}

try{
    require("./logger");
    require("./fp_ati1990")
}catch (e)
{

}

try{
    require("./libx/logger");
    require("./libx/fp_ati1990")
}catch (e)
{

}
//require("./logger")


try{
    if(process)
    {

        process.on('uncaughtException', function (err) {

            try {
                console.error('未捕获的异常', err.message);


                // winlogger.error(ivkFundbg)
                log_err("uncaughtException");
                log_err(err);
            } catch (e) {
                console.log(e)
            }

        })

        process.on('unhandledRejection', function (err, promise) {
            try {
                console.error('有Promise没有被捕获的失败函数', err.message);


                //  winlogger.error(ivkFundbg)
                log_err("unhandledRejection");
                log_err(err);

            } catch (e) {
                console.log(e)
            }
        })

    }

}catch (e)
{

}

