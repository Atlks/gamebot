try {
    const fs = require("fs");
} catch (e) {
}


function getLibdir() {
    // _file=>C:\modyfing\jbbot\zmng\shangxiafen.htm
    // if embed in htm...filename just htm path
    // if(!__filename)
    //     __filename=""


    //   console.log("_file=>" + __filename)  //if in html file ,...just for html file path
    //   console.log("__dirname=>" + __dirname)
    try {
        //   console.log(__dirname)
        let libdir = __dirname + '/../libx/'
// C:\modyfing\jbbot\zmng/../lib/
        //   console.log(libdir)

        const fs = require('fs');

        //   console.log("exist dir:=>" + fs.existsSync(libdir))

        if (!fs.existsSync(libdir)) {
            //   console.log(libdir + " not exist")
            libdir = __dirname + '/libx/'
        }
        //   console.log("libdir=>" + libdir)
        return libdir;
    } catch (e) {
        return ""

    }

}

let libdir = getLibdir();


try {
    require(libdir + "api2023jb.js");
    require(libdir + "fp_ati1990");
    require(libdir + "logger")
    require(libdir + "jq.js");
} catch (e) {
}

// import(libdir+"ui.js")
// require("fp_ati1990")
// require("logger")


function PlayerKexiafenBal638() {
    chkAop();
    authChk()
    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);

    $("#loaddiv").show()

    setTimeout(function () {

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
                require("./libx/excel.js")
                let errmsg = errcodeMsg(rztobj.data.code)
                alert("发生错误:" + errmsg + " ")
            }
        } catch (e) {


            if (rztobj.msg_to_ui) {

                alert(rztobj.msg_to_ui)
            } else
                alert(e)
        }


        // rztobj.data.totalScore=rztobj.data.score;
        //   window['bindJsonToTable'](rztobj)

        $("#loaddiv").hide()

    }, 50)


}


function player_kickInform() {

    var r = confirm("确定要踢下线吗");
    if (r == true) {

    } else {
        return
    }
    chkAop();
    authChk()

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);

    $("#loaddiv2").show()

    setTimeout(function () {

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
                } else
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


function chkAop() {

    if ($("#uname").val() == "") {
        throw ("查询玩家账户不能为空")
    }
}


//dep
function _score_qry() {
    chkAop();
    authChk()

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

            $("#app3 tr").each(function (idx, item) {
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



// function jqFailFundp(jqXHR, textStatus, errorThrown) {
//
//     $("#loaddiv").hide();
//     let arg = JSON.stringify(arguments);
//     log_err(arg)
//
//     if(jqXHR.responseJSON)
//     if (jqXHR.responseJSON.errors)
//     {
//         alert("参数错误 检查代理id " + JSON.stringify(jqXHR.responseJSON.errors));
//         return;
//     }
//
//     if (jqXHR.status == 403)
//         alert("错误 检查ip加白处理 " + jqXHR.responseText)
//
//
// }

