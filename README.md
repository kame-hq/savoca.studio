# savoca-studio

Static personal site for Jack Savoca. Single-page HTML, no build step, no framework.

- **Live (when deployed):** https://savoca.studio
- **Notes / Brief / Decisions / Stack:** `~/Obsidian/Kame House/Savoca Studio/Site/`
- **Per-app instructions for Claude:** [`CLAUDE.md`](./CLAUDE.md)

## Stack

- Static `index.html` with embedded CSS
- Vercel deploy via GitHub integration
- No Node, no framework, no build step (v1)

## Deploy

1. Initialize a Git repo here: `git init && git add . && git commit -m "v1"`
2. Create a new repo on GitHub (web UI is fine), add as remote, push
3. In Vercel dashboard: New Project → Import the GitHub repo → Deploy
4. Add `savoca.studio` as a custom domain in Vercel project settings
5. Update DNS at your registrar to point to Vercel (Vercel will show exact records)

After v1 ships: iterate based on real reactions, not pre-launch tweaks.
