(this.webpackJsonpemployee_directory_react=this.webpackJsonpemployee_directory_react||[]).push([[0],{18:function(e,t,a){e.exports=a(49)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),o=a.n(l),c=(a(23),a(24),a(2)),i=a(3),s=a(5),u=a(4);a(25);var m=function(e){var t=e.users;return r.a.createElement("tbody",null,void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){var t=e.login,a=e.name,n=e.picture,l=e.phone,o=e.email,c=e.dob;return r.a.createElement("tr",{key:t.uuid},r.a.createElement("td",{"data-th":"Image",className:"align-middle"},r.a.createElement("img",{src:n.medium,alt:"profile image for "+a.first+" "+a.last,className:"img-responsive"})),r.a.createElement("td",{"data-th":"Name",className:"name-cell align-middle"},a.first," ",a.last),r.a.createElement("td",{"data-th":"Phone",className:"align-middle"},l),r.a.createElement("td",{"data-th":"Email",className:"align-middle"},r.a.createElement("a",{href:"mailto:"+o,target:"__blank"},o)),r.a.createElement("td",{"data-th":"DOB",className:"align-middle"},function(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}(c.date)))})):r.a.createElement(r.a.Fragment,null))};a(26);var d=function(e){var t=e.headings,a=e.users,n=e.handleSort;return r.a.createElement("div",{className:"datatable mt-5"},r.a.createElement("table",{id:"table",className:"table table-striped table-hover table-condensed"},r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e){var t=e.name,a=e.width;return r.a.createElement("th",{className:"col",key:t,style:{width:a},onClick:function(){n(t.toLowerCase())}},t,r.a.createElement("span",{className:"pointer"}))})))),r.a.createElement(m,{users:a})))};a(7);var h=function(e){var t=e.handleSearchChange;return r.a.createElement("div",{className:"searchBox",id:"search"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:function(e){return t(e)}})))};var f=function(e){var t=e.handleSearchChange;return r.a.createElement("nav",null,r.a.createElement("div",null,r.a.createElement(h,{handleSearchChange:t})))},p=a(17),E=a.n(p),v=function(){return E.a.get("https://randomuser.me/api/?results=50&nat=us")},g=(a(44),a(45),function(){return r.a.createElement("div",{className:"links"},r.a.createElement("a",{href:"#footer"},"Footer")," ",r.a.createElement("span",null,"|")," ",r.a.createElement("a",{href:"https://github.com/johnnyboysydney/Employee_Directory_React",rel:"noopener noreferrer",target:"_blank"},"GitHub")," ",r.a.createElement("span",null,"|")," ",r.a.createElement("a",{href:"https://github.com/johnnyboysydney/Employee_Directory_React/blob/master/LICENSE",rel:"noopener noreferrer",target:"_blank"},"Copyright"))}),y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={users:[{}],order:"descend",filteredUsers:[{}]},e.headings=[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}],e.handleSort=function(t){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var a=e.state.filteredUsers.sort((function(a,n){return"ascend"===e.state.order?void 0===a[t]?1:void 0===n[t]?-1:"name"===t?a[t].first.localeCompare(n[t].first):a[t]-n[t]:void 0===a[t]?1:void 0===n[t]?-1:"name"===t?n[t].first.localeCompare(a[t].first):n[t]-a[t]}));e.setState({filteredUsers:a})},e.handleSearchChange=function(t){console.log(t.target.value);var a=t.target.value,n=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())}));e.setState({filteredUsers:n})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v().then((function(t){e.setState({users:t.data.results,filteredUsers:t.data.results})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{handleSearchChange:this.handleSearchChange}),r.a.createElement(g,null),r.a.createElement("div",{className:"data-area"},r.a.createElement(d,{headings:this.headings,users:this.state.filteredUsers,handleSort:this.handleSort})))}}]),a}(n.Component),b=(a(46),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null))}}]),a}(n.Component)),w=(a(47),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header",id:"header"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("hr",null),r.a.createElement("p",null,"Click on up-down arrow to sort Last Names A-Z or Z-A. Use the search box to narrow your results."))}}]),a}(n.Component));var N=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},k=(a(48),function(){return r.a.createElement("div",{className:"footer",id:"footer"},r.a.createElement("p",{className:"linkStyle"},r.a.createElement("a",{href:"#header"},"Employee Directory")," ",r.a.createElement("span",null,"|")," ",r.a.createElement("a",{href:"#search"},"Search")," ",r.a.createElement("span",null,"|")," ",r.a.createElement("a",{href:"https://github.com/johnnyboysydney/Employee_Directory_React",rel:"noopener noreferrer",target:"_blank"},"GitHub Repo")),r.a.createElement("hr",null),r.a.createElement("div",{className:"centered",id:"copyright"},"\xa9 ",(new Date).getFullYear()," ",r.a.createElement("a",{href:"https://github.com/johnnyboysydney/Employee_Directory_React/blob/master/LICENSE",rel:"noopener noreferrer",target:"_blank"},"Copyright")," ",r.a.createElement("span",null,"|")," All rights reserved ",r.a.createElement("span",null,"|")," ",r.a.createElement("a",{href:"https://github.com/johnnyboysydney",rel:"noopener noreferrer",target:"_blank"},"John Merchan")))});var S=function(){return r.a.createElement("div",{className:"page-container"},r.a.createElement("div",null,r.a.createElement(N,null,r.a.createElement(w,null),r.a.createElement("br",null),r.a.createElement(b,null),r.a.createElement("br",null))),r.a.createElement(k,null))},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()},7:function(e,t,a){}},[[18,1,2]]]);
//# sourceMappingURL=main.d3c49273.chunk.js.map