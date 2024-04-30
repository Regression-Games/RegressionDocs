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
      label: 'Creating Bots',
      items: [
          'creating-bots/csharp/agent-builder',
          'creating-bots/csharp/adaptive-bots',
          'creating-bots/csharp/scenario-testing'
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
    },
    {
      type: 'category',
      label: 'Gameplay Sessions',
      items: [
          'gameplay-sessions/gameplay-sessions-getting-started',
          'gameplay-sessions/gameplay-sessions-usage',
          'gameplay-sessions/gameplay-sessions-reference'
      ]
    }
  ],

  automatedTesting: [
    'automated-testing/overview',
    'automated-testing/getting-started',
    'automated-testing/gpt-assistant-bot',
    'automated-testing/creating-custom-components',
  ],
};

module.exports = sidebars;
