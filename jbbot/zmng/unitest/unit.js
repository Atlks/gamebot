var {execSync} =require('child_process');



function cmdTest(callFunStr) {
 var cmdExe = "node";
 var calllibInShell = __dirname + "/../libx/callFun.js ";


 var args = calllibInShell + " " + callFunStr;

 var cmdFull = "node " + args;
//     File.AppendAllText("form2.log", "\r\n\r\n\r\n\r\n\r\n" + cmdFull);
//     Console.WriteLine(cmdFull);
// }


 console.log(cmdFull)
 var rzt = execSync(cmdFull).toString();

 console.log(rzt)
}



var callFunStr="echo 1"
cmdTest(callFunStr);
cmdTest("buildUrlNgetV2 __empty__ 1694600295000 9");
buildUrlNgetV2,account=777,1694600336000,7
ScoreTopup_shangfen,777,1
buildUrlNgetV2,account=777,1694600345000,7
Score_xiafen,777,2
player_kick,777
score_orderQryShagnxiafen,777
Score_PlayerKexiafenBal,777
readFileSyncx,__rootdir__/head.htm
readFileSyncx,__USERPROFILE__%2Flgky.json


609: 09/13/2023 17:19:29 info **********callFun.js prm==>pdo_insert,%7B%22agtid%22%3A%22111356%22%2C%22op%22%3A%22%E6%B7%BB%E5%8A%A0%E7%94%A8%E6%88%B7%22%2C%22uname%22%3A%22555%22%2C%22%E7%B1%BB%E5%9E%8B%22%3A%22%E6%B7%BB%E5%8A%A0%E7%94%A8%E6%88%B7%22%2C%22time%22%3A%222023-09-13%2017%3A19%3A28%22%7D,__rootdir__%2Fdb%2FopLogColl.json
行

oplog_qry