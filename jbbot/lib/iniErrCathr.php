
<?php

global $errdir;
$errdir=__DIR__."/../runtime/";
$GLOBALS['$errdir']=$errdir;


require_once __DIR__."/../lib/logx.php";

ini_set('display_errors', 'on');
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING));
ini_set("log_errors", 1);
ini_set("error_log", $errdir . date('Y-m-d H') . "lg142_errLog.txt");


set_error_handler("error_handler142");
register_shutdown_function('shutdown_hdlr');

set_exception_handler('ex_hdlr');


function ex_hdlr($exception)
{
    //  \think\facade\Log::info (  json_encode($exception) );
    \libspc\log_err($exception,__METHOD__,$GLOBALS['$errdir'],"err");
    var_dump($exception);
}



function error_handler142($errno, $message, $filename, $lineno)
{
    $ex229['errno'] = $errno;
    $ex229['message'] = $message;
    $ex229['filename'] = $filename;
    $ex229['lineno'] = $lineno;
    $j = json_encode($ex229);
    global $errdir;
    file_put_contents($errdir . date('Y-m-d H') . "lg142_errHdlr_.log",  $j . PHP_EOL, FILE_APPEND);

        try {
            if(class_exists('\think\Facade'))
                if(class_exists('\think\facade\Log'))
            \think\facade\Log::info($j);
        }catch(\Exception $e){}

    var_dump($j); //also echo throw 
  //  throw $j;
}

function shutdown_hdlr()
{
    // print_r(error_get_last());
    //cant show echo ,bcs of ok also output
    // 
    $errLast = error_get_last();
   // var_dump($errLast);
    if ($errLast) {

        if ($errLast['line'] == "")
            return;
    //    echo  PHP_EOL . PHP_EOL . "-----------shutdown echo--------------------" . PHP_EOL;
        global $errdir;
        $j = json_encode($errLast, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        file_put_contents($errdir . date('Y-m-d H') . "lg142_shtdwnHdlr_.log",  $j . PHP_EOL, FILE_APPEND);
        //print_r(error_get_last());
   //     var_dump($errLast); //also echo throw 
        \think\facade\Log::info (  json_encode($errLast) );
     //   echo  PHP_EOL . PHP_EOL . "-----------shutdown echo finish--------------------" . PHP_EOL;
     //   echo 'Script executed with finish....', PHP_EOL;
    }
}
