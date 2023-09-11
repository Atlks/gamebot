//import {resolve} from "path";

global["file_exists"]=file_exists;

var  {join, dirname} = require('path')
var  {dirname} = require("path");


global["dirname"] = dirname;
global['readFileAsJson'] = readFileAsJson

function readFileAsJson(f) {
    return json_decode(readFileSyncx(f));
}
global['file_exists'] = file_exists
function file_exists(fil) {


    const fs = require('fs');

    const filePath = '/path/to/file';

    return (fs.existsSync(fil))


}
global["writeFileSyncx"]=writeFileSyncx;


global["parse_ini_file"]=parse_ini_file;
function  parse_ini_file(f)
{
    var ini= require("ini")
    var path=require("path")
    var fs=require("fs")
    const iopath = f; // 引用Pos.ini的相对地址
    const Info = ini.parse(fs.readFileSync(iopath, 'utf-8'));
    return Info;

}

function writeFileSyncx(fil, str) {
    var fs = require("fs");
    var path = require("path");
    fs.mkdirSync(path.dirname(fil), { recursive: true });
    //   fs.mkdirSync(appRoot + '/css

    fs.writeFileSync(fil, str);
}
const { resolve } =require("path")
global["resolve"]=resolve;
global["readFileSyncx"]=readFileSyncx;
global["file_get_contents"]=readFileSyncx;
global["file_get_contentsx"]=readFileSyncx;
function readFileSyncx(fil) {



    // process.env.USERPROFILE +
  //  let f = "@USERPROFILE@/lgky.json"
    fil=fil.replace("__USERPROFILE__",process.env.USERPROFILE);
    fil=fil.replace("__rootdir__",__dirname+"/../");



    //  filepath=>C:\modyfing\jbbot\zmng\cfg.js
     console.log("filepath=>"+resolve(fil))

    if(!file_exists(fil))
        return "";

    var fs = require("fs");
    var path = require("path");
  //  fs.mkdirSync(path.dirname(fil), { recursive: true });
    //   fs.mkdirSync(appRoot + '/css

    return fs.readFileSync(fil).toString();
}
global["file"]=file;
global["file_readLines"]=file;
function  file(f)
{
    t=readFileSyncx(f)
    return t.split("\r\n")
}
var {readFileSync,writeFileSync,appendFileSync} = require("fs");
const path = require("path");
const ini = require("ini");
const fs = require("fs");
global["readFileSync"]=readFileSync;
global["writeFileSync"]=writeFileSync;
global["appendFileSync"]=appendFileSync;