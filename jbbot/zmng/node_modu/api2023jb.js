function getLibdir() {
    // _file=>C:\modyfing\jbbot\zmng\shangxiafen.htm
    // if embed in htm...filename just htm path
 //   console.log("_file=>"+__filename)  //if in html file ,...just for html file path
 //   console.log("__dirname=>"+__dirname)

    //   console.log(__dirname)
 let   libdir = __dirname + '/../libx/'
// C:\modyfing\jbbot\zmng/../lib/
  //  console.log(libdir)

    const fs = require('fs');

  //  console.log("exist dir:=>" + fs.existsSync(libdir))

    if (!fs.existsSync(libdir)) {
     //   console.log(libdir + " not exist")
        libdir = __dirname + '/libx/'
    }
   // console.log("libdir=>"+libdir)
    return libdir;
}

let libdir = getLibdir();

var {
    isset,call_user_func,
    echo,
    substr,
    console_log,
    sprintf,
    startwith,
    str_replace,
    strtolower,
    strlen,
    strpos,
    trim,
    sprintf, time
} = require(libdir+'php.js');
const {http_get} = require(libdir+'http.js');
const {aes_encrypt, aes_decrypt, aes_mode_ECB, aes_mode_CBC} = require(libdir+'aes.js');

const {urlencode, md5} = require(libdir+'enc.js');



const {resolve} = require('path');
global['resolve']=resolve;
// 如果使用 ES6 模块语法
// import { resolve } from 'path';

const absolutePath = resolve('file.js');
console.log("absolutePath=>"+absolutePath)

try{
    require("file")   // html dir
}catch (e){
    console.log(e)
}


try{
    require("/file.js")
}catch (e){}

try{
    require("enc")   // html dir
}catch (e){
    console.log(e)
}



try{
    t836=readFileSyncx("cfg.js");
}catch (e){}
try{
    t836=readFileSyncx("./cfg.js");
}catch (e){}

try{
    t836=readFileSyncx(__dirname+"/../cfg.js");
}catch (e){
    console.log(e)
}




console.log("cfgtxt=>"+t836)
jsobObj=json_decode(t836);

//商户唯一编码
agentid = 111356
agentid=jsobObj.agtid;
//参数加密编码
descode = "26916DD661300B25"
desCode = descode
//请求校验加密编码
md5code = "1BC0036763DE22EC"
md5Code = md5code
//xx=aes_mode_ECB;
apitype_regLogin = 0;  //注册/登录接口
apitype_kexiafen = 1;//	查询玩家可下分接口
apitype_shangfen = 2;// 2	玩家上分
apitype_xiafen = 3;//3	玩家下分
apitype_orderQryShagnxiafen = 4;//// 4	玩家上下分订单查询    by uname,orderid
apitype_playerStat = 5;//玩家状态查询

apitype_gameOrder = 6;// 玩家总分查询
apitype_PlayerScore = 7;// 玩家总分查询
global['apitype_PlayerScore']=apitype_PlayerScore;
console.log(":90L")

apitype_agtBal =9 ;//玩家状态查询
apitype_PlayerScoreOrderQry =41 ; //玩家上下分订单查询（集合）
apitype_kick =8 ; //玩家上下分订单查询（集合）
// apitype=
//

// 2	玩家上分   ok
// 3	玩家下分   ok
// 4	玩家上下分订单查询   by uname ,order id only single order
// 5	玩家状态查询   ok


// 7	玩家总分查询  玩家信息查询  ok
// 1	查询玩家可下分接口   ok
// 9	代理余额查询    ok


// 11	比赛注单拉取
// 41	玩家上下分订单查询（集合）   ok  local db qry
// 6	游戏注单拉取
// 8	踢玩家下线    ok
//require("../lowdbx/lowdbX.js")
require("fp_ati1990")
const _ = require("lodash");

global["player_kick"]=player_kick;
async function player_kick(uname) {
    timestamp = time();
    await import("../lowdbx/lowdbX.js")
    //  _paraValue = "account=%s";
    //  orderid = sprintf("%s%s%s", agentid, timestamp, uname)
    _paraValue = sprintf("account=%s", uname);
    echo("_paraValue==>"+_paraValue)

    let url = buildUrlNget(_paraValue, timestamp, apitype_kexiafen);



    let file = __dirname + "/../db/opLogColl.json";
    var rcd = {"op": "踢玩家下线", "uname": uname,  "类型": "踢玩家下线", "time": curDateTime()}
      pdo_insert(rcd, file);

    return (await http_get(url));

}



