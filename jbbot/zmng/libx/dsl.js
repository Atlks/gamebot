
// function  pipe(v,f1,f2,f3,f4,f5,f6,f7)
// {
//
//     return f3(f2(f1(v)))
//
// }


// let toUpperAndGetThreeAndArray = compose(stringToArray, getThreeCharacters,stringToUpper)
// let result = toUpperAndGetThreeAndArray(str) // => ["J","S","P"]



// f=pip(f1,f2)
//f(v11)


const _ = require("lodash");




//flow pipe的原理是怎么实现了， 关键之处在于reduce 的运用，循环的传递每一次运算结果，来达到通过的组合效果 而flow，则是不执行reverse 即可；
function  pipe_lodashFlow(...args)
{
    const _ = require('lodash');

    const reverse = array => array.reverse();
    const first = array => array[0];
    const toUpper = str => str.toUpperCase();

  //  const d = _.flowRight(toUpper, first, reverse);
    const b = _.flow(reverse, first, toUpper);



}








const compose = (...args) => x => args.reduceRight((res, cb) => cb(res), x);

function pipe(...fns){
    return function(x){
        return fns.reduce(function(arg,fn){
            return fn(arg);
        },x)
    }
}


const pipe2 = function(){
    const args = [].slice.apply(arguments);
    return function(x) {
        return args.reduce((res, cb) => cb(res), x);
    }
}


const pipe3 = (...args) => x => args.reduce((res, cb) => cb(res), x)
global['dsl_callFunCmdMode']=dsl_callFunCmdMode
function  dsl_callFunCmdMode( )
{
    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);


    log_info(""); log_info(""); log_info("");
      log_info("*********=>" + funname + arg)

    arr=Array.from(arguments);
    cmdstr=arr.join(" ");
    console.log("cmdstr=>"+cmdstr)


    const {exec, execSync} = require('child_process');

    exe="node";
    let f = __dirname+"/../cfg.ini";
    let iniObj=parse_ini_file(f)
    exe=iniObj.cmdexe;

    let exe_fullpath = __dirname+"/../"+exe;
    if(!file_exists(exe_fullpath))
        exe_fullpath=exe
    cmd = exe_fullpath+" "+__dirname+"/../libx/callFun.js   "+cmdstr;
// cmd = "electron    "+__dirname+"/libx/callFun.js reg "+uname +" pwd "+ nickname ;


    console.log("cmd=>"+cmd)
    log_info("cmd=>"+cmd)
    rzt=execSync(cmd).toString();
     rzt=rzt.split("88888888888888888888888888").pop();
    console.log("[dsl_callFunCmdMode] rzt=>" + rzt)
    return rzt;
}
//   uname=
//   score=


// require("./autoload")
// dsl_callFunCmdMode()