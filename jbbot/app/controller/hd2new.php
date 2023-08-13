<?php

declare(strict_types=1);

namespace app\controller;

use think\Request;
use app\model\Setting;
use app\model\BotWords;
use app\common\Game2handlrLogic as Game;
//use app\common\NNGame;
use app\model\Test;
use app\common\Logs;
use app\common\GameLogic;

function var_dumpx()
{
}
//    \app\controller\Handle2
//  app\controller\Handle2.index()
class Handle2
{
    public $Bot_Token = "";
    /**
     * ??????
     *    s=handle/processMessage
     * @return \think\Response
     */
    public function index()
    {
        \think\facade\Log::debug(__METHOD__ . json_encode(func_get_args()));
        $frmNet = file_get_contents('php://input');
        \think\facade\Log::warning($frmNet);
        $update = json_decode(file_get_contents('php://input'), true);
        if (!$update) {
            return false;
        }
        $updateId = $update['update_id'];
        try {
            $this->Bot_Token = Setting::find(1)->s_value;

            if (isset($update["message"])) {
                $msgobj = $update["message"];
                $msgid =  $msgobj['message_id'];
                $logf = __DIR__ . "/../../zmsglg/" . date('Y-m-d H') . "" . $msgid . ".json";
                if (file_exists($logf)) {
                    file_put_contents($logf, "1123");
                    \think\facade\Log::warning(" file exist:" . $logf);
                    //   return;
                }

                file_put_contents($logf, $frmNet);

                //---------------------start..
                // echo 11;
                $ret = $this->processMessage($update["message"]);
                $lineNumStr = "  " . __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  ";
                \think\facade\Log::info($lineNumStr);
                //       \think\facade\Log::info( json_encode $ret); //must cant be obj
                //   var_dump($ret);
                $parameters =  $GLOBALS['bet_ret_prm'];
                $parameters["method"] = "sendMessage";
                //   $parameters["method"] = $method;
                $payload = json_encode($parameters);
                header('Content-Type: application/json');
                header('aaa: application/json');
                header('Content-Length:' . strlen($payload) + 2);
                echo $payload;
                global $errdir;

                $lineNumStr = "  " . __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  " . PHP_EOL;
                file_put_contents($errdir . date('Y-m-d H') . "lg142_hdr2_.log",   $lineNumStr, FILE_APPEND);
                file_put_contents($errdir . date('Y-m-d H') . "lg142_hdr2_.log",  "..bet ret prm ::" . PHP_EOL, FILE_APPEND);
                file_put_contents($errdir . date('Y-m-d H') . "lg142_hdr2_.log",  json_encode($GLOBALS['bet_ret_prm']) . PHP_EOL, FILE_APPEND);
                die();
                return;



                //----------------------send msg
                require_once(__DIR__ . "/../../lib/tlgrmV2.php");
                \think\facade\Log::info($GLOBALS['bet_ret_prm']);
                $urlprm = http_build_query($GLOBALS['bet_ret_prm']);
                \think\facade\Log::info(" urlprm: $urlprm");


                $set = Setting::find(1);

                $GLOBALS['BOT_TOKEN'] = $set->s_value;
                //   $GLOBALS['BOT_TOKEN']
                //   $r = bot_sendmsg_reply_byQrystr(  $GLOBALS['BOT_TOKEN'], $urlprm);
                //  \think\facade\Log::info(" http bot ret: " . $r);
                \think\facade\Log::info("-------------finish------");
                //  die();
                return;
            } elseif (isset($update["callback_query"])) {
                return $this->processCallbackQuery($update["callback_query"]);
            }
        } catch (\Throwable $e) {
            $data = [
                'chat_id' => $updateId,
                'name' => "??????",
                'text' => $e->getMessage(),
            ];
            Test::create($data);
            $exception = $e;
            \think\facade\Log::warning($exception->getFile() . ":" . $exception->getLine());
            \think\facade\Log::warning($exception->getMessage());
            \think\facade\Log::warning(json_encode($e));


            throw $e;
        }
    }

