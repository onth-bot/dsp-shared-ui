/* ============================================================
   JOEY'S UI CORE — v2.3.0
   Command Center Operations Theme
   ============================================================ */

(function () {
  "use strict";

  if (window.DSP_UI_CORE_LOADED) return;
  window.DSP_UI_CORE_LOADED = true;

  window.DSP_UI = window.DSP_UI || {};

  DSP_UI.theme = {
    accent: "#38bdf8",
    accent2: "#22c55e",
    accentDim: "#0284c7",
    accentRgb: "56, 189, 248",
    accent2Rgb: "34, 197, 94",
    ink: "#e0f2fe",
    inkRgb: "224, 242, 254",

    bg: "#05070a",
    surface: "#0b1117",
    surface2: "#111827",
    card: "#0f172a",

    text: "#f8fafc",
    textSoft: "#e5e7eb",
    textMuted: "#94a3b8",
    textDim: "#64748b",
    textSecondary: "#cbd5e1",

    border: "#1e293b",
    borderSoft: "rgba(148,163,184,.22)",
    rowBorder: "rgba(148,163,184,.16)",
    rowBorderSoft: "rgba(148,163,184,.10)",

    radiusSm: "6px",
    radiusMd: "8px",
    radiusLg: "10px",

    shadow: "0 24px 70px rgba(0,0,0,.48)",
    shadowCard: "0 16px 44px rgba(0,0,0,.38), inset 0 1px 0 rgba(255,255,255,.04)",
    shadowHover: "0 20px 60px rgba(0,0,0,.48), 0 0 0 1px rgba(56,189,248,.28)",

    success: "#22c55e",
    successRgb: "34, 197, 94",
    warning: "#f59e0b",
    warningRgb: "245, 158, 11",
    danger: "#ef4444",
    dangerRgb: "239, 68, 68",

    medalGold: "#facc15",
    medalSilver: "#cbd5e1",
    medalBronze: "#fb923c",

    fontBody: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    fontDisplay: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    fontMono: "'JetBrains Mono', 'SFMono-Regular', Consolas, monospace"
  };

  DSP_UI.injectTheme = function () {
    if (document.getElementById("dsp-ui-core-theme")) return;

    const t = DSP_UI.theme;
    const style = document.createElement("style");
    style.id = "dsp-ui-core-theme";

    style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

:root {
  --accent: ${t.accent};
  --accent-2: ${t.accent2};
  --accent-dim: ${t.accentDim};
  --accent-rgb: ${t.accentRgb};
  --accent-2-rgb: ${t.accent2Rgb};
  --ink: ${t.ink};
  --ink-rgb: ${t.inkRgb};

  --bg: ${t.bg};
  --surface: ${t.surface};
  --surface-2: ${t.surface2};
  --card-surface: ${t.card};

  --text: ${t.text};
  --text-soft: ${t.textSoft};
  --text-muted: ${t.textMuted};
  --text-dim: ${t.textDim};
  --text-secondary: ${t.textSecondary};

  --border-main: ${t.border};
  --border-soft: ${t.borderSoft};
  --row-border: ${t.rowBorder};
  --row-border-soft: ${t.rowBorderSoft};

  --radius-sm: ${t.radiusSm};
  --radius-md: ${t.radiusMd};
  --radius-lg: ${t.radiusLg};

  --shadow-lg: ${t.shadow};
  --shadow-card: ${t.shadowCard};
  --shadow-hover: ${t.shadowHover};

  --success: ${t.success};
  --success-rgb: ${t.successRgb};
  --warning: ${t.warning};
  --warning-rgb: ${t.warningRgb};
  --danger: ${t.danger};
  --danger-rgb: ${t.dangerRgb};

  --medal-gold: ${t.medalGold};
  --medal-silver: ${t.medalSilver};
  --medal-bronze: ${t.medalBronze};

  --table-number: var(--text-muted);

  --accent-bg: rgba(var(--accent-rgb), .08);
  --accent-bg-strong: rgba(var(--accent-rgb), .14);
  --accent-bg-hover: rgba(var(--accent-rgb), .06);
  --accent-bd: rgba(var(--accent-rgb), .30);
  --accent-bd-strong: rgba(var(--accent-rgb), .52);
  --accent-glow: rgba(var(--accent-rgb), .18);
  --accent-glow-soft: rgba(var(--accent-rgb), .08);

  --success-bg: rgba(var(--success-rgb), .10);
  --success-bd: rgba(var(--success-rgb), .30);
  --warning-bg: rgba(var(--warning-rgb), .11);
  --warning-bd: rgba(var(--warning-rgb), .32);
  --danger-bg: rgba(var(--danger-rgb), .11);
  --danger-bd: rgba(var(--danger-rgb), .32);

  --page-bg:
    radial-gradient(circle at top left, rgba(var(--accent-rgb), .12), transparent 34%),
    radial-gradient(circle at bottom right, rgba(var(--accent-2-rgb), .08), transparent 30%),
    linear-gradient(145deg, #05070a, #07111a 58%, #05070a),
    var(--bg);

  --black: var(--bg);
  --dark: var(--surface);
  --card: var(--card-surface);
  --card2: var(--surface-2);
  --border: var(--border-main);
  --soft-border: var(--border-soft);
  --shadow: var(--shadow-lg);
  --radius: var(--radius-md);

  --gold: var(--accent);
  --gold2: var(--accent-2);
  --gold-dim: var(--accent-dim);
  --gold-bg: var(--accent-bg);
  --gold-bd: var(--accent-bd);

  --white: var(--text);
  --muted: var(--text-muted);

  --green: var(--success);
  --green-bg: var(--success-bg);
  --green-bd: var(--success-bd);
  --amber: var(--warning);
  --amber-bg: var(--warning-bg);
  --amber-bd: var(--warning-bd);
  --red: var(--danger);
  --red-bg: var(--danger-bg);
  --red-bd: var(--danger-bd);
}

@keyframes dsp-fadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: none; }
}

@keyframes dsp-nameReveal {
  from { opacity: 0; transform: translateX(-12px); }
  to { opacity: 1; transform: none; }
}

@keyframes dsp-pulse {
  0%,100% { opacity: 1; }
  50% { opacity: .45; }
}

@keyframes dsp-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes dsp-panelIn {
  from { opacity: 0; transform: translateY(-10px) scale(.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.dsp-reset,
.dsp-reset * {
  box-sizing: border-box;
}

.dsp-font {
  font-family: ${t.fontBody};
  color: var(--text);
}

.dsp-font-display {
  font-family: ${t.fontDisplay};
}

.dsp-font-mono {
  font-family: ${t.fontMono};
}

.dsp-title {
  margin: 0;
  color: var(--text);
  font-family: ${t.fontDisplay};
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 1.1;
}

.dsp-subtitle,
.dsp-muted {
  color: var(--text-muted);
  font-family: ${t.fontMono};
  font-size: 11px;
  letter-spacing: .04em;
}

.dsp-page-bg {
  background: var(--page-bg);
  background-attachment: fixed;
  color: var(--text);
  min-height: 100vh;
  padding-bottom: env(safe-area-inset-bottom);
}

.dsp-liquid-glass,
.dsp-glass {
  position: relative;
  overflow: hidden;
  background: rgba(15, 23, 42, .84);
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-card);
  backdrop-filter: blur(16px) saturate(1.15);
  -webkit-backdrop-filter: blur(16px) saturate(1.15);
}

.dsp-liquid-glass::before,
.dsp-glass::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  background: linear-gradient(180deg, rgba(255,255,255,.055), transparent 42%);
}

.dsp-liquid-glass::after,
.dsp-glass::after {
  display: none;
}

.dsp-hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background:
    radial-gradient(circle at top, rgba(var(--accent-rgb), .16), transparent 48%),
    linear-gradient(180deg, rgba(15,23,42,.96), rgba(5,7,10,.98));
  border-bottom: 1px solid var(--border-soft);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}

.dsp-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, rgba(255,255,255,.04), transparent 18%, transparent 82%, rgba(255,255,255,.04)),
    linear-gradient(rgba(148,163,184,.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,.035) 1px, transparent 1px);
  background-size: auto, 42px 42px, 42px 42px;
  opacity: .65;
}

