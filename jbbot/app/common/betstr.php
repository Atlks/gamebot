<?php

namespace betstr;


use http\Exception\BadConversionException;
use \log23;
use think\Exception;
use think\exception\ValidateException;

$GLOBALS['refLib419']='betstr';
require __DIR__ . "/../../lib/iniAutoload.php";






//$rzt312=format_tmqwfa1100ms("a2.100");
//$rzt312 =replace_spec_charToSplash("1小大/100");
 //$rzt312 = split_decode_splitx("a单小100");
//$rzt312 = split_decode_splitx("1单大100");
//$rzt312 = decode_tmqwf_a_dx_100_zhms("1小大100");
//$rzt312 = decode_tmqwf_a_dx_100_zhms("a小大100");
//
$rzt312 = split_decode_splitx("a单100");
//$rzt312 = decode_tmqwf_ab_d_100_zhms("12大100");
//$rzt312 = decode_tmqwf_ab_d_100_zhms("ab大100");
$rzt312 = 99;


$split = function () {

};
function format_echo_cyehose($betnum)
{
    \log23::debug4echo(__METHOD__, "  ", func_get_args());
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

function getWefa($bet_nums)
{
    $bet_nums=format_tmq_standFmt($bet_nums);
    // $arr = http_query_toArr($GLOBALS['msgrex']);
    $arr = http_query_toArr($GLOBALS['msgrex']);
    foreach ($arr as $itm) {
        if (empty($itm))
            continue;

        $wefa = key($itm);
        $rx = current($itm);


        $p = '/^' . $rx . '$/iu';
        if (preg_match($p, $bet_nums)) {
            print_rx("     match.." . $p . " " . $bet_nums);
            return $wefa;
        } else
            print_rx("   not match.." . $p . " " . $bet_nums);
    }
    //  return msgHdlrOther($bet_nums);
}

function split_decode_split($betstrsssss)
{
    // return lotrySpltrCls::msgHdlr($betstrsssss);

    return \betstr\split_decode_splitx($betstrsssss);
}

function format_echo_x($betstr)
{
    try {
        return \echoCls::getBetContxEcHo($betstr);
    } catch (\Exception $exception) {
        \log23::err(__METHOD__, func_get_args(), __LINE__);
        \log23::err(__METHOD__, "ex", $exception);
        return "";
    }
}


function getDaxiaodeshwo_any_pos($betstr)
{
    $a = [];
    $ya_pos = strpos($betstr, '大');
    if ($ya_pos != false)
        $a[] = $ya_pos;

    $ya_pos = mb_strpos($betstr, '小');
    if ($ya_pos != false) $a[] = $ya_pos;

    $ya_pos = mb_strpos($betstr, '单');
    if ($ya_pos != false) $a[] = $ya_pos;

    $ya_pos = mb_strpos($betstr, '双');
    if ($ya_pos != false) $a[] = $ya_pos;
    sort($a);
    return $a[0];
}

function getDaxiaodeshwo_pos($betstr)
{
    $ya_pos = strpos($betstr, '大');
//    if ($ya_pos == false)
//        $ya_pos = strpos($betstr, '.');
    if ($ya_pos == false)
        $ya_pos = mb_strpos($betstr, '小');
    if ($ya_pos == false)
        $ya_pos = mb_strpos($betstr, '单');
    if ($ya_pos == false)
        $ya_pos = mb_strpos($betstr, '双');

    return $ya_pos;
}

function getYa_pos($betstr)
{
    $ya_pos = strpos($betstr, '押');
//    if ($ya_pos == false)
//        $ya_pos = strpos($betstr, '.');
    if ($ya_pos == false)
        $ya_pos = mb_strpos($betstr, '操');
    if ($ya_pos == false)
        $ya_pos = mb_strpos($betstr, '草');
    if ($ya_pos == false)
        $ya_pos = mb_strpos($betstr, '点');
    if ($ya_pos == false)
        $ya_pos = mb_strpos($betstr, '.');
    if ($ya_pos == false)
        $ya_pos = mb_strpos($betstr, '/');
    return $ya_pos;
}


//和龙湖
function format_echo_other($bet_str)
{
    $rzt_true = str_delNum($bet_str);
    $money = GetAmt_frmBetStr($bet_str);
    return $rzt_true . " " . $money;
}

function format_echo_tmqms($bet_str)
{
    $bet_str = format_tmq_standFmt($bet_str);
    $arr = explode("/", $bet_str);
    $cyo_num = $arr[1];
    $cyo_num_rply = "数字" . $cyo_num;
    if (!is_numeric($cyo_num))
        $cyo_num_rply = $cyo_num;   //大小单双

    $rzt_true = $arr[0] . "球" . $cyo_num_rply;
    $money = $arr[2];
    return $rzt_true . " " . $money . ".00";
}

;
//$hdl1156=\betstr\for
//$rzt1154= format_echo_tmqms("a/1/100");
//$rzt1154= format_echo_tmqms("a/单/100");
$rzt1154 = 11;

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

        $str = $betnum . "/" . $dasyaodeshwo . "/" . getAmt_frmBetStr($betstr);
        $a[] = format_tmq_standFmt($str);
    }
    //  var_dump(\xdebug_get_declared_vars());
    return $a;
}


