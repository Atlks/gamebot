<?php

namespace app\common;

use app\common\Lottery;
use app\common\helper;
use app\common\Logs;

class LotteryHash28 extends Lottery
{

    protected $api_url = "https://apilist.tronscanapi.com/api/block";
    protected $http_helper;
    protected $data = false;
    protected $start = false;
    protected $last_opentime = 0;

    public function __construct()
    {
        $this->http_helper = new Helper();
    }

    public function setData($data)
    {
        $this->data = $data;
    }

    // 获取最后彩期
     // 获取最后彩期
     public function get_last_no()
     {
         $log = Logs::get_last_lottery_log();
         $today = date("Y-m-d", time());
         $no = "";//date("md", time());
         
         $tm=time();
 $url="https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=$tm&closest=before&apikey=VASRGU6XT768WSKI2VME6Z8ZK3GK5E3UDT";
         $res = $this->http_helper->http_request($url);
         $res = json_decode($res);
         $hash = $res->result + 12;
         $this->data = [
             'lottery_no' => $hash,
             'hash_no' => $hash, 
         ];
         return $this->data;
     }

    // 获取当前彩期
    public function get_current_no()
    {
        if (!$this->data) return false;
        
        $now = time();
        // 120秒一期
        $elapsed = $now - $this->last_opentime;
        $step = 1 + intval($elapsed / 120);
        $mod = $elapsed % 120;
        if($mod > 14)
            $step += 1;
        $this->data['hash_no'] += 12 * $step;
        $this->data['lottery_no'] = $this->data['hash_no'];
        return $this->data;
    }

   		   
		   // 开奖
           public function draw()
           {
               if (!$this->data) return false;
               while (true) {
                  $HexNum=dechex( $this->data['hash_no']);
                   $t = $this->http_helper->http_request("https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=0x$HexNum&boolean=true&apikey=VASRGU6XT768WSKI2VME6Z8ZK3GK5E3UDT" );
                   $json=json_decode($t,true);
                   return  $json['result']['hash'];
                   sleep(1);
               }
           }
       
           public function drawV2()
           {
               if (!$this->data) return false;
               try {
                     $HexNum=dechex( $this->data['hash_no']);
                   $t = $this->http_helper->http_request("https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=0x$HexNum&boolean=true&apikey=VASRGU6XT768WSKI2VME6Z8ZK3GK5E3UDT");
                     $json=json_decode($t,true);
                   return  $json['result']['hash'];
                 
               } catch (\Exception $e) {
                   trace($e->getMessage(),"debug");
                   return false;
               }
    }
}
