# PAPI LOTUS — Project Handoff for Claude Code

**Read this first. Everything you need to operate on this project is in this document.**

-----

## TL;DR — what this is

**Papi Lotus** is a dark afterhours R&B / alt-pop artist project. The owner is releasing music and rolling it out across TikTok, Instagram, YouTube Shorts, and a website. They’re a busy solo operator, so the whole system is engineered for **batch production + minimal daily decisions** — one heavy session per week produces a week of scheduled content.

Across multiple sessions we’ve built five interlocking deliverables (calendar + strategy notes + clip factory + Higgsfield prompt pack + landing page). They form a closed loop: calendar tells you *when* to post → prompt pack tells you *what* to generate → clip factory tells you *how* to finalize → website is *where* the funnel lands.

This handoff exists so you (Claude Code) can pick up from here without re-deriving context.

-----

## Current status snapshot

|Component                             |State                                                                                        |
|--------------------------------------|---------------------------------------------------------------------------------------------|
|Brand identity + strategy docs        |✅ Provided by user as PDFs (Papi_Lotus_Master_Content_Strategy + Papi_Lotus_Branding_Package)|
|60-day content calendar (CSV)         |✅ Built, research-backed, in `papi_lotus_60day_calendar_v2.csv`                              |
|Strategy notes / changelog            |✅ Built, in `strategy_notes_v2.md`                                                           |
|Clip factory (Python + ffmpeg)        |✅ Built and tested, in `clip_factory.zip`                                                    |
|Clip strategy doc (which clips to cut)|✅ Built, in `CLIP_STRATEGY.md`                                                               |
|Higgsfield prompt pack                |✅ Built, in `HIGGSFIELD_PROMPT_PACK.md`                                                      |
|Landing page (static HTML/CSS/JS)     |✅ Built, screenshot-tested, in `papilotus-website.zip`                                       |
|Repo pushed to GitHub                 |⏳ User-pending — pre-configured to `github.com/bro-therapy/Papilotus-website`                |
|Higgsfield Soul character training    |⏳ User-pending — needs 5-20 reference photos uploaded                                        |
|Formspree wired into website          |⏳ User-pending — replace `YOUR_FORM_ID` in `index.html`                                      |
|First clips cut from real videos      |⏳ User-pending — has 3 source videos (1 unreleased MV, 1 released MV on YouTube, 1 BTS)      |
|Postiz scheduling                     |⏳ User-pending — calendar CSV is import-ready                                                |

-----

## The artist + the music — context for tone

**Artist name:** Papi Lotus
**Genre:** Dark R&B / afterhours pop / alt-pop with cinematic mood
**Persona:** “the nocturnal antihero” — calm, seductive, emotionally guarded, low-volume confidence
**Owner email:** `iampapilotus@gmail.com`
**GitHub username:** `bro-therapy`
**Era placeholder used throughout the system:** `MOTEL SAINT` (can be swapped to `STATIC LOTUS`, `AFTERHOURS CONFESSION`, or `CHROME HEART ROT` from the branding bible’s era options)

**Brand sentence (do not lose this):**

> “Papi Lotus is the sound of beautiful bad decisions after midnight.”

**Tagline:** “transmissions from after midnight”

**Voice rules — follow these exactly:**

- Short, fragmented, late-night-text energy. Never long influencer paragraphs.
- Lowercase, period at the end. (“came back different.”)
- Mention rooms, rain, light, static, night, mirrors — not “vibes,” “energy,” or “manifest”
- Confident but not begging. “watch”, “listen”, “save this” — not “please share”
- Cryptic > explanatory. Let mystery do the work.
- “POV:” framing for emotional captions (17% engagement boost per 2026 research)
- “send this to nobody.” / “save this for the drive home.” — DM-share triggers (3-5x weighted on IG)
- Avoid: emojis, hashtag spam, exclamation points, generic music-promo language
- Avoid: ANY content reading as “playful,” “wholesome,” or “uplifting.” Wrong era.

**Operating mantra (from branding bible):**

> “Papi Lotus is not posting content. Papi Lotus is sending signals from a world people want to enter.”

-----

