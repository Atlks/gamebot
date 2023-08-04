<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2019 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// [ 应用入口文件 ]
namespace think;

//$_GET['s']='gamelogic/fff';
//      //echo $text;   http://localhost:888/index2.php?s=gamelogic/fff
//  C:\phpstudy_pro\Extensions\php\php8.0.2nts\php.exe C:\项目最新\jbbot\public\index2.php  gamelogic/fff
//   C:\phpstudy_pro\Extensions\php\php8.0.2nts\php.exe C:\项目最新\jbbot\public\index2.php   handle/processMessageTest
//   $fname = $_SERVER['argv'][1];
$_GET['s']= $_SERVER['argv'][1];
error_reporting(E_ALL ^(E_NOTICE | E_WARNING)); 
 

require __DIR__ . '/../vendor/autoload.php';

 
error_reporting(E_ALL ^(E_NOTICE | E_WARNING)); 
define('NO_CACHE_RUNTIM',True);

$errdir='/www/wwwroot/ssc.521ck.vip/app/controller/';
$errdir='';


function exceptions_error_handler($errno, $message, $filename, $lineno) {
    $ex229['errno']=$errno;
    $ex229['message']=$message;
    $ex229['filename']=$filename;
    $ex229['lineno']=$lineno;
    $j=json_encode($ex229);
    global $errdir;
    file_put_contents( $errdir.date('Y-m-d H')."ex648_Glb304_55808.txt",  $j.PHP_EOL, FILE_APPEND);
}

 
 

set_error_handler("think\\exceptions_error_handler");
ini_set('display_errors', 'on');
error_reporting(E_ALL);
ini_set("log_errors", 1);
ini_set("error_log", $errdir.date('Y-m-d H')."ex648_error_log236_55808.txt");



function shutdown()
{
   // print_r(error_get_last());
 //  echo  PHP_EOL.PHP_EOL."-----------shutdown echo--------------------".PHP_EOL;
    if (error_get_last()) {
        global $errdir;
        $j=json_encode(error_get_last(),JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
        file_put_contents( $errdir.date('Y-m-d H')."ex648_shutdownCatchErr_55808.txt",  $j.PHP_EOL, FILE_APPEND);
       //print_r(error_get_last());
    }
   // echo  PHP_EOL.PHP_EOL."-----------shutdown echo finish--------------------".PHP_EOL;
  //  echo 'Script executed with finish....', PHP_EOL;
}

register_shutdown_function('think\shutdown');


function var_dump($o)
{
    
}


// 执行HTTP应用并响应
$http = (new App())->http;

$response = $http->run();

$response->send();

$http->end($response);
