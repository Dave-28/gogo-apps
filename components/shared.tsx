'use client';
import React from 'react';

export const C = {
  aub: '#40103C',
  mag: '#D20C7D',
  white: '#FFFFFF',
  bg: '#FAF6F9',
  hairline: '#ECE7EC',
  fg1: '#15010C',
  fg2: '#664063',
  fg3: '#8A7588',
  fg4: '#B6A6B3',
  success: '#1F8A4C',
  warning: '#F7B500',
  danger: '#BB1E10',
  aub200: '#D8CFD7',
};

export const DC = {
  bg: '#05070F',
  surface: '#0F1525',
  surface2: '#1A2235',
  fg1: '#F4F5FA',
  fg2: '#A8B0C0',
  fg3: '#6B7689',
  mag: '#D20C7D',
  ok: '#22C55E',
  warn: '#F59E0B',
  bad: '#F43F5E',
  hairline: 'rgba(255,255,255,0.08)',
};

export const FD = "'Roboto', system-ui, sans-serif";
export const FB = "'Roboto', system-ui, sans-serif";
export const FM = "'Roboto Mono', ui-monospace, 'SF Mono', Menlo, monospace";
export const VFS_D  = '"wght" 800, "wdth" 110';
export const VFS_DT = '"wght" 800, "wdth" 100';
export const VFS_DATA = '"wght" 700, "wdth" 100';
export const VFS_BOLD = '"wght" 600, "wdth" 100';

// ─── Button ───────────────────────────────────────────────────────────────────
interface ButtonProps {
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost';
  children: React.ReactNode;
  full?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  disabled?: boolean;
}
export function Button({ variant = 'primary', children, full, onClick, style, disabled }: ButtonProps) {
  const variants: Record<string, React.CSSProperties> = {
    primary:   { background: C.aub, color: C.white, border: 'none' },
    accent:    { background: C.mag, color: C.white, border: 'none' },
    secondary: { background: C.white, color: C.aub, border: `1.5px solid ${C.aub}` },
    ghost:     { background: 'transparent', color: C.aub, border: 'none' },
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '14px 22px',
        borderRadius: 999,
        fontFamily: FB,
        fontWeight: 600,
        fontSize: 15,
        letterSpacing: '0.01em',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        width: full ? '100%' : 'auto',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        transition: 'transform 120ms',
        ...variants[variant],
        ...style,
      }}
    >
      {children}
    </button>
  );
}

// ─── Pill badge ───────────────────────────────────────────────────────────────
interface PillProps {
  children: React.ReactNode;
  tone?: 'aub' | 'mag' | 'out' | 'soft' | 'ok' | 'warn' | 'danger';
  style?: React.CSSProperties;
}
export function Pill({ children, tone = 'aub', style }: PillProps) {
  const tones: Record<string, React.CSSProperties> = {
    aub:    { background: C.aub, color: C.white },
    mag:    { background: C.mag, color: C.white },
    out:    { background: 'transparent', color: C.aub, border: `1px solid ${C.aub}` },
    soft:   { background: '#FCE2EE', color: '#95075A' },
    ok:     { background: 'rgba(31,138,76,0.12)', color: '#1F8A4C' },
    warn:   { background: 'rgba(247,181,0,0.18)', color: '#7A5200' },
    danger: { background: 'rgba(187,30,16,0.12)', color: '#BB1E10' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '3px 10px', borderRadius: 999,
      fontSize: 11, fontWeight: 600, letterSpacing: '0.02em',
      fontFamily: FB,
      ...tones[tone], ...style,
    }}>
      {children}
    </span>
  );
}

// ─── Caption label ────────────────────────────────────────────────────────────
export function Caption({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      fontFamily: FB, fontSize: 11, fontWeight: 600,
      color: C.fg3, textTransform: 'uppercase', letterSpacing: '0.08em', ...style,
    }}>
      {children}
    </div>
  );
}

// ─── Battery SVG glyph ────────────────────────────────────────────────────────
interface BatteryProps { size?: number; charged?: number; color?: string; }
export function BatterySVG({ size = 60, charged = 100, color }: BatteryProps) {
  const fillColor = color || (charged >= 40 ? C.mag : charged >= 20 ? C.warning : C.fg4);
  const bodyW = size;
  const bodyH = size * 1.55;
  const cornerR = size * 0.14;
  const padding = size * 0.10;
  const innerH = bodyH - padding * 2 - size * 0.22;
  const fillH = innerH * (charged / 100);
  return (
    <svg width={bodyW} height={bodyH + size * 0.10} viewBox={`0 0 ${bodyW} ${bodyH + size * 0.10}`}>
      <rect x={bodyW * 0.30} y={0} width={bodyW * 0.40} height={size * 0.08} rx={size * 0.03} fill={C.aub} />
      <rect x={0} y={size * 0.08} width={bodyW} height={bodyH} rx={cornerR} fill={C.aub} />
      <rect
        x={padding}
        y={size * 0.08 + padding + (innerH - fillH)}
        width={bodyW - padding * 2}
        height={fillH}
        rx={cornerR * 0.5}
        fill={fillColor}
      />
      <text
        x={bodyW / 2}
        y={size * 0.08 + padding + innerH + size * 0.20}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily={FD}
        fontWeight="800"
        fontSize={size * 0.40}
        fill={C.white}
        style={{ fontVariationSettings: VFS_D }}
      >
        {charged >= 40 ? '+' : '−'}
      </text>
    </svg>
  );
}

