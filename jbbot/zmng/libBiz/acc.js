




function  chkSxfUname()
{
    if ($("#uname_sxf").val() == "") {
        throw ("玩家账户不能为空")
    }
}


function shangfen1236() {






    authChk()
    var r = confirm("确定要给玩家上分吗");
    if (r == true) {

    } else {
        return
    }

    var winlogger = require(libdir + "logger");

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);
    log_info("*********=>" + funname + arg);
    $("#loaddiv").show()
    // setTimeout(()=>{    },50)


    // return;


    setTimeout(function()   {

        rzt = dsl_callFunCmdMode("ScoreTopup_shangfen", $("#uname_sxf").val(), $("#score_sxf").val())
        //  winlogger.info("[shangfen1236] rzt=>" +rzt);


        console.log("[shangfen1236] rzt=>" + rzt)
        rztobj = JSON.parse(rzt);


        if (rztobj.msg_to_ui)
            alert(rztobj.msg_to_ui)


        else if (rztobj.data.code == 0) {
            setTimeout(function ()  {

                alert("上分成功")
                playerStat237();

            }, 30)

        } else {
            require(libdir + "excel")
            let errmsg = errcodeMsg(rztobj.data.code)
            alert("发生错误:" + errmsg + " ")
        }
        // alert(rzt)

        $("#loaddiv").hide();


    }, 50)


}



function xiafen745() {

    authChk()


    var r = confirm("确定要给玩家下分吗");
    if (r == true) {

    } else {
        return
    }
    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);

    $("#loaddiv").show()


    setTimeout(function () {


        //rzt=  dsl_callFunCmdMode("playerStat",$("#uname").val() )
        rzt = dsl_callFunCmdMode("Score_xiafen", $("#uname_sxf").val(), $("#score_sxf").val())


        //  {"maintype":"/GameHandle","type":7,"data":{"code":0,"agentid":111356,"linecode":"10001_1","status":0,"userid":32076939,"account":"uname1","totalScore":300.0,"integralvalue":6.0,"addscore":300.0,"subscore":0.0,"addscoretimes":2,"subscoretimes":0,"totalwinlose":0.0,"totalrevenue":0.0}}
        console.log("[xiafen745] rzt=>" + rzt)
        rztobj = JSON.parse(rzt);
        if (rztobj.msg_to_ui)
            alert(rztobj.msg_to_ui)

        else if (rztobj.data.code == 0) {
            alert("下分成功")
            playerStat237();
            //  orderQryShagnxiafen415();

        } else if (rztobj.data.code) {
            require("./excel")
            let errmsg = errcodeMsg(rztobj.data.code)
            alert("发生错误:" + errmsg + " ")
        } else
            alert("发生错误" + rzt)
        //   alert(rzt)


        $("#loaddiv").hide();

    }, 50);


}
