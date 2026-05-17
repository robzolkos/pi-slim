# pi-slim

A small [Pi](https://pi.dev) package that trims Pi's default system prompt by making the built-in Pi documentation guidance opt-in.

By default, Pi includes a documentation block telling the agent where to read Pi docs when asked about Pi itself, extensions, skills, themes, the SDK, TUI, packages, and related topics. `pi-slim` removes that block from normal turns and restores the original block only when you explicitly use `/pi`.

## Features

- Removes the default `Pi documentation ...` system-prompt block on normal turns.
- Adds a `/pi` command for one-off Pi documentation mode.
- `/pi` preserves Pi's original built-in documentation guidance for that turn instead of approximating it in a skill.
- Keeps the rest of Pi's default prompt intact: tools, guidelines, context files, skills, date, and current working directory.

## Install

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

The text after `/pi` is sent as your request, and the original Pi documentation system-prompt block is preserved for that turn.

## Package contents

```text
extensions/remove-pi-docs.ts
```

## Notes

- This package no longer uses a skill. `/pi` is an extension command.
- The command does not recreate or duplicate Pi docs guidance. It simply skips removal for the next turn, preserving Pi's original prompt block exactly as Pi generated it.
- This package does not modify Pi internals; it only rewrites the per-turn system prompt through Pi's extension API.

## License

MIT
