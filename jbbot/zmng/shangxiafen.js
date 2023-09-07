const fs = require("fs");

function getLibdir() {
    // _file=>C:\modyfing\jbbot\zmng\shangxiafen.htm
    // if embed in htm...filename just htm path
    console.log("_file=>" + __filename)  //if in html file ,...just for html file path
    console.log("__dirname=>" + __dirname)

    //   console.log(__dirname)
    let libdir = __dirname + '/../libx/'
// C:\modyfing\jbbot\zmng/../lib/
    console.log(libdir)

    const fs = require('fs');

    console.log("exist dir:=>" + fs.existsSync(libdir))

    if (!fs.existsSync(libdir)) {
        console.log(libdir + " not exist")
        libdir = __dirname + '/libx/'
    }
    console.log("libdir=>" + libdir)
    return libdir;
}

let libdir = getLibdir();
require(libdir + "api2023jb.js");
require(libdir + "fp_ati1990");
require(libdir + "logger")
require(libdir + "jq.js");

// import(libdir+"ui.js")
// require("fp_ati1990")
// require("logger")

function xiafen745() {
    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);

    $("#loaddiv").show()


    setTimeout(() => {


        //rzt=  dsl_callFunCmdMode("playerStat",$("#uname").val() )
        rzt = dsl_callFunCmdMode("Score_xiafen", $("#uname").val(), $("#score").val())


        //  {"maintype":"/GameHandle","type":7,"data":{"code":0,"agentid":111356,"linecode":"10001_1","status":0,"userid":32076939,"account":"uname1","totalScore":300.0,"integralvalue":6.0,"addscore":300.0,"subscore":0.0,"addscoretimes":2,"subscoretimes":0,"totalwinlose":0.0,"totalrevenue":0.0}}
        console.log("[xiafen745] rzt=>" + rzt)
        rztobj = JSON.parse(rzt);
        if (rztobj.msg_to_ui)
            alert(rztobj.msg_to_ui)

        else if (rztobj?.data?.code == 0) {
            alert("下分成功")
            playerStat237();
            //  orderQryShagnxiafen415();

        } else if(rztobj?.data?.code) {
            require("zmng/test/excel")
            let errmsg = errcodeMsg(rztobj.data.code)
            alert("发生错误:" + errmsg + " ")
        }else
            alert("发生错误"+rzt)
        //   alert(rzt)


        $("#loaddiv").hide();

    }, 50);


}

function PlayerKexiafenBal638() {
    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);

    $("#loaddiv").show()

    setTimeout(() => {

        //rzt=  dsl_callFunCmdMode("playerStat",$("#uname").val() )
        rzt = dsl_callFunCmdMode("Score_PlayerKexiafenBal", $("#uname").val())


        //  {"maintype":"/GameHandle","type":7,"data":{"code":0,"agentid":111356,"linecode":"10001_1","status":0,"userid":32076939,"account":"uname1","totalScore":300.0,"integralvalue":6.0,"addscore":300.0,"subscore":0.0,"addscoretimes":2,"subscoretimes":0,"totalwinlose":0.0,"totalrevenue":0.0}}
        console.log("[PlayerKexiafenBal638] rzt=>" + rzt)
        rztobj = JSON.parse(rzt);


        //   88888888888888888888888888
        //  {"type":"ex","fun":"[http_get_core]","
        //  fetchOpt":{"timeout":5000},
        //  "url":"https://ng.mqbsx.com/GameHandle?agentid=111356aa&timestamp=1693993591000&type=1&paraValue=e1y2z7asUG4XSFiwZNa0ChUeAnYB2MMDLniVE6xEAWQ%3D&key=8da092399439ae9482b2ebbf5a18fcfd",
        //  "httpStatuCode":400,
        //  "httpRzt_clr":"{\"type\":\"https://tools.ietf.org/html/rfc7231#section-6.5.1\",\"title\":\"One or more validation errors occurred.\",\"status\":400,\"traceId\":\"|8d133b00-411521f39c280ca1.\",\"errors\":{\"agentid\":[\"The value '111356aa' is not valid.\"]}}"}

        try {
            if (rztobj.data.code == 0) {


                alert("此用户可下分为:" + rztobj.data.score)


            } else {
                require("zmng/test/excel")
                let errmsg = errcodeMsg(rztobj.data.code)
                alert("发生错误:" + errmsg + " ")
            }
        } catch (e) {



            if (rztobj.msg_to_ui  ) {

                alert(rztobj.msg_to_ui )
            } else
                alert(e)
        }


        // rztobj.data.totalScore=rztobj.data.score;
        //   window['bindJsonToTable'](rztobj)

        $("#loaddiv").hide()

    }, 50)


}


