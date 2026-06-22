// Shared dark-theme primitives for the GOGO swap-officer + swap-ops web apps.
// These intentionally do NOT reuse the light-theme mobile components — the
// production web tools live on a deep-navy surface, with GOGO magenta as the
// single brand accent and low-sat pastel chips for the action library.

const DC = {
  // Surfaces
  bg:        '#05070F',    // page (deepest)
  bg2:       '#0A0E1C',    // section panels
  surface:   '#0F1525',    // card resting
  surface2:  '#161D31',    // card hover / nav active
  surface3:  '#1F2742',    // input fields
  hairline:  '#1B233A',    // dividers
  hairline2: '#2A3450',    // stronger dividers / focused fields

  // Foreground
  fg1:   '#F4F5FA',
  fg2:   '#B7BDD0',
  fg3:   '#7B83A0',
  fg4:   '#525A75',

  // Brand
  aub:   '#40103C',
  mag:   '#D20C7D',
  magL:  '#F08FBE',
  magXL: '#FCE2EE',

  // Status
  ok:    '#22C55E',
  warn:  '#F59E0B',
  bad:   '#F43F5E',
  info:  '#38BDF8',

  // Pastel chips — used as icon backgrounds across the action library.
  // Each is a tinted dark pastel so it reads as a colored chip on the
  // deep-navy surface without going neon.
  chip: {
    blue:   { bg: 'rgba(96,165,250,0.16)',  fg: '#93C5FD' },
    yellow: { bg: 'rgba(251,191,36,0.18)',  fg: '#FCD34D' },
    violet: { bg: 'rgba(167,139,250,0.20)', fg: '#C4B5FD' },
    peach:  { bg: 'rgba(251,146,60,0.18)',  fg: '#FDBA74' },
    teal:   { bg: 'rgba(45,212,191,0.18)',  fg: '#5EEAD4' },
    rose:   { bg: 'rgba(244,114,182,0.22)', fg: '#FBCFE8' },
    mint:   { bg: 'rgba(52,211,153,0.18)',  fg: '#86EFAC' },
    slate:  { bg: 'rgba(148,163,184,0.16)', fg: '#CBD5E1' },
    cream:  { bg: 'rgba(250,232,210,0.18)', fg: '#F5DEB3' },
    pink:   { bg: 'rgba(210,12,125,0.18)',  fg: '#F08FBE' },
    aubL:   { bg: 'rgba(64,16,60,0.55)',    fg: '#F08FBE' },
  },
};
const DFONT_DISPLAY = "'Roboto', system-ui, sans-serif";
const DFONT_BODY    = "'Roboto', system-ui, sans-serif";
const DFONT_MONO    = "ui-monospace, 'SF Mono', Menlo, Consolas, monospace";
const DVFS_DISPLAY  = '"wght" 800, "wdth" 110';
const DVFS_DISPLAY_TIGHT = '"wght" 800, "wdth" 100';
const DVFS_DATA     = '"wght" 700, "wdth" 100';
const DVFS_BODY     = '"wght" 400, "wdth" 100';
const DVFS_BODY_BOLD = '"wght" 600, "wdth" 100';

// ─── Inline-SVG icon (lucide-style stroke, currentColor) ──────────────
function I({ d, size = 20, sw = 1.75, children }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth={sw}
         strokeLinecap="round" strokeLinejoin="round">
      {children || <path d={d}/>}
    </svg>
  );
}

