const text =  `

This .zip contains numbered JSON files, each representing the full, unaltered game state at a specific tick.
This data is used by the Regression Games web interface and backend to create and run [Validation Suites](validation-suites).

Each file contains the following information:

#### Timing Information

Basic information about when this tick was captured within the context of the overall recording. 
This includes the sequential tick number (which matches the name of the file), 
the time in seconds since the start of the game, and the in-game timescale.

#### Performance Metrics

TODO: better...

Some performance metrics are recorded for each frame leading up to the tick,
while others, like render time object stats, are calculated at the time the tick is recorded.

:::caution
Some performance information in the \`engineStats\` object is collected using UnityStats.
UnityStats is an editor-only feature, so these stats are unavailable when running outside the Unity Editor.
:::


#### Object States

#### Inputs

#### Screen Size

The size of the game's viewport at the time of recording the tick.
This is used to scale inputs like mouse movements and clicks to the correct position on the screen during replay,
and to display bounding boxes around game elements in the web interface.

#### Key Frame Flags

Key Frame flags indicate that important changes occurred to the game state since the previous tick was captured.
Flags are represented as an array of strings in the \`keyFrame\` field.

| Key Frame Flag              | Description                                                                                                                                                                   |
|:----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FIRST_FRAME                 | Indicates that this tick is the first tick of the recording                                                                                                                   |
| SCENE                       | Indicates that the visible scenes are different from those in the previous tick                                                                                               |
| GAME_ELEMENT                | Indicates that a game element became visible to the camera or moved off-camera. This could be from spawning, de-spawning, character movement, camera rotation, etc.           |
| GAME_ELEMENT_RENDERER_COUNT | Indicates that the number of renderers changed for a visible game element                                                                                                     |
| UI_ELEMENT                  | Indicates that a UI element became visible to the camera or moved off-camera. This could be from spawning, de-spawning, UI component or canvas group visibility changes, etc. |
| UI_PIXELHASH                | Indicates that the screen pixels of a UI component changed. This value is only relevant when using 3rd party UI system like Coherent GameFace.                                |


`;

export default text;