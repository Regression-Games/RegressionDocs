"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[2855],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),b=o,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||n;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},7738:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_label:"Pre-Made Bots"},i="Bot Marketplace",l={unversionedId:"pre-made-bots",id:"pre-made-bots",title:"Bot Marketplace",description:"The Bot Marketplace is your one-stop-shop for ready-to-go bots. The Regression Games SDK allows you to build bots for",source:"@site/docs/pre-made-bots.mdx",sourceDirName:".",slug:"/pre-made-bots",permalink:"/pre-made-bots",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Pre-Made Bots"},sidebar:"unitySidebar",previous:{title:"Scenario Testing",permalink:"/creating-bots/csharp/scenario-testing"},next:{title:"Client Dashboard",permalink:"/session-insights/client-dashboard"}},s={},c=[{value:"Learn About the Bots in the Marketplace",id:"learn-about-the-bots-in-the-marketplace",level:2},{value:"Creating a Bot from a Marketplace Bot",id:"creating-a-bot-from-a-marketplace-bot",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bot-marketplace"},"Bot Marketplace"),(0,o.kt)("p",null,"The Bot Marketplace is your one-stop-shop for ready-to-go bots. The Regression Games SDK allows you to build bots for\nmany different use-cases, such as quality assurance (QA), game balancing, competitive bots, NPCs, and more. Choose bots\nfrom the Marketplace to apply to your game, and extend them to suit your games' unique needs. Bots are available for a\nrange of genres, and for both single-player and multiplayer environments."),(0,o.kt)("p",null,"To visit the Marketplace, visit our site ",(0,o.kt)("a",{parentName:"p",href:"https://play.regression.gg/marketplace"},"here"),' or click on the "Marketplace" tab\non the site.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Marketplace overview",src:r(9626).Z,width:"3340",height:"1110"})),(0,o.kt)("h2",{id:"learn-about-the-bots-in-the-marketplace"},"Learn About the Bots in the Marketplace"),(0,o.kt)("p",null,"Click on a bot within the Marketplace to learn more about how this bot works. Every ready-to-go bot includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A video demonstrating how the bot works and how to integrate it into your game"),(0,o.kt)("li",{parentName:"ul"},"A link to the source code for the bot"),(0,o.kt)("li",{parentName:"ul"},"A link to a sample game that uses the bot"),(0,o.kt)("li",{parentName:"ul"},"Documentation on how to integrate the bot into your game"),(0,o.kt)("li",{parentName:"ul"},"A button to create your own bot from this existing bot")),(0,o.kt)("p",null,'Once you are ready to use the bot, click "Create Bot".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Marketplace details",src:r(6546).Z,width:"3344",height:"1750"})),(0,o.kt)("h2",{id:"creating-a-bot-from-a-marketplace-bot"},"Creating a Bot from a Marketplace Bot"),(0,o.kt)("p",null,'Once you click "Create Bot", you will see the Bot Creation page, with everything preloaded for your bot\ndetails. Fill out a desired name for your bot, and click create. Once on the Bot Manager page, you will see that your bot\nentry has a reference to the bot it was created it from, so you can always go back and reference the documentation. '),(0,o.kt)("p",null,"From your bot details, you can always download and upload the bot code via a zip file."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create a new bot",src:r(4087).Z,width:"3342",height:"1632"}),"\n",(0,o.kt)("img",{alt:"View the new bot",src:r(7874).Z,width:"2388",height:"1048"})))}d.isMDXComponent=!0},4087:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-bot-18631985af30fd71d2a48b1df00ec8fa.png"},6546:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/detail-e9ff6916468ded6d0802d8b1b4a1cc14.png"},7874:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/new-bot-f0c09d679aefdf1bb70ffc964ed6e016.png"},9626:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/overview-11c545e9d9cf717e200d7589358df369.png"}}]);