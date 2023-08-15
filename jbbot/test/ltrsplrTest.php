<?php

require_once  __DIR__ . "/../app/common/lotrySpltr.php";
require_once  __DIR__ . "/../app/common/lotrySscV2.php";
require_once  __DIR__ . "/../lib/logx.php";


// php  test/ltrsplrTest.php

\libspc\log_php("unitestLggr","****", \ltrspltr\msgHdlr("a123")     ,"untest",__DIR__."/../runtime/");
 

\libspc\log_php("unitestLggr","****", \ltrspltr\msgHdlr("a123押100 abc小100 a大100")     ,"untest",__DIR__."/../runtime/");
die();
 
\libspc\log_php("unitestLggr","****",  "----------------------------"    ,"untest",__DIR__."/../runtime/");
\libspc\log_php("unitestLggr","****", \ltrspltr\msgHdlr("a123456押100")     ,"untest",__DIR__."/../runtime/"); 
\libspc\log_php("unitestLggr","****",  "----------------------------"    ,"untest",__DIR__."/../runtime/");
\libspc\log_php("unitestLggr","****", \ltrspltr\msgHdlr("a大100")     ,"untest",__DIR__."/../runtime/"); 
\libspc\log_php("unitestLggr","****",  "----------------------------"    ,"untest",__DIR__."/../runtime/");
\libspc\log_php("unitestLggr","****", \ltrspltr\msgHdlr("abc小100")     ,"untest",__DIR__."/../runtime/");