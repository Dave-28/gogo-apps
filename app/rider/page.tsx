import React from 'react';
import { PhoneFrame } from '@/components/ios-frame';
import { WelcomeScreen, HomeScreen, MapScreen, ChargingScreen, HistoryScreen, WalletScreen } from '@/components/rider-screens';

const screens = [
  { label: 'Welcome', el: <WelcomeScreen /> },
  { label: 'Home', el: <HomeScreen /> },
  { label: 'Map / Find a swap', el: <MapScreen /> },
  { label: 'Charging', el: <ChargingScreen /> },
  { label: 'History', el: <HistoryScreen /> },
  { label: 'Wallet', el: <WalletScreen /> },
];

export default function RiderPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#05070F', fontFamily: 'var(--font-body)', padding: '40px 48px 64px' }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#D20C7D', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>Kit 1 of 9</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: '#F4F5FA', letterSpacing: '-0.02em' }}>Rider App</div>
        <div style={{ fontSize: 14, color: '#6B7689', marginTop: 6 }}>6 screens — onboarding, home, swap map, charging, history, wallet</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 32, justifyContent: 'start' }}>
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
