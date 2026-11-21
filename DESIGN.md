---
name: Alex Nolasco
description: Personal portfolio and web CV of a Tech Lead for telecom data platforms; calm light-or-dark sheet with one live ink pipeline band.
colors:
  bg: "#fbfbfa"
  bg-2: "#f2f2ef"
  surface: "#ffffff"
  text: "#17181c"
  muted: "#5c606b"
  line: "#e3e3de"
  accent: "#0f766e"
  accent-2: "#14b8a6"
  accent-soft: "#e6f4f2"
  bg-dark: "#0d0f12"
  bg-2-dark: "#13161b"
  surface-dark: "#161a20"
  text-dark: "#e8eaed"
  muted-dark: "#9aa1ad"
  line-dark: "#262b33"
  accent-dark: "#2dd4bf"
  accent-2-dark: "#5eead4"
  accent-soft-dark: "#10302d"
  ink: "#0b0d10"
  ink-2: "#12161b"
  ink-line: "#252b33"
  ink-text: "#e8eaed"
  ink-muted: "#9aa1ad"
  flow: "#2dd4bf"
  ink-heading: "#ffffff"
  ink-body: "#c9ced6"
  ink-line-hover: "#3a434e"
  ink-picked: "#0f1d1c"
  logo-tile: "#ffffff"
typography:
  display:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(30px, 4.4vw, 50px)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  display-hero:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(34px, 5vw, 54px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-1.6px"
  headline:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "28px"
    fontWeight: 700
    letterSpacing: "-0.6px"
  headline-band:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "26px"
    fontWeight: 700
    letterSpacing: "-0.5px"
  figure:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "34px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-1px"
    fontFeature: "tnum"
  title:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "18px"
    fontWeight: 700
  lead:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "18.5px"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  body-sm:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "14px"
    fontWeight: 600
  caption:
    fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.2
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "12.5px"
    fontWeight: 600
rounded:
  marker: "2px"
  focus: "6px"
  tag: "7px"
  chip: "9px"
  control: "11px"
  card: "14px"
  stage: "16px"
  panel: "20px"
  round: "50%"
spacing:
  gutter: "16px"
  gap-xs: "6px"
  gap-sm: "10px"
  gap-md: "14px"
  gap-lg: "22px"
  connector: "48px"
  section-cv: "52px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.text}"
    textColor: "{colors.bg}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "44px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "44px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.mono}"
    rounded: "{rounded.chip}"
    padding: "0 10px"
    height: "32px"
  tag:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent}"
    rounded: "{rounded.tag}"
    padding: "6px 9px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.card}"
    padding: "24px"
  nav:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.muted}"
    height: "60px"
  stage-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ink-text}"
    padding: "44px 0 40px"
  stage:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.stage}"
    padding: "18px 14px 16px"
  stage-picked:
    backgroundColor: "{colors.ink-picked}"
    textColor: "{colors.flow}"
    rounded: "{rounded.stage}"
  logo-tile:
    backgroundColor: "{colors.logo-tile}"
    rounded: "{rounded.control}"
    padding: "8px"
    size: "44px"
  win-item:
    textColor: "{colors.ink-body}"
    typography: "{typography.body-sm}"
    padding: "10px 0 10px 18px"
---

# Design System: Alex Nolasco

## Overview

**Creative North Star: "Calm Paper, Live Pipeline"**

The site is a quiet technical sheet: off-white paper (or near-black in dark mode), Inter at generous line height, hairline rules and one teal voice. It reads like a well-set engineering document rather than a marketing page. Nothing decorates; structure comes from rules, spacing and weight contrast.

The CV extends that world with one deliberate exception: a deep ink band that stays dark in both themes and holds the platform as a running pipeline. Four stage cards carry a real figure and real technology logos on white tiles, joined by teal dashed connectors with a travelling packet. Picking a stage lights the achievements that belong to it and dims the rest. Outside the band the page returns to the calm sheet: career as a ruled list, open source and education in two plain columns, a centred contact close.

