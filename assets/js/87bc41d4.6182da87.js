"use strict";(self.webpackChunkregression_docs=self.webpackChunkregression_docs||[]).push([[7942],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(f,s(s({ref:n},p),{},{components:t})):a.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[m]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6105:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(7462),i=(t(7294),t(3905));const r={sidebar_label:"Gameplay Sessions Technical Reference"},s="Gameplay Sessions Technical Reference",o={unversionedId:"gameplay-sessions/gameplay-sessions-reference",id:"gameplay-sessions/gameplay-sessions-reference",title:"Gameplay Sessions Technical Reference",description:"Although developers on Regression Games will often interact with the Gameplay Sessions through the web interface or",source:"@site/docs/gameplay-sessions/gameplay-sessions-reference.mdx",sourceDirName:"gameplay-sessions",slug:"/gameplay-sessions/gameplay-sessions-reference",permalink:"/gameplay-sessions/gameplay-sessions-reference",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Gameplay Sessions Technical Reference"},sidebar:"unitySidebar",previous:{title:"Using Gameplay Sessions",permalink:"/gameplay-sessions/gameplay-sessions-usage"}},l={},c=[{value:"Overview of the Schema",id:"overview-of-the-schema",level:2},{value:"Folder and File Structure",id:"folder-and-file-structure",level:3},{value:"Structure of {tick#}.json Files",id:"structure-of-tickjson-files",level:3},{value:"Game Object State",id:"game-object-state",level:4},{value:"Key Frames",id:"key-frames",level:4},{value:"Example of a Tick JSON File",id:"example-of-a-tick-json-file",level:3},{value:"How performance information is scraped",id:"how-performance-information-is-scraped",level:2}],p={toc:c},m="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gameplay-sessions-technical-reference"},"Gameplay Sessions Technical Reference"),(0,i.kt)("p",null,"Although developers on Regression Games will often interact with the Gameplay Sessions through the web interface or\nwithin the SDK itself, you may be interested in viewing and understanding the data directly. This document provides a\ntechnical overview of the Gameplay Sessions system, as well as more technical details and FAQ."),(0,i.kt)("h2",{id:"overview-of-the-schema"},"Overview of the Schema"),(0,i.kt)("h3",{id:"folder-and-file-structure"},"Folder and File Structure"),(0,i.kt)("p",null,"When a Gameplay Session is recorded, all data is stored on disk within two folders:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/unity_videos/{Application.productName}/run_{#}/screenshots")," - A folder with screenshots for each recorded tick of\nthe session. Each screenshot is named with the format ",(0,i.kt)("inlineCode",{parentName:"li"},"{tick#}.jpg"),", where ",(0,i.kt)("inlineCode",{parentName:"li"},"tick#")," is the in-game tick from the start\nof the session."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/unity_videos/{Application.productName}/run_{#}/data")," - A folder with the state and input data for each recorded\ntick of the session. Each tick is stored in a JSON file named with the format ",(0,i.kt)("inlineCode",{parentName:"li"},"{tick#}.json"),".")),(0,i.kt)("p",null,"After a recording is finished, you will not see these folders, because they will be compressed into zip files\n(",(0,i.kt)("inlineCode",{parentName:"p"},"data.zip")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"screenshots.zip")," within the ",(0,i.kt)("inlineCode",{parentName:"p"},"run_{#}")," folder)."),(0,i.kt)("p",null,"Additionally, there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"thumbnail.jpg")," file stored in this run folder, which is the screenshot from the middle of\nyour gameplay session."),(0,i.kt)("h3",{id:"structure-of-tickjson-files"},"Structure of {tick#}.json Files"),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"{tick#}.json")," file contains the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Timing information (e.g. tick number, time, time scale)"),(0,i.kt)("li",{parentName:"ul"},"Screen size information"),(0,i.kt)("li",{parentName:"ul"},"Information about the state of the game (i.e. the game objects / entities within the game on that tick)"),(0,i.kt)("li",{parentName:"ul"},"Information about inputs on that tick (i.e. keyboard, mouse)"),(0,i.kt)("li",{parentName:"ul"},"Key frames on this tick (explained below)")),(0,i.kt)("h4",{id:"game-object-state"},"Game Object State"),(0,i.kt)("p",null,"Within the ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," field, an array of objects represents the state of game objects on this tick. Depending on the\n",(0,i.kt)("a",{parentName:"p",href:"/gameplay-sessions/gameplay-sessions-usage#advanced-options"},"options you have configured")," for recording, some objects\nand state in your scene may not be present in this list."),(0,i.kt)("h4",{id:"key-frames"},"Key Frames"),(0,i.kt)("p",null,"Key frames is how the SDK marks important moments in your gameplay session. They are represented as an array of strings\nin the ",(0,i.kt)("inlineCode",{parentName:"p"},"keyFrame")," field of the ",(0,i.kt)("inlineCode",{parentName:"p"},"{tick#}.json")," file. The possible key frames are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FIRST_FRAME")," - Indicates that this tick is the first tick of the gameplay session."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SCENE")," - Indicates that the scenes visible in this tick are different from the scenes visible in the previous tick."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GAME_ELEMENT")," - Indicates that a game element became visible to the camera or went off camera this tick. This could\nbe from spawning, de-spawning, movement, or camera rotation/movement."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GAME_ELEMENT_RENDERER_COUNT")," - Indicates that a visible game element changed its number of renderers this tick."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UI_ELEMENT")," - Indicates that a visible UI element became visible to the camera or went off camera this tick. This\ncould be from spawning, de-spawning, or UI component or canvas group visibility changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UI_PIXELHASH")," - Indicates that the screen pixels of a UI component changed this tick. This value is only relevant\nwhen using 3rd party UI system like Coherent GameFace.")),(0,i.kt)("p",null,"Any time one of these events occurs on a tick, the corresponding key frame will be added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"keyFrame")," array."),(0,i.kt)("h3",{id:"example-of-a-tick-json-file"},"Example of a Tick JSON File"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "tickNumber": 2,\n  "keyFrame": [\n    "UI_ELEMENT"\n  ],\n  "time": 8.4254524,\n  "timeScale": 1,\n  "screenSize": {\n    "x": 2078,\n    "y": 1137\n  },\n  "performance": {\n    "previousTickTime": 8.4254524,\n    "framesSincePreviousTick": 0,\n    "fps": 0,\n    "engineStats": {\n      "frameTime": 0.0047242,\n      "renderTime": 0.0035487,\n      "triangles": 13910,\n      "vertices": 19124,\n      "setPassCalls": 22,\n      "drawCalls": 110,\n      "dynamicBatchedDrawCalls": 2,\n      "staticBatchedDrawCalls": 2,\n      "instancedBatchedDrawCalls": 0,\n      "batches": 110,\n      "dynamicBatches": 2,\n      "staticBatches": 1,\n      "instancedBatches": 0\n    }\n  },\n  "state": [\n    {\n      "id": -13744,\n      "path": "UI Canvas/LobbyPopup/Tabs/LobbyCreationUI/Lobby Name Input Field",\n      "scene": "MainMenu",\n      "tag": "Untagged",\n      "layer": "UI",\n      "rendererCount": 4,\n      "screenSpaceBounds": {\n        "center": {\n          "x": 1038.0159912,\n          "y": 556.3427734,\n          "z": 0\n        },\n        "extents": {\n          "x": 320.1767578,\n          "y": 32.0177001,\n          "z": 0.05\n        }\n      },\n      "worldSpaceBounds": null,\n      "position": {\n        "x": 1038.0159912,\n        "y": 556.3427734,\n        "z": 0\n      },\n      "rotation": {\n        "x": 0,\n        "y": 0,\n        "z": 0,\n        "w": 1\n      },\n      "rigidbodies": [],\n      "colliders": [],\n      "behaviours": [\n        {\n          "name": "UnityEngine.UI.Image",\n          "path": "UI Canvas/LobbyPopup/Tabs/LobbyCreationUI/Lobby Name Input Field",\n          "state": {\n            "sourceImage": "inputfield_Blank",\n            "color": {\n              "r": 1,\n              "g": 1,\n              "b": 1,\n              "a": 1\n            },\n            "material": "Default UI Material",\n            "raycastTarget": true,\n            "preserveAspect": false\n          }\n        },\n        {\n          "name": "UnityEngine.UI.InputField",\n          "path": "UI Canvas/LobbyPopup/Tabs/LobbyCreationUI/Lobby Name Input Field",\n          "state": {}\n        },\n        {\n          "name": "UnityEngine.UI.LayoutElement",\n          "path": "UI Canvas/LobbyPopup/Tabs/LobbyCreationUI/Lobby Name Input Field/Lobby Name Input Field Input Caret",\n          "state": {}\n        },\n        {\n          "name": "UnityEngine.UI.Text",\n          "path": "UI Canvas/LobbyPopup/Tabs/LobbyCreationUI/Lobby Name Input Field/InputBox",\n          "state": {\n            "text": "Enter your lobby name...",\n            "font": "Arial",\n            "fontStyle": "BoldAndItalic",\n            "fontSize": 50,\n            "color": {\n              "r": 0.9215687,\n              "g": 0.8196079,\n              "b": 0.2470588,\n              "a": 0.5\n            },\n            "raycastTarget": true\n          }\n        },\n        {\n          "name": "UnityEngine.UI.Text",\n          "path": "UI Canvas/LobbyPopup/Tabs/LobbyCreationUI/Lobby Name Input Field/InputText",\n          "state": {\n            "text": "",\n            "font": "Arial",\n            "fontStyle": "Bold",\n            "fontSize": 50,\n            "color": {\n              "r": 0.9215687,\n              "g": 0.8196079,\n              "b": 0.2470588,\n              "a": 1\n            },\n            "raycastTarget": true\n          }\n        }\n      ]\n    }\n  ],\n  "inputs": {\n    "keyboard": [],\n    "mouse": [\n      {\n        "startTime": 6.9127706,\n        "position": {\n          "x": -1,\n          "y": 0\n        },\n        "worldPosition": null,\n        "leftButton": false,\n        "middleButton": false,\n        "rightButton": false,\n        "forwardButton": false,\n        "backButton": false,\n        "scroll": {\n          "x": 0,\n          "y": 0\n        },\n        "clickedObjectIds": []\n      }\n    ]\n  }\n}\n')),(0,i.kt)("h2",{id:"how-performance-information-is-scraped"},"How performance information is scraped"),(0,i.kt)("p",null,"Performance information, such as fps, render time, and object stats are either calculated frame-by-frame, or use\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://stephenhodgson.github.io/UnityCsReference/api/UnityEditor.UnityStats.html"},"UnityStats")," class. Since\nUnityStats is an editor-only feature, some performance information, specifically that of ",(0,i.kt)("inlineCode",{parentName:"p"},"engineStats"),", is only\navailable when running in the Unity Editor."))}d.isMDXComponent=!0}}]);