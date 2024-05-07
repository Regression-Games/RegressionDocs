"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[5792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=o,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7889:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={toc:[]},i="wrapper";function s(e){let{components:t,...s}=e;return(0,o.kt)(i,(0,a.Z)({},r,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Find the ",(0,o.kt)("inlineCode",{parentName:"p"},"RGOverlayCanvasV2")," prefab by navigating to ",(0,o.kt)("strong",{parentName:"p"},"Packages")," > ",(0,o.kt)("strong",{parentName:"p"},"Regression Games Unity Bots")," > ",(0,o.kt)("strong",{parentName:"p"},"Runtime")," > ",(0,o.kt)("strong",{parentName:"p"},"Prefabs")," and\ndrag it into your scene's object hierarchy. Make sure that the canvas is at the top of the hierarchy, so that it is always\nvisible and interactable."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Note that this overlay ",(0,o.kt)("strong",{parentName:"p"},"must be present in your scene")," for Regression Games to function. The visibility\nof the overlay can be hidden through the Regression Games settings pane under ",(0,o.kt)("strong",{parentName:"p"},"Edit")," > ",(0,o.kt)("strong",{parentName:"p"},"Project Settings")," >\n",(0,o.kt)("strong",{parentName:"p"},"Regression Games"),". Place this component into each scene that must be able to use Regression Games SDK features.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the search pane for the RGOverlayCanvas.",src:n(2317).Z,width:"1188",height:"650"})))}s.isMDXComponent=!0},7360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),r=n(7889);const i={sidebar_label:"Integrating and Building Your First Bot"},s="Integrating and Building Your First Bot",l={unversionedId:"tutorials/building-your-first-bot",id:"tutorials/building-your-first-bot",title:"Integrating and Building Your First Bot",description:"This tutorial assumes a basic understanding of Unity concepts. If you get stuck, join our Discord and we can help you out!",source:"@site/docs/tutorials/building-your-first-bot.mdx",sourceDirName:"tutorials",slug:"/tutorials/building-your-first-bot",permalink:"/tutorials/building-your-first-bot",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Integrating and Building Your First Bot"},sidebar:"unitySidebar",previous:{title:"Quickstart",permalink:"/quickstart"},next:{title:"Testing with GitHub Actions",permalink:"/tutorials/github-actions"}},p={},c=[{value:"Download the sample game",id:"download-the-sample-game",level:2},{value:"Import the Regression Games Unity Bots package",id:"import-the-regression-games-unity-bots-package",level:2},{value:"Restart Unity and your IDE",id:"restart-unity-and-your-ide",level:2},{value:"Add the RGOverlayCanvas",id:"add-the-rgoverlaycanvas",level:2},{value:"Using a ready-to-go bot from the Bot Marketplace",id:"using-a-ready-to-go-bot-from-the-bot-marketplace",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:c},d="wrapper";function g(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrating-and-building-your-first-bot"},"Integrating and Building Your First Bot"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This tutorial assumes a basic understanding of Unity concepts. If you get stuck, join our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/925SYVse2H"},"Discord")," and we can help you out!")),(0,o.kt)("p",null,"In this tutorial, we will get a simple bot integrated and running in a Unity game. The bot will run to a random position and then\nshoot the enemy in our playground sample. This tutorial will cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How to integrate the RG Unity SDK into your game"),(0,o.kt)("li",{parentName:"ul"},"How to add various state and actions attributes so your bot can understand the game"),(0,o.kt)("li",{parentName:"ul"},"How to use a ready-to-go bot from the Bot Marketplace, and how to modify its code")),(0,o.kt)("div",{style:{position:"relative",paddingBottom:"50.40485829959515%",height:0}},(0,o.kt)("iframe",{src:"https://www.loom.com/embed/c4a31389df6742ba9320bf7dc0e91739?sid=336eaf3b-208c-4ea3-a0b3-c6ad3d2d2cee",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,o.kt)("h2",{id:"download-the-sample-game"},"Download the sample game"),(0,o.kt)("p",null,"Feel free to follow this tutorial within your own game, but we recommend starting with a simple sample game. Clone the project\nfrom the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Regression-Games-Marketplace/SampleDemoScene.git"},"Regression-Games-Marketplace/SampleDemoScene")," GitHub repository."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/Regression-Games-Marketplace/SampleDemoScene.git\n")),(0,o.kt)("p",null,"Open it within Unity version 2021.3.24f1 (visit the ",(0,o.kt)("a",{parentName:"p",href:"https://unity.com/releases/editor/whats-new/2021.3.24"},"Unity archive")," if\nyou can't find that version from Unity Hub). Once the project is loaded, a default scene with bots in a playground should open. If it does not,\nthen find the ",(0,o.kt)("strong",{parentName:"p"},"Playground")," scene under ",(0,o.kt)("strong",{parentName:"p"},"Assets")," > ",(0,o.kt)("strong",{parentName:"p"},"FirstBotDemo")," > ",(0,o.kt)("strong",{parentName:"p"},"Demo")," > ",(0,o.kt)("strong",{parentName:"p"},"Scenes")," and open it manually. If you'd like, you can\nclick play now to see how the characters move."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the playground scene",src:n(1313).Z,width:"1400",height:"936"})),(0,o.kt)("h2",{id:"import-the-regression-games-unity-bots-package"},"Import the Regression Games Unity Bots package"),(0,o.kt)("p",null,"You can find ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Regression-Games/RGUnityBots"},"our package on GitHub"),". Import the package into your Unity project by opening\nthe ",(0,o.kt)("strong",{parentName:"p"},"Package Manager")," window (",(0,o.kt)("strong",{parentName:"p"},"Window")," > ",(0,o.kt)("strong",{parentName:"p"},"Package Manager"),") and click ",(0,o.kt)("strong",{parentName:"p"},"Add package from git URL"),". Then, paste the following URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://github.com/Regression-Games/RGUnityBots.git?path=src/gg.regression.unity.bots\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"This package utilizes TextMeshPro.  If you are prompted by Unity to add TextMeshPro assets to your project, please add them."),(0,o.kt)("li",{parentName:"ul"},"This package installs a dependency of Newtonsoft Json (",(0,o.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.nuget.newtonsoft-json@3.1/manual/index.html"},"https://docs.unity3d.com/Packages/com.unity.nuget.newtonsoft-json@3.1/manual/index.html"),") for serializing/deserializing Json message payloads."),(0,o.kt)("li",{parentName:"ul"},"If you get a note about Unity's new input system, click ",(0,o.kt)("strong",{parentName:"li"},"Yes")," and allow the editor to restart."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the package imported into the project",src:n(4589).Z,width:"3456",height:"2160"})),(0,o.kt)("p",null,"After importing the package, you will be greeted by a login screen. Create an account at\n",(0,o.kt)("a",{parentName:"p",href:"https://play.regression.gg"},"https://play.regression.gg")," and login to Unity with your account credentials. If you need to login again in the future,\nyou can enter your login info by visiting the ",(0,o.kt)("strong",{parentName:"p"},"Edit")," > ",(0,o.kt)("strong",{parentName:"p"},"Project Settings")," > ",(0,o.kt)("strong",{parentName:"p"},"Regression Games")," menu."),(0,o.kt)("h2",{id:"restart-unity-and-your-ide"},"Restart Unity and your IDE"),(0,o.kt)("p",null,"After installing the Regression Games Unity Bots package and its dependencies into Unity, please restart Unity\nand your code editor (e.g. Rider or Visual Studio). Without this step, Unity and your code editor may not properly\nresolve the new packages even after Unity recompiles the scripts."),(0,o.kt)("h2",{id:"add-the-rgoverlaycanvas"},"Add the RGOverlayCanvas"),(0,o.kt)("p",null,"The RGOverlayCanvasV2 prefab provides a drag and drop overlay that lets you easily start and stop bots running\nin your scene. This is useful when initially creating and debugging your bots."),(0,o.kt)(r.ZP,{mdxType:"OverlayPartial"}),(0,o.kt)("p",null,"Once the overlay has been added to your scene(s), you can click play to see it in action!\nClick the Regression Games logo at the bottom of the Scene View to open the overlay."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Your scene must have an EventSystem to make interaction with the overlay possible. You can add one by\nright-clicking in your scene's Hierarchy and selecting ",(0,o.kt)("strong",{parentName:"p"},"GameObject")," > ",(0,o.kt)("strong",{parentName:"p"},"UI")," > ",(0,o.kt)("strong",{parentName:"p"},"Event System"),".\nIf you are using the sample scene we provide, this is already included.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the RGOverlayCanvas.",src:n(7538).Z,width:"2064",height:"1156"})),(0,o.kt)("h2",{id:"using-a-ready-to-go-bot-from-the-bot-marketplace"},"Using a ready-to-go bot from the Bot Marketplace"),(0,o.kt)("p",null,"Now that the SDK integration is complete, our final step is to use an implementation of a bot. We will start with a template\nfound in our ",(0,o.kt)("a",{parentName:"p",href:"https://play.regression.gg/marketplace"},"Bot Marketplace"),", and then will show you where to edit its code."),(0,o.kt)("p",null,"Find the ",(0,o.kt)("a",{parentName:"p",href:"https://play.regression.gg/marketplace/1"},"Simple Kiting Bot in the Bot Marketplace"),' and click "Create Bot" to copy\nit to your Regression Games account. On the bot creation page, give it a name such as "KitingBot", and then click "Create Bot".\nYou will then be taken to the Agent Builder tool; feel free to click around and see how the bot works!'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the bot creation page.",src:n(9515).Z,width:"3430",height:"1902"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the bot creation page.",src:n(5974).Z,width:"2842",height:"1830"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the agent builder configuration for this bot.",src:n(2092).Z,width:"2782",height:"1772"})),(0,o.kt)("p",null,"Go back to Unity, and within the ",(0,o.kt)("strong",{parentName:"p"},"Regression Games")," menu in the menu bar, click ",(0,o.kt)("strong",{parentName:"p"},"Synchronize Bots with RG"),". This will pull your new\nbot into your Unity project. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the agent builder configuration for this bot.",src:n(9013).Z,width:"1514",height:"616"})),(0,o.kt)("p",null,'At this point, you can click play, and then select the Regression Games overlay button in the bottom\nright of your Scene View. Use the dropdown to select the bot you just created, and then click "Start Bot". The bot will begin to\nrun around and shoot the enemy!'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the bot creation page.",src:n(9347).Z,width:"1886",height:"1194"})),(0,o.kt)("p",null,"You now have a working bot, fully integrated into your game! If you want to modify the bot's behavior, you can make edits\nwithin the Agent Builder, or edit the code in your Unity project at ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets/RegressionGames/Runtime/Bots/BOTNAME/Nodes"),"."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"Congratulations, you've now experienced the integration process for bots! Using this guide and our reference material,\nyou can now integrate bots into your own game. If you have any questions, please reach out to us on our\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/925SYVse2H"},"Discord"),". Please note that we offer ",(0,o.kt)("strong",{parentName:"p"},"dedicated support")," for your integration.\nWe are happy to work directly on your project with you, or walk you step-by-step through the integration process over a\ncall."),(0,o.kt)("p",null,"The following guides and references are great next steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check out the ",(0,o.kt)("a",{parentName:"li",href:"https://play.regression.gg/marketplace"},"bot marketplace")," to see what bots are available for your game"),(0,o.kt)("li",{parentName:"ul"},"Learn how to build your own bot using the ",(0,o.kt)("a",{parentName:"li",href:"/creating-bots/csharp/agent-builder"},"Agent Builder")),(0,o.kt)("li",{parentName:"ul"},"Learn how to setup a ",(0,o.kt)("a",{parentName:"li",href:"/session-insights/client-dashboard"},"QA / validation testing bot")),(0,o.kt)("li",{parentName:"ul"},"Learn how to get your bot up and running in a ",(0,o.kt)("a",{parentName:"li",href:"/tutorials/github-actions"},"CI/CD environment such as GitHub Actions"))))}g.isMDXComponent=!0},2317:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/overlay_4-445ff54ff8258cac6b27cddcec1edd7d.png"},7538:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/overlay_5-72b76fcaad439577405bf97b373111bf.png"},2092:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/agent_builder-99b416f91e669455bb03624f3d0cc5a2.png"},5974:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_bot_9-4be230996422d40fff0e8d2e4b998698.png"},9515:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/marketplace_bot-a326f584824cac29f3a07f91ad4dd490.png"},1313:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/start_0-c25b262d0a348406db0dde3d6bfc2ab4.png"},9347:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/start_bot_10-9a3983cc73b6a2f6c134dc4826bc2e05.png"},9013:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/synchronize_bots-f16fa1f653a60730f36b535b4b8e89ec.png"},4589:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/welcome_3-bbd5b9fb049a87d0719c924bf62625ce.png"}}]);