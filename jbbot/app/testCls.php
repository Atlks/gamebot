<?php
namespace app;

use think\console\Command;
use think\console\Input;
use think\console\input\Argument;
use think\console\input\Option;
use think\console\Output;
use app\model\Setting;
use think\view\driver\Php;

//   C:\phpstudy_pro\Extensions\php\php8.0.2nts\php.exe C:\modyfing\jbbot\think swoole2 
class testCls extends Command
{
    protected function configure()
    {
        // 指令配置
        $this->setName('testClsNm')
            ->setDescription('the cmd2 command');
    }

    protected function execute(Input $input, Output $output)
    {
        // 指令输出
      //  $output->writeln('cmd2');
      $gmLgcSSc = new   \app\common\GameLogicSsc();  //comm/gamelogc
      $gmLgcSSc->SendTrendImage(7); // 生成图片
      $cfile = new \CURLFile(app()->getRootPath() . "public/trend.jpg");
      echo 000;
    }
}
