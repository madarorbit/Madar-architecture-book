# MADAR Architecture Book

Official internal engineering documentation framework for the MADAR Architecture Book.

## Phase

**01 — Architecture Book Skeleton**

This repository currently provides the reusable structure, layout system, styling foundation, print foundation, and interaction layer for future Architecture Book content. It intentionally does not include chapter prose, invented company details, generated diagrams, screenshots, or placeholder paragraphs.

## Architecture Decisions

- **Static-first foundation:** The first phase uses semantic HTML, modular CSS, and dependency-free JavaScript so the book remains fast, portable, durable, and easy to publish for many years.
- **Dark-theme-first interface:** The screen experience is optimized for a premium internal engineering handbook while preserving print-specific rendering through a dedicated stylesheet.
- **Print as a first-class target:** `print.css` defines A4 page sizing, professional margins, page-break behavior, and PDF-oriented presentation rules.
- **Reusable documentation primitives:** The skeleton includes canonical patterns for cover pages, metadata, revision history, table of contents, chapters, sections, figures, diagram containers, tables, code blocks, callouts, headers, footers, and version footers.
- **Progressive enhancement:** Navigation, reading progress, keyboard accessibility, and responsive sidebar behavior are implemented without requiring a framework.
- **Separation of concerns:** Screen styles, print styles, behavior, future components, layouts, utilities, assets, and source documentation are separated by responsibility.

## Repository Structure

```text
.
├── index.html              # Semantic Architecture Book shell
├── style.css               # Screen design system and component styles
├── print.css               # A4/PDF stylesheet
├── app.js                  # Navigation, reading progress, active section behavior
├── assets/                 # Brand, media, diagram, icon, and font assets
├── components/             # Reusable documentation component guidance
├── layouts/                # Reusable page and book layout guidance
├── utilities/              # Shared utility conventions and future automation
├── docs/                   # Future controlled Architecture Book source
├── LICENSE
└── README.md
```

## Development Principles

1. Keep content and presentation concerns separate.
2. Add future chapters under `docs/` before wiring them into the book shell.
3. Treat `index.html` as the canonical rendered skeleton until a build pipeline is justified.
4. Preserve accessibility semantics for every new component.
5. Update print behavior whenever adding a new visual pattern.
6. Avoid placeholder prose; empty fields are preferable to misleading content.

## Phase 02 Readiness

The repository is ready for future teams to add controlled chapter content, asset governance, diagram standards, and optional build tooling when the documentation scale requires it.
