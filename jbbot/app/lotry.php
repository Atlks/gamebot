<?php
//   6599269003:AAHW6kAh3Cy28vT4NuzQIkU4sISM3iFi-OA      ssc2024_bot  test ssc bot
//  C:\phpstudy_pro\Extensions\php\php8.0.2nts\php.exe app/lotry.php
//   特码球玩法=\d\/\d\/\d+,特码球大小单双玩法=\d+[大|小|单|双]\d+,和值大小单双玩法=和[大|小|单|双]\d+,龙虎和玩法=[龙|虎|和]\d+,前后三玩法=[前|后][豹|顺|对|半|杂]\d+
//1/1/1

//var_dump(join(" ",getKaijNumArr_hezDasyods("41278") ));

function var_dumpx($o)
{
    //var_dump($o);
}


$blkHash1236 = " 0x60d94a8232c1bc35fd15467cda7ea578861242433611cf50099fa73943ae8c1a";
//var_dump(getKaijNumFromBlkhash($blkHash1236));
//var_dump(getKaijNumFly_longhuHaeWefa("01690"));



function getKaijNumFromBlkhash_cye5vi($blkHash)
{
    $blkHash = trim($blkHash);
    $blkHash = substr($blkHash, 2);
    var_dump($blkHash);
    $str = preg_replace('/[a-z]/i', '', $blkHash);
    var_dump(($str));
    $str = substr($str, 0, 5);
    return $str;
}


function getKaijNumFromBlkhash($blkHash)
{
    $blkHash = trim($blkHash);
    $blkHash = substr($blkHash, 2);
    var_dump($blkHash);
    $str = preg_replace('/[a-z]/i', '', $blkHash);
    var_dump(($str));
    $str = substr($str, strlen($str) - 5);
    return $str;
}



//echo preg_match("/\d\/\d\/\d+/", "1/1/33");
//die();


//echo preg_match("/\d[大|小|单|双].*/", "1单311");
//die();
//echo preg_match("/\d[大|小|单|双]\d+/", "1单33");
//die();
//echo getWefa("1单33");
//echo getWefa("和单33");

//print_rx(str_split("3单33"));
//$str = "3单33";

//print_r(str_splitX("3单33"));


function print_rx($s)
{
}
//var_dumpxx(dwijyo("1单33", "12745"));
$glb = [];
//var_dumpx(dwijyo("4/4/33", "12745"));
//var_dumpx(dwijyo("后顺33", "32765"));
//
//

//var_dump(dwijyo("和100", "15031"));
//var_dumpx(dwijyo("前顺33", "90175"));


//var_dumpx(isShunzi("029"));
//var_dumpx(isBanShunzi("029"));


function getBetContxEcHo_temacyo($bet_str)
{

    var_dumpx($bet_str);
    $cyo_arr = explode("/", $bet_str);
    $cyo_idex = $cyo_arr[0];
    $glb['$tozhu_arr'] = $cyo_arr;
    $glb['$cyo_idex'] = $cyo_idex;
    var_dumpx($glb);

    $cyoName_arr = ['A', 'b', 'c', 'd', 'e'];
    var_dumpx($cyo_idex);
    $cyoName = $cyoName_arr[$cyo_idex - 1];
    $cyo_num = $cyo_arr[1];

    $cyo_num_rply = "数字" . $cyo_num;
    if (!is_numeric($cyo_num))
        $cyo_num_rply = $cyo_num;   //大小单双
    return     $cyoName . "球" . $cyo_num_rply . "  " . $cyo_arr[2] . ".00";
}

function getAmt_frmBetStr($str)
{
    $str = trim($str);
    //   $str = $msg['text'];
    if (preg_match('/(\d+)$/', $str, $match)) {
        $number = $match[0];
    }
    return  $number;
}

// 获取玩法
function getWefa($bet_nums)
{
    $numb = $bet_nums;
    // echo "betnum:" . $numb;
    $wefa_rex = '特码球玩法=\d\/\d\/\d+,特码球大小单双玩法=\d[大|小|单|双]\d+,和值大小单双玩法=和[大|小|单|双]\d+,龙虎和玩法=[龙|虎|和]\d+,前后三玩法=[前|后][豹|顺|对|半|杂]\d+';
    $wefa_rex = '特码球玩法=\d\/\d\/\d+,特码球大小单双玩法=\d\/[大小单双]\/\d+';
    $wefa_rex = $wefa_rex . ",和值大小单双玩法=和[大小单双]\d+,龙虎和玩法=[龙虎和]\d+,,前后三玩法=[前中后][豹顺对半杂]\d+";
    // 和值单独判断.bcs rex cant ok... in php 
    var_dumpx($numb);
    // 和值单独判断.bcs rex cant ok... in php 

    if (startsWith($numb, "前") || startsWith($numb, "中") || startsWith($numb, "后"))
        return  "前后三玩法";
    else if (startsWith($numb, "龙") || startsWith($numb, "虎"))
        return  "龙虎和玩法";
    else if (str_delNum($bet_nums) == "和")
        return  "龙虎和玩法";

    global $wefa_rex;
    $a = explode(",", $wefa_rex);

    $arr = $a;



    foreach ($arr as $key => $value) {
        if (empty($value))
            continue;
        $a100 = explode("=", $value);
        var_dumpx($a100);
        $wefa = $a100[0];
        $rx = $a100[1];

        //  echo PHP_EOL;
        //   echo "----------------------------------";
        //   echo PHP_EOL;
        print_rx($numb);
        print_rx($wefa);
        print_rx($rx);
        $p = '/^'  . $rx . '$/iu';
        print_rx($p);

        if (preg_match($p, $numb)) {
            print_rx("     match..");
            return   $wefa;
        } else
            print_rx("   not match..");
    }

    $arr = array_map(function ($item) {
        $a100 = explode("=", $item);
        return $item . '_i';
    }, $a);
}

