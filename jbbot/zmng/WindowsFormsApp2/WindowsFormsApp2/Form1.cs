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

            //--------------main

            WebBrowser browser = new WebBrowser();

            //注册script 调用对象   通过window.external捕获调用c#定义好的函数。
            browser.ObjectForScripting = this;  // 将当前类设置为可由脚本访问
                                                //    browser.Regis

            browser.Dock = DockStyle.Fill;
            this.Controls.Add(browser);
            //  browser.Navigate("C:\\modyfing\\apiprj\\jbbot\\zmng\\index.html");


            //       ChromiumWebBrowser WebBrowser = new ChromiumWebBrowser("C:\\modyfing\\apiprj\\jbbot\\zmng\\index.html");  //CefSharp.WinForms.ChromiumWebBrowser
            //    WebBrowser.Dock = DockStyle.Fill;
            //      this.Controls.Add(WebBrowser);
            //   MessageBox.Show(System.Environment.CurrentDirectory);

            //  browser.Navigate(System.Environment.CurrentDirectory+"/index.html");
            //  browser.Navigate("C:\\modyfing\\apiprj\\jbbot\\zmng\\js2net.html");
            //  WebBrowser.

            // objects[0] = “C#访问JavaScript脚本";
            //	this.webBrowser1.Document.InvokeScript("messageBox", objects);
            string text = callFun("echo 123");

            string[] strings = text.Split("88888888888888888888888888".ToCharArray());
            var rzt = strings[strings.Length - 1];
            MessageBox.Show(rzt);
            Application.Exit();
        }



        public void invkFrmWeb(string cmd)
        {
            MessageBox.Show(cmd);
        }

        public String callFun(string callFunStr)
        {
            return exec(callFunStr);
        }


        public   String exec(string callFunStr)
        {

            //arr = Array.from(arguments);
            // cmdstr = arr.join(" ");
            var cmdstr = " C:\\modyfing\\apiprj\\jbbot\\zmng\\libx\\callFun.js " + callFunStr;
            Console.WriteLine(cmdstr);
            // MessageBox.Show(cmd);
            Process cmd = new Process();
            cmd.StartInfo.FileName = "node.exe";
            cmd.StartInfo.Arguments = cmdstr;
            cmd.StartInfo.RedirectStandardInput = true;
            cmd.StartInfo.RedirectStandardOutput = true;
            cmd.StartInfo.CreateNoWindow = true;
            cmd.StartInfo.UseShellExecute = false;
            cmd.Start();
            
            cmd.WaitForExit();
            String sr=(cmd.StandardOutput.ReadToEnd());

            
            return sr;
           
        }



        public void errorHandler(string errJson)
        {
            MessageBox.Show(errJson);
        }

    }
}