The system is light and dark through CSS custom properties, Spanish first with an English switch, and the CV prints to one clean A4 sheet with every element visible and the band turned white. No photo on the CV; the name is shown as Kevin Alexander Nolasco Pajuelo, with Alex Nolasco as the brand.

**Key Characteristics:**
- One accent (teal), used for links, the role line, the current career date, focus rings and the flow.
- Flat sheet; depth only from hairlines, a soft ambient shadow on portfolio cards, and a lift on stage interaction.
- Weight contrast in the name (light given names, extra-bold surname) instead of size tricks.
- Technology shown as the real logo on a white tile with its name as text beneath.
- Motion only where data moves (the flow connectors), switched off under reduced motion.

## Colors

A warm off-white neutral ramp with a single deep teal accent, mirrored by a near-black ramp with a bright teal in dark mode, plus one fixed ink ramp for the CV band.

### Primary
- **Deep Teal** (`accent`): links, the CV role line, the current entry's date in the career list, focus outlines, list markers and tag text in light mode. Becomes **Bright Aqua Teal** (`accent-dark`) in dark mode.
- **Signal Teal** (`flow`): the ink band's only colour: flow dashes, arrowheads, the travelling packet, the picked stage's border and name, lit achievement markers and the stage focus ring. Same value in both themes because the band never changes theme.

### Secondary
- **Light Teal** (`accent-2`, `accent-2-dark`): declared on `:root` as the accent's companion; the shipped pages barely use it. Keep it as a supporting tint, never a second voice.
- **Teal Wash** (`accent-soft`, `accent-soft-dark`): tag backgrounds, `::selection` background, the avatar ring.

### Neutral
- **Paper** (`bg`) / **Night** (`bg-dark`): page background.
- **Paper Shade** (`bg-2`) / (`bg-2-dark`): recessed blocks (pillars, domains) and image placeholders.
- **Sheet White** (`surface`) / (`surface-dark`): cards, buttons, chips, the hero card.
- **Ink Black** (`text`) / **Soft White** (`text-dark`): body text, and the fill of the primary button (text and background swap).
- **Slate** (`muted`) / (`muted-dark`): secondary text, nav links, dates, metadata.
- **Hairline** (`line`) / (`line-dark`): every border and rule.

### The ink band (CV layer)
Scoped on `.cv`, not `:root`, and identical in both themes.
- **Deep Ink** (`ink`): the band background. The direction contract named `#0d0f12`; the build ships `ink` a step darker than the dark page so the band still separates from a dark-mode page. The build wins.
- **Ink Card** (`ink-2`): stage card fill. **Ink Rule** (`ink-line`): band borders, stage borders, achievement rules and unlit markers. **Ink Hover Rule** (`ink-line-hover`): stage border on hover. **Picked Ink** (`ink-picked`): the picked stage's fill, a teal-tinted black.
- **Ink Text** (`ink-text`), **Ink Muted** (`ink-muted`), **Ink Body** (`ink-body`) and **White** (`ink-heading`): band body, stage names and captions, achievement text, and the band title, figures and bold runs.

### Named Rules
**The One Voice Rule.** Teal is the only hue. Neutrals carry everything else; a second accent colour is a defect.

**The Fixed Band Rule.** The ink band ignores the theme switch. It is dark on a light page and still dark (and darker) on a dark page; only print turns it white.

**The White Tile Rule.** A vendor or technology logo always sits on a white tile (`logo-tile`) so its own brand colours read on any background, and never appears without its name as text.

## Typography

**Display Font:** Inter (with system-ui, -apple-system, Segoe UI, Roboto, sans-serif)
**Body Font:** Inter (same stack)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, SFMono-Regular, Menlo, monospace)

**Character:** One sans family from 300 to 800 does all the work; hierarchy comes from weight and tight negative tracking on large sizes. Mono is a small utility voice for machine-like tokens, not a costume.

Inter is loaded at 400, 500, 600, 700 and 800; JetBrains Mono at 400 and 500.

