"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[4428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,g=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),i=n(6010),o=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=g({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=s??d;return p({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var f=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(d(t),s(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},o,{className:(0,i.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},7354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),o=n(5162);const l={sidebar_label:"Validation Bots"},s="Defining Bots for Validation Testing",u={unversionedId:"studios/unity/unity-sdk/creating-bots/validation-bots",id:"studios/unity/unity-sdk/creating-bots/validation-bots",title:"Defining Bots for Validation Testing",description:"Your Unity integration collects state information about GameObjects and notifies the Bot runtime with the updated state at a fixed tick interval.",source:"@site/docs/studios/unity/unity-sdk/creating-bots/validation-bots.mdx",sourceDirName:"studios/unity/unity-sdk/creating-bots",slug:"/studios/unity/unity-sdk/creating-bots/validation-bots",permalink:"/RegressionDocs/studios/unity/unity-sdk/creating-bots/validation-bots",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Validation Bots"},sidebar:"studiosSidebar",previous:{title:"PlayTest Bots",permalink:"/RegressionDocs/studios/unity/unity-sdk/creating-bots/playtest-bots"},next:{title:"Building Your First Bot",permalink:"/RegressionDocs/studios/unity/tutorials/first_tutorial"}},c={},d=[{value:"Methods",id:"methods",level:2},{value:"<code>setCommandTimeout(timeout: number);</code>",id:"setcommandtimeouttimeout-number",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Return Value",id:"return-value",level:4},{value:"Examples",id:"examples",level:4},{value:"<code>setCommandRetryRate(retryRate: number);</code>",id:"setcommandretryrateretryrate-number",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"Return Value",id:"return-value-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"<code>waitForScene(sceneName: string);</code>",id:"waitforscenescenename-string",level:3},{value:"Arguments",id:"arguments-2",level:4},{value:"Return Value",id:"return-value-2",level:4},{value:"Examples",id:"examples-2",level:4}],m={toc:d},p="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"defining-bots-for-validation-testing"},"Defining Bots for Validation Testing"),(0,r.kt)("p",null,"Your Unity integration collects state information about GameObjects and notifies the Bot runtime with the updated state at a fixed tick interval.\nThe game state can be monitored to test the impacts of GameObject behaviors on other GameObjects."),(0,r.kt)("p",null,"Validation Bots share the same APIs as ",(0,r.kt)("a",{parentName:"p",href:"./playtest-bots"},"PlayTest Bots"),", with two important distinctions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Bot logic is implemented within a ",(0,r.kt)("inlineCode",{parentName:"li"},"startScenario(rg)")," method rather than ",(0,r.kt)("inlineCode",{parentName:"li"},"processTick(rg)"),".\n",(0,r.kt)("inlineCode",{parentName:"li"},"startScenario")," is invoked once after the Bot connects and will run to completion rather than being invoked repeatedly over the lifetime of the Bot.\nLike ",(0,r.kt)("inlineCode",{parentName:"li"},"processTick"),", the ",(0,r.kt)("inlineCode",{parentName:"li"},"rg")," object passed to ",(0,r.kt)("inlineCode",{parentName:"li"},"startScenario")," exposes the Regression Games API."),(0,r.kt)("li",{parentName:"ol"},"Commands act as assertions. When a command is executed, it automatically waits and retries until the game state meets its expectations.\nIf an expectation hasn't been met before a timeout is reached, then the command (and by extension the scenario) will fail.\nFor example, running the command ",(0,r.kt)("inlineCode",{parentName:"li"},'rg.findEntity("MyEntity")')," for a PlayTest Bot will return the matching entity or null based on the current tick's game state,\nbut running the same command for a Validation Bot will check the state across several tick intervals until a matching entity is found, or else the command will fail.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This mode is useful for validation testing, where commands must be issued in a deterministic order\nand where the game state must meet the explicit expectations of one command before the next command is executed or else the scenario will fail.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This mode should not be used for Bots intended to make dynamic decisions based on the current game state,\nwhere a falsey result from a command should not cause the scenario to fail. ")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"startScenario_abilityBot",label:"Cycle through castable abilities",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'export function configureBot(rg) {\n    rg.lifecycle = "PERSISTENT";\n    rg.characterConfig = {\n        role: "HEALER"\n    };\n}\n\nexport async function startScenario(rg) {\n    \n    // validate that we\'re in the game\n    await rg.waitForScene("Dungeon");\n\n    // find the closest human player and use a heal ability on them\n    let target = await rg.findNearestEntity("HumanPlayer");\n    await rg.entityExists(target);\n\n    rg.performAction("Heal", {\n        targetId: target.id,\n        position: target.position\n    })\n\n    // validate that the heal recovers from cooldown\n    await rg.entityHasAttribute(rg.getBot(), ["abilityAvailable", "Heal"], true); \n\n    // find the closest enemy and use a basic attack until it dies.\n    // measure from the position of a known gameObject\n    target = await rg.findNearestEntity("Imp", await findEntity("Checkpoint").position);\n    await rg.entityExists(target);\n    await rg.entityHasAttribute(target, "health", 15);\n\n    // approach the entity\n    rg.performAction("ApproachObject", {\n        targetId: target.id,\n        range: 5,\n    });\n\n    // queue three attacks\n    // each one should do 5 damage\n    const args = {\n        targetId: target.id,\n        xPosition: target.position,\n    }\n    rg.performAction("BasicAttack", args)\n    await rg.entityHasAttribute(target, "health", 10);\n\n    rg.performAction("BasicAttack", args)\n    await rg.entityHasAttribute(target, "health", 5);\n\n    rg.performAction("BasicAttack", args)\n    await rg.entityDoesNotExist(target);\n\n    rg.complete();\n}\n'))),(0,r.kt)(o.Z,{value:"runTurn_menuBot",label:"Click buttons to start the game",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'export function configureBot(rg) {\n    rg.isSpawnable = false;\n    rg.lifecycle = "PERSISTENT";\n    rg.characterConfig = {};\n}\n\n/**\n * Clicks buttons to get us from the Main Menu into the dungeon.\n * Once we enter the dungeon, this Bot has completed its tasks.\n */\nexport async function startScenario(rg) {\n\n    // validate we\'re on the main menu\n    await rg.waitForScene("MainMenu");\n\n    // get to the character select screen\n    const profileMenuButton = await rg.findEntity("ProfileMenuButton");\n    await rg.entityHasAttribute(profileMenuButton, "interactable", true);\n    rg.performAction("ClickButton", {targetId: profileMenuButton.id});\n\n    const selectProfileButton = await rg.findEntity("SelectProfileButton");\n    await rg.entityHasAttribute(selectProfileButton, "interactable", true);\n    rg.performAction("ClickButton", {targetId: selectProfileButton.id});\n\n    const startWithRGButton = await rg.findEntity("StartWithRGButton");\n    await rg.entityHasAttribute(startWithRGButton, "interactable", true);\n    rg.performAction("ClickButton", {targetId: startWithRGButton.id});\n\n    // now we should be on a loading screen\n    await rg.waitForScene("LoadingScreen");\n\n    // select a character then enter the dungeon\n    const selectHealerButton = await rg.findEntity("SelectHealerButton");\n    await rg.entityHasAttribute(selectHealerButton, "interactable", true);\n    rg.performAction("ClickButton", {targetId: selectHealerButton.id});\n\n    const readyButton = await rg.findEntity("ReadyButton");\n    await rg.entityHasAttribute(readyButton, "interactable", true);\n    rg.performAction("ClickButton", {targetId: readyButton.id});\n\n    // we should be in the dungeon now\n    await rg.entityDoesNotExist(selectHealerButton);\n    await rg.entityDoesNotExist(readyButton);\n    await rg.waitForScene("Dungeon");\n\n    // we\'re done!\n    rg.complete();\n}\n')))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("p",null,"These methods are in addition to the APIs defined in the ",(0,r.kt)("a",{parentName:"p",href:"./playtest-bots#variables"},"PlayTest Bots section"),"."),(0,r.kt)("h3",{id:"setcommandtimeouttimeout-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"setCommandTimeout(timeout: number);")),(0,r.kt)("p",null,"Sets the total time in milliseconds a command is allowed to sped waiting/retrying before it fails.\nThis timeout should take into consideration how often your Unity Integration is configured to send the game state."),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timeout")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The new command timeout in milliseconds")))),(0,r.kt)("h4",{id:"return-value"},"Return Value"),(0,r.kt)("p",null,"No return value"),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"rg.setCommandTimeout(5000);\n")),(0,r.kt)("h3",{id:"setcommandretryrateretryrate-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"setCommandRetryRate(retryRate: number);")),(0,r.kt)("p",null,"Sets how long in milliseconds a command should wait before retrying following a failure."),(0,r.kt)("h4",{id:"arguments-1"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"retryRate")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The new command retry rate in milliseconds")))),(0,r.kt)("h4",{id:"return-value-1"},"Return Value"),(0,r.kt)("p",null,"No return value"),(0,r.kt)("h4",{id:"examples-1"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"rg.setCommandRetryRate(200);\n")),(0,r.kt)("h3",{id:"waitforscenescenename-string"},(0,r.kt)("inlineCode",{parentName:"h3"},"waitForScene(sceneName: string);")),(0,r.kt)("p",null,"Wait until the current scene name matches the expected value."),(0,r.kt)("h4",{id:"arguments-2"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sceneName")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the scene to wait for")))),(0,r.kt)("h4",{id:"return-value-2"},"Return Value"),(0,r.kt)("p",null,"Promise","<","void",">"),(0,r.kt)("h4",{id:"examples-2"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'await rg.waitForScene("StartupScreen");\nawait rg.waitForScene("UpdaterSplash");\nawait rg.waitForScene("MainMenu")\n')))}g.isMDXComponent=!0}}]);