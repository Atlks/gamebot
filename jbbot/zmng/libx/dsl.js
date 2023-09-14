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


try {
    const _ = require("lodash");


    global['pipe_lodashFlow'] = pipe_lodashFlow
} catch (e) {
}


//flow pipe的原理是怎么实现了， 关键之处在于reduce 的运用，循环的传递每一次运算结果，来达到通过的组合效果 而flow，则是不执行reverse 即可；
function pipe_lodashFlow(args) {
    // const _ = require('lodash');
    //
    // const reverse = array => array.reverse();
    // const first = array => array[0];
    // const toUpper = str => str.toUpperCase();
    //
    // //  const d = _.flowRight(toUpper, first, reverse);
    // const b = _.flow(reverse, first, toUpper);
    //
    // return b;

}


function f1() {
    console.log(11)
}

function f2() {
    console.log(22)
}

function f3() {
    console.log(33)
}


//pipe(f1,f2,f3)


function pipe() {
    let fns = arguments;
    let rzt;

    for (var i = 0; i < fns.length; i++) {
        let f = fns[i];
        rzt = f(rzt);

    }
    // for (f of fns) {
    //
    // }
    return rzt;
}

// const compose = (...args) => x => args.reduceRight((res, cb) => cb(res), x);
//
// function pipe_dep(...fns) {
//     return function (x) {
//         return fns.reduce(function (arg, fn) {
//             return fn(arg);
//         }, x)
//     }
// }


const pipe2 = function () {
    const args = [].slice.apply(arguments);
    return function (x) {
        return args.reduce(function (res, cb) {
            return cb(res)

        }, x);
    }
}


//const pipe3 = (...args) => x => args.reduce((res, cb) => cb(res), x)

try {
    global['dsl_callFunCmdMode'] = dsl_callFunCmdMode


} catch (e) {
}

function getRootDir(basename) {

   // alert("__dirname=>"+__dirname)

    let f = __dirname + "/"+basename;


    if(!file_exists(f))
        f = __dirname + "/../"+basename;

    // if (libdir)
    //     f = libdir + "/../cfg.ini";
   // alert("[getRootDir]f=>"+f)
    return f;
}


function getlib(basename) {

    let f = __dirname + "/"+basename;
    if(!file_exists(f))
        f = __dirname + "/../libx/"+basename;
    if(!file_exists(f))
        f = __dirname + "/../libxBiz/"+basename;



    if(!file_exists(f))
        f = __dirname + "/libx/"+basename;

    if(!file_exists(f))
        f = __dirname + "/libx/"+basename;



    if(!file_exists(f))
        f = __dirname + "/../"+basename;

    // if (libdir)
    //     f = libdir + "/../cfg.ini";
  //  alert(f)
    return f;
}

function execCmd(cmdstr) {
    exe = "node";
    let f = getRootDir("cfg.ini");
    let iniObj = parse_ini_file(f)
    exe = iniObj.cmdexe;

    let exe_fullpath = __dirname + "/../" + exe;
    if (!file_exists(exe_fullpath))
        if (libdir)
            exe_fullpath = libdir + "/../" + exe;

    if (!file_exists(exe_fullpath))
        exe_fullpath = exe


    if (libdir)
        libdir2 = libdir
    else
        libdir2 = __dirname
    cmd = exe_fullpath + " " + libdir2 + "/../libx/callFun.js   " + cmdstr;
// cmd = "electron    "+__dirname+"/libx/callFun.js reg "+uname +" pwd "+ nickname ;


    console.log("cmd=>" + cmd)
    log_info("cmd=>" + cmd)

    var prcsmd = require('child_process');
   let rzt = prcsmd.execSync(cmd).toString();
    rzt = rzt.split("88888888888888888888888888").pop();
    return   rzt ;
}

function dsl_callFunCmdMode() {
    var funname = arguments.callee.name;
    // arguments.callee.name
  let   arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);


    log_info("");
    log_info("");
    log_info("");
    log_info("*********=>" + funname + arg)

    let arr = Array.prototype.slice.apply(arguments) ;
   let  cmdstr = arr.join(" ");
    console.log("cmdstr=>" + cmdstr)

    if (isWinformEnv())
        var  rzt = window.external.callFun(cmdstr);
    else
     var  rzt  = execCmd(cmdstr);

    console.log("[dsl_callFunCmdMode.] rzt=>" + rzt.substring(0,300))
    return rzt;
}

//   uname=
//   score=


// require("./autoload")
// dsl_callFunCmdMode()