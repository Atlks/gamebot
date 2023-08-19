<?php



//  格式转换模式  单注识别  方便转换标准fmt

$strfmt1249="";
// tmqwf_1_syego_d_ms
$strfmt1249 = $strfmt1249 . '    ';
  //a1.100
$strfmt1249 = $strfmt1249 . '   ';
$GLOBALS['$strfmt1249'] = $strfmt1249;
//

// 更具标准stand bet to echo
$rx_echo = "[大小单双]\d+=和值大小单双模式 & [abcde12345]\/[0123456789大小单双]\/\d+=特码球模式 & dep[前中后][豹对顺半杂]\d+=前后三玩法";
$GLOBALS['rx_echo'] = $rx_echo;


//..1234567890...abcd00
//----------****************单注2模式rx---------- for peilv huocyv
$wefa_rex = ' 特码球玩法=[abcde12345]\/\d\/\d+';     //   a/1/100   分割模式 标准模式    1/1/100   a.1.100
$wefa_rex = $wefa_rex . ' &特码球大小单双玩法=[abcde12345]\/[大小单双]\/\d+';    //  a/大/100 分割模式 标准模式    1/大/100  a.大.100
$wefa_rex = $wefa_rex . '&和值大小单双玩法=[大小单双]\d+';
$wefa_rex = $wefa_rex . "&龙虎和玩法龙虎=[龙虎]\d+&龙虎和玩法和=和\d+";
$wefa_rex = $wefa_rex . "&前后三玩法豹子=[前中后]豹\d+&前后三玩法顺子=[前中后]顺\d+&前后三玩法对子=[前中后]对\d+&前后三玩法半顺=[前中后]半\d+&前后三玩法杂六=[前中后]杂\d+";
$GLOBALS['msgrex'] = $wefa_rex;



//-------------------组合模式rx and easy mode...   点|押|操|草|.]
$wefa_rex_zuhe =  '特码球玩法组合模式=[abcde][0123456789大小单双]+\/\d+';   // a123押100    a123/100  a大小/100
$wefa_rex_zuhe = $wefa_rex_zuhe . '&特码球玩法_abc1.200_组合模式=[abcde]+\d\/\d+';  /// abc1/100 abc1押100   a1/100    a1.100
$wefa_rex_zuhe .=    '&特码球玩法_ab_大_100_组合模式=[12345abcde]+[大小单双]\d+';  //  a大100  模式   abc大100  1单200 模式   123单100

$wefa_rex_zuhe .=   '&特码球玩法_a_大小_100_组合模式= [12345abcde][大小单双]+\d+ ';  //   a大小单双100   1大小100    1大100

$wefa_rex_zuhe .=  ' & 特码球玩法_a1.100_模式= [12345]\d\/\d+ =  ';   //   11/100


//& [abcde12345]+[大小单双]\d+ = 特码球大小单双玩法_ab12大_模式    already have
//      a/1/100模式   a.1.100模式     1.1.100模式
//$wefa_rex_zuhe .=   ' & 特码球大小单双玩法_a大100_模式=[abcde12345]+[大小单双]\d+ ';  // a大100 abc大100   already have

//？？？
//$wefa_rex_zuhe .=     '  &  特码球玩法_1_syego_大_模式 = \d\/[0123456789大小单双]\/\d+  ';   //  1/1/100   1/单/100   already have

//   $wefa_rex222 .=    ' &特码球玩法abc组合模式 = [12345abcde]+[大小单双]\d+';   //abc大100  already have
// [abcde12345][大小单双]+\d+ = 特码球大小单双玩法_a大小_模式 &    // a大小单双100  already have
//$arr_new =array_merge($wefa_rex_zuhe,$wefa_rex222,$wefa_rex);
$GLOBALS['msgrex_zuhe'] =$wefa_rex_zuhe."&".$wefa_rex;