.dsp-hero::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent), var(--accent-2), transparent);
}

.dsp-hero > * {
  max-width: min(920px, calc(100vw - 32px));
}

.dsp-hero-badge {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${t.fontMono};
  font-size: 10px;
  letter-spacing: .10em;
  text-transform: uppercase;
  color: var(--text);
  border: 1px solid var(--accent-bd);
  background: rgba(var(--accent-rgb), .08);
  padding: 8px 16px;
  border-radius: 999px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.06);
  margin-bottom: 18px;
  animation: dsp-fadeUp .6s ease both;
}

.dsp-hero-title {
  position: relative;
  z-index: 1;
  font-family: ${t.fontDisplay};
  font-size: clamp(40px, 8vw, 82px);
  font-weight: 800;
  line-height: .95;
  letter-spacing: 0;
  color: var(--text);
  text-shadow: 0 20px 44px rgba(0,0,0,.48);
  animation: dsp-fadeUp .6s .1s ease both;
}

.dsp-hero-title-accent {
  display: block;
  color: transparent;
  background: linear-gradient(92deg, #ffffff, var(--ink), var(--accent));
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: none;
}

.dsp-hero-name {
  position: relative;
  z-index: 1;
  font-family: ${t.fontDisplay};
  font-size: clamp(38px, 7vw, 70px);
  font-weight: 800;
  line-height: .98;
  letter-spacing: 0;
  color: var(--text);
  text-shadow: 0 20px 44px rgba(0,0,0,.48);
  animation: dsp-nameReveal .7s ease both;
}

.dsp-hero-sub {
  position: relative;
  z-index: 1;
  margin-top: 18px;
  font-size: 15px;
  color: var(--text-secondary);
  max-width: 680px;
  line-height: 1.7;
  animation: dsp-fadeUp .6s .2s ease both;
}

.dsp-hero-meta {
  position: relative;
  z-index: 1;
  margin-top: 16px;
  font-family: ${t.fontMono};
  font-size: 10px;
  letter-spacing: .08em;
  color: var(--text-muted);
  text-transform: uppercase;
  animation: dsp-fadeUp .6s .25s ease both;
}

.dsp-hero .dsp-hero-badge,
.dsp-hero .dsp-hero-title,
.dsp-hero .dsp-hero-name,
.dsp-hero .dsp-hero-sub,
.dsp-hero .dsp-hero-meta {
  min-width: 0;
}

.dsp-section-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 36px 0 14px;
}