function player_kickInform() {

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);

    $("#loaddiv2").show()

    setTimeout(() => {

        try {
            //rzt=  dsl_callFunCmdMode("playerStat",$("#uname").val() )
            rzt = dsl_callFunCmdMode("player_kick", $("#uname").val())
            $("#loaddiv2").hide()
            //  {"maintype":"/GameHandle","type":7,"data":{"code":0,"agentid":111356,"linecode":"10001_1","status":0,"userid":32076939,"account":"uname1","totalScore":300.0,"integralvalue":6.0,"addscore":300.0,"subscore":0.0,"addscoretimes":2,"subscoretimes":0,"totalwinlose":0.0,"totalrevenue":0.0}}
            console.log("[player_kickInform] rzt=>" + rzt)
            rztobj = JSON.parse(rzt);
            // alert(rztobj)
            // if(rztobj.type=="ex")
            // {
            //     let httprzt=rztobj.httpRzt;
            //     let obj=JSON.parse(httprzt)
            //     let  errcode=obj.data.code;
            //     require("excel")
            //     let errmsg = errcodeMsg(errcode)
            //     alert("发生错误:" + errmsg + " ")
            //
            //
            //     return;
            //
            // }


            if (rztobj.msg_to_ui)
                alert(rztobj.msg_to_ui)
            else {
                // log_err(e)

                if (rztobj.type && rztobj.type == "ex") {
                    //err agt id error ex
                    httpRzt_clr = rztobj.httpRzt_clr;
                    let retObj = JSON.parse(httpRzt_clr);
                    let errmsgObj = retObj.errors;
                    alert("发生错误" + JSON.stringify(errmsgObj))
                }
                else
                    alert("ok")
            }


            $("#loaddiv2").hide()

            // rztobj.data.totalScore=rztobj.data.score;
            //   window['bindJsonToTable'](rztobj)

        } catch (e) {
            $("#loaddiv2").hide()
            alert(e)
            log_err(e)
        }


    }, 50)


}


function orderQryShagnxiafen415() {
    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);
    $("#loaddiv").show()

//return

    setTimeout(() => {

        rzt = dsl_callFunCmdMode("score_orderQryShagnxiafen", $("#uname").val())


        loadToTableVue(json_decode(rzt), "tab_sxf")

        //  window['loadToTable'](json_decode(rzt),"tab_sxf")
        // console.log("[playerStat237] rzt=>" + rzt)

        $("#tab_sxf tr").each((idx, item) => {
            // item.show();  item.css("display","");
            //  alert(item)
            //  alert($(item)[0])
            $(item).css("display", "");
            $(item).show();
        })
        $("#loaddiv").hide()

    }, 50)

}

//dep
function score_qry() {

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);


    timestamp = time();

    _paraValue = sprintf("account=%s", $("#uname").val());
    echo("_paraValue==>" + _paraValue)
    let url = buildUrlNget(_paraValue, timestamp, apitype_PlayerScore);
    console.log(url)

    $.get(url, function (data) {
        console.log("[playerStat237] rzt=>" + data)
        rztobj = JSON.parse(data);

        // $("#loaddiv").hide();

        //rzt=  dsl_callFunCmdMode("playerStat",$("#uname").val() )
        //  rzt=  dsl_callFunCmdMode("PlayerScoreQry",$("#uname").val() )


        //  {"maintype":"/GameHandle","type":7,"data":{"code":0,"agentid":111356,"linecode":"10001_1","status":0,"userid":32076939,"account":"uname1","totalScore":300.0,"integralvalue":6.0,"addscore":300.0,"subscore":0.0,"addscoretimes":2,"subscoretimes":0,"totalwinlose":0.0,"totalrevenue":0.0}}

        // rztobj=JSON.parse(rzt);


        if (rztobj.data.code == 0) {
            arr = [];
            arr.push(rztobj.data)
            console.log(window['loadToTable'])
            window['loadToTable'](arr, "app3")

            $("#app3 tr").each((idx, item) => {
                // item.show();  item.css("display","");
                //  alert(item)
                //  alert($(item)[0])
                $(item).css("display", "");
                $(item).show();
            })
        } else
            alert(window["errcodeMsg" + rztobj.data.code] + " " + data)

        //  console.log("[playerStat237] rzt=>" + rzt)


    })


}

