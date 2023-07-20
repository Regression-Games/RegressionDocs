"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[7153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Overview"},i="Regression Games for Unity",s={unversionedId:"studios/unity/unity-sdk/overview",id:"studios/unity/unity-sdk/overview",title:"Regression Games for Unity",description:"Regression Games is developing a platform where studios can build and deploy bots for a variety of use cases in minutes. We are designing for scale (deploy thousands of bots), ease of use (e.g. generative AI to build bots), ease of integration (minimal impact on game development time), and feature richness (e.g. A/B bot test for engagement).",source:"@site/docs/studios/unity/unity-sdk/overview.md",sourceDirName:"studios/unity/unity-sdk",slug:"/studios/unity/unity-sdk/overview",permalink:"/docs/studios/unity/unity-sdk/overview",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Overview"},sidebar:"studiosSidebar",next:{title:"Overview",permalink:"/docs/studios/unity/unity-sdk/overview"}},l={},u=[{value:"Current Stage of the Product",id:"current-stage-of-the-product",level:2},{value:"Availability Assurances",id:"availability-assurances",level:2},{value:"Implemented Features",id:"implemented-features",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"regression-games-for-unity"},"Regression Games for Unity"),(0,r.kt)("p",null,"Regression Games is developing a platform where studios can ",(0,r.kt)("strong",{parentName:"p"},"build and deploy bots for a variety of use cases in minutes.")," We are designing for scale (deploy thousands of bots), ease of use (e.g. generative AI to build bots), ease of integration (minimal impact on game development time), and feature richness (e.g. A/B bot test for engagement)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"vision",src:n(9735).Z,width:"2000",height:"700"})),(0,r.kt)("h2",{id:"current-stage-of-the-product"},"Current Stage of the Product"),(0,r.kt)("p",null,"This product is currently a ",(0,r.kt)("strong",{parentName:"p"},"release preview"),". We are actively talking with studios and game developers to discover the best features and use cases to tackle, and we're making changes frequently. That being said, we do have\na set of initial features and documentation that you can try now - we would absolutely love to get your ",(0,r.kt)("a",{parentName:"p",href:"https://regression-games.sleekplan.app/feedback"},"feedback"),"."),(0,r.kt)("p",null,"The team has focused on the foundation of supporting use cases and initial infrastructure to get bots to connect to Unity. The bulk\nof our value will come from the interfaces to build bots, the scale of our infrastructure, the speed of integration, and the products\nbuilt around these bots."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"timeline feature",src:n(8750).Z,width:"2636",height:"2058"})),(0,r.kt)("h2",{id:"availability-assurances"},"Availability Assurances"),(0,r.kt)("p",null,"The Regression Games team offers the following assurances for our initial testing with developers. Additionally, we have a dedicated Discord server for support, and can also create a Slack Connect channel, giving you direct access to our entire team. For access to\nthese channels, send an email to ",(0,r.kt)("a",{parentName:"p",href:"mailto:aaron@regression.gg"},"aaron@regression.gg"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A single account can run at least 10 bots concurrently"),(0,r.kt)("li",{parentName:"ul"},"The time from requesting a bot to be started to the time it connects to Unity will take less than 10 seconds if the bot is relying on dependencies that are common to most bots. This does not cover bots that may have lots of library dependencies, which may take longer.")),(0,r.kt)("h2",{id:"implemented-features"},"Implemented Features"),(0,r.kt)("p",null,"The table below details and links to documentation for the features implemented on our platform. You can provide feedback on these\nfeatures on our ",(0,r.kt)("a",{parentName:"p",href:"https://regression-games.sleekplan.app/feedback"},"feedback site"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Feature")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Documentation")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unity Integration"),(0,r.kt)("td",{parentName:"tr",align:null},"A set of scripts and interfaces are provided to easily send state and actions between bots and your game objects"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./RGBotSpawnManager"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Timeline/Replay"),(0,r.kt)("td",{parentName:"tr",align:null},"All bot actions and states are preserved, with a timeline/replay feature available within Unity"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./in-editor-replay"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JavaScript SDK"),(0,r.kt)("td",{parentName:"tr",align:null},"A JavaScript SDK for implementing bots"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./creating-bots/configuration"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Live Reloading"),(0,r.kt)("td",{parentName:"tr",align:null},"Reload bots almost instantly without rebuilding your game, managed via GitHub"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Docs coming soon"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bot Code Generation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Only available in Minecraft, see proposals"),". Create bots with low-code tools such as behavior trees powered by GPT."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../../../players/creating-bots/agent-builder"},"Link"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Platform and Language Agnostic"),(0,r.kt)("td",{parentName:"tr",align:null},"Our protocol permits bots to eventually be written in multiple engines and languages. Vote for support in the feedback link above."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"Docs coming soon"))))))}c.isMDXComponent=!0},8750:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/timeline-6aa7e114768fc3f9b776ae9af1d4cfa9.png"},9735:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vision-b3e04de61e7311b6c82aea1140042c36.png"}}]);