---
sidebar_label: 'Building your first bot'
---

# Building your first bot

:::caution

This API and reference is subject to change, as the product is in an **early preview**. We
are making changes based on your recommendations and feedback, so let us know what you think at
info@regression.gg

:::

In this tutorial, we will get a simple game up and running where a character (the green cube) needs to collect
power ups (the blue spheres). We will cover:

- How to integrate the RG Unity SDK into your game
- How to add various state and actions scripts to your game for bots to understand
- Build your first bot

![A Unity scene with a cube and a sphere](first_bot_tutorial_images/tutorial_0_start.png)

## Download the sample scene

We have a starting scene that you can play around with to get started. Download that project [here](google.com). This
scene features a prefab for a character and a power up type, as well as three scripts; one for controlling the game loop,
one for controlling the character, and one for controlling the power up logic.

## Import the Regression Games Unity Bots package

Our package is available via GitHub [here](google.com). Clone or download the repository, and import the package by clicking **Add package
from disk** in the **Package Manager** window. 

![Screenshot of the package imported into the project](first_bot_tutorial_images/tutorial_1_package.png)

## Log into Regression Games

After importing the Regression Games package, you can access the settings pane to input your email and password.
This will allow your project to access and start your bots. Access this setting page by going to **Edit** >
**Project Settings** > **Regression Games**.

![Screenshot of the settings page.](first_bot_tutorial_images/tutorial_2_settings.png)

## Add the RGOverlayCanvas

The RGOverlayCanvas prefab provides a drag and drop overlay that let's you easily start and stop bots running
in your scene. This is extremely useful when initially creating and debugging your bots.

You can find this prefab by searching in the project file window for `RGOverlayCanvas` within the Packages filter,
or by navigating to the **Packages** > **Regression Games Unity Bots** > **Runtime** > **Prefabs** folder.

![Screenshot of the search pane for the RGOverlayCanvas.](first_bot_tutorial_images/tutorial_3_RGOverlay1.png)

Drag this overlay onto your scene. Once you have this overlay available, you can click play to see this in action! A
Regression Games logo will appear at the bottom of your screen. Click this button to see a dropdown for your bots. You
likely will not have any bots yet - that's alright, we will make one soon!

![Screenshot of the RGOverlayCanvas.](first_bot_tutorial_images/tutorial_4_RGOverlay2.png)

:::info

If you don't already, your **scene needs to have an EventSystem** to make interaction with the canvas possible.
You can do this by right-clicking your scene in the Hierarchy, and adding a **GameObject** > **UI** > **Event System**.

:::


## Implement the RGBotSpawnManager

The RGBotSpawnManager is the primary point of configuration for how your bots are spawned into the game. This component
provides a few methods that can be overridden to control how bots are spawned into the scene, how they are seated into
your game logic before spawning, how they are destroyed, etc... For this particular tutorial, we will define the two
methods that must be implemented - `GetBotPrefab()` and `GetBotSpawn()`. These two methods define what prefab should be
used to control the character, and where the character should be spawned.

First, create a new file called `CharacterBotSpawnManager.cs`. It's best practice to put all Regression Games scripts
into a common directory (we put ours in an `RGScripts/` folder).

Copy and paste the follow code into this file. This component allows us to drag and drop a prefab for our bots and
a spawn point directly within our editor, and informs our SDK of these via those overridden functions.

See the [full reference](#) for all the ways you can modify the spawning of bots. Sometimes you may need to add this
bot to a multiplayer network protocol, configure information like the character type, or define special start logic.
This can all be done through the interface provided by `RGBotSpawnManager`.

```cs
using RegressionGames;
using UnityEngine;

public class CharacterBotSpawnManager : RGBotSpawnManager
{
    
    [SerializeField]
    [Tooltip("The character to spawn")]
    private GameObject rgBotPrefab;

    [SerializeField]
    [Tooltip("Spawn point for RG Bots")]
    private Transform botSpawnPoint;

    public override GameObject GetBotPrefab()
    {
        return rgBotPrefab;
    }

    public override Transform GetBotSpawn()
    {
        return botSpawnPoint;
    }

}
```

Once this component is implemented, create an empty object within the scene, and attach this component to that object. Then,
create another empty object and position it within the scene above the platform, and drag that game object into the **Bot Spawn Point** entry. Finally, find the **Player** prefab provided by the sample project (located within **Assets** > **Prefabs**), and
drag this into the **Rg Bot Prefab** entry. Regression Games now knows how to load and unload bots from your scene!

![Screenshot of the RGOverlayCanvas.](first_bot_tutorial_images/tutorial_5_spawner.png)

## Add state information to relevant GameObjects

The next step is to indicate what state in your scene is available to bots. This state is then used by bots to
make decisions on what actions to take. State is relayed to bots by attaching `RGState` components to any game
object or prefab that you want your bots to know about. 

The base implementation of `RGState` provided by Regression Games relays default information such as a `type`, `position`,
and a unique identifier. In this sample scene, we will use this default state information, but of course you may need
to provide additional state, such as a players team, health, if a door is open, etc...

In this scene, we open the `Player` and `PowerUp` prefabs, and add a component, searching for "RG State". Once that
component is added to the prefab, change the `Object Type` to `PowerUp` for the PowerUp, and change it to `Player`
for the player. Make sure to save these prefabs!

![Screenshot of the prefab with a RG State script.](first_bot_tutorial_images/tutorial_6_prefab.png)

That's all you need to do for your bot to see the state of the game!

## Implement actions your bot can take



## Activate and start Regression Games in your game loop