/* ============================================================
   JOEY'S UI CORE  —  v2.0.0
   Smoked ruby liquid glass theme
   ============================================================
   USAGE
   ─────
   HTML page:
     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
     <script src="https://cdn.jsdelivr.net/gh/onth-bot/dsp-shared-ui@main/joeys-ui-core.js"></script>

   Tampermonkey:
     // @require https://cdn.jsdelivr.net/gh/onth-bot/dsp-shared-ui@main/joeys-ui-core.js

   DESIGN PHILOSOPHY
   ─────────────────
   The core owns:  tokens, component appearance, animations, JS utilities
   Each script owns: widths, grid columns, breakpoints, padding, layout

   COMPONENTS (CSS classes)
   ────────────────────────
   Page       .dsp-page-bg
   Hero       .dsp-hero  .dsp-hero-badge  .dsp-hero-title  .dsp-hero-title-accent
              .dsp-hero-sub  .dsp-hero-meta
   Section    .dsp-section-header  .dsp-section-icon  .dsp-section-title-wrap
              .dsp-section-eyebrow  .dsp-section-title  .dsp-section-line
              .dsp-section-label  (text+rule variant)
   Cards      .dsp-card  .dsp-card-title  .dsp-card-icon
              .dsp-panel  .dsp-panel-fixed
   Records    .dsp-record-item  .dsp-record-label  .dsp-record-val
              .dsp-record-name  .dsp-record-date
              .dsp-record-podium  .dsp-podium-row  .dsp-podium-rank
              .dsp-podium-name  .dsp-podium-val
   Leaderboard .dsp-leaderboard  .dsp-rank-cell  .dsp-rank-num
               .dsp-rank-num.gold/.silver/.bronze  .dsp-driver-name
               .dsp-stat-tag
   Score Ring  .dsp-ring-wrap  .dsp-ring-track  .dsp-ring-fill
               .dsp-ring-center  .dsp-ring-score  .dsp-ring-label
   Metric List .dsp-metric-list  .dsp-metric-row  .dsp-metric-name
               .dsp-metric-name .sub  .dsp-metric-chip
               .dsp-metric-chip.green/.amber/.red/.neutral
   Status      .dsp-status-dot  .ready/.running/.warning/.error
   Progress    .dsp-progress-wrap  .dsp-progress-track  .dsp-progress-fill
               .dsp-progress-fill.active  (shimmer)
   Log         .dsp-log  .dsp-log-entry  .dsp-log-time  .dsp-log-msg
               .dsp-log-msg.success/.warning/.error
   Typography  .dsp-title  .dsp-subtitle  .dsp-muted
               .dsp-font  .dsp-font-display  .dsp-font-mono
   Badge       .dsp-badge
   Button      .dsp-btn  .dsp-btn.primary/.danger/.success
   Input       .dsp-input  .dsp-select  .dsp-textarea
   Chip        .dsp-chip  .dsp-chip.good/.warn/.bad
   Alert       .dsp-alert  .dsp-alert.good/.warning/.danger
   Table       .dsp-table
   Layout      .dsp-row  .dsp-stack  .dsp-grid-2
   Reveal      .dsp-reveal  → .dsp-reveal.visible
   Footer      .dsp-footer  .dsp-footer-logo
   Toast       (JS only — DSP_UI.toast)

   JS UTILITIES
   ────────────
   DSP_UI.injectTheme()          Inject CSS vars + all component classes
   DSP_UI.syncThemeColor()       Sync <meta name="theme-color"> to --bg
   DSP_UI.toast(msg, type)       Bottom-right toast (type: success/warning/danger)
   DSP_UI.createPanel(opts)      Build a fixed .dsp-panel (draggable optional)
   DSP_UI.makeDraggable(box, h)  Make any element draggable by handle
   DSP_UI.scrollReveal(sel)      IntersectionObserver for .dsp-reveal elements
   DSP_UI.ring(score, size)      Build SVG score ring HTML string
   DSP_UI.esc(str)               HTML-escape a string
   DSP_UI.num(val)               Parse float, fallback 0
   DSP_UI.fmt(val, dec)          Format number, '--' if falsy
   DSP_UI.fmtPct(val)            Format as percentage (handles 0–1 or 0–100)
   DSP_UI.fmtDate(str, opts)     Format date string via toLocaleDateString
   DSP_UI.fmtDuration(sec)       Seconds → "Xh Ym"
   ============================================================ */

