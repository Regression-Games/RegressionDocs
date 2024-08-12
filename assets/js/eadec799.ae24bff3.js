"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[660],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,v=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?a.createElement(v,o(o({ref:t},u),{},{components:r})):a.createElement(v,o({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8784:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_label:"Scenario Builder Reference"},o="Scenario Builder Reference",s={unversionedId:"validations/validations-scenario-builder-reference",id:"validations/validations-scenario-builder-reference",title:"Scenario Builder Reference",description:"Scenarios are composed of one or more steps that can be asserted throughout a gameplay recording. Steps are asserted in the order they appear in the Scenario, and if any step fails, the Scenario will fail.",source:"@site/docs/validations/validations-scenario-builder-reference.mdx",sourceDirName:"validations",slug:"/validations/validations-scenario-builder-reference",permalink:"/validations/validations-scenario-builder-reference",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Scenario Builder Reference"},sidebar:"unitySidebar",previous:{title:"Getting Started with Validations",permalink:"/validations/validations-getting-started"},next:{title:"Rules Reference",permalink:"/validations/validations-rules-reference"}},l={},c=[{value:"Step Types",id:"step-types",level:2},{value:"Wait for Scene",id:"wait-for-scene",level:3},{value:"Wait for Key",id:"wait-for-key",level:3},{value:"Wait for Mouse",id:"wait-for-mouse",level:3},{value:"Wait for Existence",id:"wait-for-existence",level:3},{value:"Wait for State",id:"wait-for-state",level:3},{value:"Store Value",id:"store-value",level:3}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"scenario-builder-reference"},"Scenario Builder Reference"),(0,n.kt)("p",null,"Scenarios are composed of one or more steps that can be asserted throughout a gameplay recording. Steps are asserted in the order they appear in the Scenario, and if any step fails, the Scenario will fail."),(0,n.kt)("p",null,"Additionally, each scenario is also executed in the order that they are present within the Validation Suite. However,\nif a particular scenario fails, the following scenarios will still be executed. Each scenario always starts at the\ntick that the last scenario left off at."),(0,n.kt)("h2",{id:"step-types"},"Step Types"),(0,n.kt)("h3",{id:"wait-for-scene"},"Wait for Scene"),(0,n.kt)("p",null,"Wait for a specific scene to be loaded to be loaded or unloaded."),(0,n.kt)("h3",{id:"wait-for-key"},"Wait for Key"),(0,n.kt)("p",null,"Wait for one or more keys to be pressed or released."),(0,n.kt)("h3",{id:"wait-for-mouse"},"Wait for Mouse"),(0,n.kt)("p",null,"Wait for a mouse button to be pressed or released."),(0,n.kt)("h3",{id:"wait-for-existence"},"Wait for Existence"),(0,n.kt)("p",null,"Wait for a specified number of game objects, of a specific type, to exist or not exist."),(0,n.kt)("h3",{id:"wait-for-state"},"Wait for State"),(0,n.kt)("p",null,"Wait for a specified number of game objects, of a specific type, to have state values that match a comparison. This comparison can either be a manually input value, or a stored value from a previous step."),(0,n.kt)("h3",{id:"store-value"},"Store Value"),(0,n.kt)("p",null,"Store a game object's state value to be used in later steps. Note that the value and entity must be present when this\nstep is executed, so be sure to place this step after a step that asserts the existence of the entity."))}p.isMDXComponent=!0}}]);