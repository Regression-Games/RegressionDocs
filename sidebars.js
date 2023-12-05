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
                'studios/unity/unity-sdk/creating-bots/csharp/validation-bots',
                'studios/unity/unity-sdk/creating-bots/csharp/utilities'
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
            'studios/unity/tutorials/quickstart_sample_scene',
            'studios/unity/tutorials/first_tutorial',
            'studios/unity/tutorials/github_actions'
          ],
        }
      ]
    },
    {
      type: 'category',
      label: 'Platform Features',
      items: [
        'studios/platform_features/marketplace',
        'studios/platform_features/validations',
      ]
    },
    'studios/faq',
    'changelog', 
  ],
};

module.exports = sidebars;
