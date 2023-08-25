<?php
function file_mov(string $filpath, string $dir_oked): void
{
    if (!file_exists($dir_oked))
        mkdir($dir_oked);

    $fil_basename=basename( $filpath);
    rename($filpath, $dir_oked . $fil_basename);
}

function  file_put_contentsx($file,$dt,$flg=FILE_APPEND)
{


    var_dump(__METHOD__ . json_encode(func_get_args(), JSON_UNESCAPED_UNICODE));
    log23::info(__LINE__ . __METHOD__, "Arg", func_get_args());
    try {
        file_put_contents($file,$dt,$flg);
    } catch (\Throwable $exception) {
        var_dump($exception);
        log23::err(__LINE__ .__METHOD__, "arg", func_get_args());
        log23::err(__LINE__ .__METHOD__, "e", $exception);

    }


}

function file_get_contentsx($file)
{
    var_dump(__METHOD__ . json_encode(func_get_args(), JSON_UNESCAPED_UNICODE));
    log23::info(__LINE__ . __METHOD__, "Arg", func_get_args());
    try {
        file_get_contents($file);
    } catch (\Throwable $exception) {
        var_dump($exception);
        log23::err(__LINE__ .__METHOD__, "arg", func_get_args());
        log23::err(__LINE__ .__METHOD__, "e", $exception);

    }

}

//function file_mov(string $filpath, string $dir_oked): void
//{
//    if (!file_exists($dir_oked))
//        mkdir($dir_oked);
//
//    $fil_basename=basename( $filpath);
//    rename($filpath, $dir_oked . $fil_basename);
//}