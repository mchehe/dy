(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],f=0,d=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="https://cdn.jsdelivr.net/gh/mchehe/dy@master/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0f4e":function(t,e,n){"use strict";var a=n("a22d"),r=n.n(a);r.a},"0ff7":function(t,e,n){},"2ef0":function(t,e,n){"use strict";var a=n("0ff7"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"#app"}},[n("transition",{attrs:{name:"slide-fade"}},[n("keep-alive",[n("router-view")],1)],1),n("van-tabbar",{attrs:{placeholder:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tabbar-item",{attrs:{replace:"",icon:"home-o",to:"/"}},[t._v("首页")]),n("van-tabbar-item",{attrs:{replace:"",icon:"search",to:"/search"}},[t._v("搜索")])],1)],1)},i=[],o={name:"App",data:function(){return{active:0}},mounted:function(){}},s=o,c=(n("034f"),n("2877")),l=Object(c["a"])(s,r,i,!1,null,null,null),u=l.exports,f=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-tabs",{attrs:{swipeable:"",animated:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tab",{scopedSlots:t._u([{key:"title",fn:function(){return[n("van-icon",{attrs:{name:"video-o"}}),t._v("电影")]},proxy:!0}])},[n("van-pull-refresh",{on:{refresh:function(e){return t.onRefresh(0)}},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("VodCard",{attrs:{list:t.dylist}})],1)],1)],1),n("van-tab",{scopedSlots:t._u([{key:"title",fn:function(){return[n("van-icon",{attrs:{name:"tv-o"}}),t._v("电视剧")]},proxy:!0}])},[n("van-pull-refresh",{on:{refresh:function(e){return t.onRefresh(1)}},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("VodCard",{attrs:{list:t.tvlist}})],1)],1)],1),n("van-tab",{scopedSlots:t._u([{key:"title",fn:function(){return[n("van-icon",{attrs:{name:"smile-comment-o"}}),t._v("动漫")]},proxy:!0}])},[n("van-pull-refresh",{on:{refresh:function(e){return t.onRefresh(2)}},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("VodCard",{attrs:{list:t.dmlist}})],1)],1)],1),n("van-tab",{scopedSlots:t._u([{key:"title",fn:function(){return[n("van-icon",{attrs:{name:"aim"}}),t._v("综艺")]},proxy:!0}])},[n("van-pull-refresh",{on:{refresh:function(e){return t.onRefresh(3)}},model:{value:t.refreshing,callback:function(e){t.refreshing=e},expression:"refreshing"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("VodCard",{attrs:{list:t.zylist}})],1)],1)],1)],1)],1)},h=[],p=(n("96cf"),n("1da1")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-row",t._l(t.list,(function(e,a){return n("van-col",{key:a,staticStyle:{padding:"5px"},attrs:{span:"12"},on:{click:function(n){return t.toPlay(e.vod_id)}}},[n("van-image",{attrs:{width:"100%",height:"120","lazy-load":"",src:e.vod_pic}}),n("p",{staticClass:"card-title"},[t._v(t._s(e.vod_name))])],1)})),1)],1)},m=[],g={name:"VodCard",props:{list:Array},methods:{toPlay:function(t){this.$router.push({path:"/play/"+t})}}},b=g,y=(n("0f4e"),Object(c["a"])(b,v,m,!1,null,null,null)),w=y.exports,x=(n("d3b7"),n("bc3a")),k=n.n(x),_=n("4328"),j=n.n(_),C=k.a.create({baseURL:"//vod.yp.wtf/api.php",timeout:5e3,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}});C.interceptors.request.use((function(t){return t.data=j.a.stringify(t.data),console.log(t.data),t}),(function(t){return Promise.reject(t)})),C.interceptors.response.use((function(t){return t}),(function(t){var e=t.message;switch(e){case"Network Error":e="后端接口连接异常";break;case"timeout":e="后端接口请求超时";break;case"Request failed with status code":e="后端接口"+e.substr(e.length-3)+"异常";break}return console.log(e||"后端接口未知异常"),Promise.reject(t)}));var O=C;function R(t){return O({url:"",method:"get",params:t})}var S={data:function(){return{active:0,dylist:[],tvlist:[],dmlist:[],zylist:[],loading:!1,finished:!1,refreshing:!1}},components:{VodCard:w},mounted:function(){this.fetchDy(),this.fetchTv(),this.fetchDm(),this.fetchZy()},methods:{onLoad:function(){this.loading=!1},onRefresh:function(t){switch(t){case 0:this.fetchDy();break;case 1:this.fetchTv();break;case 2:this.fetchDm();break;case 3:this.fetchZy();break;default:this.fetchDy()}},fetchDy:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R({ac:"detail",t:9});case 2:n=e.sent,a=n.data,t.dylist=a.list,t.refreshing=!1;case 6:case"end":return e.stop()}}),e)})))()},fetchTv:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R({ac:"detail",t:13});case 2:n=e.sent,a=n.data,t.tvlist=a.list,t.refreshing=!1;case 6:case"end":return e.stop()}}),e)})))()},fetchDm:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R({ac:"detail",t:29});case 2:n=e.sent,a=n.data,t.dmlist=a.list,t.refreshing=!1;case 6:case"end":return e.stop()}}),e)})))()},fetchZy:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R({ac:"detail",t:25});case 2:n=e.sent,a=n.data,t.zylist=a.list,t.refreshing=!1;case 6:case"end":return e.stop()}}),e)})))()}}},D=S,$=Object(c["a"])(D,d,h,!1,null,null,null),T=$.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copy"},[n("van-nav-bar",{attrs:{title:t.title,"left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),n("div",{attrs:{id:"dplayer"}}),n("h3",{staticStyle:{margin:"5px"}},[t._v("剧集")]),n("div",{staticClass:"Drama"},[n("div",{staticClass:"Drama-nei"},t._l(t.play_list,(function(e,a){return n("div",{key:a,staticClass:"Drama-box",class:{"Drama-select":a==t.changeindex},on:{click:function(e){return t.ChangeDrama(a)}}},[t._v(t._s(a+1))])})),0)]),n("van-tabs",{attrs:{swipeable:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tab",{scopedSlots:t._u([{key:"title",fn:function(){return[n("van-icon",{attrs:{name:"fire-o"}}),t._v("热门")]},proxy:!0}])},[n("VodCard",{attrs:{list:t.hotlist}})],1),n("van-tab",{attrs:{title:"评论"},scopedSlots:t._u([{key:"title",fn:function(){return[n("van-icon",{attrs:{name:"more-o"}}),t._v("评论")]},proxy:!0}])},[n("van-skeleton",{attrs:{title:"",avatar:"",row:3}}),n("van-skeleton",{attrs:{title:"",avatar:"",row:3}}),n("van-skeleton",{attrs:{title:"",avatar:"",row:3}})],1)],1)],1)},P=[],E=(n("d81d"),n("fb6a"),n("ac1f"),n("1276"),n("ba56")),L=n.n(E),q=n("f7a5"),H=n.n(q),M=n("b311"),z=n.n(M),B={data:function(){return{title:"",active:0,dp:null,play_list:[],changeindex:0,hotlist:[]}},components:{VodCard:w},mounted:function(){var t=this;this.fetchData(),this.fetchHot(),this.dp=new H.a({container:document.getElementById("dplayer"),video:{url:"",type:"customHls",customType:{customHls:function(t){var e=new L.a;e.loadSource(t.src),e.attachMedia(t)}}}});var e=new z.a(".copy",{text:function(){return"BdlNGdqrYNwBOuTg"}});e.on("success",(function(n){console.log(n),e.destroy(),t.$cookies.isKey("ads")||(t.$cookies.set("ads",1),window.open("https://mobile.fdnpofs.cn/fungicide.asp?peyType=2&6E8C8=G7BGum7o5w13&inquiryWorld=wnux&sausageSomebody=c9jq&lqfType=2"))}))},methods:{onClickLeft:function(){this.$router.go(-1)},onClickRight:function(){this.$router.push({path:"/search"})},ChangeDrama:function(t){this.changeindex=t,this.dp.switchVideo({url:this.play_list[t]["url"],type:"customHls"})},fetchData:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R({ac:"detail",ids:t.$route.params.pathMatch});case 2:n=e.sent,a=n.data,r=a.list[0],t.title=r["vod_name"],r=r["vod_play_url"].split("$$$"),r=r[1],r=r.split("#"),t.play_list=r.map((function(t){return t=t.split("$"),{index:t[0],url:t[1]}})),console.log(t.play_list),t.dp.switchVideo({url:t.play_list[0]["url"],type:"customHls"});case 12:case"end":return e.stop()}}),e)})))()},fetchHot:function(){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R({ac:"detail",h:24});case 2:n=e.sent,a=n.data,t.hotlist=a.list.slice(0,6);case 5:case"end":return e.stop()}}),e)})))()}},watch:{$route:"fetchData"}},G=B,N=(n("2ef0"),Object(c["a"])(G,V,P,!1,null,null,null)),Z=N.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{attrs:{action:"/"}},[n("van-search",{attrs:{autofocus:!0,"show-action":t.show_action,placeholder:"请输入搜索关键词"},on:{search:t.onSearch,cancel:t.onCancel,focus:t.focus},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),n("VodCard",{attrs:{list:t.list}})],1)},J=[],U={data:function(){return{value:"",show_action:!1,list:[]}},components:{VodCard:w},methods:{focus:function(){this.show_action=!0},onSearch:function(t){this.fetchData(t)},onCancel:function(){this.$router.go(-1)},fetchData:function(t){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,R({ac:"detail",wd:t});case 2:a=n.sent,r=a.data,e.list=r.list;case 5:case"end":return n.stop()}}),n)})))()}}},F=U,I=Object(c["a"])(F,A,J,!1,null,null,null),K=I.exports;a["a"].use(f["a"]);var W=[{path:"/",component:T,meta:{footShow:!0}},{path:"/play/*",component:Z,meta:{footShow:!0}},{path:"/search",component:K,meta:{footShow:!0}}],Y=new f["a"]({mode:"history",routes:W}),Q=Y,X=n("343b"),tt=n("b970"),et=(n("157a"),n("2b27")),nt=n.n(et);a["a"].use(nt.a),a["a"].use(X["a"]),a["a"].use(tt["a"]),a["a"].$cookies.config("1d"),a["a"].config.productionTip=!1,new a["a"]({el:"#app",router:Q,render:function(t){return t(u)}})},"85ec":function(t,e,n){},a22d:function(t,e,n){}});
//# sourceMappingURL=app.c8284ee9.js.map