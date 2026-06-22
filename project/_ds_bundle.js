/* @ds-bundle: {"format":3,"namespace":"GOGOElectricDesignSystem_019e17","components":[],"sourceHashes":{"ui_kits/app/components.jsx":"c1dadd4301d2","ui_kits/app/ios-frame.jsx":"d67eb3ffe562","ui_kits/app/screens.jsx":"74bd1f32aa6c","ui_kits/battery-maintenance/screens.jsx":"442f4654dd9c","ui_kits/bike-maintenance/screens.jsx":"e6d21e16093b","ui_kits/marketing/browser-window.jsx":"2e3bb69bede4","ui_kits/marketing/site.jsx":"fe296fe98abf","ui_kits/owner/screens.jsx":"cbd7290d5764","ui_kits/ride-hailing/screens.jsx":"ccf80fb92853","ui_kits/swap-officer/browser-window.jsx":"2e3bb69bede4","ui_kits/swap-officer/dark-components.jsx":"f660e33b0f94","ui_kits/swap-officer/screens.jsx":"33a54c29a996","ui_kits/swap-ops/screens.jsx":"855418bf9f4f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GOGOElectricDesignSystem_019e17 = window.GOGOElectricDesignSystem_019e17 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/app/components.jsx
try { (() => {
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
  danger: '#C82342'
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
function GogoLogo({
  height = 24,
  variant = 'color'
}) {
  const src = {
    color: '../../assets/logo-full-color.png',
    inverse: '../../assets/logo-inverse.png',
    white: '../../assets/logo-white.png',
    black: '../../assets/logo-black.png'
  }[variant] || '../../assets/logo-full-color.png';
  // logos are roughly 2:1 aspect (1000x500 area). Trim padded versions.
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    style: {
      height,
      objectFit: 'contain'
    },
    alt: "GOGO"
  });
}

// ─── Generic UI primitives ────────────────────────────
function Button({
  variant = 'primary',
  children,
  full,
  onClick,
  style
}) {
  const variants = {
    primary: {
      background: C.aub,
      color: C.white,
      border: 'none'
    },
    accent: {
      background: C.mag,
      color: C.white,
      border: 'none'
    },
    secondary: {
      background: C.white,
      color: C.aub,
      border: `1px solid ${C.aub}`
    },
    ghost: {
      background: 'transparent',
      color: C.aub,
      border: 'none'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
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
      ...style
    }
  }, children);
}
function Pill({
  children,
  tone = 'aub'
}) {
  const tones = {
    aub: {
      bg: C.aub,
      fg: C.white
    },
    mag: {
      bg: C.mag,
      fg: C.white
    },
    out: {
      bg: 'transparent',
      fg: C.aub,
      border: `1px solid ${C.aub}`
    },
    soft: {
      bg: '#FCE2EE',
      fg: '#95075A'
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      background: t.bg,
      color: t.fg,
      border: t.border || 'none',
      padding: '4px 10px',
      borderRadius: 999,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.02em',
      fontFamily: FONT_BODY
    }
  }, children);
}
function Caption({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontSize: 11,
      fontWeight: 600,
      color: C.fg3,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      ...style
    }
  }, children);
}
function StatBig({
  label,
  value,
  unit,
  delta,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Caption, {
    style: {
      color: dark ? 'rgba(255,255,255,0.5)' : C.fg3
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 700,
      fontSize: 56,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      color: dark ? C.white : C.aub,
      fontVariantNumeric: 'tabular-nums',
      marginTop: 6
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      color: dark ? 'rgba(255,255,255,0.6)' : C.fg3,
      marginLeft: 4
    }
  }, unit)), delta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 12,
      fontWeight: 600,
      marginTop: 8,
      color: delta.startsWith('−') ? C.mag : C.success
    }
  }, delta));
}

// ─── Top bar inside app ───────────────────────────────
function AppTopBar({
  title,
  leading,
  trailing,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 20px 10px',
      color: dark ? C.white : C.aub
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      display: 'flex',
      justifyContent: 'flex-start'
    }
  }, leading), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY_TIGHT,
      fontWeight: 800,
      fontSize: 17,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, trailing));
}

// ─── Bottom tab bar ───────────────────────────────────
function TabBar({
  active,
  onTab
}) {
  const tabs = [{
    id: 'home',
    icon: 'M3 12L12 4l9 8M5 10v10h14V10'
  }, {
    id: 'map',
    icon: 'M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14'
  }, {
    id: 'go',
    isGo: true
  }, {
    id: 'trips',
    icon: 'M4 7h16M4 12h16M4 17h10'
  }, {
    id: 'me',
    icon: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: '10px 16px 12px',
      background: C.white,
      borderTop: `1px solid ${C.hairline}`
    }
  }, tabs.map(t => t.isGo ? /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => onTab && onTab('go'),
    style: {
      width: 56,
      height: 56,
      borderRadius: 999,
      background: C.mag,
      color: C.white,
      border: 'none',
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY,
      fontWeight: 800,
      fontSize: 18,
      letterSpacing: '0.04em',
      cursor: 'pointer',
      boxShadow: '0 8px 24px rgba(210,12,125,0.35)',
      marginTop: -28
    }
  }, "GO") : /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => onTab && onTab(t.id),
    style: {
      background: 'transparent',
      border: 'none',
      padding: 8,
      cursor: 'pointer',
      color: active === t.id ? C.aub : C.fg4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: t.icon
  })))));
}

// ─── Battery glyph (used everywhere) ──────────────────
function BatterySVG({
  size = 60,
  charged = 100,
  color
}) {
  const fillColor = color || (charged >= 40 ? C.mag : charged >= 20 ? '#E08200' : '#A89097');
  const bodyW = size;
  const bodyH = size * 1.55;
  const cornerR = size * 0.14;
  const padding = size * 0.10;
  const innerH = bodyH - padding * 2 - size * 0.22;
  const fillH = innerH * (charged / 100);
  return /*#__PURE__*/React.createElement("svg", {
    width: bodyW,
    height: bodyH + size * 0.10,
    viewBox: `0 0 ${bodyW} ${bodyH + size * 0.10}`
  }, /*#__PURE__*/React.createElement("rect", {
    x: bodyW * 0.30,
    y: "0",
    width: bodyW * 0.40,
    height: size * 0.08,
    rx: size * 0.03,
    fill: C.aub
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: size * 0.08,
    width: bodyW,
    height: bodyH,
    rx: cornerR,
    fill: C.aub
  }), /*#__PURE__*/React.createElement("rect", {
    x: padding,
    y: size * 0.08 + padding + (innerH - fillH),
    width: bodyW - padding * 2,
    height: fillH,
    rx: cornerR * 0.5,
    fill: fillColor
  }), /*#__PURE__*/React.createElement("text", {
    x: bodyW / 2,
    y: size * 0.08 + padding + innerH + size * 0.20,
    textAnchor: "middle",
    dominantBaseline: "middle",
    fontFamily: FONT_DISPLAY,
    fontWeight: "800",
    fontSize: size * 0.40,
    fill: C.white,
    style: {
      fontVariationSettings: VFS_DISPLAY
    }
  }, charged >= 40 ? '+' : '−'));
}

// ─── Swap countdown ring (used on active swap screen) ─
function SwapCountdown({
  secondsLeft = 38,
  total = 60
}) {
  const r = 100;
  const c = 2 * Math.PI * r;
  const pct = secondsLeft / total;
  const dash = c * pct;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 240,
      height: 240,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "240",
    height: "240",
    viewBox: "0 0 240 240",
    style: {
      transform: 'rotate(-90deg)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "120",
    r: r,
    stroke: "rgba(255,255,255,0.12)",
    strokeWidth: "10",
    fill: "none"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "120",
    cy: "120",
    r: r,
    stroke: C.mag,
    strokeWidth: "10",
    fill: "none",
    strokeDasharray: `${dash} ${c}`,
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontSize: 11,
      fontWeight: 600,
      color: 'rgba(255,255,255,0.6)',
      textTransform: 'uppercase',
      letterSpacing: '0.10em'
    }
  }, "Swap in progress"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 88,
      letterSpacing: '-0.04em',
      color: C.white,
      lineHeight: 1,
      marginTop: 4,
      fontVariantNumeric: 'tabular-nums'
    }
  }, secondsLeft, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      color: 'rgba(255,255,255,0.55)',
      marginLeft: 4
    }
  }, "sec")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.mag,
      marginTop: 8
    }
  }, "+ Sarah \xB7 on it")));
}

// ─── Mini slot indicator for station preview ──────────
function SlotMini({
  charged
}) {
  const innerH = 30;
  const fillH = innerH * (charged / 100);
  const fill = charged >= 90 ? C.mag : charged >= 40 ? '#E08200' : '#A89097';
  return /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "22",
    viewBox: "0 0 14 22"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "0",
    width: "6",
    height: "2",
    rx: "0.5",
    fill: C.aub
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "2",
    width: "14",
    height: "20",
    rx: "2",
    fill: C.hairline
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: 2 + 2 + (innerH * 0.6 - fillH * 0.6),
    width: "10",
    height: fillH * 0.6,
    rx: "1",
    fill: fill
  }));
}

// ─── List row ─────────────────────────────────────────
function ListRow({
  leading,
  title,
  sub,
  trailing,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 20px',
      borderBottom: `1px solid ${C.hairline}`,
      cursor: onClick ? 'pointer' : 'default',
      background: C.white
    }
  }, leading, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontWeight: 600,
      fontSize: 15,
      color: C.fg1
    }
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontSize: 12,
      color: C.fg3,
      marginTop: 2
    }
  }, sub)), trailing);
}

// Map placeholder (no image, no slop — pure flat with route line)
function MapPlaceholder({
  height = 320
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      position: 'relative',
      background: '#F2EAE7',
      backgroundImage: 'linear-gradient(to right, rgba(64,16,60,0.06) 1px, transparent 1px),' + 'linear-gradient(to bottom, rgba(64,16,60,0.06) 1px, transparent 1px)',
      backgroundSize: '32px 32px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 390 320",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M40,260 C 100,240 130,180 180,160 S 280,140 340,80",
    stroke: C.mag,
    strokeWidth: "4",
    fill: "none",
    strokeLinecap: "round",
    strokeDasharray: "0"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 30,
      top: 250,
      width: 16,
      height: 16,
      borderRadius: 999,
      background: C.aub,
      border: `3px solid ${C.white}`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 36,
      top: 60,
      width: 22,
      height: 22,
      borderRadius: 999,
      background: C.mag,
      border: `3px solid ${C.white}`
    }
  }));
}

// ─── Decorative +/− texture watermark ─────────────────
function PlusMinusBg({
  color = 'rgba(255,255,255,0.04)',
  size = 24,
  gap = 60
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("pattern", {
    id: "pm",
    x: "0",
    y: "0",
    width: gap,
    height: gap,
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("text", {
    x: gap / 2,
    y: gap / 2 + size / 3,
    textAnchor: "middle",
    fontFamily: FONT_DISPLAY,
    fontWeight: "800",
    fontSize: size,
    fill: color,
    style: {
      fontVariationSettings: VFS_DISPLAY
    }
  }, "+"), /*#__PURE__*/React.createElement("text", {
    x: gap,
    y: gap + size / 3,
    textAnchor: "middle",
    fontFamily: FONT_DISPLAY,
    fontWeight: "800",
    fontSize: size,
    fill: color,
    style: {
      fontVariationSettings: VFS_DISPLAY
    }
  }, "\u2212"))), /*#__PURE__*/React.createElement("rect", {
    width: "100%",
    height: "100%",
    fill: "url(#pm)"
  }));
}

// ─── Streak calendar (7×5 grid showing swap activity) ─
function SwapStreak({
  data,
  color = C.mag
}) {
  // data: array of 35 entries, value 0-3
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: 5
    }
  }, data.map((v, i) => {
    const opacity = v === 0 ? 0.08 : v === 1 ? 0.35 : v === 2 ? 0.7 : 1;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        aspectRatio: '1',
        borderRadius: 3,
        background: v === 0 ? C.hairline : color,
        opacity: v === 0 ? 1 : opacity
      }
    });
  }));
}

// ─── Status bar replacement (so each frame reads correctly) ─
Object.assign(window, {
  C,
  FONT_DISPLAY,
  FONT_BODY,
  FONT_MONO,
  VFS_DISPLAY,
  VFS_DISPLAY_TIGHT,
  VFS_DATA,
  VFS_BODY,
  VFS_BODY_BOLD,
  GogoLogo,
  Button,
  Pill,
  Caption,
  StatBig,
  AppTopBar,
  TabBar,
  BatterySVG,
  SwapCountdown,
  SlotMini,
  ListRow,
  MapPlaceholder,
  PlusMinusBg,
  SwapStreak
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/ios-frame.jsx
try { (() => {
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports: IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screens.jsx
try { (() => {
// screens.jsx — GOGO rider app, six core screens
// Battery-swap for boda riders. Each screen leans hard on the brand
// language: oversized type, +/− glyphs at scale, charged-vs-empty
// as a primary visual contrast.

// ═══════════════════════════════════════════════════════
// 1. WELCOME / ONBOARDING
// ═══════════════════════════════════════════════════════
function WelcomeScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.aub,
      height: '100%',
      color: C.white,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(PlusMinusBg, {
    color: "rgba(255,255,255,0.05)",
    size: 32,
    gap: 72
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-inverse.png",
    alt: "GOGO",
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: 'rgba(255,255,255,0.55)'
    }
  }, "v 2.4")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 28px 0',
      position: 'relative',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: C.mag,
      textTransform: 'uppercase',
      letterSpacing: '0.14em'
    }
  }, "BATTERY \xB7 SWAP \xB7 NETWORK"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY,
      fontWeight: 800,
      fontSize: 120,
      lineHeight: 0.86,
      letterSpacing: '-0.05em',
      textTransform: 'uppercase',
      marginTop: 18
    }
  }, "GO", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.mag
    }
  }, "+"), /*#__PURE__*/React.createElement("br", null), "SWAP."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontSize: 16,
      lineHeight: 1.45,
      color: 'rgba(255,255,255,0.7)',
      marginTop: 22,
      maxWidth: 280
    }
  }, "14 stations across Kampala. 60\u2011second swaps. Pay per pack \u2014 never charge."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -30,
      bottom: 180,
      display: 'flex',
      gap: 12,
      transform: 'rotate(-10deg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'translateY(20px)'
    }
  }, /*#__PURE__*/React.createElement(BatterySVG, {
    size: 70,
    charged: 100,
    color: C.mag
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'translateY(-10px)'
    }
  }, /*#__PURE__*/React.createElement(BatterySVG, {
    size: 70,
    charged: 42,
    color: "#E08200"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'translateY(30px)'
    }
  }, /*#__PURE__*/React.createElement(BatterySVG, {
    size: 70,
    charged: 14,
    color: "#7A5C68"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingBottom: 36,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    full: true,
    style: {
      fontSize: 17,
      padding: '16px 22px'
    }
  }, "CREATE ACCOUNT", /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    full: true,
    style: {
      color: C.white,
      fontSize: 15
    }
  }, "I already ride"))));
}

// ═══════════════════════════════════════════════════════
// 2. HOME — battery + nearest swap
// ═══════════════════════════════════════════════════════
function HomeScreen({
  onTab
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(AppTopBar, {
    leading: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "18",
      x2: "14",
      y2: "18"
    })),
    title: "HEY MUSA",
    trailing: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 999,
        background: C.aub,
        color: C.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONT_DISPLAY,
        fontVariationSettings: VFS_DISPLAY,
        fontWeight: 800,
        fontSize: 13
      }
    }, "M")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.aub,
      borderRadius: 20,
      padding: 22,
      color: C.white,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(PlusMinusBg, {
    color: "rgba(255,255,255,0.04)",
    size: 20,
    gap: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: '#F08FBE',
      textTransform: 'uppercase',
      letterSpacing: '0.12em'
    }
  }, "\u2212 SWAP SOON"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 96,
      lineHeight: 0.9,
      letterSpacing: '-0.05em',
      fontVariantNumeric: 'tabular-nums',
      marginTop: 6
    }
  }, "28", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 32,
      color: 'rgba(255,255,255,0.5)'
    }
  }, "%"))), /*#__PURE__*/React.createElement(BatterySVG, {
    size: 76,
    charged: 28,
    color: "#E08200"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 18,
      paddingTop: 14,
      borderTop: '1px solid rgba(255,255,255,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "Range"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 700,
      fontSize: 20,
      marginTop: 4
    }
  }, "~ 32 km")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "Pack"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontWeight: 700,
      fontSize: 14,
      marginTop: 6
    }
  }, "GG\u20110421")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "Bike"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontWeight: 600,
      fontSize: 14,
      marginTop: 4
    }
  }, "UAJ 027F")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      background: C.mag,
      borderRadius: 16,
      padding: '16px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      color: C.white
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: 'rgba(255,255,255,0.18)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY,
      fontWeight: 800,
      fontSize: 22
    }
  }, "+"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.7)',
      textTransform: 'uppercase',
      letterSpacing: '0.12em'
    }
  }, "Swap now"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontWeight: 700,
      fontSize: 16,
      marginTop: 2
    }
  }, "Nakawa \xB7 5/7 ready")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 28,
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.03em'
    }
  }, "4", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'rgba(255,255,255,0.7)'
    }
  }, " min")))), /*#__PURE__*/React.createElement(Caption, {
    style: {
      marginTop: 22,
      marginBottom: 8
    }
  }, "Today"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 8
    }
  }, [['Swaps', '3', null], ['Distance', '64', 'km'], ['Spent', '18k', null]].map(([l, v, u]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: C.fg3,
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 28,
      color: C.aub,
      lineHeight: 1,
      marginTop: 6,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.02em'
    }
  }, v, u && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.fg3,
      marginLeft: 2
    }
  }, u))))), /*#__PURE__*/React.createElement(Caption, {
    style: {
      marginTop: 22,
      marginBottom: 8
    }
  }, "Recent swaps"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, [{
    name: 'Nakawa',
    when: '08:42 · 58 sec',
    officer: 'Sarah',
    amt: '6,000'
  }, {
    name: 'Kabalagala',
    when: 'Yest · 64 sec',
    officer: 'Peter',
    amt: '6,000'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      borderBottom: i === 0 ? `1px solid ${C.hairline}` : 'none'
    }
  }, /*#__PURE__*/React.createElement(BatterySVG, {
    size: 26,
    charged: 100
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.fg3,
      marginTop: 1
    }
  }, s.when, " \xB7 ", s.officer)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 12,
      color: C.fg2
    }
  }, "UGX ", s.amt))))), /*#__PURE__*/React.createElement(TabBar, {
    active: "home",
    onTab: onTab
  }));
}

