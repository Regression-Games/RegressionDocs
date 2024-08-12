"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[4873],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?a.createElement(f,o(o({ref:r},u),{},{components:t})):a.createElement(f,o({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3117:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(7462),n=(t(7294),t(3905));const i={sidebar_label:"Rules Reference"},o="Rules Reference",l={unversionedId:"validations/validations-rules-reference",id:"validations/validations-rules-reference",title:"Rules Reference",description:"Rules can be asserted when running a Validation Suite against a gameplay recording, to ensure that the recording meets specific criteria. We provide a set of rule types that can be used to construct assertions based on various performance metrics. For each tick in the gameplay recording, all Rules are evaluated. If a Rule is violated the Validation Run will display a warning for that Rule.",source:"@site/docs/validations/validations-rules-reference.mdx",sourceDirName:"validations",slug:"/validations/validations-rules-reference",permalink:"/validations/validations-rules-reference",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Rules Reference"},sidebar:"unitySidebar",previous:{title:"Scenario Builder Reference",permalink:"/validations/validations-scenario-builder-reference"},next:{title:"Authenticating with API Keys",permalink:"/authenticating-with-api-keys"}},s={},c=[{value:"Rule Types",id:"rule-types",level:2},{value:"Frames Per Second (with percentile)",id:"frames-per-second-with-percentile",level:3},{value:"Average Frames Per Second",id:"average-frames-per-second",level:3},{value:"Maximum Frame Time",id:"maximum-frame-time",level:3}],u={toc:c},d="wrapper";function p(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rules-reference"},"Rules Reference"),(0,n.kt)("p",null,"Rules can be asserted when running a Validation Suite against a gameplay recording, to ensure that the recording meets specific criteria. We provide a set of rule types that can be used to construct assertions based on various performance metrics. For each tick in the gameplay recording, all Rules are evaluated. If a Rule is violated the Validation Run will display a warning for that Rule."),(0,n.kt)("h2",{id:"rule-types"},"Rule Types"),(0,n.kt)("h3",{id:"frames-per-second-with-percentile"},"Frames Per Second (with percentile)"),(0,n.kt)("p",null,"Assert that the frames per second of the gameplay recording do not fall below a threshold, within a specified percentile."),(0,n.kt)("h3",{id:"average-frames-per-second"},"Average Frames Per Second"),(0,n.kt)("p",null,"Assert that the average frames per second of the gameplay recording does not fall below a threshold. This average is computed\nacross all frames in a gameplay recording."),(0,n.kt)("h3",{id:"maximum-frame-time"},"Maximum Frame Time"),(0,n.kt)("p",null,"Assert that the maximum frame time of the gameplay recording does not exceed a threshold. Frame time is the amount of time spent calculating and rendering a frame, and is measured in milliseconds. If a single frame exceeds the specified threshold, the rule will be violated."))}p.isMDXComponent=!0}}]);