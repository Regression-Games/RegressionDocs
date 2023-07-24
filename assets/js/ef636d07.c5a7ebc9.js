"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[4135],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(o),y=r,g=d["".concat(l,".").concat(y)]||d[y]||k[y]||a;return o?n.createElement(g,s(s({ref:t},p),{},{components:o})):n.createElement(g,s({ref:t},p))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}y.displayName="MDXCreateElement"},7628:(e,t,o)=>{o.d(t,{ZP:()=>i});var n=o(7462),r=(o(7294),o(3905));const a={toc:[]},s="wrapper";function i(e){let{components:t,...i}=e;return(0,r.kt)(s,(0,n.Z)({},a,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create new AI",src:o(6741).Z,width:"2942",height:"880"}),"\n",(0,r.kt)("img",{alt:"Select Creation Option",src:o(9009).Z,width:"1546",height:"986"})))}i.isMDXComponent=!0},5092:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=o(7462),r=(o(7294),o(3905)),a=o(7628);const s={sidebar_label:"Using the Blockly Editor"},i="Creating Bots Using Blockly",l={unversionedId:"players/creating-bots/blockly",id:"players/creating-bots/blockly",title:"Creating Bots Using Blockly",description:"Regression Games' Blockly integration is an easy-to-use visual editor",source:"@site/docs/players/creating-bots/blockly.mdx",sourceDirName:"players/creating-bots",slug:"/players/creating-bots/blockly",permalink:"/RegressionDocs/players/creating-bots/blockly",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Using the Blockly Editor"},sidebar:"playersSidebar",previous:{title:"Cloning a Starter Template",permalink:"/RegressionDocs/players/creating-bots/starter-templates"},next:{title:"Using the Agent Builder",permalink:"/RegressionDocs/players/creating-bots/agent-builder"}},c={},p=[{value:"Getting Started with Blockly",id:"getting-started-with-blockly",level:2},{value:"Loading Your Workspace",id:"loading-your-workspace",level:2},{value:"Adding Blocks",id:"adding-blocks",level:2},{value:"Deleting Blocks",id:"deleting-blocks",level:2},{value:"Saving Your Workspace",id:"saving-your-workspace",level:2},{value:"Editing an AI&#39;s Source Code",id:"editing-an-ais-source-code",level:2}],d={toc:p},k="wrapper";function y(e){let{components:t,...s}=e;return(0,r.kt)(k,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-bots-using-blockly"},"Creating Bots Using Blockly"),(0,r.kt)("p",null,"Regression Games' ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/blockly"},"Blockly")," integration is an easy-to-use visual editor\nfor constructing AI logic using interlocking, graphical blocks that represent common code concepts\n(like variables, logical expressions, loops, etc.).\nThis is an excellent tool for players who are new to our AI libraries, or even to programming itself!"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This tool is early in development - it is prone to change and may contain bugs.\nPlease report issues and feature requests for the Blockly editor ",(0,r.kt)("a",{parentName:"p",href:"https://regression-games.sleekplan.app/feedback"},"here"),".")),(0,r.kt)("h2",{id:"getting-started-with-blockly"},"Getting Started with Blockly"),(0,r.kt)("p",null,"Create a new bot from the Bot Manager and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Blockly")," from the list of creation options\n(see the section on ",(0,r.kt)("a",{parentName:"p",href:"./starter-templates"},"Cloning a Starter Template")," to complete this step)."),(0,r.kt)(a.ZP,{mdxType:"CreateBotImages"}),(0,r.kt)("h2",{id:"loading-your-workspace"},"Loading Your Workspace"),(0,r.kt)("p",null,"If you've used the Blockly editor to create a bot before, you can locate that bot in the Bot Manager and click on it to open the editor.\nThe editor should automatically load your workspace from GitHub, but it's always a good idea to click the \"Load from GitHub\" button\nto make sure your workspace is up-to-date before making changes."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Load Workspace",src:o(4252).Z,width:"1260",height:"800"})),(0,r.kt)("h2",{id:"adding-blocks"},"Adding Blocks"),(0,r.kt)("p",null,"When you create a new Blockly AI, we'll start you out with some sample logic that makes the AI wander randomly and record how many times it dies.\nThis sample may not be the most exciting (or effective) strategy, but you can build off of it easily. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Default Blockly Logic",src:o(3283).Z,width:"1265",height:"831"})),(0,r.kt)("p",null,"To add a Block to your workspace, first click one of the tabs from the left-hand menu.\nThis will display a tray containing available Blocks for that tab.\nThen, drag a Block from the menu and drop it into the worspace. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Available Blocks",src:o(8314).Z,width:"346",height:"545"})),(0,r.kt)("p",null,"Hovering over the Block in your workspace will display a tooltip describing its current behavior.\nSome Blocks have built-in dropdowns or text inputs that you can interact with to change the Block's behavior."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Block Options and Tooltips",src:o(4217).Z,width:"315",height:"142"})),(0,r.kt)("p",null,"The tray will automatically close whenever you add a Block to the workspace, so you'll need to open it again to repeat this process. "),(0,r.kt)("h2",{id:"deleting-blocks"},"Deleting Blocks"),(0,r.kt)("p",null,"Deleting a Block from your workspace is as easy as adding one.\nSimply drag the Block to the trashcan in the lower right-hand corner of the editor."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Delete Block",src:o(905).Z,width:"1670",height:"928"})),(0,r.kt)("h2",{id:"saving-your-workspace"},"Saving Your Workspace"),(0,r.kt)("p",null,"Save your workspace early and often!\nOur client keeps a local backup of your workspace as you make changes so that you won't lose your work when you visit different bots and site features,\nbut this may not always be foolproof.\nIt's always a good idea to save your changes before switching to a different Blockly workspace or leaving the Regression Games website."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Save Your Workspace",src:o(6793).Z,width:"1260",height:"800"})),(0,r.kt)("h2",{id:"editing-an-ais-source-code"},"Editing an AI's Source Code"),(0,r.kt)("p",null,'Blockly translates the Blocks in your workspace into runnable JavaScript code.\nYou can view this code at any time by clicking the "Show Generated JavaScript" button.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Show Generated JavaScript",src:o(4423).Z,width:"2376",height:"1226"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"JavaScript Modal",src:o(4947).Z,width:"1308",height:"1530"})),(0,r.kt)("p",null,"This code can be copied and pasted into the ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," file of a JavaScript AI project\n(see our ",(0,r.kt)("a",{parentName:"p",href:"./starter-templates"},"Starter Templates")," section for a walkthrough on how to create one).\nThen, you can make changes to the code in that new project.\nThis method prevents your modifications from inadvertently breaking your Blockly project or being overwritten."),(0,r.kt)("p",null,"Alternatively, you can modify the Blockly project files directly in your favorite IDE.\nWhenever you save your current Blocks, the following files are pushed to GitHub:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A config file named ",(0,r.kt)("inlineCode",{parentName:"li"},"blocklyWorkspace.json")," which defines the Blocks in your logic"),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"index.js")," file containing JavaScript code generated from your Blocks. This is used to run your AI in-game.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 blocklyWorkspace.json\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 .gitignore\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Changes made to files other than the ",(0,r.kt)("inlineCode",{parentName:"p"},"blocklyWorkspace.json")," will be overwritten when you save your Blocks from the Blockly editor.\nIf you plan to modify files manually, we recommend creating a new GitHub repository to prevent losing your work.")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"./coding/dev-requirements"},"Writing Your Own Code section")," for more information."))}y.isMDXComponent=!0},8314:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/add-blocks-a8a35fec195b923384a3cc6bda28c1a6.png"},4217:(e,t,o)=>{o.d(t,{Z:()=>n});const n="data:image/png;base64,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"},905:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/delete-block-7309cf3bccbbb167cffb452373e6eb37.png"},4947:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/javascript-modal-61f9840623c302227b10a2917e5f597f.png"},4252:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/load-from-github-17ec1077f7afb5191bc7f4677c941db9.png"},6793:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/save-to-github-33fcc19d9f10c6616eff4c8d4e6ec45d.png"},4423:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/show-generated-javascript-4c64ab0d02cd17863bf2c029ca3cf91d.png"},3283:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/template-730756d04ee4c303ca49df029bbecd37.png"},9009:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/bot-creation-options-d59e9e9f95ff5b1138207668088b6430.png"},6741:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create-bot-button-166c7415adc4d1edd3bfd940bea5127b.png"}}]);