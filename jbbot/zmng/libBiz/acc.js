//const _ = require("lodash");


function  chkSxfUname()
{
    if ($("#uname_sxf").val() == "") {
        throw ("玩家账户不能为空")
    }
}
function orderQryShagnxiafen415() {
    // chkAop()
    authChk()
    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);
    $("#loaddiv").show()

//return

    setTimeout(function () {

        rzt = dsl_callFunCmdMode("score_orderQryShagnxiafen", $("#uname").val())


      let columns=    [
                     { data: 'uname' },
                     { data: '类型' },
                     { data: 'score' },
                     { data: 'time' }
                 ]

        loadToDataTable(json_decode(rzt), "tab_sxf",columns)

        //  window['loadToTable'](json_decode(rzt),"tab_sxf")
        // console.log("[playerStat237] rzt=>" + rzt)

        $("#tab_sxf tr").each(function (idx, item) {
            // item.show();  item.css("display","");
            //  alert(item)
            //  alert($(item)[0])
            $(item).css("display", "");
            $(item).show();
        })
        $("#loaddiv").hide()

    }, 50)

}

global["score_orderQryShagnxiafen"] = score_orderQryShagnxiafen;
  function score_orderQryShagnxiafen(uname) {

      log_enterFun(arguments)
    // await import("../lowdbx/lowdbX.js")
    let dbfile = __dirname + "/../db/scoreLogColl.json";

    console.log("dbfile=>" + dbfile)
    //  pdo_exec_insert()


    let _ = require('lodash');
    if(uname)
        var queryCondt={'uname': uname};
    else
        var queryCondt={}
    require("../libx/db.js")
    let rzt = pdo_query(queryCondt, dbfile);
    //  _.sortBy()

    //   let _ = require('lodash');


    rzt = _.orderBy(rzt, ['time'], ['desc']);
    rzt = rzt.slice(0, 300)


    console.log(rzt)
    return json_encode(rzt);

}
try{
    // 玩家状态(0离线，1大厅，2游戏中)
    window['playerStat0']='离线'
    window['playerStat1']='大厅'
    window['playerStat2']='游戏中'
}catch (e){

}

//  apitype_PlayerScore
function playerNScore237() {
    chkAop();
    authChk()

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
    let url = buildUrlNget_x(_paraValue, timestamp, apitype_PlayerScore);
    //  alert("url=>"+url)
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

            rztobj.data.statStr= window['playerStat'+rztobj.data.status]
            arr.push(rztobj.data)
            //    console.log( window['loadToTable'])

            columns= [
                         { data: 'userid' },
                         { data: 'account' },
                         { data: 'totalScore' },
                         { data: 'statStr' }
                     ]

// col cant be null,cant be "null" bdant be empty
            loadToDataTable(arr, "app3",columns)

            $("#app3 tr").each(function (idx, item) {
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


    }, jqFailFun)


}