// A library of the icons we actually use, all in lucide proportions
const IK = {
  swap:      <><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></>,
  checklist: <><path d="M11 7H3"/><path d="M21 5l-4 4-2-2"/><path d="M11 12H3"/><path d="M21 10l-4 4-2-2"/><path d="M11 17H3"/><path d="M21 15l-4 4-2-2"/></>,
  card:      <><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 11h20"/></>,
  truck:     <><path d="M14 18V6h6l3 5v7h-3"/><path d="M14 18H3V6"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></>,
  warning:   <><circle cx="12" cy="12" r="10"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
  history:   <><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><polyline points="3 3 3 8 8 8"/><path d="M12 7v5l3 2"/></>,
  user:      <><circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/></>,
  ticket:    <><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z"/><line x1="9" y1="7" x2="9" y2="17"/></>,
  home:      <><path d="M3 12L12 4l9 8"/><path d="M5 10v10h14V10"/></>,
  grid:      <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></>,
  bike:      <><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6a1 1 0 1 0 0-2h-1l-2 3h-4l-2 4 4 4h4l3-4-2-3"/></>,
  bolt:      <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></>,
  check:     <><circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/></>,
  doc:       <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></>,
  cam:       <><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></>,
  wifi:      <><path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></>,
  panel:     <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/></>,
  chev:      <><polyline points="9 18 15 12 9 6"/></>,
  chevD:     <><polyline points="6 9 12 15 18 9"/></>,
  search:    <><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/></>,
  lock:      <><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>,
  clock:     <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
  qr:        <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/><rect x="18" y="18" width="3" height="3"/><rect x="14" y="18" width="3" height="3"/></>,
  dollar:    <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,
  trend:     <><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></>,
  battery:   <><rect x="2" y="7" width="18" height="10" rx="2"/><line x1="22" y1="11" x2="22" y2="13"/><rect x="4" y="9" width="10" height="6" rx="1"/></>,
  station:   <><rect x="3" y="8" width="14" height="13" rx="1"/><path d="M3 8l3-5h8l3 5"/><rect x="6" y="12" width="8" height="5"/><path d="M17 12h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2"/></>,
  users:     <><circle cx="9" cy="8" r="4"/><path d="M1 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/><circle cx="18" cy="9" r="3"/><path d="M23 21v-1a5 5 0 0 0-4-4.9"/></>,
  alert:     <><path d="M10.3 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
  filter:    <><polygon points="22 3 2 3 10 12.5 10 19 14 21 14 12.5 22 3"/></>,
  more:      <><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/><circle cx="5" cy="12" r="1.5"/></>,
  pin:       <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
  download:  <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>,
};

// ─── GOGO wordmark (re-uses brand asset) ──────────────────────────────
function GogoMark({ height = 26, white = true }) {
  return <img src={white ? '../../assets/logo-white.png' : '../../assets/logo-full-color.png'}
              style={{ height, display: 'block' }} alt="GOGO"/>;
}

// ─── Page-load orange progress bar (sticky top, decorative) ───────────
function ProgressBar({ pct = 35 }) {
  return (
    <div style={{
      height: 3, width: '100%', background: '#1A1326',
      position: 'absolute', top: 0, left: 0, right: 0, zIndex: 5,
    }}>
      <div style={{
        height: '100%', width: pct + '%',
        background: 'linear-gradient(90deg, #F59E0B 0%, #F97316 100%)',
      }}/>
    </div>
  );
}

// ─── Sidebar nav (right side, matches screenshots) ────────────────────
function Sidebar({ active = 'home' }) {
  const items = [
    { id: 'home',    label: 'Home',                 icon: IK.home },
    { id: 'station', label: 'Station Overview',     icon: IK.grid },
    { id: 'swap',    label: 'Swap',                 icon: IK.swap },
    { id: 'beta',    label: 'Swap (Beta)',          icon: IK.swap,    flag: 'BETA' },
    { id: 'pend',    label: 'My Pending Swaps',     icon: IK.checklist },
    { id: 'push',    label: 'Push Payment',         icon: IK.card },
    { id: 'xfer',    label: 'Battery Transfer',     icon: IK.truck },
    { id: 'repo',    label: 'Battery Repossession', icon: IK.warning },
    { id: 'hist',    label: 'History',              icon: IK.history },
    { id: 'tick',    label: 'Bike Tickets',         icon: IK.ticket },
  ];
  return (
    <aside style={{
      width: 304, flexShrink: 0, background: DC.bg2,
      borderLeft: `1px solid ${DC.hairline}`,
      display: 'flex', flexDirection: 'column',
      padding: '24px 16px 18px',
    }}>
      {/* Logo */}
      <div style={{ padding: '4px 12px 18px' }}>
        <GogoMark height={32}/>
      </div>

      {/* Section header */}
      <div style={{
        fontFamily: DFONT_BODY, fontSize: 11, fontWeight: 700,
        color: DC.fg3, textTransform: 'uppercase', letterSpacing: '0.14em',
        padding: '8px 12px 10px',
      }}>Swap App</div>

      {/* Nav items */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map(it => {
          const isActive = it.id === active;
          return (
            <div key={it.id} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '10px 12px', borderRadius: 8,
              background: isActive ? DC.surface2 : 'transparent',
              color: isActive ? DC.fg1 : DC.fg2,
              fontFamily: DFONT_BODY, fontSize: 14,
              fontWeight: isActive ? 600 : 500,
              cursor: 'pointer',
              position: 'relative',
            }}>
              {isActive && <div style={{
                position: 'absolute', left: 0, top: 8, bottom: 8, width: 3,
                borderRadius: 999, background: DC.mag,
              }}/>}
              <span style={{ color: isActive ? DC.mag : DC.fg3, display: 'flex' }}>
                <I size={18}>{it.icon}</I>
              </span>
              <span style={{ flex: 1 }}>{it.label}</span>
              {it.flag && (
                <span style={{
                  fontFamily: DFONT_MONO, fontSize: 9, fontWeight: 700,
                  color: DC.mag, background: 'rgba(210,12,125,0.14)',
                  border: `1px solid rgba(210,12,125,0.35)`,
                  padding: '2px 6px', borderRadius: 4, letterSpacing: '0.06em',
                }}>{it.flag}</span>
              )}
            </div>
          );
        })}
      </nav>

      {/* Spacer */}
      <div style={{ flex: 1 }}/>

      {/* Online indicator */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        padding: '12px 0', color: DC.ok,
        fontFamily: DFONT_BODY, fontSize: 13, fontWeight: 600,
      }}>
        <I size={16}>{IK.wifi}</I>
        Online
      </div>

      {/* User card */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '12px 12px', borderTop: `1px solid ${DC.hairline}`,
        marginTop: 4,
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: DC.chip.aubL.bg, color: DC.chip.aubL.fg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DISPLAY,
          fontWeight: 800, fontSize: 14,
        }}>A</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: DC.fg1 }}>Administrator</div>
          <div style={{ fontSize: 11, color: DC.fg3, marginTop: 1 }}>admin@bodawerk.com</div>
        </div>
        <span style={{ color: DC.fg3, display: 'flex' }}>
          <I size={16}>{IK.chevD}</I>
        </span>
      </div>
    </aside>
  );
}

