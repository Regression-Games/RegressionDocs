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
    'overview',
    'quickstart',
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/building-your-first-bot',
        'tutorials/github-actions'
      ],
    },
    {
      // horizontal divider
      type: 'html',
      value: '<span style="border-top: 1px solid var(--ifm-color-light-gray); display: block;" />',
      defaultStyle: true,
      className: 'horizontal-divider'
    },
    'authenticating-with-api-keys',
    {
      type: 'category',
      label: 'Integrating with Unity',
      items: [
        'integrating-with-unity/defining-states',
        'integrating-with-unity/defining-actions',
        'integrating-with-unity/BotInformation',
        'integrating-with-unity/seating-and-spawning-bots',
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
            'creating-bots/csharp/configuration',
            'creating-bots/csharp/adaptive-bots',
            'creating-bots/csharp/scenario-testing',
            'creating-bots/csharp/utilities'
          ]
        },
        {
          type: 'category',
          label: 'JavaScript Reference',
          items: [
            'creating-bots/javascript/configuration',
            'creating-bots/javascript/adaptive-bots',
            'creating-bots/javascript/scenario-testing',
            'creating-bots/javascript/agent-builder'
          ]
        },
      ]
    },
    'pre-made-bots',
    {
      type: 'category',
      label: 'Session Insights',
      items: [
          'session-insights/client-dashboard',
          'session-insights/in-editor-replay'
      ]
    }
  ]
};

module.exports = sidebars;