function playerStatV2() {

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);

    $("#loaddiv").show()

    timestamp = time();

    _paraValue = sprintf("account=%s", $("#uname").val());
    echo("_paraValue==>" + _paraValue)
    let url = buildUrlNget(_paraValue, timestamp, apitype_playerStat);
    console.log(url)

    jqGet(url, function (data) {
        console.log("[playerStat237] rzt=>" + data)
        rztobj = JSON.parse(data);

        // $("#loaddiv").hide();

        //rzt=  dsl_callFunCmdMode("playerStat",$("#uname").val() )
        //  rzt=  dsl_callFunCmdMode("PlayerScoreQry",$("#uname").val() )


        //  {"maintype":"/GameHandle","type":7,"data":{"code":0,"agentid":111356,"linecode":"10001_1","status":0,"userid":32076939,"account":"uname1","totalScore":300.0,"integralvalue":6.0,"addscore":300.0,"subscore":0.0,"addscoretimes":2,"subscoretimes":0,"totalwinlose":0.0,"totalrevenue":0.0}}

        // rztobj=JSON.parse(rzt);


        if (rztobj.data.code == 0) {
            arr = [];
            arr.push(rztobj.data)
            console.log(window['loadToTable'])
            loadToTableVue(arr, "app3")

            $("#app3 tr").each((idx, item) => {
                // item.show();  item.css("display","");
                //  alert(item)
                //  alert($(item)[0])
                $(item).css("display", "");
                $(item).show();
            })

        } else {
            require("zmng/test/excel")
            let errmsg = errcodeMsg(rztobj.data.code)
            alert("发生错误:" + errmsg + " ")
        }
        // alert(window["errcodeMsg" + rztobj.data.code] + " " + data)


        $("#loaddiv").hide()

        //  console.log("[playerStat237] rzt=>" + rzt)


    },jqFailFun)


}


function jqFailFun(jqXHR, textStatus, errorThrown) {

    $("#loaddiv").hide();
    let arg = JSON.stringify(arguments);
    log_err(arg)
    if( jqXHR?. responseJSON?.errors )
        alert("参数错误 检查代理id "+   JSON.stringify(  jqXHR?. responseJSON?.errors));
    if(jqXHR?.status==403)
        alert("错误 检查ip加白处理 "+ jqXHR.responseText)



}


