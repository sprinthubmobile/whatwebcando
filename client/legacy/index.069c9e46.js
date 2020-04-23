import{a as e,b as n,c as t,d as i,i as a,s as r,e as o,S as c,f as s,t as l,g as u,h as d,j as f,k as m,l as h,m as p,o as v,q as g,r as b,D as y,O as w,F as E,P as j,Q as S,R as A,n as D,T as k,U as O,V as P,J as I,v as $,w as x,x as F,A as C,B as L,C as T,L as M,K as N}from"./index.95ec79ca.js";import{_ as G}from"./index.02a02c24.js";import{f as V}from"./index.1bd394fd.js";import{A as W}from"./Article.c4a645a5.js";import{P as q}from"./PromoBox.62345c00.js";var B=[{heading:"Seamless Experience",features:[{id:"offline",icon:"mdi-action-settings-applications",name:"Offline Mode"},{id:"background-sync",icon:"mdi-action-backup",name:"Background Sync"},{id:"sharing",icon:"mdi-action-explore",name:"Inter-App Sharing"},{id:"payments",icon:"mdi-action-payment",name:"Payments"},{id:"credentials",icon:"mdi-action-lock-open",name:"Credentials"}]},{heading:"Native Behaviors",features:[{id:"local-notifications",icon:"mdi-notification-system-update",name:"Local Notifications"},{id:"push-notifications",icon:"mdi-notification-tap-and-play",name:"Push Messages"},{id:"idle",icon:"mdi-moon",name:"User Idle Detection"},{id:"permissions",icon:"mdi-action-lock-open",name:"Permissions"},{id:"scheduler",icon:"mdi-action-alarm",name:"Task Scheduling"}]},{heading:"App Lifecycle",features:[{id:"distribution",icon:"mdi-distribution",name:"Store Distribution"},{id:"installation",icon:"mdi-action-get-app",name:"Home Screen Installation"},{id:"startup",icon:"mdi-startup",name:"Run On Startup"},{id:"foreground-detection",icon:"mdi-action-flip-to-front",name:"Foreground Detection"},{id:"freeze-resume",icon:"mdi-lifecycle",name:"Freeze/Resume Detection"}]},{heading:"Surroundings",features:[{id:"bluetooth",icon:"mdi-device-bluetooth",name:"Bluetooth"},{id:"nfc",icon:"mdi-device-nfc",name:"NFC"},{id:"usb",icon:"mdi-device-usb",name:"USB"},{id:"serial",icon:"mdi-device-serial",name:"Serial"},{id:"ambient-light",icon:"mdi-device-brightness-low",name:"Ambient Light"}]},{heading:"Camera & Microphone",features:[{id:"camera-microphone",icon:"mdi-image-camera-alt",name:"Audio & Video Capture"},{id:"photos",icon:"mdi-image-camera-roll",name:"Advanced Camera Controls"},{id:"recording",icon:"mdi-av-mic",name:"Recording Media"},{id:"realtime",icon:"mdi-av-videocam",name:"Real-time Communication"},{id:"shape-detection",icon:"mdi-face",name:"Shape Detection"}]},{heading:"Device Features",features:[{id:"network-type-speed",icon:"mdi-device-wifi-tethering",name:"Network Type & Speed"},{id:"online-state",icon:"mdi-device-signal-cellular-connected-no-internet-3-bar",name:"Online State"},{id:"vibration",icon:"mdi-notification-vibration",name:"Vibration"},{id:"battery-status",icon:"mdi-device-battery-80",name:"Battery Status"},{id:"memory",icon:"mdi-hardware-memory",name:"Device Memory"}]},{heading:"Operating System",features:[{id:"storage",icon:"mdi-notification-folder-special",name:"Offline Storage"},{id:"files",icon:"mdi-device-sd-storage",name:"File Access"},{id:"contacts",icon:"mdi-action-account-box",name:"Contacts"},{id:"sms",icon:"mdi-communication-message",name:"SMS"},{id:"storage-quota",icon:"mdi-notification-sim-card-alert",name:"Storage Quotas"}]},{heading:"Input",features:[{id:"touch",icon:"mdi-content-gesture",name:"Touch Gestures"},{id:"speech-recognition",icon:"mdi-av-mic",name:"Speech Recognition"},{id:"clipboard",icon:"mdi-content-content-paste",name:"Clipboard (Copy & Paste)"},{id:"pointer-adaptation",icon:"mdi-hardware-mouse",name:"Pointing Device Adaptation"}]},{heading:"Location & Position",features:[{id:"geolocation",icon:"mdi-device-gps-fixed",name:"Geolocation"},{id:"geofencing",icon:"mdi-action-group-work",name:"Geofencing"},{id:"device-position",icon:"mdi-device-screen-rotation",name:"Device Position"},{id:"device-motion",icon:"mdi-action-3d-rotation",name:"Device Motion"},{id:"proximity",icon:"mdi-image-leak-add",name:"Proximity Sensors"}]},{heading:"Screen & Output",features:[{id:"vr",icon:"mdi-maps-local-play",name:"Virtual & Augmented Reality"},{id:"fullscreen",icon:"mdi-action-settings-overscan",name:"Fullscreen"},{id:"screen-orientation",icon:"mdi-device-screen-lock-rotation",name:"Screen Orientation & Lock"},{id:"wake-lock",icon:"mdi-action-lock",name:"Wake Lock"},{id:"presentation",icon:"mdi-hardware-tv",name:"Presentation Features"}]}];function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function H(e,n,t){var i=Object.create(e);return i.feature=n[t],i}function U(e,n,t){var i=Object.create(e);return i.group=n[t],i}function _(e){var n,t;return{c:function(){n=s("span"),t=l("not testable"),this.h()},l:function(e){n=d(e,"SPAN",{class:!0});var i=f(n);t=m(i,"not testable"),i.forEach(h),this.h()},h:function(){v(n,"class","support-unk svelte-1en73j4")},m:function(e,i){g(e,n,i),b(n,t)},p:D,d:function(e){e&&h(n)}}}function Y(e){var n;function t(e,n){return n.isSupported?Q:z}var i=t(0,e),a=i(e);return{c:function(){a.c(),n=I()},l:function(e){a.l(e),n=I()},m:function(e,t){a.m(e,t),g(e,n,t)},p:function(e,r){i!==(i=t(0,r))&&(a.d(1),(a=i(r))&&(a.c(),a.m(n.parentNode,n)))},d:function(e){a.d(e),e&&h(n)}}}function z(e){var n,t,i;return{c:function(){n=s("span"),t=l("No "),i=s("i"),this.h()},l:function(e){n=d(e,"SPAN",{class:!0});var a=f(n);t=m(a,"No "),i=d(a,"I",{class:!0}),f(i).forEach(h),a.forEach(h),this.h()},h:function(){v(i,"class","mdi mdi-cross svelte-1en73j4"),v(n,"class","support support-no svelte-1en73j4")},m:function(e,a){g(e,n,a),b(n,t),b(n,i)},d:function(e){e&&h(n)}}}function Q(e){var n,t,i;return{c:function(){n=s("span"),t=l("Yes "),i=s("i"),this.h()},l:function(e){n=d(e,"SPAN",{class:!0});var a=f(n);t=m(a,"Yes "),i=d(a,"I",{class:!0}),f(i).forEach(h),a.forEach(h),this.h()},h:function(){v(i,"class","mdi mdi-check svelte-1en73j4"),v(n,"class","support support-yes svelte-1en73j4")},m:function(e,a){g(e,n,a),b(n,t),b(n,i)},d:function(e){e&&h(n)}}}function J(e){return{c:D,l:D,m:D,p:D,d:D}}function K(e){var n,t,i,a,r,o,c,j,S,A,D,k=e.feature.name+"",O={ctx:e,current:null,token:null,pending:J,then:Y,catch:_,value:"isSupported",error:"null"};return w(A=e.feature.determineIsSupported(),O),{c:function(){n=s("li"),t=s("span"),i=s("i"),r=u(),o=s("a"),c=l(k),S=u(),O.block.c(),D=u(),this.h()},l:function(e){n=d(e,"LI",{class:!0});var a=f(n);t=d(a,"SPAN",{});var s=f(t);i=d(s,"I",{class:!0}),f(i).forEach(h),r=p(s),o=d(s,"A",{rel:!0,href:!0});var l=f(o);c=m(l,k),l.forEach(h),s.forEach(h),S=p(a),O.block.l(a),D=p(a),a.forEach(h),this.h()},h:function(){v(i,"class",a="mdi "+e.feature.icon+" svelte-1en73j4"),v(o,"rel","prefetch"),v(o,"href",j="/"+e.feature.id+".html"),v(n,"class","svelte-1en73j4")},m:function(e,a){g(e,n,a),b(n,t),b(t,i),b(t,r),b(t,o),b(o,c),b(n,S),O.block.m(n,O.anchor=null),O.mount=function(){return n},O.anchor=D,b(n,D)},p:function(n,t){e=t,n.filteredGroups&&a!==(a="mdi "+e.feature.icon+" svelte-1en73j4")&&v(i,"class",a),n.filteredGroups&&k!==(k=e.feature.name+"")&&y(c,k),n.filteredGroups&&j!==(j="/"+e.feature.id+".html")&&v(o,"href",j),O.ctx=e,n.filteredGroups&&A!==(A=e.feature.determineIsSupported())&&w(A,O)||O.block.p(n,E(E({},e),O.resolved))},d:function(e){e&&h(n),O.block.d(),O.token=null,O=null}}}function X(e){for(var n,t,i,a,r,o,c=e.group.heading+"",w=e.group.resolvedFeatures,E=[],S=0;S<w.length;S+=1)E[S]=K(H(e,w,S));return{c:function(){n=s("section"),t=s("h3"),i=l(c),a=u(),r=s("ul");for(var e=0;e<E.length;e+=1)E[e].c();o=u(),this.h()},l:function(e){n=d(e,"SECTION",{class:!0});var s=f(n);t=d(s,"H3",{class:!0});var l=f(t);i=m(l,c),l.forEach(h),a=p(s),r=d(s,"UL",{class:!0});for(var u=f(r),v=0;v<E.length;v+=1)E[v].l(u);u.forEach(h),o=p(s),s.forEach(h),this.h()},h:function(){v(t,"class","svelte-1en73j4"),v(r,"class","svelte-1en73j4"),v(n,"class","svelte-1en73j4")},m:function(e,c){g(e,n,c),b(n,t),b(t,i),b(n,a),b(n,r);for(var s=0;s<E.length;s+=1)E[s].m(r,null);b(n,o)},p:function(e,n){if(e.filteredGroups&&c!==(c=n.group.heading+"")&&y(i,c),e.filteredGroups){var t;for(w=n.group.resolvedFeatures,t=0;t<w.length;t+=1){var a=H(n,w,t);E[t]?E[t].p(e,a):(E[t]=K(a),E[t].c(),E[t].m(r,null))}for(;t<E.length;t+=1)E[t].d(1);E.length=w.length}},d:function(e){e&&h(n),j(E,e)}}}function Z(e){for(var n,t,i,a,r,o,c,y,w,E,O,P,I,$,x,F,C,L,T,M,N,G,V,W,q,B,R=e.filteredGroups,H=[],_=0;_<R.length;_+=1)H[_]=X(U(e,R,_));return{c:function(){n=s("div"),t=s("div"),i=s("h2"),a=l("Features"),r=u(),o=s("dl"),c=s("div"),y=s("dt"),w=l("Yes "),E=s("i"),O=u(),P=s("dd"),I=l("Feature available in your current browser"),$=u(),x=s("div"),F=s("dt"),C=l("No "),L=s("i"),T=u(),M=s("dd"),N=l("Feature not available in your current browser"),G=u(),V=s("input"),W=u(),q=s("div");for(var e=0;e<H.length;e+=1)H[e].c();this.h()},l:function(e){n=d(e,"DIV",{class:!0});var s=f(n);t=d(s,"DIV",{});var l=f(t);i=d(l,"H2",{class:!0});var u=f(i);a=m(u,"Features"),u.forEach(h),r=p(l),o=d(l,"DL",{class:!0,"aria-hidden":!0});var v=f(o);c=d(v,"DIV",{class:!0});var g=f(c);y=d(g,"DT",{class:!0});var b=f(y);w=m(b,"Yes "),E=d(b,"I",{class:!0}),f(E).forEach(h),b.forEach(h),O=p(g),P=d(g,"DD",{class:!0});var j=f(P);I=m(j,"Feature available in your current browser"),j.forEach(h),$=p(g),g.forEach(h),x=d(v,"DIV",{class:!0});var S=f(x);F=d(S,"DT",{class:!0});var A=f(F);C=m(A,"No "),L=d(A,"I",{class:!0}),f(L).forEach(h),A.forEach(h),T=p(S),M=d(S,"DD",{class:!0});var D=f(M);N=m(D,"Feature not available in your current browser"),D.forEach(h),S.forEach(h),v.forEach(h),l.forEach(h),G=p(s),V=d(s,"INPUT",{type:!0,class:!0,placeholder:!0}),s.forEach(h),W=p(e),q=d(e,"DIV",{class:!0});for(var k=f(q),B=0;B<H.length;B+=1)H[B].l(k);k.forEach(h),this.h()},h:function(){v(i,"class","svelte-1en73j4"),v(E,"class","mdi mdi-check svelte-1en73j4"),v(y,"class","support support-yes svelte-1en73j4"),v(P,"class","svelte-1en73j4"),v(c,"class","svelte-1en73j4"),v(L,"class","mdi mdi-cross"),v(F,"class","support support-no svelte-1en73j4"),v(M,"class","svelte-1en73j4"),v(x,"class","svelte-1en73j4"),v(o,"class","legend svelte-1en73j4"),v(o,"aria-hidden","true"),v(V,"type","text"),v(V,"class","filter-input svelte-1en73j4"),v(V,"placeholder","Filter"),v(n,"class","level svelte-1en73j4"),v(q,"class","features-list-container svelte-1en73j4"),B=[S(V,"input",e.input_input_handler),S(V,"keyup",e.filterFeatures)]},m:function(s,l){g(s,n,l),b(n,t),b(t,i),b(i,a),b(t,r),b(t,o),b(o,c),b(c,y),b(y,w),b(y,E),b(c,O),b(c,P),b(P,I),b(c,$),b(o,x),b(x,F),b(F,C),b(F,L),b(x,T),b(x,M),b(M,N),b(n,G),b(n,V),A(V,e.filter),g(s,W,l),g(s,q,l);for(var u=0;u<H.length;u+=1)H[u].m(q,null)},p:function(e,n){if(e.filter&&V.value!==n.filter&&A(V,n.filter),e.filteredGroups){var t;for(R=n.filteredGroups,t=0;t<R.length;t+=1){var i=U(n,R,t);H[t]?H[t].p(e,i):(H[t]=X(i),H[t].c(),H[t].m(q,null))}for(;t<H.length;t+=1)H[t].d(1);H.length=R.length}},i:D,o:D,d:function(e){e&&h(n),e&&h(W),e&&h(q),j(H,e),k(B)}}}function ee(e,n,t){B.forEach((function(e){e.resolvedFeatures=e.features.map((function(e){var n=V.find((function(n){return n.id===e.id}));return n.icon=e.icon,n}))}));var i=O(B),a="";return{filteredGroups:i,filter:a,filterFeatures:function(){var e=a.toLocaleLowerCase().trim();e.length<2?t("filteredGroups",i=O(B)):t("filteredGroups",i=B.map((function(n){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(t,!0).forEach((function(n){P(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n,{resolvedFeatures:n.resolvedFeatures.filter((function(n){return-1!==n.name.toLocaleLowerCase().indexOf(e)||n.description.some((function(n){return-1!==n.toLocaleLowerCase().indexOf(e)}))||-1!==n.api.toLocaleLowerCase().indexOf(e)}))})})).filter((function(e){return!!e.resolvedFeatures.length})))},input_input_handler:function(){a=this.value,t("filter",a)}}}var ne=function(s){function l(e){var c;return n(this,l),c=t(this,i(l).call(this)),a(o(c),e,ee,Z,r,{}),c}return e(l,c),l}();function te(e,n,t){var i=Object.create(e);return i.article=n[t],i}function ie(e){var n,t=new W({props:{article:e.article}});return{c:function(){$(t.$$.fragment)},l:function(e){x(t.$$.fragment,e)},m:function(e,i){F(t,e,i),n=!0},p:function(e,n){var i={};e.articles&&(i.article=n.article),t.$set(i)},i:function(e){n||(C(t.$$.fragment,e),n=!0)},o:function(e){L(t.$$.fragment,e),n=!1},d:function(e){T(t,e)}}}function ae(e){for(var n,t,i,a,r,o,c,y,w,E,S,A,D,k,O,P,I,G,V,W,B,R=new ne({}),H=new q({}),U=e.articles,_=[],Y=0;Y<U.length;Y+=1)_[Y]=ie(te(e,U,Y));var z=function(e){return L(_[e],1,1,(function(){_[e]=null}))};return{c:function(){n=s("meta"),t=s("meta"),i=s("meta"),a=s("meta"),r=s("meta"),o=s("meta"),c=s("meta"),y=u(),w=s("div"),E=s("main"),$(R.$$.fragment),S=u(),A=s("aside"),$(H.$$.fragment),D=u(),k=s("h2"),O=l("Articles"),P=u();for(var e=0;e<_.length;e+=1)_[e].c();I=u(),G=s("p"),V=s("a"),W=l("See all"),this.h()},l:function(e){n=d(e,"META",{property:!0,content:!0}),t=d(e,"META",{property:!0,content:!0}),i=d(e,"META",{property:!0,content:!0}),a=d(e,"META",{property:!0,content:!0}),r=d(e,"META",{name:!0,content:!0}),o=d(e,"META",{name:!0,content:!0}),c=d(e,"META",{name:!0,content:!0}),y=p(e),w=d(e,"DIV",{class:!0});var s=f(w);E=d(s,"MAIN",{class:!0});var l=f(E);x(R.$$.fragment,l),l.forEach(h),S=p(s),A=d(s,"ASIDE",{class:!0});var u=f(A);x(H.$$.fragment,u),D=p(u),k=d(u,"H2",{class:!0});var v=f(k);O=m(v,"Articles"),v.forEach(h),P=p(u);for(var g=0;g<_.length;g+=1)_[g].l(u);I=p(u),G=d(u,"P",{class:!0});var b=f(G);V=d(b,"A",{href:!0,class:!0});var j=f(V);W=m(j,"See all"),j.forEach(h),b.forEach(h),u.forEach(h),s.forEach(h),this.h()},h:function(){document.title="What Web Can Do Today",v(n,"property","og:title"),v(n,"content","What Web Can Do Today"),v(t,"property","og:description"),v(t,"content","Can I rely on the Web Platform features to build my app? An overview of the device integration HTML5 APIs."),v(i,"property","og:url"),v(i,"content","https://whatwebcando.today/"),v(a,"property","og:image"),v(a,"content","https://whatwebcando.today/images/share-image.png"),v(r,"name","twitter:title"),v(r,"content","What Web Can Do Today"),v(o,"name","twitter:description"),v(o,"content","Can I rely on the Web Platform features to build my app? An overview of the device integration HTML5 APIs."),v(c,"name","twitter:image"),v(c,"content","https://whatwebcando.today/images/share-image.png"),v(E,"class","svelte-5qoger"),v(k,"class","svelte-5qoger"),v(V,"href","/articles/"),v(V,"class","button"),v(G,"class","text-center svelte-5qoger"),v(A,"class","svelte-5qoger"),v(w,"class","container svelte-5qoger")},m:function(e,s){b(document.head,n),b(document.head,t),b(document.head,i),b(document.head,a),b(document.head,r),b(document.head,o),b(document.head,c),g(e,y,s),g(e,w,s),b(w,E),F(R,E,null),b(w,S),b(w,A),F(H,A,null),b(A,D),b(A,k),b(k,O),b(A,P);for(var l=0;l<_.length;l+=1)_[l].m(A,null);b(A,I),b(A,G),b(G,V),b(V,W),B=!0},p:function(e,n){if(e.articles){var t;for(U=n.articles,t=0;t<U.length;t+=1){var i=te(n,U,t);_[t]?(_[t].p(e,i),C(_[t],1)):(_[t]=ie(i),_[t].c(),C(_[t],1),_[t].m(A,I))}for(N(),t=U.length;t<_.length;t+=1)z(t);M()}},i:function(e){if(!B){C(R.$$.fragment,e),C(H.$$.fragment,e);for(var n=0;n<U.length;n+=1)C(_[n]);B=!0}},o:function(e){L(R.$$.fragment,e),L(H.$$.fragment,e),_=_.filter(Boolean);for(var n=0;n<_.length;n+=1)L(_[n]);B=!1},d:function(e){h(n),h(t),h(i),h(a),h(r),h(o),h(c),e&&h(y),e&&h(w),T(R),T(H),j(_,e)}}}function re(e){var n,t,i;return G.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e.params,e.query,a.next=3,G.awrap(this.fetch("/articles.json"));case 3:return n=a.sent,a.next=6,G.awrap(n.json());case 6:return t=a.sent,i=t.sort((function(e,n){return e.weight>n.weight?-1:e.weight<n.weight?1:0})),a.abrupt("return",{articles:i.slice(0,3)});case 9:case"end":return a.stop()}}),null,this)}function oe(e,n,t){var i=n.articles;return e.$set=function(e){"articles"in e&&t("articles",i=e.articles)},{articles:i}}var ce=function(s){function l(e){var c;return n(this,l),c=t(this,i(l).call(this)),a(o(c),e,oe,ae,r,{articles:0}),c}return e(l,c),l}();export default ce;export{re as preload};
