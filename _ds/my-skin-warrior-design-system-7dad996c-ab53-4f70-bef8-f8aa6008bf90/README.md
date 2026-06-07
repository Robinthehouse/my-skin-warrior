# My Skin Warrior — Design System

> **Selbsthilfe-Tools für Menschen mit Hidradenitis suppurativa (Akne inversa).**
> Digitale PDFs, die helfen, Trigger zu verstehen und Schübe besser zu managen.
> Aus eigener Betroffenheit entwickelt — kein Pharma, kein Wellness-Geschwurbel.
> Verkauf über Gumroad.

This repository is the single source of truth for the My Skin Warrior brand: tone of
voice, color, type, spacing, components, and ready-to-use HTML/JSX building blocks.

---

## What this brand is

**My Skin Warrior** makes practical self-help tools (digital PDFs / workbooks) for people
living with **Hidradenitis suppurativa (HS)** — in German also known as **Akne inversa**.
HS is a chronic inflammatory skin disease: painful, recurring nodules and abscesses,
usually in skin folds. It is **a medical condition — not a question of hygiene, and not
self-inflicted.** Saying that plainly is part of the brand.

The tools help people:
- **understand their triggers** (food, stress, hormones, friction, weather…),
- **manage flares** ("Schübe") with less guesswork,
- feel **less alone** and less ashamed.

The word **"Warrior"** signals **belonging, self-chosen** — *not* "beat the disease".
We never frame HS as an enemy to defeat. We frame it as something you learn to understand
and manage, with more control and less shame.

### Product surfaces
- **Gumroad product / landing pages** — the primary commercial surface. Where the PDFs
  are described and sold. (See `ui_kits/landing/`.)
- **The PDFs / workbooks themselves** — trigger trackers, flare logs, explainer guides.
  Same type & color system, print-friendly. (Slide/page samples in `slides/`.)

### Sources given for this system
- **Brand brief** supplied directly by the founder (verbatim spec: palette, fonts, UI
  rules, tonality). No external codebase, Figma file, or slide deck was attached — the
  written brief is the source of truth.
- No proprietary repo or Figma link to record here. If you have additional brand assets
  (real mascot artwork, logo files, product PDFs), add them to `assets/` and update this
  README.

---

## CONTENT FUNDAMENTALS — how we write

Tone is the heart of this brand. Get the words wrong and the whole thing falls apart.

**Language & person**
- German. Always **"Du"**, never "Sie".
- **First person, personal, from lived experience.** "Ich kenne diese Tage." — the founder
  has HS; the voice is a fellow patient, not a clinic or a coach.
- Short sentences. Plain words. **No jargon** — and when a medical term is needed, explain
  it plainly: *"Akne inversa — auch Hidradenitis suppurativa — ist eine chronische
  entzündliche Hauterkrankung."*

**The core move: validation BEFORE solution**
- Acknowledge the hard reality **first**, then offer agency. Never skip to the fix.
- Template: *"Ja, das ist beschissen — und du kannst trotzdem was tun."*
- No forced positivity. A flare is **not** a personal failure.

**Shame reduction, said out loud**
- HS is a medical condition. **Not about hygiene. Not your fault.** We state this directly.

**Agency without pressure**
- Understanding triggers = more control, **NOT** "whoever tracks the most, wins".
- Tracking is a tool, not a competition or a moral test.

**Verbs we use:** *verstehen, managen, herausfinden, beobachten, herausfinden.*
**Verbs we avoid:** *bekämpfen, gewinnen, besiegen, heilen.*

**Humor**
- Only from shared experience, *with* the community — never *about* patients, never making
  light of pain.

**Casing & punctuation**
- Sentence case everywhere except short uppercase kicker labels (e.g. `TRIGGER VERSTEHEN`).
- No exclamation-mark spam. Calm, grounded confidence.

**Emoji:** No. Not part of the brand. (See ICONOGRAPHY.)

**FORBIDDEN — never do these:**
- Wellness-Geschwurbel ("heal your gut, align your energy"), Heilsversprechen (cure claims),
  Opfer-Mitleid (pity), ungefragte Ratschläge (unsolicited advice), erzwungene Positivität,
  Stockfoto-Vibe.

**Example copy (good):**
> **Schub-Tage sind beschissen. Punkt.**
> Du musst nicht "positiv bleiben". Du musst nur den nächsten Tag schaffen — und vielleicht
> beim nächsten Mal ein bisschen mehr darüber wissen, was ihn ausgelöst hat.
>
> Akne inversa ist eine medizinische Erkrankung. Kein Hygieneproblem. Nicht deine Schuld.

**Example copy (bad — never):**
> ~~"Besiege deine Akne in 30 Tagen! 🔥 Glow-up garantiert ✨"~~

---

## VISUAL FOUNDATIONS

The look is **clean, hell (light), viel Weißraum (lots of whitespace).** Think of a calm,
modern product page — not a clinical pharma site, not a hype wellness funnel.

**Backgrounds**
- Primary background is **Cream `#FFF8F4`** (warmer than white) and **White** for surfaces.
- **Flat color only.** No full-bleed photos, no repeating textures, no grain, no patterns.
- **No gradients** as fills. (Faint accent *washes* like `--msw-violet-soft` are allowed for
  highlighted panels, but they read as a single soft tint, not a gradient.)