## File inventory — what each deliverable does

All files live in `/mnt/user-data/outputs/` after the user downloads them. The user typically organizes them locally under a folder like `~/papi_lotus/`.

### 1. `papi_lotus_60day_calendar_v2.csv` — the schedule

135 posts across 60 days. Day 50 = release day (must be a Friday). User picks release date, counts back 49 days for Day 1.

**Columns:**

- `Day` (1-60)
- `Date` (user fills based on release Friday)
- `Phase` — REBIRTH (1-14) / WORLDBUILDING (15-30) / TEASER PRESSURE (31-45) / RELEASE BUILDUP (46-49) / RELEASE DAY (50) / AFTERSHOCK (51-60)
- `Platform` — TikTok / IG Reel / IG Feed / IG Story / YT Shorts / Website
- `Post_Type` — Hook Loop / Lyric Still / Fake Paparazzi / etc.
- `Pillar` — Cinematic Identity / Song Loop / Lyric Wound / Video Fragments / False Reality / Human Proof
- `Best_Time_ET` — specific posting window backed by 2026 platform data
- `Priority` — HIGH (53 posts) / MED (71) / LOW (11) — for triage when life happens
- `Hook_First_3s` — what must happen in opening seconds (41% retention boost)
- `Caption` — paste-ready
- `Asset_Description` — what to create
- `CTA`
- `Hashtags` — 3 niche tags max (not 30 generic ones)

**Bare-minimum mode:** if user is overwhelmed, doing only HIGH-priority REBIRTH (5 posts), TEASER PRESSURE (16), RELEASE BUILDUP (10), RELEASE DAY (6) = 37 posts over 60 days. Still hits every algorithmic checkpoint.

**Snippet A/B/C tests baked in at Days 33/36/39** — verse line / bridge line / outro line. By Day 41 the user knows which non-chorus moment got the most saves and pushes the winner.

### 2. `strategy_notes_v2.md` — the *why*

Cited research backing every calendar choice. Covers: Spotify Countdown Page launch timing (Day 42, +nearly 2x saves), email-list vs pre-save logic (own your data), TikTok music posting cadence (3-5/week), hook timing data (first 1 sec = 41% retention), DM-share weighting (3-5x), etc. Useful if user or a collaborator asks “why are we doing it this way.”

### 3. `clip_factory.zip` — the production engine

Self-contained Python script + setup docs. Folder structure when unzipped:

```
clip_factory/
├── clip_factory.py        # main script (~13KB)
├── SETUP.md               # ffmpeg install, usage
├── CLIP_STRATEGY.md       # which seeds to cut, length cheatsheet
├── 01_input/              # user drops source videos here
└── 03_output/             # finished clips appear here
```

**What it does:** reads a CSV of timestamps (`02_clips.csv`, auto-created on first run with example rows), and for each row produces 3 output files (9:16 vertical / 1:1 square / 16:9 horizontal). Each output gets:

- Burned-in lyric subtitle (auto word-wrapped per aspect)
- Film grain overlay
- “PAPI LOTUS” text watermark bottom-right (or custom `lotus_watermark.png` if present)
- 4-character-per-line wrap rules: 22 (9:16) / 26 (1:1) / 48 (16:9)
- Naming: `PL_d{day}_{name}_{bg_label}_{aspect}.mp4` (e.g. `PL_d22_hook_motelhallway_916.mp4`)

**Requirements:** Python 3 (stdlib only, no pip install needed) + ffmpeg on PATH.

**Tested:** verified outputs at all three aspect ratios in a sandbox. Verified subtitle wrap works on vertical.

### 4. `CLIP_STRATEGY.md` — what to cut

16 specific seed clips mapped to user’s three source files:

- **Unreleased music video** (the one Papi Lotus is rolling out): hook_a, hook_b, verse_line, bridge_line, outro_line, closeup_face, walk_silhouette, car_window, main_teaser (12-sec), final_teaser (6-sec)
- **Released YouTube video** (the older one): old_closeup, old_silhouette — used for era continuity cuts
- **BTS footage:** studio_red, studio_silhouette, real_phone, real_face

