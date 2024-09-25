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
    "what-is-regression-games",
    {
      // horizontal divider
      type: "html",
      value:
          '<span style="border-top: 1px solid var(--ifm-color-light-gray); display: block;" />',
      defaultStyle: true,
      className: "horizontal-divider",
    },

    // Getting Started
    {
      type: "category",
      label: "Getting Started",
      items: [
        "getting-started/installing-regression-games",
        "getting-started/creating-your-first-automated-test"
      ],
    },

    // Core Concepts
    {
      type: "category",
      label: "Core Concepts",
      items: [
        "core-concepts/authenticating-with-api-keys",
        "core-concepts/recording-gameplay",
        "core-concepts/gameplay-sessions",
        {
          type: "category",
          label: "Gameplay Sessions",
          items: [
            "core-concepts/gameplay-sessions/gameplay-sessions-usage"
          ],
        },
        {
          type: "category",
          label: "Bot Sequences",
          items: [
            "core-concepts/bot-sequences/getting-started-with-bot-sequences-and-segments",
            "core-concepts/bot-sequences/actions",
            "core-concepts/bot-sequences/end-criteria"
          ]
        },
        "core-concepts/validation-suites",
        "core-concepts/stability-and-exploratory-testing",
        "core-concepts/running-tests-in-the-unity-test-runner"
      ],
    },

    // Guides
    {
      type: "category",
      label: "Guides",
      items: [
        "guides/writing-advanced-validations",
        "guides/running-tests-in-editor-and-in-builds",
        "guides/interacting-with-ui-using-computer-vision",
        "guides/finding-game-breaking-bugs-with-stability-testing",
        "guides/visual-regression-testing-using-screenshot-comparison",
        "guides/writing-tests-that-rely-on-a-mixture-of-approaches"
      ],
    },
    "additional-game-samples"
  ]
};

module.exports = sidebars;