(function () {
  "use strict";

  if (window.DSP_UI_CORE_LOADED) return;
  window.DSP_UI_CORE_LOADED = true;

  window.DSP_UI = window.DSP_UI || {};

  /* ══════════════════════════════════════════════════════════
     THEME TOKENS
     ══════════════════════════════════════════════════════════ */

  DSP_UI.theme = {
    /* Brand / Accent */
    accent:          "#e11d48",
    accent2:         "#991b1b",
    accentDim:       "#7f1d1d",
    accentRgb:       "225, 29, 72",
    accent2Rgb:      "153, 27, 27",
    ink:             "#f4f4f5",
    inkRgb:          "244, 244, 245",

    /* Page / Surfaces */
    bg:              "#08090d",
    surface:         "#101318",
    surface2:        "#151a21",
    card:            "#121720",

    /* Text */
    text:            "#f8fafc",
    textSoft:        "#e2e8f0",
    textMuted:       "#a1a1aa",
    textDim:         "#71717a",
    textSecondary:   "#d4d4d8",

    /* Borders / Shape */
    border:          "#323235",
    borderSoft:      "rgba(244,244,245,.16)",
    rowBorder:       "rgba(244,244,245,.14)",
    rowBorderSoft:   "rgba(244,244,245,.09)",
    radiusSm:        "6px",
    radiusMd:        "8px",
    radiusLg:        "10px",

    /* Shadows */
    shadow:          "0 24px 64px rgba(0,0,0,.44)",
    shadowCard:      "0 10px 28px rgba(0,0,0,.26), inset 0 1px 0 rgba(255,255,255,.06)",
    shadowHover:     "0 18px 42px rgba(0,0,0,.34)",

    /* Status */
    success:         "#22c55e",
    successRgb:      "34, 197, 94",
    warning:         "#f59e0b",
    warningRgb:      "245, 158, 11",
    danger:          "#f43f5e",
    dangerRgb:       "244, 63, 94",

    /* Medal */
    medalGold:       "#f59e0b",
    medalSilver:     "#e4e4e7",
    medalBronze:     "#fb923c",

    /* Fonts */
    fontBody:        "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    fontDisplay:     "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    fontMono:        "'JetBrains Mono', 'SFMono-Regular', Consolas, monospace"
  };

  /* ══════════════════════════════════════════════════════════
     INJECT THEME  —  CSS vars + all component classes
     ══════════════════════════════════════════════════════════ */

  DSP_UI.injectTheme = function () {
    if (document.getElementById("dsp-ui-core-theme")) return;

    const t = DSP_UI.theme;
    const style = document.createElement("style");
    style.id = "dsp-ui-core-theme";

    style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

/* ── CUSTOM PROPERTIES ──────────────────────────────────────────────── */
:root {
  /* Brand */
  --accent:              ${t.accent};
  --accent-2:            ${t.accent2};
  --accent-dim:          ${t.accentDim};
  --accent-rgb:          ${t.accentRgb};
  --accent-2-rgb:        ${t.accent2Rgb};
  --ink:                 ${t.ink};
  --ink-rgb:             ${t.inkRgb};

  /* Surfaces */
  --bg:                  ${t.bg};
  --surface:             ${t.surface};
  --surface-2:           ${t.surface2};
  --card-surface:        ${t.card};
  --card-soft:           rgba(20,20,22,.72);
  --card-shine-top:      rgba(255,255,255,.18);
  --card-shine-bottom:   rgba(255,255,255,.035);
  --liquid-highlight:    rgba(255,255,255,.18);
  --liquid-shadow:       rgba(0,0,0,.34);

  /* Text */
  --text:                ${t.text};
  --text-soft:           ${t.textSoft};
  --text-muted:          ${t.textMuted};
  --text-dim:            ${t.textDim};
  --text-secondary:      ${t.textSecondary};

  /* Borders */
  --border-main:         ${t.border};
  --border-soft:         ${t.borderSoft};
  --row-border:          ${t.rowBorder};
  --row-border-soft:     ${t.rowBorderSoft};

  /* Shape */
  --radius-sm:           ${t.radiusSm};
  --radius-md:           ${t.radiusMd};
  --radius-lg:           ${t.radiusLg};

  /* Shadows */
  --shadow-lg:           ${t.shadow};
  --shadow-card:         ${t.shadowCard};
  --shadow-hover:        ${t.shadowHover};

  /* Status */
  --success:             ${t.success};
  --success-rgb:         ${t.successRgb};
  --warning:             ${t.warning};
  --warning-rgb:         ${t.warningRgb};
  --danger:              ${t.danger};
  --danger-rgb:          ${t.dangerRgb};

  /* Medals */
  --medal-gold:          ${t.medalGold};
  --medal-silver:        ${t.medalSilver};
  --medal-bronze:        ${t.medalBronze};

  /* Table */
  --table-number:        ${t.textMuted};

  /* Hero effects */
  --hero-glow:           rgba(var(--accent-rgb),.16);
  --hero-glow-soft:      rgba(var(--accent-2-rgb),.12);
  --grid-line:           rgba(244,244,245,.045);
  --title-shadow:        0 18px 34px rgba(0,0,0,.42);

  /* Derived accent */
  --accent-bg:           rgba(var(--accent-rgb),.10);
  --accent-bg-strong:    rgba(var(--accent-rgb),.16);
  --accent-bg-hover:     rgba(var(--accent-rgb),.075);
  --accent-bd:           rgba(var(--accent-rgb),.34);
  --accent-bd-strong:    rgba(var(--accent-rgb),.56);
  --accent-glow:         rgba(var(--accent-rgb),.22);
  --accent-glow-soft:    rgba(var(--accent-rgb),.14);
  --accent-glow-strong:  rgba(var(--accent-rgb),.34);
  --accent-ring:         rgba(var(--accent-rgb),.035);

  /* Derived status */
  --success-bg:          rgba(var(--success-rgb),.10);
  --success-bd:          rgba(var(--success-rgb),.28);
  --warning-bg:          rgba(var(--warning-rgb),.10);
  --warning-bd:          rgba(var(--warning-rgb),.28);
  --danger-bg:           rgba(var(--danger-rgb),.10);
  --danger-bd:           rgba(var(--danger-rgb),.28);

  /* Page background */
  --page-bg:
    linear-gradient(135deg, rgba(13,13,15,.94), rgba(8,8,10,.97)),
    radial-gradient(circle at 12% -12%, rgba(var(--accent-rgb),.18), transparent 32rem),
    radial-gradient(circle at 96%  2%, rgba(var(--ink-rgb),.05), transparent 31rem),
    radial-gradient(circle at 68% 118%, rgba(var(--accent-2-rgb),.16), transparent 34rem),
    var(--bg);

  /* ── Backward-compatible aliases ──────────────────────── */
  --black:      var(--bg);
  --dark:       var(--surface);
  --card:       var(--card-surface);
  --card2:      var(--surface-2);
  --border:     var(--border-main);
  --soft-border:var(--border-soft);
  --shadow:     var(--shadow-lg);
  --radius:     var(--radius-md);

  --gold:       var(--accent);
  --gold2:      var(--accent-2);
  --gold-dim:   var(--accent-dim);
  --gold-bg:    var(--accent-bg);
  --gold-bd:    var(--accent-bd);

  --white:      var(--text);
  --muted:      var(--text-muted);

  --green:      var(--success);
  --green-bg:   var(--success-bg);
  --green-bd:   var(--success-bd);
  --amber:      var(--warning);
  --amber-bg:   var(--warning-bg);
  --amber-bd:   var(--warning-bd);
  --red:        var(--danger);
  --red-bg:     var(--danger-bg);
  --red-bd:     var(--danger-bd);
}

/* ── ANIMATIONS ─────────────────────────────────────────────────────── */
@keyframes dsp-fadeUp      { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:none; } }
@keyframes dsp-nameReveal  { from { opacity:0; transform:translateX(-12px); } to { opacity:1; transform:none; } }
@keyframes dsp-pulse       { 0%,100% { opacity:1; } 50% { opacity:.45; } }
@keyframes dsp-shimmer     { 0% { transform:translateX(-100%); } 100% { transform:translateX(100%); } }
@keyframes dsp-panelIn     { from { opacity:0; transform:translateY(-10px) scale(.98); } to { opacity:1; transform:translateY(0) scale(1); } }
@keyframes dsp-liquidSheen { 0% { transform:translateX(-160%) rotate(12deg); } 100% { transform:translateX(160%) rotate(12deg); } }

/* ── GLOBAL RESET (scoped) ──────────────────────────────────────────── */
.dsp-reset, .dsp-reset * { box-sizing: border-box; }

/* ── TYPOGRAPHY ─────────────────────────────────────────────────────── */
.dsp-font         { font-family: ${t.fontBody}; color: var(--text); }
.dsp-font-display { font-family: ${t.fontDisplay}; }
.dsp-font-mono    { font-family: ${t.fontMono}; }

.dsp-title {
  margin: 0; color: var(--text);
  font-family: ${t.fontDisplay};
  font-size: 24px; font-weight: 800; letter-spacing: 0; line-height: 1.1;
}
.dsp-subtitle, .dsp-muted {
  color: var(--text-muted);
  font-family: ${t.fontMono};
  font-size: 11px; letter-spacing: .04em;
}

/* ── PAGE BACKGROUND ────────────────────────────────────────────────── */
.dsp-page-bg {
  background: var(--page-bg);
  background-attachment: fixed;
  color: var(--text);
  min-height: 100vh;
  padding-bottom: env(safe-area-inset-bottom);
}

/* ── LIQUID GLASS MATERIAL ──────────────────────────────────────────── */
.dsp-liquid-glass,
.dsp-glass {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(145deg, rgba(255,255,255,.14), rgba(255,255,255,.035) 42%, rgba(255,255,255,.07)),
    linear-gradient(180deg, rgba(22,22,24,.72), rgba(9,9,11,.78));
  border: 1px solid rgba(255,255,255,.18);
  box-shadow:
    0 18px 48px var(--liquid-shadow),
    inset 0 1px 0 rgba(255,255,255,.22),
    inset 0 -1px 0 rgba(255,255,255,.05);
  backdrop-filter: blur(22px) saturate(1.45);
  -webkit-backdrop-filter: blur(22px) saturate(1.45);
}
.dsp-liquid-glass::before,
.dsp-glass::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(circle at 18% 0%, rgba(255,255,255,.20), transparent 34%),
    radial-gradient(circle at 88% 12%, rgba(var(--ink-rgb),.14), transparent 32%),
    linear-gradient(120deg, transparent 24%, rgba(255,255,255,.12), transparent 44%);
  mix-blend-mode: screen;
  opacity: .72;
}
.dsp-liquid-glass::after,
.dsp-glass::after {
  content: ''; position: absolute; top: -45%; bottom: -45%; left: -35%;
  width: 34%; pointer-events: none;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent);
  opacity: .34;
}
.dsp-liquid-glass:hover::after,
.dsp-glass:hover::after {
  animation: dsp-liquidSheen 1.15s ease;
}

