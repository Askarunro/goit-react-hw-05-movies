"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[522],{8522:function(r,e,t){t.r(e),t.d(e,{default:function(){return s}});var n=t(8152),c=t(3504),a=t(1207),u=t(2791),o=t(184),s=function(){var r=(0,u.useState)([]),e=(0,n.Z)(r,2),t=e[0],s=e[1];return(0,u.useEffect)((function(){a.rQ().then(s)}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Trending today"}),(0,o.jsx)("ul",{children:t.map((function(r){return(0,o.jsx)("li",{"data-id":r.id,children:(0,o.jsx)(c.rU,{to:"/movies/".concat(r.id,"/"),children:r.title?r.title:r.name})},r.id)}))})]})}},1207:function(r,e,t){t.d(e,{rQ:function(){return i},RU:function(){return p},uC:function(){return l},QV:function(){return f},xc:function(){return v},Hx:function(){return d}});var n=t(5861),c=t(7757),a=t.n(c),u=t(4569),o=t.n(u),s="api_key=5d104e06eaa9cbca519409c6ed30e31b";o().defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var r=(0,n.Z)(a().mark((function r(){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o().get("/trending/all/day?".concat(s,"&page=1"));case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:r.prev=7,r.t0=r.catch(0),console.log("error");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(a().mark((function r(){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o().get("/genre/movie/list?".concat(s));case 3:return e=r.sent,r.abrupt("return",e.data.genres);case 7:r.prev=7,r.t0=r.catch(0),console.log("error");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o().get("/search/movie?".concat(s,"&query='").concat(e,"'"));case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:r.prev=7,r.t0=r.catch(0),console.log("error");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o().get("/movie/".concat(e,"?").concat(s));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:r.prev=7,r.t0=r.catch(0),console.log("error");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o().get("/movie/".concat(e,"/credits?").concat(s));case 3:return t=r.sent,r.abrupt("return",t.data.cast);case 7:r.prev=7,r.t0=r.catch(0),console.log("error");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),d=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o().get("/movie/".concat(e,"/reviews?").concat(s));case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:r.prev=7,r.t0=r.catch(0),console.log("error");case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=522.8a16542b.chunk.js.map