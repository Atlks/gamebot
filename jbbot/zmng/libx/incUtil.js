


try{
    require("./libx/autoload")
}catch (e){}

try{
    require("./autoload")
}catch (e){}



try{
    require("../libx/autoload")
}catch (e){}



function getLibdir() {
    // _file=>C:\modyfing\jbbot\zmng\shangxiafen.htm
    // if embed in htm...filename just htm path
  //  console.log("_file=>" + __filename)  //if in html file ,...just for html file path
 //   console.log("__dirname=>" + __dirname)

    //   console.log(__dirname)
    let libdir = __dirname + '/../libx/'
// C:\modyfing\jbbot\zmng/../lib/
  //  console.log(libdir)

    const fs = require('fs');

   // console.log("exist dir:=>" + fs.existsSync(libdir))

    if (!fs.existsSync(libdir)) {
       // console.log(libdir + " not exist")
        libdir = __dirname + '/libx/'
    }
 //   console.log("libdir=>" + libdir)
    return libdir;
}

try{
    window['libdir']=getLibdir()
}catch (e)
{

    //winform env
    window['libdir']=""
}
