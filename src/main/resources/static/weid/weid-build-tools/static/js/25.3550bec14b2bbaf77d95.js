(window.webpackJsonp=window.webpackJsonp||[]).push([[25,26,27],{NVG9:function(e,t,o){"use strict";var n=o("QDv8"),r=o("Q2AE"),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();var a=o("zr5I"),s=o("eW3l"),c=o("OcYQ"),l=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.default_time=5e3,this.$http=a.create({timeout:this.default_time,baseURL:c.URL}),this.dataMethodDefaults={headers:{"Content-Type":"application/json;charset=UTF-8","X-Requested-With":"XMLHttpRequest"}},this.$http.interceptors.request.use((function(e){return e.url.indexOf("doLogin")>-1||e.url.indexOf("generateVerifCode")>-1?localStorage.setItem("token",""):e.headers.token=localStorage.getItem("token"),e})),this.$http.interceptors.response.use((function(e){return new Promise((function(t,o){var i=e.data;200===e.status&&i?10007===i.code?(Object(n.Message)({type:"error",message:"当前会话已失效,请重新登录"}),r.a.commit("back",!0)):t(e):o(e)})).catch((function(e){return e}))}),(function(e){return console.log(e),e.message.includes("timeout")?Promise.resolve({data:t.responseTimeout()}):e}))}return u(e,[{key:"request",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return e.method&&"post"===e.method.toLowerCase()?e.headers?this.$http({url:e.url,method:"post",data:s.stringify(t),headers:e.headers,timeout:this.getTimeout(e)}):this.post(e.url,t,e):this.$http({url:e.url,method:"get",params:t,timeout:this.getTimeout(e)})}},{key:"get",value:function(e){return this.$http.get(e.config)}},{key:"post",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.$http.post(e,t,i({},this.dataMethodDefaults,o))}},{key:"getTimeout",value:function(e){return void 0===e.timeout?this.default_time:e.timeout}},{key:"responseTimeout",value:function(){return{errorCode:-1,errorMessage:"timeout",result:null}}}]),e}(),f=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();var h=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.headers_post={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8","X-Requested-With":"XMLHttpRequest"},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),f(t,[{key:"ajax",value:function(e,t,o,n,r){return"upload"===e?this.request({method:"post",url:t,timeout:1e3*r},o):this.request({method:e,url:t,headers:n,timeout:1e3*r},o)}},{key:"doPost",value:function(e,t,o){return this.ajax("post",e,t,this.headers_post,o)}},{key:"doPostAndUploadFile",value:function(e,t,o){return this.doPostByJson(e,t,o)}},{key:"doPostByJson",value:function(e,t,o){return this.ajax("upload",e,t,null,o)}},{key:"doGet",value:function(e,t,o){return this.ajax("get",e,t,null,o)}}]),t}(l);t.a=new h},OcYQ:function(e,t){t.URL="WeIdentity/weid/weid-build-tools/"}}]);