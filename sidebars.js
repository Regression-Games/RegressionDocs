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
    // DISABLED For MVP Launch.
    // "overview",
    // "quickstart",
    "tutorials/building-your-first-bot",
    // DISABLED For MVP Launch.
    // {
    //   type: "category",
    //   label: "Tutorials",
    //   items: [
    //     "tutorials/building-your-first-bot",
    //     "tutorials/github-actions"
    //   ],
    // },
    // {
    //   // horizontal divider
    //   type: "html",
    //   value:
    //     '<span style="border-top: 1px solid var(--ifm-color-light-gray); display: block;" />',
    //   defaultStyle: true,
    //   className: "horizontal-divider",
    // },
    // DISABLED For MVP Launch.
    // "pre-made-bots",
    // {
    //   type: "category",
    //   label: "Session Insights",
    //   items: [
    //       "session-insights/client-dashboard",
    //       "session-insights/in-editor-replay"
    //   ]
    // }
    {
      type: "category",
      label: "Gameplay Sessions",
      items: [
        "gameplay-sessions/gameplay-sessions-getting-started",
        "gameplay-sessions/gameplay-sessions-usage",
        "gameplay-sessions/gameplay-sessions-reference"
      ]
    },
    {
      type: "category",
      label: "Validations",
      items: [
        "validations/validations-getting-started",
        "validations/validations-scenario-builder-reference",
      ],
    },
    "authenticating-with-api-keys",
    {
      type: "category",
      label: "Generic Bots",
      items: [
        "generic-bots/monkey-bot"
      ]
    },
    {
      type: "category",
      label: "Custom Bots",
      items: [
        // DISABLED For MVP Launch.
        // "creating-bots/csharp/agent-builder",
        "creating-bots/csharp/adaptive-bots",
      ]
    }
  ],
  automatedTesting: [
    "automated-testing/overview",
    "automated-testing/getting-started",
    "automated-testing/gpt-assistant-bot",
    "automated-testing/creating-custom-components",
  ],
};

module.exports = sidebars;
