<?php



  // php   app/common/timer.php




function timerx_start()
{

    require_once __DIR__ . "/../../lib/iniAutoload.php";
    log23::Timerinfo(__METHOD__, "args", json_encode(func_get_args(), JSON_UNESCAPED_UNICODE));

    // $this->putUrl();
   // while (true):
        try {
            $dir = sprintf("%s/../../pushmsg/", __DIR__);

            $list = scandir($dir);
//ob_start();
            var_dump($list);
            log23::Timerinfo(__METHOD__, "filelist", json_encode($list, JSON_UNESCAPED_UNICODE));

            $a = [];
            foreach ($list as $fil_basename):

                if (basename($fil_basename) == ".gitkeep" || basename($fil_basename) == "." || basename($fil_basename) == "..")
                    continue;
                if ($fil_basename == "oked")
                    continue;

                item_task_process($fil_basename);

            endforeach;
        } catch (\Exception $exception) {

            var_dump($exception);
            log23::Timererr(__METHOD__, "", __METHOD__ . json_encode(func_get_args(), JSON_UNESCAPED_UNICODE));
            log23::Timererr(__METHOD__, "e", $exception);

        }
        var_dump(11);
        usleep(1000 * 1000);  // 1000ms
     //   break;
   // endwhile;

}


function item_task_process($fil_basename)
{
    require_once __DIR__ . "/../../lib/iniAutoload.php";
    $dir = sprintf("%s/../../pushmsg/", __DIR__);

    try {
        log23::Timerinfo(__METHOD__, "args", json_encode(func_get_args(), JSON_UNESCAPED_UNICODE));


        //   $this->item_task_process($file);


      //  var_dump($fil_basename);

        $filpath = sprintf("%s%s", $dir, $fil_basename);
        $txt = file_get_contents($filpath);


        $obj = json_decode($txt, true);
        $next_exe_tmstp = $obj['next_exe_tmstp'];


        if (time() > $next_exe_tmstp) {
            $dir_oked = sprintf("%soked/", $dir);
            if (!file_exists($dir_oked))
                mkdir($dir_oked);
            rename($filpath, $dir_oked . $fil_basename);

            log23::Timerinfo(__METHOD__, "****************redy to exe,rd txt=>" . $txt);
            var_dump($fil_basename);
            var_dump( $txt);
            $hdlr = $obj['hdlr'];
            $arr = explode("/", $hdlr);
            $classname = $arr[0];
            $meth = $arr[1];
            $cls = new $classname();
            $cls->$meth($obj);
        }

    } catch (\Exception $exception) {
        // log23::Timererr(__METHOD__,$exception)
        log23::Timererr(__METHOD__, "", json_encode(func_get_args(), JSON_UNESCAPED_UNICODE));
        log23::Timererr(__METHOD__, "e", $exception);
        // \think\facade\Log::error(__METHOD__.json_encode(func_get_args(),JSON_UNESCAPED_UNICODE));


    }

}

//   call_user_func(array($cls,$meth),$obj);
//                if($meth=="putUrl")
//                {
//                    $cls->putUrl   ( $obj);
//                }
