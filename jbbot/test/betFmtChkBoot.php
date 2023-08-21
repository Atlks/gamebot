<?php


// php test/dwijyo.php 虎100 12345
namespace think;

//ob_start();

use function strspc\str_splitX2;

require __DIR__ . '/../vendor/autoload.php';
$bet = urldecode($_SERVER['argv'][1]);
//$kaijnum = $_SERVER['argv'][2];
//$param = urldecode($fname);
//  a/单/100 11690
require_once __DIR__ . "/../lib/iniAutoload.php";
//require_once __DIR__ . "/../app/common/lotrySscV2.php";
require_once __DIR__ . "/../lib/nodelib.php";

$data = fs_readFileSync('betFmtChk.txt', 'UTF-8');




$lines347 = s($data,ssplit("\r\n"));
    //strx_split("\r\n");




// split the contents by new line




// print all lines
foreach ($lines347 as $line) {
    console_log("999");
    console_log($line);
    $arr = s($line,ssplit(","));
    $betnum = $arr[0];
    if ($betnum == "end")
        return;

    $bet= $betnum;

    $bet_str_arr_clr_spltMltSingle = \betstr\split_decode_split($bet);
    var_dump($bet);
    echo $bet . "\r\n";
//ob_end_clean();
    echo json_encodex($bet_str_arr_clr_spltMltSingle);
    \log23::fmtChkUnitest(__METHOD__, $bet, $bet_str_arr_clr_spltMltSingle);

}


//lines.forEach((line) => {

  



 
