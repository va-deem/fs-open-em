(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(1),a=t.n(r),o=t(15),i=t.n(o),u=(t(21),t(6)),s=t(3),d=t(4),l=t.n(d),j="/api/persons",b={getAllEntries:function(){return l.a.get(j)},createEntry:function(e){return l.a.post(j,e)},updateEntry:function(e,n){return l.a.put("".concat(j,"/").concat(e),n)},deleteEntry:function(e){return l.a.delete("".concat(j,"/").concat(e))}},f=function(e){var n=e.persons,t=e.deleteEntry;return Object(c.jsx)("ul",{children:n.map((function(e){return Object(c.jsxs)("li",{children:[e.name," ",e.number,Object(c.jsx)("button",{onClick:function(){return t(e.id)},children:"delete"})]},e.name)}))})},h=function(e){var n=e.handleChange;return Object(c.jsxs)("div",{children:["filter shown with: ",Object(c.jsx)("input",{name:"filter",onChange:n})]})},m=function(e){return Object(c.jsxs)("form",{onSubmit:e.handlePersonAdd,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{name:"name",value:e.newName,onChange:e.handleChange})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{name:"number",value:e.newNumber,onChange:e.handleChange})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},O=function(e){var n=e.notification;return null===n?null:Object(c.jsx)("div",{className:"error"===n.type?"error":"success",children:n.message})},p=function(){var e=Object(r.useState)([]),n=Object(s.a)(e,2),t=n[0],a=n[1],o=Object(r.useState)(""),i=Object(s.a)(o,2),d=i[0],l=i[1],j=Object(r.useState)(""),p=Object(s.a)(j,2),x=p[0],v=p[1],g=Object(r.useState)(""),w=Object(s.a)(g,2),y=w[0],C=w[1],E=Object(r.useState)(null),k=Object(s.a)(E,2),S=k[0],N=k[1],A=t.filter((function(e){return e.name.toLowerCase().includes(y)}));Object(r.useEffect)((function(){b.getAllEntries().then((function(e){a(e.data)})).catch((function(e){console.log("error: ",e)}))}),[]);var P=function(e){var n=e.target,t=n.name,c=n.value;switch(t){case"name":l(c);break;case"number":v(c);break;case"filter":C(c)}};return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(O,{notification:S}),Object(c.jsx)(h,{handleChange:P}),Object(c.jsx)("h3",{children:"Add a new"}),Object(c.jsx)(m,{handleChange:P,newName:d,newNumber:x,handlePersonAdd:function(e){e.preventDefault();var n=t.find((function(e){return e.name===d})),c=Object(u.a)(Object(u.a)({},n),{},{number:x});if(n)window.confirm("".concat(d," is already added to phonebook, replace phone number to new one?"))&&b.updateEntry(n.id,c).then((function(e){a(t.map((function(n){return n.id!==e.data.id?n:e.data})))})).catch((function(e){N({type:"error",message:"Contact '".concat(n.name,"' was already deleted from server")}),a(t.filter((function(e){return e.id!==n.id}))),setTimeout((function(){N(null)}),3e3)}));else{var r={name:d,number:x};b.createEntry(r).then((function(e){a(t.concat(e.data)),N({type:"success",message:"Contact '".concat(e.data.name,"' was added successfully")}),setTimeout((function(){N(null)}),3e3),l(""),v("")})).catch((function(e){console.log("error: ",e)}))}}}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(f,{persons:A,deleteEntry:function(e){window.confirm("Really delete ".concat(t.find((function(n){return n.id===e})).name,"?"))&&b.deleteEntry(e).then((function(){a(t.filter((function(n){return n.id!==e})))})).catch((function(e){console.log("error: ",e)}))}})]})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.449e1a67.chunk.js.map