// ═══════════════════════════════════════════════════════
// 3. STATIONS — map + list
// ═══════════════════════════════════════════════════════
function MapScreen({
  onTab,
  onGo
}) {
  const stations = [{
    name: 'Nakawa',
    dist: '1.2 km',
    eta: '4 min',
    officer: 'Sarah',
    ready: 5,
    total: 7,
    recommended: true
  }, {
    name: 'Kabalagala',
    dist: '2.4 km',
    eta: '7 min',
    officer: 'Peter',
    ready: 7,
    total: 8
  }, {
    name: 'Ntinda',
    dist: '3.1 km',
    eta: '11 min',
    officer: 'Grace',
    ready: 2,
    total: 7
  }, {
    name: 'Bugolobi',
    dist: '3.8 km',
    eta: '13 min',
    officer: 'James',
    ready: 6,
    total: 8
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(AppTopBar, {
    title: "STATIONS",
    leading: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "15 18 9 12 15 6"
    })),
    trailing: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "21",
      y1: "21",
      x2: "16.65",
      y2: "16.65"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 220,
      position: 'relative',
      background: '#F2EAE7',
      backgroundImage: 'linear-gradient(to right, rgba(64,16,60,0.06) 1px, transparent 1px),' + 'linear-gradient(to bottom, rgba(64,16,60,0.06) 1px, transparent 1px)',
      backgroundSize: '32px 32px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 390 220",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,100 C 80,100 120,140 180,140 S 280,100 390,100",
    stroke: "rgba(64,16,60,0.14)",
    strokeWidth: "3",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M140,0 L140,220",
    stroke: "rgba(64,16,60,0.10)",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0,40 L390,40",
    stroke: "rgba(64,16,60,0.08)",
    strokeWidth: "2",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M80,168 Q 140,150 200,92",
    stroke: C.mag,
    strokeWidth: "3",
    fill: "none",
    strokeLinecap: "round",
    strokeDasharray: "6 6"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 70,
      top: 162,
      width: 14,
      height: 14,
      borderRadius: 999,
      background: C.aub,
      border: `3px solid ${C.white}`,
      boxShadow: '0 0 0 8px rgba(64,16,60,0.16)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 200,
      top: 56,
      transform: 'translateX(-50%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.mag,
      color: C.white,
      padding: '4px 10px',
      borderRadius: 999,
      fontFamily: FONT_BODY,
      fontWeight: 700,
      fontSize: 11,
      marginBottom: 4,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      whiteSpace: 'nowrap'
    }
  }, "NAKAWA \xB7 4 MIN"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(BatterySVG, {
    size: 28,
    charged: 100
  }))), [{
    x: 60,
    y: 50
  }, {
    x: 310,
    y: 40
  }, {
    x: 350,
    y: 120
  }, {
    x: 270,
    y: 180
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: s.x,
      top: s.y,
      transform: 'translate(-50%, -50%)'
    }
  }, /*#__PURE__*/React.createElement(BatterySVG, {
    size: 18,
    charged: i % 2 ? 100 : 35
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: C.white,
      marginTop: -18,
      borderTopLeftRadius: 22,
      borderTopRightRadius: 22,
      paddingTop: 8,
      overflowY: 'auto',
      boxShadow: '0 -8px 24px rgba(64,16,60,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      background: C.hairline,
      borderRadius: 999,
      margin: '6px auto 12px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 8px',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(Caption, null, "Nearby stations"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.fg3
    }
  }, "14 live")), stations.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: onGo,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 20px',
      borderTop: i === 0 ? `1px solid ${C.hairline}` : 'none',
      borderBottom: `1px solid ${C.hairline}`,
      background: s.recommended ? 'rgba(210,12,125,0.05)' : C.white,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(BatterySVG, {
    size: 28,
    charged: s.ready / s.total * 100
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontWeight: 700,
      fontSize: 15,
      color: C.fg1
    }
  }, s.name), s.recommended && /*#__PURE__*/React.createElement(Pill, {
    tone: "mag"
  }, "+ go")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontSize: 12,
      color: C.fg3,
      marginTop: 2
    }
  }, s.dist, " \xB7 ", s.eta, " \xB7 ", s.officer), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 3,
      marginTop: 8
    }
  }, Array.from({
    length: s.total
  }).map((_, j) => /*#__PURE__*/React.createElement(SlotMini, {
    key: j,
    charged: j < s.ready ? 100 : 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.fg3,
      marginLeft: 6,
      fontVariantNumeric: 'tabular-nums'
    }
  }, s.ready, "/", s.total))), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: C.aub,
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })))))), /*#__PURE__*/React.createElement(TabBar, {
    active: "map",
    onTab: onTab
  }));
}

// ═══════════════════════════════════════════════════════
// 4. LIVE SWAP — countdown
// ═══════════════════════════════════════════════════════
function ChargingScreen({
  onTab
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.aub,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      color: C.white,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(PlusMinusBg, {
    color: "rgba(255,255,255,0.04)",
    size: 26,
    gap: 68
  }), /*#__PURE__*/React.createElement(AppTopBar, {
    dark: true,
    title: "LIVE SWAP",
    leading: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    })),
    trailing: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "5",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "19",
      r: "1"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 20px 20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: 'rgba(255,255,255,0.5)',
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: '0.12em'
    }
  }, "Nakawa \xB7 bay 03 \xB7 #SW\u20118842"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(SwapCountdown, {
    secondsLeft: 38,
    total: 60
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32,
      background: 'rgba(255,255,255,0.06)',
      borderRadius: 16,
      padding: '16px 18px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(BatterySVG, {
    size: 44,
    charged: 14,
    color: "#7A5C68"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontSize: 10,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase',
      letterSpacing: '0.10em',
      marginTop: 8
    }
  }, "\u2212 RETURNED"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 13,
      color: 'rgba(255,255,255,0.75)',
      marginTop: 2
    }
  }, "14%")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY,
      fontWeight: 800,
      fontSize: 36,
      color: C.mag,
      letterSpacing: '-0.02em'
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(BatterySVG, {
    size: 44,
    charged: 100,
    color: C.mag
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontSize: 10,
      fontWeight: 700,
      color: C.mag,
      textTransform: 'uppercase',
      letterSpacing: '0.10em',
      marginTop: 8
    }
  }, "+ SWAPPING IN"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 13,
      color: C.white,
      marginTop: 2
    }
  }, "100%"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      background: 'rgba(255,255,255,0.06)',
      borderRadius: 16,
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 999,
      background: C.mag,
      color: C.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY,
      fontWeight: 800,
      fontSize: 18
    }
  }, "SN"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontWeight: 600,
      fontSize: 15
    }
  }, "Sarah Namuli"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgba(255,255,255,0.55)',
      marginTop: 2
    }
  }, "Swap officer \xB7 \u2605 4.9")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 22,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.02em'
    }
  }, "UGX\xA06,000")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    full: true,
    style: {
      marginTop: 18,
      fontSize: 16
    }
  }, "Confirm & pay")), /*#__PURE__*/React.createElement(TabBar, {
    active: "go",
    onTab: onTab
  }));
}

// ═══════════════════════════════════════════════════════
// 5. SWAP HISTORY — streak + receipts
// ═══════════════════════════════════════════════════════
function HistoryScreen({
  onTab
}) {
  // 35 days, varied
  const streak = [2, 3, 1, 3, 3, 2, 0, 3, 3, 2, 3, 3, 3, 1, 2, 3, 3, 3, 2, 3, 3, 3, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 2];
  const swaps = [{
    d: 'Today · 08:42',
    s: 'Nakawa',
    o: 'Sarah',
    km: '14',
    amt: '6,000'
  }, {
    d: 'Today · 06:10',
    s: 'Nakawa',
    o: 'Sarah',
    km: '38',
    amt: '6,000'
  }, {
    d: 'Yest · 19:25',
    s: 'Kabalagala',
    o: 'Peter',
    km: '42',
    amt: '6,000'
  }, {
    d: 'Yest · 12:08',
    s: 'Ntinda',
    o: 'Grace',
    km: '36',
    amt: '6,000'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(AppTopBar, {
    title: "HISTORY",
    leading: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "15 18 9 12 15 6"
    })),
    trailing: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 18L18 6M6 6l12 12",
      style: {
        opacity: 0
      }
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 6h18M6 12h12M9 18h6"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 96,
      lineHeight: 0.95,
      letterSpacing: '-0.05em',
      color: C.aub,
      fontVariantNumeric: 'tabular-nums',
      marginTop: 8
    }
  }, "87"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontWeight: 700,
      fontSize: 14,
      color: C.aub
    }
  }, "swaps"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.fg3,
      marginTop: 2
    }
  }, "last 35 days")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: '#0E8F5A',
      fontWeight: 600
    }
  }, "+ 12 vs prior"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.fg3,
      marginTop: 2
    }
  }, "UGX 522,000"))), /*#__PURE__*/React.createElement(Caption, {
    style: {
      marginTop: 22,
      marginBottom: 8
    }
  }, "Swap streak"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(SwapStreak, {
    data: streak
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 12,
      justifyContent: 'flex-end',
      fontFamily: FONT_MONO,
      fontSize: 10,
      color: C.fg3
    }
  }, /*#__PURE__*/React.createElement("span", null, "less"), [0, 1, 2, 3].map(v => {
    const op = v === 0 ? 1 : v === 1 ? 0.35 : v === 2 ? 0.7 : 1;
    return /*#__PURE__*/React.createElement("div", {
      key: v,
      style: {
        width: 10,
        height: 10,
        borderRadius: 2,
        background: v === 0 ? C.hairline : C.mag,
        opacity: op
      }
    });
  }), /*#__PURE__*/React.createElement("span", null, "more"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.aub,
      color: C.white,
      borderRadius: 12,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'rgba(255,255,255,0.55)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "Distance"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 36,
      lineHeight: 1,
      marginTop: 6,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.03em'
    }
  }, "3,420", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'rgba(255,255,255,0.55)'
    }
  }, " km"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: C.fg3,
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "vs petrol"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 36,
      lineHeight: 1,
      marginTop: 6,
      color: '#0E8F5A',
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.03em'
    }
  }, "\u2212 38", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: C.fg3
    }
  }, "%")))), /*#__PURE__*/React.createElement(Caption, {
    style: {
      marginTop: 22,
      marginBottom: 8
    }
  }, "Recent"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, swaps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      borderBottom: i < swaps.length - 1 ? `1px solid ${C.hairline}` : 'none'
    }
  }, /*#__PURE__*/React.createElement(BatterySVG, {
    size: 24,
    charged: 100
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, s.s, " \xB7 ", s.o), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.fg3,
      marginTop: 1
    }
  }, s.d, " \xB7 ", s.km, " km ridden after")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 13,
      color: C.fg2
    }
  }, "UGX ", s.amt))))), /*#__PURE__*/React.createElement(TabBar, {
    active: "trips",
    onTab: onTab
  }));
}

// ═══════════════════════════════════════════════════════
// 6. WALLET / SWAP PASS
// ═══════════════════════════════════════════════════════
function WalletScreen({
  onTab
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(AppTopBar, {
    title: "WALLET",
    leading: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "15 18 9 12 15 6"
    })),
    trailing: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.aub,
      borderRadius: 20,
      padding: 22,
      color: C.white,
      position: 'relative',
      overflow: 'hidden',
      minHeight: 200
    }
  }, /*#__PURE__*/React.createElement(PlusMinusBg, {
    color: "rgba(255,255,255,0.05)",
    size: 22,
    gap: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em'
    }
  }, "Balance"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 56,
      lineHeight: 1,
      marginTop: 8,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.04em'
    }
  }, "42,000"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 12,
      color: 'rgba(255,255,255,0.55)',
      marginTop: 6
    }
  }, "UGX \xB7 \u2248 7 swaps")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-inverse.png",
    alt: "GOGO",
    style: {
      height: 22,
      opacity: 0.85
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 22,
      paddingTop: 14,
      borderTop: '1px solid rgba(255,255,255,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "Rider ID"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontWeight: 700,
      fontSize: 13,
      marginTop: 4
    }
  }, "GG\u20112042\u2011MK")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "Since"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontWeight: 600,
      fontSize: 13,
      marginTop: 4
    }
  }, "Jan 2024")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "Tier"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontWeight: 700,
      fontSize: 13,
      color: C.mag,
      marginTop: 4
    }
  }, "+ DAILY")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    style: {
      width: '100%'
    }
  }, "+ Top up"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      width: '100%'
    }
  }, "Auto\u2011pay")), /*#__PURE__*/React.createElement(Caption, {
    style: {
      marginTop: 22,
      marginBottom: 8
    }
  }, "Swap pass \xB7 10\u2011pack"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontWeight: 700,
      fontSize: 16,
      color: C.aub
    }
  }, "4 swaps left"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.fg3,
      marginTop: 2
    }
  }, "Buy 10, get 1 free. Renews on swap #11.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 24,
      color: C.aub,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.02em'
    }
  }, "4", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.fg3
    }
  }, "/10"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      marginTop: 12
    }
  }, Array.from({
    length: 10
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 10,
      borderRadius: 2,
      background: i < 6 ? C.aub200 : i < 9 ? C.mag : C.mag,
      opacity: i < 6 ? 1 : i === 9 ? 1 : 1
    }
  })))), /*#__PURE__*/React.createElement(Caption, {
    style: {
      marginTop: 22,
      marginBottom: 8
    }
  }, "Pay with"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, [{
    name: 'MTN Mobile Money',
    sub: '·•·•·• 0427',
    active: true,
    badge: 'MTN'
  }, {
    name: 'Airtel Money',
    sub: '·•·•·• 1804',
    active: false,
    badge: 'AIR'
  }, {
    name: 'Card · Visa',
    sub: '·•·•·• 4242',
    active: false,
    badge: 'VISA'
  }].map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 16px',
      borderBottom: i < 2 ? `1px solid ${C.hairline}` : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 28,
      borderRadius: 6,
      background: p.active ? C.aub : C.hairline,
      color: p.active ? C.white : C.fg3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY_TIGHT,
      fontWeight: 800,
      fontSize: 10,
      letterSpacing: '0.02em'
    }
  }, p.badge), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.fg3,
      marginTop: 1
    }
  }, p.sub)), p.active ? /*#__PURE__*/React.createElement(Pill, {
    tone: "mag"
  }, "+ default") : /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: C.aub,
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })))))), /*#__PURE__*/React.createElement(TabBar, {
    active: "me",
    onTab: onTab
  }));
}
Object.assign(window, {
  WelcomeScreen,
  HomeScreen,
  MapScreen,
  ChargingScreen,
  HistoryScreen,
  WalletScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/battery-maintenance/screens.jsx
try { (() => {
// battery-maintenance/screens.jsx — battery technician app
// Battery-specific ticketing & pack health

// ═══════════════════════════════════════════════════════
// 01 PACK QUEUE — flagged packs
// ═══════════════════════════════════════════════════════
function PackQueueScreen() {
  const packs = [{
    id: 'GG‑0421',
    cycles: 842,
    health: 88,
    issue: 'Imbalance · cell 7',
    sev: 'high',
    station: 'Nakawa'
  }, {
    id: 'GG‑0307',
    cycles: 1124,
    health: 76,
    issue: 'Capacity ↓ 24%',
    sev: 'high',
    station: 'Ntinda'
  }, {
    id: 'GG‑0902',
    cycles: 612,
    health: 92,
    issue: 'Temp spike during charge',
    sev: 'med',
    station: 'Kabalagala'
  }, {
    id: 'GG‑1241',
    cycles: 412,
    health: 96,
    issue: 'Routine 500-cycle check',
    sev: 'low',
    station: 'Bugolobi'
  }];
  const sevColor = {
    high: '#C82342',
    med: '#E08200',
    low: '#0E8F5A'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(AppTopBar, {
    leading: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "18",
      x2: "14",
      y2: "18"
    })),
    title: "PACK CARE",
    trailing: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 999,
        background: C.aub,
        color: C.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONT_DISPLAY,
        fontVariationSettings: VFS_DISPLAY,
        fontWeight: 800,
        fontSize: 13
      }
    }, "I")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.aub,
      color: C.white,
      borderRadius: 16,
      padding: 18,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(PlusMinusBg, {
    color: "rgba(255,255,255,0.04)",
    size: 20,
    gap: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.55)',
      textTransform: 'uppercase',
      letterSpacing: '0.12em'
    }
  }, "FLAGGED PACKS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 56,
      lineHeight: 1,
      marginTop: 4,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.04em'
    }
  }, "14"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: 'rgba(255,255,255,0.55)',
      marginTop: 6
    }
  }, "of 1,284 active \xB7 1.1%")), /*#__PURE__*/React.createElement(BatterySVG, {
    size: 56,
    charged: 88,
    color: "#E08200"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      gap: 22,
      marginTop: 16,
      paddingTop: 14,
      borderTop: '1px solid rgba(255,255,255,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontWeight: 600
    }
  }, "High"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 18,
      color: '#F08FBE',
      marginTop: 4
    }
  }, "3")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontWeight: 600
    }
  }, "Med"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 18,
      marginTop: 4
    }
  }, "6")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontWeight: 600
    }
  }, "Low"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 18,
      marginTop: 4
    }
  }, "5")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 16,
      overflowX: 'auto'
    }
  }, [['All · 14', true], ['Imbalance · 4', false], ['Capacity · 5', false], ['Thermal · 3', false]].map(([l, on], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '6px 12px',
      borderRadius: 999,
      background: on ? C.aub : C.white,
      color: on ? C.white : C.aub,
      border: `1px solid ${on ? C.aub : C.hairline}`,
      fontFamily: FONT_BODY,
      fontSize: 12,
      fontWeight: 600,
      whiteSpace: 'nowrap'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, packs.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderLeft: `4px solid ${sevColor[p.sev]}`,
      borderRadius: 10,
      padding: '12px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(BatterySVG, {
    size: 36,
    charged: p.health,
    color: p.sev === 'high' ? '#C82342' : p.sev === 'med' ? '#E08200' : '#0E8F5A'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY_TIGHT,
      fontWeight: 800,
      fontSize: 14,
      color: C.aub,
      letterSpacing: '-0.01em'
    }
  }, p.id), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 10,
      fontWeight: 700,
      color: sevColor[p.sev],
      background: `${sevColor[p.sev]}1A`,
      padding: '2px 6px',
      borderRadius: 999
    }
  }, p.sev.toUpperCase())), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontWeight: 600,
      fontSize: 13,
      marginTop: 4
    }
  }, p.issue), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.fg3,
      marginTop: 2
    }
  }, p.cycles, " cycles \xB7 ", p.station)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 18,
      color: p.health >= 90 ? '#0E8F5A' : p.health >= 80 ? '#E08200' : '#C82342',
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.02em'
    }
  }, p.health, "%"))))));
}

// ═══════════════════════════════════════════════════════
// 02 PACK DETAIL — cell-level health
// ═══════════════════════════════════════════════════════
function PackDetailScreen() {
  // 16 cells, one bad
  const cells = [3.82, 3.81, 3.83, 3.82, 3.84, 3.82, 3.41, 3.83, 3.81, 3.82, 3.83, 3.82, 3.84, 3.81, 3.82, 3.83];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(AppTopBar, {
    title: "GG\u20110421",
    leading: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "15 18 9 12 15 6"
    })),
    trailing: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "5",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "19",
      r: "1"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.aub,
      color: C.white,
      borderRadius: 16,
      padding: 18,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(PlusMinusBg, {
    color: "rgba(255,255,255,0.04)",
    size: 18,
    gap: 50
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(BatterySVG, {
    size: 64,
    charged: 88,
    color: "#E08200"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.55)',
      textTransform: 'uppercase',
      letterSpacing: '0.12em'
    }
  }, "HEALTH (SoH)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 56,
      lineHeight: 0.95,
      marginTop: 4,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.04em'
    }
  }, "88", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      color: 'rgba(255,255,255,0.55)'
    }
  }, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: '#F08FBE',
      marginTop: 6
    }
  }, "\u2212 4% in last 60 days"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 16,
      paddingTop: 14,
      borderTop: '1px solid rgba(255,255,255,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontWeight: 600
    }
  }, "Cycles"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 700,
      fontSize: 18,
      marginTop: 4
    }
  }, "842")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontWeight: 600
    }
  }, "In service"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 700,
      fontSize: 18,
      marginTop: 4
    }
  }, "14 mo")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontWeight: 600
    }
  }, "Capacity"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 700,
      fontSize: 18,
      marginTop: 4
    }
  }, "43.2 Ah")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginTop: 22,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Caption, null, "Cells \xB7 16"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: '#C82342',
      fontWeight: 600
    }
  }, "\u2212 cell 7 imbalanced")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      gap: 6
    }
  }, cells.map((v, i) => {
    const bad = v < 3.6;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: 6,
        borderRadius: 6,
        textAlign: 'center',
        background: bad ? '#FFE9EE' : C.aub50,
        border: bad ? `1.5px solid #C82342` : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FONT_MONO,
        fontSize: 9,
        color: C.fg3,
        fontWeight: 700
      }
    }, "C", i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: FONT_DISPLAY,
        fontVariationSettings: VFS_DATA,
        fontWeight: 800,
        fontSize: 11,
        marginTop: 2,
        color: bad ? '#C82342' : C.aub,
        fontVariantNumeric: 'tabular-nums'
      }
    }, v.toFixed(2)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 12,
      fontFamily: FONT_MONO,
      fontSize: 10,
      color: C.fg3
    }
  }, /*#__PURE__*/React.createElement("span", null, "min 3.41 V"), /*#__PURE__*/React.createElement("span", null, "avg 3.81 V"), /*#__PURE__*/React.createElement("span", null, "max 3.84 V \xB7 \u0394 0.43 V"))), /*#__PURE__*/React.createElement(Caption, {
    style: {
      marginTop: 22,
      marginBottom: 8
    }
  }, "SoH \xB7 90 days"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      padding: 14,
      height: 110,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 280 70",
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "0,8 30,9 60,11 90,13 120,14 150,18 180,22 210,28 240,32 280,36",
    stroke: C.mag,
    strokeWidth: "2.5",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "50",
    x2: "280",
    y2: "50",
    stroke: C.hairline,
    strokeDasharray: "2 4"
  }), /*#__PURE__*/React.createElement("text", {
    x: "2",
    y: "48",
    fontFamily: FONT_MONO,
    fontSize: "8",
    fill: C.fg3
  }, "80% retire threshold"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    full: true
  }, "Rebalance"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    full: true
  }, "Open ticket"))));
}

