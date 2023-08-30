const fs = require('fs');
//https://github.com/bitinn/node-fetch
//const fetch = require('node-fetch');
require("esm-hook");

//   require("esm-hook");  // <--- add this to the top of your file.
//
  const fetch = require('node-fetch').default
// mod.cjs
//const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
//https://github.com/form-data/form-data
const FormData = require('form-data');


$fname="jbbot829.zip";
$f=__dirname+"/../../"+$fname;

console.log($f)
let fileStream = fs.readFileSync($f );//读取文件
let formdata = new FormData();
formdata.append("file", fileStream, {
    filename: $fname,//上传的文件名
    // filepath: 'test.jpg',
    contentType: 'application/octet-stream',//文件类型标识
    //knownLength: fileStream.length
});
fetch("http://127.0.0.1:80/web/upload.php", {
    body: formdata,
    method: "POST",//请求方式
    headers: formdata.getHeaders()
}).then((res) => {
    return res.text();
}).then(console.log);
