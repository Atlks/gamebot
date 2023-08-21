


//const fetch = require('node-fetch');
//  import { fetch } from 'node-fetch';
import  pkg   from 'node-fetch';
const { fetch } = pkg;


var betnum="a1.100";

var url="http://localhost/test/betFmtChkWeb.php?bet="+encodeURIComponent(betnum);
console.log(url);

// let result =  getPromise(url );  //await
// // 可以加入 try catch 捕获异常  也可以加 .catch()
// console.log("result" , result);


var res = await fetch(url);
var rzt = await res.text();

console.log(rzt)