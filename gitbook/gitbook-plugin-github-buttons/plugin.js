"use strict";var _slicedToArray=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],i=!0,n=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(i=(u=a.next()).done)&&(r.push(u.value),!e||r.length!==e);i=!0);}catch(t){n=!0,o=t}finally{try{!i&&a.return&&a.return()}finally{if(n)throw o}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};require(["gitbook"],function(t){function s(t){var l=t.user,c=t.repo,e=t.types,g=t.size,b=t.width,d=t.height,p=t.count;e.reverse().forEach(function(t){var e,r,i,n,o,u,a,s,h=(r=(e={user:l,repo:c,type:t,size:g,width:b,height:d,count:p}).user,i=e.repo,n=e.type,o=e.size,u=e.width,a=e.height,'<a class="btn pull-right hidden-mobile" aria-label="github">\n        <iframe style="display:inline-block;vertical-align:middle;" src="https://ghbtns.com/github-btn.html?user='+r+"&repo="+i+"&type="+n+"&count="+e.count+"&size="+o+("watch"===n?"&v=2":"")+'" frameborder="0" scrolling="0" width="'+u+'px" height="'+a+'px"></iframe>\n        </a>');s=h,jQuery(".book-header > h1").before(s)})}t.events.bind("start",function(t,e){window["gitbook-plugin-github-buttons"]=e["github-buttons"]}),t.events.bind("page.change",function(){!function(t){var e=t.repo,r=e.split("/"),i=_slicedToArray(r,2),n=i[0],o=i[1];if(null!=e){var u=t.types||["star","watch"],a=t.size||"large";s({user:n,repo:o,types:u,size:a,width:t.width||("large"===a?"150":"100"),height:t.height||("large"===a?"30":"20"),count:void 0===t.count?"true":"false"})}else console.log("Should set github.repo")}(window["gitbook-plugin-github-buttons"])})});