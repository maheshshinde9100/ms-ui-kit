---
version: alpha
name: Inacio Nakiti
description: A dark, cinematic portfolio system with minimal chrome, soft contrast, and a tech-forward editorial feel.
colors:
  primary: "#eeece8"
  secondary: "#5b5fe0"
  tertiary: "#374151"
  neutral: "#0a0a0a"
  surface: "#111111"
  on-surface: "#eeece8"
  error: "#ff6b6b"
  primary-60: "#eeece899"
  primary-30: "#eeece84d"
  secondary-60: "#5b5fe099"
typography:
  headline-display:
    fontFamily: "GeneralSans-Bold-gate, GeneralSans-Bold, GeneralSans-Bold-fallback, sans-serif"
    fontSize: "67.34px"
    fontWeight: 400
    lineHeight: "67.34px"
    letterSpacing: "-2.69px"
  headline-lg:
    fontFamily: "GeneralSans-Light, sans-serif"
    fontSize: "24px"
    fontWeight: 400
    lineHeight: "29px"
    letterSpacing: "0px"
  headline-md:
    fontFamily: "GeneralSans-Light, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0px"
  headline-sm:
    fontFamily: "GeneralSans-Light, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "22px"
    letterSpacing: "0px"
  body-lg:
    fontFamily: "GeneralSans-Regular-gate, GeneralSans-Regular, GeneralSans-Regular-fallback, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "28px"
    letterSpacing: "0.04em"
  body-md:
    fontFamily: "GeneralSans-Regular-gate, GeneralSans-Regular, GeneralSans-Regular-fallback, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "1.44px"
  body-sm:
    fontFamily: "GeneralSans-Regular-gate, GeneralSans-Regular, GeneralSans-Regular-fallback, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
    letterSpacing: "0.02em"
  label-lg:
    fontFamily: "GeneralSans-Light, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0px"
  label-md:
    fontFamily: "GeneralSans-Light, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
    letterSpacing: "0.08em"
  label-sm:
    fontFamily: "GeneralSans-Light, sans-serif"
    fontSize: "10px"
    fontWeight: 400
    lineHeight: "12px"
    letterSpacing: "0.12em"
rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "64px"
  gutter: "24px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
    height: "40px"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
    height: "40px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "0px"
    height: "auto"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
    height: "40px"
  chip:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
    height: "32px"
---

# Inacio Nakiti

## Overview

This system feels cinematic, restrained, and highly polished, with a dark canvas that lets typography and subtle motion carry the personality. It is tuned for a portfolio audience: visually confident, experimental, but still professional enough to signal front-end craftsmanship. The overall tone is spacious and contemplative rather than dense, with minimal UI chrome and strong central focus.

## Colors