// ═══════════════════════════════════════════════════════
// 03 DISPOSITION — what to do with the pack
// ═══════════════════════════════════════════════════════
function DispositionScreen() {
  const options = [{
    l: 'Rebalance',
    sub: 'Active cell balancing · 4–6 h on bench',
    tag: 'RECOMMENDED',
    tone: 'mag'
  }, {
    l: 'Replace cell 7',
    sub: 'Out for 2–3 days · cost UGX 280k',
    tag: 'OPTION',
    tone: 'aub'
  }, {
    l: 'Retire from fleet',
    sub: 'Move to grid-storage 2nd life · final',
    tag: 'OPTION',
    tone: 'aub'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.aub,
      height: '100%',
      color: C.white,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(PlusMinusBg, {
    color: "rgba(255,255,255,0.04)",
    size: 22,
    gap: 60
  }), /*#__PURE__*/React.createElement(AppTopBar, {
    dark: true,
    title: "DISPOSITION",
    leading: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "15 18 9 12 15 6"
    })),
    trailing: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 20px 22px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(BatterySVG, {
    size: 56,
    charged: 88,
    color: "#E08200"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY,
      fontWeight: 800,
      fontSize: 28,
      letterSpacing: '-0.02em'
    }
  }, "GG\u20110421"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: 'rgba(255,255,255,0.6)',
      marginTop: 4
    }
  }, "842 cycles \xB7 SoH 88% \xB7 imbalance 0.43V"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY,
      fontWeight: 800,
      fontSize: 36,
      lineHeight: 1,
      marginTop: 30,
      textTransform: 'uppercase',
      letterSpacing: '-0.03em'
    }
  }, "WHAT NEXT,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.mag
    }
  }, "+"), " ISAAC?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, options.map((o, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: o.tone === 'mag' ? C.mag : 'rgba(255,255,255,0.06)',
      borderRadius: 14,
      padding: 16,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: o.tone === 'mag' ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.10)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY,
      fontWeight: 800,
      fontSize: 16
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_BODY,
      fontWeight: 700,
      fontSize: 15
    }
  }, o.l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 9,
      fontWeight: 700,
      background: 'rgba(255,255,255,0.2)',
      padding: '2px 6px',
      borderRadius: 999,
      letterSpacing: '0.04em'
    }
  }, o.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgba(255,255,255,0.7)',
      marginTop: 4
    }
  }, o.sub)), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  }))))), /*#__PURE__*/React.createElement(Caption, {
    style: {
      marginTop: 22,
      marginBottom: 8,
      color: 'rgba(255,255,255,0.55)'
    }
  }, "Tech note"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.06)',
      borderRadius: 12,
      padding: 14,
      fontFamily: FONT_BODY,
      fontSize: 13,
      color: 'rgba(255,255,255,0.85)',
      lineHeight: 1.5
    }
  }, "Cell 7 was previously rebalanced 60 days ago. If imbalance recurs after this rebalance, escalate to replace.")));
}
Object.assign(window, {
  PackQueueScreen,
  PackDetailScreen,
  DispositionScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/battery-maintenance/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/bike-maintenance/screens.jsx
try { (() => {
// bike-maintenance/screens.jsx — technician ticketing app for bikes

// ═══════════════════════════════════════════════════════
// 01 TICKETS QUEUE — open work, prioritized
// ═══════════════════════════════════════════════════════
function TicketsQueueScreen() {
  const tickets = [{
    id: '#T‑4218',
    plate: 'UAJ 027F',
    issue: 'Rear brake pad worn',
    sev: 'high',
    age: '2 h'
  }, {
    id: '#T‑4217',
    plate: 'UAK 802L',
    issue: 'Headlight flickering at idle',
    sev: 'med',
    age: '4 h'
  }, {
    id: '#T‑4215',
    plate: 'UAH 119B',
    issue: '60-day service due',
    sev: 'low',
    age: '1 d'
  }, {
    id: '#T‑4214',
    plate: 'UAJ 559M',
    issue: 'Throttle response lag',
    sev: 'med',
    age: '1 d'
  }, {
    id: '#T‑4211',
    plate: 'UAL 102K',
    issue: 'Mirror cracked',
    sev: 'low',
    age: '2 d'
  }];
  const sevColor = {
    high: '#C82342',
    med: '#E08200',
    low: '#0E8F5A'
  };
  const sevLabel = {
    high: 'HIGH',
    med: 'MED',
    low: 'LOW'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(AppTopBar, {
    leading: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "18",
      x2: "14",
      y2: "18"
    })),
    title: "BIKE TICKETS",
    trailing: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 999,
        background: C.aub,
        color: C.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONT_DISPLAY,
        fontVariationSettings: VFS_DISPLAY,
        fontWeight: 800,
        fontSize: 13
      }
    }, "R")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 8
    }
  }, [{
    l: 'Open',
    v: '14',
    tone: 'aub'
  }, {
    l: 'Today',
    v: '5',
    tone: 'mag'
  }, {
    l: 'Avg time',
    v: '34m',
    tone: 'aub'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: s.tone === 'mag' ? C.mag : C.aub,
      color: C.white,
      borderRadius: 12,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'rgba(255,255,255,0.55)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, s.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 32,
      lineHeight: 1,
      marginTop: 6,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.03em'
    }
  }, s.v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 18,
      overflowX: 'auto'
    }
  }, [['All · 14', true], ['High · 3', false], ['Med · 6', false], ['Low · 5', false], ['Mine · 4', false]].map(([l, on], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '6px 12px',
      borderRadius: 999,
      background: on ? C.aub : C.white,
      color: on ? C.white : C.aub,
      border: `1px solid ${on ? C.aub : C.hairline}`,
      fontFamily: FONT_BODY,
      fontSize: 12,
      fontWeight: 600,
      whiteSpace: 'nowrap'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, tickets.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderLeft: `4px solid ${sevColor[t.sev]}`,
      borderRadius: 10,
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      fontWeight: 700,
      color: sevColor[t.sev],
      background: `${sevColor[t.sev]}1A`,
      padding: '2px 8px',
      borderRadius: 999
    }
  }, sevLabel[t.sev]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.fg3
    }
  }, t.id)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.fg3
    }
  }, t.age)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontWeight: 600,
      fontSize: 14,
      marginTop: 6,
      color: C.fg1
    }
  }, t.issue), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: C.fg3,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "17",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "17",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 17 L10 9 L14 9 L17 14"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY_TIGHT,
      fontWeight: 800,
      fontSize: 13,
      color: C.aub,
      letterSpacing: '-0.01em'
    }
  }, t.plate)))))));
}

// ═══════════════════════════════════════════════════════
// 02 INSPECTION — active ticket
// ═══════════════════════════════════════════════════════
function InspectionScreen() {
  const checks = [{
    l: 'Front brake pads',
    state: 'pass',
    v: '6mm · OK'
  }, {
    l: 'Rear brake pads',
    state: 'fail',
    v: '1.2mm · replace'
  }, {
    l: 'Brake fluid level',
    state: 'pass',
    v: 'full'
  }, {
    l: 'Chain tension',
    state: 'warn',
    v: 'slack 28mm'
  }, {
    l: 'Tires — front',
    state: 'pass',
    v: '4.8mm tread'
  }, {
    l: 'Tires — rear',
    state: 'pass',
    v: '4.2mm tread'
  }, {
    l: 'Headlight',
    state: 'pending',
    v: '—'
  }];
  const stateColor = {
    pass: '#0E8F5A',
    fail: '#C82342',
    warn: '#E08200',
    pending: C.fg4
  };
  const stateLabel = {
    pass: '+',
    fail: '−',
    warn: '!',
    pending: '·'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(AppTopBar, {
    title: "#T\u20114218",
    leading: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "15 18 9 12 15 6"
    })),
    trailing: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "5",
      r: "1"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "19",
      r: "1"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.aub,
      color: C.white,
      borderRadius: 16,
      padding: 18,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.55)',
      textTransform: 'uppercase',
      letterSpacing: '0.12em'
    }
  }, "Bike"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY,
      fontWeight: 800,
      fontSize: 28,
      marginTop: 4,
      letterSpacing: '-0.02em'
    }
  }, "UAJ 027F"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: 'rgba(255,255,255,0.65)',
      marginTop: 4
    }
  }, "14,820 km \xB7 last service 14d ago")), /*#__PURE__*/React.createElement(Pill, {
    tone: "mag"
  }, "HIGH")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderLeft: `4px solid #C82342`,
      borderRadius: 10,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontSize: 11,
      fontWeight: 700,
      color: '#C82342',
      textTransform: 'uppercase',
      letterSpacing: '0.10em'
    }
  }, "Reported by rider"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      marginTop: 6
    }
  }, "\"Rear brake squealing & soft pedal\""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.fg3,
      marginTop: 4
    }
  }, "Musa Kato \xB7 08:24 \xB7 1 photo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginTop: 22,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Caption, null, "Inspection \xB7 5/7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.fg3
    }
  }, "~ 8 min left")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 999,
      background: C.hairline,
      overflow: 'hidden',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '71%',
      height: '100%',
      background: C.mag
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, checks.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      borderBottom: i < checks.length - 1 ? `1px solid ${C.hairline}` : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 999,
      background: stateColor[c.state],
      color: C.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY,
      fontWeight: 800,
      fontSize: 16,
      lineHeight: 1,
      opacity: c.state === 'pending' ? 0.4 : 1
    }
  }, stateLabel[c.state]), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13,
      color: c.state === 'pending' ? C.fg3 : C.fg1
    }
  }, c.l), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.fg3,
      marginTop: 2
    }
  }, c.v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    full: true
  }, "Add part"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    full: true
  }, "Close ticket"))));
}

