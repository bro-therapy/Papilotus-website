# Higgsfield Prompt Pack — Papi Lotus

**Every prompt you need to make the calendar happen. Copy-paste ready. Organized by post type and linked to your Day numbers.**

---

## How this works in 30 seconds

1. **One-time:** Train your Higgsfield Soul character (5-20 photos of you). Save the `soul_id`.
2. **For every image post:** Open Higgsfield → image generation → paste in a prompt from Part 2 → attach your `soul_id` → generate 3-4 variants → pick the best.
3. **For every video post:** Either generate a still first then animate it, OR use a clip seed from your `clip_factory/03_output/` as the input and apply a video prompt from Part 3.
4. **Match the prompt to your calendar Day** using the table in Part 4.

---

# PART 1 — SETUP

## Character training (do this once)

Go to **higgsfield.ai/character** → New Soul Character → upload **5-20 photos of yourself**.

**The photo set should include:**
- Front-facing, neutral expression, good lighting (3-4 photos)
- 3/4 angle left + right (2-3 photos)
- Side profile (1-2 photos)
- Full body, standing (2-3 photos)
- Slight smirk, distant stare, downward gaze, neutral mouth (3-5 mood photos)
- One night/low-light photo if you have a good one (helps training match the brand)

**Do not upload:**
- Filtered/distorted photos (they'll bake the filter into your character)
- Group photos
- Photos where your face is partly obscured
- Photos with extreme expressions (big smiles, exaggerated frowns)
- Photos in clothing you'd never wear for this era

Training takes ~10 minutes. Once it's done, you have a `soul_id` you'll attach to every prompt below.

---

## The Character Bible string

This is the **standard description** you append to every Papi Lotus prompt. It locks the visual world.

```
Papi Lotus, dark afterhours R&B artist. Black layered outfit, leather or denim jacket, silver chain, occasional silver rings. Slight stubble. Hair styled consistently, slightly disheveled. Tired eyes, neutral mouth or slight smirk, mysterious expression, rarely direct eye contact. Body language calm and seductive, not posing. Mood: nocturnal, melancholic, expensive, a little dangerous. Not smiling, not performing.
```

Paste this into the bottom of every image/video prompt. The Soul character handles the face — the bible handles everything else (wardrobe, mood, body language).

---

## The Negative Prompt (what to exclude)

Most Higgsfield models support a negative prompt field. Paste this in:

```
no smiling, no laughing, no direct eye contact unless specified, no influencer pose, no thirst trap, no bright cheerful colors, no daylight unless specified, no group of people, no fantasy armor, no cartoon style, no anime style, no plastic skin, no extra fingers, no warped face, no oversaturated colors, no generic stock photo aesthetic, no fitness photography, no luxury flexing pose
```

This kills 90% of the "AI looks AI" tells before they happen.

---

## Default settings for every Papi Lotus generation

| Setting | Value | Why |
|---|---|---|
| Model (images) | `soul_2` | Best for character consistency |
| Model (cinematic images) | `soul_cinema_studio` | For cover art / magazine / hero shots |
| Model (video) | `cinema_studio_video_3` or `seedance_2_0` | Both faithful to character; pick what's available |
| Aspect (TikTok/Reel/Story/Shorts) | **9:16** | Vertical first, always |
| Aspect (IG Feed single image) | **1:1** | Square |
| Aspect (cover art) | **1:1** | Streaming-platform-ready |
| Aspect (YouTube thumbnail) | **16:9** | Standard YT |
| Generations per prompt | **3-4** | Pick the strongest — first generation is rarely the best |

---

# PART 2 — IMAGE PROMPTS

Every prompt below: paste the prompt, paste the Character Bible from Part 1, attach your `soul_id`, set aspect ratio, generate 3-4 variants.

---

## 🩸 Hero Portraits (for IG Feed identity posts)

**Used on Days:** 1, 53, 60 + as profile photo + website hero

### Prompt H1 — Identity Reset (Day 1)
```
Cinematic close-up portrait. Papi Lotus standing alone in a pitch-black room with one wine-red practical light source from behind, creating a deep red rim light on the edge of his face and shoulders. Chrome-blue fill light on the front from very low intensity. Face partly in shadow, eyes barely catching the light. Grainy 35mm film, high contrast, deep blacks, no background detail. Soft focus on background, sharp on face. Mood: returning from the dark.
```

### Prompt H2 — Rain Portrait
```
Medium portrait. Papi Lotus standing outside at night, wet hair, rain visible against neon signs behind him. Wine-red neon glow on one side of his face, chrome-blue light on the other. Slight droplets on his jacket. Looking past the camera, not at it. 35mm cinematic, shallow depth of field, rain creating soft bokeh in background. High contrast, film grain. Mood: just left a place he should have stayed at.
```

### Prompt H3 — Hallway Portrait
```
Wide cinematic shot. Papi Lotus standing alone in an empty hotel hallway lit by flickering red overhead lights and one chrome wall sconce. Hands in pockets, head slightly down, eyes lifted to camera. Long black coat. Door behind him slightly ajar, dark inside. Vintage film grain, wide-angle lens compression, deep shadows. Mood: room 317, after.
```

### Prompt H4 — Penthouse Window Portrait
```
Editorial portrait. Papi Lotus standing in front of a floor-to-ceiling window in a dark luxury penthouse at night. City lights blurred behind him through rain on the glass. Low red lamp on the floor casts warm uplight. Reflective marble or chrome surface in foreground. Black turtleneck or fitted shirt. Looking out the window in 3/4 profile, not at camera. Slow shutter speed feel, slight grain. Mood: he can see the whole city and it cannot see him.
```

### Prompt H5 — Next Era Tease (Day 60)
```
Cinematic portrait. Same Papi Lotus character but lit with a different accent color: deep oxblood and a single cold blue light source instead of the usual wine red and chrome. Slight new wardrobe detail — heavier black coat, different silver chain. Same tired expression. Background completely dark with one out-of-focus light source. Subtle visual cue this is a different chapter. 35mm grain, high contrast.
```

**Variation tip:** Generate 4 of each, then re-run the strongest with seed reuse + a slightly different angle ("3/4 left turn" → "3/4 right turn" → "looking down" → "looking up at ceiling") for matched-pair carousel posts.

---

## 📸 Fake Paparazzi (for False Reality pillar)

**Used on Days:** 5, 17 (magazine spread), 29, 56

### Prompt P1 — Club Exit Flash (Day 5)
```
Candid paparazzi flash photograph at night. Papi Lotus walking out of an underground club exit, mid-stride, slightly looking away from camera as if just caught. Direct camera flash blowing out one side of his face, creating hard shadow on the other side. Blurred motion on his jacket and arm. Crowd in background completely blown out and indistinct, just shapes and silhouettes. Brick or concrete wall to one side with red neon signage partly visible. Wet pavement reflecting flash. Vintage point-and-shoot camera aesthetic, slight chromatic aberration, harsh flash falloff. Timestamp "03:17 AM" small in corner. Mood: he did not want this photo taken.
```

### Prompt P2 — Through a Crowd
```
Paparazzi long-lens photograph. Papi Lotus seen through a crowd of strangers exiting a venue, only his face and shoulders clearly in focus, everyone else blurred and out of focus. Hand of a stranger partly in frame. One flash highlight catches his cheek. Dim red neon ambient lighting overall. Slight handheld camera shake, grainy night film stock. Mood: caught looking in a direction he should not be looking.
```

### Prompt P3 — Town Car Exit
```
Paparazzi shot of Papi Lotus stepping out of a dark sedan or town car at night. Bottom of black coat trailing, one boot on wet pavement. Door handle and reflective black car body framing him. Driver's seat occupied but face blurred. Background: rainy city street, red and chrome ambient lighting. Direct flash hitting his jacket and chrome chain. Bottom of his face visible, eyes shadowed by the angle. 35mm vintage flash photo, slight motion blur. Mood: 3 AM departure.
```

### Prompt P4 — Through Glass
```
Paparazzi photograph taken from outside through a rain-streaked window. Papi Lotus inside a dim bar or hotel lobby, half-turned away from the window, holding a glass or phone in one hand. Interior lit by warm red and amber lamps. Rain droplets on the glass distort the image slightly. Photographer's reflection faintly visible in the corner of the glass. Voyeuristic angle, slight zoom blur. Mood: he does not know he is being watched.
```

### Prompt P5 — Magazine Inside Spread Companion
```
Fake editorial paparazzi photograph styled like a magazine inside-spread. Papi Lotus walking down a wet city street at night in 3/4 profile, hands in coat pockets, head down, one shoulder turned toward camera. Single streetlight catching the back of his coat. Out-of-focus passing cars create red light streaks. Frame deliberately off-center with negative space to the right (where magazine text would sit). 35mm grain, high contrast, low-key. Mood: caught mid-thought.
```

---

## 🏙️ Editorial / Penthouse / Luxury Loneliness

**Used on Days:** 25, 34, 53, 58

### Prompt E1 — Empty Penthouse Night
```
Editorial photograph. Papi Lotus sitting on a low couch or chaise in an empty dark luxury apartment at night. City lights visible through floor-to-ceiling windows behind him, blurred slightly by rain on the glass. Low red lamp on a side table provides warm key light. Chrome and black marble surfaces. Holding a glass loosely, looking down or to the side, not at camera. Single ice cube in glass catches the red light. Cinematic 35mm, shallow depth of field, soft grain. Mood: he can afford this and it changed nothing.
```

### Prompt E2 — Bathroom Mirror Editorial
```
Editorial photograph. Papi Lotus standing in front of a hotel bathroom mirror, only the reflection visible in frame. Mirror catches him from chest up, slightly off-center. Behind him: dim red bathroom light, marble or chrome fixtures, half a doorway leading to a darker room. Steam softening the edges of the mirror. Slight water droplets on his collarbone or jacket. He is looking at his own reflection, not at the camera. 35mm cinematic, soft grain, ambient red and chrome lighting. Mood: 4 AM.
```

### Prompt E3 — Window Silhouette
```
Cinematic wide editorial shot. Papi Lotus standing in front of a massive dark window at night, body in near-silhouette, only a sliver of his face catching wine-red light from a single source behind the camera. Rain visible on the glass, city blurred and dim outside. Empty room behind him implied through reflections in the glass. Long lens compression, deep shadows, fine grain. Mood: insomnia.
```

### Prompt E4 — Marble + Smoke
```
Editorial close-up. Papi Lotus seated on a dark leather chair, low light, smoke or vapor drifting through the frame catching red light. Hand draped over the arm of the chair, chrome ring visible. Background a dim oxblood-painted wall with one piece of abstract art partly visible. Single soft red key light from above. Slight bokeh on background. 35mm cinematic, soft grain. Mood: he has been awake too long.
```

---

## 🏚️ Motel Noir (the brand's home base)

**Used on Days:** 5 paparazzi alternative, 14, 34, regular hook content backgrounds

### Prompt M1 — Outside The Motel
```
Wide cinematic shot. Papi Lotus standing outside a roadside motel at 3 AM. Buzzing red neon "VACANCY" sign overhead, partly broken. Wet asphalt parking lot, one car in background. Black jacket, hands in pockets, head slightly down. Single overhead motel walkway light catches one shoulder in chrome-blue. Steam rising from a manhole or vent. 35mm cinematic film grain, high contrast, deep blacks. Mood: he is checking in or checking out, ambiguous.
```

### Prompt M2 — Motel Hallway
```
Long lens shot down an empty motel hallway at night. Papi Lotus standing far down the hall, small in frame, head slightly turned. Red flickering overhead emergency-style lights running down the hallway. Doors on both sides, one slightly ajar. Carpet pattern, wallpaper, deeply 1970s but stripped of warmth. Slight ambient haze. Cinematic deep focus, 35mm grain, low light. Mood: room number unknown.
```

### Prompt M3 — Inside the Room
```
Cinematic interior. Papi Lotus seated on the edge of a motel bed, only half-lit by a red bedside lamp. Wallpaper visible behind him with subtle pattern. Open suitcase or a few personal items visible. Window with venetian blinds, partly open, neon light leaking through. Phone face-down on the bed beside him. He is looking at the floor, hands resting on his knees. 35mm grainy, low light, warm ambient. Mood: he is staying here for reasons he does not want to say.
```

### Prompt M4 — Motel Parking Lot Rain
```
Wide motion shot. Papi Lotus walking across a motel parking lot in the rain at night, black coat over his shoulders, no umbrella. Red neon sign of the motel reflected in the wet pavement. One car parked with headlights on, lighting his silhouette from behind. Steam from car exhaust. Cinematic, 35mm, low angle slight handheld feel. Mood: leaving.
```

---

## 🎙️ Studio / BTS Illusion (False Reality pillar)

**Used on Days:** 19, 35 face-to-camera, 47, 56

### Prompt S1 — Red Studio Booth
```
Cinematic photograph. Papi Lotus inside a dim recording studio booth at night, lit only by red LED accent lights. Microphone visible in foreground partly out of focus. Headphones around his neck, not on his head. Acoustic foam paneling visible on the walls. Hands resting on the music stand or his lap. Eyes closed or looking down. Soft smoke or haze in the air. 35mm grain, shallow depth of field, intimate framing. Mood: in between takes.
```

### Prompt S2 — Mixing Board Silhouette
```
Wide cinematic shot. Papi Lotus seated at a mixing console at night, large studio monitors and reference speakers behind him. Only the LEDs of the equipment and one red overhead light illuminating the scene. He is leaning forward slightly, one hand on the desk. Computer screen glow on his face barely visible. 35mm cinematic, deep shadows, intimate. Mood: alone with the song at 4 AM.
```

### Prompt S3 — Notebook / Lyric Sheet Detail
```
Detail shot. A handwritten notebook page or printed lyric sheet on a dark surface, partly lit by red light. A hand (Papi Lotus's hand, silver ring visible) holds a pen or rests next to it. Slight burn marks or coffee ring on the paper. Faint visible handwritten lyrics, partly legible but not fully readable. Shallow depth of field, 35mm grain. Mood: the song existed before anyone heard it.
```

### Prompt S4 — Looking Up From the Mic
```
Cinematic portrait inside a recording booth. Papi Lotus looking up from the microphone, eyes opening into the camera but not quite engaging, expression unreadable. Mic clearly in foreground but partly out of focus. Red light from the side casts deep shadows. Window into the control room dimly visible behind him. 35mm grain. Mood: he just sang something he meant.
```

### Prompt S5 — Face-to-Camera for Email Push (Day 35)
```
Direct-to-camera medium shot. Papi Lotus looking into the camera, tired eyes, slight half-smile but not warm — knowing, conspiratorial. Black jacket, silver chain visible. Background a dim oxblood-painted wall, slight red ambient light. Frame designed so a text overlay can sit at the bottom third without covering the face. 35mm cinematic, sharp focus on eyes, soft grain. Mood: about to tell you a secret.
```

This is the rare "face-to-camera + half acknowledgment" shot you'll use for the Day 35 email capture post. Face-centered = +35% engagement per research. Don't use this look anywhere else — keep it scarce.

---

## ✍️ Lyric Still Backgrounds (high negative space)

**Used on Days:** 4, 16, 37, 55 — anywhere with "Lyric Still" in the calendar

These are *backgrounds for text overlays*, not portraits. Generate with the character explicitly *not* in frame so there's room for your lyric typography.

### Prompt L1 — Red Room Texture
```
Empty interior, dark room with deep red wallpaper or paint. Single small light source out of frame creating a soft red gradient across one wall. Subtle film grain, slight vignette. No people, no objects, just texture and color. Cinematic 35mm look. Wide negative space across the center for text overlay.
```

### Prompt L2 — Wet Window
```
Close detail shot of a rain-streaked window at night. Out-of-focus red and chrome city lights behind the glass create soft bokeh. Water droplets in sharp focus in the foreground. No people. Deep negative space across the upper two-thirds for text overlay. 35mm cinematic.
```

### Prompt L3 — Empty Hotel Bed
```
Cinematic interior. An empty unmade hotel bed lit by red bedside lamp light. Sheets rumpled, slight depression in one pillow as if someone just got up. Phone face-down on the nightstand, screen dark. No people in frame. Deep shadows, 35mm grain. Negative space at the top of the frame.
```

### Prompt L4 — Wet Pavement Neon
```
Overhead detail of wet asphalt at night. Red neon reflection on the wet surface from an off-frame source. Subtle ripple from a recent footstep or droplet. Tire tracks faintly visible. 35mm grain, low contrast. Negative space center for text.
```

### Prompt L5 — Smoke and Single Light
```
Empty dark space with smoke or fog drifting through a single beam of wine-red light from one side. No other detail. Subtle, atmospheric, leaves room for text. Cinematic, 35mm grain, slight motion in the smoke.
```

### Prompt L6 — Black with Grain
```
Pure black background with cinematic 35mm film grain texture, very subtle vignette, no other detail. Deepest possible blacks. This is the canvas for white-text lyric stills.
```

Save L6 as a reusable asset — you'll use it under text overlays for half the calendar's lyric stills.

---

## 📰 Fake Magazine Covers

**Used on Days:** 17, 58

### Prompt MAG1 — Returns From The Static (Day 17)
```
Fake editorial magazine cover, dark music magazine aesthetic. Cinematic portrait of Papi Lotus filling most of the frame, looking past the camera. Wine red and black color palette. Minimal magazine masthead at the top in a clean condensed sans-serif (placeholder text). One small headline overlay reading "Papi Lotus returns from the static" in small chrome type. Issue number and date in a corner. Slight wear texture as if the magazine has been handled. High fashion music magazine aesthetic, not glossy, not cheerful. 35mm cinematic grain.
```

### Prompt MAG2 — Post-Release Feature (Day 58)
```
Fake editorial magazine cover, post-release issue. Different framing than the first: Papi Lotus in 3/4 profile, partial silhouette. Same wine red and black palette but with a small amber accent. Masthead at top, one small subhead "MOTEL SAINT - the year's most refused interview". Subtle texture and grain, premium underground magazine aesthetic.
```

---

## 💿 Cover Art Variants (Day 26 / 44 / 48)

You only need ONE final cover, but generate 3-4 directions and pick the strongest. All 1:1 aspect.

### Prompt CV1 — Cover Direction A: Portrait + Type
```
Album cover art. Centered cinematic portrait of Papi Lotus, looking past the camera. Wine red ambient lighting, deep black background. Face takes up the upper half of the frame. Bottom third reserved for typography: "PAPI LOTUS" in clean chrome wordmark, "MOTEL SAINT" in smaller condensed sans below. Heavy 35mm grain, subtle film burn at one edge. 1:1 aspect.
```

### Prompt CV2 — Cover Direction B: Symbol + Negative Space
```
Album cover art. Black background with one small wine-red lotus symbol centered. Above it, "PAPI LOTUS" in chrome thin sans-serif. Below, "MOTEL SAINT" smaller. Subtle 35mm grain texture across the entire frame. Minimal, premium, dark luxury. 1:1 aspect.
```

### Prompt CV3 — Cover Direction C: Motel Sign
```
Album cover art. Close-up of a buzzing red motel "VACANCY" or unreadable neon sign at night, partly broken, against a black sky. Slight rain. The wordmark "PAPI LOTUS" sits in white chrome thin sans-serif across the lower third, with "MOTEL SAINT" smaller below. 35mm cinematic grain, slight blue chromatic aberration on the neon edges. 1:1 aspect.
```

---

# PART 3 — VIDEO PROMPTS

These are **image-to-video prompts** — you start with either a still image you generated above, or a clip seed from your `clip_factory/03_output/` folder, and Higgsfield animates it.

For Cinema Studio Video 3 or Seedance 2.0, attach your soul_id + provide a `start_image` or source clip.

---

## 🌀 Hook Loop Backgrounds (for TikTok/Reel/Shorts hook posts)

**Used on Days:** 2, 4, 12, 14, 22, 31, 32, 38, 43, 51, 58 — every "Hook Loop" entry in the calendar

### Video V1 — Rainy Highway Loop
```
Smooth slow camera push forward through a rainy city street at 3 AM. Wine-red and chrome neon reflections on wet pavement, cars passing in slow motion, motion blur on the lights. Slight rain visible falling. Camera tracks at chest height. Subtle handheld feel, not jittery. Atmosphere: nocturnal romance, isolation, dark R&B mood. No people in frame. 9:16. 5-8 seconds. Loopable.
```

### Video V2 — Motel Hallway Loop
```
Slow tracking shot down an empty motel hallway. Red flickering overhead lights pulse irregularly. Camera moves forward at a steady pace toward a door at the far end. Carpet pattern slightly distorted by motion blur. Single ambient hum in the air. Atmosphere: lonely, slightly dangerous, cinematic noir. 9:16. 5-8 seconds. Loopable.
```

### Video V3 — Empty Club Pan
```
Slow camera pan across an empty nightclub interior at 4 AM. Red and chrome lights still on. Empty bar, dim VIP booths, a single forgotten glass on a table. Slow drift through the space as if looking for someone who already left. No people. Atmosphere: after-hours luxury loneliness. 9:16. 5-8 seconds.
```

### Video V4 — Surveillance Camera Feel
```
Static surveillance camera POV looking down at an empty hotel lobby or hallway at night. Slight digital noise overlay, subtle timestamp in the corner reading "03:17 AM". Very slow zoom-in or zoom-out, almost imperceptible. Red emergency-style light source casting shadows. No people. Atmosphere: late-night surveillance, lonely, mysterious. 9:16. 5-8 seconds.
```

### Video V5 — Paparazzi Flash Sequence
```
Rapid sequence of camera flashes in a dark nightclub exit. Each flash briefly illuminates the scene then fades to near-black. Blurred motion of crowds, dark coats, chrome reflections. Handheld shake. Atmosphere: caught between worlds, exposed and concealed at once. 9:16. 5-8 seconds.
```

### Video V6 — Night Highway POV
```
First-person view from inside a moving car at night. Wet windshield, wiper sweeping slowly. Red and chrome city lights blurring past. Slow steady speed, never reaching the destination. Cinematic depth, motion blur on the lights. No driver visible. Atmosphere: heading nowhere specific. 9:16. 5-8 seconds.
```

### Video V7 — Red Room Slow Drift
```
Slow drift through a dim room lit entirely by wine-red light. Smoke or haze in the air catching light. Mirror partly visible in the background. No people. Atmosphere: hypnotic, hallucinatory, intimate. 9:16. 8-12 seconds (extended visualizer length).
```

### Video V8 — Chrome Hallway Light Pulse
```
Long modernist hallway with chrome walls and ceiling lighting. Lights pulse subtly to an unheard beat. Slow camera push forward. Reflection of the camera path on the chrome surfaces. Atmosphere: cold, expensive, isolating. 9:16. 5-8 seconds.
```

### Video V9 — Parking Garage Rain
```
Slow pan across an empty underground parking garage at night. Fluorescent overhead lights flickering, one car parked with headlights still on, illuminating concrete and water dripping. Wet floor reflecting the light. Faint exhaust visible. No people. Atmosphere: in-between place. 9:16. 5-8 seconds.
```

### Video V10 — Wet Glass + City Behind
```
Static close-up of rain on a window with the city blurred and unfocused behind it. Slight handheld drift. Wine-red and chrome neon lights creating soft bokeh in the rain droplets. No people, no movement other than rain. Hypnotic. 9:16. 8-12 seconds (good for lyric overlays).
```

---

## 🔮 AI Visualizer Scenes (lyric-friendly backgrounds)

**Used on Days:** 6, 9 visualizer, 13 lyric clip, 28, 32, 53, 55

### Video VIS1 — Slow Red Room Drift
```
Slow camera drift inside a dim empty room with wine-red walls. One soft red lamp out of frame. Subtle smoke catching light, slow particles in the air. Negative space across the lower two-thirds of the frame for text overlay. Atmosphere: hypnotic, slow heartbeat. 9:16. 10-15 seconds.
```

### Video VIS2 — Smoke + Light Beam
```
Slow drift through smoke or fog illuminated by a single wine-red beam of light. The beam shifts subtly as if the source is breathing. Pure atmosphere, no objects, no people. Designed for text overlay center. 9:16. 8-12 seconds.
```

### Video VIS3 — Wet Pavement Reflection
```
Static slow zoom on wet pavement at night, with red and chrome neon reflections. A drop of rain hits the surface every few seconds creating ripples. Atmosphere: mournful. Designed for lyric overlay top or bottom third. 9:16. 8-12 seconds.
```

### Video VIS4 — VHS Memory Loop
```
Old VHS tape texture with slight tracking lines, slight color bleed. The footage underneath is a blurred, abstract red-and-chrome scene that loops without a clear cut. Tape hiss visual. Slight distortion at the edges. Designed for text overlay anywhere. 9:16. 8-12 seconds.
```

### Video VIS5 — Black With Subtle Motion
```
Near-black background with very subtle, slow-moving wine-red shapes drifting through, more felt than seen. 35mm grain texture overlay. Designed entirely as a backdrop for centered text. 9:16. 8-15 seconds.
```

---

## 🚗 POV / Lyric POV Edits

**Used on Days:** 10, 11, 24, 27, 33, 36, 41, 47, 54

### Video POV1 — Night Drive POV
```
First-person view from the driver's seat of a moving car at night. Wet windshield, slow steady speed. Wine-red and chrome city lights streaking by. One hand briefly visible on the wheel then drops. Cinematic depth. Atmosphere: driving somewhere they should not be going. 9:16. 6-10 seconds.
```

### Video POV2 — Walking Away Sequence
```
First-person POV walking away from a place at night. Wet street, neon signs blurred behind. Slight handheld camera movement matching footsteps. The destination is unclear, the leaving is the point. 9:16. 6-10 seconds.
```

### Video POV3 — Phone Screen at 3 AM
```
First-person POV looking down at a dark phone screen in low light. The screen lights up briefly with a notification then dims. Hand of the user partly visible, silver ring caught in the light. Background completely out of focus. Atmosphere: should not have looked. 9:16. 6-10 seconds.
```

### Video POV4 — Looking Up at Streetlights
```
First-person POV looking up at city streetlights from a sidewalk at night. Sky dark, lights softly out of focus. Slight handheld drift. Rain visible if any. Atmosphere: stopped walking for a reason they cannot name. 9:16. 6-10 seconds.
```

---

## 📺 Surveillance Footage (Days 18 hook, 31 hook)

### Video SUR1 — Empty Hallway Watch
```
Static surveillance-camera-style shot of an empty hotel hallway. Slight digital grain, timestamp burned into corner. Red emergency light flickers once. Camera does not move. Atmosphere: someone might walk past, no one does. 9:16. 6-10 seconds.
```

### Video SUR2 — Lobby From Above
```
High-angle surveillance shot looking down at an empty hotel lobby at night. Reception desk visible but unattended. Dim warm lighting. Slight digital noise, timestamp in corner. Camera static. Atmosphere: where is everyone. 9:16. 6-10 seconds.
```

---

## 🎬 Final Teaser Punch-In (Days 45, 49)

### Video FT1 — Hard Push-In
```
Slow zoom-in on a single key visual from the official music video — character's eyes, a hand, a chrome detail, a neon sign. Push starts wide and ends close enough to feel intimate. Red bloom appears at the moment of maximum closeness. Cuts to black. 9:16. 6 seconds.
```

### Video FT2 — Three-Beat Build
```
Three quick cuts in rhythm: wide motel exterior, mid-shot Papi Lotus walking out, close-up face turning toward camera. Each cut held slightly longer than expected before the next. Final beat lands on the face. Cuts to black. Atmosphere: countdown over. 9:16. 6-8 seconds.
```

---

## 🐌 Slow-Mo Aftershock (Day 53)

### Video SLO1 — Best Moment Slowed
```
Take a strong 2-3 second moment from the original music video (a turn of the head, a hand gesture, a glance) and slow it to 25-40% speed. Apply slight motion blur enhancement, very subtle red color grading boost. Frame can be cropped tighter to make the moment feel monumental. 9:16. 8-12 seconds.
```

---

# PART 4 — Day-by-Day Prompt Map

Use this as the lookup table. When the calendar says "Day 5 IG Reel — Fake Paparazzi," look up Day 5 here, see which prompt(s) to use.

| Day | Calendar Post | Primary Prompt | Aspect |
|---|---|---|---|
| 1 | IG Feed — AI Portrait | **H1** Identity Reset | 1:1 |
| 2 | TikTok Hook Loop A | **V1** Rainy Highway | 9:16 |
| 4 | TikTok Hook Loop B | **V2** Motel Hallway | 9:16 |
| 4 | IG Feed Lyric Still | **L6** Black with Grain | 1:1 |
| 5 | IG Reel Fake Paparazzi | **P1** Club Exit Flash | 9:16 |
| 6 | TikTok AI Visualizer | **VIS1** Red Room Drift | 9:16 |
| 8 | IG Feed Carousel | **H2, H3, H4, M1, P2** (5 stills) | 1:1 |
| 10 | TikTok POV | **POV1** Night Drive | 9:16 |
| 12 | TikTok Hook C | **V3** Empty Club | 9:16 |
| 13 | IG Feed Lyric Clip | **VIS3** Wet Pavement | 9:16 |
| 14 | TikTok Hook D | **V5** Paparazzi Flash | 9:16 |
| 15 | IG Reel Main Teaser | (your music video) + cover frame | 9:16 |
| 16 | TikTok Lyric Clip | **L1** Red Room + lyric overlay | 9:16 |
| 17 | IG Feed Magazine | **MAG1** Returns From Static | 1:1 |
| 18 | TikTok Hook | **SUR1** Surveillance | 9:16 |
| 19 | IG Reel BTS Illusion | **S1** Red Studio Booth + animate | 9:16 |
| 21 | IG Feed Archive Carousel | **L2, L3, M3, P3** (4 stills, archive feel) | 1:1 |
| 22 | TikTok Hook Winning Variant | Re-run **best** of V1-V5 | 9:16 |
| 24 | TikTok Lyric POV | **POV1** Night Drive + lyric | 9:16 |
| 25 | IG Feed Editorial | **E1** Empty Penthouse | 1:1 |
| 26 | TikTok Hook | **V8** Chrome Hallway | 9:16 |
| 27 | IG Reel POV Edit | **POV1** + emotional lyric | 9:16 |
| 28 | TikTok Visualizer | **VIS1** Red Room Drift | 9:16 |
| 29 | IG Feed Paparazzi #2 | **P4** Through Glass | 1:1 |
| 33 | TikTok Snippet A (verse) | **V9** Parking Garage Rain | 9:16 |
| 34 | IG Feed AI Editorial | **E4** Marble + Smoke | 1:1 |
| 35 | IG Reel + TikTok Email Push | **S5** Face-to-Camera | 9:16 |
| 36 | TikTok Snippet B (bridge) | **V10** Wet Glass + City | 9:16 |
| 37 | IG Feed Lyric Still | **L6** Black with Grain | 1:1 |
| 39 | TikTok Snippet C (outro) | **VIS4** VHS Memory Loop | 9:16 |
| 40 | IG Feed Carousel | **M1, M2, M3, M4** (motel set) | 1:1 |
| 41 | TikTok Winning Snippet | Re-run **winner** of A/B/C | 9:16 |
| 42 | IG Reel + TikTok Pre-Save Launch | **CV1** Cover + animation | 9:16 |
| 44 | IG Feed Cover Preview | **CV1/CV2/CV3** partial | 1:1 |
| 45 | IG Reel Final Teaser | **FT1** Hard Push-In | 9:16 |
| 47 | TikTok Lyric POV strongest | **POV2** Walking Away | 9:16 |
| 47 | IG Reel BTS Frame | **S3** Lyric Sheet Detail | 9:16 |
| 48 | IG Feed Cover Reveal | **CV1** (chosen winner) | 1:1 |
| 49 | IG Reel + TikTok Final Teaser | **FT2** Three-Beat Build | 9:16 |
| 50 | RELEASE DAY | (use actual music video, no new prompts needed) | 9:16 |
| 51 | IG Reel Alternate Cut | re-cut from official video, different scene | 9:16 |
| 53 | IG Feed Aftershock Portrait | **H5** Next Era Tease (or revisit H1) | 1:1 |
| 53 | TikTok Slow-Mo | **SLO1** Best Moment Slowed | 9:16 |
| 54 | TikTok Lyric POV | **POV1** Night Drive + best lyric | 9:16 |
| 55 | IG Feed Lyric Still | **L6** Black with Grain | 1:1 |
| 55 | TikTok Extended Visualizer | **VIS5** Black + Subtle Motion (30s) | 9:16 |
| 56 | IG Reel Behind-the-Video | **S2** Mixing Board Silhouette | 9:16 |
| 58 | IG Feed Magazine #2 | **MAG2** Post-Release Feature | 1:1 |
| 59 | TikTok Comment Reply | **V2** or **V4** + comment screenshot overlay | 9:16 |
| 60 | IG Feed Next Era Tease | **H5** Next Era Tease | 1:1 |

---

# PART 5 — Workflow Tips

## Seed reuse for matched variants

When you find a generation that nails the look, **note the seed number** Higgsfield gives you. Re-run the same prompt with the same seed and just one parameter changed (angle, lighting intensity, jacket detail) — you get a matched-pair variant. Use this for IG carousels where 4-5 images need to feel like they're from the same shoot.

## Image-to-video chain (most efficient)

1. Generate a strong **still image** with one of the image prompts above
2. Use that image as the `start_image` for a video prompt
3. Higgsfield extends the still into 5-10 sec of motion while keeping character + lighting consistent

This is **way cheaper in credits** than generating video from scratch every time, and the consistency is higher.

## How to get 4-5 backgrounds from one hook clip

You have one clip from `clip_factory/03_output/` (say `PL_d22_hook_motelhallway_916.mp4`). You want 4 background variations.

For each variation:
1. Open Higgsfield → image-to-video with `cinema_studio_video_3`
2. Paste your hook clip as the source
3. Use one of these "transform" prompts:
   - **Rainy city:** "Transform background to rainy city at 3 AM, wine-red neon reflections on wet pavement, motion blur on lights"
   - **Motel hallway:** "Transform background to empty motel hallway, red flickering overhead lights"
   - **Empty club:** "Transform background to empty nightclub at 4 AM, red and chrome lights, no people"
   - **VHS surveillance:** "Transform to VHS surveillance footage feel, tape grain, timestamp in corner"
   - **Red room:** "Transform background to dim room with wine-red walls, single red lamp source"

Keep character/body/wardrobe locked to the source. Only background changes. One source → 4 distinct posts.

## When the calendar says "winning variant"

Days 22, 38, 41 reference "the winning variant." Here's how to know which one won:

After Days 2/4/12/14 (the four hook backgrounds you posted), check:
- **TikTok analytics** → Save count per post
- **IG insights** → Save + Share count per Reel

The variant with the highest saves+shares is your winner. **Re-run that exact prompt** with a slight tweak (new lyric, new color accent) on Day 22 and Day 38. The algorithm and your audience have both already validated this background.

## Credits budget rough estimate

You're going to need about **80-120 Higgsfield generations** to cover the 60-day calendar:
- ~40 still images (portraits, paparazzi, editorial, magazine, cover art, lyric backgrounds)
- ~30-40 video clips (hook loop variants, visualizers, POV, BTS animation)
- ~15-20 retries / iterations / variants

Higgsfield pricing changes; check your dashboard for current credit pack pricing. Budget accordingly.

## What NOT to do

- Don't use Higgsfield for clips your **clip factory already handles** (cutting, watermarking, lyric overlay). Higgsfield is for *new content + AI backgrounds*, not for cropping existing video.
- Don't generate the same prompt 20 times hoping for a miracle. If 4 generations don't land, **change the prompt**, not the count.
- Don't combine more than 2 mood adjectives. "Cinematic + lonely" works. "Cinematic + lonely + mysterious + seductive + dangerous + intimate" produces mush.
- Don't add specific celebrity references. Higgsfield Soul handles your face — don't ask it to "look like" anyone else.

---

# Quick Reference Card

**Every prompt = [Character Bible] + [Scene] + [Mood] + [Camera] + [Negative Prompt]**

**Always set:**
- `soul_id` = your trained character
- `aspect` = 9:16 (video/story/reel) or 1:1 (feed/cover) or 16:9 (YT thumbnail)
- `model` = soul_2 (images) / cinema_studio_video_3 (video)
- 3-4 generations per prompt, pick the strongest

**Always include the negative prompt from Part 1.**

That's it. Run prompts. Watch the world build itself.
