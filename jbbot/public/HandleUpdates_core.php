<?php


// php public/hd2test.php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2019 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
//    php public/HandleUpdates.php
// [ 应用入口文件 ]  HandleUpdates/index
namespace think;

require __DIR__ . '/../vendor/autoload.php';

$_GET['s']='HandleUpdates2/index';

require_once __DIR__."/../lib/iniErrCathr.php";


// 执行HTTP应用并响应
$http = (new App())->http;

$response = $http->run();

\think\facade\Log::ckbtInfo(date('Y-m-d H-i-s') );

$response->send();

$http->end($response);