**Color usage rule (critical)**
- Violet / Apricot / Lavender are **accents only — never flächig (never large fills).**
  Headlines, primary buttons, highlights, labels. The page stays cream + white + ink.
- Violet `#7B3FA0` = headlines, primary buttons, CTAs.
- Apricot `#F5A87A` = highlights, secondary (outline) buttons.
- Lavender `#C09ADE` = subtle labels & subheadings.
- Ink `#2A1A2E` = text.

**Type**
- **Outfit ExtraBold (800)** for headlines, tracked slightly tight (`-0.02em`).
- **DM Sans 400/500** for body and UI. Generous line height (1.55–1.7) for readable,
  long-form-friendly text. See `colors_and_type.css` for the full scale.

**Spacing & layout**
- Strict **8px spacing grid** (`--space-*`). Lean toward the *larger* steps — whitespace is
  a feature, not waste. Prose column maxes ~680px; page content ~1120px.
- Layout is calm and single-focus. No dense dashboards, no fixed floating chrome beyond a
  light sticky header.

**Corner radii**
- Cards **8px**, panels **12px**, buttons & chips **pill (50px)**, inputs **8px**.

**Borders**
- Subtle hairlines, **1–1.5px**, `rgba(violet, .20)` (`--msw-border`). Never heavy or dark.

**Shadows (clean-card look)**
- Soft and light only: `--shadow-card` (resting cards), `--shadow-lifted` (hover/raised).
- **No** heavy drop shadows, **no** glassmorphism, **no** inner-shadow neumorphism.

**Cards**
- White surface, 8px radius, 1px violet-tint border, soft `--shadow-card`. Roomy padding
  (24–32px). That's the whole recipe — restraint over decoration.

**Buttons**
- **Pill shape (50px).** Two kinds only:
  - **Primary** — filled Violet, white text.
  - **Secondary** — outline Apricot (apricot border + ink/apricot text, transparent fill).

**Animation & states**
- Gentle. `--ease` cubic-bezier, ~180ms. Fades and small position shifts. **No bounce, no
  spring, no infinite loops.**
- **Hover:** primary button darkens (`--msw-violet-hover`); cards lift to `--shadow-lifted`;
  links darken. Subtle.
- **Press/active:** darker still (`--msw-violet-press`) and a tiny scale-down (~0.98). No
  dramatic motion.

**Transparency & blur**
- Used very sparingly — only for soft hairline borders and the faint accent washes. **No
  backdrop blur, no frosted glass.**

**Imagery vibe**
- If photos are ever used: warm, natural, real people, no stocky gloss. Default is to use
  **no imagery** and let type + whitespace carry the page.

**Mascot**
- A chubby chibi "warrior" — **flat 2D vector, thick outlines, no gradient, no 3D.** Used
  **very sparingly and optionally** (a small friendly accent, never a brand crutch).
  *No mascot artwork was provided with the brief; see CAVEATS. Do not auto-generate one —
  request real artwork before using it.*

---

## ICONOGRAPHY

- **No built-in icon font or proprietary SVG set was provided** with the brief.
- **Recommended set: [Lucide](https://lucide.dev) (CDN).** It is the closest fit to the
  brand: thin, rounded, friendly line icons that sit calmly beside DM Sans without shouting.
  Stroke weight ~1.75–2px, rounded caps. Load from CDN:
  ```html
  <script src="https://unpkg.com/lucide@latest"></script>
  ```
  — and render with `data-lucide="heart"` etc. **This is a substitution** (no official set
  exists yet) — flagged in CAVEATS.
- **Color:** icons take `--fg2` by default, or `--msw-violet` when they're an accent. Never
  multicolor, never filled-and-shadowed.
- **Emoji:** **not used.** No emoji anywhere in product or marketing.
- **Unicode glyphs as icons:** avoid; use Lucide for consistency.
- Keep icons functional and sparse — they label and clarify, they don't decorate.

---

## FILE INDEX (manifest of this folder)

| Path | What it is |
|---|---|
| `README.md` | This file — context, tone, visual foundations, iconography, index. |
| `SKILL.md` | Agent Skill manifest (for use in Claude Code / downloads). |
| `colors_and_type.css` | All design tokens: colors, semantic vars, type scale, spacing, radii, shadows, motion. **Import this first.** |
| `preview/` | Small HTML cards rendered in the Design System tab (colors, type, spacing, components, brand). |
| `ui_kits/landing/` | Gumroad-style product / landing page UI kit (`index.html` + JSX components). |
| `slides/` | Sample PDF/workbook pages & a marketing slide, in the brand system. |
| `assets/` | Logos, illustrations, and other visual assets. (Add real artwork here.) |
| `fonts/` | Place self-hosted Outfit / DM Sans files here if you don't want the CDN. |

**Start here:** read this README, then `colors_and_type.css`, then open `ui_kits/landing/index.html`.

---

## CAVEATS / OPEN ITEMS
- **Fonts** load from the Google Fonts CDN (Outfit + DM Sans are both official Google
  Fonts). No self-hosted files are bundled — drop TTF/WOFF into `fonts/` if you need offline.
- **Mascot** — described in the brief but no artwork was supplied. Not fabricated here.
- **Icons** — Lucide is a recommended substitution; there's no official MSW icon set yet.
- **Logo** — no logo file was provided; the system uses a clean Outfit-set wordmark as a
  placeholder. Replace with real artwork when available.
