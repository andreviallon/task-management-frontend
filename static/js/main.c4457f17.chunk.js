(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){e.exports=n(160)},114:function(e,t,n){},116:function(e,t,n){},129:function(e,t,n){},160:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),c=n.n(s),i=n(23),o=n(29),u=n(78),l=n(77),p=(n(114),n(13)),h=n(14),f=n(21),d=n(20),m=n(22),v=n(19),b=n(6),k=n.n(b),g=n(15),O=n(10),j=n(206),y=n(197),w=n(11);n(116);function E(){var e=Object(O.a)(["\n  padding-left: 20px;\n"]);return E=function(){return e},e}function S(){var e=Object(O.a)(["\n  font-size: 18px;\n  margin: 10px 0;\n"]);return S=function(){return e},e}function x(){var e=Object(O.a)(["\n  width: 100%;\n  padding: 8px 16px;\n  background-color: #f7c5c0;\n  color: #a51809;\n  box-sizing: border-box;\n  margin-bottom: 10px;\n"]);return x=function(){return e},e}var T,C=w.a.div(x()),_=w.a.h1(S()),P=w.a.ul(E()),A=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).renderMessageArray=function(e){var t=e.map(function(e,t){return r.a.createElement("li",{key:t},e)});return r.a.createElement(P,null,t)},n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.message;return r.a.createElement(C,null,r.a.createElement(_,null,"Oops!"),Array.isArray(e)?this.renderMessageArray(e):r.a.createElement("p",null,e))}}]),t}(a.Component);function D(){var e=Object(O.a)(["\n  width: 100%;\n"]);return D=function(){return e},e}function M(){var e=Object(O.a)(["\n  max-width: 480px;\n  width: 100%;\n  background-color: #edf4ff;\n  padding: 30px;\n  border-radius: 5px;\n"]);return M=function(){return e},e}function I(){var e=Object(O.a)(["\n  margin-top: 0;\n"]);return I=function(){return e},e}var N,R=w.a.h1(I()),U=w.a.div(M()),B=Object(w.a)(j.a)(D()),z=Object(i.b)("userStore","routerStore")(T=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(d.a)(t).call(this,e))).submit=Object(g.a)(k.a.mark(function e(){var t,a,r,s;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({errorMessage:null}),t=n.state,a=t.username,r=t.password,e.prev=2,e.next=5,n.props.userStore.signin(a,r);case 5:window.location.hash="/tasks",e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),s=e.t0.response.data.message,n.setState({errorMessage:s});case 12:case"end":return e.stop()}},e,null,[[2,8]])})),n.goToSignUp=function(){window.location.hash="/signup"},n.state={username:"",password:"",errorMesssage:null},n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state.errorMessage;return r.a.createElement("div",{className:"fullscreen-wrapper"},r.a.createElement(U,null,r.a.createElement(R,null,"Hello!"),r.a.createElement("p",null,"Fill in your username and password to sign in."),t&&r.a.createElement(A,{message:this.state.errorMessage}),r.a.createElement("div",null,r.a.createElement(B,{id:"outlined-name",label:"Username",margin:"dense",variant:"outlined",onChange:function(t){return e.setState({username:t.target.value})}})),r.a.createElement("div",null,r.a.createElement(B,{id:"outlined-name",label:"Password",margin:"dense",variant:"outlined",type:"password",onChange:function(t){return e.setState({password:t.target.value})}})),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(y.a,{style:{marginBottom:"10px"},fullWidth:!0,variant:"contained",color:"primary",onClick:this.submit},"SIGN IN"),r.a.createElement(y.a,{fullWidth:!0,onClick:this.goToSignUp},"Don't have an account? Sign up now!"))))}}]),t}(a.Component))||T;n(129);function F(){var e=Object(O.a)(["\n  width: 100%;\n"]);return F=function(){return e},e}function W(){var e=Object(O.a)(["\n  max-width: 480px;\n  width: 100%;\n  background-color: #edf4ff;\n  padding: 30px;\n  border-radius: 5px;\n"]);return W=function(){return e},e}function H(){var e=Object(O.a)(["\n  margin-top: 0;\n"]);return H=function(){return e},e}var L,G=w.a.h1(H()),$=w.a.div(W()),J=Object(w.a)(j.a)(F()),K=Object(i.b)("userStore","routerStore")(N=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(d.a)(t).call(this,e))).submit=Object(g.a)(k.a.mark(function e(){var t,a,r,s;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.username,r=t.password,e.prev=1,e.next=4,n.props.userStore.signup(a,r);case 4:window.location.hash="/signin",e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),s=e.t0.response.data.message,n.setState({errorMessage:s});case 11:case"end":return e.stop()}},e,null,[[1,7]])})),n.state={username:"",password:"",errorMessage:null},n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state.errorMessage;return r.a.createElement("div",{className:"fullscreen-wrapper"},r.a.createElement($,null,r.a.createElement(G,null,"Join us!"),r.a.createElement("p",null,"Start managing tasks easily."),t&&r.a.createElement(A,{message:this.state.errorMessage}),r.a.createElement("div",null,r.a.createElement(J,{id:"outlined-name",label:"Username",margin:"dense",variant:"outlined",onChange:function(t){return e.setState({username:t.target.value})}})),r.a.createElement("div",null,r.a.createElement(J,{id:"outlined-name",label:"Password",margin:"dense",variant:"outlined",type:"password",onChange:function(t){return e.setState({password:t.target.value})}})),r.a.createElement("p",null,"Passwords must contain at least 1 upper case letter, 1 lower case letter and one number OR special charracter."),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(y.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:this.submit},"SIGN UP"))))}}]),t}(a.Component))||N,q=n(203),Q=n(202),V=n(104),X=n.n(V),Y=n(105),Z=n.n(Y),ee=n(198),te=n(199),ne=n(200),ae=n(201),re=n(195),se=n(204),ce=n(208),ie=n(102),oe=n.n(ie);function ue(){var e=Object(O.a)(["\n  margin: 8px 0;\n  font-size: 22px;\n"]);return ue=function(){return e},e}function le(){var e=Object(O.a)(["\n  margin-bottom: 20px;\n"]);return le=function(){return e},e}var pe,he=w.a.div(le()),fe=w.a.h1(ue()),de=Object(i.b)("tasksStore")(L=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).deleteTask=function(){n.props.tasksStore.deleteTask(n.props.id)},n.handleStatusChange=function(e){n.props.tasksStore.updateTaskStatus(n.props.id,e.target.value)},n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.description;return r.a.createElement(he,null,r.a.createElement(ee.a,null,r.a.createElement(te.a,null,r.a.createElement(fe,null,t),n),r.a.createElement(ne.a,{style:{padding:"14px"},disableSpacing:!0},r.a.createElement(ae.a,{justify:"space-between",container:!0},r.a.createElement(ae.a,{item:!0},r.a.createElement(re.a,{style:{width:"140px"}},r.a.createElement(se.a,{value:this.props.status,onChange:this.handleStatusChange,displayEmpty:!0},r.a.createElement(ce.a,{value:"OPEN"},"Open"),r.a.createElement(ce.a,{value:"IN_PROGRESS"},"In Progress"),r.a.createElement(ce.a,{value:"DONE"},"Done")))),r.a.createElement(ae.a,{item:!0},r.a.createElement(Q.a,{onClick:this.deleteTask},r.a.createElement(oe.a,{color:"error"})))))))}}]),t}(a.Component))||L,me=n(209),ve=n(103),be=n.n(ve),ke=n(205),ge=n(207);function Oe(){var e=Object(O.a)(["\n  background-color: #c0cde0;\n  border-radius: 5px;\n  padding: 10px;\n"]);return Oe=function(){return e},e}function je(){var e=Object(O.a)(["\n  margin-top: 20px;\n"]);return je=function(){return e},e}var ye,we=w.a.div(je()),Ee=w.a.div(Oe()),Se=Object(i.b)("tasksStore")(pe=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(d.a)(t).call(this,e))).filters$=new ke.a,n.syncFilters=function(){var e=n.state,t=e.status,a=e.search;n.filters$.next({status:t,search:a})},n.handleStatusFilterChange=function(e){var t=e.target.value;n.setState({status:t},n.syncFilters)},n.handleSearchTermChange=function(e){var t=e.target.value;n.setState({search:t},n.syncFilters)},n.state={status:e.tasksStore.filters.status,search:e.tasksStore.filters.search},n.filters$.pipe(Object(ge.a)(500)).subscribe(function(t){e.tasksStore.updateFilters(t)}),n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(we,null,r.a.createElement(ae.a,{justify:"space-between",container:!0},r.a.createElement(ae.a,{item:!0},r.a.createElement(Ee,null,r.a.createElement(re.a,{style:{width:"220px"}},r.a.createElement(j.a,{placeholder:"Search...",value:this.state.search,onChange:this.handleSearchTermChange,InputProps:{startAdornment:r.a.createElement(me.a,{position:"start"},r.a.createElement(be.a,null))}})))),r.a.createElement(ae.a,{item:!0},r.a.createElement(Ee,null,r.a.createElement(re.a,{style:{width:"220px"}},r.a.createElement(se.a,{value:this.state.status,onChange:this.handleStatusFilterChange,displayEmpty:!0},r.a.createElement(ce.a,{value:""},"No status filter"),r.a.createElement(ce.a,{value:"OPEN"},"Open"),r.a.createElement(ce.a,{value:"IN_PROGRESS"},"In Progress"),r.a.createElement(ce.a,{value:"DONE"},"Done")))))))}}]),t}(a.Component))||pe;function xe(){var e=Object(O.a)(["\n  margin-left: 10px;\n\n  .signOutIcon {\n    fill: #edf4ff;\n  }\n"]);return xe=function(){return e},e}function Te(){var e=Object(O.a)(["\n  color: #edf4ff;\n  text-align: center;\n  font-size: 22px;\n"]);return Te=function(){return e},e}function Ce(){var e=Object(O.a)(["\n  padding-top: 20px;\n"]);return Ce=function(){return e},e}function _e(){var e=Object(O.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"]);return _e=function(){return e},e}function Pe(){var e=Object(O.a)(["\n  width: 100%;\n  color: #edf4ff;\n"]);return Pe=function(){return e},e}function Ae(){var e=Object(O.a)(["\n  display: flex;\n  justify-content: center;\n  border-bottom: 3px solid #757c87;\n"]);return Ae=function(){return e},e}function De(){var e=Object(O.a)(["\n  width: 100%;\n  max-width: 860px;\n  margin: auto;\n  padding: 20px;\n  box-sizing: border-box;\n"]);return De=function(){return e},e}var Me,Ie=w.a.div(De()),Ne=w.a.div(Ae()),Re=w.a.h1(Pe()),Ue=w.a.div(_e()),Be=w.a.div(Ce()),ze=w.a.p(Te()),Fe=w.a.div(xe()),We=Object(i.b)("tasksStore","routerStore","userStore")(ye=Object(i.c)(ye=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).handleSignOut=function(){var e=n.props,t=e.userStore,a=e.tasksStore;t.signout(),a.resetTasks(),window.location.hash="/signin"},n.renderTasks=function(){var e=n.props.tasksStore;return e.tasks.length?e.tasks.map(function(e){return r.a.createElement(de,{key:e.id,id:e.id,title:e.title,description:e.description,status:e.status})}):r.a.createElement(ze,null,"No tasks available. Create one?")},n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.tasksStore.fetchTasks()}},{key:"render",value:function(){return r.a.createElement(Ie,null,r.a.createElement(Ne,null,r.a.createElement(Re,null,"Get things done."),r.a.createElement(Ue,null,r.a.createElement(q.a,{variant:"extended",onClick:function(){window.location.hash="/tasks/create"}},r.a.createElement(X.a,null),"Create Task"),r.a.createElement(Fe,null,r.a.createElement(Q.a,{onClick:this.handleSignOut},r.a.createElement(Z.a,{className:"signOutIcon"}))))),r.a.createElement(Se,null),r.a.createElement(Be,null,this.renderTasks()))}}]),t}(a.Component))||ye)||ye;function He(){var e=Object(O.a)(["\n  max-width: 480px;\n  width: 100%;\n  background-color: #edf4ff;\n  padding: 30px;\n  border-radius: 5px;\n"]);return He=function(){return e},e}function Le(){var e=Object(O.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return Le=function(){return e},e}var Ge,$e=w.a.div(Le()),Je=w.a.div(He()),Ke=Object(i.b)("tasksStore","routerStore")(Me=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(d.a)(t).call(this,e))).handleSubmitTask=Object(g.a)(k.a.mark(function e(){var t,a,r,s,c;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.tasksStore,a=n.state,r=a.title,s=a.description,e.prev=2,e.next=5,t.createTask(r,s);case 5:window.location.hash="/tasks",e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),c=e.t0.response.data.message,n.setState({errorMessage:c});case 12:case"end":return e.stop()}},e,null,[[2,8]])})),n.state={title:"",description:"",errorMessage:null},n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement($e,null,r.a.createElement(Je,null,r.a.createElement("h1",null,"Create a new task"),r.a.createElement("p",null,"Provide information about the task you wish to complete."),this.state.errorMessage&&r.a.createElement(A,{message:this.state.errorMessage}),r.a.createElement(re.a,{fullWidth:!0},r.a.createElement(j.a,{label:"Title",placeholder:"Title",margin:"normal",variant:"outlined",onChange:function(t){return e.setState({title:t.target.value})}})),r.a.createElement(re.a,{fullWidth:!0},r.a.createElement(j.a,{label:"Description",placeholder:"Description",multiline:!0,rows:"8",margin:"normal",variant:"outlined",onChange:function(t){return e.setState({description:t.target.value})}})),r.a.createElement(y.a,{style:{marginTop:"10px"},fullWidth:!0,variant:"contained",color:"primary",onClick:this.handleSubmitTask},"CREATE TASK")))}}]),t}(a.Component))||Me,qe=Object(i.b)("routerStore")(Ge=Object(i.c)(Ge=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(v.a,{exact:!0,path:"/",component:z}),r.a.createElement(v.a,{path:"/signin/",component:z}),r.a.createElement(v.a,{path:"/signup/",component:K}),r.a.createElement(v.a,{exact:!0,path:"/tasks",component:We}),r.a.createElement(v.a,{exact:!0,path:"/tasks/create",component:Ke}))}}]),t}(a.Component))||Ge)||Ge;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qe,Ve,Xe,Ye,Ze,et=n(44),tt=n.n(et),nt=function(){function e(t){Object(p.a)(this,e),this.BASE_URL="https://task-manager-andreviallon.herokuapp.com",this._accessToken=null,this.routerStore=t}return Object(h.a)(e,[{key:"get",value:function(){var e=Object(g.a)(k.a.mark(function e(t){var n,a=this,r=arguments;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},Object.assign(n,this._getCommonOptions()),e.abrupt("return",tt.a.get("".concat(this.BASE_URL,"/").concat(t),n).catch(function(e){return a._handleHttpError(e)}));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"post",value:function(){var e=Object(g.a)(k.a.mark(function e(t){var n,a,r=this,s=arguments;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},a=s.length>2&&void 0!==s[2]?s[2]:{},Object.assign(a,this._getCommonOptions()),e.abrupt("return",tt.a.post("".concat(this.BASE_URL,"/").concat(t),n,a).catch(function(e){return r._handleHttpError(e)}));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(g.a)(k.a.mark(function e(t){var n,a=this,r=arguments;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},Object.assign(n,this._getCommonOptions()),e.abrupt("return",tt.a.delete("".concat(this.BASE_URL,"/").concat(t),n).catch(function(e){return a._handleHttpError(e)}));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"patch",value:function(){var e=Object(g.a)(k.a.mark(function e(t){var n,a,r=this,s=arguments;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},a=s.length>2&&void 0!==s[2]?s[2]:{},Object.assign(a,this._getCommonOptions()),e.abrupt("return",tt.a.patch("".concat(this.BASE_URL,"/").concat(t),n,a).catch(function(e){return r._handleHttpError(e)}));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"_handleHttpError",value:function(e){if(401!==e.response.data.statusCode)throw e;return this._handle401()}},{key:"_handle401",value:function(){window.location.hash="/signin"}},{key:"_getCommonOptions",value:function(){var e=this.loadToken();return{headers:{Authorization:"Bearer ".concat(e)}}}},{key:"saveToken",value:function(e){return this._accessToken=e,localStorage.setItem("accessToken",e)}},{key:"loadToken",value:function(){var e=localStorage.getItem("accessToken");return this._accessToken=e,e}},{key:"removeToken",value:function(){localStorage.removeItem("accessToken")}},{key:"accessToken",get:function(){return this._accessToken?this._accessToken:this.loadToken()}}]),e}(),at=n(106),rt=n.n(at),st=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"fetchTasks",value:function(e){var t=e.status,n=e.search,a={};t.length&&(a.status=t),n.length&&(a.search=n);var r=rt.a.stringify(a);return this.get("tasks"+(r?"?".concat(r):""))}},{key:"deleteTask",value:function(){var e=Object(g.a)(k.a.mark(function e(t){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.delete("tasks/".concat(t));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateTaskStatus",value:function(e,t){return this.patch("tasks/".concat(e,"/status"),{status:t})}},{key:"createTask",value:function(e,t){return this.post("tasks",{title:e,description:t})}}]),t}(nt),ct=n(64),it=n(31),ot=(n(97),n(12)),ut=(Qe=function(){function e(t){Object(p.a)(this,e),Object(ct.a)(this,"tasks",Ve,this),Object(ct.a)(this,"filters",Xe,this),this.tasksService=t}return Object(h.a)(e,[{key:"updateFilters",value:function(e){var t=e.status,n=e.search;this.filters.status=t,this.filters.search=n,this.fetchTasks()}},{key:"resetTasks",value:function(){this.tasks=[]}},{key:"fetchTasks",value:function(){var e=Object(g.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.tasksService.fetchTasks(this.filters);case 2:(t=e.sent)&&(this.tasks=t.data);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"createTask",value:function(){var e=Object(g.a)(k.a.mark(function e(t,n){var a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.tasksService.createTask(t,n);case 2:(a=e.sent)&&this.tasks.push(a.data);case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteTask",value:function(){var e=Object(g.a)(k.a.mark(function e(t){var n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.tasks.findIndex(function(e){return e.id===t}),e.next=3,this.tasksService.deleteTask(t);case 3:this.tasks.splice(n,1);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateTaskStatus",value:function(){var e=Object(g.a)(k.a.mark(function e(t,n){var a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.tasks.find(function(e){return e.id===t}),e.next=3,this.tasksService.updateTaskStatus(t,n);case 3:a.status=n;case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),Ve=Object(it.a)(Qe.prototype,"tasks",[ot.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Xe=Object(it.a)(Qe.prototype,"filters",[ot.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{status:"",search:""}}}),Object(it.a)(Qe.prototype,"resetTasks",[ot.action],Object.getOwnPropertyDescriptor(Qe.prototype,"resetTasks"),Qe.prototype),Object(it.a)(Qe.prototype,"fetchTasks",[ot.action],Object.getOwnPropertyDescriptor(Qe.prototype,"fetchTasks"),Qe.prototype),Object(it.a)(Qe.prototype,"createTask",[ot.action],Object.getOwnPropertyDescriptor(Qe.prototype,"createTask"),Qe.prototype),Object(it.a)(Qe.prototype,"deleteTask",[ot.action],Object.getOwnPropertyDescriptor(Qe.prototype,"deleteTask"),Qe.prototype),Object(it.a)(Qe.prototype,"updateTaskStatus",[ot.action],Object.getOwnPropertyDescriptor(Qe.prototype,"updateTaskStatus"),Qe.prototype),Qe),lt=(Ye=function(){function e(t){Object(p.a)(this,e),Object(ct.a)(this,"username",Ze,this),this.authService=t}return Object(h.a)(e,[{key:"signin",value:function(){var e=Object(g.a)(k.a.mark(function e(t,n){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.authService.signin(t,n);case 2:this.username=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"signup",value:function(){var e=Object(g.a)(k.a.mark(function e(t,n){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.authService.signup(t,n));case 1:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"signout",value:function(){this.username=null,this.authService.removeToken()}}]),e}(),Ze=Object(it.a)(Ye.prototype,"username",[ot.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(it.a)(Ye.prototype,"signin",[ot.action],Object.getOwnPropertyDescriptor(Ye.prototype,"signin"),Ye.prototype),Object(it.a)(Ye.prototype,"signup",[ot.action],Object.getOwnPropertyDescriptor(Ye.prototype,"signup"),Ye.prototype),Object(it.a)(Ye.prototype,"signout",[ot.action],Object.getOwnPropertyDescriptor(Ye.prototype,"signout"),Ye.prototype),Ye),pt=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"signin",value:function(){var e=Object(g.a)(k.a.mark(function e(t,n){var a,r;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.post)("".concat(this.BASE_URL,"/auth/signin"),{username:t,password:n});case 2:return a=e.sent,r=a.data.accessToken,this.saveToken(r),e.abrupt("return",a.data.username);case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"signup",value:function(){var e=Object(g.a)(k.a.mark(function e(t,n){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(et.post)("".concat(this.BASE_URL,"/auth/signup"),{username:t,password:n});case 2:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"signout",value:function(){var e=Object(g.a)(k.a.mark(function e(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.removeToken();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),t}(nt),ht={},ft={};ft.routerStore=new u.RouterStore;var dt=Object(o.a)(),mt=Object(u.syncHistoryWithStore)(dt,ft.routerStore);ht.tasksService=new st(ft.routerStore),ht.authService=new pt,ft.tasksStore=new ut(ht.tasksService),ft.userStore=new lt(ht.authService);var vt=r.a.createElement(i.a,ft,r.a.createElement(l.a,{history:mt},r.a.createElement(qe,null)));c.a.render(vt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[109,1,2]]]);
//# sourceMappingURL=main.c4457f17.chunk.js.map