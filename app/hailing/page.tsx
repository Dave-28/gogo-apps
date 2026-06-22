import React from 'react';
import { PhoneFrame } from '@/components/ios-frame';
import { HailScreen, MatchScreen, ActiveTripScreen } from '@/components/hailing-screens';

const screens = [
  { label: 'Hail a boda', el: <HailScreen /> },
  { label: 'Rider matched', el: <MatchScreen /> },
  { label: 'Active trip', el: <ActiveTripScreen /> },
];

export default function HailingPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#05070F', fontFamily: 'var(--font-body)', padding: '40px 48px 64px' }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#D20C7D', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>Kit 7 of 9</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: '#F4F5FA', letterSpacing: '-0.02em' }}>Ride Hailing</div>
        <div style={{ fontSize: 14, color: '#6B7689', marginTop: 6 }}>Request a boda, match flow, live trip tracking</div>
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