// ─── Mini slot indicator ──────────────────────────────────────────────────────
export function SlotMini({ charged }: { charged: number }) {
  const innerH = 30;
  const fillH = innerH * (charged / 100);
  const fill = charged >= 90 ? C.mag : charged >= 40 ? C.warning : C.fg4;
  return (
    <svg width="14" height="22" viewBox="0 0 14 22">
      <rect x="4" y="0" width="6" height="2" rx="0.5" fill={C.aub} />
      <rect x="0" y="2" width="14" height="20" rx="2" fill={C.hairline} />
      <rect x="2" y={2 + 2 + (innerH * 0.6 - fillH * 0.6)} width="10" height={fillH * 0.6} rx="1" fill={fill} />
    </svg>
  );
}

// ─── Swap countdown ring ──────────────────────────────────────────────────────
export function SwapCountdown({ secondsLeft = 38, total = 60 }: { secondsLeft?: number; total?: number }) {
  const r = 100;
  const circ = 2 * Math.PI * r;
  const dash = circ * (secondsLeft / total);
  return (
    <div style={{ position: 'relative', width: 240, height: 240, margin: '0 auto' }}>
      <svg width="240" height="240" viewBox="0 0 240 240" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="120" cy="120" r={r} stroke="rgba(255,255,255,0.12)" strokeWidth="10" fill="none" />
        <circle cx="120" cy="120" r={r} stroke={C.mag} strokeWidth="10" fill="none"
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" />
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      }}>
        <div style={{ fontFamily: FB, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.10em' }}>
          Swap in progress
        </div>
        <div style={{
          fontFamily: FD, fontVariationSettings: VFS_DATA,
          fontWeight: 800, fontSize: 88,
          letterSpacing: '-0.04em', color: C.white, lineHeight: 1, marginTop: 4,
          fontVariantNumeric: 'tabular-nums',
        }}>
          {secondsLeft}<span style={{ fontSize: 22, color: 'rgba(255,255,255,0.55)', marginLeft: 4 }}>sec</span>
        </div>
        <div style={{ fontFamily: FM, fontSize: 11, color: C.mag, marginTop: 8 }}>+ Sarah · on it</div>
      </div>
    </div>
  );
}

// ─── Swap streak heatmap ──────────────────────────────────────────────────────
export function SwapStreak({ data, color = C.mag }: { data: number[]; color?: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 5 }}>
      {data.map((v, i) => {
        const opacity = v === 0 ? 1 : v === 1 ? 0.35 : v === 2 ? 0.7 : 1;
        return (
          <div key={i} style={{
            aspectRatio: '1', borderRadius: 3,
            background: v === 0 ? C.hairline : color,
            opacity,
          }} />
        );
      })}
    </div>
  );
}

// ─── Decorative +/− background watermark ─────────────────────────────────────
export function PlusMinusBg({ color = 'rgba(255,255,255,0.04)', size = 24, gap = 60 }: {
  color?: string; size?: number; gap?: number;
}) {
  return (
    <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <defs>
        <pattern id={`pm-${gap}`} x="0" y="0" width={gap} height={gap} patternUnits="userSpaceOnUse">
          <text x={gap / 2} y={gap / 2 + size / 3} textAnchor="middle"
            fontFamily={FD} fontWeight="800" fontSize={size} fill={color}
            style={{ fontVariationSettings: VFS_D }}>+</text>
          <text x={gap} y={gap + size / 3} textAnchor="middle"
            fontFamily={FD} fontWeight="800" fontSize={size} fill={color}
            style={{ fontVariationSettings: VFS_D }}>−</text>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#pm-${gap})`} />
    </svg>
  );
}

// ─── Map placeholder ──────────────────────────────────────────────────────────
export function MapPlaceholder({ height = 320 }: { height?: number }) {
  return (
    <div style={{
      height, position: 'relative', background: '#F2EAE7',
      backgroundImage:
        'linear-gradient(to right, rgba(64,16,60,0.06) 1px, transparent 1px),' +
        'linear-gradient(to bottom, rgba(64,16,60,0.06) 1px, transparent 1px)',
      backgroundSize: '32px 32px', overflow: 'hidden',
    }}>
      <svg width="100%" height="100%" viewBox="0 0 390 320" preserveAspectRatio="none"
        style={{ position: 'absolute', inset: 0 }}>
        <path d="M40,260 C 100,240 130,180 180,160 S 280,140 340,80"
          stroke={C.mag} strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
      <div style={{
        position: 'absolute', left: 30, top: 250,
        width: 16, height: 16, borderRadius: 999, background: C.aub, border: `3px solid ${C.white}`,
      }} />
      <div style={{
        position: 'absolute', right: 36, top: 60,
        width: 22, height: 22, borderRadius: 999, background: C.mag, border: `3px solid ${C.white}`,
      }} />
    </div>
  );
}

// ─── Stat big ─────────────────────────────────────────────────────────────────
interface StatBigProps {
  label: string; value: string | number; unit?: string; delta?: string; dark?: boolean;
}
export function StatBig({ label, value, unit, delta, dark }: StatBigProps) {
  return (
    <div>
      <Caption style={{ color: dark ? 'rgba(255,255,255,0.5)' : C.fg3 }}>{label}</Caption>
      <div style={{
        fontFamily: FD, fontVariationSettings: VFS_DATA,
        fontWeight: 700, fontSize: 56, lineHeight: 1,
        letterSpacing: '-0.03em', color: dark ? C.white : C.aub,
        fontVariantNumeric: 'tabular-nums', marginTop: 6,
      }}>
        {value}
        {unit && <span style={{ fontSize: 22, color: dark ? 'rgba(255,255,255,0.6)' : C.fg3, marginLeft: 4 }}>{unit}</span>}
      </div>
      {delta && (
        <div style={{
          fontFamily: FM, fontSize: 12, fontWeight: 600, marginTop: 8,
          color: delta.startsWith('−') || delta.startsWith('-') ? C.mag : C.success,
        }}>{delta}</div>
      )}
    </div>
  );
}