/* ── HERO ────────────────────────────────────────────────────────────── */
.dsp-hero {
  position: relative;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  text-align: center;
  background:
    linear-gradient(rgba(244,244,245,.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(244,244,245,.035) 1px, transparent 1px),
    radial-gradient(circle at 42% -10%, rgba(var(--accent-rgb),.18), transparent 38rem),
    radial-gradient(circle at 70% 8%, rgba(var(--accent-2-rgb),.13), transparent 30rem),
    linear-gradient(180deg, rgba(16,16,18,.96), rgba(8,8,10,.98));
  background-size: 48px 48px, 48px 48px, auto, auto, auto;
  border-bottom: 1px solid var(--border-soft);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}
.dsp-hero::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  background:
    linear-gradient(90deg, rgba(var(--accent-rgb),.08), rgba(var(--accent-2-rgb),.08), rgba(var(--ink-rgb),.09)),
    radial-gradient(ellipse 80% 55% at 50% 0%, var(--hero-glow) 0%, transparent 68%);
  opacity: .9;
}
.dsp-hero::after {
  content: ''; position: absolute; left: 0; right: 0; bottom: 0;
  height: 1px;
  transform: none;
  width: auto;
  background: linear-gradient(90deg, transparent, var(--accent), #f4f4f5, var(--accent-2), transparent);
  box-shadow: 0 0 18px var(--accent-glow);
}
.dsp-hero > * { max-width: min(920px, calc(100vw - 32px)); }
.dsp-hero-badge {
  position: relative; z-index: 1;
  display: inline-flex; align-items: center; gap: 8px;
  font-family: ${t.fontMono}; font-size: 10px;
  letter-spacing: .10em; text-transform: uppercase;
  color: var(--text);
  border: 1px solid var(--accent-bd);
  background:
    linear-gradient(145deg, rgba(255,255,255,.15), rgba(255,255,255,.045)),
    linear-gradient(135deg, rgba(var(--accent-rgb),.13), rgba(var(--accent-2-rgb),.10));
  padding: 8px 16px; border-radius: 999px;
  box-shadow: 0 8px 24px rgba(0,0,0,.24), inset 0 1px 0 rgba(255,255,255,.10);
  margin-bottom: 18px;
  backdrop-filter: blur(18px) saturate(1.35);
  -webkit-backdrop-filter: blur(18px) saturate(1.35);
  animation: dsp-fadeUp .6s ease both;
}
.dsp-hero-title {
  position: relative; z-index: 1;
  font-family: ${t.fontDisplay};
  font-size: clamp(40px, 8vw, 82px);
  font-weight: 800;
  line-height: .95; letter-spacing: 0;
  text-shadow: var(--title-shadow);
  color: var(--text);
  animation: dsp-fadeUp .6s .1s ease both;
}
.dsp-hero-title-accent {
  display: block;
  color: transparent;
  background: linear-gradient(90deg, #ffffff, var(--accent), #f4f4f5, var(--accent-2));
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: none;
}
.dsp-hero-name {
  position: relative; z-index: 1;
  font-family: ${t.fontDisplay};
  font-size: clamp(38px, 7vw, 70px);
  font-weight: 800;
  line-height: .98; letter-spacing: 0;
  color: var(--text);
  text-shadow: var(--title-shadow);
  animation: dsp-nameReveal .7s ease both;
}
.dsp-hero-sub {
  position: relative; z-index: 1;
  margin-top: 18px; font-size: 15px;
  color: var(--text-secondary);
  max-width: 680px; line-height: 1.7;
  animation: dsp-fadeUp .6s .2s ease both;
}
.dsp-hero-meta {
  position: relative; z-index: 1;
  margin-top: 16px; font-family: ${t.fontMono};
  font-size: 10px; letter-spacing: .08em;
  color: var(--text-muted); text-transform: uppercase;
  animation: dsp-fadeUp .6s .25s ease both;
}
/* legacy hero rules overridden by command glass above */
.dsp-hero .dsp-hero-badge,
.dsp-hero .dsp-hero-title,
.dsp-hero .dsp-hero-name,
.dsp-hero .dsp-hero-sub,
.dsp-hero .dsp-hero-meta {
  min-width: 0;
}
/* ── SECTION HEADER (icon + title + rule) ───────────────────────────── */
.dsp-section-header {
  display: flex; align-items: center; gap: 14px;
  margin: 36px 0 14px;
}
.dsp-section-icon {
  width: 36px; height: 36px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  color: var(--accent);
  background:
    linear-gradient(145deg, rgba(255,255,255,.13), rgba(255,255,255,.04)),
    linear-gradient(135deg, rgba(var(--accent-rgb),.12), rgba(var(--accent-2-rgb),.08));
  border: 1px solid var(--accent-bd);
  border-radius: var(--radius-md);
  box-shadow: 0 10px 24px rgba(0,0,0,.22), inset 0 1px 0 rgba(255,255,255,.09);
}
.dsp-section-icon svg {
  width: 14px; height: 14px;
  stroke: var(--accent); fill: none;
  stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
}
.dsp-section-title-wrap { flex: 1; min-width: 0; }
.dsp-section-eyebrow {
  font-family: ${t.fontMono}; font-size: 8.5px;
  letter-spacing: .10em; text-transform: uppercase;
  color: var(--accent); margin-bottom: 2px;
}
.dsp-section-title {
  font-family: ${t.fontDisplay};
  font-size: clamp(21px, 4vw, 30px);
  font-weight: 800;
  line-height: 1.15; letter-spacing: 0; color: var(--text); margin: 0;
}
.dsp-section-line {
  flex: 1; height: 1px;
  background: linear-gradient(90deg, var(--accent-bd), rgba(var(--accent-2-rgb),.20), transparent);
}
/* Text-only section label (alternate style, no icon) */
.dsp-section-label {
  font-family: ${t.fontMono};
  font-size: 9.5px; letter-spacing: .08em;
  text-transform: uppercase; color: var(--accent);
  margin-bottom: 10px;
  display: flex; align-items: center; gap: 12px;
}
.dsp-section-label::after {
  content: ''; flex: 1; height: 1px;
  background: linear-gradient(90deg, var(--accent-bd), transparent);
}

/* ── PANELS / CARDS ─────────────────────────────────────────────────── */
.dsp-panel,
.dsp-card {
  position: relative;
  background:
    radial-gradient(circle at 16% 0%, rgba(255,255,255,.14), transparent 32%),
    linear-gradient(145deg, rgba(255,255,255,.11), rgba(255,255,255,.026) 44%, rgba(255,255,255,.055)),
    linear-gradient(180deg, rgba(22,22,24,.76), rgba(9,9,11,.82));
  color: var(--text);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  font-family: ${t.fontBody};
  backdrop-filter: blur(22px) saturate(1.42);
  -webkit-backdrop-filter: blur(22px) saturate(1.42);
}
.dsp-panel::before,
.dsp-card::before {
  content: ''; position: absolute; inset: 0; pointer-events: none;
  border-radius: inherit;
  background:
    linear-gradient(120deg, rgba(255,255,255,.16), transparent 28%),
    radial-gradient(circle at 90% 10%, rgba(var(--ink-rgb),.10), transparent 30%);
  opacity: .55;
}
.dsp-panel > *,
.dsp-card > * { position: relative; z-index: 1; }
.dsp-card {
  border-top-color: rgba(255,255,255,.26);
}
.dsp-panel { padding: 14px; }
.dsp-card  { padding: 18px 16px; overflow: hidden; }

.dsp-card-title {
  font-family: ${t.fontDisplay};
  font-size: 16px; font-weight: 800; letter-spacing: 0; color: var(--text);
  margin-bottom: 12px;
  display: flex; align-items: center; gap: 9px;
}
/* Icon button used inside card titles */
.dsp-card-icon {
  width: 24px; height: 24px; flex-shrink: 0;
  background:
    linear-gradient(145deg, rgba(255,255,255,.14), rgba(255,255,255,.035)),
    linear-gradient(135deg, var(--accent-bg), rgba(var(--accent-2-rgb),.10));
  border: 1px solid var(--accent-bd);
  border-radius: var(--radius-md);
  display: flex; align-items: center; justify-content: center;
}
.dsp-card-icon svg {
  width: 12px; height: 12px;
  stroke: var(--accent); fill: none;
  stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
}

/* Fixed floating panel */
.dsp-panel-fixed {
  position: fixed; right: 16px; bottom: 16px;
  z-index: 999999; width: 340px;
  animation: dsp-panelIn .2s cubic-bezier(.16,1,.3,1);
}

/* ── RECORD CARDS ───────────────────────────────────────────────────── */
.dsp-record-item {
  position: relative;
  background:
    radial-gradient(circle at 18% 0%, rgba(255,255,255,.13), transparent 34%),
    linear-gradient(145deg, rgba(255,255,255,.10), rgba(255,255,255,.025) 42%, rgba(255,255,255,.055)),
    linear-gradient(180deg, rgba(22,22,24,.76), rgba(9,9,11,.82));
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: 18px 16px; min-width: 0;
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
  backdrop-filter: blur(22px) saturate(1.42);
  -webkit-backdrop-filter: blur(22px) saturate(1.42);
}
.dsp-record-item::before {
  content: ''; position: absolute; inset: 0 0 auto;
  height: 2px;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  background: linear-gradient(90deg, var(--accent), #f4f4f5, var(--accent-2), transparent);
  opacity: .72;
}
.dsp-record-item:hover { transform: translateY(-2px); box-shadow: var(--shadow-hover); border-color: var(--accent-bd); }
.dsp-record-label {
  font-family: ${t.fontMono}; font-size: 8.5px;
  letter-spacing: .06em; text-transform: uppercase;
  color: var(--text-muted); margin-bottom: 4px; line-height: 1.4;
}
.dsp-record-val {
  font-family: ${t.fontDisplay};
  font-size: clamp(28px, 6vw, 38px);
  font-weight: 800;
  color: var(--accent); line-height: 1; margin-bottom: 4px;
  text-shadow: none;
}
.dsp-record-name {
  font-size: 13px; font-weight: 700; color: var(--text);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.dsp-record-date {
  font-size: 10.5px; color: var(--text-muted);
  font-family: ${t.fontMono}; margin-top: 2px;
}
.dsp-record-podium {
  margin-top: 10px;
  border-top: 1px solid var(--border-soft);
  padding-top: 8px;
  display: flex; flex-direction: column; gap: 5px;
}
.dsp-podium-row   { display: flex; align-items: center; gap: 8px; font-size: 12px; }
.dsp-podium-rank  { font-family: ${t.fontDisplay}; font-size: 14px; font-weight: 800; color: var(--text-muted); min-width: 14px; text-align: center; }
.dsp-podium-name  { flex: 1; color: var(--text); font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.dsp-podium-val   { font-family: ${t.fontMono}; font-size: 11px; color: var(--accent); }

/* ── LEADERBOARD TABLE ──────────────────────────────────────────────── */
.dsp-leaderboard { width: 100%; border-collapse: collapse; }
.dsp-leaderboard thead th {
  font-family: ${t.fontMono}; font-size: 9px;
  letter-spacing: .08em; text-transform: uppercase;
  color: var(--accent); padding: 9px 10px;
  border-bottom: 1px solid var(--border-main);
  text-align: left; white-space: nowrap; font-weight: 500;
}
.dsp-leaderboard thead th:not(:first-child) { text-align: right; }
.dsp-leaderboard tbody tr {
  border-bottom: 1px solid var(--row-border-soft);
  transition: background .12s ease, box-shadow .12s ease;
}
.dsp-leaderboard tbody tr:last-child { border-bottom: none; }
.dsp-leaderboard tbody tr:hover { background: rgba(var(--accent-rgb),.065); box-shadow: inset 3px 0 0 var(--accent); }
.dsp-leaderboard tbody td {
  padding: 10px; font-size: 13px; vertical-align: middle;
}
.dsp-leaderboard tbody td:not(:first-child) {
  text-align: right;
  font-family: ${t.fontMono}; font-size: 12px;
  color: var(--table-number); white-space: nowrap;
}
.dsp-rank-cell   { display: flex; align-items: center; gap: 8px; min-width: 0; }
.dsp-rank-num    {
  font-family: ${t.fontDisplay}; font-size: 20px; font-weight: 800;
  color: var(--text-muted); min-width: 22px; text-align: center;
  line-height: 1; flex-shrink: 0;
}
.dsp-rank-num.gold   { color: var(--medal-gold); text-shadow: none; }
.dsp-rank-num.silver { color: var(--medal-silver); }
.dsp-rank-num.bronze { color: var(--medal-bronze); }
.dsp-driver-name {
  font-weight: 700; font-size: 13px; color: var(--text);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  min-width: 0; flex: 1;
}
/* Highlighted stat pill used in leaderboard #1 cell */
.dsp-stat-tag {
  display: inline-block;
  font-family: ${t.fontMono}; font-size: 10px;
  padding: 3px 8px; border-radius: 999px; letter-spacing: .04em;
  background: linear-gradient(135deg, var(--accent-bg), rgba(var(--accent-2-rgb),.10));
  color: var(--text); border: 1px solid var(--accent-bd);
}

/* ── SCORE RING ─────────────────────────────────────────────────────── */
/* Wrap an SVG + center label. Usage: see DSP_UI.ring() helper below */
.dsp-ring-wrap   { position: relative; flex-shrink: 0; }
.dsp-ring-wrap svg { transform: rotate(-90deg); filter: drop-shadow(0 0 10px rgba(var(--accent-rgb),.22)); }
.dsp-ring-track  { fill: none; stroke: rgba(244,244,245,.18); }
.dsp-ring-fill   { fill: none; stroke: var(--accent); stroke-linecap: round; transition: stroke-dashoffset 1.4s cubic-bezier(.4,0,.2,1); }
.dsp-ring-center { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.dsp-ring-score  { font-family: ${t.fontDisplay}; font-weight: 800; line-height: 1; color: var(--accent); letter-spacing: 0; }
.dsp-ring-label  { font-family: ${t.fontMono}; font-size: 7px; letter-spacing: .06em; text-transform: uppercase; color: var(--text-muted); }

/* ── METRIC LIST ────────────────────────────────────────────────────── */
.dsp-metric-list {
  background:
    radial-gradient(circle at 18% 0%, rgba(255,255,255,.13), transparent 34%),
    linear-gradient(145deg, rgba(255,255,255,.10), rgba(255,255,255,.025) 42%, rgba(255,255,255,.055)),
    linear-gradient(180deg, rgba(22,22,24,.76), rgba(9,9,11,.82));
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  backdrop-filter: blur(22px) saturate(1.42);
  -webkit-backdrop-filter: blur(22px) saturate(1.42);
}
.dsp-metric-row {
  display: flex; align-items: center; gap: 12px;
  padding: 11px 16px;
  border-bottom: 1px solid var(--row-border-soft);
  transition: background .12s ease;
}
.dsp-metric-row:last-child { border-bottom: none; }
.dsp-metric-row:hover { background: rgba(var(--accent-rgb),.065); }
.dsp-metric-name { flex: 1; font-size: 13px; font-weight: 500; color: var(--text); min-width: 0; letter-spacing: .01em; }
.dsp-metric-name .sub {
  font-family: ${t.fontMono}; font-size: 9px;
  color: var(--text-muted); letter-spacing: .04em;
  text-transform: uppercase; display: block; margin-top: 1px;
}
.dsp-metric-chip {
  font-family: ${t.fontDisplay}; font-size: 15px; font-weight: 800; line-height: 1;
  padding: 5px 12px; border-radius: var(--radius-md);
  min-width: 72px; text-align: center; letter-spacing: 0;
  flex-shrink: 0; border-width: 1px; border-style: solid;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.08);
}
.dsp-metric-chip.green   { background: var(--success-bg); color: var(--success); border-color: var(--success-bd); }
.dsp-metric-chip.amber   { background: var(--warning-bg); color: var(--warning); border-color: var(--warning-bd); }
.dsp-metric-chip.red     { background: var(--danger-bg);  color: var(--danger);  border-color: var(--danger-bd); }
.dsp-metric-chip.neutral { background: rgba(255,255,255,.04); color: var(--text); border-color: var(--border-main); }

/* ── ALERT BANNER ───────────────────────────────────────────────────── */
.dsp-alert {
  display: flex; align-items: center; gap: 6px;
  border-radius: var(--radius-md); padding: 10px 14px;
  font-family: ${t.fontMono}; font-size: 10px;
  letter-spacing: .04em; line-height: 1.5; margin-top: 8px;
  border-left-width: 3px; border-left-style: solid;
  border-top: 1px solid; border-right: 1px solid; border-bottom: 1px solid;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.05);
}
.dsp-alert         { background: var(--danger-bg);  color: var(--danger);  border-color: var(--danger-bd); }
.dsp-alert.good    { background: var(--success-bg); color: var(--success); border-color: var(--success-bd); }
.dsp-alert.warning { background: var(--warning-bg); color: var(--warning); border-color: var(--warning-bd); }

/* ── STATUS DOT ─────────────────────────────────────────────────────── */
.dsp-status-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--text-muted); flex-shrink: 0;
  transition: background .3s, box-shadow .3s;
}
.dsp-status-dot.ready   { background: var(--success); box-shadow: 0 0 6px rgba(var(--success-rgb),.45); }
.dsp-status-dot.running { background: var(--accent);  box-shadow: 0 0 7px rgba(var(--accent-rgb),.22); animation: dsp-pulse 1.2s infinite; }
.dsp-status-dot.warning { background: var(--warning); box-shadow: 0 0 6px rgba(var(--warning-rgb),.36); }
.dsp-status-dot.error   { background: var(--danger);  box-shadow: 0 0 6px rgba(var(--danger-rgb),.36); }

/* ── PROGRESS BAR ───────────────────────────────────────────────────── */
.dsp-progress-track {
  height: 6px; background: rgba(5,5,7,.62);
  border: 1px solid var(--border-main);
  border-radius: 999px; overflow: hidden;
}
.dsp-progress-fill {
  height: 100%; width: 0%;
  background: linear-gradient(90deg, var(--accent), #f4f4f5, var(--accent-2));
  border-radius: 999px;
  box-shadow: 0 0 10px rgba(var(--accent-rgb),.24);
  transition: width .3s ease;
  position: relative; overflow: hidden;
}
.dsp-progress-fill.active::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.25), transparent);
  animation: dsp-shimmer 1.5s infinite;
}

