(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{11:function(e,t,n){e.exports={nav:"NavBar_nav__3B9rn",item:"NavBar_item__1Z3R_",activeLink:"NavBar_activeLink__17JWg",setting:"NavBar_setting__1NkBz",users:"NavBar_users__1lDjW",friends:"NavBar_friends__1Ai_X",friendsImg:"NavBar_friendsImg__3URkb"}},125:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(39),a=n(5),i={dialogs:[{id:1,name:"Dimych",src:"https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg"},{id:2,name:"Bro",src:"https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg"},{id:3,name:"Natali",src:"https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg"},{id:4,name:"Martin",src:"https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg"},{id:5,name:"Alex",src:"https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg"}],messagesIncome:[{id:1,message:"Hi, how are you?"},{id:2,message:"I don't know"},{id:3,message:"Ok bro"},{id:4,message:"U2"}],messagesOutgoing:[{id:1,message:"Yep"},{id:2,message:"Last night"},{id:3,message:"Ok bro"},{id:4,message:"5 minute"}]},c=function(e){return{type:"SEND_MESSAGE",newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageText;return Object(a.a)(Object(a.a)({},e),{},{messagesOutgoing:[].concat(Object(r.a)(e.messagesOutgoing),[{id:5,message:n}])});default:return e}}},128:function(e,t,n){"use strict";n.d(t,"d",(function(){return E})),n.d(t,"e",(function(){return j})),n.d(t,"c",(function(){return _})),n.d(t,"f",(function(){return y})),n.d(t,"b",(function(){return S}));var r=n(8),a=n.n(r),i=n(15),c=n(39),o=n(5),u=n(16),s=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),r):e}))},l="social-network/users/FOLLOW",f="social-network/users/UNFOLLOW",p="social-network/users/SET_USERS",m="social-network/users/SET_CURRENT_PAGE",d="social-network/users/SET_USERS_TOTAL_COUNT",g="social-network/users/TOOGLE_IS_FETCHING",h="social-network/users/TOGGLE_IN_PROGRESS",v={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},b=function(e){return{type:l,userId:e}},w=function(e){return{type:f,userId:e}},E=function(e){return{type:m,currentPage:e}},O=function(e){return{type:g,isFetching:e}},j=function(e,t){return{type:h,inProgress:e,userId:t}},_=function(e,t){return function(){var n=Object(i.a)(a.a.mark((function n(r){var i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(O(!0)),r(E(e)),n.next=4,u.c.requestUsers(e,t);case 4:i=n.sent,r(O(!1)),r((c=i.items,{type:p,users:c})),r((a=i.totalCount,{type:d,count:a}));case 8:case"end":return n.stop()}var a,c}),n)})));return function(e){return n.apply(this,arguments)}}()},k=function(){var e=Object(i.a)(a.a.mark((function e(t,n,r,i){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(j(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(i(n)),t(j(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),y=function(e){return function(t){k(t,e,u.c.unfollow.bind(e),w)}},S=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:k(n,e,u.c.follow.bind(e),b);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(o.a)(Object(o.a)({},e),{},{users:s(e.users,t.userId,"id",{followed:!0})});case f:return Object(o.a)(Object(o.a)({},e),{},{users:s(e.users,t.userId,"id",{followed:!1})});case p:return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case m:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.currentPage});case d:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.count});case g:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case h:return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.inProgress?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},132:function(e,t,n){e.exports=n.p+"static/media/preloader.75ad70ec.svg"},159:function(e,t,n){e.exports=n(288)},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var r=n(130),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"33bb992b-5838-474e-9cb8-867cdb9275cd"}}),i={requestUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))}},c={me:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/login").then((function(e){return e.data}))}},o={getProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return a.put("profile",e).then((function(e){return e.data}))}}},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},288:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(63),c=n.n(i),o=(n(164),n(50)),u=n(51),s=n(53),l=n(52),f=(n(165),n(10)),p=(n(166),function(e){return a.a.createElement("div",null,"Music")}),m=(n(167),function(e){return a.a.createElement("div",null,"News")}),d=(n(168),function(e){return a.a.createElement("div",null,"Setting")}),g=n(13),h=n(11),v=n.n(h),b=n(18),w=function(e){return a.a.createElement("div",{className:v.a.item},a.a.createElement("img",{src:e.src,alt:""}),e.name)},E=function(e){var t=e.friends.map((function(e){return a.a.createElement(w,{name:e.name,src:e.src,key:e.id})}));return a.a.createElement("nav",{className:v.a.nav},a.a.createElement("div",{className:v.a.item},a.a.createElement(b.b,{to:"/profile",activeClassName:v.a.activeLink},"Profile")),a.a.createElement("div",{className:v.a.item},a.a.createElement(b.b,{to:"/dialogs",activeClassName:v.a.activeLink},"Messages")),a.a.createElement("div",{className:v.a.item},a.a.createElement(b.b,{to:"/news",activeClassName:v.a.activeLink},"News")),a.a.createElement("div",{className:v.a.item},a.a.createElement(b.b,{to:"/music",activeClassName:v.a.activeLink},"Music")),a.a.createElement("div",{className:"".concat(v.a.item," ").concat(v.a.users)},a.a.createElement(b.b,{to:"/users",activeClassName:v.a.activeLink},"Users")),a.a.createElement("div",{className:"".concat(v.a.item," ").concat(v.a.setting)},a.a.createElement(b.b,{to:"/setting",activeClassName:v.a.activeLink},"Setting")),a.a.createElement("div",{className:v.a.friends},"Friends",a.a.createElement("div",{className:v.a.friendsImg},t)))},O=Object(g.b)((function(e){return{friends:e.sidebar.friends}}))(E),j=n(88),_=n.n(j),k=function(e){return a.a.createElement("header",{className:_.a.header},a.a.createElement("img",{src:"https://www.freelogodesign.org/Content/img/logo-samples/flooop.png",alt:""}),a.a.createElement("div",{className:_.a.loginBlock}," ",e.isAuth?a.a.createElement("div",null,e.login,"  ",a.a.createElement("button",{onClick:e.logout},"Logout")):a.a.createElement(b.b,{to:"/login"},a.a.createElement("button",null,"Login"))))},y=n(8),S=n.n(y),x=n(15),N=n(5),C=n(16),I=n(29),P="social-network/auth/SET_AUTH_USER_DATA",T={userId:null,email:null,login:null,isAuth:!1,isFetching:!1},L=function(e,t,n,r){return{type:P,payload:{userId:e,email:t,login:n,isAuth:r}}},A=function(){return function(){var e=Object(x.a)(S.a.mark((function e(t){var n,r,a,i,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.me();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,i=r.email,c=r.login,t(L(a,i,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(N.a)(Object(N.a)({},e),t.payload);default:return e}},U=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(k,this.props)}}]),n}(a.a.Component),F=Object(g.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{logout:function(){return function(){var e=Object(x.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.logout();case 2:0===e.sent.resultCode&&t(L(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(U),B=n(126),z=n(32),D=n(81),R=n(46),G=n.n(R),H=Object(B.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},Object(z.c)("email",z.a,"Email",[D.b]),Object(z.c)("password",z.a,"Password",[D.b],{type:"password"}),Object(z.c)("rememberMe",z.a,null,[],{type:"checkbox"},"remember me"),n&&a.a.createElement("div",{className:G.a.formControlSubmitError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),W=Object(g.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(x.a)(S.a.mark((function r(a){var i,c;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C.a.login(e,t,n);case 2:0===(i=r.sent).resultCode?a(A()):(c=i.messages.length>0?i.messages[0]:"",a(Object(I.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(f.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(H,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),q="social-network/app/INITIALIZED_SUCCESS",J={initialized:!1},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(N.a)(Object(N.a)({},e),{},{initialized:!0});default:return e}},X=n(62),Y=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(X.a,null)}," ",a.a.createElement(e,t)," ")}},Z=a.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),K=a.a.lazy((function(){return n.e(5).then(n.bind(null,300))})),$=a.a.lazy((function(){return n.e(4).then(n.bind(null,301))})),Q=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(F,null),a.a.createElement(O,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(f.b,{path:"/profile/:userId?",render:Y(Z)}),a.a.createElement(f.b,{path:"/dialogs",render:Y(K)}),a.a.createElement(f.b,{path:"/news",render:function(){return a.a.createElement(m,null)}}),a.a.createElement(f.b,{path:"/music",render:function(){return a.a.createElement(p,null)}}),a.a.createElement(f.b,{path:"/users",render:Y($)}),a.a.createElement(f.b,{path:"/setting",render:function(){return a.a.createElement(d,null)}}),a.a.createElement(f.b,{path:"/login",render:function(){return a.a.createElement(W,null)}}))):a.a.createElement(X.a,null)}}]),n}(a.a.Component),ee=Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializedApp:function(){return function(e){var t=e(A());Promise.all([t]).then((function(){e({type:q})}))}}})(Q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=n(9),ne=n(133),re=n(125),ae=n(93),ie={friends:[{id:1,name:"Bro",src:"https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg"},{id:2,name:"Dimych",src:"https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg"},{id:3,name:"Natali",src:"https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg"}]},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie;return e},oe=n(128),ue=n(127),se=Object(te.c)({profilePage:ae.b,dialogsPage:re.a,sidebar:ce,usersPage:oe.a,auth:M,form:ue.a,app:V}),le=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,fe=Object(te.e)(se,le(Object(te.a)(ne.a)));window.store=fe;var pe=fe;c.a.render(a.a.createElement(b.a,null,a.a.createElement(a.a.StrictMode,null,a.a.createElement(g.a,{store:pe},a.a.createElement(ee,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p}));var r=n(91),a=n(0),i=n.n(a),c=n(46),o=n.n(c),u=n(84),s=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return i.a.createElement("div",{className:o.a.formControl+" "+(c?o.a.error:"")},i.a.createElement("div",null,a),c&&i.a.createElement("span",null,r))},l=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return i.a.createElement(s,e,i.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return i.a.createElement(s,e,i.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return i.a.createElement("div",null,i.a.createElement(u.a,Object.assign({name:e,component:t,placeholder:n,validate:r},a)),c)}},46:function(e,t,n){e.exports={formControl:"FomsContols_formControl__1MfNS",error:"FomsContols_error__FDC6j",formControlSubmitError:"FomsContols_formControlSubmitError__1VW3t"}},62:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(132),c=n.n(i);t.a=function(e){return a.a.createElement("img",{src:c.a})}},81:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},88:function(e,t,n){e.exports={header:"Header_header__25_3T",loginBlock:"Header_loginBlock__1lsam"}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return w})),n.d(t,"g",(function(){return E})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return j}));var r=n(8),a=n.n(r),i=n(15),c=n(39),o=n(5),u=n(16),s=n(29),l="social-network/profile/ADD_POST",f="social-network/profile/SET_USER_PROFILE",p="social-network/profile/SET_PROFILE_STATUS",m="social-network/profile/SAVE_PHOTO_SUCCESS";function d(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))}var g={posts:[{id:1,message:"Hi, how are you?",likesCount:d(1,100),src:"https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg"},{id:2,message:"It's my first post",likesCount:d(1,100),src:"https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg"}],profile:null,status:""},h=function(e){return{type:l,newPostText:e}},v=function(e){return{type:p,status:e}},b=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:r=t.sent,n({type:f,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(v(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(v(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n((a=r.data.photos,{type:m,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(i.a)(a.a.mark((function t(n,r){var i,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r().auth.userId,t.next=3,u.b.saveProfile(e);case 3:if(0!==(c=t.sent).resultCode){t.next=8;break}n(b(i)),t.next=10;break;case 8:return n(Object(s.a)("edit-profile",{_error:c.messages[0]})),t.abrupt("return",Promise.reject(c.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:3,message:t.newPostText,likesCount:d(1,100),src:"https://i.wpimg.pl/1777x0/d.wpimg.pl/1294094975--769611975/avatar.jpg"};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n])});case f:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case p:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case m:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[159,1,2]]]);
//# sourceMappingURL=main.34dcfc1f.chunk.js.map