### Hierarchy
- **Display** (`display`): the CV name. Given names at 300, the surname in a `<b>` at 800, one line on desktop.
- **Display Hero** (`display-hero`): the portfolio hero heading, 800 throughout, `text-wrap: balance`.
- **Headline** (`headline`): section titles on the sheet. The CV's two-column split drops it to 24px; the close heading is `clamp(28px, 4vw, 40px)` with -0.8px tracking.
- **Headline Band** (`headline-band`): the ink band title, in white.
- **Figure** (`figure`): the one number per stage, white, tabular figures, with its unit as a 14px muted line beneath.
- **Title** (`title`): career role and job headings (18px; portfolio cards use 20px with -0.3px).
- **Lead** (`lead`): portfolio intro, max 58ch. The CV role line is 17px at 600 in the accent.
- **Body** (`body`): 16px/1.65 everywhere on the sheet; text measures capped at 52 to 58ch.
- **Body Small** (`body-sm`): achievements in the band, 15px/1.5. Much metadata sits at 14.5px or 14px muted.
- **Label** (`label`): stage names (14px 600, muted, teal when picked); nav links are 14.5px 500.
- **Caption** (`caption`): logo names under the tiles, 12px muted, no wrap.
- **Mono** (`mono`): toolbar chips (the EN/ES switch), the AN brand mark (600 13px), and tech tags (500 12.5px).

### Named Rules
**The Weight Contrast Rule.** Emphasis in a heading is a weight jump inside one line (300 against 800), never a colour change or gradient.

**The Mono Is A Tool Rule.** Mono marks machine tokens only: the language chip, the brand monogram, technology tags. Headings, figures, dates and section labels stay in Inter.

## Layout

A single centred column, `min(1080px, 100% - 32px)`, which gives the 16px side gutter at every width and no horizontal scroll. Sections are separated by a hairline top rule and vertical padding (64px on the portfolio, 52px on the CV). The sticky nav is 60px tall and the page scrolls with a 76px offset so anchors clear it.

The CV's first viewport is a name row (name and role left, actions right, wrapping with a 24px by 40px gap) followed by the full-bleed ink band. Inside the band the pipeline is a seven-column grid, `1fr 48px 1fr 48px 1fr 48px 1fr`: four stages with three 48px connector lanes. Achievements below run in three columns with 28px column gaps and hairline rules between rows; a one-line totals footer closes the band.

Career is a two-column list (150px date column, then content); open source and education share a two-column split with a 48px gap.

### Responsive
- **At 1000px and below (CV):** the pipeline becomes a single column; connectors turn vertical (3px wide, 34px tall, downward arrowhead); each stage becomes a two-area grid with name left, figure right-aligned, logos on a full row beneath; achievements go to one column; the split stacks with a 36px gap.
- **At 860px and below (portfolio and nav):** nav links hide, leaving brand and chips; multi-column portfolio grids collapse to one.
- **At 560px and below (CV):** the place drops under the role without its divider; career dates sit above their entry; the closing buttons stack full-width up to 360px.

### Print
`@page` is A4 with 9mm by 11mm margins and a 10.5px base. Nav, skip link, actions, footer, contact close, the band's lead sentence and the flow connectors are hidden. A print-only line under the role gives email, LinkedIn and the site address (never a phone number). The band turns white with #111 text; the pipeline becomes four equal columns with 8px gaps; stage cards go white with a light grey border, no lift or shadow; logo tiles shrink to 26px with a hairline border; achievements run in two columns at full opacity with Deep Teal markers. Career, list items and the band avoid page breaks inside.

## Elevation & Depth

Mostly flat. Depth on the sheet comes from hairline borders and the tonal step between `bg`, `bg-2` and `surface`. Portfolio cards and the hero card carry a soft ambient shadow; interaction adds a small lift (`translateY(-1px)` on buttons, `-2px` on cards and stages, `-3px` on the picked stage). Inside the ink band, depth is the step from `ink` to `ink-2` plus a deep drop shadow only on the picked stage.

