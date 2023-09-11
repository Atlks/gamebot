try {
    global['authChk'] = authChk
    global['set_login_token_inMem'] = set_login_token

} catch (e) {
}

function set_login_token(obj) {
    log_fun_enter(arguments)

    global['agtid'] = obj.agtid
    global['agentid'] = obj.agtid

    global['desCode'] = obj.descode
    global['md5Code'] = obj.md5key

    try {
        window['agentid'] = obj.agtid
    } catch (e) {
    }

}


try {
    require("./libBiz/oplog.js")
} catch (e) {
}
try {
    require("./libx/autoload.js")
} catch (e) {
}
try {
    require("./oplog.js")
} catch (e) {
}
try {
    require("./libx/file.js")
} catch (e) {
}
try {
    require("../libx/file.js")
} catch (e) {
}


try {
    console.log(__dirname)    //C:\modyfing\jbbot\zmng\
    console.log(__filename)   //  C:\modyfing\jbbot\zmng\user.htm

    global['refresh_login_token'] = refresh_login_token
} catch (e) {
}




function getLoginToken() {


    if ( isWinformEnv())
         {
       // process.env.USERPROFILE +
        let f = "__USERPROFILE__/lgky.json"
        let cmd = "readFileSyncx " + encodeURIComponent(f);
        let txt = window.external.callFun(cmd)
//alert(txt)
         try{
             let obj = JSON.parse(txt)
             return obj;
         }catch (e) {
            let eobj={"cmd":cmd,"txt":txt,"e":e}
             alert(JSON.stringify(eobj))
         }


    }else
    {
       // require("./libx/file.js")
        let f = process.env.USERPROFILE + "/lgky.json"
        let txt =  readFileSyncx(f)

        let obj = JSON.parse(txt)
        return obj;
    }



}

function refresh_login_token() {

    //
    if (funtion_exist("log_fun_enter"))
        log_fun_enter(arguments)
    else {
        //win env
        //   let callOBj={"fun":"log_fun_enter","args":arguments}
     let   callOBj = "log_fun_enter " + Array.prototype.slice.apply(arguments).join(" ");
        window.external.callFun(callOBj)
    }

    let obj = getLoginToken();
    if (!obj) {
        console.log("not login")
        return;
    }

    console.log("[8authChk ]agentid:" + obj.agentid)
    if (obj.agtid) {
        set_login_token(obj)
    }
    // },100)


}

global['isLoginCore'] = isLoginCore

function isLoginCore() {
    log_fun_enter(arguments)
    let f = process.env.USERPROFILE + "/lgky.json"
    console.log(" lgky file=>" + f)
    let obj = readFileAsJson((f))

    console.log("[8authChk ]agentid:" + obj.agentid)
    if (obj.agtid) {

        return true
    } else {
        return false;
    }
}


function isLogin() {
    log_fun_enter(arguments)

    let obj =getLoginToken()

    console.log("[8authChk ]agentid:" + obj.agentid)
    if (obj.agtid) {
        set_login_token(obj)
        return true
    } else {
        return false;
    }
}


function readFileAsJson(f) {
    let $s = readFileSyncx(f);
    console.log((" readFileAsJson txt:" + $s))
    return json_decode($s);
}


// require("../libx/autoload.js")
// authChk();

function process_env_USERPROFILE() {

}

function authChk() {
    log_fun_enter(arguments)


    let obj =  getLoginToken()

    console.log(obj)
    console.log("[8authChk ]agentid:" + obj.agentid)


    if (isLogin()) {
        set_login_token(obj)
    } else
        throw "not_loginex@没有agtid,需要登录"
    // if(!agentid)


    console.log("[authChk ]agentid:" + obj.agentid)
}

global['authChkCore'] = authChkCore

function authChkCore() {
    log_fun_enter(arguments)


    let obj =getLoginToken()

    console.log(obj)
    console.log("[8authChk ]agentid:" + obj.agentid)


    if (isLoginCore()) {

    } else
        throw "not_loginex@没有agtid,需要登录"
    // if(!agentid)


    console.log("[authChk ]agentid:" + obj.agentid)
}

function catchHdl(e, extype, catchFun) {

    if (typeof e === 'string') {
        if (e.startsWith(extype)) {
            catchFun();

        } else {
            throw e;
        }

    } else
        throw e;

}

