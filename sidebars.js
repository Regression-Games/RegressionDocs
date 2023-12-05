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

  unitySidebar: [
    'studios/unity/unity-sdk/overview',
    'studios/unity/tutorials/quickstart_sample_scene',
    {
      type: 'category',
      label: 'Guides',
      items: [
        'studios/unity/tutorials/first_tutorial',
        'studios/unity/tutorials/github_actions'
      ],
    },
    {
      // horizontal divider
      type: 'html',
      value: '<span style="border-top: 1px solid var(--ifm-color-light-gray); display: block;" />',
      defaultStyle: true,
      className: 'horizontal-divider'
    },
    'studios/api_reference/authentication',
    {
      type: 'category',
      label: 'Integrating with Unity',
      items: [
        'studios/unity/unity-sdk/RGState',
        'studios/unity/unity-sdk/RGAction',
        'studios/unity/unity-sdk/BotInformation',
        'studios/unity/unity-sdk/RGBotSpawnManager',
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
    'studios/platform_features/marketplace',
    {
      type: 'category',
      label: 'Bot Insights',
      items: [
          'studios/platform_features/validations',
          'studios/unity/unity-sdk/in-editor-replay'
      ]
    }
  ]
};

module.exports = sidebars;