/* ── ACTIVITY LOG ───────────────────────────────────────────────────── */
.dsp-log {
  overflow-y: auto;
  font-family: ${t.fontMono}; font-size: 10px;
  scrollbar-width: thin; scrollbar-color: var(--border-main) transparent;
  border: 1px solid var(--border-main);
  border-radius: var(--radius-md);
  background: rgba(5,6,9,.62);
}
.dsp-log::-webkit-scrollbar       { width: 4px; }
.dsp-log::-webkit-scrollbar-track { background: transparent; }
.dsp-log::-webkit-scrollbar-thumb { background: var(--border-main); border-radius: 4px; }
.dsp-log-entry {
  padding: 6px 8px;
  border-bottom: 1px solid var(--border-main);
  display: flex; gap: 8px;
}
.dsp-log-entry:last-child  { border-bottom: none; }
.dsp-log-time { color: var(--text-muted); min-width: 50px; flex-shrink: 0; }
.dsp-log-msg  { color: var(--text); flex: 1; word-break: break-word; line-height: 1.4; }
.dsp-log-msg.success { color: var(--success); }
.dsp-log-msg.warning { color: var(--warning); }
.dsp-log-msg.error   { color: var(--danger); }

/* ── BADGE ──────────────────────────────────────────────────────────── */
.dsp-badge {
  display: inline-flex; align-items: center; gap: 6px;
  color: var(--text);
  background:
    linear-gradient(145deg, rgba(255,255,255,.13), rgba(255,255,255,.04)),
    linear-gradient(135deg, var(--accent-bg), rgba(var(--accent-2-rgb),.10));
  border: 1px solid var(--accent-bd);
  border-radius: 999px; padding: 5px 10px;
  font-family: ${t.fontMono}; font-size: 10px;
  letter-spacing: .06em; text-transform: uppercase;
}

