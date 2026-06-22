import React from 'react';
import { SwapOpsOverview, SwapOpsStations } from '@/components/swap-ops-screens';

export default function SwapOpsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#05070F', fontFamily: 'var(--font-body)', padding: '40px 48px 64px' }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#D20C7D', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>Kit 9 of 9</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: '#F4F5FA', letterSpacing: '-0.02em' }}>Swap Ops</div>
        <div style={{ fontSize: 14, color: '#6B7689', marginTop: 6 }}>Live overview, KPI dashboard, station management table</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div style={{ fontSize: 12, color: '#6B7689', fontWeight: 600, marginBottom: 12 }}>Overview</div>
          <div style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, overflow: 'hidden', height: 700 }}>
            <SwapOpsOverview />
          </div>
        </div>
        <div>
          <div style={{ fontSize: 12, color: '#6B7689', fontWeight: 600, marginBottom: 12 }}>Stations table</div>
          <div style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, overflow: 'hidden', height: 600 }}>
            <SwapOpsStations />
          </div>
        </div>
      </div>
    </div>
  );
}
