(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1100:function(e,t,n){"use strict";n.r(t);n(11);var a=n(4),r=n.n(a),i=n(0),o=n.n(i),l=n(141),c=n(1106),u=n(20),s=n(2),d=n.n(s)()("div",null,"EvergisContainer",n(940),"evergis-container","evergisContainer"),p=(n(941),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.projectId,a=Object(u.b)({projectId:n,routes:l.a});return o.a.createElement(d,null,o.a.createElement(c.a,Object.assign({projectId:n,location:t,routes:l.a},a)),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur perferendis quae rem saepe sequi sit veniam, vero, vitae."),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur perferendis quae rem saepe sequi sit veniam, vero, vitae."),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur perferendis quae rem saepe sequi sit veniam, vero, vitae."),o.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto blanditiis consectetur consequuntur cupiditate deleniti dolorum itaque laudantium, nulla pariatur perferendis quae rem saepe sequi sit veniam, vero, vitae."))},t}(i.PureComponent));p.defaultProps={projectId:"evergis"};t.default=p},1103:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(2),r=n.n(a)()("p",null,"Paragraph",n(841),"paragraph","paragraph")},1106:function(e,t,n){"use strict";n(11),n(139),n(87);var a=n(4),r=n.n(a),i=n(0),o=n.n(i),l=n(1),c=n.n(l),u=n(5),s=n.n(u),d=n(198),p=n(20);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var g=o.a.createElement("path",{d:"M11.252 7.252L6 11.752l-5.252-4.5m10.504-6L6 5.752l-5.252-4.5",fill:"none",fillRule:"evenodd",stroke:"#FFF",strokeWidth:2,opacity:.5}),f=function(e){return o.a.createElement("svg",m({width:12,height:13},e),g)},h=n(18),v=n.n(h),b=n(2),E=n.n(b),S=n(58),j=E()(S.a,null,"IconButtonContainer",n(842),"icon-button-container","iconButtonContainer"),w=function(e){var t=e.children,n=v()(e,["children"]);return o.a.createElement(j,n,t)};w.propTypes={component:c.a.bool};var y=function(e){return o.a.createElement(w,e,o.a.createElement(f,null))};y.propTypes={component:c.a.bool};var C=n(103),q=n(101),k=(n(843),n(844),n(845)),O=n(197),L=n(1103),N=E()("header",null,"HeaderContainer",n(846),"header-container","headerContainer"),I=E()("div",null,"HeaderBlock",n(847),"header-block","headerBlock"),B=E()("section",null,"Section",n(848),"section","section"),T=E()(B,null,"LeftSide",n(849),"left-side","leftSide"),A=E()(B,null,"RightSide",n(850),"right-side","rightSide"),D=E()(O.b,null,"Title",n(851),"title","title"),H=E()(L.a,null,"Description",n(852),"description","description"),P=E()("label",null,"Badge",n(853),"badge","badge"),x=n(854),F=n(102),M=n(140);n.d(t,"a",function(){return R});var J=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).onScrollDown=function(){var e=t.props,n=e.scrollbar,a=e.nativeScrollbar,r=Math.max(document.documentElement.clientHeight,window.innerHeight||0),i=r-Object(C.b)()-window.pageYOffset,o=document.documentElement.scrollTop||document.body.scrollTop,l=r-o-Object(C.b)();a?Object(M.a)({duration:400,timing:M.b,draw:function(e){window.scrollTo(0,o+l*e)}}):n&&n.scrollTo(0,i,400)},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props,t=e.location,n=e.projectId,a=e.routes,r=Object(p.a)(t.pathname,a).replace(/\//g,"");localStorage.setItem(r,n)},n.shouldComponentUpdate=function(e,t){var n=e.scrollbar,a=e.animate,r=e.nativeScrollbar,i=this.props,o=i.scrollbar,l=i.animate,c=i.nativeScrollbar;return o!==n||l!==a||c!==r},n.render=function(){var e,t=this.props,n=t.children,a=t.projectBackgroundColor,r=t.type,i=t.text,l=t.title,c=t.description,u=t.link,p=t.rightSide,m=t.leftSideClassName,g=t.rightSideClassName,f=t.containerClassName,h=t.leftSide,v=t.animate,b=t.onLoad,E=t.images;return o.a.createElement(N,{className:f,style:{background:a}},o.a.createElement(F.a,{images:E,onLoad:b}),o.a.createElement(I,null,o.a.createElement(T,{animate:v,className:s()((e={},e[k.fadeIn]=!E,e),m)},r&&o.a.createElement(P,null,"#",r),o.a.createElement(D,null,l||i),o.a.createElement(H,null,c),u&&o.a.createElement(d.a,{className:x.projectLink,href:u},u),h),o.a.createElement(A,{className:g},p),o.a.createElement(y,{className:x.scrollDownButton,onClick:this.onScrollDown})),n)},t}(i.Component);J.propTypes={projectBackgroundColor:c.a.string,type:c.a.string,title:c.a.string,text:c.a.string,rightSide:c.a.element,scrollbar:c.a.object,leftSideClassName:c.a.string,containerClassName:c.a.string,leftSide:c.a.element,projectId:c.a.string,animate:c.a.bool,onLoad:c.a.func,images:c.a.arrayOf(c.a.string)};var R=function(e){return o.a.createElement(q.a,null,function(t){var n=t.scrollbar,a=t.nativeScrollbar;return o.a.createElement(J,Object.assign({scrollbar:n,nativeScrollbar:a},e))})}}}]);
//# sourceMappingURL=component---src-pages-evergis-index-js-d851b811375b9e5659d4.js.map