"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[4238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=f({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var g=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}},4089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={sidebar_label:"Configuration"},s="Configuration",u={unversionedId:"studios/unity/unity-sdk/creating-bots/configuration",id:"studios/unity/unity-sdk/creating-bots/configuration",title:"Configuration",description:"Regression Games Bots are flexible and highly customizable.",source:"@site/docs/studios/unity/unity-sdk/creating-bots/configuration.mdx",sourceDirName:"studios/unity/unity-sdk/creating-bots",slug:"/studios/unity/unity-sdk/creating-bots/configuration",permalink:"/studios/unity/unity-sdk/creating-bots/configuration",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Configuration"},sidebar:"studiosSidebar",previous:{title:"RGFindUtils",permalink:"/studios/unity/unity-sdk/RGFindUtils"},next:{title:"PlayTest Bots",permalink:"/studios/unity/unity-sdk/creating-bots/playtest-bots"}},c={},p=[{value:"Project Setup",id:"project-setup",level:2},{value:"Bot Configuration",id:"bot-configuration",level:2},{value:"<code>isSpawnable</code>",id:"isspawnable",level:3},{value:"Type",id:"type",level:4},{value:"Default Value",id:"default-value",level:4},{value:"Examples",id:"examples",level:4},{value:"<code>characterConfig</code>",id:"characterconfig",level:3},{value:"Type",id:"type-1",level:4},{value:"Default Value",id:"default-value-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"<code>lifecycle</code>",id:"lifecycle",level:3},{value:"Type",id:"type-2",level:4},{value:"Default Value",id:"default-value-2",level:4},{value:"Examples",id:"examples-2",level:4}],d={toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Regression Games Bots are flexible and highly customizable.\nBots can simulate players, function as NPCs, interact with menus and UIs, validate gameplay, and more.\nBots run in the Regression Games runtime and connect to your game via socket connections initiated from your Unity integration.\nEach Bot receives the current game state at a regular interval and uses our JavaScript API to analyze the state,\nmake decisions, and interact with game elements."),(0,r.kt)("h2",{id:"project-setup"},"Project Setup"),(0,r.kt)("p",null,"A Bot project is structured as an npm package."),(0,r.kt)("p",null,"First, install ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download"},"Node.js")," version 16.x (which can be checked by running ",(0,r.kt)("inlineCode",{parentName:"p"},"node -v"),").\nYou can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," for managing multiple Node versions installed on a single machine. "),(0,r.kt)("p",null,"To create your project and install node dependencies, create a new directory and navigate to it, then run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm init -y\nnpm i @types/node node-fetch rg-match-info\n")),(0,r.kt)("p",null,"Finally, create an ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," file at your project root.\nThis is where you'll implement methods to define the Bot and its behaviors as described in the following sections.  "),(0,r.kt)("h2",{id:"bot-configuration"},"Bot Configuration"),(0,r.kt)("p",null,"Your Unity Integration allows flexibility in how your GameObjects are set up, spawned into the scene, and torn down.\nThe first step to writing your JavaScript Bot is defining how these processes should handle this Bot."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"configureBot(rg)")," method accepts an ",(0,r.kt)("inlineCode",{parentName:"p"},"rg")," object which is provided by Regression Games.\nThis object exposes configuration options (defined in the sections below) and methods for describing Bot behaviors and validations.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"configureBot")," method is optional, but must be exported from your ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," file in order for Regression Games to access custom configurations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'export function configureBot(rg) {\n    rg.isSpawnable = true;\n    rg.characterConfig = {\n        "role": "enemy",\n        "species": "red_imp",\n        "immunities": ["fire"],\n    };\n    rg.lifecycle = "MANAGED";\n}\n')),(0,r.kt)("h3",{id:"isspawnable"},(0,r.kt)("inlineCode",{parentName:"h3"},"isSpawnable")),(0,r.kt)("p",null,"Specifies whether this Bot should be represented by a visible GameObject.\nBots that simulate players or NPCs are generally spawnable, while Bots that interact with menus,\nrepresent environmental hazards, observe the game state without interaction, etc. are not."),(0,r.kt)("h4",{id:"type"},"Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("h4",{id:"default-value"},"Default Value"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"true")),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"export function configureBot(rg) {\n    rg.isSpawnable = true;\n}\n")),(0,r.kt)("h3",{id:"characterconfig"},(0,r.kt)("inlineCode",{parentName:"h3"},"characterConfig")),(0,r.kt)("p",null,"For spawnable Bots.\nAn object containing character configurations to help seat your Bot as the appropriate class/prefab/etc.\nThis is a freeform object to be interpreted by your game's implementation of the\n",(0,r.kt)("a",{parentName:"p",href:"../RGBotSpawnManager#public-virtual-void-seatbotbotinformation-bottospawn"},(0,r.kt)("inlineCode",{parentName:"a"},"RGBotSpawnManager.SeatBot")),"\nand ",(0,r.kt)("a",{parentName:"p",href:"../RGBotSpawnManager#canbenull-public-abstract-gameobject-spawnbotbool-latejoin-botinformation-botinformation"},(0,r.kt)("inlineCode",{parentName:"a"},"RGSpawnManager.SpawnBot"))," interfaces."),(0,r.kt)("h4",{id:"type-1"},"Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("h4",{id:"default-value-1"},"Default Value"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")),(0,r.kt)("h4",{id:"examples-1"},"Examples"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"character_config_simple",label:"Simple definition",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'export function configureBot(rg) {\n    rg.characterConfig = {\n        "type" : "Mage"\n    };\n}\n'))),(0,r.kt)(i.Z,{value:"character_type_freeform",label:"Complex definition",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'export function configureBot(rg) {\n    rg.characterConfig = {\n        "role": "Warrior",\n        "specialization": "Reaver",\n        "startingEquipment": {\n            "mainHand": "Sword",\n            "offHand": "Sword"\n        },\n        "spawn": "BlueTower",\n        "maxHP": "50"\n    };\n}\n')))),(0,r.kt)("h3",{id:"lifecycle"},(0,r.kt)("inlineCode",{parentName:"h3"},"lifecycle")),(0,r.kt)("p",null,"Bots can be either ",(0,r.kt)("inlineCode",{parentName:"p"},"MANAGED")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"PERSISTENT"),".\nA ",(0,r.kt)("inlineCode",{parentName:"p"},"MANAGED")," Bot will automatically disconnect when ",(0,r.kt)("inlineCode",{parentName:"p"},"RGBotServerListener.GetInstance()?.StopGame()")," is called from the Unity Integration.\nA ",(0,r.kt)("inlineCode",{parentName:"p"},"PERSISTENT")," Bot must either terminate itself (see ",(0,r.kt)("a",{parentName:"p",href:"./playtest-bots#complete"},"complete()"),") when its tasks are complete or be terminated manually from the RG Overlay.\nThis allows ",(0,r.kt)("inlineCode",{parentName:"p"},"PERSISTENT")," bots to stay active across multiple scenes/sessions. "),(0,r.kt)("h4",{id:"type-2"},"Type"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"default-value-2"},"Default Value"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"MANAGED"')),(0,r.kt)("h4",{id:"examples-2"},"Examples"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"managed_bot",label:"Managed",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'export function configureBot(rg) {\n    rg.lifecycle = "MANAGED";\n}\n'))),(0,r.kt)(i.Z,{value:"persistent_bot",label:"Persistent",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'export function configureBot(rg) {\n    rg.lifecycle = "PERSISTENT";\n}\n')))))}f.isMDXComponent=!0}}]);