/* ── BUTTONS ────────────────────────────────────────────────────────── */
.dsp-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 7px;
  min-height: 36px; padding: 8px 14px;
  border: 1px solid var(--accent-bd);
  border-radius: var(--radius-md);
  background:
    linear-gradient(145deg, rgba(255,255,255,.13), rgba(255,255,255,.035)),
    linear-gradient(180deg, rgba(var(--accent-rgb),.12), rgba(var(--accent-rgb),.055));
  color: var(--text);
  font-family: ${t.fontMono}; font-size: 11px; font-weight: 700;
  letter-spacing: .04em; text-transform: uppercase;
  cursor: pointer; text-decoration: none;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.08);
  transition: transform .15s ease, filter .15s ease, border-color .15s ease, box-shadow .15s ease;
}
.dsp-btn:hover:not(:disabled)   { transform: translateY(-1px); filter: brightness(1.08); border-color: var(--accent-bd-strong); box-shadow: 0 10px 24px rgba(0,0,0,.22), inset 0 1px 0 rgba(255,255,255,.10); }
.dsp-btn:active:not(:disabled)  { transform: translateY(0); }
.dsp-btn:disabled               { opacity: .35; cursor: not-allowed; }
.dsp-btn.primary { background: linear-gradient(135deg, var(--accent), #be123c, var(--accent-2)); color: #ffffff; border-color: rgba(255,255,255,.24); }
.dsp-btn.danger  { background: var(--danger-bg); color: var(--danger); border-color: var(--danger-bd); }
.dsp-btn.success { background: var(--success-bg); color: var(--success); border-color: var(--success-bd); }

/* ── FORM INPUTS ────────────────────────────────────────────────────── */
.dsp-input,
.dsp-select,
.dsp-textarea {
  width: 100%;
  background: rgba(5,6,9,.44);
  color: var(--text);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-md);
  padding: 9px 11px; outline: none;
  font-family: ${t.fontBody};
  font-size: 13px;
  transition: border-color .15s, box-shadow .15s;
}
.dsp-input:focus,
.dsp-select:focus,
.dsp-textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(var(--accent-rgb),.16);
}

