(this["webpackJsonpp2p-wallet-web"]=this["webpackJsonpp2p-wallet-web"]||[]).push([[3],{880:function(e,a,t){},883:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t(0),c=t.n(n),r=t(878),l=t(11),s=Object(r.a)("div")({name:"Wrapper",class:"wrdya2m"}),o=Object(r.a)("div")({name:"Header",class:"h1vh307k"}),i=Object(r.a)("div")({name:"Title",class:"t1qfjroh"}),u=Object(r.a)("div")({name:"Description",class:"d8b2mdb"}),d=Object(r.a)("div")({name:"CloseWrapper",class:"c135gzia"}),m=Object(r.a)(l.c)({name:"CloseIcon",class:"c1whuod3"}),b=Object(r.a)("div")({name:"Content",class:"c12kmdhp"}),v=Object(r.a)("div")({name:"Footer",class:"f1oi5t7m"}),f=function(e){var a=e.title,t=e.description,n=e.footer,r=e.close,l=e.children,f=e.className;return c.a.createElement(s,{className:f},c.a.createElement(o,null,a?c.a.createElement(i,null,a):void 0,t?c.a.createElement(u,null,t):void 0,r?c.a.createElement(d,{onClick:r},c.a.createElement(m,{name:"close"})):void 0),l?c.a.createElement(b,null,l):void 0,n?c.a.createElement(v,null,n):void 0)};t(880)},884:function(e,a,t){},885:function(e,a,t){},886:function(e,a,t){},892:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return ae}));var n=t(0),c=t.n(n),r=t(12),l=t(878),s=t(52),o=t(25),i=t(883),u=t(1),d=t.n(u),m=t(4),b=t(8),v=t(24),f=t(38),p=t(30),j=t.n(p),O=t(204),E=t(424),h=t(35),k=t(15),w=t.n(k),g=t(142),y=t(44),x=t(61),C=t(11),S=t(164),B=Object(l.a)("div")({name:"Wrapper",class:"w2hsup5"}),I=Object(l.a)(C.c)({name:"ChevronIcon",class:"cjk37vx"}),M=Object(l.a)("div")({name:"ChevronWrapper",class:"c1aewuyh"}),N=Object(l.a)("div")({name:"Main",class:"m1x0i73s"}),A=Object(l.a)("div")({name:"Content",class:"c1lrr91s"}),W=Object(l.a)("div")({name:"InfoWrapper",class:"ifuaxgh"}),T=Object(l.a)("div")({name:"Info",class:"isx2g64"}),z=Object(l.a)("div")({name:"Top",class:"t10180ct"}),L=Object(l.a)("div")({name:"Bottom",class:"b1idmxl7"}),q=Object(l.a)("div")({name:"Additional",class:"a5vkidx"}),F=Object(l.a)("div")({name:"TokenInfo",class:"tjtzobz"}),P=Object(l.a)(C.b)({name:"AddButton",class:"ar7kpio"}),D=Object(l.a)("div")({name:"TokenName",class:"t1n4pegg"}),J=Object(l.a)("div")({name:"TokenAddress",class:"t1p1n0ee"}),H=Object(l.a)("div")({name:"PlusIconWrapper",class:"p1sgvivf"}),K=Object(l.a)(C.c)({name:"PlusIcon",class:"p1jvde4q"}),R=Object(l.a)("div")({name:"BottomInfo",class:"b13pkjo5"}),V=Object(l.a)("a")({name:"ExplorerA",class:"e1tqxv0s"}),_=Object(l.a)("div")({name:"RightInfo",class:"ryjcfxl"}),G=Object(l.a)("div")({name:"Error",class:"ezozms8"}),Q=Object(l.a)(g.a)({name:"LoaderBlockStyled",class:"ldjkvyd"}),U=function(e){var a=e.token,t=e.fee,l=e.isInfluencedFunds,s=e.closeModal,o=Object(r.c)(),i=Object(n.useState)(!1),u=Object(b.a)(i,2),v=u[0],f=u[1],p=Object(n.useState)(!1),j=Object(b.a)(p,2),O=j[0],E=j[1],k=Object(n.useState)(!1),g=Object(b.a)(k,2),C=g[0],U=g[1],X=Object(n.useState)(!1),Y=Object(b.a)(X,2),Z=Y[0],$=Y[1],ee=Object(r.d)((function(e){return e.wallet.network.cluster})),ae=function(){f(!v)},te=function(){var e=Object(m.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!0),e.next=4,o(Object(h.f)({token:a}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),U(!0),console.log(e.t0);case 10:return e.prev=10,E(!1),e.finish(10);case 13:s();case 14:case"end":return e.stop()}}),e,null,[[0,6,10,13]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(B,null,c.a.createElement(N,{className:w()({isOpen:v})},c.a.createElement(A,{className:w()({isOpen:v})},c.a.createElement(W,{onClick:ae},c.a.createElement(x.a,{symbol:a.symbol,address:a.address.toBase58(),size:45}),c.a.createElement(T,null,c.a.createElement(z,null,c.a.createElement("div",null,a.symbol)," ",c.a.createElement("div",null)),c.a.createElement(L,null,c.a.createElement("div",null,a.name)," ",c.a.createElement("div",null)))),c.a.createElement(M,{onClick:ae,className:w()({isOpen:v})},c.a.createElement(I,{name:"chevron"}))),c.a.createElement(q,{className:w()({isOpen:v})},c.a.createElement(F,{onClick:function(){try{navigator.clipboard.writeText(a.address.toBase58()),$(!0),y.b.info("".concat(a.address.toBase58()," Address Copied!")),setTimeout((function(){$(!1)}),2e3)}catch(e){console.error(e)}}},c.a.createElement(D,{className:w()({isMintCopied:Z})},Z?"Mint Address Copied!":"".concat(a.symbol," Mint Address")),c.a.createElement(J,null,a.address.toBase58())),c.a.createElement(P,{primary:!0,disabled:O,onClick:te,className:w()({isExecuting:O})},O?c.a.createElement(Q,null):c.a.createElement(H,null,c.a.createElement(K,{name:"plus"})),O?"Adding":"Add token")),c.a.createElement(R,{className:w()({isOpen:v,isError:C})},C?c.a.createElement(G,null,"Something went wrong. We couldn\u2019t add a token to your list."):c.a.createElement(c.a.Fragment,null,c.a.createElement(V,{href:Object(S.a)("address",a.address.toBase58(),ee),target:"_blank",rel:"noopener noreferrer noindex",className:"button"},"View in Solana explorer"),c.a.createElement(_,{className:w()({isError:l})},"will cost ".concat(t," SOL"),l?" (Influenced funds)":"")))))};t(884);var X=Object(l.a)("div")({name:"Wrapper",class:"w1wf7dhi"}),Y=Object(l.a)(E.a)({name:"SearchInputStyled",class:"szvbwf7"}),Z=function(e){var a=e.items,t=e.closeModal,l=Object(r.c)(),s=Object(n.useState)(0),i=Object(b.a)(s,2),u=i[0],p=i[1],E=Object(n.useState)(0),k=Object(b.a)(E,2),w=k[0],g=k[1],y=Object(n.useState)(""),x=Object(b.a)(y,2),C=x[0],S=x[1],B=Object(r.d)((function(e){return e.wallet.publicKey})),I=Object(r.d)((function(e){return e.wallet.tokenAccounts.map((function(e){return o.a.from(e)}))})),M=Object(n.useMemo)((function(){return I.find((function(e){return e.address.toBase58()===B}))}),[I,B]);Object(n.useEffect)((function(){(function(){var e=Object(m.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=v.e,e.next=4,l(Object(h.j)(f.a.span));case 4:e.t1=e.sent,a=(0,e.t0)(e.t1),g(a),p(new j.a(a).div(Math.pow(10,9)).toDecimalPlaces(9).toNumber()),e.next=13;break;case 10:e.prev=10,e.t2=e.catch(0),console.log(e.t2);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var N=Object(n.useMemo)((function(){if(a){var e=C.toLowerCase();return e.length>0?a.filter((function(a){var t,n;return(null===(t=a.symbol)||void 0===t?void 0:t.toLowerCase().includes(e))||(null===(n=a.name)||void 0===n?void 0:n.toLowerCase().includes(e))})):a}}),[C,a]);if(!a)return null;var A=Boolean(null===M||void 0===M?void 0:M.balance.lt(w));return c.a.createElement(X,null,c.a.createElement(Y,{placeholder:"Search token",value:C,onChange:function(e){var a=e.trim();S(a)}}),(null===N||void 0===N?void 0:N.length)?N.map((function(e){return c.a.createElement(U,{key:e.address.toBase58(),token:e,fee:u,isInfluencedFunds:A,closeModal:t})})):c.a.createElement(O.a,{type:"search"}))};t(885);var $=Object(l.a)(i.a)({name:"WrapperModal",class:"wiqml5"}),ee=Object(l.a)("div")({name:"ScrollableContainer",class:"s17ynaak"}),ae=function(e){var a=e.close,t=Object(r.d)((function(e){return e.wallet.tokenAccounts.map((function(e){return o.a.from(e)}))})),l=Object(r.d)((function(e){return e.global.availableTokens.map((function(e){return s.a.from(e)}))})),i=Object(n.useMemo)((function(){if(l){var e=new Set(t.map((function(e){return e.mint.address.toBase58()})));return l.filter((function(a){return!e.has(a.address.toBase58())}))}}),[l]);return c.a.createElement($,{title:"Add coins",close:a},(null===i||void 0===i?void 0:i.length)?c.a.createElement(ee,null,c.a.createElement(Z,{items:i,closeModal:function(){a()}})):void 0)};t(886)}}]);
//# sourceMappingURL=3.c2157ff2.chunk.js.map