// ═══════════════════════════════════════════════════════
// 03 BIKE HISTORY — service log
// ═══════════════════════════════════════════════════════
function BikeHistoryScreen() {
  const log = [{
    date: '14 May',
    t: 'Service · 10,000 km',
    tag: 'SERVICE',
    cost: '142k',
    who: 'R. Mukasa'
  }, {
    date: '02 May',
    t: 'Chain replaced',
    tag: 'PART',
    cost: '48k',
    who: 'R. Mukasa'
  }, {
    date: '18 Apr',
    t: 'Rear tire (Pirelli)',
    tag: 'PART',
    cost: '180k',
    who: 'I. Owino'
  }, {
    date: '01 Apr',
    t: 'Service · 8,000 km',
    tag: 'SERVICE',
    cost: '95k',
    who: 'R. Mukasa'
  }, {
    date: '14 Mar',
    t: 'Headlight bulb',
    tag: 'PART',
    cost: '12k',
    who: 'I. Owino'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(AppTopBar, {
    title: "UAJ 027F",
    leading: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "15 18 9 12 15 6"
    })),
    trailing: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontSize: 11,
      fontWeight: 700,
      color: C.fg3,
      textTransform: 'uppercase',
      letterSpacing: '0.12em'
    }
  }, "ODOMETER"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 76,
      lineHeight: 0.95,
      color: C.aub,
      letterSpacing: '-0.05em',
      marginTop: 4,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "14,820", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      color: C.fg3,
      marginLeft: 8
    }
  }, "km")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginTop: 4,
      fontFamily: FONT_MONO,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#0E8F5A',
      fontWeight: 600
    }
  }, "+ 264 km / week"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.fg3
    }
  }, "next service: 15,000 km")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(Caption, {
    style: {
      marginBottom: 12
    }
  }, "Health \xB7 live"), [{
    l: 'Motor',
    v: 98
  }, {
    l: 'Brakes',
    v: 38,
    tone: 'warn'
  }, {
    l: 'Tires',
    v: 76
  }, {
    l: 'Battery harness',
    v: 92
  }].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: i < 3 ? 8 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 100,
      fontSize: 12,
      color: C.fg2
    }
  }, h.l), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 8,
      background: C.hairline,
      borderRadius: 999,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${h.v}%`,
      height: '100%',
      background: h.tone === 'warn' ? '#E08200' : C.mag
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      textAlign: 'right',
      fontFamily: FONT_MONO,
      fontSize: 12,
      fontWeight: 700,
      color: h.tone === 'warn' ? '#E08200' : C.fg1
    }
  }, h.v, "%")))), /*#__PURE__*/React.createElement(Caption, {
    style: {
      marginTop: 22,
      marginBottom: 8
    }
  }, "Service log"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, log.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '12px 14px',
      display: 'flex',
      gap: 10,
      borderBottom: i < log.length - 1 ? `1px solid ${C.hairline}` : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.fg3,
      fontWeight: 600,
      paddingTop: 2
    }
  }, l.date), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 9,
      fontWeight: 700,
      background: l.tag === 'SERVICE' ? C.aub : C.mag,
      color: C.white,
      padding: '2px 6px',
      borderRadius: 4,
      letterSpacing: '0.04em'
    }
  }, l.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_BODY,
      fontWeight: 600,
      fontSize: 13
    }
  }, l.t)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.fg3,
      marginTop: 4
    }
  }, l.who, " \xB7 UGX ", l.cost)))))));
}
Object.assign(window, {
  TicketsQueueScreen,
  InspectionScreen,
  BikeHistoryScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/bike-maintenance/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/browser-window.jsx
try { (() => {
// Chrome.jsx — Simplified Chrome browser window (dark theme, macOS)
// No dependencies, no image assets. All inline styles + inline SVG.

const CHROME_C = {
  barBg: '#202124',
  tabBg: '#35363a',
  text: '#e8eaed',
  dim: '#9aa0a6',
  urlBg: '#282a2d'
};
function ChromeTrafficLights() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '0 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: '#ff5f57'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: '#febc2e'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: '#28c840'
    }
  }));
}

// Single tab (active has curved scoops)
function ChromeTab({
  title = 'New Tab',
  active = false
}) {
  const curve = flip => /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "10",
    viewBox: "0 0 8 10",
    style: {
      position: 'absolute',
      bottom: 0,
      [flip ? 'right' : 'left']: -8,
      transform: flip ? 'scaleX(-1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 10C2 9 6 8 8 0V10H0Z",
    fill: CHROME_C.tabBg
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 34,
      alignSelf: 'flex-end',
      padding: '0 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: active ? CHROME_C.tabBg : 'transparent',
      borderRadius: '8px 8px 0 0',
      minWidth: 120,
      maxWidth: 220,
      fontFamily: 'system-ui, sans-serif',
      fontSize: 12,
      color: active ? CHROME_C.text : CHROME_C.dim
    }
  }, active && curve(false), active && curve(true), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: '#5f6368',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title));
}
function ChromeTabBar({
  tabs = [{
    title: 'New Tab'
  }],
  activeIndex = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 44,
      background: CHROME_C.barBg,
      paddingRight: 8
    }
  }, /*#__PURE__*/React.createElement(ChromeTrafficLights, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      height: '100%',
      paddingLeft: 4,
      flex: 1
    }
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement(ChromeTab, {
    key: i,
    title: t.title,
    active: i === activeIndex
  }))));
}
function ChromeToolbar({
  url = 'example.com'
}) {
  const iconDot = /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: CHROME_C.dim,
      opacity: 0.4
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40,
      background: CHROME_C.tabBg,
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      padding: '0 8px'
    }
  }, iconDot, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 30,
      borderRadius: 15,
      background: CHROME_C.urlBg,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 14px',
      margin: '0 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: CHROME_C.dim,
      opacity: 0.4
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: CHROME_C.text,
      fontSize: 13,
      fontFamily: 'system-ui, sans-serif'
    }
  }, url)), iconDot);
}
function ChromeWindow({
  tabs = [{
    title: 'New Tab'
  }],
  activeIndex = 0,
  url = 'example.com',
  width = 900,
  height = 600,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 10,
      overflow: 'hidden',
      boxShadow: '0 24px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      background: CHROME_C.tabBg
    }
  }, /*#__PURE__*/React.createElement(ChromeTabBar, {
    tabs: tabs,
    activeIndex: activeIndex
  }), /*#__PURE__*/React.createElement(ChromeToolbar, {
    url: url
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: '#fff',
      overflow: 'auto'
    }
  }, children));
}
Object.assign(window, {
  ChromeWindow,
  ChromeTabBar,
  ChromeToolbar,
  ChromeTab,
  ChromeTrafficLights
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/browser-window.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/site.jsx
try { (() => {
// site.jsx — GOGO marketing landing page
// Real product context: electric motorcycles + swap stations + swap officers.
// The + and − in the GOGO mark are read here as charged battery / empty battery.

const M_AUB = '#40103C';
const M_AUB900 = '#1A0A18';
const M_AUB600 = '#553949';
const M_AUB200 = '#EAE3E0';
const M_AUB100 = '#F2EAE7';
const M_AUB50 = '#FAF6F4';
const M_HAIR = '#EAE3E0';
const M_MAG = '#D20C7D';
const M_MAG100 = '#FCE2EE';
const M_WHITE = '#FFFFFF';
const M_FG2 = '#553949';
const M_FG3 = '#7A5C68';
const M_SUCCESS = '#0E8F5A';
const M_FONT_D = "'Roboto', system-ui, sans-serif";
const M_FONT_B = "'Roboto', system-ui, sans-serif";
const M_FONT_M = "ui-monospace, 'SF Mono', Menlo, monospace";
const M_VFS_D = '"wght" 800, "wdth" 110';
const M_VFS_DT = '"wght" 800, "wdth" 100';

// ─── Battery glyph (SVG primitive — repeats everywhere) ───
function BatterySVG({
  size = 80,
  charged = 100,
  color = M_MAG,
  dim = '#3a0c37'
}) {
  // size = body width (terminal sticks out a bit more)
  const bodyW = size;
  const bodyH = size * 1.55;
  const cornerR = size * 0.14;
  const padding = size * 0.10;
  const innerH = bodyH - padding * 2 - size * 0.20; // leave room for label area
  const fillH = innerH * (charged / 100);
  return /*#__PURE__*/React.createElement("svg", {
    width: bodyW,
    height: bodyH + size * 0.10,
    viewBox: `0 0 ${bodyW} ${bodyH + size * 0.10}`
  }, /*#__PURE__*/React.createElement("rect", {
    x: bodyW * 0.30,
    y: "0",
    width: bodyW * 0.40,
    height: size * 0.08,
    rx: size * 0.03,
    fill: M_AUB
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: size * 0.08,
    width: bodyW,
    height: bodyH,
    rx: cornerR,
    fill: M_AUB
  }), /*#__PURE__*/React.createElement("rect", {
    x: padding,
    y: size * 0.08 + padding + (innerH - fillH),
    width: bodyW - padding * 2,
    height: fillH,
    rx: cornerR * 0.5,
    fill: color
  }), /*#__PURE__*/React.createElement("g", {
    transform: `translate(${bodyW / 2}, ${size * 0.08 + padding + innerH + size * 0.18})`
  }, /*#__PURE__*/React.createElement("text", {
    textAnchor: "middle",
    dominantBaseline: "middle",
    fontFamily: M_FONT_D,
    fontWeight: "800",
    fontSize: size * 0.42,
    fill: M_WHITE,
    style: {
      fontVariationSettings: '"wght" 800, "wdth" 110'
    }
  }, charged >= 50 ? '+' : '−')));
}

// ─── Site nav ───
function SiteNav() {
  const linkS = {
    fontFamily: M_FONT_B,
    fontWeight: 500,
    fontSize: 14,
    color: M_AUB900,
    textDecoration: 'none',
    letterSpacing: '0.01em'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 48px',
      background: M_WHITE,
      borderBottom: `1px solid ${M_HAIR}`
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full-colour.png",
    alt: "GOGO",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: linkS
  }, "Riders"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: linkS
  }, "Stations"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: linkS
  }, "Fleets"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: linkS
  }, "Coverage")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      ...linkS,
      fontWeight: 600
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: M_AUB,
      color: M_WHITE,
      border: 'none',
      borderRadius: 999,
      padding: '10px 18px',
      fontFamily: M_FONT_B,
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer'
    }
  }, "Become a rider")));
}

// ─── Marketing landing ───
function SiteHero() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: M_AUB50,
      fontFamily: M_FONT_B,
      color: M_AUB900
    }
  }, /*#__PURE__*/React.createElement(SiteNav, null), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 48px 56px',
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 14px',
      borderRadius: 999,
      background: M_MAG100,
      color: '#95075A',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: M_MAG
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  }, "14 stations live \xB7 Kampala")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: M_FONT_D,
      fontVariationSettings: M_VFS_D,
      fontWeight: 800,
      fontSize: 112,
      lineHeight: 0.9,
      letterSpacing: '-0.04em',
      textTransform: 'uppercase',
      color: M_AUB
    }
  }, "SWAP IN", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: M_MAG
    }
  }, "60"), " SECONDS.", /*#__PURE__*/React.createElement("br", null), "RIDE ALL DAY."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 480,
      marginTop: 22,
      marginBottom: 28,
      fontSize: 17,
      lineHeight: 1.5,
      color: M_FG2
    }
  }, "Pull into any GOGO station. Hand the empty battery to a swap officer. Ride out with a fresh one. No plug, no waiting."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: M_MAG,
      color: M_WHITE,
      border: 'none',
      borderRadius: 999,
      padding: '16px 28px',
      fontFamily: M_FONT_B,
      fontWeight: 700,
      fontSize: 16,
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, "FIND A STATION", /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }))), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'transparent',
      color: M_AUB,
      border: `1px solid ${M_AUB}`,
      borderRadius: 999,
      padding: '15px 24px',
      fontFamily: M_FONT_B,
      fontWeight: 600,
      fontSize: 16,
      cursor: 'pointer'
    }
  }, "Lease a bike")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      marginTop: 40
    }
  }, [['60s', 'swap time'], ['14', 'stations'], ['2,400', 'riders'], ['18M', 'km swapped']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: M_FONT_D,
      fontVariationSettings: M_VFS_DT,
      fontWeight: 800,
      fontSize: 32,
      color: M_AUB,
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.02em'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: M_FG3,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      marginTop: 6
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 380,
      height: 460,
      background: M_AUB,
      borderRadius: 24,
      padding: 24,
      color: M_WHITE,
      boxShadow: '0 24px 60px rgba(64,16,60,0.22)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'rgba(255,255,255,0.55)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  }, "Nakawa station"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: M_FONT_M,
      fontSize: 11,
      color: M_MAG
    }
  }, "\u25CF open")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: M_FONT_D,
      fontVariationSettings: M_VFS_D,
      fontWeight: 800,
      fontSize: 32,
      lineHeight: 1,
      textTransform: 'uppercase',
      letterSpacing: '-0.02em',
      marginTop: 8
    }
  }, "SLOT STATUS"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 10,
      marginTop: 16
    }
  }, [{
    c: 100,
    color: M_MAG
  }, {
    c: 100,
    color: M_MAG
  }, {
    c: 85,
    color: M_MAG
  }, {
    c: 100,
    color: M_MAG
  }, {
    c: 42,
    color: '#E08200'
  }, {
    c: 18,
    color: '#7A5C68'
  }, {
    c: 100,
    color: M_MAG
  }, {
    c: 65,
    color: M_MAG
  }].map((s, i) => {
    const innerH = 78;
    const fillH = innerH * (s.c / 100);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'rgba(255,255,255,0.04)',
        borderRadius: 10,
        padding: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "36",
      height: "56",
      viewBox: "0 0 36 56"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "11",
      y: "0",
      width: "14",
      height: "4",
      rx: "1",
      fill: "rgba(255,255,255,0.4)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "0",
      y: "4",
      width: "36",
      height: "52",
      rx: "5",
      fill: "rgba(255,255,255,0.12)"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: 4 + 4 + (innerH * 0.55 - fillH * 0.55),
      width: "28",
      height: fillH * 0.55,
      rx: "2",
      fill: s.color
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: M_FONT_M,
        fontSize: 11,
        color: 'rgba(255,255,255,0.7)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, s.c, "%"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 'auto',
      paddingTop: 16,
      borderTop: '1px solid rgba(255,255,255,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'rgba(255,255,255,0.45)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "Ready now"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: M_FONT_D,
      fontVariationSettings: M_VFS_DT,
      fontWeight: 800,
      fontSize: 28,
      color: M_WHITE,
      lineHeight: 1.1,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "5", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.4)',
      fontSize: 14
    }
  }, " /8"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'rgba(255,255,255,0.45)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "Swap officer"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: M_FONT_B,
      fontSize: 14,
      fontWeight: 600,
      color: M_WHITE,
      marginTop: 4
    }
  }, "Sarah \xB7 on duty")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 30,
      width: 218,
      background: M_WHITE,
      border: `1px solid ${M_HAIR}`,
      borderRadius: 16,
      padding: 14,
      boxShadow: '0 8px 24px rgba(64,16,60,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(BatterySVG, {
    size: 36,
    charged: 14,
    color: "#7A5C68"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: M_FG3,
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "\u2212 RETURNED"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      marginTop: 3
    }
  }, "14% \u2014 8:42 am")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 200,
      top: 235,
      fontFamily: M_FONT_D,
      fontVariationSettings: M_VFS_D,
      fontWeight: 800,
      fontSize: 32,
      color: M_AUB,
      letterSpacing: '-0.02em'
    }
  }, "\u2193"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 320,
      width: 240,
      background: M_WHITE,
      border: `1px solid ${M_HAIR}`,
      borderRadius: 16,
      padding: 14,
      boxShadow: '0 8px 24px rgba(64,16,60,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(BatterySVG, {
    size: 36,
    charged: 100,
    color: M_MAG
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: M_MAG,
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "+ SWAPPED IN"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      marginTop: 3
    }
  }, "100% \u2014 8:43 am"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: M_FONT_M,
      fontSize: 11,
      color: M_SUCCESS,
      fontWeight: 600,
      marginTop: 2
    }
  }, "+ 58 sec total")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: M_AUB100,
      padding: '64px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: M_FONT_B,
      fontSize: 11,
      fontWeight: 700,
      color: M_MAG,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      marginBottom: 14
    }
  }, "HOW IT WORKS"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      marginBottom: 36,
      fontFamily: M_FONT_D,
      fontVariationSettings: M_VFS_D,
      fontWeight: 800,
      fontSize: 56,
      lineHeight: 1,
      letterSpacing: '-0.03em',
      textTransform: 'uppercase',
      color: M_AUB,
      maxWidth: 700
    }
  }, "NO PLUGS. NO CHARGING. JUST A SWAP."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, [{
    n: '01',
    title: 'RIDE IN',
    body: 'Pull into any GOGO station on your electric motorcycle. Open the GOGO app or just wave at the swap officer.',
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "44",
      height: "44",
      viewBox: "0 0 64 64",
      fill: "none",
      stroke: M_AUB,
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "14",
      cy: "46",
      r: "9"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "46",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M14 46 L26 26 L40 26 L46 36"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M26 26 L36 26"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M50 46 L46 36"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "30",
      y: "20",
      width: "14",
      height: "10",
      rx: "2"
    }))
  }, {
    n: '02',
    title: 'SWAP BATTERY',
    body: "The officer pulls your empty pack and clicks a charged one into the bay. Locked, sealed, signed for. 60 seconds.",
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "44",
      height: "44",
      viewBox: "0 0 64 64",
      fill: "none",
      stroke: M_AUB,
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "8",
      y: "18",
      width: "20",
      height: "28",
      rx: "3"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "14",
      y: "14",
      width: "8",
      height: "4",
      rx: "1"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "36",
      y: "18",
      width: "20",
      height: "28",
      rx: "3"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "42",
      y: "14",
      width: "8",
      height: "4",
      rx: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M28 26 L36 32 L28 38"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M36 38 L28 32 L36 26",
      stroke: M_MAG
    }))
  }, {
    n: '03',
    title: 'RIDE OUT',
    body: 'Back on the road with a fresh 100% pack. Pay per swap — no charging bills, no overnight downtime, no range anxiety.',
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "44",
      height: "44",
      viewBox: "0 0 64 64",
      fill: "none",
      stroke: M_AUB,
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("polygon", {
      points: "34 6 18 36 32 36 30 58 48 26 34 26 34 6",
      fill: M_MAG,
      stroke: M_MAG,
      strokeLinejoin: "round"
    }))
  }].map(step => /*#__PURE__*/React.createElement("div", {
    key: step.n,
    style: {
      background: M_WHITE,
      borderRadius: 16,
      padding: 24,
      border: `1px solid ${M_HAIR}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, step.icon, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: M_FONT_M,
      fontSize: 12,
      fontWeight: 600,
      color: M_FG3,
      letterSpacing: '0.08em'
    }
  }, step.n)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: M_FONT_D,
      fontVariationSettings: M_VFS_DT,
      fontWeight: 800,
      fontSize: 22,
      marginTop: 18,
      color: M_AUB,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em'
    }
  }, step.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      color: M_FG2,
      marginTop: 10
    }
  }, step.body))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 48px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: M_AUB,
      color: M_WHITE,
      borderRadius: 24,
      padding: 36,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: M_MAG,
      textTransform: 'uppercase',
      letterSpacing: '0.12em'
    }
  }, "FOR RIDERS"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '14px 0 16px',
      fontFamily: M_FONT_D,
      fontVariationSettings: M_VFS_D,
      fontWeight: 800,
      fontSize: 40,
      lineHeight: 0.95,
      textTransform: 'uppercase',
      letterSpacing: '-0.03em'
    }
  }, "OUR", /*#__PURE__*/React.createElement("br", null), "BIKES."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 360,
      color: 'rgba(255,255,255,0.7)',
      fontSize: 14,
      lineHeight: 1.5,
      marginBottom: 22
    }
  }, "Purpose-built electric motorcycles for boda riders. Same range as petrol on a single swap. Lease, own, or pay-as-you-ride."), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 360 140",
    width: "100%",
    style: {
      marginTop: 8,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "100",
    r: "28",
    fill: "none",
    stroke: "rgba(255,255,255,0.9)",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "100",
    r: "10",
    fill: "none",
    stroke: "rgba(255,255,255,0.5)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "290",
    cy: "100",
    r: "28",
    fill: "none",
    stroke: "rgba(255,255,255,0.9)",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "290",
    cy: "100",
    r: "10",
    fill: "none",
    stroke: "rgba(255,255,255,0.5)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M60,100 L130,50 L240,50 L290,100",
    stroke: "rgba(255,255,255,0.9)",
    strokeWidth: "3",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "155",
    y: "40",
    width: "70",
    height: "36",
    rx: "6",
    fill: M_MAG
  }), /*#__PURE__*/React.createElement("rect", {
    x: "180",
    y: "34",
    width: "20",
    height: "6",
    rx: "2",
    fill: M_MAG
  }), /*#__PURE__*/React.createElement("text", {
    x: "190",
    y: "64",
    fill: M_WHITE,
    fontFamily: M_FONT_D,
    fontWeight: "800",
    fontSize: "22",
    textAnchor: "middle",
    style: {
      fontVariationSettings: '"wght" 800, "wdth" 110'
    }
  }, "+"), /*#__PURE__*/React.createElement("path", {
    d: "M115,55 L155,55 L150,46 L120,46 Z",
    fill: "rgba(255,255,255,0.95)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M240,50 L260,30 M255,30 L268,30",
    stroke: "rgba(255,255,255,0.9)",
    strokeWidth: "3",
    strokeLinecap: "round",
    fill: "none"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, [['120', 'km / swap'], ['1.6', 'sec 0–30'], ['UGX 6k', '/ swap']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: M_FONT_D,
      fontVariationSettings: M_VFS_DT,
      fontWeight: 800,
      fontSize: 24,
      color: M_WHITE,
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.02em'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'rgba(255,255,255,0.55)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      marginTop: 6
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: M_WHITE,
      border: `1px solid ${M_HAIR}`,
      borderRadius: 24,
      padding: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: M_MAG,
      textTransform: 'uppercase',
      letterSpacing: '0.12em'
    }
  }, "OUR NETWORK"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '14px 0 16px',
      fontFamily: M_FONT_D,
      fontVariationSettings: M_VFS_D,
      fontWeight: 800,
      fontSize: 40,
      lineHeight: 0.95,
      textTransform: 'uppercase',
      letterSpacing: '-0.03em',
      color: M_AUB
    }
  }, "SWAP", /*#__PURE__*/React.createElement("br", null), "STATIONS."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 360,
      color: M_FG2,
      fontSize: 14,
      lineHeight: 1.5,
      marginBottom: 18
    }
  }, "14 stations across Kampala \u2014 and growing. Every station is staffed by a trained swap officer who handles the battery so you don't have to."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 180,
      borderRadius: 12,
      background: M_AUB100,
      backgroundImage: `linear-gradient(to right, rgba(64,16,60,0.06) 1px, transparent 1px),` + `linear-gradient(to bottom, rgba(64,16,60,0.06) 1px, transparent 1px)`,
      backgroundSize: '24px 24px',
      border: `1px solid ${M_HAIR}`,
      overflow: 'hidden'
    }
  }, [[40, 60], [85, 35], [110, 80], [60, 120], [145, 50], [180, 110], [215, 45], [240, 130], [285, 70], [320, 100], [355, 50], [380, 130], [400, 75], [420, 110]].map(([x, y], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width: 10,
      height: 10,
      borderRadius: 999,
      background: i === 6 ? M_MAG : M_AUB,
      border: `2px solid ${M_WHITE}`,
      boxShadow: i === 6 ? '0 0 0 6px rgba(210,12,125,0.18)' : 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 230,
      top: 18,
      fontFamily: M_FONT_M,
      fontSize: 10,
      fontWeight: 600,
      color: M_MAG,
      background: M_WHITE,
      padding: '2px 8px',
      borderRadius: 999,
      border: `1px solid ${M_MAG}`
    }
  }, "Nakawa \xB7 open")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginTop: 22
    }
  }, [['14', 'live now'], ['+8', 'this quarter'], ['24/7', 'staffed']].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: M_FONT_D,
      fontVariationSettings: M_VFS_DT,
      fontWeight: 800,
      fontSize: 24,
      color: M_AUB,
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.02em'
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: M_FG3,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      marginTop: 6
    }
  }, l)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: M_AUB900,
      color: M_WHITE,
      padding: '36px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: M_FONT_D,
      fontVariationSettings: M_VFS_D,
      fontWeight: 800,
      fontSize: 28,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em',
      maxWidth: 700
    }
  }, "Empty in, ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: M_MAG
    }
  }, "+"), " charged out. ", /*#__PURE__*/React.createElement("br", null), "The grid that pays for the next ride."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: M_WHITE,
      textDecoration: 'none',
      fontFamily: M_FONT_B,
      fontWeight: 600,
      fontSize: 14,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      borderBottom: `1px solid ${M_MAG}`,
      paddingBottom: 4
    }
  }, "See coverage map \u2192")));
}
Object.assign(window, {
  SiteHero,
  SiteNav,
  BatterySVG
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/site.jsx", error: String((e && e.message) || e) }); }

// ui_kits/owner/screens.jsx
try { (() => {
// owner/screens.jsx — fleet owner app
// For boda owners who lease 1-5 bikes to riders & earn per swap.

// ═══════════════════════════════════════════════════════
// 01 FLEET — today's earnings + bike list
// ═══════════════════════════════════════════════════════
function FleetScreen() {
  const bikes = [{
    plate: 'UAJ 027F',
    rider: 'Musa Kato',
    km: 64,
    ugx: '38k',
    battery: 28,
    status: 'riding'
  }, {
    plate: 'UAH 119B',
    rider: 'Jane Akello',
    km: 42,
    ugx: '24k',
    battery: 78,
    status: 'riding'
  }, {
    plate: 'UAK 802L',
    rider: 'David Okello',
    km: 0,
    ugx: '0',
    battery: 100,
    status: 'idle'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(AppTopBar, {
    leading: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "6",
      x2: "21",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "12",
      x2: "21",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "3",
      y1: "18",
      x2: "14",
      y2: "18"
    })),
    title: "MY FLEET",
    trailing: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 32,
        borderRadius: 999,
        background: C.aub,
        color: C.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: FONT_DISPLAY,
        fontVariationSettings: VFS_DISPLAY,
        fontWeight: 800,
        fontSize: 13
      }
    }, "JS")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.aub,
      borderRadius: 20,
      padding: 22,
      color: C.white,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(PlusMinusBg, {
    color: "rgba(255,255,255,0.04)",
    size: 20,
    gap: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.55)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em'
    }
  }, "TODAY \xB7 3 BIKES"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 76,
      lineHeight: 0.95,
      marginTop: 6,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.04em'
    }
  }, "62k", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      color: 'rgba(255,255,255,0.55)',
      marginLeft: 6
    }
  }, "UGX")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginTop: 18,
      paddingTop: 14,
      borderTop: '1px solid rgba(255,255,255,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontWeight: 600
    }
  }, "Distance"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 700,
      fontSize: 18,
      marginTop: 4
    }
  }, "106 km")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontWeight: 600
    }
  }, "Swaps"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 700,
      fontSize: 18,
      marginTop: 4
    }
  }, "5")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'rgba(255,255,255,0.5)',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      fontWeight: 600
    }
  }, "vs avg"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontWeight: 700,
      fontSize: 14,
      marginTop: 6,
      color: '#F08FBE'
    }
  }, "+ 14%"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      padding: '14px 16px',
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Caption, null, "This week"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.fg3
    }
  }, "UGX 384k")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 6,
      height: 56
    }
  }, [34, 52, 41, 68, 58, 71, 62].map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: `${v}%`,
      background: i === 6 ? C.mag : C.aub,
      borderRadius: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 9,
      color: C.fg3
    }
  }, ['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginTop: 22,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Caption, null, "Bikes"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.fg3
    }
  }, "2 active \xB7 1 idle")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, bikes.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      background: b.status === 'riding' ? 'rgba(210,12,125,0.08)' : C.aub50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: b.status === 'riding' ? C.mag : C.fg3,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "17",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "17",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 17 L10 9 L14 9 L17 14"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY_TIGHT,
      fontWeight: 800,
      fontSize: 16,
      color: C.aub,
      letterSpacing: '-0.01em'
    }
  }, b.plate), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.fg3,
      marginTop: 2
    }
  }, b.rider))), b.status === 'riding' ? /*#__PURE__*/React.createElement(Pill, {
    tone: "mag"
  }, "\u25CF live") : /*#__PURE__*/React.createElement(Pill, {
    tone: "soft"
  }, "idle")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 14,
      paddingTop: 12,
      borderTop: `1px solid ${C.hairline}`
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: C.fg3,
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "Today"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 20,
      color: C.aub,
      marginTop: 4,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.02em'
    }
  }, b.ugx, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: C.fg3,
      marginLeft: 3
    }
  }, "UGX"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: C.fg3,
      textTransform: 'uppercase',
      letterSpacing: '0.08em'
    }
  }, "Km"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 20,
      color: C.aub,
      marginTop: 4,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.02em'
    }
  }, b.km)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(BatterySVG, {
    size: 22,
    charged: b.battery
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 12,
      color: b.battery >= 40 ? C.fg2 : '#E08200',
      fontWeight: 600
    }
  }, b.battery, "%"))))))));
}

