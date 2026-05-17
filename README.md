# pi-slim

A small [Pi](https://pi.dev) package that trims Pi's default system prompt by making the built-in Pi documentation guidance opt-in.

By default, Pi includes a documentation block telling the agent where to read Pi docs when asked about Pi itself, extensions, skills, themes, the SDK, TUI, packages, and related topics. `pi-slim` removes that block from normal turns and restores it only when you explicitly ask for Pi docs mode.

## Features

- Removes the default `Pi documentation ...` system-prompt block on normal turns.
- Adds a hidden, user-invocable `pi` skill.
- Adds a `/pi` command as a shorter convenience wrapper around `/skill:pi`.
- Keeps the rest of Pi's default prompt intact: tools, guidelines, context files, skills, date, and current working directory.

## Install

After publishing to npm:

```bash
pi install npm:pi-slim
```

For local development from this repository:

```bash
pi install ./
```

Or run temporarily without installing:

```bash
pi -e ./
```

## Usage

Normal prompts use the slimmed system prompt.

For Pi-specific work, explicitly invoke Pi docs mode:

```text
/pi how do I build a Pi extension command?
```

or:

```text
/skill:pi how do I package a Pi skill for npm?
```

`/pi` is an extension command. `/skill:pi` is the underlying hidden skill command.

## Package contents

```text
extensions/remove-pi-docs.ts
skills/pi/SKILL.md
```

## Notes

- The `pi` skill uses `disable-model-invocation: true`, so the model should not auto-select it. You must invoke it yourself.
- The extension restores Pi's original documentation guidance for `/pi` and `/skill:pi` turns by detecting a marker in the skill content.
- This package does not modify Pi internals; it only rewrites the per-turn system prompt through Pi's extension API.

## License

MIT
