(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1082:function(e,t,n){"use strict";n.r(t);n(5);var a=n(4),r=n.n(a),i=n(0),o=n.n(i),l=n(80),c=n(51),s=n(211),u=(n(62),n(1)),m=n.n(u);var p=n(276),d=n(43),h=n(136),g=n(135),f=n(1112),E=n(2),v=n.n(E),y=v()("div",null,"HowWeAreWorkingContainer",n(920),"how-we-are-working-container","howWeAreWorkingContainer"),w=v()("h4",null,"Title",n(921),"title","title"),b=v()("p",null,"Paragraph",n(922),"paragraph","paragraph"),S=n(923),k=function(e){var t=e.items,n=e.className;return o.a.createElement(y,{className:n},o.a.createElement(w,null,"Работа в Everpoint"),o.a.createElement(b,{className:S.howWeAreWorkingParagraph},"Более 15 лет мы разрабатываем геосервисы для наших заказчиков, а с 2018 года развиваем и собственную геоинформационную систему EverGIS. Работа у нас — это всегда интересные задачи, возможность проявить себя и поддержка коллектива. Будем рады видеть у себя в команде таких же целеустремленных, активных и любознательных людей!"),o.a.createElement(w,null,"Важные компоненты нашего успеха"),o.a.createElement(f.a,{items:t}),o.a.createElement(d.a,{to:"/work",gatsby:!0,className:S.howWeAreWorkingLink},"Подробнее о работе в Everpoint"))};k.propTypes={items:m.a.arrayOf(m.a.object),className:m.a.string};var W=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={cardHeight:320,photoHeight:225},t.onResize=function(){Math.max(document.documentElement.clientWidth,window.innerWidth||0)<=992?t.setState({photoHeight:164}):t.setState({photoHeight:225})},t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("resize",this.onResize),this.onResize()},n.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize)},n.render=function(){var e,t,n,a,r,i,l=this.state,c=l.cardHeight,s=l.photoHeight,u=this.props,m=u.items,f=u.id,E="vacancy"===f,v="photo"===f,y=(e={items:m}.items.slice(),t=[],n=[],e.forEach(function(e,a){return a%2?n.push(e):t.push(e)}),t.concat(n)),w=v?s:c,b=w/2,S=Math.round(y.length/2),W=y.length>2?Math.ceil(y.length/2)*(w+30)+(y.length%2==0?w/2:0)+4:((a=Math.ceil(y.length/2))<(r=1)?r:a>i?i:a)*w+4,C=E&&m&&0===m.length;return"process"===f?o.a.createElement(g.c,null,o.a.createElement(k,{items:m})):o.a.createElement(g.c,{oneItem:y.length<=1,style:{height:W+"px"}},C?o.a.createElement(p.a,null):y.map(function(e,t){if(v){var n="photo-"+(t+1);return o.a.createElement(g.b,{style:{marginTop:t===S&&b,height:w,marginBottom:30},key:n},o.a.createElement("img",{src:e,alt:n}))}return o.a.createElement(h.a,Object.assign({control:E?o.a.createElement(d.a,{gatsby:!0,to:e.longreadLink},"Описание вакансии"):null,avatar:e.avatar,vacancy:E,withMarginTop:t===S,height:w,top:b,margin:30,key:e.name+"-"+(t+1)},e))}))},t}(i.PureComponent);W.propTypes={items:m.a.oneOfType([m.a.arrayOf(m.a.object),m.a.arrayOf(m.a.string)])},W.defaultProps={items:[]};var C=n(21),T=n(92),O=n(63),N=v()(T.a,null,"Main",n(924),"main","main"),j=v()("div",null,"BackgroundWrapper",n(925),"background-wrapper","backgroundWrapper"),M=v()("div",null,"WillChange",n(926),"will-change","willChange"),R=v()(O.a,null,"LeftSide",n(927),"left-side","leftSide"),H=v()(O.a,null,"RightSide",n(928),"right-side","rightSide"),z=v()("div",null,"RightSideContent",n(929),"right-side-content","rightSideContent"),A=n(930);n.d(t,"JobsBase",function(){return I});var I=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={prevScrollTop:0},t}r()(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){var n=e.transitionEnd,a=this.props,r=a.transitionEnd,i=a.scrollTop;n!==r&&this.setState({prevScrollTop:i})},n.render=function(){var e=this.state.prevScrollTop,t=this.props,n=t.location,a=t.selectedSectionIndex,r=t.onSectionChange,i=t.onScrollableRef,c=t.onLeftSideSectionRef,u=t.transitionEnd,m=t.scrollTop,p=t.status,d=t.routes,h=t.direction,g=Object(C.d)(n,d).sections,f=g[a],E="translateY("+m+"px)";return o.a.createElement(N,null,o.a.createElement(j,{style:{transform:E}},o.a.createElement(l.a,{className:A.background,status:p,location:n})),o.a.createElement(M,{style:{transform:E},ref:c},o.a.createElement(R,{className:Object(O.b)(p,h)},o.a.createElement(s.a,{className:A.menu,selectedId:f&&f.id,onSectionChange:r,leftSide:!0,additionalMenu:g,isOpen:!0}))),o.a.createElement(H,{className:Object(O.b)(p,h)},o.a.createElement(z,{ref:i,style:{transform:!u&&"translateY(-"+e+"px)"}},g.map(function(e){return o.a.createElement(W,Object.assign({key:e.id},e))}))))},t}(i.Component);t.default=function(e){return o.a.createElement(c.a,null,function(t){return o.a.createElement(I,Object.assign({},e,t))})}},1112:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1),o=n.n(i),l=n(2),c=n.n(l),s=n(204),u=c()("div",null,"Container",n(837),"container","container"),m=c()("article",null,"Item",n(838),"item","item"),p=c()(s.e,null,"Title",n(839),"title","title"),d=c()("p",null,"Description",n(840),"description","description"),h=c()("div",null,"Badge",n(841),"badge","badge"),g=c()("div",null,"Content",n(842),"content","content");n.d(t,"a",function(){return f});var f=function(e){var t=e.items,n=e.longread,a=void 0!==n&&n;return r.a.createElement(u,{longread:a},t&&t.map(function(e){var t=e.icon,n=e.iconGreen,i=e.title,o=e.description;return r.a.createElement(m,{key:i,longread:a},r.a.createElement(h,{style:{backgroundImage:"url("+(a?n:t)+")"},longread:a}),r.a.createElement(g,null,r.a.createElement(p,{longread:a},i),a&&r.a.createElement(d,null,o)))}))};f.propTypes={itemClassName:o.a.string,items:o.a.arrayOf(o.a.object)}}}]);
//# sourceMappingURL=component---src-pages-jobs-index-js-92c07476b35f967bbafc.js.map