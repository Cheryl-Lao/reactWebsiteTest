_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{YQMk:function(t,e,a){"use strict";a.r(e),a.d(e,"index",(function(){return R}));var n=a("1OyB"),c=a("vuIU"),o=a("Ji7U"),r=a("md7G"),l=a("foSv"),u=a("q1tI"),i=a.n(u),s=a("YFqc"),p=a.n(s),d=a("nABS"),m=a("cFkv"),f=a("JX7q"),b=a("rePB"),h=a("/MKj"),v=a("Nxmy"),y=a("GGqY"),N=(a("jDDT"),i.a.createElement);function O(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,c)}else a=n.apply(this,arguments);return Object(r.a)(this,a)}}var j=function(t){Object(o.a)(a,t);var e=O(a);function a(){var t;Object(n.a)(this,a);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return t=e.call.apply(e,[this].concat(o)),Object(b.a)(Object(f.a)(t),"handleRemove",(function(e){t.props.removeItem(e),y.d.error("Removed from cart",{position:"bottom-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0})})),Object(b.a)(Object(f.a)(t),"handleAddQuantity",(function(e){t.props.addQuantity(e)})),Object(b.a)(Object(f.a)(t),"handleSubtractQuantity",(function(e){t.props.subtractQuantity(e)})),Object(b.a)(Object(f.a)(t),"handleSubmit",(function(t){t.preventDefault()})),t}return Object(c.a)(a,[{key:"render",value:function(){var t=this,e=this.props.products.length?this.props.products.map((function(e,a){return N("tr",{key:a},N("td",{className:"product-thumbnail"},N("a",{href:"#"},N("img",{src:e.image,alt:"item"}))),N("td",{className:"product-name"},N("a",{href:"#"},e.title)),N("td",{className:"product-price"},N("span",{className:"unit-amount"},"$",e.price)),N("td",{className:"product-quantity"},N("div",{className:"input-counter"},N("span",{className:"minus-btn",onClick:function(){t.handleSubtractQuantity(e.id)}},N("i",{className:"icofont-minus"})),N("input",{type:"text",value:e.quantity,min:"1",max:10,readOnly:!0,onChange:function(t){return t}}),N("span",{className:"plus-btn",onClick:function(){t.handleAddQuantity(e.id)}},N("i",{className:"icofont-plus"})))),N("td",{className:"product-subtotal"},N("span",{className:"subtotal-amount"},"$",e.price*e.quantity)),N("td",{className:"product-remove"},N(p.a,{href:"#"},N("a",{onClick:function(a){a.preventDefault(),t.handleRemove(e.id)}},N("i",{className:"icofont-ui-delete"})))))})):N("tr",null,N("td",{className:"product-thumbnail",colSpan:"6"},N("p",null,"Empty.")));return N("section",{className:"cart-area ptb-120"},N(y.b,{transition:y.a}),N("div",{className:"container"},N("div",{className:"row"},N("div",{className:"col-lg-12 col-md-12"},N("form",{onSubmit:this.handleSubmit},N("div",{className:"cart-table table-responsive"},N("table",{className:"table table-bordered"},N("thead",null,N("tr",null,N("th",{scope:"col"},"Product"),N("th",{scope:"col"},"Name"),N("th",{scope:"col"},"Unit Price"),N("th",{scope:"col"},"Quantity"),N("th",{scope:"col"},"Total"),N("th",{scope:"col"},"Remove"))),N("tbody",null,e))),N("div",{className:"cart-buttons"},N("div",{className:"row h-100"},N("div",{className:"col-lg-7 col-md-7"},N("div",{className:"coupon-box"},N("input",{type:"text",className:"form-control",placeholder:"Coupon Code"}),N("button",{type:"submit"},"Apply Coupon Code"))),N("div",{className:"col-lg-5 col-md-5"},N("div",{className:"cart-totals"},N("h3",null,"Cart Totals"),N("ul",null,N("li",null,"Subtotal: ",N("span",null,"$",this.props.total)),N("li",null,"Total: ",N("span",null,"$",this.props.total))),N(p.a,{href:"/checkout"},N("a",{className:"btn btn-primary"},"Proceed to Checkout")))))))))))}}]),a}(u.Component),g=Object(h.b)((function(t){return{products:t.addedItems,total:t.total}}),(function(t){return{removeItem:function(e){t(Object(v.d)(e))},addQuantity:function(e){t(Object(v.a)(e))},subtractQuantity:function(e){t(Object(v.f)(e))}}}))(j),k=i.a.createElement;function C(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,n=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,c)}else a=n.apply(this,arguments);return Object(r.a)(this,a)}}var R=function(t){Object(o.a)(a,t);var e=C(a);function a(){return Object(n.a)(this,a),e.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return k(i.a.Fragment,null,k(d.a,null),k("div",{className:"page-title-area item-bg2"},k("div",{className:"container"},k("h1",null,"Cart"),k("ul",null,k("li",null,k(p.a,{href:"/"},k("a",null,"Home"))),k("li",null,"Cart")))),k(g,null),k(m.a,null))}}]),a}(u.Component);e.default=R},ahkM:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return a("YQMk")}])}},[["ahkM",0,2,1,3,4,11,6]]]);