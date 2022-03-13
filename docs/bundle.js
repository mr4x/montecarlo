(()=>{var Yt=Object.create;var et=Object.defineProperty;var Kt=Object.getOwnPropertyDescriptor;var Ht=Object.getOwnPropertyNames;var _t=Object.getPrototypeOf,Qt=Object.prototype.hasOwnProperty;var Jt=r=>et(r,"__esModule",{value:!0});var x=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);var Zt=(r,t,e,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let h of Ht(t))!Qt.call(r,h)&&(e||h!=="default")&&et(r,h,{get:()=>t[h],enumerable:!(a=Kt(t,h))||a.enumerable});return r},te=(r,t)=>Zt(Jt(et(r!=null?Yt(_t(r)):{},"default",!t&&r&&r.__esModule?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var b=x((dt,T)=>{(function(r,t){typeof T=="object"&&T.exports?T.exports=t():r.Zdog=t()})(dt,function(){var t={};t.TAU=Math.PI*2,t.extend=function(a,h){for(var p in h)a[p]=h[p];return a},t.lerp=function(a,h,p){return(h-a)*p+a},t.modulo=function(a,h){return(a%h+h)%h};var e={2:function(a){return a*a},3:function(a){return a*a*a},4:function(a){return a*a*a*a},5:function(a){return a*a*a*a*a}};return t.easeInOut=function(a,h){if(h==1)return a;a=Math.max(0,Math.min(1,a));var p=a<.5,i=p?a:1-a;i/=.5;var s=e[h]||e[2],o=s(i);return o/=2,p?o:1-o},t})});var rt=x((lt,M)=>{(function(r,t){typeof M=="object"&&M.exports?M.exports=t():r.Zdog.CanvasRenderer=t()})(lt,function(){var t={isCanvas:!0};return t.begin=function(e){e.beginPath()},t.move=function(e,a,h){e.moveTo(h.x,h.y)},t.line=function(e,a,h){e.lineTo(h.x,h.y)},t.bezier=function(e,a,h,p,i){e.bezierCurveTo(h.x,h.y,p.x,p.y,i.x,i.y)},t.closePath=function(e){e.closePath()},t.setPath=function(){},t.renderPath=function(e,a,h,p){this.begin(e,a),h.forEach(function(i){i.render(e,a,t)}),p&&this.closePath(e,a)},t.stroke=function(e,a,h,p,i){!h||(e.strokeStyle=p,e.lineWidth=i,e.stroke())},t.fill=function(e,a,h,p){!h||(e.fillStyle=p,e.fill())},t.end=function(){},t})});var it=x((vt,O)=>{(function(r,t){typeof O=="object"&&O.exports?O.exports=t():r.Zdog.SvgRenderer=t()})(vt,function(){var t={isSvg:!0},e=t.round=function(h){return Math.round(h*1e3)/1e3};function a(h){return e(h.x)+","+e(h.y)+" "}return t.begin=function(){},t.move=function(h,p,i){return"M"+a(i)},t.line=function(h,p,i){return"L"+a(i)},t.bezier=function(h,p,i,s,o){return"C"+a(i)+a(s)+a(o)},t.closePath=function(){return"Z"},t.setPath=function(h,p,i){p.setAttribute("d",i)},t.renderPath=function(h,p,i,s){var o="";i.forEach(function(n){o+=n.render(h,p,t)}),s&&(o+=this.closePath(h,p)),this.setPath(h,p,o)},t.stroke=function(h,p,i,s,o){!i||(p.setAttribute("stroke",s),p.setAttribute("stroke-width",o))},t.fill=function(h,p,i,s){var o=i?s:"none";p.setAttribute("fill",o)},t.end=function(h,p){h.appendChild(p)},t})});var P=x((yt,F)=>{(function(r,t){if(typeof F=="object"&&F.exports)F.exports=t(b());else{var e=r.Zdog;e.Vector=t(e)}})(yt,function(t){function e(i){this.set(i)}var a=t.TAU;e.prototype.set=function(i){return this.x=i&&i.x||0,this.y=i&&i.y||0,this.z=i&&i.z||0,this},e.prototype.write=function(i){return i?(this.x=i.x!=null?i.x:this.x,this.y=i.y!=null?i.y:this.y,this.z=i.z!=null?i.z:this.z,this):this},e.prototype.rotate=function(i){if(!!i)return this.rotateZ(i.z),this.rotateY(i.y),this.rotateX(i.x),this},e.prototype.rotateZ=function(i){h(this,i,"x","y")},e.prototype.rotateX=function(i){h(this,i,"y","z")},e.prototype.rotateY=function(i){h(this,i,"x","z")};function h(i,s,o,n){if(!(!s||s%a===0)){var u=Math.cos(s),c=Math.sin(s),d=i[o],f=i[n];i[o]=d*u-f*c,i[n]=f*u+d*c}}e.prototype.isSame=function(i){return i?this.x===i.x&&this.y===i.y&&this.z===i.z:!1},e.prototype.add=function(i){return i?(this.x+=i.x||0,this.y+=i.y||0,this.z+=i.z||0,this):this},e.prototype.subtract=function(i){return i?(this.x-=i.x||0,this.y-=i.y||0,this.z-=i.z||0,this):this},e.prototype.multiply=function(i){return i==null?this:(typeof i=="number"?(this.x*=i,this.y*=i,this.z*=i):(this.x*=i.x!=null?i.x:1,this.y*=i.y!=null?i.y:1,this.z*=i.z!=null?i.z:1),this)},e.prototype.transform=function(i,s,o){return this.multiply(o),this.rotate(s),this.add(i),this},e.prototype.lerp=function(i,s){return this.x=t.lerp(this.x,i.x||0,s),this.y=t.lerp(this.y,i.y||0,s),this.z=t.lerp(this.z,i.z||0,s),this},e.prototype.magnitude=function(){var i=this.x*this.x+this.y*this.y+this.z*this.z;return p(i)};function p(i){return Math.abs(i-1)<1e-8?1:Math.sqrt(i)}return e.prototype.magnitude2d=function(){var i=this.x*this.x+this.y*this.y;return p(i)},e.prototype.copy=function(){return new e(this)},e})});var w=x((gt,D)=>{(function(r,t){if(typeof D=="object"&&D.exports)D.exports=t(b(),P(),rt(),it());else{var e=r.Zdog;e.Anchor=t(e,e.Vector,e.CanvasRenderer,e.SvgRenderer)}})(gt,function(t,e,a,h){var p=t.TAU,i={x:1,y:1,z:1};function s(n){this.create(n||{})}s.prototype.create=function(n){this.children=[],t.extend(this,this.constructor.defaults),this.setOptions(n),this.translate=new e(n.translate),this.rotate=new e(n.rotate),this.scale=new e(i).multiply(this.scale),this.origin=new e,this.renderOrigin=new e,this.addTo&&this.addTo.addChild(this)},s.defaults={},s.optionKeys=Object.keys(s.defaults).concat(["rotate","translate","scale","addTo"]),s.prototype.setOptions=function(n){var u=this.constructor.optionKeys;for(var c in n)u.indexOf(c)!=-1&&(this[c]=n[c])},s.prototype.addChild=function(n){this.children.indexOf(n)==-1&&(n.remove(),n.addTo=this,this.children.push(n))},s.prototype.removeChild=function(n){var u=this.children.indexOf(n);u!=-1&&this.children.splice(u,1)},s.prototype.remove=function(){this.addTo&&this.addTo.removeChild(this)},s.prototype.update=function(){this.reset(),this.children.forEach(function(n){n.update()}),this.transform(this.translate,this.rotate,this.scale)},s.prototype.reset=function(){this.renderOrigin.set(this.origin)},s.prototype.transform=function(n,u,c){this.renderOrigin.transform(n,u,c),this.children.forEach(function(d){d.transform(n,u,c)})},s.prototype.updateGraph=function(){this.update(),this.updateFlatGraph(),this.flatGraph.forEach(function(n){n.updateSortValue()}),this.flatGraph.sort(s.shapeSorter)},s.shapeSorter=function(n,u){return n.sortValue-u.sortValue},Object.defineProperty(s.prototype,"flatGraph",{get:function(){return this._flatGraph||this.updateFlatGraph(),this._flatGraph},set:function(n){this._flatGraph=n}}),s.prototype.updateFlatGraph=function(){this.flatGraph=this.getFlatGraph()},s.prototype.getFlatGraph=function(){var n=[this];return this.addChildFlatGraph(n)},s.prototype.addChildFlatGraph=function(n){return this.children.forEach(function(u){var c=u.getFlatGraph();Array.prototype.push.apply(n,c)}),n},s.prototype.updateSortValue=function(){this.sortValue=this.renderOrigin.z},s.prototype.render=function(){},s.prototype.renderGraphCanvas=function(n){if(!n)throw new Error("ctx is "+n+". Canvas context required for render. Check .renderGraphCanvas( ctx ).");this.flatGraph.forEach(function(u){u.render(n,a)})},s.prototype.renderGraphSvg=function(n){if(!n)throw new Error("svg is "+n+". SVG required for render. Check .renderGraphSvg( svg ).");this.flatGraph.forEach(function(u){u.render(n,h)})},s.prototype.copy=function(n){var u={},c=this.constructor.optionKeys;c.forEach(function(f){u[f]=this[f]},this),t.extend(u,n);var d=this.constructor;return new d(u)},s.prototype.copyGraph=function(n){var u=this.copy(n);return this.children.forEach(function(c){c.copyGraph({addTo:u})}),u},s.prototype.normalizeRotate=function(){this.rotate.x=t.modulo(this.rotate.x,p),this.rotate.y=t.modulo(this.rotate.y,p),this.rotate.z=t.modulo(this.rotate.z,p)};function o(n){return function(u){function c(d){this.create(d||{})}return c.prototype=Object.create(n.prototype),c.prototype.constructor=c,c.defaults=t.extend({},n.defaults),t.extend(c.defaults,u),c.optionKeys=n.optionKeys.slice(0),Object.keys(c.defaults).forEach(function(d){!c.optionKeys.indexOf(d)!=1&&c.optionKeys.push(d)}),c.subclass=o(c),c}}return s.subclass=o(s),s})});var nt=x((mt,B)=>{(function(r,t){typeof B=="object"&&B.exports?B.exports=t():r.Zdog.Dragger=t()})(mt,function(){var t=typeof window<"u",e="mousedown",a="mousemove",h="mouseup";t&&(window.PointerEvent?(e="pointerdown",a="pointermove",h="pointerup"):"ontouchstart"in window&&(e="touchstart",a="touchmove",h="touchend"));function p(){}function i(s){this.create(s||{})}return i.prototype.create=function(s){this.onDragStart=s.onDragStart||p,this.onDragMove=s.onDragMove||p,this.onDragEnd=s.onDragEnd||p,this.bindDrag(s.startElement)},i.prototype.bindDrag=function(s){s=this.getQueryElement(s),s&&(s.style.touchAction="none",s.addEventListener(e,this))},i.prototype.getQueryElement=function(s){return typeof s=="string"&&(s=document.querySelector(s)),s},i.prototype.handleEvent=function(s){var o=this["on"+s.type];o&&o.call(this,s)},i.prototype.onmousedown=i.prototype.onpointerdown=function(s){this.dragStart(s,s)},i.prototype.ontouchstart=function(s){this.dragStart(s,s.changedTouches[0])},i.prototype.dragStart=function(s,o){s.preventDefault(),this.dragStartX=o.pageX,this.dragStartY=o.pageY,t&&(window.addEventListener(a,this),window.addEventListener(h,this)),this.onDragStart(o)},i.prototype.ontouchmove=function(s){this.dragMove(s,s.changedTouches[0])},i.prototype.onmousemove=i.prototype.onpointermove=function(s){this.dragMove(s,s)},i.prototype.dragMove=function(s,o){s.preventDefault();var n=o.pageX-this.dragStartX,u=o.pageY-this.dragStartY;this.onDragMove(o,n,u)},i.prototype.onmouseup=i.prototype.onpointerup=i.prototype.ontouchend=i.prototype.dragEnd=function(){window.removeEventListener(a,this),window.removeEventListener(h,this),this.onDragEnd()},i})});var zt=x((xt,j)=>{(function(r,t){if(typeof j=="object"&&j.exports)j.exports=t(b(),w(),nt());else{var e=r.Zdog;e.Illustration=t(e,e.Anchor,e.Dragger)}})(xt,function(t,e,a){function h(){}var p=t.TAU,i=e.subclass({element:void 0,centered:!0,zoom:1,dragRotate:!1,resize:!1,onPrerender:h,onDragStart:h,onDragMove:h,onDragEnd:h,onResize:h});t.extend(i.prototype,a.prototype),i.prototype.create=function(o){e.prototype.create.call(this,o),a.prototype.create.call(this,o),this.setElement(this.element),this.setDragRotate(this.dragRotate),this.setResize(this.resize)},i.prototype.setElement=function(o){if(o=this.getQueryElement(o),!o)throw new Error("Zdog.Illustration element required. Set to "+o);var n=o.nodeName.toLowerCase();n=="canvas"?this.setCanvas(o):n=="svg"&&this.setSvg(o)},i.prototype.setSize=function(o,n){o=Math.round(o),n=Math.round(n),this.isCanvas?this.setSizeCanvas(o,n):this.isSvg&&this.setSizeSvg(o,n)},i.prototype.setResize=function(o){this.resize=o,this.resizeListener||(this.resizeListener=this.onWindowResize.bind(this)),o?(window.addEventListener("resize",this.resizeListener),this.onWindowResize()):window.removeEventListener("resize",this.resizeListener)},i.prototype.onWindowResize=function(){this.setMeasuredSize(),this.onResize(this.width,this.height)},i.prototype.setMeasuredSize=function(){var o,n,u=this.resize=="fullscreen";if(u)o=window.innerWidth,n=window.innerHeight;else{var c=this.element.getBoundingClientRect();o=c.width,n=c.height}this.setSize(o,n)},i.prototype.renderGraph=function(o){this.isCanvas?this.renderGraphCanvas(o):this.isSvg&&this.renderGraphSvg(o)},i.prototype.updateRenderGraph=function(o){this.updateGraph(),this.renderGraph(o)},i.prototype.setCanvas=function(o){this.element=o,this.isCanvas=!0,this.ctx=this.element.getContext("2d"),this.setSizeCanvas(o.width,o.height)},i.prototype.setSizeCanvas=function(o,n){this.width=o,this.height=n;var u=this.pixelRatio=window.devicePixelRatio||1;this.element.width=this.canvasWidth=o*u,this.element.height=this.canvasHeight=n*u;var c=u>1&&!this.resize;c&&(this.element.style.width=o+"px",this.element.style.height=n+"px")},i.prototype.renderGraphCanvas=function(o){o=o||this,this.prerenderCanvas(),e.prototype.renderGraphCanvas.call(o,this.ctx),this.postrenderCanvas()},i.prototype.prerenderCanvas=function(){var o=this.ctx;if(o.lineCap="round",o.lineJoin="round",o.clearRect(0,0,this.canvasWidth,this.canvasHeight),o.save(),this.centered){var n=this.width/2*this.pixelRatio,u=this.height/2*this.pixelRatio;o.translate(n,u)}var c=this.pixelRatio*this.zoom;o.scale(c,c),this.onPrerender(o)},i.prototype.postrenderCanvas=function(){this.ctx.restore()},i.prototype.setSvg=function(o){this.element=o,this.isSvg=!0,this.pixelRatio=1;var n=o.getAttribute("width"),u=o.getAttribute("height");this.setSizeSvg(n,u)},i.prototype.setSizeSvg=function(o,n){this.width=o,this.height=n;var u=o/this.zoom,c=n/this.zoom,d=this.centered?-u/2:0,f=this.centered?-c/2:0;this.element.setAttribute("viewBox",d+" "+f+" "+u+" "+c),this.resize?(this.element.removeAttribute("width"),this.element.removeAttribute("height")):(this.element.setAttribute("width",o),this.element.setAttribute("height",n))},i.prototype.renderGraphSvg=function(o){o=o||this,s(this.element),this.onPrerender(this.element),e.prototype.renderGraphSvg.call(o,this.element)};function s(o){for(;o.firstChild;)o.removeChild(o.firstChild)}return i.prototype.setDragRotate=function(o){if(o)o===!0&&(o=this);else return;this.dragRotate=o,this.bindDrag(this.element)},i.prototype.dragStart=function(){this.dragStartRX=this.dragRotate.rotate.x,this.dragStartRY=this.dragRotate.rotate.y,a.prototype.dragStart.apply(this,arguments)},i.prototype.dragMove=function(o,n){var u=n.pageX-this.dragStartX,c=n.pageY-this.dragStartY,d=Math.min(this.width,this.height),f=u/d*p,l=c/d*p;this.dragRotate.rotate.x=this.dragStartRX-l,this.dragRotate.rotate.y=this.dragStartRY-f,a.prototype.dragMove.apply(this,arguments)},i})});var A=x((bt,L)=>{(function(r,t){if(typeof L=="object"&&L.exports)L.exports=t(P());else{var e=r.Zdog;e.PathCommand=t(e.Vector)}})(bt,function(t){function e(i,s,o){this.method=i,this.points=s.map(a),this.renderPoints=s.map(h),this.previousPoint=o,this.endRenderPoint=this.renderPoints[this.renderPoints.length-1],i=="arc"&&(this.controlPoints=[new t,new t])}function a(i){return i instanceof t?i:new t(i)}function h(i){return new t(i)}e.prototype.reset=function(){var i=this.points;this.renderPoints.forEach(function(s,o){var n=i[o];s.set(n)})},e.prototype.transform=function(i,s,o){this.renderPoints.forEach(function(n){n.transform(i,s,o)})},e.prototype.render=function(i,s,o){return this[this.method](i,s,o)},e.prototype.move=function(i,s,o){return o.move(i,s,this.renderPoints[0])},e.prototype.line=function(i,s,o){return o.line(i,s,this.renderPoints[0])},e.prototype.bezier=function(i,s,o){var n=this.renderPoints[0],u=this.renderPoints[1],c=this.renderPoints[2];return o.bezier(i,s,n,u,c)};var p=9/16;return e.prototype.arc=function(i,s,o){var n=this.previousPoint,u=this.renderPoints[0],c=this.renderPoints[1],d=this.controlPoints[0],f=this.controlPoints[1];return d.set(n).lerp(u,p),f.set(c).lerp(u,p),o.bezier(i,s,d,f,c)},e})});var S=x((wt,U)=>{(function(r,t){if(typeof U=="object"&&U.exports)U.exports=t(b(),P(),A(),w());else{var e=r.Zdog;e.Shape=t(e,e.Vector,e.PathCommand,e.Anchor)}})(wt,function(t,e,a,h){var p=h.subclass({stroke:1,fill:!1,color:"#333",closed:!0,visible:!0,path:[{}],front:{z:1},backface:!0});p.prototype.create=function(n){h.prototype.create.call(this,n),this.updatePath(),this.front=new e(n.front||this.front),this.renderFront=new e(this.front),this.renderNormal=new e};var i=["move","line","bezier","arc"];p.prototype.updatePath=function(){this.setPath(),this.updatePathCommands()},p.prototype.setPath=function(){},p.prototype.updatePathCommands=function(){var n;this.pathCommands=this.path.map(function(u,c){var d=Object.keys(u),f=d[0],l=u[f],g=d.length==1&&i.indexOf(f)!=-1;g||(f="line",l=u);var m=f=="line"||f=="move",y=Array.isArray(l);m&&!y&&(l=[l]),f=c===0?"move":f;var z=new a(f,l,n);return n=z.endRenderPoint,z})},p.prototype.reset=function(){this.renderOrigin.set(this.origin),this.renderFront.set(this.front),this.pathCommands.forEach(function(n){n.reset()})},p.prototype.transform=function(n,u,c){this.renderOrigin.transform(n,u,c),this.renderFront.transform(n,u,c),this.renderNormal.set(this.renderOrigin).subtract(this.renderFront),this.pathCommands.forEach(function(d){d.transform(n,u,c)}),this.children.forEach(function(d){d.transform(n,u,c)})},p.prototype.updateSortValue=function(){var n=this.pathCommands.length,u=this.pathCommands[0].endRenderPoint,c=this.pathCommands[n-1].endRenderPoint,d=n>2&&u.isSame(c);d&&(n-=1);for(var f=0,l=0;l<n;l++)f+=this.pathCommands[l].endRenderPoint.z;this.sortValue=f/n},p.prototype.render=function(n,u){var c=this.pathCommands.length;if(!(!this.visible||!c)&&(this.isFacingBack=this.renderNormal.z>0,!(!this.backface&&this.isFacingBack))){if(!u)throw new Error("Zdog renderer required. Set to "+u);var d=c==1;u.isCanvas&&d?this.renderCanvasDot(n,u):this.renderPath(n,u)}};var s=t.TAU;p.prototype.renderCanvasDot=function(n){var u=this.getLineWidth();if(!!u){n.fillStyle=this.getRenderColor();var c=this.pathCommands[0].endRenderPoint;n.beginPath();var d=u/2;n.arc(c.x,c.y,d,0,s),n.fill()}},p.prototype.getLineWidth=function(){return this.stroke?this.stroke==!0?1:this.stroke:0},p.prototype.getRenderColor=function(){var n=typeof this.backface=="string"&&this.isFacingBack,u=n?this.backface:this.color;return u},p.prototype.renderPath=function(n,u){var c=this.getRenderElement(n,u),d=this.pathCommands.length==2&&this.pathCommands[1].method=="line",f=!d&&this.closed,l=this.getRenderColor();u.renderPath(n,c,this.pathCommands,f),u.stroke(n,c,this.stroke,l,this.getLineWidth()),u.fill(n,c,this.fill,l),u.end(n,c)};var o="http://www.w3.org/2000/svg";return p.prototype.getRenderElement=function(n,u){if(!!u.isSvg)return this.svgElement||(this.svgElement=document.createElementNS(o,"path"),this.svgElement.setAttribute("stroke-linecap","round"),this.svgElement.setAttribute("stroke-linejoin","round")),this.svgElement},p})});var ot=x((St,I)=>{(function(r,t){if(typeof I=="object"&&I.exports)I.exports=t(w());else{var e=r.Zdog;e.Group=t(e.Anchor)}})(St,function(t){var e=t.subclass({updateSort:!1,visible:!0});return e.prototype.updateSortValue=function(){var a=0;this.flatGraph.forEach(function(h){h.updateSortValue(),a+=h.sortValue}),this.sortValue=a/this.flatGraph.length,this.updateSort&&this.flatGraph.sort(t.shapeSorter)},e.prototype.render=function(a,h){!this.visible||this.flatGraph.forEach(function(p){p.render(a,h)})},e.prototype.updateFlatGraph=function(){var a=[];this.flatGraph=this.addChildFlatGraph(a)},e.prototype.getFlatGraph=function(){return[this]},e})});var st=x((Ct,V)=>{(function(r,t){if(typeof V=="object"&&V.exports)V.exports=t(S());else{var e=r.Zdog;e.Rect=t(e.Shape)}})(Ct,function(t){var e=t.subclass({width:1,height:1});return e.prototype.setPath=function(){var a=this.width/2,h=this.height/2;this.path=[{x:-a,y:-h},{x:a,y:-h},{x:a,y:h},{x:-a,y:h}]},e})});var Et=x((Pt,N)=>{(function(r,t){if(typeof N=="object"&&N.exports)N.exports=t(S());else{var e=r.Zdog;e.RoundedRect=t(e.Shape)}})(Pt,function(t){var e=t.subclass({width:1,height:1,cornerRadius:.25,closed:!1});return e.prototype.setPath=function(){var a=this.width/2,h=this.height/2,p=Math.min(a,h),i=Math.min(this.cornerRadius,p),s=a-i,o=h-i,n=[{x:s,y:-h},{arc:[{x:a,y:-h},{x:a,y:-o}]}];o&&n.push({x:a,y:o}),n.push({arc:[{x:a,y:h},{x:s,y:h}]}),s&&n.push({x:-s,y:h}),n.push({arc:[{x:-a,y:h},{x:-a,y:o}]}),o&&n.push({x:-a,y:-o}),n.push({arc:[{x:-a,y:-h},{x:-s,y:-h}]}),s&&n.push({x:s,y:-h}),this.path=n},e})});var G=x((Rt,W)=>{(function(r,t){if(typeof W=="object"&&W.exports)W.exports=t(S());else{var e=r.Zdog;e.Ellipse=t(e.Shape)}})(Rt,function(t){var e=t.subclass({diameter:1,width:void 0,height:void 0,quarters:4,closed:!1});return e.prototype.setPath=function(){var a=this.width!=null?this.width:this.diameter,h=this.height!=null?this.height:this.diameter,p=a/2,i=h/2;this.path=[{x:0,y:-i},{arc:[{x:p,y:-i},{x:p,y:0}]}],this.quarters>1&&this.path.push({arc:[{x:p,y:i},{x:0,y:i}]}),this.quarters>2&&this.path.push({arc:[{x:-p,y:i},{x:-p,y:0}]}),this.quarters>3&&this.path.push({arc:[{x:-p,y:-i},{x:0,y:-i}]})},e})});var At=x((qt,$)=>{(function(r,t){if(typeof $=="object"&&$.exports)$.exports=t(b(),S());else{var e=r.Zdog;e.Polygon=t(e,e.Shape)}})(qt,function(t,e){var a=e.subclass({sides:3,radius:.5}),h=t.TAU;return a.prototype.setPath=function(){this.path=[];for(var p=0;p<this.sides;p++){var i=p/this.sides*h-h/4,s=Math.cos(i)*this.radius,o=Math.sin(i)*this.radius;this.path.push({x:s,y:o})}},a})});var kt=x((Gt,X)=>{(function(r,t){if(typeof X=="object"&&X.exports)X.exports=t(b(),P(),w(),G());else{var e=r.Zdog;e.Hemisphere=t(e,e.Vector,e.Anchor,e.Ellipse)}})(Gt,function(t,e,a,h){var p=h.subclass({fill:!0}),i=t.TAU;p.prototype.create=function(){h.prototype.create.apply(this,arguments),this.apex=new a({addTo:this,translate:{z:this.diameter/2}}),this.renderCentroid=new e},p.prototype.updateSortValue=function(){this.renderCentroid.set(this.renderOrigin).lerp(this.apex.renderOrigin,3/8),this.sortValue=this.renderCentroid.z},p.prototype.render=function(o,n){this.renderDome(o,n),h.prototype.render.apply(this,arguments)},p.prototype.renderDome=function(o,n){if(!!this.visible){var u=this.getDomeRenderElement(o,n),c=Math.atan2(this.renderNormal.y,this.renderNormal.x),d=this.diameter/2*this.renderNormal.magnitude(),f=this.renderOrigin.x,l=this.renderOrigin.y;if(n.isCanvas){var g=c+i/4,m=c-i/4;o.beginPath(),o.arc(f,l,d,g,m)}else n.isSvg&&(c=(c-i/4)/i*360,this.domeSvgElement.setAttribute("d","M "+-d+",0 A "+d+","+d+" 0 0 1 "+d+",0"),this.domeSvgElement.setAttribute("transform","translate("+f+","+l+" ) rotate("+c+")"));n.stroke(o,u,this.stroke,this.color,this.getLineWidth()),n.fill(o,u,this.fill,this.color),n.end(o,u)}};var s="http://www.w3.org/2000/svg";return p.prototype.getDomeRenderElement=function(o,n){if(!!n.isSvg)return this.domeSvgElement||(this.domeSvgElement=document.createElementNS(s,"path"),this.domeSvgElement.setAttribute("stroke-linecap","round"),this.domeSvgElement.setAttribute("stroke-linejoin","round")),this.domeSvgElement},p})});var Mt=x((Tt,Y)=>{(function(r,t){if(typeof Y=="object"&&Y.exports)Y.exports=t(b(),A(),S(),ot(),G());else{var e=r.Zdog;e.Cylinder=t(e,e.PathCommand,e.Shape,e.Group,e.Ellipse)}})(Tt,function(t,e,a,h,p){function i(){}var s=h.subclass({color:"#333",updateSort:!0});s.prototype.create=function(){h.prototype.create.apply(this,arguments),this.pathCommands=[new e("move",[{}]),new e("line",[{}])]},s.prototype.render=function(f,l){this.renderCylinderSurface(f,l),h.prototype.render.apply(this,arguments)},s.prototype.renderCylinderSurface=function(f,l){if(!!this.visible){var g=this.getRenderElement(f,l),m=this.frontBase,y=this.rearBase,z=m.renderNormal.magnitude(),tt=m.diameter*z+m.getLineWidth();this.pathCommands[0].renderPoints[0].set(m.renderOrigin),this.pathCommands[1].renderPoints[0].set(y.renderOrigin),l.isCanvas&&(f.lineCap="butt"),l.renderPath(f,g,this.pathCommands),l.stroke(f,g,!0,this.color,tt),l.end(f,g),l.isCanvas&&(f.lineCap="round")}};var o="http://www.w3.org/2000/svg";s.prototype.getRenderElement=function(f,l){if(!!l.isSvg)return this.svgElement||(this.svgElement=document.createElementNS(o,"path")),this.svgElement},s.prototype.copyGraph=i;var n=p.subclass();n.prototype.copyGraph=i;var u=a.subclass({diameter:1,length:1,frontFace:void 0,fill:!0}),c=t.TAU;u.prototype.create=function(){a.prototype.create.apply(this,arguments),this.group=new s({addTo:this,color:this.color,visible:this.visible});var f=this.length/2,l=this.backface||!0;this.frontBase=this.group.frontBase=new p({addTo:this.group,diameter:this.diameter,translate:{z:f},rotate:{y:c/2},color:this.color,stroke:this.stroke,fill:this.fill,backface:this.frontFace||l,visible:this.visible}),this.rearBase=this.group.rearBase=this.frontBase.copy({translate:{z:-f},rotate:{y:0},backface:l})},u.prototype.render=function(){};var d=["stroke","fill","color","visible"];return d.forEach(function(f){var l="_"+f;Object.defineProperty(u.prototype,f,{get:function(){return this[l]},set:function(g){this[l]=g,this.frontBase&&(this.frontBase[f]=g,this.rearBase[f]=g,this.group[f]=g)}})}),u})});var Ft=x((Ot,K)=>{(function(r,t){if(typeof K=="object"&&K.exports)K.exports=t(b(),P(),A(),w(),G());else{var e=r.Zdog;e.Cone=t(e,e.Vector,e.PathCommand,e.Anchor,e.Ellipse)}})(Ot,function(t,e,a,h,p){var i=p.subclass({length:1,fill:!0}),s=t.TAU;i.prototype.create=function(){p.prototype.create.apply(this,arguments),this.apex=new h({addTo:this,translate:{z:this.length}}),this.renderApex=new e,this.renderCentroid=new e,this.tangentA=new e,this.tangentB=new e,this.surfacePathCommands=[new a("move",[{}]),new a("line",[{}]),new a("line",[{}])]},i.prototype.updateSortValue=function(){this.renderCentroid.set(this.renderOrigin).lerp(this.apex.renderOrigin,1/3),this.sortValue=this.renderCentroid.z},i.prototype.render=function(n,u){this.renderConeSurface(n,u),p.prototype.render.apply(this,arguments)},i.prototype.renderConeSurface=function(n,u){if(!!this.visible){this.renderApex.set(this.apex.renderOrigin).subtract(this.renderOrigin);var c=this.renderNormal.magnitude(),d=this.renderApex.magnitude2d(),f=this.renderNormal.magnitude2d(),l=Math.acos(f/c),g=Math.sin(l),m=this.diameter/2*c,y=m*g<d;if(!!y){var z=Math.atan2(this.renderNormal.y,this.renderNormal.x)+s/2,tt=d/g,ft=Math.acos(m/tt),R=this.tangentA,q=this.tangentB;R.x=Math.cos(ft)*m*g,R.y=Math.sin(ft)*m,q.set(this.tangentA),q.y*=-1,R.rotateZ(z),q.rotateZ(z),R.add(this.renderOrigin),q.add(this.renderOrigin),this.setSurfaceRenderPoint(0,R),this.setSurfaceRenderPoint(1,this.apex.renderOrigin),this.setSurfaceRenderPoint(2,q);var k=this.getSurfaceRenderElement(n,u);u.renderPath(n,k,this.surfacePathCommands),u.stroke(n,k,this.stroke,this.color,this.getLineWidth()),u.fill(n,k,this.fill,this.color),u.end(n,k)}}};var o="http://www.w3.org/2000/svg";return i.prototype.getSurfaceRenderElement=function(n,u){if(!!u.isSvg)return this.surfaceSvgElement||(this.surfaceSvgElement=document.createElementNS(o,"path"),this.surfaceSvgElement.setAttribute("stroke-linecap","round"),this.surfaceSvgElement.setAttribute("stroke-linejoin","round")),this.surfaceSvgElement},i.prototype.setSurfaceRenderPoint=function(n,u){var c=this.surfacePathCommands[n].renderPoints[0];c.set(u)},i})});var Bt=x((Dt,H)=>{(function(r,t){if(typeof H=="object"&&H.exports)H.exports=t(b(),w(),S(),st());else{var e=r.Zdog;e.Box=t(e,e.Anchor,e.Shape,e.Rect)}})(Dt,function(t,e,a,h){var p=h.subclass();p.prototype.copyGraph=function(){};var i=t.TAU,s=["frontFace","rearFace","leftFace","rightFace","topFace","bottomFace"],o=t.extend({},a.defaults);delete o.path,s.forEach(function(c){o[c]=!0}),t.extend(o,{width:1,height:1,depth:1,fill:!0});var n=e.subclass(o);n.prototype.create=function(c){e.prototype.create.call(this,c),this.updatePath(),this.fill=this.fill},n.prototype.updatePath=function(){s.forEach(function(c){this[c]=this[c]},this)},s.forEach(function(c){var d="_"+c;Object.defineProperty(n.prototype,c,{get:function(){return this[d]},set:function(f){this[d]=f,this.setFace(c,f)}})}),n.prototype.setFace=function(c,d){var f=c+"Rect",l=this[f];if(!d){this.removeChild(l);return}var g=this.getFaceOptions(c);g.color=typeof d=="string"?d:this.color,l?l.setOptions(g):l=this[f]=new p(g),l.updatePath(),this.addChild(l)},n.prototype.getFaceOptions=function(c){return{frontFace:{width:this.width,height:this.height,translate:{z:this.depth/2}},rearFace:{width:this.width,height:this.height,translate:{z:-this.depth/2},rotate:{y:i/2}},leftFace:{width:this.depth,height:this.height,translate:{x:-this.width/2},rotate:{y:-i/4}},rightFace:{width:this.depth,height:this.height,translate:{x:this.width/2},rotate:{y:i/4}},topFace:{width:this.width,height:this.depth,translate:{y:-this.height/2},rotate:{x:-i/4}},bottomFace:{width:this.width,height:this.depth,translate:{y:this.height/2},rotate:{x:i/4}}}[c]};var u=["color","stroke","fill","backface","front","visible"];return u.forEach(function(c){var d="_"+c;Object.defineProperty(n.prototype,c,{get:function(){return this[d]},set:function(f){this[d]=f,s.forEach(function(l){var g=this[l+"Rect"],m=typeof this[l]=="string",y=c=="color"&&m;g&&!y&&(g[c]=f)},this)}})}),n})});var Lt=x((jt,_)=>{(function(r,t){typeof _=="object"&&_.exports?_.exports=t(b(),rt(),it(),P(),w(),nt(),zt(),A(),S(),ot(),st(),Et(),G(),At(),kt(),Mt(),Ft(),Bt()):typeof define=="function"&&define.amd&&define("zdog",[],r.Zdog)})(jt,function(t,e,a,h,p,i,s,o,n,u,c,d,f,l,g,m,y,z){return t.CanvasRenderer=e,t.SvgRenderer=a,t.Vector=h,t.Anchor=p,t.Dragger=i,t.Illustration=s,t.PathCommand=o,t.Shape=n,t.Group=u,t.Rect=c,t.RoundedRect=d,t.Ellipse=f,t.Polygon=l,t.Hemisphere=g,t.Cylinder=m,t.Cone=y,t.Box=z,t})});var C=te(Lt());var E={RED:(r=.8)=>`rgba(255,65,54,${r})`,GREEN:(r=.8)=>`rgba(46,204,64,${r})`,BLUE:(r=.8)=>`rgba(0,116,217,${r})`,GOLD:(r=.8)=>`rgba(238,170,0,${r})`,PURPLE:(r=.8)=>`rgba(102,51,102,${r})`,BLACK:(r=.8)=>`rgba(0,0,0,${r})`};var v=Math.sqrt,Ut=[{fns:[(r,t,e)=>({x:r,y:16*v(2*r),z:e}),(r,t,e)=>({x:r,y:v(2*r),z:e}),(r,t,e)=>({x:r,y:t,z:0}),(r,t,e)=>({x:r,y:t,z:2-r})],aabb:[{x:0,y:0,z:0},{x:2,y:32,z:2}],isInside:({x:r,y:t,z:e})=>r>=0&&r<=2&&e>=0&&e<=2-r&&t>=v(2*r)&&t<=16*v(2*r)},{fns:[(r,t,e)=>({x:r,y:5*v(r),z:e}),(r,t,e)=>({x:r,y:5*r/3,z:e}),(r,t,e)=>({x:r,y:t,z:0}),(r,t,e)=>({x:r,y:t,z:5+5*v(r)/3})],aabb:[{x:0,y:0,z:0},{x:9,y:15,z:9}],isInside:({x:r,y:t,z:e})=>e>=0&&e<=5+5*v(r)/3&&t>=5*r/3&&t<=5*v(r)&&r>=0&&r<=9},{fns:[(r,t,e)=>({x:19*v(2*t),y:t,z:e}),(r,t,e)=>({x:4*v(2*t),y:t,z:e}),(r,t,e)=>({x:r,y:t,z:0}),(r,t,e)=>({x:r,y:t,z:2-t})],aabb:[{x:0,y:0,z:0},{x:38,y:2,z:2}],isInside:({x:r,y:t,z:e})=>t>=0&&t<=2&&r>=4*v(2*t)&&r<=19*v(2*t)&&e>=0&&e<=2-t},{fns:[(r,t,e)=>({x:r,y:2-r,z:e}),(r,t,e)=>({x:r,y:v(r),z:e}),(r,t,e)=>({x:r,y:t,z:12*t}),(r,t,e)=>({x:r,y:t,z:0})],aabb:[{x:0,y:0,z:0},{x:2,y:2,z:24}],isInside:({x:r,y:t,z:e})=>r>=0&&r<=2&&t<=2-r&&t<=v(r)&&e>=0&&e<=12*t},{fns:[(r,t,e)=>({x:20*v(2*t),y:t,z:e}),(r,t,e)=>({x:5*v(2*t),y:t,z:e}),(r,t,e)=>({x:r,y:t,z:0}),(r,t,e)=>({x:r,y:t,z:1/2-t})],aabb:[{x:0,y:0,z:0},{x:20,y:1/2,z:1/2}],isInside:({x:r,y:t,z:e})=>t>=0&&t<=2&&r>=5*v(2*t)&&r<=20*v(2*t)&&e>=0&&e<=1/2-t},{fns:[(r,t,e)=>({x:5*v(t)/2,y:t,z:e}),(r,t,e)=>({x:5*t/6,y:t,z:e}),(r,t,e)=>({x:r,y:t,z:0}),(r,t,e)=>({x:r,y:t,z:5*(3+v(t))/6})],aabb:[{x:0,y:0,z:0},{x:7.5,y:9,z:5}],isInside:({x:r,y:t,z:e})=>t>=0&&t<=9&&r<=5*v(t)/2&&r>=5*t/6&&e>=0&&e<=5*(3+v(t))/6},{fns:[(r,t,e)=>({x:5*v(t)/6,y:t,z:e}),(r,t,e)=>({x:5*t/18,y:t,z:e}),(r,t,e)=>({x:r,y:t,z:0}),(r,t,e)=>({x:r,y:t,z:5*(3+v(t))/18})],aabb:[{x:0,y:0,z:0},{x:2.5,y:9,z:5/3}],isInside:({x:r,y:t,z:e})=>t>=0&&t<=9&&r<=5*v(t)/6&&r>=5*t/18&&e>=0&&e<=5*(3+v(t))/18},{fns:[(r,t,e)=>({x:2-t,y:t,z:e}),(r,t,e)=>({x:v(t),y:t,z:e}),(r,t,e)=>({x:r,y:t,z:12*r/5}),(r,t,e)=>({x:r,y:t,z:0})],aabb:[{x:0,y:0,z:0},{x:1,y:1,z:12/5}],isInside:({x:r,y:t,z:e})=>t>=0&&t<=1&&r<=2-t&&r<=v(t)&&e>=0&&e<=12*t/5},{fns:[(r,t,e)=>({x:r,y:17*v(2*r),z:e}),(r,t,e)=>({x:r,y:2*v(2*r),z:e}),(r,t,e)=>({x:r,y:t,z:0}),(r,t,e)=>({x:1/2-e,y:t,z:e})],aabb:[{x:0,y:0,z:0},{x:1/2,y:17,z:1/2}],isInside:({x:r,y:t,z:e})=>r>=0&&r<=1/2&&e>=0&&e<=1/2-r&&t>=2*v(2*r)&&t<=17*v(2*r)}];var Q=(r,t=document)=>t.querySelector(r),ht=(r,t,e,a)=>r.addEventListener(t,e,!!a);var at=(r,t)=>Math.random()*(t-r)+r,ee=(r,t)=>({x:at(r.x,t.x),y:at(r.y,t.y),z:at(r.z,t.z)});var J=(r,t)=>({x:r.x-t.x,y:r.y-t.y,z:r.z-t.z});var It=(r,t)=>({x:r.x/t,y:r.y/t,z:r.z/t}),ut=r=>({x:-r.z,y:r.x,z:r.y}),Vt=r=>{let[t,e]=r;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)};function Nt(r,t,e,a){let h=(t.x-r.x)/e,p=(t.y-r.y)/e,i=(t.z-r.z)/e,s=[];for(let o=r.x;o<=t.x;o+=h)for(let n=r.y;n<=t.y;n+=p)for(let u=r.z;u<=t.z;u+=i)s.push(a(o,n,u));return s}function Wt(r,t,e){let a=Array(e);for(let h=0;h<e;h++)a[h]=ee(r,t);return a}var ct=800/Math.sqrt(3),Z=1e5,Xt=0;function pt(){let r=Ut[Xt],[t,e]=r.aabb,a=y=>y*ct/(e.x-t.x),h=y=>y*ct/(e.y-t.y),p=y=>y*ct/(e.z-t.z),i=y=>({x:a(y.x),y:h(y.y),z:p(y.z)}),s=It(J(e,t),2);function o(y){new C.default.Box({addTo:y,width:a(e.x-t.x),height:h(e.y-t.y),depth:p(e.z-t.z),color:E.BLACK(.1),stroke:1,fill:!1})}let n=$t("#surfaces");o(n);let c=(()=>r.fns.map(y=>Nt(t,e,10,y)))(),d=[E.BLUE(),E.RED(),E.GREEN(),E.BLACK()];for(let y=0;y<c.length;y++)for(let z of c[y])new C.default.Shape({addTo:n,translate:ut(i(J(z,s))),stroke:2,color:d[y]});let f=$t("#volume");o(f);let l=0,g=Wt(t,e,Z);for(let y of g)r.isInside(y)&&(l++,new C.default.Shape({addTo:f,translate:ut(i(J(y,s))),stroke:2,color:E.GOLD()}));let m=Vt(r.aabb);Q("#result").textContent=`\u0422\u043E\u0447\u0435\u043A \u0432 \u0444\u0438\u0433\u0443\u0440\u0435: ${l} \u0438\u0437 ${Z}, \u043E\u0431\u044A\u0451\u043C: ${m*l/Z} \u0438\u0437 ${m}`}pt();ht(Q("#variant"),"change",r=>{let t=r.target;Xt=+t.options[t.selectedIndex].value,pt()});ht(Q("#points"),"change",r=>{let t=r.target;Z=+t.options[t.selectedIndex].value,pt()});function $t(r){let t=!0,e=new C.default.Illustration({element:r,rotate:{y:C.default.TAU/8,x:-C.default.TAU/12,z:C.default.TAU/4},dragRotate:!0,onDragStart:function(){t=!1},onDragEnd:function(){t=!0}});function a(){t&&(e.rotate.y+=.01),e.updateRenderGraph(),requestAnimationFrame(a)}return a(),e}})();
/*!
 * Zdog v1.1.3
 * Round, flat, designer-friendly pseudo-3D engine
 * Licensed MIT
 * https://zzz.dog
 * Copyright 2020 Metafizzy
 */
