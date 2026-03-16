# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

This is the **Lansing Tech Studio Youth Tech Workshops** site — a Jekyll-based educational platform delivering 2-hour hands-on tech workshops for students ages 12-14. Hosted at https://lansingtechstudio.org/workshops.

## Development Commands

```bash
# Install dependencies (first time)
bundle install

# Serve locally for development (auto-rebuilds on changes)
bundle exec jekyll serve

# Build the site to _site/
bundle exec jekyll build
```

Lint Markdown with `markdownlint` (config in `.markdownlint.json`).

## Architecture

**Stack:** Jekyll static site generator, Ruby 3.2.8, deployed via GitHub Pages.

**Key configs:**
- `_config.yml` — site URL, navigation structure, plugins (jekyll-relative-links)
- `Gemfile` — depends on `github-pages` gem for compatibility
- `.github/codespaces/devcontainer/devcontainer.json` — Codespaces dev environment (Node 24 + Python)

**Presentations:** Reveal.js slide decks are static HTML files (`slides.html`) stored per workshop. The framework lives in `assets/revealjs/`; update it via `assets/update-revealjs.sh`.

## Workshop Structure

Each workshop follows this standardized layout:

```
workshop-name/
├── index.md                  # Overview, goals, agenda
├── slides.html               # Reveal.js presentation
├── starter-code/
│   ├── README.md
│   ├── [editable files]
│   └── solution/             # Instructor reference only
├── resources/
│   ├── glossary.md
│   └── next-steps.md
├── student-handouts/
│   ├── vocabulary.md
│   └── worksheet.md
└── instructor-notes/
    ├── common-questions.md
    └── timing-guide.md
```

Navigation for all workshops is defined in `_config.yml` under the `navigation` key.

## Content Guidelines (from README.md)

- Workshops must work independently — students can join mid-series
- Robot persona "Lansing Techster" is used as a peer-learner guide
- Hands-on time: 60-80%; instruction: 20-40%
- Printed materials: max 6 sheets, 14pt+ font, OpenDyslexic preferred, grayscale-friendly
- Tone: "Cut scope before cutting confidence," "Momentum over perfection"

## Scripts

`scripts/` contains admin/helper scripts:
- `student-account-creator.sh` / `student-account-destroyer.sh` — bulk GitHub account management
- `create-godot-shortcut.sh` — Linux desktop launcher for Godot
- `arduino-build.sh` / `arduino-upload.sh` — Arduino helpers (untracked, new)
- `accounts.json` and `eff_large_wordlist.txt` are gitignored
