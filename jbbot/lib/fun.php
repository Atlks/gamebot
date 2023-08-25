<?php


function function_existsx($obj)
{
    if(is_array($obj))
        return false;

    return function_exists($obj);

}


//emhance log ex
function call_user_func_arrayx( $fun123,  $args)
{
    var_dump(__METHOD__ . json_encode(func_get_args(), JSON_UNESCAPED_UNICODE));
    log23::info(__LINE__ . __METHOD__, "Arg", func_get_args());
    try {
        call_user_func_array($fun123, $args);

    } catch (\Throwable $exception) {
        var_dump($exception);
        log23::err(__LINE__ .__METHOD__, "arg", func_get_args());
        log23::err(__LINE__ .__METHOD__, "e", $exception);

    }
}
