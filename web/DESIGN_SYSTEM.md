# Chantolgy Design System

This document outlines the custom design system implemented using Tailwind CSS utilities for consistent typography and styling across the Chantolgy website.

## Typography Classes

### Hero Section Text Styles

#### `.text-style1-white`
Used for welcome/introductory text in hero sections.
- **Desktop**: 16px, font-weight 400, line-height 24px
- **Mobile**: 20px, font-weight 500
- **Font**: Baloo 2
- **Color**: White (#FFF)
- **Alignment**: Center

#### `.text-heading-main`
Used for main headings and primary titles.
- **Desktop**: 64px, font-weight 700, line-height 1.2
- **Mobile**: 40px, font-weight 700
- **Font**: Baloo 2
- **Color**: White (#FFF)
- **Alignment**: Center

#### `.text-tagline`
Used for taglines and secondary headings.
- **Desktop**: 32px, font-weight 600, line-height 1.3
- **Mobile**: 24px, font-weight 600
- **Font**: Baloo 2
- **Color**: White (#FFF)
- **Alignment**: Center

### Body Text Styles

#### `.text-body`
Standard body text for content.
- **Size**: 16px
- **Weight**: 400
- **Line Height**: 1.5
- **Font**: Signika

#### `.text-small`
Small text for captions, footnotes, etc.
- **Size**: 14px
- **Weight**: 400
- **Line Height**: 1.4
- **Font**: Signika

## Usage Examples

```tsx
// Hero section text
<h1 className="text-style1-white">Welcome to</h1>
<h2 className="text-heading-main">Chantolgy Studios</h2>
<h3 className="text-tagline">Play, Chant, Repeat</h3>

// Body content
<p className="text-body">This is standard body text content.</p>
<span className="text-small">This is small text for captions.</span>
```

## Fonts

The design system uses two primary font families:

- **Baloo 2**: Used for headings and hero text (accessible via `font-baloo` or built into custom classes)
- **Signika**: Used for body text and UI elements (accessible via `font-signika`)

## Colors

Custom color palette includes:
- **Primary**: Blue tones (50, 500, 900 variants)
- **Text**: White (#FFF) for hero sections

## Mobile Responsiveness

All typography classes automatically adapt to mobile screens (max-width: 767px) with optimized sizes and weights for better readability on smaller devices.

## Implementation

The design system is implemented through Tailwind CSS plugins in `tailwind.config.ts`, ensuring consistent styling across all components while maintaining the flexibility of utility-first CSS.

