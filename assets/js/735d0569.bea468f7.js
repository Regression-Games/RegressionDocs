"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[7445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Changelog"},i="Changelog",l={unversionedId:"changelog",id:"changelog",title:"Changelog",description:"0.0.11",source:"@site/docs/changelog.mdx",sourceDirName:".",slug:"/changelog",permalink:"/changelog",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Changelog"},sidebar:"studiosSidebar",previous:{title:"Studio FAQ",permalink:"/studios/faq"}},s={},u=[{value:"0.0.11",id:"0011",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("h2",{id:"0011"},"0.0.11"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This version is a release preview. Our product is in beta and we would love for developers to try it out and provide feedback! Contact\nus at ",(0,a.kt)("a",{parentName:"p",href:"mailto:info@regression.gg"},"info@regression.gg")," for dedicated support and access.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"New Platform Features")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/players/creating-bots/agent-builder"},"Agent Builder")," Beta - Our GPT-enabled agent builder product is live for select players, now with improved validation tools. If you","'","d like to try it out, let us know!"),(0,a.kt)("li",{parentName:"ul"},"Our documentation site is now live! This docs site includes API/SDK references, tutorials, guides, and FAQs for both players and developers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/studios/api_reference/authentication"},"API Keys")," - developers and players can now create API keys to interact with RG services"),(0,a.kt)("li",{parentName:"ul"},"New onboarding flow for players and game developers"),(0,a.kt)("li",{parentName:"ul"},"The ID of a bot can now be seen and copied within the Bot Manager"),(0,a.kt)("li",{parentName:"ul"},"Zip Bots - Bots uploaded via zip can now be downloaded"),(0,a.kt)("li",{parentName:"ul"},"The home page has been redesigned to provide players more information about getting started.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Unity SDK Features")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An early preview of our ",(0,a.kt)("a",{parentName:"li",href:"/studios/unity/unity-sdk/overview"},"Unity SDK")," for building AI agents is now live! Our docs site has a getting started guide - message us for access."),(0,a.kt)("li",{parentName:"ul"},"Developers can now create Unity bots from the Bot Manager"),(0,a.kt)("li",{parentName:"ul"},"Logs for bots can now be downloaded - available via API or through the ",(0,a.kt)("a",{parentName:"li",href:"/studios/unity/unity-sdk/in-editor-replay"},"Bot History dashboard")),(0,a.kt)("li",{parentName:"ul"},"Character configuration for Unity bots is more flexible and customizable"),(0,a.kt)("li",{parentName:"ul"},"Validation results for QA testing bots are now saved to Unity Replay files, allowing for viewing the validation directly within Unity"),(0,a.kt)("li",{parentName:"ul"},"Default settings for the SDK have been adjusted for increased ease of use"),(0,a.kt)("li",{parentName:"ul"},"Added a \u201cStop All\u201d button for stopping bots from within the Unity game")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bug Fixes")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fixed issue where choosing a bot repository via commit would throw an error"),(0,a.kt)("li",{parentName:"ul"},"Fixed a bug where bot logs would not show the correct number of lines before clearing"),(0,a.kt)("li",{parentName:"ul"},"Fixed issues where Unity bots would not teardown properly"),(0,a.kt)("li",{parentName:"ul"},"Fixed a bug where login and registration would sometimes fail"),(0,a.kt)("li",{parentName:"ul"},"Feedback button has been moved to a better spot on the screen to avoid hiding other components"),(0,a.kt)("li",{parentName:"ul"},"Fixed issue with SSL certs on certain systems")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Migration Notes")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For Unity developers: the namespace for various classes in the Unity SDK have been updated. Please make sure to add the following import declaration\nin your files that use classes from Regression Games.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using RegressionGames;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Coming Soon")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New attribute-based system for Unity SDK integration. New attributes will permit defining bot actions and state from existing functions and variables within your code."),(0,a.kt)("li",{parentName:"ul"},"CI/CD support - Instructions and examples will be added for running a Quality Assurance Bots in GitHub Actions.")))}c.isMDXComponent=!0}}]);