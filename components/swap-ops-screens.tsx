'use client';
import React from 'react';
import { DC, FD, FB, FM, VFS_D, VFS_DT, VFS_DATA, Button, Pill, Caption } from './shared';

const stations = [
  { id: 'KBL-01', name: 'Kabalagala', slots: 8, filled: 7, swaps: 84, revenue: '504,000', uptime: 99.1, officer: 'Sarah N.', status: 'ok' as const },
  { id: 'NKW-02', name: 'Nakawa', slots: 8, filled: 5, swaps: 71, revenue: '426,000', uptime: 97.8, officer: 'James O.', status: 'ok' as const },
  { id: 'NTD-03', name: 'Ntinda', slots: 6, filled: 2, swaps: 38, revenue: '228,000', uptime: 94.2, officer: 'Phiona K.', status: 'low' as const },
  { id: 'KMP-04', name: 'Kampala Rd', slots: 12, filled: 11, swaps: 112, revenue: '672,000', uptime: 99.7, officer: 'Robert M.', status: 'ok' as const },
  { id: 'ENT-05', name: 'Entebbe Rd', slots: 8, filled: 8, swaps: 67, revenue: '402,000', uptime: 98.3, officer: 'Grace A.', status: 'ok' as const },
  { id: 'KYM-06', name: 'Kyambogo', slots: 6, filled: 1, swaps: 12, revenue: '72,000', uptime: 71.4, officer: 'Unassigned', status: 'off' as const },
  { id: 'MBR-07', name: 'Mbarara Rd', slots: 6, filled: 4, swaps: 29, revenue: '174,000', uptime: 88.1, officer: 'Henry W.', status: 'ok' as const },
  { id: 'GBY-08', name: 'Ggaba', slots: 4, filled: 3, swaps: 18, revenue: '108,000', uptime: 91.5, officer: 'Alice T.', status: 'ok' as const },
];

const hourlySwaps = [12, 18, 24, 31, 45, 62, 78, 84, 71, 65, 58, 54, 67, 72, 68, 55, 44, 38, 29, 21, 16, 11, 8, 6];

function StatusDot({ status }: { status: 'ok' | 'low' | 'off' }) {
  const colors = { ok: DC.ok, low: DC.warn, off: DC.bad };
  return <div style={{ width: 8, height: 8, borderRadius: '50%', background: colors[status], flexShrink: 0 }} />;
}

function SidebarLink({ icon, label, active, badge }: { icon: React.ReactNode; label: string; active?: boolean; badge?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px', borderRadius: 8, background: active ? 'rgba(210,12,125,0.15)' : 'transparent', cursor: 'pointer' }}>
      <span style={{ color: active ? DC.mag : DC.fg3, flexShrink: 0 }}>{icon}</span>
      <span style={{ flex: 1, fontSize: 13, fontWeight: active ? 700 : 400, color: active ? DC.fg1 : DC.fg2 }}>{label}</span>
      {badge && <span style={{ fontSize: 10, fontWeight: 700, color: DC.bad, background: 'rgba(244,63,94,0.15)', padding: '2px 6px', borderRadius: 999 }}>{badge}</span>}
    </div>
  );
}