Each seed maps to specific calendar Days. Length cheatsheet: hooks 5-8 sec, POV 7-12 sec, lyric stills 4-7 sec, teasers 6-12 sec, visualizers 25-30 sec.

### 5. `HIGGSFIELD_PROMPT_PACK.md` — the AI visual brain

~50 paste-ready prompts for Higgsfield. Structure:

- **Part 1 — Setup:** Soul character training instructions + Character Bible string (to paste into every prompt) + universal negative prompt
- **Part 2 — Image prompts (30):** Hero portraits (5), fake paparazzi (5), editorial/penthouse (4), motel noir (4), studio/BTS (5), lyric still backgrounds (6), fake magazine covers (2), cover art variants (3)
- **Part 3 — Video prompts (20):** Hook loop backgrounds (10), AI visualizers (5), POV (4), surveillance (2), final teaser punch-ins (2), slow-mo aftershock (1)
- **Part 4 — Day-by-Day Map:** lookup table mapping 40+ calendar Days → which prompt(s) to use
- **Part 5 — Workflow tips:** seed reuse, image-to-video chains, credit budget (~80-120 generations total)

**Critical:** Recommended Higgsfield models = `soul_2` (images) and `cinema_studio_video_3` or `seedance_2_0` (video). User must train their Soul character before any prompt works correctly.

### 6. `papilotus-website.zip` — the landing page

Static HTML/CSS/JS. Folder when unzipped:

```
papilotus-website/
├── index.html         # hero / release / signal feed / email / footer
├── lyrics.html        # SEO-friendly per-release lyric page
├── 404.html           # "signal lost" page
├── styles.css         # full design system
├── script.js          # live clock, scroll reveals, form handler
├── assets/favicon.svg # lotus mark (wine red on transparent)
├── .gitignore
├── .nojekyll          # tells GitHub Pages: serve as-is
└── README.md
```

**Pre-configured:**

- Git initialized, one clean commit authored by `Papi Lotus <iampapilotus@gmail.com>`
- Remote already set: `https://github.com/bro-therapy/Papilotus-website.git`
- Push command: `git push -u origin main --force` (force-overwrites existing repo content)

**Stack:** vanilla HTML5/CSS3/JS. No build step. No framework. ~50KB total. Mobile-first. Respects `prefers-reduced-motion`.

**Design aesthetic:** “luxury noir editorial / late-night broadcast.” Cinzel for wordmark, Cormorant Garamond italic for body, JetBrains Mono for timestamps. Film grain animated overlay, scanlines, letterbox bars, wine glow pulsing behind PAPI LOTUS wordmark, live local clock in nav, “TRANSMISSION 001/02/03…” section markers.

**Placeholders that need swapping for production:**

- Email form action URL (currently `https://formspree.io/f/YOUR_FORM_ID`)
- Smart link URLs (Spotify / Apple / YouTube Music / pre-save all `href="#"`)
- Footer social links (TikTok / IG / YouTube / Spotify all `href="#"`)
- Video embed (placeholder `<div>` — replace with YouTube iframe, swap example commented in HTML)
- Cover art (currently CSS-rendered lotus on wine bg — swap to real cover image when ready)
- Signal Feed tiles (6 CSS-only placeholders — swap to real `<img>` tags pointing to recent posts)
- Lyrics placeholder text in `lyrics.html`
- Date placeholders `07.XX.2026` and `07.XX` throughout
- Era name `MOTEL SAINT` (3 places in index, 2 in lyrics) — swap if different era name chosen

-----

## How everything connects (the pipeline)

