'use client';
import React from 'react';

function IOSStatusBar({ dark }: { dark?: boolean }) {
  const color = dark ? '#FFFFFF' : '#15010C';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '12px 24px 4px', height: 44, flexShrink: 0,
    }}>
      <span style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 700, fontSize: 15, color, letterSpacing: '-0.01em' }}>9:41</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="18" height="12" viewBox="0 0 18 12" fill={color}>
          <rect x="0" y="7" width="3" height="5" rx="0.5" />
          <rect x="4.5" y="4.5" width="3" height="7.5" rx="0.5" />
          <rect x="9" y="2" width="3" height="10" rx="0.5" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill={color}>
          <path d="M8 2.5C10.8 2.5 13.3 3.7 15 5.6L16 4.4C14 2.2 11.2 0.8 8 0.8C4.8 0.8 2 2.2 0 4.4L1 5.6C2.7 3.7 5.2 2.5 8 2.5Z" />
          <path d="M8 5.5C10 5.5 11.8 6.3 13.2 7.6L14.2 6.4C12.5 4.9 10.4 4 8 4C5.6 4 3.5 4.9 1.8 6.4L2.8 7.6C4.2 6.3 6 5.5 8 5.5Z" />
          <circle cx="8" cy="11" r="1.5" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke={color} strokeOpacity="0.35" />
          <rect x="2" y="2" width="16" height="8" rx="2" fill={color} />
          <path d="M22.5 4.5V7.5C23.3 7.2 24 6.5 24 6C24 5.5 23.3 4.8 22.5 4.5Z" fill={color} fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

interface IOSDeviceProps {
  children: React.ReactNode;
  dark?: boolean;
}

export function IOSDevice({ children, dark }: IOSDeviceProps) {
  return (
    <div style={{
      width: 402, height: 874,
      borderRadius: 52,
      background: dark ? '#1A0618' : '#FFFFFF',
      border: `2px solid ${dark ? '#2A1228' : '#D8CFD7'}`,
      boxShadow: '0 24px 64px rgba(21,1,12,0.18), 0 4px 12px rgba(21,1,12,0.08)',
      display: 'flex', flexDirection: 'column',
      position: 'relative', overflow: 'hidden',
      flexShrink: 0,
    }}>
      {/* Dynamic Island */}
      <div style={{
        position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)',
        width: 126, height: 37, borderRadius: 20,
        background: '#000000', zIndex: 10,
      }} />
      <IOSStatusBar dark={dark} />
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
      {/* Home indicator */}
      <div style={{
        height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <div style={{
          width: 134, height: 5, borderRadius: 3,
          background: dark ? 'rgba(255,255,255,0.3)' : 'rgba(21,1,12,0.18)',
        }} />
      </div>
    </div>
  );
}

// Scaled frame for display in a grid
export function PhoneFrame({ children, dark }: IOSDeviceProps) {
  return (
    <div style={{ width: 402 * 0.62, height: 874 * 0.62, overflow: 'hidden', flexShrink: 0 }}>
      <div style={{ transform: 'scale(0.62)', transformOrigin: 'top left', width: 402, height: 874 }}>
        <IOSDevice dark={dark}>{children}</IOSDevice>
      </div>
    </div>
  );
}
