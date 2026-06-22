'use client';
import React from 'react';
import { C, FD, FB, FM, VFS_D, VFS_DT, VFS_DATA } from './shared';

const SIDEBAR_LINKS = [
  { group: 'Operations' },
  { label: 'Overview', icon: '▦', active: true },
  { label: 'Stations', icon: '⚡' },
  { label: 'Fleet', icon: '🛵' },
  { label: 'Riders', icon: '👤' },
  { group: 'Finance' },
  { label: 'Billing', icon: '💳' },
  { label: 'Reports', icon: '📊' },
  { group: 'Admin' },
  { label: 'Settings', icon: '⚙' },
];

function Sidebar() {
  return (
    <aside style={{ background: C.aub, color: C.white, padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: 2, minHeight: '100vh', width: 240, flexShrink: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/logo-inverse.png" alt="GOGO" style={{ height: 26, marginBottom: 24 }} />
      {SIDEBAR_LINKS.map((item, i) => {
        if ('group' in item) {
          return (
            <div key={i} style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', fontWeight: 700, padding: '14px 12px 6px', marginTop: i > 0 ? 8 : 0 }}>
              {item.group}
            </div>
          );
        }
        return (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 10, cursor: 'pointer',
            color: 'rgba(255,255,255,0.78)', fontWeight: 600, fontSize: 14,
            background: item.active ? 'rgba(210,12,125,0.18)' : 'transparent',
            boxShadow: item.active ? 'inset 2px 0 0 #D20C7D' : 'none',
          }}>
            <span>{item.icon}</span>
            {item.label}
          </div>
        );
      })}
      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0' }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: C.mag, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, flexShrink: 0 }}>AK</div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 14 }}>Aisha K.</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 1 }}>Ops Manager · Kampala</div>
        </div>
      </div>
    </aside>
  );
}

function StatusPill({ status }: { status: 'ok' | 'low' | 'off' }) {
  const config = {
    ok:  { bg: 'rgba(31,138,76,0.12)',  color: '#1F8A4C', label: 'Online' },
    low: { bg: 'rgba(247,181,0,0.18)',  color: '#7A5200', label: 'Low' },
    off: { bg: 'rgba(187,30,16,0.12)',  color: '#BB1E10', label: 'Offline' },
  }[status];
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600, background: config.bg, color: config.color }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: config.color }} />
      {config.label}
    </span>
  );
}

