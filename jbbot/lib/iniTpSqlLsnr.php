<?php

try{
    \think\facade\Db::listen(function($sql, $runtime, $master) {
        // 进行监听处理
        if(str_contains($sql,"SHOW FULL COLUMNS"))
            return;
        log_info_toReqchain("","sql",$sql);
    });
}catch (\Throwable $e)
{

    log23:err("iniautoload.hp","e",$e);
}

