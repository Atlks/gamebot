<?php
require_once __DIR__."/../app/common/lotrySscV2.php";
require_once __DIR__."/iniAutoload.php";
echo \kaijx:: kaij_echo("12345");
// 开奖工具类
class kaijx
{


    static function kaij_echo_x($kaijNum)
    {
        try {
            return kaij_echo($kaijNum);
        } catch (\Throwable $e) {
        }
    }


  static  function kaij_echo($kaijNum)
    {
        $a = str_split($kaijNum);
        $sum = array_sum($a);

        $kaij_num_dasyaodeshwo_fnly = join(" ", getKaijNumArr_hezDasyods($kaijNum));
        //  $kaij_num_dasyaodeshwo_fnly =join("",getKaijNumArr_($kaijNum)) ;

        $kaij_num_cyehgouse_fnly = join("", getKaijNumArr_cyehose($kaijNum));

        $kaij_num_cyehgouse_fnly =self:: cyehose_bet_name($kaij_num_cyehgouse_fnly);
        $kaij_num_cyehgouse_fnly =self::  cyehose_bet_name($kaij_num_cyehgouse_fnly);
        $kaij_num_cyehgouse_fnly =self::  cyehose_bet_name($kaij_num_cyehgouse_fnly);
        $kaij_num_cyehgouse_fnly =self::  cyehose_bet_name($kaij_num_cyehgouse_fnly);
        $s = join("+", $a) . "=$sum $kaij_num_dasyaodeshwo_fnly " . getKaijNumFly_longhuHaeWefa($kaijNum) . " $kaij_num_cyehgouse_fnly";
        $s = substr($s, 0, strlen($s) - 1);
        return $s;
    }


    static  function cyehose_bet_name($betnum)
{
    $betnum = str_replace("半顺子", "半|", $betnum);
    $betnum = str_replace("前三", "前", $betnum);
    $betnum = str_replace("后三", "后", $betnum);
    $betnum = str_replace("中三", "中", $betnum);
    $betnum = str_replace("豹子", "豹|", $betnum);
    $betnum = str_replace("对子", "对|", $betnum);

    $betnum = str_replace("杂六", "杂|", $betnum);
    $betnum = str_replace("顺子", "顺|", $betnum);

    return $betnum;
}

}