(this["webpackJsonpmovie-search"]=this["webpackJsonpmovie-search"]||[]).push([[0],{106:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(66),a=c.n(i),s=c(120),l=c(4),o=c(116),x=c(119),p=c(123),j=c(67),b=c.n(j),h=c(113),d=c(114),u=c(115),O=c(2),g=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h.a,{w:"100%",h:"60px",bg:"blackAlpha.800",align:"center",justify:["center","center","left"],px:"30px",color:"white",children:Object(O.jsx)(d.a,{border:"1px solid white",px:"10px",py:"2px",rounded:"sm",fontFamily:"Times New Roman",children:"MyTestApp"})}),Object(O.jsx)(h.a,{w:"100%",h:"300px",bg:"red.400",color:"white",fontWeight:"semibold",align:"center",justify:["center","center","left"],fontFamily:"Calibri",px:"30px",bgGradient:"radial(red,black)",children:Object(O.jsx)(u.a,{w:"300px",py:"2px",rounded:"sm",fontSize:["25px","40px","55px"],textAlign:["center","center","left"],lineHeight:["30px","40px","55px"],children:"Watch something incredible."})})]})},m=c(121),f=c(122),w=function(e){var t=e.onChange,c=e.detail;return Object(O.jsxs)(o.a,{w:"100%",p:"20px",children:[Object(O.jsxs)(o.a,{pb:"30px",children:[Object(O.jsx)(u.a,{as:"label",children:"Search:"}),Object(O.jsx)(m.a,{size:"sm",placeholder:"",borderColor:"black",color:"black",_placeholder:{color:"gray.700"},letterSpacing:"1.2px",onChange:t})]}),Object(O.jsx)(f.a,{overflowY:"auto",children:c})]})};var v=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(""),a=Object(l.a)(i,2),s=a[0],j=a[1],h=Object(n.useState)(""),d=Object(l.a)(h,2),u=d[0],m=d[1];return Object(O.jsxs)(o.a,{h:"100vh",bg:"white",children:[Object(O.jsx)(g,{}),Object(O.jsx)(w,{onChange:function(e){r(e.target.value);var t="https://www.omdbapi.com/?s="+c+"&apikey=27472284";b.a.get(t).then((function(e){var t=e.data.Search;j(t);var c,n,r,i=s.filter((function(e){return"movie"===e.Type})),a=s.filter((function(e){return"episode"===e.Type})),l=s.filter((function(e){return"series"===e.Type})),b=(n=a,r=l,c=(c=i).map((function(e){return Object(O.jsx)(o.b,{size:["150px","200px"],backgroundImage:"url(".concat(e.Poster,")"),color:"white",children:e.Title})})),n=n.map((function(e){return Object(O.jsx)(o.b,{size:["150px","200px"],backgroundImage:"url(".concat(e.Poster,")"),color:"white",children:e.Title})})),r=r.map((function(e){return Object(O.jsx)(o.b,{size:["150px","200px"],backgroundImage:"url(".concat(e.Poster,")"),color:"white",children:e.Title})})),Object(O.jsxs)(o.a,{w:"100%",children:[Object(O.jsxs)(o.a,{mb:["20px","25px","30px"],minW:"100%",children:[Object(O.jsx)(x.a,{as:"h5",children:"Movie"}),Object(O.jsx)(p.a,{columns:[2,null,3,5],spacing:"10px",children:c})]}),Object(O.jsxs)(o.a,{mb:["20px","25px","30px"],minW:"100%",children:[Object(O.jsx)(x.a,{as:"h5",children:"Episode"}),Object(O.jsx)(p.a,{columns:[2,3,4,5],spacing:"10px",children:n})]}),Object(O.jsxs)(o.a,{mb:["20px","25px","30px"],minW:"100%",children:[Object(O.jsx)(x.a,{as:"h5",children:"Series"}),Object(O.jsx)(p.a,{columns:[2,3,4,5],spacing:"10px",children:r})]})]}));m(b)})).catch((function(e){console.log(e)}))},detail:u})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,124)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),i(e),a(e)}))};a.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(s.a,{children:Object(O.jsx)(v,{})})}),document.getElementById("root")),y()}},[[106,1,2]]]);
//# sourceMappingURL=main.472145fd.chunk.js.map