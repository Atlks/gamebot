async function call_func(fun, params) {

}

function  eval2023(){

}
require("./logger.js");

function  getProps(obj)
{
   return   Object.keys(obj);
}


function  evalx(str)
{
    log_enterFun(arguments)
   let eval1 = eval(str);
    log_info(" ret=》"+eval1);
   return  eval1;
}

 //echo(111)

global["call_func"] = call_func;

async function call_func(fun, params) {
   let arg = JSON.stringify(arguments);
   // arg = JSON.stringify(params);
   let ivkFundbg = "******[call_func]" + arg
   console.log(ivkFundbg);
   log_info(ivkFundbg)
   require("./php");
   require("./core")
   require("./fp_ati1990")
   //in js   apply fun is Fun obj proty.meth..heyou bind call ...

   if (isset("window"))
      func = window[fun];
   else
      func = global[fun];

   //  func=eval(cb);
 //  console.log("[call_func] func=> "+func)

   try {
      $r = await func.apply("thisobj", params);
      let str = sprintf("[call_func] ret==>%s",  $r);
      echo(str);
      log_info(str)
      // echo("\r\n\r\n");
      return $r;
   } catch (e) {
      console.log(e)

      log_err("e at:" + fun + arg)
      log_err(json_encode(e));
      throw  e;
   }

}