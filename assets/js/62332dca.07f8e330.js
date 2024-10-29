"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[8144],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8563:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const i={sidebar_label:"Creating Your First Automated Test"},r="Creating Your First Automated Test",s={unversionedId:"getting-started/creating-your-first-automated-test",id:"getting-started/creating-your-first-automated-test",title:"Creating Your First Automated Test",description:"In this tutorial, we will get a simple automated test working in Unity using Regression Games.",source:"@site/docs/getting-started/creating-your-first-automated-test.mdx",sourceDirName:"getting-started",slug:"/getting-started/creating-your-first-automated-test",permalink:"/getting-started/creating-your-first-automated-test",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Creating Your First Automated Test"},sidebar:"unitySidebar",previous:{title:"Installing Regression Games",permalink:"/getting-started/installing-regression-games"},next:{title:"Authenticating with API Keys",permalink:"/core-concepts/authenticating-with-api-keys"}},l={},c=[{value:"(Optional) Download a Sample Game",id:"optional-download-a-sample-game",level:2},{value:"Import the Regression Games Unity Bots Package",id:"import-the-regression-games-unity-bots-package",level:2},{value:"Record Gameplay",id:"record-gameplay",level:2},{value:"Create a Validation Suite",id:"create-a-validation-suite",level:2},{value:"Creating a Validation Scenario",id:"creating-a-validation-scenario",level:3},{value:"Run the Validation Suite on New Automated Run",id:"run-the-validation-suite-on-new-automated-run",level:3},{value:"Next Steps",id:"next-steps",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-your-first-automated-test"},"Creating Your First Automated Test"),(0,o.kt)("p",null,"In this tutorial, we will get a simple automated test working in Unity using Regression Games.\nWe will show you how to record gameplay, upload a ",(0,o.kt)("a",{parentName:"p",href:"../core-concepts/gameplay-sessions"},"Gameplay Session"),",\nand use it to create a ",(0,o.kt)("a",{parentName:"p",href:"../core-concepts/validation-suites"},"Validation Suite")," for regression testing."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of results from a run",src:a(7819).Z,width:"3218",height:"1892"})),(0,o.kt)("h2",{id:"optional-download-a-sample-game"},"(Optional) Download a Sample Game"),(0,o.kt)("p",null,"Feel free to follow this tutorial within your own game,\nbut we recommend starting with a sample game if you do not have a game available.\nOur team often uses BossRoom, a simple multiplayer game created by Unity, to develop and test features.\nHowever, you can start with any game of your choosing!"),(0,o.kt)("p",null,"Download the BossRoom sample from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop"},"official GitHub repository."),"\nand open it within Unity version 2022.3 (visit the ",(0,o.kt)("a",{parentName:"p",href:"https://unity.com/releases/editor/whats-new/2022.3.27"},"Unity archive")," if\nyou can't find that version from Unity Hub).\nOnce the project is loaded, open the ",(0,o.kt)("inlineCode",{parentName:"p"},"MainMenu")," scene in ",(0,o.kt)("inlineCode",{parentName:"p"},"Assets")," > ",(0,o.kt)("inlineCode",{parentName:"p"},"Scenes"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the playground scene",src:a(5342).Z,width:"2692",height:"1676"})),(0,o.kt)("h2",{id:"import-the-regression-games-unity-bots-package"},"Import the Regression Games Unity Bots Package"),(0,o.kt)("p",null,"Follow our ",(0,o.kt)("a",{parentName:"p",href:"installing-regression-games"},"installation instructions")," to add our package to your game.\nIf you're using one of our recommended samples, you can ignore sections on extension packages."),(0,o.kt)("h2",{id:"record-gameplay"},"Record Gameplay"),(0,o.kt)("p",null,"The first step in automating a test is to ",(0,o.kt)("a",{parentName:"p",href:"../core-concepts/recording-gameplay"},"record some gameplay"),"\nand allow the SDK to upload a ",(0,o.kt)("a",{parentName:"p",href:"../core-concepts/gameplay-sessions"},"Gameplay Session")," to your Regression Games account.\nThis feature allows you to record real gameplay and play it back later to run regression tests against. Regression Games does\noffer other utilities for dynamic bots, but to get started with a simple example, we will record a click-through that\nverifies the functionality of the UI in BossRoom.\nMore specifically, we will test the following simple scenario (feel free to come up with your own if you are not using Boss Room):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The game loads into the main menu"),(0,o.kt)("li",{parentName:"ul"},"We use the mouse to click the Volume Settings button"),(0,o.kt)("li",{parentName:"ul"},"We verify that the Volume Settings panel is displayed"),(0,o.kt)("li",{parentName:"ul"},"Finally, we close the volume settings panel")),(0,o.kt)("p",null,"These actions are ",(0,o.kt)("strong",{parentName:"p"},"recorded")," and can be ",(0,o.kt)("strong",{parentName:"p"},"played back")," later. As the Session is replayed, data from the\ngame is collected, which can then be validated against using Validation Suites."),(0,o.kt)("p",null,"As shown in the short video below, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click the play button in the editor to start the game."),(0,o.kt)("li",{parentName:"ol"},"Click the red record button in the bottom right to start recording."),(0,o.kt)("li",{parentName:"ol"},"Click the Volume Settings button near the top right of the main menu."),(0,o.kt)("li",{parentName:"ol"},"Click the close button on the Volume Settings panel."),(0,o.kt)("li",{parentName:"ol"},"Click the rec recording button in the bottom right to stop recording."),(0,o.kt)("li",{parentName:"ol"},"When finished recording, click the hamburger menu next to the record button to open up a dialog for loading your\nrecording. You can find the recordings within ",(0,o.kt)("a",{parentName:"li",href:"../core-concepts/recording-gameplay#overriding-the-recording-directory"},"the recordings directory"),".\nSelect the ",(0,o.kt)("inlineCode",{parentName:"li"},"bot_segments.zip")," file and click ",(0,o.kt)("strong",{parentName:"li"},"Load Replay"),"."),(0,o.kt)("li",{parentName:"ol"},"Click the play button under the Regression Games logo to see your recording play back!")),(0,o.kt)("div",{style:{position:"relative",paddingBottom:"50.40485829959515%",height:0}},(0,o.kt)("iframe",{src:"https://www.loom.com/embed/1a88ffcad1ff49d6940473d5637e35ed?sid=336eaf3b-208c-4ea3-a0b3-c6ad3d2d2cee",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,o.kt)("h2",{id:"create-a-validation-suite"},"Create a Validation Suite"),(0,o.kt)("p",null,"With your first Gameplay Session saved, we can now write a functional test that validates the behaviour of this\nscenario! Visit ",(0,o.kt)("a",{parentName:"p",href:"https://play.regression.gg/validations"},"https://play.regression.gg/validations")," to begin creating a new\n",(0,o.kt)("a",{parentName:"p",href:"../core-concepts/validation-suites"},"Validation Suite")," using this Session."),(0,o.kt)("h3",{id:"creating-a-validation-scenario"},"Creating a Validation Scenario"),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Create Suite"),", enter a name for your Validation Suite, and select the Gameplay Session you just recorded (if\nyou don't see it, try refreshing the page). You may notice that there are two or more Sessions; these include both\nthe original Session you recorded manually, and Sessions created through automated playback. Make sure to select the one\nlowest in the list, which is the first one you created. Click ",(0,o.kt)("strong",{parentName:"p"},"Create Suite")," in the bottom right."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the validation suite creation",src:a(5660).Z,width:"1772",height:"1098"})),(0,o.kt)("p",null,"Once the Suite is created, you'll be able to select it within the Validation Suites Dashboard. Select your Suite, and\nclick ",(0,o.kt)("strong",{parentName:"p"},"Create Scenario")," in the bottom right to start creating your first functional test."),(0,o.kt)("p",null,"The editor you see here is the ",(0,o.kt)("inlineCode",{parentName:"p"},"Scenario Editor"),". It features a screenshot scrubber to see your game in action, as well\nas a state panel to see in-depth information scraped from your game. This information includes not only positional data,\nbut also MonoBehaviour properties and fields, as well as keyboard and mouse inputs. For example, for a user interface, you can\nsee information such as image sources and text values."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot the scenario builder",src:a(5660).Z,width:"1772",height:"1098"})),(0,o.kt)("p",null,"Enter a name for your scenario (we named ours ",(0,o.kt)("inlineCode",{parentName:"p"},"Verify that the volume mixer opens"),"), and hover over the pane on the left to\nsee a list of options for validation. For this scenario, we will verify that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The scene loads properly"),(0,o.kt)("li",{parentName:"ol"},"The volume settings panel appears")),(0,o.kt)("p",null,"This tool allows a wide variety of test scenarios, including mouse and key press detection, state assertions, and\nstoring values for comparison (learn more in the ",(0,o.kt)("a",{parentName:"p",href:"../../core-concepts/validation-suites#creating-a-validation-scenario"},"documentation for validations"),").\nFor now, we will keep it simple with the two steps listed above. See the screenshot above and the video below to see\nhow to add these steps (the search feature can be helpful for finding relevant elements in your scene)."),(0,o.kt)("div",{style:{position:"relative",paddingBottom:"50.40485829959515%",height:0}},(0,o.kt)("iframe",{src:"https://www.loom.com/embed/3575d3ef72ae4ebc87dc4eab668d3284?sid=336eaf3b-208c-4ea3-a0b3-c6ad3d2d2cee",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,o.kt)("p",null,"Once you are done creating these steps, click ",(0,o.kt)("strong",{parentName:"p"},"Create Scenario")," to save it. Back on the Validation Suite page, you\ncan click the options menu next to the scenario you just created to run it, by selecting the ",(0,o.kt)("strong",{parentName:"p"},"Run Scenario")," option.\nThis will immediately run this scenario on the original gameplay session and provide you with the results."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of results from a scenario",src:a(2146).Z,width:"1530",height:"726"})),(0,o.kt)("h3",{id:"run-the-validation-suite-on-new-automated-run"},"Run the Validation Suite on New Automated Run"),(0,o.kt)("p",null,"Now that this Validation Suite exists, we can run it against other Sessions recorded during automated playback of your original Session! In the top\nright of the Validation Suite, click the ",(0,o.kt)("strong",{parentName:"p"},"Run Suite")," button, and select a more recent Gameplay Session to validate.\nOnce the test is run, you can click the result within the list of runs to see a detailed view of passed and failed\nscenarios."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the validation suite runs",src:a(2532).Z,width:"2146",height:"1404"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of results from a run",src:a(7819).Z,width:"3218",height:"1892"})),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"We now have a repeatable automated Gameplay Session that can be verified using the validation tool! If you got stuck\nduring this tutorial, or want to brainstorm how to get the most of this tool, please\n",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/925SYVse2H"},"join our active Discord community"),". We are excited to make the best automation\ntools for game QA, and would love your feedback!"))}p.isMDXComponent=!0},5342:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bossroom-e2d90f0cd24bd29720d5f957f472c2e2.png"},5660:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-validation-suite-1e06e261be14acf7e407379829a9cba9.png"},2532:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/many-runs-a80de3b5750d354032f573092a032b17.png"},7819:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/run-details-cf545d899ae285e3f19cdeae414e0092.png"},2146:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/run-scenario-66214adfa78107a7f74a7a0b566e41e9.png"}}]);