function user_ini_ui() {


    log_fun_enter(arguments)

    refresh_login_token()
    try {
        authChk()
        console.log("[user_ini_ui] logined..")
        $("#unameLab").text(agentid);//show lab
        $("form").hide();
        $("#loginFm").hide();

        $("#logined").show();

    } catch (e) {


        catchHdl(e, "not_loginex", function () {
            console.log(e.split("@")[1])
            //  console.log(e)
            console.log("[ ] not login  ")
            $("form").show();
            $("#logined").hide();

        })

        //  console.log(e)
        //  console.log("[user_ini_ui] not login  ")


    }
}


function showExitArea() {

}

function showLoginArea() {

}

function user_ini_uiV2() {
    if (isLogin())
        showExitArea();
    else
        showLoginArea();

}


try {
    require("./libx/file.js")
} catch (e) {

}

try {
    require("../libx/file.js")
} catch (e) {

}


function set_login_tokenV2(a) {

}

function saveLoginFlag(a) {
    window['agentid'] = a.agtid
    set_login_tokenV2(a)
}

function loginLocal() {
    // a = {};
    //
    // a.agtid = $("#uid").val();
    // a.descode = $("#password").val();
    // a.md5key = $("#md5key").val();
    //  require("./libx/file.js")

    if (!$("#uid").val().trim()) {
        alert("代理id,秘钥不能为空");
        return;
    }

    let arr = $("#uid").val().trim().split(",")

    localStorage.setItem("loginkey", $("#uid").val());

    global['agentid'] = arr[0]
    global['desCode'] = arr[1]
    global['md5Code'] = arr[2]

    localStorage.setItem("agentid", arr[0]);
    localStorage.setItem("desCode", arr[1]);
    localStorage.setItem("md5Code", arr[2]);

    let a = {};

    a.agtid = arr[0];

    a.descode = arr[1];
    a.md5key = arr[2]
    a.lgky = $("#uid").val()
    saveLoginFlag(a)
    writeFileSyncx(process.env.USERPROFILE + "/lgky.json", json_encode(a));


    console.log("lgky arr:" + arr)

    // Cookies.set('loginkey', a.agtid.trim(), {expires: 7})
    //
    // let loginkey = Cookies.get('loginkey');
    // console.log("lgky:" + loginkey)
    // let arr2 = loginkey.trim().split(",")

    $("#unameLab").text(a.agtid)

    //console.log(json_encode(a))
    // writeFileSyncx(__dirname + "/cfg.json", json_encode(a));
    //alert("ok")

    $("form").hide();
    $("#logined").show();


}


function exit() {
    $("form").show();
    $("#logined").hide();
    global['agentid'] = null
    global['desCode'] = null
    global['md5Code'] = null

    localStorage.removeItem("agentid");

    let a = {};

    a.agtid = null

    a.descode = null;
    a.md5key = null
    a.lgky = null
    writeFileSyncx(process.env.USERPROFILE + "/lgky.json", json_encode(a));
    console.log(agentid)
}

try {
    //global['reg'] = loginLocal
    global['loginLocal'] = loginLocal
    global['exit'] = exit
    global['isLogin'] = isLogin
    global['readFileAsJson'] = readFileAsJson
    global['user_ini_ui'] = user_ini_ui
} catch (e) {

}

function adduserFm() {

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);


    log_info("");
    log_info("");
    log_info("");
    log_info("*********=>" + funname + arg)


    timestamp = time();


    let uname = $("#uname").val();
    if (uname == "") {
        $("#loaddiv").hide();
        alert("用户名不能为空")

        return
    }

    $("#loaddiv").show()
    let nickname = $("#nknm").val();
    // _paraValue = sprintf("account=%s", $("#uname").val());
    _paraValue = "account=%s&nickname=%s&headindex=0&linecode=10001_1&lastloginip=255.224.22.12&gamebackurl=www.test.com&logintype=1&gameid=0";
    _paraValue = sprintf(_paraValue, uname, nickname);


    echo("_paraValue==>" + _paraValue)
    let url = buildUrlNget(_paraValue, timestamp, apitype_regLogin);
    console.log(url)

    var rcd = {"op": "添加用户", "uname": uname, "类型": "添加用户", "time": curDateTime()}

    oplog_add(rcd)
    jqGet(url, function (data) {
        console.log("[" + funname + "] rzt=>" + data)
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


    }, jqFailFun)
}
