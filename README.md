<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-astro-component/refs/heads/main/media/astro-component.png" alt="Icon of Astro Component" width="256" height="256">
  <h1>Astro Component</h1>
  <a href="https://www.npmjs.com/package/@igorskyflyer/astro-component"><img src="https://img.shields.io/npm/v/@igorskyflyer/astro-component.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@igorskyflyer/astro-component"><img src="https://img.shields.io/node/v/@igorskyflyer/astro-component.svg" alt="Node version"></a>
  <a href="https://www.npmjs.com/package/@igorskyflyer/astro-component"><img src="https://img.shields.io/npm/dt/@igorskyflyer/astro-component.svg" alt="npm downloads"></a>
  <a href="https://github.com/igorskyflyer/npm-astro-component/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@igorskyflyer/astro-component.svg" alt="License"></a>
  <a href="https://liberapay.com/igorskyflyer/donate"><img src="https://img.shields.io/liberapay/receives/igorskyflyer.svg?logo=liberapay"></a>
</div>

<br>

<blockquote align="center">
  CLI Scaffolding • Test-Ready Output • Zero Config • Astro Native
</blockquote>

<h4 align="center">
  🚀 A CLI tool for bootstrapping Astro components with test-ready scaffolding, render logic, props, slots, and Vitest setup included.  🧪
</h4>

<br>

## Table of Contents

- ✨ [**Features**](#features)
- 🕵🏼 [**Usage**](#usage)
- 🎯 [**Motivation**](#motivation)
- 📝 [**Changelog**](#changelog)
- 🪪 [**License**](#license)
- 💖 [**Support**](#support)
- 🧬 [**Related**](#related)
- 👨🏻‍💻 [**Author**](#author)

<br>

## Features

- ⚡ Instantly scaffolds Astro `.astro` components with prop typing
- 🧪 Generates Vitest-compatible test files with a DOM setup
- 🧩 Supports automatic folder structuring and consistent naming conventions
- 🛠️ Optional flags for dry-run, overwrite protection, and verbose output
- 🌌 Light-weight and zero-config - just run and go

<br>

## Usage

Bootstrap Astro components into a target directory with zero config:

```bash
bunx @igorskyflyer/astro-component <dest>
```

```bash
pnpm dlx @igorskyflyer/astro-component <dest>
```

```bash
yarn dlx @igorskyflyer/astro-component <dest>
```

```bash
npx @igorskyflyer/astro-component <dest>
```

This will scaffold a test-ready Astro component suite into `<dest>`, complete with:

- 🚀 Component and entrypoint code
- 🧪 Vitest setup
- 🧩 DOM environment
- ⚙️ Render logic
- 📦 Props and slots
- 🧼 Clean file structure

<br>
<br>

To preview the generated files without writing anything, use the `--dry` flag:

```bash
pnpm dlx @igorskyflyer/astro-component <dest> --dry
```

You'll get a full log of what would be created, ideal for safe inspection before committing.

<br>

## Motivation

Every new Astro component means repeating the same setup: creating the `.astro` file, wiring up props and slots, writing a matching Vitest test, and getting the DOM environment right. Doing this by hand invites inconsistency, typos in boilerplate, and skipped tests when deadlines are tight. This tool exists to make the correct setup the default one, not the one you have to remember.

<br>

## Changelog

Read about the latest changes in the [**CHANGELOG**](https://github.com/igorskyflyer/npm-astro-component/blob/main/CHANGELOG.md).

<br>

## License

Licensed under the [**GPLv3 license**](https://github.com/igorskyflyer/npm-astro-component/blob/main/LICENSE).

<br>

## Support

<div align="center">
  If this open-source project has saved you time or improved your workflow, consider supporting its continued development via <a href="https://liberapay.com/igorskyflyer/donate"><strong>LiberaPay</a> or <a href="https://ko-fi.com/igorskyflyer"><strong>Ko-Fi</strong></a>.
  <br>
  <br>
  <a href="https://liberapay.com/igorskyflyer/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>
  <br>
  <a href="https://ko-fi.com/igorskyflyer"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Support Igor Dimitrijević (igorskyflyer) - Donate to Sustain Open-Source Projects" width="118" height="30" loading="lazy"></a>
  <br>
  <br>
  <blockquote>
    Support helps fund new open-source tools, maintenance, and documentation.
  </blockquote>
</div>

<br>

## Related

[@igorskyflyer/windev](https://www.npmjs.com/package/@igorskyflyer/windev)

> _🍃 Provides ways of checking whether a path is a legacy Windows device. 💾_

<br>

[@igorskyflyer/astro-post-excerpt](https://www.npmjs.com/package/@igorskyflyer/astro-post-excerpt)

> _⭐ An Astro component that renders post excerpts for your Astro blog - directly from your Markdown and MDX files. Astro v2+ collections are supported as well! 💎_

<br>

[@igorskyflyer/astro-escaped-component](https://www.npmjs.com/package/@igorskyflyer/astro-escaped-component)

> _🏃🏻‍♂️‍➡️ An Astro component that holds only HTML-encoded content. 📜_

<br>

[@igorskyflyer/pathexists](https://www.npmjs.com/package/@igorskyflyer/pathexists)

> _🧲 Provides ways of properly checking if a path exists inside a given array of files/directories both on Windows and UNIX-like operating systems. 🗺_

<br>

[@igorskyflyer/astro-easynav-button](https://www.npmjs.com/package/@igorskyflyer/astro-easynav-button)

> _🧭 Add an easy-to-use navigational button (jump to top/bottom) to your Astro site. 🔼_

<br>

## Author

Created by **Igor Dimitrijević ([_@igorskyflyer_](https://github.com/igorskyflyer/))**.
