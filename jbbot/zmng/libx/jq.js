
// need merge to http..
//todo  need merge to http..

try {
    const winlogger = require("./logger.js");
} catch (e) {
}
try {
    const winlogger = require("./logger");
} catch (e) {
}

try{
    window["http_get_jqget"] = jqGet
    window["jqGet"] = jqGet
}catch (e){}


//dep  should http_get_jqget
function jqGet($url, f ,failF) {

    console.log(" [http_get_jqget] " + $url)


    // log_info("\r\n");

    log_info("  [http_get_jqget] url=>" + $url);

    $.get($url, function (data) {
        console.log("[http_get_jqget] ret=>" + $url)
        log_info(" [jqGet] ret=>" + data);
        f(data)
    },"text").fail(failF);
}



// it trig twic e ,dont know why
// $( document ).on( "ajaxError", function( event, jqxhr, settings, thrownError ) {
//       let errobj={"evt":event,"jqxhr":jqxhr,"settings":settings,"throwError":thrownError};
//       alert( JSON.stringify(errobj))
//        log_err(errobj)
// } );