# Papi Lotus

Command center for the Papi Lotus artist rollout — brand, social plan, and the website.

## Repository structure

| Path | What it is |
|---|---|
| `docs/` | The landing-page **website** (GitHub Pages serves this). See `docs/README.md`. |
| `papi_lotus_60day_calendar_v2.csv` | The 60-day content calendar — canonical (`v1` kept for reference). |
| `clip_factory.py` · `SETUP.md` · `CLIP_STRATEGY.md` | Turns one music video into post-ready clips. |
| `HIGGSFIELD_PROMPT_PACK.md` | ~50 paste-ready AI image/video prompts. |
| `strategy_notes_v2.md` · `*.pdf` · `HANDOFF.md` | Strategy, brand bible, and project handoff. |

## Deploy the website

The site lives in `docs/`. Turn on GitHub Pages: **Settings → Pages → Deploy from a branch
→ main → /docs**. Live at `https://bro-therapy.github.io/Papilotus-website/`. Full guide in
`docs/README.md`.

---

# 60-Day Content Calendar

**157 posts. 60 days. One CSV.** Built off the strategy + brand docs.

---

## How to use this

**1. Pick your release day.** It should be a Friday (music industry standard).
That Friday = **Day 50** of the calendar. Count back 49 days to find Day 1.

Example: if release Friday = July 17, then Day 1 = May 29.

**2. Fill the `Date` column.** Open the CSV, type Day 1's date in row 2, drag down — your spreadsheet auto-fills the rest. Now every post has a real date.

**3. Build assets in batches, not daily.** The whole point of this calendar is that you *don't* decide what to post each day. Open it, see what's due, make those assets in one 2-3 hour session per week. Plan ahead 1-2 weeks at a time.

**4. Import to Postiz.** Postiz accepts CSV. Most useful columns to map: `Date`, `Platform`, `Caption`, `Hashtags`. Leave the other columns in the file as your reference — they tell you what asset to attach.

---

## Phases

| Days | Phase | Posts | Vibe |
|---|---|---|---|
| 1–14 | REBIRTH | 31 | Quiet return, mystery signals |
| 15–30 | WORLDBUILDING | 39 | Era established, mythology builds |
| 31–45 | TEASER PRESSURE | 39 | Countdown begins, daily push |
| 46–49 | RELEASE BUILDUP | 12 | Peak pre-release intensity |
| 50 | RELEASE DAY | 6 | Video drops — everything pinned |
| 51–60 | AFTERSHOCK | 30 | Sustained push, recycle winners |

---

## Platform spread

| Platform | Posts | Cadence |
|---|---|---|
| IG Stories | 57 | ~1/day — easy frames, temporary |
| TikTok | 44 | ~5/week — primary platform |
| IG Reel | 22 | ~2-3/week — cross-posted TikToks |
| IG Feed | 18 | ~2/week — anchor posts |
| YT Shorts | 11 | ~1-2/week — same vertical clips |
| Website | 5 | weekly updates |

---

## Asset language used in the calendar

Match these to the prompt bank in your Branding Package PDF:

- **AI Portrait** → Higgsfield character bible portrait prompts
- **Hook Loop** → 7-12 sec vertical clip, same song snippet, different AI background
- **Lyric Still** → black bg, small white type, lotus mark
- **Fake Paparazzi** → Higgsfield "Paparazzi" prompt from prompt library
- **AI Visualizer** → Higgsfield "Lyric visual" prompt — leave negative space for text
- **BTS Illusion** → Higgsfield "Studio red room" or surveillance prompt
- **Editorial Portrait** → Higgsfield "Empty penthouse" or "Motel" prompt
- **Carousel** → 4-5 AI stills, one mood
- **Signal Frame** → IG story frame, lotus mark + minimal type

---

## Era placeholder: MOTEL SAINT

I used `MOTEL SAINT` as the era name (from your branding doc's options).
**Find/replace** in the CSV if you choose a different one — `STATIC LOTUS`, `AFTERHOURS CONFESSION`, or `CHROME HEART ROT`.

The date placeholder is `07.XX` — replace with your actual release date.

---

## The non-negotiable rule

Every Sunday: pull the top 3 posts of the week. For each winner, duplicate it with (a) a new first frame and (b) a different caption. Drop those into the next week's schedule. The calendar is the floor, not the ceiling — winners get recycled into more winners.

---

## What to build next (suggested order)

1. **Clip factory script** — auto-cut + overlay so making the assets above is 10 mins, not 10 hours
2. **Prompt pack** — paste-ready Higgsfield + Claude prompts mapped to each post type in this CSV
3. **Landing page** — the link your "link in bio" actually points to

Ask me when ready.
