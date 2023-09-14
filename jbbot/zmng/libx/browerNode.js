function isset(varname) {
    try {
        varname = trim(varname);
        rzt = typeof (eval(varname));
        return typeof (varname) != "undefined";
    } catch (e) {
        console.log("[43isset()] " + e.message);
        //  console_log(e);
        return false;
    }

}

try{

    if( !isset("window"))
        window=[];
    if( !isset("global"))
        global=[];
}catch (e){
    console.log(e.message)
}


function isWinformEnvV2() {

   try {
        if (window.external && typeof window.external.callFun == "unknown") {


            return true;
        }
        if (window.external && typeof window.external.callFun == "undefined") {


            return false;  //electron env


        }


    } catch (e) {
        //console env just err
        return false;
    }

    return false;


}


if (isWinformEnvV2())
{

    console.log(" cur env::"+isWinformEnvV2())
    __dirname = "";
}
else
{
    console.log(" cur env::"+isWinformEnvV2())
}




apitype_regLogin = 0;  //注册/登录接口
apitype_kexiafen = 1;//	查询玩家可下分接口
apitype_shangfen = 2;// 2	玩家上分
apitype_xiafen = 3;//3	玩家下分

apitype_playerStat = 5;//玩家状态查询

apitype_gameOrder = 6;// 玩家总分查询
apitype_PlayerScore = 7;// 玩家总分查询
global['apitype_PlayerScore'] = apitype_PlayerScore;
console.log(":90L")

apitype_agtBal = 9;//代理商余额状态查询
window['apitype_agtBal']=apitype_agtBal
apitype_PlayerScoreOrderQry = 41; //玩家上下分订单查询（集合）
apitype_orderQryShagnxiafen = 4;//// 4	玩家上下分订单查询    by uname,orderid
apitype_kick = 8; // 	踢玩家下线    ok