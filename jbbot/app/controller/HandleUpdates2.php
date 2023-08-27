<?php

declare(strict_types=1);

namespace app\controller;

use app\model\Setting;
use app\model\Test;
use app\common\Game2handlrLogic as Game;

use app\model\BotWords;
use TelegramBot\Api\Exception;
use think\view\driver\Php;
use function libspc\log_err_tp;

class HandleUpdates2 {


  public function dbEcatch() {
    //test db err catch

    include_once __DIR__."/../../lib/iniAutoload.php";
    $rows =dsl__execSql_tp(function () {
      return \think\facade\Db::name('aaa')->whereRaw("玩法=12")->select();
    });
//    $rows=\think\facade\Db::name('aaa')->whereRaw("玩法=12")->select();
    var_dump( $rows[0]??"");
    var_dump(94752);

  }


    // $rows=$f();
    // \think\facade\Log::info("262L rows count:" . count($rows));


  public function index() {

    //  echo 999;die();
    $bot_token = Setting::find(18)->s_value;
    $bot = new \TelegramBot\Api\BotApi($bot_token);
    $last_id = 0;
    while (true) {
      //include_once __DIR__ ."/../../lib/iniAutoload.php";
      //echo  date('Y-m-d H-i-s').PHP_EOL;
      //\libspc\log_info_php(__METHOD__,"", date('Y-m-d H-i-s'),"chkbt_runlog");
      try {
        $res = $bot->getUpdates($last_id, 100, 10, ["message", "callback_query"]);
        //var_dump($res);
        \think\facade\Log::chkbtInfo(date('Y-m-d H-i-s'));
        \think\facade\Log::chkbtInfo(json_encode($res, JSON_UNESCAPED_UNICODE));
        foreach ($res as $update) {

          \think\facade\Log::chkbtInfo(json_encode($update, JSON_UNESCAPED_UNICODE));
          $last_id = $update->getUpdateId();
          $message = $update->getMessage();
          $callback_query = $update->getCallbackQuery();
          $check_id = 0;
          if ($message) {
            $check_id = $message->getMessageId();
          } elseif ($callback_query) {
            $check_id = $callback_query->getId();
          }

          $data = Test::where('chat_id', $check_id)
            ->where('name', "小飞机漏发")
            ->find();
          // chk bot alrelady insert  ,,pass

          if ($data) {
            $last_id += 1;
            continue;
          }


          //chkbot recv
          $data = [
            'chat_id' => $check_id,
            'name' => "检测程序接收",
            'text' => $update->toJson(),
          ];
          Test::create($data);
          sleep(1);  //---------chk webhk is rev msg,,wait wbhk to prcs
          $data = Test::where('chat_id', $check_id)
            ->where('name', "网络钩子接收")
            ->find();
          //如果find ,,webhk already rev process.just continue..beir zoyao process
          if (empty($data)) {
            sleep(2);
            $data = Test::where('chat_id', $check_id)
              ->where('name', "网络钩子接收")
              ->find();
            if (empty($data)) {
              //sleep(1);
              // 如果不抛异常就保存    小飞机漏发信息  chkbt recv
              $data = [
                'chat_id' => $check_id,
                'name' => "小飞机漏发信息",
                'text' => $update->toJson(),
              ];
              Test::create($data);
              \think\facade\Log::chkbtInfo(json_encode($data, JSON_UNESCAPED_UNICODE));
              //$bot_token = Setting::find(1)->s_value;
              //$game_bot = new \TelegramBot\Api\BotApi($bot_token);
              $message = $update->getMessage();
              $callback_query = $update->getCallbackQuery();
              if ($message) {
                $this->processMessage($message, $bot);
              } elseif ($callback_query) {
                if ($callback_query->getMessage()) {
                  $this->processCallbackQuery($callback_query, $bot);
                }
              }

            }
          }
        }//end foreach
        $last_id += 1;
      } catch (\Throwable $e) {
        if ($e->getMessage() == "Connection timed out") {
          \think\facade\Log::chkbtWarn($e->getMessage());
        }

        if ($e->getMessage() !== "Connection timed out" && !preg_match('/^Operation/', $e->getMessage())) {
          $data = [
            'chat_id' => $last_id,
            'name' => "检查循环报错22",
            'text' => $e->getMessage(),
          ];
          Test::create($data);
          $last_id += 1;
          // log23::ckbtErr()
          //\libspc\log_err_tp($e,__METHOD__,"chkbtErr");
          // \think\facade\Log::ckbtErr(  $e->getMessage() );
        }


      }
      //usleep(10*1000); // 500ms   not need slpp ,bls long conn is 10s
      //break;
    }  //finish while
  }


