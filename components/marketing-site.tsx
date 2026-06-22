'use client';
import React from 'react';
import { C, FD, FB, FM, VFS_D, VFS_DT, VFS_DATA, BatterySVG, PlusMinusBg } from './shared';

const AUB100 = '#F2EAE7';
const MAG100 = '#FCE2EE';
const AUB50  = '#FAF6F4';
const AUB200 = '#EAE3E0';
const AUB900 = '#1A0A18';

function SiteNav() {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 48px', background: C.white, borderBottom: `1px solid ${AUB200}` }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/logo-full-colour.png" alt="GOGO" style={{ height: 26 }} />
      <nav style={{ display: 'flex', gap: 28 }}>
        {['Riders', 'Stations', 'Fleets', 'Coverage'].map(l => (
          <a key={l} href="#" style={{ fontFamily: FB, fontWeight: 500, fontSize: 14, color: AUB900, textDecoration: 'none', letterSpacing: '0.01em' }}>{l}</a>
        ))}
      </nav>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <a href="#" style={{ fontFamily: FB, fontWeight: 600, fontSize: 14, color: AUB900, textDecoration: 'none' }}>Sign in</a>
        <button style={{ background: C.aub, color: C.white, border: 'none', borderRadius: 999, padding: '10px 18px', fontFamily: FB, fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>
          Become a rider
        </button>
      </div>
    </header>
  );
}

function StationCard() {
  const slots = [
    [100, 100, 100, 100],
    [100, 100, 0, 100],
    [100, 0, 100, 100],
    [100, 100, 100, 0],
  ];
  return (
    <div style={{ background: C.aub, borderRadius: 20, padding: 24, color: C.white, position: 'relative', overflow: 'hidden', flex: 1 }}>
      <PlusMinusBg color="rgba(255,255,255,0.04)" size={20} gap={52} />
      <div style={{ position: 'relative' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: C.mag, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 6 }}>KABALAGALA STATION</div>
        <div style={{ fontFamily: FD, fontVariationSettings: VFS_DT, fontWeight: 800, fontSize: 22, marginBottom: 20 }}>14 batteries ready</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          {slots.map((row, ri) => row.map((charged, ci) => (
            <div key={`${ri}-${ci}`} style={{ display: 'flex', justifyContent: 'center' }}>
              <BatterySVG size={36} charged={charged} color={charged ? C.mag : 'rgba(255,255,255,0.15)'} />
            </div>
          )))}
        </div>
        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Open until</div>
            <div style={{ fontFamily: FM, fontWeight: 700, fontSize: 16, marginTop: 4 }}>22:00</div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Swap time</div>
            <div style={{ fontFamily: FM, fontWeight: 700, fontSize: 16, marginTop: 4 }}>~60 sec</div>
          </div>
          <div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Price</div>
            <div style={{ fontFamily: FM, fontWeight: 700, fontSize: 16, marginTop: 4 }}>UGX 6,000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MarketingSite() {
  return (
    <div style={{ fontFamily: FB, background: C.white, minWidth: 1100 }}>
      <SiteNav />

      {/* HERO */}
      <section style={{ background: AUB50, padding: '80px 80px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: MAG100, borderRadius: 999, padding: '6px 14px', fontSize: 12, fontWeight: 700, color: '#95075A', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.mag }} />
              14 stations live · Kampala
            </div>
            <div style={{ fontFamily: FD, fontVariationSettings: VFS_D, fontWeight: 800, fontSize: 72, lineHeight: 0.92, letterSpacing: '-0.035em', color: AUB900, textTransform: 'uppercase', marginBottom: 28 }}>
              SWAP IN<br />
              60 SECONDS.<br />
              <span style={{ color: C.mag }}>RIDE ALL DAY.</span>
            </div>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: C.fg2, maxWidth: 460, marginBottom: 36 }}>
              GOGO&apos;s battery-swap network keeps boda riders earning. Drop off your flat battery. Pick up a full one. 60 seconds — no charging wait.
            </p>
            <div style={{ display: 'flex', gap: 12, marginBottom: 56 }}>
              <button style={{ background: C.aub, color: C.white, border: 'none', borderRadius: 999, padding: '16px 28px', fontFamily: FB, fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>Find a station</button>
              <button style={{ background: 'transparent', color: C.aub, border: `2px solid ${C.aub}`, borderRadius: 999, padding: '16px 28px', fontFamily: FB, fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>Lease a bike</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, paddingTop: 32, borderTop: `1px solid ${AUB200}` }}>
              {[['60s', 'Swap time'], ['14', 'Stations'], ['2,400+', 'Active riders'], ['18M+', 'UGX saved']].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: FD, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 32, color: AUB900, letterSpacing: '-0.02em', lineHeight: 1 }}>{v}</div>
                  <div style={{ fontSize: 12, color: C.fg3, marginTop: 6, fontWeight: 500 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <StationCard />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div style={{ background: AUB900, borderRadius: 16, padding: '20px 18px', color: C.white }}>
                <BatterySVG size={40} charged={8} color="rgba(255,255,255,0.15)" />
                <div style={{ fontFamily: FD, fontVariationSettings: VFS_DT, fontWeight: 800, fontSize: 20, marginTop: 10 }}>8%</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>− RETURNING</div>
              </div>
              <div style={{ background: MAG100, borderRadius: 16, padding: '20px 18px' }}>
                <BatterySVG size={40} charged={100} color={C.mag} />
                <div style={{ fontFamily: FD, fontVariationSettings: VFS_DT, fontWeight: 800, fontSize: 20, marginTop: 10, color: AUB900 }}>100%</div>
                <div style={{ fontSize: 11, color: C.fg3, marginTop: 4 }}>+ TAKING</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: AUB100, padding: '80px 80px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: C.mag, textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: 16 }}>HOW IT WORKS</div>
          <h2 style={{ fontFamily: FD, fontVariationSettings: VFS_D, fontWeight: 800, fontSize: 44, letterSpacing: '-0.025em', color: AUB900, marginBottom: 48, textTransform: 'uppercase' }}>THREE STEPS. THAT&apos;S IT.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { num: '01', title: 'RIDE IN', body: 'Roll up to any GOGO station. Show your app QR code to the swap officer.' },
              { num: '02', title: 'SWAP BATTERY', body: 'Hand over your flat pack, receive a fully charged one. 60 seconds or less.' },
              { num: '03', title: 'RIDE OUT', body: 'Full charge, fresh kilometres. Payment deducted from your GOGO wallet.' },
            ].map(step => (
              <div key={step.num} style={{ background: C.white, borderRadius: 16, padding: '28px 24px' }}>
                <div style={{ fontFamily: FD, fontVariationSettings: VFS_D, fontWeight: 800, fontSize: 48, color: C.mag, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 16 }}>{step.num}</div>
                <div style={{ fontFamily: FD, fontVariationSettings: VFS_DT, fontWeight: 800, fontSize: 22, color: AUB900, marginBottom: 12, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>{step.title}</div>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: C.fg2 }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DUAL FEATURE */}
      <section style={{ padding: '80px 80px', background: C.white }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ background: AUB900, borderRadius: 20, padding: '40px 36px', color: C.white, position: 'relative', overflow: 'hidden' }}>
            <PlusMinusBg color="rgba(255,255,255,0.04)" size={22} gap={56} />
            <div style={{ position: 'relative' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: C.mag, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>THE E-BODA</div>
              <div style={{ fontFamily: FD, fontVariationSettings: VFS_D, fontWeight: 800, fontSize: 40, textTransform: 'uppercase', letterSpacing: '-0.025em', marginBottom: 16, lineHeight: 0.95 }}>BUILT FOR<br />THE ROAD.</div>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 32 }}>Locally assembled. Tough enough for Kampala&apos;s roads. Lower running costs than any petrol bike.</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/ev-bike-white.png" alt="GOGO E-Boda" style={{ width: '100%', maxHeight: 180, objectFit: 'contain', margin: '0 0 24px' }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                {[['150km', 'Range'], ['3 yr', 'Battery life'], ['−40%', 'vs petrol']].map(([v, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: FM, fontWeight: 700, fontSize: 20, color: C.white }}>{v}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ background: AUB50, borderRadius: 20, padding: '40px 36px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.mag, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: 12 }}>SWAP STATIONS</div>
            <div style={{ fontFamily: FD, fontVariationSettings: VFS_D, fontWeight: 800, fontSize: 40, textTransform: 'uppercase', letterSpacing: '-0.025em', marginBottom: 16, lineHeight: 0.95, color: AUB900 }}>EVERYWHERE<br />YOU RIDE.</div>
            <p style={{ fontSize: 15, color: C.fg2, lineHeight: 1.6, marginBottom: 32 }}>14 stations across Kampala. More opening in Entebbe, Jinja, and Mbarara in Q3.</p>
            <div style={{ background: AUB200, borderRadius: 14, height: 180, position: 'relative', overflow: 'hidden', marginBottom: 24 }}>
              {[{ x: '22%', y: '35%' }, { x: '45%', y: '55%' }, { x: '65%', y: '28%' }, { x: '78%', y: '62%' }, { x: '35%', y: '70%' }].map((pos, i) => (
                <div key={i} style={{ position: 'absolute', left: pos.x, top: pos.y, transform: 'translate(-50%,-50%)' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: C.mag, boxShadow: '0 0 0 3px rgba(210,12,125,0.2)' }} />
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, paddingTop: 24, borderTop: `1px solid ${AUB200}` }}>
              {[['14', 'Stations'], ['24h', 'Open Mon-Sat'], ['60s', 'Avg swap']].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: FM, fontWeight: 700, fontSize: 20, color: AUB900 }}>{v}</div>
                  <div style={{ fontSize: 11, color: C.fg3, marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <section style={{ background: AUB900, padding: '56px 80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: FD, fontVariationSettings: VFS_D, fontWeight: 800, fontSize: 36, color: C.white, textTransform: 'uppercase', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
            POWER YOUR<br /><span style={{ color: C.mag }}>JOURNEY.</span>
          </div>
        </div>
        <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: FB, fontWeight: 700, fontSize: 16, color: C.white, textDecoration: 'none' }}>
          See coverage map →
        </a>
      </section>
    </div>
  );
}
