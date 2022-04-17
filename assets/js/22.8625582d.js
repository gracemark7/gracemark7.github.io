(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{229:function(e,t,n){"use strict";n.r(t);var r=n(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),n("p",[e._v("Vue.nextTick()")]),e._v(" "),n("p",[e._v("获取更新后的 DOM\n在 created()钩子函数执行的时候 DOM 其实并未进行渲染，此时操作 DOM 没有，所以在 created 中，将 DOM 操作的 js 代码放进 Vue.nextTick()回调函数中。与之对应的是 mounted（）钩子函数，因为该钩子函数执行时所有 DOM 挂载渲染都已经完成，此时在该钩子函数中进行任何 DOM 操作都不会有问题。")]),e._v(" "),n("p",[e._v("code:")]),e._v(" "),e._m(3),e._m(4),n("p",[e._v("Vue.observable( object ) 2.6.0")]),e._v(" "),n("p",[e._v("让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象。")]),e._v(" "),n("p",[e._v("返回的对象可以直接用于渲染函数和计算属性内，并且会在发生变更时触发相应的更新。也可以作为最小化的跨组件状态存储器，用于简单的场景")]),e._v(" "),e._m(5),e._v(" "),n("p",[e._v("render")]),e._v(" "),n("p",[e._v("在 Vue.js 中，对于大部分场景，使用 template 足以应付，但如果想完全发挥 JavaScript 的编程能力，或在一些特定场景下，需要使用 Vue.js 的 Render 函数。")]),e._v(" "),n("p",[e._v("render 函数实际是 template 的底层方法，通过 createElement(h)来创建 dom 节点，实际上作用就是负责组件视图渲染。在 Vue.js\n编辑阶段，会解析为 Virtual DOM,与 DOM 相比，Virtual DOM 是基于 js 计算的，开销会小。")]),e._v(" "),n("p",[e._v("Object---\x3erender(生成虚拟节点)---\x3ecreateElement(h)(基于虚拟节点创建 dom 节点)---\x3ediff(状态更新后，进行对比，生成补丁对象)---\x3epatch(遍历补丁对象，更新 dom 节点)")]),e._v(" "),n("p",[e._v("Render 函数只有 3 个参数：")]),e._v(" "),n("p",[e._v("(1)、要渲染的元素或者组件，可以是一个 html 标签、组件选项或一个函数（不常用）,该参数为必填参数。")]),e._v(" "),e._m(6),n("p",[e._v("(2)、对应属性的数据对象，比如组件的 props、元素 class、绑定事件、slot、自定义指令等")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js 的文档查看，没必要全部记住，用到时查阅就好"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("(3)、子节点，可选，String 或者 Array,它同样是一个 h")]),e._v(" "),n("p",[e._v("约束：VNode 必须唯一")]),e._v(" "),n("p",[e._v("所有的组件树中，如果 vNode 是组件或含有组件的 slot，那么 vNode 必须唯一")]),e._v(" "),n("p",[e._v("Render 函数的基本用法还有很多，比如 v-model 的用法、事件和修饰符、slot 等，读者可以到 Vue.js 文档阅读"),n("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/render-function.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js 渲染函数"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("使用场景：")]),e._v(" "),n("p",[e._v("1、使用两个相同 slot。在 template 中，Vue.js 不允许使用两个相同的 slot")]),e._v(" "),n("p",[e._v("2、在 runtime 版本的 Vue.js 中，如果使用 Vue.extend 手动构造一个实例，使用 template 选项是会报错的，在第 9 节中也有所介绍。解决方案也很简单，把 template 改写为 Render 就可以了。需要注意的是，在开发独立组件时，可以通过配置 Vue.js 版本来使 template 选项可用，但这是在自己的环境，无法保证使用者的 Vue.js 版本，所以对于提供给他人用的组件，是需要考虑兼容 runtime 版本和 SSR 环境的。")]),e._v(" "),n("p",[e._v("3、这可能是使用 Render 函数最重要的一点。一个 Vue.js 组件，有一部分内容需要从父级传递来显示，如果是文本之类的，直接通过 props 就可以，如果这个内容带有样式或复杂一点的 html 结构，可以使用 v-html 指令来渲染，父级传递的仍然是一个 HTML Element 字符串，不过它仅仅是能解析正常的 html 节点且有 XSS 风险。当需要最大化程度自定义显示内容时，就需要 Render 函数，它可以渲染一个完整的 Vue.js 组件。你可能会说，用 slot 不就好了？的确，slot 的作用就是做内容分发的，但在一些特殊组件中，可能 slot 也不行。比如一个表格组件 Table，它只接收两个 props：列配置 columns 和行数据 data，不过某一列的单元格，不是只将数据显示出来那么简单，可能带有一些复杂的操作，这种场景只用 slot 是不行的，没办法确定是那一列的 slot。这种场景有两种解决方案，其一就是 Render 函数，下一节的实战就是开发这样一个 Table 组件；另一种是用作用域 slot（slot-scope）")]),e._v(" "),n("p",[e._v("4、在 SSR 环境（服务端渲染），如果不是常规的 template 写法，比如通过 Vue.extend 和 new Vue 构造来生成的组件实例，是编译不过的，在前面小节也有所介绍。回顾上一节的 $Alert 组件的 notification.js 文件，当时是使用 Render 函数来渲染 Alert 组件，如果改成另一种写法，在 SSR 中会报错")]),e._v(" "),n("p",[e._v("参考："),n("a",{attrs:{href:"https://www.w3cplus.com/vue/vue-render-function.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue 2.0 学习笔记：Vue 的 render 函数"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("2、Vue cli 脚手架是一个基于 Vue.js 进行快速开发的完整系统。")]),e._v(" "),n("p",[e._v("3、Vue Router")]),e._v(" "),n("p",[e._v("3.1 两张模式：")]),e._v(" "),n("p",[e._v("Hash 模式")]),e._v(" "),n("p",[e._v("History 模式，模式利用 H5 History 新增加的 pushState()和 replaceState()方法,两个方法，应用到浏览器历史记录的增加替换功能上。")]),e._v(" "),n("p",[e._v("Hash 模式")]),e._v(" "),n("p",[e._v("使用 url 的 hash 来模拟一个完整的 url，此时 url 变化，浏览器不会重新加载。#锚点代表网页中的一个位置。仅仅对浏览器进行指导，而对服务端完全没有作用。不会包括在 http 请求中，故也不会重新加载页面。")]),e._v(" "),n("p",[e._v("动态路由匹配：")]),e._v(" "),n("p",[e._v("把某种模式匹配到所有的路由，全部映射到同一个组件，我们有一个 User 组件,对于所有 ID 各不相同的用户,都要使用这个组件来渲染.这时我们就可以配置动态路由来实现。本质就是通过 url 进行传参")]),e._v(" "),n("p",[e._v("路由对象属性：")]),e._v(" "),n("p",[e._v("在组件中可以通过 this.$route 访问。")]),e._v(" "),n("p",[e._v("params、query、name、hash、pullPath、matched、redirectedFrom")]),e._v(" "),n("p",[e._v("使用 params 进行配置、通过 query 进行配置传参")]),e._v(" "),n("p",[e._v("工作整理：")]),e._v(" "),n("p",[e._v("路由组件传参：")]),e._v(" "),n("p",[e._v("params 和 query：本质是把参数放在 url 上，通过改变 url 进行的，这样会造成参数和组件的高度耦合，可以使用 rute 的 props 进行解耦，提高组件的复用，同时不改变 url")]),e._v(" "),n("p",[e._v("配置 params：")]),e._v(" "),n("p",[e._v("父组件：")]),e._v(" "),e._m(7),n("p",[e._v("对应路由配置:这里可以添加:/id，可不添加")]),e._v(" "),n("p",[e._v("子组件：")]),e._v(" "),e._m(8),n("p",[e._v("配置 query：\n父组件：")]),e._v(" "),e._m(9),n("p",[e._v("子组件：")]),e._v(" "),e._m(10),n("p",[e._v("由于路由参数对组件实例是复用的.例如:/user/foo 和 /user/bar 在使用路由参数时,复用的都是 User 组件.此时组件的生命周期钩子不会再被调用。如果你想路径切换时,进行一些初始化操作时,可以用以下两种解决办法:")]),e._v(" "),n("p",[e._v("在组件内 watch $route 对象：")]),e._v(" "),e._m(11),n("p",[e._v("使用 2.2 版本中的 beforeRouteUpdate 路由守卫：")]),e._v(" "),e._m(12),n("p",[e._v("当一个路由被匹配时，它的 params 的值将在每个组件中以 this.$route.params 的形式暴露出来。")]),e._v(" "),n("p",[e._v("除了$route.params之外，$route 还公开了其他有用的信息如$route.query（如果 url 中存在参数）等")]),e._v(" "),n("p",[e._v("3.2")]),e._v(" "),n("p",[e._v("导航守卫")]),e._v(" "),n("p",[e._v("主要用来通过跳转或者取消的方式守卫导航")]),e._v(" "),n("p",[e._v("全局的，单个路由独享，或者组件级的")]),e._v(" "),n("p",[e._v("全局前置守卫")]),e._v(" "),n("p",[e._v("守卫是异步解析执行，接受两个参数：to：即将要进入的目标；from：当前导航正要离开的路由，可选的第三个参数：next")]),e._v(" "),n("p",[e._v("3.3")]),e._v(" "),n("p",[e._v("路由懒加载")]),e._v(" "),n("p",[e._v("能把不同的路由对应的组件拆分成不同的代码块，然后当路由被访问的时候才加载对应的组件")]),e._v(" "),n("p",[e._v("3.4")]),e._v(" "),n("p",[e._v("路由元信息")]),e._v(" "),n("p",[e._v("将信息附加到路由上，可以通过接受属性对象的 meta 属性来实现，并且它可以在路由地址和导航守卫上被访问到。")]),e._v(" "),n("p",[e._v("称呼 routes 配置中每个路由对象为路由记录。")]),e._v(" "),n("p",[e._v("3.5")]),e._v(" "),n("p",[e._v("滚动行为")]),e._v(" "),n("p",[e._v("这个功能只支持 history.pushState 的浏览器中可用")]),e._v(" "),n("p",[e._v("在 Router 实例中，可以提供一个 scrollBehavior(to,from,savedPosition)")]),e._v(" "),n("p",[e._v("参考："),n("a",{attrs:{href:"https://juejin.im/post/5b82bcfcf265da4345153343",target:"_blank",rel:"noopener noreferrer"}},[e._v("VueRouter 完全指北"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("4、 Vue Vuex")]),e._v(" "),n("p",[e._v("简单理解：state（数据源）中定义数据后，可以在所在项目中的任何一个组件里进行获取、修改，修改可以得到全局的响应变更。")]),e._v(" "),n("p",[e._v("核心思想：")]),e._v(" "),n("p",[e._v("Vuex 应用的核心就是 store(仓库)。'store'基本就是一个容器，包含着应用中的大部分状态（state）")]),e._v(" "),n("p",[e._v("Vuex 和单纯的全局对象有以下两点不同：")]),e._v(" "),n("p",[e._v("(1)、Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的的时候，若 store 中的状态发生变化，那么响应的组件也会相应的高效更新。")]),e._v(" "),n("p",[e._v("(2)、不能直接改变 store 中的状态。改变 store 中唯一的状态就是提交（commit）mutation。")]),e._v(" "),n("p",[e._v("Vuex 包含 5 个基本对象：")]),e._v(" "),n("p",[e._v("State：单一状态树")]),e._v(" "),n("p",[e._v("mapState 辅助函数：用于批量映射 store 中的状态")]),e._v(" "),n("p",[e._v("当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性")]),e._v(" "),n("p",[e._v("当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性")]),e._v(" "),n("p",[e._v("「在 Vuex 模块化中，state 是唯一会根据组合时模块的别名来添加层级的，后面的 getters、mutations 以及 actions 都是直接合并在 store 下」。")]),e._v(" "),n("p",[e._v("Getter:计算属性")]),e._v(" "),n("p",[e._v("Mutation：用于提交更改 store 中的状态")]),e._v(" "),n("p",[e._v("更改 state 的方式只有提交 mutation,大家可以把他想象成 vue 中 methods 中的一个方法")]),e._v(" "),n("p",[e._v("Action:用于提交 mutation,可以包含异步操作")]),e._v(" "),n("p",[e._v("Module:当应用程序很大时，需要管理状态很多时，需要将 state 进行拆分，分隔成模块（modules）,最后统一管理")]),e._v(" "),n("p",[e._v("Vue.Store 实例方法")]),e._v(" "),n("p",[e._v("subscribeAction：subscribeAction(handler: Function): Function")]),e._v(" "),n("p",[e._v("订阅 store 的 action。handler 会在每个 action 分发的时候调用并接收 action 描述和当前的 store 的 state 这两个参数：")]),e._v(" "),e._m(13),n("p",[e._v("要停止订阅，调用此方法返回的函数即可停止订阅。")]),e._v(" "),n("p",[e._v("从 3.1.0 起，subscribeAction 也可以指定订阅处理函数的被调用时机应该在一个 action 分发之前还是之后 (默认行为是之前)：")]),e._v(" "),e._m(14),e._v(" "),n("p",[e._v("该功能常用于插件:"),n("a",{attrs:{href:"https://vuex.vuejs.org/zh/guide/plugins.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("详细内容"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("参考：")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.im/post/5d500d0de51d453b5c121890#heading-12",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue 系列-vuex 理解"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("二、日志整理")]),e._v(" "),n("p",[e._v("2.1 开发使用插件：")]),e._v(" "),n("p",[e._v("1)、"),n("a",{attrs:{href:"https://github.com/xyxiao001/vue-cropper",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-cropper"),n("OutboundLink")],1),e._v("一个简单的图片剪辑插件为 vue")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/weixin_39327044/article/details/89765109",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue+element 学习之路（九）vue-cropper 图片裁剪上传"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("2)、"),n("a",{attrs:{href:"https://github.com/dai-siki/vue-image-crop-upload",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-image-crop-upload"),n("OutboundLink")],1),e._v("vue 图片剪裁上传组件")]),e._v(" "),n("p",[e._v("3)、"),n("a",{attrs:{href:"https://github.com/fengyuanchen/viewerjs",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaScript image viewer."),n("OutboundLink")],1),e._v("、查看图片")]),e._v(" "),n("p",[e._v("4)、"),n("a",{attrs:{href:"https://mirari.cc/v-viewer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("v-viewer"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("5)、"),n("a",{attrs:{href:"https://github.com/Wanderxx/vue-fullcalendar",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue 日历组件"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"http://blog.yidengxuetang.com/post/201907/19/",target:"_blank",rel:"noopener noreferrer"}},[e._v("11 个顶级 JavaScript 日历插件"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("6)、"),n("a",{attrs:{href:"https://github.com/surmon-china/vue-video-player",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue 视频播放组件"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/qq_21454973/article/details/90256429",target:"_blank",rel:"noopener noreferrer"}},[e._v("基于 Vue 的直播播放器实战"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("7)、"),n("a",{attrs:{href:"https://github.com/ElemeFE/v-charts",target:"_blank",rel:"noopener noreferrer"}},[e._v("v-charts 基于 Vue2.0 和 ECharts 封装的图表组件"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("8)、"),n("a",{attrs:{href:"https://www.echartsjs.com/zh/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("charts"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("9)、"),n("a",{attrs:{href:"https://v-charts.js.org/#/bar",target:"_blank",rel:"noopener noreferrer"}},[e._v("v-charts"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("10)、"),n("a",{attrs:{href:"https://www.jianshu.com/p/a045f3bacb6f",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue 直播组件"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000011346597",target:"_blank",rel:"noopener noreferrer"}},[e._v("WEB 直播技术入门及在 Vue 中应用 video.js"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("11)、"),n("a",{attrs:{href:"https://github.com/riophae/vue-treeselect",target:"_blank",rel:"noopener noreferrer"}},[e._v("具有 Vue.js 嵌套选项的多选组件"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("11）、bilibili 开源的播放器也是很不错的"),n("a",{attrs:{href:"https://github.com/Bilibili/flv.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("flv.js"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("2.2 工作遇到：")]),e._v(" "),n("p",[e._v("1)、理解 oAuth2 协议（未实践）")]),e._v(" "),n("p",[e._v("oAuth 是一个关于授权的开放网络标准，用来授权第三方应用，获取用户数据，最终目的是给第三方的应用颁发一个有时效性的令牌 access_token,第三方应用根据这个 access_token 就可以获取用户的相关资料、数据")]),e._v(" "),n("p",[e._v("oAuth2.0 的协议是这个"),n("a",{attrs:{href:"https://tools.ietf.org/html/rfc6749",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 6749"),n("OutboundLink")],1),e._v("提取出来。")]),e._v(" "),n("p",[e._v("协议流程\n+--------+                               +---------------+\n |        |--(A)- Authorization Request ->|   Resource    |\n |        |                               |     Owner（资源所有者）     |\n |        |<-(B)-- Authorization Grant ---|               |\n |        |                               +---------------+\n |        |\n |        |                               +---------------+\n |        |--(C)-- Authorization Grant --\x3e| Authorization |\n | Client |                               |     Server（授权服务器）    |\n |  （客户端）      |<-(D)----- Access Token -------|               |\n |        |                               +---------------+\n |        |\n |        |                               +---------------+\n |        |--(E)----- Access Token ------\x3e|    Resource   |\n |        |                               |     Server（资源服务器）    |\n |        |<-(F)--- Protected Resource ---|               |\n +--------+                               +---------------+\n1、客户端---\x3e授权服务器\n2、用户同意给客户端授权\n3、客户端用授权去向认证服务器认证\n4、认证服务器通过认证，会给客户端发放令牌\n5、客户端拿着令牌，去资源服务器申请获取资源\n6、资源服务器确认令牌后，给客户端返回受保护的资源")]),e._v(" "),n("p",[e._v("授权方式")]),e._v(" "),n("p",[e._v("授权码模式:流程最完整和严密的一种授权方式，服务器和客户端配合使用，主要是针对 web 服务器的情况采用")]),e._v(" "),n("p",[e._v("简化模式:主要用于移动应用程序或纯前端的 web 应用程序，主要是针对没有 web 服务器的情况采用")]),e._v(" "),n("p",[e._v("密码模式:不推荐，用户需要向客户端提供自己的账号和密码，如果客户端是自家应用的话，也是可以的")]),e._v(" "),n("p",[e._v("客户端模式:客户端以自己的名义，而不是用户的名义，向“服务提供商”进行认证，如微信公众号以此 access_token 来拉取所有已关注用户的信息，docker 到 dockerhub 拉取镜像等")]),e._v(" "),n("p",[e._v("单点登录：单点登录就是在多个系统中，用户只需登录一次，各个系统就可以感知该用户已经登录。")]),e._v(" "),n("p",[e._v("单点登录实现方案：")]),e._v(" "),n("p",[e._v("同父域下的单点登录解决方案")]),e._v(" "),n("p",[e._v("如 hr.oa.com、km.oa.com、fuli.oa.com,cookie domain 属性共享 cookie，session 共享，基于 cookie，session")]),e._v(" "),n("p",[e._v("不同域下的单点登录:")]),e._v(" "),n("p",[e._v("如 www.taobao.com|www.tmall.com,基于中央认证服务器开源项目代表：CAS")]),e._v(" "),n("p",[e._v("参考文章：")]),e._v(" "),n("p",[n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html#support",target:"_blank",rel:"noopener noreferrer"}},[e._v("OAuth 2.0 的四种方式"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/USTB-musion/fee-skills",target:"_blank",rel:"noopener noreferrer"}},[e._v("理解 OAuth2 协议"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("三、进阶提升")]),e._v(" "),n("p",[e._v("四、Vue 技术结合 UI 模板集成后台管理项目")]),e._v(" "),n("p",[e._v("1、"),n("a",{attrs:{href:"https://panjiachen.github.io/vue-element-admin-site/zh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("admin-template"),n("OutboundLink")],1),e._v("\n是一个后台前端解决方案，它基于 vue 和 element-ui 实现。它使用了最新的前端技术栈，内置了 i18 国际化解决方案，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。")]),e._v(" "),n("p",[e._v("2、"),n("a",{attrs:{href:"https://lison16.github.io/iview-admin-doc/#/",target:"_blank",rel:"noopener noreferrer"}},[e._v("iView-admin"),n("OutboundLink")],1),e._v("是 iView 生态中的成员之一，是一套采用前后端分离开发模式，基于 Vue 的后台管理系统前端解决方案。iView-admin2.0 脱离 1.x 版本进行重构，换用 Webpack4.0 + Vue-cli3.0 作为基本开发环境。内置了开发后台管理系统常用的逻辑功能，和开箱即用的业务组件，旨在让开发者能够以最小的成本开发后台管理系统，降低开发量。")]),e._v(" "),n("p",[e._v("3、"),n("a",{attrs:{href:"https://mgbq.github.io/nx-admin-site/zh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nx-admin"),n("OutboundLink")],1),e._v("是基于 Vue2.0，配合使用 Element UI 组件库的一个前端管理后台集成解决方案。它使用了最新的前端技术栈，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。("),n("a",{attrs:{href:"https://github.com/mgbq/nx-admin",target:"_blank",rel:"noopener noreferrer"}},[e._v("集成方案"),n("OutboundLink")],1),e._v("、"),n("a",{attrs:{href:"https://github.com/mgbq/nxAdmin-template",target:"_blank",rel:"noopener noreferrer"}},[e._v("基础模板"),n("OutboundLink")],1),e._v(")")]),e._v(" "),n("p",[e._v("4、"),n("a",{attrs:{href:"https://github.com/d2-projects/d2-admin",target:"_blank",rel:"noopener noreferrer"}},[e._v("D2Admin"),n("OutboundLink")],1),e._v("是一个完全 开源免费 的企业中后台产品前端集成方案，使用最新的前端技术栈，小于 60kb 的本地首屏 js 加载，已经做好大部分项目前期准备工作，并且带有大量示例代码，助力管理系统快速开发。")]),e._v(" "),n("p",[e._v("5、"),n("a",{attrs:{href:"https://www.iviewui.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("View UI"),n("OutboundLink")],1),e._v("即原先的 iView，是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。")]),e._v(" "),n("p",[e._v("6、"),n("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN",target:"_blank",rel:"noopener noreferrer"}},[e._v("Element"),n("OutboundLink")],1),e._v("一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库")]),e._v(" "),n("p",[e._v("7、"),n("a",{attrs:{href:"https://home.vilson.xyz/#/home",target:"_blank",rel:"noopener noreferrer"}},[e._v("PearProject"),n("OutboundLink")],1),e._v("梨子项目管理系统，一款轻量级的在线项目/任务协作系统，目前已支持项目管理、任务管理、账号管理、文件管理、团队管理和权限管理等多项功能，是中小型团队进行互相协作的最佳选择。未来我们还将持续迭代新功能，致力于打造一个灵活、高效、易用、有趣的协作系统，帮助大家提升协作效率并且降低团队沟通成本。")]),e._v(" "),n("p",[e._v("8、"),n("a",{attrs:{href:"https://github.com/fishman17/vue-wyclass",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue 仿网易云课堂"),n("OutboundLink")],1),e._v("Vue2.0 + Mint-ui 快速构建前端界面")]),e._v(" "),n("p",[e._v("9、"),n("a",{attrs:{href:"https://gitee.com/roncoocom/roncoo-education",target:"_blank",rel:"noopener noreferrer"}},[e._v("领课学院"),n("OutboundLink")],1),e._v("领课教育系统（roncoo-education）是基于领课网络多年的在线教育平台开发和运营经验打造出来的产品，致力于打造一个各行业都适用的分布式在线教育系统。系统采用前后端分离模式，前台采用 vue.js 为核心框架，后台采用 Spring Cloud 为核心框架。系统目前主要功能有课程点播功能，支持多家视频云的接入，课程附件管理功能，支持多家存储云的接入，讲师管理功能，支持讲师入驻功能，可以帮助个人或者企业快速搭建一个轻量级的在线教育平台。")]),e._v(" "),n("p",[e._v("10、"),n("a",{attrs:{href:"https://github.com/se7en-1992/5se7en.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("nuxtjs+express+vue2.0+vuex 搭建的服务端渲染个人网站项目"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("11、"),n("a",{attrs:{href:"https://github.com/armour/vue-typescript-admin-template",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-typescript-admin-template"),n("OutboundLink")],1),e._v("是基于 vue，typescript 和 UI Toolkit element-ui 的管理界面的生产就绪前端解决方案。原始 Javascript 版本代码 vue-element-admin 由 PanJiaChen 编写，非常感谢他的出色开源项目")]),e._v(" "),n("p",[e._v("12、"),n("a",{attrs:{href:"https://github.com/Ljhhhhhh/h5vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("h5Vue"),n("OutboundLink")],1),e._v("基于 vue+vant 搭建 h5 通用架子")]),e._v(" "),n("p",[e._v("13、"),n("a",{attrs:{href:"https://d2.pub/zh/doc/d2-admin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("D2Admin"),n("OutboundLink")],1),e._v("是一个完全 开源免费 的企业中后台产品前端集成方案，使用最新的前端技术栈，小于 60kb 的本地首屏 js 加载，已经做好大部分项目前期准备工作，并且带有大量示例代码，助力管理系统快速开发。")]),e._v(" "),n("p",[e._v("14、"),n("a",{attrs:{href:"http://doc.cms.talelin.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lin CMS"),n("OutboundLink")],1),e._v("是林间有风团队经过大量项目实践所提炼出的一套内容管理系统框架。")]),e._v(" "),n("p",[e._v("是一套前后端完整的解决方案，后端部署请移步")]),e._v(" "),n("p",[e._v("Lin 既提供后台的支撑，也有一套对应的前端系统，当然双端分离的好处不仅仅 在于此，Lin 目前已有 Python 、Node.js 和 Java 版本的实现。")]),e._v(" "),n("p",[e._v("15、"),n("a",{attrs:{href:"https://github.com/bestRenekton/taoLand",target:"_blank",rel:"noopener noreferrer"}},[e._v("博客：vue 全家桶+node+mongodb"),n("OutboundLink")],1),e._v("，"),n("a",{attrs:{href:"https://github.com/bestRenekton/taoland-react",target:"_blank",rel:"noopener noreferrer"}},[e._v("2020 年用 TypeScript,React,Koa 重构了前后端,支持 SSR,PWA"),n("OutboundLink")],1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"一、基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、基础"}},[this._v("#")]),this._v(" 一、基础")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{attrs:{id:"_1、vue-api-2-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、vue-api-2-x"}},[this._v("#")]),this._v(" 1、Vue API 2.x")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{attrs:{id:"_1-1-全局-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-全局-api"}},[this._v("#")]),this._v(" 1.1 全局 API")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<template>\n    <div id="app">\n        <div ref="msgDiv" id="msgDiv" v-if="showDiv">{{msg1}}</div>\n\n        <button @click="changeMsg">点击我</button>\n    </div>\n</template>\n\n\n<script>\nexport default {\n  name: \'HelloWorld\',\n  data () {\n     return {\n            msg1: "你我贷",\n            showDiv:false\n          }\n  },\n  methods:{\n     changeMsg(){\n        this.showDiv = true\n\n       console.log(document.getElementById("msgDiv"))\n       this.$nextTick(function(){\n                    console.log(document.getElementById("msgDiv"))\n        })\n\n     }\n  }\n}\n<\/script>\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<template>\n    <div id="app">\n        <div ref="msgDiv">{{msg1}}</div>\n        <br/>\n        <div>{{msg2}}</div>\n        <br/><br/>\n        <button @click="changeMsg">点击我</button>\n    </div>\n</template>\n\n\n<script>\nexport default {\n  name: \'HelloWorld\',\n  data () {\n     return {\n            msg1: "你我贷",\n            msg2: "理财"\n          }\n  },\n  methods:{\n     changeMsg(){\n       this.msg1 = "飞旋"\n       console.log(this.$refs.msgDiv.textContent)\n        this.$nextTick(function(){\n        console.log(this.$refs.msgDiv.textContent)\n       })\n     }\n  }\n}\n<\/script>\n\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h5",{attrs:{id:"_1-2-dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-dom"}},[this._v("#")]),this._v(" 1.2 DOM")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("h('div') html标签\n\nimport Datapicker from '../component/datapicker.vue'\n\nh(Datapicker) 组件选项\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br"),t("span",{staticClass:"line-number"},[this._v("4")]),t("br"),t("span",{staticClass:"line-number"},[this._v("5")]),t("br")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("this.$router.push({\n          name: 'Describe',\n          params: {\n            id: id\n          }\n        })\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("this.$route.params.id\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" this.$router.push({\n          path: '/describe',\n          query: {\n            id: id\n          }\n        })\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("this.$route.query.id\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const User = {\n template: '...',\n watch: {\n   '$route' (to, from) {\n     // 对路由变化作出响应...\n   }\n }\n}\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const User = {\n  template: '...',\n  beforeRouteUpdate (to, from, next) {\n\t// react to route changes...\n\t// don't forget to call next()\n  }\n}\n\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("store.subscribeAction((action, state) => {\n  console.log(action.type)\n  console.log(action.payload)\n})\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br"),t("span",{staticClass:"line-number"},[this._v("4")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("store.subscribeAction({\nbefore: (action, state) => {\nconsole.log("),t("code",[this._v("before action ${action.type}")]),this._v(")\n},\nafter: (action, state) => {\nconsole.log("),t("code",[this._v("after action ${action.type}")]),this._v(")\n}\n})")])}],!1,null,null,null);t.default=s.exports}}]);