### Shadow Vocabulary
- **Ambient** (`box-shadow: 0 1px 2px rgba(20,20,30,.04), 0 8px 24px rgba(20,20,30,.06)`; dark: `0 1px 2px rgba(0,0,0,.3), 0 8px 24px rgba(0,0,0,.25)`): the `--shadow` token, on the portfolio hero card and the current job card.
- **Picked Lift** (`box-shadow: 0 14px 30px -12px rgba(0,0,0,.7)`): the selected stage only.
- **Tile Seat** (`box-shadow: 0 1px 0 rgba(255,255,255,.06), 0 4px 10px -4px rgba(0,0,0,.6)`): logo tiles in the band, so the white tile sits on the ink.
- **Packet Halo** (`box-shadow: 0 0 0 3px rgba(45,212,191,.18)`): the travelling dot on a connector.

### Named Rules
**The Lift Means State Rule.** Elements are flat at rest; lift and the deep shadow appear only on hover or selection, and print removes both.

## Shapes

Softly rounded rectangles throughout, with radius growing with the size of the object: 2px achievement markers, 6px focus outline, 7px tags, 9px chips and brand mark, 11px buttons and logo tiles, 14px cards (`--radius`), 16px stage cards, 20px hero card, and full circles only for the avatar, timeline dots and the flow packet. Borders are always 1px hairlines; the only 2px-and-up strokes are the focus outline, the timeline spine and the avatar ring. The flow arrowhead is a `clip-path` triangle; the dashes are a repeating gradient of 7px dash and 5px gap (6px and 6px when vertical).

## Components

### Buttons
Solid and quiet: a 44px pill-less rectangle that inverts the page colours for the main action.
- **Shape:** gently rounded (11px), 1px border, 0 18px padding, 600 at 15px, inline-flex with an 8px icon gap.
- **Primary:** `text` fill with `bg` label (black on paper, white on night). One per group: "Escríbeme" / the email address.
- **Secondary:** `surface` fill, `text` label, hairline border (LinkedIn, PDF, GitHub).
- **Hover / Focus:** border darkens to `muted` and the button lifts 1px over .15s; no underline. Focus is the global 2px accent outline at 3px offset.
- **PDF action:** carries a 16px stroked download icon; its `href` swaps to the ES or EN PDF with the language.

### Chips (toolbar)
- **Style:** 32px square-ish controls in the nav (language, theme), `surface` fill, hairline border, 9px radius, mono 600 12.5px.
- **State:** hover darkens the border to `muted`. The theme chip swaps a stroked sun and moon SVG by theme.

### Tags
- **Style:** mono 500 12.5px on `accent-soft` with `accent` text, 7px radius, 6px by 9px padding, wrapping with 6px gaps. Portfolio only.

### Cards / Containers
- **Corner Style:** 14px.
- **Background:** `surface`; recessed variants on `bg-2`.
- **Shadow Strategy:** flat at rest; Ambient on the hero and current job card (see Elevation).
- **Border:** 1px `line`; on hover a 45% accent mix and a 2px lift.
- **Internal Padding:** 16 to 28px.

### Navigation
- **Style:** sticky, 60px, page background at 82% with a saturate(1.4) blur(10px) backdrop and a hairline bottom border. Brand (AN monogram tile in mono, 32px, `text` fill, plus the name at 700) left; section links in 14.5px 500 `muted`, turning `text` on hover without underline; chips right.
- **Mobile:** links hide at 860px; brand and chips remain.

### Stage card (signature)
A button per platform stage, filling its grid cell inside the ink band.
- **Anatomy:** stage name (label, `ink-muted`), one figure in white with its unit beneath, then a row of logo tiles. Fill `ink-2`, 1px `ink-line` border, 16px radius.
- **Hover:** border to `ink-line-hover`, 2px lift.
- **Picked (`aria-pressed="true"`):** border and name to `flow`, fill `ink-picked`, 3px lift, Picked Lift shadow. Transitions .2s with `cubic-bezier(.2,.8,.2,1)` on transform.
- **Focus:** 2px `flow` outline at 3px offset.

