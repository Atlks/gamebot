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

         //Err just errNstack too long
//return  false;
            console.log("******EEE----##### msg:" + JSON.stringify(message) );
            console.log("source:" + source);
            console.log("lineno:" + lineno)

            console.log("colno:" + colno);

          //  log_info()
            let boolDtwrning=startwithV2(colno,"DataTables warning:")
            console.log(boolDtwrning)
            if(boolDtwrning)
            {
//alert(false)
                return false;
            }

            console.log("error:" + error);
            a = {"error": error, "msg": message, "source": source, "lineno": lineno,"colno":colno}

            msg = JSON.stringify(a)
            console.log(msg)
            // alert(msg)  //for test
            log_err(msg)
            // if                (message.toString().indexOf("Datatables") >= 0)
            // {
            //     console.log( msg  )
            // }
            if (source.toString().indexOf("bootstrap.min.js") < 0)
            {
              alert("" + "msg:"+message )
              //  if()
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
                console.log(err)
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

require("./logger")
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

