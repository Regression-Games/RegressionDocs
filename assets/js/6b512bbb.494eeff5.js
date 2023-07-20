"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[4737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,b=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(b,o(o({ref:t},s),{},{components:n})):a.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),i=n(6550),u=n(1980),d=n(7392),s=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=c(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,d]=b({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),h(e)}),[d,h,l]),tabValues:l}}var g=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:d}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),a=d[n].value;a!==i&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:c},o,{className:(0,l.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},2138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),o=n(5162);const i={sidebar_label:"RGBotSpawnManager"},u="RGBotSpawnManager",d={unversionedId:"studios/unity/unity-sdk/RGBotSpawnManager",id:"studios/unity/unity-sdk/RGBotSpawnManager",title:"RGBotSpawnManager",description:"The RGBotSpawnManager is the central configuration point for spawning bots into your Unity game.",source:"@site/docs/studios/unity/unity-sdk/RGBotSpawnManager.mdx",sourceDirName:"studios/unity/unity-sdk",slug:"/studios/unity/unity-sdk/RGBotSpawnManager",permalink:"/docs/studios/unity/unity-sdk/RGBotSpawnManager",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"RGBotSpawnManager"},sidebar:"studiosSidebar",previous:{title:"Overview",permalink:"/docs/studios/unity/unity-sdk/overview"},next:{title:"BotInformation",permalink:"/docs/studios/unity/unity-sdk/BotInformation"}},s={},p=[{value:"Abstract Methods",id:"abstract-methods",level:2},{value:"<code>[CanBeNull] public abstract GameObject SpawnBot(bool lateJoin, BotInformation botInformation);</code>",id:"canbenull-public-abstract-gameobject-spawnbotbool-latejoin-botinformation-botinformation",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Return Value",id:"return-value",level:4},{value:"Examples",id:"examples",level:4},{value:"Overridable Virtual Methods",id:"overridable-virtual-methods",level:2},{value:"<code>public virtual void SeatBot(BotInformation botToSpawn)</code>",id:"public-virtual-void-seatbotbotinformation-bottospawn",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"Return Value",id:"return-value-1",level:4},{value:"<code>public virtual void TeardownBot(uint clientId)</code>",id:"public-virtual-void-teardownbotuint-clientid",level:3},{value:"Arguments",id:"arguments-2",level:4},{value:"Return Value",id:"return-value-2",level:4},{value:"Examples",id:"examples-1",level:4},{value:"<code>public virtual void StopGame()</code>",id:"public-virtual-void-stopgame",level:3},{value:"Arguments",id:"arguments-3",level:4},{value:"Return Value",id:"return-value-3",level:4},{value:"<code>public virtual BotInformation SeatBot(uint clientId, string characterConfig, string botName)</code>",id:"public-virtual-botinformation-seatbotuint-clientid-string-characterconfig-string-botname",level:3},{value:"Arguments",id:"arguments-4",level:4},{value:"Return Value",id:"return-value-4",level:4},{value:"Class Methods",id:"class-methods",level:2},{value:"<code>public GameObject GetBot(uint clientId)</code>",id:"public-gameobject-getbotuint-clientid",level:3},{value:"Arguments",id:"arguments-5",level:4},{value:"Return Value",id:"return-value-5",level:4},{value:"<code>public bool IsBotSpawned(uint clientId)</code>",id:"public-bool-isbotspawneduint-clientid",level:3},{value:"Arguments",id:"arguments-6",level:4},{value:"<code>public bool BotsHaveSpawned()</code>",id:"public-bool-botshavespawned",level:3},{value:"Arguments",id:"arguments-7",level:4},{value:"Return Value",id:"return-value-6",level:4},{value:"<code>public int? GetBotId(uint clientId)</code>",id:"public-int-getbotiduint-clientid",level:3},{value:"Arguments",id:"arguments-8",level:4},{value:"Return Value",id:"return-value-7",level:4}],c={toc:p},m="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rgbotspawnmanager"},"RGBotSpawnManager"),(0,r.kt)("p",null,"The RGBotSpawnManager is the central configuration point for spawning bots into your Unity game.\nThe class provides default functionality for seating bots as they join, tearing them down, and handling\nreconnects. A developer must, at a minimum, define how bots are spawned into the game via the\n",(0,r.kt)("inlineCode",{parentName:"p"},"SpawnBot()")," method."),(0,r.kt)("h2",{id:"abstract-methods"},"Abstract Methods"),(0,r.kt)("h3",{id:"canbenull-public-abstract-gameobject-spawnbotbool-latejoin-botinformation-botinformation"},(0,r.kt)("inlineCode",{parentName:"h3"},"[CanBeNull] public abstract GameObject SpawnBot(bool lateJoin, BotInformation botInformation);")),(0,r.kt)("p",null,"Defines how a bot is spawned into a game. More specifically, ",(0,r.kt)("a",{parentName:"p",href:"./BotInformation"},(0,r.kt)("inlineCode",{parentName:"a"},"botInformation"))," holds the configuration for the bot,\nand you must implement operations within your game to instantiate and spawn that bot. That may be\nsimply instantiating a prefab, or spawning a NetworkObject into the game."),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lateJoin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, this bot is joining after the game started or after any initial bots have been spawned")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"botInformation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./BotInformation"},(0,r.kt)("inlineCode",{parentName:"a"},"BotInformation"))),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the client, name of the bot, and a JSON string containing configuration about your bot.")))),(0,r.kt)("h4",{id:"return-value"},"Return Value"),(0,r.kt)("p",null,"The instantiated GameObject. This is later used to find and identify the object in the scene that is controlled by your bot."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"editor_prefab",label:"Instantiate from a simple prefab in the editor",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'...\n\n[SerializeField]\n[Tooltip("The character to spawn")]\nprivate GameObject rgBotPrefab;\n\n[SerializeField]\n[Tooltip("Spawn point for RG Bots")]\nprivate Transform botSpawnPoint;\n\npublic override GameObject SpawnBot(bool lateJoin, BotInformation botInformation)\n{\n    var bot = Instantiate(rgBotPrefab, Vector3.zero, Quaternion.identity);\n    bot.transform.position = botSpawnPoint.position;\n    return bot;\n}\n\n...\n'))),(0,r.kt)(o.Z,{value:"editor_prefab_with_config",label:"Instantiate and configure",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'...\n\n[SerializeField]\n[Tooltip("The character to spawn")]\nprivate GameObject rgBotPrefab;\n\n[SerializeField]\n[Tooltip("Spawn point for RG Bots")]\nprivate Transform botSpawnPoint;\n\npublic override GameObject SpawnBot(bool lateJoin, BotInformation botInformation)\n{\n    var bot = Instantiate(rgBotPrefab, Vector3.zero, Quaternion.identity);\n    bot.transform.position = botSpawnPoint.position;\n    // RGPlayerMoveAction is an RGAction script that we have attached to our prefab, and BotCharacterConfig\n    // is a simple serializable class that holds a "speed" field, which is populated from the bot code.\n    RGPlayerMoveAction moveAction = bot.GetComponent<RGPlayerMoveAction>();\n    BotCharacterConfig config = botInformation.ParseCharacterConfig<BotCharacterConfig>();\n    if (config != null)\n    {\n        Debug.Log($"Changed speed to ${config.speed}");\n        moveAction.speed = config.speed;\n    }\n    return bot;\n}\n\n...\n')))),(0,r.kt)("h2",{id:"overridable-virtual-methods"},"Overridable Virtual Methods"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RGBotSpawnManager")," class has a few methods that can be overridden to further configure how a bot is loaded\nand unloaded from a game."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Each of these functions provide important internal implementations that must be called in addition to your\ncustom code. ",(0,r.kt)("strong",{parentName:"p"},"Please remember to always call the super/base functions first, which will return objects that\ncan be further modified."))),(0,r.kt)("h3",{id:"public-virtual-void-seatbotbotinformation-bottospawn"},(0,r.kt)("inlineCode",{parentName:"h3"},"public virtual void SeatBot(BotInformation botToSpawn)")),(0,r.kt)("p",null,"A method that gets called before spawning a bot, but after a client has connected. This is useful for seating a\nbot into your game before their prefab has actually spawned - for instance, when choosing a character in a character\nselection screen. This queues the bot to be spawned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"SpawnBots(bool)")," function. You may also override configurations\nprovided by the bot using the ",(0,r.kt)("a",{parentName:"p",href:"./BotInformation#public-void-updatecharacterconfigtt-newconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"BotInformation.UpdateCharacterConfig<T>(T)"))," method, which sends a new config back to your bot.\nBy default, this method does nothing when not implemented."),(0,r.kt)("h4",{id:"arguments-1"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"botToSpawn")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"./BotInformation"},(0,r.kt)("inlineCode",{parentName:"a"},"BotInformation"))),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The id of the client, name of the bot, and a JSON string containing configuration about your bot.")))),(0,r.kt)("h4",{id:"return-value-1"},"Return Value"),(0,r.kt)("p",null,"No return value"),(0,r.kt)("h3",{id:"public-virtual-void-teardownbotuint-clientid"},(0,r.kt)("inlineCode",{parentName:"h3"},"public virtual void TeardownBot(uint clientId)")),(0,r.kt)("p",null,"A method that gets called when a bot has received a teardown request (i.e. when the bot has signaled that\nit is finished, or when ",(0,r.kt)("inlineCode",{parentName:"p"},"RGBotServerListener.GetInstance()?.StopGame()")," is called)."),(0,r.kt)("h4",{id:"arguments-2"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clientId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint")),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the client that owns the bot to teardown")))),(0,r.kt)("h4",{id:"return-value-2"},"Return Value"),(0,r.kt)("p",null,"No return value"),(0,r.kt)("h4",{id:"examples-1"},"Examples"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"editor_prefab",label:"Disconnect the character from a network when tearing down",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'public override void TeardownBot(uint clientId)\n{\n    if (BotMap.TryRemove(clientId, out GameObject botObject))\n    {\n        try\n        {\n            NetworkObject botOnNetwork = botObject.GetComponent<NetworkObject>();\n            botOnNetwork.Despawn(true);\n        }\n        catch (Exception)\n        {\n            Debug.Log($"Player already de-spawned");\n        }\n    }\n}\n')))),(0,r.kt)("h3",{id:"public-virtual-void-stopgame"},(0,r.kt)("inlineCode",{parentName:"h3"},"public virtual void StopGame()")),(0,r.kt)("p",null,"A method that gets called when the game is terminated. This will remove all bots from the game.\nIn most cases, you will not need to override this method, and instead should look at ",(0,r.kt)("inlineCode",{parentName:"p"},"TeardownBot()"),"."),(0,r.kt)("h4",{id:"arguments-3"},"Arguments"),(0,r.kt)("p",null,"No arguments"),(0,r.kt)("h4",{id:"return-value-3"},"Return Value"),(0,r.kt)("p",null,"No return value"),(0,r.kt)("h3",{id:"public-virtual-botinformation-seatbotuint-clientid-string-characterconfig-string-botname"},(0,r.kt)("inlineCode",{parentName:"h3"},"public virtual BotInformation SeatBot(uint clientId, string characterConfig, string botName)")),(0,r.kt)("p",null,"A method that gets called before spawning a player, but after a client has connected. This is\nuseful for seating a bot into your game before their prefab has actually spawned - for instance,\nwhen choosing a character in a character selection screen. This queues the bot to be spawned by\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"SpawnBots()")," function."),(0,r.kt)("h4",{id:"arguments-4"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clientId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint")),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the client whose bot is connecting")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"characterConfig")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"A JSON string that can be used to customize your bot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"botName")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the bot")))),(0,r.kt)("h4",{id:"return-value-4"},"Return Value"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"./BotInformation"},(0,r.kt)("inlineCode",{parentName:"a"},"BotInformation"))," object that contains the clientId, characterConfig, and botName of the connecting bot."),(0,r.kt)("h2",{id:"class-methods"},"Class Methods"),(0,r.kt)("p",null,"The remaining functions mentioned here are not meant to be overridden, but are helpful when\nimplementing your ",(0,r.kt)("inlineCode",{parentName:"p"},"SpawnBot")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SeatBot")," methods."),(0,r.kt)("h3",{id:"public-gameobject-getbotuint-clientid"},(0,r.kt)("inlineCode",{parentName:"h3"},"public GameObject GetBot(uint clientId)")),(0,r.kt)("p",null,"Returns the GameObject of the bot that belongs to the given ",(0,r.kt)("inlineCode",{parentName:"p"},"clientId"),". Returns null if a bot is not found for the given ",(0,r.kt)("inlineCode",{parentName:"p"},"clientId"),"."),(0,r.kt)("h4",{id:"arguments-5"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clientId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint")),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the client whose bot you want to find")))),(0,r.kt)("h4",{id:"return-value-5"},"Return Value"),(0,r.kt)("p",null,"The GameObject which encapsulates the bot, or null if the bot is not found"),(0,r.kt)("h3",{id:"public-bool-isbotspawneduint-clientid"},(0,r.kt)("inlineCode",{parentName:"h3"},"public bool IsBotSpawned(uint clientId)")),(0,r.kt)("p",null,"Returns true if the bot owned by the given clientId has been spawned into the game, and false otherwise. Equivalent to\nchecking if ",(0,r.kt)("inlineCode",{parentName:"p"},"GetBot(clientId) != null"),"."),(0,r.kt)("h4",{id:"arguments-6"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clientId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint")),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the client whose bot you want to find")))),(0,r.kt)("h3",{id:"public-bool-botshavespawned"},(0,r.kt)("inlineCode",{parentName:"h3"},"public bool BotsHaveSpawned()")),(0,r.kt)("p",null,"Returns true if an initial spawn of bots has occurred."),(0,r.kt)("h4",{id:"arguments-7"},"Arguments"),(0,r.kt)("p",null,"None"),(0,r.kt)("h4",{id:"return-value-6"},"Return Value"),(0,r.kt)("p",null,"True if some bots have already been initially spawned"),(0,r.kt)("h3",{id:"public-int-getbotiduint-clientid"},(0,r.kt)("inlineCode",{parentName:"h3"},"public int? GetBotId(uint clientId)")),(0,r.kt)("p",null,"Returns the Instance ID of the transform for the bot in the scene. This can be used later to reference the bot in the scene."),(0,r.kt)("h4",{id:"arguments-8"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clientId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint")),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the client that owns the bot to find")))),(0,r.kt)("h4",{id:"return-value-7"},"Return Value"),(0,r.kt)("p",null,"The ID of the bot, or null if it cannot be found"))}b.isMDXComponent=!0}}]);