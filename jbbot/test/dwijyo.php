<?php

// php test/dwijyo.php 虎100 12345
$bet = urldecode($_SERVER['argv'][1]);$kaijnum = $_SERVER['argv'][2];
//$param = urldecode($fname);
//  a/单/100 11690

require_once __DIR__."/../app/common/lotrySscV2.php";
$rzt=dwijyo($bet,$kaijnum );
if($rzt)
    echo "\r\ntrue";
else
    echo "\r\nfalse";


vars