/* ── CHIP (status pill) ─────────────────────────────────────────────── */
.dsp-chip {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: 999px; padding: 4px 9px;
  font-family: ${t.fontMono}; font-size: 10px; letter-spacing: .04em;
  border: 1px solid var(--border-soft); color: var(--text);
}
.dsp-chip.good { color: var(--success); background: var(--success-bg); border-color: var(--success-bd); }
.dsp-chip.warn { color: var(--warning); background: var(--warning-bg); border-color: var(--warning-bd); }
.dsp-chip.bad  { color: var(--danger);  background: var(--danger-bg);  border-color: var(--danger-bd); }

/* ── TABLE ──────────────────────────────────────────────────────────── */
.dsp-table {
  width: 100%; border-collapse: collapse;
  background:
    radial-gradient(circle at 18% 0%, rgba(255,255,255,.13), transparent 34%),
    linear-gradient(145deg, rgba(255,255,255,.10), rgba(255,255,255,.025) 42%, rgba(255,255,255,.055)),
    linear-gradient(180deg, rgba(22,22,24,.76), rgba(9,9,11,.82));
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-md);
  overflow: hidden;
  font-family: ${t.fontBody};
}
.dsp-table th,
.dsp-table td {
  padding: 9px 11px;
  border-bottom: 1px solid rgba(255,255,255,.08);
  text-align: left;
}
.dsp-table th {
  color: var(--accent); font-family: ${t.fontMono};
  font-size: 10px; letter-spacing: .06em; text-transform: uppercase;
  font-weight: 500;
}
.dsp-table tr:last-child td { border-bottom: none; }
.dsp-table tbody tr:hover   { background: var(--accent-bg-hover); }

