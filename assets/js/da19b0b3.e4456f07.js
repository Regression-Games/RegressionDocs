"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[3775],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"RGState"},o="RGState",l={unversionedId:"studios/unity/unity-sdk/RGState",id:"studios/unity/unity-sdk/RGState",title:"RGState",description:"A component that can be inherited to relay game state information to",source:"@site/docs/studios/unity/unity-sdk/RGState.mdx",sourceDirName:"studios/unity/unity-sdk",slug:"/studios/unity/unity-sdk/RGState",permalink:"/RegressionDocs/studios/unity/unity-sdk/RGState",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"RGState"},sidebar:"studiosSidebar",previous:{title:"BotInformation",permalink:"/RegressionDocs/studios/unity/unity-sdk/BotInformation"},next:{title:"RGAction",permalink:"/RegressionDocs/studios/unity/unity-sdk/RGAction"}},s={},u=[{value:"Properties",id:"properties",level:2},{value:"Class Methods",id:"class-methods",level:2},{value:"<code>public virtual Dictionary&lt;string, object&gt; GetState()</code>",id:"public-virtual-dictionarystring-object-getstate",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Return Value",id:"return-value",level:4},{value:"Examples",id:"examples",level:4},{value:"<code>public Dictionary&lt;string, object&gt; GetGameObjectState()</code>",id:"public-dictionarystring-object-getgameobjectstate",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"Return Value",id:"return-value-1",level:4}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=c("Tabs"),p=c("TabItem"),m={toc:u},y="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rgstate"},"RGState"),(0,r.kt)("p",null,"A component that can be inherited to relay game state information to\nRegression Games. Includes a few default pieces of information that can\nbe enabled from the editor when attached to a GameObject. This is a\nMonoBehaviour."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This component is likely to change soon to be more developer-friendly, by changing the\nDictionary type used to a generic serializable class that you can define.")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"objectType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"A tag that informs the bot what kind of object this is, such as an ",(0,r.kt)("inlineCode",{parentName:"td"},"enemy")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"power_up"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"syncPosition")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the state relayed will include the position of the object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"syncRotation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the state relayed will include the rotation of the object.")))),(0,r.kt)("h2",{id:"class-methods"},"Class Methods"),(0,r.kt)("h3",{id:"public-virtual-dictionarystring-object-getstate"},(0,r.kt)("inlineCode",{parentName:"h3"},"public virtual Dictionary<string, object> GetState()")),(0,r.kt)("p",null,"A function that is overrided to provide the custom state of this specific GameObject.\nFor example, you may want to retrieve and set the health of a player on the returned\nobject, or their inventory information. The default implementation returns an empty\ndictionary."),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("p",null,"None"),(0,r.kt)("h4",{id:"return-value"},"Return Value"),(0,r.kt)("p",null,"A dictionary holding additional state for this object"),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(p,{value:"health_state",label:"Relay health and team information",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'public class MyBotState: RGState\n{\n\n    /**\n     * An example that grabs states from other components, such as health and teams\n     */\n    public override Dictionary<string, object> GetState()\n    {\n        return new Dictionary<string, object>\n        {\n            {"health", GetComponent<HealthHandler>().Health},\n            {"team", GetComponent<Team>().TeamName}\n        };\n    }\n\n    ...\n\n}\n')))),(0,r.kt)("h3",{id:"public-dictionarystring-object-getgameobjectstate"},(0,r.kt)("inlineCode",{parentName:"h3"},"public Dictionary<string, object> GetGameObjectState()")),(0,r.kt)("p",null,"Returns the entire internal state for this object, which consists of the default\nstates tracked by Regression Games, and the result of any overridden GetState implementation."),(0,r.kt)("h4",{id:"arguments-1"},"Arguments"),(0,r.kt)("p",null,"None"),(0,r.kt)("h4",{id:"return-value-1"},"Return Value"),(0,r.kt)("p",null,"The state of this GameObject."))}b.isMDXComponent=!0}}]);