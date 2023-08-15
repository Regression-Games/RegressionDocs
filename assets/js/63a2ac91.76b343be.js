"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[4854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,g=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_label:"Using the Agent Builder"},r="Creating AIs Using the Agent Builder",s={unversionedId:"players/creating-bots/agent-builder",id:"players/creating-bots/agent-builder",title:"Creating AIs Using the Agent Builder",description:"Regression Games' Agent Builder is an easy-to-use visual editor for constructing AI behavior trees.",source:"@site/docs/players/creating-bots/agent-builder.mdx",sourceDirName:"players/creating-bots",slug:"/players/creating-bots/agent-builder",permalink:"/RegressionDocs/players/creating-bots/agent-builder",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Using the Agent Builder"},sidebar:"playersSidebar",previous:{title:"Using the Blockly Editor",permalink:"/RegressionDocs/players/creating-bots/blockly"},next:{title:"Development Requirements",permalink:"/RegressionDocs/players/creating-bots/coding/dev-requirements"}},l={},d=[{value:"What Is a Behavior Tree?",id:"what-is-a-behavior-tree",level:2},{value:"Getting Started with Agent Builder",id:"getting-started-with-agent-builder",level:2},{value:"Loading Your Tree",id:"loading-your-tree",level:2},{value:"Adding Nodes",id:"adding-nodes",level:2},{value:"Adding Code",id:"adding-code",level:3},{value:"Validating Code",id:"validating-code",level:3},{value:"Saving Your Tree",id:"saving-your-tree",level:2},{value:"Editing an AI&#39;s source code",id:"editing-an-ais-source-code",level:2}],c={toc:d},u="wrapper";function h(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-ais-using-the-agent-builder"},"Creating AIs Using the Agent Builder"),(0,o.kt)("p",null,"Regression Games' Agent Builder is an easy-to-use visual editor for constructing AI behavior trees.\nOur editor utilizes large language models like ",(0,o.kt)("a",{parentName:"p",href:"https://openai.com/blog/chatgpt"},"OpenAI's GPT-4")," to write code for you.\nThis makes our Agent Builder an excellent tool for those new to our AI libraries, or even to programming itself!"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This tool is early in development - it is prone to change and may contain bugs.\nPlease report issues and feature requests for the Agent Builder ",(0,o.kt)("a",{parentName:"p",href:"https://regression-games.sleekplan.app/feedback"},"here"),".")),(0,o.kt)("h2",{id:"what-is-a-behavior-tree"},"What Is a Behavior Tree?"),(0,o.kt)("p",null,"A behavior tree is a decision-making model used to determine which actions an agent (such as a character in a video game) should take in different situations.\nYou can think of it as a flow chart that the AI thinks through, choosing appropriate actions based on what it knows about itself and its environment.\nBehavior trees are composed of nodes organized in a hierarchical structure that start at a root node and branch out to form different paths.\nEach path represents a line of decision-making that results in one or more actions for the AI to take."),(0,o.kt)("p",null,"Each node in the tree executes logic and returns one of the following states as a result:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Running")," -> The node is currently being executed and hasn't completed yet."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Success")," -> The node has completed successfully."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Failure")," -> The node has failed. This doesn't necessarily mean an error occurred. For example, a heal action might fail if the character doesn't have any potions.")),(0,o.kt)("p",null,"Different types of nodes have different responsibilities and react differently to the states of other nodes."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Root Node"),": The beginning of the tree, where the AI starts its decision-making.\nIts job is simply to execute whatever node is below it in the tree and return its state."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Sequence Node"),": This node has one or more children and acts as a logical AND.\nIt executes its child nodes one at a time, and if any of them fail then the Sequence Node immediately fails."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Selector Node"),": This node also has one or more children, but acts as an OR.\nIt executes each of its children and if one of them succeeds, then the Selector Node immediately succeeds."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Action Node"),": This node is a leaf node, meaning it cannot have any children of its own.\nInstead, it represents an action for the AI to take such as moving in a certain direction or interacting with an object in its environment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Condition Node"),": This node is also a leaf node. It evaluates whether certain conditions have been satisfied."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Decorator Node"),': There are several kinds of Decorator Nodes, each of which can have only one child. This node modifies its child\'s state in some way.\nFor example, an "Inverter" Decorator will succeed if its child fails, and vice versa.')),(0,o.kt)("p",null,"For a deeper dive into behavior trees, their nodes, and practical examples of their usage in video games, ",(0,o.kt)("a",{parentName:"p",href:"https://www.gamedeveloper.com/programming/behavior-trees-for-ai-how-they-work"},"follow this link"),"."),(0,o.kt)("h2",{id:"getting-started-with-agent-builder"},"Getting Started with Agent Builder"),(0,o.kt)("p",null,"Create a new AI from the Bot Manager and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Agent Builder")," from the list of creation options\n(see the section on ",(0,o.kt)("a",{parentName:"p",href:"./starter-templates"},"Cloning a Starter Template")," to complete this step)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create new AI",src:n(6741).Z,width:"2942",height:"880"}),"\n",(0,o.kt)("img",{alt:"Select Creation Option",src:n(3078).Z,width:"1502",height:"1172"})),(0,o.kt)("h2",{id:"loading-your-tree"},"Loading Your Tree"),(0,o.kt)("p",null,"If you've used the Agent Builder to create a bot before, then you can locate that bot in the Bot Manager and open the Agent Builder interface.\nRegression Games will automatically load your tree from GitHub,\nbut you can click the \"Load from GitHub\" button at the top of the page at any time to revert to your most recently-saved version\n(this will discard any unsaved changes).\nOnce the interface is visible, you should see your tree and be able to edit its nodes.\nDon't forget to save when you're done!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open Agent Builder",src:n(2947).Z,width:"1764",height:"444"}),"\n",(0,o.kt)("img",{alt:"Load Your Tree",src:n(6091).Z,width:"1952",height:"682"})),(0,o.kt)("h2",{id:"adding-nodes"},"Adding Nodes"),(0,o.kt)("p",null,"Whenever you create a fresh Agent Builder project for your AI, we'll start you out with a root node and a sequence node to form the basis of your tree."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Default Tree",src:n(3652).Z,width:"3452",height:"1698"})),(0,o.kt)("p",null,"To begin building your tree, click the connector at the bottom of the sequence node and drag.\nWhen you release, you'll be presented with different types of nodes that can be added to this sequence.\nFor this demonstration, we'll create an action node.\nYou can repeat this process for any node that is allowed to have children."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select a Node Type",src:n(5733).Z,width:"1628",height:"1510"}),"\n",(0,o.kt)("img",{alt:"Create an Action Node",src:n(1558).Z,width:"1628",height:"944"}),"\n",(0,o.kt)("img",{alt:"Example Tree",src:n(8759).Z,width:"1628",height:"1362"})),(0,o.kt)("p",null,"Clicking on a node opens a panel to the right side of your screen.\nThis panel contains information about the selected node including a description of the node's type and a label, as well as a button to delete the node from the tree.\nIt's a good idea to set labels to keep track of what you want each node or branch to do.\nIf the selected node is a leaf node, such as an action or condition, then the panel will also contain fields used for defining the node's behavior via code."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open the Node Panel",src:n(8806).Z,width:"3410",height:"1982"})),(0,o.kt)("h3",{id:"adding-code"},"Adding Code"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"All samples in this section are written in Typescript, which is the only language currently supported by the Agent Builder.\nIf you'd like to see support for other languages, let us know ",(0,o.kt)("a",{parentName:"p",href:"https://regression-games.sleekplan.app/feedback"},"here"),".")),(0,o.kt)("p",null,"The nodes in your tree won't be useful until you give them some logic to execute.\nClick on a leaf node to open the side-panel. You'll see the following stub provided in the code editor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"class LeafNode extends TreeNode {\n  public override async execute(): Promise<NodeStatus> {\n    return NodeStatus.SUCCESS;\n  }\n}\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"All of your node's code must be defined within the ",(0,o.kt)("inlineCode",{parentName:"p"},"LeafNode")," class, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," method must be defined as your entrypoint into the node.\nYou may encounter errors loading your AI into a game if these are not properly defined when you save your tree.")),(0,o.kt)("p",null,"You can either manually type code into the editor (see the ",(0,o.kt)("a",{parentName:"p",href:"../supported-games/minecraft/apis/rg-bot-api"},"rg-bot API"),'), or you can have GPT do the heavy lifting for you.\nTo generate code using GPT, describe what you want this node to do in the "GPT Prompt" field then click the "Generate Code" button.\nThe editor will be disabled as code appears, and you can modify the output once it\'s finished.'),(0,o.kt)("p",null,"There are a lot of different decision-making points and available actions for our supported games,\nso let's start with something simple - getting the AI to walk around.\nThis example will have GPT use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Regression-Games/RegressionBot"},"rg-bot library for Minecraft"),"."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Generating Code will overwrite anything currently in the editor. It's a good idea to save your tree before trying out new prompts.")),(0,o.kt)("p",null,"If you enter the following prompt:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'If "wanderDistance" is not defined, then set it to 5. Then wander up to the defined "wanderDistance".\n')),(0,o.kt)("p",null,"then GPT should output code similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'class LeafNode extends TreeNode {\n  public override async execute(): Promise<NodeStatus> {\n    const bot = this.getData<RGBot>("bot");\n    if (!bot) {\n      return NodeStatus.FAILURE;\n    }\n\n    let wanderDistance = this.getData<number>("wanderDistance");\n    if (!wanderDistance) {\n      wanderDistance = 5;\n      this.setData("wanderDistance", wanderDistance);\n    }\n\n    const wanderResult = await bot.wander(0, wanderDistance);\n    if (wanderResult) {\n      return NodeStatus.SUCCESS;\n    } else {\n      return NodeStatus.FAILURE;\n    }\n  }\n}\n')),(0,o.kt)("p",null,"The above output is a good example of how properly-formatted code should look when you're generating or writing it."),(0,o.kt)("p",null,"You may notice that this code calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"getData")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"setData")," methods.\nThese can be used to share data between nodes, and it's a good practice to specify a data type for ",(0,o.kt)("inlineCode",{parentName:"p"},"getData")," to take advantage of the editor's Intellisense.\nFor instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// "bot" is available to you by default\nconst bot = this.getData<RGBot>("bot");\n\n// you can also define and retrieve your own key-value pairs\nthis.setData("myString", "Hello World");\nconst myString = this.getData<string>("myString");\n\nthis.setData("myBool", true);\nconst myBool = this.getData<boolean>("myBool");\n')),(0,o.kt)("p",null,'Using these methods, we could add a node to our tree that increases the "wanderDistance" whenever the AI has nothing important to do in the nearby area.\nThis effectively encourages the AI to move further and further from its current location if it repeatedly fails to perform any meaningful actions.\nThe prompt for this could be worded as:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'If "wanderDistance" is undefined, then set it to 5. Otherwise increase it by 2. Then succeed.\n')),(0,o.kt)("p",null,"which should produce code similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'class LeafNode extends TreeNode {\n  public override async execute(): Promise<NodeStatus> {\n    let wanderDistance = this.getData<number>("wanderDistance");\n    if (wanderDistance === undefined) {\n      this.setData("wanderDistance", 5);\n    } else {\n      this.setData("wanderDistance", wanderDistance + 2);\n    }\n      return NodeStatus.SUCCESS;\n    }\n}\n')),(0,o.kt)("p",null,"Whenever you submit a prompt, we provide additional context about our APIs and proper usages to GPT,\nbut it may still output code that doesn't follow our expected format, or code that functions differently in-game than your prompt intends.\nIf this happens, you may need to alter your prompt and re-submit it for new output, or fix the output manually.\nFor the above prompt, note that we explicitly tell GPT to succeed after incrementing \"wanderDistance\".\nIf we omit this instruction, then GPT assumes that we want to perform the wander action after updating the distance, even though we haven't told it to do so.\nThis is a good example of how GPT sometimes needs additional coaching to reach your intended result."),(0,o.kt)("h3",{id:"validating-code"},"Validating Code"),(0,o.kt)("p",null,'The embedded code editor offers standard syntax highlighting and Intellisense features for Regressions Games APIs.\nTo take this a step further, GPT can analyze code from the editor and provide suggestions for fixing syntax errors, bugs, and inefficiencies.\nClicking the "Validate Code" button will cause a text box to appear with GPT\'s analysis results.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Validate Code",src:n(8834).Z,width:"3232",height:"1678"})),(0,o.kt)("p",null,"Let's give this a try with some code that we know is inefficient.\nThe following code attempts to find all the rabbits and chickens nearby, but it searches an unnecessarily large area.\nCopy and paste it into your node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"class LeafNode extends TreeNode {\n  public override async execute(): Promise<NodeStatus> {\n    const bot = this.getData<RGBot>('bot');\n\n    const attackableAnimals = await bot.findEntities({\n      entityNames: ['Rabbit', 'Chicken'],\n      attackable: true,\n      maxDistance: Infinity\n    });\n\n    if (attackableAnimals.length == 0) {\n      return NodeStatus.FAILURE;\n    }\n\n    return NodeStatus.SUCCESS;\n  }\n}\n")),(0,o.kt)("p",null,'When you click the "Validate Code" button,\nGPT should warn you that ',(0,o.kt)("inlineCode",{parentName:"p"},"maxDistance")," should be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"100")," or less, rather than ",(0,o.kt)("inlineCode",{parentName:"p"},"Infinity"),"."),(0,o.kt)("p",null,"You can close validation results at any time and reopen them by clicking the clipboard icon."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ReOpen Validation Results",src:n(7653).Z,width:"1686",height:"844"})),(0,o.kt)("h2",{id:"saving-your-tree"},"Saving Your Tree"),(0,o.kt)("p",null,"Save your tree early and often! Any changes made to your AI will be lost if you leave the Agent Builder without saving."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Save Your Tree",src:n(6583).Z,width:"1952",height:"682"})),(0,o.kt)("h2",{id:"editing-an-ais-source-code"},"Editing an AI's source code"),(0,o.kt)("p",null,"Whenever you save your tree, multiple files are pushed to GitHub - a config file named ",(0,o.kt)("inlineCode",{parentName:"p"},"agentBuilderWorkspace.json")," which defines the nodes in your tree,\nand a series of typescript files generated from the config that are used to run your AI in-game."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 lib\n\u2502   \u251c\u2500\u2500 BaseClasses\n\u2502   \u2502   \u251c\u2500\u2500 **/*.ts\n\u2502   \u251c\u2500\u2500 **/*.ts\n\u251c\u2500\u2500 agentBuilderWorkspace.json\n\u251c\u2500\u2500 index.ts\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 tsconfig.json\n\u2514\u2500\u2500 .gitignore\n")),(0,o.kt)("p",null,"You can modify these files in your favorite IDE for more control over the AI's behaviors and dependencies.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"./coding/dev-requirements"},"Writing Your Own Code section")," for more information."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Changes made to files other than the ",(0,o.kt)("inlineCode",{parentName:"p"},"agentBuilderWorkspace.json")," will be overwritten when you save the tree from the Agent Builder interface.\nIf you plan to modify files manually, it's a good idea to create a new GitHub repository to prevent losing your work.")))}h.isMDXComponent=!0},3078:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-from-template-5d7ad74dd9a8e4dc1cfee7bcbcff0d45.png"},3652:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/default-tree-94e55f80b37d268aa5ec31166c0321df.png"},8806:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/edit-node-bfbfd211cc70ca494c55339461817eb5.png"},8759:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/example-tree-1-3faed7f282c29dde923628b01f8603d1.png"},6091:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/load-tree-c9f2487b18b8dd58538a7c5d39773937.png"},1558:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/new-action-node-0ed481de19f01ed6763486426af3c21b.png"},2947:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/open-agent-builder-bd315e2712f11b71057d5087d44c4929.png"},7653:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/reopen-validation-results-c80bdbc4b7ea06c9a2783c0ab2a57d70.png"},6583:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/save-tree-5a4a46be876cbf8abdcc2d56eee44799.png"},5733:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/select-node-type-38ba76b782100130d8ff9046f8913ceb.png"},8834:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/validate-code-96e4505ec7f2194a31bdd871aeea66ad.png"},6741:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-bot-button-166c7415adc4d1edd3bfd940bea5127b.png"}}]);