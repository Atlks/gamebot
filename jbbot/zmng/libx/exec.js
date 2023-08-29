
libdir=__dirname+'/../libx/'
// C:\modyfing\jbbot\zmng/../lib/
console.log(libdir)

const fs = require('fs');

console.log("exist dir:=>"+fs.existsSync(libdir))

if (!fs.existsSync(libdir)) {
    console.log(libdir +" not exist")
    libdir=__dirname+'/libx/'
}

var {
    isset,call_user_func,
    echo,
    substr,
    console_log,
    sprintf,
    startwith,
    str_replace,
    strtolower,
    strlen,
    strpos,
    trim,
    sprintf, time
} = require(libdir+'php.js');
const {http_get} = require(libdir+'http.js');
const {aes_encrypt, aes_decrypt, aes_mode_ECB, aes_mode_CBC} = require(libdir+'aes.js');

const {urlencode, md5} = require(libdir+'enc.js');
const {reg,login} = require('../libBiz/api.js');
global["reg"]=reg;
global["login"]=login;


// uname = "uname1"
// nickname = uname + "nknm";
// pwd = "";
//reg(uname, pwd, nickname);


async function main()
{
    const args = process.argv.slice(2)
    echo("**********cmd==>"+args)
    $rz=await call_user_func(args[0],process.argv.slice(3))
    echo ($rz);
}

  main();

// reg u2 pwd u2nknm