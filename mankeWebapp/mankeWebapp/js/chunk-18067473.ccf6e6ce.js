(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18067473"],{"4a22":function(t,e,i){},"81c0":function(t,e,i){},b258:function(t,e,i){},d399:function(t,e,i){"use strict";var n=i("c31d"),a=i("2b0e"),c=i("d282"),s=i("a142"),o=0;function l(t){t?(o||document.body.classList.add("van-toast--unclickable"),o++):(o--,o||document.body.classList.remove("van-toast--unclickable"))}var r=i("6605"),d=i("ad06"),u=i("543e"),f=Object(c["a"])("toast"),v=f[0],m=f[1],h=v({mixins:[Object(r["a"])()],props:{icon:String,className:null,iconPrefix:String,loadingType:String,forbidClick:Boolean,closeOnClick:Boolean,message:[Number,String],type:{type:String,default:"text"},position:{type:String,default:"middle"},transition:{type:String,default:"van-fade"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},mounted:function(){this.toggleClickable()},destroyed:function(){this.toggleClickable()},watch:{value:"toggleClickable",forbidClick:"toggleClickable"},methods:{onClick:function(){this.closeOnClick&&this.close()},toggleClickable:function(){var t=this.value&&this.forbidClick;this.clickable!==t&&(this.clickable=t,l(t))},onAfterEnter:function(){this.$emit("opened"),this.onOpened&&this.onOpened()},onAfterLeave:function(){this.$emit("closed")},genIcon:function(){var t=this.$createElement,e=this.icon,i=this.type,n=this.iconPrefix,a=this.loadingType,c=e||"success"===i||"fail"===i;return c?t(d["a"],{class:m("icon"),attrs:{classPrefix:n,name:e||i}}):"loading"===i?t(u["a"],{class:m("loading"),attrs:{type:a}}):void 0},genMessage:function(){var t=this.$createElement,e=this.type,i=this.message;if(Object(s["c"])(i)&&""!==i)return"html"===e?t("div",{class:m("text"),domProps:{innerHTML:i}}):t("div",{class:m("text")},[i])}},render:function(){var t,e=arguments[0];return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[e("div",{directives:[{name:"show",value:this.value}],class:[m([this.position,(t={},t[this.type]=!this.icon,t)]),this.className],on:{click:this.onClick}},[this.genIcon(),this.genMessage()])])}}),b=i("092d"),p={icon:"",type:"text",mask:!1,value:!0,message:"",className:"",overlay:!1,onClose:null,onOpened:null,duration:2e3,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,getContainer:"body",overlayStyle:null,closeOnClick:!1,closeOnClickOverlay:!1},g={},x=[],y=!1,k=Object(n["a"])({},p);function O(t){return Object(s["e"])(t)?t:{message:t}}function j(t){return document.body.contains(t)}function C(){if(s["g"])return{};if(x=x.filter((function(t){return j(t.$el)})),!x.length||y){var t=new(a["a"].extend(h))({el:document.createElement("div")});t.$on("input",(function(e){t.value=e})),x.push(t)}return x[x.length-1]}function I(t){return Object(n["a"])({},t,{overlay:t.mask||t.overlay,mask:void 0,duration:void 0})}function $(t){void 0===t&&(t={});var e=C();return e.value&&e.updateZIndex(),t=O(t),t=Object(n["a"])({},k,g[t.type||k.type],t),t.clear=function(){e.value=!1,t.onClose&&t.onClose(),y&&!s["g"]&&e.$on("closed",(function(){clearTimeout(e.timer),x=x.filter((function(t){return t!==e})),Object(b["a"])(e.$el),e.$destroy()}))},Object(n["a"])(e,I(t)),clearTimeout(e.timer),t.duration>0&&(e.timer=setTimeout((function(){e.clear()}),t.duration)),e}var S=function(t){return function(e){return $(Object(n["a"])({type:t},O(e)))}};["loading","success","fail"].forEach((function(t){$[t]=S(t)})),$.clear=function(t){x.length&&(t?(x.forEach((function(t){t.clear()})),x=[]):y?x.shift().clear():x[0].clear())},$.setDefaultOptions=function(t,e){"string"===typeof t?g[t]=e:Object(n["a"])(k,t)},$.resetDefaultOptions=function(t){"string"===typeof t?g[t]=null:(k=Object(n["a"])({},p),g={})},$.allowMultiple=function(t){void 0===t&&(t=!0),y=t},$.install=function(){a["a"].use(h)},a["a"].prototype.$toast=$;e["a"]=$},d8ac:function(t,e,i){},e7e5:function(t,e,i){"use strict";i("68ef"),i("a71a"),i("9d70"),i("3743"),i("4d75"),i("e3b3"),i("b258")},f45e:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-nav-bar",{attrs:{title:"商品分类","left-text":"","right-text":"","left-arrow":""},on:{"click-left":t.onClickLeft}}),i("van-tree-select",{attrs:{items:t.items,"active-id":t.items.activeId,"main-active-index":t.items.activeId},on:{"update:activeId":function(e){return t.$set(t.items,"activeId",e)},"update:active-id":function(e){return t.$set(t.items,"activeId",e)},"update:mainActiveIndex":function(e){return t.$set(t.items,"activeId",e)},"update:main-active-index":function(e){return t.$set(t.items,"activeId",e)},"click-item":function(){t.onitemclick(t.items.id)},"click-nav":t.onnavclick}})],1)},a=[],c=(i("e7e5"),i("d399")),s=(i("5246"),i("6b41")),o=(i("68ef"),i("9d70"),i("81c0"),i("3743"),i("d8ac"),i("4a22"),i("2638")),l=i.n(o),r=i("d282"),d=i("a142"),u=i("ea8e"),f=i("ba31"),v=i("ad06"),m=i("9884"),h=Object(r["a"])("sidebar"),b=h[0],p=h[1],g=b({mixins:[Object(m["b"])("vanSidebar")],model:{prop:"activeKey"},props:{activeKey:{type:[Number,String],default:0}},data:function(){return{index:+this.activeKey}},watch:{activeKey:function(){this.setIndex(+this.activeKey)}},methods:{setIndex:function(t){t!==this.index&&(this.index=t,this.$emit("change",t))}},render:function(){var t=arguments[0];return t("div",{class:p()},[this.slots()])}}),x=i("c31d"),y=i("48f4"),k=i("6f2f"),O=Object(r["a"])("sidebar-item"),j=O[0],C=O[1],I=j({mixins:[Object(m["a"])("vanSidebar")],props:Object(x["a"])({},y["c"],{dot:Boolean,info:[Number,String],badge:[Number,String],title:String,disabled:Boolean}),computed:{select:function(){return this.index===+this.parent.activeKey}},methods:{onClick:function(){this.disabled||(this.$emit("click",this.index),this.parent.$emit("input",this.index),this.parent.setIndex(this.index),Object(y["b"])(this.$router,this))}},render:function(){var t=arguments[0];return t("a",{class:C({select:this.select,disabled:this.disabled}),on:{click:this.onClick}},[t("div",{class:C("text")},[this.title,t(k["a"],{attrs:{dot:this.dot,info:Object(d["c"])(this.badge)?this.badge:this.info},class:C("info")})])])}}),$=Object(r["a"])("tree-select"),S=$[0],N=$[1];function w(t,e,i,n){var a=e.items,c=e.height,s=e.activeId,o=e.selectedIcon,r=e.mainActiveIndex,m=a[+r]||{},h=m.children||[],b=Array.isArray(s);function p(t){return b?-1!==s.indexOf(t):s===t}var x=a.map((function(e){return t(I,{attrs:{dot:e.dot,info:Object(d["c"])(e.badge)?e.badge:e.info,title:e.text,disabled:e.disabled},class:[N("nav-item"),e.className]})}));function y(){return i.content?i.content():h.map((function(i){return t("div",{key:i.id,class:["van-ellipsis",N("item",{active:p(i.id),disabled:i.disabled})],on:{click:function(){if(!i.disabled){var t=i.id;if(b){t=s.slice();var a=t.indexOf(i.id);-1!==a?t.splice(a,1):t.length<e.max&&t.push(i.id)}Object(f["a"])(n,"update:active-id",t),Object(f["a"])(n,"click-item",i),Object(f["a"])(n,"itemclick",i)}}}},[i.text,p(i.id)&&t(v["a"],{attrs:{name:o},class:N("selected")})])}))}return t("div",l()([{class:N(),style:{height:Object(u["a"])(c)}},Object(f["b"])(n)]),[t(g,{class:N("nav"),attrs:{activeKey:r},on:{change:function(t){Object(f["a"])(n,"update:main-active-index",t),Object(f["a"])(n,"click-nav",t),Object(f["a"])(n,"navclick",t)}}},[x]),t("div",{class:N("content")},[y()])])}w.props={max:{type:[Number,String],default:1/0},items:{type:Array,default:function(){return[]}},height:{type:[Number,String],default:300},activeId:{type:[Number,String,Array],default:0},selectedIcon:{type:String,default:"success"},mainActiveIndex:{type:[Number,String],default:0}};var A=S(w),E=i("2b0e");E["a"].use(A),E["a"].use(s["a"]),E["a"].use(c["a"]);var L={data:function(){return{items:[{text:"小说",className:"my-class",children:[{text:"全部小说",id:11},{text:"诗词散文",id:12}]},{text:"杂志",className:"my-class",children:[{text:"知音漫客",id:21},{text:"漫客绘心",id:22},{text:"漫客绘意",id:23},{text:"漫客小说绘",id:24}]},{text:"绘本",className:"my-class",children:[{text:"全部绘本",id:31},{text:"国学经典",id:32}]},{text:"周边",className:"my-class",children:[{text:"勇者是女孩",id:41},{text:"哑舍",id:42},{text:"偷星九月天",id:43},{text:"斗破苍穹",id:44}]},{text:"漫画",className:"my-class",children:[{text:"浪漫小说",id:51},{text:"偷星九月天",id:52}]}],activeId:1,activeIndex:0}},methods:{onnavclick:function(t){},onitemclick:function(t){this.$router.push({path:"/novel/",query:{data:t}})},onClickLeft:function(){this.$router.push({name:"Home"})}}},K=L,T=i("2877"),B=Object(T["a"])(K,n,a,!1,null,"42b30474",null);e["default"]=B.exports}}]);
//# sourceMappingURL=chunk-18067473.ccf6e6ce.js.map