import React from 'react';
import { OpsDashboard } from '@/components/ops-dashboard';

export default function OpsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#05070F', fontFamily: 'var(--font-body)', padding: '40px 48px 64px' }}>
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#D20C7D', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>Kit 2 of 9</div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: '#F4F5FA', letterSpacing: '-0.02em' }}>Ops Dashboard</div>
        <div style={{ fontSize: 14, color: '#6B7689', marginTop: 6 }}>Station management, live KPIs, swap activity feed</div>
      </div>
      <div style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, overflow: 'hidden', height: 720 }}>
        <OpsDashboard />
      </div>
    </div>
  );
}
