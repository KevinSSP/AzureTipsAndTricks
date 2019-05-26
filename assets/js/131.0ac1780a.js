(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{433:function(e,t,a){"use strict";a.r(t);var s=a(43),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/cli/azure?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Command-Line Interface (CLI)"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=m-xUgEl6dcM&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=28?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to work with the Azure CLI using MacOS"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"working-with-the-azure-cli-using-a-mac"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-the-azure-cli-using-a-mac","aria-hidden":"true"}},[e._v("#")]),e._v(" Working with the Azure CLI using a Mac")]),e._v(" "),a("p",[e._v("The "),a("strong",[e._v("Azure CLI 2.0")]),e._v(" provides a command-line experience for managing Azure resources. You can use it with Azure Cloud Shell which sits inside your web browser, or you can install it on macOS, Linux, and Windows. In this post, we'll install it on a Mac.")]),e._v(" "),a("p",[e._v("My preferred way to work with the Azure CLI 2.0 on a Mac is to have "),a("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew"),a("OutboundLink")],1),e._v(" installed. Basically, homebrew is a package manager for Mac that makes it easy to install application.")]),e._v(" "),a("p",[e._v("Once it is installed, you'll want to run these two commands:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("brew update\nbrew "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" azure-cli\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("The first command just updates the homebrew database and the next command installs the Azure CLI 2.0 as shown below.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/climac1.gif")}}),e._v(" "),a("p",[e._v("Wow, that was pretty easy! You can type "),a("code",[e._v("az -h")]),e._v(" to get help documentation or go to "),a("a",{attrs:{href:"https://aka.ms/cli?WT.mc_id=akams-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("aka.ms/cli"),a("OutboundLink")],1),e._v(" to read the docs.")]),e._v(" "),a("h5",{attrs:{id:"log-in-to-azure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-in-to-azure","aria-hidden":"true"}},[e._v("#")]),e._v(" Log in to Azure")]),e._v(" "),a("p",[e._v("You'll want to use the "),a("code",[e._v("az login")]),e._v(" command to log in to your Azure account. You'll see the following message:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("To sign in, use a web browser to open the page https://aka.ms/devicelogin and enter the code XXX to authenticate.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Open a web browser and navigate to https://aka.ms/devicelogin and enter your code. You'll be prompted to enter the code to authenticate.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azuredevlogin.png")}}),e._v(" "),a("p",[e._v("Switch back to the terminal app and you'll see something similar to the following if you logged in successfully:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[\n  {\n    "cloudName": "AzureCloud",\n    "id": "xxx",\n    "isDefault": true,\n    "name": "Visual Studio Enterprise",\n    "state": "Enabled",\n    "tenantId": "xxx",\n    "user": {\n      "name": "micrum@email.com",\n      "type": "user"\n    }\n  }\n]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])]),a("p",[e._v("Keep in mind that you can always get back to this screen with "),a("code",[e._v("az account")]),e._v(" list. You can now try to create a Ubuntu VM using only the CLI. "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-machines/linux/quick-create-cli?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Here"),a("OutboundLink")],1),e._v(" is a great doc to get started.")])])},[],!1,null,null,null);t.default=n.exports}}]);