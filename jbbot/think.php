#!/usr/bin/env php
<?php
namespace think;

echo  111;
// 命令行入口文件
// 加载基础文件
require __DIR__ . '/vendor/autoload.php';

// 应用初始化
(new App())->console->run();

//echo  9999;


//C:\phpstudy_pro\Extensions\php\php8.0.2nts\php.exe C:\modyfing\jbbot\think.php   