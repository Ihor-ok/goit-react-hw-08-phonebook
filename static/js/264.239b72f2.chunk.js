"use strict";(self.webpackChunkreact_homework=self.webpackChunkreact_homework||[]).push([[264],{264:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var a=t(1413),r=t(4420),o=t(5705),s=t(8007),c="PhonebookEditor_form__Rd9EJ",l="PhonebookEditor_label__TwSJn",i="PhonebookEditor_input_name__1wGHz",u="PhonebookEditor_input_error__GQyoS",m="PhonebookEditor_input_tel__vKnC9",d="PhonebookEditor_button__UpRCk",h=t(3329),_=s.Ry().shape({name:s.Z_().required(),number:s.Rx().typeError("enter a number").required()}),b={name:"",number:""};var f=function(e){var n=e.handleSubmit;return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(o.J9,{initialValues:b,onSubmit:n,validationSchema:_,children:(0,h.jsxs)(o.l0,{className:c,autoComplete:"off",children:[(0,h.jsxs)("label",{className:l,htmlFor:"Name",children:["Name",(0,h.jsx)(o.gN,{className:i,type:"text",placeholder:"Enter name",name:"name",required:!0}),(0,h.jsx)(o.Bc,{className:u,name:"name",component:"div"})]}),(0,h.jsxs)("label",{className:l,htmlFor:"phone",children:["Number",(0,h.jsx)(o.gN,{className:m,type:"tel",placeholder:"Enter phone number",name:"number",required:!0}),(0,h.jsx)(o.Bc,{className:u,name:"number",component:"div"})]}),(0,h.jsx)("button",{className:d,type:"submit",children:"Add contact"})]})})})},x="Contacts_list__ogxaZ",j="Contacts_list_line__4A1z+",p="Contacts_list_button__s+mUK",v="Contacts_title__6urqx";function N(e){var n=e.contacts,t=e.hendleDelete;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{className:v,children:"Contacts"}),(0,h.jsx)("ul",{className:x,children:n.map((function(e){return(0,h.jsxs)("li",{className:j,children:[e.name," ",e.number,(0,h.jsx)("button",{className:p,type:"button",onClick:function(){return t(e.id)},children:"delete"})]},e.id)}))})]})}var C="Filter_filter__mjBPV";function k(e){var n=e.value,t=e.onChange;return(0,h.jsx)("div",{className:C,children:(0,h.jsxs)("label",{htmlFor:"",children:["Find contacts by name   ",(0,h.jsx)("input",{type:"text",value:n,onChange:t})]})})}var y="Phonebook_phonebook__OVPM0",E="Phonebook_title__9CNpv",P=t(4302),g=t(2791),w=t(6160),F=g.memo((function(){var e=(0,r.v9)((function(e){return e.contacts})),n=(0,r.v9)((function(e){return e.filter})),t=(0,r.I0)(),o=e.contacts;(0,g.useEffect)((function(){t((0,w.yF)())}),[t]);var s=n.toLocaleLowerCase(),c=o.items.filter((function(e){return e.name.toLowerCase().includes(s)}));return(0,h.jsxs)("div",{className:y,children:[(0,h.jsx)("h1",{className:E,children:"Phonebook"}),(0,h.jsx)(f,{handleSubmit:function(e,n){var r=n.resetForm,s=(0,a.Z)({},e);if(o.items.find((function(e){return e.name.toLocaleLowerCase()===s.name.toLocaleLowerCase()})))alert("".concat(s.name," is already in contacts."));else{var c={name:s.name,number:s.number};t((0,w.uK)(c)),r()}}}),(0,h.jsx)(k,{value:n,onChange:function(e){t((0,P.s)(e.currentTarget.value))}}),(0,h.jsx)(N,{contacts:c,hendleDelete:function(e){t((0,w.GK)(e))}})]})}));function L(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(F,{})})}}}]);
//# sourceMappingURL=264.239b72f2.chunk.js.map