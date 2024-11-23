"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[1842],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1133:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_label:"Gameplay Sessions"},o="Gameplay Sessions",i={unversionedId:"core-concepts/gameplay-sessions",id:"core-concepts/gameplay-sessions",title:"Gameplay Sessions",description:"A Gameplay Session is automatically saved to your Regression Games account whenever you",source:"@site/docs/core-concepts/gameplay-sessions.mdx",sourceDirName:"core-concepts",slug:"/core-concepts/gameplay-sessions",permalink:"/core-concepts/gameplay-sessions",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Gameplay Sessions"},sidebar:"unitySidebar",previous:{title:"Recording Gameplay",permalink:"/core-concepts/recording-gameplay"},next:{title:"Getting Started With Bot Sequences and Segments",permalink:"/core-concepts/bot-sequences/getting-started-with-bot-sequences-and-segments"}},l={},c=[{value:"Viewing Gameplay Sessions",id:"viewing-gameplay-sessions",level:2},{value:"Using Gameplay Sessions to Create Validation Suites",id:"using-gameplay-sessions-to-create-validation-suites",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gameplay-sessions"},"Gameplay Sessions"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"Gameplay Session")," is automatically saved to your Regression Games account whenever you\nmanually ",(0,r.kt)("a",{parentName:"p",href:"recording-gameplay"},"record gameplay"),",\n",(0,r.kt)("a",{parentName:"p",href:"recording-gameplay#replaying-recordings"},"replay a recording"),", or use a feature that records its\nown gameplay such as running a ",(0,r.kt)("a",{parentName:"p",href:"bot-sequences/getting-started-with-bot-sequences-and-segments"},"Bot Sequence"),"."),(0,r.kt)("p",null,"Learn more about the data we capture through our SDK in the\n",(0,r.kt)("a",{parentName:"p",href:"recording-gameplay#recorded-data-formats"},"Recording Gameplay")," section."),(0,r.kt)("h2",{id:"viewing-gameplay-sessions"},"Viewing Gameplay Sessions"),(0,r.kt)("p",null,"You can view a list of your saved Gameplay Sessions through the\n",(0,r.kt)("a",{parentName:"p",href:"https://play.regression.gg/sessions"},"Gameplay Sessions dashboard")," in the Regression Games web interface."),(0,r.kt)("p",null,"At a glance, each Session displays a summary including the date and time it was recorded,\nduration of its gameplay, and the number of ticks captured in total.\nSelecting a Session reveals more details through a tick scrubber that allows you to view\na timeline of the game's state, user inputs, and performance data alongside a screenshot of the game\nat a specific tick."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Gameplay Sessions Dashboard",src:a(9926).Z,width:"1487",height:"1047"})),(0,r.kt)("h2",{id:"using-gameplay-sessions-to-create-validation-suites"},"Using Gameplay Sessions to Create Validation Suites"),(0,r.kt)("p",null,"A Gameplay Session is the foundation for creating a ",(0,r.kt)("a",{parentName:"p",href:"validation-suites"},"Validation Suite"),".\nData from the Session is used to determine which entities and components from your game are available to\nuse in Validation Steps defined through the ",(0,r.kt)("a",{parentName:"p",href:"validation-suites#validation-scenarios"},"Scenario Builder"),"."),(0,r.kt)("p",null,"To create a Validation Suite from a Session, select the Session from the list and click the\n",(0,r.kt)("strong",{parentName:"p"},"Create a Validation Suite From This Session")," button.\nThis will present a dialog where you'll give the Suite a name and optional description.\nOnce you create your Suite, you will be redirected to the Suite's details page in the\n",(0,r.kt)("a",{parentName:"p",href:"https://play.regression.gg/validations"},"Validation Suites dashboard"),"."),(0,r.kt)("p",null,"Alternatively, you can create a new Validation Suite from the ",(0,r.kt)("a",{parentName:"p",href:"https://play.regression.gg/validations"},"Validation Suites dashboard"),"\nby clicking the ",(0,r.kt)("strong",{parentName:"p"},"Create Suite")," button and selecting the Session you wish to use from a dropdown in the creation dialog."))}d.isMDXComponent=!0},9926:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gameplay-sessions-dashboard-86a86fdf1b2f8985d401066159431a29.png"}}]);