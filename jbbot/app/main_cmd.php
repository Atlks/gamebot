<?php

//  php app/main_cmd.php
global $errdir;
$errdir = "";
require_once __DIR__ . "/../lib/ex.php";

while (true) {
    try {

        $phpexe = "php";
        // $tlghr_msg_hdl = " C:\\w\\jbbot\\tlgrmHdl_temacyo.php ";
        $filename = __DIR__ . "/../think";
        //$filename = __DIR__ . "/ech.php";
        $cmd = $phpexe . " " . $filename . "    swoole2  ";
        var_dump($cmd);
        exec($cmd);
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
        $logf = $errdir . date('Y-m-d H') . "lg142_maincmdExHdlr_.log";
        $logtxt = "file_linenum:" . $exception->getFile() . ":" . $exception->getLine();
        file_put_contents($logf,  $logtxt . PHP_EOL, FILE_APPEND);
        $logtxt = "errmsg:" . $exception->getMessage();
        file_put_contents($logf,  $logtxt . PHP_EOL, FILE_APPEND);
        $logtxt = "errtraceStr:" . $exception->getTraceAsString();
        file_put_contents($logf,  $logtxt . PHP_EOL, FILE_APPEND);
        throw $exception; // for test
    }
    sleep(1);
}
