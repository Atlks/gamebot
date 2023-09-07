var ini= require("ini")
var path=require("path")
var fs=require("fs")
const iopath = path.join(__dirname, './cfg.ini'); // 引用Pos.ini的相对地址
const Info = ini.parse(fs.readFileSync(iopath, 'utf-8'));

require("./libx/logger")
log_info("Info.debug "+ Info.debug)
console.log("Info.debug "+ Info.debug)

if(Info.debug==1)
{
    win.openDevTools(); win.openDevTools();
}