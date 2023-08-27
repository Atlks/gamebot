// const fs = require('fs');

import fs from 'fs';
//const {exec, execSync} = require('child_process');

// read contents of the file
var data = fs.readFileSync('betFmtChk.txt', 'UTF-8');

// split the contents by new line
var lines = data.split(/\r\n/);


// const request = require('request');
// const util = require('util');
//
// const getPromise = util.promisify(request.get);


//const fetch = require('node-fetch');

import fetch from "node-fetch"; //es6 mode

import pkg from '../lib/http.js';

const {http_get239} = pkg;


//var rzt=await http_get239("http://localhost/test/betFmtChkWeb.php");

// print all lineshttp://localhost/test/betFmtChkWeb.php


for (const line of lines) {

//lines.forEach((line) => {

    console.log("9999999999999999999999999999999999999");
    console.log(line);
    var arr = line.split(",");
    var betnum = arr[0];
    if (betnum == "end")
        break;


    // cmd = "php   C:\\modyfing\\jbbot\\test/betFmtChk.php " + encodeURIComponent(betnum) + " " ;
    // console.log(cmd)
    // rzt=execSync(cmd).toString();

    var url = "http://localhost/test/betFmtChkWeb.php?bet=" + encodeURIComponent(betnum);
    console.log(url);

    // let result =  getPromise(url );  //await
    // // 可以加入 try catch 捕获异常  也可以加 .catch()
    // console.log("result" , result);


    //  res = await fetch(url);
    //  rzt = await res.text();

    var res = await fetch(url);

    const headerDate = res.headers && res.headers.get('date') ? res.headers.get('date') : 'no response date';
    console.log('___Status Code:', res.status);
    console.log('___+Date in Response header:', headerDate);

    var rzt = await res.text();

    console.log(rzt)
    // if(rzt!="true")
    //     throw "err pandwe";


}

console.log(111)
//return;