//对讲结果
function dwijyo($betNum,   $bonusNum)
{
    //   echo PHP_EOL;
    $wefa = getWefa($betNum);
    //global $glb;
    $glb['betNum'] = $betNum;
    $glb['wefa'] = $wefa;
    //   print_rx($glb);
    //var_dump($glb);
    //  var_dump($wefa);
    if ($wefa == "特码球玩法") {
        $cyoIdex = str_split($betNum)[0];
        print_rx($cyoIdex);
        //开奖号码
        $cyoNum = str_split($bonusNum)[$cyoIdex - 1];
        print_rx($cyoNum);

        $betNum = explode("/", $betNum)[1];
        return  $betNum ==    $cyoNum;
    } else if ($wefa == "特码球大小单双玩法") {
        $cyoIdex = str_split($betNum)[0];
        print_rx($cyoIdex);
        $kaij_num_curPos = str_split($bonusNum)[$cyoIdex - 1];
        //   print_rx($cyoNum);

        $dasyaodeshwo = str_splitX($betNum)[1];
        print_rx($dasyaodeshwo);


        $kaij_num = getKaijNumArr_Dasyaodeshwo($kaij_num_curPos);
        print_rx($kaij_num);
        return  in_array($dasyaodeshwo, $kaij_num);
    } else if ($wefa == "和值大小单双玩法") {
        $betnum = str_splitX($betNum)[1];

        $kaij_num = getKaijNumArr_hezDasyods($bonusNum);
        print_rx(" kaij num::");
        print_rx($kaij_num);


        return  in_array($betnum, $kaij_num);
    } else if ($wefa == "龙虎和玩法") {
        $betnum = str_splitX($betNum)[0];

        //开奖号码
        //  $kaij_num=
        if (str_split($bonusNum)[0] > str_split($bonusNum)[4])
            $kaij_num_fnly = "龙";
        if (str_split($bonusNum)[0] < str_split($bonusNum)[4])
            $kaij_num_fnly = "虎";
        if (str_split($bonusNum)[0] = str_split($bonusNum)[4])
            $kaij_num_fnly = "和";

        //    var_dump($betnum . " kjnumFnly:" . $kaij_num_fnly . " oriKjnum:" . $bonusNum);
        $rzt =      (strcmp($betNum, $kaij_num_fnly));
        //  var_dump($rzt);
        //   return $rzt;
        if ($rzt > 1)
            return true;
        else
            return false;
    } else if ($wefa == "前后三玩法") {
        $betnum = str_delNum($betNum);
        $betnum = cyehose_bet_fullname($betnum);



        print_rx(" betnum num fullname::" . $betnum);
        //  die();
        //开奖号码
        //  $kaij_num=

        $kaij_num = getKaijNumArr_cyehose($bonusNum);
        print_rx(" kaij num::");
        print_rx($kaij_num);


        return  in_array($betnum, $kaij_num);
    }
}

function getKaijNumFly_longhuHaeWefa($bonusNum)
{
    var_dump(str_split($bonusNum));
    if (str_split($bonusNum)[0] > str_split($bonusNum)[4])
        return  "龙";
    else if (str_split($bonusNum)[0] < str_split($bonusNum)[4])
        return "虎";
    else
        return  "和";
}

function cyehose_bet_fullname($betnum)
{
    $betnum = str_replace("前", "前三", $betnum);
    $betnum = str_replace("后", "后三", $betnum);
    $betnum = str_replace("中", "中三", $betnum);
    $betnum = str_replace("豹", "豹子", $betnum);
    $betnum = str_replace("对", "对子", $betnum);
    $betnum = str_replace("顺", "顺子", $betnum);
    $betnum = str_replace("半", "半顺子", $betnum);
    $betnum = str_replace("杂", "杂六", $betnum);
    return $betnum;
}
//function getKaijNumArr_hezDasyods($bonusNum)



