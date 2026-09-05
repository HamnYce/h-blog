# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is Hamnyce's personal blog: an Astro static site (content-driven, minimal client JS) styled with Tailwind CSS + daisyUI. Blog posts are Markdown files that live directly under `src/pages/blogs/`, mirroring Astro's file-based routing — a post's directory path becomes its URL.

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server at localhost:4321
npm run build     # astro check (typecheck) + astro build to ./dist/
npm run preview   # preview the production build locally
npm run astro ... # run arbitrary Astro CLI commands (e.g. `npm run astro check`)
```

There is no test suite and no linter configured. `npm run build` is the closest thing to a correctness check since it runs `astro check` (type-checks `.astro` files and frontmatter) before building.

## Architecture

**Routing = filesystem.** Every `.astro`/`.md` file under `src/pages/` becomes a route. Blog posts live at `src/pages/blogs/<category>/.../<post>.md`, so nesting a post in a new subdirectory changes its URL. Each post's frontmatter must include `title`, `pubDate`, `tags`, and `layout` pointing back to `../../../layouts/MarkdownLayout.astro` (the relative path depth changes with nesting depth — get this wrong and the post won't render with the site chrome).

**Layouts.** `BaseLayout.astro` is the outer shell (html/head/body, page title, `Navigation` sidebar). `MarkdownLayout.astro` wraps `BaseLayout` and adds `prose` styling for rendered Markdown content; all blog posts use `MarkdownLayout` via their frontmatter `layout:` field rather than an explicit import/wrap in a `.astro` file.

**Navigation is generated, not hand-maintained.** `Navigation.astro` calls `Astro.glob("../pages/blogs/**/*.md")` at build time, walks each post's URL into a nested directory tree, and recursively renders that tree as a collapsible sidebar menu. Adding a new Markdown file under `src/pages/blogs/` automatically appears in the sidebar — no manual registration needed. `Graph.astro` similarly derives a force-directed graph (via d3, loaded from a CDN in an inline `<script>`) of how post URL segments connect, from the same `Astro.glob` post list.

**Assets.** Images referenced by posts live under `src/assets/` (mostly diagrams for ML/AI notes — RNNs, LSTMs, attention mechanisms) and are referenced by relative path from the Markdown files.

**Styling.** Tailwind is configured via `@astrojs/tailwind`; daisyUI and `@tailwindcss/typography` are enabled as plugins in `tailwind.config.mjs`. daisyUI component classes (e.g. `menu`, `dropdown`) and the `prose` typography classes are used directly in `.astro` templates rather than custom CSS.
