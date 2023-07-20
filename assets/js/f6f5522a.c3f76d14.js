"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[4703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"BotInformation"},i="BotInformation",l={unversionedId:"studios/unity/unity-sdk/BotInformation",id:"studios/unity/unity-sdk/BotInformation",title:"BotInformation",description:"A serializable class holding information about a bot that has been connected to the scene",source:"@site/docs/studios/unity/unity-sdk/BotInformation.mdx",sourceDirName:"studios/unity/unity-sdk",slug:"/studios/unity/unity-sdk/BotInformation",permalink:"/docs/studios/unity/unity-sdk/BotInformation",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"BotInformation"},sidebar:"studiosSidebar",previous:{title:"RGBotSpawnManager",permalink:"/docs/studios/unity/unity-sdk/RGBotSpawnManager"},next:{title:"Configuration",permalink:"/docs/studios/unity/unity-sdk/creating-bots/configuration"}},c={},p=[{value:"Properties",id:"properties",level:2},{value:"Class Methods",id:"class-methods",level:2},{value:"<code>public T ParseCharacterConfig&lt;T&gt;()</code>",id:"public-t-parsecharacterconfigt",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Return Value",id:"return-value",level:4},{value:"Examples",id:"examples",level:4},{value:"<code>public void UpdateCharacterConfig&lt;T&gt;(T newConfig)</code>",id:"public-void-updatecharacterconfigtt-newconfig",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"Return Value",id:"return-value-1",level:4},{value:"Examples",id:"examples-1",level:4}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=s("Tabs"),d=s("TabItem"),m={toc:p},f="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"botinformation"},"BotInformation"),(0,r.kt)("p",null,"A serializable class holding information about a bot that has been connected to the scene\nthrough the ",(0,r.kt)("a",{parentName:"p",href:"./RGBotSpawnManager"},(0,r.kt)("inlineCode",{parentName:"a"},"RGBotSpawnManager"))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"clientId")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uint")),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of the client who owns the bot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"characterConfig")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"A JSON string that define the customizations for your bot")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"botName")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the bot")))),(0,r.kt)("h2",{id:"class-methods"},"Class Methods"),(0,r.kt)("h3",{id:"public-t-parsecharacterconfigt"},(0,r.kt)("inlineCode",{parentName:"h3"},"public T ParseCharacterConfig<T>()")),(0,r.kt)("p",null,"Parses the JSON from ",(0,r.kt)("a",{parentName:"p",href:"./creating-bots/configuration#characterconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"characterConfig"))," into the serialized data type\npassed into the generic of this function. This ",(0,r.kt)("a",{parentName:"p",href:"./creating-bots/configuration#characterconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"characterConfig")),"\nis the JavaScript Object that comes from the bot logic."),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("p",null,"None"),(0,r.kt)("h4",{id:"return-value"},"Return Value"),(0,r.kt)("p",null,"The object of type ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," that has been deserialized from JSON in the ",(0,r.kt)("a",{parentName:"p",href:"./creating-bots/configuration#characterconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"characterConfig"))," field."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(d,{value:"deserialize_config",label:"Deserialize a bot's config from JSON",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[Serializable]\npublic class BotCharacterConfig\n{\n    public float speed;\n}\n\nvar myBotConfig = botInformation.ParseCharacterConfig<BotCharacterConfig>();\nDebug.Log(myBotConfig.speed);\n")))),(0,r.kt)("h3",{id:"public-void-updatecharacterconfigtt-newconfig"},(0,r.kt)("inlineCode",{parentName:"h3"},"public void UpdateCharacterConfig<T>(T newConfig)")),(0,r.kt)("p",null,"Overrides the ",(0,r.kt)("a",{parentName:"p",href:"./creating-bots/configuration#characterconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"characterConfig"))," defined in the JavaScript code for your bot. For example, when seating a bot, you may discover\nthat the requested character type is no longer available, and you need to let the bot know. The generic type you\npass in must be ","[Serializable]","."),(0,r.kt)("h4",{id:"arguments-1"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lateJoin")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bool")),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, this bot is joining after the game started or after any initial bots have been spawned")))),(0,r.kt)("h4",{id:"return-value-1"},"Return Value"),(0,r.kt)("p",null,"None"),(0,r.kt)("h4",{id:"examples-1"},"Examples"),(0,r.kt)(u,{mdxType:"Tabs"},(0,r.kt)(d,{value:"save_config",label:"Save a new config for the connected bot",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"[Serializable]\npublic class BotCharacterConfig\n{\n    public float speed;\n}\nvar newConfig = BotCharacterConfig()\nnewConfig.speed = 1000;\nvar myBotConfig = botInformation.UpdateCharacterConfig<BotCharacterConfig>(newConfig);\n")))))}g.isMDXComponent=!0}}]);