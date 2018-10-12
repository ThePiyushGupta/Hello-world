var Neutralino=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){let o=n(7);e.exports={ajax:function(e){e.method||(e.method=!0);var t=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");t.onreadystatechange=function(){4==t.readyState&&200==t.status?e.done&&e.done(JSON.parse(t.responseText)):4==t.readyState&&e.problem&&e.problem({message:"An error occured while connecting with Neutralino server!"})},void 0!==e.data&&(sendString=JSON.stringify(e.data)),"GET"==e.type&&(t.open("GET",e.url,e.method),t.setRequestHeader("Authorization","Basic "+o.getToken()),t.send()),"POST"==e.type&&(t.open("POST",e.url,e.method),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.setRequestHeader("Authorization","Basic "+o.getToken()),t.send(sendString))}}},function(e,t,n){let o=n(0),r={start:function(e,t){setInterval(function(){o.ajax({url:"/ping",type:"GET",success:function(t){e&&e()},errorCallback:function(){t&&t()}})},5e3)}};e.exports=r},function(e,t,n){let o=n(1);e.exports=function(e){let t=null,n=null;e.load&&e.load(),e.pingSuccessCallback&&(t=e.pingSuccessCallback),e.pingFailCallback&&(n=e.pingFailCallback),(void 0===e.ping||e.ping)&&o.start(t,n)}},function(e,t,n){let o=n(0);e.exports={putData:function(e,t,n){o.ajax({url:"/storage/putData",type:"POST",data:{bucket:e.bucket,content:e.content},done:function(e){t(e)},problem:function(e){n(e)}})},getData:function(e,t,n){o.ajax({url:"/storage/getData",type:"POST",data:{bucket:e},done:function(e){t(JSON.parse(e.content))},problem:function(e){n(e)}})}}},function(e,t,n){let o=n(0);e.exports={getRamUsage:function(e,t){o.ajax({url:"/computer/getRamUsage",type:"GET",done:function(t){e(t)},problem:function(e){t(e)}})}}},function(e,t,n){let o=n(0);e.exports={runCommand:function(e,t,n){o.ajax({url:"/os/runCommand",type:"POST",data:{command:e},done:function(e){t(e)},problem:function(e){n(e)}})},getEnvar:function(e,t,n){o.ajax({url:"/os/getEnvar",type:"POST",data:{name:e},done:function(e){t(e)},problem:function(e){n(e)}})}}},function(e,t,n){let o=n(0);e.exports={getSettings:function(e,t){o.ajax({url:"/settings.json",type:"GET",done:function(t){e(t)},problem:function(e){t(e)}})}}},function(e,t){e.exports={getToken:function(){return NL_TOKEN}}},function(e,t,n){let o=n(0);e.exports={createDirectory:function(e,t,n){o.ajax({url:"/filesystem/createDirectory",type:"POST",data:{dir:e},done:function(e){t(e)},problem:function(e){n(e)}})},removeDirectory:function(e,t,n){o.ajax({url:"/filesystem/removeDirectory",type:"POST",data:{dir:e},done:function(e){t(e)},problem:function(e){n(e)}})},writeFile:function(e,t,n,r){o.ajax({url:"/filesystem/writeFile",type:"POST",data:{filename:e,content:t},done:function(e){n(e)},problem:function(e){r(e)}})},readFile:function(e,t,n){o.ajax({url:"/filesystem/readFile",type:"POST",data:{filename:e},done:function(e){t(e)},problem:function(e){n(e)}})},removeFile:function(e,t,n){o.ajax({url:"/filesystem/removeFile",type:"POST",data:{filename:e},done:function(e){t(e)},problem:function(e){n(e)}})}}},function(e,t,n){let o=n(8),r=n(6),a=n(5),i=n(4),u=n(3),c=n(2);e.exports={filesystem:o,settings:r,os:a,computer:i,storage:u,init:c}}]);