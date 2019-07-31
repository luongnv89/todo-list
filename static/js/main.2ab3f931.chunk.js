(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t){e.exports={saveObject:function(e,t){localStorage.setItem(e,JSON.stringify(t))},getObject:function(e){return JSON.parse(localStorage.getItem(e))},deleteObject:function(e){localStorage.removeItem(e)}}},40:function(e,t,n){e.exports=n(64)},51:function(e,t,n){},60:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),o=n.n(c),l=(n(45),n(46),n(15)),u=n(25),i=n(17),s=(n(51),n(5)),d="SHOW_ALL",m="SHOW_COMPLETED",f="SHOW_ACTIVE",O=Object(s.createAction)("ADD_TODO"),b=Object(s.createAction)("REMOVE_TODO"),p=Object(s.createAction)("REMOVE_ALL_TODOS"),E=Object(s.createAction)("TOGGLE_TODO"),T=Object(s.createAction)("SORT_TODOS"),g=Object(s.createAction)("FETCH_TODO_REQUEST"),v=Object(s.createAction)("FETCH_TODO_RECEIVED"),j=Object(s.createAction)("FETCH_TODO_FAILED"),h=Object(s.createAction)("SAVE_TODO_REQUEST"),_=Object(s.createAction)("SAVE_TODO_RECEIVED"),A=Object(s.createAction)("SAVE_TODO_FAILED"),D=function(e){var t,n=e.dispatch;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.value.trim()&&(n(O(t.value)),t.value="")}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",ref:function(e){t=e},placeholder:"What do you want to do"})),r.a.createElement("button",{type:"submit",className:"btn btn-sm btnTodo"},r.a.createElement("i",{className:"fas fa-plus"})," Add Todo"),r.a.createElement("button",{type:"button",className:"btn btn-sm btnTodo",onClick:function(){return n(p())}},r.a.createElement("i",{className:"fas fa-eraser"})," Clear All")))},w=D=Object(l.b)()(D),S=function(e){var t=e.toggleTodo,n=e.removeTodo,a=e.completed,c=e.text,o=e.id,l=e.createdAt;return r.a.createElement("tr",null,r.a.createElement("th",{onClick:function(){return t(o)},className:"".concat(a?"todoCompleted":"")},r.a.createElement("span",null,c),r.a.createElement("br",null),r.a.createElement("span",{style:{fontSize:"0.7em"}},new Date(l).toLocaleString())),r.a.createElement("th",null,r.a.createElement("button",{onClick:function(){return n(o)},className:"btn btnTodo btn-sm"},r.a.createElement("i",{className:"fas fa-trash"}))))},y=function(e){var t=e.todos,n=e.toggleTodo,a=e.removeTodo;return r.a.createElement("div",{className:"card",style:{marginTop:"30px"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("table",{className:"table table-borderless"},r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement(S,Object.assign({key:e.id},e,{toggleTodo:n,removeTodo:a}))})))))},x=n(31),N=n(36),L=function(e){return e.todos},k=Object(N.a)([function(e){return e.sortTodos},L],function(e,t){return e?Object(x.a)(t).sort(function(e,t){return e.completed-t.completed}):Object(x.a)(t).sort(function(e,t){return t.completed-e.completed})}),C=function(e,t){switch(t){case"SHOW_ALL":return e;case"SHOW_COMPLETED":return e.filter(function(e){return e.completed});case"SHOW_ACTIVE":return e.filter(function(e){return!e.completed});default:return e}},R=Object(l.b)(function(e,t){return{todos:C(k(e),t.filter),sortTodos:e.sortTodos}},function(e){return{toggleTodo:function(t){e(E(t))},removeTodo:function(t){e(b(t))},changeTodoOrder:function(){e(T())}}})(y),V=function(e){var t=e.filterTag,n=e.children;return r.a.createElement(u.b,{exact:!0,to:"SHOW_ALL"===t?"/":"/".concat(t),className:"btn btn-sm btnTodo",style:{borderRadius:"30px"}},n)},I=function(e){var t=e.total,n=e.totalActive,a=e.totalCompleted,c=e.filter;return r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement(V,{filterTag:d},r.a.createElement("span",{className:"".concat(c===d?"font-weight-bolder":"")},"All ",r.a.createElement("span",{className:"badge badge-dark"},t))),r.a.createElement(V,{filterTag:f},r.a.createElement("span",{className:"".concat(c===f?"font-weight-bolder":"")}," Active ",r.a.createElement("span",{className:"badge badge-dark"},n))),r.a.createElement(V,{filterTag:m},r.a.createElement("span",{className:"".concat(c===m?"font-weight-bolder":"")},"Completed ",r.a.createElement("span",{className:"badge badge-dark"},a," / ",t))))},H=Object(l.b)(function(e,t){return{total:e.todos.length,totalActive:e.todos.filter(function(e){return!e.completed}).length,totalCompleted:e.todos.filter(function(e){return e.completed}).length,filter:t.filter}})(I),W="0.0.1.0",F=["Only add what you will do today","Do not add more than 6 tasks for today","Focus, focus, focus","The tasks you should add: urgent + important","The tasks you should not add: not urgent + not important"],M=function(){return r.a.createElement("div",{className:"text-center container",style:{marginTop:"30px",marginBottom:"30px",padding:"20px"}},"Copyright ",r.a.createElement("a",{target:"_black",href:"https://luongnv89.github.io"},"Luong NGUYEN "),"".concat((new Date).getFullYear()," - Todo application version ").concat(W))},G=function(){return r.a.createElement("div",{style:{marginBottom:"20px",fontStyle:"italic"}},"Today's tip:"," ",r.a.createElement("span",{style:{color:"orange"}},r.a.createElement("i",{className:"fas fa-info-circle"})," ",function(){var e=F;return e[Math.round(Math.random()*e.length)]}()))},U=function(e){var t=e.match.params;return r.a.createElement("div",{className:"TodoApp"},r.a.createElement(G,null),r.a.createElement(w,null),r.a.createElement(R,{filter:t.filter||"SHOW_ALL"}),r.a.createElement(H,null),r.a.createElement(M,null))},B=function(e){var t=e.store;return r.a.createElement(l.a,{store:t},r.a.createElement(u.a,null,r.a.createElement(i.a,{path:"/:filter?",component:U})))};n(60),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J,Q,P=n(13),Y=n(38),z=n(39),$=(n(61),n(6)),q=n(18),K=Object(s.createReducer)((J={},Object($.a)(J,v,Object(q.a)(function(e,t){return t})),Object($.a)(J,O,Object(q.a)(function(e,t){e.push({id:e.length,text:t,completed:!1,createdAt:Date.now()})})),Object($.a)(J,b,function(e,t){return e.filter(function(e){return t!==e.id})}),Object($.a)(J,p,function(e){return[]}),Object($.a)(J,E,Object(q.a)(function(e,t){e.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})),J),[]),X=Object(s.createReducer)(Object($.a)({},T,Object(q.a)(function(e){return!e})),!0),Z=Object(s.createReducer)((Q={},Object($.a)(Q,v,function(e){return{fetching:!1}}),Object($.a)(Q,g,function(e){return{fetching:!0}}),Object($.a)(Q,j,function(e,t){return{error:t}}),Object($.a)(Q,_,function(e){return{saving:!1}}),Object($.a)(Q,h,function(e){return{saving:!0}}),Object($.a)(Q,A,function(e,t){return{error:t}}),Q),{fetching:!1,saving:!1,error:null}),ee=Object(P.combineReducers)({todos:K,sortTodos:X,status:Z}),te=n(8),ne=n.n(te),ae=n(9),re=n(26),ce=ne.a.mark(le),oe=ne.a.mark(ue);function le(){var e;return ne.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=re.getObject("TODO-LIST"),t.next=4,Object(ae.c)(v(null===e?[]:e));case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(0),t.next=10,Object(ae.c)(j(t.t0));case 10:case"end":return t.stop()}},ce,null,[[0,6]])}function ue(){return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ae.e)("FETCH_TODO_REQUEST",le);case 2:case"end":return e.stop()}},oe)}var ie=ne.a.mark(de),se=ne.a.mark(me);function de(){var e;return ne.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ae.d)(L);case 3:return e=t.sent,re.saveObject("TODO-LIST",e),t.next=7,Object(ae.c)({type:"SAVE_TODO_RECEIVED"});case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),t.next=13,Object(ae.c)({type:"SAVE_TODO_FALED",error:t.t0});case 13:case"end":return t.stop()}},ie,null,[[0,9]])}function me(){return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ae.e)("SAVE_TODO_REQUEST",de);case 2:case"end":return e.stop()}},se)}var fe=ne.a.mark(Oe);function Oe(){return ne.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ae.a)([Object(ae.b)(ue),Object(ae.b)(me)]);case 2:case"end":return e.stop()}},fe)}var be=Object(z.a)(),pe=(Object(Y.createLogger)({duration:!0,collapsed:!0}),[be,function(e){return function(t){return function(n){switch(n.type){case"ADD_TODO":case"REMOVE_TODO":case"TOGGLE_TODO":case"REMOVE_ALL_TODO":return setTimeout(function(){e.dispatch(h())},500),t(n);default:return t(n)}}}}]),Ee=null;Ee=P.applyMiddleware.apply(void 0,pe);var Te=Object(P.createStore)(ee,Ee);be.run(Oe),Te.dispatch(g());var ge=Te;o.a.render(r.a.createElement(B,{store:ge}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.2ab3f931.chunk.js.map