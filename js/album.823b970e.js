(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["album"],{"05a7":function(t,n,a){},"24a3":function(t,n,a){"use strict";a.d(n,"b",function(){return c}),a.d(n,"c",function(){return r}),a.d(n,"a",function(){return o});var e=a("bc3a"),i=a.n(e),s=a("da71");function c(t){return i.a.get("".concat(s["b"],"/playlist/detail?id=").concat(t)).then(function(t){return Promise.resolve(t.data)})}function r(t){return i.a.get("".concat(s["b"],"/artists?id=").concat(t)).then(function(t){return Promise.resolve(t.data)})}function o(t){return i.a.get("".concat(s["b"],"/album?id=").concat(t)).then(function(t){return Promise.resolve(t.data)})}},"57bc":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("div",{staticClass:"wrap"},[a("header",[a("i",{staticClass:"iconfont icon-back",on:{click:t.handleBack}})]),a("div",{staticClass:"cover",style:{backgroundImage:"url("+t.listCover+")"}},[a("h3",{staticClass:"title"},[t._v(t._s(t.listName))])]),a("div",{staticClass:"list"},[a("h3",[t._v("歌曲列表")]),a("loading",{directives:[{name:"show",rawName:"v-show",value:!t.playlist.length,expression:"!playlist.length"}]}),a("ul",t._l(t.playlist,function(n,e){return a("li",{key:n.id,staticClass:"list-item",on:{click:function(n){return t.handleSelect(e)}}},[a("h4",{staticClass:"song"},[t._v(t._s(n.name))]),a("p",{staticClass:"singer"},[t._v(t._s(n.singerName))]),a("i",{staticClass:"iconfont icon-play-s"})])}),0)],1)])])},i=[],s=(a("7f7f"),a("cebc")),c=a("24a3"),r=a("da71"),o=a("f5de"),u=a("2f62"),l={name:"album",data:function(){return{listCover:"",listName:"",playlist:[]}},mounted:function(){this._getAlbumDetail(this.$route.params.id)},methods:Object(s["a"])({},Object(u["b"])(["selectPlay"]),{handleBack:function(){this.$router.back()},_getAlbumDetail:function(t){var n=this;Object(c["a"])(t).then(function(t){if(t.code===r["a"]){n.listCover=t.album.picUrl,n.listName=t.album.name;var a=t.songs;n.playlist=Object(o["b"])(a)}})},handleSelect:function(t){this.selectPlay({list:this.playlist,index:t})}})},m=l,f=(a("96ee"),a("2877")),d=Object(f["a"])(m,e,i,!1,null,"3c9fa4d9",null);n["default"]=d.exports},"96ee":function(t,n,a){"use strict";var e=a("05a7"),i=a.n(e);i.a},f5de:function(t,n,a){"use strict";a.d(n,"a",function(){return c}),a.d(n,"b",function(){return r}),a.d(n,"c",function(){return o});a("ac6a"),a("7f7f");var e=a("d225"),i=function t(n){var a=n.id,i=n.name,s=n.singerName,c=n.coverImg,r=n.albumName;Object(e["a"])(this,t),this.id=a,this.name=i,this.singerName=s,this.coverImg=c,this.albumName=r};function s(t,n){var a=[];return t?(t.forEach(function(t){a.push(t[n])}),a.join("/")):""}function c(t){var n=[];return t.forEach(function(t){n.push(new i({id:t.id,name:t.name,singerName:s(t.song.artists,"name"),coverImg:t.song.album.picUrl,albumName:t.song.album.name}))}),n}function r(t){var n=[];return t.forEach(function(t){n.push(new i({id:t.id,name:t.name,singerName:s(t.ar,"name"),coverImg:t.al.picUrl,albumName:t.al.name}))}),n}function o(t){var n=[];return t.forEach(function(t){n.push(new i({id:t.id,name:t.name,singerName:s(t.artists,"name"),coverImg:"",albumName:t.album.name}))}),n}}}]);
//# sourceMappingURL=album.823b970e.js.map