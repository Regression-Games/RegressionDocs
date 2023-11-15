"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[9158],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=i,y=p["".concat(s,".").concat(u)]||p[u]||h[u]||o;return a?n.createElement(y,r(r({ref:t},c),{},{components:a})):n.createElement(y,r({ref:t},c))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1667:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_label:"Bot Replay"},r="Replaying Bot Behaviors in the Unity Editor",l={unversionedId:"studios/unity/unity-sdk/in-editor-replay",id:"studios/unity/unity-sdk/in-editor-replay",title:"Replaying Bot Behaviors in the Unity Editor",description:"Bots running on Regression Games save all states observed, all actions sent, and all validations performed for each game tick. This data can be loaded in the Unity editor for visualization and playback in the scene. This feature, combined with our validation framework, allows you to find and debug specific errors within your game.",source:"@site/docs/studios/unity/unity-sdk/in-editor-replay.mdx",sourceDirName:"studios/unity/unity-sdk",slug:"/studios/unity/unity-sdk/in-editor-replay",permalink:"/studios/unity/unity-sdk/in-editor-replay",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Bot Replay"},sidebar:"studiosSidebar",previous:{title:"Agent Builder",permalink:"/studios/unity/unity-sdk/creating-bots/javascript/agent-builder"},next:{title:"Quickstart - Sample Scene and Bot",permalink:"/studios/unity/tutorials/quickstart_sample_scene"}},s={},d=[{value:"Downloading Replay Data",id:"downloading-replay-data",level:2},{value:"The Bot Replay Window",id:"the-bot-replay-window",level:2},{value:"Opening The Bot Replay Window",id:"opening-the-bot-replay-window",level:3},{value:"Loading Your Scene",id:"loading-your-scene",level:3},{value:"Loading Replay Data",id:"loading-replay-data",level:3},{value:"Tick Inspector: Controlling The Current Tick",id:"tick-inspector-controlling-the-current-tick",level:3},{value:"Tick Inspector: Evaluating The Current Tick",id:"tick-inspector-evaluating-the-current-tick",level:3},{value:"Tick Inspector: Actions And Validations",id:"tick-inspector-actions-and-validations",level:3},{value:"Actions",id:"actions",level:4},{value:"Validations",id:"validations",level:4},{value:"Registering Custom Models For Replay Objects",id:"registering-custom-models-for-replay-objects",level:3}],c={toc:d},p="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"replaying-bot-behaviors-in-the-unity-editor"},"Replaying Bot Behaviors in the Unity Editor"),(0,i.kt)("p",null,"Bots running on Regression Games save all states observed, all actions sent, and all validations performed for each game tick. This data can be loaded in the Unity editor for visualization and playback in the scene. This feature, combined with our validation framework, allows you to find and debug specific errors within your game."),(0,i.kt)("h2",{id:"downloading-replay-data"},"Downloading Replay Data"),(0,i.kt)("p",null,"At the end of a Bot's lifecycle, the replay data for every game tick processed by that Bot is saved into a single Zip file. This file can be downloaded from the ",(0,i.kt)("inlineCode",{parentName:"p"},"History")," section of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Running Bots")," tab in the Regression Games client. Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Download Replay Data")," button for the Bot instance you want to download. This will download a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"rg_bot_replay_data-<InstanceId>.zip"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"replay data download",src:a(6158).Z,width:"1154",height:"841"})),(0,i.kt)("h2",{id:"the-bot-replay-window"},"The Bot Replay Window"),(0,i.kt)("h3",{id:"opening-the-bot-replay-window"},"Opening The Bot Replay Window"),(0,i.kt)("p",null,"With the Regression Games SDK installed in your Unity Editor Project, you can open the Regression Games ",(0,i.kt)("inlineCode",{parentName:"p"},"Bot Replay Window")," from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Regression Games")," menu in the top bar."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"rg top menu",src:a(9118).Z,width:"796",height:"61"})),(0,i.kt)("h3",{id:"loading-your-scene"},"Loading Your Scene"),(0,i.kt)("p",null,"The Bot Replay Window will render the game replay state in the currently loaded editor scene. For the best experience, make sure your gameplay scene is loaded in the editor so that all fixed scene assets will be visible and line up with the replay data."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This replay process will dynamically create objects within the currently loaded scene."),(0,i.kt)("p",{parentName:"admonition"},"Don't worry !"),(0,i.kt)("p",{parentName:"admonition"},"These objects will automatically be removed when running, saving, or building the scene. You may occassionally be prompted to save the scene because it has been changed. It is safe to save; the Bot replay objects will be removed from the scene before the save processes.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"timeline feature",src:a(6624).Z,width:"2636",height:"2058"})),(0,i.kt)("h3",{id:"loading-replay-data"},"Loading Replay Data"),(0,i.kt)("p",null,"The first step in using the Bot Replay Window is loading a replay data Zip file. Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Bot Replay Zip:")," button in the top left of the window. This will open a file chooser window. Choose the ",(0,i.kt)("inlineCode",{parentName:"p"},"rg_bot_replay_data-<InstanceId>.zip")," file you downloaded from the Regression Games Client."),(0,i.kt)("h3",{id:"tick-inspector-controlling-the-current-tick"},"Tick Inspector: Controlling The Current Tick"),(0,i.kt)("p",null,"After loading the file, the data for game ticks recorded by the Bot will be available for playback. "),(0,i.kt)("p",null,"The tick rate at which the data was recorded is shown, followed by the tick rate for playback. By default, the playback tick rate will match the recorded tick rate, but it can be modified for faster or slower plaback."),(0,i.kt)("p",null,"The current tick and the total tick count are shown next to buttons for controlling the replay. You can Play the replay which will automatically update the editor at the playback tick rate. You can also manually jump to a specific tick number, or manually step forward or back 1 tick at a time."),(0,i.kt)("h3",{id:"tick-inspector-evaluating-the-current-tick"},"Tick Inspector: Evaluating The Current Tick"),(0,i.kt)("p",null,"For each tick, the Bot Replay Window will show all entities that were tracked as part of the Game State sent to Regression Games. These are sorted alphabetically with any active/enabled entities listed first."),(0,i.kt)("p",null,"For each entity in the tick, you can use the checkboxes to enable or disable rendering its information in the scene"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable or disable rendering of that entity model"),(0,i.kt)("li",{parentName:"ul"},"Enable or disable rendering the path history of that entity"),(0,i.kt)("li",{parentName:"ul"},"Enable or disable rendering a targeting circle around that entity"),(0,i.kt)("li",{parentName:"ul"},"Enable or disable rendering action information of that entity")),(0,i.kt)("p",null,'In addition to controlling rendering, the tick inspector also highlights and shows a heart icon for "players" (entities that are controlled by humans or bots).'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"timeline panel",src:a(2761).Z,width:"2608",height:"1188"})),(0,i.kt)("h3",{id:"tick-inspector-actions-and-validations"},"Tick Inspector: Actions And Validations"),(0,i.kt)("p",null,"For the entity in the tick representing the Bot Instance that the replay data was recorded from, actions and validations are shown if any were performed in that tick."),(0,i.kt)("h4",{id:"actions"},"Actions"),(0,i.kt)("p",null,"Shows any command(s) that the Bot sent to the game for the current tick. These could be movements, performed abilities, object interactions, etc"),(0,i.kt)("h4",{id:"validations"},"Validations"),(0,i.kt)("p",null,"Shows any validation(s) that the Bot performed on the current tick. These are normally test cases coded into the Bot to validate that the tick data changed as expected based on prior actions or other factors in the game state. See Validation Bots (",(0,i.kt)("a",{parentName:"p",href:"./creating-bots/csharp/validation-bots"},"C#"),") (",(0,i.kt)("a",{parentName:"p",href:"./creating-bots/javascript/validation-bots"},"JavaScript"),") for more information."),(0,i.kt)("h3",{id:"registering-custom-models-for-replay-objects"},"Registering Custom Models For Replay Objects"),(0,i.kt)("p",null,"When viewing a replay, entities that are dynamically spawned into the scene (not defined in the scene itself) need to be told what model to render with. By default they will load as a pink capsule, but they can be configured with a specific model based on their type."),(0,i.kt)("p",null,"When loading a replay zip, the list of entity types to replay model associations will automatically be updated with any missing entities that have ",(0,i.kt)("inlineCode",{parentName:"p"},"isRuntimeObject=true"),". You can also manually add, edit, or remove associations at any time."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"configure replay models",src:a(9450).Z,width:"970",height:"247"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The associations from entity type to replay model are saved in your project as ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets/RegressionGames/Editor/CustomReplayModels.asset"),"."),(0,i.kt)("p",{parentName:"admonition"},"You can edit this asset in the inspector directly or by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Configure Custom Replay Models")," button in the RG Bot Replay window to open the inspector.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"replay model manager",src:a(4863).Z,width:"412",height:"423"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"While the associations support any GameObject, it is best to associate just the model for your entity."),(0,i.kt)("p",{parentName:"admonition"},"The replay does not trigger animations, play sounds, process physics, or evaluate any runtime scripts on your associated object.")))}h.isMDXComponent=!0},9450:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/configure-replay-models-6e3f74154171a6efbc2e8457e23b3e2a.png"},6158:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/replay-data-download-7244c00ec2fbe7ba59cf45acbeebbac6.png"},4863:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/replay-model-manager-88b864e539c1af14f438ad02ad083ada.png"},9118:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rg-top-menu-5355ad3a564ae614ac0698edf7004bd6.png"},2761:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/timeline-panel-90a44d2850a37aafedb441ef10de3df8.png"},6624:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/timeline-6aa7e114768fc3f9b776ae9af1d4cfa9.png"}}]);