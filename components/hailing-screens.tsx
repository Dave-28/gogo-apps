'use client';
import React from 'react';
import { C, FD, FB, FM, VFS_D, VFS_DT, VFS_DATA, Button, Pill, Caption, MapPlaceholder, PlusMinusBg } from './shared';
import { AppTopBar, TabBar } from './app-top-bar';

export function HailScreen() {
  const recents = ['Acacia Mall', 'Makerere University', 'Garden City'];
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        title="GOGO BODA"
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="14" y2="18"/></svg>}
        trailing={<div style={{ width: 32, height: 32, borderRadius: 999, background: C.aub, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FD, fontWeight: 800, fontSize: 13 }}>JO</div>}
      />
      <div style={{ flex: 1, position: 'relative' }}>
        <div style={{ height: 280, position: 'relative', background: '#F2EAE7', backgroundImage: 'linear-gradient(to right, rgba(64,16,60,0.06) 1px, transparent 1px),linear-gradient(to bottom, rgba(64,16,60,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px', overflow: 'hidden' }}>
          <svg width="100%" height="100%" viewBox="0 0 390 280" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
            <path d="M0,120 C 80,120 140,160 200,160 S 300,130 390,120" stroke="rgba(64,16,60,0.14)" strokeWidth="3" fill="none"/>
            <path d="M160,0 L160,280" stroke="rgba(64,16,60,0.10)" strokeWidth="2" fill="none"/>
            <path d="M0,55 L390,55" stroke="rgba(64,16,60,0.08)" strokeWidth="2" fill="none"/>
          </svg>
          {/* Nearby bikes */}
          {[{ x: 80, y: 90 }, { x: 240, y: 130 }, { x: 320, y: 70 }].map((p, i) => (
            <div key={i} style={{ position: 'absolute', left: p.x, top: p.y, transform: 'translate(-50%,-50%)' }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: C.aub, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.white} strokeWidth="2"><path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v5a2 2 0 01-2 2h-1M14 17H7m-2 0a2 2 0 100 4 2 2 0 000-4zm9 0a2 2 0 100 4 2 2 0 000-4"/></svg>
              </div>
            </div>
          ))}
          {/* You */}
          <div style={{ position: 'absolute', left: '50%', top: '60%', transform: 'translate(-50%,-50%)', width: 16, height: 16, borderRadius: 999, background: C.mag, border: `3px solid ${C.white}`, boxShadow: '0 0 0 6px rgba(210,12,125,0.18)' }} />
        </div>

        <div style={{ background: C.white, marginTop: -20, borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: '16px 20px', boxShadow: '0 -8px 24px rgba(64,16,60,0.10)' }}>
          <div style={{ width: 40, height: 4, background: C.hairline, borderRadius: 999, margin: '0 auto 16px' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#FAF6F9', border: `1.5px solid ${C.aub}`, borderRadius: 12, padding: '12px 14px', marginBottom: 20 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.mag} strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input readOnly value="Where to?" style={{ flex: 1, border: 'none', background: 'transparent', fontFamily: FB, fontSize: 15, fontWeight: 500, color: C.fg3, outline: 'none', cursor: 'pointer' }} />
          </div>
          <Caption style={{ marginBottom: 10 }}>Recent destinations</Caption>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {recents.map((dest, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 0', borderBottom: i < recents.length - 1 ? `1px solid ${C.hairline}` : 'none' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: C.hairline, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.fg3} strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div style={{ flex: 1, fontWeight: 500, fontSize: 14, color: C.fg1 }}>{dest}</div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.fg4} strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MatchScreen() {
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar title="RIDER FOUND" leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>} />
      <MapPlaceholder height={180} />
      <div style={{ flex: 1, padding: '16px 20px 24px', overflowY: 'auto' }}>
        <div style={{ background: C.aub, borderRadius: 18, padding: '16px 18px', color: C.white, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 52, height: 52, borderRadius: 999, background: C.mag, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FD, fontWeight: 800, fontSize: 20, flexShrink: 0 }}>MK</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FB, fontWeight: 700, fontSize: 16 }}>Musa Kato</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>★ 4.9 · 2,184 rides · UAJ 027F</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: FD, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 32, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em', lineHeight: 1 }}>3</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>min away</div>
          </div>
        </div>

        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 14, padding: '14px 16px', marginBottom: 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <Caption>Trip details</Caption>
            <div style={{ fontFamily: FD, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 22, color: C.aub, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>UGX 4,200</div>
          </div>
          <div style={{ fontSize: 14, color: C.fg2 }}>Kololo → Acacia Mall <span style={{ color: C.fg3 }}>· 2.4 km</span></div>
          <div style={{ marginTop: 10, fontSize: 12, color: C.fg3 }}>Pickup code: <span style={{ fontFamily: FM, fontWeight: 700, color: C.aub, fontSize: 14 }}>427</span></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <Button variant="secondary" full>Cancel</Button>
          <Button variant="accent" full>Confirm trip</Button>
        </div>
      </div>
    </div>
  );
}

export function ActiveTripScreen() {
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        title="ON THE WAY"
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>}
      />
      <div style={{ background: C.mag, padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ color: C.white }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.10em', opacity: 0.8 }}>ETA</div>
          <div style={{ fontFamily: FD, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 36, lineHeight: 1, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em' }}>7 <span style={{ fontSize: 16, opacity: 0.8 }}>min</span></div>
        </div>
        <div style={{ color: C.white, textAlign: 'right' }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.10em', opacity: 0.8 }}>Fare</div>
          <div style={{ fontFamily: FM, fontWeight: 700, fontSize: 20 }}>UGX 4,200</div>
        </div>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px 24px' }}>
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 14, padding: '14px 16px', marginBottom: 14 }}>
          <Caption style={{ marginBottom: 10 }}>Route</Caption>
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: C.mag, border: `2px solid ${C.white}`, boxShadow: `0 0 0 2px ${C.mag}` }} />
              <div style={{ width: 2, height: 28, background: C.hairline }} />
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: C.aub, border: `2px solid ${C.white}`, boxShadow: `0 0 0 2px ${C.aub}` }} />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.fg1, marginBottom: 2 }}>Kololo</div>
              <div style={{ fontSize: 11, color: C.fg3, marginBottom: 14 }}>Picked up</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.fg1, marginBottom: 2 }}>Acacia Mall</div>
              <div style={{ fontSize: 11, color: C.fg3 }}>2.4 km · destination</div>
            </div>
          </div>
        </div>

        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 14, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 999, background: C.aub, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FD, fontWeight: 800, fontSize: 18 }}>MK</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: C.fg1 }}>Musa Kato</div>
            <div style={{ fontSize: 12, color: C.fg3, marginTop: 2 }}>★ 4.9 · UAJ 027F</div>
          </div>
          <button style={{ background: C.hairline, border: 'none', borderRadius: 999, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.aub} strokeWidth="2" strokeLinecap="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.7.4 1.4.6 2a2 2 0 01-.5 2.1l-1.3 1.3a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.5c.7.3 1.3.5 2 .6a2 2 0 011.7 2.1z"/></svg>
          </button>
        </div>

        <Button variant="secondary" full style={{ marginTop: 14 }}>Cancel trip</Button>
      </div>
    </div>
  );
}
