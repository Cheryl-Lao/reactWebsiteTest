_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"1HF/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n("Y0NT")}])},Y0NT:function(e,t,n){"use strict";n.r(t);var r=n("1OyB"),o=n("vuIU"),a=n("Ji7U"),c=n("md7G"),u=n("foSv"),f=n("q1tI"),s=n.n(f),i=n("YFqc"),l=n.n(i),p=s.a.createElement;function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var v=function(e){Object(a.a)(n,e);var t=d(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return p(s.a.Fragment,null,p("div",{className:"error"},p("div",{className:"d-table"},p("div",{className:"d-table-cell"},p("h1",null,this.props.statusCode," "),p("h2",null,"Page not found ",p("i",{className:"icofont-sad"})),p(l.a,{href:"/"},p("a",{className:"btn btn-primary"},"Back to Home"))))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t?t.statusCode:n?n.statusCode:null}}}]),n}(f.Component);t.default=v},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),o=n("7KCV");t.__esModule=!0,t.default=void 0;var a,c=o(n("q1tI")),u=n("elyg"),f=n("nOHt"),s=new Map,i=window.IntersectionObserver,l={};var p=function(e,t){var n=a||(i?a=new i((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var v=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],s=o[1],v=(0,f.useRouter)(),h=v&&v.pathname||"/",y=c.default.useMemo((function(){var t=(0,u.resolveHref)(h,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,u.resolveHref)(h,e.as):a||o}}),[h,e.href,e.as]),m=y.href,b=y.as;c.default.useEffect((function(){if(t&&i&&a&&a.tagName&&(0,u.isLocalURL)(m)&&!l[m+"%"+b])return p(a,(function(){d(v,m,b)}))}),[t,a,m,b,v]);var w=e.children,g=e.replace,_=e.shallow,E=e.scroll;"string"===typeof w&&(w=c.default.createElement("a",null,w));var N=c.Children.only(w),O={ref:function(e){e&&s(e),N&&"object"===typeof N&&N.ref&&("function"===typeof N.ref?N.ref(e):"object"===typeof N.ref&&(N.ref.current=e))},onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,v,m,b,g,_,E)}};return t&&(O.onMouseEnter=function(e){(0,u.isLocalURL)(m)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),d(v,m,b,{priority:!0}))}),(e.passHref||"a"===N.type&&!("href"in N.props))&&(O.href=(0,u.addBasePath)((0,u.addLocale)(b,v&&v.locale,v&&v.defaultLocale))),c.default.cloneElement(N,O)};t.default=v}},[["1HF/",0,2,1]]]);