export function OpsDashboard() {
  const kpis = [
    { label: 'Active riders', value: '1,312', delta: '▲ 4.2% week', down: false },
    { label: 'Swaps today', value: '3,847', delta: '▲ 11% vs avg', down: false },
    { label: 'Stations online', value: '22', valueSuffix: '/24', delta: '▼ 2 offline', down: true },
    { label: 'Revenue (UGX)', value: '23.1M', delta: '▲ 6.8% week', down: false },
  ];
  const stations = [
    { name: 'Kabalagala', code: 'ST-014 · Kampala', stock: '14 / 20', swapsHr: '18.4', lastSwap: '2 min ago', status: 'ok' as const },
    { name: 'Ntinda Road', code: 'ST-022 · Kampala', stock: '3 / 20', swapsHr: '22.1', lastSwap: '1 min ago', status: 'low' as const },
    { name: 'Nakawa Market', code: 'ST-009 · Kampala', stock: '11 / 20', swapsHr: '14.8', lastSwap: '4 min ago', status: 'ok' as const },
    { name: 'Jinja Town', code: 'ST-031 · Jinja', stock: '—', swapsHr: '0', lastSwap: '2h 11m ago', status: 'off' as const },
    { name: 'Mukono Hub', code: 'ST-018 · Mukono', stock: '8 / 12', swapsHr: '9.2', lastSwap: '5 min ago', status: 'ok' as const },
  ];
  const events = [
    { dot: C.mag, title: 'Jinja Town went offline', time: '2h 11m ago · technician dispatched' },
    { dot: C.warning, title: 'Ntinda Road below 5 batteries', time: '38 min ago' },
    { dot: C.success, title: 'Battery B-4128 returned to circulation', time: '1h ago · Kabalagala' },
    { dot: C.success, title: '14 new riders onboarded', time: 'Today · Kampala region' },
    { dot: C.mag, title: 'Quarterly safety check due', time: '3 stations · this week' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: FB }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: 24, background: '#FAF6F9', overflowX: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.mag, fontWeight: 700 }}>Tuesday · 11 May</div>
            <h1 style={{ fontFamily: FD, fontWeight: 700, fontSize: 32, letterSpacing: '-0.015em', margin: '4px 0 0', color: C.fg1 }}>Operations overview</h1>
            <div style={{ fontSize: 14, color: C.fg3, marginTop: 4 }}>Across 24 stations · live for the last 24h</div>
          </div>
          <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
            <button style={{ background: 'transparent', border: `1.5px solid ${C.fg1}`, borderRadius: 999, padding: '10px 18px', fontWeight: 700, fontSize: 14, cursor: 'pointer', color: C.fg1, fontFamily: FB }}>Export CSV</button>
            <button style={{ background: C.mag, border: 'none', borderRadius: 999, padding: '10px 18px', fontWeight: 700, fontSize: 14, cursor: 'pointer', color: C.white, fontFamily: FB }}>+ Add station</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {kpis.map((k, i) => (
            <div key={i} style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 14, padding: 18, boxShadow: '0 1px 2px rgba(21,1,12,0.06)' }}>
              <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.fg3, fontWeight: 700 }}>{k.label}</div>
              <div style={{ fontFamily: FD, fontVariationSettings: VFS_DATA, fontWeight: 900, fontSize: 36, letterSpacing: '-0.02em', marginTop: 6, lineHeight: 1, color: C.fg1 }}>
                {k.value}
                {k.valueSuffix && <small style={{ fontSize: 18, color: C.fg3, fontWeight: 700 }}>{k.valueSuffix}</small>}
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, marginTop: 8, color: k.down ? C.danger : C.success }}>{k.delta}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
          <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 16, boxShadow: '0 1px 2px rgba(21,1,12,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', borderBottom: `1px solid ${C.hairline}` }}>
              <h2 style={{ fontFamily: FD, fontWeight: 700, fontSize: 18, margin: 0, color: C.fg1 }}>Stations</h2>
              <div style={{ display: 'flex', gap: 8 }}>
                <StatusPill status="ok" />
                <StatusPill status="low" />
                <StatusPill status="off" />
              </div>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {['Station', 'Stock', 'Swaps / hr', 'Last swap', 'Status'].map(h => (
                      <th key={h} style={{ textAlign: 'left', padding: '12px 20px', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.fg3, fontWeight: 700, borderBottom: `1px solid ${C.hairline}` }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {stations.map((s, i) => (
                    <tr key={i} style={{ borderBottom: i < stations.length - 1 ? `1px solid ${C.hairline}` : 'none' }}>
                      <td style={{ padding: '14px 20px' }}>
                        <div style={{ fontWeight: 600, fontSize: 14, color: C.fg1 }}>{s.name}</div>
                        <div style={{ fontSize: 12, color: C.fg3, marginTop: 2 }}>{s.code}</div>
                      </td>
                      <td style={{ padding: '14px 20px', fontSize: 14, fontFamily: FM, color: C.fg1 }}>{s.stock}</td>
                      <td style={{ padding: '14px 20px', fontSize: 14, fontFamily: FM, color: C.fg1 }}>{s.swapsHr}</td>
                      <td style={{ padding: '14px 20px', fontSize: 13, color: C.fg3 }}>{s.lastSwap}</td>
                      <td style={{ padding: '14px 20px' }}><StatusPill status={s.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 16, boxShadow: '0 1px 2px rgba(21,1,12,0.06)' }}>
            <div style={{ padding: '18px 20px', borderBottom: `1px solid ${C.hairline}` }}>
              <h2 style={{ fontFamily: FD, fontWeight: 700, fontSize: 18, margin: 0, color: C.fg1 }}>Activity</h2>
            </div>
            <div style={{ padding: '8px 0' }}>
              {events.map((e, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, padding: '12px 20px', borderBottom: i < events.length - 1 ? `1px solid ${C.hairline}` : 'none' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: e.dot, marginTop: 5, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: C.fg1 }}>{e.title}</div>
                    <div style={{ fontSize: 11, color: C.fg3, marginTop: 3 }}>{e.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
