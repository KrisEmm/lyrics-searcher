(this["webpackJsonplyrics-searcher"]=this["webpackJsonplyrics-searcher"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c.n(s),n=c(7),a=c.n(n),i=(c(13),c(5)),l=c.n(i),j=c(8),o=c(2),b=(c(15),c(3)),d=c(6),h=c(0),O=function(e){var t=e.setSearch,c=e.isLoading,r=Object(s.useState)(!0),n=Object(o.a)(r,2),a=n[0],i=n[1],l=Object(s.useState)({artist:"",song:""}),j=Object(o.a)(l,2),O=j[0],u=j[1],m=O.artist,x=O.song,g=function(e){""===e.target.value.trim()&&i(!0),u(Object(d.a)(Object(d.a)({},O),{},Object(b.a)({},e.target.name,e.target.value)))};return Object(s.useEffect)((function(){if(!c){u({artist:"",song:""}),i(!0)}}),[c]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"bg-info",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==m.trim()&&""!==x.trim()?(i(!1),t(O)):i(!0)},className:"col card text-white bg-transparent mb-5 pt-5 pb-2",children:Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("legend",{className:"text-center",children:"Buscador de letras de tu Canciones"}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Artista"}),Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre del Artista",name:"artist",onChange:g,value:m}),a&&""===m.trim()?Object(h.jsx)("small",{children:"* Campo Obligatorio"}):null]})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{children:"Canci\xf3n"}),Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre de la Canci\xf3n",name:"song",onChange:g,value:x}),a&&""===x.trim()?Object(h.jsx)("small",{children:"* Campo Obligatorio"}):null]})})]}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary float-right",children:"Buscar"}),c?Object(h.jsx)("div",{children:Object(h.jsx)("h4",{children:"Buscando, Espere por favor..."})}):null]})})})})})})},u=function(e){var t=e.info;return 0===Object.keys(t).length?null:Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"card border-light",children:[Object(h.jsx)("div",{className:"card-header bg-primary text-light font-weight-bold",children:Object(h.jsxs)("h4",{children:["Informaci\xf3n Artista: ",t.strArtist]})}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("img",{src:t.strArtistThumb,alt:"Foto Artista"}),t.strGenre?Object(h.jsxs)("h4",{children:[Object(h.jsx)("strong",{children:"Genero:"}),t.strGenre]}):null,Object(h.jsx)("h2",{children:"Biograf\xeda:"}),Object(h.jsx)("p",{children:t.strBiographyES?t.strBiographyES:t.strBiographyEN})]})]})})},m=function(e){var t=e.lyrics,c=e.song;return 0===t.length?null:Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Letra de la canci\xf3n"}),Object(h.jsxs)("h2",{children:[' "',c,'" ']}),Object(h.jsx)("p",{className:"letra",children:t})]})};var x=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)({}),a=Object(o.a)(n,2),i=a[0],b=a[1],d=Object(s.useState)(""),x=Object(o.a)(d,2),g=x[0],f=x[1],p=Object(s.useState)(""),v=Object(o.a)(p,2),N=v[0],y=v[1],S=Object(s.useState)({}),w=Object(o.a)(S,2),C=w[0],B=w[1];return Object(s.useEffect)((function(){0!==Object.keys(i).length&&(r(!0),function(){var e=Object(j.a)(l.a.mark((function e(){var t,c,s,n,a,j,b,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.lyrics.ovh/v1/".concat(i.artist,"/").concat(i.song),c="https://www.theaudiodb.com/api/v1/json/2/search.php?s=".concat(i.artist),s=[fetch(t),fetch(c)],e.next=5,Promise.all(s);case 5:return n=e.sent,e.next=8,Promise.all(n.map((function(e){return e.json()})));case 8:a=e.sent,j=Object(o.a)(a,2),b=j[0],d=j[1],f(b.lyrics),y(i.song),B(d.artists[0]),r(!1),document.querySelector("#read").scrollIntoView({behavior:"smooth"});case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()())}),[i]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{setSearch:b,isLoading:c}),Object(h.jsx)("div",{className:"container mt-5",id:"read",children:Object(h.jsxs)("div",{className:"row mt-5",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)(u,{info:C})}),Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)(m,{lyrics:g,song:N})})]})})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),r(e),n(e),a(e)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.796c1cac.chunk.js.map