(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1086:function(e,t,n){e.exports={multiScreenshotsContainer:"MultiScreenshots-MultiScreenshotsContainer-module--multi-screenshots-container--194XP",startAnimation:"MultiScreenshots-MultiScreenshotsContainer-module--startAnimation--DDQ0M",disableTransition:"MultiScreenshots-MultiScreenshotsContainer-module--disableTransition--2Uyuv"}},1087:function(e,t,n){e.exports={portfolioContainer:"portfolio-styles-module--portfolioContainer--2bJUZ",portfolioLeftSide:"portfolio-styles-module--portfolioLeftSide--3axPY",menu:"portfolio-styles-module--menu--1rjUA"}},700:function(e,t,n){"use strict";n.r(t);n(18);var o=n(3),i=n.n(o),r=n(0),a=n.n(r),s=n(63),c=n(734),l=n(19),u=n(168),d=n(2),p=n.n(d),f=n(721),h=n(720),m=n(90),g=n(719),v=n(114),y=n(12),b=n.n(y),E=n(712),S=n(48),C=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.status,n=e.direction,o=e.description,i=e.title,r=e.text,s=e.id,c=e.disableTransition,l="mobileMsp"===s,u=l?"#0a2342":"#fff";return a.a.createElement(g.a,{disableTransition:c,className:b()(n>0?g.q[t]:g.n[t],S.d[t],g.r[t])},a.a.createElement(g.l,{as:"h2",style:{color:u}},i||r),a.a.createElement(g.c,{style:{color:u}},o||"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eaque eligendi iusto labore nisi quas."),a.a.createElement(E.a,{className:b()(l?g.m.mobileMsp:g.m.white)},"Подробнее"))},t}(r.PureComponent),w=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.text,o=t.description,i=t.title,r=t.id;return a.a.createElement(v.TransitionGroup,{appear:!0},a.a.createElement(v.Transition,{key:r+"-content",timeout:{enter:100,exit:200}},function(t){return a.a.createElement(C,Object.assign({},e.props,{status:t,text:n,title:i,description:o}))}))},t}(r.PureComponent);w.propTypes={text:p.a.string,description:p.a.string,direction:p.a.number,title:p.a.string,id:p.a.string};var T=n(4),x=n.n(T)()("div",null,"MultiScreenshotsContainer",n(1086),"multi-screenshots-container","multiScreenshotsContainer"),O=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this).state={imagesIsLoaded:!1,startAnimation:!1},t}return i()(t,e),t.prototype.render=function(){var e=this,t=this.state,n=t.imagesIsLoaded,o=t.startAnimation,i=this.props.screenshots;return a.a.createElement(x,Object.assign({},this.props,{startAnimation:o,onTransitionEnd:function(){return e.setState({startAnimation:!0})}}),a.a.createElement(h.a,{images:i,onLoad:function(){return e.setState({imagesIsLoaded:!0})}}),n&&i.map(function(e,t){return a.a.createElement("img",{key:"img-"+t,src:e,alt:"img-"+t})}))},t}(r.Component);O.propTypes={screenshots:p.a.arrayOf(p.a.string)};var L=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.id,o=t.screenshots,i=t.text;return a.a.createElement(g.j,{appear:!0},a.a.createElement(v.Transition,{key:n+"-screenshot",timeout:{enter:100,exit:200}},function(t){return function(e){var t=e.screenshots,n=e.text,o=e.status,i=e.direction,r=e.disableTransition,s=i>0?g.o[o]:g.p[o];return Array.isArray(t)?a.a.createElement(O,{disableTransition:r,className:b()(s,S.d[o],g.r[o]),alt:n,screenshots:t}):a.a.createElement(g.i,{disableTransition:r,className:b()(s,S.d[o],g.r[o]),src:t,alt:n})}(Object.assign({},e.props,{status:t,screenshots:o,text:i,id:n}))}))},t}(r.PureComponent);L.propTypes={id:p.a.string,screenshots:p.a.oneOfType([p.a.arrayOf(p.a.string),p.a.string]),text:p.a.string,direction:p.a.number};var j=n(763),M=n(725),P=n(753),A=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this).state={hovered:!1,goToLongread:!1,top:0,left:0,width:0,height:0,ratio:"x1"},t.onResize=function(){if(t.slide){var e=t.slide.getBoundingClientRect(),n=e.top,o=e.left,i=e.width,r=e.height;t.setState({top:n,left:o,width:i,height:r})}},t.onSwiped=function(e){var n=e.isLeft,o=e.isRight,i=e.xRatio,r=t.props.onSectionChange;n&&i>25?r({value:1}):o&&i>25&&r({value:-1})},t.goToLongread=function(){var e=t.props,n=e.navigate,o=e.id;t.setState({goToLongread:!0},function(){setTimeout(function(){n("/"+o)},200)})},t.onContainerRef=function(e){e&&(t.slide=e)},t.onPageChange=function(e){var n=t.props,o=n.selectedSectionIndex,i=n.onSectionChange;i(e>o?{value:1,isSwipeEvent:!0}:{value:-1,isSwipeEvent:!0})},t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.onResize(),window.addEventListener("resize",this.onResize),this.setState({ratio:Object(f.a)()})},n.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize)},n.render=function(){var e=this,t=this.state,n=t.hovered,o=t.top,i=t.left,r=t.width,s=t.height,c=t.goToLongread,l=t.ratio,u=this.props,d=u.projectBackgroundColor,p=u.text,f=u.description,v=u.onSectionChange,y=u.selectedSectionIndex,b=u.sections,E=u.id,S=u.title,C=u.screenshots,T=u.sectionDirection,x=u.disableTransition,O=Array.isArray(C)?C.map(function(e){return e[l]}):C[l];return a.a.createElement(m.a,{onSwiped:this.onSwiped},a.a.createElement(h.a,{images:O}),a.a.createElement(g.g,{onClick:this.goToLongread,ref:this.onContainerRef,onMouseOver:function(){return e.setState({hovered:!0})},onMouseOut:function(){return e.setState({hovered:!1})}},a.a.createElement(j.a,{sections:b,selectedSectionIndex:y}),a.a.createElement(g.k,{disableTransition:x,hovered:n,style:{background:d}}),a.a.createElement(L,{disableTransition:x,direction:T,id:E,text:p,screenshots:O}),a.a.createElement(w,{disableTransition:x,direction:T,id:E,title:S,text:p,description:f}),a.a.createElement(g.b,{onMouseOver:function(e){return e.stopPropagation()},onMouseOut:function(e){return e.stopPropagation()}},a.a.createElement(g.h,{disabled:0===y,onClick:function(e){e.stopPropagation(),v({value:-1})}}),a.a.createElement(g.f,{disabled:b.length===y+1,onClick:function(e){e.stopPropagation(),v({value:1})}}))),a.a.createElement(M.a,{pageCount:b.length,currentPage:y+1,onPageChange:this.onPageChange}),"object"==typeof window&&a.a.createElement(P.a,null,a.a.createElement(g.d,{goToLongread:c,style:{background:d,top:c?0:o,left:c?0:i,width:c?"100vw":r,height:c?"100vh":s}})))},t}(r.PureComponent);A.propTypes={projectBackgroundColor:p.a.string,text:p.a.string,description:p.a.string,screenshots:p.a.oneOfType([p.a.arrayOf(p.a.object),p.a.object]),id:p.a.string,onSectionChange:p.a.func,selectedSectionIndex:p.a.number,sections:p.a.arrayOf(p.a.object),title:p.a.string,parentTitle:p.a.string,sectionDirection:p.a.number,navigate:p.a.func,disableTransition:p.a.bool};var I=n(1087),k=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.location,o=t.navigate,i=t.disableTransition,r=Object(l.d)(n),d=Object(l.g)(r.additionalMenu);return a.a.createElement(s.a,null,function(t){var n=t.selectedSectionIndex,s=t.onSectionChange,l=t.sectionDirection,p=d[n];return a.a.createElement(c.a,Object.assign({},e.props,{disableTransition:i,willChangeLeftSideClassName:I.portfolioLeftSide,leftSide:a.a.createElement(a.a.Fragment,null,a.a.createElement(g.e,null,p&&p.parentTitle),a.a.createElement(u.a,{className:I.menu,selectedId:p&&p.id,onSectionChange:s,leftSide:!0,additionalMenu:r.additionalMenu,isOpen:!0})),containerClassName:I.portfolioContainer,rightSide:a.a.createElement(A,Object.assign({disableTransition:i,sectionDirection:l,sections:d,selectedSectionIndex:n,onSectionChange:s,navigate:o},p))}))})},t}(r.PureComponent);t.default=k},720:function(e,t,n){"use strict";n.d(t,"a",function(){return c});n(75),n(74),n(42),n(76);var o=n(3),i=n.n(o),r=n(0),a=n(2),s=n.n(a),c=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))||this).state={loaded:!1},t}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadImages()},n.shouldComponentUpdate=function(){return!this.state.loaded},n.loadEachImage=function(e){return new Promise(function(t){var n=new Image;n.src=e,n.onload=function(){t(e)},n.onerror=function(){console.error("failed to load ",e)}})},n.loadImages=function(){var e=this,t=this.props,n=t.images,o=t.onLoad,i=t.onError,r=[];n?(Array.isArray(n)?n.forEach(function(t){return r.push(e.loadEachImage(t))}):r.push(this.loadEachImage(n)),Promise.all(r).then(function(t){e.setState({loaded:!0},function(){o&&o(t)})}).catch(function(e){return i&&i(e)})):o&&o()},n.render=function(){return null},t}(r.Component);c.propTypes={images:s.a.oneOfType([s.a.arrayOf(s.a.string),s.a.string]),onLoad:s.a.func,onError:s.a.func}},721:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o=function(){if("object"==typeof window){var e=window.devicePixelRatio;return e>2?"x3":e>1?"x2":"x1"}}},753:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var o,i=n(3),r=n.n(i),a=n(0),s=n(78),c=n.n(s),l=((o="object"==typeof window&&document.getElementById("portal-root"))||"object"!=typeof window||((o=document.createElement("div")).id="portal-root",document.body.appendChild(o)),o),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createPortal(this.props.children,l)},t}(a.Component)}}]);
//# sourceMappingURL=component---src-pages-portfolio-index-js-1cd19712a7619198f54d.js.map