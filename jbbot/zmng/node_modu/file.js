//import {resolve} from "path";

global["file_exists"]=file_exists;
function file_exists(fil) {


    const fs = require('fs');

    const filePath = '/path/to/file';

    return (fs.existsSync(fil))


}
global["writeFileSyncx"]=writeFileSyncx;

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
    //  filepath=>C:\modyfing\jbbot\zmng\cfg.js
     console.log("filepath=>"+resolve(fil))
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
var {readFileSync,writeFileSync} = require("fs");
global["readFileSync"]=readFileSync;global["writeFileSync"]=writeFileSync;