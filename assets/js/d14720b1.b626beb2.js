"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[1317],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return r?o.createElement(g,s(s({ref:t},p),{},{components:r})):o.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:n,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6818:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_label:"Cloning a Starter Template"},s="Overview",a={unversionedId:"players/creating-bots/starter-templates",id:"players/creating-bots/starter-templates",title:"Overview",description:"Regression Games offers multiple tools for creating and developing AIs - from block-style programming interfaces",source:"@site/docs/players/creating-bots/starter-templates.mdx",sourceDirName:"players/creating-bots",slug:"/players/creating-bots/starter-templates",permalink:"/RegressionDocs/players/creating-bots/starter-templates",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Cloning a Starter Template"},sidebar:"playersSidebar",previous:{title:"Hunting for Points",permalink:"/RegressionDocs/players/supported-games/minecraft/tutorials/hunter-bot"},next:{title:"Using the Blockly Editor",permalink:"/RegressionDocs/players/creating-bots/blockly"}},l={},c=[{value:"GitHub",id:"github",level:2},{value:"Creating a New AI",id:"creating-a-new-ai",level:2},{value:"Creating a GitHub Repository",id:"creating-a-github-repository",level:3},{value:"Granting Access to Repository Contents",id:"granting-access-to-repository-contents",level:3},{value:"Finish Setup",id:"finish-setup",level:3},{value:"Next Steps",id:"next-steps",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Regression Games offers multiple tools for creating and developing AIs - from block-style programming interfaces\nto flexible code libraries that allow programmers of any skill-level to bring their imaginations to (virtual) life.\nOur various creation options generally start you out with a template to provide the basic project structure so you can focus on your AI strategy instead of the setup.\nThis section will walk you through the process of creating a new AI by copying a starter template from GitHub."),(0,n.kt)("h2",{id:"github"},"GitHub"),(0,n.kt)("p",null,"Regression Games uses ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub")," to save, load, and version your AIs.\nOur platform detects changes to your AI as soon as you push them to GitHub, which allows your AI to refresh itself and display new behaviors in real-time.\nThe majority of our development tools rely on access to GitHub and therefore will be unavailable to users without a valid account linked to Regression Games."),(0,n.kt)("p",null,"However, we do offer alternatives to users who prefer not to use GitHub such as ",(0,n.kt)("a",{parentName:"p",href:"./coding/upload-zip"},"uploading your AI as a ZIP file"),".\nFor this method, you can skip right to our sections on ",(0,n.kt)("a",{parentName:"p",href:"./coding/dev-requirements#developing-ais-without-git"},"writing your own AI code")," and ",(0,n.kt)("a",{parentName:"p",href:"./coding/upload-zip"},"uploading it to our platform"),"."),(0,n.kt)("h2",{id:"creating-a-new-ai"},"Creating a New AI"),(0,n.kt)("h3",{id:"creating-a-github-repository"},"Creating a GitHub Repository"),(0,n.kt)("p",null,"AIs are created and managed within the ",(0,n.kt)("a",{parentName:"p",href:"https://play.regression.gg/bots"},"Bot Manager"),'. Click the "Create Bot" button and select one of our several creation options.\nFor the purpose of this demonstration, we\'ll keep the default option selected, but the process will be nearly identical for most options in this list.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create new AI",src:r(6741).Z,width:"2942",height:"880"}),"\n",(0,n.kt)("img",{alt:"Select Creation Option",src:r(9009).Z,width:"1546",height:"986"})),(0,n.kt)("p",null,"When you confirm your selection, Regression Games will open a new tab in your browser and redirect you to GitHub to create a new repository.\nThis repository will represent the AI you're about to create, and Regression Games will access this repository whenever you queue your new AI for a match.\nGive it a name, continue, and wait for GitHub to finish creating it."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Clone Template",src:r(4858).Z,width:"1546",height:"986"})),(0,n.kt)("h3",{id:"granting-access-to-repository-contents"},"Granting Access to Repository Contents"),(0,n.kt)("p",null,"Regression Games values the security and comfort of our users.\nWe can see which repositories you have access to, but we can't read contents from or write contents to any repositories under your GitHub account by default.\nInstead, you'll need to tell us which ones we're allowed to access.\nTo do this, return to the Regression Games tab in your browser and follow the green link under \"Git Settings\".\nThis will take you back to GitHub to authorize the Regression Games app on your GitHub Account."),(0,n.kt)("p",null,'If you don\'t want to repeat this step for every AI you create, you can select the "All repositories" option.\nIf you want to explicitly restrict Regression Games to relevant repositories, then find your new repository under "Only select repositories."\nChoose either of these options then click "Install."'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Grant GitHub Access",src:r(1566).Z,width:"1416",height:"462"}),"\n",(0,n.kt)("img",{alt:"Select GitHub Repositories",src:r(9886).Z,width:"1819",height:"1208"})),(0,n.kt)("h3",{id:"finish-setup"},"Finish Setup"),(0,n.kt)("p",null,'Back in the Regression Games tab in your browser, refresh the repositories list, find your new AI repository, and select it.\nLastly, name your AI - this is the name other players will see in-game. You can also give it an optional description to help identify it from other AIs you\'ll create.\nFinally, click the "Create Bot" button.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Refresh Repositories",src:r(4930).Z,width:"1416",height:"374"}),"\n",(0,n.kt)("img",{alt:"Finish Bot Creation",src:r(4298).Z,width:"2800",height:"1100"})),(0,n.kt)("h3",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"Depending on the type of AI you've created, you'll either be returned to the Bot Manager where you can see a complete list of your AIs,\nor you'll be redirected to a new page to interact with one of our AI development tools.\nContinue through this section to learn about all of our development tools and how to use them, or how to program your AI by hand using our code libraries."))}d.isMDXComponent=!0},9009:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/bot-creation-options-d59e9e9f95ff5b1138207668088b6430.png"},6741:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/create-bot-button-166c7415adc4d1edd3bfd940bea5127b.png"},4298:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/finish-creating-bot-0c6d857bc0edbe6fc112347b6e83e911.png"},4858:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/clone-template-277ac3b8129c21237c7b9df9147e3ef2.png"},1566:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/install-github-app-49732c3da4412af9d89921792650f3d7.png"},4930:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/refresh-repositories-e835030b6168740e5e20eb453eea85da.png"},9886:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/select-repositories-aa6f1bd963283bdbfd4ef4623ee07159.png"}}]);