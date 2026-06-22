// GOGO App UI Kit — components.jsx
// Pixel-faithful to the GOGO brand tokens defined in /colors_and_type.css.

const C = {
  aub: '#40103C',
  mag: '#D20C7D',
  white: '#FFFFFF',
  bg: '#FAF6F4',
  hairline: '#EAE3E0',
  fg1: '#1A0A18',
  fg2: '#553949',
  fg3: '#7A5C68',
  fg4: '#A89097',
  success: '#0E8F5A',
  warning: '#E08200',
  danger:  '#C82342',
};
const FONT_DISPLAY = "'Roboto', system-ui, sans-serif";
const FONT_BODY = "'Roboto', system-ui, sans-serif";
const FONT_MONO = "ui-monospace, 'SF Mono', Menlo, Consolas, monospace";
const VFS_DISPLAY = '"wght" 800, "wdth" 110';
const VFS_DISPLAY_TIGHT = '"wght" 800, "wdth" 100';
const VFS_DATA = '"wght" 700, "wdth" 100';
const VFS_BODY = '"wght" 400, "wdth" 100';
const VFS_BODY_BOLD = '"wght" 600, "wdth" 100';

// ─── Logo (uses brand asset) ──────────────────────────
function GogoLogo({ height = 24, variant = 'color' }) {
  const src = {
    color: '../../assets/logo-full-color.png',
    inverse: '../../assets/logo-inverse.png',
    white: '../../assets/logo-white.png',
    black: '../../assets/logo-black.png',
  }[variant] || '../../assets/logo-full-color.png';
  // logos are roughly 2:1 aspect (1000x500 area). Trim padded versions.
  return <img src={src} style={{ height, objectFit: 'contain' }} alt="GOGO" />;
}

// ─── Generic UI primitives ────────────────────────────
function Button({ variant = 'primary', children, full, onClick, style }) {
  const variants = {
    primary: { background: C.aub, color: C.white, border: 'none' },
    accent:  { background: C.mag, color: C.white, border: 'none' },
    secondary: { background: C.white, color: C.aub, border: `1px solid ${C.aub}` },
    ghost: { background: 'transparent', color: C.aub, border: 'none' },
  };
  return (
    <button onClick={onClick} style={{
      padding: '14px 22px',
      borderRadius: 999,
      fontFamily: FONT_BODY,
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: '0.01em',
      cursor: 'pointer',
      width: full ? '100%' : 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      transition: 'transform 120ms cubic-bezier(0.2,0.8,0.2,1)',
      ...variants[variant],
      ...style,
    }}>{children}</button>
  );
}

function Pill({ children, tone = 'aub' }) {
  const tones = {
    aub: { bg: C.aub, fg: C.white },
    mag: { bg: C.mag, fg: C.white },
    out: { bg: 'transparent', fg: C.aub, border: `1px solid ${C.aub}` },
    soft: { bg: '#FCE2EE', fg: '#95075A' },
  };
  const t = tones[tone];
  return <span style={{
    background: t.bg, color: t.fg, border: t.border || 'none',
    padding: '4px 10px', borderRadius: 999, fontSize: 11,
    fontWeight: 600, letterSpacing: '0.02em',
    fontFamily: FONT_BODY,
  }}>{children}</span>;
}

function Caption({ children, style }) {
  return <div style={{
    fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600,
    color: C.fg3, textTransform: 'uppercase', letterSpacing: '0.08em', ...style,
  }}>{children}</div>;
}

function StatBig({ label, value, unit, delta, dark }) {
  return (
    <div>
      <Caption style={{ color: dark ? 'rgba(255,255,255,0.5)' : C.fg3 }}>{label}</Caption>
      <div style={{
        fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA,
        fontWeight: 700, fontSize: 56, lineHeight: 1,
        letterSpacing: '-0.03em', color: dark ? C.white : C.aub,
        fontVariantNumeric: 'tabular-nums', marginTop: 6,
      }}>
        {value}
        {unit && <span style={{ fontSize: 22, color: dark ? 'rgba(255,255,255,0.6)' : C.fg3, marginLeft: 4 }}>{unit}</span>}
      </div>
      {delta && <div style={{
        fontFamily: FONT_MONO, fontSize: 12, fontWeight: 600, marginTop: 8,
        color: delta.startsWith('−') ? C.mag : C.success,
      }}>{delta}</div>}
    </div>
  );
}

