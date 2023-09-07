

global['__DIR__']=__dirname;
global['$GLOBALS']=[];


require('./file.js');
require('./fp_ati1990.js');
require('./php.js');require('./datetime.js');
require('./jq.js');
require('./core.js');
require('./api2023jb.js');
require('./secury.js');
// require('./ui.js');


require("underscore")
require("lodash")

async function includeEsm(modename) {
    await import(modename)
}


global['includeEsm']=includeEsm
global['requireEsm']=includeEsm
function iniAutoload3($libs,$dirs307)
{
  //  ob_start();
    require ("./php.js");

    var fs=require("fs")
    $logdir = __DIR__ + "/../../runtime/";
    $GLOBALS['logdir'] = $logdir;
   // require_once __DIR__ . "/../app/common/betstr.php";
  //  $dirs307 = '/';    //   /../../lib/,/../lib/,/lib/,
    $arr_dirs = explode(",", $dirs307);

    for (const $dir of $arr_dirs) {

        $arr_libs307=$libs.split(",");
        for (const $libnm of $arr_libs307) {

            $fname =$dir+ "/"+$libnm+".js"  ;
           // console.log($fname);
            if (!file_exists($fname))
                continue;
            require_once ($fname);
        }
    }


   // ob_end_clean();
}
global['iniAutoload3']=iniAutoload3;
iniAutoload3("php,str,time,fun,var,aes,dsl,enc,file,http",".,..,../libx,../libBiz");



// dir =..    ../libx
// curdir=__dirname+"/"+$dir+"/";
// if(!file_exists(curdir))
//     continue;
// $arr_libs307=fs.readdirSync(curdir);