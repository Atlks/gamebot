<?php

namespace app;

use think\console\Command;
use think\console\Input;
use think\console\input\Argument;
use think\console\input\Option;
use think\console\Output;
use app\model\Setting;
use think\view\driver\Php;

define('BOT_TOKEN', '6426986117:AAFb3woph_1zOWFS5cO98XIFUPcj6GqvmXc');
define('chat_id', '-1001903259578');
//$bot_token = "6426986117:AAFb3woph_1zOWFS5cO98XIFUPcj6GqvmXc";  //sscNohk
//$chat_id = -1001903259578;

//$text = "--------本期下注玩家---------" . "\r\n";
$text = "=====本期中奖名单======";
//$text = str_replace("-", "\-", $text);  //  tlgrm txt encode prblm 
//$text = str_replace("-", "\=", $text);
var_dump($text);
require_once(__DIR__."/../lib/tlgrmV2.php");
//bot_sendMsgTxtMode($text, BOT_TOKEN, chat_id);
//die();
function sendmessage($text)
{
    //  C:\phpstudy_pro\Extensions\php\php8.0.2nts\php.exe C:\项目最新\jbbot\public\index2.php   gamelogic/start2
    // must start2 ..bcs indx inm router,so cant acc
    echo   $text . PHP_EOL;
}
class main extends Command
{
    protected function configure()
    {
        // 指令配置
        $this->setName('cmd2')
            ->setDescription('the cmd2 command');
    }


    protected function execute(Input $input, Output $output)
    {
        // 指令输出
        $output->writeln('cmd2');
        while (true) {
            try {


                // echo   iconv("gbk","utf-8","php中文待转字符");//把中文gbk编码转为utf8
                main_process();
            } catch (\Throwable $exception) {
                $lineNumStr = __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  ";
                //   \think\facade\Log::info($lineNumStr);
                \think\facade\Log::error("----------------errrrr---------------------------");
                \think\facade\Log::error("file_linenum:" . $exception->getFile() . ":" . $exception->getLine());
                \think\facade\Log::error("errmsg:" . $exception->getMessage());
                var_dump($exception);

                throw $exception; // for test
            }
            sleep(1);
        }
    }
}
global $lottery_no;   // ="glb no";
static $lottery_no = "...";
$lottery_no = "...";
function    main_process()
{
    global $lottery_no;
    $lottery_no = 111;
    // var_dump(  $lottery_no);die();
    global  $bot_token;
    var_dump($bot_token);
    var_dump($GLOBALS['bot_token']);
    var_dump(BOT_TOKEN);

    //  bot_sendMsg("----",BOT_TOKEN,chat_id);die();

    //  die();
    echo "-------------------------开始投注----" . PHP_EOL;
    $lineNumStr = __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  ";
    \think\facade\Log::info($lineNumStr);
    $bot_words = \app\model\BotWords::where('Id', 1)->find();
    global $lottery_no;

    // $lottery_no = 1133;
    // 下注时间 1分40s
    $bet_time = Setting::find(6)->value; //1*60*1000;
    $bet_time_sec = $bet_time / 1000;
    //  $bet_time_sec = 10;
    var_dump(' $bet_time_sec:' . $bet_time_sec);   // $bet_time:105000     105s   1分40s
    startBet();
    sleep($bet_time_sec);





    //  $gl->game_state = 'show_waring';
    //-----------封盘警告时间

    $waring_time = Setting::find(7)->value; //30*1000;
    $waring_time_sec = $waring_time / 1000;
    fenpan_wanrning($waring_time_sec);
    sleep($waring_time_sec);


    //-------------封盘时间
    $stop_bet_time = Setting::find(8)->value; //10*1000;
    $stop_bet_time_sec = $stop_bet_time / 1000;    //  20s
    //  $stop_bet_time_sec = 3;
    // 1133期停止下注==20秒后开奖
    $stop_bet_str = "console:" . $lottery_no . "期停止下注==" . $stop_bet_time / 1000 . "秒后开奖\n";
    sendmessage($stop_bet_str);
    var_dump(' $stop_bet_time_sec:' . $stop_bet_time_sec);
    fenpan_stop();


    sleep($stop_bet_time_sec);


    //---------------------开奖流程
    $draw_str = "console:" .  $lottery_no . "期开奖中..console";
    sendmessage($draw_str);

    kaij_draw_prcs();

    $show_str = "console:" . $lottery_no . "期开奖完毕==开始下注 \r\n";
    sendmessage($show_str);
    // $gl->DrawLottery();

}

