const text = `

This .zip contains numbered JSON files, each representing a delta of the game state at a specific tick.
These files are used to [replay the recording](#replaying-recordings).

[Bot Segments](bot-sequences/getting-started-with-bot-sequences-and-segments) are explained in more detail in their own section,
but they essentially represent actions for the replay tool to produce (such as sending mouse and keyboard inputs),
and outline conditions that should result from those actions.
Bot Segments and Sequences are powerful tools for automating testing, and
the contents of the Segments produced during recording can help you form the basis for your own custom Segments later on.

`;

export default text;