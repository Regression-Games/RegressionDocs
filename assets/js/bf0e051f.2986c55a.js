"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[6074],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(g,l(l({ref:e},d),{},{components:n})):a.createElement(g,l({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function l(t){let{children:e,hidden:n,className:l}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},e)}},4866:(t,e,n)=>{n.d(e,{Z:()=>v});var a=n(7462),r=n(7294),i=n(6010),l=n(2466),o=n(6550),s=n(1980),u=n(7392),d=n(12);function c(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:n,attributes:a,default:r}}=t;return{value:e,label:n,attributes:a,default:r}}))}function p(t){const{values:e,children:n}=t;return(0,r.useMemo)((()=>{const t=e??c(n);return function(t){const e=(0,u.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,n])}function m(t){let{value:e,tabValues:n}=t;return n.some((t=>t.value===e))}function g(t){let{queryString:e=!1,groupId:n}=t;const a=(0,o.k6)(),i=function(t){let{queryString:e=!1,groupId:n}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:e,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((t=>{if(!i)return;const e=new URLSearchParams(a.location.search);e.set(i,t),a.replace({...a.location,search:e.toString()})}),[i,a])]}function y(t){const{defaultValue:e,queryString:n=!1,groupId:a}=t,i=p(t),[l,o]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:n}=t;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!m({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=n.find((t=>t.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:i}))),[s,u]=g({queryString:n,groupId:a}),[c,y]=function(t){let{groupId:e}=t;const n=function(t){return t?`docusaurus.tab.${t}`:null}(e),[a,i]=(0,d.Nk)(n);return[a,(0,r.useCallback)((t=>{n&&i.set(t)}),[n,i])]}({groupId:a}),h=(()=>{const t=s??c;return m({value:t,tabValues:i})?t:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((t=>{if(!m({value:t,tabValues:i}))throw new Error(`Can't select invalid tab value=${t}`);o(t),u(t),y(t)}),[u,y,i]),tabValues:i}}var h=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(t){let{className:e,block:n,selectedValue:o,selectValue:s,tabValues:u}=t;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=t=>{const e=t.currentTarget,n=d.indexOf(e),a=u[n].value;a!==o&&(c(e),s(a))},m=t=>{let e=null;switch(t.key){case"Enter":p(t);break;case"ArrowRight":{const n=d.indexOf(t.currentTarget)+1;e=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(t.currentTarget)-1;e=d[n]??d[d.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},e)},u.map((t=>{let{value:e,label:n,attributes:l}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,key:e,ref:t=>d.push(t),onKeyDown:m,onClick:p},l,{className:(0,i.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":o===e})}),n??e)})))}function f(t){let{lazy:e,children:n,selectedValue:a}=t;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const t=i.find((t=>t.props.value===a));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==a}))))}function N(t){const e=y(t);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(b,(0,a.Z)({},t,e)),r.createElement(f,(0,a.Z)({},t,e)))}function v(t){const e=(0,h.Z)();return r.createElement(N,(0,a.Z)({key:String(e)},t))}},5988:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),l=n(5162);const o={sidebar_label:"PlayTest Bots"},s="Defining Bots for PlayTesting",u={unversionedId:"studios/unity/unity-sdk/creating-bots/playtest-bots",id:"studios/unity/unity-sdk/creating-bots/playtest-bots",title:"Defining Bots for PlayTesting",description:"Your Unity integration collects state information about GameObjects and notifies the Bot runtime with the updated state at a fixed tick interval.",source:"@site/docs/studios/unity/unity-sdk/creating-bots/playtest-bots.mdx",sourceDirName:"studios/unity/unity-sdk/creating-bots",slug:"/studios/unity/unity-sdk/creating-bots/playtest-bots",permalink:"/studios/unity/unity-sdk/creating-bots/playtest-bots",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"PlayTest Bots"},sidebar:"studiosSidebar",previous:{title:"Configuration",permalink:"/studios/unity/unity-sdk/creating-bots/configuration"},next:{title:"Validation Bots",permalink:"/studios/unity/unity-sdk/creating-bots/validation-bots"}},d={},c=[{value:"Variables",id:"variables",level:2},{value:"<code>playerId</code>",id:"playerid",level:3},{value:"<code>name</code>",id:"name",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>getState(id: number = null);</code>",id:"getstateid-number--null",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Return Value",id:"return-value",level:4},{value:"Examples",id:"examples",level:4},{value:"<code>getBot();</code>",id:"getbot",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"Return Value",id:"return-value-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"<code>complete()</code>;",id:"complete",level:3},{value:"Arguments",id:"arguments-2",level:4},{value:"Return Value",id:"return-value-2",level:4},{value:"Examples",id:"examples-2",level:4},{value:"<code>performAction(actionName: string, args: object | null);</code>",id:"performactionactionname-string-args-object--null",level:3},{value:"Arguments",id:"arguments-3",level:4},{value:"Return Value",id:"return-value-3",level:4},{value:"Examples",id:"examples-3",level:4},{value:"<code>findEntity(objectType: string);</code>",id:"findentityobjecttype-string",level:3},{value:"Arguments",id:"arguments-4",level:4},{value:"Return Value",id:"return-value-4",level:4},{value:"Examples",id:"examples-4",level:4},{value:"<code>findNearestEntity(objectType: string | null, position: object = null, filterFunc: function = (entity) =&gt; true);</code>",id:"findnearestentityobjecttype-string--null-position-object--null-filterfunc-function--entity--true",level:3},{value:"Arguments",id:"arguments-5",level:4},{value:"Return Value",id:"return-value-5",level:4},{value:"Examples",id:"examples-5",level:4},{value:"<code>entityExists(entity: object | number | string);</code>",id:"entityexistsentity-object--number--string",level:3},{value:"Arguments",id:"arguments-6",level:4},{value:"Return Value",id:"return-value-6",level:4},{value:"Examples",id:"examples-6",level:4},{value:"<code>entityDoesNotExist(entity: object | number | string);</code>",id:"entitydoesnotexistentity-object--number--string",level:3},{value:"Arguments",id:"arguments-7",level:4},{value:"Return Value",id:"return-value-7",level:4},{value:"Examples",id:"examples-7",level:4},{value:"<code>entityHasAttribute(targetEntity: object, stateAttribute: string | string[], expectedValue: any);</code>",id:"entityhasattributetargetentity-object-stateattribute-string--string-expectedvalue-any",level:3},{value:"Arguments",id:"arguments-8",level:4},{value:"Return Value",id:"return-value-8",level:4},{value:"Examples",id:"examples-8",level:4}],p={toc:c},m="wrapper";function g(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"defining-bots-for-playtesting"},"Defining Bots for PlayTesting"),(0,r.kt)("p",null,"Your Unity integration collects state information about GameObjects and notifies the Bot runtime with the updated state at a fixed tick interval.\nWhenever the Bot runtime receives an update, Regression Games calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"processTick(rg)")," method.\nThis is Regression Games' entrypoint into your Bot logic, where you will describe how your Bot makes decisions and reacts to the current game state.\n",(0,r.kt)("inlineCode",{parentName:"p"},"processTick")," must be implemented and exported from your ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," file."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rg")," object passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"processTick")," exposes the Regression Games API which contains methods for evaluating the game state and queueing behaviors that you've defined as ",(0,r.kt)("inlineCode",{parentName:"p"},"RGActions"),".\nThis API is defined in the sections below."),(0,r.kt)("p",null,"In-game movements and ",(0,r.kt)("inlineCode",{parentName:"p"},"RGActions")," are automatically recorded during each session.\nThese logs can be loaded into the Unity Bot Replay utility which allows you to re-watch the session and debug Bot behaviors tick-by-tick.\nAPI methods that filter state objects and check conditions will record additional decision results.\nThese are displayed side-by-side with Bot actions in the Replay utility to help debug your Bot by showing which decisons led to resulting behaviors.  "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Commands within ",(0,r.kt)("inlineCode",{parentName:"p"},"processTick")," interact with the game state represented by the current tick only.\nThis contrasts with ",(0,r.kt)("a",{parentName:"p",href:"./validation-bots"},"Validation Bots"),", which can delay execution of commands for several ticks until expected conditions are met. ")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"runTurn_coopBot",label:"Follow and support a human player as an NPC",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'export function configureBot(rg) {\n    rg.characterConfig = {\n        role: "WARRIOR"\n    };\n}\n\n/**\n * Outline of our Bot algorithm. For every tick:\n *  - If the Bot is standing on a switch that is holding a door open, then do nothing\n *  - If the switch is within a range of sqrt(30) units from the Bot, move onto the switch\n *  - If the Bot is not near the player, move within range of the player\n *  - If an enemy is within a certain distance of a player, attack that enemy\n */\nexport async function processTick(rg) {\n\n    if(rg.getState().sceneName !== "Dungeon") return;\n\n    const currentPosition = rg.getBot().position;\n\n    // if the Bot is standing on a switch that is holding a door open, then do nothing\n    const floorSwitch = await rg.findEntity("FloorSwitch");\n    if(floorSwitch && await rg.entityHasAttribute(floorSwitch, "isOn", true)) return;\n\n    // if the switch is within range of sqrt(30) units from the Bot, then move onto it\n    if(floorSwitch && rg.MathFunctions.distanceSq(currentPosition, floorSwitch.position) < 30) {\n        rg.performAction("ApproachObject", {\n            targetId: floorSwitch.id,\n            range: 0.1\n        });\n        return;\n    }\n\n    // if the Bot is not near the human player, then move within range of that player\n    const humanPlayer = await rg.findEntity("HumanPlayer");\n    if(humanPlayer && rg.MathFunctions.distanceSq(currentPosition, humanPlayer.position) > 10 ) {\n        rg.performAction("ApproachObject", {\n            targetId: humanPlayer.id,\n            range: 2\n        });\n        return;\n    }\n\n    // Otherwise, attack a nearby enemy if there is one\n    const enemy = await rg.findNearestEntity(null, currentPosition, (entity) => { return entity.team === 1 && !entity.broken});\n    if(enemy && enemy.health > 0) {\n        rg.performAction("PerformSkill", {\n            skillId: 1,\n            targetId: enemy.id,\n            position: enemy.position,\n        });\n    }\n}\n'))),(0,r.kt)(l.Z,{value:"runTurn_abilityBot",label:"Cycle through castable abilities",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'export function configureBot(rg) {\n    rg.characterConfig = {\n        role: "ARCHER"\n    };\n}\n\n/**\n * Entrypoint into the Bot logic\n */\nexport async function processTick(rg) {\n\n    // only activate abilities if we\'re ready to play\n    if (rg.getState().sceneName !== "Dungeon") return;\n\n    // select 1 ability per update\n    await selectAbility(rg);\n}\n\n/**\n * Returns the ID of the next ability in our rotation\n */\nfunction getNextAbility(rg) {\n    const abilities = rg.getBot().abilities;\n    const abilityIndex = CURRENT_ABILITY % abilities.length;\n    return abilities[abilityIndex];\n}\n\n\nlet CURRENT_ABILITY = 0;\n\n/**\n * Selects an ability for this character, then queues it as an action\n */\nasync function selectAbility(rg) {\n\n    const ability = getNextAbility(rg);\n    if(!rg.entityHasAttribute(rg.getBot(), ["abilityAvailable", `${ability.name}`], true)) {\n        // this ability is still on cooldown\n        return;\n    }\n\n    const targetType = ability.targetType;\n    let currentTarget;\n\n    if (targetType === "None") \n    {\n        // No target needed\n        currentTarget = null;\n    } \n    else if (targetType === "Enemy") {\n        currentTarget = await rg.findNearestEntity(null, null, (entity) => { return entity.hostile && !entity.incapacitated } )\n        if(!currentTarget) {\n            // can\'t cast this without a valid target\n            return;\n        }\n    } \n    else if (targetType === "Ally") {\n        currentTarget = await rg.findNearestEntity(null, null, (entity) => { return !entity.hostile });\n        if(!currentTarget) {\n            // can\'t cast this without a valid target\n            return;\n        }\n    }\n  \n    rg.performAction("PerformSkill", {\n        skillId: ability,\n        targetId: currentTarget?.id,\n        position: currentTarget?.position,\n    });\n\n    CURRENT_ABILITY++;\n}\n'))),(0,r.kt)(l.Z,{value:"runTurn_menuBot",label:"Click buttons to start the game",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'export function configureBot(rg) {\n    rg.isSpawnable = false;\n    rg.lifecycle = "PERSISTENT";\n}\n\n// flags for clicking the 6 buttons we need to click to start the game\nlet stateFlags = {\n    "SelectGameModeButton": false\n    "ChooseArcherButton": false,\n    "StartGameButton": false,\n}\n\n/** \n * Click buttons to get us from the Main Menu into the dungeon.\n * Once we enter the dungeon, this Bot has completed its tasks.\n */\nexport async function runTurn(rg) {\n\n    if(rg.getState().sceneName === "MainMenu") {\n        const selectGameModeButton = await getInteractableButton("SelectGameModeButton");\n        if (selectGameModeButton && !stateFlags["SelectGameModeButton"]) {\n            rg.performAction("ClickButton", {targetId: selectGameModeButton.id});\n            stateFlags["SelectGameModeButton"] = true\n            return;\n        }\n\n        const chooseArcherButton = await getInteractableButton("ChooseArcherButton");\n        if (chooseArcherButton && stateFlags["SelectGameModeButton"] && !stateFlags["ChooseArcherButton"]) {\n            rg.performAction("ClickButton", {targetId: chooseArcherButton.id});\n            stateFlags["ChooseArcherButton"] = true\n            return;\n        }\n\n        const startGameButton = await getInteractableButton("StartGameButton");\n        if (startButton && stateFlags["ChooseArcherButton"] && !stateFlags["StartGameButton"]) {\n            rg.performAction("ClickButton", {targetId: startGameButton.id});\n            stateFlags["StartGameButton"] = true\n            return;\n        }\n    } else {\n        rg.complete();\n    }\n}\n\nasync function getInteractableButton(buttonName) {\n    const button = await rg.findEntity(buttonName);\n    if (button && await rg.entityHasAttribute(button, "interactable", true)) {\n        return button;\n    }\n    return null;\n}\n')))),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("h3",{id:"playerid"},(0,r.kt)("inlineCode",{parentName:"h3"},"playerId")),(0,r.kt)("p",null,"The ID of this Bot in the game state. Readonly."),(0,r.kt)("h3",{id:"name"},(0,r.kt)("inlineCode",{parentName:"h3"},"name")),(0,r.kt)("p",null,"The name of the connected Bot. Readonly."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"getstateid-number--null"},(0,r.kt)("inlineCode",{parentName:"h3"},"getState(id: number = null);")),(0,r.kt)("p",null,"Returns the complete state object including the current state of all registered entities"),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Return state information for a specific entity")))),(0,r.kt)("h4",{id:"return-value"},"Return Value"),(0,r.kt)("p",null,"Returns information about the current state"),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// get all information about the current state\nconst fullState = rg.getState();\n\n// get the current state of a known entity\nconst mascot = await rg.findEntity("Williward");\n...\nconst objectState = rg.getState(mascot.id); \n')),(0,r.kt)("h3",{id:"getbot"},(0,r.kt)("inlineCode",{parentName:"h3"},"getBot();")),(0,r.kt)("p",null,"Returns the current state information for this Bot.",(0,r.kt)("br",{parentName:"p"}),"\n","Synonymous with ",(0,r.kt)("a",{parentName:"p",href:"./playtest-bots#getstateid-number--null"},(0,r.kt)("inlineCode",{parentName:"a"},"rg.getState(rg.playerId)"))),(0,r.kt)("h4",{id:"arguments-1"},"Arguments"),(0,r.kt)("p",null,"None"),(0,r.kt)("h4",{id:"return-value-1"},"Return Value"),(0,r.kt)("p",null,"Returns the current state information for this Bot"),(0,r.kt)("h4",{id:"examples-1"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const myBot = rg.getBot();\n")),(0,r.kt)("h3",{id:"complete"},(0,r.kt)("inlineCode",{parentName:"h3"},"complete()"),";"),(0,r.kt)("p",null,"Flags the current Bot as complete, which will stop Bot execution and send a teardown notification to your game for this Bot.",(0,r.kt)("br",{parentName:"p"}),"\n","This is particularly useful for ",(0,r.kt)("a",{parentName:"p",href:"./configuration#lifecycle"},"PERSISTENT Bots")," which must be stopped explicitly,\nand for ",(0,r.kt)("a",{parentName:"p",href:"./validation-bots"},"Validation Bots")," which execute a specific set of commands and then are considered to have 'completed' their tasks\nregardless of whether the Unity Integration itself has signalled Bots to disconnect."),(0,r.kt)("h4",{id:"arguments-2"},"Arguments"),(0,r.kt)("p",null,"None"),(0,r.kt)("h4",{id:"return-value-2"},"Return Value"),(0,r.kt)("p",null,"No return value"),(0,r.kt)("h4",{id:"examples-2"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"rg.complete();\n")),(0,r.kt)("h3",{id:"performactionactionname-string-args-object--null"},(0,r.kt)("inlineCode",{parentName:"h3"},"performAction(actionName: string, args: object | null);")),(0,r.kt)("p",null,"Queues an action that the Bot should perform. Action names are freeform strings and must correspond to the name of one of your defined ",(0,r.kt)("inlineCode",{parentName:"p"},"RGActions"),".\nMultiple actions may be queued per tick."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Actions do not necessarily start executing the same tick that they were queued.")),(0,r.kt)("h4",{id:"arguments-3"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"actionName")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The name of an action, as defined by its corresponding ",(0,r.kt)("inlineCode",{parentName:"td"},"RGAction"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Any arguments that should be passed to the ",(0,r.kt)("inlineCode",{parentName:"td"},"RGAction"))))),(0,r.kt)("h4",{id:"return-value-3"},"Return Value"),(0,r.kt)("p",null,"No return value"),(0,r.kt)("h4",{id:"examples-3"},"Examples"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"performAction_simple",label:"Open a Door",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const door = await rg.findEntity("Door");\nrg.performAction("OpenDoor", { targetId: door.id });\n'))),(0,r.kt)(l.Z,{value:"performAction_arguments",label:"Equip a sword",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const bot = rg.getBot();\nif(!await rg.entityHasAttribute(bot, "equippedItem", "sword")) {\n    rg.performAction("EquipItem", { \n        itemName: "sword",\n        slot: "mainHand" \n    });\n}\n')))),(0,r.kt)("h3",{id:"findentityobjecttype-string"},(0,r.kt)("inlineCode",{parentName:"h3"},"findEntity(objectType: string);")),(0,r.kt)("p",null,"Find an entity with the given Object Type in the game state.\nThis method should be used when only one entity with the given Object Type is expected to exist in the state,\nor when any entity with this Object Type will satisfy the scenario.\nFor more control over finding specific entities in the game state, see ",(0,r.kt)("a",{parentName:"p",href:"./playtest-bots#getstateid-number--null"},"getState"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"./playtest-bots#findnearestentityobjecttype-string--null-position-object--null-filterfunc-function--entity--true"},"findNearestEntity"),"."),(0,r.kt)("h4",{id:"arguments-4"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"objectType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The objectType to search for, as defined by the entity's corresponding ",(0,r.kt)("inlineCode",{parentName:"td"},"RGState"))))),(0,r.kt)("h4",{id:"return-value-4"},"Return Value"),(0,r.kt)("p",null,"Promise","<","object | null",">"),(0,r.kt)("h4",{id:"examples-4"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const door = await rg.findEntity("Door");\nconst humanPlayer = await rg.findEntity("HumanPlayer");\nconst areaBoss = await rg.findEntity("Boss");\n')),(0,r.kt)("h3",{id:"findnearestentityobjecttype-string--null-position-object--null-filterfunc-function--entity--true"},(0,r.kt)("inlineCode",{parentName:"h3"},"findNearestEntity(objectType: string | null, position: object = null, filterFunc: function = (entity) => true);")),(0,r.kt)("p",null,"Finds the closest entity to the given position.\nThe filter function is applied to all entities matching the given objectType (if one is defined) before evaluating entity positions."),(0,r.kt)("h4",{id:"arguments-5"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"objectType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Optionally filter entities by Object Type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"position")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},"The Bot's current position"),(0,r.kt)("td",{parentName:"tr",align:null},"The position to measure distance from")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"filterFunc")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"function")),(0,r.kt)("td",{parentName:"tr",align:null},"(entity) => true"),(0,r.kt)("td",{parentName:"tr",align:null},"Optionally filter entities to find")))),(0,r.kt)("h4",{id:"return-value-5"},"Return Value"),(0,r.kt)("p",null,"Promise","<","object | null",">"),(0,r.kt)("h4",{id:"examples-5"},"Examples"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"findNearestEntity_default",label:"No Filter",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const williward = await rg.findNearestEntity("Williward");\nconst enemyNearestToWilliward = await rg.findNearestEntity("Enemy", williward.position);\n'))),(0,r.kt)(l.Z,{value:"findNearestEntity_filtered",label:"Apply a Filter",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const patrolPoint = await rg.findEntity("PatrolPoint");\nconst guardOnPatrol = await rg.findNearestEntity("Guard", patrolPoint.position, (entity) => { return !entity.isAsleep });\n')))),(0,r.kt)("h3",{id:"entityexistsentity-object--number--string"},(0,r.kt)("inlineCode",{parentName:"h3"},"entityExists(entity: object | number | string);")),(0,r.kt)("p",null,"Return whether the given entity exists.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"entity")," argument can be a reference to an entity, its id, or an Object Type.\nIf this is an Object Type, this method will return true if ",(0,r.kt)("em",{parentName:"p"},"any")," entities with this ObjectType exist. "),(0,r.kt)("h4",{id:"arguments-6"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The entity, its id, or an Object Type. If this is an Object Type, will return true if ",(0,r.kt)("em",{parentName:"td"},"any")," entities with this ObjectType exist.")))),(0,r.kt)("h4",{id:"return-value-6"},"Return Value"),(0,r.kt)("p",null,"Promise","<","boolean",">"),(0,r.kt)("h4",{id:"examples-6"},"Examples"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"entityExists_entity",label:"Entity",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const entity = await rg.findEntity("Williward");\n... \nconst exists = await rg.entityExists(entity);\n'))),(0,r.kt)(l.Z,{value:"entityExists_id",label:"Entity ID",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const entity = await rg.findEntity("Williward");\n... \nconst exists = await rg.entityExists(entity.id);\n'))),(0,r.kt)(l.Z,{value:"entityExists_objectType",label:"Object Type",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const exists = await rg.entityExists("Williward");\n')))),(0,r.kt)("h3",{id:"entitydoesnotexistentity-object--number--string"},(0,r.kt)("inlineCode",{parentName:"h3"},"entityDoesNotExist(entity: object | number | string);")),(0,r.kt)("p",null,"Return whether the given entity does not exist.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"entity")," argument can be a reference to an entity, its id, or an Object Type.\nIf this is an Object Type, this method will return true if ",(0,r.kt)("em",{parentName:"p"},"no")," entities with this ObjectType exist. "),(0,r.kt)("h4",{id:"arguments-7"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"entity")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The entity, its id, or an Object Type. If this is an Object Type, will return true if ",(0,r.kt)("em",{parentName:"td"},"no")," entities with this ObjectType exist.")))),(0,r.kt)("h4",{id:"return-value-7"},"Return Value"),(0,r.kt)("p",null,"Promise","<","boolean",">"),(0,r.kt)("h4",{id:"examples-7"},"Examples"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"entityDoesNotExist_entity",label:"Entity",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const staleEntity = await rg.findEntity("Williward");\n... \nconst exists = await rg.entityDoesNotExist(staleEntity);\n'))),(0,r.kt)(l.Z,{value:"entityDoesNotExist_id",label:"Entity ID",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const staleEntity = await rg.findEntity("Williward");\n... \nconst exists = await rg.entityDoesNotExist(staleEntity.id);\n'))),(0,r.kt)(l.Z,{value:"entityDoesNotExist_objectType",label:"Object Type",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const exists = await rg.entityDoesNotExist("Williward");\n')))),(0,r.kt)("h3",{id:"entityhasattributetargetentity-object-stateattribute-string--string-expectedvalue-any"},(0,r.kt)("inlineCode",{parentName:"h3"},"entityHasAttribute(targetEntity: object, stateAttribute: string | string[], expectedValue: any);")),(0,r.kt)("p",null,"Return whether the entity in the game state has the expected value for one of its attributes."),(0,r.kt)("h4",{id:"arguments-8"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"targetEntity")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The entity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stateAttribute")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the attribute key, or an array of keys for nested attributes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expectedValue")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The expected value for the entity's state attribute")))),(0,r.kt)("h4",{id:"return-value-8"},"Return Value"),(0,r.kt)("p",null,"Promise","<","boolean",">"),(0,r.kt)("h4",{id:"examples-8"},"Examples"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"entityHasAttribute_entity",label:"Attribute",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const entity = await rg.findEntity("Williward");\nif(await rg.entityHasAttribute(entity, "color", "teal")) {\n    console.log("Williward is looking good!")\n}\n'))),(0,r.kt)(l.Z,{value:"entityHasAttribute_id",label:"Nested Attribute",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const entity = await rg.findEntity("Boss");\nif(await rg.entityHasAttribute(entity, ["healthObject", "currentHealth"], 1000)) {\n    console.log("The boss is at full health")\n}\n')))))}g.isMDXComponent=!0}}]);