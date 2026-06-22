'use client';
import React from 'react';
import { C, FD, FB, FM, VFS_D, VFS_DT, VFS_DATA, BatterySVG, Button, Pill, Caption } from './shared';
import { AppTopBar, TabBar } from './app-top-bar';

const packs = [
  { id: 'GG-0421', health: 72, issue: 'Cell 4 voltage low', severity: 'high' as const },
  { id: 'GG-1108', health: 84, issue: 'Capacity degraded 18%', severity: 'med' as const },
  { id: 'GG-0854', health: 91, issue: 'Temperature spike logged', severity: 'med' as const },
  { id: 'GG-2203', health: 66, issue: 'BMS fault — cell group 2', severity: 'high' as const },
  { id: 'GG-0617', health: 88, issue: 'Charge imbalance 8%', severity: 'low' as const },
];

function SeverityPill({ sev }: { sev: 'high' | 'med' | 'low' }) {
  const map = {
    high: { label: 'High', tone: 'danger' as const },
    med:  { label: 'Med',  tone: 'warn' as const },
    low:  { label: 'Low',  tone: 'ok' as const },
  }[sev];
  return <Pill tone={map.tone}>{map.label}</Pill>;
}

export function PackQueueScreen() {
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        title="BATTERY QUEUE"
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="14" y2="18"/></svg>}
        trailing={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h7"/></svg>}
      />
      <div style={{ padding: '4px 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Caption>14 flagged packs</Caption>
        <Pill tone="danger">5 high</Pill>
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {packs.map((pack, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 20px', borderBottom: `1px solid ${C.hairline}`, background: C.white }}>
            <BatterySVG size={32} charged={pack.health} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontFamily: FM, fontWeight: 700, fontSize: 14, color: C.fg1 }}>{pack.id}</span>
                <SeverityPill sev={pack.severity} />
              </div>
              <div style={{ fontSize: 12, color: C.fg3, marginTop: 3 }}>{pack.issue}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: FD, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 22, color: pack.health < 75 ? C.danger : C.warning, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>{pack.health}%</div>
              <div style={{ fontSize: 10, color: C.fg3, marginTop: 2 }}>SoH</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: '12px 20px 20px', background: C.white, borderTop: `1px solid ${C.hairline}` }}>
        <Button variant="accent" full>Start inspection</Button>
      </div>
    </div>
  );
}

export function PackDetailScreen() {
  const cells = Array.from({ length: 16 }, (_, i) => ({ id: i + 1, v: 3.5 + Math.sin(i * 0.8) * 0.25 + (i === 3 ? -0.45 : 0) }));
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        title="GG-0421"
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>}
        trailing={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>}
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 24px' }}>
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 14, padding: 16, marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div>
              <div style={{ fontFamily: FB, fontWeight: 700, fontSize: 16, color: C.fg1 }}>Cell voltage map</div>
              <div style={{ fontSize: 12, color: C.fg3, marginTop: 2 }}>16-cell · GG-0421 · flagged</div>
            </div>
            <Pill tone="danger">Cell 4 low</Pill>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
            {cells.map(cell => {
              const isBad = cell.id === 4;
              const isWarn = cell.v < 3.4;
              const bg = isBad ? 'rgba(187,30,16,0.1)' : isWarn ? 'rgba(247,181,0,0.12)' : 'rgba(31,138,76,0.1)';
              const fg = isBad ? C.danger : isWarn ? '#7A5200' : C.success;
              return (
                <div key={cell.id} style={{ background: bg, borderRadius: 8, padding: '8px 6px', textAlign: 'center' }}>
                  <div style={{ fontSize: 9, color: fg, fontWeight: 700, letterSpacing: '0.04em' }}>C{String(cell.id).padStart(2, '0')}</div>
                  <div style={{ fontFamily: FM, fontSize: 13, fontWeight: 700, color: fg, marginTop: 4 }}>{cell.v.toFixed(2)}<span style={{ fontSize: 9 }}>V</span></div>
                </div>
              );
            })}
          </div>
        </div>

        <Caption style={{ marginBottom: 8 }}>State of health history</Caption>
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 14, padding: 16, marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 60 }}>
            {[88, 87, 86, 85, 84, 82, 80, 78, 75, 74, 73, 72].map((v, i) => (
              <div key={i} style={{ flex: 1, background: i === 11 ? C.danger : C.aub, borderRadius: '2px 2px 0 0', height: `${(v - 65) / 30 * 100}%`, opacity: i === 11 ? 1 : 0.4 + i * 0.05 }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
            <span style={{ fontFamily: FM, fontSize: 10, color: C.fg3 }}>12 cycles ago</span>
            <span style={{ fontFamily: FM, fontSize: 10, color: C.danger, fontWeight: 600 }}>72% now</span>
          </div>
        </div>

        <Caption style={{ marginBottom: 8 }}>Disposition</Caption>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { label: 'Rebalance cells', sub: 'Equalise charge across all 16 cells', recommended: false },
            { label: 'Replace cell 4', sub: 'Swap defective cell, re-test', recommended: true },
            { label: 'Retire pack', sub: 'SoH below threshold — remove from fleet', recommended: false },
          ].map((opt, i) => (
            <div key={i} style={{ background: opt.recommended ? 'rgba(210,12,125,0.06)' : C.white, border: `1.5px solid ${opt.recommended ? C.mag : C.hairline}`, borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 20, height: 20, borderRadius: '50%', border: `2px solid ${opt.recommended ? C.mag : C.hairline}`, background: opt.recommended ? C.mag : 'transparent', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: C.fg1 }}>{opt.label}</div>
                <div style={{ fontSize: 12, color: C.fg3, marginTop: 2 }}>{opt.sub}</div>
              </div>
              {opt.recommended && <Pill tone="mag">Recommended</Pill>}
            </div>
          ))}
        </div>
        <Button variant="accent" full style={{ marginTop: 18 }}>Log action</Button>
      </div>
    </div>
  );
}

export function DispositionScreen() {
  return (
    <div style={{ background: C.aub, height: '100%', display: 'flex', flexDirection: 'column', color: C.white }}>
      <AppTopBar dark title="DISPOSITION" leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>} />
      <div style={{ flex: 1, padding: '8px 20px 24px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.mag, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 8 }}>Pack GG-0421</div>
        <div style={{ fontFamily: FD, fontVariationSettings: VFS_D, fontWeight: 800, fontSize: 40, textTransform: 'uppercase', letterSpacing: '-0.025em', lineHeight: 0.95, marginBottom: 6 }}>REPLACE<br/>CELL 04.</div>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, marginBottom: 24 }}>Cell voltage 3.07V — 0.48V below nominal. Replace and retest before returning to circulation.</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
          {[
            { icon: '⚡', title: 'Step 1: Discharge fully', sub: 'Bring SoC to below 5% before opening' },
            { icon: '🔧', title: 'Step 2: Remove cell 4', sub: 'Bay B, row 1, column 4 from left' },
            { icon: '🔋', title: 'Step 3: Install replacement', sub: 'Use GGC-18650-HE grade only' },
            { icon: '✓', title: 'Step 4: Re-test + certify', sub: 'Run 3-cycle check, confirm SoH > 80%' },
          ].map((step, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 12, padding: '14px 16px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>{step.icon}</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{step.title}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 3 }}>{step.sub}</div>
              </div>
            </div>
          ))}
        </div>
        <Button variant="accent" full style={{ marginTop: 20 }}>Mark complete</Button>
      </div>
    </div>
  );
}
