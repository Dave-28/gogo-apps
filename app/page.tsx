import React from 'react';
import Link from 'next/link';

const kits = [
  { href: '/rider', label: 'Rider App', desc: 'Swap, wallet, history — rider-facing mobile screens', screens: 6, dark: false },
  { href: '/ops', label: 'Ops Dashboard', desc: 'Station management and live swap monitoring', screens: 1, dark: true },
  { href: '/marketing', label: 'Marketing Site', desc: 'Landing page for rider and owner acquisition', screens: 1, dark: false },
  { href: '/battery', label: 'Battery Maintenance', desc: 'Pack queue, cell diagnostics, disposition', screens: 3, dark: false },
  { href: '/bikes', label: 'Bike Maintenance', desc: 'Tickets queue, inspection checklist, service history', screens: 3, dark: false },
  { href: '/owner', label: 'Owner App', desc: 'Fleet overview, bike detail, settlement', screens: 3, dark: false },
  { href: '/hailing', label: 'Ride Hailing', desc: 'Hail a boda, match rider, active trip', screens: 3, dark: false },
  { href: '/swap-officer', label: 'Swap Officer', desc: 'Officer home, close swap, pending queue', screens: 3, dark: true },
  { href: '/swap-ops', label: 'Swap Ops', desc: 'Live overview dashboard and stations table', screens: 2, dark: true },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#05070F', fontFamily: 'var(--font-body)' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '24px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: '#F4F5FA', letterSpacing: '-0.02em' }}>GOGO Electric</div>
          <div style={{ fontSize: 12, color: '#6B7689', marginTop: 2, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.10em' }}>Design System · All Kits</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E' }} />
          <span style={{ fontSize: 12, color: '#A8B0C0' }}>9 kits · 25 screens</span>
        </div>
      </div>

      {/* Grid */}
      <div style={{ padding: '40px 48px 64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {kits.map(kit => (
            <Link key={kit.href} href={kit.href} style={{ textDecoration: 'none' }}>
              <div style={{ background: kit.dark ? '#0F1525' : '#1A2235', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: '24px', cursor: 'pointer', transition: 'border-color 0.15s' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#D20C7D', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Kit</div>
                  <div style={{ fontSize: 11, color: '#6B7689', background: 'rgba(255,255,255,0.05)', padding: '3px 8px', borderRadius: 999 }}>{kit.screens} screen{kit.screens > 1 ? 's' : ''}</div>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: '#F4F5FA', letterSpacing: '-0.01em', marginBottom: 6 }}>{kit.label}</div>
                <div style={{ fontSize: 13, color: '#6B7689', lineHeight: 1.5 }}>{kit.desc}</div>
                <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 6, color: '#D20C7D', fontSize: 13, fontWeight: 600 }}>
                  View kit
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