/* ── LAYOUT HELPERS ─────────────────────────────────────────────────── */
.dsp-row    { display: flex; align-items: center; gap: 10px; }
.dsp-stack  { display: flex; flex-direction: column; gap: 10px; }
.dsp-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }

/* ── SCROLL REVEAL ──────────────────────────────────────────────────── */
.dsp-reveal {
  opacity: 0; transform: translateY(12px);
  transition: opacity .4s ease, transform .4s ease;
}
.dsp-reveal.visible { opacity: 1; transform: none; }

/* ── TOAST ──────────────────────────────────────────────────────────── */
.dsp-toast {
  position: fixed; right: 16px; bottom: 16px;
  z-index: 999999; max-width: 360px;
  background:
    radial-gradient(circle at 18% 0%, rgba(255,255,255,.15), transparent 34%),
    linear-gradient(145deg, rgba(255,255,255,.12), rgba(255,255,255,.032) 42%, rgba(255,255,255,.06)),
    linear-gradient(180deg, rgba(22,22,24,.90), rgba(9,9,11,.94));
  color: var(--text);
  border: 1px solid var(--border-soft);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  padding: 12px 14px;
  font-family: ${t.fontBody}; font-size: 13px;
  animation: dsp-fadeUp .25s ease both;
  backdrop-filter: blur(22px) saturate(1.42);
  -webkit-backdrop-filter: blur(22px) saturate(1.42);
}
.dsp-toast.success { border-left-color: var(--success); }
.dsp-toast.warning { border-left-color: var(--warning); }
.dsp-toast.danger  { border-left-color: var(--danger); }

/* ── FOOTER ─────────────────────────────────────────────────────────── */
.dsp-footer {
  border-top: 1px solid var(--border-main);
  padding: 28px 16px; text-align: center;
  color: var(--text-muted); font-size: 12px;
  background: rgba(5,6,9,.62);
}
.dsp-footer-logo {
  font-family: ${t.fontDisplay};
  font-size: 21px; font-weight: 800; letter-spacing: 0;
  color: var(--text); margin-bottom: 4px;
}
.dsp-footer-logo span { color: var(--accent); }
.dsp-footer-internal {
  margin-top: 10px; font-family: ${t.fontMono};
  font-size: 9px; letter-spacing: .06em; color: var(--text-dim);
}

/* ── DRAGGABLE ──────────────────────────────────────────────────────── */
.dsp-draggable { cursor: move; user-select: none; }

/* ── RESPONSIVE GRID COLLAPSE ───────────────────────────────────────── */
@media (max-width: 560px) {
  .dsp-grid-2 { grid-template-columns: 1fr; }
  .dsp-panel  { padding: 12px; }
  .dsp-title  { font-size: 21px; }
  .dsp-btn    { width: 100%; }
}
`;

    document.head.appendChild(style);
    DSP_UI.syncThemeColor();
  };

  /* ══════════════════════════════════════════════════════════
     JS UTILITIES
     ══════════════════════════════════════════════════════════ */

  /** Sync <meta name="theme-color"> to CSS --bg value */
  DSP_UI.syncThemeColor = function () {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    const bg = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim();
    if (bg) meta.setAttribute("content", bg);
  };

  /** HTML-escape a value */
  DSP_UI.esc = function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  /** Parse float, fallback 0 */
  DSP_UI.num = function (v) {
    const n = parseFloat(String(v == null ? "" : v).replace(/,/g, ""));
    return isNaN(n) ? 0 : n;
  };

  /** Format a number — returns '--' if falsy/zero */
  DSP_UI.fmt = function (v, dec) {
    const n = DSP_UI.num(v);
    if (!n) return "--";
    return dec != null ? n.toFixed(dec) : String(n);
  };

  /** Format as percentage — handles 0–1 and 0–100 inputs */
  DSP_UI.fmtPct = function (v, dec) {
    const n = DSP_UI.num(v);
    if (n == null) return "--";
    const pv = n > 1 ? n : n * 100;
    return pv.toFixed(dec != null ? dec : 2) + "%";
  };

  /** Format seconds → "Xh Ym", returns "N/A" for falsy */
  DSP_UI.fmtDuration = function (sec) {
    if (!sec || sec <= 0) return "N/A";
    return Math.floor(sec / 3600) + "h " + Math.floor((sec % 3600) / 60) + "m";
  };

  /** Format a date string */
  DSP_UI.fmtDate = function (s, opts) {
    if (!s) return "";
    const d = new Date(String(s));
    if (isNaN(d)) return String(s);
    return d.toLocaleDateString("en-US", opts || {
      weekday: "long", month: "long", day: "numeric", year: "numeric"
    }).toUpperCase();
  };

  /** Short date: "Apr 29, 2026" */
  DSP_UI.fmtDateShort = function (s) {
    return DSP_UI.fmtDate(s, { month: "short", day: "numeric", year: "numeric" });
  };

  /** Returns 'gold' | 'silver' | 'bronze' | '' for rank index 0-based */
  DSP_UI.rankClass = function (i) {
    return i === 0 ? "gold" : i === 1 ? "silver" : i === 2 ? "bronze" : "";
  };

  /* ── SCORE RING ────────────────────────────────────────────────────── */
  /**
   * Build the HTML string for a score ring.
   * @param {object} opts
   *   score      {number}  0–100
   *   size       {number}  px (default 96)
   *   strokeW    {number}  stroke width (default 7)
   *   label      {string}  center label (default "Score")
   *   id         {string}  id for the fill circle (for animation hookup)
   *   scoreSize  {number}  font-size of score number (default 26)
   * @returns {string} HTML
   */
  DSP_UI.ring = function (opts) {
    opts = opts || {};
    const size    = opts.size    || 96;
    const sw      = opts.strokeW || 7;
    const r       = (size / 2) - (sw / 2);
    const circ    = +(2 * Math.PI * r).toFixed(2);
    const score   = opts.score != null ? +opts.score : null;
    const pct     = score != null ? Math.min(Math.max(score / 100, 0), 1) : 0;
    const offset  = +(circ - pct * circ).toFixed(2);
    const label   = DSP_UI.esc(opts.label  || "Score");
    const id      = opts.id ? ` id="${DSP_UI.esc(opts.id)}"` : "";
    const dispTxt = score != null ? score.toFixed(2) : "--";
    const fontSize = opts.scoreSize || Math.round(size * 0.27);

    return `<div class="dsp-ring-wrap" style="width:${size}px;height:${size}px;">
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle class="dsp-ring-track" cx="${size/2}" cy="${size/2}" r="${r}" stroke-width="${sw}"/>
    <circle class="dsp-ring-fill"${id} cx="${size/2}" cy="${size/2}" r="${r}"
      stroke-width="${sw}"
      stroke-dasharray="${circ}"
      stroke-dashoffset="${offset}"/>
  </svg>
  <div class="dsp-ring-center">
    <span class="dsp-ring-score" style="font-size:${fontSize}px;">${dispTxt}</span>
    <span class="dsp-ring-label">${label}</span>
  </div>
