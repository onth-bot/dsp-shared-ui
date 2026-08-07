# DSP Shared UI

Shared visual components and utilities for ONTH Tampermonkey scripts and small internal pages. Version 2.1 uses the same visual foundation as DSP Performance Hub while keeping the existing public classes and JavaScript helpers backward compatible.

## Tampermonkey

```js
// @require https://cdn.jsdelivr.net/gh/onth-bot/dsp-shared-ui@main/dsp-ui-core.js
```

Call `DSP_UI.injectTheme()` before rendering shared components. Existing `.dsp-*` classes, `DSP_UI.dsp`, formatting helpers, score rings, toasts, panels, dragging, and scroll reveal remain available.

## Theme foundation

- Barlow for interface and data text
- Bebas Neue for display headings
- Neutral dark surfaces matching DSP Performance Hub
- Blue reserved for interaction, focus, and active state
- Green, amber, and red reserved for metric and status meaning
- Visible keyboard focus and reduced-motion support

Open `preview.html` locally to review representative components after changing the core.
