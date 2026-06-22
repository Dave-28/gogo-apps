'use client';
import React from 'react';
import { DC, FD, FB, FM, VFS_D, VFS_DT, VFS_DATA, VFS_BOLD } from './shared';

function OfficerSidebar({ active = 'home' }: { active?: string }) {
  const items = [
    { id: 'home', label: 'Home', icon: '⊞' },
    { id: 'swap', label: 'Battery Swap', icon: '⚡' },
    { id: 'beta', label: 'Swap (Beta)', icon: '⚡', flag: 'BETA' },
    { id: 'pend', label: 'My Pending Swaps', icon: '⏱' },
    { id: 'push', label: 'Push Payment', icon: '💳' },
    { id: 'xfer', label: 'Battery Transfer', icon: '↔' },
    { id: 'repo', label: 'Repossession', icon: '⚠' },
    { id: 'hist', label: 'History', icon: '📋' },
    { id: 'tick', label: 'Bike Tickets', icon: '🔧' },
    { id: 'prof', label: 'Profile', icon: '👤' },
  ];
  return (
    <aside style={{ width: 260, flexShrink: 0, background: '#0A0D18', borderRight: `1px solid ${DC.hairline}`, display: 'flex', flexDirection: 'column', padding: '20px 14px' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/logo-inverse.png" alt="GOGO" style={{ height: 26, marginBottom: 24 }} />
      <div style={{ fontSize: 10, fontWeight: 700, color: DC.fg3, textTransform: 'uppercase', letterSpacing: '0.14em', padding: '4px 10px 8px' }}>Swap App</div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map(item => {
          const isActive = item.id === active;
          return (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '9px 10px', borderRadius: 8, background: isActive ? DC.surface : 'transparent', color: isActive ? DC.fg1 : DC.fg2, fontFamily: FB, fontSize: 13, fontWeight: isActive ? 600 : 400, cursor: 'pointer', position: 'relative' }}>
              {isActive && <div style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 3, borderRadius: 999, background: DC.mag }} />}
              <span style={{ color: isActive ? DC.mag : DC.fg3, fontSize: 15 }}>{item.icon}</span>
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.flag && <span style={{ fontFamily: FM, fontSize: 9, fontWeight: 700, color: DC.mag, background: 'rgba(210,12,125,0.14)', border: '1px solid rgba(210,12,125,0.35)', padding: '2px 6px', borderRadius: 4 }}>{item.flag}</span>}
            </div>
          );
        })}
      </nav>
      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10, padding: '12px 10px', borderTop: `1px solid ${DC.hairline}` }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: '#2A1E3A', color: DC.fg1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FD, fontWeight: 800, fontSize: 13 }}>A</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: DC.fg1 }}>Administrator</div>
          <div style={{ fontSize: 11, color: DC.fg3 }}>admin@bodawerk.com</div>
        </div>
      </div>
    </aside>
  );
}

