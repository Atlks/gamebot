<?php

require_once  __DIR__."/logx.php";
require_once  __DIR__."/ex.php";
loadErrHdr();

// ******************  use age::   require __DIR__ . "/../lib/iniAutoload.php";
//if($GLOBALS['cfgOpt'])
$cfgfile=parse_ini_file(__DIR__."/../.env")['cfgfilex'];
include_once  __DIR__."/../".$cfgfile;
require_once  __DIR__."/iniErrCathr.php";  //alread empty
require_once  __DIR__."/autoloadx.php";
$libnames = "dsl,db,http,file,fun,betstr,dwijyo,ex,json,kaijx,logx,ltrx,str,strcls,strx,tlgrmV2,betstr,encodex,lotrySscV2,log23";
iniAutoload820($libnames);





