function round(t,e){return Math.round(+t+"e"+e)/Math.pow(10,e)}!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Zooming=e()}(this,(function(){"use strict";var t="auto",e="move";function i(t,e,i){var n={passive:!1};arguments.length>3&&void 0!==arguments[3]&&!arguments[3]?t.removeEventListener(e,i,n):t.addEventListener(e,i,n)}function n(t,e){if(t){var i=new Image;i.onload=function(){e&&e(i)},i.src=t}}function s(t){return t.dataset.original?t.dataset.original:"A"===t.parentNode.tagName?t.parentNode.getAttribute("href"):null}function o(t,e,i){!function(t){var e=r.transitionProp,i=r.transformProp;if(t.transition){var n=t.transition;delete t.transition,t[e]=n}if(t.transform){var s=t.transform;delete t.transform,t[i]=s}}(e);var n=t.style,s={};for(var o in e)i&&(s[o]=n[o]||""),n[o]=e[o];return s}var r={transitionProp:"transition",transEndEvent:"transitionend",transformProp:"transform",transformCssProp:"transform"},a=r.transformCssProp,l=r.transEndEvent,h=function(){},c={enableGrab:!0,preloadImage:!1,closeOnWindowResize:!0,transitionDuration:.4,transitionTimingFunction:"cubic-bezier(0.4, 0, 0, 1)",bgColor:"rgb(255, 255, 255)",bgOpacity:1,scaleBase:1,scaleExtra:.5,scrollThreshold:40,zIndex:998,customSize:null,onOpen:h,onClose:h,onGrab:h,onMove:h,onRelease:h,onBeforeOpen:h,onBeforeClose:h,onBeforeGrab:h,onBeforeRelease:h,onImageLoading:h,onImageLoaded:h},u={init:function(t){var e,i;e=this,i=t,Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((function(t){e[t]=e[t].bind(i)}))},click:function(t){if(t.preventDefault(),f(t))return window.open(this.target.srcOriginal||t.currentTarget.src,"_blank");this.shown?this.released?this.close():this.release():this.open(t.currentTarget)},scroll:function(){var t=document.documentElement||document.body.parentNode||document.body,e=window.pageXOffset||t.scrollLeft,i=window.pageYOffset||t.scrollTop;null===this.lastScrollPosition&&(this.lastScrollPosition={x:e,y:i});var n=this.lastScrollPosition.x-e,s=this.lastScrollPosition.y-i,o=this.options.scrollThreshold;(Math.abs(s)>=o||Math.abs(n)>=o)&&(this.lastScrollPosition=null,this.close())},keydown:function(t){(function(t){return"Escape"===(t.key||t.code)||27===t.keyCode})(t)&&(this.released?this.close():this.release(this.close))},mousedown:function(t){if(d(t)&&!f(t)){t.preventDefault();var e=t.clientX,i=t.clientY;this.pressTimer=setTimeout(function(){this.grab(e,i)}.bind(this),200)}},mousemove:function(t){this.released||this.move(t.clientX,t.clientY)},mouseup:function(t){d(t)&&!f(t)&&(clearTimeout(this.pressTimer),this.released?this.close():this.release())},touchstart:function(t){t.preventDefault();var e=t.touches[0],i=e.clientX,n=e.clientY;this.pressTimer=setTimeout(function(){this.grab(i,n)}.bind(this),200)},touchmove:function(t){if(!this.released){var e=t.touches[0],i=e.clientX,n=e.clientY;this.move(i,n)}},touchend:function(t){(function(t){t.targetTouches.length})(t)||(clearTimeout(this.pressTimer),this.released?this.close():this.release())},clickOverlay:function(){this.close()},resizeWindow:function(){this.close()}};function d(t){return 0===t.button}function f(t){return t.metaKey||t.ctrlKey}var p={init:function(t){this.el=document.createElement("div"),this.instance=t,this.parent=document.body,o(this.el,{position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0}),this.updateStyle(t.options),i(this.el,"click",t.handler.clickOverlay.bind(t))},updateStyle:function(t){o(this.el,{zIndex:t.zIndex,backgroundColor:t.bgColor,transition:"opacity\n        "+t.transitionDuration+"s\n        "+t.transitionTimingFunction})},insert:function(){this.parent.appendChild(this.el)},remove:function(){this.parent.removeChild(this.el)},fadeIn:function(){this.el.offsetWidth,this.el.style.opacity=this.instance.options.bgOpacity},fadeOut:function(){this.el.style.opacity=0}},g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},v={init:function(t,e){this.el=t,this.instance=e,this.srcThumbnail=this.el.getAttribute("src"),this.srcset=this.el.getAttribute("srcset"),this.srcOriginal=s(this.el),this.rect=this.el.getBoundingClientRect(),this.translate=null,this.scale=null,this.styleOpen=null,this.styleClose=null},zoomIn:function(){var t=this.instance.options,e=t.zIndex,i=t.enableGrab,n=t.transitionDuration,s=t.transitionTimingFunction;this.translate=this.calculateTranslate(),this.scale=this.calculateScale(),this.styleOpen={position:"relative",zIndex:e+1,cursor:i?"grab":"zoom-out",transition:a+"\n        "+n+"s\n        "+s,transform:"translate3d("+this.translate.x+"px, "+this.translate.y+"px, 0px)\n        scale("+this.scale.x+","+this.scale.y+")",height:this.rect.height+"px",width:this.rect.width+"px"},this.el.offsetWidth,this.styleClose=o(this.el,this.styleOpen,!0)},zoomOut:function(){this.el.offsetWidth,o(this.el,{transform:"none"})},grab:function(t,i,n){var s=b(),r=s.x-t,a=s.y-i;o(this.el,{cursor:e,transform:"translate3d(\n        "+(this.translate.x+r)+"px, "+(this.translate.y+a)+"px, 0px)\n        scale("+(this.scale.x+n)+","+(this.scale.y+n)+")"})},move:function(t,e,i){var n=b(),s=n.x-t,r=n.y-e;o(this.el,{transition:a,transform:"translate3d(\n        "+(this.translate.x+s)+"px, "+(this.translate.y+r)+"px, 0px)\n        scale("+(this.scale.x+i)+","+(this.scale.y+i)+")"})},restoreCloseStyle:function(){o(this.el,this.styleClose)},restoreOpenStyle:function(){o(this.el,this.styleOpen)},upgradeSource:function(){if(this.srcOriginal){var t=this.el.parentNode;this.srcset&&this.el.removeAttribute("srcset");var e=this.el.cloneNode(!1);e.setAttribute("src",this.srcOriginal),e.style.position="fixed",e.style.visibility="hidden",t.appendChild(e),setTimeout(function(){this.el.setAttribute("src",this.srcOriginal),t.removeChild(e)}.bind(this),50)}},downgradeSource:function(){this.srcOriginal&&(this.srcset&&this.el.setAttribute("srcset",this.srcset),this.el.setAttribute("src",this.srcThumbnail))},calculateTranslate:function(){var t=b(),e=this.rect.left+this.rect.width/2,i=this.rect.top+this.rect.height/2;return{x:t.x-e,y:t.y-i}},calculateScale:function(){var t=this.el.dataset,e=t.zoomingHeight,i=t.zoomingWidth,n=this.instance.options,s=n.customSize,o=n.scaleBase;if(!s&&e&&i)return{x:i/this.rect.width,y:e/this.rect.height};if(s&&"object"===(void 0===s?"undefined":g(s)))return{x:s.width/this.rect.width,y:s.height/this.rect.height};var r=this.rect.width/2,a=this.rect.height/2,l=b(),h=(l.x-r)/r,c=(l.y-a)/a,u=o+Math.min(h,c);if(s&&"string"==typeof s){var d=i||this.el.naturalWidth,f=e||this.el.naturalHeight,p=parseFloat(s)*d/(100*this.rect.width),m=parseFloat(s)*f/(100*this.rect.height);if(u>p||u>m)return{x:p,y:m}}return{x:u,y:u}}};function b(){var t=document.documentElement;return{x:Math.min(t.clientWidth,window.innerWidth)/2,y:Math.min(t.clientHeight,window.innerHeight)/2}}function w(t,e,n){["mousedown","mousemove","mouseup","touchstart","touchmove","touchend"].forEach((function(s){i(t,s,e[s],n)}))}return function(){function o(t){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,o),this.target=Object.create(v),this.overlay=Object.create(p),this.handler=Object.create(u),this.body=document.body,this.shown=!1,this.lock=!1,this.released=!0,this.lastScrollPosition=null,this.pressTimer=null,this.options=y({},c,t),this.overlay.init(this),this.handler.init(this)}return m(o,[{key:"listen",value:function(t){if("string"==typeof t)for(var e=document.querySelectorAll(t),o=e.length;o--;)this.listen(e[o]);else"IMG"===t.tagName&&(t.style.cursor="zoom-in",i(t,"click",this.handler.click),this.options.preloadImage&&n(s(t)));return this}},{key:"config",value:function(t){return t?(y(this.options,t),this.overlay.updateStyle(this.options),this):this.options}},{key:"open",value:function(t){var e=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.options.onOpen;if(!this.shown&&!this.lock){var o="string"==typeof t?document.querySelector(t):t;if("IMG"===o.tagName){if(this.options.onBeforeOpen(o),this.target.init(o,this),!this.options.preloadImage){var r=this.target.srcOriginal;null!=r&&(this.options.onImageLoading(o),n(r,this.options.onImageLoaded))}return this.shown=!0,this.lock=!0,this.target.zoomIn(),this.overlay.insert(),this.overlay.fadeIn(),i(document,"scroll",this.handler.scroll),i(document,"keydown",this.handler.keydown),this.options.closeOnWindowResize&&i(window,"resize",this.handler.resizeWindow),i(o,l,(function t(){i(o,l,t,!1),e.lock=!1,e.target.upgradeSource(),e.options.enableGrab&&w(document,e.handler,!0),s(o)})),this}}}},{key:"close",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.onClose;if(this.shown&&!this.lock){var s=this.target.el;return this.options.onBeforeClose(s),this.lock=!0,this.body.style.cursor=t,this.overlay.fadeOut(),this.target.zoomOut(),i(document,"scroll",this.handler.scroll,!1),i(document,"keydown",this.handler.keydown,!1),this.options.closeOnWindowResize&&i(window,"resize",this.handler.resizeWindow,!1),i(s,l,(function t(){i(s,l,t,!1),e.shown=!1,e.lock=!1,e.target.downgradeSource(),e.options.enableGrab&&w(document,e.handler,!1),e.target.restoreCloseStyle(),e.overlay.remove(),n(s)})),this}}},{key:"grab",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.options.scaleExtra,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.options.onGrab;if(this.shown&&!this.lock){var o=this.target.el;return this.options.onBeforeGrab(o),this.released=!1,this.target.grab(t,e,n),i(o,l,(function t(){i(o,l,t,!1),s(o)})),this}}},{key:"move",value:function(t,n){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.options.scaleExtra,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.options.onMove;if(this.shown&&!this.lock){this.released=!1,this.body.style.cursor=e,this.target.move(t,n,s);var r=this.target.el;return i(r,l,(function t(){i(r,l,t,!1),o(r)})),this}}},{key:"release",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.options.onRelease;if(this.shown&&!this.lock){var s=this.target.el;return this.options.onBeforeRelease(s),this.lock=!0,this.body.style.cursor=t,this.target.restoreOpenStyle(),i(s,l,(function t(){i(s,l,t,!1),e.lock=!1,e.released=!0,n(s)})),this}}}]),o}()}));let imgsize=0;var ctJson="/hpp/admin/api/getimglist";function del(t){swal({title:"确定！",text:`你将要删除${t}，真的这么做么？`,icon:"warning",buttons:!0,dangerMode:!0}).then((e=>{e?delfile(t):swal("好的，当前文件没有被删除",{icon:"success"})}))}function delfile(t){var e=ajaxObject();e.open("GET","/hpp/admin/api/delimage/"+t,!0),e.setRequestHeader("Content-Type","text/plain"),e.onreadystatechange=function(){4==e.readyState&&(200==e.status?swal("已删除！",{icon:"success",buttons:{yes:"是"}}).then((t=>{window.location.reload()})):swal({title:"失败！",text:"文件删除失败，请确定您是否有权限删除，或者该文件是否存在",icon:"warning"}))},e.send()}$.getJSON(ctJson,(function(t){document.getElementById("tbody_img").innerHTML="",$.each(t,(function(t,e){imgsize=round(e.size/1024,2),$("#tbody_img").append(`\n\t\t\t\t<tr>\n                          <td>\n                           ${e.name}\n                          </td>\n                          <td>\n                            ${imgsize}KB\n                          </td>\n\t\t\t\t\t\t  <td>\n                            <figure><img data-src="https://cdn.jsdelivr.net/gh/${hpp_githubimageusername}/${hpp_githubimagerepo}@${hpp_githubimagebranch}${hpp_githubimagepath}${e.name}" class="lazy_img" style="width:100px" src="${hpp_lazy_img}" class='img-zoomable'></figure>\n                          </td>\n                          <td>\n                            <a href="https://cdn.jsdelivr.net/gh/${hpp_githubimageusername}/${hpp_githubimagerepo}@${hpp_githubimagebranch}${hpp_githubimagepath}${e.name}">CDN链接</a>\n                          </td>\n                          <td>\n                            <a href="javascript:del('${e.name}');">删除</a>\n                          </td>\n\t\t\t\t\t\t  <td>\n                            <a href="${e.download_url}">原始地址</a>\n                          </td>\n\t\t\t\t\t\t  <td>\n                            <a href="${e.html_url}">Github地址</a>\n                          </td>\n                        </tr>\n                `)})),$(".lazy_img").Lazy(),new Zooming({}).listen("img")}));