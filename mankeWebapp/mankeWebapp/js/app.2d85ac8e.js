(function(e){function t(t){for(var a,r,i=t[0],u=t[1],s=t[2],l=0,h=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(h.length)h.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0cb48a64":"a331599f","chunk-18067473":"ccf6e6ce","chunk-256572da":"6b4f4dc6","chunk-41fa0a7e":"b6f917be","chunk-4a31691e":"724651bf","chunk-75cb61dd":"e679b8f4","chunk-79cdc8b4":"37891bd5","chunk-7e48c9cd":"f8019cf9","chunk-aeb12ef8":"55753d00","chunk-b1392474":"688ad1f4","chunk-ded38f8c":"9878fece"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0cb48a64":1,"chunk-18067473":1,"chunk-256572da":1,"chunk-41fa0a7e":1,"chunk-4a31691e":1,"chunk-75cb61dd":1,"chunk-79cdc8b4":1,"chunk-7e48c9cd":1,"chunk-aeb12ef8":1,"chunk-b1392474":1,"chunk-ded38f8c":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0cb48a64":"39c349d7","chunk-18067473":"f45e0802","chunk-256572da":"fa335d49","chunk-41fa0a7e":"44c32be9","chunk-4a31691e":"df2ee864","chunk-75cb61dd":"65622913","chunk-79cdc8b4":"826448f7","chunk-7e48c9cd":"39c349d7","chunk-aeb12ef8":"776284e7","chunk-b1392474":"426c0f67","chunk-ded38f8c":"c52ebff2"}[e]+".css",o=u.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===o))return t()}var h=document.getElementsByTagName("style");for(i=0;i<h.length;i++){s=h[i],l=s.getAttribute("data-href");if(l===a||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var h=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",h.name="ChunkLoadError",h.type=a,h.request=r,n[1](h)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("van-sticky",{attrs:{"offset-top":"0"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-nav-bar",{staticClass:"title-class",attrs:{title:e.$store.state.common.navTitle,"left-text":"","right-text":"按钮","left-arrow":""},on:{"click-left":e.goBack,"click-right":e.goSearch}},[n("van-icon",{attrs:{slot:"right",name:"search"},slot:"right"})],1)],1),n("router-view",{attrs:{id:"content"}}),n("van-tabbar",{directives:[{name:"show",rawName:"v-show",value:e.showTabbar,expression:"showTabbar"}],attrs:{route:"",id:"tabbar"},on:{change:e.tabbarChange},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.menu,(function(t){return n("van-tabbar-item",{key:t.name,attrs:{badge:"cart"===t.name?e.cartLength:"",icon:t.icon,to:t.path}},[e._v(e._s(t.text))])})),1)],1)},o=[],c=(n("96cf"),n("1da1")),i=(n("0cc8"),n("3104")),u=(n("3c32"),n("417e")),s=(n("be7f"),n("565f")),l=(n("4662"),n("28a2")),h=(n("5f1a"),n("a3e2")),d=(n("a52c"),n("2ed4")),m=(n("5246"),n("6b41")),p=(n("537a"),n("ac28")),f=(n("66b9"),n("b650")),g=(n("4056"),n("44bf"));a["a"].use(g["a"]),a["a"].use(f["a"]),a["a"].use(p["a"]),a["a"].use(m["a"]),a["a"].use(d["a"]),a["a"].use(h["a"]),a["a"].use(g["a"]),a["a"].use(l["a"]),a["a"].use(s["a"]),a["a"].use(u["a"]),a["a"].use(m["a"]),a["a"].use(i["a"]);var b={data:function(){return{user:"",active:0,no:!1,menu:[{name:"home",path:"/home",icon:"wap-home-o",text:"首页"},{name:"sort",path:"/sort",icon:"cluster-o",text:"分类"},{name:"cart",path:"/cart",icon:"shopping-cart-o",text:"购物车"},{name:"profile",path:"/profile",icon:"user-o",text:"我的"}]}},computed:{cartLength:function(){return console.log(this.$store.state.goodslist),this.no?null:this.$store.state.cart.goodslist},showTabbar:function(){return this.$store.state.common.showTabbar}},methods:{goods:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,t.$request.get("./cart?username=".concat(e));case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})))()},tabbarChange:function(e){2===e&&(this.no=!0)},goBack:function(){this.$router.back(-1)},goSearch:function(){"商品列表"!=this.$router.currentRoute.meta.title&&this.$router.push("./novel")}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.user=JSON.parse(localStorage.getItem("currentUser")),!e.user){t.next=9;break}return console.log("username:",e.user.username),t.next=5,e.goods(e.user.username);case 5:n=t.sent,console.log("初始化"),e.$store.commit("initCart",n.length),console.log(n);case 9:case"end":return t.stop()}}),t)})))()}},v=b,k=(n("5c0b"),n("2877")),w=Object(k["a"])(v,r,o,!1,null,null,null),y=w.exports,x=(n("45fc"),n("d3b7"),n("8c4f")),_=(n("13d5"),n("2f62")),j=(n("9a83"),n("f564")),C=n("bc3a"),T=n.n(C),O=T.a.CancelToken.source(),S="",z=T.a.create({baseURL:S+"/api",withCredentials:!0});z.source=O;var N=z,E={state:{goodslist:""},mutations:{initCart:function(e,t){e.goodslist=t,console.log("goodslength:",e.goodslist)}},actions:{changeQtyAsync:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,r,o,c,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t._id,r=t.qty,console.log("context=",e),n.next=4,N.get("/goods/".concat(a,"/kucun"));case 4:o=n.sent,c=o.data,i=c.data,console.log("kucun=",i),i<r&&(Object(j["a"])({type:"danger",message:"库存不足"}),r=i),e.commit("changeQty",{_id:a,qty:r});case 10:case"end":return n.stop()}}),n)})))()},getCart:function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N.get("/cart");case 2:t=e.sent,n=t.data,context.commit("initCart",n.data);case 5:case"end":return e.stop()}}),e)})))()}}},P=E,$={state:{showTabbar:!0,navTitle:""},getters:{test:function(){return"common"}},mutations:{displayTabbar:function(e,t){e.showTabbar=t},changeTitle:function(e,t){e.navTitle=t}},actions:{}},q=$;a["a"].use(_["a"]);var R=new _["a"].Store({state:{getters:{totalPrice:function(e,t,n,a){return this.goodsdata.reduce((function(e,t){return e+t.price*t.qty*100}),0)},test:function(){return"cart"}}},mutations:{},modules:{cart:P,common:q}}),A=R,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3}},e._l(e.recommend,(function(e){return n("van-swipe-item",{key:e._id},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e,expression:"item"}]})])})),1),n("van-button",{staticStyle:{position:"fixed",right:"0",bottom:"100px",color:"#cccccc","z-index":"99"},on:{click:e.back}},[n("van-icon",{attrs:{name:"arrow-up"}})],1),n("van-grid",{attrs:{"column-num":"4"}},e._l(e.categray,(function(t){return n("van-grid-item",{key:t.name},[n("van-image",{attrs:{src:t.url}}),n("span",[e._v(e._s(t.name))])],1)})),1),n("van-grid",{staticClass:"goodslist",attrs:{border:!1,"column-num":2}},[e._l(e.goodslist,(function(t){return n("van-grid-item",{key:t._id,staticStyle:{boder:"1px solid gray"},on:{click:function(n){return e.gotoDetail(t._id)}}},[n("van-image",{attrs:{src:t.src}}),n("h4",[e._v(e._s(t.name))]),n("p",{staticClass:"price"},[n("span",[e._v(e._s(t.price))]),n("van-icon",{staticStyle:{float:"right","font-size":"24px",color:"red"},attrs:{name:"shopping-cart-o"},on:{click:e.addCart}})],1)],1)})),n("van-pagination",{staticClass:"pagination",staticStyle:{position:"relative",left:"65px"},attrs:{"total-items":e.res,"show-page-size":3,"items-per-page":4,"force-ellipses":""},on:{change:e.pageChange},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],2)],1)},B=[],D=(n("6a39"),n("f240")),I=(n("c3a6"),n("ad06")),J=(n("0ec5"),n("21ab")),X=(n("3df5"),n("2830")),H=(n("66cf"),n("343b")),M=(n("4b0a"),n("2bb1")),U=(n("7844"),n("5596"));a["a"].use(U["a"]),a["a"].use(M["a"]),a["a"].use(H["a"]),a["a"].use(X["a"]),a["a"].use(J["a"]),a["a"].use(g["a"]),a["a"].use(I["a"]),a["a"].use(D["a"]);var K={name:"Home",data:function(){return{recommend:["https://gdp.alicdn.com/imgextra/i3/3032658020/TB2N5ZfdmfD8KJjSszhXXbIJFXa_!!3032658020.jpg","https://img.alicdn.com/imgextra/i4/3032658020/TB2_EiWlsnI8KJjSspeXXcwIpXa_!!3032658020.jpg","https://img.alicdn.com/imgextra/i2/3032658020/O1CN011zX5yr297D2sB99dv_!!3032658020.jpg","https://img.alicdn.com/imgextra/i1/3032658020/O1CN01E4E39l297D0lLz8Bt_!!3032658020.jpg"],categray:[{url:"http://www.zymkshop.com/mobile/data/touch_nav/Navpic-1507783146.jpg",name:"周边"},{url:"http://www.zymkshop.com/mobile/data/touch_nav/Navpic-1507783236.jpg",name:"杂志"},{url:"http://www.zymkshop.com/mobile/data/touch_nav/Navpic-1507783170.jpg",name:"绘本"},{url:"http://www.zymkshop.com/mobile/data/touch_nav/Navpic-1507783188.jpg",name:"漫画"},{url:"http://www.zymkshop.com/mobile/data/touch_nav/Navpic-1507783325.jpg",name:"小说"},{url:"http://www.zymkshop.com/mobile/data/touch_nav/Navpic-1507783358.jpg",name:"更多商品"},{url:"http://www.zymkshop.com/mobile/data/touch_nav/Navpic-1510293782.jpg",name:"优惠活动"},{url:"http://www.zymkshop.com/mobile/data/touch_nav/Navpic-1550644668.jpg",name:"积分商城"}],goodslist:[],currentPage:1,res:1}},components:{},methods:{addCart:function(e){console.log(e.target)},gotoDetail:function(e){this.$router.push({path:"/detail",query:{id:e}})},back:function(){var e=setInterval((function(){scrollY<=0&&clearInterval(e),scrollTo({top:scrollY-500})}),100)},pageChange:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$request.get("/goods?size=4&page=".concat(e));case 2:a=n.sent,r=a.data,t.goodslist=r,console.log(r);case 6:case"end":return n.stop()}}),n)})))()}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$request.get("/goods?size=18&page=1");case 2:return n=t.sent,t.next=5,e.$request.get("/goods");case 5:a=t.sent,r=a.data.length,e.res=r,e.$route.params.id,e.goodslist=n.data,console.log(e.goodslist);case 11:case"end":return t.stop()}}),t)})))()}},F=K,Q=(n("8051"),Object(k["a"])(F,L,B,!1,null,"61e0deeb",null)),Y=Q.exports;a["a"].use(x["a"]);var W=[{path:"/",redirect:{name:"Home"}},{path:"/home",name:"Home",component:Y,meta:{title:"首页"}},{path:"/sort",name:"Sort",component:function(){return n.e("chunk-18067473").then(n.bind(null,"f45e"))},meta:{title:"分类"}},{path:"/cart",name:"Cart",component:function(){return n.e("chunk-41fa0a7e").then(n.bind(null,"1b7b"))},meta:{title:"购物车",requiresAuth:!0}},{path:"/profile",name:"Profile",component:function(){return n.e("chunk-79cdc8b4").then(n.bind(null,"ecac"))},meta:{title:"我的",requiresAuth:!0}},{path:"/detail",name:"Detail",component:function(){return n.e("chunk-75cb61dd").then(n.bind(null,"8248"))},meta:{title:"详情"}},{path:"/novel",name:"Novel",component:function(){return n.e("chunk-ded38f8c").then(n.bind(null,"a790"))},meta:{title:"商品列表"}},{path:"/order",name:"order",component:function(){return n.e("chunk-b1392474").then(n.bind(null,"c2fb"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-0cb48a64").then(n.bind(null,"9ed6"))},meta:{title:"用户登录"}},{path:"/reg",name:"Reg",component:function(){return n.e("chunk-7e48c9cd").then(n.bind(null,"4811"))},meta:{title:"用户注册"}},{path:"/edit",name:"Edit",component:function(){return n.e("chunk-256572da").then(n.bind(null,"2279"))},meta:{title:"用户信息"}},{path:"/address",name:"Address",component:function(){return n.e("chunk-aeb12ef8").then(n.bind(null,"34b9"))}},{path:"/addressEdit",name:"AddressEdit",component:function(){return n.e("chunk-4a31691e").then(n.bind(null,"9c5f"))}}],Z=new x["a"]({routes:W});Z.beforeEach((function(e,t,n){if(A.commit("changeTitle",e.meta.title),n(),e.matched.some((function(e){return e.meta.requiresAuth}))){var a=localStorage.getItem("currentUser")||{};try{a=JSON.parse(a)}catch(r){a={}}a.authorization?(N.get("/jwtverify",{params:{authorization:a.authorization}}).then((function(t){var a=t.data;0===a.code&&n({path:"/login",query:{redirectTo:e.fullPath}})})),n()):n({path:"/login",query:{redirectTo:e.fullPath}})}else n()}));var G=Z;a["a"].config.productionTip=!1,a["a"].prototype.$request=N,new a["a"]({router:G,store:A,render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"62fe":function(e,t,n){},8051:function(e,t,n){"use strict";var a=n("62fe"),r=n.n(a);r.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.2d85ac8e.js.map