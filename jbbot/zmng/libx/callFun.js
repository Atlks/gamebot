libdir = getLibdir()
require("./sys.js")
require("./enc.js")
require("../libBiz/bizErr.js")
require("../libx/aes.js")
require("../libBiz/bizHttp.js")
require("../libBiz/shangfen.js");
require("../libBiz/shangfenNode.js")
  require(libdir + 'enc.js');
console.log(urlencode(111))
function getLibdir() {
  //  console.log("_file=>" + __filename)  //if in html file ,...just for html file path
    //   console.log(__dirname)
    libdir = __dirname + '/../libx/'
// C:\modyfing\jbbot\zmng/../lib/
 //   console.log(libdir)

    const fs = require('fs');

 //   console.log("exist dir:=>" + fs.existsSync(libdir))

    if (!fs.existsSync(libdir)) {
      //  console.log(libdir + " not exist")
        libdir = __dirname + '/libx/'
    }
 //  console.log("libdir=>" + libdir)
    return libdir;
}


//require("fp_ati1990");require("http")

const {aes_encrypt, aes_decrypt, aes_mode_ECB, aes_mode_CBC} = require(libdir + 'aes.js');


require("./api2023jb.js")
const fs = require("fs");
require("./fp_ati1990");
require("./errHdlr");require("./logger")
global["reg"] = reg;
global["login"] = login;
require("./php.js")
require("../libBiz/acc.js")
require("./ref.js")
//echo(11)

try {
    require("./php.js")   // html dir
} catch (e) {
    // console.log(e)
}

var {readFileSync,writeFileSync,appendFileSync} = require("fs");

// uname = "uname1"
// nickname = uname + "nknm";
// pwd = "";
//reg(uname, pwd, nickname);

function urldecode(params) {

    let arr_r=[];
    for(var i=0;i<params.length;i++)
    {
        let v=params[i];
        v=decodeURIComponent(v);
        arr_r.push(v)
    }
    return arr_r;
}
require("../libBiz/bizHttp.js")
require("../libBiz/oplog.js")
require("./err.js")
require("./crpto.js")
//  node C:\modyfing\apiprj\jbbot\zmng\libx\callFun.js echo 123
async function main() {

    //node  xxx.js  p abc
    var winlogger = require("./logger");
    const args = process.argv.slice(2)
    console.log  ("**********callFun.js prm==>" + args)
    log_info("**********callFun.js prm==>" + args)
    echo("\r\n")

    try {
        let params = process.argv.slice(3);
        params=urldecode(params);
        console.log("prm=>"+json_encode(params))

        $rz = await call_func(args[0], params)
    } catch (e) {
        echo(e)
        $e2 = errorCast(e);
        let eobj={"type":"ex","msg_to_ui":JSON.stringify($e2) ,"e":$e2};
        $rz=JSON.stringify(eobj);
    }

    // $rz = "99999"
    console.log("88888888888888888888888888")
    console.log($rz);
    //  app.quit(); app.quit();
    // console.log(777);

    process.exit()
}
console.log  (":66L")
main();

// function createWindow() {
//     // 创建浏览器窗口
//     const win = new BrowserWindow({
//         // icon:"res/icon.jpg",
//         width: 800,
//         height: 600,
//         webPreferences: {
//             nodeIntegration: true,
//             contextIsolation: false,
//             enableRemoteModule: true
//         }
//     })
//
//     // 并且为你的应用加载index.html
//     // win.loadFile('index.html')
//     // win.openDevTools();
//
//
//     setTimeout(function () {
//
//
//         app.quit();
//         app.quit();
//         app.exit()
//     }, 5000)
//
// }


// Electron会在初始化完成并且准备好创建浏览器窗口时调用这个方法
// 部分 API 在 ready 事件触发后才能使用。
//app.whenReady().then(createWindow)
// setTimeout(function (){
//
//
//     app.quit();
//     app.quit();
//     app.exit()
// },5000)

// reg u2 pwd u2nknm


//  process.kill(process.pid, 'SIGTERM')
//  console.log(888);
//  app.exit()

//must use timer to close ,maybe in async thread..

// setTimeout(function (){
//
//
//     app.quit();
//     app.quit();
//     app.exit()
// },100)

//close21();

//app.exit();
// app.quit();//因为程序设定关闭为最小化，所以调用两次关闭，防止最大化时一次不能关闭的情况


// electron  --unhandled-rejections=strict  C:\modyfing\jbbot\zmng/libx/callFun.js reg uname1 pwd uname1nknm

// function close21() {
//     app.exit();
// }
//
// const {
//     app, BrowserWindow,
//     Menu,
//     Tray
// } = require('electron')
//

// app.on('window-all-closed', () => {
//
//
//     app.quit();
//     app.quit();
//
// })
