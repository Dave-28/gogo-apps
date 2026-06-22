'use client';
import React from 'react';
import { C, FD, FB, FM, VFS_D, VFS_DT, VFS_DATA, Button, Pill, Caption } from './shared';
import { AppTopBar } from './app-top-bar';

const tickets = [
  { plate: 'UAJ 027F', issue: 'Rear brake worn — 30% pad remaining', severity: 'med' as const, km: '14,820' },
  { plate: 'UBE 441J', issue: 'Chain tensioner loose', severity: 'low' as const, km: '9,200' },
  { plate: 'UAK 883G', issue: 'Front fork seal leak', severity: 'high' as const, km: '21,450' },
  { plate: 'UBA 215H', issue: 'Headlight fault — check wiring', severity: 'med' as const, km: '6,100' },
  { plate: 'UBC 774F', issue: 'Tyre tread below 1.6 mm', severity: 'high' as const, km: '18,300' },
];

function SevPill({ sev }: { sev: 'high' | 'med' | 'low' }) {
  return <Pill tone={sev === 'high' ? 'danger' : sev === 'med' ? 'warn' : 'ok'}>{sev === 'high' ? 'High' : sev === 'med' ? 'Med' : 'Low'}</Pill>;
}

export function TicketsQueueScreen() {
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        title="BIKE TICKETS"
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="14" y2="18"/></svg>}
      />
      <div style={{ padding: '4px 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Caption>5 open tickets</Caption>
        <Pill tone="danger">2 high</Pill>
      </div>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        {tickets.map((t, i) => (
          <div key={i} style={{ padding: '14px 20px', borderBottom: `1px solid ${C.hairline}`, background: C.white, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{ width: 44, height: 44, borderRadius: 10, background: C.hairline, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={C.aub} strokeWidth="2" strokeLinecap="round">
                <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v5a2 2 0 01-2 2h-1"/>
                <circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                <span style={{ fontFamily: FM, fontWeight: 700, fontSize: 14, color: C.fg1 }}>{t.plate}</span>
                <SevPill sev={t.severity} />
              </div>
              <div style={{ fontSize: 13, color: C.fg2 }}>{t.issue}</div>
              <div style={{ fontSize: 11, color: C.fg3, marginTop: 4 }}>{t.km} km total</div>
            </div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.fg4} strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InspectionScreen() {
  const checks = [
    { label: 'Brake pads (front)', status: 'pass' as const },
    { label: 'Brake pads (rear)', status: 'warn' as const },
    { label: 'Chain tension', status: 'pass' as const },
    { label: 'Tyre tread depth', status: 'pass' as const },
    { label: 'Headlight & signals', status: 'fail' as const },
    { label: 'Battery harness', status: 'pending' as const },
    { label: 'Fork & suspension', status: 'pending' as const },
  ];
  const done = checks.filter(c => c.status !== 'pending').length;
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        title="INSPECTION"
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>}
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 20px 24px' }}>
        <div style={{ background: C.aub, borderRadius: 16, padding: '16px 18px', color: C.white, marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <div>
              <div style={{ fontFamily: FM, fontWeight: 700, fontSize: 16 }}>UAK 883G</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>Ticket #TK-2241 · Front fork seal</div>
            </div>
            <div style={{ fontFamily: FD, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 28, fontVariantNumeric: 'tabular-nums' }}>{done}/{checks.length}</div>
          </div>
          <div style={{ height: 6, background: 'rgba(255,255,255,0.15)', borderRadius: 3 }}>
            <div style={{ height: '100%', width: `${done / checks.length * 100}%`, background: C.mag, borderRadius: 3 }} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, overflow: 'hidden' }}>
          {checks.map((c, i) => {
            const statusIcon = c.status === 'pass' ? { symbol: '✓', color: C.success, bg: 'rgba(31,138,76,0.1)' }
              : c.status === 'warn' ? { symbol: '!', color: '#7A5200', bg: 'rgba(247,181,0,0.12)' }
              : c.status === 'fail' ? { symbol: '✗', color: C.danger, bg: 'rgba(187,30,16,0.1)' }
              : { symbol: '○', color: C.fg4, bg: C.hairline };
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 16px', borderBottom: i < checks.length - 1 ? `1px solid ${C.hairline}` : 'none' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: statusIcon.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, color: statusIcon.color, flexShrink: 0 }}>
                  {statusIcon.symbol}
                </div>
                <div style={{ flex: 1, fontSize: 14, fontWeight: c.status === 'pending' ? 400 : 600, color: c.status === 'pending' ? C.fg3 : C.fg1 }}>{c.label}</div>
                {c.status === 'warn' && <Pill tone="warn">Review</Pill>}
              </div>
            );
          })}
        </div>
        <Button variant="accent" full style={{ marginTop: 20 }}>Submit inspection</Button>
      </div>
    </div>
  );
}

export function BikeHistoryScreen() {
  const records = [
    { date: '18/04/2025', work: 'Chain replacement', tech: 'David M.', cost: '35,000' },
    { date: '02/03/2025', work: 'Tyre swap (rear)', tech: 'Mary K.', cost: '45,000' },
    { date: '14/01/2025', work: 'Brake pad set', tech: 'David M.', cost: '28,000' },
    { date: '06/11/2024', work: '10,000 km service', tech: 'Robert O.', cost: '120,000' },
    { date: '22/08/2024', work: 'Fork seal repair', tech: 'Mary K.', cost: '65,000' },
  ];
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar title="BIKE HISTORY" leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 16 }}>
          <div>
            <div style={{ fontFamily: FM, fontWeight: 800, fontSize: 22, color: C.aub }}>UAJ 027F</div>
            <div style={{ fontSize: 12, color: C.fg3, marginTop: 3 }}>In service since May 2023</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: FD, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 32, color: C.aub, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>14,820</div>
            <div style={{ fontSize: 11, color: C.fg3 }}>km total</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 20 }}>
          {[['Motor', 94, C.success], ['Brakes', 68, C.warning], ['Tyres', 82, C.success], ['Harness', 91, C.success]].map(([label, pct, color]) => (
            <div key={label as string} style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 10, padding: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: C.fg3, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>{label as string}</div>
              <div style={{ height: 4, background: C.hairline, borderRadius: 2, marginBottom: 6 }}>
                <div style={{ height: '100%', width: `${pct as number}%`, background: color as string, borderRadius: 2 }} />
              </div>
              <div style={{ fontFamily: FM, fontWeight: 700, fontSize: 14, color: color as string }}>{pct as number}%</div>
            </div>
          ))}
        </div>

        <Caption style={{ marginBottom: 8 }}>Service records</Caption>
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, overflow: 'hidden' }}>
          {records.map((r, i) => (
            <div key={i} style={{ padding: '12px 16px', borderBottom: i < records.length - 1 ? `1px solid ${C.hairline}` : 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ fontWeight: 600, fontSize: 14, color: C.fg1 }}>{r.work}</div>
                <div style={{ fontFamily: FM, fontSize: 12, color: C.fg2 }}>UGX {r.cost}</div>
              </div>
              <div style={{ fontSize: 11, color: C.fg3, marginTop: 3 }}>{r.date} · {r.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
