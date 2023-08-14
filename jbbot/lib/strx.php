<?php
namespace strspc;


function clrSpace($content)
{
    $content = str_replace(" ", " ", $content);
    $content = str_replace(" ", " ", $content);
    $content = str_replace(" ", " ", $content);
    $content = str_replace('\u00a0', " ", $content);
    $content = str_replace("\\u00a0", "", $content);
    
    require_once __DIR__ . "/../../lib/logx.php";
    $content = str_replace(chr(194) . chr(160), ' ', $content);
    \libspc\log_info("251_614", "bet_str_arr", $content);


    $bet_str_arr = explode(" ", $content);
    return $content;
}


function spltBySpace($content)
{
    $content = str_replace(" ", " ", $content);
    $content = str_replace(" ", " ", $content);
    $content = str_replace(" ", " ", $content);
    $content = str_replace('\u00a0', " ", $content);
    $content = str_replace("\\u00a0", "", $content);
    
   // require_once __DIR__ . "/../../lib/logx.php";
    $content = str_replace(chr(194) . chr(160), ' ', $content);
  //  \libspc\log_info("251_614", "bet_str_arr", $content);


    $bet_str_arr = explode(" ", $content);
    $bet_str_arr_clr = array_filter($bet_str_arr);
    return $bet_str_arr_clr;
}