.dsp-section-icon {
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  background: rgba(var(--accent-rgb), .08);
  border: 1px solid var(--accent-bd);
  border-radius: var(--radius-md);
  box-shadow: inset 0 1px 0 rgba(255,255,255,.06);
}

.dsp-section-icon svg {
  width: 14px;
  height: 14px;
  stroke: var(--accent);
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.dsp-section-title-wrap {
  flex: 1;
  min-width: 0;
}

.dsp-section-eyebrow {
  font-family: ${t.fontMono};
  font-size: 8.5px;
  letter-spacing: .10em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 2px;
}

.dsp-section-title {
  font-family: ${t.fontDisplay};
  font-size: clamp(21px, 4vw, 30px);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: 0;
  color: var(--text);
  margin: 0;
}

.dsp-section-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, var(--accent-bd), rgba(var(--accent-2-rgb), .18), transparent);
}

.dsp-section-label {
  font-family: ${t.fontMono};
  font-size: 9.5px;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.dsp-section-label::after {
  content: "";
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, var(--accent-bd), transparent);
}

.dsp-panel,
.dsp-card {
  position: relative;
  background: rgba(15, 23, 42, .88);
  color: var(--text);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  font-family: ${t.fontBody};
  backdrop-filter: blur(14px) saturate(1.12);
  -webkit-backdrop-filter: blur(14px) saturate(1.12);
}

.dsp-panel::before,
.dsp-card::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  background: linear-gradient(180deg, rgba(255,255,255,.045), transparent 46%);
}

.dsp-panel > *,
.dsp-card > * {
  position: relative;
  z-index: 1;
}

