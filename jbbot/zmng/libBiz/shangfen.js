function shangfen1236() {






    authChk()
    var r = confirm("确定要给玩家上分吗");
    if (r == true) {

    } else {
        return
    }

    // var winlogger = require(libdir + "logger");

    var funname = arguments.callee.name;
    // arguments.callee.name
    arg = JSON.stringify(arguments);
    console.log("*********=>" + funname + arg);
    log_info("*********=>" + funname + arg);
    $("#loaddiv").show()
    // setTimeout(()=>{    },50)


    // return;


    setTimeout(function()   {

        rzt = dsl_callFunCmdMode("ScoreTopup_shangfen", $("#uname_sxf").val(), $("#score_sxf").val())
        //  winlogger.info("[shangfen1236] rzt=>" +rzt);


        console.log("[shangfen1236] rzt=>" + rzt)
        rztobj = JSON.parse(rzt);


        if (rztobj.msg_to_ui)
            alert(rztobj.msg_to_ui)


        else if (rztobj.data.code == 0) {
            setTimeout(function ()  {

                alert("上分成功")
                playerNScore237();

            }, 30)

        } else {
            require(libdir + "excel")
            let errmsg = errcodeMsg(rztobj.data.code)
            alert("发生错误:" + errmsg + " ")
        }
        // alert(rzt)

        $("#loaddiv").hide();


    }, 50)


}



function  shangfenTopBoxIni()
{
    layui.use('layer', function(){ //独立版的layer无需执行这一句
        var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句

        //触发事件
        var active = {
            confirmTrans: function(){
                //配置一个透明的询问框
                layer.msg('大部分参数都是可以公用的<br>合理搭配，展示不一样的风格', {
                    time: 20000, //20s后自动关闭
                    btn: ['明白了', '知道了', '哦']
                });
            }
            ,notice: function(othis){
                //示范一个公告层
                layer.open({
                    type: 1
                    ,title: othis.text() //不显示标题栏
                    ,closeBtn: false
                    ,area: '300px;'
                    ,shade: 0.8
                    ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
                    ,btn: ['确定', '取消']
                    ,btnAlign: 'c'
                    ,moveType: 1 //拖拽模式，0或者1
                    ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">用户：<input type="text" value="" id="uname_sxf" name="fname" style="width: 100px"><br></br>'+othis.text()+'：<input type="text" value="" id="score_sxf" name="fname" style="width: 100px">\n</div>'
                    ,success: function(layero){
                        var btn = layero.find('.layui-layer-btn');
                        //  exe first
                        //  alert("ok..")
                    }
                    ,yes: function(){
                        //  alert("ok..")
                        console.log("selectBtn-->"+selectBtn)
                        // alert(selectBtn)
                        $("#uname").val( $("#uname_sxf").val())
                        if(selectBtn=="sfbtn")
                            pipe( chkSxfUname,shangfen1236)  ;
                        else
                            pipe( chkSxfUname,xiafen745)
                        layer.closeAll();
                    }
                });
            }
            ,offset: function(othis){
                var type = othis.data('type')
                    ,text = othis.text();

                layer.open({
                    type: 1
                    ,offset: type //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
                    ,id: 'layerDemo'+type //防止重复弹出
                    ,content: '<div style="padding: 20px 100px;">'+ text +'</div>'
                    ,btn: '关闭全部'
                    ,btnAlign: 'c' //按钮居中
                    ,shade: 0 //不显示遮罩
                    ,yes: function(){

                        layer.closeAll();
                    }
                });
            }
        };

        $(' .layui-btn').on('click', function(){

            window['selectBtn']=$(this).attr("id");
            console.log($(this).attr("id"))
            var othis = $(this), method = othis.data('method');

            active[method] ? active[method].call(this, othis) : '';
            $("#uname_sxf").val($("#uname").val())

        });


        //多窗口模式 - esc 键
        $(document).on('keyup', function(e){
            if(e.keyCode === 27){
                layer.close(layer.escIndex ? layer.escIndex[0] : 0);
            }
        });
    });



}