// ═══════════════════════════════════════════════════════
// 02 BIKE DETAIL — one bike's live status
// ═══════════════════════════════════════════════════════
function BikeDetailScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(AppTopBar, {
    title: "UAJ 027F",
    leading: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "15 18 9 12 15 6"
    })),
    trailing: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82M9.5 4.21a1.65 1.65 0 0 0 1 1.51"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 180,
      position: 'relative',
      background: '#F2EAE7',
      backgroundImage: 'linear-gradient(to right, rgba(64,16,60,0.06) 1px, transparent 1px),' + 'linear-gradient(to bottom, rgba(64,16,60,0.06) 1px, transparent 1px)',
      backgroundSize: '24px 24px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 390 180",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M40,140 C 120,140 160,80 220,60",
    stroke: C.mag,
    strokeWidth: "3",
    fill: "none",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 40,
      top: 134,
      width: 14,
      height: 14,
      borderRadius: 999,
      background: C.aub,
      border: `3px solid ${C.white}`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 220,
      top: 54,
      width: 20,
      height: 20,
      borderRadius: 999,
      background: C.mag,
      border: `3px solid ${C.white}`,
      boxShadow: '0 0 0 8px rgba(210,12,125,0.20)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 16,
      top: 16,
      background: C.white,
      padding: '6px 10px',
      borderRadius: 999,
      fontFamily: FONT_MONO,
      fontSize: 10,
      fontWeight: 700,
      color: C.aub,
      boxShadow: '0 2px 8px rgba(64,16,60,0.10)'
    }
  }, "\u25CF live \xB7 Kololo")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '14px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      padding: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: C.mag,
      color: C.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY,
      fontWeight: 800,
      fontSize: 15
    }
  }, "MK"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontWeight: 700,
      fontSize: 14
    }
  }, "Musa Kato"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.fg3,
      marginTop: 2
    }
  }, "Riding since 06:08 \xB7 \u2605 4.9")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      padding: '6px 14px',
      fontSize: 12
    }
  }, "Call")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(Caption, null, "Today"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 32,
      color: C.aub,
      lineHeight: 1,
      marginTop: 6,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.03em'
    }
  }, "38k", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: C.fg3,
      marginLeft: 3
    }
  }, "UGX")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: '#0E8F5A',
      marginTop: 6,
      fontWeight: 600
    }
  }, "+ 12% vs target")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(Caption, null, "Battery"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(BatterySVG, {
    size: 32,
    charged: 28
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 24,
      color: '#E08200',
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.02em'
    }
  }, "28%"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 10,
      color: C.fg3,
      marginTop: 2
    }
  }, "GG\u20110421"))))), /*#__PURE__*/React.createElement(Caption, {
    style: {
      marginTop: 22,
      marginBottom: 8
    }
  }, "Bike health"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      padding: 14
    }
  }, [{
    l: 'Motor',
    v: '98%',
    tone: 'good'
  }, {
    l: 'Brakes',
    v: '76%',
    tone: 'warn'
  }, {
    l: 'Tires',
    v: '88%',
    tone: 'good'
  }, {
    l: 'Last service',
    v: '14 days',
    tone: 'good'
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '6px 0',
      borderBottom: i < 3 ? `1px solid ${C.hairline}` : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: C.fg2
    }
  }, r.l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 13,
      fontWeight: 700,
      color: r.tone === 'good' ? '#0E8F5A' : '#E08200'
    }
  }, r.v)))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    full: true,
    style: {
      marginTop: 14
    }
  }, "+ Schedule service")));
}

// ═══════════════════════════════════════════════════════
// 03 SETTLEMENT — weekly payout
// ═══════════════════════════════════════════════════════
function SettlementScreen() {
  const bikes = [{
    plate: 'UAJ 027F',
    rider: 'Musa K.',
    gross: '186,000',
    share: '74,400'
  }, {
    plate: 'UAH 119B',
    rider: 'Jane A.',
    gross: '142,000',
    share: '56,800'
  }, {
    plate: 'UAK 802L',
    rider: 'David O.',
    gross: '56,000',
    share: '22,400'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(AppTopBar, {
    title: "PAYOUT",
    leading: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("polyline", {
      points: "15 18 9 12 15 6"
    })),
    trailing: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "16",
      x2: "12.01",
      y2: "16"
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '4px 20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontSize: 11,
      fontWeight: 700,
      color: C.fg3,
      textTransform: 'uppercase',
      letterSpacing: '0.12em'
    }
  }, "WEEK 19 \xB7 MAY 6 \u2013 12"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 76,
      lineHeight: 0.95,
      color: C.aub,
      letterSpacing: '-0.04em',
      marginTop: 4,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "153,600"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 13,
      color: C.fg2,
      marginTop: 4
    }
  }, "UGX \xB7 your 40% share"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Caption, null, "Revenue split"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.fg3
    }
  }, "UGX 384k gross")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: 14,
      borderRadius: 999,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 40,
      background: C.aub
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 50,
      background: C.mag
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 10,
      background: C.aub400
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 10,
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 8,
      height: 8,
      background: C.aub,
      borderRadius: 2,
      marginRight: 6
    }
  }), "Owner \xB7 40%"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 8,
      height: 8,
      background: C.mag,
      borderRadius: 2,
      marginRight: 6
    }
  }), "Rider \xB7 50%"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 8,
      height: 8,
      background: C.aub400,
      borderRadius: 2,
      marginRight: 6
    }
  }), "GOGO \xB7 10%"))), /*#__PURE__*/React.createElement(Caption, {
    style: {
      marginTop: 22,
      marginBottom: 8
    }
  }, "Per bike"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, bikes.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '14px 16px',
      borderBottom: i < bikes.length - 1 ? `1px solid ${C.hairline}` : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY_TIGHT,
      fontWeight: 800,
      fontSize: 16,
      color: C.aub,
      letterSpacing: '-0.01em'
    }
  }, b.plate), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.fg3,
      marginTop: 2
    }
  }, b.rider, " \xB7 gross UGX ", b.gross)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 20,
      color: C.mag,
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.02em'
    }
  }, "+ ", b.share), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 10,
      color: C.fg3,
      marginTop: 4
    }
  }, "UGX")))))), /*#__PURE__*/React.createElement(Caption, {
    style: {
      marginTop: 22,
      marginBottom: 8
    }
  }, "Payout to"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      padding: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 28,
      borderRadius: 6,
      background: C.aub,
      color: C.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY_TIGHT,
      fontWeight: 800,
      fontSize: 10
    }
  }, "MTN"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, "MTN Mobile Money"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: C.fg3,
      marginTop: 2
    }
  }, "\xB7\u2022\xB7\u2022\xB7\u2022 0427 \xB7 J. SSEMUGOOMA"))), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    full: true,
    style: {
      marginTop: 14
    }
  }, "Send \xB7 UGX 153,600")));
}
Object.assign(window, {
  FleetScreen,
  BikeDetailScreen,
  SettlementScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/owner/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ride-hailing/screens.jsx
try { (() => {
// ride-hailing/screens.jsx — passenger app for hailing a GOGO boda

// ═══════════════════════════════════════════════════════
// 01 HAIL — where to?
// ═══════════════════════════════════════════════════════
function HailScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      background: '#F2EAE7',
      backgroundImage: 'linear-gradient(to right, rgba(64,16,60,0.06) 1px, transparent 1px),' + 'linear-gradient(to bottom, rgba(64,16,60,0.06) 1px, transparent 1px)',
      backgroundSize: '28px 28px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 390 500",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0,260 C 80,260 120,200 200,200 S 320,260 390,260",
    stroke: "rgba(64,16,60,0.14)",
    strokeWidth: "3",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M180,0 L180,500",
    stroke: "rgba(64,16,60,0.10)",
    strokeWidth: "2",
    fill: "none"
  })), [{
    x: 80,
    y: 240
  }, {
    x: 240,
    y: 180
  }, {
    x: 300,
    y: 280
  }, {
    x: 140,
    y: 320
  }].map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      left: b.x,
      top: b.y,
      width: 28,
      height: 28,
      borderRadius: 999,
      background: C.aub,
      color: C.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(64,16,60,0.25)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "17",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "17",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 17 L10 9 L14 9 L17 14"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 240,
      transform: 'translate(-50%, -100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.mag,
      color: C.white,
      padding: '8px 14px',
      borderRadius: 999,
      fontFamily: FONT_BODY,
      fontWeight: 700,
      fontSize: 13,
      boxShadow: '0 8px 24px rgba(210,12,125,0.35)'
    }
  }, "You"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 999,
      background: C.mag,
      border: `3px solid ${C.white}`,
      margin: '4px auto 0',
      boxShadow: '0 0 0 8px rgba(210,12,125,0.18)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: C.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(64,16,60,0.10)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: C.aub,
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "14",
    y2: "18"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: C.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(64,16,60,0.10)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: C.aub,
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      padding: '14px 20px 28px',
      boxShadow: '0 -12px 28px rgba(64,16,60,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 4,
      background: C.hairline,
      borderRadius: 999,
      margin: '0 auto 14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY,
      fontWeight: 800,
      fontSize: 32,
      color: C.aub,
      lineHeight: 1,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase'
    }
  }, "WHERE TO?"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      background: C.bg,
      border: `1px solid ${C.hairline}`,
      borderRadius: 12,
      padding: '12px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: C.fg3,
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_BODY,
      fontSize: 14,
      color: C.fg3
    }
  }, "Search destination")), /*#__PURE__*/React.createElement(Caption, {
    style: {
      marginTop: 18,
      marginBottom: 6
    }
  }, "Recent"), [{
    name: 'Acacia Mall',
    sub: 'Kololo · 2.4 km',
    icon: '★'
  }, {
    name: 'Makerere University',
    sub: 'Wandegeya · 4.1 km',
    icon: '◷'
  }, {
    name: 'Garden City',
    sub: 'Kampala Road · 5.2 km',
    icon: '◷'
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: C.aub50,
      color: C.aub,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FONT_DISPLAY,
      fontWeight: 800,
      fontSize: 14
    }
  }, r.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontWeight: 600,
      fontSize: 14
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontSize: 11,
      color: C.fg3,
      marginTop: 2
    }
  }, r.sub))))));
}

// ═══════════════════════════════════════════════════════
// 02 MATCH — rider on the way
// ═══════════════════════════════════════════════════════
function MatchScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      background: '#F2EAE7',
      backgroundImage: 'linear-gradient(to right, rgba(64,16,60,0.06) 1px, transparent 1px),' + 'linear-gradient(to bottom, rgba(64,16,60,0.06) 1px, transparent 1px)',
      backgroundSize: '28px 28px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 390 380",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M40,300 Q 140,260 200,200",
    stroke: C.mag,
    strokeWidth: "4",
    fill: "none",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 40,
      top: 290,
      width: 36,
      height: 36,
      borderRadius: 999,
      background: C.aub,
      color: C.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(64,16,60,0.3)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "17",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "17",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 17 L10 9 L14 9 L17 14"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 200,
      top: 200,
      width: 16,
      height: 16,
      borderRadius: 999,
      background: C.mag,
      border: `3px solid ${C.white}`,
      boxShadow: '0 0 0 8px rgba(210,12,125,0.18)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.white,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      padding: '14px 20px 24px',
      boxShadow: '0 -12px 28px rgba(64,16,60,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY,
      fontWeight: 800,
      fontSize: 22,
      color: C.aub,
      letterSpacing: '-0.02em'
    }
  }, "ON THE WAY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 32,
      color: C.mag,
      lineHeight: 1,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.03em'
    }
  }, "3", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: C.fg3,
      marginLeft: 3
    }
  }, "min"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 999,
      background: C.aub,
      color: C.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY,
      fontWeight: 800,
      fontSize: 22
    }
  }, "MK"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontWeight: 700,
      fontSize: 16
    }
  }, "Musa Kato"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 12,
      color: C.fg3,
      marginTop: 2
    }
  }, "\u2605 4.9 \xB7 2,184 rides")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 999,
      background: C.aub,
      color: C.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.95.37 1.88.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.93.35 1.86.59 2.81.72a2 2 0 0 1 1.72 2z"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 999,
      background: C.aub50,
      color: C.aub,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      background: C.aub,
      color: C.white,
      borderRadius: 12,
      padding: 14,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.55)',
      textTransform: 'uppercase',
      letterSpacing: '0.12em'
    }
  }, "Bike"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY,
      fontWeight: 800,
      fontSize: 24,
      marginTop: 4,
      letterSpacing: '-0.02em'
    }
  }, "UAJ 027F")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.55)',
      textTransform: 'uppercase',
      letterSpacing: '0.12em'
    }
  }, "Code"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 24,
      marginTop: 4,
      color: C.mag,
      letterSpacing: '-0.02em'
    }
  }, "4 2 7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontFamily: FONT_BODY,
      fontSize: 12,
      color: C.fg3,
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "To ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: C.fg1
    }
  }, "Acacia Mall"), " \xB7 2.4 km"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: FONT_MONO,
      color: C.aub,
      fontWeight: 700
    }
  }, "UGX 4,200")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    full: true,
    style: {
      marginTop: 12,
      color: C.fg2
    }
  }, "Cancel")));
}

// ═══════════════════════════════════════════════════════
// 03 ACTIVE TRIP — in motion
// ═══════════════════════════════════════════════════════
function ActiveTripScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.bg,
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: 'relative',
      background: '#F2EAE7',
      backgroundImage: 'linear-gradient(to right, rgba(64,16,60,0.06) 1px, transparent 1px),' + 'linear-gradient(to bottom, rgba(64,16,60,0.06) 1px, transparent 1px)',
      backgroundSize: '28px 28px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 390 380",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M40,300 C 100,260 160,220 220,180 S 340,80 380,40",
    stroke: C.aub200,
    strokeWidth: "4",
    fill: "none",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40,300 C 100,260 160,220 220,180",
    stroke: C.mag,
    strokeWidth: "4",
    fill: "none",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 30,
      top: 290,
      width: 14,
      height: 14,
      borderRadius: 999,
      background: C.aub,
      border: `3px solid ${C.white}`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 215,
      top: 170,
      width: 36,
      height: 36,
      borderRadius: 999,
      background: C.mag,
      color: C.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 14px rgba(210,12,125,0.4)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "17",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "17",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 17 L10 9 L14 9 L17 14"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 30,
      top: 30,
      width: 18,
      height: 18,
      borderRadius: 999,
      background: C.aub,
      border: `4px solid ${C.white}`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      background: C.white,
      padding: '8px 14px',
      borderRadius: 999,
      fontFamily: FONT_MONO,
      fontSize: 11,
      fontWeight: 700,
      color: C.aub,
      boxShadow: '0 4px 12px rgba(64,16,60,0.10)'
    }
  }, "\u25CF TRIP IN PROGRESS")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.aub,
      color: C.white,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      padding: '18px 20px 24px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(PlusMinusBg, {
    color: "rgba(255,255,255,0.04)",
    size: 20,
    gap: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.55)',
      textTransform: 'uppercase',
      letterSpacing: '0.12em'
    }
  }, "ETA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 52,
      lineHeight: 1,
      marginTop: 4,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.04em'
    }
  }, "7", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      color: 'rgba(255,255,255,0.55)'
    }
  }, " min"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: 'rgba(255,255,255,0.55)',
      textTransform: 'uppercase',
      letterSpacing: '0.12em'
    }
  }, "Fare"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DATA,
      fontWeight: 800,
      fontSize: 36,
      color: C.mag,
      lineHeight: 1,
      marginTop: 4,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.03em'
    }
  }, "4,200"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: 'rgba(255,255,255,0.55)',
      marginTop: 4
    }
  }, "UGX"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      paddingTop: 14,
      borderTop: '1px solid rgba(255,255,255,0.10)',
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 999,
      background: 'rgba(255,255,255,0.4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 2,
      height: 32,
      background: 'rgba(255,255,255,0.2)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 999,
      background: C.mag
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontWeight: 600,
      fontSize: 13,
      color: 'rgba(255,255,255,0.85)'
    }
  }, "Kololo \xB7 7th st"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: 'rgba(255,255,255,0.55)',
      marginTop: 2
    }
  }, "picked up \xB7 06:12"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontFamily: FONT_BODY,
      fontWeight: 700,
      fontSize: 13
    }
  }, "Acacia Mall"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: 'rgba(255,255,255,0.55)',
      marginTop: 2
    }
  }, "2.4 km \xB7 ETA 06:19"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: 12,
      background: 'rgba(255,255,255,0.06)',
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 999,
      background: C.mag,
      color: C.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FONT_DISPLAY,
      fontVariationSettings: VFS_DISPLAY,
      fontWeight: 800,
      fontSize: 15
    }
  }, "MK"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_BODY,
      fontWeight: 700,
      fontSize: 14
    }
  }, "Musa Kato"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: FONT_MONO,
      fontSize: 11,
      color: 'rgba(255,255,255,0.55)',
      marginTop: 2
    }
  }, "UAJ 027F \xB7 \u2605 4.9")), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    style: {
      padding: '8px 14px',
      fontSize: 12
    }
  }, "Share trip")))));
}
Object.assign(window, {
  HailScreen,
  MatchScreen,
  ActiveTripScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ride-hailing/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/swap-officer/browser-window.jsx
try { (() => {
// Chrome.jsx — Simplified Chrome browser window (dark theme, macOS)
// No dependencies, no image assets. All inline styles + inline SVG.

const CHROME_C = {
  barBg: '#202124',
  tabBg: '#35363a',
  text: '#e8eaed',
  dim: '#9aa0a6',
  urlBg: '#282a2d'
};
function ChromeTrafficLights() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '0 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: '#ff5f57'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: '#febc2e'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: '#28c840'
    }
  }));
}