function OpsNav({ active }: { active: string }) {
  const navGroups = [
    {
      label: 'Live',
      items: [
        { id: 'overview', label: 'Overview', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
        { id: 'stations', label: 'Stations', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, badge: '1' },
        { id: 'swaps', label: 'Swap feed', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg> },
        { id: 'batteries', label: 'Batteries', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 11v2"/><line x1="8" y1="12" x2="16" y2="12"/></svg> },
      ],
    },
    {
      label: 'Finance',
      items: [
        { id: 'revenue', label: 'Revenue', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
        { id: 'payouts', label: 'Payouts', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg> },
      ],
    },
  ];

  return (
    <div style={{ width: 220, background: DC.surface, height: '100%', display: 'flex', flexDirection: 'column', borderRight: `1px solid ${DC.surface2}` }}>
      <div style={{ padding: '20px 16px 12px' }}>
        <div style={{ fontFamily: FD, fontVariationSettings: VFS_D, fontWeight: 800, fontSize: 18, color: DC.fg1, letterSpacing: '-0.02em' }}>GOGO</div>
        <div style={{ fontSize: 10, color: DC.fg3, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 2 }}>Swap Ops</div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 8px' }}>
        {navGroups.map(group => (
          <div key={group.label} style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: DC.fg3, textTransform: 'uppercase', letterSpacing: '0.12em', padding: '4px 12px', marginBottom: 4 }}>{group.label}</div>
            {group.items.map(item => (
              <SidebarLink key={item.id} icon={item.icon} label={item.label} active={item.id === active} badge={(item as any).badge} />
            ))}
          </div>
        ))}
      </div>
      <div style={{ padding: '12px 12px 20px', borderTop: `1px solid ${DC.surface2}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 999, background: DC.mag, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FD, fontWeight: 800, fontSize: 12, color: '#fff' }}>AM</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: DC.fg1 }}>Alex Mubiru</div>
            <div style={{ fontSize: 11, color: DC.fg3 }}>Ops Manager</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SwapOpsOverview() {
  const maxSwaps = Math.max(...hourlySwaps);
  const now = new Date();
  const dateStr = `${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}/${now.getFullYear()}`;
  const alerts = [
    { type: 'warn' as const, msg: 'Kyambogo station offline — no officer assigned' },
    { type: 'warn' as const, msg: 'Ntinda: only 2/6 charged packs available' },
    { type: 'ok' as const, msg: 'All swap times nominal — avg 1:12 today' },
  ];
  return (
    <div style={{ background: DC.bg, height: '100%', display: 'flex', fontFamily: FB }}>
      <OpsNav active="overview" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ padding: '20px 28px 16px', borderBottom: `1px solid ${DC.surface2}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: DC.fg3, textTransform: 'uppercase', letterSpacing: '0.10em' }}>Live Overview</div>
            <div style={{ fontFamily: FD, fontVariationSettings: VFS_DT, fontWeight: 800, fontSize: 22, color: DC.fg1, letterSpacing: '-0.02em', marginTop: 2 }}>Today · {dateStr}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: DC.ok }} />
            <span style={{ fontSize: 12, color: DC.fg2 }}>Live</span>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 28px 28px' }}>
          {/* KPI row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 20 }}>
            {[
              { label: 'Swaps today', value: '455', sub: '+12% vs yesterday', color: DC.ok },
              { label: 'Revenue', value: '2.73M', prefix: 'UGX ', sub: 'UGX target: 3.0M', color: DC.mag },
              { label: 'Active stations', value: '17/18', sub: '1 offline', color: DC.warn },
              { label: 'Avg swap time', value: '1:12', sub: 'min · target <90s', color: DC.fg1 },
              { label: 'Active riders', value: '312', sub: '87 currently swapping', color: DC.fg1 },
            ].map((kpi) => (
              <div key={kpi.label} style={{ background: DC.surface, border: `1px solid ${DC.surface2}`, borderRadius: 12, padding: '14px 16px' }}>
                <div style={{ fontSize: 11, color: DC.fg3, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{kpi.label}</div>
                <div style={{ fontFamily: FD, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 28, color: kpi.color, letterSpacing: '-0.03em', fontVariantNumeric: 'tabular-nums', lineHeight: 1 }}>
                  {kpi.prefix && <span style={{ fontSize: 12, color: DC.fg3 }}>{kpi.prefix}</span>}{kpi.value}
                </div>
                <div style={{ fontSize: 11, color: DC.fg3, marginTop: 6 }}>{kpi.sub}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, marginBottom: 20 }}>
            {/* Swaps by hour */}
            <div style={{ background: DC.surface, border: `1px solid ${DC.surface2}`, borderRadius: 12, padding: '16px 18px' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: DC.fg1, marginBottom: 16 }}>Swaps by hour</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 80 }}>
                {hourlySwaps.map((v, i) => (
                  <div key={i} style={{ flex: 1, borderRadius: '2px 2px 0 0', background: i === 8 ? DC.mag : DC.surface2, height: `${v / maxSwaps * 100}%`, minHeight: 2, position: 'relative' }} title={`${i}:00 — ${v} swaps`} />
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                <span style={{ fontSize: 10, color: DC.fg3 }}>00:00</span>
                <span style={{ fontSize: 10, color: DC.fg3 }}>12:00</span>
                <span style={{ fontSize: 10, color: DC.fg3 }}>23:00</span>
              </div>
            </div>

            {/* Alerts */}
            <div style={{ background: DC.surface, border: `1px solid ${DC.surface2}`, borderRadius: 12, padding: '16px 18px' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: DC.fg1, marginBottom: 12 }}>Alerts</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {alerts.map((a, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: a.type === 'ok' ? DC.ok : DC.warn, marginTop: 5, flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: DC.fg2, lineHeight: 1.5 }}>{a.msg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Station grid */}
          <div style={{ fontSize: 13, fontWeight: 700, color: DC.fg1, marginBottom: 12 }}>Station cards</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {stations.slice(0, 8).map(s => (
              <div key={s.id} style={{ background: DC.surface, border: `1px solid ${s.status === 'off' ? DC.bad : s.status === 'low' ? DC.warn : DC.surface2}`, borderRadius: 10, padding: '12px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <StatusDot status={s.status} />
                  <span style={{ fontFamily: FM, fontWeight: 700, fontSize: 13, color: DC.fg1 }}>{s.name}</span>
                </div>
                <div style={{ fontFamily: FD, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 24, color: s.status === 'off' ? DC.bad : DC.fg1, letterSpacing: '-0.02em', fontVariantNumeric: 'tabular-nums' }}>{s.swaps}</div>
                <div style={{ fontSize: 10, color: DC.fg3, marginTop: 2 }}>swaps · {s.filled}/{s.slots} packs</div>
                <div style={{ marginTop: 8, height: 4, background: DC.surface2, borderRadius: 2 }}>
                  <div style={{ height: '100%', width: `${s.filled / s.slots * 100}%`, background: s.status === 'off' ? DC.bad : s.status === 'low' ? DC.warn : DC.ok, borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SwapOpsStations() {
  return (
    <div style={{ background: DC.bg, height: '100%', display: 'flex', fontFamily: FB }}>
      <OpsNav active="stations" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ padding: '20px 28px 16px', borderBottom: `1px solid ${DC.surface2}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: DC.fg3, textTransform: 'uppercase', letterSpacing: '0.10em' }}>Stations</div>
            <div style={{ fontFamily: FD, fontVariationSettings: VFS_DT, fontWeight: 800, fontSize: 22, color: DC.fg1, letterSpacing: '-0.02em', marginTop: 2 }}>18 stations · 1 offline</div>
          </div>
          <button style={{ background: DC.mag, border: 'none', borderRadius: 8, padding: '8px 16px', color: '#fff', fontFamily: FB, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>+ Add station</button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 28px 28px' }}>
          <div style={{ background: DC.surface, border: `1px solid ${DC.surface2}`, borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr 1fr 1fr', gap: 0, padding: '10px 16px', borderBottom: `1px solid ${DC.surface2}` }}>
              {['Station', 'Status', 'Packs', 'Swaps today', 'Revenue', 'Uptime', 'Officer'].map(h => (
                <div key={h} style={{ fontSize: 11, fontWeight: 700, color: DC.fg3, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</div>
              ))}
            </div>
            {stations.map((s, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr 1fr 1fr', gap: 0, padding: '14px 16px', borderBottom: i < stations.length - 1 ? `1px solid ${DC.surface2}` : 'none', alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: FM, fontWeight: 700, fontSize: 14, color: DC.fg1 }}>{s.name}</div>
                  <div style={{ fontSize: 11, color: DC.fg3, marginTop: 2 }}>{s.id}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <StatusDot status={s.status} />
                  <span style={{ fontSize: 12, color: s.status === 'off' ? DC.bad : s.status === 'low' ? DC.warn : DC.ok, fontWeight: 600 }}>
                    {s.status === 'ok' ? 'Online' : s.status === 'low' ? 'Low' : 'Offline'}
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: DC.fg1, fontVariantNumeric: 'tabular-nums' }}>{s.filled}/{s.slots}</div>
                  <div style={{ marginTop: 4, height: 3, width: 48, background: DC.surface2, borderRadius: 2 }}>
                    <div style={{ height: '100%', width: `${s.filled / s.slots * 100}%`, background: s.status === 'off' ? DC.bad : s.status === 'low' ? DC.warn : DC.ok, borderRadius: 2 }} />
                  </div>
                </div>
                <div style={{ fontFamily: FM, fontWeight: 700, fontSize: 13, color: DC.fg1, fontVariantNumeric: 'tabular-nums' }}>{s.swaps}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: DC.fg2 }}>UGX {s.revenue}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: s.uptime < 80 ? DC.bad : s.uptime < 95 ? DC.warn : DC.ok, fontVariantNumeric: 'tabular-nums' }}>{s.uptime}%</div>
                <div style={{ fontSize: 12, color: s.officer === 'Unassigned' ? DC.bad : DC.fg2, fontStyle: s.officer === 'Unassigned' ? 'italic' : 'normal' }}>{s.officer}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