- **Primary (#EEECE8):** A warm off-white used for main headlines, key labels, and high-contrast text against the black background. It reads softer than pure white, keeping the interface elegant rather than stark.
- **Secondary (#5B5FE0):** A saturated indigo accent used sparingly for emphasis, navigation cues, and small state markers. It adds a futuristic note without competing with the hero content.
- **Tertiary (#374151):** A muted slate used for borders, separators, and subdued UI framing. It supports structure while staying visually quiet.
- **Neutral (#0A0A0A):** The dominant background black, giving the portfolio a deep void-like stage. It maximizes contrast and makes the dotted circular motif feel luminous.
- **Surface (#111111):** A slightly lifted dark surface for panels, cards, and inset containers. Use it when a component needs separation without breaking the dark mood.
- **On-surface (#EEECE8):** The default readable text color on dark surfaces. It should be the primary choice for UI copy and interactive labels.
- **Error (#FF6B6B):** Reserved for validation or destructive messaging only. It is not a visible brand color in the screenshot, so it should remain rare and functional.
- **Primary 60 / 30 (#EEECE899 / #EEECE84D):** Semi-transparent versions of the main text color for subdued metadata, thin rules, and secondary labels.
- **Secondary 60 (#5B5FE099):** A softened accent useful for small highlights or low-emphasis status indicators.

## Typography

The system relies on General Sans with a clear contrast between heavy, condensed-feeling display text and lighter supporting text. The headline style uses `headline-display` with a bold gate cut, strong negative letter spacing, and tight line height to create the oversized hero statement. Supporting headings (`headline-lg`, `headline-md`, `headline-sm`) use the light cut and stay visually airy.

Body text is functional and understated, with `body-md` as the default paragraph style and a noticeably expanded letter-spacing treatment that matches the screen’s refined, technical aesthetic. Labels and meta text use `label-md` and `label-sm` for compact navigation, numbering, and subtle captions. Uppercase is not dominant, but small all-caps-like spacing is used in microcopy and metadata to reinforce the editorial tone.

## Layout

The layout is centered and highly symmetrical, built around a single focal column rather than a wide grid. The hero content sits inside a large circular field of particles, with generous outer margins that keep the composition from feeling crowded. Spacing follows a simple rhythm based on 8px, 16px, 24px, 32px, and 64px steps, with 64px acting as the main section gap.

Cards and controls use compact internal padding, typically 16px on cards and 8px 16px on pills and buttons. The composition favors vertical stacking with clear breathing room between the intro label, headline, choice cards, and utility toggles. This produces a calm, guided flow that works well for immersive storytelling.

## Elevation & Depth

The interface is intentionally flat. There are no material shadows or heavy elevation effects; hierarchy is created through contrast, scale, border opacity, and spacing. Thin borders in `tertiary` and subtle lifted surfaces in near-black tones are enough to separate interactive panels from the background.

The dotted circular motif functions as a depth cue by framing the central content like a halo. Because the UI is sparse, even small value shifts in color or opacity create enough dimensionality. Keep depth minimal and avoid adding shadow-heavy treatments that would dilute the cinematic feel.

## Shapes

The shape language is soft but disciplined. Large interactive elements use `rounded.full` for pill-like buttons, while cards use the modest `rounded.md` radius to stay grounded and architectural. The result is a blend of organic smoothness and precise containment.

Avoid sharp corners on primary controls unless a component is explicitly utility-focused. The brand feels most authentic when edges are rounded enough to be approachable but not so soft that the system becomes playful.

## Components

### Buttons
- **Primary buttons (`button-primary`):** Use the warm off-white background with dark text, rounded-full corners, and compact 8px 16px padding. They should feel like the most decisive action on the screen.
- **Secondary buttons (`button-secondary`):** Use a dark pill with a faint border and light text. These are appropriate for less prominent choices, toggles, or supporting actions.
- **Tertiary buttons (`button-tertiary`):** Render as text-only or near-invisible affordances. Keep them minimal and avoid adding weight, fills, or shadows.
- Button height should stay around 40px for standard actions, with a minimum width around 120px when used in grouped CTAs.
- States should be subtle: prefer border or opacity shifts over dramatic color changes.

### Cards
- Use `card` for bordered content blocks such as the two option panels in the hero.
- Cards should remain dark, with a 1px border in muted slate and 16px padding.
- Keep title text large and bold within the card, while supporting copy stays smaller and lower-contrast.
- Cards should feel clickable but not glossy; no shadows, no gradients, no busy inner decoration.

### Inputs and Chips
- Inputs should inherit the pill form of buttons when present, with dark fill, light text, and full rounding.
- Chips should be compact, quiet, and almost interchangeable with buttons in treatment, but shorter in height and visually lighter.
- Use chips for toggles like sound and motion controls; they should not overpower the main story choice.

### Navigation and Meta
- Small language switches, footer links, and intro metadata should use label styles with restrained contrast.
- Keep utility navigation minimal and aligned to edges so the center composition stays dominant.
- Small accent text can use `secondary` sparingly, but never as the main body color.

## Do's and Don'ts

- Do keep the background nearly pure black and let off-white text do most of the visual work.
- Do use the accent indigo sparingly for micro-emphasis, not large blocks of UI.
- Do preserve the centered, symmetrical composition with ample negative space.
- Do favor thin borders and typography scale over shadows for hierarchy.
- Don't introduce bright surfaces, gradients, or glassmorphism effects.
- Don't use large rounded corners on cards; reserve `rounded.full` for pills and buttons.
- Don't make body copy overly dense or tightly line-spaced; maintain the airy editorial rhythm.
- Don't add decorative colors outside the established palette unless they are functionally necessary.