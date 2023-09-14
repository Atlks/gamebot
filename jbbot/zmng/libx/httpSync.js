function http_get_jqGet($url, f ,failF) {

    console.log(" [http_get_jqget] " + $url)


    // log_info("\r\n");

    log_info("  [http_get_jqget] url=>" + $url);

    $.get($url, function (data) {
        console.log("[http_get_jqget] ret=>" + $url)
        log_info(" [jqGet] ret=>" + data);
        f(data)
    },"text").fail(failF);
}