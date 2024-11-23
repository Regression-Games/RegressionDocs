"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[8622],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,m=d["".concat(p,".").concat(u)]||d[u]||g[u]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),r=n(8523),i=n(2370);const s={sidebar_label:"Installing Regression Games"},p="Installing Regression Games",l={unversionedId:"getting-started/installing-regression-games",id:"getting-started/installing-regression-games",title:"Installing Regression Games",description:"This guide covers everything you need to add the Regression Games SDK to your Unity project and start exploring its features.",source:"@site/docs/getting-started/installing-regression-games.mdx",sourceDirName:"getting-started",slug:"/getting-started/installing-regression-games",permalink:"/getting-started/installing-regression-games",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Installing Regression Games"},sidebar:"unitySidebar",previous:{title:"What is Regression Games?",permalink:"/what-is-regression-games"},next:{title:"Creating Your First Automated Test",permalink:"/getting-started/creating-your-first-automated-test"}},c={},d=[{value:"Add the Regression Games SDK to Your Project",id:"add-the-regression-games-sdk-to-your-project",level:2},{value:"Add Extension Packages to Your Project",id:"add-extension-packages-to-your-project",level:2},{value:"Animation Rigging Extension",id:"animation-rigging-extension",level:3},{value:"Entity Component System (ECS) Extension",id:"entity-component-system-ecs-extension",level:3},{value:"Set an API Key",id:"set-an-api-key",level:2},{value:"Restart Unity",id:"restart-unity",level:2},{value:"Add the Regression Games Overlay to Your Scene",id:"add-the-regression-games-overlay-to-your-scene",level:2},{value:"Next Steps",id:"next-steps",level:2}],g={toc:d},u="wrapper";function m(e){let{components:t,...s}=e;return(0,o.kt)(u,(0,a.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-regression-games"},"Installing Regression Games"),(0,o.kt)("p",null,"This guide covers everything you need to add the Regression Games SDK to your Unity project and start exploring its features."),(0,o.kt)("h2",{id:"add-the-regression-games-sdk-to-your-project"},"Add the Regression Games SDK to Your Project"),(0,o.kt)("p",null,"Our core package is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Regression-Games/RGUnityBots"},"publicly available on GitHub"),".\nOpen your Unity project and navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"Window")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Package Manager"),". From here, find the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add package from git URL")," option and paste the following URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://github.com/Regression-Games/RGUnityBots.git?path=src/gg.regression.unity.bots#v0.0.30\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"This package utilizes TextMeshPro. If you are prompted by Unity to add TextMeshPro assets to your project, please add them."),(0,o.kt)("li",{parentName:"ul"},"This package installs the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.nuget.newtonsoft-json@3.1/manual/index.html"},"Newtonsoft Json")," dependency for serializing/deserializing Json message payloads."),(0,o.kt)("li",{parentName:"ul"},"If you get a note about Unity's new input system, click ",(0,o.kt)("strong",{parentName:"li"},"Yes")," and allow the editor to restart (this will allow the new input system to be enabled)."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add the Regression Games core SDK to your Unity project",src:n(7644).Z,width:"1084",height:"568"})),(0,o.kt)("h2",{id:"add-extension-packages-to-your-project"},"Add Extension Packages to Your Project"),(0,o.kt)("p",null,"We provide the following extensions for our core SDK to support common project dependencies.\nEach of these can be added to your project using a git url, similar to core package installation."),(0,o.kt)("h3",{id:"animation-rigging-extension"},"Animation Rigging Extension"),(0,o.kt)("p",null,"This extension allows our SDK to capture state data for Animation Rigging components.\nWithout this extension, the core SDK can still capture state data for other components in your project\nbut will have no access to Animation Rigging components."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://github.com/Regression-Games/RGUnityBots?path=src/gg.regression.unity.bots.animation.rigging#v0.0.30\n")),(0,o.kt)("h3",{id:"entity-component-system-ecs-extension"},"Entity Component System (ECS) Extension"),(0,o.kt)("p",null,"This extension is for projects that use Unity's ECS framework.\nIt allows our SDK to capture state data for ECS Entities and their Components.\nWithout this extension, the core SDK can still capture ",(0,o.kt)("inlineCode",{parentName:"p"},"GameObject")," data but will have no access to ECS Entities.\nDepending on your project and its needs, this extension may not be necessary, but we highly recommend including it\nfor full visibility of your game's internal state. This extension can be added to your project\nat any time after installing the core SDK."),(0,o.kt)("p",null,"Capturing Entities and their Component data may negatively impact runtime performance.\nThe amount of data the SDK should capture, or whether this process runs at all, can be adjusted\nthrough the Project Settings to manage performance impact."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://github.com/Regression-Games/RGUnityBots?path=src/gg.regression.unity.bots.ecs#v0.0.30\n")),(0,o.kt)("h2",{id:"set-an-api-key"},"Set an API Key"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To learn more about our API keys, see the ",(0,o.kt)("a",{parentName:"p",href:"../core-concepts/authenticating-with-api-keys"},"Authenticating with API Keys")," section.")),(0,o.kt)("p",null,"Create a personal account through ",(0,o.kt)("a",{parentName:"p",href:"https://play.regression.gg/signup"},"the Regression Games website"),".\nThis step is simple, and will give you access to many\nfeatures such as saving ",(0,o.kt)("a",{parentName:"p",href:"../core-concepts/gameplay-sessions"},"Gameplay Sessions"),"\nand creating powerful ",(0,o.kt)("a",{parentName:"p",href:"../core-concepts/validation-suites"},"Validation Suites"),".\nOnce you are logged in, you can find the ",(0,o.kt)("strong",{parentName:"p"},"API Keys")," section near the bottom of your ",(0,o.kt)("a",{parentName:"p",href:"https://play.regression.gg/account"},"account settings"),"."),(0,o.kt)(r.ZP,{mdxType:"CreateAPIKey"}),(0,o.kt)(i.ZP,{mdxType:"SetAPIKeyInUnity"}),(0,o.kt)("h2",{id:"restart-unity"},"Restart Unity"),(0,o.kt)("p",null,"Now is a good time to restart Unity and any code editor you may have open (e.g. Rider or Visual Studio).\nWithout this step, Unity and your code editor may not properly resolve your new packages even after Unity recompiles the scripts."),(0,o.kt)("h2",{id:"add-the-regression-games-overlay-to-your-scene"},"Add the Regression Games Overlay to Your Scene"),(0,o.kt)("p",null,"Our core package provides an in-game overlay that acts as a UI for features such as performing\n",(0,o.kt)("a",{parentName:"p",href:"../core-concepts/recording-gameplay"},"input recording and playback"),"\nand constructing and running ",(0,o.kt)("a",{parentName:"p",href:"../core-concepts/bot-sequences/getting-started-with-bot-sequences-and-segments"},"Bot Sequences"),".\nIt also drives our data collection behind-the-scenes.\nThe overlay prefab ",(0,o.kt)("strong",{parentName:"p"},"must")," be present in each scene where you want to use any Regression Games features.\nHowever, you can hide the visibility of the overlay through the project settings under\n",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Project Settings")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Regression Games")," if needed."),(0,o.kt)("p",null,"Find the ",(0,o.kt)("inlineCode",{parentName:"p"},"RGOverlayCanvas")," prefab by navigating to\n",(0,o.kt)("inlineCode",{parentName:"p"},"Packages")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Regression Games Unity Bots")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Runtime")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Prefabs")," and dragging it into your scene's object hierarchy.\nMake sure that the canvas is at the top of the hierarchy, so that it is always visible and interactable.\nRepeat this for each scene that must have access to Regression Games features."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the search pane for the RGOverlayCanvas",src:n(4375).Z,width:"1084",height:"568"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Your scene must have an EventSystem to make interaction with the overlay possible.\nYou can add one by right-clicking in your scene's Hierarchy and selecting ",(0,o.kt)("inlineCode",{parentName:"p"},"GameObject")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"UI")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Event System"),".\nIf you are using any of the sample scenes we provide in our guides, this is already included.")),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"The Regression Games SDK is now set up and ready to be explored.\nContinue reading our quick-start guide on ",(0,o.kt)("a",{parentName:"p",href:"creating-your-first-automated-test"},"Creating You First Automated Test")," or\nhead over to the ",(0,o.kt)("a",{parentName:"p",href:"../guides/writing-advanced-validations"},"Guides")," section for more in-depth walkthroughs and examples of real-world applications."))}m.isMDXComponent=!0},8523:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={toc:[]},i="wrapper";function s(e){let{components:t,...s}=e;return(0,o.kt)(i,(0,a.Z)({},r,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Enter a unique name for your key and then click ",(0,o.kt)("strong",{parentName:"p"},"Generate Key"),".\nAPI keys have an expiration date of 1 year."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to copy the generated key and store it somewhere safe.\nOnce the success dialog is dismissed, you will never be able to see the generated value through the Regression Games web interface again!")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create an API Key",src:n(5705).Z,width:"1041",height:"659"})))}s.isMDXComponent=!0},2370:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={toc:[]},i="wrapper";function s(e){let{components:t,...s}=e;return(0,o.kt)(i,(0,a.Z)({},r,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you just installed our core SDK, or have just opened your project with the SDK already installed,\nthen you may be greeted by a welcome prompt. Click the ",(0,o.kt)("strong",{parentName:"p"},"Set API Key")," button near the bottom of the prompt\nto open the Regression Games settings window. If the welcome prompt isn't visible,\nthen access the settings window by navigating to ",(0,o.kt)("inlineCode",{parentName:"p"},"Regression Games")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Open Settings"),"."),(0,o.kt)("p",null,"Paste your key into the ",(0,o.kt)("strong",{parentName:"p"},"RG API Key")," field, then close the project settings."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Set an API Key in Unity",src:n(2393).Z,width:"1293",height:"838"})))}s.isMDXComponent=!0},5705:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-new-api-key-175e0e77acd4ef2edf53118c5e9df1f0.gif"},2393:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/set-api-key-unity-d53316afdd7f384464901488871da9bf.png"},7644:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/installing-sdk-935e0d98a5c03fa57b5bd51d752b4c20.gif"},4375:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-overlay-to-scene-d2369f9c6ecb17be282b7e6d175c0d32.gif"}}]);