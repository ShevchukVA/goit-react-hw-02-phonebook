(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={container:"ContactForm_container__3ioen",label:"ContactForm_label__1I1lj",input:"ContactForm_input__3bJZZ",button:"ContactForm_button__jrRSM"}},10:function(t,e,n){t.exports={text:"Filter_text__7PA_e"}},12:function(t,e,n){t.exports=n(17)},17:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(8),r=n.n(c),l=n(11),u=n(3),i=n(4),s=n(6),m=n(5),h=n(19),b=n(9),f=n(1),p=n.n(f),C=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(b.a)({},a,o))},t.handleSubmit=function(e){e.preventDefault(),t.props.onBanContact(t.state),t.props.onAddContact(t.state),t.setState({name:"",number:""})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit,className:p.a.container},o.a.createElement("label",{className:p.a.label},"Name",o.a.createElement("input",{className:p.a.input,type:"name",name:"name",value:e,autoComplete:"off",onChange:this.handleChange})),o.a.createElement("label",{className:p.a.label},"Number",o.a.createElement("input",{className:p.a.input,type:"number",name:"number",value:n,autoComplete:"off",onChange:this.handleChange})),o.a.createElement("button",{type:"submit",className:p.a.button},"Add contact")))}}]),n}(a.Component),d=n(2),v=n.n(d),_=function(t){var e=t.contacts,n=t.onRemoveContact;return o.a.createElement(o.a.Fragment,null,e.length>0&&o.a.createElement("ul",{className:v.a.list},e.map((function(t){var e=t.id,a=t.name,c=t.number;return o.a.createElement("li",{key:e,className:v.a.item},o.a.createElement("p",{className:v.a.text},a,": ",c),o.a.createElement("button",{className:v.a.button,type:"button",onClick:function(){return n(e)}},"delete"))}))))},E=n(10),g=n.n(E),y=function(t){var e=t.value,n=t.onChangeFilter;return o.a.createElement("div",null,o.a.createElement("p",{className:g.a.text},"Find contacts by name"),o.a.createElement("input",{type:"text",value:e,onChange:function(t){return n(t.target.value)}}))},F=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[],filter:""},t.handleAddContact=function(e){var n=e.name,a=e.number,o={id:Object(h.a)(),name:n,number:a};if(""===n||""===a)return o;t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[o])}}))},t.handleRemoveContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterContacts=function(e){t.setState({filter:e})},t.handleShowFilterContact=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.handleBanContact=function(e){var n=e.name;t.setState((function(t){return{contacts:t.contacts.map((function(t){return t.name.toLowerCase()===n.toLowerCase()&&alert("".concat(n," is already in contacts.")),t}))}}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.handleShowFilterContact();return o.a.createElement("div",null,o.a.createElement("h1",null,"Phonebook"),o.a.createElement(C,{onAddContact:this.handleAddContact,onBanContact:this.handleBanContact}),o.a.createElement("h2",null,"Contacts"),e.length>1&&o.a.createElement(y,{value:t,onChangeFilter:this.handleFilterContacts}),o.a.createElement(_,{contacts:e,onRemoveContact:this.handleRemoveContact}))}}]),n}(a.Component);r.a.render(o.a.createElement(F,null),document.getElementById("root"))},2:function(t,e,n){t.exports={list:"ContactList_list__16BzJ",item:"ContactList_item__3WF5y",button:"ContactList_button__9pgYu",text:"ContactList_text__cusps"}}},[[12,1,2]]]);
//# sourceMappingURL=main.f32c5ec8.chunk.js.map