    public function apiRequestWebhook($method, $parameters)
    {
        if (!is_string($method)) {
            error_log("Method name must be a string\n");
            return false;
        }

        if (!$parameters) {
            $parameters = array();
        } else if (!is_array($parameters)) {
            error_log("Parameters must be an array\n");
            return false;
        }

        $parameters["method"] = $method;

        $payload = json_encode($parameters);
        //header('Content-Length:' . strlen($payload));
        //echo $payload;
        //   var_dumpx($parameters);
        //  var_dumpx(json($parameters));
        return json($parameters)->header(['Content-Length' => $payload]);
    }
    public function processMessageTest()
    {
        //   var_dumpx(999);
        $t = file_get_contents('C:\w\sdkprj\732.json');
        $j = json_decode($t, true);
        $ret =   $this->processMessage($j);
        $lineNumStr = "  " . __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  ";
        var_dump($lineNumStr);
        var_dump($ret);

        \think\facade\Log::info($lineNumStr);
        //     \think\facade\Log::info(  $ret );
        var_dump("97L");
        //    var_dumpx(111);
    }


    //  C:\phpstudy_pro\Extensions\php\php8.0.2nts\php.exe C:\????\jbbot\public\index2.php   Game2handlrLogic/testtype   

    //  C:\phpstudy_pro\Extensions\php\php8.0.2nts\php.exe C:\????\jbbot\public\index2.php   handle2/processMessageTest
    //   C:\phpstudy_pro\Extensions\php\php8.0.2nts\php.exe C:\????\jbbot\public\index2.php   handle2/gettypex
    //   C:\phpstudy_pro\Extensions\php\php8.0.2nts\php.exe C:\????\jbbot\public\index2.php   handle2/testDrawV2
    //   C:\phpstudy_pro\Extensions\php\php8.0.2nts\php.exe C:\modyfing\jbbot\public\index2.php   handle2/testGenePic

    // C:\phpstudy_pro\Extensions\php\php8.0.2nts\php.exe C:\modyfing\jbbot\public\index2.php   handle2/testDraw

    //   C:\phpstudy_pro\Extensions\php\php8.0.2nts\php.exe C:\????\jbbot\public\index2.php   handle2/testtype
    public function testGenePic()
    {
        $gmLgcSSc = new    \app\common\GameLogicSsc();
        $gmLgcSSc->SendTrendImage(5);
        // var_dump( $obj->draw());
        // var_dump( $obj->drawV2());
        echo  "public/trend.jpg";
    }

    public function testDraw2_getKaijnumFromEth()
    {
        $obj = new \app\common\LotteryHash28();

        $a['hash_no'] = 17811427;
        $obj->setData($a);
        // var_dump( $obj->draw());
        // var_dump( $obj->drawV2());
    }
    //   C:\phpstudy_pro\Extensions\php\php8.0.2nts\php.exe C:\modyfing\jbbot\public\index2.php   handle2/testDrawV2
    public function testDrawV2()
    {
        echo "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" . PHP_EOL;
        echo "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@." . PHP_EOL;
        echo "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@." . PHP_EOL;

        $gmLgcSSc = new    \app\common\GameLogicSsc();

        $data['hash_no'] = 17811427;
        $data['lottery_no'] = 17811427;
        $gmLgcSSc->lottery->setData($data);
        $gmLgcSSc->hash_no =   $data['hash_no'];
        $gmLgcSSc->lottery_no = $data['hash_no'];



        $gmLgcSSc->DrawLotteryV2("0xajfdklsjfl01690");
        //   $rows =  \think\Facade\Db::name('bet_types')->whereRaw("??='" . $wanfa . "'")->select();
        // $rows  = \app\model\BetTypes::where('??', "?????")->find()->toArray();
        $lineNumStr = __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  ";
        //   \think\facade\Log::info($lineNumStr . " cnt row:" . count($rows));
    }
    //dep
    public function testDraw()
    {
        echo "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@" . PHP_EOL;
        echo "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@." . PHP_EOL;
        echo "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@." . PHP_EOL;
        $data['hash_no'] = 17861938;
        $gmLgcSSc = new    \app\common\GameLogicSsc();
        $gmLgcSSc->lottery->setData($data);
        $gmLgcSSc->hash_no = $data['hash_no'];
        $gmLgcSSc->lottery_no = $data['hash_no'];



        $gmLgcSSc->DrawLottery();
        //   $rows =  \think\Facade\Db::name('bet_types')->whereRaw("??='" . $wanfa . "'")->select();
        // $rows  = \app\model\BetTypes::where('??', "?????")->find()->toArray();
        $lineNumStr = __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  ";
        //   \think\facade\Log::info($lineNumStr . " cnt row:" . count($rows));
    }