// ─── Top bar inside app ───────────────────────────────
function AppTopBar({ title, leading, trailing, dark }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 20px 10px',
      color: dark ? C.white : C.aub,
    }}>
      <div style={{ width: 36, display: 'flex', justifyContent: 'flex-start' }}>{leading}</div>
      <div style={{
        fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY_TIGHT,
        fontWeight: 800, fontSize: 17,
        textTransform: 'uppercase', letterSpacing: '-0.01em',
      }}>{title}</div>
      <div style={{ width: 36, display: 'flex', justifyContent: 'flex-end' }}>{trailing}</div>
    </div>
  );
}

// ─── Bottom tab bar ───────────────────────────────────
function TabBar({ active, onTab }) {
  const tabs = [
    { id: 'home', icon: 'M3 12L12 4l9 8M5 10v10h14V10' },
    { id: 'map', icon: 'M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14' },
    { id: 'go', isGo: true },
    { id: 'trips', icon: 'M4 7h16M4 12h16M4 17h10' },
    { id: 'me', icon: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1' },
  ];
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      padding: '10px 16px 12px',
      background: C.white, borderTop: `1px solid ${C.hairline}`,
    }}>
      {tabs.map(t => t.isGo ? (
        <button key={t.id} onClick={() => onTab && onTab('go')} style={{
          width: 56, height: 56, borderRadius: 999, background: C.mag,
          color: C.white, border: 'none',
          fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY,
          fontWeight: 800, fontSize: 18,
          letterSpacing: '0.04em', cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(210,12,125,0.35)',
          marginTop: -28,
        }}>GO</button>
      ) : (
        <button key={t.id} onClick={() => onTab && onTab(t.id)} style={{
          background: 'transparent', border: 'none', padding: 8, cursor: 'pointer',
          color: active === t.id ? C.aub : C.fg4,
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d={t.icon}/>
          </svg>
        </button>
      ))}
    </div>
  );
}

// ─── Battery glyph (used everywhere) ──────────────────
function BatterySVG({ size = 60, charged = 100, color }) {
  const fillColor = color || (charged >= 40 ? C.mag : charged >= 20 ? '#E08200' : '#A89097');
  const bodyW = size;
  const bodyH = size * 1.55;
  const cornerR = size * 0.14;
  const padding = size * 0.10;
  const innerH = bodyH - padding * 2 - size * 0.22;
  const fillH = innerH * (charged / 100);
  return (
    <svg width={bodyW} height={bodyH + size * 0.10} viewBox={`0 0 ${bodyW} ${bodyH + size * 0.10}`}>
      <rect x={bodyW * 0.30} y="0" width={bodyW * 0.40} height={size * 0.08}
            rx={size * 0.03} fill={C.aub}/>
      <rect x="0" y={size * 0.08} width={bodyW} height={bodyH}
            rx={cornerR} fill={C.aub}/>
      <rect x={padding} y={size * 0.08 + padding + (innerH - fillH)}
            width={bodyW - padding * 2} height={fillH}
            rx={cornerR * 0.5} fill={fillColor}/>
      <text x={bodyW / 2} y={size * 0.08 + padding + innerH + size * 0.20}
            textAnchor="middle" dominantBaseline="middle"
            fontFamily={FONT_DISPLAY} fontWeight="800"
            fontSize={size * 0.40} fill={C.white}
            style={{ fontVariationSettings: VFS_DISPLAY }}>
        {charged >= 40 ? '+' : '−'}
      </text>
    </svg>
  );
}

// ─── Swap countdown ring (used on active swap screen) ─
function SwapCountdown({ secondsLeft = 38, total = 60 }) {
  const r = 100;
  const c = 2 * Math.PI * r;
  const pct = secondsLeft / total;
  const dash = c * pct;
  return (
    <div style={{ position: 'relative', width: 240, height: 240, margin: '0 auto' }}>
      <svg width="240" height="240" viewBox="0 0 240 240" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="120" cy="120" r={r} stroke="rgba(255,255,255,0.12)" strokeWidth="10" fill="none"/>
        <circle cx="120" cy="120" r={r} stroke={C.mag} strokeWidth="10" fill="none"
                strokeDasharray={`${dash} ${c}`} strokeLinecap="round"/>
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      }}>
        <div style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.10em' }}>Swap in progress</div>
        <div style={{
          fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA,
          fontWeight: 800, fontSize: 88,
          letterSpacing: '-0.04em', color: C.white, lineHeight: 1, marginTop: 4,
          fontVariantNumeric: 'tabular-nums',
        }}>{secondsLeft}<span style={{ fontSize: 22, color: 'rgba(255,255,255,0.55)', marginLeft: 4 }}>sec</span></div>
        <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.mag, marginTop: 8 }}>+ Sarah · on it</div>
      </div>
    </div>
  );
}