```
┌─────────────────────────────────────────────────────────────┐
│  WEEK 0 (one-time setup)                                    │
│  ├─ Train Higgsfield Soul character (5-20 photos, ~10 min)  │
│  ├─ Sign up for Formspree, swap YOUR_FORM_ID in index.html  │
│  ├─ Push papilotus-website repo, enable GitHub Pages        │
│  └─ Cut Core 6 Seeds via clip_factory (see CLIP_STRATEGY.md)│
└─────────────────────────────────────────────────────────────┘
            ↓
┌─────────────────────────────────────────────────────────────┐
│  WEEKLY (one 2-3 hour session)                              │
│  ├─ Look at this week's calendar rows                       │
│  ├─ For each post needing AI variation:                     │
│  │   1. Open Higgsfield, paste prompt from HIGGSFIELD pack  │
│  │   2. Generate 3-4, pick strongest                        │
│  │   3. For video: image-to-video using the still + a       │
│  │      transform prompt (4 backgrounds per source clip)    │
│  ├─ Drop AI variations into clip_factory/01_input/          │
│  ├─ Add CSV rows with timestamps + lyrics                   │
│  ├─ Run `python3 clip_factory.py` → finalized clips         │
│  ├─ Drag clips into Postiz, paste captions from calendar    │
│  └─ Schedule for next 7-14 days                             │
└─────────────────────────────────────────────────────────────┘
            ↓
┌─────────────────────────────────────────────────────────────┐
│  DAILY (low effort)                                         │
│  ├─ Check IG Stories — post countdowns/cryptic frames       │
│  ├─ First hour after a HIGH-priority post: reply to comments│
│  │   (algorithm signals)                                    │
│  └─ Sunday: pull top 3 posts, recycle as new variants       │
└─────────────────────────────────────────────────────────────┘
```

-----

## Brand essentials (do not drift from these)

### Color palette (CSS variables in `styles.css`)

```css
--black:       #0a080a;   /* deepest background */
--black-soft:  #171417;   /* afterhours black, body bg */
--wine:        #54162D;   /* primary accent, era center */
--neon:        #B32047;   /* hot accent, hover/active */
--chrome:      #BFC5D2;   /* light text */
--gold:        #D59631;   /* accent only, sparingly */
--bone:        #F6F1EA;   /* brightest text */
```

**Usage rule:** black/wine/neon dominate. Chrome + bone for readability. Gold is a rare accent (dates, dividers, small symbols). No bright colors. No daylight. No saturated anything except wine and neon.

### Typography

- **Wordmark (PAPI LOTUS):** `Cinzel` 300 weight — Roman-inspired, premium nightlife label feel
- **Headlines:** `Cormorant Garamond` italic 400 — refined, melancholic serif
- **Body:** `Cormorant Garamond` 400 — same family, refined readability
- **Mono (timestamps, codes, labels):** `JetBrains Mono` 200-300 — clean, technical accent

All four are free via Google Fonts (already preconnected in HTML).

### Visual texture (always-on)

- Film grain animated overlay (subtle, 6% opacity, multiply blend)
- Scanlines (very subtle, 40% opacity, multiply blend)
- Vignette (radial, 60% darken at corners)
- Letterbox bars top/bottom (12px desktop, 8px mobile)

These are atmospheric. Removing any of them dilutes the brand.

### Naming conventions

- **Video output files:** `PL_d{day}_{name}_{bg_label}_{aspect}.mp4`
  - Example: `PL_d22_hook_motelhallway_916.mp4`
  - `PL` = Papi Lotus
  - `d22` = calendar Day 22
  - `hook` = clip type/name
  - `motelhallway` = background label
  - `916` = 9:16 aspect ratio
- **Soul character ID:** stored in user’s Higgsfield account (call this `soul_id` everywhere)
- **Era name:** UPPERCASE in code, written normally in captions (“motel saint” or “MOTEL SAINT” depending on context)

-----

## Active backlog — prioritized next moves

If the user asks “what’s next,” walk them through these in order. Each is independently completable.

### 🔴 Priority 1 — Blockers (user must do these themselves)

1. **Train Higgsfield Soul character.** Without this, every Higgsfield prompt produces a stranger’s face. Upload 5-20 photos to higgsfield.ai/character per the photo list in HIGGSFIELD_PROMPT_PACK.md Part 1. Takes ~10 min after upload.
1. **Push papilotus-website repo to GitHub.** Pre-configured. One command from inside the unzipped folder: `git push -u origin main --force`. Then enable GitHub Pages (Settings → Pages → Source: main / root). Live at `https://bro-therapy.github.io/Papilotus-website/`.
1. **Set Formspree form ID.** Create free Formspree account, get endpoint URL, swap `YOUR_FORM_ID` in `index.html` line containing `<form class="email-form" action="...">`. Test it submits and arrives at iampapilotus@gmail.com.

