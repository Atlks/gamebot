try {
    global['isWinformEnv'] = isWinformEnv
} catch (e) {

}

try {
    window['isWinformEnv'] = isWinformEnv
} catch (e) {

}
try {
    window['isset'] = isset
} catch (e) {

}


try {
    global['isset'] = isset
} catch (e) {

}


function isset(varname) {
    try {
        varname = trim(varname);
        rzt = typeof (eval(varname));
        return typeof (varname) != "undefined";
    } catch (e) {
        console.log("[43isset()] " + e.message);
        //  console_log(e);
        return false;
    }

}

function isWinformEnv() {

    //if(isset("window.external"))
    //  window.external && window.external.external ex..   winformx
    // window.external && && window.external.external==false .electr env
    //
    //  window.external ex just console env

    //  alert(window.external)  //in eletr env is true..
    //  alert( typeof window.external.callFun)  //in eletr env is false..
    try {
        if (window.external && typeof window.external.callFun == "unknown") {


            return true;
        }
        if (window.external && typeof window.external.callFun == "undefined") {


            return false;  //electron env


        }


    } catch (e) {
        //console env just err
        return false;
    }

    return false;


    // alert(window.external.callFun)  无效调用参数可能会自东exe
    try {
        if (window.external.callFun) {
            console.log(":62 winform env")
            return true;
        } else {
            alert("54")
            console.log(":68 not winform env")
            return false;
        }

    } catch (e) {
        alert("61")
        ///  alert(e)
        console.log(":74 not   winform env")
        return false;
    }

}

try {
    if (!isset("global"))
        window['global'] = [];
} catch (e) {
    console.log(e.message)

}

if (isWinformEnv())
    __dirname = "";


global['curDatetime'] = curDatetime

function curDatetime() {
    const date = new Date();
    //  console.log(date.toLocaleString('en-US', { timeZone: 'America/New_York' })); // 2/16/2023, 8:25:05 AM


    return date.toLocaleString('zh-CN', {timeZone: 'Asia/Shanghai'});
}


global['getLibdir'] = getLibdir

function getLibdir() {
    // _file=>C:\modyfing\jbbot\zmng\shangxiafen.htm
    // if embed in htm...filename just htm path
    // if(!__filename)
    //     __filename=""


    //   console.log("_file=>" + __filename)  //if in html file ,...just for html file path
    //   console.log("__dirname=>" + __dirname)
    try {
        //   console.log(__dirname)
        let libdir = __dirname + '/../libx/'
// C:\modyfing\jbbot\zmng/../lib/
        //   console.log(libdir)

        const fs = require('fs');

        //   console.log("exist dir:=>" + fs.existsSync(libdir))

        if (!fs.existsSync(libdir)) {
            //   console.log(libdir + " not exist")
            libdir = __dirname + '/libx/'
        }
        //   console.log("libdir=>" + libdir)
        return libdir;
    } catch (e) {
        return ""

    }

}