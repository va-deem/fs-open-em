(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(1),a=t.n(r),o=t(14),i=t.n(o),u=(t(20),t(3)),s=t(4),d=t.n(s),l="/api/persons",j={getAllEntries:function(){return d.a.get(l)},createEntry:function(e){return d.a.post(l,e)},updateEntry:function(e,n){return d.a.put("".concat(l,"/").concat(e),n)},deleteEntry:function(e){return d.a.delete("".concat(l,"/").concat(e))}},b=function(e){var n=e.persons,t=e.deleteEntry;return Object(c.jsx)("ul",{children:n.map((function(e){return Object(c.jsxs)("li",{children:[e.name," ",e.number,Object(c.jsx)("button",{onClick:function(){return t(e.id)},children:"delete"})]},e.id)}))})},f=function(e){var n=e.handleChange,t=e.value;return Object(c.jsxs)("div",{children:["filter shown with: ",Object(c.jsx)("input",{name:"filter",value:t,onChange:n})]})},h=function(e){return Object(c.jsxs)("form",{onSubmit:e.handlePersonAdd,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{name:"name",value:e.newName,onChange:e.handleChange})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{name:"number",value:e.newNumber,onChange:e.handleChange})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},m=function(e){var n=e.notification;return null===n?null:Object(c.jsx)("div",{className:"error"===n.type?"error":"success",children:n.message})},O=function(){var e=Object(r.useState)([]),n=Object(u.a)(e,2),t=n[0],a=n[1],o=Object(r.useState)(""),i=Object(u.a)(o,2),s=i[0],d=i[1],l=Object(r.useState)(""),O=Object(u.a)(l,2),p=O[0],v=O[1],x=Object(r.useState)(""),g=Object(u.a)(x,2),w=g[0],y=g[1],C=Object(r.useState)(null),E=Object(u.a)(C,2),k=E[0],S=E[1];Object(r.useEffect)((function(){j.getAllEntries().then((function(e){a(e.data)})).catch((function(e){console.log("error: ",e)}))}),[]);var N=function(e){if(window.confirm("".concat(s," is already added to phonebook, replace phone number to new one?"))){var n={name:e.name,number:p};j.updateEntry(e.id,n).then((function(e){a(t.map((function(n){return n.id!==e.data.id?n:e.data})))})).catch((function(n){S({type:"error",message:"Contact '".concat(e.name,"' was already deleted from server")}),a(t.filter((function(n){return n.id!==e.id}))),setTimeout((function(){S(null)}),3e3)}))}},A=function(e){var n=e.target,t=n.name,c=n.value;switch(t){case"name":d(c);break;case"number":v(c);break;case"filter":y(c)}},P=0===w.length?t:t.filter((function(e){return!!e.name&&e.name.toLowerCase().includes(w.toLowerCase())}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(m,{notification:k}),Object(c.jsx)(f,{handleChange:A,value:w}),Object(c.jsx)("h3",{children:"Add a new"}),Object(c.jsx)(h,{handleChange:A,newName:s,newNumber:p,handlePersonAdd:function(e){e.preventDefault();var n=t.find((function(e){return e.name===s}));if(n)N(n);else{var c={name:s,number:p};j.createEntry(c).then((function(e){a(t.concat(e.data)),S({type:"success",message:"Contact '".concat(e.data.name,"' was added successfully")}),setTimeout((function(){S(null)}),3e3),d(""),v("")})).catch((function(e){S({type:"error",message:e.response.data.error}),setTimeout((function(){S(null)}),3e3)}))}}}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(b,{persons:P,deleteEntry:function(e){window.confirm("Really delete ".concat(t.find((function(n){return n.id===e})).name,"?"))&&j.deleteEntry(e).then((function(){a(t.filter((function(n){return n.id!==e})))})).catch((function(e){console.log("error: ",e)}))}})]})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b75e3773.chunk.js.map