global["oplog_qry"]=oplog_qry;

async function oplog_qry(uname) {
    await import("../lowdbx/lowdbX.js")
    let dbfile = __dirname + "/../db/opLogColl.json";

    console.log("dbfile=>" + dbfile)
//  pdo_exec_insert()


    let _ = require('lodash');
    rzt = pdo_query({}, dbfile);


    rzt= _.orderBy(rzt, ['time' ], [ 'desc']);
    rzt=rzt.slice(0,300)
    return  json_encode(rzt)

}


global["Score_PlayerKexiafenBal"]=Score_PlayerKexiafenBal;
async function Score_PlayerKexiafenBal(uname) {
    timestamp = time();

    //  _paraValue = "account=%s";
    //  orderid = sprintf("%s%s%s", agentid, timestamp, uname)
    _paraValue = sprintf("account=%s", uname);
    echo("_paraValue==>"+_paraValue)

    let url = buildUrlNget(_paraValue, timestamp, apitype_kexiafen);
    return (await http_get(url));

}

global["PlayerScoreQry"]=PlayerScoreQry;
async function PlayerScoreQry(uname) {
    timestamp = time();

  //  _paraValue = "account=%s";
  //  orderid = sprintf("%s%s%s", agentid, timestamp, uname)
    _paraValue = sprintf("account=%s", uname);
    echo("_paraValue==>"+_paraValue)

    let url = buildUrlNget(_paraValue, timestamp, apitype_PlayerScore);
    return (await http_get(url));

}
global["score_orderQryShagnxiafen"]=score_orderQryShagnxiafen;
  async function score_orderQryShagnxiafen(uname) {

      await import("../lowdbx/lowdbX.js")
      let dbfile = __dirname + "/../db/scoreLogColl.json";

       console.log("dbfile=>"+dbfile)
      //  pdo_exec_insert()


     let _= require('lodash') ;
      rzt =pdo_query({'uname': uname},dbfile);
    //  _.sortBy()

   //   let _ = require('lodash');


      rzt= _.orderBy(rzt, ['time' ], [ 'desc']);
      rzt=rzt.slice(0,300)



      console.log(rzt)
      return  json_encode(rzt);

  }


async function score_orderQryShagnxiafenByUnameOrderid(uname,orderid) {
    timestamp = time();

    _paraValue = "account=%s&orderid=%s";
  //  orderid = sprintf("%s%s%s", agentid, timestamp, uname)
    _paraValue = sprintf(_paraValue, uname, orderid);
    echo("_paraValue==>"+_paraValue)

    let url = buildUrlNget(_paraValue, timestamp, apitype_orderQryShagnxiafen);
    return (await http_get(url));

}
//global["orderQryShagnxiafen"]=orderQryShagnxiafen;

// global["PlayerScoreOrderQry"]=PlayerScoreOrderQry;
// async function PlayerScoreOrderQry() {
//     timestamp = time();
//     _paraValue = "account=%s&score=%s&orderid=%s";
//     orderid = sprintf("%s%s%s", agentid, timestamp, uname)
//     _paraValue = sprintf(_paraValue, uname, score, orderid);
//
//     let url = buildUrlNget(_paraValue, timestamp, apitype_PlayerScoreOrderQry);
//     return (await http_get(url));
//
// }
async function gameOrder() {
    timestamp = time();
    _paraValue = "account=%s&score=%s&orderid=%s";
    orderid = sprintf("%s%s%s", agentid, timestamp, uname)
    _paraValue = sprintf(_paraValue, uname, score, orderid);

    let url = buildUrlNget(_paraValue, timestamp, apitype_gameOrder);
    return (await http_get(url));

}

global["agtBal"]=agtBal;
async function agtBal() {
    timestamp = time();
    // _paraValue = "account=%s&score=%s&orderid=%s";
    // orderid = sprintf("%s%s%s", agentid, timestamp, uname)
    // _paraValue = sprintf(_paraValue, uname, score, orderid);
    _paraValue=""
    let url = buildUrlNget(_paraValue, timestamp, apitype_agtBal);
    return (await http_get(url));

}
module.exports = {reg,login}
global["playerStat"]=playerStat;
async function playerStat(uname) {
    timestamp = time();
    _paraValue = sprintf("account=%s", uname);
    //  orderid = sprintf("%s%s%s", agentid, timestamp, uname)
    //   _paraValue = sprintf(_paraValue, uname, score, orderid);

    let url = buildUrlNget(_paraValue, timestamp,apitype_playerStat);
    return (await http_get(url));

}

