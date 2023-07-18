---
sidebar_label: 'Overview'
---

# Regression Games for Unity

Regression Games is building a bot platform where studios can **build and deploy bots for a variety of use cases in minutes.** We are building for scale (deploy thousands of bots), ease of use (e.g. generative AI to build bots), ease of integration (minimal impact on game development time), and feature richness (e.g. A/B bot test for engagement).

![vision](vision.png)

## Current Stage of the Product

The current state of this product should be classified as a **release preview**. We are actively talking with studios and game developers to discover the best features and use cases to tackle, and changes are happening frequently. That being said, we do have
a set of initial features and documentation that you can try now - we would absolutely love to get your [feedback](https://regression-games.sleekplan.app/feedback).

The team has focused on the foundation of supporting use cases and initial infrastructure to get bots to connect to Unity. The bulk
of our value will come from the interfaces to build bots, the scale of our infrastructure, the speed of integration, and the products
built around these bots. These are the features we are currently focusing on.

![timeline feature](timeline.png)

## SLAs and General Support

The Regression Games team offers these SLAs for our initial testing with developers. Additionally, we have a dedicated Discord
server for support, and can also create a Slack Connect channel, giving you direct access to our entire team. For access to
these channels, send an email to [aaron@regression.gg](mailto:aaron@regression.gg).

### Service Level Agreements

* A single account can run at least 10 bots concurrently
* The time from requesting a bot to be started to the time it connects to Unity will take less than 10 seconds if the bot is relying on dependencies that are common to most bots. This SLA does not cover bots that may have lots of dependencies.

## Implemented Features

The table below details and links to documentation for the features implemented on our platform. You can provide feedback on these
features on our [feedback site](https://regression-games.sleekplan.app/feedback).

| **Feature**                    | **Description**                                                                                                                   | **Documentation** |
|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|-------------------|
| Unity Integration              | A set of scripts and interfaces are provided to easily send state and actions between bots and your game objects                  | [Link](./RGBotSpawnManager)       |
| JavaScript SDK                 | A JavaScript SDK for implementing bots                                                                                            | [Link](./creating-bots/configuration)       |
| Live Reloading                 | Reload bots almost instantly without rebuilding your game, managed via GitHub                                                     | _Docs coming soon_       |
| Timeline/Replay                | All bot actions and states are preserved, with a timeline/replay feature available within Unity                                   | [Link](./in-editor-replay)       |
| Bot Code Generation            | _Only available in Minecraft, see proposals_. Create bots with low-code tools such as behavior trees powered by GPT.              | [Link](../../../players/creating-bots/agent-builder)       |
| Platform and Language Agnostic | Our protocol permits bots to eventually be written in multiple engines and languages. Vote for support in the feedback link above. | _Docs coming soon_       |


## Proposed Features

The development of our product is strongly driven by your feedback and requests. You can submit new requests on our [roadmap site](https://regression-games.sleekplan.app/feedback), or vote for existing proposals.

* **Static Flag** - A `static` flag for `RGState` that indicates the state never changes, and should only be sent once (e.g. a wall
                    that never moves, but a bot needs to know about, may be useful).
* **Strong Types for States** - `RGState` defines it's state as a dictionary of strings to objects, resulting in difficult parsing
                                this state later on. Permitting a strongly-typed and serializable object would result in better
                                state reading later on.
* **Behavior Tree Support** - The Agent Builder tool only supports our Minecraft game modes, rather than Unity game modes. This
                              feature should be brought to the Unity SDK. 
* **Bot Marketplace** - Through our protocol and platform-agnostic bot system, we have the ability to make a marketplace with
                        drag-n-drop components for bot usage (e.g. instantly available FPS bots).