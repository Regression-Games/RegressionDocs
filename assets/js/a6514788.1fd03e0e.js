"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[1596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,p=h["".concat(l,".").concat(m)]||h[m]||u[m]||i;return n?o.createElement(p,r(r({ref:t},d),{},{components:n})):o.createElement(p,r({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_label:"Getting Started"},r="Getting Started with Automated UI Testing",s={unversionedId:"unused-content/automated-testing/getting-started",id:"unused-content/automated-testing/getting-started",title:"Getting Started with Automated UI Testing",description:"The Automated UI Testing package is currently a preview and we're looking for your feedback!",source:"@site/docs/unused-content/automated-testing/getting-started.mdx",sourceDirName:"unused-content/automated-testing",slug:"/unused-content/automated-testing/getting-started",permalink:"/unused-content/automated-testing/getting-started",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Getting Started"}},l={},c=[{value:"A sample game to start with",id:"a-sample-game-to-start-with",level:2},{value:"Installing the package",id:"installing-the-package",level:2},{value:"Adding the Automation Controller and components to your scene",id:"adding-the-automation-controller-and-components-to-your-scene",level:2},{value:"Adding Entity Discoverers to your scene",id:"adding-entity-discoverers-to-your-scene",level:2},{value:"Adding the Overlay UI",id:"adding-the-overlay-ui",level:2},{value:"Running the Monkey Bot",id:"running-the-monkey-bot",level:2},{value:"Viewing recordings",id:"viewing-recordings",level:2},{value:"Next steps",id:"next-steps",level:2}],d={toc:c},h="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(h,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-automated-ui-testing"},"Getting Started with Automated UI Testing"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The Automated UI Testing package is currently a preview and we're looking for your feedback!\nPlease submit feedback using our ",(0,a.kt)("a",{parentName:"p",href:"https://d7y6yysps34.typeform.com/to/o8U6FGtO"},"feedback form"),"."),(0,a.kt)("p",{parentName:"admonition"},"Also, ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/925SYVse2H"},"join our Discord")," to share your creations and get help from the community.")),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/vBXAg-pGuT8?si=Lvt78i6VwG706DFN",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("p",null,'This quick walkthrough will teach you how integrate the Regression Games Automated Testing package into your game and leverage a built-in bot to perform Monkey Testing. Monkey Testing is a strategy where a user randomly interacts with UI elements to uncover potential edge-cases. The built-in "Monkey Bot" will allow you to do some basic UI hardening to ensure your game doesn\'t crash or behave unexpectedly when a user clicks on random UI elements.'),(0,a.kt)("h2",{id:"a-sample-game-to-start-with"},"A sample game to start with"),(0,a.kt)("p",null,"If you have a game you want to automate, you can skip this step.\nBut if you just want to check the package out and don't have an active game project,\nwe recommend using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop"},"Boss Room Co-Op Sample Project")," from Unity."),(0,a.kt)("p",null,"Once downloaded, open the project in Unity.\nNavigate to the ",(0,a.kt)("strong",{parentName:"p"},"Scenes")," folder in the Project window and open the ",(0,a.kt)("strong",{parentName:"p"},"MainMenu")," scene.\nUse this scene for the rest of the tutorial."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The Unity Project panel showing the &quot;MainMenu&quot; scene in the Boss Room sample.",src:n(8548).Z,width:"1924",height:"608"})),(0,a.kt)("h2",{id:"installing-the-package"},"Installing the package"),(0,a.kt)("p",null,"Our package is available at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Regression-Games/RegressionGames.Unity.Testing"},"https://github.com/Regression-Games/RegressionGames.Unity.Testing"),".\nImport it into your game by clicking ",(0,a.kt)("strong",{parentName:"p"},"Window > Package Manager")," in the Unity menu,\nand then clicking the ",(0,a.kt)("strong",{parentName:"p"},"+")," button in the top left corner of the Package Manager window.\nSelect ",(0,a.kt)("strong",{parentName:"p"},"Add package from git URL")," and paste in the following URL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://github.com/Regression-Games/RegressionGames.Unity.Testing.git?path=src/gg.regression.unity.testing#v0.1.0\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The package uses ",(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Manual/com.unity.textmeshpro.html"},"TextMeshPro")," to provide UI elements. If you are prompted by Unity to add TextMeshPro assets to your project, please add them."),(0,a.kt)("li",{parentName:"ul"},"The package uses ",(0,a.kt)("a",{parentName:"li",href:"https://docs.unity3d.com/Packages/com.unity.nuget.newtonsoft-json@3.1/manual/index.html"},"Newtonsoft Json")," to serialize state for recordings."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The Unity Package Manager dialog with the &quot;Add package from git URL&quot; option selected.",src:n(7557).Z,width:"668",height:"262"})),(0,a.kt)("h2",{id:"adding-the-automation-controller-and-components-to-your-scene"},"Adding the Automation Controller and components to your scene"),(0,a.kt)("p",null,"Once the package is installed, add an Automation Controller to the scene you wish to automate.\nThe Automation Controller is the hub for all automation in a scene.\nBots are spawned as children of the Automation Controller,\nand Entity Discoverers (see below) must be added as children of the Automation Controller to allow it to identify and interact with your GameObjects.\nThe Controller also provides APIs for spawning bots and managing recordings (via a separate, Automation Recorder component attached to the same object)."),(0,a.kt)("p",null,"To add the Automation Controller to your scene, go to Unity's main menu bar and click ",(0,a.kt)("strong",{parentName:"p"},"GameObject > Regression Games > Automation Controller"),". In the BossRoom sample, we recommend adding the controller to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Assets/Scenes/MainMenu.unity")," scene."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The &quot;Automation Controller&quot; option in the Regression Games submenu of the GameObject menu",src:n(1404).Z,width:"744",height:"700"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"By default"),", the Automation Controller and all its children will mark themselves as ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/Object.DontDestroyOnLoad.html"},(0,a.kt)("inlineCode",{parentName:"a"},"DontDestroyOnLoad")),'. This ensures that bots continue to run when you load a new scene in your game. You can disable this behavior by unchecking the "Don\'t Destroy On Load" checkbox on the Automation Controller component.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The Automation Controller component with the &quot;Don&#39;t Destroy On Load&quot; checkbox checked",src:n(1142).Z,width:"708",height:"154"})),(0,a.kt)("h2",{id:"adding-entity-discoverers-to-your-scene"},"Adding Entity Discoverers to your scene"),(0,a.kt)("p",null,"In order to automate entities in your game, the Automation Controller needs to be able to find them.\nThe Automation Controller uses Entity Discoverers to find entities in the scene that can be interacted with.\nThe package provides a few built-in Entity Discoverers, but you can also create your own.\nTo add one of the built-in discoverers, go to the Unity main menu and open the ",(0,a.kt)("strong",{parentName:"p"},"GameObject > Regression Games > Discovery")," menu. Then, select the discoverer you want to add:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The &quot;UI Element Discoverer&quot; option in the Regression Games submenu of the GameObject menu",src:n(5079).Z,width:"1484",height:"1226"})),(0,a.kt)("p",null,"As long as you have an Automation Controller in your scene, the Entity Discoverer will ",(0,a.kt)("strong",{parentName:"p"},"automatically")," be added as a child of the Automation Controller, no matter what object is selected in the Hierarchy window."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The Unity Hierarchy view showing the &quot;UI Element Discoverer&quot; object as a child of the &quot;Automation Controller&quot;",src:n(7899).Z,width:"468",height:"202"})),(0,a.kt)("p",null,'For this example, we recommend adding the "UI Element Discoverer", which will find all the UI elements in your scene.\nElements will provide various states that can be recorded, such as the opacity and interactability of a Canvas Group.\nSome elements provide actions that the bot can take, such as clicking on a Button.'),(0,a.kt)("h2",{id:"adding-the-overlay-ui"},"Adding the Overlay UI"),(0,a.kt)("p",null,"For simple scenarios, we provide a UI Overlay that can be used to spawn bots in the scene.\nThis allows you to quickly try out automations without having to write code to manage the bots.\nTo add the Overlay UI, go to the Unity main menu and open the ",(0,a.kt)("strong",{parentName:"p"},"GameObject > Regression Games"),". Click ",(0,a.kt)("strong",{parentName:"p"},"UI Overlay")," to add the UI Overlay to your scene. It does ",(0,a.kt)("strong",{parentName:"p"},"not")," need to be a child of the automation controller, you can place it anywhere in your scene."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The Overlay UI running in the Boss Room sample",src:n(2040).Z,width:"1880",height:"1100"})),(0,a.kt)("p",null,'The UI Overlay provides a small button in the bottom-right corner of the game.\nWhen clicked, this button will open a dialog that shows you a list of available bots that can be spawned.\nYou can customize which bots appear in this list using the "Available Bots" property on the UI Overlay component.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The &quot;Available Bots&quot; property on the UI Overlay component",src:n(5795).Z,width:"792",height:"254"})),(0,a.kt)("p",null,'The UI Overlay includes the built-in "Monkey Bot", which is a bot that randomly clicks on UI elements in your game and records a screenshot of the game after each click.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"By default"),", the Overlay UI will mark itself as ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/ScriptReference/Object.DontDestroyOnLoad.html"},"DontDestroyOnLoad"),'. This allows you to retain control over starting and stopping bots when you load a new scene in your game. You can disable this behavior by unchecking the "Don\'t Destroy On Load" checkbox on the Overlay UI component.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The Automation Controller component with the &quot;Don&#39;t Destroy On Load&quot; checkbox checked",src:n(1142).Z,width:"708",height:"154"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Save the scene before continuing to run the bot.")),(0,a.kt)("h2",{id:"running-the-monkey-bot"},"Running the Monkey Bot"),(0,a.kt)("p",null,"Now that you have the Automation Controller, UI Element Discoverer, and Overlay UI in your scene, you can run an example with the Monkey Bot."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Play")," button in the Unity Editor to start the game."),(0,a.kt)("li",{parentName:"ol"},"Click the button in the bottom-right corner of the game to open the Overlay UI."),(0,a.kt)("li",{parentName:"ol"},'Choose the "Monkey Bot" from the list of available bots and click ',(0,a.kt)("strong",{parentName:"li"},"Start Bot"),"."),(0,a.kt)("li",{parentName:"ol"},"The overlay will close and you'll see the Monkey Bot activating UI elements randomly in your game."),(0,a.kt)("li",{parentName:"ol"},"After a few seconds, open the overlay again and click ",(0,a.kt)("strong",{parentName:"li"},"Stop")," next to the Monkey Bot.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"An animated recording of a user spawning the Monkey Bot, which begins clicking on buttons.",src:n(8154).Z,width:"640",height:"353"})),(0,a.kt)("h2",{id:"viewing-recordings"},"Viewing recordings"),(0,a.kt)("p",null,'Whenever you spawn a bot using the Overlay UI, a recording is automatically started.\nWhen that bot stops, the recording is automatically stopped.\nYou can view the recordings by clicking on the "Automation Controller" object in the Hierarchy window.\nOn the inspector, find the "Automation Recorder" component and click the ',(0,a.kt)("strong",{parentName:"p"},"View Recordings...")," button.\nThe directory in which the recordings are stored will open in your file explorer."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The Automation Recorder component with the &quot;View Recordings...&quot; button",src:n(193).Z,width:"822",height:"178"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The macOS Finder showing the directory containing the recordings",src:n(1559).Z,width:"1616",height:"264"})),(0,a.kt)("p",null,"Each recording is an ",(0,a.kt)("inlineCode",{parentName:"p"},".rgrec.zip")," file.\nInside these ZIP files are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"recording.json")," file which contains global metadata about the recording (when it was made, who made it, etc.)"),(0,a.kt)("li",{parentName:"ol"},"A series of ",(0,a.kt)("inlineCode",{parentName:"li"},"snapshot.[frameNumber].json")," files that contain all the state captured for each frame of the recording. Frames with no state changes are not included in the recording, so if a given frame ",(0,a.kt)("inlineCode",{parentName:"li"},"N")," is missing, it means that the state of the game did not change between frames ",(0,a.kt)("inlineCode",{parentName:"li"},"N-1")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"N"),"."),(0,a.kt)("li",{parentName:"ol"},"A series of ",(0,a.kt)("inlineCode",{parentName:"li"},"screenshot.[frameNumber].png")," files that contain a screenshot of the game for each frame that a screenshot was requested. Bots, and your game code, can use an API on the Automation Controller to request a screenshot at any time. For example, the Monkey Bot requests a screenshot for the frame immediately after it clicks on a UI element.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The macOS Finder showing the contents of a recording",src:n(1661).Z,width:"1630",height:"832"})),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"From here, you can give the ",(0,a.kt)("a",{parentName:"p",href:"./gpt-assistant-bot"},"GPT Assistant Bot")," a try and go beyond random automation!"))}u.isMDXComponent=!0},1142:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ac-dont-destroy-on-load-d78b836a6d5ac30d9fd7054d94f62c3f.png"},1404:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-automation-controller-menu-f466f502f08fdd4f6307aa905480463b.png"},7557:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-package-from-git-709ceab243ea4d1e41387fb7ccb30df8.png"},5079:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-uielement-discoverer-78cba3ebb0e5e3755affb985a7930304.png"},8548:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/bossroom-mainmenu-scene-a20094b567f4fc1f918ea00bdcf085e7.png"},5795:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/overlay-available-bots-83ceec5b0829391c5ad22810b58f1803.png"},2040:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/overlay-menu-fbb26d0fd44ce5a29bd4d9fd114c00ba.png"},1661:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/recording-content-in-finder-9c28664c7180af7ae3ca4a807e22d296.png"},8154:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/recording-monkey-bot-1ac1808878c199b1fd32440f169de328.gif"},1559:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/recordings-in-finder-eb9230343d09ad47945e26f39a451fea.png"},7899:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ui-element-discoverer-in-scene-6be0038a3a77cf94c49812c3016c5811.png"},193:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/view-recordings-button-b34f697cbf0dec407858cf9fd5f506e1.png"}}]);