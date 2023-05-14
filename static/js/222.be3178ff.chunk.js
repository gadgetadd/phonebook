"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[222],{7222:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r=t(5048),a=t(1614),i=t(9658),o=t(7317),c=t(890),s=t(9953),u=t(9877),d=t(2419),l=t(5193),m=t(1413),h=t(9439),x=t(2791),v=t(506),Z=t(3044),f=t(3239),b=t(7665),p=t(4518),j=t(8535),g=t(1286),y=t(8518),w=t(6727),C=t(4554),k=t(6351),L=t(7748),A=t(3329);function S(){var n=(0,r.v9)(k.tU),e=(0,r.v9)(k.rn),t=(0,x.useState)({name:!0,number:!0}),i=(0,h.Z)(t,2),o=i[0],c=i[1],s=(0,L.Jx)().data,u=(0,L.Tn)(),d=(0,h.Z)(u,2),l=d[0],S=d[1].isLoading,_=(0,L.i)(),P=(0,h.Z)(_,2),W=P[0],z=P[1].isLoading,D=S||z,I=(0,r.I0)(),T="new",E="edit",F=function(n){return s.find((function(e){return e.id===n}))},J=(0,x.useState)(e?F(e).name:""),N=(0,h.Z)(J,2),$=N[0],q=N[1],B=(0,x.useState)(e?F(e).number:""),M=(0,h.Z)(B,2),U=M[0],Y=M[1],G=(0,w.Z_)().matches(/^[a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490]+([' -][a-zA-Z\u0430-\u044f\u0456\u0457\u0454\u0491\u0410-\u042f\u0406\u0407\u0404\u0490]*)*$/).max(35),H=(0,w.Z_)().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/).max(20),K=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":G.validate(r).then((function(){return c((function(n){return(0,m.Z)((0,m.Z)({},n),{},{name:!0})}))})).catch((function(){return c((function(n){return(0,m.Z)((0,m.Z)({},n),{},{name:!1})}))})),q(r);break;case"number":H.validate(r).then((function(){return c((function(n){return(0,m.Z)((0,m.Z)({},n),{},{number:!0})}))})).catch((function(){return c((function(n){return(0,m.Z)((0,m.Z)({},n),{},{number:!1})}))})),Y(r);break;default:throw new Error("unsupported input name")}};return(0,A.jsx)(a.Z,{maxWidth:"xs",sx:{my:4},children:(0,A.jsxs)(v.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,A.jsx)(Z.Z,{sx:{m:1,bgcolor:"secondary.main"},children:D?(0,A.jsx)(f.Z,{size:24,color:"inherit"}):n===E?(0,A.jsx)(g.Z,{}):(0,A.jsx)(j.Z,{})}),(0,A.jsxs)(v.Z,{sx:{textAlign:"center"},component:"form",onSubmit:function(t){t.preventDefault();var r=t.currentTarget.elements,a=r.name.value,i=r.number.value;o.name?o.number?s.some((function(n){return n.name.toLowerCase()===a.toLowerCase()}))?(0,y.yv)("".concat(a," is already in contacts"),{variant:"warning"}):(n===T&&l({name:a,number:i}).then((function(n){var e=n.data;I((0,C.dL)()),(0,y.yv)("Contact ".concat(e.name," added"),{variant:"success"})})).catch((function(){return(0,y.yv)("Something went wrong",{variant:"error"})})),n===E&&W([e,{name:a,number:i}]).then((function(n){var e=n.data;I((0,C.dL)()),(0,y.yv)("Contact ".concat(e.name," edited"),{variant:"success"})})).catch((function(){return(0,y.yv)("Something went wrong",{variant:"error"})}))):(0,y.yv)("Please enter the correct number",{variant:"error"}):(0,y.yv)("Please enter the correct name",{variant:"error"})},children:[(0,A.jsx)(b.Z,{fullWidth:!0,margin:"normal",label:"Name",type:"text",name:"name",value:$,error:!o.name,title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,autoFocus:!0,onChange:K}),(0,A.jsx)(b.Z,{fullWidth:!0,margin:"normal",label:"Number",type:"tel",name:"number",value:U,error:!o.number,title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:K}),(0,A.jsx)(p.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:D,children:n===T?"Add new contact":"Save contact"})]})," ",(0,A.jsx)(p.Z,{type:"button",fullWidth:!0,variant:"outlined",sx:{mb:2},onClick:function(){return I((0,C.dL)())},children:"Cancel"})]})})}var _=t(493),P=t(5021),W=t(3768),z=t(3400),D=t(6278),I=t(653),T=t(9900),E=t(8619),F=t(7247);function J(n){var e=n.name,t=n.number,a=n.id,i=(0,L.Nt)(),o=(0,h.Z)(i,2),c=o[0],s=o[1].isLoading,u=(0,r.I0)();return(0,A.jsx)(P.ZP,{sx:{pr:"96px",pl:0},secondaryAction:(0,A.jsxs)(v.Z,{sx:{display:"flex",gap:"10px"},children:[(0,A.jsx)(W.Z,{title:"Edit",children:(0,A.jsx)(z.Z,{"aria-label":"edit",onClick:function(){return u((0,C.$8)(a))},children:(0,A.jsx)(g.Z,{})})}),(0,A.jsx)(W.Z,{title:"Delete",children:(0,A.jsx)(z.Z,{edge:"end","aria-label":"delete",disabled:s,onClick:function(){return c(a).then((function(n){var e=n.data;(0,y.yv)("Contact ".concat(e.name," deleted"),{variant:"info"})})).catch((function(){return(0,y.yv)("Something went wrong",{variant:"error"})}))},children:s?(0,A.jsx)(f.Z,{size:24}):(0,A.jsx)(F.Z,{})})})]}),children:(0,A.jsxs)(D.Z,{href:"tel:".concat(t),sx:{p:0},children:[(0,A.jsx)(I.Z,{children:(0,A.jsx)(Z.Z,{children:(0,A.jsx)(E.Z,{})})}),(0,A.jsx)(T.Z,{primary:"".concat(e),secondary:"".concat(t)})]})})}function N(){var n=(0,L.Jx)().data,e=void 0===n?[]:n,t=(0,r.v9)(k.AD),a=e.filter((function(n){return n.name.toLowerCase().includes(t)}));return(0,A.jsx)(_.Z,{children:a.map((function(n){return(0,A.jsx)(J,(0,m.Z)({},n),n.id)}))})}var $=t(6895);function q(){var n=(0,r.v9)(k.AD),e=(0,r.I0)();return(0,A.jsx)(b.Z,{fullWidth:!0,id:"standard-controlled",label:"Find contacts by name",variant:"standard",value:n,onChange:function(n){var t=n.currentTarget.value;e((0,$.T)(t.toLowerCase()))}})}var B=t(4321);function M(){var n=(0,r.v9)(k.SW),e=(0,r.I0)(),t=(0,L.Jx)(),m=t.data,h=void 0===m?[]:m,x=t.isError,v=t.isLoading,Z=(0,l.Z)("(max-width:786px)");return(0,A.jsxs)(a.Z,{component:"main",children:[v&&(0,A.jsx)(B.Z,{}),x&&(0,A.jsxs)(i.Z,{severity:"error",children:[(0,A.jsx)(o.Z,{children:"Error"}),"Something went wrong. Please reload the page"]}),v||x||0!==h.length?!v&&!x&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(c.Z,{align:"center",component:"h1",variant:"h4",children:"Contacts"}),(0,A.jsx)(q,{}),(0,A.jsx)(N,{})]}):(0,A.jsx)(c.Z,{sx:{mt:4},align:"center",variant:"h5",paragraph:!0,children:"Your phone book is empty. Please click the button in the lower right corner and add new contacts."}),(0,A.jsx)(s.ZP,{anchor:Z?"top":"bottom",open:n,onClose:function(){return e((0,C.dL)())},children:(0,A.jsx)(S,{})}),(0,A.jsx)(u.Z,{sx:{position:"fixed",bottom:16,right:16},color:"primary","aria-label":"add",onClick:function(){return e((0,C.$A)())},children:(0,A.jsx)(d.Z,{})})]})}}}]);
//# sourceMappingURL=222.be3178ff.chunk.js.map