### 🟡 Priority 2 — Production prep (Claude Code can help here)

1. **Set up production folder structure.** Create a `~/papi_lotus/` directory locally with subfolders for: clip_factory (unzipped), source_videos (the 3 originals), higgsfield_outputs, postiz_uploads, archive.
1. **Cut the Core 6 Seeds.** User has 3 source videos available locally. Use clip_factory with timestamps from CLIP_STRATEGY.md. Outputs go to `clip_factory/03_output/`.
1. **Pick the release Friday.** Once chosen, fill the `Date` column in the calendar CSV. Day 50 = release Friday. Count back 49 days for Day 1. (Day 1 will also land on a Friday since 49 days = exactly 7 weeks.)
1. **Replace smart link `href="#"` placeholders** with real Spotify/Apple/YouTube/pre-save URLs once Spotify Countdown Page is set up.
1. **Decide era name.** Default placeholder is `MOTEL SAINT`. Other options from branding bible: STATIC LOTUS, AFTERHOURS CONFESSION, CHROME HEART ROT. Once chosen, find/replace across calendar CSV and website files.

### 🟢 Priority 3 — Polish / nice-to-haves

1. **Add real signal feed images** to `index.html` (currently 6 CSS-only tiles). When user has Instagram posts up, screenshot 6, save to `assets/`, swap `<div class="signal-tile-inner">` for `<img>` tags.
1. **Build the Postiz CSV transformer.** If the calendar CSV needs reshaping for Postiz’s bulk import format, write a small script to convert columns. Postiz docs: https://postiz.com/
1. **Set up local file-watcher script.** Cron job or fswatch listener that auto-runs clip_factory whenever 02_clips.csv changes. Removes manual re-run step.
1. **Generate cover art final.** Run Higgsfield CV1/CV2/CV3 prompts from prompt pack, pick winner, replace `index.html` cover-art block with `<img>` of final version.
1. **Custom domain.** If user buys e.g. `papilotus.com`, drop a `CNAME` file in repo root with domain, point DNS to GitHub Pages.

-----

## Per-component deep dive

### Calendar CSV

**File:** `papi_lotus_60day_calendar_v2.csv`
**Where to keep it:** anywhere the user can edit it. Excel/Numbers/Google Sheets all open it cleanly.

**How dates work:**

- Release Friday = Day 50
- Day 1 falls 49 calendar days earlier (also a Friday)
- User fills `Date` column once. In Excel/Numbers/Sheets: type Day 1’s date in row 2, drag handle down — auto-fills.

**Phase posting cadence (already balanced):**

- REBIRTH (days 1-14): ~2.2 posts/day, gentle
- WORLDBUILDING (15-30): ~2 posts/day, mythology builds
- TEASER PRESSURE (31-45): ~2.6 posts/day, countdown
- RELEASE BUILDUP (46-49): 3 posts/day
- RELEASE DAY (50): 6 simultaneous posts
- AFTERSHOCK (51-60): 2.3 posts/day

**Snippet A/B/C test pattern (Days 33, 36, 39):** Tests verse line / bridge line / outro line as alternates to the chorus hook. After Day 39, user has 3 weeks of data on which song moment got the most saves. Days 41, 47, 54 push the winner.

**Pre-save Countdown Page launch:** Day 42. Critical — Spotify data shows Countdown Pages launched 7+ days early nearly double total saves. Multi-platform coordinated post that day (IG Reel + TikTok + IG Feed + IG Story).

### Clip factory

**File:** `clip_factory.zip` (extract anywhere)
**Stack:** Python 3 standard library + system ffmpeg
**Run command:** `python3 clip_factory.py` from inside the unzipped folder

**First run creates `02_clips.csv` with 8 example rows.** User edits this CSV with real timestamps, then re-runs.

**CSV columns:** source / start / end / name / day / lyric / bg_label

**Each row → 3 outputs** (916, 11, 169 aspect ratios).

**Customization knobs in `clip_factory.py` top:**

