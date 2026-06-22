'use client';
import React from 'react';
import { C, FD, VFS_DT, VFS_D } from './shared';

interface AppTopBarProps {
  title: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  dark?: boolean;
}

export function AppTopBar({ title, leading, trailing, dark }: AppTopBarProps) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 20px 10px',
      color: dark ? C.white : C.aub,
    }}>
      <div style={{ width: 36, display: 'flex', justifyContent: 'flex-start' }}>{leading}</div>
      <div style={{
        fontFamily: FD, fontVariationSettings: VFS_DT,
        fontWeight: 800, fontSize: 17,
        textTransform: 'uppercase', letterSpacing: '-0.01em',
      }}>{title}</div>
      <div style={{ width: 36, display: 'flex', justifyContent: 'flex-end' }}>{trailing}</div>
    </div>
  );
}

interface TabBarProps {
  active: 'home' | 'map' | 'go' | 'trips' | 'me';
  onTab?: (id: string) => void;
}

export function TabBar({ active, onTab }: TabBarProps) {
  const tabs: Array<{ id: string; path: string; isGo?: boolean }> = [
    { id: 'home', path: 'M3 12L12 4l9 8M5 10v10h14V10' },
    { id: 'map', path: 'M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14' },
    { id: 'go', path: '', isGo: true },
    { id: 'trips', path: 'M4 7h16M4 12h16M4 17h10' },
    { id: 'me', path: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21v-1a6 6 0 016-6h4a6 6 0 016 6v1' },
  ];
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      padding: '10px 16px 12px',
      background: C.white, borderTop: `1px solid ${C.hairline}`,
      flexShrink: 0,
    }}>
      {tabs.map(t => t.isGo ? (
        <button key={t.id} onClick={() => onTab?.('go')} style={{
          width: 56, height: 56, borderRadius: 999, background: C.mag,
          color: C.white, border: 'none',
          fontFamily: FD, fontVariationSettings: VFS_D,
          fontWeight: 800, fontSize: 18,
          letterSpacing: '0.04em', cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(210,12,125,0.35)',
          marginTop: -28,
        }}>GO</button>
      ) : (
        <button key={t.id} onClick={() => onTab?.(t.id)} style={{
          background: 'transparent', border: 'none', padding: 8, cursor: 'pointer',
          color: active === t.id ? C.aub : C.fg4,
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d={t.path} />
          </svg>
        </button>
      ))}
    </div>
  );
}
