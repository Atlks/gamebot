<?php

namespace  betstr;

require_once __DIR__ . "/../../lib/iniAutoload.php";

//$rzt312=format_tmqwfa1100ms("a2.100");
$rzt312 = 99;


$split=function  ()
{

};
function format_echo_cyehose($betnum)
{
    \log23::debug4echo(__METHOD__,"  ", func_get_args() );
//    if( class_exists('\think\facade\Log'))
//        \think\facade\Log::debug(__METHOD__ . json_encode(func_get_args(), JSON_UNESCAPED_UNICODE));
    $betnum = str_replace("前", "前三", $betnum);
    $betnum = str_replace("后", "后三", $betnum);
    $betnum = str_replace("中", "中三", $betnum);
    $betnum = str_replace("豹", "豹子", $betnum);
    $betnum = str_replace("对", "对子", $betnum);
    $betnum = str_replace("顺", "顺子", $betnum);
    $betnum = str_replace("半", "半顺", $betnum);
    $betnum = str_replace("杂", "杂六", $betnum);

    return $betnum;
}
 function getYa_pos($betstr)
{
    $ya_pos = strpos($betstr, '押');
//    if ($ya_pos == false)
//        $ya_pos = strpos($betstr, '.');
     if ($ya_pos == false)
        $ya_pos = strpos($betstr, '操');
     if ($ya_pos == false)
        $ya_pos = strpos($betstr, '草');
     if ($ya_pos == false)
        $ya_pos = strpos($betstr, '点');
      if ($ya_pos == false)
        $ya_pos = strpos($betstr, '.');
       if ($ya_pos == false)
        $ya_pos = strpos($betstr, '/');
    return $ya_pos;
}


//和龙湖
function format_echo_other($bet_str)
{
    $rzt_true = str_delNum($bet_str);
    $money = GetAmt_frmBetStr($bet_str);
    return    $rzt_true." ". $money;
}

function format_echo_tmqms ($bet_str)
{
$arr=explode("/",$bet_str);
    $rzt_true= $arr[0]."/". $arr[1];
    $money = $arr[2];
    return    $rzt_true." ". $money.".00";
};
//$hdl1156=\betstr\for
//$rzt1154= format_echo_tmqms("a/1/100");
//$rzt1154= format_echo_tmqms("a/单/100");
$rzt1154=11;

  function decode_tmqwfabczhms($betstr)
{


    $betstr = trim($betstr);
    $a = [];
    // $cyoNam = str_split($betstr)[0];

    $dasyaodeshwo = "";
    $ya_pos = mb_strpos($betstr, '大');
    $dasyaodeshwo = "大";
    if ($ya_pos == false) {
        $ya_pos = mb_strpos($betstr, '小');
        $dasyaodeshwo = "小";
    } else if ($ya_pos == false) {
        $ya_pos = mb_strpos($betstr, '单');
        $dasyaodeshwo = "单";
    } else if ($ya_pos == false) {
        $ya_pos = mb_strpos($betstr, '双');
        $dasyaodeshwo = "双";
    }
    //  var_dump( $ya_pos );
    $strlen525 = mb_strlen($betstr);

    $bet_nums = mb_substr($betstr, 0, $ya_pos);
    //  var_dump($bet_nums);
    $betNumaArr = str_split($bet_nums);
    foreach ($betNumaArr as $betnum) {

        $a[] = $betnum . "" .  $dasyaodeshwo . "" . getAmt_frmBetStr($betstr);
    }
    //  var_dump(\xdebug_get_declared_vars());
    return $a;
}
   function decode_tmqwf_abc1_200_zhms($betstr)
{
    $a = [];
    $strlen525 = mb_strlen($betstr);
    $ya_pos = getYa_pos($betstr);
    $bet_posx = mb_substr($betstr, 0, $ya_pos -1);
    $betnum= mb_substr($betstr,$ya_pos -1, 1);
    //   var_dump($bet_nums );
    $betNumaArr = str_split($bet_posx);
    foreach ($betNumaArr as $betpos) {

        //   $hdl =  "format_tmqwfabc1200zhms";


        //   $fmtOkStr=\betstr\format_tmqwfabc1200zhms($betstr);
        $a[] = $betpos . "/" . $betnum . "/" . \ltrx::getAmt_frmBetStr($betstr);
        //    ;
    }
    return $a;
}
function decode_tmqwfzhms($betstr)
{
    $a = [];
    $cyoNam = str_split($betstr)[0];

    $ya_pos = getYa_pos($betstr);
    //  var_dump( $ya_pos );
    $strlen525 = mb_strlen($betstr);
    //  var_dump(mb_strlen($betstr));  //9 is ok...  a123呀100 len is 8 also ok

    //  var_dump("yapos is :$ya_pos strlen is:$strlen525 " );
    $sublen = mb_strlen($betstr) - $ya_pos;
    //   var_dump(" sublen:$sublen");
    $bet_nums = mb_substr($betstr, 1, $ya_pos - 1);
    //   var_dump($bet_nums );
    $betNumaArr = str_split($bet_nums);
    foreach ($betNumaArr as $betnum) {

        $a[] = $cyoNam . "/" . $betnum . "/" . \ltrx::getAmt_frmBetStr($betstr);
    }

    //chick chongfu

    if (count($a) != count(array_unique($a))) {
        // echo '该数组有重复值';

        \libspc\log_info_tp("投注内容拆分计算结果:",$a,__METHOD__,"betnotice");
        throw    new \Exception('000000816123,bet_txt_dulip,投注内容有重复');
    }

    return $a;
}

function splitToSingleBetstrArr()
{
}

// a1.100
function  format_tmqwf_a1_100_ms($str)
{
    $arr = str_splitx($str);
    $dotIdx = strpos($str, ".");
    $money = substr($str, $dotIdx + 1);
    return $arr[0] . "/" . $arr[1] . "/" . $money;
}

//abc1.200
//dep
function  format_tmqwfabc1200zhms($str)
{
    $arr = str_splitx($str);
    $dotIdx = strpos($str, ".");
    $money = substr($str, $dotIdx + 1);

    $cyoNam . "/" . $betnum . "/" . \ltrx::getAmt_frmBetStr($betstr);



    return $arr[0] . "/" . $arr[1] . "/" . $money;
}


$format_echo_other2=function($bet_str)
{
    $rzt_true = str_delNum($bet_str);
    $money = GetAmt_frmBetStr($bet_str);
    return    $rzt_true+" "+ $money;
};


//echo format_echo_other2("a1.11");