.dsp-panel {
  padding: 14px;
}

.dsp-card {
  padding: 18px 16px;
  overflow: hidden;
}

.dsp-card-title {
  font-family: ${t.fontDisplay};
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0;
  color: var(--text);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 9px;
}

.dsp-card-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  background: rgba(var(--accent-rgb), .08);
  border: 1px solid var(--accent-bd);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dsp-card-icon svg {
  width: 12px;
  height: 12px;
  stroke: var(--accent);
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.dsp-panel-fixed {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 999999;
  width: 340px;
  animation: dsp-panelIn .2s cubic-bezier(.16,1,.3,1);
}

.dsp-record-item {
  position: relative;
  background: rgba(15, 23, 42, .88);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  padding: 18px 16px;
  min-width: 0;
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease, background .15s ease;
  backdrop-filter: blur(14px) saturate(1.12);
  -webkit-backdrop-filter: blur(14px) saturate(1.12);
}

.dsp-record-item::before {
  content: "";
  position: absolute;
  inset: 0 0 auto;
  height: 2px;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  background: linear-gradient(90deg, var(--accent), var(--accent-2), transparent);
  opacity: .82;
}

.dsp-record-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover);
  border-color: var(--accent-bd);
  background: rgba(15, 23, 42, .96);
}

.dsp-record-label {
  font-family: ${t.fontMono};
  font-size: 8.5px;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 4px;
  line-height: 1.4;
}

.dsp-record-val {
  font-family: ${t.fontDisplay};
  font-size: clamp(28px, 6vw, 38px);
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 4px;
}