</div>`;
  };

  /* ── TOAST ─────────────────────────────────────────────────────────── */
  /**
   * Show a toast notification.
   * @param {string} msg
   * @param {string} type  'success' | 'warning' | 'danger'
   * @param {number} ms    Duration (default 3500)
   */
  DSP_UI.toast = function (msg, type, ms) {
    const old = document.querySelector(".dsp-toast");
    if (old) old.remove();

    const el = document.createElement("div");
    el.className = "dsp-toast " + (type || "");
    el.textContent = msg;
    document.body.appendChild(el);

    setTimeout(() => el.remove(), ms || 3500);
    return el;
  };

  /* ── DRAGGABLE ─────────────────────────────────────────────────────── */
  /**
   * Make `box` draggable, using `handle` as the drag target.
   * If handle is omitted, box itself is the handle.
   */
  DSP_UI.makeDraggable = function (box, handle) {
    handle = handle || box;
    let sx = 0, sy = 0, bx = 0, by = 0, dragging = false;

    handle.classList.add("dsp-draggable");

    handle.addEventListener("pointerdown", function (e) {
      if (e.target.closest("button, input, select, textarea, a")) return;
      dragging = true;
      sx = e.clientX; sy = e.clientY;
      const r = box.getBoundingClientRect();
      bx = r.left; by = r.top;
      box.style.position = "fixed";
      box.style.left     = bx + "px";
      box.style.top      = by + "px";
      box.style.right    = "auto";
      box.style.bottom   = "auto";
      handle.setPointerCapture(e.pointerId);
    });

    handle.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      const maxX = window.innerWidth  - box.offsetWidth;
      const maxY = window.innerHeight - box.offsetHeight;
      box.style.left = Math.max(0, Math.min(maxX, bx + (e.clientX - sx))) + "px";
      box.style.top  = Math.max(0, Math.min(maxY, by + (e.clientY - sy))) + "px";
    });

    handle.addEventListener("pointerup", () => { dragging = false; });
  };

  /* ── CREATE PANEL ──────────────────────────────────────────────────── */
  /**
   * Build and append a fixed .dsp-panel to body.
   * @param {object} opts
   *   html       {string}  Inner HTML
   *   width      {string}  CSS width   (default "340px")
   *   right      {string}  CSS right   (default "16px")
   *   bottom     {string}  CSS bottom  (default "16px")  — set null to use top
   *   top        {string}  CSS top     (default null)
   *   zIndex     {string}  CSS z-index (default "999999")
   *   draggable  {bool}    Enable dragging (default false)
   *   handle     {string}  CSS selector for drag handle inside panel
   * @returns {HTMLElement}
   */
  DSP_UI.createPanel = function (opts) {
    opts = opts || {};
    DSP_UI.injectTheme();

    const box = document.createElement("div");
    box.className = "dsp-panel dsp-panel-fixed dsp-reset";
    box.style.width   = opts.width   || "340px";
    box.style.right   = opts.right   || "16px";
    box.style.bottom  = opts.bottom  != null ? opts.bottom  : "16px";
    if (opts.top)    box.style.top    = opts.top;
    if (opts.zIndex) box.style.zIndex = opts.zIndex;
    box.innerHTML = opts.html || "";

    document.body.appendChild(box);

    if (opts.draggable) {
      const h = opts.handle ? box.querySelector(opts.handle) : box;
      DSP_UI.makeDraggable(box, h || box);
    }

    return box;
  };

  /* ── SCROLL REVEAL ─────────────────────────────────────────────────── */
  /**
   * Attach IntersectionObserver to .dsp-reveal elements.
   * Call once on DOMContentLoaded, or call again after injecting new elements.
   * @param {string|NodeList} sel  CSS selector or NodeList (default ".dsp-reveal")
   */
  DSP_UI.scrollReveal = function (sel) {
    if (!window.IntersectionObserver) {
      // Fallback: just make everything visible
      document.querySelectorAll(sel || ".dsp-reveal")
        .forEach(el => el.classList.add("visible"));
      return;
    }

    if (!DSP_UI._revealObs) {
      DSP_UI._revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      }, { threshold: 0.06 });
    }

    const els = typeof sel === "string"
      ? document.querySelectorAll(sel || ".dsp-reveal")
      : (sel || document.querySelectorAll(".dsp-reveal"));

    els.forEach(function (el) {
      if (!el.classList.contains("visible")) DSP_UI._revealObs.observe(el);
    });
  };

  /* ── SHORTHAND ALIAS ───────────────────────────────────────────────── */
  window.injectDSPTheme = DSP_UI.injectTheme;

})();