  //lookg not find use this
  public function update() {
    $bot_token = Setting::find(1)->s_value;
    $bot = new \TelegramBot\Api\BotApi($bot_token);
    $last_id = 0;
    $count = 30;
    $curr_count = $count;
    $next_time = 0;
    $got = false;
    $error = null;
    while (true) {
      try {
        if ($curr_count != 1) {
          $data1 = [
            'name' => "获取upates",
            'chat_id' => $last_id,
            'text' => "offset:" . $last_id,
          ];
          Test::create($data1);
          $res = $bot->getUpdates($last_id, 100, 10, ["message", "callback_query"]);
          //$curr_count -= 1;
          $start_time = time();
          foreach ($res as $update) {
            //echo $update->getUpdateId() . "<br/>";
            $error = $update;
            $got = true;
            $data = [
              'name' => "接收",
              'chat_id' => $update->getUpdateId(),
              'text' => $update->toJson(),
            ];
            Test::create($data);
            $last_id = $update->getUpdateId();
            $message = $update->getMessage();
            $callback_query = $update->getCallbackQuery();
            if ($message) {
              $date = $message->getDate();
              if ($date > $next_time) {
                $next_time = $date + 60;
                $curr_count = $count;
              }
              $this->processMessage($message, $bot);
            } elseif ($callback_query) {
              if ($callback_query->getMessage()) {
                $date = $callback_query->getMessage()->getDate();
                if ($date > $next_time) {
                  $next_time = $date + 60;
                  $curr_count = $count;
                }
                $this->processCallbackQuery($callback_query, $bot);
              }
            }
            //$curr_count -= 1;
            $error = null;
            $last_id += 1;
          }
          if ($got) {
            $s = Setting::find(17);
            $s->value = $last_id;
            $s->Save();
            $got = false;
            $elapse_time = time() - $start_time;
            if ($elapse_time < 2)
              sleep(2 - $elapse_time);
          }
        } else {
          $curr_time = time();
          if ($curr_time > $next_time) {
            $next_time += 60;
            $curr_count = $count;
          }
        }
      } catch (\Throwable $e) {
        if ($e->getMessage() !== "Connection timed out") {
          if ($error) {
            $data = [
              'name' => "异常获取1",
              'chat_id' => $error->getUpdateId(),
              'text' => $e->getMessage(),
            ];
            $last_id = $error->getUpdateId();
            $last_id += 1;
            Test::create($data);
            $s = Setting::find(17);
            $s->value = $last_id;
            $s->Save();
          } else {
            $data = [
              'name' => "异常获取2",
              'chat_id' => $last_id,
              'text' => $e->getMessage(),
            ];
            Test::create($data);
          }
        }   //endif
        //   \libspc\log_err($e,__METHOD__,$GLOBALS['$errdir'],"err");

      }
    }
    // not use
    return;
  }

  public function getFullName($user) {
    $fullname = $user->getFirstName() ? $user->getFirstName() : "";
    $fullname = $user->getLastName() ? $fullname . $user->getLastName() : $fullname . "";
    return $fullname;
  }

  private function processMessage($message, $bot) {
    // process incoming message
    $message_id = $message->getMessageId();
    $chat = $message->getChat();
    $chat_id = $chat->getId();
    $from = $message->getFrom();
    $user_id = $from->getId();

    $user_name = $from->getUsername();
    $full_name = $this->getFullName($from);
    $text = $message->getText();
    if ($text) {

      if ($text === "获取我的群信息") {
        $reply_text = "我的群 " . $chat->getTitle() . " id: " . $chat_id;
        $bot->sendMessage($chat_id, $reply_text);
      }
    }

    if ($chat_id != Setting::find(2)->value) {
      return;
    }

    $reply_text = "默认信息";
    if ($text) {
      // incoming text message
      $game = new Game();

      if (empty($game->getPlayer($user_id))) {
        $game->createPlayer($user_id, $full_name, $user_name);
      }

      $game->receive($message_id);
      $reply_text = $game->player_exec($text, Setting::find(3)->value == 1);

      if (!empty($reply_text)) {

        if ($game->sendTrend()) {

          $cfile = new \CURLFile(app()->getRootPath() . "public/trend.jpg");
          $bot->sendPhoto($chat_id, $cfile, null, null, $message_id);
        } else {
          $keyboard = null;
          if ($game->action()) {
            $keyboard_array = json_decode(BotWords::where('Id', 1)->find()->Button_Text);
            $keyboard = new \TelegramBot\Api\Types\Inline\InlineKeyboardMarkup($keyboard_array);
          }
          try {
            $bot->sendMessage($chat_id, $reply_text, $game->parse_mode(), true, null, $message_id, $keyboard);
          } catch (\Exception  $exception) {
            \think\facade\Log::chkbtWarn(__METHOD__);
            \think\facade\Log::chkbtWarn($exception->getMessage());
            \think\facade\Log::chkbtWarn(json_encode($message, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));

          }

        }
      }
    }
  }

  private function processCallbackQuery($callback_query, $bot) {
    $from = $callback_query->getFrom()->getId();
    $func = $callback_query->getData();
    $res = "";
    if (!empty($func)) {
      $res = $this->$func($from);
    }
    if (!empty($res)) {
      $bot->answerCallbackQuery($callback_query->getId(), $res, true);
    }
  }

  private function query_balance($from) {
    $game = new Game($from);
    return $game->callBalance();
  }

  private function query_records($from) {
    $game = new Game($from);
    return $game->callLastRecord();
  }

  private function query_rebates($from) {
    $game = new Game($from);
    return $game->queryRollover();
  }


}
