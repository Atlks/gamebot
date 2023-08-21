<?php

namespace libspc;


function log_dbg_php($method_linenum, $msg, $obj)
{
    log_php($method_linenum, $msg, $obj, "dbg");
}

function get_variable_name(&$var333, $scopeVarArr = NULL) {
    if (NULL == $scopeVarArr) {
        $scopeVarArr = $GLOBALS;
    }
    $tmp  = $var333;
    $var   = "tmp_exists_" . mt_rand();
    // $name = array_search($var, $scope, TRUE);
    $name = array_search($var333, $scopeVarArr);
    $var333   = $tmp;
    return $name;
}

$var11=34567;
//var_dump(get_variable_name( $var11,get_defined_vars()));

// [kka:12] 0821051358 vrr==>11
//log_phpV2(__LINE__."kka",get_variable_name( $var11,get_defined_vars()),$var11,"lev413");
/*
 * @auther atlks
 * @
 * */
function log_phpV2($method_linenum, $varname, $varobj, $lev = "info")
{//log_err
    if (is_object($varobj) && get_class($varobj) == "Exception") {
        log_err($varobj, $method_linenum, $lev);
        return;
    }
    if (is_object($varobj) || is_array($varobj))
        $varobj = json_encode($varobj, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    if (is_bool($varobj))
        $varobj = $varobj ? "TRUE" : "FALSE";
    $logf = __DIR__ . "/../runtime/" . date('Y-m-d') . "_$lev.log";
    $logtxt  = "[$method_linenum] " . date('mdHis') . " " . $varname . "==>" . $varobj;
    file_put_contents($logf, $logtxt . PHP_EOL, FILE_APPEND);
}

//    if (is_array($obj) == "Exception") {
//        log_err($obj, $method_linenum, $lev);
//        return;
//    }
// file_put_contents($logf,   $logtxt , FILE_APPEND);
//   file_put_contents($logf,   $linenum_magicNum . PHP_EOL, FILE_APPEND);
//  varname is xxx
//  var_dump( $datamsg);//  var_dump( $datamsg);DIE();

/*
 * @deprecated
 * @deprecated
 *@todo  todoxxxmsgn
 * */
function log_php($method_linenum, $msg, $obj, $lev = "info")
{
    $logdir = __DIR__ . "/../runtime/";
    $datamsg = $obj;
    if (is_object($obj) || is_array($obj)) {
        $datamsg = json_encode($obj, JSON_UNESCAPED_UNICODE);
    } else if (is_bool($obj)) {
        if ($obj)
            $datamsg = "TRUE";
        else
            $datamsg = "FALSE";
        //  var_dump( $datamsg);DIE();
    }
    //  var_dump( $datamsg);
    $logf = $logdir . date('Y-m-d') . "_lg142_$lev.log";
    $logtxt = $method_linenum;

    file_put_contents($logf, $logtxt . PHP_EOL, FILE_APPEND);
    //   file_put_contents($logf,   $linenum_magicNum . PHP_EOL, FILE_APPEND);
    //  varname is xxx
    $logtxt = $msg . " =>" . $datamsg;

    file_put_contents($logf, $logtxt . PHP_EOL, FILE_APPEND);
}

function log_info_php($method_linenum, $msg, $obj, $lev = "info")
{
    $logdir = __DIR__ . "/../runtime/";
    $datamsg = $obj;
    if (is_object($obj) || is_array($obj)) {
        $datamsg = json_encode($obj, JSON_UNESCAPED_UNICODE);
    } else if (is_bool($obj)) {
        if ($obj)
            $datamsg = "TRUE";
        else
            $datamsg = "FALSE";
        //  var_dump( $datamsg);DIE();
    }
    // var_dump( $datamsg);
    $logf = $logdir . date('Y-m-d') . "_$lev lg142_.log";
    $logtxt = $method_linenum;

    file_put_contents($logf, $logtxt . PHP_EOL, FILE_APPEND);
    //   file_put_contents($logf,   $linenum_magicNum . PHP_EOL, FILE_APPEND);
    //  varname is xxx
    $logtxt = $msg . " is:" . $datamsg;
    file_put_contents($logf, $logtxt . PHP_EOL, FILE_APPEND);
}

function log_to_tp($msg, $obj, $linenum, $lev = "info")
{

    \think\facade\Log::$lev($linenum);
    \think\facade\Log::$lev($msg . " is : " . json_encode($obj, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));


}

function log_info_tp($msg, $obj, $linenum, $lev = "info")
{
    if (class_exists('\think\facade\Log')) {
        \think\facade\Log::$lev($linenum);
        \think\facade\Log::$lev($msg . " is : " . json_encode($obj, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
    }

}

function log_err($exception, $hdrName_method_linenum, $logdir, $lev = "err")
{

    $logf = $logdir . date('Y-m-d H') . "_lg142_$lev.log";
    $logtxt = "----------------Hdrname:$hdrName_method_linenum ex_cathr---------------------------";

    file_put_contents($logf, $logtxt . PHP_EOL, FILE_APPEND);
    //   file_put_contents($logf,   $linenum_magicNum . PHP_EOL, FILE_APPEND);
    $logtxt = "errmsg:" . $exception->getMessage();
    file_put_contents($logf, $logtxt . PHP_EOL, FILE_APPEND);
    $logtxt = "ex file_linenum:" . $exception->getFile() . ":" . $exception->getLine();
    file_put_contents($logf, $logtxt . PHP_EOL, FILE_APPEND);

    $logtxt = "errtraceStr:" . $exception->getTraceAsString();
    file_put_contents($logf, $logtxt . PHP_EOL, FILE_APPEND);
    // file_put_contents($logdir . date('Y-m-d H') . "_lg142_$hdrName catch.log",  json_encode($GLOBALS['bet_ret_prm']) . PHP_EOL, FILE_APPEND);
}

function log_err_tp($exception, $hdrName_method_linenum, $lev = "err")
{
    \think\facade\Log::$lev("----------------errInMethod:$hdrName_method_linenum ex_cathr---------------------------");
    \think\facade\Log::$lev("errmsg:" . $exception->getMessage());
    \think\facade\Log::$lev("file_linenum:" . $exception->getFile() . ":" . $exception->getLine());
    //   \think\facade\Log::error("errtrace:".$exception->getTrace());
    \think\facade\Log::$lev("errtraceStr:" . $exception->getTraceAsString());
    \think\facade\Log::$lev("----------------errrrr finish---------------------------");
}

function log_errImpt_tp($exception, $hdrName_method_linenum, $lev = "err")
{
    \think\facade\Log::critical("----------------Hdrname:$hdrName_method_linenum ex_cathr---------------------------");
    \think\facade\Log::emergency("errmsg:" . $exception->getMessage());
    \think\facade\Log::emergency("file_linenum:" . $exception->getFile() . ":" . $exception->getLine());
    //   \think\facade\Log::error("errtrace:".$exception->getTrace());
    \think\facade\Log::emergency("errtraceStr:" . $exception->getTraceAsString());
    \think\facade\Log::emergency("----------------errrrr finish---------------------------");
}
