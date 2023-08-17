<?php
spl_autoload_register(function ($class_name ) {
    // var_dump($class_name);  //"ltrx"

    if(file_exists(__DIR__."/../../lib/". $class_name . '.php'))
        require_once __DIR__."/../../lib/". $class_name . '.php';

    else if(file_exists(__DIR__."/../lib/". $class_name . '.php'))
        require_once __DIR__."/../lib/". $class_name . '.php';
    else if(file_exists(__DIR__."/lib/". $class_name . '.php'))
        require_once __DIR__."/lib/". $class_name . '.php';
    else if(file_exists(__DIR__."/". $class_name . '.php'))
        require_once __DIR__."/". $class_name . '.php';



});


require_once __DIR__."/../app/common/betstr.php";
//------------------auto load functions
$dirs307='/../../lib/,/../lib/,/lib/,/';
$arr_dirs=explode(",",$dirs307);
$libnames="ex,json,kaijx,logx,ltrx,str,strcls,strx,tlgrmV2,betstr,encodex";
$arr_libs307=explode(",",$libnames);

foreach ($arr_dirs as $dir) {
    foreach ($arr_libs307 as $libnm) {

        $fname=__DIR__.$dir. $libnm . '.php';
        if(file_exists( $fname))
        {
            require_once  $fname;
        }

    }
}



