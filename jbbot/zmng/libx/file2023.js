
global['writeFile']=writeFile
function writeFile(f, t) {



    if(isWinformEnv())
    {


        let txtInshell=encodeURIComponent(t)
        let fl=encodeURIComponent( f);
        var hedtx=window.external.callFun("writeFileV3 "+fl+" "+ txtInshell);
    }
    else
    {
        f=f.replace("__USERPROFILE__",process.env.USERPROFILE);
        f=f.replace("__rootdir__",__dirname)
        // f=f.replace("__USERPROFILE__",process.env.USERPROFILE);
        // f=f.replace("__rootdir__",__dirname)
        writeFileSyncx( f,t );

    }

}

global['getlib']=getlib
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
    return f;
}


try{
    require("./file")
}catch (e){}
try{
    require("./libx/file")
}catch (e){}
global['appendFileV2']=appendFileV2
function  appendFileV2(f,t){

    require("./sys")
    if(isWinformEnv())
    {


        let txtInshell=encodeURIComponent(t)
        let fl=encodeURIComponent( f);
        var hedtx=window.external.callFun("appendFileV2 "+fl+" "+ txtInshell);
    }
    else
    {
      //  require("./file")
        f=f.replace("__USERPROFILE__",process.env.USERPROFILE);
        f=f.replace("__rootdir__",__dirname)
        // f=f.replace("__USERPROFILE__",process.env.USERPROFILE);
        // f=f.replace("__rootdir__",__dirname)
        appendFileSync( f,t );

    }
}