setInterval(function () {
    rdmX = Math.round(Math.random() * 1000);
    console.log(rdmX)
    img = $("<img src='res/coin.png'  width='50' height='50' style='position: absolute;top:0' >");
    img.css("left", rdmX)
    $(img).animate({top: 555}, {duration: 5000, queue: false});

    $("body").append(img)

}, 10000);

//sametime run 同时运行 效果动画
setTimeout(function () {
    $("#btnLg").animate({width: '100%'}, {duration: 3000, queue: false});
}, 0)