function  fenpan_wanrning($waring_time_sec)
{

    $bot_words = \app\model\BotWords::where('Id', 1)->find();
    // $waring_time_sec = 5;
    // 1133期还有50秒停止下注
    global $lottery_no;
    $waring_str = "console:" . $lottery_no . "期还有" . $waring_time_sec . "秒停止下注\r\n";
    sendmessage($waring_str);
    var_dump(' $waring_time_sec:' . $waring_time_sec);  ///   $waring_time_sec:50
    $words = $bot_words->StopBet_Waring;
    $text = $words;

    echo   $text . PHP_EOL;
    bot_sendMsgTxtMode($text, BOT_TOKEN, chat_id);
    //  $bot->sendmessage($chat_id, $text);
}

function kaij_draw_prcs()
{

    global $lottery_no;
    $ltr =   new \app\common\LotteryHashSsc();
    $blkHash = $ltr->drawV3($lottery_no);
    $text = "第" . $lottery_no . "期开奖结果" . "\r\n";

    $text = $text . "本期区块号码:" . $lottery_no . "\r\n"
        . "本期哈希值:\r\n" . $blkHash . "\r\n";
    sendmessage($text);
    //  $text .= $this->result . "\r\n";
    sendmessageBotNConsole($text);

    $gl = new   \app\common\GameLogicSsc(null);  //comm/gamelogc
    $gl->lottery_no = $lottery_no;
    $echoTxt = $gl->DrawLotteryV2($blkHash);    // if finish chg stat to next..
    bot_sendMsgTxtMode($echoTxt, BOT_TOKEN, chat_id);


    $gl ->SendTrendImage(20);// 生成图片
    $cfile = new \CURLFile(app()->getRootPath() . "public/trend.jpg");
    $bot = new \TelegramBot\Api\BotApi(BOT_TOKEN);
    $bot->sendPhoto(chat_id, $cfile);
  
    \think\facade\Db::close();
}



function fenpan_stop()
{
    $bot_words = \app\model\BotWords::where('Id', 1)->find();
    $words = $bot_words->StopBet_Notice;
    $text = $words;
    echo   $text . PHP_EOL;
    sendmessageBotNConsole($text);
    global $lottery_no;
    $records = \app\common\Logs::getBetRecordByLotteryNo($lottery_no);
    $text = "--------本期下注玩家---------" . "\r\n";
    $sum = 0;
    foreach ($records as $k => $v) {
        $text = $text . $v['UserName'] . "【" . $v['UserId'] . "】" . $v['BetContent'] . "\r\n";
        $sum += $v['Bet'];
    }
    echo   $text . PHP_EOL;
    $msg = str_replace("-", "\-", $text);  //  tlgrm txt encode prblm  BCS is markdown mode
    bot_sendMsg($msg, BOT_TOKEN, chat_id);
    // sendmessageBotNConsole($text);

    $text = "第" . $lottery_no . "期 [点击官方开奖](https://etherscan.io/block/" . $lottery_no . ")";
    sendmessageBotNConsole($text);
    \think\facade\Db::close();
}

function startBet()
{
    //-------------------- start bet
    $cfile = new \CURLFile(app()->getRootPath() . "public/static/start.jpg");
    global $lottery_no;
    $ltr =   new \app\common\LotteryHashSsc();
    $lottery_no = $ltr->get_current_noV2()['lottery_no'];

    $lineNumStr = __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  ";
    //   \think\facade\Log::info($lineNumStr);
    \think\facade\Log::info(" get_current_noV2: " . $lottery_no);


    $today = date("Y-m-d", time());
    $log = \app\common\Logs::addLotteryLog($today, $lottery_no, $lottery_no);


    var_dump($log);
    $lineNumStr = __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  ";
    //   \think\facade\Log::info($lineNumStr);
    \think\facade\Log::info("add new lotry qihao " . $lineNumStr);
    \think\facade\Log::info(json_encode($log));



    $text = $lottery_no . "期 开始下注!\r\n";

    $bot_words = \app\model\BotWords::where('Id', 1)->find();
    $words = $bot_words->Start_Bet;
    $text = $text . $words;

    $elapsed = Setting::find(6)->value + Setting::find(7)->value;
    $stop_time = date("Y-m-d H:i:s", time() + $elapsed / 1000);
    $text = $text . "\n\n封盘时间：$stop_time\n";
    $elapsed +=  Setting::find(8)->value;
    $draw_time = date("Y-m-d H:i:s", time() + $elapsed / 1000);
    $text = $text . "开奖时间：$draw_time\n";
    $text = \app\common\Helper::replace_markdown($text);
    $text = $text . "开奖区块号 ：[" . $lottery_no . "](https://etherscan.io/block/" . $lottery_no . ")";
    echo   $text . PHP_EOL;

    $lineNumStr = __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  ";
    //   \think\facade\Log::info($lineNumStr);
    \think\facade\Log::info($lineNumStr);
    \think\facade\Log::info($text);
    //sendmessageBotNConsole($text);
   
    $bot = new \TelegramBot\Api\BotApi(BOT_TOKEN);
      $bot->sendPhoto(chat_id, $cfile, $text, null, null, null, false, "MarkdownV2");
    \think\facade\Db::close();
}

