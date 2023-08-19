<?php

namespace think;
// php test/dwijyo.php 虎100 12345
use think;

 
require __DIR__ . "/../lib/iniAutoload.php";

$fs=get_included_files();
require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . "/../lib/iniAutoload.php";

// 应用初始化
$consl=new App() ;
//echo $consl->console;


$bet = urldecode($_SERVER['argv'][1]);
$kaijnum = $_SERVER['argv'][2];
//$param = urldecode($fname);
//  a/单/100 11690
new App();

$rzt = dwijyo($bet, $kaijnum);
if ($rzt)
    echo "\r\ntrue";
else
    echo "\r\nfalse";


//vars
