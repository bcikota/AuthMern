(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),i=n(14),s=n.n(i),l=(n(19),n(3)),r=n(4),u=n.n(r),a=(n(38),n(0));var j=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)(""),s=Object(l.a)(i,2),r=s[0],j=s[1],d=Object(c.useState)(""),h=Object(l.a)(d,2),b=h[0],g=h[1],O=Object(c.useState)(""),f=Object(l.a)(O,2),p=f[0],x=f[1],m=Object(c.useState)(null),C=Object(l.a)(m,2),v=C[0],w=C[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Register"}),Object(a.jsx)("input",{placeholder:"username",onChange:function(e){return o(e.target.value)}}),Object(a.jsx)("input",{placeholder:"password",onChange:function(e){return j(e.target.value)}}),Object(a.jsx)("button",{onClick:function(){u()({method:"post",data:{username:n,password:r},withCredentials:!0,url:"/register"}).then((function(e){return console.log(e)}))},children:"Submit"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsx)("input",{placeholder:"username",onChange:function(e){return g(e.target.value)}}),Object(a.jsx)("input",{placeholder:"password",onChange:function(e){return x(e.target.value)}}),Object(a.jsx)("button",{onClick:function(){u()({method:"post",data:{username:b,password:p},withCredentials:!0,url:"/login"}).then((function(e){return console.log(e)}))},children:"Submit"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Get User"}),Object(a.jsx)("button",{onClick:function(){u()({method:"get",withCredentials:!0,url:"/user"}).then((function(e){w(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))},children:"get user"}),v&&Object(a.jsxs)("h1",{children:["Welcome Back ",v.username]})]}),Object(a.jsx)("div",{className:"logout",children:Object(a.jsx)("button",{onClick:function(){u()({method:"get",withCredentials:!0,url:"/logout"}).then((function(e){console.log(e.data)}))},children:"log out"})}),Object(a.jsx)("div",{className:"google-auth",children:Object(a.jsx)("button",{onClick:function(){window.open("/auth/google","_self")},children:"login with google"})})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),i(e),s(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),d()}},[[40,1,2]]]);
//# sourceMappingURL=main.06d7368e.chunk.js.map