// ─── Mini slot indicator for station preview ──────────
function SlotMini({ charged }) {
  const innerH = 30;
  const fillH = innerH * (charged / 100);
  const fill = charged >= 90 ? C.mag : charged >= 40 ? '#E08200' : '#A89097';
  return (
    <svg width="14" height="22" viewBox="0 0 14 22">
      <rect x="4" y="0" width="6" height="2" rx="0.5" fill={C.aub}/>
      <rect x="0" y="2" width="14" height="20" rx="2" fill={C.hairline}/>
      <rect x="2" y={2 + 2 + (innerH * 0.6 - fillH * 0.6)} width="10" height={fillH * 0.6} rx="1" fill={fill}/>
    </svg>
  );
}

// ─── List row ─────────────────────────────────────────
function ListRow({ leading, title, sub, trailing, onClick }) {
  return (
    <div onClick={onClick} style={{
      display: 'flex', alignItems: 'center', gap: 14, padding: '14px 20px',
      borderBottom: `1px solid ${C.hairline}`, cursor: onClick ? 'pointer' : 'default',
      background: C.white,
    }}>
      {leading}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 15, color: C.fg1 }}>{title}</div>
        {sub && <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: C.fg3, marginTop: 2 }}>{sub}</div>}
      </div>
      {trailing}
    </div>
  );
}

// Map placeholder (no image, no slop — pure flat with route line)
function MapPlaceholder({ height = 320 }) {
  return (
    <div style={{
      height, position: 'relative', background: '#F2EAE7',
      backgroundImage:
        'linear-gradient(to right, rgba(64,16,60,0.06) 1px, transparent 1px),' +
        'linear-gradient(to bottom, rgba(64,16,60,0.06) 1px, transparent 1px)',
      backgroundSize: '32px 32px',
      overflow: 'hidden',
    }}>
      <svg width="100%" height="100%" viewBox="0 0 390 320" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
        <path d="M40,260 C 100,240 130,180 180,160 S 280,140 340,80"
              stroke={C.mag} strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="0"/>
      </svg>
      <div style={{
        position: 'absolute', left: 30, top: 250,
        width: 16, height: 16, borderRadius: 999, background: C.aub, border: `3px solid ${C.white}`,
      }}/>
      <div style={{
        position: 'absolute', right: 36, top: 60,
        width: 22, height: 22, borderRadius: 999, background: C.mag, border: `3px solid ${C.white}`,
      }}/>
    </div>
  );
}

// ─── Decorative +/− texture watermark ─────────────────
function PlusMinusBg({ color = 'rgba(255,255,255,0.04)', size = 24, gap = 60 }) {
  return (
    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <defs>
        <pattern id="pm" x="0" y="0" width={gap} height={gap} patternUnits="userSpaceOnUse">
          <text x={gap/2} y={gap/2 + size/3} textAnchor="middle"
                fontFamily={FONT_DISPLAY} fontWeight="800" fontSize={size} fill={color}
                style={{ fontVariationSettings: VFS_DISPLAY }}>+</text>
          <text x={gap} y={gap + size/3} textAnchor="middle"
                fontFamily={FONT_DISPLAY} fontWeight="800" fontSize={size} fill={color}
                style={{ fontVariationSettings: VFS_DISPLAY }}>−</text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pm)"/>
    </svg>
  );
}

// ─── Streak calendar (7×5 grid showing swap activity) ─
function SwapStreak({ data, color = C.mag }) {
  // data: array of 35 entries, value 0-3
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 5 }}>
      {data.map((v, i) => {
        const opacity = v === 0 ? 0.08 : v === 1 ? 0.35 : v === 2 ? 0.7 : 1;
        return <div key={i} style={{
          aspectRatio: '1', borderRadius: 3,
          background: v === 0 ? C.hairline : color,
          opacity: v === 0 ? 1 : opacity,
        }}/>;
      })}
    </div>
  );
}

// ─── Status bar replacement (so each frame reads correctly) ─
Object.assign(window, {
  C, FONT_DISPLAY, FONT_BODY, FONT_MONO,
  VFS_DISPLAY, VFS_DISPLAY_TIGHT, VFS_DATA, VFS_BODY, VFS_BODY_BOLD,
  GogoLogo, Button, Pill, Caption, StatBig,
  AppTopBar, TabBar, BatterySVG, SwapCountdown, SlotMini, ListRow, MapPlaceholder,
  PlusMinusBg, SwapStreak,
});