- `GRAIN_STRENGTH = 12` (raise for more analog feel)
- `WATERMARK_TEXT = "PAPI LOTUS"` (or set opacity to 0 to disable)
- `WATERMARK_OPACITY = 0.55`
- `SUBTITLE_FONTSIZE_RATIO = 0.040`
- `CRF = 20` (lower = higher quality / bigger files)
- `WRAP_CHARS = {"916": 22, "11": 26, "169": 48}`
- `FONT_PATH = None` (auto-detected; override if subtitles don’t render)

**Tested edge cases:**

- Missing source file → warns and skips, doesn’t crash
- Bad timestamp duration → warns and skips
- Long lyric on vertical → word-wraps cleanly with Y-offset adjustment
- Missing font → falls back, warns user

### Higgsfield prompt pack

**File:** `HIGGSFIELD_PROMPT_PACK.md`
**Where prompts live:** ~50 paste-ready in markdown code blocks.

**Workflow per prompt:**

1. Copy prompt text
1. Open Higgsfield, image or video generation panel
1. Paste prompt + paste Character Bible string from Part 1 + paste universal negative prompt
1. Attach `soul_id` (user’s trained character)
1. Set model: `soul_2` for images, `cinema_studio_video_3` for video
1. Set aspect ratio: 9:16 for vertical posts, 1:1 for feed/cover, 16:9 for YT thumbnails
1. Generate 3-4 variants, pick strongest
1. For video: use a generated still as `start_image` then apply video prompt (massively cheaper in credits than text-to-video)

**Credit budget estimate:** 80-120 generations for the full 60-day calendar.

**Day-by-Day Map (Part 4) maps 40+ calendar Days → specific prompts.** When user asks “what do I generate for Day 17?” — look up Day 17 in Part 4 table.

### Landing page

**File:** `papilotus-website.zip`
**Repo:** `github.com/bro-therapy/Papilotus-website` (pre-configured, not yet pushed)
**Deployment target:** GitHub Pages (free)
**URL once deployed:** `https://bro-therapy.github.io/Papilotus-website/`

**Architecture decision:** single-page scroll site (index.html) + separate lyrics.html for SEO-friendly per-release URLs + 404.html.

**Section structure of index.html:**

1. Hero — fullscreen, animated wordmark, watch/listen CTAs, “TRANSMISSION 001” marker
1. Release — cover art frame + meta + video embed placeholder + smart links grid + lyrics link
1. Signal Feed — 3x2 grid of placeholder tiles
1. Afterhours — email capture form
1. Footer — 3-column social links + booking email + SIGNAL ACTIVE pulse

**JS does 4 things:**

- Live local clock in nav (updates every 30 sec)
- IntersectionObserver scroll-triggered reveals
- Fetch-based form submission (stays on-page, shows “signal received” inline)
- Subtle parallax on hero glows (mouse-driven, desktop only)

**Mobile-first breakpoints:** 880px (single-column release grid, footer 2-cols) and 540px (signal grid 2-cols, stacked form, stacked CTAs).

-----

## Operational notes — what only the human can do

Don’t try to do these for the user. Just make sure they know they’re on the hook for them.

1. **Train Higgsfield Soul character** — requires their face photos
1. **Make Spotify for Artists / Apple Music for Artists / DistroKid decisions** — requires their distributor account login
1. **Pick release Friday** — calendar dates depend on this
1. **Reply to comments in the first hour after big posts** — the algorithm reads engagement velocity
1. **Audit weekly winners (every Sunday)** — pull top 3 posts of the week, recycle as variants for next week. The calendar references this in days 22, 38, 41 (“winning variant”).
1. **Run the music video upload + DistroKid release** — these are external account actions

-----

## Common commands reference

