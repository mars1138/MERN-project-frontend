(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[4],{41:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(48);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},42:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(44);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},44:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},45:function(e,t,a){"use strict";var n=a(14);a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return l}));var r=function(){return{type:"REQUIRE"}},i=function(e){return{type:"MINLENGTH",val:e}},c=function(){return{type:"EMAIL"}},l=function(e,t){var a,r=!0,i=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}(t);try{for(i.s();!(a=i.n()).done;){var c=a.value;"REQUIRE"===c.type&&(r=r&&e.trim().length>0),"MINLENGTH"===c.type&&(r=r&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(r=r&&e.trim().length<=c.val),"MIN"===c.type&&(r=r&&+e>=c.val),"MAX"===c.type&&(r=r&&+e<=c.val),"EMAIL"===c.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(l){i.e(l)}finally{i.f()}return r}},48:function(e,t,a){},51:function(e,t,a){"use strict";var n=a(8),r=a(42),i=a(0),c=a.n(i),l=a(45),u=(a(52),function(e,t){switch(t.type){case"CHANGE":return Object(r.a)(Object(r.a)({},e),{},{value:t.val,isValid:Object(l.d)(t.val,t.validators)});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}});t.a=function(e){var t=Object(i.useReducer)(u,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),a=Object(n.a)(t,2),r=a[0],l=a[1],o=e.id,s=e.onInput,p=r.value,d=r.isValid;Object(i.useEffect)((function(){s(o,p,d)}),[o,p,d,s]);var f=function(t){l({type:"CHANGE",val:t.target.value,validators:e.validators})},m=function(){l({type:"TOUCH"})},v="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:m,value:r.value}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:f,onBlur:m,value:r.value,placeholder:e.placeholder});return c.a.createElement("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),v,!r.isValid&&r.isTouched&&c.a.createElement("p",null,e.errorText))}},52:function(e,t,a){},53:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(8),r=a(44),i=a(42),c=a(0),l=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},u=function(e,t){var a=Object(c.useReducer)(l,{inputs:e,isValid:t}),r=Object(n.a)(a,2),i=r[0],u=r[1];return[i,Object(c.useCallback)((function(e,t,a){console.log("inputHandler activated...",e),u({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(c.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},54:function(e,t,a){"use strict";var n=a(8),r=a(0),i=a.n(r),c=a(43);a(55);t.a=function(e){var t=Object(r.useState)(),a=Object(n.a)(t,2),l=a[0],u=a[1],o=Object(r.useState)(),s=Object(n.a)(o,2),p=s[0],d=s[1],f=Object(r.useState)(!1),m=Object(n.a)(f,2),v=m[0],b=m[1],O=Object(r.useRef)();Object(r.useEffect)((function(){if(l){var e=new FileReader;e.onload=function(){d(e.result)},e.readAsDataURL(l)}}),[l]);return i.a.createElement("div",{className:"form-control"},i.a.createElement("input",{id:e.id,ref:O,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var a,n=v;t.target.files&&1===t.target.files.length?(a=t.target.files[0],u(a),b(!0),n=!0):(b(!1),n=!1),e.onInput(e.id,a,n)}}),i.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},i.a.createElement("div",{className:"image-upload__preview"},p&&i.a.createElement("img",{src:p,alt:"Preview"}),!p&&i.a.createElement("p",null,"Please pick an image.")),i.a.createElement(c.a,{type:"button",onClick:function(){O.current.click()}},"PICK IMAGE")),!v&&i.a.createElement("p",null,e.errorText))}},55:function(e,t,a){},66:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(46),r=a.n(n),i=a(47),c=a(42),l=a(8),u=a(0),o=a.n(u),s=a(45),p=a(51),d=a(43),f=a(49),m=a(13),v=a(54),b=a(41),O=a(53),j=a(50),E=a(9);a(66);t.default=function(){var e=Object(u.useContext)(E.a),t=Object(u.useState)(!0),a=Object(l.a)(t,2),n=a[0],y=a[1],g=Object(j.a)(),h=g.isLoading,w=g.error,I=g.sendRequest,N=g.clearError,P=Object(O.a)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),T=Object(l.a)(P,3),V=T[0],C=T[1],A=T[2],S=function(){var t=Object(i.a)(r.a.mark((function t(a){var i,c,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),console.log(V.input),!n){t.next=14;break}return t.prev=3,t.next=6,I(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BACKEND_URL+"/users/login","POST",JSON.stringify({email:V.inputs.email.value,password:V.inputs.password.value}),{"Content-Type":"application/json"});case 6:i=t.sent,e.login(i.userId,i.token),t.next=12;break;case 10:t.prev=10,t.t0=t.catch(3);case 12:t.next=28;break;case 14:return t.prev=14,(c=new FormData).append("email",V.inputs.email.value),c.append("name",V.inputs.name.value),c.append("password",V.inputs.password.value),c.append("image",V.inputs.image.value),t.next=22,I(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BACKEND_URL+"/users/signup","POST",c);case 22:l=t.sent,e.login(l.userId,l.token),t.next=28;break;case 26:t.prev=26,t.t1=t.catch(14);case 28:case"end":return t.stop()}}),t,null,[[3,10],[14,26]])})));return function(e){return t.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{error:w,onClear:N}),o.a.createElement(b.a,{className:"authentication"},h&&o.a.createElement(m.a,{asOverlay:!0}),o.a.createElement("h2",null,"Login Required"),o.a.createElement("hr",null),o.a.createElement("form",{onSubmit:S},!n&&o.a.createElement(p.a,{element:"input",id:"name",type:"text",label:"Your Name",validators:[s.c],errorText:"Please enter a name",onInput:C}),!n&&o.a.createElement(v.a,{center:!0,id:"image",onInput:C,errorText:"Please provide an image."}),o.a.createElement(p.a,{element:"input",id:"email",type:"email",label:"Email Address",validators:[Object(s.a)()],errorText:"Please enter a valid email address",onInput:C}),o.a.createElement(p.a,{id:"password",element:"input",type:"password",label:"Password",validators:[Object(s.b)(6)],errorText:"Please enter a password (at least 6 characters).",onInput:C}),o.a.createElement(d.a,{type:"submit",disabled:!V.isValid},n?"LOGIN":"SIGNUP")),o.a.createElement(d.a,{inverse:!0,onClick:function(){n?A(Object(c.a)(Object(c.a)({},V.inputs),{},{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):A(Object(c.a)(Object(c.a)({},V.inputs),{},{name:void 0,image:void 0}),V.inputs.email.isValid&&V.inputs.password.isValid),y((function(e){return!e}))}},"SWITCH TO ",n?"SIGNUP":"LOGIN")))}}}]);
//# sourceMappingURL=4.3183e826.chunk.js.map