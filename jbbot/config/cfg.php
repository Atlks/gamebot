<?php
//  格式转换模式  单注识别  方便转换标准fmt

$strfmt1249="";
$strfmt1249 = $strfmt1249 . '  [abcde]\d\.\d+ =特码球玩法_a1.100_模式';    //a1.100
$GLOBALS['$strfmt1249'] = $strfmt1249;


//..1234567890...abcd00
//----------单注2模式rx
$wefa_rex = '特码球玩法=[abcde]\.\d\.\d+ & 特码球玩法=[abcde]\/\d\/\d+ &  特码球玩法=\d\/\d\/\d+ &  特码球玩法=\d\.\d\.\d+';
//      a/1/100模式   a.1.100模式     1.1.100模式     1/1/100模式
$wefa_rex = $wefa_rex . ' &特码球玩法=[abcde]\d\.\d+';    //a1.100


$wefa_rex = $wefa_rex . ' &特码球大小单双玩法=[abcde][大小单双]\d+';          //  a大100  模式
$wefa_rex = $wefa_rex . ' &特码球大小单双玩法=[abcde]\.[大小单双]\.\d+';   //  a.大.100 模式
$wefa_rex = $wefa_rex . ' &特码球大小单双玩法=[abcde]\/[大小单双]\/\d+';    //  a/大/100 分割模式
 
 $wefa_rex = $wefa_rex . ' &  特码球大小单双玩法=\d\/[大小单双]\/\d+';    //   1/大/100 模式
$wefa_rex = $wefa_rex . ' &  特码球大小单双玩法=\d\.[大小单双]\.\d+';    //   1.大.100 模式
$wefa_rex = $wefa_rex . ' &  特码球大小单双玩法=\d[大小单双]\d+';    //   1单200 模式

$wefa_rex = $wefa_rex . '&和值大小单双玩法=[大小单双]\d+';

$wefa_rex = $wefa_rex . "&龙虎和玩法龙虎=[龙虎]\d+&龙虎和玩法和=和\d+";
$wefa_rex = $wefa_rex . "&前后三玩法豹子=[前中后]豹\d+&前后三玩法顺子=[前中后]顺\d+&前后三玩法对子=[前中后]对\d+&前后三玩法半顺=[前中后]半\d+&前后三玩法杂六=[前中后]杂\d+";


$GLOBALS['msgrex'] = $wefa_rex;

//-------------------组合模式rx
$wefa_rex_zuhe =  '特码球玩法组合模式=[abcde][0123456789大小单双]+[押\.\/]\d+';
$wefa_rex_zuhe = $wefa_rex_zuhe . '&特码球玩法abc组合模式=[abcde]+[大小单双]\d+';
$wefa_rex_zuhe = $wefa_rex_zuhe . '&特码球玩法_abc1.200_组合模式=[abcde]+\d[押\.\/]\d+';
$GLOBALS['msgrex_zuhe'] = $wefa_rex_zuhe;
