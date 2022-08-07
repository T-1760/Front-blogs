(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{605:function(o,t,l){"use strict";l.r(t);var v=l(15),_=Object(v.a)({},(function(){var o=this,t=o.$createElement,l=o._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[l("h2",{attrs:{id:"css-属性速查表"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#css-属性速查表"}},[o._v("#")]),o._v(" CSS 属性速查表")]),o._v(" "),l("ul",[l("li",[o._v("参考链接\n"),l("a",{attrs:{href:"https://juejin.cn/post/6844904033145061389",target:"_blank",rel:"noopener noreferrer"}},[o._v("CSS的常用属性速查表"),l("OutboundLink")],1),o._v(" "),l("a",{attrs:{href:"https://devdocs.io/css/",target:"_blank",rel:"noopener noreferrer"}},[o._v("在线Api"),l("OutboundLink")],1)]),o._v(" "),l("li",[o._v("常用的主要为：选择-定位-布局-盒模型-字体-背景-动画-其他")])]),o._v(" "),l("h3",{attrs:{id:"一、selectors选择器"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#一、selectors选择器"}},[o._v("#")]),o._v(" 一、Selectors选择器")]),o._v(" "),l("ul",[l("li",[o._v("Type "),l("strong",[o._v("类型（元素）选择器(通过 html元素(标签)名称标记)")]),o._v(" "),l("blockquote",[l("p",[o._v("p { color: black }")])])]),o._v(" "),l("li",[o._v("Class "),l("strong",[o._v("类名选择器(通过 “.”标记)")]),o._v(" "),l("blockquote",[l("p",[o._v("p.class{ color： black }")])])]),o._v(" "),l("li",[o._v("ID "),l("strong",[o._v("唯一值选择器(通过 “#”标记)")]),o._v(" "),l("blockquote",[l("p",[o._v("p#id{ color: black }")])])]),o._v(" "),l("li",[o._v("Descendant "),l("strong",[o._v("后代选择器(通过 “ ”空格标记)")]),o._v(" "),l("blockquote",[l("p",[o._v("ul li{ color: black }")])])]),o._v(" "),l("li",[o._v("Sibling "),l("strong",[o._v("相邻(兄弟)选择器(通过 “~”标记)")]),o._v(" "),l("blockquote",[l("p",[o._v("input ~ label")])])]),o._v(" "),l("li",[o._v("Attribute "),l("strong",[o._v("属性选择器(通过 “[属性表述]”标记)")]),o._v(" "),l("blockquote",[l("p",[o._v('input[type="checkbox"]{ color: black }')])])]),o._v(" "),l("li",[o._v("Universal "),l("strong",[o._v("通配符选择器((只用 “*”标记)")]),o._v(" "),l("blockquote",[l("p",[o._v("*{ color: black }")])])]),o._v(" "),l("li",[o._v("Pseudo-class "),l("strong",[o._v("伪类选择器((通过 “:”标记)")]),o._v(" "),l("ul",[l("li",[l("blockquote",[l("p",[o._v("box::hover{ color: black } 鼠标悬浮状态")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("box::focus{ color: black } 元素本身获得焦点")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("box::focus-within{ color: black } 元素本身及子元素获得焦点")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("box:nth-child{ color: black } 第n个子元素")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("box:not{ color: black } 不处于某个状态")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("box:target { color: black } URL的锚点")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("box:checked{ color: black } 单/复选框开关on的状态")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("box:disabled { color: black } 禁用状态")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("box:valid{ color: black } 校验通过状态")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("box:invalid{ color: black } 校验不通过状态")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("box:placeholder-shown{ color: black } 输入框有占位符时的情况（也就是用户还未输入时的情况）")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("box:empty{ color: black } 空标签元素(常用场景：字段缺失、ajax加载数据为空)")])])])])]),o._v(" "),l("li",[o._v("Pseudo-element "),l("strong",[o._v("伪元素选择器(通过 “::”标记)")]),o._v("，在原先的元素基础上插入额外的元素，并且它不充当HTML的标签\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("box::before | box::after{ color: black } 标签的额外2个可绘制的元素")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("box::selection{ color: black } 被用户选中的部分")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("box::placeholder{ color: black } 输入框的占位符文本")])])])])])]),o._v(" "),l("h3",{attrs:{id:"二、positioning定位属性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#二、positioning定位属性"}},[o._v("#")]),o._v(" 二、Positioning定位属性")]),o._v(" "),l("ul",[l("li",[o._v("position\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("relative：相对定位，元素占据文档位置，可以有偏移")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("absolute：绝对定位，元素不占位置，相对于父元素定位")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("fixed：固定在视窗某一位置")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("sticky：“粘”在视窗某一位置")])])])])]),o._v(" "),l("li",[o._v("top | left | bottom | right\n"),l("blockquote",[l("p",[o._v("上下左右的偏移距离")])])]),o._v(" "),l("li",[o._v("z-index\n"),l("blockquote",[l("p",[o._v("层叠关系")])])])]),o._v(" "),l("h3",{attrs:{id:"三、display布局"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#三、display布局"}},[o._v("#")]),o._v(" 三、Display布局")]),o._v(" "),l("ul",[l("li",[o._v("display\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("none: 不显示元素")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("block：块级元素")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("inline：内联元素")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("flex：弹性盒子布局")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("grid：网格布局")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("contents：充当遮罩的元素（比如给img套上a并能使其不影响布局）")])])])])])]),o._v(" "),l("h3",{attrs:{id:"四、-box-model盒模型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#四、-box-model盒模型"}},[o._v("#")]),o._v(" 四、 Box Model盒模型")]),o._v(" "),l("ul",[l("li",[o._v("width | height 宽高")]),o._v(" "),l("li",[o._v("padding | margin 内外边距\n"),l("ul",[l("li",[o._v("语法糖\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("padding/margin: "),l("code",[o._v("top")]),o._v(" "),l("code",[o._v("leftAndRight")]),o._v(" "),l("code",[o._v("bottom")])])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("padding/margin: "),l("code",[o._v("top")]),o._v(" "),l("code",[o._v("right")]),o._v(" "),l("code",[o._v("bottom")]),o._v(" "),l("code",[o._v("left")])])])])])])])]),o._v(" "),l("li",[o._v("border 边框\n"),l("ul",[l("li",[o._v("语法糖\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("border: "),l("code",[o._v("border-width")]),o._v(" "),l("code",[o._v("border-style")]),o._v(" "),l("code",[o._v("border-color")])])])])])]),o._v(" "),l("li",[o._v("border-width 边框宽度")]),o._v(" "),l("li",[o._v("border-style 边框样式")]),o._v(" "),l("li",[o._v("border-color 边框颜色")])])]),o._v(" "),l("li",[o._v("border-radius 边框圆角")]),o._v(" "),l("li",[o._v("box-shadow 边框阴影\n"),l("ul",[l("li",[o._v("语法糖\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("box-shadow："),l("code",[o._v("offset-x")]),o._v(" "),l("code",[o._v("offset-y")]),o._v(" "),l("code",[o._v("blur-radius")]),o._v(" "),l("code",[o._v("spread-radius")]),o._v(" "),l("code",[o._v("color")]),o._v(" "),l("code",[o._v("inset")])])])])])]),o._v(" "),l("li",[o._v("offset-x x轴方向阴影偏移量(正值向右，负值向左)")]),o._v(" "),l("li",[o._v("offset-y y轴方向阴影偏移量(正值向下，负值向上)")]),o._v(" "),l("li",[o._v("blur-radius 阴影虚化(模糊)")]),o._v(" "),l("li",[o._v("spread-radius 阴影尺寸")]),o._v(" "),l("li",[o._v("color`阴影颜色")]),o._v(" "),l("li",[o._v("inset 内部阴影，\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("outset 外部阴影")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("inset 内部阴影")])])])])])])]),o._v(" "),l("li",[o._v("box-sizing 盒模型类型\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("content-box：标准盒模型(默认值; width/height = content + padding + border)")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("border-box：IE盒模型（width/height = content）")])])])])]),o._v(" "),l("li",[o._v("overflow\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("visible：超出部分可见")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("hidden：超出部分不可见")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("scroll：超出部分以滚动条形式显示")])])])])])]),o._v(" "),l("h3",{attrs:{id:"五、font字体"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#五、font字体"}},[o._v("#")]),o._v(" 五、font字体")]),o._v(" "),l("ul",[l("li",[o._v("语法糖\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("font: ["),l("code",[o._v("font-style")]),o._v("] ["),l("code",[o._v("font-variant")]),o._v("] ["),l("code",[o._v("font-weight")]),o._v("] "),l("code",[o._v("font-size")]),o._v("/"),l("code",[o._v("line-height")]),o._v(" "),l("code",[o._v("font-family")])])])])])]),o._v(" "),l("li",[o._v("font-style 字体样式\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("normal: 正常")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("italic: 斜体")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("oblique: 倾斜")])])])])]),o._v(" "),l("li",[o._v("font-variant 字体变化\n"),l("ul",[l("li",[o._v("CSS 2.1 中定义的值，即normal和small-caps")]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("normal: 正常")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("small-caps: 小体大写字母")])])])])]),o._v(" "),l("li",[o._v("font-weight 字体粗细\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("预选值：[normal正常 | bold 加粗 | lighter细体]")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("数值：100 到 900 之间整百值")])])])])]),o._v(" "),l("li",[o._v("font-size 字体大小")]),o._v(" "),l("li",[o._v("line-height 字体行高")]),o._v(" "),l("li",[o._v("font-family 字体种类\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("“Arial”")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("“Times New Roman”")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("“宋体”")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v('“黑体"')])])])])])]),o._v(" "),l("h4",{attrs:{id:"text"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#text"}},[o._v("#")]),o._v(" text")]),o._v(" "),l("ul",[l("li",[o._v("text-align 文本对齐\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("left: 左对齐")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("center: 居中对其")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("right: 右对齐")])])])])]),o._v(" "),l("li",[o._v("text-overflow 文本超出部分截断")]),o._v(" "),l("li",[o._v("text-shadow 文本阴影")]),o._v(" "),l("li",[o._v("text-transform 文本大小写")]),o._v(" "),l("li",[o._v("text-decoration 文本装饰样式\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("none: 无")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("overline: 上划线")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("underline: 下划线")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("line-through: 中划线，删除线")])])])])]),o._v(" "),l("li",[o._v("text-indent 文本缩进")]),o._v(" "),l("li",[o._v("letter-spacing 文本字符的间距")]),o._v(" "),l("li",[o._v("white-space 空格处理\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("nowrap：使文本永不换行")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("pre：保留空格和换行符，但无法自动换行")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("pre-wrap：保留空格和换行符，且可以自动换行")])])])])]),o._v(" "),l("li",[o._v("-webkit-text-stroke 文本描边")])]),o._v(" "),l("h4",{attrs:{id:"color"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#color"}},[o._v("#")]),o._v(" color")]),o._v(" "),l("ul",[l("li",[o._v("color 文本颜色")]),o._v(" "),l("li",[o._v("currentColor 当前元素color的值")]),o._v(" "),l("li",[o._v("opacity 颜色透明度")]),o._v(" "),l("li",[o._v("transparent 透明色")])]),o._v(" "),l("h4",{attrs:{id:"writing-modes"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#writing-modes"}},[o._v("#")]),o._v(" Writing Modes")]),o._v(" "),l("ul",[l("li",[o._v("writing-mode  定义文本水平或垂直排布以及在块级元素中"),l("strong",[o._v("文本的行进方向")]),o._v("。(全球语言普遍ltr从左到右)。\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("horizontal-tb：从左到右水平流动，是默认值")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("vertical-lr：从上到下垂直流动，下一垂直行位于上一行右侧")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("vertical-rl：从上到下垂直流动，下一垂直行位于上一行左侧")])])])])])]),o._v(" "),l("h3",{attrs:{id:"六、background背景"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#六、background背景"}},[o._v("#")]),o._v(" 六、background背景")]),o._v(" "),l("ul",[l("li",[o._v("语法糖\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("background: ["),l("code",[o._v("background-color")]),o._v("] ["),l("code",[o._v("background-image")]),o._v("] ["),l("code",[o._v("background-repeat")]),o._v("] ["),l("code",[o._v("background-attachment")]),o._v("] ["),l("code",[o._v("background-position")]),o._v("] / [ "),l("code",[o._v("background-size")]),o._v("] ["),l("code",[o._v("background-origin")]),o._v("] ["),l("code",[o._v("background-clip")]),o._v("] ["),l("code",[o._v("background-attachment")]),o._v("];")])])])]),o._v(" "),l("div",{staticClass:"language-css line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-css"}},[l("code",[o._v("  "),l("span",{pre:!0,attrs:{class:"token selector"}},[o._v(".example")]),o._v(" "),l("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v("{")]),o._v("\n      "),l("span",{pre:!0,attrs:{class:"token property"}},[o._v("background")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v(":")]),o._v(" aquamarine \n                  "),l("span",{pre:!0,attrs:{class:"token url"}},[l("span",{pre:!0,attrs:{class:"token function"}},[o._v("url")]),l("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v("(")]),o._v("img.png"),l("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v(")")])]),o._v(" \n                  no-repeat \n                  scroll \n                  center center / 50% \n                  content-box content-box"),l("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v(";")]),o._v("\n    "),l("span",{pre:!0,attrs:{class:"token punctuation"}},[o._v("}")]),o._v("\n")])]),o._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[o._v("1")]),l("br"),l("span",{staticClass:"line-number"},[o._v("2")]),l("br"),l("span",{staticClass:"line-number"},[o._v("3")]),l("br"),l("span",{staticClass:"line-number"},[o._v("4")]),l("br"),l("span",{staticClass:"line-number"},[o._v("5")]),l("br"),l("span",{staticClass:"line-number"},[o._v("6")]),l("br"),l("span",{staticClass:"line-number"},[o._v("7")]),l("br"),l("span",{staticClass:"line-number"},[o._v("8")]),l("br")])])]),o._v(" "),l("li",[o._v("CSS2.1\n"),l("ul",[l("li",[o._v("background-color：背景颜色。\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("linear-gradient() 线性渐变")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("radial-gradient() 径向渐变")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("conic-gradient() 圆锥渐变")])])])])]),o._v(" "),l("li",[o._v("background-image：背景图像。")]),o._v(" "),l("li",[o._v("background-repeat: 如何重复背景图像。")]),o._v(" "),l("li",[o._v("background-attachment: 背景图像是否固定或者随着页面的其余部分滚动。")]),o._v(" "),l("li",[o._v("background-position: 背景图像的位置。")])])]),o._v(" "),l("li",[o._v("CSS3\n"),l("ul",[l("li",[o._v("background-size: 背景图片的尺寸。")]),o._v(" "),l("li",[o._v("background-origin: 背景图片的定位区域。")]),o._v(" "),l("li",[o._v("background-clipL 背景的绘制区域(背景裁剪)")]),o._v(" "),l("li",[o._v("background-attachment:  背景固定\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("scroll：背景相对于"),l("strong",[o._v("元素本身")]),o._v("固定")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("fixed：背景相对于"),l("strong",[o._v("视口")]),o._v("固定")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("local：背景相对于"),l("strong",[o._v("元素的内容")]),o._v("固定")])])])])])])]),o._v(" "),l("li",[o._v("backdrop-filter 作用于元素背景的滤镜")])]),o._v(" "),l("h4",{attrs:{id:"image"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#image"}},[o._v("#")]),o._v(" image")]),o._v(" "),l("ul",[l("li",[o._v("object-fit 指定替换元素(如img)的内容应该如何适应到其使用的高度和宽度确定的框\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("fill: 使图片"),l("strong",[o._v("拉伸")]),o._v("填满整个容器, 不保证保持原有的比例(默认)")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("contain: 保持纵横比例缩放，"),l("strong",[o._v("保证长边")]),o._v("完全显示")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("cover: 保持纵横比例缩放，"),l("strong",[o._v("保证短边")]),o._v("完全显示")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("none: 保持原有尺寸比例。"),l("strong",[o._v("保证图片原始尺寸大小")]),o._v("。多出的部分隐藏")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("scale-down: 当实际图片尺寸大于容器尺寸时，contain属性的结果；当实际图片尺寸小于容器尺寸时，表现为none属性的结果")])])])])])]),o._v(" "),l("h4",{attrs:{id:"filter"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[o._v("#")]),o._v(" filter")]),o._v(" "),l("ul",[l("li",[o._v("filter 作用于元素本身的滤镜, 常用滤镜\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("blur()：高斯模糊")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("contrast()：对比度")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("drop-shadow()：投影，常用于给不规则形状进行")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("greyscale()：灰度")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("hue-rotate()：色调变换")])])])])])]),o._v(" "),l("h4",{attrs:{id:"blending"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#blending"}},[o._v("#")]),o._v(" Blending")]),o._v(" "),l("ul",[l("li",[o._v("mix-blend-mode 混合模式\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("multiply：正片叠底")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("screen：滤色")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("difference：插值")])])])])])]),o._v(" "),l("h3",{attrs:{id:"七、transforms变形"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#七、transforms变形"}},[o._v("#")]),o._v(" 七、Transforms变形")]),o._v(" "),l("ul",[l("li",[o._v("transform 变形\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("translate：平移")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("scale：缩放")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("rotate：旋转")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("skew：斜切")])])])])]),o._v(" "),l("li",[o._v("transform-origin 变换中心")]),o._v(" "),l("li",[o._v("transform-style\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("flat：默认")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("preserve-3d：3d场景")])])])])]),o._v(" "),l("li",[o._v("perspective 透视距离")]),o._v(" "),l("li",[o._v("backface-visibility 物体后方是否可视\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("visible: 背面朝向用户时可见。")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("hidden: 背面朝向用户时不可见")])])])])])]),o._v(" "),l("h3",{attrs:{id:"八、animation动画"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#八、animation动画"}},[o._v("#")]),o._v(" 八、Animation动画")]),o._v(" "),l("ul",[l("li",[o._v("animation 语法糖\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("animation: "),l("code",[o._v("name")]),o._v(" "),l("code",[o._v("duration")]),o._v(" "),l("code",[o._v("timing-function")]),o._v(" "),l("code",[o._v("delay")]),o._v(" "),l("code",[o._v("iteration-count")]),o._v(" "),l("code",[o._v("direction")]),o._v(" "),l("code",[o._v("fill-mode")]),o._v(";")])])])])]),o._v(" "),l("li",[o._v("animation-name 动画名称")]),o._v(" "),l("li",[o._v("animation-duration 动画时间")]),o._v(" "),l("li",[o._v("animation-timing-function 动画缓动函数\n"),l("ul",[l("li",[o._v("制定了 @keyframes中各个节点之间的时间变化曲线")]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("内置函数：ease、linear、ease-in、ease-out、ease-in-out、steps(n, start/end)")]),o._v(" "),l("blockquote",[l("ul",[l("li",[o._v("steps指定了animation-timing-function为一个阶跃函数。")]),o._v(" "),l("li",[o._v("n是一个正整数，表示阶跃次数，")]),o._v(" "),l("li",[o._v("start/end，表示阶跃点，start表示一开始就先进行阶跃，end(默认值)表示每阶段完成后再进行阶跃，")])])])])])])]),o._v(" "),l("li",[o._v("animation-delay 动画延迟")]),o._v(" "),l("li",[o._v("animation-iteration-count 动画播放次数")]),o._v(" "),l("li",[o._v("animation-fill-mode 动画填充模式")]),o._v(" "),l("li",[o._v("animation-play-state 动画播放状态")]),o._v(" "),l("li",[o._v("@keyframes 动画关键帧")]),o._v(" "),l("li",[o._v("transition 语法糖\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("transition: "),l("code",[o._v("transition-property")]),o._v(" "),l("code",[o._v("transition-duration")]),o._v(" "),l("code",[o._v("transition-timing-function")]),o._v(" "),l("code",[o._v("transition-delay")]),o._v(";")])])])])]),o._v(" "),l("li",[o._v("transition-property 过渡属性名")]),o._v(" "),l("li",[o._v("transition-duration 过渡时间")]),o._v(" "),l("li",[o._v("transition-timing-function 过渡缓动函数\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("内置函数：ease、linear、ease-in、ease-out、ease-in-out、steps()")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("自定义缓动函数：cubic-bezier()")])])])])]),o._v(" "),l("li",[o._v("transition-delay 过渡延迟")])]),o._v(" "),l("h4",{attrs:{id:"motion-path"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#motion-path"}},[o._v("#")]),o._v(" Motion Path")]),o._v(" "),l("ul",[l("li",[o._v("offset-path 路径的定义")]),o._v(" "),l("li",[o._v("offset-distance 对象在路径上的位置")])]),o._v(" "),l("h3",{attrs:{id:"九、others其他"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#九、others其他"}},[o._v("#")]),o._v(" 九、Others其他")]),o._v(" "),l("ul",[l("li",[o._v("attr() 获取自定义属性的值作为content生成的内容")]),o._v(" "),l("li",[o._v("var() CSS自定义变量")]),o._v(" "),l("li",[o._v("calc() 计算值")]),o._v(" "),l("li",[o._v("@media 媒体查询，用于适配不同设备")]),o._v(" "),l("li",[o._v("-webkit-box-reflect 投影")]),o._v(" "),l("li",[o._v("percentage 百分比相对的对象有两种：\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("相对父元素："),l("code",[o._v("width、height、top、left、margin、padding")])])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("相对自身："),l("code",[o._v("translateX、translateY")])])])])])])]),o._v(" "),l("h4",{attrs:{id:"svg"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#svg"}},[o._v("#")]),o._v(" SVG")]),o._v(" "),l("ul",[l("li",[o._v("clip-path 裁剪路径，用来裁剪出各种形状")]),o._v(" "),l("li",[o._v("mask 蒙版，用于创建镂空效果")]),o._v(" "),l("li",[o._v("letter-spacing 字母间距")]),o._v(" "),l("li",[o._v("pointer-events 鼠标事件（通常都设为"),l("code",[o._v("none")]),o._v("，表示消除对象的鼠标事件）")])]),o._v(" "),l("h4",{attrs:{id:"list"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[o._v("#")]),o._v(" List")]),o._v(" "),l("ul",[l("li",[o._v("list-style-type 列表的marker样式（通常都设为"),l("code",[o._v("none")]),o._v("，表示消除列表样式）")]),o._v(" "),l("li",[o._v("counter-reset 重置某个计数器为某一值")]),o._v(" "),l("li",[o._v("counter-increment 给某个计数器增加特定的值")])]),o._v(" "),l("h4",{attrs:{id:"ui"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#ui"}},[o._v("#")]),o._v(" UI")]),o._v(" "),l("ul",[l("li",[o._v("appearance 元素的默认样式（通常都设为"),l("code",[o._v("none")]),o._v("，表示消除默认外观）")]),o._v(" "),l("li",[o._v("cursor 光标类型，最常用的是"),l("code",[o._v("pointer")]),o._v("，也就是一只手")]),o._v(" "),l("li",[o._v("outline 轮廓")]),o._v(" "),l("li",[o._v("user-select 用户是否能选择文本（通常都设为"),l("code",[o._v("none")]),o._v("，表示用户无法选中此文本）")])]),o._v(" "),l("h4",{attrs:{id:"scroll"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#scroll"}},[o._v("#")]),o._v(" Scroll")]),o._v(" "),l("ul",[l("li",[o._v("scroll-behavior 滚动行为\n"),l("ul",[l("li",[l("blockquote",[l("p",[o._v("auto：默认滚动行为")])])]),o._v(" "),l("li",[l("blockquote",[l("p",[o._v("smooth：丝滑滚动行为")])])])])]),o._v(" "),l("li",[o._v("scroll-snap-type 定义在滚动容器中的一个临时点（snap point）如何被严格的执行")]),o._v(" "),l("li",[o._v("scroll-snap-align 控制将要聚焦的当前滚动子元素在滚动方向上相对于父容器的对齐方式")]),o._v(" "),l("li",[o._v("-webkit-overflow-scrolling 设置为"),l("code",[o._v("touch")]),o._v("可以恢复移动端的弹性滚动")]),o._v(" "),l("li",[o._v("overscroll-behavior 设置为"),l("code",[o._v("contain")]),o._v("可以禁止连锁滚动效果")])])])}),[],!1,null,null,null);t.default=_.exports}}]);