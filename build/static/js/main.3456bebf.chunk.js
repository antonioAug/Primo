(this.webpackJsonpprimo=this.webpackJsonpprimo||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(5),s=n.n(r),i=(n(10),n(2)),o=n(4),c=[{id:0,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",name:"Bertie Yates",age:29},{id:1,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",name:"Hester Hogan",age:32},{id:2,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",name:"Larry Little",age:36},{id:3,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",name:"Sean Walsh",age:34},{id:4,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",name:"Lola Gardner",age:29}],d=n(0),u=function(){return Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16",children:[Object(d.jsx)("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})]})},j=function(){var e=Object(a.useState)(c),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(n.length),o=Object(i.a)(s,2);return{persona:n,setPersona:r,numero:o[0],setNumero:o[1]}},l=function(e){var t=e.person,n=t.id,a=t.img,r=t.name,s=t.age,i=Object(o.a)(j),c=i.persona,l=i.setPersona,p=i.setNumero;return Object(d.jsxs)("div",{className:"persona",children:[Object(d.jsx)("img",{alt:"",src:a}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:r}),Object(d.jsxs)("h4",{children:[s," years"]})]}),Object(d.jsx)("button",{type:"button",className:"cestino",onClick:function(){return function(e){var t=c.filter((function(e){return e.id!==n}));l(t),p(c.length)}()},children:Object(d.jsx)(u,{})})]})},p=function(){var e=Object(o.a)(j),t=e.persona,n=e.setPersona,a=e.numero,r=e.setNumero;return Object(d.jsxs)("section",{children:[Object(d.jsxs)("h1",{children:[a," Birthdays today"]}),t.map((function(e){return Object(d.jsx)(l,{person:e})})),Object(d.jsx)("button",{type:"button",onClick:function(){return n([]),void r(0)},children:"Clear All"})]})};s.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.3456bebf.chunk.js.map