function format_tmqwf_1_syego_d_ms($str)
{
    return format_tmq_standFmt($str);
}


function format_tmq_standFmtV2($str)
{
    $rzt=split_deco
}

//fromat to tmq standfmt From antoher single bet fmt
function format_tmq_standFmt($str)
{
    if (str_contains($str, "/")) {
        $arr = explode("/", $str);
    } else {
        $arr = mb_str_split($str);
    }
    if (is_numeric($arr[0])) {
        $arr_cyo = str_split("abcde");
        $cyoName = $arr_cyo[$arr[0] - 1];
    } else {
        $cyoName = $arr[0];
    }
    $str = $cyoName . "/" . $arr[1] . "/" . $arr[2];
    return $str;
}

//a大小100 模式


function decode_tmqwf_a_dx_100_zhms($betstr)
{

    $a = [];
    $strlen525 = mb_strlen($betstr);
   // $ya_pos = getDaxiaodeshwo_any_pos($betstr);
  //  $bet_posx = mb_substr($betstr, $ya_pos - 1, 1);

    $pos_last_dxds=getDaxiaodeshwo_last_pos($betstr);

    $betnum = mb_substr($betstr, 1,     $pos_last_dxds);
    //   var_dump($bet_nums );
    $betNumaArr = mb_str_split($betnum);
    foreach ($betNumaArr as $i) {

        //   $hdl =  "format_tmqwfabc1200zhms";
        $betpos=mb_str_split($betstr)[0];
        $betpos = convert_cyoName($betpos);
        //   $fmtOkStr=\betstr\format_tmqwfabc1200zhms($betstr);
        $a[] = $betpos . "/" . $i . "/" . \ltrx::getAmt_frmBetStr($betstr);
        //    ;
    }
    return $a;
}

function getDaxiaodeshwo_last_pos($betstr)
{
    $a = [];
    $ya_pos = mb_strpos($betstr, '大');
    if ($ya_pos != false)
        $a[] = $ya_pos;

    $ya_pos = mb_strpos($betstr, '小');
    if ($ya_pos != false) $a[] = $ya_pos;

    $ya_pos = mb_strpos($betstr, '单');
    if ($ya_pos != false) $a[] = $ya_pos;

    $ya_pos = mb_strpos($betstr, '双');
    if ($ya_pos != false) $a[] = $ya_pos;
    rsort($a);
    return $a[0];
}

//ab大100 模式
function decode_tmqwf_ab_d_100_zhms($betstr)
{
    $a = [];
    $strlen525 = mb_strlen($betstr);
    $ya_pos = getDaxiaodeshwo_pos($betstr);
    $bet_posx = mb_substr($betstr, 0, $ya_pos);
    $betnum = mb_substr($betstr, $ya_pos, 1);
    //   var_dump($bet_nums );
    $betNumaArr = str_split($bet_posx);
    foreach ($betNumaArr as $betpos) {

        //   $hdl =  "format_tmqwfabc1200zhms";

        $betpos = convert_cyoName($betpos);
        //   $fmtOkStr=\betstr\format_tmqwfabc1200zhms($betstr);
        $a[] = $betpos . "/" . $betnum . "/" . \ltrx::getAmt_frmBetStr($betstr);
        //    ;
    }
    return $a;
}

