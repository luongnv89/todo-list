(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t){e.exports={saveObject:function(e,t){localStorage.setItem(e,JSON.stringify(t))},getObject:function(e){return JSON.parse(localStorage.getItem(e))},deleteObject:function(e){localStorage.removeItem(e)}}},40:function(e,t,n){e.exports=n(64)},51:function(e,t,n){},60:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),o=n.n(c),l=(n(45),n(46),n(14)),i=n(25),u=n(17),s=(n(51),n(5)),d="SHOW_ALL",m="SHOW_COMPLETED",O="SHOW_ACTIVE",f=Object(s.createAction)("ADD_TODO"),b=Object(s.createAction)("REMOVE_TODO"),E=Object(s.createAction)("REMOVE_ALL_TODOS"),p=Object(s.createAction)("TOGGLE_TODO"),g=Object(s.createAction)("SORT_TODOS"),T=Object(s.createAction)("FETCH_TODO_REQUEST"),h=Object(s.createAction)("FETCH_TODO_RECEIVED"),j=Object(s.createAction)("FETCH_TODO_FAILED"),v=Object(s.createAction)("SAVE_TODO_REQUEST"),A=Object(s.createAction)("SAVE_TODO_RECEIVED"),_=Object(s.createAction)("SAVE_TODO_FAILED"),D=Object(s.createAction)("CHANGE_HEADER_MESSAGE"),S=function(e){var t,n=e.dispatch;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t.value.trim()&&(n(f(t.value)),t.value="")}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",ref:function(e){t=e},placeholder:"What do you want to do"})),r.a.createElement("button",{type:"submit",className:"btn btn-sm btnTodo"},r.a.createElement("i",{className:"fas fa-plus"})," Add Todo"),r.a.createElement("button",{type:"button",className:"btn btn-sm btnTodo",onClick:function(){return n(E())}},r.a.createElement("i",{className:"fas fa-eraser"})," Clear All")))},w=S=Object(l.b)()(S),y=function(e){var t=e.toggleTodo,n=e.removeTodo,a=e.completed,c=e.text,o=e.id,l=e.createdAt;return r.a.createElement("tr",null,r.a.createElement("th",{onClick:function(){return t(o)},className:"".concat(a?"todoCompleted":"")},r.a.createElement("span",null,c),r.a.createElement("br",null),r.a.createElement("span",{style:{fontSize:"0.7em"},className:"font-weight-lighter"},new Date(l).toLocaleString())),r.a.createElement("th",null,r.a.createElement("button",{onClick:function(){return n(o)},className:"btn btnTodo btn-sm"},r.a.createElement("i",{className:"fas fa-trash"}))))},x=function(e){var t=e.todos,n=e.toggleTodo,a=e.removeTodo;return r.a.createElement("div",{className:"card",style:{marginTop:"30px"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("table",{className:"table table-borderless"},r.a.createElement("tbody",null,t.map(function(e){return r.a.createElement(y,Object.assign({key:e.id},e,{toggleTodo:n,removeTodo:a}))})))))},N=n(31),L=n(36),k=function(e){return e.todos},C=Object(L.a)([function(e){return e.sortTodos},k],function(e,t){return e?Object(N.a)(t).sort(function(e,t){return e.completed-t.completed}):Object(N.a)(t).sort(function(e,t){return t.completed-e.completed})}),R=function(e,t){switch(t){case"SHOW_ALL":return e;case"SHOW_COMPLETED":return e.filter(function(e){return e.completed});case"SHOW_ACTIVE":return e.filter(function(e){return!e.completed});default:return e}},V=Object(l.b)(function(e,t){return{todos:R(C(e),t.filter),sortTodos:e.sortTodos}},function(e){return{toggleTodo:function(t){e(p(t))},removeTodo:function(t){e(b(t))},changeTodoOrder:function(){e(g())}}})(x),H=function(e){var t=e.filterTag,n=e.children;return r.a.createElement(i.b,{exact:!0,to:"SHOW_ALL"===t?"/":"/".concat(t),className:"btn btn-sm btnTodo",style:{borderRadius:"30px"}},n)},I=function(e){var t=e.total,n=e.totalActive,a=e.totalCompleted,c=e.filter;return r.a.createElement("div",{style:{marginTop:"20px"}},r.a.createElement(H,{filterTag:d},r.a.createElement("span",{className:"".concat(c===d?"font-weight-bolder":"")},"All ",r.a.createElement("span",{className:"badge badge-dark"},t))),r.a.createElement(H,{filterTag:O},r.a.createElement("span",{className:"".concat(c===O?"font-weight-bolder":"")}," Active ",r.a.createElement("span",{className:"badge badge-dark"},n))),r.a.createElement(H,{filterTag:m},r.a.createElement("span",{className:"".concat(c===m?"font-weight-bolder":"")},"Completed ",r.a.createElement("span",{className:"badge badge-dark"},a," / ",t))))},M=Object(l.b)(function(e,t){return{total:e.todos.length,totalActive:e.todos.filter(function(e){return!e.completed}).length,totalCompleted:e.todos.filter(function(e){return e.completed}).length,filter:t.filter}})(I),W="0.0.2.1",F=["Only add what you will do today","Do not add more than 6 tasks for today","Focus, focus, focus","The tasks you should add: urgent + important","The tasks you should not add: not urgent + not important","Each day I will accomplish one thing on my to do list"],G=function(){var e=F,t=Math.round(Math.random()*e.length);return t>=e.length&&(t=e.length-1),e[t]},U=function(){return r.a.createElement("div",{className:"text-center container",style:{marginTop:"30px",marginBottom:"30px",padding:"20px"}},"Copyright ",r.a.createElement("a",{target:"_black",href:"https://luongnv89.github.io"},"Luong NGUYEN "),"".concat((new Date).getFullYear()," - Todo application version ").concat(W))},B=function(e){var t=e.message;return r.a.createElement("div",{style:{marginBottom:"20px",fontStyle:"italic"}},"Today's tip:"," ",r.a.createElement("span",{style:{color:"orange"}},r.a.createElement("i",{className:"fas fa-info-circle"})," ",t))},J=Object(l.b)(function(e){return{message:e.headerMessage}})(B),Q=function(e){var t=e.match.params;return r.a.createElement("div",{className:"TodoApp"},r.a.createElement(J,null),r.a.createElement(w,null),r.a.createElement(V,{filter:t.filter||"SHOW_ALL"}),r.a.createElement(M,null),r.a.createElement(U,null))},P=function(e){var t=e.store;return r.a.createElement(l.a,{store:t},r.a.createElement(i.a,null,r.a.createElement(u.a,{path:"/:filter?",component:Q})))};n(60),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y,z,$=n(13),q=n(38),K=n(39),X=(n(61),n(6)),Z=n(18),ee=Object(s.createReducer)((Y={},Object(X.a)(Y,h,Object(Z.a)(function(e,t){return t})),Object(X.a)(Y,f,Object(Z.a)(function(e,t){e.push({id:"_"+Math.random().toString(36).substr(2,9),text:t,completed:!1,createdAt:Date.now()})})),Object(X.a)(Y,b,function(e,t){return e.filter(function(e){return t!==e.id})}),Object(X.a)(Y,E,function(e){return[]}),Object(X.a)(Y,p,Object(Z.a)(function(e,t){e.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})),Y),[]),te=Object(s.createReducer)(Object(X.a)({},g,Object(Z.a)(function(e){return!e})),!0),ne=Object(s.createReducer)((z={},Object(X.a)(z,h,function(e){return{fetching:!1}}),Object(X.a)(z,T,function(e){return{fetching:!0}}),Object(X.a)(z,j,function(e,t){return{error:t}}),Object(X.a)(z,A,function(e){return{saving:!1}}),Object(X.a)(z,v,function(e){return{saving:!0}}),Object(X.a)(z,_,function(e,t){return{error:t}}),z),{fetching:!1,saving:!1,error:null}),ae=G(),re=Object(s.createReducer)(Object(X.a)({},D,function(e,t){return t}),ae),ce=Object($.combineReducers)({todos:ee,sortTodos:te,status:ne,headerMessage:re}),oe=n(8),le=n.n(oe),ie=n(9),ue=n(26),se=le.a.mark(me),de=le.a.mark(Oe);function me(){var e;return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=ue.getObject("TODO-LIST"),t.next=4,Object(ie.c)(h(null===e?[]:e));case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(0),t.next=10,Object(ie.c)(j(t.t0));case 10:case"end":return t.stop()}},se,null,[[0,6]])}function Oe(){return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.e)("FETCH_TODO_REQUEST",me);case 2:case"end":return e.stop()}},de)}var fe=le.a.mark(Ee),be=le.a.mark(pe);function Ee(){var e;return le.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(ie.d)(k);case 3:return e=t.sent,ue.saveObject("TODO-LIST",e),t.next=7,Object(ie.c)({type:"SAVE_TODO_RECEIVED"});case 7:t.next=13;break;case 9:return t.prev=9,t.t0=t.catch(0),t.next=13,Object(ie.c)({type:"SAVE_TODO_FALED",error:t.t0});case 13:case"end":return t.stop()}},fe,null,[[0,9]])}function pe(){return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.e)("SAVE_TODO_REQUEST",Ee);case 2:case"end":return e.stop()}},be)}var ge=le.a.mark(Te);function Te(){return le.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.a)([Object(ie.b)(Oe),Object(ie.b)(pe)]);case 2:case"end":return e.stop()}},ge)}var he=Object(K.a)(),je=(Object(q.createLogger)({duration:!0,collapsed:!0}),[he,function(e){return function(t){return function(n){switch(n.type){case"ADD_TODO":case"REMOVE_TODO":case"TOGGLE_TODO":case"REMOVE_ALL_TODOS":return setTimeout(function(){e.dispatch(v()),e.dispatch(D(G()))},500),t(n);default:return t(n)}}}}]),ve=null;ve=$.applyMiddleware.apply(void 0,je);var Ae=Object($.createStore)(ce,ve);he.run(Te),Ae.dispatch(T());var _e=Ae;o.a.render(r.a.createElement(P,{store:_e}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.0d5becd7.chunk.js.map