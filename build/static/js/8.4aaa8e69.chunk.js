(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[8],{41:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(48);t.a=function(e){return r.a.createElement("div",{className:"card ".concat(e.className),style:e.style},e.children)}},48:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(46),r=a.n(n),c=a(47),l=a(8),o=a(0),i=a.n(o),s=a(1),u=a(41),m=a(43),d=a(57),E=a(49),p=a(13),f=a(9),h=a(50),b=(a(64),function(e){var t=Object(h.a)(),a=t.isLoading,n=t.error,s=t.sendRequest,b=t.clearError,g=Object(o.useContext)(f.a),_=Object(o.useState)(!1),v=Object(l.a)(_,2),C=v[0],N=v[1],O=Object(o.useState)(!1),j=Object(l.a)(O,2),L=j[0],P=j[1],D=function(){return N(!1)},k=function(){return P(!1)},A=function(){var t=Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return P(!1),t.prev=1,t.next=4,s(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BACKEND_URL+"places/".concat(e.id),"DELETE",null,{Authorization:"Bearer "+g.token});case 4:e.onDelete(e.id),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(){return t.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,{error:n,onClear:b}),i.a.createElement(d.a,{show:C,onCancel:D,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:i.a.createElement(m.a,{onClick:D},"CLOSE")},i.a.createElement("div",{className:"map-container"},i.a.createElement("iframe",{title:"map",width:"100%",height:"100%",frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0",src:"https://maps.google.com/maps?q="+e.coordinates.lat.toString()+","+e.coordinates.lng.toString()+"&t=&z=15&ie=UTF8&iwloc=&output=embed"}),i.a.createElement("script",{type:"text/javascript",src:"https://embedmaps.com/google-maps-authorization/script.js?id=5a33be79e53caf0a07dfec499abf84b7b481f165"}))),i.a.createElement(d.a,{show:L,onCancel:k,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{inverse:!0,onClick:k},"CANCEL"),i.a.createElement(m.a,{danger:!0,onClick:A},"DELETE"))},i.a.createElement("p",null,"Do you want to proceed and delete this place? Please note that it can't be undone thereafter.")),i.a.createElement("li",{className:"place-item"},i.a.createElement(u.a,null,a&&i.a.createElement(p.a,{asOverlay:!0}),i.a.createElement("div",{className:"place-item__image"},i.a.createElement("img",{src:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_ASSET_URL,"/").concat(e.image),alt:e.title})),i.a.createElement("div",{className:"place-item__info"},i.a.createElement("h2",null,e.title),i.a.createElement("h3",null,e.address),i.a.createElement("p",null,e.description)),i.a.createElement("div",{className:"place-item__actions"},i.a.createElement(m.a,{inverse:!0,onClick:function(){return N(!0)}},"VIEW ON MAP"),g.userId===e.creatorId&&i.a.createElement(m.a,{to:"/places/".concat(e.id)},"EDIT"),g.userId===e.creatorId&&i.a.createElement(m.a,{danger:!0,onClick:function(){return P(!0)}},"DELETE")))))}),g=(a(65),function(e){var t=Object(o.useContext)(f.a);return 0===e.items.length?i.a.createElement("div",{className:"place-list center"},i.a.createElement(u.a,null,i.a.createElement("h2",null,"No places found. Maybe create one?"),t.isLoggedIn&&i.a.createElement(m.a,{to:"/places/new"},"Share Place"))):i.a.createElement("ul",{className:"place-list"},e.items.map((function(t){return i.a.createElement(b,{key:t.id,id:t.id,image:t.image,title:t.title,description:t.description,address:t.address,creatorId:t.creator,coordinates:t.location,onDelete:e.onDeletePlace})})))});t.default=function(){var e=Object(o.useState)(),t=Object(l.a)(e,2),a=t[0],n=t[1],u=Object(h.a)(),m=u.isLoading,d=u.error,f=u.sendRequest,b=u.clearError,_=Object(s.h)().userId;Object(o.useEffect)((function(){(function(){var e=Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BACKEND_URL,"/places/user/").concat(_));case 3:t=e.sent,n(t.places),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),n([]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[f,_]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,{error:d,onClear:b}),m&&i.a.createElement("div",{className:"center"},i.a.createElement(p.a,null)),!m&&a&&i.a.createElement(g,{items:a,onDeletePlace:function(e){n((function(t){return t.filter((function(t){return t.id!==e}))}))}}),!m&&!a&&i.a.createElement("div",{className:"center"},"No Places found for user!"))}}}]);
//# sourceMappingURL=8.4aaa8e69.chunk.js.map