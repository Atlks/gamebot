<?php


function http_query_toArr($str){
$arr_ret=[];
    $arr=explode("&",$str);
    foreach ($arr as $item)
    {
        $arr311=explode("=",$item);
        $key=$arr311[0];
        $key=trim($key);
        $v=$arr311[1];
        $v=trim($v);
        $arr_ret[]=    array($key=> $v) ;
    }
    return $arr_ret;
}

function urlencode_part($str){

    $arr=str_split("&");
    foreach ($arr as $item)
    {
        $arr=str_split("=");
    }
}

//-----------------------------------core .fun lib---------------------------
//检查字符串是否以特定的子字符串开头
function startsWith($string, $startString)
{
    $len = strlen($startString);
    return (substr($string, 0, $len) === $startString);
}

//支持中文的splt ,,ori splt only eng
function str_splitX($str)
{
    //support chinese char,,,,  str_split not spt chins char
    return  preg_split('/(?<!^)(?!$)/u', $str);
}


//echo " str ddl:".str_delNum("后顺333");
function str_delNum($str)
{
    \log23::debug(__METHOD__,"func_get_args",func_get_args() );
//    if( class_exists('\think\facade\Log'))
//    \think\facade\Log::debug(__METHOD__ . json_encode(func_get_args(), JSON_UNESCAPED_UNICODE));
    return preg_replace('/[\d]/', '', $str);
}

// order_str as char arr
function order_str($num)
{
    // echo 1151;
    print_rx("num:" . $num . "    ");
    $a = str_split($num);
    print_rx($a);
    sort($a);
    //  echo " aft asort:";
    print_rx($a);
    // die();
    $s = implode($a);
    return $s;
}
