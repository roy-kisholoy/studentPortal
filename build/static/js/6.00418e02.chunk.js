(this["webpackJsonp@roy/modified-template"]=this["webpackJsonp@roy/modified-template"]||[]).push([[6,8],{499:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return s})),a.d(t,"f",(function(){return l})),a.d(t,"e",(function(){return p})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return f}));var n,r=a(32),c=a.n(r);function o(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function s(e,t){var a={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(a[n]=e[n])})),a}var i={};function l(e){i[e]||("undefined"!==typeof console&&console.error(e),i[e]=!0)}var u="object"===typeof window&&window.Element||function(){};c.a.oneOfType([c.a.string,c.a.func,function(e,t,a){if(!(e[t]instanceof u))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")},c.a.shape({current:c.a.any})]);var p=c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func}),c.a.arrayOf(c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func})]))]),d={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80};"undefined"===typeof window||!window.document||window.document.createElement;function f(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},502:function(e,t,a){"use strict";var n=a(508),r=a.n(n),c=a(509),o=a.n(c),s=r.a.create({baseURL:"http://localhost:4000"});s.interceptors.request.use((function(e){return e.data instanceof FormData||(e.data=o.a.stringify(e.data,{arrayFormat:"repeat"})),e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),t.a=s},504:function(e,t,a){"use strict";var n=a(16),r=a(28),c=a(1),o=a.n(c),s=a(32),i=a.n(s),l=a(153),u=a.n(l),p=a(499),d={tag:p.e,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,c=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),i=Object(p.c)(u()(t,"input-group-text"),a);return o.a.createElement(c,Object(n.a)({},s,{className:i}))};f.propTypes=d,f.defaultProps={tag:"span"},t.a=f},510:function(e,t,a){"use strict";var n=a(16),r=a(28),c=a(154),o=a(17),s=a(1),i=a.n(s),l=a(32),u=a.n(l),p=a(153),d=a.n(p),f=a(499),m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:f.e,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(c.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],c=e.block,o=e.className,s=e.close,l=e.cssModule,u=e.color,p=e.outline,m=e.size,b=e.tag,g=e.innerRef,h=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof h.children&&(h.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(p?"-outline":"")+"-"+u,O=Object(f.c)(d()(o,{close:s},s||"btn",s||v,!!m&&"btn-"+m,!!c&&"btn-block",{active:t,disabled:this.props.disabled}),l);h.href&&"button"===b&&(b="a");var y=s?"Close":null;return i.a.createElement(b,Object(n.a)({type:"button"===b&&h.onClick?"button":void 0},h,{className:O,ref:g,onClick:this.onClick,"aria-label":a||y}))},t}(i.a.Component);b.propTypes=m,b.defaultProps={color:"secondary",tag:"button"},t.a=b},520:function(e,t,a){"use strict";var n=a(16),r=a(28),c=a(154),o=a(17),s=a(1),i=a.n(s),l=a(32),u=a.n(l),p=a(153),d=a.n(p),f=a(499),m={tag:f.e,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(c.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,c=e.active,o=e.tag,s=e.innerRef,l=Object(r.a)(e,["className","cssModule","active","tag","innerRef"]),u=Object(f.c)(d()(t,"nav-link",{disabled:l.disabled,active:c}),a);return i.a.createElement(o,Object(n.a)({},l,{ref:s,onClick:this.onClick,className:u}))},t}(i.a.Component);b.propTypes=m,b.defaultProps={tag:"a"},t.a=b},521:function(e,t,a){"use strict";var n=a(16),r=a(28),c=a(1),o=a.n(c),s=a(32),i=a.n(s),l=a(153),u=a.n(l),p=a(499),d={tag:p.e,fluid:i.a.oneOfType([i.a.bool,i.a.string]),className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,c=e.fluid,s=e.tag,i=Object(r.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===c?l="container-fluid":c&&(l="container-"+c);var d=Object(p.c)(u()(t,l),a);return o.a.createElement(s,Object(n.a)({},i,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},532:function(e,t,a){"use strict";var n=a(16),r=a(28),c=a(1),o=a.n(c),s=a(32),i=a.n(s),l=a(153),u=a.n(l),p=a(499),d={tag:p.e,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,c=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),i=Object(p.c)(u()(t,"card-group"),a);return o.a.createElement(c,Object(n.a)({},s,{className:i}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},533:function(e,t,a){"use strict";var n=a(16),r=a(28),c=a(1),o=a.n(c),s=a(32),i=a.n(s),l=a(153),u=a.n(l),p=a(499),d={tag:p.e,size:i.a.string,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,c=e.tag,s=e.size,i=Object(r.a)(e,["className","cssModule","tag","size"]),l=Object(p.c)(u()(t,"input-group",s?"input-group-"+s:null),a);return o.a.createElement(c,Object(n.a)({},i,{className:l}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f},534:function(e,t,a){"use strict";var n=a(16),r=a(28),c=a(1),o=a.n(c),s=a(32),i=a.n(s),l=a(153),u=a.n(l),p=a(499),d=a(504),f={tag:p.e,addonType:i.a.oneOf(["prepend","append"]).isRequired,children:i.a.node,className:i.a.string,cssModule:i.a.object},m=function(e){var t=e.className,a=e.cssModule,c=e.tag,s=e.addonType,i=e.children,l=Object(r.a)(e,["className","cssModule","tag","addonType","children"]),f=Object(p.c)(u()(t,"input-group-"+s),a);return"string"===typeof i?o.a.createElement(c,Object(n.a)({},l,{className:f}),o.a.createElement(d.a,{children:i})):o.a.createElement(c,Object(n.a)({},l,{className:f,children:i}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},535:function(e,t,a){"use strict";var n=a(16),r=a(28),c=a(154),o=a(17),s=a(1),i=a.n(s),l=a(32),u=a.n(l),p=a(153),d=a.n(p),f=a(499),m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.e,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(c.a)(a)),a.focus=a.focus.bind(Object(c.a)(a)),a}Object(o.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,c=e.type,o=e.bsSize,s=e.valid,l=e.invalid,u=e.tag,p=e.addon,m=e.plaintext,b=e.innerRef,g=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(c)>-1,v=new RegExp("\\D","g"),O=u||("select"===c||"textarea"===c?c:"input"),y="form-control";m?(y+="-plaintext",O=u||"input"):"file"===c?y+="-file":"range"===c?y+="-range":h&&(y=p?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(f.f)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var j=Object(f.c)(d()(t,l&&"is-invalid",s&&"is-valid",!!o&&"form-control-"+o,y),a);return("input"===O||u&&"function"===typeof u)&&(g.type=c),g.children&&!m&&"select"!==c&&"string"===typeof O&&"select"!==O&&(Object(f.f)('Input with a type of "'+c+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(O,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":l}))},t}(i.a.Component);b.propTypes=m,b.defaultProps={type:"text"},t.a=b},594:function(e,t,a){"use strict";a.r(t);var n=a(503);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var o=a(155),s=a(156),i=a(158),l=a(157),u=a(1),p=a.n(u),d=a(521),f=a(596),m=a(597),b=a(532),g=a(598),h=a(599),v=a(600),O=a(533),y=a(534),j=a(504),N=a(535),E=a(510),k=a(520),w=a(502),C=a(159),M=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).inputHandler=function(e){r.setState({changed:!0}),r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),Object(w.a)({method:"POST",url:"/loginProfile",data:{email:r.state.email,password:r.state.password}}).then((function(e){if(1===e.data.ack){C.NotificationManager.success("Login successful!");var t=c(c({},e.data),{},{authorized:!0});localStorage.setItem("userInfo",JSON.stringify(t)),localStorage.setItem("token",e.data.token),setTimeout((function(){window.location.href="/dashboard"}),500)}0===e.data.ack&&C.NotificationManager.warning(e.data.message)})).catch((function(e){C.NotificationManager.error("Network Error")}))},r.state={email:"",password:"",id:"",changed:!1},r}return Object(s.a)(a,[{key:"render",value:function(){return p.a.createElement("div",{className:"app flex-row align-items-center"},p.a.createElement(d.a,null,p.a.createElement(f.a,{className:"justify-content-center"},p.a.createElement(m.a,{md:"6"},p.a.createElement(b.a,null,p.a.createElement(g.a,{className:"p-4"},p.a.createElement(h.a,null,p.a.createElement(v.a,{onSubmit:this.submitHandler},p.a.createElement("h1",null,"Login"),p.a.createElement("p",{className:"text-muted"},"Sign In to your account"),p.a.createElement(O.a,{className:"mb-3"},p.a.createElement(y.a,{addonType:"prepend"},p.a.createElement(j.a,null,p.a.createElement("i",{className:"icon-user"}))),p.a.createElement(N.a,{type:"text",name:"email",placeholder:"Email",autoComplete:"email",onChange:this.inputHandler,required:!0})),p.a.createElement(O.a,{className:"mb-4"},p.a.createElement(y.a,{addonType:"prepend"},p.a.createElement(j.a,null,p.a.createElement("i",{className:"icon-lock"}))),p.a.createElement(N.a,{type:"password",name:"password",placeholder:"Password",onChange:this.inputHandler,autoComplete:"current-password",required:!0})),p.a.createElement(f.a,null,p.a.createElement(m.a,{xs:"6"},p.a.createElement(E.a,{type:"submit",color:"primary",className:"px-4"},"Login")),p.a.createElement(m.a,{xs:"6",className:"text-right"},p.a.createElement(k.a,{href:"/register"},"Create a New Account")))))))))))}}]),a}(p.a.Component);t.default=M}}]);
//# sourceMappingURL=6.00418e02.chunk.js.map