function OfficerTopBar({ title, breadcrumbs }: { title: string; breadcrumbs?: string[] }) {
  return (
    <div style={{ height: 56, display: 'flex', alignItems: 'center', padding: '0 28px', borderBottom: `1px solid ${DC.hairline}`, background: DC.bg, gap: 16, flexShrink: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/logo-inverse.png" alt="GOGO" style={{ height: 22 }} />
      {breadcrumbs && breadcrumbs.map((b, i) => (
        <React.Fragment key={i}>
          <span style={{ color: DC.fg3, fontSize: 14 }}>/</span>
          <span style={{ color: i === breadcrumbs.length - 1 ? DC.fg1 : DC.fg3, fontSize: 14, fontWeight: i === breadcrumbs.length - 1 ? 600 : 400 }}>{b}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

function ActionCard({ icon, title, sub, chipBg, chipFg }: { icon: string; title: string; sub: string; chipBg: string; chipFg: string }) {
  return (
    <div style={{ background: DC.surface, border: `1px solid ${DC.hairline}`, borderRadius: 14, padding: 20, display: 'flex', gap: 16, cursor: 'pointer' }}>
      <div style={{ width: 52, height: 52, borderRadius: 12, background: chipBg, color: chipFg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{icon}</div>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: FB, fontWeight: 700, fontSize: 15, color: DC.fg1 }}>{title}</div>
        <div style={{ fontFamily: FB, fontSize: 12, color: DC.fg3, marginTop: 4, lineHeight: 1.4 }}>{sub}</div>
      </div>
    </div>
  );
}

export function SwapOfficerHome() {
  const actions = [
    { icon: '⚡', title: 'Battery Swap', sub: 'Scan & process a full swap', chipBg: 'rgba(210,12,125,0.15)', chipFg: DC.mag },
    { icon: '⚡', title: 'Swap Beta', sub: 'New flow — test mode', chipBg: 'rgba(245,158,11,0.15)', chipFg: DC.warn },
    { icon: '⏱', title: 'My Pending Swaps', sub: 'View open swap requests', chipBg: 'rgba(34,197,94,0.12)', chipFg: DC.ok },
    { icon: '💳', title: 'Push Payment', sub: 'Manual payment entry', chipBg: 'rgba(148,163,184,0.12)', chipFg: DC.fg2 },
    { icon: '↔', title: 'Battery Transfer', sub: 'Move packs between stations', chipBg: 'rgba(210,12,125,0.10)', chipFg: DC.mag },
    { icon: '⚠', title: 'Repossession', sub: 'Flag & log recovered packs', chipBg: 'rgba(244,63,94,0.12)', chipFg: DC.bad },
    { icon: '📋', title: 'History', sub: 'Past transactions', chipBg: 'rgba(148,163,184,0.12)', chipFg: DC.fg2 },
    { icon: '👤', title: 'Profile', sub: 'Account & station settings', chipBg: 'rgba(148,163,184,0.12)', chipFg: DC.fg2 },
    { icon: '🔧', title: 'Bike Tickets', sub: 'Log maintenance issues', chipBg: 'rgba(245,158,11,0.12)', chipFg: DC.warn },
  ];
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: FB, background: DC.bg }}>
      <OfficerSidebar active="home" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <OfficerTopBar title="Home" breadcrumbs={['Home']} />
        <main style={{ flex: 1, padding: '32px 40px' }}>
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: DC.mag, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 6 }}>KABALAGALA · ST-014</div>
            <h1 style={{ fontFamily: FD, fontVariationSettings: VFS_DT, fontWeight: 800, fontSize: 32, color: DC.fg1, margin: 0, letterSpacing: '-0.015em' }}>Good morning, Sarah</h1>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
            {actions.map((a, i) => (
              <ActionCard key={i} {...a} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export function SwapOfficerCloseSwap() {
  const steps = ['Asset', 'Video', 'Power', 'Confirm', 'Receipt'];
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: FB, background: DC.bg }}>
      <OfficerSidebar active="swap" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <OfficerTopBar title="Close Swap" breadcrumbs={['Home', 'Battery Swap', 'Close Swap']} />
        <main style={{ flex: 1, padding: '28px 40px' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
            {steps.map((s, i) => (
              <React.Fragment key={s}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: i === 0 ? DC.mag : i < 1 ? DC.ok : DC.surface, border: `2px solid ${i === 0 ? DC.mag : i < 1 ? DC.ok : DC.hairline}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: i <= 0 ? DC.fg1 : DC.fg3 }}>{i < 1 ? '✓' : i + 1}</div>
                  <span style={{ fontSize: 13, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? DC.fg1 : DC.fg3 }}>{s}</span>
                </div>
                {i < steps.length - 1 && <div style={{ flex: 1, height: 2, background: DC.hairline, alignSelf: 'center' }} />}
              </React.Fragment>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 900 }}>
            <div style={{ background: DC.surface, border: `1px solid ${DC.hairline}`, borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: DC.mag, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 10 }}>STEP 1 OF 5</div>
              <h2 style={{ fontFamily: FD, fontWeight: 800, fontSize: 24, color: DC.fg1, margin: '0 0 8px', letterSpacing: '-0.01em' }}>Scan Asset</h2>
              <p style={{ fontSize: 14, color: DC.fg3, lineHeight: 1.5, marginBottom: 24 }}>Scan the QR code on the battery pack being returned by the rider.</p>

              {/* Scanner viewport */}
              <div style={{ position: 'relative', height: 220, background: '#000', borderRadius: 12, overflow: 'hidden', marginBottom: 20 }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)' }} />
                {/* Corner brackets */}
                {[[-1,-1], [1,-1], [-1,1], [1,1]].map(([sx, sy], i) => (
                  <div key={i} style={{ position: 'absolute', width: 32, height: 32, left: sx === -1 ? 32 : undefined, right: sx === 1 ? 32 : undefined, top: sy === -1 ? 32 : undefined, bottom: sy === 1 ? 32 : undefined, borderLeft: sx === -1 ? `3px solid ${DC.mag}` : 'none', borderRight: sx === 1 ? `3px solid ${DC.mag}` : 'none', borderTop: sy === -1 ? `3px solid ${DC.mag}` : 'none', borderBottom: sy === 1 ? `3px solid ${DC.mag}` : 'none' }} />
                ))}
                <div style={{ position: 'absolute', inset: '32px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ color: DC.fg3, fontSize: 13, textAlign: 'center' }}>Camera initialising…<br/><span style={{ fontSize: 11, opacity: 0.6 }}>Point at QR code</span></div>
                </div>
              </div>

              <button style={{ width: '100%', background: DC.mag, color: DC.fg1, border: 'none', borderRadius: 10, padding: '14px 20px', fontFamily: FB, fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
                Enter code manually
              </button>
            </div>

            <div style={{ background: DC.surface, border: `1px solid ${DC.hairline}`, borderRadius: 16, padding: 28 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: DC.fg3, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 16 }}>Swap details</div>
              {[['Rider', 'Musa Kato · GG-2042-MK'], ['Bike', 'UAJ 027F'], ['Station', 'Kabalagala · Bay 03'], ['Swap ID', '#SW-8842'], ['Amount', 'UGX 6,000']].map(([label, val]) => (
                <div key={label as string} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: `1px solid ${DC.hairline}` }}>
                  <span style={{ fontSize: 13, color: DC.fg3 }}>{label}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: DC.fg1, fontFamily: label === 'Swap ID' || label === 'Amount' ? FM : FB }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export function SwapOfficerPending() {
  const pendingSwaps = [
    { plate: 'UGC321L', swapId: '#SW-8841', assetId: 'GG-0311', amount: 6000, balance: -2000 },
    { plate: 'UMA829GY', swapId: '#SW-8840', assetId: 'GG-0187', amount: 6000, balance: -4500 },
  ];
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: FB, background: DC.bg }}>
      <OfficerSidebar active="pend" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <OfficerTopBar title="Pending Swaps" breadcrumbs={['Home', 'My Pending Swaps']} />
        <main style={{ flex: 1, padding: '28px 40px' }}>
          <div style={{ background: 'rgba(244,63,94,0.1)', border: `1px solid rgba(244,63,94,0.25)`, borderRadius: 10, padding: '12px 16px', marginBottom: 24, display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ color: DC.bad, fontSize: 18 }}>⚠</span>
            <span style={{ fontSize: 13, color: DC.bad, fontWeight: 500 }}>2 riders have insufficient balance. Collect payment before processing.</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 700 }}>
            {pendingSwaps.map((swap, i) => (
              <div key={i} style={{ background: DC.surface, border: `1px solid ${DC.hairline}`, borderRadius: 14, padding: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div>
                    <div style={{ fontFamily: FM, fontWeight: 700, fontSize: 16, color: DC.fg1 }}>{swap.plate}</div>
                    <div style={{ fontSize: 12, color: DC.fg3, marginTop: 3 }}>{swap.swapId} · Asset: {swap.assetId}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: FM, fontWeight: 700, fontSize: 15, color: DC.fg1 }}>UGX {swap.amount.toLocaleString()}</div>
                    <div style={{ fontSize: 12, color: DC.bad, marginTop: 3, fontWeight: 600 }}>Balance: − {Math.abs(swap.balance).toLocaleString()} UGX</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  <button style={{ flex: 1, background: 'transparent', border: `1.5px solid ${DC.hairline}`, borderRadius: 8, padding: '10px', fontFamily: FB, fontWeight: 600, fontSize: 13, color: DC.fg2, cursor: 'pointer' }}>Cancel</button>
                  <button style={{ flex: 2, background: DC.mag, border: 'none', borderRadius: 8, padding: '10px', fontFamily: FB, fontWeight: 700, fontSize: 13, color: DC.fg1, cursor: 'pointer' }}>Collect &amp; confirm</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
