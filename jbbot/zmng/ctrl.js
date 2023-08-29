

function clk() {
    document.getElementById("fname").value = 111;
    console.log(1111111111111111)


    uname = "uname1";  pwd = "";
    nickname = uname + "nknm";

   // reg(uname, pwd, nickname);

    const {exec, execSync} = require('child_process');
    cmd = "node    "+__dirname+"/libBiz/api.js reg "+uname +" pwd "+ nickname ;
    console.log(cmd)
    rzt=execSync(cmd).toString();
    rzt=rzt.split("\r\n").pop();
    console.log("rzt=>"+rzt)


    //获取相对于浏览器视口的坐标
    console.log ('x:' + event.clientX + "  y:" +  event.clientY);
    img=$("<img src='coin.png'  width='50' height='50' style='position: absolute;top:0' >");
    img.css("left", event.clientX).css("top", event.clientY);
    $(img).animate({ top:555},{ duration: 5000, queue: false });

    $("body").append(img);


    writeFileSyncx("43200x.txt", "999");
  //  mainPrcsFun1();
}


function writeFileSyncx(fil, str) {
    var fs = require("fs");
    var path = require("path");
    fs.mkdirSync(path.dirname(fil), { recursive: true });
    //   fs.mkdirSync(appRoot + '/css

    fs.writeFileSync(fil, str);
}