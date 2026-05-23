# PAPI LOTUS — landing page

The dark cinematic landing page for [PAPI LOTUS](https://papilotus.com).
Static HTML/CSS/JS — no framework, no build step. Deploys anywhere.

> *"Papi Lotus is not posting content. Papi Lotus is sending signals from a world people want to enter."*

---

## What's in here

This site lives in the repo's `docs/` folder so GitHub Pages can serve it while the
project root stays the command center (calendar, clip factory, prompt pack, strategy).

```
docs/
├── index.html          # main landing page
├── lyrics.html         # lyrics page (per-release)
├── 404.html            # signal-lost page
├── styles.css          # all styling
├── script.js           # live clock, scroll reveals, form handler
├── assets/
│   └── favicon.svg     # lotus mark
├── .gitignore
├── .nojekyll           # tells GitHub Pages: serve as-is, no preprocessing
└── README.md
```

---

## Preview locally (30 seconds)

Any of these work — pick what's installed:

```bash
# Python (almost certainly already on your computer)
cd docs
python3 -m http.server 8000
# Then open: http://localhost:8000

# OR Node
npx serve

# OR just double-click index.html
# (most things work but some features need a server)
```

---

## Deploy it (pick one)

### Option A · GitHub Pages (free, easiest, 2 minutes)

The site is already committed under `docs/` on `main`. To turn Pages on:
1. Go to the repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / folder: **/docs**
4. Save → wait ~1 minute
5. Your site is live at `https://bro-therapy.github.io/Papilotus-website/`

Future changes go through a branch + pull request, then merge to `main` — Pages
redeploys automatically on merge. No force-pushing the repo.

To use a custom domain (e.g. `papilotus.com`):
- Add a file called `CNAME` inside `docs/` with your domain inside
- Configure your DNS to point to GitHub Pages' IPs
- Change the "return to home" link in `docs/404.html` from `/Papilotus-website/` back to `/`

### Option B · Vercel (also free, faster, prettier dashboard)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repo
3. Framework preset: **Other**
4. Click Deploy
5. Live in ~30 seconds at `your-project.vercel.app`

### Option C · Netlify

1. [app.netlify.com](https://app.netlify.com) → Add new site → Import from Git
2. Pick the repo, leave settings as default, Deploy

All three auto-deploy when you push new commits.

---

## Customize the content

Most of what you'll change is plain HTML text inside `index.html`. Find these and swap:

| In `index.html` look for… | Replace with |
|---|---|
| `MOTEL SAINT` | your actual release/era name (3 places: cover, title, runtime row) |
| `07.XX.2026` | the actual release date |
| `03:17` | the actual song runtime |
| `this one sat in the dark too long…` | your release description |
| The `<div class="video-placeholder">` block | your real YouTube iframe — example commented in the file |
| `href="#"` on smart links | your actual Spotify / Apple / YouTube / pre-save URLs |
| `https://formspree.io/f/YOUR_FORM_ID` | your real Formspree (or other) email endpoint |
| Social link `href="#"` in the footer | your actual TikTok / Instagram / YouTube / Spotify URLs |
| `iampapilotus@gmail.com` | your booking email |

For the lyrics page (`lyrics.html`):
- Replace placeholder lyric `<p>` blocks with your real lyrics
- Section labels live in `<span class="lyrics-section">VERSE 1</span>` etc.

---

## Wire up the email form (3 minutes)

The form on the homepage is set up but not connected to anything yet. Use **Formspree** (free tier covers most cases):

1. Go to [formspree.io](https://formspree.io/) and create a free account
2. Create a new form, copy the endpoint URL (looks like `https://formspree.io/f/xyzabc123`)
3. In `index.html`, find this line:
   ```html
   <form class="email-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" novalidate>
   ```
4. Replace `YOUR_FORM_ID` with your actual ID. Done.

The page already includes fetch-based submission so users stay on-page and see a "signal received" confirmation. No reload, no janky redirect.

**Don't want Formspree?** Other options that work without changing the JS:
- [Beehiiv](https://beehiiv.com/) — replace the entire `<form>` with their embed snippet
- [ConvertKit](https://convertkit.com/) — same
- [Mailchimp](https://mailchimp.com/) — same

---

## Customize the look

Everything visual lives in `styles.css`. Top of the file has CSS variables you can swap:

```css
:root {
  --wine: #54162D;      /* primary accent */
  --neon: #B32047;      /* hot accent */
  --chrome: #BFC5D2;    /* light text/UI */
  --gold: #D59631;      /* gold accent */
  --bone: #F6F1EA;      /* brightest text */
  /* ...etc */
}
```

Want a different era palette? Change those values, save, refresh. Whole site re-themes.

Want lighter grain? Find `.grain { opacity: 0.06; ... }` and lower.
Want no scanlines? Find `.scanlines` and set `display: none;`.
Want no letterbox bars? Find `.letterbox` and set `display: none;`.

---

## Add real signal feed images

The 6 tiles in the Signal Feed section are CSS-only placeholders. Replace them with real images:

```html
<!-- BEFORE (placeholder) -->
<a class="signal-tile" href="#" style="--tile-tone: var(--wine);">
  <div class="signal-tile-inner"></div>
  <div class="signal-tile-meta">07.02 — 03:17 AM</div>
  <div class="signal-tile-label">archive 001</div>
</a>

<!-- AFTER (real image) -->
<a class="signal-tile" href="https://instagram.com/p/YOUR_POST_ID/">
  <img src="assets/signal-1.jpg" alt="archive 001" />
  <div class="signal-tile-meta">07.02 — 03:17 AM</div>
  <div class="signal-tile-label">archive 001</div>
</a>
```

You'd add a small CSS rule for the img:
```css
.signal-tile img { width: 100%; height: 100%; object-fit: cover; }
```

---

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (animations disable automatically for users who request it)
- Mobile-first, breakpoints at 880px and 540px
- Fonts loaded with `preconnect` for faster paint
- No external JS dependencies — entire site is under 50KB uncompressed
- Lighthouse should score 95+ on every category out of the box

---

## License

The code is yours — do whatever you want with it.

The brand identity (name, lyrics, visuals) belongs to the artist.
