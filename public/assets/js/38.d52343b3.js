(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{628:function(t,e,a){"use strict";a.r(e);var s=a(15),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"svg-基础篇"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#svg-基础篇"}},[t._v("#")]),t._v(" SVG—基础篇")]),t._v(" "),a("ul",[a("li",[t._v("参考链接\n"),a("a",{attrs:{href:"https://juejin.cn/post/6844904017273815048",target:"_blank",rel:"noopener noreferrer"}},[t._v("SVG 入门指南"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://juejin.cn/post/6844903811920691207",target:"_blank",rel:"noopener noreferrer"}},[t._v("流动的SVG线条"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://juejin.cn/post/6844903589807128590",target:"_blank",rel:"noopener noreferrer"}},[t._v("SVG入门—如何手写SVG"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://juejin.cn/post/7028958154545168414#comment",target:"_blank",rel:"noopener noreferrer"}},[t._v("学习SVG"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://juejin.cn/post/6976876179496124430",target:"_blank",rel:"noopener noreferrer"}},[t._v("SVG基础及其动画应用浅析"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"svg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#svg"}},[t._v("#")]),t._v(" SVG")]),t._v(" "),a("ul",[a("li",[t._v("SVG，即可缩放矢量图形(Scalable Vector Graphics)，是一种 XML 应用，可以以一种简洁、可移植的形式表示图形信息")]),t._v(" "),a("li",[t._v("SVG 特点\n"),a("blockquote",[a("p",[t._v("SVG 指可伸缩矢量图形\nSVG 用来定义网络的基于矢量的图形\nSVG 使用 XML 格式定义图形\nSVG 图像在放大或改变尺寸的情况下其图形质量不会有所损失\nSVG 是万维网联盟的标准\nSVG 与诸如 DOM 和 XSL 之类的 W3C 标准是一个整体")])])]),t._v(" "),a("li",[t._v("SVG应用场景\n"),a("blockquote",[a("p",[t._v("图表视图(EChart)、地图视图(WEB-GIS)\n形象(AI)的全网应用\nUI 产品的设计\nSVG 动画")])])]),t._v(" "),a("li",[t._v("计算机中两大图形系统\n"),a("blockquote",[a("p",[t._v("计算机中描述图形信息的两大系统是"),a("strong",[t._v("栅格图形")]),t._v("和"),a("strong",[t._v("矢量图形")])])])])]),t._v(" "),a("h3",{attrs:{id:"栅格图形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栅格图形"}},[t._v("#")]),t._v(" 栅格图形")]),t._v(" "),a("ul",[a("li",[t._v("在栅格图形系统中，图像被表示为"),a("strong",[t._v("图片元素或者像素的长方形数组")]),t._v("(如下图所示)。"),a("strong",[t._v("每个像素用其 RGB 颜色值或者颜色表内的索引表示")]),t._v("。这一系列也称为"),a("strong",[t._v("位图")]),t._v("，通过以某种压缩格式存储。由于大多数现代显示设备也是栅格设备，显示图像时仅需要一个阅读器将位图解压并将它传输到屏幕上。\n"),a("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/12/10/16eed27bb9749f54~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:"位图"}})])]),t._v(" "),a("h3",{attrs:{id:"矢量图形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#矢量图形"}},[t._v("#")]),t._v(" 矢量图形")]),t._v(" "),a("ul",[a("li",[t._v("矢量图是基于数学（贝塞尔曲线）的描述。假想在一张绘图纸上作图的过程，栅格图形的工作就像是描述哪个方格应该填充什么颜色，而矢量图形的工作则像是描述要绘制从某个点到另一个点的直线或曲线")]),t._v(" "),a("li",[t._v("SVG 图像优化 SEO 和无障碍的利器。是使用XML(可扩展标记语言【英语：Extensible Markup Language，简称：XML】标记指计算机所能理解的信息符号，通过此种标记，计算机之间可以处理包含各种信息的文章等)来标记构建的，浏览器通过绘制每个点和线来打印它们，而不是用预定义的像素填充某些空间。这确保 SVG 图像可以适应不同的屏幕大小和分辨率。")]),t._v(" "),a("li",[t._v("SVG 中保存的是点、线、面的信息，与分辨率和图形大小无关，只是跟图像的复杂程度有关，所以图像文件所占的存储空间通常会比 png 小。")])]),t._v(" "),a("h3",{attrs:{id:"svg与canvas的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#svg与canvas的区别"}},[t._v("#")]),t._v(" SVG与canvas的区别")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/12/10/16eed278c08595bb~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:"SVG与canvas的区别"}})]),t._v(" "),a("h3",{attrs:{id:"基本的-svg-元素及语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本的-svg-元素及语法"}},[t._v("#")]),t._v(" 基本的 SVG 元素及语法")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("<svg>")]),t._v(" 包裹并定义整个矢量图。"),a("code",[t._v("<svg>")]),t._v(" 标签之于矢量图就如同 "),a("code",[t._v("<html>")]),t._v(" 标签之于一个 web 页面。")]),t._v(" "),a("li",[a("code",[t._v("<defs>")]),t._v(" 定义一个可复用的图形。初始情况下 "),a("code",[t._v("<defs>")]),t._v(" 里面的内容是不可见的。"),a("code",[t._v("<defs>")]),t._v(" 标签之于矢量图就如同 "),a("code",[t._v("<head>")]),t._v(" 标签之于一个 web 页面。")]),t._v(" "),a("li",[a("code",[t._v("<g>")]),t._v(" 将多种形状组合起来。将组合后的形状置于 "),a("code",[t._v("<defs>")]),t._v(" 中可以让它能够被复用。")]),t._v(" "),a("li",[a("code",[t._v("<symbol>")]),t._v(" 类似于一个组合，但是拥有一些额外的特性。通常被置于 "),a("code",[t._v("<defs>")]),t._v(" 标签中便于复用。")]),t._v(" "),a("li",[a("code",[t._v("<use>")]),t._v(" 获取在 "),a("code",[t._v("<defs>")]),t._v(" 中定义的复用对象并在 SVG 中显示出来。")]),t._v(" "),a("li",[a("code",[t._v("<path>")]),t._v(" 通过指定点以及点和点之间的线来创建任意形状。")]),t._v(" "),a("li",[a("code",[t._v("<line>")]),t._v(" 创建一条直线。")]),t._v(" "),a("li",[a("code",[t._v("<polyline>")]),t._v(" 折线。")]),t._v(" "),a("li",[a("code",[t._v("<rect>")]),t._v(" 矩形。")]),t._v(" "),a("li",[a("code",[t._v("<circle>")]),t._v(" 圆形")]),t._v(" "),a("li",[a("code",[t._v("<ellipse>")]),t._v(" 圆和椭圆。")]),t._v(" "),a("li",[a("code",[t._v("<polygon>")]),t._v(" 多边形。")])]),t._v(" "),a("h4",{attrs:{id:"svg基本图形"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#svg基本图形"}},[t._v("#")]),t._v(" SVG基本图形")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("图形")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("标签")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("模板")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("路径")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("<path>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v('<path d="M 18 3 L 46 3 L 46 40 L 61 40 L 32 68 L 3 40 L 18 40 Z "></path>')])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("d代表data, 设置路径点与点之间创建连线的命令(M表示移动到moveTo; L表示划线到lineTo; Z表示闭合路径")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("矩形")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("<rect>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v('<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>')])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("x, y:起点的横，纵坐标; rx:倒角x轴方向半径，ry:倒角x轴方向半径，width:宽度，height:高度")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("圆形")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("<circle>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v('<circle cx="100" cy="100" r="50" fill="#fff"></circle>')])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("cx，cy: 圆心横, 纵坐标; r:半径")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("椭圆")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("<ellipse>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v('<ellipse cx="75" cy="75" rx="20" ry="5"/>')])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("cx, cy: 椭圆心横, 纵坐标; rx:椭圆x轴方向半径，ry:椭圆y轴方向半径")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("直线")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("<line>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v('<line x1="10" x2="50" y1="110" y2="150"/>')])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("x1，y1:起点横，纵坐标; x2，y2:终点横，纵坐标")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("折线")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("<polyline>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v('<polyline points="60 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145"/>')])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("每两个点以空格配对为一个坐标点，逗号隔开形成坐标集合。连成折线")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("多边形")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("<polygon>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v('<polygon points="50 160, 55 180, 70 180, 60 190, 65 205, 50 195, 35 205, 40 190, 30 180, 45 180"/>')])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("类似折线，不同的是，最后一个点会自动闭合第一个点，形成闭环")])])])]),t._v(" "),a("h3",{attrs:{id:"svg文档基本结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#svg文档基本结构"}},[t._v("#")]),t._v(" svg文档基本结构")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("svg")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("140"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("170"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("xmlns")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("http://wwww.w3.org/2000/svg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Cat"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Stick Figure of Cat"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 在这里绘制图像 --\x3e")]),t._v("\n      ...\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("svg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("   \n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("ul",[a("li",[a("code",[t._v("<svg>")]),t._v(" 根元素 以像素为单位定义了整个图像的 width 和 height，还通过 xmlns 属性定义了 SVG 的命名空间。")]),t._v(" "),a("li",[a("code",[t._v("<title>")]),t._v(" 元素的内容可以被阅读器显示在标题栏上或者是作为鼠标指针指向图像时的提示，")]),t._v(" "),a("li",[a("code",[t._v("<desc>")]),t._v(" 元素允许咱们为图像定义完整的描述信息")])]),t._v(" "),a("h4",{attrs:{id:"path中的属性中的值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path中的属性中的值"}},[t._v("#")]),t._v(" path中的属性中的值")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("指令")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("M")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("x y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("将画笔移动到点(x,y) "),a("strong",[t._v("M表示绝对坐标")]),t._v("(相对坐标轴圆点); "),a("strong",[t._v("m表示相对坐标")]),t._v("(现对于当前坐标点)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("L")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("x y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("画笔从当前的点绘制线段到点(x,y) "),a("strong",[t._v("L表示绝对坐标; l表示相对坐标")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("H")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("x")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("画笔从当前的点绘制水平线段到点(x,y0)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("V")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("画笔从当前的点绘制竖直线段到点(x0,y)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("rx ry x-axis-rotation large-arc-flag sweep-flag x y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("画笔从当前的点绘制一段圆弧到点(x,y)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("x1 y1, x2 y2, x y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("画笔从当前的点绘制一段三次贝塞尔曲线到点(x,y)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("S")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("x2 y2, x y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("特殊版本的三次贝塞尔曲线(省略第一个控制点)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Q")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("x1 y1, x y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("绘制二次贝塞尔曲线到点(x,y)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("T")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("x y")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("特殊版本的二次贝塞尔曲线(省略控制点)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Z")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("无参数")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("(当前点连上路径起始点)绘制闭合图形，如果d属性不指定Z命令，则绘制线段，而不是封闭图形。")])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("A绘制圆弧指令："),a("code",[t._v("rx ry x-axis-rotation large-arc-flag sweep-flag x y")])]),t._v(" "),a("ul",[a("li",[t._v("对于给定两个点（一个起点一个终点）和一个半径，可以画4条弧线。这四条弧线可以按照两种分法：\n"),a("ul",[a("li",[t._v("按角度分：大于180°的 和 小于180°的")]),t._v(" "),a("li",[t._v("按画笔方向分：顺时针方向 和 逆时针方向\n"),a("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/4/2/169ddb414b7b53d5~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:"圆弧"}})])])])]),t._v(" "),a("blockquote",[a("p",[t._v("rx,ry 是弧的半长轴、半短轴长度\nx-axis-rotation 是圆弧旋转角度，是此段弧所在的半长轴与水平方向的夹角。正数代表顺时针转动的角度。\nlarge-arc-flag 为1 表示大角度弧线，0 代表小角度弧线。\nsweep-flag 为1代表从起点到终点弧线绕中心顺时针方向，0 代表逆时针方向。\nx,y 是弧终端坐标。")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);