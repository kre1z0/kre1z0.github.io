(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1077:function(e,t,n){"use strict";n.r(t);n(11),n(38);var a=n(4),r=n.n(a),i=n(0),l=n.n(i),o=n(15),c=n(20),u=n(1089),s=n(1088),m=n(198),d=n(282),f=n(247),p=n.n(f),g=n(2),h=n.n(g),v=n(1087),E=n(202),y=h()("header",null,"HeaderContainer",n(1040),"header-container","headerContainer"),w=h()("div",null,"OverflowContainer",n(1041),"overflow-container","overflowContainer"),b=h()("div",null,"TitleContainer",n(1042),"title-container","titleContainer"),C=h()(E.a,null,"Hr",n(1043),"hr","hr"),M=h()(m.a,null,"Title",n(1044),"title","title"),k=h()(v.a,null,"Description",n(1045),"description","description"),I=h()("img",null,"Photo",n(1046),"photo","photo"),O=(n(1047),function(e){var t=e.title;return l.a.createElement(y,null,l.a.createElement(w,null,l.a.createElement(b,null,l.a.createElement(u.a,null,l.a.createElement(s.a,null,l.a.createElement(C,null),l.a.createElement(M,null,t)))),l.a.createElement(I,{src:p.a,alt:"photo"})),l.a.createElement(k,null,"Everpoint - это команда талантливых, целеустремлённых и ответственных людей, в которой каждый сотрудник нашел свое место. Мы занимаемся заказной разработкой геосервисов уже более 15 лет, а с 2018 года развиваем и собственную веб-ГИС"," ",l.a.createElement(d.b,{to:"/evergisOnline"},"EverGIS Online")," - бесплатный инструмент для работы с геоданными."))}),T=n(1111),j=(n(104),n(1)),H=n.n(j),_=n(201),D=n(102),R=h()("figure",null,"Figure",n(1048),"figure","figure"),W=h()("div",null,"ImgContainer",n(1049),"img-container","imgContainer"),x=h()("img",null,"Img",n(1050),"img","img"),L=h()("div",null,"Content",n(1051),"content","content"),P=h()("h2",null,"Title",n(1052),"title","title"),S=h()("p",null,"Description",n(1053),"description","description"),N=n(5),z=n.n(N),F=n(200),A=n(101),B=n(1101),Y=n.n(B),U=h()("div",null,"Container",n(1054),"container","container"),G=h()("svg",null,"Svg",n(1055),"svg","svg"),J={stroke:"#262C37",strokeDasharray:"4,4",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:.25,strokeWidth:2},q=Y()(function(e){var t=e.width,n=e.offset;return Object.assign({},J,{d:"M128 1v"+Math.min(t,40)+"h"+(t>40?Math.min(t,269-n):0)+"M"+(503+n)+" 41h"+(t>309?Math.min(t-309,269-n):0)+"v"+(t>578?Math.min(t-578,618):0)})})(h()("path",null,"Line",n(1056),"line","line")),K=Y()(function(e){var t=e.width,n=e.offset;return Object.assign({},J,{d:"M772 1v"+Math.min(t,40)+"h-"+(t>40?Math.min(t,270-n):0)+"M"+(397-n)+" 41h-"+(t>309?Math.min(t-309,269-n):0)+"v"+(t>578?Math.min(t-578,618):0)})})(h()("path",null,"LineOdd",n(1057),"line-odd","lineOdd")),Q=n(1058),V=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={width:0,scale:1},t.container=null,t.onResize=function(){t.setState({scale:t.getScale()})},t.onRef=function(e){e&&(t.container=e)},t.getScale=function(){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0);return e<=991?.647:e<=1199?.7956:1},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("resize",this.onResize),this.onResize()},n.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize)},n.shouldComponentUpdate=function(){var e=window.innerHeight;return this.container&&Object(F.c)({el:this.container,offsetY:this.container.offsetHeight,offsetTop:e/2})},n.componentDidUpdate=function(e,t){var n=e.scrollTop,a=this.props,r=a.scrollTop,i=a.elementYPosition,l=a.fullWidth,o=this.container;if(n!==r&&o){var c=l*(2*i({element:o,percent:!0}))/100;this.setState({width:Math.round(c)})}},n.render=function(){var e,t=this.state,n=t.width,a=t.scale,r=this.props,i=r.fullWidth,o=r.odd,c=r.Element,u=r.offset,s=i;return l.a.createElement(U,{ref:this.onRef,style:{transform:"scale("+a+")"}},l.a.createElement(G,{viewBox:"0 0 900 81",width:900,height:81,x:0,y:0,xmlns:"http://www.w3.org/2000/svg"},o?l.a.createElement(K,{width:n,offset:u}):l.a.createElement(q,{width:n,offset:u})),c&&l.a.createElement(c,{className:z()((e={},e[Q.isHidden]=n<s/2,e))}))},t}(i.Component);V.propTypes={scrollTop:H.a.number,offset:H.a.number,odd:H.a.bool},V.defaultProps={fullWidth:618,offset:0};var X=function(e){return l.a.createElement(A.a,null,function(t){var n=t.scrollTop,a=t.elementYPosition;return l.a.createElement(V,Object.assign({scrollTop:n,elementYPosition:a},e))})},Z=(n(74),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={imgHeight:360},t.imageHeight=function(){if(t.img){var e=window.devicePixelRatio||1;t.setState({imgHeight:t.img.naturalHeight/e})}},t.onImgRef=function(e){e&&(t.img=e)},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.imageHeight()},n.render=function(){var e=this,t=this.state.imgHeight,n=this.props,a=n.odd,r=n.name,i=n.description,o=n.img,c=n.offset,u=n.Element,s=o[Object(_.a)()];return l.a.createElement(l.a.Fragment,null,l.a.createElement(R,{odd:a},l.a.createElement(D.a,{images:s,onLoad:function(){return e.imageHeight()}}),l.a.createElement(W,{odd:a},l.a.createElement(x,{src:s,ref:this.onImgRef,style:{height:t}})),l.a.createElement(L,{odd:a},l.a.createElement(P,null,r),Array.isArray(i)?i.map(function(e,t){return l.a.createElement(S,{key:"description-"+t},e)}):l.a.createElement(S,null,i))),u&&l.a.createElement(X,{odd:a,Element:u,offset:c}))},t}(i.PureComponent));Z.propTypes={odd:H.a.bool,offset:H.a.number,name:H.a.string,img:H.a.shape({x1:H.a.string,x2:H.a.string,x3:H.a.string}),description:H.a.oneOfType([H.a.string,H.a.arrayOf(H.a.string)])};var $=h()("figure",null,"Figure",n(1059),"figure","figure"),ee=h()("div",null,"IconsBlock",n(1060),"icons-block","iconsBlock"),te=h()("div",null,"Icon",n(1061),"icon","icon"),ne=h()(te,null,"LeftIcon",n(1062),"left-icon","leftIcon"),ae=h()(te,null,"RightIcon",n(1063),"right-icon","rightIcon"),re=h()(te,null,"BottomIcon",n(1064),"bottom-icon","bottomIcon"),ie=h()("h2",null,"Title",n(1065),"title","title"),le=h()("p",null,"Description",n(1066),"description","description"),oe=function(e){var t=e.name,n=e.description,a=e.icon;return l.a.createElement($,null,l.a.createElement(ee,null,l.a.createElement(ne,{style:{backgroundImage:"url("+a+")"}}),l.a.createElement(ae,{style:{backgroundImage:"url("+a+")"}}),l.a.createElement(re,{style:{backgroundImage:"url("+a+")"}})),l.a.createElement(ie,null,t),l.a.createElement(le,null,n))};oe.propTypes={name:H.a.string,description:H.a.string,icon:H.a.string};var ce=h()("main",null,"WorkMain",n(1067),"work-main","workMain"),ue=h()("article",null,"DevelopmentCycleContainer",n(1068),"development-cycle-container","developmentCycleContainer"),se=h()("footer",null,"Footer",n(1069),"footer","footer"),me=n(1070),de=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props.navigate;Object(o.b)()&&e("/")},n.render=function(){var e=this.props.routes,t=Object(c.c)("jobs",e).sections.find(function(e){return"process"===e.id}),n=t.items,a=t.text,r=t.developmentCycle,i=t.developmentWithinCompany,o=r.title,d=r.blocks,f=i.title,p=i.blocks;return l.a.createElement(l.a.Fragment,null,l.a.createElement(O,{title:a}),l.a.createElement(ce,null,l.a.createElement(u.a,null,l.a.createElement(s.a,null,l.a.createElement(m.c,null,"Для нас важны"),l.a.createElement(T.a,{longread:!0,items:n,itemClassName:me.principleItemLongread})),l.a.createElement(ue,null,l.a.createElement(m.c,{className:me.developmentCycleTitle},o),d.map(function(e,t){return l.a.createElement(Z,Object.assign({odd:t%2!=0,key:"development-cycle-"+t},e))}))),l.a.createElement(u.a,{className:me.developmentWithinCompany},l.a.createElement(s.a,null,l.a.createElement(m.c,null,f),l.a.createElement(se,null,p.map(function(e,t){return l.a.createElement(oe,Object.assign({key:"development-within-company-"+t},e))}))))))},t}(i.PureComponent);t.default=de},1087:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(2),r=n.n(a)()("p",null,"Paragraph",n(800),"paragraph","paragraph")},1088:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(2),r=n.n(a)()("article",null,"Article",n(798),"article","article")},1089:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n(2),r=n.n(a)()("section",null,"Section",n(799),"section","section")},1093:function(e,t,n){"use strict";var a=n(37);t.__esModule=!0,t.default=void 0;var r=a(n(1102)),i=function(e,t){return t+"("+(0,r.default)(e)+")"};t.default=i},1094:function(e,t,n){"use strict";var a=n(37);t.__esModule=!0,t.default=void 0;var r=a(n(1103)),i=function(e){return(0,r.default)("displayName",e)};t.default=i},1101:function(e,t,n){"use strict";var a=n(37);t.__esModule=!0,t.default=void 0;var r=a(n(351)),i=(a(n(1093)),a(n(1094)),a(n(1104))),l=function(e){return(0,i.default)(function(t){return(0,r.default)({},t,"function"==typeof e?e(t):e)})};t.default=l},1102:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=function(e){return"string"==typeof e?e:e?e.displayName||e.name||"Component":void 0};t.default=a},1103:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=function(e,t){return function(n){return n[e]=t,n}};t.default=a},1104:function(e,t,n){"use strict";var a=n(37);t.__esModule=!0,t.default=void 0;var r=n(0),i=(a(n(1094)),a(n(1093)),function(e){return function(t){var n=(0,r.createFactory)(t);return function(t){return n(e(t))}}});t.default=i},1111:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1),l=n.n(i),o=n(2),c=n.n(o),u=n(198),s=c()("div",null,"Container",n(836),"container","container"),m=c()("article",null,"Item",n(837),"item","item"),d=c()(u.e,null,"Title",n(838),"title","title"),f=c()("p",null,"Description",n(839),"description","description"),p=c()("div",null,"Badge",n(840),"badge","badge"),g=c()("div",null,"Content",n(841),"content","content");n.d(t,"a",function(){return h});var h=function(e){var t=e.items,n=e.longread,a=void 0!==n&&n;return r.a.createElement(s,{longread:a},t&&t.map(function(e){var t=e.icon,n=e.iconGreen,i=e.title,l=e.description;return r.a.createElement(m,{key:i,longread:a},r.a.createElement(p,{style:{backgroundImage:"url("+(a?n:t)+")"},longread:a}),r.a.createElement(g,null,r.a.createElement(d,{longread:a},i),a&&r.a.createElement(f,null,l)))}))};h.propTypes={itemClassName:l.a.string,items:l.a.arrayOf(l.a.object)}}}]);
//# sourceMappingURL=component---src-pages-work-index-js-70e81e4c3246b621d9ab.js.map