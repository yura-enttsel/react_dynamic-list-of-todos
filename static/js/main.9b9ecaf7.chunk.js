(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var a,s=c(7),n=c.n(s),l=c(6),r=c(2),i=c(3),o=c.n(i),d=c(1),j=(c(13),c(14),c(4)),u=c.n(j),b=c(0),h=function(e){var t=e.todos,c=e.selectedTodoId,a=e.selectTodo;return Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"todo",className:u()({"has-background-info-light":e.id===c}),children:[Object(b.jsx)("td",{className:"is-vcentered",children:e.id}),Object(b.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(b.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:u()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:Object(b.jsx)("button",{"aria-label":"Select todo button","data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(e)},children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:u()("far",{"fa-eye":c!==e.id,"fa-eye-slash":c===e.id})})})})})]},e.id)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(a||(a={}));var m=function(e){var t=e.query,c=e.status,s=e.handleSelect,n=e.handleInput;return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{"aria-label":"Status select","data-cy":"statusSelect",name:"Status select",value:c,onChange:function(e){return s(e.target.value)},children:[Object(b.jsx)("option",{value:a.ALL,children:"All"}),Object(b.jsx)("option",{value:a.ACTIVE,children:"Active"}),Object(b.jsx)("option",{value:a.COMPLETED,children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"aria-label":"Search input","data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",name:"query",value:t,onChange:function(e){return n(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(b.jsx)("button",{"aria-label":"Clear search button","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return n("")}})})]})]})},O=(c(16),function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})}),x=function(e){var t=e.user,c=e.isModalLoading,a=e.todo,s=e.closeModal;return Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),c?Object(b.jsx)(O,{}):Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===a||void 0===a?void 0:a.id)}),Object(b.jsx)("button",{"aria-label":"Close button",type:"button",className:"delete","data-cy":"modal-close",onClick:s})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:null===a||void 0===a?void 0:a.title}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==a&&void 0!==a&&a.completed?Object(b.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:".concat(null===t||void 0===t?void 0:t.email),children:null===t||void 0===t?void 0:t.name})]})]})]})]})};function f(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var p=function(e){return f("/users/".concat(e))},v=function(){var e=Object(d.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(d.useState)(null),i=Object(r.a)(n,2),j=i[0],u=i[1],v=Object(d.useState)(null),N=Object(r.a)(v,2),y=N[0],g=N[1],C=Object(d.useState)(0),L=Object(r.a)(C,2),S=L[0],k=L[1],T=Object(d.useState)(!1),w=Object(r.a)(T,2),E=w[0],I=w[1],A=Object(d.useState)(a.ALL),M=Object(r.a)(A,2),P=M[0],_=M[1],D=Object(d.useState)(""),q=Object(r.a)(D,2),B=q[0],V=q[1],J=Object(d.useMemo)((function(){return c.filter((function(e){var t=e.title.toLowerCase(),c=B.toLowerCase(),s=e.completed;switch(P){case a.ALL:return t.includes(c);case a.ACTIVE:return!s&&t.includes(c);case a.COMPLETED:return s&&t.includes(c);default:return e}}))}),[P,B,c]),F=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("/todos");case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:c=e.sent,g(c),I(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){F()}),[]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(m,{query:B,status:P,handleSelect:function(e){return _(e)},handleInput:function(e){return V(e)}})}),Object(b.jsx)("div",{className:"block",children:c.length>0?Object(b.jsx)(h,{todos:J,selectedTodoId:S,selectTodo:function(e){k(e.id),I(!0),u(e),z(e.userId)}}):Object(b.jsx)(O,{})})]})})}),j&&Object(b.jsx)(x,{user:y,isModalLoading:E,todo:j,closeModal:function(){k(0),g(null),u(null)}})]})};n.a.render(Object(b.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.9b9ecaf7.chunk.js.map