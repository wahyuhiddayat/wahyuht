---
name: Wahyu Hidayat Portfolio
description: A white, minimalist field-measurement log for a data/ML portfolio — precise readings instead of decoration.
colors:
  paper: "#FFFFFF"
  ink: "#18181B"
  muted: "#71717A"
  hairline: "#E4E4E7"
  accent: "#2563EB"
  paper-dark: "#0A0A0A"
  ink-dark: "#F4F4F5"
  muted-dark: "#A1A1AA"
  hairline-dark: "#27272A"
  accent-dark: "#60A5FA"
typography:
  display:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
  reading:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.5
rounded:
  chip: "9999px"
  none: "0px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  station-label:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    rounded: "{rounded.none}"
    padding: "0px"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.muted}"
    rounded: "{rounded.chip}"
    padding: "4px 10px"
  reading-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0px"
---

# Design System: Wahyu Hidayat Portfolio

## Overview

**Creative North Star: "The Field Measurement Log"**

<!--
DIRECTION CONTRACT
THESIS: Wahyu's real work is taking precise measurements of messy,
real-world systems — RAG latency, transaction volumes, fraud signals —
and recording them with rigor. The site reads as a surveyor's field
measurement log, not another generic Inter-and-blue-links minimalist
dev portfolio (the category default every one of the user's own
reference sites already ships).
OWN-WORLD: plain white ground, near-black ink text, one restrained
accent (Signal Blue) used only for station labels and active/measured
states, Inter for prose/headings, JetBrains Mono for every readout
(station numbers, dates, coordinates, before-arrow-after measurements).
Flat, no shadows; separation via thin hairline rules and whitespace,
not cards.
STORY: a recruiter opens the log, reads Wahyu's "coordinates" (who,
where, what he does), scans real measured outcomes, reads dated field
entries (experience) each with instruments used (skills) and a
recorded result, and logs a coordinate to reach him (contact).
FIRST VIEWPORT: the hero as the log's opening station entry — a
station header, a coordinate-style meta line (location, status), the
mechanism itself stated as the first recorded reading.
FORM: grounded direction #7 (Field Measurement Notebook / Surveyor's
Log), assigned by the seed script over three challengers (floated-
pigment marbling, an 80s drum-machine step row, raku smoke-fired
ceramics — excluded for being dark-paneled, painterly, or unrelated to
the measurement mechanism) and the category-standard default; staging
keeps the existing single-column scroll structure, widened. Accent
color and background texture were revised after the user's direct
feedback: plain white (no grid-ruled texture) and Signal Blue (not
orange) — see Colors and Elevation.
-->

Wahyu's actual craft is measurement: turning chaotic, real-world systems into precise, recorded numbers — a RAG chatbot's response time, a fraud model's transaction volume, a retail dataset's row count. The site takes that literally. It reads like a field surveyor's measurement log, not a portfolio built from the same Inter-and-blue-links template every minimalist developer site (including the user's own reference set) already runs. Section headers become station numbers ("STA 01"). Quantified outcomes are set as readings — a plain "before → after" in monospace, never a fake progress bar or sparkline standing in for a number that doesn't exist. Everything else stays exactly as restrained as the brief asked: plain white ground, black ink, one accent color, no cards, no shadows, no glass.

The palette is almost monochrome on purpose: white/near-black carries the page, and Signal Blue appears only where something is actively being measured or acted on — a station label, an active nav state, a link. Depth doesn't exist here; separation comes from thin hairline rules and generous whitespace, the way a ruled logbook page separates entries without needing a box around each one. Dark mode is a plain, honest inversion — black paper, off-white ink, brightened blue — the same restraint the light mode has, not a second themed world.

**Key Characteristics:**
- Station-number labels ("STA 01", "STA 02"...) replace section headers, in monospace, colored with the one accent
- Real quantified outcomes are set as plain-text "before → after" readings, never as a decorative stat widget
- One accent (Signal Blue) used only for labels, links, and active states — never a background fill
- Inter for all prose and headings; JetBrains Mono for every number, date, coordinate, and reading
- Flat by design: hairline rules and whitespace do the separating work that cards and shadows do elsewhere
- Plain white ground — no background texture
- A wider two-column log-row layout (label column + content column) replaces the old narrow single centered column

## Colors

Nearly monochrome on purpose — white, near-black, and thin gray hairlines carry the whole page, so the one blue accent reads as deliberate every time it appears.

### Primary
- **Signal Blue** (`#2563EB` light / `#60A5FA` dark): the only accent. Used for station-number labels, active nav state, links, and "reading" arrows. Never a background fill or large surface — it marks exactly one thing at a time.

### Neutral
- **Paper** (`#FFFFFF` light / **Paper Dark** `#0A0A0A`): page background. Plain — no grid, no texture.
- **Ink** (`#18181B` light / **Ink Dark** `#F4F4F5`): all heading and body text.
- **Muted** (`#71717A` light / **Muted Dark** `#A1A1AA`): secondary text — dates, meta lines, descriptions.
- **Hairline** (`#E4E4E7` light / **Hairline Dark** `#27272A`): the only border/rule color in the system.