function convert_cyoName($betpos)
{
    $betpos = trim($betpos);
    if (is_numeric($betpos)) {
        $s = "abcde";
        $a = str_split($s);
        return $a[$betpos - 1];
    } else
        return $betpos;

}

function decode_tmqwf_abc1_200_zhms($betstr)
{
    $a = [];
    $strlen525 = mb_strlen($betstr);
    $ya_pos = getYa_pos($betstr);
    $bet_posx = mb_substr($betstr, 0, $ya_pos - 1);
    $betnum = mb_substr($betstr, $ya_pos - 1, 1);
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
    $betNumaArr = mb_str_split($bet_nums);
    foreach ($betNumaArr as $betnum) {

        $a[] = $cyoNam . "/" . $betnum . "/" . \ltrx::getAmt_frmBetStr($betstr);
    }

    //chick chongfu

    if (count($a) != count(array_unique($a))) {
        // echo '该数组有重复值';

        \libspc\log_info_tp("投注内容拆分计算结果:", $a, __METHOD__, "betnotice");
        throw    new \Exception('000000816123,bet_txt_dulip,投注内容有重复');
    }

    return $a;
}

function splitToSingleBetstrArr()
{
}


function split_decode_splitx($bet_str)
{
    global $logdir;
    $bet_str = trim($bet_str);
    $bet_str = replace_spec_charToSplash($bet_str); //


    //--------------statnd mode

    $arr = split_FrmStandBetstr($bet_str);
    if ($arr != null)
        return $arr;

    //单注格式转换器  signle fmt cvt
    $arr = split_FrmEasyModeBetstr($bet_str);
    if ($arr != null)
        return $arr;


    //----------组合模式  e100押30 is err
    require_once __DIR__ . "/../../lib/str.php";
    // var_dump($GLOBALS['msgrex_zuhe']);

    $arr = http_query_toArr($GLOBALS['msgrex_zuhe']);
    //parse_str( $msgrex_urlencode, $arr);
    // var_dump($arr);
    foreach ($arr as $itm) {
        if (empty($itm))
            continue;
        $wefa = key($itm);
        $rx = current($itm);
        require_once __DIR__ . "/../../lib/strx.php";
        $p = '/^' . $rx . '$/iu';
        //  print_rx($p);
        \libspc\log_php("unitestLggr", "****", $p . " betstr:" . $bet_str, "untest", $logdir);
        if (preg_match($p, $bet_str)) {
            //  print_rx("     match.." . $p . " " . $numb);
            \libspc\log_php("unitestLggr", " match ok..", "", "untest", $logdir);

            $msghdl149 = \strspc\pinyin1($wefa);
            \libspc\log_php("unitestLggr", "  pinyin1($wefa):", $msghdl149, "untest", $logdir);
            $hdl = $msghdl149 . "_msghdl";
            \libspc\log_php("unitestLggr", "  ", $hdl, "untest", $logdir);
            $hdl = \encodex\encode_funName($hdl);
            if (function_exists($hdl))
                return $hdl($bet_str);
            else {
                //  require __DIR__."/betstr.php";
                $hdl = "\betstr\decode_" . $msghdl149;
                $hdl = \encodex\encode_funName($hdl);
                return $hdl($bet_str);
            }

        }
        \libspc\log_php("unitestLggr", " match fail..", "", "untest", $logdir);
    }
    //  var_dump(111);

    //-----------------mlt 模式了
    //$bet_str="a 123";
    $ya_pos = strpos($bet_str, ' ');
    // var_dump( $bet_str);
    // var_dump( $ya_pos);   // die();
    if ($ya_pos > 0) {
        return mltBet_msghdl($bet_str);
        //die();

    }


    //---------------- err fmt mode  shoule throw errfmt
    //  var_dump($bet_str);
    // die();
    //die();
     \log23::validBetstr(__METHOD__,"bet_str",$bet_str);
    throw  new  ValidateException($bet_str);
    //no convert

}

