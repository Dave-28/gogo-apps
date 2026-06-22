'use client';
import React from 'react';
import { C, FD, FB, FM, VFS_D, VFS_DT, VFS_DATA, BatterySVG, Button, Pill, Caption, MapPlaceholder, PlusMinusBg } from './shared';
import { AppTopBar, TabBar } from './app-top-bar';

const bikes = [
  { plate: 'UAJ 027F', rider: 'Musa Kato', km: 64, earnings: '38,400', battery: 28 },
  { plate: 'UBE 441J', rider: 'Grace Nalubega', km: 42, earnings: '25,200', battery: 72 },
  { plate: 'UAK 883G', rider: 'Unassigned', km: 0, earnings: '0', battery: 100 },
];

export function FleetScreen() {
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        title="MY FLEET"
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="14" y2="18"/></svg>}
        trailing={<div style={{ width: 32, height: 32, borderRadius: 999, background: C.aub, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FD, fontWeight: 800, fontSize: 13 }}>JO</div>}
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 24px' }}>
        <div style={{ background: C.aub, borderRadius: 20, padding: '18px 20px', color: C.white, position: 'relative', overflow: 'hidden', marginBottom: 14 }}>
          <PlusMinusBg color="rgba(255,255,255,0.04)" size={18} gap={50} />
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.mag, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>Today&apos;s earnings</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <div style={{ fontFamily: FD, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 48, letterSpacing: '-0.04em', fontVariantNumeric: 'tabular-nums' }}>62,400</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>UGX</div>
            </div>
            <div style={{ display: 'flex', gap: 24, marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              {[['106 km', 'Total distance'], ['5', 'Swaps'], ['3', 'Active bikes']].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: FM, fontWeight: 700, fontSize: 15 }}>{v}</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Caption style={{ marginBottom: 8 }}>Fleet — 3 bikes</Caption>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, overflow: 'hidden' }}>
          {bikes.map((b, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', borderBottom: i < bikes.length - 1 ? `1px solid ${C.hairline}` : 'none' }}>
              <BatterySVG size={28} charged={b.battery} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: FM, fontWeight: 700, fontSize: 14, color: C.fg1 }}>{b.plate}</div>
                <div style={{ fontSize: 12, color: C.fg3, marginTop: 2 }}>{b.rider === 'Unassigned' ? <span style={{ color: C.fg4 }}>Unassigned</span> : b.rider} · {b.km} km today</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: FM, fontWeight: 700, fontSize: 13, color: b.earnings === '0' ? C.fg4 : C.aub }}>
                  {b.earnings === '0' ? '—' : `UGX ${b.earnings}`}
                </div>
                <div style={{ fontSize: 10, color: C.fg3, marginTop: 2 }}>{b.battery}% batt</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="home" />
    </div>
  );
}

export function BikeDetailScreen() {
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar title="UAJ 027F" leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>} />
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <MapPlaceholder height={200} />
        <div style={{ padding: '16px 20px 24px' }}>
          <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 14, padding: '14px 16px', marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 999, background: C.aub, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FD, fontWeight: 800, fontSize: 18 }}>MK</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: C.fg1 }}>Musa Kato</div>
                <div style={{ fontSize: 12, color: C.fg3, marginTop: 2 }}>★ 4.9 · 2,184 rides</div>
              </div>
              <Pill tone="ok">Active</Pill>
            </div>
          </div>

          <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 14, padding: '14px 16px', marginBottom: 12 }}>
            <Caption style={{ marginBottom: 10 }}>Battery status</Caption>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <BatterySVG size={44} charged={28} color="#E08200" />
              <div>
                <div style={{ fontFamily: FD, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 36, color: C.aub, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em', lineHeight: 1 }}>
                  28<span style={{ fontSize: 16, color: C.fg3 }}>%</span>
                </div>
                <div style={{ fontSize: 12, color: C.fg3, marginTop: 4 }}>Pack GG-0421 · ~32 km range</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {[['64 km', 'Today'], ['UGX 38,400', 'Earnings'], ['3', 'Swaps']].map(([v, l]) => (
              <div key={l} style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 10, padding: '12px 10px', textAlign: 'center' }}>
                <div style={{ fontFamily: FM, fontWeight: 700, fontSize: 14, color: C.aub }}>{v}</div>
                <div style={{ fontSize: 10, color: C.fg3, marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SettlementScreen() {
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar title="SETTLEMENT" leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>} />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 24px' }}>
        <div style={{ background: C.aub, borderRadius: 20, padding: 22, color: C.white, position: 'relative', overflow: 'hidden' }}>
          <PlusMinusBg color="rgba(255,255,255,0.04)" size={20} gap={54} />
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.mag, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 4 }}>Week 19 · Owner payout</div>
            <div style={{ fontFamily: FD, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 48, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.04em', lineHeight: 1 }}>153,600</div>
            <div style={{ fontFamily: FM, fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 6 }}>UGX · your 40% share</div>
            <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
              Total network revenue: UGX 384,000 · Riders: UGX 230,400 (60%)
            </div>
          </div>
        </div>

        <Caption style={{ marginTop: 18, marginBottom: 8 }}>Revenue split</Caption>
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, padding: '14px 16px' }}>
          <div style={{ display: 'flex', height: 24, borderRadius: 4, overflow: 'hidden', gap: 2 }}>
            <div style={{ flex: 60, background: C.mag, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: C.white }}>Rider 60%</span>
            </div>
            <div style={{ flex: 40, background: C.aub, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: C.white }}>Owner 40%</span>
            </div>
          </div>
        </div>

        <Caption style={{ marginTop: 18, marginBottom: 8 }}>Per bike</Caption>
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, overflow: 'hidden' }}>
          {bikes.map((b, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, padding: '13px 16px', alignItems: 'center', borderBottom: i < bikes.length - 1 ? `1px solid ${C.hairline}` : 'none' }}>
              <div style={{ fontFamily: FM, fontWeight: 700, fontSize: 13, color: C.fg1, flex: 1 }}>{b.plate}</div>
              <div style={{ fontSize: 12, color: C.fg3 }}>{b.rider === 'Unassigned' ? '—' : b.rider}</div>
              <div style={{ fontFamily: FM, fontWeight: 700, fontSize: 13, color: C.aub, minWidth: 80, textAlign: 'right' }}>
                {b.earnings === '0' ? '—' : `UGX ${Math.round(parseInt(b.earnings.replace(',', '')) * 0.4).toLocaleString()}`}
              </div>
            </div>
          ))}
        </div>

        <Caption style={{ marginTop: 18, marginBottom: 8 }}>Payout to</Caption>
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 28, borderRadius: 6, background: C.aub, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FD, fontWeight: 800, fontSize: 10, color: C.white }}>MTN</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: 14, color: C.fg1 }}>MTN Mobile Money</div>
            <div style={{ fontFamily: FM, fontSize: 11, color: C.fg3, marginTop: 1 }}>·•·•·• 0427</div>
          </div>
          <Pill tone="mag">+ default</Pill>
        </div>

        <Button variant="accent" full style={{ marginTop: 20 }}>Request payout</Button>
      </div>
    </div>
  );
}
