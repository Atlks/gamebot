<?php

set_exception_handler('ex_hdlr');

error_log(date("yms his").PHP_EOL,3,"dbg745.log");


function ex_hdlr($exception)
{
     ob_start();

    var_dump($exception);

    $msg=ob_get_contents();
    error_log($msg.PHP_EOL,3,"dbg745.log");
    ob_end_flush();
}


file_put_contents(__DIR__."/resp/".$_POST['reqid']."resp.txt",$_POST['txt']);