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
    'players/faq'
  ],

  studiosSidebar: [
    {
      type: 'category',
      label: 'Unity',
      items: [
        {
          type: 'category',
          label: 'Unity SDK',
          items: ['studios/unity/unity-sdk/overview', 'studios/unity/unity-sdk/tutorial', 'studios/unity/unity-sdk/setup-and-integration', 'studios/unity/unity-sdk/in-editor-replay'],
        }
      ]
    },
    'studios/faq'
  ],
};

module.exports = sidebars;