global["login"]=login;
async function login(uname, pwd) {
    timestamp = time();
    _paraValue = "account=%s&score=%s&orderid=%s";
    orderid = sprintf("%s%s%s", agentid, timestamp, uname)
    _paraValue = sprintf(_paraValue, uname, score, orderid);

    let url = buildUrlNget(_paraValue, timestamp);
    return (await http_get(url));

}
async function reg(uname, pwd, nickname) {

    $url_tpmplt = "https://ng.mqbsx.com/GameHandle?agentid=%s&timestamp=%s&type=%s&paraValue=%s&key=%s";


    timestamp = time();

    _paraValue = "account=%s&nickname=%s&headindex=0&linecode=10001_1&lastloginip=255.224.22.12&gamebackurl=www.test.com&logintype=1&gameid=0";
    _paraValue = sprintf(_paraValue, uname, nickname);
    paraValue = aes_encrypt(aes_mode_ECB(), _paraValue, desCode);
    md5key = md5(sprintf("%s%s%s", agentid, timestamp, md5Code));


    $url = sprintf($url_tpmplt, agentid, timestamp, apitype_regLogin, urlencode(paraValue), md5key);


    return (await http_get($url));


}
global["reg"]=reg;
//global["shangfen"]=shangfen;
//global["xiafen"]=xiafen;
global["Score_xiafen"]=Score_xiafen;
async function Score_xiafen(uname, score) {




    timestamp = time();
    _paraValue = "account=%s&score=%s&orderid=%s";
    orderid=sprintf("%s%s%s",agentid,timestamp,uname)
    _paraValue = sprintf(_paraValue, uname, score,orderid);

    let url =   buildUrlNget(_paraValue,timestamp,apitype_xiafen);
    rzt=await http_get( url);



    rztobj=JSON.parse(rzt);
    if(rztobj.data.code==0) {

        await import("../lowdbx/lowdbX.js")

        var rcd = {"uname": uname, "score": score, "类型": "下分", "time": curDateTime()}
        let dbfile = __dirname + "/../db/scoreLogColl.json";
        await pdo_exec_insert(rcd, dbfile);


        let file = __dirname + "/../db/opLogColl.json";
        var rcd = {"op": "下分操作", "uname": uname, "score": score, "类型": "下分", "time": curDateTime()}
        await pdo_exec_insert(rcd, file);
    }

    return  (rzt);

}
global["ScoreTopup_shangfen"]=ScoreTopup_shangfen;
//reg("u1","","u1nicknm")
// shangfen("u1",100)
async function ScoreTopup_shangfen(uname, score) {


   require("fp_ati1990")

    timestamp = time();
    _paraValue = "account=%s&score=%s&orderid=%s";
    orderid=sprintf("%s%s%s",agentid,timestamp,uname)
    _paraValue = sprintf(_paraValue, uname, score,orderid);

    let url =   buildUrlNget(_paraValue,timestamp,apitype_shangfen);
    let rzt = await http_get(url);

    rztobj=JSON.parse(rzt);
    if(rztobj.data.code==0)
    {
        await import("../lowdbx/lowdbX.js")

        var rcd={"uname":uname,"score":score,"类型":"上分","time":curDateTime()}
        let dbfile = __dirname+"/../db/scoreLogColl.json";
         await pdo_exec_insert( rcd,dbfile);


        let file = __dirname+"/../db/opLogColl.json";
        var rcd={"op":"上分操作","uname":uname,"score":score,"类型":"上分","time":curDateTime()}
        await pdo_exec_insert( rcd,file);


    }

    // else
    //     alert(rzt)


    return  rzt;





}


  function buildUrlNget(_paraValue,timestamp,apitype_shangfen) {
    paraValue = aes_encrypt(aes_mode_ECB(), _paraValue, desCode);
    md5key = md5(sprintf("%s%s%s", agentid, timestamp, md5Code));


    $url_tpmplt = "https://ng.mqbsx.com/GameHandle?agentid=%s&timestamp=%s&type=%s&paraValue=%s&key=%s";
    $url = sprintf($url_tpmplt, agentid, timestamp, apitype_shangfen, urlencode(paraValue), md5key);


    return $url;
}





