(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"/M1s":function(e,t,A){},"60Bi":function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var A=0;A<t.length;A++){var n=t[A];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,A,n){return A&&e(t.prototype,A),n&&e(t,n),t}}(),o=s(A("q1tI")),a=s(A("Si88"));function s(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var A=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return A.state={isOpen:!1},A.closeModal=A.closeModal.bind(A),A.updateFocus=A.updateFocus.bind(A),A}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"getQueryString",value:function(e){var t="";for(var A in e)e.hasOwnProperty(A)&&null!==e[A]&&(t+=A+"="+e[A]+"&");return t.substr(0,t.length-1)}},{key:"getYoutubeUrl",value:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,t){return"//player.youku.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,t){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,t):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,t):"youku"===e.channel?this.getYoukuUrl(e.youku,t):"custom"===e.channel?e.url:void 0}},{key:"getPadding",value:function(e){var t=e.split(":"),A=Number(t[0]);return 100*Number(t[1])/A+"%"}},{key:"render",value:function(){var e=this,t={paddingBottom:this.getPadding(this.props.ratio)};return o.default.createElement(a.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},(function(){return e.state.isOpen?o.default.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(t){e.modal=t},onKeyDown:e.updateFocus},o.default.createElement("div",{className:e.props.classNames.modalVideoBody},o.default.createElement("div",{className:e.props.classNames.modalVideoInner},o.default.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:t},o.default.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(t){e.modalbtn=t},onKeyDown:e.updateFocus}),e.props.children||o.default.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1"}))))):null}))}}],[{key:"getDerivedStateFromProps",value:function(e){return{isOpen:e.isOpen}}}]),t}(o.default.Component);t.default=i,i.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",mute:0},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just openned the modal video",dismissBtnMessage:"Close the modal by clicking here"}}},S3Uj:function(e,t,A){"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)if(Object.prototype.hasOwnProperty.call(e,A)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,A):{};n.get||n.set?Object.defineProperty(t,A,n):t[A]=e[A]}return t.default=e,t}(A("17x9")),o=i(A("q1tI")),a=i(A("i8i4")),s=A("VCL8");A("xfxO");function i(e){return e&&e.__esModule?e:{default:e}}t.UNMOUNTED="unmounted";t.EXITED="exited";t.ENTERING="entering";t.ENTERED="entered";t.EXITING="exiting";var r=function(e){var t,A;function n(t,A){var n;n=e.call(this,t,A)||this;var o,a=A.transitionGroup,s=a&&!a.isMounting?t.enter:t.appear;return n.appearStatus=null,t.in?s?(o="exited",n.appearStatus="entering"):o="entered":o=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",n.state={status:o},n.nextCallback=null,n}A=e,(t=n).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A;var s=n.prototype;return s.getChildContext=function(){return{transitionGroup:null}},n.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null},s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(e){var t=null;if(e!==this.props){var A=this.state.status;this.props.in?"entering"!==A&&"entered"!==A&&(t="entering"):"entering"!==A&&"entered"!==A||(t="exiting")}this.updateStatus(!1,t)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var e,t,A,n=this.props.timeout;return e=t=A=n,null!=n&&"number"!==typeof n&&(e=n.exit,t=n.enter,A=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:A}},s.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var A=a.default.findDOMNode(this);"entering"===t?this.performEnter(A,e):this.performExit(A)}else this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},s.performEnter=function(e,t){var A=this,n=this.props.enter,o=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,a=this.getTimeouts(),s=o?a.appear:a.enter;t||n?(this.props.onEnter(e,o),this.safeSetState({status:"entering"},(function(){A.props.onEntering(e,o),A.onTransitionEnd(e,s,(function(){A.safeSetState({status:"entered"},(function(){A.props.onEntered(e,o)}))}))}))):this.safeSetState({status:"entered"},(function(){A.props.onEntered(e)}))},s.performExit=function(e){var t=this,A=this.props.exit,n=this.getTimeouts();A?(this.props.onExit(e),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(e),t.onTransitionEnd(e,n.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(e)}))},s.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},s.setNextCallback=function(e){var t=this,A=!0;return this.nextCallback=function(n){A&&(A=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){A=!1},this.nextCallback},s.onTransitionEnd=function(e,t,A){this.setNextCallback(A);var n=null==t&&!this.props.addEndListener;e&&!n?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},s.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,A=t.children,n=function(e,t){if(null==e)return{};var A,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||(o[A]=e[A]);return o}(t,["children"]);if(delete n.in,delete n.mountOnEnter,delete n.unmountOnExit,delete n.appear,delete n.enter,delete n.exit,delete n.timeout,delete n.addEndListener,delete n.onEnter,delete n.onEntering,delete n.onEntered,delete n.onExit,delete n.onExiting,delete n.onExited,"function"===typeof A)return A(e,n);var a=o.default.Children.only(A);return o.default.cloneElement(a,n)},n}(o.default.Component);function l(){}r.contextTypes={transitionGroup:n.object},r.childContextTypes={transitionGroup:function(){}},r.propTypes={},r.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:l,onEntering:l,onEntered:l,onExit:l,onExiting:l,onExited:l},r.UNMOUNTED=0,r.EXITED=1,r.ENTERING=2,r.ENTERED=3,r.EXITING=4;var u=(0,s.polyfill)(r);t.default=u},Si88:function(e,t,A){"use strict";t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var A in e)if(Object.prototype.hasOwnProperty.call(e,A)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,A):{};n.get||n.set?Object.defineProperty(t,A,n):t[A]=e[A]}t.default=e}(A("17x9"));var n=i(A("ycFn")),o=i(A("VOcB")),a=i(A("q1tI")),s=i(A("S3Uj"));A("xfxO");function i(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var A=arguments[t];for(var n in A)Object.prototype.hasOwnProperty.call(A,n)&&(e[n]=A[n])}return e}).apply(this,arguments)}var l=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,n.default)(e,t)}))},u=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,o.default)(e,t)}))},c=function(e){var t,A;function n(){for(var t,A=arguments.length,n=new Array(A),o=0;o<A;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).onEnter=function(e,A){var n=t.getClassNames(A?"appear":"enter").className;t.removeClasses(e,"exit"),l(e,n),t.props.onEnter&&t.props.onEnter(e,A)},t.onEntering=function(e,A){var n=t.getClassNames(A?"appear":"enter").activeClassName;t.reflowAndAddClass(e,n),t.props.onEntering&&t.props.onEntering(e,A)},t.onEntered=function(e,A){var n=t.getClassNames("appear").doneClassName,o=t.getClassNames("enter").doneClassName,a=A?n+" "+o:o;t.removeClasses(e,A?"appear":"enter"),l(e,a),t.props.onEntered&&t.props.onEntered(e,A)},t.onExit=function(e){var A=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),l(e,A),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var A=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,A),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var A=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),l(e,A),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var A=t.props.classNames,n="string"===typeof A,o=n?(n&&A?A+"-":"")+e:A[e];return{className:o,activeClassName:n?o+"-active":A[e+"Active"],doneClassName:n?o+"-done":A[e+"Done"]}},t}A=e,(t=n).prototype=Object.create(A.prototype),t.prototype.constructor=t,t.__proto__=A;var o=n.prototype;return o.removeClasses=function(e,t){var A=this.getClassNames(t),n=A.className,o=A.activeClassName,a=A.doneClassName;n&&u(e,n),o&&u(e,o),a&&u(e,a)},o.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,l(e,t))},o.render=function(){var e=r({},this.props);return delete e.classNames,a.default.createElement(s.default,r({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n}(a.default.Component);c.defaultProps={classNames:""},c.propTypes={};var p=c;t.default=p,e.exports=t.default},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},VOcB:function(e,t,A){"use strict";function n(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=n(e.className,t):e.setAttribute("class",n(e.className&&e.className.baseVal||"",t))}},wYCD:function(e,t){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QN/aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6Mzk0ZjBkYzMtZjY3Ni05MDQ3LTkyMzYtYTFiNmVkNzRmNGZhIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZCOUE1MTM5NDYyNTExRTlBQTJEQzBBRjM1NjAwODA5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZCOUE1MTM4NDYyNTExRTlBQTJEQzBBRjM1NjAwODA5IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBjNmJhYmFmLTRiYzctM2Y0OS05OTg5LWM4MDdhNjJkNTU2NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOTRmMGRjMy1mNjc2LTkwNDctOTIzNi1hMWI2ZWQ3NGY0ZmEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBgYGBwYHCAgHCgsKCwoPDgwMDg8WEBEQERAWIhUZFRUZFSIeJB4cHiQeNiomJio2PjQyND5MRERMX1pffHynAQYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKf/wgARCAGYAV4DASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/2gAIAQEAAAAAsYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/2gAIAQIQAAAAiwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//EABUBAQEAAAAAAAAAAAAAAAAAAAAF/9oACAEDEAAAAL4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//xAAUEAEAAAAAAAAAAAAAAAAAAACw/9oACAEBAAE/AAxP/8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAgEBPwAPP//EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQMBAT8ADz//2Q=="},xfxO:function(e,t,A){"use strict";t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0;var n;(n=A("17x9"))&&n.__esModule;t.timeoutsShape=null;t.classNamesShape=null},yD6e:function(e,t,A){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},ycFn:function(e,t,A){"use strict";var n=A("TqRt");t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,o.default)(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var o=n(A("yD6e"));e.exports=t.default}}]);