<?php

namespace libspc;

function log_info($linenum, $msg, $obj)
{
    \think\facade\Log::info("f:$linenum");
    \think\facade\Log::info($msg . " is : " . json_encode($obj, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
}
function log_info_forEx($exception, $logdir, $hdrName)
{
    $logf = $logdir . date('Y-m-d H') . "_lg142_$hdrName catch.log";
 //   file_put_contents($logf,   $linenum_magicNum . PHP_EOL, FILE_APPEND);

    $logtxt = "ex file_linenum:" . $exception->getFile() . ":" . $exception->getLine();
    file_put_contents($logf,   $logtxt . PHP_EOL, FILE_APPEND);
    $logtxt = "errmsg:" . $exception->getMessage();
    file_put_contents($logf,   $logtxt . PHP_EOL, FILE_APPEND);
    $logtxt = "errtraceStr:" . $exception->getTraceAsString();
    file_put_contents($logf,   $logtxt . PHP_EOL, FILE_APPEND);

    // file_put_contents($logdir . date('Y-m-d H') . "_lg142_$hdrName catch.log",  json_encode($GLOBALS['bet_ret_prm']) . PHP_EOL, FILE_APPEND);
}
function log_info_forEx_tp( $exception, $hdrName)
{
    \think\facade\Log::error("----------------Hdrname:$hdrName ex_cathr---------------------------");
    \think\facade\Log::error("file_linenum:" . $exception->getFile() . ":" . $exception->getLine());
    \think\facade\Log::error("errmsg:" . $exception->getMessage());
    //   \think\facade\Log::error("errtrace:".$exception->getTrace());
    \think\facade\Log::error("errtraceStr:" . $exception->getTraceAsString());
    \think\facade\Log::error("----------------errrrr finish---------------------------");
}
