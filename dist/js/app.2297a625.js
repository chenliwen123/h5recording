(function(t){function e(e){for(var a,r,s=e[0],c=e[1],u=e[2],d=0,h=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function r(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"82d71880"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(t);var u=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,n[1](u)}o[t]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Home")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{name:"",id:"",cols:"30",rows:"6"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),t._v(" "),n("div",{staticClass:"bgfonticon",style:t.show?"transform:scale(1);":"transform:scale(0);"},[t._m(0),n("div",{staticStyle:{"margin-bottom":"2.7rem","margin-top":"0.2rem"}},[t._v("还可继续录制 "),n("span",{staticStyle:{color:"#fd9a4d","font-weight":"700"}},[t._v(t._s(t.daojishi))]),t._v(" 秒")])]),n("button",{on:{click:t.recOpen}},[t._v("开始")]),n("button",{on:{click:t.recStop}},[t._v("停止")]),n("audio",{attrs:{src:t.audiosrc,controls:""}})])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("每次录音最长为 "),n("span",{staticStyle:{color:"#fd9a4d"}},[t._v("1:00")])])}],c=(n("d3b7"),n("5cc6"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("cfc3"),n("c19f"),n("2909")),u=n("d4ec"),d=n("bee2"),l=(n("99af"),n("ac1f"),n("466d"),n("fb6a"),n("00b4"),n("a434"),n("e9c4"),n("3452")),h=n.n(l);function f(){return new Worker(n.p+"js/transcode.worker.1a1ba0ec.worker.js")}var v=new f,p="b5fc54c1",g="MjE3NTM2NjdiNTk4NWU1ZTQ0N2MwZjY5",m="596173a8dc4040f25a23bcb42daaba15";function b(){return new Promise((function(t){var e="wss://iat-api.xfyun.cn/v2/iat",n="iat-api.xfyun.cn",a=m,o=g,i=(new Date).toGMTString(),r="hmac-sha256",s="host date request-line",c="host: ".concat(n,"\ndate: ").concat(i,"\nGET /v2/iat HTTP/1.1"),u=h.a.HmacSHA256(c,o),d=h.a.enc.Base64.stringify(u),l='api_key="'.concat(a,'", algorithm="').concat(r,'", headers="').concat(s,'", signature="').concat(d,'"'),f=btoa(l);e="".concat(e,"?authorization=").concat(f,"&date=").concat(i,"&host=").concat(n),t(e)}))}var w=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.language,a=e.accent,o=e.appId,i=e.audiobase64;Object(u["a"])(this,t);var r=this;this.status="null",this.language=n||"zh_cn",this.accent=a||"mandarin",this.appId=o||p,this.audioData=[],this.resultText="",this.resultTextTemp="",this.audiobase64=i,v.onmessage=function(t){var e;(e=r.audioData).push.apply(e,Object(c["a"])(t.data))}}return Object(d["a"])(t,[{key:"setStatus",value:function(t){this.onWillStatusChange&&this.status!==t&&this.onWillStatusChange(this.status,t),this.status=t}},{key:"setResultText",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.resultText,n=t.resultTextTemp;this.onTextChange&&this.onTextChange(n||e||""),void 0!==e&&(this.resultText=e),void 0!==n&&(this.resultTextTemp=n)}},{key:"setParams",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.language,n=t.accent;e&&(this.language=e),n&&(this.accent=n)}},{key:"connectWebSocket",value:function(){var t=this;return b().then((function(e){var n;"WebSocket"in window?(n=new WebSocket(e),t.webSocket=n,t.setStatus("init"),n.onopen=function(){t.setStatus("ing"),setTimeout((function(){t.webSocketSend()}),500)},n.onmessage=function(e){t.result(e.data)},n.onerror=function(){t.recorderStop()},n.onclose=function(){t.recorderStop()}):alert("浏览器不支持WebSocket")}))}},{key:"recorderInit",value:function(){var t=this;navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;try{if(this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.audioContext.resume(),!this.audioContext)return void alert("浏览器不支持webAudioApi相关接口")}catch(a){if(!this.audioContext)return void alert("浏览器不支持webAudioApi相关接口")}if(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then((function(t){e(t)})).catch((function(t){n(t)}));else{if(!navigator.getUserMedia)return navigator.userAgent.toLowerCase().match(/chrome/)&&location.origin.indexOf("https://")<0?alert("chrome下获取浏览器录音功能，因为安全性问题，需要在localhost或127.0.0.1或https下才能获取权限"):alert("无法获取浏览器录音功能，请升级浏览器或使用chrome"),void(this.audioContext&&this.audioContext.close());navigator.getUserMedia({audio:!0,video:!1},(function(t){e(t)}),(function(t){n(t)}))}var e=function(e){console.log("getMediaSuccess"),t.scriptProcessor=t.audioContext.createScriptProcessor(0,1,1),t.scriptProcessor.onaudioprocess=function(e){"ing"===t.status&&(v.postMessage(e.inputBuffer.getChannelData(0)),t.audiobase64.push(e.inputBuffer.getChannelData(0).slice(0)))},t.mediaSource=t.audioContext.createMediaStreamSource(e),t.mediaSource.connect(t.scriptProcessor),t.scriptProcessor.connect(t.audioContext.destination),t.connectWebSocket()},n=function(e){alert("请求麦克风失败"),console.log(e),t.audioContext&&t.audioContext.close(),t.audioContext=void 0,t.webSocket&&1===t.webSocket.readyState&&t.webSocket.close()}}},{key:"recorderStart",value:function(){this.audioContext?(this.audioContext.resume(),this.connectWebSocket()):this.recorderInit()}},{key:"recorderStop",value:function(){/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgen)||this.audioContext&&this.audioContext.suspend(),this.setStatus("end")}},{key:"toBase64",value:function(t){for(var e="",n=new Uint8Array(t),a=n.byteLength,o=0;o<a;o++)e+=String.fromCharCode(n[o]);return window.btoa(e)}},{key:"webSocketSend",value:function(){var t=this;if(1===this.webSocket.readyState){var e=this.audioData.splice(0,1280),n={common:{app_id:this.appId},business:{language:this.language,domain:"iat",accent:this.accent,vad_eos:5e3,dwa:"wpgs"},data:{status:0,format:"audio/L16;rate=16000",encoding:"raw",audio:this.toBase64(e)}};this.webSocket.send(JSON.stringify(n)),this.handlerInterval=setInterval((function(){return 1!==t.webSocket.readyState?(t.audioData=[],void clearInterval(t.handlerInterval)):0===t.audioData.length?("end"===t.status&&(t.webSocket.send(JSON.stringify({data:{status:2,format:"audio/L16;rate=16000",encoding:"raw",audio:""}})),t.audioData=[],clearInterval(t.handlerInterval)),!1):(e=t.audioData.splice(0,1280),void t.webSocket.send(JSON.stringify({data:{status:1,format:"audio/L16;rate=16000",encoding:"raw",audio:t.toBase64(e)}})))}),40)}}},{key:"result",value:function(t){var e=JSON.parse(t);if(e.data&&e.data.result){for(var n=e.data.result,a="",o=n.ws,i=0;i<o.length;i++)a+=o[i].cw[0].w;n.pgs?("apd"===n.pgs&&this.setResultText({resultText:this.resultTextTemp}),this.setResultText({resultTextTemp:this.resultText+a})):this.setResultText({resultText:this.resultText+a})}0===e.code&&2===e.data.status&&this.webSocket.close(),0!==e.code&&(this.webSocket.close(),console.log("".concat(e.code,":").concat(e.message)))}},{key:"start",value:function(){this.recorderStart(),this.setResultText({resultText:"",resultTextTemp:""})}},{key:"stop",value:function(){this.recorderStop()}}]),t}(),S={data:function(){return{content:"",iatRecorder:"",top:0,show:!1,daojishi:60,audiobase64:[],tempcontent1:"",tempcontent:"",audiosrc:""}},mounted:function(){},methods:{recStop:function(){if(this.active=!1,this.iatRecorder.stop(),0!=this.iatRecorder.audiobase64.length){this.audiobase64=this.iatRecorder.audiobase64,console.log(this.audiobase64);var t=this.mergeArray(this.iatRecorder.audiobase64),e=this.createWavFile(t),n=new Blob([new Uint8Array(e)],{type:"auido/mp3"});this.audiosrc=window.URL.createObjectURL(n),console.log(n)}},recOpen:function(){this.active=!0,this.iatRecorder=new w({audiobase64:this.audiobase64}),this.iatRecorder.onTextChange=this.onTextChange,this.iatRecorder.onWillStatusChange=this.onWillStatusChange,this.iatRecorder.start()},onTextChange:function(t,e){var n=this;1!=e&&(this.content=this.tempcontent+t,this.tempcontent1=t),this.Interval&&clearTimeout(this.Interval),"end"==this.iatRecorder.status&&(this.Interval=setTimeout((function(){n.tempcontent+=n.tempcontent1}),800))},onWillStatusChange:function(t,e){if(console.log(t,e),"ing"===e){this.show=!0;var n=this;this.dingshiqi=setInterval((function(){n.daojishi=n.daojishi-1,0!=n.daojishi&&0!=n.active||(n.recStop(),clearInterval(n.dingshiqi))}),1e3)}else"init"===e?this.daojishi=60:clearInterval(this.dingshiqi);"end"==e&&(this.show=!1,clearInterval(this.dingshiqi),this.onTextChange(this.content,1))},mergeArray:function(t){for(var e=t.length*t[0].length,n=new Float32Array(e),a=0,o=0;o<t.length;o++)n.set(t[o],a),a+=t[o].length;return n},createWavFile:function(t){var e=44,n=new ArrayBuffer(2*t.length+e),a=new DataView(n);this.writeUTFBytes(a,0,"RIFF"),a.setUint32(4,44+2*t.length,!0),this.writeUTFBytes(a,8,"WAVE"),this.writeUTFBytes(a,12,"fmt "),a.setUint32(16,16,!0),a.setUint16(20,1,!0),a.setUint16(22,2,!0),a.setUint32(24,44100,!0),a.setUint32(28,88200,!0),a.setUint16(32,4,!0),a.setUint16(34,16,!0),this.writeUTFBytes(a,36,"data"),a.setUint32(40,2*t.length,!0);for(var o=t.length,i=44,r=0;r<o;r++){var s=Math.max(-1,Math.min(1,t[r]));a.setInt16(i,s<0?32768*s:32767*s,!0),i+=2}return n},writeUTFBytes:function(t,e,n){for(var a=n.length,o=0;o<a;o++)t.setUint8(e+o,n.charCodeAt(o))}}},y=S,x=n("2877"),T=Object(x["a"])(y,r,s,!1,null,null,null),k=T.exports,C={components:{Home:k}},U=C,j=(n("5c0b"),Object(x["a"])(U,o,i,!1,null,null,null)),_=j.exports,O=n("8c4f");a["a"].use(O["a"]);var M=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],A=new O["a"]({mode:"history",base:"",routes:M}),I=A,P=n("2f62");a["a"].use(P["a"]);var R=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:I,store:R,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.2297a625.js.map