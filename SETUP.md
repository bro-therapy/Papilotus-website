# Clip Factory — Setup

**One command. 30+ post-ready clips. Burned-in lyrics, grain, watermark, three aspect ratios per source.**

---

## What you need

1. **Python 3** (likely already installed — type `python3 --version` in Terminal)
2. **ffmpeg** — the engine that does the actual cutting

### Install ffmpeg

**Mac (easiest):**
```
brew install ffmpeg
```
If you don't have brew, install it first from [brew.sh](https://brew.sh/).

**Windows:**
1. Download from [ffmpeg.org/download.html](https://ffmpeg.org/download.html) (the "Windows builds from gyan.dev")
2. Unzip and add the `bin` folder to your PATH (Google "windows add to PATH" if unfamiliar)
3. Open a new Command Prompt and type `ffmpeg -version` — should print version info

**Linux:**
```
sudo apt install ffmpeg
```

**If you don't want to install ffmpeg locally:** paste the script into Codex and let it run there. Codex has ffmpeg available.

---

## First run

1. Drop the `clip_factory` folder anywhere on your computer (Desktop is fine)
2. Open Terminal/Command Prompt in that folder
3. Run:
   ```
   python3 clip_factory.py
   ```
4. First run does nothing — it just creates the folder structure and a sample CSV. You'll see:
   ```
   Created 02_clips.csv with example rows.
   ```

---

## Daily use (after first run)

```
clip_factory/
├── 01_input/          ← drop your music videos here
│     ├── music_video.mp4         (your unreleased one)
│     ├── released_video.mp4      (the YouTube one)
│     ├── bts.mp4                 (behind-the-scenes)
│     └── lotus_watermark.png     (optional custom logo)
├── 02_clips.csv       ← edit this to tell the factory what to cut
├── 03_output/         ← finished clips appear here
└── clip_factory.py
```

### Editing the CSV

Open `02_clips.csv` in Numbers/Excel/Google Sheets. Each row makes 3 clips (vertical/square/horizontal).

| source | start | end | name | day | lyric | bg_label |
|---|---|---|---|---|---|---|
| music_video.mp4 | 0:12 | 0:20 | hook_a | 2 | POV: you miss the chaos, not the person. | raw |
| music_video.mp4 | 0:42 | 0:50 | hook_b | 4 | this part still hurts. | raw |
| bts.mp4 | 0:00 | 0:08 | studio_red | 19 | archived footage. 03:17 AM. | studio |

- **source**: filename in `01_input/`
- **start / end**: `0:42` means 42 seconds in. Use 5-8 second clips for hooks.
- **name**: short label, no spaces (`hook_a`, `verse_line`)
- **day**: which Day from your calendar this clip is for — links it to the schedule
- **lyric**: text burned in at bottom (leave blank for no subtitle)
- **bg_label**: optional descriptor for filename (`raw`, `motel`, `rainy`)

Save the CSV, then run:
```
python3 clip_factory.py
```

You get **3 clips per row** in `03_output/`:
- `PL_d2_hook_a_raw_916.mp4` — 9:16 vertical (TikTok / Reels / Shorts)
- `PL_d2_hook_a_raw_11.mp4` — 1:1 square (IG Feed)
- `PL_d2_hook_a_raw_169.mp4` — 16:9 horizontal (YouTube long-form)

---

## What each output gets automatically

- ✅ **Burned-in lyric subtitle** (24% more shares per 2026 research)
- ✅ **Text wraps automatically** for vertical/square format
- ✅ **Subtle film grain** overlay (matches brand)
- ✅ **PAPI LOTUS watermark** bottom-right (or your logo if you drop `lotus_watermark.png` in `01_input/`)
- ✅ **Sound-on by default** (silent video = -19% engagement)
- ✅ **Filename matches calendar Day number** — easy to find when scheduling in Postiz

---

## Recommended workflow (the whole pipeline)

```
1. CUT SEEDS
   ↓ clip_factory.py reads your CSV, makes ~30 base clips
2. AI BACKGROUND VARIATIONS  
   ↓ Take 9:16 clips to Higgsfield → motel / rain / red room / chrome variations
3. RE-RUN THROUGH FACTORY
   ↓ Drop AI variations back into 01_input/, point CSV at them, add lyrics
4. POSTIZ
   ↓ Drag final clips into Postiz based on calendar Day number
```

Step 2-3 is where one source clip becomes 5 visually different posts.

---

## Tweaks (if you want to change defaults)

Open `clip_factory.py`, look at the `CONFIG` section near the top:

- `GRAIN_STRENGTH = 12` — raise to 20-30 for heavier analog feel
- `WATERMARK_TEXT = "PAPI LOTUS"` — change the watermark text
- `WATERMARK_OPACITY = 0.55` — lower for more subtle
- `SUBTITLE_FONTSIZE_RATIO = 0.040` — raise to 0.05 for larger lyrics
- `WRAP_CHARS = {"916": 22, "11": 26, "169": 48}` — chars per line before wrap

---

## Troubleshooting

**"ffmpeg not found"** — ffmpeg isn't installed or isn't on PATH. See install section above.

**"no font found"** — Edit `FONT_PATH` near the top of the script to point to a `.ttf` font file on your computer. On Mac: `/System/Library/Fonts/Helvetica.ttc`. On Windows: `C:\Windows\Fonts\arialbd.ttf`.

**Lyric cuts off the edge on vertical** — Lower the value in `WRAP_CHARS["916"]` (try 18-20). Or use a shorter caption.

**Clips look blurry** — Source video resolution matters. If your source is 720p, exports won't be sharper than that. Lower CRF (try 18) for higher quality.

**Output is huge in file size** — Raise CRF to 23 or 25 to reduce file size. Trade-off: slight quality loss.

**Want to skip the grain** — Set `GRAIN_STRENGTH = 0`.

**Don't want the watermark** — Set `WATERMARK_OPACITY = 0` or edit the script to comment out the watermark line.
