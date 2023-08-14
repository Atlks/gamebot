<?php

namespace libspc;

function log_info($linenum, $msg, $obj)
{
    \think\facade\Log::info("f:$linenum");
    \think\facade\Log::info($msg . " is : " . json_encode($obj, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
}
function log_err($exception, $hdrName_method_linenum, $logdir,$lev="err")
{

    $logf = $logdir . date('Y-m-d H') . "_lg142_$lev.log";
    $logtxt = "----------------Hdrname:$hdrName_method_linenum ex_cathr---------------------------";

    file_put_contents($logf,   $logtxt . PHP_EOL, FILE_APPEND);
    //   file_put_contents($logf,   $linenum_magicNum . PHP_EOL, FILE_APPEND);
    $logtxt = "errmsg:" . $exception->getMessage();
    file_put_contents($logf,   $logtxt . PHP_EOL, FILE_APPEND);
    $logtxt = "ex file_linenum:" . $exception->getFile() . ":" . $exception->getLine();
    file_put_contents($logf,   $logtxt . PHP_EOL, FILE_APPEND);

    $logtxt = "errtraceStr:" . $exception->getTraceAsString();
    file_put_contents($logf,   $logtxt . PHP_EOL, FILE_APPEND);
    // file_put_contents($logdir . date('Y-m-d H') . "_lg142_$hdrName catch.log",  json_encode($GLOBALS['bet_ret_prm']) . PHP_EOL, FILE_APPEND);
}
function log_err_tp($exception, $hdrName_method_linenum,$lev="err")
{
    \think\facade\Log::$lev("----------------errInMethod:$hdrName_method_linenum ex_cathr---------------------------");
    \think\facade\Log::$lev("errmsg:" . $exception->getMessage());
    \think\facade\Log::$lev("file_linenum:" . $exception->getFile() . ":" . $exception->getLine());
    //   \think\facade\Log::error("errtrace:".$exception->getTrace());
    \think\facade\Log::$lev("errtraceStr:" . $exception->getTraceAsString());
    \think\facade\Log::$lev("----------------errrrr finish---------------------------");
}
function log_errImpt_tp($exception, $hdrName_method_linenum,$lev="err")
{
    \think\facade\Log::critical("----------------Hdrname:$hdrName_method_linenum ex_cathr---------------------------");
    \think\facade\Log::emergency("errmsg:" . $exception->getMessage());
    \think\facade\Log::emergency("file_linenum:" . $exception->getFile() . ":" . $exception->getLine());
    //   \think\facade\Log::error("errtrace:".$exception->getTrace());
    \think\facade\Log::emergency("errtraceStr:" . $exception->getTraceAsString());
    \think\facade\Log::emergency("----------------errrrr finish---------------------------");
}


