

module.exports = {urlencode,md5}

function  urlencode($prm)
{
    return  encodeURIComponent($prm)
}

var CryptoJS = require("crypto-js");

// 辅助函数
function md5(data) {
    return CryptoJS.MD5(data).toString();
}

