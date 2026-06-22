import React from 'react';
import { PhoneFrame } from '@/components/ios-frame';
import { FleetScreen, BikeDetailScreen, SettlementScreen } from '@/components/owner-screens';

const screens = [
  { label: 'Fleet overview', el: <FleetScreen /> },
  { label: 'Bike detail', el: <BikeDetailScreen /> },
  { label: 'Settlement', el: <SettlementScreen /> },
];

export default function OwnerPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#05070F', fontFamily: 'var(--font-body)', padding: '40px 48px 64px' }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#D20C7D', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>Kit 6 of 9</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: '#F4F5FA', letterSpacing: '-0.02em' }}>Owner App</div>
        <div style={{ fontSize: 14, color: '#6B7689', marginTop: 6 }}>Fleet management, per-bike detail, weekly settlement</div>
      </div>
      <div style={{ display: 'flex', gap: 32 }}>
        {screens.map(s => (
          <div key={s.label}>
            <PhoneFrame>{s.el}</PhoneFrame>
            <div style={{ textAlign: 'center', marginTop: 12, fontSize: 12, color: '#6B7689', fontWeight: 600 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