    public function testtype()
    {
        //   $rows =  \think\Facade\Db::name('bet_types')->whereRaw("??='" . $wanfa . "'")->select();
        $rows  = \app\model\BetTypes::where('??', "?????")->find()->toArray();
        $lineNumStr = __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  ";
        \think\facade\Log::info($lineNumStr . " cnt row:" . count($rows));
    }

    function gettypex()
    {

        file_put_contents("kkkk.log", 111, FILE_APPEND);
        //  var_dumpx(111);

        $rows =  \think\Facade\Db::name('bet_types00')->whereRaw("??='?????'")->select();
        // $rows=  \think\Db::query('select * from bet_typeds where 1=1');
        //$rows=  \think\Facade\Db::name('bet_types')->select();
        $rows =  \think\Facade\Db::name('bet_types')->whereRaw("??='?????'")->select();

        file_put_contents("351.json", json_encode($rows));
        //  var_dumpx($rows);
        //   var_dumpx($rows[0]['??']);
    }

    public function processMessage($message)
    {
        trigger_error("1111");
        \think\facade\Log::debug(__METHOD__ . json_encode(func_get_args()));
        //  var_dump(__METHOD__ . json_encode(func_get_args()));
        //  var_dump( $this->Bot_Token);

        $bot = new \TelegramBot\Api\BotApi($this->Bot_Token);
        // process incoming message
        $message_id = $message['message_id'];
        $chat_id = $message['chat']['id'];
        //  var_dump( $message );
        //   var_dump( $chat_id );
        //  die();
        $user_id = $message['from']['id'];
        $data = Test::where('chat_id', $message_id)
            ->where('name', '???????')
            ->find();
        if ($data) {
            return;
        }
        $data = [
            'chat_id' => $message_id,
            'name' => "??????",
            'text' => file_get_contents('php://input'),
        ];
        Test::create($data);
        $user_name = '';
        if (isset($message['from']['username']))
            $user_name = $message['from']['username'];
        $full_name = '';
        if (isset($message['from']['first_name']))
            $full_name = $message['from']['first_name'];
        if (isset($message['from']['last_name']))
            $full_name = $full_name . $message['from']['last_name'];


        $lineNumStr = "  " . __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  ";
        \think\facade\Log::info($lineNumStr);
        \think\facade\Log::info($message['text']);

        if (isset($message['text'])) {
            $text = $message['text'];
            if ($text === "???????") {
                $reply_text = "??? " . $message['chat']['title'] . " id: " . $chat_id;
                $params =
                    [
                        'chat_id' => $chat_id,
                        'text' => $reply_text,
                    ];
                return $this->apiRequestWebhook("sendMessage", $params);
                //$bot->sendMessage($chat_id, $reply_text);
            }
        }

        if ($chat_id != Setting::find(2)->value) {

            $lineNumStr = "  " . __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  ";
            \think\facade\Log::info($lineNumStr);
            \think\facade\Log::info(" chat_id:" . $chat_id . " dbchtid:" . Setting::find(2)->value);
            \think\facade\Log::error(" grp id chk fail.");
            /*
            $token = Setting::find(11)->s_value;
            $bot = new \TelegramBot\Api\BotApi($token);
            $ci = Setting::find(12)->value;
            $text = "???????\r\n??id : $chat_id\r\n???:$full_name,$user_name\r\n";
            if (isset($message['chat']['title']))
                $text = $text . "?? : " . $message['chat']['title'] . "\r\n";
            if (isset($message['text']))
                $text = $text . "?? : " . $message['text'];
            $bot->leaveChat($chat_id);
            */
            //$bot->sendMessage($ci, $text);
            return;
        }

        $reply_text = "????";
        if (isset($message['text'])) {
            // incoming text message
            $text = $message['text'];
            //  $cmd= ' return new '. parse_ini_file(__DIR__."/../../.env")['handle_game'].'();';
            //  var_dumpx($cmd);
            //  $game=  eval($cmd);
            $game = new \app\common\Game2handlrLogic();

            //  $game   new app\common\GameSsc();
            var_dumpx($game);

            if (empty($game->getPlayer($user_id))) {
                $game->createPlayer($user_id, $full_name, $user_name);
            }

            $game->receive($message_id);
            //start bet

            $lineNumStr = "  " . __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  ";
            \think\facade\Log::info($lineNumStr);
            \think\facade\Log::info(" game->player_exec()");
            $reply_text =  $game->player_exec($text, Setting::find(3)->value == 1);

            $lineNumStr = "  " . __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  ";
            \think\facade\Log::info($lineNumStr);
            \think\facade\Log::info(" reply_text ::" . $reply_text);
            var_dumpx($reply_text);   //"??????"
            \think\facade\Log::info("350pm");
            if (!empty($reply_text)) {

                if ($game->sendTrend()) {
                    \think\facade\Log::info("game->sendTrend");
                    $cfile = new \CURLFile(app()->getRootPath() . "public/trend.jpg");
                    $params = [
                        'chat_id' => $chat_id,
                        'photo' => $cfile,
                    ];
                    $bot->sendPhoto($chat_id, $cfile, null, null, $message_id);
                    //$resp =  $this->apiRequestWebhook("sendPhoto", $params);
                    //$resp->contentType("multipart/form-data");
                } else {
                    \think\facade\Log::info("game->sendTrend else");
                    $keyboard = null;
                    if ($game->action()) {
                        $keyboard_array = json_decode(BotWords::where('Id', 1)->find()->Button_Text);

                        \think\facade\Log::info("345pm");
                        $lineNumStr = "  " . __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  ";
                        \think\facade\Log::info($lineNumStr);
                        \think\facade\Log::info(json_encode($keyboard_array,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));

                        $keyboard = new \TelegramBot\Api\Types\Inline\InlineKeyboardMarkup($keyboard_array);
                    } else if ($game->keyboard) {
                        \think\facade\Log::info("345pm2");
                        $lineNumStr = "  " . __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  ";
                        \think\facade\Log::info($lineNumStr);
                        \think\facade\Log::info(json_encode($game->keyboard,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT));
                        $keyboard = new \TelegramBot\Api\Types\Inline\InlineKeyboardMarkup($game->keyboard);
                    }
                    //keyboard just menu list
                    //    var_dumpx( $keyboard); //null
                    $params =
                        [
                            'chat_id' => $chat_id,
                            'text' => $reply_text,
                            //'message_thread_id' => null,
                            'parse_mode' => is_null($game->parse_mode()) ? "" : $game->parse_mode(),
                            'disable_web_page_preview' => true,
                            'reply_to_message_id' => (int)$message_id,
                            'reply_markup' => is_null($keyboard) ? "" : $keyboard->toJson(),
                            'disable_notification' => false,
                        ];

                    $lineNumStr = "  " . __FILE__ . ":" . __LINE__ . " f:" . __FUNCTION__ . " m:" . __METHOD__ . "  ";
                    \think\facade\Log::info($lineNumStr);
                    \think\facade\Log::info(json_encode($params));
                    $GLOBALS['bet_ret_prm'] = $params;
                    //$bot->sendMessage($chat_id, $reply_text, $game->parse_mode(), false, null, $message_id, $keyboard);
                    return $this->apiRequestWebhook("sendMessage", $params);
                }
            }
        }
    }




    private function processCallbackQuery($callback_query)
    {
        $from = $callback_query['from']['id'];
        $func = $callback_query['data'];
        $data = Test::where('chat_id', $callback_query['id'])
            ->where('name', '???????')
            ->find();
        if ($data) {
            return;
        }
        $data = [
            'chat_id' => $callback_query['id'],
            'name' => "??????",
            'text' => file_get_contents('php://input'),
        ];
        Test::create($data);
        $res = "";
        if (!empty($func)) {
            $res = $this->$func($from);
        }
        if (!empty($res)) {
            //$bot = new \TelegramBot\Api\BotApi($this->Bot_Token); 
            //$bot->answerCallbackQuery($callback_query['id'], $res, true);
            return $this->apiRequestWebhook("answerCallbackQuery", [
                'callback_query_id' => $callback_query['id'],
                'text' => $res,
                'show_alert' => true,
            ]);
        }
    }

    private function query_balance($from)
    {
        $game = new Game($from);
        return $game->callBalance();
    }

    private function query_records($from)
    {
        $game = new Game($from);
        return $game->callLastRecord();
    }

    private function query_rebates($from)
    {
        $game = new Game($from);
        return $game->queryRollover();
    }
}