### Logo tile
44px white tile, 8px padding, 11px radius, Tile Seat shadow, `object-fit: contain`; the technology's name in 12px `ink-muted` beneath (an abbreviation like "OTel" keeps the full name in `title`). The image has empty `alt` because the name is the text.

### Flow connector
Lives in the 48px lane between stages, `aria-hidden`. A 3px line of `flow` dashes moving at 1.1s linear infinite, an 8 by 10px triangle head, and a 10px `flow` dot with Packet Halo travelling across in 2.4s `cubic-bezier(.5,0,.3,1)`, fading in over the first 15% and out over the last 15%. Vertical variant below 1000px. Under `prefers-reduced-motion: reduce` the dashes stop and the packet is removed; the global rule also kills transitions and smooth scroll.

### Achievement list and stage select
Achievements are a `<ul aria-live="polite">` under the pipeline; each item carries `data-stage` (`red`, `proc`, `data`, `ops`, or `all`). Text `ink-body` at 15px/1.5 with bold runs in white; a 7px square marker (2px radius) in `ink-line`.
- **Pick:** clicking a stage sets `has-pick` on the pipeline; every achievement drops to opacity .28 and the matching ones (plus `all`) return to 1, turn white and light their marker in `flow`, over .25s.
- **Clear:** clicking the picked stage again or pressing Escape shows them all.

### Career list
An ordered list with a 150px date column in tabular figures; the first (current) date is accent 600, the rest `muted`. Rows separated by hairlines, the first without.

### Language and theme switches
Spanish lives in the DOM. Text nodes carry `data-i18n="key"`; nodes with inline markup (the bold runs in achievements) carry `data-i18n-html="key"`. On load the script captures the Spanish from the page into an ES map, and an EN dictionary in the script supplies the English; switching rewrites `textContent` or `innerHTML`, sets `lang` on `<html>`, swaps the document title and the PDF link, and flips the chip label (it shows the other language) and its `aria-label`. The choice is stored in `localStorage` under `lang`, defaulting to the browser language (Spanish unless it does not start with `es`). Theme sets `data-theme` on `<html>`, stored under `theme`, applied by an inline head script before paint; with no choice it follows `prefers-color-scheme`. Storage access is wrapped in try/catch.

## Do's and Don'ts

### Do:
- **Do** take every colour from the tokens: `:root` for the sheet, `.cv` for the ink band; a new dark surface reuses `ink`, `ink-2` and `ink-line` rather than inventing a black.
- **Do** keep one primary button per action group, `text` on `bg`, 44px tall, 11px radius.
- **Do** show a technology as its real logo on a 44px white tile with its name as text beneath.
- **Do** put a number inside the thing it measures (one figure per stage) and keep totals to a single muted sentence.
- **Do** give every looping animation a `prefers-reduced-motion: reduce` rule that stops it.
- **Do** dim non-matching items to opacity .28 when a selection filters a list, and let Escape clear it.
- **Do** mark every translatable node with `data-i18n` (or `data-i18n-html` when it holds markup), Spanish in the DOM and English in the script's dictionary.
- **Do** check the print sheet: one A4 page, band white, connectors hidden, everything at full opacity, contact as email, LinkedIn and site only.

### Don't:
- **Don't** add an eyebrow or kicker line above a heading.
- **Don't** number sections.
- **Don't** build a row of free-standing metric tiles; figures live inside the stage or entry they measure.
- **Don't** use gradient text.
- **Don't** put a drafting grid, blueprint or dot-grid background behind anything.
- **Don't** dress headings, figures, dates or labels in monospace; mono is for the chips, the monogram and tags.
- **Don't** publish a phone number on the site, the print sheet or the public PDFs; contact is email and LinkedIn.
- **Don't** name a client anywhere; describe the work generically ("mobile operators' network data").
- **Don't** let the ink band follow the theme, or add a second accent hue to it.
- **Don't** show a logo without its name, or put a photo on the CV.
