<?php

namespace app\common;

use function ltrspltr\mltBet_msghdl;
use function ltrspltr\msgHdlr;
require_once __DIR__ . "/../../app/common/betstr.php";
require_once __DIR__ . "/../../lib/iniAutoload.php";
require_once __DIR__."/../../lib/str.php";
require_once __DIR__."/../../lib/iniAutoload.php";
require_once __DIR__."/../../config/cfg.php";

// a123.200

//$rzt717= lotrySpltrCls::msgHdlr("12345");
//$rzt717= lotrySpltrCls::msgHdlr("a123.200");
//$rzt717= lotrySpltrCls::msgHdlr("1.1.100 1.单.100");
//$rzt717= lotrySpltrCls::msgHdlr("abc1.200");
 $rzt717= lotrySpltrCls::msgHdlr("a8.200");
//$rzt717= lotrySpltrCls::tmqwfabc1200zhms("abc1.200");
$rzt717=1;
class lotrySpltrCls
{

    //abc1.200 mode    tmqwf_abc1_200_zhms_msghdl
    static  function tmqwf_abc1_200_zhms_msghdl($betstr)
    {
        $a = [];
        $strlen525 = mb_strlen($betstr);
        $ya_pos = self::getYa_pos($betstr);
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

  static  function tmqwfzhms_msghdl($betstr)
    {
        $a = [];
        $cyoNam = str_split($betstr)[0];

        $ya_pos = self::getYa_pos($betstr);
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



//可以抓取 stand bet ,,and fuza bet ....if mlt bet ,,cant
    static function msgHdlr($bet_str)
    {

        require_once  __DIR__ . "/../../lib/iniAutoload.php";
        require_once __DIR__."/../../config/cfg.php";
        require_once  __DIR__ . "/../../lib/logx.php";
        $logdir = __DIR__ . "/../../runtime/";
        $bet_str = trim($bet_str);
        require_once __DIR__ . "/../../lib/strx.php";


        //单注格式转换器  signle fmt cvt
        $arr = \http_query_toArr($GLOBALS['$strfmt1249']);
        foreach ($arr as $itm) {
            if (empty($itm))
                continue;
            $rx=key($itm);
            $fmtCvter=current($itm);
            if (empty($fmtCvter))
                continue;
            $p = '/^'  . $rx . '$/iu';

            if (preg_match($p, $bet_str)) {

                $msghdl149 = \strspc\pinyin1($fmtCvter);

                $hdl =  "format_". $msghdl149 . "";

                $hdl =\encodex\encode_funName($hdl );
                $hdl= '\\betstr\\'. $hdl;
  //format_tmqwf_a1_100_ms
                $fmtOkStr= $hdl($bet_str);
                $a = [];
                $a[] =  $fmtOkStr;
                return  $a;  //no convert
            } else
                \libspc\log_php("unitestLggr", " match fail..",   "", "dbg", $logdir);
        }


        //--------------statnd mode

        $arr = \http_query_toArr($GLOBALS['msgrex']);
        foreach ($arr as $itm) {
            if (empty($itm))
                continue;
            $wefa=key($itm);
            $rx=current($itm);
            $p = '/^'  . $rx . '$/iu';
         //   print_rx($p);
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


        //----------组合模式  e100押30 is err
        require_once __DIR__ . "/../../lib/str.php";
        // var_dump($GLOBALS['msgrex_zuhe']);

        $arr = http_query_toArr($GLOBALS['msgrex_zuhe']);
        //parse_str( $msgrex_urlencode, $arr);
        // var_dump($arr);
        foreach ($arr as $itm) {
            if (empty($itm))
                continue;
            $wefa=key($itm);
            $rx=current($itm);
            require_once __DIR__ . "/../../lib/strx.php";
            $p = '/^'  . $rx . '$/iu';
          //  print_rx($p);
            \libspc\log_php("unitestLggr", "****",    $p . " betstr:" . $bet_str, "untest", $logdir);
            if (preg_match($p, $bet_str)) {
                //  print_rx("     match.." . $p . " " . $numb);
                \libspc\log_php("unitestLggr", " match ok..",   "", "untest", $logdir);

                $msghdl149 = \strspc\pinyin1($wefa);
                \libspc\log_php("unitestLggr", "  pinyin1($wefa):",   $msghdl149, "untest", $logdir);
                $hdl =   $msghdl149 . "_msghdl";
                \libspc\log_php("unitestLggr", "  ",    $hdl, "untest", $logdir);
                $hdl=\encodex\encode_funName($hdl);
                return self:: $hdl($bet_str);
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
            return  self:: mltBet_msghdl($bet_str);
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

    static function mltBet_msghdl($betstr)
    {
        $logdir = __DIR__ . "/../../runtime/";
        \libspc\log_php("unitestLggr", "  ",    __METHOD__ . json_encode(func_get_args()), "dbg", $logdir);
        $betstr = trim($betstr);
        $bet_str_arr = explode(" ", $betstr);
        $bet_str_arr_clr = array_filter($bet_str_arr);


        $a = [];
        foreach ($bet_str_arr_clr as $betstr) {


            $tmp = self:: msgHdlr($betstr);
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
   static function tmqwfabczhms_msghdl($betstr)
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

    /**
     * @param $betstr
     * @return false|int
     */
    public static function getYa_pos($betstr)
    {
        $ya_pos = strpos($betstr, '押');
        if ($ya_pos == false)
            $ya_pos = strpos($betstr, '.');
        if ($ya_pos == false)
            $ya_pos = strpos($betstr, '/');
        return $ya_pos;
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

}