.dsp-record-name {
  font-size: 13px;
  font-weight: 700;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dsp-record-date {
  font-size: 10.5px;
  color: var(--text-muted);
  font-family: ${t.fontMono};
  margin-top: 2px;
}

.dsp-record-podium {
  margin-top: 10px;
  border-top: 1px solid var(--border-soft);
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.dsp-podium-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
}

.dsp-podium-rank {
  font-family: ${t.fontDisplay};
  font-size: 14px;
  font-weight: 800;
  color: var(--text-muted);
  min-width: 14px;
  text-align: center;
}

.dsp-podium-name {
  flex: 1;
  color: var(--text);
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dsp-podium-val {
  font-family: ${t.fontMono};
  font-size: 11px;
  color: var(--accent);
}

.dsp-leaderboard {
  width: 100%;
  border-collapse: collapse;
}

.dsp-leaderboard thead th {
  font-family: ${t.fontMono};
  font-size: 9px;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--accent);
  padding: 9px 10px;
  border-bottom: 1px solid var(--border-main);
  text-align: left;
  white-space: nowrap;
  font-weight: 500;
}

.dsp-leaderboard thead th:not(:first-child) {
  text-align: right;
}

.dsp-leaderboard tbody tr {
  border-bottom: 1px solid var(--row-border-soft);
  transition: background .12s ease, box-shadow .12s ease;
}

.dsp-leaderboard tbody tr:last-child {
  border-bottom: none;
}

.dsp-leaderboard tbody tr:hover {
  background: rgba(var(--accent-rgb), .055);
  box-shadow: inset 3px 0 0 var(--accent);
}

.dsp-leaderboard tbody td {
  padding: 10px;
  font-size: 13px;
  vertical-align: middle;
}

.dsp-leaderboard tbody td:not(:first-child) {
  text-align: right;
  font-family: ${t.fontMono};
  font-size: 12px;
  color: var(--table-number);
  white-space: nowrap;
}

.dsp-rank-cell {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.dsp-rank-num {
  font-family: ${t.fontDisplay};
  font-size: 20px;
  font-weight: 800;
  color: var(--text-muted);
  min-width: 22px;
  text-align: center;
  line-height: 1;
  flex-shrink: 0;
}

.dsp-rank-num.gold {
  color: var(--medal-gold);
}

.dsp-rank-num.silver {
  color: var(--medal-silver);
}

.dsp-rank-num.bronze {
  color: var(--medal-bronze);
}

.dsp-driver-name {
  font-weight: 700;
  font-size: 13px;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex: 1;
}

.dsp-stat-tag {
  display: inline-block;
  font-family: ${t.fontMono};
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 999px;
  letter-spacing: .04em;
  background: var(--accent-bg);
  color: var(--text);
  border: 1px solid var(--accent-bd);
}

.dsp-ring-wrap {
  position: relative;
  flex-shrink: 0;
}

.dsp-ring-wrap svg {
  transform: rotate(-90deg);
  filter: drop-shadow(0 0 8px rgba(var(--accent-rgb), .16));
}

.dsp-ring-track {
  fill: none;
  stroke: rgba(148,163,184,.22);
}

.dsp-ring-fill {
  fill: none;
  stroke: var(--accent);
  stroke-linecap: round;
  transition: stroke-dashoffset 1.4s cubic-bezier(.4,0,.2,1);
}

.dsp-ring-center {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dsp-ring-score {
  font-family: ${t.fontDisplay};
  font-weight: 800;
  line-height: 1;
  color: var(--accent);
  letter-spacing: 0;
}

.dsp-ring-label {
  font-family: ${t.fontMono};
  font-size: 7px;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.dsp-metric-list {
  background: rgba(15, 23, 42, .88);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  backdrop-filter: blur(14px) saturate(1.12);
  -webkit-backdrop-filter: blur(14px) saturate(1.12);
}

.dsp-metric-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 16px;
  border-bottom: 1px solid var(--row-border-soft);
  transition: background .12s ease;
}

.dsp-metric-row:last-child {
  border-bottom: none;
}

.dsp-metric-row:hover {
  background: rgba(var(--accent-rgb), .055);
}

.dsp-metric-name {
  flex: 1;
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  min-width: 0;
  letter-spacing: .01em;
}

.dsp-metric-name .sub {
  font-family: ${t.fontMono};
  font-size: 9px;
  color: var(--text-muted);
  letter-spacing: .04em;
  text-transform: uppercase;
  display: block;
  margin-top: 1px;
}

.dsp-metric-chip {
  font-family: ${t.fontDisplay};
  font-size: 15px;
  font-weight: 800;
  line-height: 1;
  padding: 5px 12px;
  border-radius: var(--radius-md);
  min-width: 72px;
  text-align: center;
  letter-spacing: 0;
  flex-shrink: 0;
  border-width: 1px;
  border-style: solid;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.08);
}

.dsp-metric-chip.green {
  background: var(--success-bg);
  color: var(--success);
  border-color: var(--success-bd);
}

.dsp-metric-chip.amber {
  background: var(--warning-bg);
  color: var(--warning);
  border-color: var(--warning-bd);
}

.dsp-metric-chip.red {
  background: var(--danger-bg);
  color: var(--danger);
  border-color: var(--danger-bd);
}

.dsp-metric-chip.neutral {
  background: rgba(255,255,255,.04);
  color: var(--text);
  border-color: var(--border-main);
}

.dsp-alert {
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: var(--radius-md);
  padding: 10px 14px;
  font-family: ${t.fontMono};
  font-size: 10px;
  letter-spacing: .04em;
  line-height: 1.5;
  margin-top: 8px;
  border-left-width: 3px;
  border-left-style: solid;
  border-top: 1px solid;
  border-right: 1px solid;
  border-bottom: 1px solid;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.05);
}

.dsp-alert {
  background: var(--danger-bg);
  color: var(--danger);
  border-color: var(--danger-bd);
}

.dsp-alert.good {
  background: var(--success-bg);
  color: var(--success);
  border-color: var(--success-bd);
}

.dsp-alert.warning {
  background: var(--warning-bg);
  color: var(--warning);
  border-color: var(--warning-bd);
}

.dsp-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--text-muted);
  flex-shrink: 0;
  transition: background .3s, box-shadow .3s;
}

.dsp-status-dot.ready {
  background: var(--success);
  box-shadow: 0 0 6px rgba(var(--success-rgb), .45);
}

.dsp-status-dot.running {
  background: var(--accent);
  box-shadow: 0 0 7px rgba(var(--accent-rgb), .30);
  animation: dsp-pulse 1.2s infinite;
}

