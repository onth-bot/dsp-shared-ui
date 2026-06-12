/* ============================================================
   JOEY'S UI CORE - v4.0.0
   Bright Precision Dispatch Interface
   Complete visual revamp: warm, structured, no cool glass.
   ============================================================ */

(function () {
  "use strict";

  if (window.DSP_UI_CORE_LOADED) return;
  window.DSP_UI_CORE_LOADED = true;

  window.DSP_UI = window.DSP_UI || {};

  DSP_UI.theme = {
    accent: "#c2410c",
    accent2: "#16784a",
    accentDim: "#9a3412",
    accentRgb: "194, 65, 12",
    accent2Rgb: "22, 120, 74",
    ink: "#1f1b16",
    inkRgb: "31, 27, 22",

    bg: "#f8f5ef",
    surface: "#ffffff",
    surface2: "#ede7dd",
    card: "#ffffff",

    text: "#1f1b16",
    textSoft: "#302a24",
    textMuted: "#6f665d",
    textDim: "#9a9188",
    textSecondary: "#463f38",

    border: "rgba(31,27,22,.18)",
    borderSoft: "rgba(31,27,22,.12)",
    rowBorder: "rgba(31,27,22,.11)",
    rowBorderSoft: "rgba(31,27,22,.08)",

    radiusSm: "4px",
    radiusMd: "8px",
    radiusLg: "8px",

    shadow: "0 18px 45px rgba(31,27,22,.12)",
    shadowCard: "0 1px 0 rgba(255,255,255,.88) inset, 0 10px 28px rgba(31,27,22,.08)",
    shadowHover: "6px 6px 0 rgba(31,27,22,.10), 0 16px 34px rgba(31,27,22,.12)",

    success: "#168a52",
    successRgb: "22, 138, 82",
    warning: "#f3a51b",
    warningRgb: "243, 165, 27",
    danger: "#d92d20",
    dangerRgb: "217, 45, 32",

    medalGold: "#b7791f",
    medalSilver: "#6f665d",
    medalBronze: "#b45309",

    fontBody: "'IBM Plex Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    fontDisplay: "'IBM Plex Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    fontMono: "'IBM Plex Mono', 'SFMono-Regular', Consolas, monospace"
  };

  DSP_UI.injectTheme = function () {
    if (document.getElementById("dsp-ui-core-theme")) return;

    const t = DSP_UI.theme;
    const style = document.createElement("style");
    style.id = "dsp-ui-core-theme";

    style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap');

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
  --table-number: #1f1b16;

  --accent-bg: rgba(var(--accent-rgb), .10);
  --accent-bg-strong: rgba(var(--accent-rgb), .16);
  --accent-bg-hover: rgba(var(--accent-rgb), .06);
  --accent-bd: rgba(var(--accent-rgb), .36);
  --accent-bd-strong: rgba(var(--accent-rgb), .58);
  --accent-glow: rgba(var(--accent-rgb), .16);
  --accent-glow-soft: rgba(var(--accent-rgb), .08);

  --success-bg: rgba(var(--success-rgb), .10);
  --success-bd: rgba(var(--success-rgb), .35);
  --warning-bg: rgba(var(--warning-rgb), .13);
  --warning-bd: rgba(var(--warning-rgb), .38);
  --danger-bg: rgba(var(--danger-rgb), .10);
  --danger-bd: rgba(var(--danger-rgb), .35);

  --page-bg:
    linear-gradient(90deg, rgba(31,27,22,.045) 1px, transparent 1px),
    linear-gradient(180deg, rgba(31,27,22,.045) 1px, transparent 1px),
    linear-gradient(180deg, #f8f5ef 0%, #ede7dd 100%);
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

@keyframes dsp-fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
@keyframes dsp-nameReveal { from { opacity: 0; transform: translateX(-6px); } to { opacity: 1; transform: none; } }
@keyframes dsp-pulse { 0%,100% { opacity: 1; } 50% { opacity: .45; } }
@keyframes dsp-shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
@keyframes dsp-panelIn { from { opacity: 0; transform: translateY(6px) scale(.985); } to { opacity: 1; transform: translateY(0) scale(1); } }

.dsp-reset, .dsp-reset * { box-sizing: border-box; }
.dsp-font { font-family: ${t.fontBody}; color: var(--text); }
.dsp-font-display { font-family: ${t.fontDisplay}; }
.dsp-font-mono { font-family: ${t.fontMono}; }

.dsp-title {
  margin: 0;
  color: var(--text);
  font-family: ${t.fontDisplay};
  font-size: 24px;
  font-weight: 800;
  line-height: 1.1;
}

.dsp-subtitle, .dsp-muted {
  color: var(--text-muted);
  font-family: ${t.fontMono};
  font-size: 11px;
  letter-spacing: .02em;
}

.dsp-page-bg {
  background: var(--page-bg);
  background-size: 28px 28px, 28px 28px, auto;
  color: var(--text);
  min-height: 100vh;
  padding-bottom: env(safe-area-inset-bottom);
}

.dsp-liquid-glass, .dsp-glass, .dsp-panel, .dsp-card, .dsp-record-item, .dsp-metric-list, .dsp-table {
  background: var(--card-surface);
  border: 1px solid var(--border-main);
  box-shadow: var(--shadow-card);
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}
.dsp-liquid-glass::before, .dsp-glass::before, .dsp-panel::before, .dsp-card::before { display: none; }

.dsp-hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  color: var(--text);
  background:
    linear-gradient(90deg, rgba(255,255,255,.88), rgba(255,255,255,.72)),
    repeating-linear-gradient(135deg, rgba(194,65,12,.13) 0 1px, transparent 1px 14px),
    linear-gradient(135deg, #fffdf9 0%, #f5efe6 56%, #ece4d8 100%);
  border-bottom: 2px solid var(--ink);
  box-shadow: 0 1px 0 rgba(255,255,255,.9) inset, var(--shadow-lg);
  overflow: hidden;
}
.dsp-hero::before {
  content: "";
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 10px;
  background: linear-gradient(180deg, var(--accent), var(--accent-2) 55%, var(--warning));
  z-index: 0;
}
.dsp-hero::after {
  content: "";
  position: absolute;
  right: 24px; top: 24px;
  width: min(28vw, 260px); height: min(28vw, 260px);
  border: 1px solid rgba(31,27,22,.13);
  background:
    linear-gradient(90deg, rgba(31,27,22,.13) 1px, transparent 1px),
    linear-gradient(180deg, rgba(31,27,22,.13) 1px, transparent 1px);
  background-size: 18px 18px;
  opacity: .35;
  clip-path: polygon(10% 0,100% 0,100% 88%,88% 100%,0 100%,0 10%);
  z-index: 0;
}
.dsp-hero > * { position: relative; z-index: 1; max-width: min(980px, calc(100vw - 32px)); }
.dsp-hero-badge {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: ${t.fontMono}; font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
  color: var(--accent);
  border: 1px solid var(--ink);
  background: #ffffff;
  padding: 7px 12px;
  border-radius: 4px;
  margin-bottom: 16px;
  box-shadow: 3px 3px 0 rgba(31,27,22,.12);
  animation: dsp-fadeUp .35s ease both;
}
.dsp-hero-title, .dsp-hero-name {
  font-family: ${t.fontDisplay};
  font-size: clamp(38px, 6.8vw, 72px);
  font-weight: 800;
  line-height: .98;
  color: var(--text);
  animation: dsp-fadeUp .35s .05s ease both;
}
.dsp-hero-title-accent { display: inline; color: var(--accent); }
.dsp-hero-sub {
  margin-top: 16px;
  font-size: 15px;
  color: var(--text-secondary);
  max-width: 720px;
  line-height: 1.6;
  animation: dsp-fadeUp .35s .1s ease both;
}
.dsp-hero-meta {
  margin-top: 16px;
  font-family: ${t.fontMono};
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .06em;
  color: var(--text-muted);
  text-transform: uppercase;
  animation: dsp-fadeUp .35s .14s ease both;
}

.dsp-section-header { display: flex; align-items: center; gap: 12px; margin: 34px 0 14px; }
.dsp-section-icon, .dsp-card-icon {
  flex-shrink: 0; display: flex; align-items: center; justify-content: center;
  color: var(--accent); background: #fff; border: 1px solid var(--ink); border-radius: 6px;
  box-shadow: 3px 3px 0 rgba(194,65,12,.14);
}
.dsp-section-icon { width: 38px; height: 38px; }
.dsp-card-icon { width: 28px; height: 28px; }
.dsp-section-icon svg, .dsp-card-icon svg { width: 15px; height: 15px; stroke: currentColor; fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.dsp-section-title-wrap { flex: 1; min-width: 0; }
.dsp-section-eyebrow {
  font-family: ${t.fontMono}; font-size: 9px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
  color: var(--accent); margin-bottom: 3px;
}
.dsp-section-title {
  font-family: ${t.fontDisplay}; font-size: clamp(21px, 3.6vw, 31px); font-weight: 800; line-height: 1.12;
  color: var(--text); margin: 0;
}
.dsp-section-line { flex: 1; height: 1px; background: var(--border-main); }
.dsp-section-label {
  font-family: ${t.fontMono}; font-size: 9.5px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase;
  color: var(--accent); margin-bottom: 10px; display: flex; align-items: center; gap: 12px;
}
.dsp-section-label::after { content: ""; flex: 1; height: 1px; background: var(--border-main); }

.dsp-panel, .dsp-card {
  position: relative; color: var(--text); border-radius: var(--radius-md); font-family: ${t.fontBody};
}
.dsp-panel { padding: 14px; }
.dsp-card { padding: 18px 16px; overflow: hidden; }
.dsp-card-title {
  font-family: ${t.fontDisplay}; font-size: 16px; font-weight: 800; color: var(--text); margin-bottom: 12px;
  display: flex; align-items: center; gap: 9px;
}
.dsp-panel-fixed { position: fixed; right: 16px; bottom: 16px; z-index: 999999; width: 340px; animation: dsp-panelIn .18s cubic-bezier(.16,1,.3,1); }

.dsp-record-item {
  position: relative; border-radius: var(--radius-md); padding: 18px 18px 18px 20px; min-width: 0;
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
}
.dsp-record-item::before {
  content: ""; position: absolute; left: -1px; top: -1px; bottom: -1px; width: 6px;
  background: linear-gradient(180deg, var(--accent), var(--accent-2));
  border-radius: var(--radius-md) 0 0 var(--radius-md);
}
.dsp-record-item:hover { transform: translate(-2px,-2px); box-shadow: var(--shadow-hover); border-color: var(--ink); }
.dsp-record-label { font-size: 11px; font-weight: 800; letter-spacing: .04em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 5px; line-height: 1.4; }
.dsp-record-val { font-family: ${t.fontDisplay}; font-size: clamp(31px, 5.6vw, 44px); font-weight: 800; color: var(--text); line-height: 1; margin-bottom: 5px; }
.dsp-record-name { font-size: 13px; font-weight: 700; color: var(--text-soft); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.dsp-record-date { font-size: 10.5px; color: var(--text-muted); font-family: ${t.fontMono}; margin-top: 2px; }
.dsp-record-podium { margin-top: 10px; border-top: 1px solid var(--row-border-soft); padding-top: 8px; display: flex; flex-direction: column; gap: 5px; }
.dsp-podium-row { display: flex; align-items: center; gap: 8px; font-size: 12px; }
.dsp-podium-rank { font-family: ${t.fontDisplay}; font-size: 14px; font-weight: 800; color: var(--text-muted); min-width: 14px; text-align: center; }
.dsp-podium-name { flex: 1; color: var(--text-soft); font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.dsp-podium-val { font-family: ${t.fontMono}; font-size: 11px; color: var(--accent); }

.dsp-table, .dsp-leaderboard {
  width: 100%; border-collapse: separate; border-spacing: 0; overflow: hidden; border-radius: var(--radius-md); font-family: ${t.fontBody};
}
.dsp-table th, .dsp-leaderboard thead th {
  background: #ede7dd; color: var(--text-muted); font-family: ${t.fontMono}; font-size: 10px; font-weight: 800;
  letter-spacing: .06em; text-transform: uppercase; padding: 12px 14px; border-bottom: 1px solid var(--border-main); text-align: left; white-space: nowrap;
}
.dsp-table th:not(:first-child), .dsp-leaderboard thead th:not(:first-child) { text-align: right; }
.dsp-table td, .dsp-leaderboard tbody td { color: var(--text-soft); padding: 12px 14px; border-bottom: 1px solid var(--row-border-soft); font-size: 13px; vertical-align: middle; }
.dsp-table tr:last-child td, .dsp-leaderboard tbody tr:last-child td { border-bottom: none; }
.dsp-table tbody tr:hover, .dsp-leaderboard tbody tr:hover { background: var(--accent-bg-hover); }
.dsp-table td:first-child, .dsp-leaderboard tbody td:first-child { background: rgba(17,24,39,.025); color: var(--text); font-weight: 800; }
.dsp-table td:not(:first-child), .dsp-leaderboard tbody td:not(:first-child) { text-align: right; font-family: ${t.fontMono}; font-size: 13px; color: var(--table-number); font-weight: 800; white-space: nowrap; font-variant-numeric: tabular-nums; }
.dsp-rank-cell { display: flex; align-items: center; gap: 8px; min-width: 0; }
.dsp-rank-num { font-family: ${t.fontDisplay}; font-size: 20px; font-weight: 800; color: var(--text-muted); min-width: 22px; text-align: center; line-height: 1; flex-shrink: 0; }
.dsp-rank-num.gold { color: var(--medal-gold); }
.dsp-rank-num.silver { color: var(--medal-silver); }
.dsp-rank-num.bronze { color: var(--medal-bronze); }
.dsp-driver-name { font-weight: 800; font-size: 13px; color: var(--text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0; flex: 1; }
.dsp-stat-tag { display: inline-block; font-family: ${t.fontMono}; font-size: 10px; padding: 4px 9px; border-radius: 4px; letter-spacing: .04em; background: var(--accent-bg); color: var(--accent); border: 1px solid var(--accent-bd); }

.dsp-ring-wrap { position: relative; flex-shrink: 0; }
.dsp-ring-wrap svg { transform: rotate(-90deg); }
.dsp-ring-track { fill: none; stroke: rgba(31,27,22,.13); }
.dsp-ring-fill { fill: none; stroke: var(--accent); stroke-linecap: butt; transition: stroke-dashoffset 1.1s cubic-bezier(.4,0,.2,1); }
.dsp-ring-center { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.dsp-ring-score { font-family: ${t.fontDisplay}; font-weight: 800; line-height: 1; color: var(--text); }
.dsp-ring-label { font-family: ${t.fontMono}; font-size: 7px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; color: var(--text-muted); }

.dsp-metric-list { border-radius: var(--radius-md); overflow: hidden; }
.dsp-metric-row { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-bottom: 1px solid var(--row-border-soft); transition: background .12s ease; }
.dsp-metric-row:last-child { border-bottom: none; }
.dsp-metric-row:hover { background: var(--accent-bg-hover); }
.dsp-metric-name { flex: 1; font-size: 13px; font-weight: 800; color: var(--text-soft); min-width: 0; }
.dsp-metric-name .sub { font-family: ${t.fontMono}; font-size: 9px; color: var(--text-muted); letter-spacing: .04em; text-transform: uppercase; display: block; margin-top: 2px; }
.dsp-metric-chip { font-family: ${t.fontMono}; font-size: 12px; font-weight: 800; line-height: 1; padding: 7px 10px; border-radius: 4px; min-width: 74px; text-align: center; flex-shrink: 0; border: 1px solid; }
.dsp-metric-chip.green { background: var(--success-bg); color: var(--success); border-color: var(--success-bd); }
.dsp-metric-chip.amber { background: var(--warning-bg); color: #9a5b00; border-color: var(--warning-bd); }
.dsp-metric-chip.red { background: var(--danger-bg); color: var(--danger); border-color: var(--danger-bd); }
.dsp-metric-chip.neutral { background: rgba(17,24,39,.05); color: var(--text-soft); border-color: var(--border-soft); }

.dsp-alert { display: flex; align-items: center; gap: 8px; border-radius: 6px; padding: 10px 14px; font-family: ${t.fontMono}; font-size: 10px; font-weight: 700; letter-spacing: .035em; line-height: 1.5; margin-top: 8px; border: 1px solid var(--danger-bd); border-left: 5px solid var(--danger); background: var(--danger-bg); color: var(--danger); }
.dsp-alert.good { background: var(--success-bg); color: var(--success); border-color: var(--success-bd); border-left-color: var(--success); }
.dsp-alert.warning { background: var(--warning-bg); color: #9a5b00; border-color: var(--warning-bd); border-left-color: var(--warning); }
.dsp-status-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--text-muted); flex-shrink: 0; transition: background .3s, box-shadow .3s; }
.dsp-status-dot.ready { background: var(--success); box-shadow: 0 0 0 4px rgba(var(--success-rgb), .12); }
.dsp-status-dot.running { background: var(--accent); box-shadow: 0 0 0 4px rgba(var(--accent-rgb), .12); animation: dsp-pulse 1.2s infinite; }
.dsp-status-dot.warning { background: var(--warning); box-shadow: 0 0 0 4px rgba(var(--warning-rgb), .16); }
.dsp-status-dot.error { background: var(--danger); box-shadow: 0 0 0 4px rgba(var(--danger-rgb), .12); }

.dsp-progress-track { height: 9px; background: rgba(17,24,39,.1); border: 1px solid rgba(17,24,39,.12); border-radius: 999px; overflow: hidden; }
.dsp-progress-fill { height: 100%; width: 0%; background: linear-gradient(90deg, var(--accent), var(--accent-2)); border-radius: 999px; transition: width .3s ease; position: relative; overflow: hidden; }
.dsp-progress-fill.active::after { content: ""; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,.42), transparent); animation: dsp-shimmer 1.5s infinite; }

.dsp-log { overflow-y: auto; font-family: ${t.fontMono}; font-size: 10px; scrollbar-width: thin; scrollbar-color: var(--border-main) transparent; border: 1px solid var(--border-main); border-radius: 6px; background: #f8f5ef; }
.dsp-log::-webkit-scrollbar { width: 4px; }
.dsp-log::-webkit-scrollbar-track { background: transparent; }
.dsp-log::-webkit-scrollbar-thumb { background: var(--border-main); border-radius: 4px; }
.dsp-log-entry { padding: 6px 8px; border-bottom: 1px solid var(--row-border-soft); display: flex; gap: 8px; }
.dsp-log-entry:last-child { border-bottom: none; }
.dsp-log-time { color: var(--text-muted); min-width: 50px; flex-shrink: 0; }
.dsp-log-msg { color: var(--text); flex: 1; word-break: break-word; line-height: 1.4; }
.dsp-log-msg.success { color: var(--success); }
.dsp-log-msg.warning { color: #9a5b00; }
.dsp-log-msg.error { color: var(--danger); }

.dsp-badge, .dsp-chip { display: inline-flex; align-items: center; justify-content: center; border-radius: 4px; font-family: ${t.fontMono}; font-size: 10px; font-weight: 700; letter-spacing: .04em; border: 1px solid var(--border-soft); }
.dsp-badge { gap: 6px; color: var(--accent); background: var(--accent-bg); border-color: var(--accent-bd); padding: 5px 10px; text-transform: uppercase; }
.dsp-chip { padding: 4px 9px; color: var(--text-soft); background: rgba(31,27,22,.05); }
.dsp-chip.good { color: var(--success); background: var(--success-bg); border-color: var(--success-bd); }
.dsp-chip.warn { color: #9a5b00; background: var(--warning-bg); border-color: var(--warning-bd); }
.dsp-chip.bad { color: var(--danger); background: var(--danger-bg); border-color: var(--danger-bd); }

.dsp-btn { display: inline-flex; align-items: center; justify-content: center; gap: 7px; min-height: 38px; padding: 8px 14px; border: 1px solid var(--ink); border-radius: 5px; background: #ffffff; color: var(--text); font-family: ${t.fontMono}; font-size: 11px; font-weight: 800; letter-spacing: .035em; text-transform: uppercase; cursor: pointer; text-decoration: none; box-shadow: 3px 3px 0 rgba(31,27,22,.10); transition: transform .15s ease, box-shadow .15s ease, background .15s ease; }
.dsp-btn:hover:not(:disabled) { transform: translate(-1px,-1px); background: #f8f5ef; box-shadow: 5px 5px 0 rgba(194,65,12,.14); }
.dsp-btn:active:not(:disabled) { transform: translate(0); box-shadow: 2px 2px 0 rgba(17,24,39,.12); }
.dsp-btn:disabled { opacity: .45; cursor: not-allowed; }
.dsp-btn.primary { background: var(--accent); color: #ffffff; border-color: var(--ink); font-weight: 900; }
.dsp-btn.danger { background: var(--danger-bg); color: var(--danger); border-color: var(--danger-bd); }
.dsp-btn.success { background: var(--success-bg); color: var(--success); border-color: var(--success-bd); }

.dsp-input, .dsp-select, .dsp-textarea { width: 100%; background: #ffffff; color: var(--text); border: 1px solid var(--border-main); border-radius: 6px; padding: 10px 12px; outline: none; font-family: ${t.fontBody}; font-size: 13px; transition: border-color .15s, box-shadow .15s; }
.dsp-input:focus, .dsp-select:focus, .dsp-textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 4px rgba(var(--accent-rgb), .13); }

.dsp-row { display: flex; align-items: center; gap: 10px; }
.dsp-stack { display: flex; flex-direction: column; gap: 10px; }
.dsp-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.dsp-reveal { opacity: 0; transform: translateY(12px); transition: opacity .35s ease, transform .35s ease; }
.dsp-reveal.visible { opacity: 1; transform: none; }
.dsp-toast { position: fixed; right: 16px; bottom: 16px; z-index: 999999; max-width: 360px; background: #ffffff; color: var(--text); border: 1px solid var(--ink); border-left: 5px solid var(--accent); border-radius: 6px; box-shadow: var(--shadow-lg); padding: 12px 14px; font-family: ${t.fontBody}; font-size: 13px; animation: dsp-fadeUp .25s ease both; }
.dsp-toast.success { border-left-color: var(--success); }
.dsp-toast.warning { border-left-color: var(--warning); }
.dsp-toast.danger { border-left-color: var(--danger); }
.dsp-footer { border-top: 1px solid var(--border-main); padding: 28px 16px; text-align: center; color: var(--text-muted); font-size: 12px; background: #ffffff; }
.dsp-footer-logo { font-family: ${t.fontDisplay}; font-size: 21px; font-weight: 800; color: var(--text); margin-bottom: 4px; }
.dsp-footer-logo span { color: var(--accent); }
.dsp-footer-internal { margin-top: 10px; font-family: ${t.fontMono}; font-size: 9px; letter-spacing: .06em; color: var(--text-dim); }
.dsp-draggable { cursor: move; user-select: none; }

@media (max-width: 560px) {
  .dsp-hero::after { opacity: .12; }
  .dsp-hero-sub { color: #302a24; }
  .dsp-hero-meta { color: #6f665d; }
  .dsp-grid-2 { grid-template-columns: 1fr; }
  .dsp-card, .dsp-panel, .dsp-record-item, .dsp-metric-list, .dsp-table { border-radius: 8px; }
  .dsp-panel { padding: 12px; }
  .dsp-title { font-size: 21px; }
  .dsp-btn { width: 100%; }
  .dsp-table th, .dsp-table td, .dsp-leaderboard thead th, .dsp-leaderboard tbody td { padding: 10px 11px; font-size: 12px; }
  .dsp-panel-fixed { left: 12px !important; right: 12px !important; width: auto !important; }
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
