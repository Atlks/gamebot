<?php


// php public/hd2test.php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2019 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
//    php public/HandleUpdates_core.php
//    php public/HandleUpdates.php
// [ 应用入口文件 ]  HandleUpdates/index
namespace think;

require __DIR__ . '/../vendor/autoload.php';


require_once __DIR__."/../lib/iniAutoload.php";


while (true) {
    try {


        $filename = __DIR__ . "/HandleUpdates_core.php";

        $cmd =  "php " . $filename . "       ";
        var_dump($cmd);
        //  exec($cmd);
        system($cmd);
        // echo   iconv("gbk","utf-8","php中文待转字符");//把中文gbk编码转为utf8
        //main_process();
    } catch (\Throwable $exception) {
        var_dump($exception);
        $lineNumStr = __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  ";
        //   \think\facade\Log::info($lineNumStr);
        //  \think\facade\Log::error("----------------errrrr2---------------------------");
        //  \think\facade\Log::error("file_linenum:" . $exception->getFile() . ":" . $exception->getLine());
        //  \think\facade\Log::error("errmsg:" . $exception->getMessage());
        //  \think\facade\Log::error("errtraceStr:" . $exception->getTraceAsString());
        //  var_dump($exception);
        $errdir=  $GLOBALS['errdir'];
        $logf = $errdir . date('Y-m-d') . "chkbot_ex_lg142.log";
        $logtxt = "file_linenum:" . $exception->getFile() . ":" . $exception->getLine();
        file_put_contents($logf,  $logtxt . PHP_EOL, FILE_APPEND);
        $logtxt = "errmsg:" . $exception->getMessage();
        file_put_contents($logf,  $logtxt . PHP_EOL, FILE_APPEND);
        $logtxt = "errtraceStr:" . $exception->getTraceAsString();
        file_put_contents($logf,  $logtxt . PHP_EOL, FILE_APPEND);
        throw $exception; // for test
    }
    usleep(10*1000);
}



