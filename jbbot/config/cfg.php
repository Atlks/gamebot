<?php



//  格式转换模式  单注识别  方便转换标准fmt

$strfmt1249="";
// tmqwf_1_syego_d_ms
$strfmt1249 = $strfmt1249 . '  [abcde]\d[草操\.点押]\d+ =特码球玩法_a1.100_模式  ';
  $strfmt1249 = $strfmt1249 . '   &  [abcde12345][大小单双]\d+ = 特码球大小单双玩法_a大100_模式  & \d\/[0123456789大小单双]\/\d+ =特码球玩法_1_syego_大_模式  ';    //a1.100
$strfmt1249 = $strfmt1249 . '   ';
$GLOBALS['$strfmt1249'] = $strfmt1249;
//

// 更具标准stand bet to echo
$rx_echo = "[大小单双]\d+=和值大小单双模式 & [abcde12345]\/[0123456789大小单双]\/\d+=特码球模式 & dep[前中后][豹对顺半杂]\d+=前后三玩法";
$GLOBALS['rx_echo'] = $rx_echo;


//..1234567890...abcd00
//----------****************单注2模式rx---------- for peilv huocyv
$wefa_rex = ' 特码球玩法=[abcde]\/\d\/\d+';     //   a/1/100   分割模式 标准模式
$wefa_rex = $wefa_rex . ' &特码球大小单双玩法=[abcde]\/[大小单双]\/\d+';    //  a/大/100 分割模式 标准模式
$wefa_rex = $wefa_rex . '&和值大小单双玩法=[大小单双]\d+';
$wefa_rex = $wefa_rex . "&龙虎和玩法龙虎=[龙虎]\d+&龙虎和玩法和=和\d+";
$wefa_rex = $wefa_rex . "&前后三玩法豹子=[前中后]豹\d+&前后三玩法顺子=[前中后]顺\d+&前后三玩法对子=[前中后]对\d+&前后三玩法半顺=[前中后]半\d+&前后三玩法杂六=[前中后]杂\d+";
$GLOBALS['msgrex'] = $wefa_rex;



//-------------------组合模式rx and easy mode...   点|押|操|草|.]
$wefa_rex_zuhe =  '特码球玩法组合模式=[abcde][0123456789大小单双]+[草操点押\.\/]\d+';
$wefa_rex_zuhe = $wefa_rex_zuhe . '&特码球玩法_abc1.200_组合模式=[abcde]+\d[草操点押\.\/]\d+';
$wefa_rex_zuhe = $wefa_rex_zuhe . '&特码球玩法_ab_大_100_组合模式=[12345abcde]+[大小单双]\d+';  //  a大100  模式   ab大100
$wefa_rex_zuhe = $wefa_rex_zuhe . '&特码球玩法_a_大小_100_组合模式= [12345abcde][大小单双]+\d+ ';  //& [abcde12345]+[大小单双]\d+ = 特码球大小单双玩法_ab12大_模式
//      a/1/100模式   a.1.100模式     1.1.100模式
$wefa_rex222 =  '   特码球大小单双玩法=\d\/[大小单双]\/\d+';    //   1/大/100 模式
$wefa_rex222 = $wefa_rex222 . ' &  特码球大小单双玩法=\d[大小单双]\d+';    //   1单200 模式
$wefa_rex222 = $wefa_rex222 . ' &特码球玩法=[abcde]\d\.\d+';    //a1.100
//$wefa_rex222 = $wefa_rex222 . ' &特码球大小单双玩法=[abcde][大小单双]\d+';          //  a大100  模式
$wefa_rex222 = $wefa_rex222 . ' &  特码球玩法=\d\/\d\/\d+  ';   // 1/1/100模式



//$wefa_rex_zuhe = $wefa_rex_zuhe . '&特码球玩法abc组合模式=[12345abcde]+[大小单双]\d+';
    // [abcde12345][大小单双]+\d+ = 特码球大小单双玩法_a大小_模式 &
//$arr_new =array_merge($wefa_rex_zuhe,$wefa_rex222,$wefa_rex);
$GLOBALS['msgrex_zuhe'] =$wefa_rex_zuhe.$wefa_rex222.$wefa_rex;





