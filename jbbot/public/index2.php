<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2019 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// [ 应用入口文件 ]
namespace think;

//$_GET['s']='gamelogic/fff';
//      //echo $text;   http://localhost:888/index2.php?s=gamelogic/fff
//  C:\phpstudy_pro\Extensions\php\php8.0.2nts\php.exe C:\项目最新\jbbot\public\index2.php  gamelogic/fff
//   C:\phpstudy_pro\Extensions\php\php8.0.2nts\php.exe C:\项目最新\jbbot\public\index2.php   handle/processMessageTest
//   $fname = $_SERVER['argv'][1];
$_GET['s']= $_SERVER['argv'][1];
error_reporting(E_ALL ^(E_NOTICE | E_WARNING)); 
 

require __DIR__ . '/../vendor/autoload.php';

 
error_reporting(E_ALL ^(E_NOTICE | E_WARNING)); 
define('NO_CACHE_RUNTIM',True);


// 执行HTTP应用并响应
$http = (new App())->http;

$response = $http->run();

$response->send();

$http->end($response);