// Single tab (active has curved scoops)
function ChromeTab({
  title = 'New Tab',
  active = false
}) {
  const curve = flip => /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "10",
    viewBox: "0 0 8 10",
    style: {
      position: 'absolute',
      bottom: 0,
      [flip ? 'right' : 'left']: -8,
      transform: flip ? 'scaleX(-1)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 10C2 9 6 8 8 0V10H0Z",
    fill: CHROME_C.tabBg
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 34,
      alignSelf: 'flex-end',
      padding: '0 12px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: active ? CHROME_C.tabBg : 'transparent',
      borderRadius: '8px 8px 0 0',
      minWidth: 120,
      maxWidth: 220,
      fontFamily: 'system-ui, sans-serif',
      fontSize: 12,
      color: active ? CHROME_C.text : CHROME_C.dim
    }
  }, active && curve(false), active && curve(true), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: '#5f6368',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title));
}
function ChromeTabBar({
  tabs = [{
    title: 'New Tab'
  }],
  activeIndex = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: 44,
      background: CHROME_C.barBg,
      paddingRight: 8
    }
  }, /*#__PURE__*/React.createElement(ChromeTrafficLights, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      height: '100%',
      paddingLeft: 4,
      flex: 1
    }
  }, tabs.map((t, i) => /*#__PURE__*/React.createElement(ChromeTab, {
    key: i,
    title: t.title,
    active: i === activeIndex
  }))));
}
function ChromeToolbar({
  url = 'example.com'
}) {
  const iconDot = /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: CHROME_C.dim,
      opacity: 0.4
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40,
      background: CHROME_C.tabBg,
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      padding: '0 8px'
    }
  }, iconDot, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 30,
      borderRadius: 15,
      background: CHROME_C.urlBg,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 14px',
      margin: '0 6px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: CHROME_C.dim,
      opacity: 0.4
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: CHROME_C.text,
      fontSize: 13,
      fontFamily: 'system-ui, sans-serif'
    }
  }, url)), iconDot);
}
function ChromeWindow({
  tabs = [{
    title: 'New Tab'
  }],
  activeIndex = 0,
  url = 'example.com',
  width = 900,
  height = 600,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 10,
      overflow: 'hidden',
      boxShadow: '0 24px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      background: CHROME_C.tabBg
    }
  }, /*#__PURE__*/React.createElement(ChromeTabBar, {
    tabs: tabs,
    activeIndex: activeIndex
  }), /*#__PURE__*/React.createElement(ChromeToolbar, {
    url: url
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: '#fff',
      overflow: 'auto'
    }
  }, children));
}
Object.assign(window, {
  ChromeWindow,
  ChromeTabBar,
  ChromeToolbar,
  ChromeTab,
  ChromeTrafficLights
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/swap-officer/browser-window.jsx", error: String((e && e.message) || e) }); }

// ui_kits/swap-officer/dark-components.jsx
try { (() => {
// Shared dark-theme primitives for the GOGO swap-officer + swap-ops web apps.
// These intentionally do NOT reuse the light-theme mobile components — the
// production web tools live on a deep-navy surface, with GOGO magenta as the
// single brand accent and low-sat pastel chips for the action library.

const DC = {
  // Surfaces
  bg: '#05070F',
  // page (deepest)
  bg2: '#0A0E1C',
  // section panels
  surface: '#0F1525',
  // card resting
  surface2: '#161D31',
  // card hover / nav active
  surface3: '#1F2742',
  // input fields
  hairline: '#1B233A',
  // dividers
  hairline2: '#2A3450',
  // stronger dividers / focused fields

  // Foreground
  fg1: '#F4F5FA',
  fg2: '#B7BDD0',
  fg3: '#7B83A0',
  fg4: '#525A75',
  // Brand
  aub: '#40103C',
  mag: '#D20C7D',
  magL: '#F08FBE',
  magXL: '#FCE2EE',
  // Status
  ok: '#22C55E',
  warn: '#F59E0B',
  bad: '#F43F5E',
  info: '#38BDF8',
  // Pastel chips — used as icon backgrounds across the action library.
  // Each is a tinted dark pastel so it reads as a colored chip on the
  // deep-navy surface without going neon.
  chip: {
    blue: {
      bg: 'rgba(96,165,250,0.16)',
      fg: '#93C5FD'
    },
    yellow: {
      bg: 'rgba(251,191,36,0.18)',
      fg: '#FCD34D'
    },
    violet: {
      bg: 'rgba(167,139,250,0.20)',
      fg: '#C4B5FD'
    },
    peach: {
      bg: 'rgba(251,146,60,0.18)',
      fg: '#FDBA74'
    },
    teal: {
      bg: 'rgba(45,212,191,0.18)',
      fg: '#5EEAD4'
    },
    rose: {
      bg: 'rgba(244,114,182,0.22)',
      fg: '#FBCFE8'
    },
    mint: {
      bg: 'rgba(52,211,153,0.18)',
      fg: '#86EFAC'
    },
    slate: {
      bg: 'rgba(148,163,184,0.16)',
      fg: '#CBD5E1'
    },
    cream: {
      bg: 'rgba(250,232,210,0.18)',
      fg: '#F5DEB3'
    },
    pink: {
      bg: 'rgba(210,12,125,0.18)',
      fg: '#F08FBE'
    },
    aubL: {
      bg: 'rgba(64,16,60,0.55)',
      fg: '#F08FBE'
    }
  }
};
const DFONT_DISPLAY = "'Roboto', system-ui, sans-serif";
const DFONT_BODY = "'Roboto', system-ui, sans-serif";
const DFONT_MONO = "ui-monospace, 'SF Mono', Menlo, Consolas, monospace";
const DVFS_DISPLAY = '"wght" 800, "wdth" 110';
const DVFS_DISPLAY_TIGHT = '"wght" 800, "wdth" 100';
const DVFS_DATA = '"wght" 700, "wdth" 100';
const DVFS_BODY = '"wght" 400, "wdth" 100';
const DVFS_BODY_BOLD = '"wght" 600, "wdth" 100';

// ─── Inline-SVG icon (lucide-style stroke, currentColor) ──────────────
function I({
  d,
  size = 20,
  sw = 1.75,
  children
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, children || /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}

// A library of the icons we actually use, all in lucide proportions
const IK = {
  swap: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
    points: "17 1 21 5 17 9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 11V9a4 4 0 0 1 4-4h14"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 23 3 19 7 15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 13v2a4 4 0 0 1-4 4H3"
  })),
  checklist: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 7H3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 5l-4 4-2-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 12H3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 10l-4 4-2-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 17H3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 15l-4 4-2-2"
  })),
  card: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "6",
    width: "20",
    height: "12",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 11h20"
  })),
  truck: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 18V6h6l3 5v7h-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 18H3V6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "18",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "18",
    r: "2"
  })),
  warning: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  })),
  history: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 1 0 3-6.7L3 8"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "3 3 3 8 8 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7v5l3 2"
  })),
  user: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"
  })),
  ticket: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "7",
    x2: "9",
    y2: "17"
  })),
  home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 12L12 4l9 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 10v10h14V10"
  })),
  grid: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7",
    rx: "1"
  })),
  bike: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "5.5",
    cy: "17.5",
    r: "3.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18.5",
    cy: "17.5",
    r: "3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 6a1 1 0 1 0 0-2h-1l-2 3h-4l-2 4 4 4h4l3-4-2-3"
  })),
  bolt: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
  })),
  check: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "9 12 11 14 15 10"
  })),
  doc: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "14 2 14 8 20 8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "13",
    x2: "16",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "17",
    x2: "13",
    y2: "17"
  })),
  cam: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M23 7l-7 5 7 5V7z"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "5",
    width: "15",
    height: "14",
    rx: "2"
  })),
  wifi: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 13a10 10 0 0 1 14 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 16.5a5 5 0 0 1 7 0"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12.01",
    y2: "20"
  })),
  panel: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "3",
    x2: "9",
    y2: "21"
  })),
  chev: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })),
  chevD: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })),
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.5",
    y2: "16.5"
  })),
  lock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "11",
    width: "16",
    height: "10",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11V7a4 4 0 0 1 8 0v4"
  })),
  clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 6 12 12 16 14"
  })),
  qr: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "3",
    height: "3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "18",
    y: "18",
    width: "3",
    height: "3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "18",
    width: "3",
    height: "3"
  })),
  dollar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "23"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
  })),
  trend: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "16 7 22 7 22 13"
  })),
  battery: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "7",
    width: "18",
    height: "10",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "22",
    y1: "11",
    x2: "22",
    y2: "13"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "9",
    width: "10",
    height: "6",
    rx: "1"
  })),
  station: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "8",
    width: "14",
    height: "13",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 8l3-5h8l3 5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "12",
    width: "8",
    height: "5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 12h2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2"
  })),
  users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "9",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 21v-1a5 5 0 0 0-4-4.9"
  })),
  alert: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10.3 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.4 0z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  })),
  filter: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polygon", {
    points: "22 3 2 3 10 12.5 10 19 14 21 14 12.5 22 3"
  })),
  more: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.5"
  })),
  pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  download: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 10 12 15 17 10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "3"
  }))
};

// ─── GOGO wordmark (re-uses brand asset) ──────────────────────────────
function GogoMark({
  height = 26,
  white = true
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: white ? '../../assets/logo-white.png' : '../../assets/logo-full-color.png',
    style: {
      height,
      display: 'block'
    },
    alt: "GOGO"
  });
}

// ─── Page-load orange progress bar (sticky top, decorative) ───────────
function ProgressBar({
  pct = 35
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      width: '100%',
      background: '#1A1326',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: pct + '%',
      background: 'linear-gradient(90deg, #F59E0B 0%, #F97316 100%)'
    }
  }));
}

// ─── Sidebar nav (right side, matches screenshots) ────────────────────
function Sidebar({
  active = 'home'
}) {
  const items = [{
    id: 'home',
    label: 'Home',
    icon: IK.home
  }, {
    id: 'station',
    label: 'Station Overview',
    icon: IK.grid
  }, {
    id: 'swap',
    label: 'Swap',
    icon: IK.swap
  }, {
    id: 'beta',
    label: 'Swap (Beta)',
    icon: IK.swap,
    flag: 'BETA'
  }, {
    id: 'pend',
    label: 'My Pending Swaps',
    icon: IK.checklist
  }, {
    id: 'push',
    label: 'Push Payment',
    icon: IK.card
  }, {
    id: 'xfer',
    label: 'Battery Transfer',
    icon: IK.truck
  }, {
    id: 'repo',
    label: 'Battery Repossession',
    icon: IK.warning
  }, {
    id: 'hist',
    label: 'History',
    icon: IK.history
  }, {
    id: 'tick',
    label: 'Bike Tickets',
    icon: IK.ticket
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 304,
      flexShrink: 0,
      background: DC.bg2,
      borderLeft: `1px solid ${DC.hairline}`,
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 12px 18px'
    }
  }, /*#__PURE__*/React.createElement(GogoMark, {
    height: 32
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: DFONT_BODY,
      fontSize: 11,
      fontWeight: 700,
      color: DC.fg3,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      padding: '8px 12px 10px'
    }
  }, "Swap App"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, items.map(it => {
    const isActive = it.id === active;
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 12px',
        borderRadius: 8,
        background: isActive ? DC.surface2 : 'transparent',
        color: isActive ? DC.fg1 : DC.fg2,
        fontFamily: DFONT_BODY,
        fontSize: 14,
        fontWeight: isActive ? 600 : 500,
        cursor: 'pointer',
        position: 'relative'
      }
    }, isActive && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 8,
        bottom: 8,
        width: 3,
        borderRadius: 999,
        background: DC.mag
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: isActive ? DC.mag : DC.fg3,
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(I, {
      size: 18
    }, it.icon)), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.flag && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: DFONT_MONO,
        fontSize: 9,
        fontWeight: 700,
        color: DC.mag,
        background: 'rgba(210,12,125,0.14)',
        border: `1px solid rgba(210,12,125,0.35)`,
        padding: '2px 6px',
        borderRadius: 4,
        letterSpacing: '0.06em'
      }
    }, it.flag));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      padding: '12px 0',
      color: DC.ok,
      fontFamily: DFONT_BODY,
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 16
  }, IK.wifi), "Online"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 12px',
      borderTop: `1px solid ${DC.hairline}`,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: DC.chip.aubL.bg,
      color: DC.chip.aubL.fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: DFONT_DISPLAY,
      fontVariationSettings: DVFS_DISPLAY,
      fontWeight: 800,
      fontSize: 14
    }
  }, "A"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: DC.fg1
    }
  }, "Administrator"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: DC.fg3,
      marginTop: 1
    }
  }, "admin@bodawerk.com")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: DC.fg3,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 16
  }, IK.chevD))));
}

// ─── Top status strip (logo + wifi + sidebar toggle) ──────────────────
function TopStrip() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 28px',
      borderBottom: `1px solid ${DC.hairline}`,
      background: DC.bg
    }
  }, /*#__PURE__*/React.createElement(GogoMark, {
    height: 28
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: DC.ok,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 18
  }, IK.wifi)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: DC.fg2,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 18
  }, IK.panel))));
}

// ─── Breadcrumb header (inside content area) ──────────────────────────
function Crumbs({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '18px 32px 0',
      color: DC.fg2,
      fontFamily: DFONT_BODY,
      fontSize: 14,
      fontWeight: 500
    }
  }, items.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: DC.fg4,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 14
  }, IK.chev)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      color: i === items.length - 1 ? DC.fg1 : DC.fg2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: DC.mag,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 16
  }, c.icon)), c.label))));
}

// ─── Generic action card (the 3x3 grid on Home) ───────────────────────
function ActionCard({
  icon,
  chip,
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: DC.surface,
      border: `1px solid ${DC.hairline}`,
      borderRadius: 14,
      padding: 22,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16,
      cursor: 'pointer',
      transition: 'background 180ms, border-color 180ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 12,
      background: chip.bg,
      color: chip.fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 24,
    sw: 2
  }, icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: DFONT_BODY,
      fontVariationSettings: DVFS_BODY_BOLD,
      fontWeight: 700,
      fontSize: 16,
      color: DC.fg1,
      letterSpacing: '-0.005em'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: DFONT_BODY,
      fontSize: 13,
      color: DC.fg3,
      marginTop: 4,
      lineHeight: 1.45,
      maxWidth: 240
    }
  }, sub)));
}
Object.assign(window, {
  DC,
  DFONT_DISPLAY,
  DFONT_BODY,
  DFONT_MONO,
  DVFS_DISPLAY,
  DVFS_DISPLAY_TIGHT,
  DVFS_DATA,
  DVFS_BODY,
  DVFS_BODY_BOLD,
  I,
  IK,
  GogoMark,
  ProgressBar,
  Sidebar,
  TopStrip,
  Crumbs,
  ActionCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/swap-officer/dark-components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/swap-officer/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// swap-officer/screens.jsx — production web app at the swap station.
// Three screens that mirror the live tool: Home, Close Battery Swap (Scan
// Asset step), and My Pending Swaps. Desktop-first, deep navy, GOGO magenta
// for the single accent.

const SCREEN_W = 1280;
const SCREEN_H = 800;

// ═══════════════════════════════════════════════════════════════════════
// Shared shell — the sidebar + top strip + main content slot.
// ═══════════════════════════════════════════════════════════════════════
function StaffShell({
  active,
  children,
  progress = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: SCREEN_W,
      height: SCREEN_H,
      background: DC.bg,
      color: DC.fg1,
      fontFamily: DFONT_BODY,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }
  }, progress > 0 && /*#__PURE__*/React.createElement(ProgressBar, {
    pct: progress
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(TopStrip, null), children), /*#__PURE__*/React.createElement(Sidebar, {
    active: active
  })));
}

// ═══════════════════════════════════════════════════════════════════════
// 01 HOME — 3 × 3 grid of swap-officer actions
// ═══════════════════════════════════════════════════════════════════════
function HomeScreen() {
  const cards = [{
    icon: IK.swap,
    chip: DC.chip.blue,
    title: 'Battery Swap',
    sub: 'Swap batteries for customer vehicles.'
  }, {
    icon: IK.swap,
    chip: DC.chip.peach,
    title: 'Swap (Beta)',
    sub: 'Unified swap flow — close, open, or receive a battery.'
  }, {
    icon: IK.checklist,
    chip: DC.chip.violet,
    title: 'My Pending Swaps',
    sub: 'View swaps pending closure.'
  }, {
    icon: IK.card,
    chip: DC.chip.peach,
    title: 'Push Payment',
    sub: 'Create payment requests for clients.'
  }, {
    icon: IK.truck,
    chip: DC.chip.teal,
    title: 'Battery Transfer',
    sub: 'Transfer batteries between stations.'
  }, {
    icon: IK.warning,
    chip: DC.chip.rose,
    title: 'Battery Repossession',
    sub: 'Repossess batteries from clients.'
  }, {
    icon: IK.history,
    chip: DC.chip.mint,
    title: 'History',
    sub: 'View your swap history.'
  }, {
    icon: IK.user,
    chip: DC.chip.slate,
    title: 'Profile',
    sub: 'View your account details.'
  }, {
    icon: IK.ticket,
    chip: DC.chip.pink,
    title: 'Bike Tickets',
    sub: 'Search for bike tickets.'
  }];
  return /*#__PURE__*/React.createElement(StaffShell, {
    active: "home",
    progress: 28
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '64px 64px',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, cards.map((c, i) => /*#__PURE__*/React.createElement(ActionCard, _extends({
    key: i
  }, c))))));
}

// ═══════════════════════════════════════════════════════════════════════
// 02 CLOSE BATTERY SWAP — step indicator + Scan Asset card
// ═══════════════════════════════════════════════════════════════════════
function StepIndicator({
  steps,
  current
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      padding: '12px 0 22px'
    }
  }, steps.map((s, i) => {
    const isActive = i === current;
    const isDone = i < current;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: isActive ? '6px 14px 6px 6px' : 0,
        borderRadius: 999,
        background: isActive ? 'rgba(210,12,125,0.16)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 36,
        height: 36,
        borderRadius: 999,
        background: isActive ? DC.mag : isDone ? 'rgba(210,12,125,0.16)' : 'transparent',
        border: isActive ? 'none' : `1px solid ${DC.hairline2}`,
        color: isActive ? '#fff' : isDone ? DC.mag : DC.fg3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(I, {
      size: 16,
      sw: 2
    }, s.icon)), isActive && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: DFONT_BODY,
        fontSize: 13,
        fontWeight: 600,
        color: DC.mag,
        textTransform: 'capitalize'
      }
    }, s.label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 28,
        height: 1.5,
        background: DC.hairline2,
        borderRadius: 1
      }
    }));
  }));
}
function CloseSwapScreen() {
  const steps = [{
    label: 'Asset',
    icon: IK.bike
  }, {
    label: 'Video',
    icon: IK.cam
  }, {
    label: 'Power',
    icon: IK.bolt
  }, {
    label: 'Confirm',
    icon: IK.check
  }, {
    label: 'Receipt',
    icon: IK.doc
  }];
  return /*#__PURE__*/React.createElement(StaffShell, {
    active: "swap",
    progress: 62
  }, /*#__PURE__*/React.createElement(Crumbs, {
    items: [{
      icon: IK.home,
      label: 'Home'
    }, {
      icon: IK.lock,
      label: 'Close Battery Swap'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '14px 32px 32px',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement(StepIndicator, {
    steps: steps,
    current: 0
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto',
      background: DC.surface,
      border: `1px solid ${DC.hairline}`,
      borderRadius: 16,
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 10,
      background: DC.chip.violet.bg,
      color: DC.chip.violet.fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 22,
    sw: 2
  }, IK.bike)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: DC.fg1
    }
  }, "Scan Asset"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: DC.fg3,
      marginTop: 3
    }
  }, "Search for the asset registration number"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      aspectRatio: '1.6 / 1',
      borderRadius: 12,
      overflow: 'hidden',
      background: 'radial-gradient(circle at 50% 45%, #2A3145 0%, #1A2034 70%, #11172A 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '22%',
      top: '14%',
      right: '22%',
      bottom: '14%',
      border: '1.5px dashed rgba(248,113,113,0.55)',
      borderRadius: 12
    }
  }, [{
    top: -2,
    left: -2,
    border: '4px solid #F87171',
    clip: 'borderTop borderLeft',
    rotation: 0
  }].map(() => null), /*#__PURE__*/React.createElement(CornerTick, {
    pos: "tl"
  }), /*#__PURE__*/React.createElement(CornerTick, {
    pos: "tr"
  }), /*#__PURE__*/React.createElement(CornerTick, {
    pos: "bl"
  }), /*#__PURE__*/React.createElement(CornerTick, {
    pos: "br"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#F4F5FA',
      opacity: 0.85,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "74",
    height: "74",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8h4l2-3h6l2 3h4z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "13",
    r: "3.6"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: DC.surface2,
      color: DC.fg1,
      border: `1px solid ${DC.hairline2}`,
      borderRadius: 10,
      padding: '10px 18px',
      fontFamily: DFONT_BODY,
      fontWeight: 600,
      fontSize: 14,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 16
  }, IK.search), "Manual Input"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: DC.fg3
    }
  }, "Scan QR code or enter manually")))));
}
function CornerTick({
  pos
}) {
  // pos = tl | tr | bl | br — draws a 22px L bracket inside the dashed window
  const v = pos[0] === 't' ? 'top' : 'bottom';
  const h = pos[1] === 'l' ? 'left' : 'right';
  const len = 22,
    thick = 3;
  const c = '#F87171';
  const s = {
    position: 'absolute'
  };
  s[v] = -2;
  s[h] = -2;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...s,
      width: len,
      height: thick,
      background: c,
      borderRadius: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...s,
      width: thick,
      height: len,
      background: c,
      borderRadius: 1
    }
  }));
}

