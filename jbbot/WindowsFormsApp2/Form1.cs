using Microsoft.Win32;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml.Linq;
using static System.Net.Mime.MediaTypeNames;

namespace WindowsFormsApp2
{

    // 这样使得C#的com对象是对网页里的javascript可见的。
    [System.Runtime.InteropServices.ComVisible(true)]
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            edgeModeBrowser();

            //--------------main

            WebBrowser browser = new WebBrowser();

            //注册script 调用对象   通过window.external捕获调用c#定义好的函数。
            browser.ObjectForScripting = this;  // 将当前类设置为可由脚本访问
                                                //    browser.Regis

            browser.Dock = DockStyle.Fill;
            this.Controls.Add(browser);


            if (File.Exists(System.Environment.CurrentDirectory + "/index.html"))
                browser.Navigate(System.Environment.CurrentDirectory + "/index.html");
            else
                browser.Navigate("C:\\modyfing\\apiprj\\jbbot\\zmng\\index.html");



            void edgeModeBrowser()
            {
                Console.WriteLine("111............................");
                //获取程序及名称  ------------che ie11 mode  IE11 边缘模式显示
                var appName = System.IO.Path.GetFileName(System.Diagnostics.Process.GetCurrentProcess().MainModule.FileName);
                UInt32 ieMode = 11001;   //ie11
                var featureControlRegKey = @"HKEY_CURRENT_USER\Software\Microsoft\Internet Explorer\Main\FeatureControl\";
                //设置浏览器对应用程序（appName）以什么模式（ieMode）运行  
                Registry.SetValue(featureControlRegKey + "FEATURE_BROWSER_EMULATION",
                    appName, ieMode, RegistryValueKind.DWord);
                Registry.SetValue(featureControlRegKey + "FEATURE_ENABLE_CLIPCHILDREN_OPTIMIZATION",
                    appName, 1, RegistryValueKind.DWord);
                //修改注册表兼容当前程序
            }

           

        }


        //       ChromiumWebBrowser WebBrowser = new ChromiumWebBrowser("C:\\modyfing\\apiprj\\jbbot\\zmng\\index.html");  //CefSharp.WinForms.ChromiumWebBrowser
        //    WebBrowser.Dock = DockStyle.Fill;
        //      this.Controls.Add(WebBrowser);
        //   MessageBox.Show(System.Environment.CurrentDirectory);

        //  browser.Navigate(System.Environment.CurrentDirectory+"/index.html");
        //  browser.Navigate("C:\\modyfing\\apiprj\\jbbot\\zmng\\js2net.html");
        //  WebBrowser.

        // objects[0] = “C#访问JavaScript脚本";
        //	this.webBrowser1.Document.InvokeScript("messageBox", objects);

        /*

             string text = callFun("echo 123");

           string[] strings = text.Split("88888888888888888888888888".ToCharArray());
           var rzt = strings[strings.Length - 1];
        //   MessageBox.Show(rzt);

           //   Application.Exit();

            */



        public void __invkFrmWeb(string cmd)
        {
            MessageBox.Show(cmd);
        }


        /**
         * public String ___callFun(string callFunStr)
        {
            return exec(callFunStr);
        }
         * 
         */



        public String callFun(string callFunStr)
        {
            Console.WriteLine("[callFun]callFunStr=>" + callFunStr);
            //arr = Array.from(arguments);
            // cmdstr = arr.join(" ");

            var cmdExe = "node";
            var calllib = " C:\\modyfing\\apiprj\\jbbot\\zmng\\libx\\callFun.js ";

            if (File.Exists(System.Environment.CurrentDirectory + "/libx/callFun.js"))
                calllib = System.Environment.CurrentDirectory + "/libx/callFun.js";


            var args= calllib + callFunStr;

            string text = exec(cmdExe, args);
           int pos = text.LastIndexOf("88888888888888888888888888" );
            var rzt = text.Substring(pos+ "88888888888888888888888888".Length);
            //  MessageBox.Show(sr);

            Console.WriteLine("cmd ret true str=>" + rzt);
            return rzt;

        }

        private static string exec(string cmdExe, string cmdstr)
        {
            Console.OutputEncoding = System.Text.Encoding.UTF8;
            Console.WriteLine("cmdstr=>" + cmdstr);
            // MessageBox.Show(cmd);
            Process Process2 = new Process();
            Process2.StartInfo.FileName = cmdExe;
            Process2.StartInfo.Arguments = cmdstr;
            Process2.StartInfo.RedirectStandardInput = true;
            Process2.StartInfo.RedirectStandardOutput = true;
            Process2.StartInfo.CreateNoWindow = false;
            Process2.StartInfo.UseShellExecute = false;
            Process2.Start();
            Console.WriteLine(":123=>");
            int timeoutInMilliseconds = 3000;//only local inmvok cmd..if net need another
            Process2.WaitForExit(timeoutInMilliseconds);
            Console.WriteLine("cmdRztVewf=>");
            String sr = (Process2.StandardOutput.ReadToEnd());
            Console.WriteLine("cmdRzt=>" + sr);
            return sr;
        }

        public void errorHandler(string errJson)
        {
            // MessageBox.Show(errJson);
            callFun("log_err " + errJson);
        }

    }
}
