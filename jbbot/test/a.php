<?php

require_once __DIR__."/../lib/autoloadx.php";
$xxx=get_included_files();
$reqrOnce(__DIR__."/b.php")  ;
$xxx=get_included_files();
$p='/^[前中后][豹对顺半杂]\d+$/iu';
$t='中顺';
var_dump(preg_match($p, $t));
var_dump(mb_eregi($p, $t));
 set_error_handler("error_handler142");
 //register_shutdown_function('shutdown_hdlr');
var_dump(77);

//var_dump( $arr["aa"]);


var_dump(999999999);




function error_handler142($errno, $message, $filename, $lineno)
{
   var_dump($message);
}
function shutdown_hdlr()
{
    $errLast = error_get_last(); var_dump($errLast);return;
}

//    betstr\split_decode_splitx 0820 032218 rx==>/^[前中后][豹对顺半杂]\d+$/iu
//betstr\split_decode_splitx 0820 032218 betstr==>中顺