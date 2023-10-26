

# Match 3 QA Agent

This agent randomly chooses tile swaps and and power ups in a Match 3 puzzle game. This agent specifically
records error stack traces, performance issues, improper matching of tiles, power up usage, level stuck
percentage, and more for a specific level in your game.

## Game Integration

In order to integrate this bot into your game, you simply need to attach one action and one state definition to
your game. These steps are listed below.

### Add the Regression Games Unity Bots SDK to your project

To add the SDK to your project, copy and paste this url into the "Add package from Git URL" option in your Package Manager:

```
https://github.com/Regression-Games/RGUnityBots.git#release-0.0.14
```

### Indicate an action for swiping

Define an [RGAction](#) called `TakeSwipe` using the [RGAction] attribute which takes in four values - the x1, y1, x2, y2 positions
to swap within the match 3 game.

Example:

```csharp
[RGAction("TakeSwipe")]
public void TakeSwipe(int x1, int y1, int x2, int y2)
{
    // Call your swipe code within your components
}
```

### Indicate the state for your board

Finally, define a state called 
