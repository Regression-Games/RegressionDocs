"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[2763],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=i,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},832:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),i=(a(7294),a(3905));const r=a.p+"assets/images/scenario-example-7f3da21015fafca301db4c0c6a077e99.png",o={sidebar_label:"Validation Suites"},s="Validation Suites",l={unversionedId:"core-concepts/validation-suites",id:"core-concepts/validation-suites",title:"Validation Suites",description:"Validation Suites verify that specific criteria are met over the course of a Gameplay Session",source:"@site/docs/core-concepts/validation-suites.mdx",sourceDirName:"core-concepts",slug:"/core-concepts/validation-suites",permalink:"/core-concepts/validation-suites",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Validation Suites"},sidebar:"unitySidebar",previous:{title:"Bot Actions",permalink:"/core-concepts/bot-sequences/actions"},next:{title:"Writing Advanced Validations",permalink:"/guides/writing-advanced-validations"}},d={},c=[{value:"Creating a Validation Suite",id:"creating-a-validation-suite",level:2},{value:"Validation Scenarios",id:"validation-scenarios",level:2},{value:"Creating a Validation Scenario",id:"creating-a-validation-scenario",level:3},{value:"Validation Steps",id:"validation-steps",level:3},{value:"Validation Rules",id:"validation-rules",level:2},{value:"Creating a Validation Rule",id:"creating-a-validation-rule",level:3},{value:"Running Validations and Viewing Results",id:"running-validations-and-viewing-results",level:2},{value:"Running a Validation Suite",id:"running-a-validation-suite",level:3},{value:"Running a Validation Scenario",id:"running-a-validation-scenario",level:3},{value:"Sharing Validation Suites",id:"sharing-validation-suites",level:2}],u={toc:c},p="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"validation-suites"},"Validation Suites"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Validation Suites")," verify that specific criteria are met over the course of a ",(0,i.kt)("a",{parentName:"p",href:"gameplay-sessions"},"Gameplay Session"),"\nto ensure your game is functioning as intended.\nA Validation Suite is composed of a collection of ",(0,i.kt)("a",{parentName:"p",href:"#validation-scenarios"},"Scenarios"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"#validation-rules"},"Rules")," and can be managed through a dashboard in the ",(0,i.kt)("a",{parentName:"p",href:"https://play.regression.gg/validations"},"Regression Games web interface")),(0,i.kt)("h2",{id:"creating-a-validation-suite"},"Creating a Validation Suite"),(0,i.kt)("p",null,"Create a Validation Suite from the ",(0,i.kt)("a",{parentName:"p",href:"https://play.regression.gg/validations"},"Validation Suites dashboard"),"\nby clicking the ",(0,i.kt)("strong",{parentName:"p"},"Create Suite")," button at the top of the page.\nEnter a name and optional description for your Suite, and choose a Base Gameplay Session.\nThis Gameplay Session will be used to create your Scenarios,\nwhich can then be run against other Gameplay Sessions in the future for regression testing."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create a Validation Suite",src:a(925).Z,width:"827",height:"535"})),(0,i.kt)("h2",{id:"validation-scenarios"},"Validation Scenarios"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Validation Scenario")," is a functional test case which asserts that specific actions were taken during\na Gameplay Session and that they produced expected changes in the game state.\nA Scenario can assert that a game scene is loaded, wait for mouse and keyboard inputs, check for the existence\nof specific game objects, and much more."),(0,i.kt)("p",null,"A Validation Suite may contain multiple Validation Scenarios.\nWhen a ",(0,i.kt)("a",{parentName:"p",href:"#running-a-validation-suite"},"Suite is executed"),", its Scenarios are run in the order they were created through the dashboard.\nScenarios run independently of each other, meaning the contents of one Scenario do not affect others.\nFor example, each Scenario starts at the first tick of a Gameplay Session, so you don't need to worry about\nwhether a Scenario succeeds by a specific tick in order to set up for the next Scenario in the list.\nEven if one Scenario fails, remaining Scenarios in the Suite will continue to run."),(0,i.kt)("h3",{id:"creating-a-validation-scenario"},"Creating a Validation Scenario"),(0,i.kt)("admonition",{title:"Ready for more?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"See our ",(0,i.kt)("a",{parentName:"p",href:"../guides/writing-advanced-validations"},"Writing Advanced Validations")," guide\nfor in-depth examples on building effective Validation Scenarios.")),(0,i.kt)("p",null,"Open your Suite in the ",(0,i.kt)("a",{parentName:"p",href:"https://play.regression.gg/validations"},"Validation Suites dashboard")," and click the ",(0,i.kt)("strong",{parentName:"p"},"Create Scenario")," button.\nThis opens the ",(0,i.kt)("strong",{parentName:"p"},"Scenario Builder"),", where you can view game state data and a screenshot for each tick in the Gameplay Session,\nand use this information to build steps for your Scenario."),(0,i.kt)("figure",null,(0,i.kt)("img",{src:r,alt:"Example Scenario"}),(0,i.kt)("figcaption",null,(0,i.kt)("i",null,"In this example, we wait for the player to be at the Main Menu and for a match hosting dialog to be open. A left mouse-click event signifies that the player has created a lobby by clicking the ",(0,i.kt)("b",null,"Host Match")," button, which should load the character selection screen. We then wait for the Rogue character class to be selected and for a splash screen representing the end of character selection to be present. Finally, we assert that the player loads into the dungeon and can see 3 Imp enemies."))),(0,i.kt)("h3",{id:"validation-steps"},"Validation Steps"),(0,i.kt)("p",null,"Validation Steps execute in the same order as they are defined in the Scenario Builder, from the top down.\nWhen a step fails, the Scenario fails and ceases execution."),(0,i.kt)("p",null,"Many steps progress through the Gameplay Session until a tick satisfies their criteria.\nThese steps are prefixed with the words ",(0,i.kt)("strong",{parentName:"p"},"Wait for"),', and they tell the next step in the Scenario to execute from that tick.\nIn this way, steps run sequentially through the Session and can be used to establish cause-and-effect relationships between game state changes.\nIf a "Wait for" step reaches the end of the Gameplay Session without encountering a tick that satisfies its criteria, then that step will fail.'),(0,i.kt)("p",null,"Other steps evaluate a single tick and pass or fail based on that tick rather than walking through the Gameplay Session.\nThese steps are ",(0,i.kt)("em",{parentName:"p"},"not"),' prefixed with "Wait for".'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Step Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Wait for Scene"),(0,i.kt)("td",{parentName:"tr",align:null},"Wait for a specific scene to be loaded or unloaded")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Wait for Key"),(0,i.kt)("td",{parentName:"tr",align:null},"Wait for one keyboard key, or a combination of keys to be pressed or released")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Wait for Mouse"),(0,i.kt)("td",{parentName:"tr",align:null},"Wait for a mouse button to be pressed or released")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Wait for Existence"),(0,i.kt)("td",{parentName:"tr",align:null},"Wait for a game object of the specified type to exist or not exist. You can optionally specify whether an exact number of objects must exist in order for this step to pass")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Wait for State"),(0,i.kt)("td",{parentName:"tr",align:null},"Wait for a game object with specific state values to exist using comparators. Comparators can use either literal values or a stored value from a previous step. You can optionally specify an exact number of game objects that must satisfy the criteria in order for this step to pass")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Store Value"),(0,i.kt)("td",{parentName:"tr",align:null},"Store a value from a game object's state to be used in later steps. Note that the entity and target value must be present when this step is executed, so be sure to place this after a step that asserts the existence of that entity.")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Many steps provide dropdowns for selecting configuration values such as game object types, state fields, and comparators.\nThe available options for these dropdowns are drawn from the Base Gameplay Session associated with the Suite.")),(0,i.kt)("h2",{id:"validation-rules"},"Validation Rules"),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"Validation Rule")," applies metric thresholds to the entirety of a Gameplay Session.\nThis is useful for detecting issues that result in performance degradation.\nA violated rule will be presented as a warning in the run results."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Rule Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Frames Per Second"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the percentage of frames in a Gameplay Session that should remain at or above a certain FPS value. This rule is violated if less than that percentage meets the FPS threshold.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Average Frames Per Second"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the minimum allowable average FPS value for the Gameplay Session. The average is computed across all frames in the Session. This rule is violated if the average FPS across the Session falls below the specified threshold.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Maximum Frame Time"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the maximum allowable frame time value for the Gameplay Session. Frame time is the amount of time spent calculating and rendering a frame, measured in milliseconds. This rule is violated if a single frame exceeds the specified threshold.")))),(0,i.kt)("h3",{id:"creating-a-validation-rule"},"Creating a Validation Rule"),(0,i.kt)("p",null,"Open your Suite in the ",(0,i.kt)("a",{parentName:"p",href:"https://play.regression.gg/validations"},"Validation Suites dashboard")," and click the ",(0,i.kt)("strong",{parentName:"p"},"Create Rule")," button.\nYou can then select the Rule type you want to add and configure the Rule's parameters.\nYou can edit the Rule at any time."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Creating a Validation Rule",src:a(1039).Z,width:"1722",height:"742"})),(0,i.kt)("h2",{id:"running-validations-and-viewing-results"},"Running Validations and Viewing Results"),(0,i.kt)("p",null,"You can either run a Suite in its entirety (including all Rules and Scenarios), or trial run an individual Scenario.\nThe latter is helpful for debugging and iterating on a Scenario."),(0,i.kt)("h3",{id:"running-a-validation-suite"},"Running a Validation Suite"),(0,i.kt)("p",null,"Open your Suite in the ",(0,i.kt)("a",{parentName:"p",href:"https://play.regression.gg/validations"},"Validation Suites dashboard"),", click the ",(0,i.kt)("strong",{parentName:"p"},"Run Suite")," button,\nand select a Gameplay Session to run it against.\nResults will be available once the Suite has finished running."),(0,i.kt)("p",null,"Recent result summaries are displayed on the Suite's page in the dashboard.\nClicking on a result summary will take you to the detailed results for that run where\nyou can see the results of each Rule, each Scenario and its steps, and the state of the game at each tick during the Session."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of a scenario",src:a(6870).Z,width:"1324",height:"1110"})),(0,i.kt)("h3",{id:"running-a-validation-scenario"},"Running a Validation Scenario"),(0,i.kt)("p",null,"To trial run an individual Scenario, open the Scenario's menu and click ",(0,i.kt)("strong",{parentName:"p"},"Run Scenario"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Open scenario menu",src:a(3019).Z,width:"647",height:"192"})),(0,i.kt)("p",null,"The Scenario's results will be shown in a dialog, but will not be persisted to your account.\nClosing the dialog will discard the results."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of a scenario",src:a(4363).Z,width:"887",height:"776"})),(0,i.kt)("h2",{id:"sharing-validation-suites"},"Sharing Validation Suites"),(0,i.kt)("p",null,"Validation Suites can be shared with other users in a read-only mode by clicking the ",(0,i.kt)("strong",{parentName:"p"},"Share")," button on the Suite's page.\nWhen a Suite is shared with you, you can view the Suite, its Rules, and its Scenarios, but you cannot edit them.\nA user does not need to have a Regression Games account at the time you share the Suite with them,\nbut users must create an account and be logged in to view the Suite and its contents.\nUsers can be removed from the Suite at any time."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of a scenario",src:a(3878).Z,width:"3394",height:"1902"})))}h.isMDXComponent=!0},1039:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-validation-rule-277eed739aa5dbdb8272727e800a75b0.png"},925:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-validation-suite-293772ef558977106206c40e4eac4800.gif"},3019:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/open-scenario-menu-388fd7a0694e8ee99620e827ea7ca21f.png"},4363:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/run-scenario-8c3734f6b0e3284f503ffe0b6374357a.png"},3878:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/share-d850b84eace983d03ce797921d6c1cba.png"},6870:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/suite-run-details-780a4208e32e2fbf96a75fc2faea036a.png"}}]);