.dsp-status-dot.warning {
  background: var(--warning);
  box-shadow: 0 0 6px rgba(var(--warning-rgb), .36);
}

.dsp-status-dot.error {
  background: var(--danger);
  box-shadow: 0 0 6px rgba(var(--danger-rgb), .36);
}

.dsp-progress-track {
  height: 6px;
  background: rgba(5,7,10,.86);
  border: 1px solid var(--border-main);
  border-radius: 999px;
  overflow: hidden;
}

.dsp-progress-fill {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  border-radius: 999px;
  box-shadow: 0 0 10px rgba(var(--accent-rgb), .18);
  transition: width .3s ease;
  position: relative;
  overflow: hidden;
}

.dsp-progress-fill.active::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.25), transparent);
  animation: dsp-shimmer 1.5s infinite;
}

.dsp-log {
  overflow-y: auto;
  font-family: ${t.fontMono};
  font-size: 10px;
  scrollbar-width: thin;
  scrollbar-color: var(--border-main) transparent;
  border: 1px solid var(--border-main);
  border-radius: var(--radius-md);
  background: rgba(5,7,10,.84);
}

.dsp-log::-webkit-scrollbar {
  width: 4px;
}

.dsp-log::-webkit-scrollbar-track {
  background: transparent;
}

.dsp-log::-webkit-scrollbar-thumb {
  background: var(--border-main);
  border-radius: 4px;
}

.dsp-log-entry {
  padding: 6px 8px;
  border-bottom: 1px solid var(--border-main);
  display: flex;
  gap: 8px;
}

.dsp-log-entry:last-child {
  border-bottom: none;
}

.dsp-log-time {
  color: var(--text-muted);
  min-width: 50px;
  flex-shrink: 0;
}

.dsp-log-msg {
  color: var(--text);
  flex: 1;
  word-break: break-word;
  line-height: 1.4;
}

.dsp-log-msg.success {
  color: var(--success);
}

.dsp-log-msg.warning {
  color: var(--warning);
}

.dsp-log-msg.error {
  color: var(--danger);
}

.dsp-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text);
  background: rgba(var(--accent-rgb), .08);
  border: 1px solid var(--accent-bd);
  border-radius: 999px;
  padding: 5px 10px;
  font-family: ${t.fontMono};
  font-size: 10px;
  letter-spacing: .06em;
  text-transform: uppercase;
}

.dsp-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-height: 36px;
  padding: 8px 14px;
  border: 1px solid var(--accent-bd);
  border-radius: var(--radius-md);
  background: rgba(var(--accent-rgb), .075);
  color: var(--text);
  font-family: ${t.fontMono};
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .04em;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.055);
  transition: transform .15s ease, filter .15s ease, border-color .15s ease, box-shadow .15s ease;
}

.dsp-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  filter: brightness(1.08);
  border-color: var(--accent-bd-strong);
  box-shadow: 0 10px 24px rgba(0,0,0,.22), inset 0 1px 0 rgba(255,255,255,.10);
}

.dsp-btn:active:not(:disabled) {
  transform: translateY(0);
}

.dsp-btn:disabled {
  opacity: .35;
  cursor: not-allowed;
}

.dsp-btn.primary {
  background: linear-gradient(135deg, var(--accent), #0ea5e9);
  color: #041016;
  border-color: rgba(255,255,255,.22);
  box-shadow: 0 12px 28px rgba(var(--accent-rgb), .20), inset 0 1px 0 rgba(255,255,255,.25);
}

.dsp-btn.danger {
  background: var(--danger-bg);
  color: var(--danger);
  border-color: var(--danger-bd);
}

.dsp-btn.success {
  background: var(--success-bg);
  color: var(--success);
  border-color: var(--success-bd);
}

.dsp-input,
.dsp-select,
.dsp-textarea {
  width: 100%;
  background: rgba(5,7,10,.84);
  color: var(--text);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-md);
  padding: 9px 11px;
  outline: none;
  font-family: ${t.fontBody};
  font-size: 13px;
  transition: border-color .15s, box-shadow .15s;
}