```bash
# Unzip a deliverable
unzip ~/Downloads/papilotus-website.zip -d ~/papi_lotus/

# Preview the website locally
cd ~/papi_lotus/papilotus-website
python3 -m http.server 8000
# → open http://localhost:8000

# Push the website (after Formspree wired up, smart links updated, etc.)
cd ~/papi_lotus/papilotus-website
git add .
git commit -m "wire formspree + update smart links"
git push   # subsequent pushes — force only needed for first push to overwrite existing repo

# Run clip factory on a batch of source videos
cd ~/papi_lotus/clip_factory
# edit 02_clips.csv with real timestamps first
python3 clip_factory.py

# Install ffmpeg if missing (one-time)
brew install ffmpeg              # Mac
sudo apt install ffmpeg          # Linux

# Test the website's mobile rendering locally
# Open Chrome DevTools → toggle device toolbar → iPhone 14 Pro preset

# Verify git remote is correct
cd ~/papi_lotus/papilotus-website
git remote -v
# Expected: origin  https://github.com/bro-therapy/Papilotus-website.git
```

-----

## Things to watch out for / known gotchas

- **Don’t mention placeholder content publicly.** Until smart links + email form are wired, treat the site as staging. Don’t share the URL in pinned posts.
- **`--force` push only on first push.** After the first deploy, subsequent updates use plain `git push`. Force-pushing destroys history.
- **Higgsfield prompts assume `soul_id`** — none of them produce the right face without a trained character. Don’t run Day 1 hero portrait generation before character training is complete.
- **DistroKid takes 3-4 weeks** to propagate fully across all platforms. Calendar Day 50 = release Friday on Spotify, but Facebook/Instagram audio library may take longer. Day 42 pre-save launch assumes Spotify Countdown Page is live (requires 5,000+ monthly listeners OR eligible artist status).
- **Postiz doesn’t auto-import the calendar CSV columns 1:1** — user may need to map Postiz fields to our columns. If they need a transformer script, build one (Priority 3 item #10).
- **Subtitle font** in clip_factory falls back gracefully but looks best with DejaVuSans-Bold (Linux), Helvetica (Mac), or Arial Bold (Windows). If `FONT_PATH` is None and subtitles render as boxes, the user needs to set `FONT_PATH` explicitly at top of script.
- **The clip factory expects the source videos to have audio.** Silent videos drop -19% engagement per 2026 research. If a source is silent, add audio via a separate ffmpeg step first.
- **Branding bible is the source of truth for visual decisions.** When in doubt, defer to the two PDFs the user originally provided: `Papi_Lotus_Master_Content_Strategy.pdf` and `Papi_Lotus_Branding_Package.pdf`.

-----

## When something breaks

|Symptom                                       |Likely cause                                      |Fix                                                                         |
|----------------------------------------------|--------------------------------------------------|----------------------------------------------------------------------------|
|`git push` rejected                           |Repo has different history                        |Use `--force` (only on first push)                                          |
|GitHub Pages shows 404                        |`.nojekyll` missing or Pages not enabled          |Check Settings → Pages, confirm `.nojekyll` in root                         |
|Form submits but nothing arrives              |Wrong Formspree ID                                |Recheck endpoint URL in `index.html`                                        |
|Fonts look generic on the site                |Google Fonts blocked or font fallback active      |Check browser network tab, confirm `<link>` to fonts.googleapis.com resolves|
|Clip factory crashes on ffmpeg                |ffmpeg not installed or not on PATH               |`which ffmpeg` should return a path. Reinstall via brew/apt if not.         |
|Higgsfield character drifts across generations|Different `soul_id` used, or no `soul_id` attached|Confirm same soul_id in every prompt                                        |
|Subtitles cut off on vertical                 |`WRAP_CHARS["916"]` too high for current font size|Lower to 18-20                                                              |

-----

## End state — what the user gets

By the end of execution:

- A 60-day rollout running on autopilot via Postiz
- Hundreds of post-ready clips generated from a one-time editing session per week
- A live website at `bro-therapy.github.io/Papilotus-website` (or custom domain) capturing emails to `iampapilotus@gmail.com`
- A trained Higgsfield Soul character producing consistent visuals across an entire era
- A repeatable system that scales to future releases — same calendar template, swap era name + AI prompts + landing page content, ship the next single in 90 days instead of 6 months

This is a release engine, not a posting schedule.

-----

**End of handoff. Ask the user clarifying questions only if they conflict with the above. Otherwise: build, test, ship.**