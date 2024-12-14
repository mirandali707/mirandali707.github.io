"use strict";(self.webpackChunkmiranda_gatsby_site=self.webpackChunkmiranda_gatsby_site||[]).push([[691],{8082:function(e,t,n){var i=n(7294),a=n(1808);t.Z=()=>{const[e,t]=i.useState(!1);return i.useEffect((()=>{t((0,a.fk)())}),[]),e}},1635:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(4184),a=n.n(i),o=n(7294),r=n(3124),s=n(9134),l=n(6999),c=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n};const A=["xs","sm","md","lg","xl","xxl"];var d=o.forwardRef(((e,t)=>{const{getPrefixCls:n,direction:i}=o.useContext(r.E_),{gutter:d,wrap:m,supportFlexGap:p}=o.useContext(s.Z),{prefixCls:u,span:f,order:g,offset:h,push:b,pull:y,className:E,children:$,flex:x,style:S}=e,v=c(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),w=n("col",u),[C,j]=(0,l.c)(w);let O={};A.forEach((t=>{let n={};const a=e[t];"number"==typeof a?n.span=a:"object"==typeof a&&(n=a||{}),delete v[t],O=Object.assign(Object.assign({},O),{[`${w}-${t}-${n.span}`]:void 0!==n.span,[`${w}-${t}-order-${n.order}`]:n.order||0===n.order,[`${w}-${t}-offset-${n.offset}`]:n.offset||0===n.offset,[`${w}-${t}-push-${n.push}`]:n.push||0===n.push,[`${w}-${t}-pull-${n.pull}`]:n.pull||0===n.pull,[`${w}-${t}-flex-${n.flex}`]:n.flex||"auto"===n.flex,[`${w}-rtl`]:"rtl"===i})}));const D=a()(w,{[`${w}-${f}`]:void 0!==f,[`${w}-order-${g}`]:g,[`${w}-offset-${h}`]:h,[`${w}-push-${b}`]:b,[`${w}-pull-${y}`]:y},E,O,j),N={};if(d&&d[0]>0){const e=d[0]/2;N.paddingLeft=e,N.paddingRight=e}if(d&&d[1]>0&&!p){const e=d[1]/2;N.paddingTop=e,N.paddingBottom=e}return x&&(N.flex=function(e){return"number"==typeof e?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}(x),!1!==m||N.minWidth||(N.minWidth=0)),C(o.createElement("div",Object.assign({},v,{style:Object.assign(Object.assign({},N),S),className:D,ref:t}),$))}))},9134:function(e,t,n){const i=(0,n(7294).createContext)({});t.Z=i},6999:function(e,t,n){n.d(t,{V:function(){return l},c:function(){return c}});var i=n(7968),a=n(5503);const o=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},r=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},s=(e,t)=>((e,t)=>{const{componentCls:n,gridColumns:i}=e,a={};for(let o=i;o>=0;o--)0===o?(a[`${n}${t}-${o}`]={display:"none"},a[`${n}-push-${o}`]={insetInlineStart:"auto"},a[`${n}-pull-${o}`]={insetInlineEnd:"auto"},a[`${n}${t}-push-${o}`]={insetInlineStart:"auto"},a[`${n}${t}-pull-${o}`]={insetInlineEnd:"auto"},a[`${n}${t}-offset-${o}`]={marginInlineStart:0},a[`${n}${t}-order-${o}`]={order:0}):(a[`${n}${t}-${o}`]={display:"block",flex:`0 0 ${o/i*100}%`,maxWidth:o/i*100+"%"},a[`${n}${t}-push-${o}`]={insetInlineStart:o/i*100+"%"},a[`${n}${t}-pull-${o}`]={insetInlineEnd:o/i*100+"%"},a[`${n}${t}-offset-${o}`]={marginInlineStart:o/i*100+"%"},a[`${n}${t}-order-${o}`]={order:o});return a})(e,t),l=(0,i.Z)("Grid",(e=>[o(e)])),c=(0,i.Z)("Grid",(e=>{const t=(0,a.TS)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[r(t),s(t,""),s(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({[`@media (min-width: ${t}px)`]:Object.assign({},s(e,n))}))(t,n[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}))},6725:function(e,t,n){n.d(t,{Z:function(){return p}});var i=n(4184),a=n.n(i),o=n(7294),r=n(3124),s=n(8082),l=n(4443),c=n(9134),A=n(6999),d=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n};function m(e,t){const[n,i]=o.useState("string"==typeof e?e:"");return o.useEffect((()=>{(()=>{if("string"==typeof e&&i(e),"object"==typeof e)for(let n=0;n<l.c.length;n++){const a=l.c[n];if(!t[a])continue;const o=e[a];if(void 0!==o)return void i(o)}})()}),[JSON.stringify(e),t]),n}var p=o.forwardRef(((e,t)=>{const{prefixCls:n,justify:i,align:p,className:u,style:f,children:g,gutter:h=0,wrap:b}=e,y=d(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:E,direction:$}=o.useContext(r.E_),[x,S]=o.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[v,w]=o.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),C=m(p,v),j=m(i,v),O=(0,s.Z)(),D=o.useRef(h),N=(0,l.Z)();o.useEffect((()=>{const e=N.subscribe((e=>{w(e);const t=D.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&S(e)}));return()=>N.unsubscribe(e)}),[]);const B=E("row",n),[I,z]=(0,A.V)(B),Q=(()=>{const e=[void 0,void 0];return(Array.isArray(h)?h:[h,void 0]).forEach(((t,n)=>{if("object"==typeof t)for(let i=0;i<l.c.length;i++){const a=l.c[i];if(x[a]&&void 0!==t[a]){e[n]=t[a];break}}else e[n]=t})),e})(),T=a()(B,{[`${B}-no-wrap`]:!1===b,[`${B}-${j}`]:j,[`${B}-${C}`]:C,[`${B}-rtl`]:"rtl"===$},u,z),k={},M=null!=Q[0]&&Q[0]>0?Q[0]/-2:void 0,P=null!=Q[1]&&Q[1]>0?Q[1]/-2:void 0;M&&(k.marginLeft=M,k.marginRight=M),O?[,k.rowGap]=Q:P&&(k.marginTop=P,k.marginBottom=P);const[G,Z]=Q,F=o.useMemo((()=>({gutter:[G,Z],wrap:b,supportFlexGap:O})),[G,Z,b,O]);return I(o.createElement(c.Z.Provider,{value:F},o.createElement("div",Object.assign({},y,{className:T,style:Object.assign(Object.assign({},k),f),ref:t}),g)))}))},4485:function(e,t,n){n.r(t),n.d(t,{Head:function(){return _},default:function(){return W}});var i=n(7294),a=n(7183),o=n(1534),r=n(6445),s=n(5460),l=n(6725),c=n(1635),A=n(8032),d=n(1009),m=n(362),p=n(4184),u=n.n(p),f=n(8423);function g(e,t,n){var i=(n||{}).atBegin;return function(e,t,n){var i,a=n||{},o=a.noTrailing,r=void 0!==o&&o,s=a.noLeading,l=void 0!==s&&s,c=a.debounceMode,A=void 0===c?void 0:c,d=!1,m=0;function p(){i&&clearTimeout(i)}function u(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];var s=this,c=Date.now()-m;function u(){m=Date.now(),t.apply(s,a)}function f(){i=void 0}d||(l||!A||i||u(),p(),void 0===A&&c>e?l?(m=Date.now(),r||(i=setTimeout(A?f:u,e))):u():!0!==r&&(i=setTimeout(A?f:u,void 0===A?e-c:e)))}return u.cancel=function(e){var t=(e||{}).upcomingOnly,n=void 0!==t&&t;p(),d=!n},u}(e,t,{debounceMode:!1!==(void 0!==i&&i)})}var h=n(6159),b=n(3124),y=n(5857),E=n(4747),$=n(7968),x=n(5503);const S=new y.E4("antSpinMove",{to:{opacity:1}}),v=new y.E4("antRotate",{to:{transform:"rotate(405deg)"}}),w=e=>({[`${e.componentCls}`]:Object.assign(Object.assign({},(0,E.Wf)(e)),{position:"absolute",display:"none",color:e.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},"&-nested-loading":{position:"relative",[`> div > ${e.componentCls}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:e.contentHeight,[`${e.componentCls}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:-e.spinDotSize/2},[`${e.componentCls}-text`]:{position:"absolute",top:"50%",width:"100%",paddingTop:(e.spinDotSize-e.fontSize)/2+2,textShadow:`0 1px 2px ${e.colorBgContainer}`,fontSize:e.fontSize},[`&${e.componentCls}-show-text ${e.componentCls}-dot`]:{marginTop:-e.spinDotSize/2-10},"&-sm":{[`${e.componentCls}-dot`]:{margin:-e.spinDotSizeSM/2},[`${e.componentCls}-text`]:{paddingTop:(e.spinDotSizeSM-e.fontSize)/2+2},[`&${e.componentCls}-show-text ${e.componentCls}-dot`]:{marginTop:-e.spinDotSizeSM/2-10}},"&-lg":{[`${e.componentCls}-dot`]:{margin:-e.spinDotSizeLG/2},[`${e.componentCls}-text`]:{paddingTop:(e.spinDotSizeLG-e.fontSize)/2+2},[`&${e.componentCls}-show-text ${e.componentCls}-dot`]:{marginTop:-e.spinDotSizeLG/2-10}}},[`${e.componentCls}-container`]:{position:"relative",transition:`opacity ${e.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:e.colorBgContainer,opacity:0,transition:`all ${e.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${e.componentCls}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:e.spinDotDefault},[`${e.componentCls}-dot`]:{position:"relative",display:"inline-block",fontSize:e.spinDotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:(e.spinDotSize-e.marginXXS/2)/2,height:(e.spinDotSize-e.marginXXS/2)/2,backgroundColor:e.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:S,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:v,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${e.componentCls}-dot`]:{fontSize:e.spinDotSizeSM,i:{width:(e.spinDotSizeSM-e.marginXXS/2)/2,height:(e.spinDotSizeSM-e.marginXXS/2)/2}},[`&-lg ${e.componentCls}-dot`]:{fontSize:e.spinDotSizeLG,i:{width:(e.spinDotSizeLG-e.marginXXS)/2,height:(e.spinDotSizeLG-e.marginXXS)/2}},[`&${e.componentCls}-show-text ${e.componentCls}-text`]:{display:"block"}})});var C=(0,$.Z)("Spin",(e=>{const t=(0,x.TS)(e,{spinDotDefault:e.colorTextDescription,spinDotSize:e.controlHeightLG/2,spinDotSizeSM:.35*e.controlHeightLG,spinDotSizeLG:e.controlHeight});return[w(t)]}),{contentHeight:400}),j=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n};let O=null;const D=e=>{const{spinPrefixCls:t,spinning:n=!0,delay:a=0,className:o,rootClassName:r,size:s="default",tip:l,wrapperClassName:c,style:A,children:d,hashId:m}=e,p=j(e,["spinPrefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","hashId"]),[y,E]=i.useState((()=>n&&!function(e,t){return!!e&&!!t&&!isNaN(Number(t))}(n,a)));i.useEffect((()=>{if(n){const e=g(a,(()=>{E(!0)}));return e(),()=>{var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}}E(!1)}),[a,n]);const $=i.useMemo((()=>void 0!==d),[d]);const{direction:x,spin:S}=i.useContext(b.E_),v=u()(t,null==S?void 0:S.className,{[`${t}-sm`]:"small"===s,[`${t}-lg`]:"large"===s,[`${t}-spinning`]:y,[`${t}-show-text`]:!!l,[`${t}-rtl`]:"rtl"===x},o,r,m),w=u()(`${t}-container`,{[`${t}-blur`]:y}),C=(0,f.Z)(p,["indicator","prefixCls"]),D=Object.assign(Object.assign({},null==S?void 0:S.style),A),N=i.createElement("div",Object.assign({},C,{style:D,className:v,"aria-live":"polite","aria-busy":y}),function(e,t){const{indicator:n}=t,a=`${e}-dot`;return null===n?null:(0,h.l$)(n)?(0,h.Tm)(n,{className:u()(n.props.className,a)}):(0,h.l$)(O)?(0,h.Tm)(O,{className:u()(O.props.className,a)}):i.createElement("span",{className:u()(a,`${e}-dot-spin`)},i.createElement("i",{className:`${e}-dot-item`,key:1}),i.createElement("i",{className:`${e}-dot-item`,key:2}),i.createElement("i",{className:`${e}-dot-item`,key:3}),i.createElement("i",{className:`${e}-dot-item`,key:4}))}(t,e),l&&$?i.createElement("div",{className:`${t}-text`},l):null);return $?i.createElement("div",Object.assign({},C,{className:u()(`${t}-nested-loading`,c,m)}),y&&i.createElement("div",{key:"loading"},N),i.createElement("div",{className:w,key:"container"},d)):N},N=e=>{const{prefixCls:t}=e,{getPrefixCls:n}=i.useContext(b.E_),a=n("spin",t),[o,r]=C(a),s=Object.assign(Object.assign({},e),{spinPrefixCls:a,hashId:r});return o(i.createElement(D,Object.assign({},s)))};N.setDefaultIndicator=e=>{O=e};var B=N;var I=()=>i.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},i.createElement(B,{size:"large"}));const{Header:z,Content:Q,Footer:T}=a.default,{Title:k,Paragraph:M,Text:P,Link:G}=o.default,Z=(0,i.lazy)((()=>Promise.all([n.e(351),n.e(962),n.e(711)]).then(n.bind(n,8711)))),F=(0,i.lazy)((()=>Promise.all([n.e(662),n.e(351),n.e(962),n.e(302)]).then(n.bind(n,1302)))),L=(0,i.lazy)((()=>Promise.all([n.e(351),n.e(125)]).then(n.bind(n,4125)))),R=(0,i.lazy)((()=>Promise.all([n.e(351),n.e(241)]).then(n.bind(n,8241)))),X=()=>i.createElement(l.Z,{gutter:24,justify:"space-around",align:"middle"},i.createElement(c.Z,{span:16},i.createElement(k,null,"Hi, I'm Miranda ₊ ⊹ ⟡"),i.createElement(M,null,"I'm a student at Stanford studying computer science (B.S. '23, M.S. '25). Through my ",i.createElement(G,{href:"#research"},"research")," and ",i.createElement(G,{href:"#experience"},"work"),", I aim to use technology to (A) facilitate positive human-to-human social outcomes to close the digital divide and to (B) promote human-machine collaboration to enhance accessibility and expertise for non-technical users and under-resourced populations. I am especially interested in education because it both exemplifies existing inequities in tech literacy and offers the potential to bridge them."),i.createElement(M,null,"Also, ",i.createElement(G,{href:"/art"},"my art practice")," is very important to me."),i.createElement(M,null,i.createElement(G,{href:"https://www.linkedin.com/in/miranda-li-b83859124/"},"Linkedin")," ⟡ ",i.createElement(G,{href:"mailto:mirandal@stanford.edu"},"Email")," ⟡ ",i.createElement(G,{href:"https://github.com/mirandali707"},"Github"))),i.createElement(c.Z,{span:8},i.createElement(A.S,{src:"../images/miranda-headshot.jpg",alt:"Headshot of Miranda Li.",placeholder:"blurred",layout:"constrained",width:200,height:200,style:{borderRadius:"50%"},__imageData:n(5432)}))),Y=()=>i.createElement(i.Fragment,null,i.createElement(k,{id:"research",level:3},"Research"),i.createElement(l.Z,null,i.createElement(L,null))),H=e=>{let{activeTags:t,anyOrAll:n,setActiveTags:a,setAnyOrAll:o}=e;return i.createElement(i.Fragment,null,i.createElement(k,{id:"experience",level:3},"Experience"),i.createElement(l.Z,{gutter:8},i.createElement(c.Z,{flex:"auto"},i.createElement(Z,{setActiveTags:a})),i.createElement(c.Z,null,i.createElement(R,{anyOrAll:n,setAnyOrAll:o}))),i.createElement(l.Z,null,i.createElement(F,{activeTags:t,anyOrAll:n})))};var W=()=>{const{0:e,1:t}=(0,i.useState)(Object.keys(m.m)),{0:n,1:o}=(0,i.useState)("any");return i.createElement(r.ZP,{theme:d.u},i.createElement(a.default,{className:"layout",style:{backgroundColor:"#FFFCFA"}},i.createElement(Q,{style:{width:"75%",margin:"auto",paddingTop:"2rem"}},i.createElement(i.Suspense,{fallback:i.createElement(I,null)},i.createElement(X,null),i.createElement(s.Z,{dashed:!0}),i.createElement(Y,null),i.createElement(s.Z,{dashed:!0}),i.createElement(H,{activeTags:e,anyOrAll:n,setActiveTags:t,setAnyOrAll:o}))),i.createElement(T,{style:{textAlign:"center",backgroundColor:"#FFFCFA"}},"I made this website myself using Gatsby, React, Ant Design, and TypeScript. Anyways, if you've come all this way, you may as well say hello... (☞ﾟヮﾟ)☞  ",i.createElement(G,{href:"https://www.linkedin.com/in/miranda-li-b83859124/"},"Linkedin")," ⟡ ",i.createElement(G,{href:"mailto:mirandal@stanford.edu"},"Email"))))};const _=()=>i.createElement("title",null,"Miranda Li")},5432:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQBAv/EABUBAQEAAAAAAAAAAAAAAAAAAAIA/9oADAMBAAIQAxAAAAGuKyQOpqPAbAD/xAAaEAADAQADAAAAAAAAAAAAAAABAgMRACEx/9oACAEBAAEFAicWVCzlsL9TmWoGXTuhPCTz/8QAFhEBAQEAAAAAAAAAAAAAAAAAEAEy/9oACAEDAQE/ASZP/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQITH/2gAIAQIBAT8BRQsj/8QAHBAAAgEFAQAAAAAAAAAAAAAAAAECESExQVEQ/9oACAEBAAY/ApPhdFCeRa2YZcr1+f/EABoQAQADAQEBAAAAAAAAAAAAAAEAESFBMVH/2gAIAQEAAT8htUyaY4Ma4OQmLQs5gEUC1n49WTQ6S59U/9oADAMBAAIAAwAAABBbOL7/xAAbEQACAQUAAAAAAAAAAAAAAAAAAREQMXGBwf/aAAgBAwEBPxBpvQ5ku5Xaf//EABgRAAMBAQAAAAAAAAAAAAAAAAABESEx/9oACAECAQE/EFUeCwdCH//EAB0QAQEAAwACAwAAAAAAAAAAAAERACFRQWExgfD/2gAIAQEAAT8QrBBd+XuHXPBtG9y4KCMMbABS/vWAK7g7sdBzGVl95QaAW8fGEbDdvvKiIJ8C6z//2Q=="},"images":{"fallback":{"src":"/static/4b329556b20f98b6d2c8f58b1c8d8579/dd515/miranda-headshot.jpg","srcSet":"/static/4b329556b20f98b6d2c8f58b1c8d8579/6ac16/miranda-headshot.jpg 50w,\\n/static/4b329556b20f98b6d2c8f58b1c8d8579/e07e1/miranda-headshot.jpg 100w,\\n/static/4b329556b20f98b6d2c8f58b1c8d8579/dd515/miranda-headshot.jpg 200w,\\n/static/4b329556b20f98b6d2c8f58b1c8d8579/47930/miranda-headshot.jpg 400w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/4b329556b20f98b6d2c8f58b1c8d8579/dbc4a/miranda-headshot.webp 50w,\\n/static/4b329556b20f98b6d2c8f58b1c8d8579/d8057/miranda-headshot.webp 100w,\\n/static/4b329556b20f98b6d2c8f58b1c8d8579/2e34e/miranda-headshot.webp 200w,\\n/static/4b329556b20f98b6d2c8f58b1c8d8579/416c3/miranda-headshot.webp 400w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-22fa55609731ce35d067.js.map