// ═══════════════════════════════════════════════════════════════════════
// 03 MY PENDING SWAPS — two cards with negative-balance warning
// ═══════════════════════════════════════════════════════════════════════
function PendingSwapCard({
  plate,
  swapId,
  asset,
  amount,
  projected,
  warn
}) {
  const neg = projected.startsWith('-');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: DC.surface,
      border: `1px solid ${DC.hairline}`,
      borderRadius: 14,
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: DC.fg3,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 20
  }, IK.bike)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: DFONT_DISPLAY,
      fontVariationSettings: DVFS_DISPLAY_TIGHT,
      fontWeight: 800,
      fontSize: 22,
      color: DC.fg1,
      letterSpacing: '-0.01em'
    }
  }, plate)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: DFONT_MONO,
      fontSize: 12,
      color: DC.fg3,
      marginTop: 4
    }
  }, "Swap #", swapId), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: DC.fg3,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 16
  }, IK.battery)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: DFONT_DISPLAY,
      fontVariationSettings: DVFS_DISPLAY_TIGHT,
      fontWeight: 700,
      fontSize: 16,
      color: DC.fg1
    }
  }, asset)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 6,
      color: DC.fg3
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 14
  }, IK.bolt), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: DFONT_MONO,
      fontSize: 12
    }
  }, "Serial: ", asset))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      paddingTop: 16,
      borderTop: `1px solid ${DC.hairline}`,
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: DC.fg2
    }
  }, "Swap Amount:"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: DFONT_DISPLAY,
      fontVariationSettings: DVFS_DATA,
      fontWeight: 800,
      fontSize: 16,
      color: DC.fg1,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.01em'
    }
  }, amount)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: DC.fg2
    }
  }, "Projected Balance:"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: DFONT_DISPLAY,
      fontVariationSettings: DVFS_DATA,
      fontWeight: 800,
      fontSize: 16,
      color: neg ? DC.bad : DC.ok,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.01em'
    }
  }, neg ? projected.replace('-', '−') : projected))), warn && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: '10px 12px',
      background: 'rgba(244,63,94,0.10)',
      border: `1px solid rgba(244,63,94,0.30)`,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: '#FB7185',
      fontSize: 13,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 16
  }, IK.warning), warn), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 16,
      width: '100%',
      background: DC.mag,
      color: '#fff',
      border: 'none',
      borderRadius: 10,
      padding: '14px 0',
      fontFamily: DFONT_BODY,
      fontWeight: 700,
      fontSize: 15,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      cursor: 'pointer',
      letterSpacing: '0.01em'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 16,
    sw: 2.2
  }, IK.dollar), "Close Swap"));
}
function PendingSwapsScreen() {
  return /*#__PURE__*/React.createElement(StaffShell, {
    active: "pend",
    progress: 0
  }, /*#__PURE__*/React.createElement(Crumbs, {
    items: [{
      icon: IK.home,
      label: 'Home'
    }, {
      icon: IK.clock,
      label: 'My Pending Swaps'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '22px 32px 32px',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: DFONT_DISPLAY,
      fontVariationSettings: DVFS_DISPLAY_TIGHT,
      fontWeight: 800,
      fontSize: 22,
      color: DC.fg1,
      letterSpacing: '-0.01em'
    }
  }, "2 pending"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: DC.fg3,
      marginTop: 2
    }
  }, "Both need closing before end of shift")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: pillBtnStyle()
  }, /*#__PURE__*/React.createElement(I, {
    size: 15
  }, IK.filter), " All bays"), /*#__PURE__*/React.createElement("button", {
    style: pillBtnStyle()
  }, /*#__PURE__*/React.createElement(I, {
    size: 15
  }, IK.history), " Sort: newest"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(PendingSwapCard, {
    plate: "UGC321L",
    swapId: "822",
    asset: "04-0309-TAILK-01",
    amount: "UGX 6,522",
    projected: "-UGX 7,738",
    warn: "This swap will result in a negative balance"
  }), /*#__PURE__*/React.createElement(PendingSwapCard, {
    plate: "UMA829GY",
    swapId: "7442",
    asset: "04-0309-TAICX-01",
    amount: "UGX 5,419",
    projected: "-UGX 6,635",
    warn: "This swap will result in a negative balance"
  }))));
}
function pillBtnStyle() {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: DC.surface,
    color: DC.fg2,
    border: `1px solid ${DC.hairline2}`,
    borderRadius: 999,
    padding: '8px 14px',
    fontFamily: DFONT_BODY,
    fontWeight: 600,
    fontSize: 13,
    cursor: 'pointer'
  };
}
Object.assign(window, {
  HomeScreen,
  CloseSwapScreen,
  PendingSwapsScreen,
  SCREEN_W,
  SCREEN_H
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/swap-officer/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/swap-ops/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// swap-ops/screens.jsx — operations-team web app.
// Reuses dark-theme tokens (DC) from swap-officer/dark-components.jsx —
// loaded as a sibling script in index.html.

const OPS_W = 1440;
const OPS_H = 900;

// ─── Ops sidebar (left, narrow icon-prominent) ─────────────────────────
function OpsSidebar({
  active
}) {
  const groups = [{
    label: 'Live',
    items: [{
      id: 'over',
      label: 'Overview',
      icon: IK.grid
    }, {
      id: 'stat',
      label: 'Stations',
      icon: IK.station
    }, {
      id: 'swap',
      label: 'Swap Log',
      icon: IK.swap
    }, {
      id: 'alert',
      label: 'Alerts',
      icon: IK.alert,
      badge: 3
    }]
  }, {
    label: 'Network',
    items: [{
      id: 'rid',
      label: 'Riders',
      icon: IK.users
    }, {
      id: 'bat',
      label: 'Batteries',
      icon: IK.battery
    }, {
      id: 'bike',
      label: 'Bikes',
      icon: IK.bike
    }, {
      id: 'tech',
      label: 'Technicians',
      icon: IK.user
    }]
  }, {
    label: 'Reports',
    items: [{
      id: 'fin',
      label: 'Revenue',
      icon: IK.trend
    }, {
      id: 'use',
      label: 'Utilisation',
      icon: IK.checklist
    }, {
      id: 'exp',
      label: 'Exports',
      icon: IK.download
    }]
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      flexShrink: 0,
      background: DC.bg2,
      borderRight: `1px solid ${DC.hairline}`,
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 12px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 10px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(GogoMark, {
    height: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: DFONT_MONO,
      fontSize: 10,
      fontWeight: 700,
      color: DC.mag,
      letterSpacing: '0.14em',
      background: 'rgba(210,12,125,0.14)',
      padding: '3px 6px',
      borderRadius: 4
    }
  }, "OPS")), groups.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: gi,
    style: {
      marginTop: gi === 0 ? 6 : 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: DFONT_BODY,
      fontSize: 10,
      fontWeight: 700,
      color: DC.fg4,
      textTransform: 'uppercase',
      letterSpacing: '0.16em',
      padding: '4px 12px 6px'
    }
  }, g.label), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }
  }, g.items.map(it => {
    const isActive = it.id === active;
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        padding: '8px 12px',
        borderRadius: 7,
        background: isActive ? DC.surface2 : 'transparent',
        color: isActive ? DC.fg1 : DC.fg2,
        fontFamily: DFONT_BODY,
        fontSize: 13,
        fontWeight: isActive ? 600 : 500,
        cursor: 'pointer',
        position: 'relative'
      }
    }, isActive && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: 0,
        top: 7,
        bottom: 7,
        width: 2.5,
        borderRadius: 999,
        background: DC.mag
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: isActive ? DC.mag : DC.fg3,
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(I, {
      size: 16
    }, it.icon)), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.badge && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: DFONT_MONO,
        fontSize: 10,
        fontWeight: 700,
        color: '#fff',
        background: DC.bad,
        padding: '1px 6px',
        borderRadius: 999,
        minWidth: 18,
        textAlign: 'center'
      }
    }, it.badge));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: DC.surface,
      border: `1px solid ${DC.hairline}`,
      borderRadius: 10,
      padding: 12,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: DC.fg3,
      fontWeight: 700,
      letterSpacing: '0.10em',
      textTransform: 'uppercase'
    }
  }, "Network status"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: DC.ok,
      boxShadow: `0 0 0 3px rgba(34,197,94,0.18)`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: DC.fg1,
      fontWeight: 600
    }
  }, "All systems go")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: DFONT_MONO,
      fontSize: 10,
      color: DC.fg3,
      marginTop: 6
    }
  }, "18 / 18 stations live")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 8px',
      borderTop: `1px solid ${DC.hairline}`,
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: DC.chip.aubL.bg,
      color: DC.chip.aubL.fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: DFONT_DISPLAY,
      fontVariationSettings: DVFS_DISPLAY,
      fontWeight: 800,
      fontSize: 12
    }
  }, "SN"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: DC.fg1
    }
  }, "Sarah Nakamura"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: DC.fg3,
      marginTop: 1
    }
  }, "Ops Lead \xB7 Kampala"))));
}

// ─── Ops top bar ────────────────────────────────────────────────────────
function OpsTopbar({
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 32px',
      borderBottom: `1px solid ${DC.hairline}`,
      background: DC.bg
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: DFONT_DISPLAY,
      fontVariationSettings: DVFS_DISPLAY,
      fontWeight: 800,
      fontSize: 24,
      color: DC.fg1,
      letterSpacing: '-0.01em',
      textTransform: 'uppercase'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: DC.fg3,
      marginTop: 3
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      background: DC.surface,
      border: `1px solid ${DC.hairline2}`,
      borderRadius: 8,
      padding: '7px 12px',
      width: 240,
      color: DC.fg3
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 15
  }, IK.search), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "Search station, rider, pack\u2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: DFONT_MONO,
      fontSize: 10,
      color: DC.fg4,
      border: `1px solid ${DC.hairline2}`,
      padding: '1px 5px',
      borderRadius: 3
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: DC.surface,
      color: DC.fg1,
      border: `1px solid ${DC.hairline2}`,
      borderRadius: 8,
      padding: '7px 12px',
      fontFamily: DFONT_BODY,
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 15
  }, IK.clock), "Today \xB7 14 May", /*#__PURE__*/React.createElement(I, {
    size: 14
  }, IK.chevD)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'rgba(34,197,94,0.10)',
      color: DC.ok,
      border: `1px solid rgba(34,197,94,0.30)`,
      borderRadius: 8,
      padding: '7px 12px',
      fontFamily: DFONT_BODY,
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: DC.ok,
      boxShadow: `0 0 0 3px rgba(34,197,94,0.22)`
    }
  }), "Live")));
}

// ─── KPI tile ───────────────────────────────────────────────────────────
function KpiTile({
  label,
  value,
  unit,
  delta,
  deltaTone = 'ok',
  chip,
  spark,
  footer
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: DC.surface,
      border: `1px solid ${DC.hairline}`,
      borderRadius: 12,
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 132
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: DFONT_BODY,
      fontSize: 11,
      fontWeight: 700,
      color: DC.fg3,
      textTransform: 'uppercase',
      letterSpacing: '0.10em'
    }
  }, label), chip && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      background: chip.bg,
      color: chip.fg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 16
  }, chip.icon))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: DFONT_DISPLAY,
      fontVariationSettings: DVFS_DATA,
      fontWeight: 800,
      fontSize: 36,
      color: DC.fg1,
      lineHeight: 1.05,
      marginTop: 10,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.025em'
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: DC.fg3,
      marginLeft: 6,
      fontWeight: 600
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 'auto',
      paddingTop: 12
    }
  }, delta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: DFONT_MONO,
      fontSize: 12,
      fontWeight: 700,
      color: deltaTone === 'ok' ? DC.ok : deltaTone === 'bad' ? DC.bad : DC.fg3
    }
  }, delta), spark && /*#__PURE__*/React.createElement(Sparkline, {
    data: spark,
    tone: deltaTone
  })), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: DC.fg3,
      marginTop: 8
    }
  }, footer));
}
function Sparkline({
  data,
  tone = 'ok'
}) {
  const W = 92,
    H = 28;
  const max = Math.max(...data),
    min = Math.min(...data);
  const r = max - min || 1;
  const pts = data.map((v, i) => {
    const x = i / (data.length - 1) * W;
    const y = H - (v - min) / r * (H - 4) - 2;
    return `${x},${y}`;
  }).join(' ');
  const color = tone === 'bad' ? DC.bad : tone === 'warn' ? DC.warn : DC.mag;
  return /*#__PURE__*/React.createElement("svg", {
    width: W,
    height: H
  }, /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: color,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

// ─── Bar chart (swaps by hour) ──────────────────────────────────────────
function BarChart({
  data
}) {
  // data: [{ hr, val, target }]
  const max = Math.max(...data.map(d => Math.max(d.val, d.target || 0)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 6,
      height: 168,
      padding: '4px 0'
    }
  }, data.map((d, i) => {
    const h = d.val / max * 100;
    const peak = d.val === Math.max(...data.map(x => x.val));
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: h + '%',
        background: peak ? DC.mag : 'rgba(210,12,125,0.45)',
        borderRadius: '4px 4px 0 0',
        position: 'relative'
      }
    }, peak && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '100%',
        left: '50%',
        transform: 'translateX(-50%)',
        marginBottom: 4,
        fontFamily: DFONT_MONO,
        fontSize: 11,
        fontWeight: 700,
        color: DC.fg1
      }
    }, d.val))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: DFONT_MONO,
        fontSize: 10,
        color: DC.fg3
      }
    }, d.hr));
  }));
}

