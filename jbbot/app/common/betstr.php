<?php
namespace  betstr;

require_once __DIR__ . "/../../lib/iniAutoload.php";

//$rzt312=format_tmqwfa1100ms("a2.100");
$rzt312=99;

// a1.100
function  format_tmqwf_a1_100_ms($str)
{
$arr=str_splitx($str);
$dotIdx=strpos($str,".");
$money=substr($str,$dotIdx+1);
return $arr[0]."/".$arr[1]."/".$money;

}

//abc1.200
//dep
function  format_tmqwfabc1200zhms($str)
{
    $arr=str_splitx($str);
    $dotIdx=strpos($str,".");
    $money=substr($str,$dotIdx+1);

    $cyoNam . "/" . $betnum . "/" . \ltrx::getAmt_frmBetStr($betstr);



    return $arr[0]."/".$arr[1]."/".$money;

}