.dsp-input:focus,
.dsp-select:focus,
.dsp-textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(var(--accent-rgb), .16);
}

.dsp-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 4px 9px;
  font-family: ${t.fontMono};
  font-size: 10px;
  letter-spacing: .04em;
  border: 1px solid var(--border-soft);
  color: var(--text);
}

.dsp-chip.good {
  color: var(--success);
  background: var(--success-bg);
  border-color: var(--success-bd);
}

.dsp-chip.warn {
  color: var(--warning);
  background: var(--warning-bg);
  border-color: var(--warning-bd);
}

.dsp-chip.bad {
  color: var(--danger);
  background: var(--danger-bg);
  border-color: var(--danger-bd);
}

.dsp-table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(15, 23, 42, .88);
  border: 1px solid var(--border-soft);
  border-radius: var(--radius-md);
  overflow: hidden;
  font-family: ${t.fontBody};
}

.dsp-table th,
.dsp-table td {
  padding: 9px 11px;
  border-bottom: 1px solid rgba(148,163,184,.12);
  text-align: left;
}

.dsp-table th {
  color: var(--accent);
  font-family: ${t.fontMono};
  font-size: 10px;
  letter-spacing: .06em;
  text-transform: uppercase;
  font-weight: 500;
}

.dsp-table tr:last-child td {
  border-bottom: none;
}

.dsp-table tbody tr:hover {
  background: rgba(var(--accent-rgb), .055);
}