// ─── Station card ───────────────────────────────────────────────────────
function StationCard({
  name,
  area,
  status,
  queue,
  ready,
  total,
  swapsToday,
  target
}) {
  const dot = status === 'live' ? DC.ok : status === 'busy' ? DC.warn : status === 'down' ? DC.bad : DC.fg3;
  const onTarget = swapsToday >= target;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: DC.surface,
      border: `1px solid ${DC.hairline}`,
      borderRadius: 12,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: DC.fg1
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: DFONT_MONO,
      fontSize: 11,
      color: DC.fg3,
      marginTop: 2
    }
  }, area)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: status === 'live' ? 'rgba(34,197,94,0.10)' : status === 'busy' ? 'rgba(245,158,11,0.10)' : status === 'down' ? 'rgba(244,63,94,0.10)' : 'rgba(123,131,160,0.10)',
      color: dot,
      padding: '3px 8px',
      borderRadius: 999,
      fontFamily: DFONT_MONO,
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: dot
    }
  }), status)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: DC.fg3,
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, "Ready"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: DFONT_DISPLAY,
      fontVariationSettings: DVFS_DATA,
      fontWeight: 800,
      fontSize: 14,
      color: DC.fg1,
      fontVariantNumeric: 'tabular-nums'
    }
  }, ready, /*#__PURE__*/React.createElement("span", {
    style: {
      color: DC.fg3
    }
  }, " / ", total))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: DC.hairline,
      borderRadius: 999,
      marginTop: 6,
      overflow: 'hidden',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${ready / total * 100}%`,
      background: DC.mag
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      paddingTop: 12,
      borderTop: `1px solid ${DC.hairline}`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: DC.fg3,
      fontWeight: 700,
      letterSpacing: '0.10em',
      textTransform: 'uppercase'
    }
  }, "Queue"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: DFONT_DISPLAY,
      fontVariationSettings: DVFS_DATA,
      fontWeight: 800,
      fontSize: 18,
      color: DC.fg1,
      marginTop: 2,
      fontVariantNumeric: 'tabular-nums'
    }
  }, queue)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: DC.fg3,
      fontWeight: 700,
      letterSpacing: '0.10em',
      textTransform: 'uppercase'
    }
  }, "Today"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: DFONT_DISPLAY,
      fontVariationSettings: DVFS_DATA,
      fontWeight: 800,
      fontSize: 18,
      color: onTarget ? DC.ok : DC.fg1,
      marginTop: 2,
      fontVariantNumeric: 'tabular-nums'
    }
  }, swapsToday, /*#__PURE__*/React.createElement("span", {
    style: {
      color: DC.fg3,
      fontSize: 12
    }
  }, " / ", target)))));
}

// ═══════════════════════════════════════════════════════════════════════
// 01 OVERVIEW
// ═══════════════════════════════════════════════════════════════════════
function OverviewScreen() {
  const stations = [{
    name: 'Nakawa Bay',
    area: 'Kampala · East',
    status: 'live',
    queue: 2,
    ready: 6,
    total: 8,
    swapsToday: 47,
    target: 40
  }, {
    name: 'Kabalagala',
    area: 'Kampala · Central',
    status: 'busy',
    queue: 5,
    ready: 3,
    total: 8,
    swapsToday: 38,
    target: 40
  }, {
    name: 'Ntinda Hub',
    area: 'Kampala · North',
    status: 'live',
    queue: 1,
    ready: 7,
    total: 8,
    swapsToday: 52,
    target: 45
  }, {
    name: 'Wandegeya',
    area: 'Kampala · Central',
    status: 'live',
    queue: 0,
    ready: 8,
    total: 8,
    swapsToday: 29,
    target: 35
  }, {
    name: 'Lugogo Mall',
    area: 'Kampala · East',
    status: 'busy',
    queue: 4,
    ready: 2,
    total: 8,
    swapsToday: 41,
    target: 40
  }, {
    name: 'Bweyogerere',
    area: 'Wakiso · East',
    status: 'live',
    queue: 1,
    ready: 5,
    total: 8,
    swapsToday: 22,
    target: 30
  }, {
    name: 'Entebbe Rd',
    area: 'Wakiso · South',
    status: 'down',
    queue: 0,
    ready: 0,
    total: 8,
    swapsToday: 0,
    target: 30
  }, {
    name: 'Mukono Hub',
    area: 'Mukono · Central',
    status: 'live',
    queue: 0,
    ready: 6,
    total: 8,
    swapsToday: 18,
    target: 25
  }];
  const recent = [{
    time: '14:38:21',
    station: 'Ntinda Hub',
    rider: 'Musa Kato',
    plate: 'UAJ 027F',
    pack: 'GG-0421',
    amt: 'UGX 6,000',
    status: 'closed'
  }, {
    time: '14:36:02',
    station: 'Kabalagala',
    rider: 'Jane Akello',
    plate: 'UAH 119B',
    pack: 'GG-1182',
    amt: 'UGX 6,000',
    status: 'closed'
  }, {
    time: '14:35:44',
    station: 'Nakawa Bay',
    rider: 'David Okello',
    plate: 'UAK 802L',
    pack: 'GG-0903',
    amt: 'UGX 6,000',
    status: 'closed'
  }, {
    time: '14:33:18',
    station: 'Lugogo Mall',
    rider: 'Brian Ssali',
    plate: 'UBC 441K',
    pack: 'GG-2204',
    amt: 'UGX 6,000',
    status: 'pending',
    warn: true
  }, {
    time: '14:31:09',
    station: 'Ntinda Hub',
    rider: 'Mariam Nansubuga',
    plate: 'UAR 312X',
    pack: 'GG-0552',
    amt: 'UGX 6,000',
    status: 'closed'
  }, {
    time: '14:28:50',
    station: 'Wandegeya',
    rider: 'Peter Lubega',
    plate: 'UAW 829G',
    pack: 'GG-1741',
    amt: 'UGX 6,000',
    status: 'closed'
  }, {
    time: '14:27:11',
    station: 'Kabalagala',
    rider: 'Sarah Birungi',
    plate: 'UAY 102C',
    pack: 'GG-0316',
    amt: 'UGX 6,000',
    status: 'closed'
  }, {
    time: '14:24:33',
    station: 'Mukono Hub',
    rider: 'Tom Ssemakula',
    plate: 'UBA 776P',
    pack: 'GG-2087',
    amt: 'UGX 6,000',
    status: 'closed'
  }];
  const hours = [{
    hr: '6',
    val: 18
  }, {
    hr: '7',
    val: 34
  }, {
    hr: '8',
    val: 52
  }, {
    hr: '9',
    val: 61
  }, {
    hr: '10',
    val: 49
  }, {
    hr: '11',
    val: 44
  }, {
    hr: '12',
    val: 58
  }, {
    hr: '13',
    val: 72
  }, {
    hr: '14',
    val: 67
  }, {
    hr: '15',
    val: 0
  }, {
    hr: '16',
    val: 0
  }, {
    hr: '17',
    val: 0
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: OPS_W,
      height: OPS_H,
      background: DC.bg,
      color: DC.fg1,
      fontFamily: DFONT_BODY,
      display: 'flex',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(OpsSidebar, {
    active: "over"
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(OpsTopbar, {
    title: "Overview",
    sub: "Live look at the network \u2014 swaps, stations, and what needs attention right now."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '22px 28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(KpiTile, {
    label: "Swaps \xB7 today",
    value: "455",
    delta: "+12% vs yest",
    chip: {
      bg: DC.chip.pink.bg,
      fg: DC.chip.pink.fg,
      icon: IK.swap
    },
    spark: [28, 31, 38, 45, 52, 47, 49, 61, 58, 67, 72, 80]
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Revenue \xB7 today",
    value: "2.73",
    unit: "M UGX",
    delta: "+8%",
    chip: {
      bg: DC.chip.mint.bg,
      fg: DC.chip.mint.fg,
      icon: IK.dollar
    },
    spark: [40, 42, 48, 50, 55, 52, 58, 62, 67, 70, 73, 78]
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Active stations",
    value: "17",
    unit: "/ 18",
    delta: "1 down \u2014 Entebbe Rd",
    deltaTone: "bad",
    chip: {
      bg: DC.chip.teal.bg,
      fg: DC.chip.teal.fg,
      icon: IK.station
    }
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Avg swap time",
    value: "1.18",
    unit: "min",
    delta: "\u22128 sec",
    chip: {
      bg: DC.chip.violet.bg,
      fg: DC.chip.violet.fg,
      icon: IK.clock
    },
    spark: [88, 82, 75, 78, 74, 72, 70, 71, 68, 70, 69, 71]
  }), /*#__PURE__*/React.createElement(KpiTile, {
    label: "Active riders",
    value: "312",
    delta: "+24 today",
    chip: {
      bg: DC.chip.blue.bg,
      fg: DC.chip.blue.fg,
      icon: IK.users
    },
    spark: [260, 268, 275, 280, 288, 295, 298, 302, 304, 308, 310, 312]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.7fr 1fr',
      gap: 14,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: DC.surface,
      border: `1px solid ${DC.hairline}`,
      borderRadius: 12,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: DC.fg3,
      fontWeight: 700,
      letterSpacing: '0.10em',
      textTransform: 'uppercase'
    }
  }, "Swaps by hour"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: DFONT_DISPLAY,
      fontVariationSettings: DVFS_DATA,
      fontWeight: 800,
      fontSize: 28,
      color: DC.fg1,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.02em'
    }
  }, "72"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: DC.fg3
    }
  }, "peak \xB7 13:00"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, ['Today', '7d', '30d'].map((l, i) => /*#__PURE__*/React.createElement("button", {
    key: l,
    style: {
      background: i === 0 ? DC.surface2 : 'transparent',
      color: i === 0 ? DC.fg1 : DC.fg3,
      border: `1px solid ${i === 0 ? DC.hairline2 : 'transparent'}`,
      borderRadius: 7,
      padding: '5px 12px',
      fontFamily: DFONT_BODY,
      fontWeight: 600,
      fontSize: 12,
      cursor: 'pointer'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(BarChart, {
    data: hours
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: DC.surface,
      border: `1px solid ${DC.hairline}`,
      borderRadius: 12,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: DC.fg3,
      fontWeight: 700,
      letterSpacing: '0.10em',
      textTransform: 'uppercase'
    }
  }, "Needs attention"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: DFONT_MONO,
      fontSize: 10,
      fontWeight: 700,
      color: DC.bad,
      background: 'rgba(244,63,94,0.10)',
      border: `1px solid rgba(244,63,94,0.30)`,
      padding: '2px 7px',
      borderRadius: 999
    }
  }, "3 OPEN")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, [{
    icon: IK.station,
    tone: 'bad',
    title: 'Entebbe Rd offline',
    sub: '12 min ago · power fault · technician dispatched'
  }, {
    icon: IK.battery,
    tone: 'warn',
    title: 'Kabalagala low on ready packs',
    sub: '3 / 8 ready · queue at 5 riders'
  }, {
    icon: IK.warning,
    tone: 'warn',
    title: 'Pack GG-0412 cell drift',
    sub: 'cell #3 down 8% · flag for rebalance'
  }].map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      padding: '10px 0',
      borderTop: i > 0 ? `1px solid ${DC.hairline}` : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      background: a.tone === 'bad' ? 'rgba(244,63,94,0.14)' : 'rgba(245,158,11,0.14)',
      color: a.tone === 'bad' ? DC.bad : DC.warn,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 16
  }, a.icon)), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: DC.fg1
    }
  }, a.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: DC.fg3,
      marginTop: 2
    }
  }, a.sub)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: DC.fg4,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 14
  }, IK.chev))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: DFONT_DISPLAY,
      fontVariationSettings: DVFS_DISPLAY_TIGHT,
      fontWeight: 800,
      fontSize: 18,
      color: DC.fg1,
      letterSpacing: '-0.01em'
    }
  }, "Stations \xB7 live"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: DC.fg3,
      marginTop: 2
    }
  }, "17 live \xB7 1 down \xB7 sorted by current queue")), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      color: DC.fg2,
      background: 'transparent',
      border: 'none',
      fontFamily: DFONT_BODY,
      fontWeight: 600,
      fontSize: 13,
      cursor: 'pointer'
    }
  }, "View all stations ", /*#__PURE__*/React.createElement(I, {
    size: 14
  }, IK.chev))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 12
    }
  }, stations.map((s, i) => /*#__PURE__*/React.createElement(StationCard, _extends({
    key: i
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: DFONT_DISPLAY,
      fontVariationSettings: DVFS_DISPLAY_TIGHT,
      fontWeight: 800,
      fontSize: 18,
      color: DC.fg1,
      letterSpacing: '-0.01em'
    }
  }, "Recent swaps"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: DC.fg3,
      marginTop: 2
    }
  }, "Streaming \xB7 last 8 closed swaps across the network")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: pillBtn()
  }, /*#__PURE__*/React.createElement(I, {
    size: 14
  }, IK.filter), " Filter"), /*#__PURE__*/React.createElement("button", {
    style: pillBtn()
  }, /*#__PURE__*/React.createElement(I, {
    size: 14
  }, IK.download), " Export"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      background: DC.surface,
      border: `1px solid ${DC.hairline}`,
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '110px 1.2fr 1.4fr 1fr 1fr 1fr 100px',
      gap: 16,
      padding: '12px 18px',
      borderBottom: `1px solid ${DC.hairline}`,
      fontSize: 10,
      color: DC.fg3,
      fontWeight: 700,
      letterSpacing: '0.10em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Time"), /*#__PURE__*/React.createElement("span", null, "Station"), /*#__PURE__*/React.createElement("span", null, "Rider"), /*#__PURE__*/React.createElement("span", null, "Plate"), /*#__PURE__*/React.createElement("span", null, "Pack"), /*#__PURE__*/React.createElement("span", null, "Amount"), /*#__PURE__*/React.createElement("span", null, "Status")), recent.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '110px 1.2fr 1.4fr 1fr 1fr 1fr 100px',
      gap: 16,
      padding: '12px 18px',
      borderTop: i > 0 ? `1px solid ${DC.hairline}` : 'none',
      fontSize: 13,
      color: DC.fg1,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: DFONT_MONO,
      fontSize: 12,
      color: DC.fg2
    }
  }, r.time), /*#__PURE__*/React.createElement("span", {
    style: {
      color: DC.fg1,
      fontWeight: 600
    }
  }, r.station), /*#__PURE__*/React.createElement("span", null, r.rider), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: DFONT_MONO,
      fontSize: 12,
      color: DC.fg2
    }
  }, r.plate), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: DFONT_MONO,
      fontSize: 12,
      color: DC.fg2
    }
  }, r.pack), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: DFONT_DISPLAY,
      fontVariationSettings: DVFS_DATA,
      fontWeight: 700,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.01em'
    }
  }, r.amt), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: r.status === 'closed' ? 'rgba(34,197,94,0.10)' : 'rgba(245,158,11,0.10)',
      color: r.status === 'closed' ? DC.ok : DC.warn,
      padding: '2px 8px',
      borderRadius: 999,
      fontFamily: DFONT_MONO,
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 999,
      background: r.status === 'closed' ? DC.ok : DC.warn
    }
  }), r.status)))))))));
}

// ═══════════════════════════════════════════════════════════════════════
// 02 STATIONS — detailed list view
// ═══════════════════════════════════════════════════════════════════════
function StationsScreen() {
  const rows = [{
    name: 'Ntinda Hub',
    area: 'Kampala · North',
    status: 'live',
    queue: 1,
    ready: 7,
    total: 8,
    swaps: 52,
    rev: '312k',
    uptime: 99.8,
    officer: 'Sarah Nakamura'
  }, {
    name: 'Nakawa Bay',
    area: 'Kampala · East',
    status: 'live',
    queue: 2,
    ready: 6,
    total: 8,
    swaps: 47,
    rev: '282k',
    uptime: 99.9,
    officer: 'James Okot'
  }, {
    name: 'Lugogo Mall',
    area: 'Kampala · East',
    status: 'busy',
    queue: 4,
    ready: 2,
    total: 8,
    swaps: 41,
    rev: '246k',
    uptime: 99.6,
    officer: 'Mary Achieng'
  }, {
    name: 'Kabalagala',
    area: 'Kampala · Central',
    status: 'busy',
    queue: 5,
    ready: 3,
    total: 8,
    swaps: 38,
    rev: '228k',
    uptime: 98.9,
    officer: 'Paul Mugisha'
  }, {
    name: 'Wandegeya',
    area: 'Kampala · Central',
    status: 'live',
    queue: 0,
    ready: 8,
    total: 8,
    swaps: 29,
    rev: '174k',
    uptime: 100,
    officer: 'Grace Atim'
  }, {
    name: 'Bweyogerere',
    area: 'Wakiso · East',
    status: 'live',
    queue: 1,
    ready: 5,
    total: 8,
    swaps: 22,
    rev: '132k',
    uptime: 99.2,
    officer: 'Henry Kasule'
  }, {
    name: 'Mukono Hub',
    area: 'Mukono · Central',
    status: 'live',
    queue: 0,
    ready: 6,
    total: 8,
    swaps: 18,
    rev: '108k',
    uptime: 99.7,
    officer: 'Lillian Namutebi'
  }, {
    name: 'Najjera',
    area: 'Wakiso · North',
    status: 'live',
    queue: 2,
    ready: 4,
    total: 8,
    swaps: 33,
    rev: '198k',
    uptime: 99.5,
    officer: 'Eric Mubiru'
  }, {
    name: 'Bugolobi',
    area: 'Kampala · East',
    status: 'live',
    queue: 1,
    ready: 7,
    total: 8,
    swaps: 27,
    rev: '162k',
    uptime: 99.9,
    officer: 'Diana Apio'
  }, {
    name: 'Entebbe Rd',
    area: 'Wakiso · South',
    status: 'down',
    queue: 0,
    ready: 0,
    total: 8,
    swaps: 0,
    rev: '—',
    uptime: 87.3,
    officer: 'Brian Ochan'
  }, {
    name: 'Kireka',
    area: 'Wakiso · East',
    status: 'live',
    queue: 1,
    ready: 6,
    total: 8,
    swaps: 31,
    rev: '186k',
    uptime: 99.4,
    officer: 'Sandra Nakato'
  }, {
    name: 'Kawempe',
    area: 'Kampala · North',
    status: 'live',
    queue: 0,
    ready: 5,
    total: 8,
    swaps: 25,
    rev: '150k',
    uptime: 99.8,
    officer: 'Joseph Wamala'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: OPS_W,
      height: OPS_H,
      background: DC.bg,
      color: DC.fg1,
      fontFamily: DFONT_BODY,
      display: 'flex',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(OpsSidebar, {
    active: "stat"
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(OpsTopbar, {
    title: "Stations",
    sub: "All 18 stations \xB7 status, throughput, and on-shift officer."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '22px 28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: tabBtn(true)
  }, "All ", /*#__PURE__*/React.createElement("span", {
    style: tabCount()
  }, "18")), /*#__PURE__*/React.createElement("button", {
    style: tabBtn(false)
  }, "Live ", /*#__PURE__*/React.createElement("span", {
    style: tabCount('ok')
  }, "17")), /*#__PURE__*/React.createElement("button", {
    style: tabBtn(false)
  }, "Busy ", /*#__PURE__*/React.createElement("span", {
    style: tabCount('warn')
  }, "3")), /*#__PURE__*/React.createElement("button", {
    style: tabBtn(false)
  }, "Down ", /*#__PURE__*/React.createElement("span", {
    style: tabCount('bad')
  }, "1")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: pillBtn()
  }, /*#__PURE__*/React.createElement(I, {
    size: 14
  }, IK.pin), " Map view"), /*#__PURE__*/React.createElement("button", {
    style: pillBtn()
  }, /*#__PURE__*/React.createElement(I, {
    size: 14
  }, IK.filter), " Region: all")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: DC.surface,
      border: `1px solid ${DC.hairline}`,
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 90px 1.2fr 100px 100px 100px 1fr 36px',
      gap: 14,
      padding: '14px 20px',
      borderBottom: `1px solid ${DC.hairline}`,
      fontSize: 10,
      color: DC.fg3,
      fontWeight: 700,
      letterSpacing: '0.10em',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Station"), /*#__PURE__*/React.createElement("span", null, "Area"), /*#__PURE__*/React.createElement("span", null, "Status"), /*#__PURE__*/React.createElement("span", null, "Ready / queue"), /*#__PURE__*/React.createElement("span", null, "Swaps"), /*#__PURE__*/React.createElement("span", null, "Revenue"), /*#__PURE__*/React.createElement("span", null, "Uptime"), /*#__PURE__*/React.createElement("span", null, "On shift"), /*#__PURE__*/React.createElement("span", null)), rows.map((r, i) => {
    const dot = r.status === 'live' ? DC.ok : r.status === 'busy' ? DC.warn : DC.bad;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 90px 1.2fr 100px 100px 100px 1fr 36px',
        gap: 14,
        padding: '14px 20px',
        borderTop: i > 0 ? `1px solid ${DC.hairline}` : 'none',
        fontSize: 13,
        color: DC.fg1,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700
      }
    }, r.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: DFONT_MONO,
        fontSize: 10,
        color: DC.fg4,
        marginTop: 2
      }
    }, "STN-", String(i + 101).padStart(4, '0'))), /*#__PURE__*/React.createElement("span", {
      style: {
        color: DC.fg2
      }
    }, r.area), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        color: dot,
        fontFamily: DFONT_MONO,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: 999,
        background: dot
      }
    }), r.status), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: DFONT_DISPLAY,
        fontVariationSettings: DVFS_DATA,
        fontWeight: 700,
        fontSize: 13,
        fontVariantNumeric: 'tabular-nums'
      }
    }, r.ready, /*#__PURE__*/React.createElement("span", {
      style: {
        color: DC.fg3
      }
    }, "/", r.total), /*#__PURE__*/React.createElement("span", {
      style: {
        color: DC.fg3,
        marginLeft: 8,
        fontSize: 11
      }
    }, "\xB7 ", r.queue, " in queue")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 4,
        background: DC.hairline,
        borderRadius: 999,
        marginTop: 5,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${r.ready / r.total * 100}%`,
        height: '100%',
        background: DC.mag
      }
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: DFONT_DISPLAY,
        fontVariationSettings: DVFS_DATA,
        fontWeight: 700,
        fontVariantNumeric: 'tabular-nums'
      }
    }, r.swaps), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: DFONT_DISPLAY,
        fontVariationSettings: DVFS_DATA,
        fontWeight: 700,
        fontVariantNumeric: 'tabular-nums'
      }
    }, "UGX ", r.rev), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: DFONT_MONO,
        fontSize: 12,
        color: r.uptime < 95 ? DC.bad : r.uptime < 99.5 ? DC.warn : DC.ok
      }
    }, r.uptime, "%"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: DC.fg2
      }
    }, r.officer), /*#__PURE__*/React.createElement("span", {
      style: {
        color: DC.fg3,
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(I, {
      size: 16
    }, IK.more)));
  })))));
}

// helpers
function pillBtn() {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    background: DC.surface,
    color: DC.fg2,
    border: `1px solid ${DC.hairline2}`,
    borderRadius: 8,
    padding: '6px 12px',
    fontFamily: DFONT_BODY,
    fontWeight: 600,
    fontSize: 12,
    cursor: 'pointer'
  };
}
function tabBtn(active) {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: active ? DC.surface2 : 'transparent',
    color: active ? DC.fg1 : DC.fg2,
    border: `1px solid ${active ? DC.hairline2 : 'transparent'}`,
    borderRadius: 8,
    padding: '7px 14px',
    fontFamily: DFONT_BODY,
    fontWeight: 600,
    fontSize: 13,
    cursor: 'pointer'
  };
}
function tabCount(tone) {
  return {
    fontFamily: 'ui-monospace, monospace',
    fontSize: 11,
    fontWeight: 700,
    background: tone === 'ok' ? 'rgba(34,197,94,0.12)' : tone === 'warn' ? 'rgba(245,158,11,0.12)' : tone === 'bad' ? 'rgba(244,63,94,0.12)' : DC.hairline,
    color: tone === 'ok' ? DC.ok : tone === 'warn' ? DC.warn : tone === 'bad' ? DC.bad : DC.fg3,
    padding: '1px 7px',
    borderRadius: 999,
    minWidth: 16,
    textAlign: 'center'
  };
}
Object.assign(window, {
  OverviewScreen,
  StationsScreen,
  OPS_W,
  OPS_H
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/swap-ops/screens.jsx", error: String((e && e.message) || e) }); }

})();