function split_FrmEasyModeBetstr(?bool $bet_str)
{  global $logdir;
    $arr= \http_query_toArr($GLOBALS['$strfmt1249']);
    foreach ($arr as $itm) {
        if (empty($itm))
            continue;
        $rx = key($itm);
        $fmtCvter = current($itm);
        if (empty($fmtCvter))
            continue;
        $p = '/^' . $rx . '$/iu';

        if (preg_match($p, $bet_str)) {

            $msghdl149 = \strspc\pinyin1($fmtCvter);

            $hdl = "format_" . $msghdl149 . "";

            $hdl = \encodex\encode_funName($hdl);
            $hdl = '\\betstr\\' . $hdl;
            //format_tmqwf_a1_100_ms  tmqdxdswf_ad100_ms
            $fmtOkStr = $hdl($bet_str);
            $a = [];
            $a[] = $fmtOkStr;
            return $a;  //no convert
        } else
            \libspc\log_php("unitestLggr", " match fail..", "", "dbg", $logdir);
    }
    return null;

}

function split_FrmStandBetstr( $bet_str)
{
    global $logdir;
    require_once  __DIR__."/../../lib/str.php";
    $arr= \http_query_toArr($GLOBALS['msgrex']);
    foreach ($arr as $itm) {
        if (empty($itm))
            continue;
        $wefa = key($itm);
        $rx = current($itm);
        $p = '/^' . $rx . '$/iu';
        //   print_rx($p);
        \libspc\log_php("unitestLggr", "****", $p . " betstr:" . $bet_str, "untest", $logdir);
        \libspc\log_php("unitestLggr", "****", $p . " betstr:" . $bet_str, "dbg", $logdir);
        if (preg_match($p, $bet_str)) {
            \libspc\log_php("unitestLggr", " match ok..", "", "dbg", $logdir);
            \libspc\log_php("unitestLggr", " match ok..", "", "untest", $logdir);
            \libspc\log_php("unitestLggr", " wefa:", "$wefa", "untest", $logdir);
            $a = [];
            $a[] = $bet_str;
            return $a;  //no convert
        } else
            \libspc\log_php("unitestLggr", " match fail..", "", "dbg", $logdir);
    }
    return null;

}

function replace_spec_charToSplash(string $bet_str)
{
    $s = '押操草./';
    $a = mb_str_split($s);
    foreach ($a as $c) {
        if($c==".")
            $c="\.";
        $bet_str = mb_ereg_replace($c, "/", $bet_str);

    }
    return $bet_str;
}

function mltBet_msghdl($betstr)
{
    $logdir = __DIR__ . "/../../runtime/";
    \libspc\log_php("unitestLggr", "  ", __METHOD__ . json_encode(func_get_args()), "dbg", $logdir);
    $betstr = trim($betstr);
    $bet_str_arr = explode(" ", $betstr);
    $bet_str_arr_clr = array_filter($bet_str_arr);


    $a = [];
    foreach ($bet_str_arr_clr as $betstr) {


        $tmp = split_decode_splitx($betstr);
        //  var_dump( $tmp);
        $a = array_merge($a, $tmp);
    }
    return $a;
}


//a大100
function format_tmqdxdswf_ad100_ms($str)
{
    $arr = mb_str_split($str);

    $money = getAmt_frmBetStr($str);
    $cyoName = $arr[0];
    if (is_numeric($arr[0])) {
        $arr_cyo = str_split("abcde");
        $cyoName = $arr_cyo[$arr[0] - 1];
    }

    return $cyoName . "/" . $arr[1] . "/" . $money;
}


function getAmt_frmBetStr($str)
{
    $str = trim($str);
    //   $str = $msg['text'];
    if (preg_match('/(\d+)$/', $str, $match)) {
        $number = $match[0];
    }
    return $number;
}

// a1.100
function format_tmqwf_a1_100_ms($str)
{
    $arr = str_splitx($str);
    $dotIdx = strpos($str, ".");
    $money = substr($str, $dotIdx + 1);
    return $arr[0] . "/" . $arr[1] . "/" . $money;
}


//abc1.200
//dep
function format_tmqwfabc1200zhms($str)
{
    $arr = str_splitx($str);
    $dotIdx = strpos($str, ".");
    $money = substr($str, $dotIdx + 1);

    $cyoNam . "/" . $betnum . "/" . \ltrx::getAmt_frmBetStr($betstr);


    return $arr[0] . "/" . $arr[1] . "/" . $money;
}


$format_echo_other2 = function ($bet_str) {
    $rzt_true = str_delNum($bet_str);
    $money = GetAmt_frmBetStr($bet_str);
    return $rzt_true + " " + $money;
};


//echo format_echo_other2("a1.11");