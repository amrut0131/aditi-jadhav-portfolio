# Design Brief

## Direction

Aditi Jadhav Portfolio — Disciplined minimalist tech showcase with OLED black foundation and sky blue accent hierarchy.

## Tone

Brutalist clarity with purpose: no decoration, high contrast, professional and approachable. Every element earns its place.

## Differentiation

Sky blue accent used sparingly on CTAs and section headers creates visual hierarchy; animated underlines on hover reinforce the disciplined, intentional aesthetic.

## Color Palette

| Token       | OKLCH           | Role                              |
| ----------- | --------------- | --------------------------------- |
| background  | 0.12 0 0        | True OLED black, main surface     |
| foreground  | 0.9 0 0         | Near-white text, maximum contrast |
| card        | 0.16 0 0        | Subtle elevation, content zones   |
| primary     | 0.65 0.22 250   | Sky blue accent (buttons, focus)  |
| secondary   | 0.2 0 0         | Muted dark gray (disabled states) |
| accent      | 0.65 0.22 250   | Sky blue (headers, highlights)    |
| destructive | 0.55 0.22 25    | Red warning, sparse use           |
| border      | 0.25 0 0        | Subtle dividers (1px only)        |

## Typography

- Display: Space Grotesk — geometric, modern, tech-forward for headings and hero text
- Body: DM Sans — clean, readable, professional for paragraphs and labels
- Scale: hero `text-6xl md:text-7xl font-bold tracking-tighter`, h2 `text-4xl md:text-5xl font-bold`, label `text-xs font-semibold uppercase`, body `text-base`

## Elevation & Depth

Flat with minimal depth: no shadows except subtle `shadow-elevated` on cards for focus states. Depth comes from typography hierarchy and whitespace, not visual layering.

## Structural Zones

| Zone         | Background    | Border         | Notes                                   |
| ------------ | ------------- | -------------- | --------------------------------------- |
| Header       | bg-background | border-b-[0.5px] border-border | Sticky, anchor links with sky blue hover |
| Hero Section | bg-background | —              | Full viewport, centered, spacious       |
| Content      | bg-background | —              | Alternating bg-card on sections         |
| Skill Cards  | bg-card       | border-[0.5px] border-border | 1px border, grid layout, 4px radius |
| Footer       | bg-background | border-t-[0.5px] border-border | Contact info, minimal styling    |

## Spacing & Rhythm

Spacious, breathable rhythm: 8px grid base, sections separated by `gap-16 md:gap-20`, content padding `px-6 md:px-8 py-16`, micro-spacing via `gap-4` for lists. Whitespace emphasizes content hierarchy.

## Component Patterns

- Buttons: sky blue (`bg-primary`) on black, no radius (sharp), full width or `w-fit`, hover state `opacity-90`, no shadow
- Cards: `bg-card` with `border-[0.5px] border-border`, `rounded-sm` (4px), `p-6`, no shadow except hover `shadow-elevated`
- Badges/Labels: sky blue text (`text-accent`), uppercase, 10px font size, semibold weight

## Motion

- Entrance: fade-in on scroll (Intersection Observer), 300ms ease-out, no bounce
- Hover: accent underline scales from 0 to 100% on text, button opacity shift, all transitions 300ms smooth
- Decorative: none (minimize distraction from content)

## Constraints

- No gradients, no glows, no decorative ornamentation
- Sky blue accent used ONLY on CTAs, section labels, and hover states
- Buttons always sharp corners, no radius
- Cards use 1px borders and subtle elevation, never drop shadows
- Typography hierarchy enforces scanning; boldness and scale do the work, not color variation

## Signature Detail

Animated sky blue underline on interactive text elements (section headers, nav links) creates a signature micro-interaction that reinforces the disciplined, intentional design language.
