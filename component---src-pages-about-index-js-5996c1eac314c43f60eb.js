(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{708:function(n,t,e){"use strict";e.r(t);e(18);var r=e(3),i=e.n(r),o=e(0),a=e.n(o),s=e(2),l=e.n(s),u=e(795),c=e.n(u),d=e(10),f=e.n(d),p=e(724),m=e(790),v=e(747),g=(e(356),e(118)),h=e(717),b=e(92),x=e(772),y=e(750),w=e(49),C=function(n){function t(){return n.apply(this,arguments)||this}return i()(t,n),t.prototype.render=function(){var n=this.props,t=n.status,e=n.direction,r=n.disableTransition,i=n.description,o=n.title,s=n.date,l=n.logo,u=n.isSwipeEvent,c=n.link,d=u?e>0?y.g[t]:y.h[t]:e>0?y.i[t]:y.f[t];return a.a.createElement(x.a,{disableTransition:r,className:f()(d,w.d[t],y.j[t])},a.a.createElement(x.e,null,o),a.a.createElement(x.b,null,function(n){var t=new Date(n);if(t instanceof Date){var e=t.getDate(),r=t.getMonth();return(e<10?"0"+e:e)+"."+(r+1<10?"0":"")+(r+1)+"."+t.getFullYear()}return"Invalid date"}(s)),a.a.createElement(x.c,null,i," ",c&&a.a.createElement(h.a,{href:c,className:x.f.read},"Читать")),l&&a.a.createElement(x.d,{src:l,alt:"logo"}))},t}(o.PureComponent),E=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))||this).onSwiped=function(n){var e=n.isLeft,r=n.isRight,i=n.xRatio,o=t.props.onSectionChange;e&&i>25?o({value:1,isSwipeEvent:!0}):r&&i>25&&o({value:-1,isSwipeEvent:!0})},t}return i()(t,n),t.prototype.render=function(){var n=this,t=this.props,e=t.direction,r=t.title,i=t.date,o=t.description,s=t.logo,l=t.id;return a.a.createElement(b.a,{onSwiped:this.onSwiped},a.a.createElement(g.TransitionGroup,null,a.a.createElement(g.Transition,{key:l+"-news-"+e,timeout:{enter:100,exit:200}},function(t){return a.a.createElement(C,Object.assign({},n.props,{status:t,date:i,logo:s,title:r,description:o}))})))},t}(o.PureComponent);E.propTypes={title:l.a.string,date:l.a.string,description:l.a.string,logo:l.a.string,id:l.a.string,direction:l.a.number,isSwipeEvent:l.a.bool,disableTransition:l.a.bool};var k=e(743),T=e(43),S=e(63),P=(e(50),e(117),e(113)),A=e.n(P),N=e(4),R=e.n(N),D=R()("div",null,"ConstellationPointsContainer",e(821),"constellation-points-container","constellationPointsContainer"),M=R()("div",null,"TransformContainer",e(822),"transform-container","transformContainer"),I=R()("div",null,"PointMain",e(823),"point-main","pointMain"),O=R()(I,null,"FakePoint",e(824),"fake-point","fakePoint"),j=R()(I,null,"Point",e(825),"point","point"),F=function(n){function t(t){var e;return(e=n.call(this,t)||this).points=[],e.fakePoint=null,e.transform=function(){var n=e.props,t=n.selectedSectionIndex,r=n.onTransform,i=n.x,o=n.y,a=e.fakePoint.getBoundingClientRect(),s=a.left,l=a.top,u=e.points[t].getBoundingClientRect(),c=u.left,d=u.top;r&&r({x:s-c+i,y:l-d+o})},e.savePointsRef=function(n){var t=e.props.pointsAmount;n&&e.points.length!==t&&e.points.push(n)},e.onFakePointRef=function(n){n&&(e.fakePoint=n)},e.debouncedTransform=A()(e.transform,200),e}i()(t,n);var e=t.prototype;return e.componentDidMount=function(){window.addEventListener("resize",this.debouncedTransform)},e.componentWillUnmount=function(){window.removeEventListener("resize",this.debouncedTransform)},e.componentDidUpdate=function(n,t){var e=n.selectedSectionIndex,r=this.props,i=r.selectedSectionIndex,o=r.transitionEnd;i!==e&&this.points[i]&&this.fakePoint&&o&&this.transform()},e.render=function(){var n=this,t=this.props,e=t.selectedSectionIndex,r=t.pointsAmount,i=t.x,o=t.y,s=t.status,l=t.disableTransition;return a.a.createElement(D,{disableTransition:l,className:f()(w.d[s],w.h[s])},a.a.createElement(O,{ref:this.onFakePointRef}),a.a.createElement(M,{style:{transform:"translate("+i+"px, "+o+"px)"}},Array.from({length:r},function(t,r){return a.a.createElement(j,{ref:n.savePointsRef,key:"point-"+r,isActive:r===e})})))},t}(o.PureComponent);F.propTypes={selectedSectionIndex:l.a.number,onTransform:l.a.func,x:l.a.number,y:l.a.number,status:l.a.string,transitionEnd:l.a.bool,disableTransition:l.a.bool},F.defaultProps={pointsAmount:5,x:0,y:0};var L=R()("div",null,"NewsContainer",e(826),"news-container","newsContainer"),W=R()("div",null,"WillChangeNews",e(827),"will-change-news","willChangeNews"),B=e(828);e.d(t,"About",function(){return U}),e.d(t,"aboutPageQuery",function(){return J});var U=function(n){function t(){for(var t,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return(t=n.call.apply(n,[this].concat(r))||this).state={x:0,y:0},t.onTransform=function(n){return t.setState(n)},t.onPageChange=function(n,t,e){e(n>t?{value:1,isSwipeEvent:!0}:{value:-1,isSwipeEvent:!0})},t}return i()(t,n),t.prototype.render=function(){var n=this,t=this.props.data,e=t.allMarkdownRemark,r=this.props,i=r.status,o=r.disableTransition,s=this.state,l=s.x,u=s.y;return a.a.createElement(S.a,null,function(r){var s=r.selectedSectionIndex,d=r.onSectionChange,g=r.sectionDirection,h=r.isSwipeEvent,b=r.transitionEnd,x=e&&e.edges?c()(e.edges.map(function(n){var t=n.node;return Object.assign({},t.frontmatter,{id:t.id})}),"date").reverse():[],y=e&&e.edges[s]?x[s]:{title:e?"Пусто":"Список пуст",description:e?"Заполните статью в системе управления содержимым":"Заполните статьи в системе управления содержимым"},C=t.markdownRemark;return a.a.createElement(k.a,Object.assign({},n.props,{disableTransition:o,withRightSideAnimation:!1,x:l,y:u,backgroundClassName:B.isAboutSlide,leftSide:a.a.createElement(a.a.Fragment,null,a.a.createElement(T.a,{as:"h1"},C&&C.frontmatter.title),a.a.createElement(p.a,{to:"/news",gatsby:!0,big:!0},"Все комментарии")),containerClassName:B.aboutContainer,rightSide:a.a.createElement(L,null,a.a.createElement(F,{disableTransition:o,transitionEnd:b,status:i,x:l,y:u,onTransform:n.onTransform,selectedSectionIndex:s}),a.a.createElement(W,{disableTransition:o,className:f()(w.g[i],w.d[i],w.h[i])},a.a.createElement(m.a,{sections:x,selectedSectionIndex:s}),a.a.createElement(E,Object.assign({disableTransition:o,isSwipeEvent:h,onSectionChange:d,direction:g},y)),a.a.createElement(v.a,{pageCount:x.length,currentPage:s+1,onPageChange:function(t){return n.onPageChange(t,s,d)}})))}))})},t}(o.Component);U.propTypes={data:l.a.object.isRequired,status:l.a.string,disableTransition:l.a.bool};t.default=U;var J="1005722639"},717:function(n,t,e){"use strict";e.d(t,"a",function(){return p});e(18);var r=e(27),i=e.n(r),o=(e(357),e(0)),a=e.n(o),s=e(4),l=e.n(s),u=e(2),c=e.n(u),d=l()("a",null,"Link",e(723),"link","link"),f=function(n){if(n){var t=0===n.toString().indexOf("http");return 0===n.toString().indexOf("www")||t?n:"https://"+n}},p=function(n){var t=n.href,e=n.children,r=i()(n,["href","children"]);return a.a.createElement(d,Object.assign({href:f(t),target:"_blank",rel:"noopener noreferrer"},r),e)};p.propTypes={href:c.a.string}},723:function(n,t,e){n.exports={link:"OutsideLink-Link-module--link--1-yuh"}},748:function(n,t,e){"use strict";e.d(t,"a",function(){return i});var r=e(4),i=e.n(r)()("article",null,"Blank",e(749),"blank","blank")},749:function(n,t,e){n.exports={blank:"Blank-module--blank--2YNtX"}},766:function(n,t,e){var r=e(174),i=e(172),o=e(175),a=e(66);n.exports=function(n,t,e){if(!a(e))return!1;var s=typeof t;return!!("number"==s?i(e)&&o(t,e.length):"string"==s&&t in e)&&r(e[t],n)}},772:function(n,t,e){"use strict";e.d(t,"a",function(){return a}),e.d(t,"e",function(){return s}),e.d(t,"b",function(){return l}),e.d(t,"c",function(){return u}),e.d(t,"d",function(){return c});var r=e(4),i=e.n(r),o=e(748),a=i()(o.a,null,"AboutCardContainer",e(773),"about-card-container","aboutCardContainer"),s=i()("h4",null,"Title",e(774),"title","title"),l=i()("span",null,"Date",e(775),"date","date"),u=i()("p",null,"Description",e(776),"description","description"),c=i()("img",null,"Logo",e(777),"logo","logo"),d=e(778);t.f=d},773:function(n,t,e){n.exports={aboutCardContainer:"styles-AboutCardContainer-module--about-card-container--2MBcI",disableTransition:"styles-AboutCardContainer-module--disableTransition--3ypp7"}},774:function(n,t,e){n.exports={title:"styles-Title-module--title--KJwsA"}},775:function(n,t,e){n.exports={date:"styles-Date-module--date--1fZ0Q"}},776:function(n,t,e){n.exports={description:"styles-Description-module--description--3FWxT"}},777:function(n,t,e){n.exports={logo:"styles-Logo-module--logo--1aVyE"}},778:function(n,t,e){n.exports={read:"styles-styles-module--read--3y7pF"}},795:function(n,t,e){var r=e(796),i=e(798),o=e(803),a=e(766),s=o(function(n,t){if(null==n)return[];var e=t.length;return e>1&&a(n,t[0],t[1])?t=[]:e>2&&a(t[0],t[1],t[2])&&(t=[t[0]]),i(n,r(t,1),[])});n.exports=s},796:function(n,t,e){var r=e(364),i=e(797);n.exports=function n(t,e,o,a,s){var l=-1,u=t.length;for(o||(o=i),s||(s=[]);++l<u;){var c=t[l];e>0&&o(c)?e>1?n(c,e-1,o,a,s):r(s,c):a||(s[s.length]=c)}return s}},797:function(n,t,e){var r=e(94),i=e(178),o=e(38),a=r?r.isConcatSpreadable:void 0;n.exports=function(n){return o(n)||i(n)||!!(a&&n&&n[a])}},798:function(n,t,e){var r=e(369),i=e(368),o=e(799),a=e(800),s=e(365),l=e(801),u=e(359);n.exports=function(n,t,e){var c=-1;t=r(t.length?t:[u],s(i));var d=o(n,function(n,e,i){return{criteria:r(t,function(t){return t(n)}),index:++c,value:n}});return a(d,function(n,t){return l(n,t,e)})}},799:function(n,t,e){var r=e(367),i=e(172);n.exports=function(n,t){var e=-1,o=i(n)?Array(n.length):[];return r(n,function(n,r,i){o[++e]=t(n,r,i)}),o}},800:function(n,t){n.exports=function(n,t){var e=n.length;for(n.sort(t);e--;)n[e]=n[e].value;return n}},801:function(n,t,e){var r=e(802);n.exports=function(n,t,e){for(var i=-1,o=n.criteria,a=t.criteria,s=o.length,l=e.length;++i<s;){var u=r(o[i],a[i]);if(u)return i>=l?u:u*("desc"==e[i]?-1:1)}return n.index-t.index}},802:function(n,t,e){var r=e(93);n.exports=function(n,t){if(n!==t){var e=void 0!==n,i=null===n,o=n==n,a=r(n),s=void 0!==t,l=null===t,u=t==t,c=r(t);if(!l&&!c&&!a&&n>t||a&&s&&u&&!l&&!c||i&&s&&u||!e&&u||!o)return 1;if(!i&&!a&&!c&&n<t||c&&e&&o&&!i&&!a||l&&e&&o||!s&&o||!u)return-1}return 0}},803:function(n,t,e){var r=e(359),i=e(804),o=e(806);n.exports=function(n,t){return o(i(n,t,r),n+"")}},804:function(n,t,e){var r=e(805),i=Math.max;n.exports=function(n,t,e){return t=i(void 0===t?n.length-1:t,0),function(){for(var o=arguments,a=-1,s=i(o.length-t,0),l=Array(s);++a<s;)l[a]=o[t+a];a=-1;for(var u=Array(t+1);++a<t;)u[a]=o[a];return u[t]=e(l),r(n,this,u)}}},805:function(n,t){n.exports=function(n,t,e){switch(e.length){case 0:return n.call(t);case 1:return n.call(t,e[0]);case 2:return n.call(t,e[0],e[1]);case 3:return n.call(t,e[0],e[1],e[2])}return n.apply(t,e)}},806:function(n,t,e){var r=e(807),i=e(809)(r);n.exports=i},807:function(n,t,e){var r=e(808),i=e(366),o=e(359),a=i?function(n,t){return i(n,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:o;n.exports=a},808:function(n,t){n.exports=function(n){return function(){return n}}},809:function(n,t){var e=800,r=16,i=Date.now;n.exports=function(n){var t=0,o=0;return function(){var a=i(),s=r-(a-o);if(o=a,s>0){if(++t>=e)return arguments[0]}else t=0;return n.apply(void 0,arguments)}}},821:function(n,t,e){n.exports={constellationPointsContainer:"styles-ConstellationPointsContainer-module--constellation-points-container--2uNtO",disableTransition:"styles-ConstellationPointsContainer-module--disableTransition--miN2f"}},822:function(n,t,e){n.exports={transformContainer:"styles-TransformContainer-module--transform-container--e4RrP"}},823:function(n,t,e){n.exports={pointMain:"styles-PointMain-module--point-main--2WuOf"}},824:function(n,t,e){n.exports={fakePoint:"styles-FakePoint-module--fake-point--3SMfd"}},825:function(n,t,e){n.exports={point:"styles-Point-module--point--34UEH",isActive:"styles-Point-module--isActive--1kamd"}},826:function(n,t,e){n.exports={newsContainer:"about-NewsContainer-module--news-container--2Mvu0"}},827:function(n,t,e){n.exports={willChangeNews:"about-WillChangeNews-module--will-change-news--bkgeE",disableTransition:"about-WillChangeNews-module--disableTransition--17RjH"}},828:function(n,t,e){n.exports={aboutContainer:"about-styles-module--aboutContainer--wVUoe",isAboutSlide:"about-styles-module--isAboutSlide--2vbvT"}}}]);
//# sourceMappingURL=component---src-pages-about-index-js-5996c1eac314c43f60eb.js.map