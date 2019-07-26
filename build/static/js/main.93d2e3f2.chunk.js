(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t){e.exports={setVisibilityFilter:function(e){return{type:"SET_VISIBILITY_FILTER",filter:e}},addTodo:function(e){return{type:"ADD_TODO",text:e}},removeTodo:function(e){return{type:"REMOVE_TODO",index:e}},toggleTodo:function(e){return{type:"TOGGLE_TODO",index:e}},VisibilityFilters:{SHOW_ALL:"SHOW_ALL",SHOW_COMPLETED:"SHOW_COMPLETED",SHOW_ACTIVE:"SHOW_ACTIVE"},removeAllTodos:function(){return{type:"REMOVE_ALL_TODOS"}}}},14:function(e,t,n){e.exports=n(28)},23:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},24:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),l=n.n(o),c=n(2),i=n(5),s=n(13);var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(s.a)(e),[{text:t.text,completed:!1}]);case"REMOVE_TODO":return e.filter(function(e,n){return t.index!==n});case"REMOVE_ALL_TODOS":return[];case"TOGGLE_TODO":return e.map(function(e,n){return n===t.index?Object.assign({},e,{completed:!e.completed}):e});default:return e}},m=n(1).VisibilityFilters;var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.SHOW_ALL,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},f=Object(i.b)({todos:u,visibilityFilter:d}),E=(n(23),n(24),n(1)),b=function(e){var t,n=e.dispatch;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.value.trim()&&(n(Object(E.addTodo)(t.value)),t.value="")}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",ref:function(e){t=e},placeholder:"Enter task name"})),r.a.createElement("button",{type:"submit",className:"btn btn-success btn-small"},"Add Todo"),r.a.createElement("button",{type:"button",className:"btn btn-danger btn-small",style:{marginLeft:"20px"},onClick:function(){return n(Object(E.removeAllTodos)())}},"Clear All")))},p=b=Object(c.b)()(b),O=function(e){var t=e.toggleTodo,n=e.removeTodo,a=e.completed,o=e.text,l=e.index;return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},l),r.a.createElement("th",{onClick:t},r.a.createElement("span",{style:{textDecoration:a?"line-through":"none"},className:"text-".concat(a?"danger":"success")},o)),r.a.createElement("th",null,r.a.createElement("button",{onClick:n,className:"btn btn-outline-danger btn-small"},r.a.createElement("i",{className:"fas fa-trash"}))))},v=function(e){var t=e.todos,n=e.toggleTodo,a=e.removeTodo;return r.a.createElement("div",{className:"card",style:{marginTop:"30px"}},r.a.createElement("div",{className:"card-header"},"Todo List"),r.a.createElement("div",{className:"card-body table-responsive"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Action"))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement(O,Object.assign({key:t},e,{toggleTodo:function(){return n(t)},removeTodo:function(){return a(t)},index:t}))})))))},T=function(e,t){switch(t){case"SHOW_ALL":return e;case"SHOW_COMPLETED":return e.filter(function(e){return e.completed});case"SHOW_ACTIVE":return e.filter(function(e){return!e.completed});default:return e}},g=Object(c.b)(function(e){return{todos:T(e.todos,e.visibilityFilter)}},function(e){return{toggleTodo:function(t){e(Object(E.toggleTodo)(t))},removeTodo:function(t){e(Object(E.removeTodo)(t))}}})(v),h=(n(25),n(26),function(e){var t=e.active,n=e.children,a=e.onClick;return t?r.a.createElement("span",null,n):r.a.createElement("a",{href:"",onClick:function(e){e.preventDefault(),a()}},n)}),y=Object(c.b)(function(e,t){return{active:t.filter===e.visibilityFilter}},function(e,t){return{onClick:function(){e(Object(E.setVisibilityFilter)(t.filter))}}})(h),_=function(e){var t=e.total,n=e.totalActive,a=e.totalCompleted;return r.a.createElement("p",null,"Show:"," ",r.a.createElement(y,{filter:E.VisibilityFilters.SHOW_ALL}," ",r.a.createElement("span",{className:"badge badge-light"},"All ",t)," "),", ",r.a.createElement(y,{filter:E.VisibilityFilters.SHOW_ACTIVE}," ",r.a.createElement("span",{className:"badge badge-success"}," Active ",n)," "),", ",r.a.createElement(y,{filter:E.VisibilityFilters.SHOW_COMPLETED}," ",r.a.createElement("span",{className:"badge badge-danger"},"Completed ",a)))},L=Object(c.b)(function(e){return{total:e.todos.length,totalActive:e.todos.filter(function(e){return!e.completed}).length,totalCompleted:e.todos.filter(function(e){return e.completed}).length}})(_);var A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(g,null),r.a.createElement(L,null))};n(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=Object(i.c)(f);l.a.render(r.a.createElement(c.a,{store:S},r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.93d2e3f2.chunk.js.map