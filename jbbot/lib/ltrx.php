<?php



class ltrx
{

    static  function getAmt_frmBetStr($str)
    {
        $str = trim($str);
        //   $str = $msg['text'];
        if (preg_match('/(\d+)$/', $str, $match)) {
            $number = $match[0];
        }
        return  $number;
    }

}