function  adduserFm()
{

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);


    log_info("");
    log_info("");
    log_info("");
    log_info("*********=>" + funname + arg)



    timestamp = time();


    let uname=$("#uname").val();
    if(uname=="")
    {
        $("#loaddiv").hide();
        alert("用户名不能为空")

        return
    }

    $("#loaddiv").show()
    let nickname=$("#nknm").val();
   // _paraValue = sprintf("account=%s", $("#uname").val());
    _paraValue = "account=%s&nickname=%s&headindex=0&linecode=10001_1&lastloginip=255.224.22.12&gamebackurl=www.test.com&logintype=1&gameid=0";
    _paraValue = sprintf(_paraValue, uname, nickname);


    echo("_paraValue==>" + _paraValue)
    let url = buildUrlNget(_paraValue, timestamp, apitype_regLogin);
    console.log(url)


    jqGet(url, function (data) {
        console.log("["+funname+"] rzt=>" + data)
        rztobj = JSON.parse(data);

        // $("#loaddiv").hide();

        //rzt=  dsl_callFunCmdMode("playerStat",$("#uname").val() )
        //  rzt=  dsl_callFunCmdMode("PlayerScoreQry",$("#uname").val() )


        //  {"maintype":"/GameHandle","type":7,"data":{"code":0,"agentid":111356,"linecode":"10001_1","status":0,"userid":32076939,"account":"uname1","totalScore":300.0,"integralvalue":6.0,"addscore":300.0,"subscore":0.0,"addscoretimes":2,"subscoretimes":0,"totalwinlose":0.0,"totalrevenue":0.0}}

        // rztobj=JSON.parse(rzt);


        if (rztobj.data.code == 0) {
            alert("ok")
            arr = [];
            arr.push(rztobj.data)
            //    console.log( window['loadToTable'])
          //  loadToTableVue(arr, "app3")

            // $("#app3 tr").each((idx, item) => {
            //     // item.show();  item.css("display","");
            //     //  alert(item)
            //     //  alert($(item)[0])
            //     $(item).css("display", "");
            //     $(item).show();
            // })
        } else {
            require(libdir + "excel.js")
            let errmsg = errcodeMsg(rztobj.data.code)
            alert(errmsg + " ")
        }


        //  console.log("[playerStat237] rzt=>" + rzt)

        $("#loaddiv").hide();


    },jqFailFun)
}

//  apitype_PlayerScore
function playerStat237() {

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);


    log_info("");
    log_info("");
    log_info("");
    log_info("*********=>" + funname + arg)

    $("#loaddiv").show()

    timestamp = time();

    _paraValue = sprintf("account=%s", $("#uname").val());
    echo("_paraValue==>" + _paraValue)
    let url = buildUrlNget(_paraValue, timestamp, apitype_PlayerScore);
    console.log(url)


    jqGet(url, function (data) {
        console.log("[playerStat237] rzt=>" + data)
        rztobj = JSON.parse(data);

        // $("#loaddiv").hide();

        //rzt=  dsl_callFunCmdMode("playerStat",$("#uname").val() )
        //  rzt=  dsl_callFunCmdMode("PlayerScoreQry",$("#uname").val() )


        //  {"maintype":"/GameHandle","type":7,"data":{"code":0,"agentid":111356,"linecode":"10001_1","status":0,"userid":32076939,"account":"uname1","totalScore":300.0,"integralvalue":6.0,"addscore":300.0,"subscore":0.0,"addscoretimes":2,"subscoretimes":0,"totalwinlose":0.0,"totalrevenue":0.0}}

        // rztobj=JSON.parse(rzt);


        if (rztobj.data.code == 0) {
            arr = [];
            arr.push(rztobj.data)
            //    console.log( window['loadToTable'])
            loadToTableVue(arr, "app3")

            $("#app3 tr").each((idx, item) => {
                // item.show();  item.css("display","");
                //  alert(item)
                //  alert($(item)[0])
                $(item).css("display", "");
                $(item).show();
            })
        } else {
            require(libdir + "excel.js")
            let errmsg = errcodeMsg(rztobj.data.code)
            alert(errmsg + " ")
        }


        //  console.log("[playerStat237] rzt=>" + rzt)

        $("#loaddiv").hide();


    },jqFailFun)


}

function shangfen1236() {
    var winlogger = require(libdir + "logger");

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);
    log_info("*********=>" + funname + arg);
    $("#loaddiv").show()
    // setTimeout(()=>{    },50)


    // return;


    setTimeout(() => {

        rzt = dsl_callFunCmdMode("ScoreTopup_shangfen", $("#uname").val(), $("#score").val())
        //  winlogger.info("[shangfen1236] rzt=>" +rzt);


        console.log("[shangfen1236] rzt=>" + rzt)
        rztobj = JSON.parse(rzt);


        if (rztobj.msg_to_ui)
            alert(rztobj.msg_to_ui)


        else if (rztobj.data.code == 0) {
            setTimeout(() => {

                alert("上分成功")
                playerStat237();

            }, 300)

        } else {
            require(libdir + "excel")
            let errmsg = errcodeMsg(rztobj.data.code)
            alert("发生错误:" + errmsg + " ")
        }
        // alert(rzt)

        $("#loaddiv").hide();


    }, 50)


}
