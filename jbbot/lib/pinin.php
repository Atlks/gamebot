<?php
function getfirstchar($s0)
{

    $GLOBALS['getfirstchar_curchar'] = $s0;
    $fchar = ord($s0[0]);
    if ($fchar >= ord("A") and $fchar <= ord("z")) return strtoupper($s0[0]);

    if(is_numeric($s0))
        return $s0;
    if($s0==".")
        return $s0;
    $asc  = $s0;
    if (mb_strstr("半豹", $asc)) return "b";
    if (mb_strstr("大单对", $asc)) return "d";
    if (mb_strstr("小", $asc)) return "x";
    if (mb_strstr("龙六", $asc)) return "l";
    if (mb_strstr("玩", $asc)) return "w";
    if (mb_strstr("法", $asc)) return "f";
    if (mb_strstr("码模", $asc)) return "M";
    if (mb_strstr("球前", $asc)) return "q";
    if (mb_strstr("组值中子杂", $asc)) return "z";
    if (mb_strstr("和合虎后", $asc)) return "h";
    if (mb_strstr("式是双顺三", $asc)) return "s";

    if (strlen(mb_strstr("特", $asc)) > 0) return "T";


    if (mb_strstr("这", $asc)) return "z";

    return null;
}


//支持中文的splt ,,ori splt only eng
function str_splitX2($str)
{
    //support chinese char,,,,  str_split not spt chins char
    return  preg_split('/(?<!^)(?!$)/u', $str);
}
function pinyin1($zh)
{

    $GLOBALS['pinyin1_curstr'] = $zh;

    $ret = "";
    $arr = \strspc\str_splitX2($zh);

    foreach ($arr as $char748) {

        $ret .= \strspc\getfirstchar($char748);
    }
    $ret = strtolower($ret);
    return $ret;
}