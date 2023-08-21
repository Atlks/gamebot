<?php


$list = scandir(__DIR__ . "/req/");
ob_start();
var_dump($list);


$a = [];
foreach ($list as $fil)
    {
        if(basename($fil)==".gitkeep" || basename($fil)=="." || basename($fil)=="..")
            continue;
        var_dump($fil);


        $req["reqid"] = basename($fil);    //1602482031.txt"
        $req["QUERY_STRING"] = file_get_contents(__DIR__."/req/".$fil);

        $a[] = $req;
        rename(__DIR__."/req/".$fil,__DIR__."/reqPrced/".$fil);

    }

var_dump($a);

ob_end_clean();
echo json_encode($a);