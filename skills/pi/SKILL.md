---
name: pi
description: Opt-in Pi documentation guidance for Pi itself, its SDK, extensions, themes, skills, prompt templates, TUI components, keybindings, custom providers, models, and pi packages.
disable-model-invocation: true
---

# Pi Documentation

PI_SLIM_ENABLE_PI_DOCS

Use this skill only when explicitly invoked by the user with `/skill:pi` or `/pi`.

When this skill is active, the pi-slim extension keeps Pi's built-in documentation guidance in the system prompt for this turn.

Follow that guidance before answering or implementing Pi-specific work:

- Read Pi docs only when the user asks about Pi itself or Pi development.
- When working on Pi topics, read the docs and examples, and follow Markdown cross-references before implementing.
- Read Pi Markdown files completely and follow links to related docs when relevant, for example `tui.md` for TUI API details.
