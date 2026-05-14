# Savoca Studio — working directory

Personal app project. Identity, voice, contrarian lens, licensing, and anti-accumulation rules already loaded from `~/.claude/CLAUDE.md` (the master file). Don't re-state them here — this file is *just* app-specific context.

## App context

- **Brief:** `/Users/savoca/Obsidian/Kame House/Savoca Studio/Site/Brief.md`
- **Decisions:** `/Users/savoca/Obsidian/Kame House/Savoca Studio/Site/Decisions.md`
- **Direction (canonical positioning):** `/Users/savoca/Obsidian/Kame House/Savoca Studio/Direction.md`
- **Brand voice:** `/Users/savoca/Obsidian/Kame House/Savoca Studio/Brand-Voice.md`
- **Ratecard (canonical pricing):** `/Users/savoca/Obsidian/Kame House/Savoca Studio/Ratecard.md`
- **Sessions:** `/Users/savoca/Obsidian/Kame House/Savoca Studio/Site/Sessions/`

Read the Brief + Direction before suggesting anything substantive. Log non-obvious decisions to `Decisions.md`. Default to writing notes/briefs into the Obsidian folder, not into this working dir.

## Stack

Next.js 16 (App Router, Turbopack) + Tailwind v4 + TypeScript. Repo `~/code/apps/savoca-studio`, deploys to `savoca.studio` via GitHub push → main. Routes: `/` (homepage sections), `/portfolio`, `/resources` + `/resources/[vertical]` (playbooks), `/pitch/[vertical]` (pitch decks, print to PDF via `pitch.css`), `/calculator`, `/book`, `/thanks`.

## Brand fidelity — canonical, non-negotiable

**This caused a real miss (2026-05-14): the pitch deck hardcoded a raw `§` in the wrong font and ignored the logo component. Do not repeat it.**

### Fonts — the CSS var names are misleading, read carefully

| CSS var | Actual font | Use |
|---|---|---|
| `--font-fraunces` | **Newsreader** | display serif — `.font-serif`, all headings |
| `--font-fraunces-mono` | **Fraunces** | loaded ONLY for the `§` glyph (inside `SVInitial`/`SVMonogram`) |
| `--font-inter` | Inter | body/sans — `.font-sans` |
| `--font-jetbrains-mono` | JetBrains Mono | mono labels, eyebrows — `.font-mono` |

Use the `.font-serif` / `.font-sans` / `.font-mono` classes or the `--font-*` vars. Never write a raw `font-family`.

### Logo + the § mark

- **The `§` IS the logo** (confirmed by Master Roshi 2026-05-14). The full lockup is the `§` mark + the wordmark **together** (like the nav). Use both where the primary logo goes.
- Logo components live in `src/components/brand/v2.tsx`: `<SVInitial>` (the bare `§` mark, correct Fraunces font — THIS is the logo mark), `<SVLogo>` (the `savoca.studio` wordmark), `<SVMonogram>` (circular `§` logo).
- The `§` is a brand atom **ONLY** through those components. **Never type a raw `§` character** in JSX/CSS — it inherits the wrong font every time. If a `§` belongs somewhere, it's `<SVInitial>`.
- Brand name in prose / titles / labels = **Savoca Studio** (capitalized, with a space). `savoca.studio` lowercase is the domain/URL/email only — keep it lowercase there. The wordmark stylizes the name as "Savoca.studio"; that styling lives in `<SVLogo>` — don't hand-write it. (Locked 2026-05-14 after a round-trip: do NOT lowercase "Savoca Studio" in copy.)

### Color

`var(--…)` tokens from `globals.css` (`--ink`, `--paper`, `--bone`, `--money`, `--money-2`, `--signal`, `--gold`, `--steel`, `--rule`). No raw hex for brand colors.

## Pre-create checklist — run BEFORE building or editing any brand surface

Any page, section, pitch deck, PDF, playbook — before writing it:

1. **Logo** → use `<SVLogo>`/`<SVInitial>`/`<SVMonogram>`. Never hardcode a mark or raw `§`.
2. **Fonts** → `.font-serif`/`.font-sans`/`.font-mono` or `--font-*` vars. Never raw `font-family`.
3. **Color** → `var(--…)` tokens. No hex literals.
4. **Brand name** → "Savoca Studio" in copy; `savoca.studio` only as the domain.
5. **Touching an existing artifact** (deck, PDF route, page with its own CSS) → audit it against `brand/v2.tsx` + `globals.css` FIRST. An artifact existing is NOT proof it's on-brand — it may predate the brand system.
6. **PDF output** → render → `pdftoppm` → Read the page PNGs → verify → only then call it done.

## Public-brand reminder

This is **public** material. Use **Jack Savoca** only. Do NOT use the "Master Roshi" nickname or any DBZ team naming — those are strictly internal.