//获取开奖序列  --和值大小单双
function getKaijNumArr_hezDasyods($bonusNum)
{
    $a2 = str_split($bonusNum);


    $val = array_sum($a2);
    if ($val % 2 == 0)
        $a[] = "双";
    else
        $a[] = "单";

    if ($val > 23)
        $a[] = "大";
    else
        $a[] = "小";
    return $a;
}
//获取开奖序列  --大小单双
function getKaijNumArr_Dasyaodeshwo($bonusNum)
{
    $glb = [];
    //   if($bonusNum)
    //  $a[];
    $glb['bonusNum'] = $bonusNum;
    $a_de = [1, 3, 5, 7, 9];
    // print_rx($a);
    if (in_array($bonusNum, $a_de))
        $a[] = "单";
    else
        $a[] = "双";
    $glb['curKaijunm_arr'] = $a;
    //  $a_shwo = [0, 2, 4, 6, 8];
    //  if (in_array($bonusNum, $a_shwo)) 
    print_rx($glb);


    if ($bonusNum >= 5)
        $a[] = "大";
    else
        $a[] = "小";
    print_rx($glb);
    return $a;
}

//获取开奖序列--前后三玩法
function getKaijNumArr_cyehose($bonusNum)
{
    $cye3 = substr($bonusNum, 0, 3);
    var_dumpx($cye3);
    $jon3 = substr($bonusNum, 1, 3);
    $ho3 = substr($bonusNum, 2, 3);
    if (isBaozi($cye3))
        $a[] = "前三豹子";
    else if (isDwizi($cye3))
        $a[] = "前三对子";
    else   if (isShunzi($cye3))
        $a[] = "前三顺子";
    else  if (isBanShunzi($cye3))
        $a[] = "前三半顺子";
    else  if (isZalyo($cye3))
        $a[] = "前三杂六";



    if (isBaozi($jon3))
        $a[] = "中三豹子";
    else if (isDwizi($jon3))
        $a[] = "中三对子";
    else   if (isShunzi($jon3))
        $a[] = "中三顺子";
    else  if (isBanShunzi($jon3))
        $a[] = "中三半顺子";
    else  if (isZalyo($jon3))
        $a[] = "中三杂六";


    if (isBaozi($ho3))
        $a[] = "后三豹子";
    else if (isDwizi($ho3))
        $a[] = "后三对子";
    else   if (isShunzi($ho3))
        $a[] = "后三顺子";
    else  if (isBanShunzi($ho3))
        $a[] = "后三半顺子";
    else  if (isZalyo($ho3))
        $a[] = "后三杂六";
    return $a;
}

function isBaozi($num)
{
    return (str_split($num)[0] === str_split($num)[1] &&   str_split($num)[0] === str_split($num)[2]);
}
function isDwizi($num)
{
    if (isBaozi($num))
        return false;
    else  if (str_split($num)[0] === str_split($num)[1] &&   str_split($num)[0] !== str_split($num)[2])
        return true;
    else if (str_split($num)[0] === str_split($num)[2] &&   str_split($num)[0] !== str_split($num)[1])
        return true;
    else if (str_split($num)[1] === str_split($num)[2] &&   str_split($num)[1] !== str_split($num)[0])
        return true;
    else
        return false;
}

function isShunzi($num)
{
    $num = order_str($num); // 019
    $a = ['123', '234', '345', '456', '567', '678', '789', '890', '901', '012', '089', '019'];
    return in_array($num, $a);
}


function isBanShunzi($num)
{

    $num = order_str($num);
    if (isShunzi($num))
        return false;

    $cye2 = substr($num, 0, 2);
    $ho2 = substr($num, 1, 2);
    $jo2 = substr($num, 0, 1) . substr($num, 2, 1);
    var_dumpx($jo2);
    //   789  290>029  801>018
    $a = ['12', '23', '34', '45', '56', '67', '78', '89', '90', '01', '12', '09'];
    if (in_array($cye2, $a) || in_array($ho2, $a) || in_array($jo2, $a))
        return true;
    else
        return false;
}

function isZalyo($num)
{
    if (isBaozi($num))
        return false;
    else if (isDwizi($num))
        return false;
    else   if (isShunzi($num))
        return false;
    else  if (isBanShunzi($num))
        return false;
    else  return true;
}






//-----------------------------------core .fun lib---------------------------
//检查字符串是否以特定的子字符串开头
function startsWith($string, $startString)
{
    $len = strlen($startString);
    return (substr($string, 0, $len) === $startString);
}

//支持中文的splt ,,ori splt only eng
function str_splitX($str)
{
    //support chinese char,,,,  str_split not spt chins char
    return  preg_split('/(?<!^)(?!$)/u', $str);
}


//echo " str ddl:".str_delNum("后顺333");
function str_delNum($str)
{
    return preg_replace('/[\d]/', '', $str);
}

// order_str as char arr
function order_str($num)
{
    // echo 1151;
    print_rx("num:" . $num . "    ");
    $a = str_split($num);
    print_rx($a);
    sort($a);
    //  echo " aft asort:";
    print_rx($a);
    // die();
    $s = implode($a);
    return $s;
}
