---
sidebar_label: Getting Started
---

# Getting Started with Automated Testing

This quick walk-through will show you how to integrate the Regression Games Automated Testing package into your game, 
and how to use the built-in "Monkey Bot",
which is a bot that randomly clicks on UI elements in your game,
recording state along the way. 

## A sample game to start with

If you have a game you want to automate, you can skip this step.
But if you just want to check the package out and don't have an active game project,
we recommend using the Boss Room Co-Op Sample Project from Unity.
You can download it from GitHub: [https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop](https://github.com/Unity-Technologies/com.unity.multiplayer.samples.coop)

Once downloaded, open the project in Unity.
Navigate to the **Scenes** folder in the Project window and open the **MainMenu** scene.
Use this scene for the rest of the tutorial.

TODO: Screenshot of the MainMenu scene

## Installing the package

Our package is available at [https://github.com/Regression-Games/RegressionGames.Unity.Testing](https://github.com/Regression-Games/RegressionGames.Unity.Testing).
Import it into your game by clicking **Window > Package Manager** in the Unity menu,
and then clicking the **+** button in the top left corner of the Package Manager window.
Select **Add package from git URL** and paste in the following URL:

```
https://github.com/Regression-Games/RegressionGames.Unity.Testing.git?path=src/gg.regression.unity.testing#v0.0.1
```

* **NOTE**: The package uses [TextMeshPro](https://docs.unity3d.com/Manual/com.unity.textmeshpro.html) to provide UI elements. If you are prompted by Unity to add TextMeshPro assets to your project, please add them.
* **NOTE**: The package uses [Newtonsoft Json](https://docs.unity3d.com/Packages/com.unity.nuget.newtonsoft-json@3.1/manual/index.html) to serialize state for recordings.

TODO: Screenshot of package manager dialog and import

## Adding the Automation Controller and components to your scene

Once the package is installed, you need to add an Automation Controller to the scene you wish to automate.
The Automation Controller is the hub for all automation in a scene.
Bots are spawned as children of the Automation Controller,
and Entity Discoverers (see below) should be added as children of the Automation Controller.
The Controller also provides APIs for spawning bots and managing recordings (via a separate, Automation Recorder component attached to the same object).

To add the Automation Controller to your scene, click **GameObject > Regression Games > Automation Controller** in the Unity menu.

TODO: Screenshot of Automation Controller in menu

## Adding Entity Discoverers to your scene

In order to automate entities in your game, the Automation Controller needs to be able to find them.
The Automation Controller uses Entity Discoverers to find entities in the scene that can be automated.
The package provides a few built-in Entity Discoverers, but you can also create your own.
To add one of the built-in discoverers, open the **GameObject > Regression Games > Discovery** menu and select the discoverer you want to add:

TODO: Screenshot of Entity Discoverer menu

As long as you have an Automation Controller in your scene, the Entity Discoverer will be **automatically** be added as a child of the Automation Controller, no matter what object is selected in the Hierarchy window.

TODO: Screenshot of spawned Entity Discover.

For this example, we recommend spawning the "UI Element Discoverer", which will find all the UI elements in your scene.
Elements will provide various states that can be recorded, such as the opacity and interactability of a Canvas Group.
Some elements provide actions that the bot can take, such as clicking on a Button.

## Adding the Overlay UI

For simple scenarios, we provide an Overlay UI that can be used to spawn bots in the scene.
This allows you to quickly try out automations without having to write code to manage the bots.
To add the Overlay UI, click **GameObject > Regression Games > Overlay UI** in the Unity menu.

TODO: Screenshot of Overlay UI menu

The Overlay UI provides a small button in the bottom-right corner of the game.
When clicked, this button will open a dialog that shows you a list of available bots that can be spawned.
You can customize which bots appear in this list using the "Available Bots" property on the Overlay UI component.

TODO: Screenshot of Available Bots property

By default, the Overlay UI includes the built-in "Monkey Bot", which is a bot that randomly clicks on UI elements in your game and records a screenshot of the game after each click.

## Running the Monkey Bot

Now that you have the Automation Controller, UI Element Discoverer, and Overlay UI in your scene, you can run an example with the Monkey Bot.

1. Click the **Play** button in the Unity Editor to start the game.
1. Click the button in the bottom-right corner of the game to open the Overlay UI.
1. Choose the "Monkey Bot" from the list of available bots and click **Start Bot**.
1. The overlay will close and you'll see the Monkey Bot activating UI elements randomly in your game.
1. After a few seconds, open the overlay again and click **Stop** next to the Monkey Bot.

TODO: GIF of Monkey Bot running

## Viewing recordings

Whenever you spawn a bot using the Overlay UI, a recording is automatically started.
When that bot stops, the recording is automatically stopped.
You can view the recordings by clicking on the "Automation Controller" object in the Hierarchy window.
On the inspector, find the "Automation Recorder" component and click the **View Recordings...** button.
The directory in which the recordings are stored will open in your file explorer.

TODO: Screenshot of "View Recordings..." button

TODO: Screenshot of recordings directory

Each recording is an `.rgrec.zip` file.
Inside these ZIP files are:

1. A `recording.json` file which contains global metadata about the recording (when it was made, who made it, etc.)
1. A series of `snapshot.[frameNumber].json` files that contain all the state captured for each frame of the recording. Frames with no state changes are not included in the recording, so if a given frame `N` is missing, it means that the state of the game did not change between frames `N-1` and `N`.
1. A series of `screenshot.[frameNumber].png` files that contain a screenshot of the game for each frame that a screenshot was requested. Bots, and your game code, can use an API on the Automation Controller to request a screenshot at any time. For example, the Monkey Bot requests a screenshot for the frame immediately after it clicks on a UI element.

TODO: Screenshot of recording contents