// ─── Top status strip (logo + wifi + sidebar toggle) ──────────────────
function TopStrip() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '12px 28px', borderBottom: `1px solid ${DC.hairline}`,
      background: DC.bg,
    }}>
      <GogoMark height={28}/>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <span style={{ color: DC.ok, display: 'flex' }}><I size={18}>{IK.wifi}</I></span>
        <span style={{ color: DC.fg2, display: 'flex' }}><I size={18}>{IK.panel}</I></span>
      </div>
    </div>
  );
}

// ─── Breadcrumb header (inside content area) ──────────────────────────
function Crumbs({ items }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '18px 32px 0', color: DC.fg2,
      fontFamily: DFONT_BODY, fontSize: 14, fontWeight: 500,
    }}>
      {items.map((c, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span style={{ color: DC.fg4, display: 'flex' }}><I size={14}>{IK.chev}</I></span>}
          <span style={{
            display: 'flex', alignItems: 'center', gap: 8,
            color: i === items.length - 1 ? DC.fg1 : DC.fg2,
          }}>
            <span style={{ color: DC.mag, display: 'flex' }}><I size={16}>{c.icon}</I></span>
            {c.label}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}

// ─── Generic action card (the 3x3 grid on Home) ───────────────────────
function ActionCard({ icon, chip, title, sub }) {
  return (
    <div style={{
      background: DC.surface, border: `1px solid ${DC.hairline}`,
      borderRadius: 14, padding: 22,
      display: 'flex', alignItems: 'flex-start', gap: 16,
      cursor: 'pointer',
      transition: 'background 180ms, border-color 180ms',
    }}>
      <div style={{
        width: 52, height: 52, borderRadius: 12,
        background: chip.bg, color: chip.fg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <I size={24} sw={2}>{icon}</I>
      </div>
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontFamily: DFONT_BODY, fontVariationSettings: DVFS_BODY_BOLD,
          fontWeight: 700, fontSize: 16, color: DC.fg1, letterSpacing: '-0.005em',
        }}>{title}</div>
        <div style={{
          fontFamily: DFONT_BODY, fontSize: 13, color: DC.fg3,
          marginTop: 4, lineHeight: 1.45, maxWidth: 240,
        }}>{sub}</div>
      </div>
    </div>
  );
}

Object.assign(window, {
  DC, DFONT_DISPLAY, DFONT_BODY, DFONT_MONO,
  DVFS_DISPLAY, DVFS_DISPLAY_TIGHT, DVFS_DATA, DVFS_BODY, DVFS_BODY_BOLD,
  I, IK, GogoMark, ProgressBar, Sidebar, TopStrip, Crumbs, ActionCard,
});
