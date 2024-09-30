const text =  `

This .zip contains numbered JSON files, each representing the full, unaltered game state at a specific tick.
This data is used by the Regression Games web interface and backend to create and run [Validation Suites](validation-suites).

Each file contains the following data:

### Timing Information

Basic information about when this tick was captured within the context of the overall recording. 
This includes the sequential tick number (which matches the name of the file), 
the time in seconds since the start of the game, and the in-game timescale.

### Key Frame Flags

Key Frame flags indicate that important changes occurred to the game state since the previous tick was captured.
Flags are represented as an array of strings in the \`keyFrame\` field.

| Key Frame Flag              | Description                                                                                                                                                                   |
|:----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FIRST_FRAME                 | Indicates that this tick is the first tick of the recording                                                                                                                   |
| SCENE                       | Indicates that the visible scenes are different from those in the previous tick                                                                                               |
| GAME_ELEMENT                | Indicates that a game element became visible to the camera or moved off-camera. This could be from spawning, de-spawning, character movement, camera rotation, etc.           |
| GAME_ELEMENT_RENDERER_COUNT | Indicates that the number of renderers changed for a visible game element                                                                                                     |
| UI_ELEMENT                  | Indicates that a UI element became visible to the camera or moved off-camera. This could be from spawning, de-spawning, UI component or canvas group visibility changes, etc. |
| UI_PIXELHASH                | Indicates that the screen pixels of a UI component changed. This value is only relevant when using 3rd party UI systems like Coherent GameFace.                               |


### Screen Size

The size of the game's viewport at the time of recording the tick.
This is used to scale inputs like mouse movements and clicks to the correct position on the screen during replay,
and to display bounding boxes around game elements in the web interface.

### Camera Data

Information about the main camera's position, orientation, field of view, etc.
This is used to help determine which objects are visible to the player.

### Performance Metrics

A host of performance metrics are captured for each tick under the \`performance\` object.
Some of these metrics are captured at the time the tick is recorded, such as the time elapsed
since the previous tick, the number of frames rendered since the previous tick, and an average
FPS value across all frames since the previous tick.

Other metrics are captured for every frame since the previous tick. 
These are stored in an array named \`perFrameStatistics\`.
Examples of these include frame time, cpu and memory usage, and various rendering statistics.
Some per-frame statistics (namely \`engineStats\`) are collected using 
[UnityStats](https://stephenhodgson.github.io/UnityCsReference/api/UnityEditor.UnityStats.html).
UnityStats is an editor-only feature and therefore these statistics are unavailable when running outside the Unity Editor.

### Object States

The \`state\` list contains every game entity and all information about that entity that our SDK is able to scrape from the game.
An entity may be a Game Object, UI Element, [Entity Component System](https://docs.unity3d.com/Packages/com.unity.entities@1.3/manual/index.html) 
\`Entity\`, etc. depending on how your game is structured and which 
[extension packages](../getting-started/installing-regression-games#add-extension-packages-to-your-project)
you have installed alongside the core SDK.

Every entity has a unique identifier, its path in the object hierarchy or its ECS entity archetype,
which scene the entity is in, positional data, and finally a list of components.

Like the entity itself, a component can represent a wide variety of things depending on the game.
Most commonly, a component is something attached to a GameObject (like a RigidBody, Collider, or MonoBehaviour),
or a Component of an ECS entity.

This data is used to populate available entities and components in the Regression Games [Scenario Builder](validation-suites#validation-scenarios),
and is what you'll run assertions against to determine whether the game is behaving as expected.

### Inputs

Mouse and keyboard events that were sent to the game since the previous tick.
These events are reproduces during replay to simulate real user input.
Each event includes the time it was sent, and which button or key was pressed. 
Mouse events also include the position of the mouse at the time the event was sent.

`;

export default text;