### Named Rules
**The One-Mark Rule.** Signal Blue marks exactly one thing at a time — the station label of the section currently in view, an active link, a reading's arrow. It never fills a background or repeats decoratively.

## Typography

**Prose/Display Font:** Inter (system sans fallback)
**Readout Font:** JetBrains Mono (monospace fallback)

**Character:** Inter carries every sentence a visitor reads — restraint is the point, not a workhorse compromise. JetBrains Mono is reserved for anything that is, functionally, a measurement: station numbers, dates, coordinates, and reading values.

### Hierarchy
- **Display** (600, `clamp(2rem, 4.5vw, 2.75rem)`, tight tracking): the hero name/role line only.
- **Headline** (Inter 600, 1.25rem): unused as a decorative device — section identity comes from the station label + a plain heading, not a large display headline per section.
- **Body** (400, 16px, 1.6 line-height, 65–75ch measure): bio, descriptions, achievement text.
- **Label** (JetBrains Mono 500, 13px, slight tracking): station numbers, dates, meta lines.
- **Reading** (JetBrains Mono 500, 15px): quantified before → after measurements — sized a step above Label so real numbers are the most legible thing on the page.

### Named Rules
**The Measurement-Only-Mono Rule.** JetBrains Mono appears only where the content is a real measurement, date, or coordinate — never as a "technical" costume on ordinary prose.

## Layout

A wider shell (`max-w-6xl`) than the old narrow single column, structured as a two-column log: a left label column (station number + kicker) and a right content column, mirroring the label-left/content-right rhythm validated across the user's own reference set. Body prose still wraps at a 65–75ch measure inside the content column — the shell widens to make room for the label column and breathing margin, not to stretch paragraph lines. Sections separate with a single hairline rule and generous vertical whitespace; nothing is boxed in a card.

The hero reserves room for a small square photo (currently the single profile portrait); the user plans to add more personal photos later (in the spirit of candid life/work photos, not posed corporate headshots) — revisit this section's layout once those assets exist rather than building a gallery ahead of the content.

## Elevation & Depth

None. This system is flat by definition — there is no shadow vocabulary, and the page background is plain white with no grid or texture. Separation is entirely the job of hairline rules and whitespace, the way a ruled logbook page separates entries without a box around each one.

### Named Rules
**The No-Shadow Rule.** Nothing in this system casts a shadow. If a boundary is needed, it is a 1px hairline rule; if separation is needed, it is whitespace.

## Shapes

Square and flat everywhere except tech/skill tags, which are the system's one rounded-full pill shape — a deliberate, narrow exception, not a general rounding language. Borders are always a single 1px hairline; there are no thick borders, no card radii, no circular badges.

## Components

Restraint is the interaction language too: nothing lifts, nothing glows. Feedback is a color or underline change, never a shadow or scale transform.

### Navigation
A plain text link row (no pill, no icon tokens, no floating tray) — matches the reference set's convention directly. The active section's label turns Signal Blue; others stay Ink/Muted. A simple light/dark toggle sits at the end of the row, styled as plain text/icon, not a token button.

### Station Label
`STA 0X` in JetBrains Mono, Signal Blue, followed by a short Ink heading on the same baseline — replaces every section header. This is the system's signature recurring device, and the only place color repeats as a "constant."

### Readings
Where a section has a real quantified outcome, it renders as a plain reading line: `60-120s → 20-30s` in JetBrains Mono, the arrow in Signal Blue, everything else in Ink. Never invented where no real number exists — a section with no measurable outcome simply has none.

### Tags / Chips
The one rounded-full shape in the system: 1px Hairline border, Paper background, Muted text, small and quiet — used for skills and tech stacks, matching the reference set's pill convention exactly.

### Log Rows (Experience, Education)
Each entry is a two-column row: a left label (dates, in Label type) and right content (role, org, description, readings, chips), separated from the next entry by a single hairline rule. No card, no border box, no shadow — just the rule and whitespace.

### Project Entries
Title + arrow-linked "Live Demo / Source Code" as plain text links (Signal Blue for the live link), a one-line description, a reading line if a real quantified outcome exists, and tech chips — separated by whitespace, not bordered cards.

## Do's and Don'ts

### Do:
- **Do** mark exactly one thing at a time with Signal Blue — a label, a link, a reading arrow (**The One-Mark Rule**).
- **Do** keep JetBrains Mono reserved for genuine measurements, dates, and coordinates (**The Measurement-Only-Mono Rule**).
- **Do** separate every section and entry with a hairline rule and whitespace, never a card or shadow (**The No-Shadow Rule**).
- **Do** render a real quantified outcome as a plain before → after reading; omit it entirely where no real number exists.
- **Do** keep the station-label device as the one recurring signature element across every section.
- **Do** keep the page background plain white — no grid, no texture.

### Don't:
- **Don't** add a card, border-box, or shadow anywhere — this system has none.
- **Don't** invent a stat bar, progress ring, or sparkline to represent a number — set the real number as text or don't show one.
- **Don't** introduce a second accent color; the system has exactly one.
- **Don't** round anything beyond the one pill-chip exception — no rounded cards, no circular badges.
