<?php



ini_set('display_errors', 'on');
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING));
ini_set("log_errors", 1);
ini_set("error_log", $errdir . date('Y-m-d H') . "lg142_errLog.txt");



set_exception_handler('think\ex_hdlr');
set_error_handler("think\\error_handler142");
register_shutdown_function('think\shutdown_hdlr');

function ex_hdlr($exception)
{
    \think\facade\Log::info (  json_encode($exception) );
}
