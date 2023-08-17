"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[9380],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var i=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=i.createContext({}),c=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return i.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?i.createElement(g,o(o({ref:e},u),{},{components:n})):i.createElement(g,o({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1268:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>b,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_label:"RGAction"},o="RGAction",l={unversionedId:"studios/unity/unity-sdk/RGAction",id:"studios/unity/unity-sdk/RGAction",title:"RGAction",description:"Represents an action that a bot can instruct the game object to take.",source:"@site/docs/studios/unity/unity-sdk/RGAction.mdx",sourceDirName:"studios/unity/unity-sdk",slug:"/studios/unity/unity-sdk/RGAction",permalink:"/studios/unity/unity-sdk/RGAction",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"RGAction"},sidebar:"studiosSidebar",previous:{title:"RGState",permalink:"/studios/unity/unity-sdk/RGState"},next:{title:"RGFindUtils",permalink:"/studios/unity/unity-sdk/RGFindUtils"}},s={},c=[{value:"Properties",id:"properties",level:2},{value:"Class Methods",id:"class-methods",level:2},{value:"<code>public abstract string GetActionName()</code>",id:"public-abstract-string-getactionname",level:3},{value:"Arguments",id:"arguments",level:4},{value:"Return Value",id:"return-value",level:4},{value:"Examples",id:"examples",level:4},{value:"<code>public abstract void StartAction(Dictionary&lt;string, object&gt; input)</code>",id:"public-abstract-void-startactiondictionarystring-object-input",level:3},{value:"Arguments",id:"arguments-1",level:4},{value:"Return Value",id:"return-value-1",level:4},{value:"Examples",id:"examples-1",level:4}],u=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},p=u("Tabs"),d=u("TabItem"),m={toc:c},g="wrapper";function b(t){let{components:e,...n}=t;return(0,a.kt)(g,(0,i.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rgaction"},"RGAction"),(0,a.kt)("p",null,"Represents an action that a bot can instruct the game object to take.\nThis ",(0,a.kt)("inlineCode",{parentName:"p"},"RGAction")," class should be inherited in a sub class, and developers\nwill need to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"StartAction")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"GetActionName")," function."),(0,a.kt)("p",null,"In most RGAction implementations, it is necessary to find GameObjects within the scene based\non the game state. See the ",(0,a.kt)("a",{parentName:"p",href:"./RGState"},(0,a.kt)("inlineCode",{parentName:"a"},"RGState"))," class for defining the game state and the\n",(0,a.kt)("a",{parentName:"p",href:"./RGFindUtils"},(0,a.kt)("inlineCode",{parentName:"a"},"RGFindUtils"))," class for helper functions to locate GameObjects within your scene."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This component is likely to change soon to be more developer-friendly, by changing the\nDictionary type used to a generic serializable class that you can define.")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("p",null,"None"),(0,a.kt)("h2",{id:"class-methods"},"Class Methods"),(0,a.kt)("h3",{id:"public-abstract-string-getactionname"},(0,a.kt)("inlineCode",{parentName:"h3"},"public abstract string GetActionName()")),(0,a.kt)("p",null,"The name of this action, which is used by the bot to request this specific action."),(0,a.kt)("h4",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,"None"),(0,a.kt)("h4",{id:"return-value"},"Return Value"),(0,a.kt)("p",null,"The name of this action (i.e. an identifier)."),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)(p,{mdxType:"Tabs"},(0,a.kt)(d,{value:"example_action",label:"Example action name",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public override string GetActionName()\n{\n    return "AttackEntity";\n}\n')))),(0,a.kt)("h3",{id:"public-abstract-void-startactiondictionarystring-object-input"},(0,a.kt)("inlineCode",{parentName:"h3"},"public abstract void StartAction(Dictionary<string, object> input)")),(0,a.kt)("p",null,"The action to kick off, given some arguments. Usually this will set up some state\nvariables inside of this component, and then most of the logic will happen in an\nupdate function."),(0,a.kt)("h4",{id:"arguments-1"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"input")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Dictionary<string, object>")),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"The arguments needed to configure this action (e.g. a position to move to)")))),(0,a.kt)("h4",{id:"return-value-1"},"Return Value"),(0,a.kt)("p",null,"None"),(0,a.kt)("h4",{id:"examples-1"},"Examples"),(0,a.kt)(p,{mdxType:"Tabs"},(0,a.kt)(d,{value:"example_file",label:"Full example of an action file",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'public class RGPlayerMoveAction : RGAction\n{\n    \n    private Vector3? targetPosition;\n    private Rigidbody rigidbody;\n    public float speed = 5000f;\n    public float range = 1f;\n\n    public void Awake()\n    {\n        rigidbody = GetComponent<Rigidbody>();\n    }\n\n    public override string GetActionName()\n    {\n        return "MoveToPosition";\n    }\n\n    public override void StartAction(Dictionary<string, object> input)\n    {\n        var targetX = float.Parse(input["x"].ToString());\n        var targetY = float.Parse(input["y"].ToString());\n        var targetZ = float.Parse(input["z"].ToString());\n        targetPosition = new Vector3(targetX, targetY, targetZ);\n    }\n\n    public void Update()\n    {\n        \n        // If we are in range, reset the action\n        if (targetPosition != null && Vector3.Distance((Vector3) targetPosition, transform.position) < range)\n        {\n            targetPosition = null;\n        }\n        \n        // Set the target velocity\n        if (targetPosition != null)\n        {\n            rigidbody.velocity = ((Vector3) targetPosition - transform.position).normalized * speed * Time.deltaTime;\n        }\n    }\n}\n')))))}b.isMDXComponent=!0}}]);