<?php


//   http://localhost/public/web/index.php?path=aaabbb
$rand = rand();
file_put_contents(__DIR__."/req/". $rand .".txt",$_SERVER['QUERY_STRING']);

while(true)
{


    $filename = __DIR__ . "/resp/" . $rand . ".txtresp.txt";
    if(file_exists($filename))
    {
        echo file_get_contents($filename);
        break;

    }

        
    usleep(100*1000);
}