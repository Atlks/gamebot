<?php

namespace ltrspltr;


$wefa_rex = '特码球玩法=[abcde]\/\d\/\d+,特码球大小单双玩法=[abcde]\/[大小单双]\/\d+';
$wefa_rex = $wefa_rex . "&和值大小单双玩法=[大小单双]\d+";
$wefa_rex = $wefa_rex . "&龙虎和玩法龙虎=[龙虎]\d+,龙虎和玩法和=和\d+";

$wefa_rex = $wefa_rex . "&前后三玩法豹子=[前中后]豹\d+,前后三玩法顺子=[前中后]顺\d+,前后三玩法对子=[前中后]对\d+,前后三玩法半顺=[前中后]半\d+,前后三玩法杂六=[前中后]杂\d+";
$wefa_rex = $wefa_rex . "&特码球大小单双玩法=[abcde][大小单双]\d+";

$GLOBALS['msgrex'] = $wefa_rex;


$wefa_rex_zuhe =  '特码球玩法组合模式=[abcde][0123456789大小单双]+押\d+';
$wefa_rex_zuhe = $wefa_rex_zuhe . '&特码球玩法abc组合模式=[abcde]+[大小单双]\d+';
$GLOBALS['msgrex_zuhe'] = $wefa_rex_zuhe;




//  a123456押100
function tmqwfzhms_msghdl($betstr)
{
    $a = [];
    $cyoNam = str_split($betstr)[0];

    $ya_pos = strpos($betstr, '押');
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

        $a[] = $cyoNam . "/" . $betnum . "/" . getAmt_frmBetStr($betstr);
    }
    return $a;
}


//可以抓取 stand bet ,,and fuza bet ....if mlt bet ,,cant 
function msgHdlr($bet_str)
{
    require_once  __DIR__ . "/../../lib/logx.php";
    $logdir = __DIR__ . "/../../runtime/";
    $bet_str = trim($bet_str);
    require_once __DIR__ . "/../../lib/strx.php";


    //--------------statnd mode

    $arr = http_query_toArr($GLOBALS['msgrex']);
    foreach ($arr as $wefa => $rx) {
        if (empty($rx))
            continue;

        $p = '/^'  . $rx . '$/iu';
        print_rx($p);
        \libspc\log_php("unitestLggr", "****",    $p . " betstr:" . $bet_str, "untest", $logdir);
        \libspc\log_php("unitestLggr", "****",    $p . " betstr:" . $bet_str, "dbg", $logdir);
        if (preg_match($p, $bet_str)) {
            \libspc\log_php("unitestLggr", " match ok..",   "", "dbg", $logdir);
            \libspc\log_php("unitestLggr", " match ok..",   "", "untest", $logdir);
            \libspc\log_php("unitestLggr", " wefa:",   "$wefa", "untest", $logdir);
            $a = [];
            $a[] = $bet_str;
            return  $a;  //no convert
        } else
            \libspc\log_php("unitestLggr", " match fail..",   "", "dbg", $logdir);
    }


    //----------组合模式
    require_once __DIR__ . "/../../lib/str.php";
   // var_dump($GLOBALS['msgrex_zuhe']);
  
    $arr = http_query_toArr($GLOBALS['msgrex_zuhe']);
    //parse_str( $msgrex_urlencode, $arr);
   // var_dump($arr);
    foreach ($arr as $wefa => $rx) {
        if (empty($rx))
            continue;


        $p = '/^'  . $rx . '$/iu';
        print_rx($p);
        \libspc\log_php("unitestLggr", "****",    $p . " betstr:" . $bet_str, "untest", $logdir);
        if (preg_match($p, $bet_str)) {
            //  print_rx("     match.." . $p . " " . $numb);
            \libspc\log_php("unitestLggr", " match ok..",   "", "untest", $logdir);
            require_once __DIR__ . "/../../lib/strx.php";
            $msghdl149 = \strspc\pinyin1($wefa);
            \libspc\log_php("unitestLggr", "  pinyin1($wefa):",   $msghdl149, "untest", $logdir);
            $hdl = '\ltrspltr\\' . $msghdl149 . "_msghdl";
            \libspc\log_php("unitestLggr", "  ",    $hdl, "untest", $logdir);
            return  $hdl($bet_str);
        }
        \libspc\log_php("unitestLggr", " match fail..",   "", "untest", $logdir);
    }
  //  var_dump(111);

    //-----------------mlt 模式了
    //$bet_str="a 123";
    $ya_pos = strpos($bet_str, ' ');
   // var_dump( $bet_str);
   // var_dump( $ya_pos);   // die();
    if ($ya_pos >0)   
    {
        return  mltBet_msghdl($bet_str);
        //die();

    }
       
    
    //---------------- err fmt mode
  //  var_dump($bet_str);   
    // die();
    //die();
    $a = [];
    $a[] = $bet_str;
    return  $a;  //no convert

}

function mltBet_msghdl($betstr)
{
    $logdir = __DIR__ . "/../../runtime/";
    \libspc\log_php("unitestLggr", "  ",    __METHOD__ . json_encode(func_get_args()), "dbg", $logdir);
    $betstr = trim($betstr);
    $bet_str_arr = explode(" ", $betstr);
    $bet_str_arr_clr = array_filter($bet_str_arr);


    $a = [];
    foreach ($bet_str_arr_clr as $betstr) {


        $tmp =  msgHdlr($betstr);
        //  var_dump( $tmp);
        $a =   array_merge($a, $tmp);
    }
    return $a;
}
//\xdebug_start_code_coverage();

//var_dump(tmqwfabczhms_msghdl(" abc大100"));
//var_dump(tmqwfabczhms_msghdl(" abc小100"));

//var_dump(\xdebug_get_code_coverage());
//特码求abc模式    abc大100   abc大100
function tmqwfabczhms_msghdl($betstr)
{

    require_once __DIR__ . "/lotrySscV2.php";
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
    //  var_dump(mb_strlen($betstr));  //9 is ok...  a123呀100 len is 8 also ok

    //  var_dump("yapos is :$ya_pos strlen is:$strlen525 " );
    // $sublen = mb_strlen($betstr) - $ya_pos;
    //   var_dump(" sublen:$sublen");
  //  var_dump($betstr);
  //  var_dump($ya_pos);
    $bet_nums = mb_substr($betstr, 0, $ya_pos);
  //  var_dump($bet_nums);
    $betNumaArr = str_split($bet_nums);
    foreach ($betNumaArr as $betnum) {

        $a[] = $betnum . "" .  $dasyaodeshwo . "" . getAmt_frmBetStr($betstr);
    }
    //  var_dump(\xdebug_get_declared_vars());
    return $a;
}

function msgHdlr22($bet_str_arr_clr)
{
    //   var_dump( $bet_str_arr_clr);
    $a = [];
    foreach ($bet_str_arr_clr as $betstr) {

        $bet_wefa =    GetWefa($betstr);
        if ($bet_wefa == '特码球玩法组合模式') {
            $tmp =  spltSingleArrFrmTemacyoZuheMod($betstr);
            //  var_dump( $tmp);
            $a =   array_merge($a, $tmp);
        } else
            $a[] = $betstr;
    }
    return $a;
}
