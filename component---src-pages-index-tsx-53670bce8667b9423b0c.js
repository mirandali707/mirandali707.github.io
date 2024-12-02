"use strict";(self.webpackChunkmiranda_gatsby_site=self.webpackChunkmiranda_gatsby_site||[]).push([[691],{3204:function(e){const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,i=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,r=new RegExp("^"+o.source),s=new RegExp(o.source+a.source,"gu"),l=new RegExp("\\d+"+a.source,"gu"),c=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),c=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?c(e):o(e);return e!==o(e)&&(e=((e,i,a)=>{let o=!1,r=!1,s=!1;for(let l=0;l<e.length;l++){const c=e[l];o&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),o=!1,s=r,r=!0,l++):r&&s&&n.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),s=r,r=!1,o=!0):(o=i(c)===c&&a(c)!==c,s=r,r=a(c)===c&&i(c)!==c)}return e})(e,o,c)),e=e.replace(r,""),e=a.preserveConsecutiveUppercase?((e,t)=>(i.lastIndex=0,e.replace(i,(e=>t(e)))))(e,o):o(e),a.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,l.lastIndex=0,e.replace(s,((e,n)=>t(n))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,n){n.d(t,{L:function(){return g},M:function(){return v},P:function(){return E},S:function(){return G},_:function(){return s},a:function(){return r},b:function(){return d},g:function(){return p},h:function(){return l}});var i=n(7294),a=(n(3204),n(5697)),o=n.n(a);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t.indexOf(n=o[i])>=0||(a[n]=e[n]);return a}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,n){const i={};let a="gatsby-image-wrapper";return"fixed"===n?(i.width=e,i.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:i}}function d(e,t,n,i,a){return void 0===a&&(a={}),r({},n,{loading:i,shouldLoad:e,"data-main-image":"",style:r({},a,{opacity:t?1:0})})}function p(e,t,n,i,a,o,s,l){const c={};o&&(c.backgroundColor=o,"fixed"===n?(c.width=i,c.height=a,c.backgroundColor=o,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);const d=r({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:r({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],m=function(e){let{layout:t,width:n,height:a}=e;return"fullWidth"===t?i.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?i.createElement("div",{style:{maxWidth:n,display:"block"}},i.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+a+"'%20width='"+n+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,n=s(e,u);return i.createElement(i.Fragment,null,i.createElement(m,r({},n)),t,null)},A=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:n,loading:a,alt:o="",shouldLoad:l}=e,c=s(e,A);return i.createElement("img",r({},c,{decoding:"async",loading:a,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,alt:o}))},y=function(e){let{fallback:t,sources:n=[],shouldLoad:a=!0}=e,o=s(e,h);const l=o.sizes||(null==t?void 0:t.sizes),c=i.createElement(f,r({},o,t,{sizes:l,shouldLoad:a}));return n.length?i.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:o}=e;return i.createElement("source",{key:t+"-"+o+"-"+n,type:o,media:t,srcSet:a?n:void 0,"data-srcset":a?void 0:n,sizes:l})})),c):c};var b;f.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},y.displayName="Picture",y.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,n=s(e,w);return t?i.createElement(y,r({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):i.createElement("div",r({},n))};E.displayName="Placeholder",E.propTypes={fallback:a.string,sources:null==(b=y.propTypes)?void 0:b.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const v=function(e){return i.createElement(i.Fragment,null,i.createElement(y,r({},e)),i.createElement("noscript",null,i.createElement(y,r({},e,{shouldLoad:!0}))))};v.displayName="MainImage",v.propTypes=y.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],x=["style","className"],C=e=>e.replace(/\n/g,""),$=function(e,t,n){for(var i=arguments.length,a=new Array(i>3?i-3:0),r=3;r<i;r++)a[r-3]=arguments[r];return e.alt||""===e.alt?o().string.apply(o(),[e,t,n].concat(a)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},j={image:o().object.isRequired,alt:$},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],z=new Set;let I,O;const D=function(e){let{as:t="div",image:a,style:o,backgroundColor:d,className:p,class:u,onStartLoad:m,onLoad:g,onError:A}=e,h=s(e,k);const{width:f,height:y,layout:b}=a,w=c(f,y,b),{style:E,className:v}=w,S=s(w,N),x=(0,i.useRef)(),C=(0,i.useMemo)((()=>JSON.stringify(a.images)),[a.images]);u&&(p=u);const $=function(e,t,n){let i="";return"fullWidth"===e&&(i='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(i='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+n+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),i}(b,f,y);return(0,i.useEffect)((()=>{I||(I=n.e(731).then(n.bind(n,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void z.add(C);if(O&&z.has(C))return;let t,i;return I.then((e=>{let{renderImageToString:n,swapPlaceholderImage:s}=e;x.current&&(x.current.innerHTML=n(r({isLoading:!0,isLoaded:z.has(C),image:a},h)),z.has(C)||(t=requestAnimationFrame((()=>{x.current&&(i=s(x.current,C,z,o,m,g,A))}))))})),()=>{t&&cancelAnimationFrame(t),i&&i()}}),[a]),(0,i.useLayoutEffect)((()=>{z.has(C)&&O&&(x.current.innerHTML=O(r({isLoading:z.has(C),isLoaded:z.has(C),image:a},h)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[a]),(0,i.createElement)(t,r({},S,{style:r({},E,o,{backgroundColor:d}),className:v+(p?" "+p:""),ref:x,dangerouslySetInnerHTML:{__html:$},suppressHydrationWarning:!0}))},T=(0,i.memo)((function(e){return e.image?(0,i.createElement)(D,e):null}));T.propTypes=j,T.displayName="GatsbyImage";const B=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function L(e){return function(t){let{src:n,__imageData:a,__error:o}=t,l=s(t,B);return o&&console.warn(o),a?i.createElement(e,r({image:a},l)):(console.warn("Image not loaded",n),null)}}const P=L((function(e){let{as:t="div",className:n,class:a,style:o,image:l,loading:u="lazy",imgClassName:m,imgStyle:A,backgroundColor:h,objectFit:f,objectPosition:y}=e,b=s(e,S);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(n=a),A=r({objectFit:f,objectPosition:y,backgroundColor:h},A);const{width:w,height:$,layout:j,images:k,placeholder:N,backgroundColor:z}=l,I=c(w,$,j),{style:O,className:D}=I,T=s(I,x),B={fallback:void 0,sources:[]};return k.fallback&&(B.fallback=r({},k.fallback,{srcSet:k.fallback.srcSet?C(k.fallback.srcSet):void 0})),k.sources&&(B.sources=k.sources.map((e=>r({},e,{srcSet:C(e.srcSet)})))),i.createElement(t,r({},T,{style:r({},O,o,{backgroundColor:h}),className:D+(n?" "+n:"")}),i.createElement(g,{layout:j,width:w,height:$},i.createElement(E,r({},p(N,!1,j,w,$,z,f,y))),i.createElement(v,r({"data-gatsby-image-ssr":"",className:m},b,d("eager"===u,!1,B,u,A)))))})),M=function(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(i)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),F={src:o().string.isRequired,alt:$,width:M,height:M,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};P.displayName="StaticImage",P.propTypes=F;const G=L(T);G.displayName="StaticImage",G.propTypes=F},362:function(e,t,n){n.d(t,{m:function(){return i}});const i={"cs-ed":{color:"cyan",text:"CS education (teaching coding)"},art:{color:"volcano",text:"Art!"},ai:{color:"purple",text:"AI..."},code:{color:"blue",text:"I coded something"},pedagogy:{color:"gold",text:"I taught something or thought about teaching"},design:{color:"green",text:"I designed something"},journo:{color:"magenta",text:"Journalism :)"},work:{color:"lime",text:"Internship or job"},leadership:{color:"orange",text:"I lead a team"}}},2048:function(e,t,n){n.r(t),n.d(t,{Head:function(){return q},default:function(){return _}});var i=n(7294),a=n(7826),o=n(1534),r=n(6445),s=n(6725),l=n(1635),c=n(4184),d=n.n(c),p=n(3124),u=n(4747),m=n(7968),g=n(5503);const A=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:i,lineWidth:a}=e;return{[t]:Object.assign(Object.assign({},(0,u.Wf)(e)),{borderBlockStart:`${a}px solid ${i}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${e.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${a}px solid ${i}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${e.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${e.dividerHorizontalWithTextGutterMargin}px 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${i}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${a}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${t}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:i,borderStyle:"dashed",borderWidth:`${a}px 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:a,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:n}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:n}}})}};var h=(0,m.Z)("Divider",(e=>{const t=(0,g.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[A(t)]}),{sizePaddingEdgeHorizontal:0}),f=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n};var y=e=>{const{getPrefixCls:t,direction:n,divider:a}=i.useContext(p.E_),{prefixCls:o,type:r="horizontal",orientation:s="center",orientationMargin:l,className:c,rootClassName:u,children:m,dashed:g,plain:A,style:y}=e,b=f(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),w=t("divider",o),[E,v]=h(w),S=s.length>0?`-${s}`:s,x=!!m,C="left"===s&&null!=l,$="right"===s&&null!=l,j=d()(w,null==a?void 0:a.className,v,`${w}-${r}`,{[`${w}-with-text`]:x,[`${w}-with-text${S}`]:x,[`${w}-dashed`]:!!g,[`${w}-plain`]:!!A,[`${w}-rtl`]:"rtl"===n,[`${w}-no-default-orientation-margin-left`]:C,[`${w}-no-default-orientation-margin-right`]:$},c,u),k=i.useMemo((()=>"number"==typeof l?l:/^\d+$/.test(l)?Number(l):l),[l]),N=Object.assign(Object.assign({},C&&{marginLeft:k}),$&&{marginRight:k});return E(i.createElement("div",Object.assign({className:j,style:Object.assign(Object.assign({},null==a?void 0:a.style),y)},b,{role:"separator"}),m&&"vertical"!==r&&i.createElement("span",{className:`${w}-inner-text`,style:N},m)))},b=n(8032),w=n(1009),E=n(362),v=n(8423);function S(e,t,n){var i=(n||{}).atBegin;return function(e,t,n){var i,a=n||{},o=a.noTrailing,r=void 0!==o&&o,s=a.noLeading,l=void 0!==s&&s,c=a.debounceMode,d=void 0===c?void 0:c,p=!1,u=0;function m(){i&&clearTimeout(i)}function g(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];var s=this,c=Date.now()-u;function g(){u=Date.now(),t.apply(s,a)}function A(){i=void 0}p||(l||!d||i||g(),m(),void 0===d&&c>e?l?(u=Date.now(),r||(i=setTimeout(d?A:g,e))):g():!0!==r&&(i=setTimeout(d?A:g,void 0===d?e-c:e)))}return g.cancel=function(e){var t=(e||{}).upcomingOnly,n=void 0!==t&&t;m(),p=!n},g}(e,t,{debounceMode:!1!==(void 0!==i&&i)})}var x=n(6159),C=n(5857);const $=new C.E4("antSpinMove",{to:{opacity:1}}),j=new C.E4("antRotate",{to:{transform:"rotate(405deg)"}}),k=e=>({[`${e.componentCls}`]:Object.assign(Object.assign({},(0,u.Wf)(e)),{position:"absolute",display:"none",color:e.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},"&-nested-loading":{position:"relative",[`> div > ${e.componentCls}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:e.contentHeight,[`${e.componentCls}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:-e.spinDotSize/2},[`${e.componentCls}-text`]:{position:"absolute",top:"50%",width:"100%",paddingTop:(e.spinDotSize-e.fontSize)/2+2,textShadow:`0 1px 2px ${e.colorBgContainer}`,fontSize:e.fontSize},[`&${e.componentCls}-show-text ${e.componentCls}-dot`]:{marginTop:-e.spinDotSize/2-10},"&-sm":{[`${e.componentCls}-dot`]:{margin:-e.spinDotSizeSM/2},[`${e.componentCls}-text`]:{paddingTop:(e.spinDotSizeSM-e.fontSize)/2+2},[`&${e.componentCls}-show-text ${e.componentCls}-dot`]:{marginTop:-e.spinDotSizeSM/2-10}},"&-lg":{[`${e.componentCls}-dot`]:{margin:-e.spinDotSizeLG/2},[`${e.componentCls}-text`]:{paddingTop:(e.spinDotSizeLG-e.fontSize)/2+2},[`&${e.componentCls}-show-text ${e.componentCls}-dot`]:{marginTop:-e.spinDotSizeLG/2-10}}},[`${e.componentCls}-container`]:{position:"relative",transition:`opacity ${e.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:e.colorBgContainer,opacity:0,transition:`all ${e.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${e.componentCls}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:e.spinDotDefault},[`${e.componentCls}-dot`]:{position:"relative",display:"inline-block",fontSize:e.spinDotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:(e.spinDotSize-e.marginXXS/2)/2,height:(e.spinDotSize-e.marginXXS/2)/2,backgroundColor:e.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:$,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:j,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${e.componentCls}-dot`]:{fontSize:e.spinDotSizeSM,i:{width:(e.spinDotSizeSM-e.marginXXS/2)/2,height:(e.spinDotSizeSM-e.marginXXS/2)/2}},[`&-lg ${e.componentCls}-dot`]:{fontSize:e.spinDotSizeLG,i:{width:(e.spinDotSizeLG-e.marginXXS)/2,height:(e.spinDotSizeLG-e.marginXXS)/2}},[`&${e.componentCls}-show-text ${e.componentCls}-text`]:{display:"block"}})});var N=(0,m.Z)("Spin",(e=>{const t=(0,g.TS)(e,{spinDotDefault:e.colorTextDescription,spinDotSize:e.controlHeightLG/2,spinDotSizeSM:.35*e.controlHeightLG,spinDotSizeLG:e.controlHeight});return[k(t)]}),{contentHeight:400}),z=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n};let I=null;const O=e=>{const{spinPrefixCls:t,spinning:n=!0,delay:a=0,className:o,rootClassName:r,size:s="default",tip:l,wrapperClassName:c,style:u,children:m,hashId:g}=e,A=z(e,["spinPrefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","hashId"]),[h,f]=i.useState((()=>n&&!function(e,t){return!!e&&!!t&&!isNaN(Number(t))}(n,a)));i.useEffect((()=>{if(n){const e=S(a,(()=>{f(!0)}));return e(),()=>{var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}}f(!1)}),[a,n]);const y=i.useMemo((()=>void 0!==m),[m]);const{direction:b,spin:w}=i.useContext(p.E_),E=d()(t,null==w?void 0:w.className,{[`${t}-sm`]:"small"===s,[`${t}-lg`]:"large"===s,[`${t}-spinning`]:h,[`${t}-show-text`]:!!l,[`${t}-rtl`]:"rtl"===b},o,r,g),C=d()(`${t}-container`,{[`${t}-blur`]:h}),$=(0,v.Z)(A,["indicator","prefixCls"]),j=Object.assign(Object.assign({},null==w?void 0:w.style),u),k=i.createElement("div",Object.assign({},$,{style:j,className:E,"aria-live":"polite","aria-busy":h}),function(e,t){const{indicator:n}=t,a=`${e}-dot`;return null===n?null:(0,x.l$)(n)?(0,x.Tm)(n,{className:d()(n.props.className,a)}):(0,x.l$)(I)?(0,x.Tm)(I,{className:d()(I.props.className,a)}):i.createElement("span",{className:d()(a,`${e}-dot-spin`)},i.createElement("i",{className:`${e}-dot-item`,key:1}),i.createElement("i",{className:`${e}-dot-item`,key:2}),i.createElement("i",{className:`${e}-dot-item`,key:3}),i.createElement("i",{className:`${e}-dot-item`,key:4}))}(t,e),l&&y?i.createElement("div",{className:`${t}-text`},l):null);return y?i.createElement("div",Object.assign({},$,{className:d()(`${t}-nested-loading`,c,g)}),h&&i.createElement("div",{key:"loading"},k),i.createElement("div",{className:C,key:"container"},m)):k},D=e=>{const{prefixCls:t}=e,{getPrefixCls:n}=i.useContext(p.E_),a=n("spin",t),[o,r]=N(a),s=Object.assign(Object.assign({},e),{spinPrefixCls:a,hashId:r});return o(i.createElement(O,Object.assign({},s)))};D.setDefaultIndicator=e=>{I=e};var T=D;var B=()=>i.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}},i.createElement(T,{size:"large"}));const{Header:L,Content:P,Footer:M}=a.default,{Title:R,Paragraph:F,Text:G,Link:H}=o.default,Q=(0,i.lazy)((()=>Promise.all([n.e(351),n.e(410)]).then(n.bind(n,3410)))),W=(0,i.lazy)((()=>Promise.all([n.e(662),n.e(351),n.e(335)]).then(n.bind(n,4335)))),Y=(0,i.lazy)((()=>Promise.all([n.e(351),n.e(241)]).then(n.bind(n,8241))));var _=()=>{const{0:e,1:t}=(0,i.useState)(Object.keys(E.m)),{0:o,1:c}=(0,i.useState)("any");return i.createElement(r.ZP,{theme:w.u},i.createElement(a.default,{className:"layout",style:{backgroundColor:"#FFFCFA"}},i.createElement(P,{style:{width:"75%",margin:"auto",paddingTop:"2rem"}},i.createElement(i.Suspense,{fallback:i.createElement(B,null)},i.createElement(s.Z,{gutter:24,justify:"space-around",align:"middle"},i.createElement(l.Z,{span:16},i.createElement(R,null,"Hi, I'm Miranda ₊ ⊹ ⟡"),i.createElement(F,null,"I'm a student at Stanford studying computer science (B.S. '23, M.S. '24). I like making human-centered technology, joyful and accessible learning tools and curricula, and art."),i.createElement(F,null,i.createElement(H,{href:"https://www.linkedin.com/in/miranda-li-b83859124/"},"Linkedin")," ⟡ ",i.createElement(H,{href:"mailto:mirandal@stanford.edu"},"Email")," ⟡ ",i.createElement(H,{href:"https://github.com/mirandali707"},"Github"))),i.createElement(l.Z,{span:8},i.createElement(b.S,{src:"../images/website-headshot.jpeg",alt:"A photo of Miranda doing a peace sign",placeholder:"blurred",layout:"constrained",width:200,height:200,style:{borderRadius:"50%"},__imageData:n(7912)}))),i.createElement(y,{dashed:!0}),i.createElement(s.Z,{gutter:8},i.createElement(l.Z,{flex:"auto"},i.createElement(Q,{setActiveTags:t})),i.createElement(l.Z,null,i.createElement(Y,{anyOrAll:o,setAnyOrAll:c}))),i.createElement(s.Z,null,i.createElement(W,{activeTags:e,anyOrAll:o})))),i.createElement(M,{style:{textAlign:"center",backgroundColor:"#FFFCFA"}},"I made this website myself using Gatsby, React, Ant Design, and TypeScript. Anyways, if you've come all this way, you may as well say hello... (☞ﾟヮﾟ)☞  ",i.createElement(H,{href:"https://www.linkedin.com/in/miranda-li-b83859124/"},"Linkedin")," ⟡ ",i.createElement(H,{href:"mailto:mirandal@stanford.edu"},"Email"))))};const q=()=>i.createElement("title",null,"Miranda Li")},7912:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIE/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/aAAwDAQACEAMQAAAB146mb0zhtkhYGl//xAAaEAEBAQEAAwAAAAAAAAAAAAABAgAREzFB/9oACAEBAAEFAm+6rR8l4HUNnHPv5v/EABcRAAMBAAAAAAAAAAAAAAAAAAECEDH/2gAIAQMBAT8BAi5P/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEQIf/aAAgBAgEBPwFmjn//xAAXEAEBAQEAAAAAAAAAAAAAAAABECAy/9oACAEBAAY/Ap24G//EABwQAAICAgMAAAAAAAAAAAAAAAABESEQQVFhcf/aAAgBAQABPyGFySxnXiPpplE1oaNiRO+P/9oADAMBAAIAAwAAABBr+EL/xAAYEQACAwAAAAAAAAAAAAAAAAAAARARMf/aAAgBAwEBPxBBShen/8QAFxEBAQEBAAAAAAAAAAAAAAAAAAERMf/aAAgBAgEBPxCq07qP/8QAHBABAAIDAAMAAAAAAAAAAAAAAQARITFBUWFx/9oACAEBAAE/EERKJwZUyl1RQfIVFs8DqCWOaUX7hBECcrWY0tCSqgp12OtjbOAFYn//2Q=="},"images":{"fallback":{"src":"/static/be878905011165dd0a7ef5d804fc76c1/dd515/website-headshot.jpg","srcSet":"/static/be878905011165dd0a7ef5d804fc76c1/6ac16/website-headshot.jpg 50w,\\n/static/be878905011165dd0a7ef5d804fc76c1/e07e1/website-headshot.jpg 100w,\\n/static/be878905011165dd0a7ef5d804fc76c1/dd515/website-headshot.jpg 200w,\\n/static/be878905011165dd0a7ef5d804fc76c1/47930/website-headshot.jpg 400w","sizes":"(min-width: 200px) 200px, 100vw"},"sources":[{"srcSet":"/static/be878905011165dd0a7ef5d804fc76c1/dbc4a/website-headshot.webp 50w,\\n/static/be878905011165dd0a7ef5d804fc76c1/d8057/website-headshot.webp 100w,\\n/static/be878905011165dd0a7ef5d804fc76c1/2e34e/website-headshot.webp 200w,\\n/static/be878905011165dd0a7ef5d804fc76c1/416c3/website-headshot.webp 400w","type":"image/webp","sizes":"(min-width: 200px) 200px, 100vw"}]},"width":200,"height":200}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-53670bce8667b9423b0c.js.map