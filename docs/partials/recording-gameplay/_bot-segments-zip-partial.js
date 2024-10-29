const text = `

This .zip contains numbered JSON files, each representing actions that were taken since the previous tick
(such as sending mouse and keyboard inputs to control character behaviours), 
and a set of game state values that may have been affected by those actions.
These files are used to [replay the recording](#replaying-recordings).

[Bot Segments](bot-sequences/getting-started-with-bot-sequences-and-segments) are explained in more detail in their own section,
but they essentially represent actions for the replay tool to reproduce and outline conditions that should result from those actions.
Bot Segments and Sequences are powerful tools for automating testing, and
the contents of the Segments produced during recording can help you form the basis for your own custom Segments later on.

`;

export default text;