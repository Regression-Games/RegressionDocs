/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  playersSidebar: [
    'players/account-setup',
    {
      type: 'category',
      label: 'Supported Games',
      items: [
        {
          type: 'category',
          label: 'Minecraft',
          items: [
              'players/supported-games/minecraft/requirements',
              'players/supported-games/minecraft/ultimate-collector',
              'players/supported-games/minecraft/capture-the-flag',
              {
                type: 'category',
                label: 'APIs',
                items: ['players/supported-games/minecraft/apis/rg-bot-api', 'players/supported-games/minecraft/apis/ctf-utils']
              },
              {
                type: 'category',
                label: 'Tutorials',
                items: ['players/supported-games/minecraft/tutorials/trash-talking-bot', 'players/supported-games/minecraft/tutorials/hunter-bot']
              }
          ],
        },
      ]
    },
    {
      type: 'category',
      label: 'Creating AIs',
      items: [
        'players/creating-bots/starter-templates',
        'players/creating-bots/blockly',
        'players/creating-bots/agent-builder',
        {
          type: 'category',
          label: 'Writing Your Own Code',
          items: ['players/creating-bots/coding/dev-requirements', 'players/creating-bots/coding/upload-zip']
        }
      ]
    },
    'players/faq'
  ],

  studiosSidebar: [
    'studios/unity/unity-sdk/overview',
    {
      type: 'category',
      label: 'REST API Reference',
      items: [
        'studios/api_reference/authentication',
      ]
    },
    {
      type: 'category',
      label: 'Regression Games Unity Bots',
      items: [
        {
          type: 'category',
          label: 'SDK Reference',
          items: [
            'studios/unity/unity-sdk/RGBotSpawnManager',
            'studios/unity/unity-sdk/BotInformation',
            'studios/unity/unity-sdk/RGState',
            'studios/unity/unity-sdk/RGAction',
            'studios/unity/unity-sdk/RGFindUtils',
          ]
        },
        {
          type: 'category',
          label: 'Creating Bots',
          items: [
            {
              type: 'category',
              label: 'C# Reference',
              items: [
                'studios/unity/unity-sdk/creating-bots/csharp/configuration',
                'studios/unity/unity-sdk/creating-bots/csharp/playtest-bots',
                'studios/unity/unity-sdk/creating-bots/csharp/validation-bots'
              ]
            },
            {
              type: 'category',
              label: 'JavaScript Reference',
              items: [
                'studios/unity/unity-sdk/creating-bots/javascript/configuration',
                'studios/unity/unity-sdk/creating-bots/javascript/playtest-bots',
                'studios/unity/unity-sdk/creating-bots/javascript/validation-bots',
                'studios/unity/unity-sdk/creating-bots/javascript/agent-builder'
              ]
            },
          ]
        },
        {
          type: 'category',
          label: 'Tooling',
          items: ['studios/unity/unity-sdk/in-editor-replay',]
        },
        {
          type: 'category',
          label: 'Tutorials and Guides',
          items: [
            'studios/unity/tutorials/first_tutorial',
            'studios/unity/tutorials/github_actions'
          ],
        }
      ]
    },
    'studios/faq',
    'changelog', 
  ],
};

module.exports = sidebars;
