(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(49)},43:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),s=a.n(l),o=a(17),c=a(16),u=a(28),i={manHours:{hours:7,minutes:30},enableManHours:!0},m=Object(c.b)({settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MAN_HOURS":var a=t.payload;return Object(u.a)({},e,{manHours:a});case"TOGGLE_MAN_HOURS":return Object(u.a)({},e,{enableManHours:t.payload});default:return e}}}),h=Object(c.c)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),b=(a(42),a(43),a(2)),p=a(3),d=a(5),g=a(4),E=a(6),f=a(18),v=a(14),y=a(8),O=a(9),N=function(e){function t(){return Object(b.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(f.b,{className:"navbar-brand",to:"/"},"Agile Utilities"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.b,{className:"nav-link",to:"/jira-time-calculator/"},r.a.createElement(y.a,{icon:O.c})," JIRA Time Calculator")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(f.b,{className:"nav-link",to:"/rough-estimator/"},r.a.createElement(y.a,{icon:O.e})," Rough Estimator")))))}}]),t}(r.a.Component),j=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(d.a)(this,Object(g.a)(t).call(this,e))).handleHoursChange=function(e){a.setState({hours:e.target.value})},a.handleMinutesChange=function(e){a.setState({minutes:e.target.value})},a.toggleManHours=function(){var e=a.state.enableManHours;a.setState({enableManHours:!e})},a.saveSettings=function(){var e=a.state,t=e.hours,n=e.minutes,r=e.enableManHours,l={hours:t,minutes:n};a.props.setManHours(l),a.props.toggleManHours(r)},a.state={hours:7,minutes:30,enableManHours:e.enableManHours},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.hours,a=e.minutes,n=e.enableManHours;return r.a.createElement("div",{className:"bg-dark text-light col-4 py-5 border-bottom settings settings--".concat(this.props.show?"show":"hide")},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"row justify-content-between"},r.a.createElement("div",{className:"col-3"},r.a.createElement("h2",null,"Settings")),r.a.createElement("div",{className:"col-2 align-self-center"},r.a.createElement("button",{className:"btn btn-block btn-dark",onClick:this.props.onClose},r.a.createElement(y.a,{icon:O.f})))),r.a.createElement("form",{action:"",className:"row mt-4"},r.a.createElement("h5",{className:"col-12"},"Man Hour Settings"),r.a.createElement("div",{className:"form-group form-check col-12"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"enableManHours",onChange:this.toggleManHours,checked:n}),r.a.createElement("label",{htmlFor:"enableManHours"},"Enable Man Hours")),r.a.createElement("h6",{className:"col-12"},"Change values for man hours"),r.a.createElement("div",{className:"form-group col align-self-center"},r.a.createElement("label",{htmlFor:"hoursControlRange"},t," Hours"),r.a.createElement("input",{type:"range",className:"form-control-range",id:"hoursControlRange",min:"0",max:"24",step:"1",value:t,onChange:this.handleHoursChange,disabled:!n})),r.a.createElement("div",{className:"form-group col align-self-center"},r.a.createElement("label",{htmlFor:"minuteControlRange"},a," Minutes"),r.a.createElement("input",{type:"range",className:"form-control-range",id:"minuteControlRange",min:"0",max:"60",step:"5",value:a,onChange:this.handleMinutesChange,disabled:!n})),r.a.createElement("footer",{className:"col btn-group align-self-center"},r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.saveSettings},"Save"),r.a.createElement("button",{type:"button",className:"btn btn-secondary"},"Reset")))))}}]),t}(r.a.Component),C=Object(o.b)(function(){return function(e){var t=e.settings;return{manHours:t.manHours,enableManHours:t.enableManHours}}},function(e){return{setManHours:function(t){return e(function(e){return{type:"SET_MAN_HOURS",payload:e}}(t))},toggleManHours:function(t){return e(function(e){return{type:"TOGGLE_MAN_HOURS",payload:e}}(t))}}})(j),w=a(32),H=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(d.a)(this,Object(g.a)(t).call(this,e))).getRows=function(){var e=a.state.inputs;return e.map(function(t,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,r.a.createElement("input",{type:"number",value:t.days,onChange:a.handleInputChange,"data-key":n,"data-type":"days",onKeyDown:a.handleKeyDown,className:"form-control form-control-lg"})),r.a.createElement("td",null,r.a.createElement("input",{type:"number",value:t.hours,onChange:a.handleInputChange,"data-key":n,"data-type":"hours",onKeyDown:a.handleKeyDown,className:"form-control form-control-lg"})),r.a.createElement("td",null,r.a.createElement("input",{type:"number",value:t.minutes,onChange:a.handleInputChange,"data-key":n,"data-type":"minutes",onKeyDown:a.handleKeyDown,className:"form-control form-control-lg"})),r.a.createElement("td",null,r.a.createElement("button",{onClick:a.removeRow,"data-key":n,disabled:1===e.length,className:"btn btn-lg btn-block btn-light"},r.a.createElement(y.a,{icon:O.g}))))})},a.handleKeyDown=function(e){var t=a.state.inputs.length,n=a.state.inputs[t-1],r=n.days,l=n.hours,s=n.minutes;13===e.keyCode&&(r||l||s)&&a.addRow()},a.addRow=function(){a.props.onCalculate(a.state.inputs);var e=Object(w.a)(a.state.inputs);e.push({days:"",hours:"",minutes:""}),a.setState({inputs:e})},a.removeRow=function(e){var t=a.state.inputs,n=e.currentTarget.dataset.key;console.log(n),t.length>1&&n&&t.splice(parseInt(n),1),a.setState({inputs:t}),a.props.onCalculate(a.state.inputs)},a.handleInputChange=function(e){var t=a.state.inputs,n=e.target.dataset.key,r=e.target.dataset.type;return t.forEach(function(t,a){a.toString()===n&&r&&(t[r]=e.target.value)}),a.setState({inputs:t}),null},a.reset=function(){a.setState({inputs:[{days:"",hours:"",minutes:""}]}),a.props.onReset()},a.state={inputs:[{days:"",hours:"",minutes:""}]},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table table-borderless"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Days"),r.a.createElement("th",null,"Hours"),r.a.createElement("th",null,"Minutes"),r.a.createElement("th",null))),r.a.createElement("tbody",null,this.getRows()),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:2},r.a.createElement("button",{onClick:this.addRow,className:"btn btn-primary btn-lg btn-block"},r.a.createElement(y.a,{icon:O.d}))),r.a.createElement("td",{colSpan:1},r.a.createElement("button",{onClick:this.reset,className:"btn btn-lg btn-secondary btn-block"},r.a.createElement(y.a,{icon:O.h})))))))}}]),t}(r.a.Component),k=function(e){function t(){return Object(b.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.output,t=e.days,a=e.hours,n=e.minutes;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Total time"),r.a.createElement("div",{className:"card-body"},this.props.asManHours?r.a.createElement("span",{className:"badge badge-pill badge-primary"},r.a.createElement(y.a,{icon:O.a})," man hours"):null,r.a.createElement("h5",{className:"text-primary"},"".concat(t," ").concat(a," ").concat(n))))}}]),t}(r.a.Component),S={days:"0 days",hours:"0 hours",minutes:"0 minutes"},M=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(d.a)(this,Object(g.a)(t).call(this,e))).handleCalculate=function(e){var t=e.map(function(e){return a.stripChars(e.days)}).reduce(a.getTotalTime,0),n=e.map(function(e){return a.stripChars(e.hours)}).reduce(a.getTotalTime,0),r=e.map(function(e){return a.stripChars(e.minutes)}).reduce(a.getTotalTime,0);a.sanitizeTime(t,n,r)},a.stripChars=function(e){return e?parseInt(e.replace(/\D/g,"")):0},a.getTotalTime=function(e,t){return e+t},a.sanitizeTime=function(e,t,n){var r=e,l=t,s=n,o=a.props,c=o.enableManHours,u=o.manHours,i=24,m=60;if(n>=m&&(l+=~~(n/m),s=n%m),l>=i&&(r+=~~(l/i),l%=i),c&&u){var h=u.hours+u.minutes/m,b=24*r+l+s/m;r=~~(b/h),l=~~(b%h),s=60*Math.abs(l-b%h)}var p=Object.assign(a.state.output,{days:"".concat(r," days"),hours:"".concat(l," hours"),minutes:"".concat(s," minutes")});a.setState({output:p})},a.handleOnReset=function(){a.setState({output:S})},a.state={output:Object.assign({},S)},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"calculator row"},r.a.createElement("div",{className:"col mb-4 align-self-end"},r.a.createElement(k,{output:this.state.output,asManHours:!!this.props.manHours})),r.a.createElement("div",{className:"col-9"},r.a.createElement(H,{onCalculate:this.handleCalculate,onReset:this.handleOnReset})))}}]),t}(r.a.Component),R=Object(o.b)(function(){return function(e){var t=e.settings;return{manHours:t.manHours,enableManHours:t.enableManHours}}})(M),_=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(d.a)(this,Object(g.a)(t).call(this,e))).toggleSettings=function(){var e=a.state.showSettings;a.setState({showSettings:!e})},a.state={showSettings:!1},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("section",null,r.a.createElement("header",{className:"App__header row justify-content-center my-3"},r.a.createElement("div",{className:"col-9 bg-white"},r.a.createElement("h1",null,"JIRA Time Calculator"),r.a.createElement("p",null,"A utility to calculate time using the day, hour, minute analogy of JIRA.")),r.a.createElement("nav",{className:"App__nav bg-white col-1 align-self-center"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{onClick:this.toggleSettings,className:"btn btn-lg btn-block btn-outline-info"},r.a.createElement(y.a,{icon:O.b})))))),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col"},r.a.createElement(R,null)))),r.a.createElement(C,{show:this.state.showSettings,onClose:this.toggleSettings}))}}]),t}(r.a.Component),T=function(e){function t(){return Object(b.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col align-self-center"},r.a.createElement("h1",{className:"text-center"},"Coming soon."))))}}]),t}(r.a.Component),D=function(e){function t(){return Object(b.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(N,null),r.a.createElement(v.a,{path:"/jira-time-calculator",component:_}),r.a.createElement(v.a,{path:"/rough-estimator",component:T}))}}]),t}(r.a.Component),A=(a(48),function(e){function t(){return Object(b.a)(this,t),Object(d.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(D,null))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(function(){return r.a.createElement(o.a,{store:h},r.a.createElement(A,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.a1604098.chunk.js.map