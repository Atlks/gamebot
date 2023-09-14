function agtbal648() {
    // require("./libBiz/user.js")  use broser scrpt tag incld
    authChk();

    //  var winlogger = require(__dirname + "/node_modules/logger.js");


    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);

    log_info("");
    log_info("");
    log_info("")
    log_info("*********=>" + funname + arg);

    $("#loaddiv").show()

    //  setTimeout(function (){   $("#loaddiv").show();  },100)


    timestamp = time();
    _paraValue = ""
    let url =  buildUrlNget_x(_paraValue, timestamp, 9); // apitype_agtBal
    console.log(url)
    // alert(url)
    //  return

    //  const _ = require('lodash');
    // const b = _.flow(authChk, first);
    // b();

    //pipe_lodashFlow()
    http_get_jqGet(url, function (data) {
        let data1 = "[agtbal648] rzt=>" + data;
        console.log(data1)


        log_info(data1);
        rztobj = JSON.parse(data);

        $("#loaddiv").hide();

        //   rztobj=JSON.parse(rzt);
        if(rztobj.errors)
        {
            let errobj={"url":url,"ret":data}
            log_err(errobj)
            alert("发生错误:" + data);
            return;
        }


        if (rztobj.data.code == 0)
        {
            //alert("此代理余额为:" + rztobj.data.score)
            $("#agtBalLab").text(rztobj.data.score+"")
        }

        else
        {
            // require("./libx/excel.js")


            let errmsg = errcodeMsgV2(rztobj.data.code)
            alert("发生错误::" + errmsg + " ")

            //  alert(window["errcodeMsg" + rztobj.data.code] + " " + data)
        }


    },jqFailFun)




}