.dsp-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dsp-stack {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dsp-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.dsp-reveal {
  opacity: 0;
  transform: translateY(12px);
  transition: opacity .4s ease, transform .4s ease;
}

.dsp-reveal.visible {
  opacity: 1;
  transform: none;
}

.dsp-toast {
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index: 999999;
  max-width: 360px;
  background: rgba(15, 23, 42, .96);
  color: var(--text);
  border: 1px solid var(--border-soft);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  padding: 12px 14px;
  font-family: ${t.fontBody};
  font-size: 13px;
  animation: dsp-fadeUp .25s ease both;
  backdrop-filter: blur(14px) saturate(1.12);
  -webkit-backdrop-filter: blur(14px) saturate(1.12);
}

.dsp-toast.success {
  border-left-color: var(--success);
}

.dsp-toast.warning {
  border-left-color: var(--warning);
}

.dsp-toast.danger {
  border-left-color: var(--danger);
}

.dsp-footer {
  border-top: 1px solid var(--border-main);
  padding: 28px 16px;
  text-align: center;
  color: var(--text-muted);
  font-size: 12px;
  background: rgba(5,7,10,.92);
}

.dsp-footer-logo {
  font-family: ${t.fontDisplay};
  font-size: 21px;
  font-weight: 800;
  letter-spacing: 0;
  color: var(--text);
  margin-bottom: 4px;
}

.dsp-footer-logo span {
  color: var(--accent);
}

.dsp-footer-internal {
  margin-top: 10px;
  font-family: ${t.fontMono};
  font-size: 9px;
  letter-spacing: .06em;
  color: var(--text-dim);
}

.dsp-draggable {
  cursor: move;
  user-select: none;
}

@media (max-width: 560px) {
  .dsp-grid-2 {
    grid-template-columns: 1fr;
  }

  .dsp-panel {
    padding: 12px;
  }

  .dsp-title {
    font-size: 21px;
  }

  .dsp-btn {
    width: 100%;
  }
}
`;

    document.head.appendChild(style);
    DSP_UI.syncThemeColor();
  };

  DSP_UI.syncThemeColor = function () {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    const bg = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim();
    if (bg) meta.setAttribute("content", bg);
  };

  DSP_UI.esc = function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  DSP_UI.num = function (v) {
    const n = parseFloat(String(v == null ? "" : v).replace(/,/g, ""));
    return isNaN(n) ? 0 : n;
  };

  DSP_UI.fmt = function (v, dec) {
    const n = DSP_UI.num(v);
    if (!n) return "--";
    return dec != null ? n.toFixed(dec) : String(n);
  };

  DSP_UI.fmtPct = function (v, dec) {
    const n = DSP_UI.num(v);
    if (n == null) return "--";
    const pv = n > 1 ? n : n * 100;
    return pv.toFixed(dec != null ? dec : 2) + "%";
  };

  DSP_UI.fmtDuration = function (sec) {
    if (!sec || sec <= 0) return "N/A";
    return Math.floor(sec / 3600) + "h " + Math.floor((sec % 3600) / 60) + "m";
  };

  DSP_UI.fmtDate = function (s, opts) {
    if (!s) return "";
    const d = new Date(String(s));
    if (isNaN(d)) return String(s);
    return d.toLocaleDateString("en-US", opts || {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    }).toUpperCase();
  };

  DSP_UI.fmtDateShort = function (s) {
    return DSP_UI.fmtDate(s, {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  DSP_UI.rankClass = function (i) {
    return i === 0 ? "gold" : i === 1 ? "silver" : i === 2 ? "bronze" : "";
  };

  DSP_UI.ring = function (opts) {
    opts = opts || {};
    const size = opts.size || 96;
    const sw = opts.strokeW || 7;
    const r = (size / 2) - (sw / 2);
    const circ = +(2 * Math.PI * r).toFixed(2);
    const score = opts.score != null ? +opts.score : null;
    const pct = score != null ? Math.min(Math.max(score / 100, 0), 1) : 0;
    const offset = +(circ - pct * circ).toFixed(2);
    const label = DSP_UI.esc(opts.label || "Score");
    const id = opts.id ? ` id="${DSP_UI.esc(opts.id)}"` : "";
    const dispTxt = score != null ? score.toFixed(2) : "--";
    const fontSize = opts.scoreSize || Math.round(size * 0.27);

    return `<div class="dsp-ring-wrap" style="width:${size}px;height:${size}px;">
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle class="dsp-ring-track" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${sw}"/>
    <circle class="dsp-ring-fill"${id} cx="${size / 2}" cy="${size / 2}" r="${r}"
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

  DSP_UI.makeDraggable = function (box, handle) {
    handle = handle || box;
    let sx = 0;
    let sy = 0;
    let bx = 0;
    let by = 0;
    let dragging = false;

    handle.classList.add("dsp-draggable");

    handle.addEventListener("pointerdown", function (e) {
      if (e.target.closest("button, input, select, textarea, a")) return;

      dragging = true;
      sx = e.clientX;
      sy = e.clientY;

      const r = box.getBoundingClientRect();
      bx = r.left;
      by = r.top;

      box.style.position = "fixed";
      box.style.left = bx + "px";
      box.style.top = by + "px";
      box.style.right = "auto";
      box.style.bottom = "auto";

      handle.setPointerCapture(e.pointerId);
    });

    handle.addEventListener("pointermove", function (e) {
      if (!dragging) return;

      const maxX = window.innerWidth - box.offsetWidth;
      const maxY = window.innerHeight - box.offsetHeight;

      box.style.left = Math.max(0, Math.min(maxX, bx + (e.clientX - sx))) + "px";
      box.style.top = Math.max(0, Math.min(maxY, by + (e.clientY - sy))) + "px";
    });

    handle.addEventListener("pointerup", function () {
      dragging = false;
    });
  };

  DSP_UI.createPanel = function (opts) {
    opts = opts || {};
    DSP_UI.injectTheme();

    const box = document.createElement("div");
    box.className = "dsp-panel dsp-panel-fixed dsp-reset";
    box.style.width = opts.width || "340px";
    box.style.right = opts.right || "16px";
    box.style.bottom = opts.bottom != null ? opts.bottom : "16px";

    if (opts.top) box.style.top = opts.top;
    if (opts.zIndex) box.style.zIndex = opts.zIndex;

    box.innerHTML = opts.html || "";
    document.body.appendChild(box);

    if (opts.draggable) {
      const h = opts.handle ? box.querySelector(opts.handle) : box;
      DSP_UI.makeDraggable(box, h || box);
    }

    return box;
  };

  DSP_UI.scrollReveal = function (sel) {
    if (!window.IntersectionObserver) {
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

  window.injectDSPTheme = DSP_UI.injectTheme;
})();
