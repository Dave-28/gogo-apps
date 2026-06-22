// ride-hailing/screens.jsx — passenger app for hailing a GOGO boda

// ═══════════════════════════════════════════════════════
// 01 HAIL — where to?
// ═══════════════════════════════════════════════════════
function HailScreen() {
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Map fills top */}
      <div style={{
        flex: 1, position: 'relative',
        background: '#F2EAE7',
        backgroundImage:
          'linear-gradient(to right, rgba(64,16,60,0.06) 1px, transparent 1px),' +
          'linear-gradient(to bottom, rgba(64,16,60,0.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        overflow: 'hidden',
      }}>
        <svg width="100%" height="100%" viewBox="0 0 390 500" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
          <path d="M0,260 C 80,260 120,200 200,200 S 320,260 390,260" stroke="rgba(64,16,60,0.14)" strokeWidth="3" fill="none"/>
          <path d="M180,0 L180,500" stroke="rgba(64,16,60,0.10)" strokeWidth="2" fill="none"/>
        </svg>
        {/* nearby bikes */}
        {[
          { x: 80, y: 240 }, { x: 240, y: 180 }, { x: 300, y: 280 }, { x: 140, y: 320 },
        ].map((b, i) => (
          <div key={i} style={{
            position: 'absolute', left: b.x, top: b.y,
            width: 28, height: 28, borderRadius: 999, background: C.aub,
            color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(64,16,60,0.25)',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/>
              <path d="M6 17 L10 9 L14 9 L17 14"/>
            </svg>
          </div>
        ))}
        {/* user pin */}
        <div style={{
          position: 'absolute', left: '50%', top: 240,
          transform: 'translate(-50%, -100%)',
        }}>
          <div style={{
            background: C.mag, color: C.white,
            padding: '8px 14px', borderRadius: 999,
            fontFamily: FONT_BODY, fontWeight: 700, fontSize: 13,
            boxShadow: '0 8px 24px rgba(210,12,125,0.35)',
          }}>You</div>
          <div style={{ width: 16, height: 16, borderRadius: 999, background: C.mag, border: `3px solid ${C.white}`, margin: '4px auto 0', boxShadow: '0 0 0 8px rgba(210,12,125,0.18)' }}/>
        </div>

        {/* Top bar overlay */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 999, background: C.white,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(64,16,60,0.10)',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.aub} strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="14" y2="18"/></svg>
          </div>
          <div style={{ flex: 1 }}/>
          <div style={{
            width: 40, height: 40, borderRadius: 999, background: C.white,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(64,16,60,0.10)',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.aub} strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82"/></svg>
          </div>
        </div>
      </div>

      {/* Sheet */}
      <div style={{
        background: C.white, borderTopLeftRadius: 24, borderTopRightRadius: 24,
        padding: '14px 20px 28px', boxShadow: '0 -12px 28px rgba(64,16,60,0.10)',
      }}>
        <div style={{ width: 40, height: 4, background: C.hairline, borderRadius: 999, margin: '0 auto 14px' }}/>
        <div style={{
          fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY,
          fontWeight: 800, fontSize: 32, color: C.aub, lineHeight: 1, letterSpacing: '-0.02em', textTransform: 'uppercase',
        }}>WHERE TO?</div>

        {/* Search */}
        <div style={{
          marginTop: 14, background: C.bg, border: `1px solid ${C.hairline}`,
          borderRadius: 12, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.fg3} strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <span style={{ fontFamily: FONT_BODY, fontSize: 14, color: C.fg3 }}>Search destination</span>
        </div>

        {/* Recent */}
        <Caption style={{ marginTop: 18, marginBottom: 6 }}>Recent</Caption>
        {[
          { name: 'Acacia Mall', sub: 'Kololo · 2.4 km', icon: '★' },
          { name: 'Makerere University', sub: 'Wandegeya · 4.1 km', icon: '◷' },
          { name: 'Garden City', sub: 'Kampala Road · 5.2 km', icon: '◷' },
        ].map((r, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: C.aub50, color: C.aub, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontWeight: 800, fontSize: 14 }}>{r.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 14 }}>{r.name}</div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: C.fg3, marginTop: 2 }}>{r.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 02 MATCH — rider on the way
// ═══════════════════════════════════════════════════════
function MatchScreen() {
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Map */}
      <div style={{
        flex: 1, position: 'relative',
        background: '#F2EAE7',
        backgroundImage:
          'linear-gradient(to right, rgba(64,16,60,0.06) 1px, transparent 1px),' +
          'linear-gradient(to bottom, rgba(64,16,60,0.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        overflow: 'hidden',
      }}>
        <svg width="100%" height="100%" viewBox="0 0 390 380" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
          <path d="M40,300 Q 140,260 200,200" stroke={C.mag} strokeWidth="4" fill="none" strokeLinecap="round"/>
        </svg>
        {/* rider arriving */}
        <div style={{ position: 'absolute', left: 40, top: 290, width: 36, height: 36, borderRadius: 999, background: C.aub, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(64,16,60,0.3)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/>
            <path d="M6 17 L10 9 L14 9 L17 14"/>
          </svg>
        </div>
        {/* user pin */}
        <div style={{ position: 'absolute', left: 200, top: 200, width: 16, height: 16, borderRadius: 999, background: C.mag, border: `3px solid ${C.white}`, boxShadow: '0 0 0 8px rgba(210,12,125,0.18)' }}/>
      </div>

      {/* Sheet */}
      <div style={{
        background: C.white, borderTopLeftRadius: 24, borderTopRightRadius: 24,
        padding: '14px 20px 24px', boxShadow: '0 -12px 28px rgba(64,16,60,0.10)',
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <div style={{
            fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY,
            fontWeight: 800, fontSize: 22, color: C.aub, letterSpacing: '-0.02em',
          }}>ON THE WAY</div>
          <div style={{
            fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA,
            fontWeight: 800, fontSize: 32, color: C.mag, lineHeight: 1, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em',
          }}>3<span style={{ fontSize: 13, color: C.fg3, marginLeft: 3 }}>min</span></div>
        </div>

        {/* Rider card */}
        <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 56, height: 56, borderRadius: 999, background: C.aub, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY, fontWeight: 800, fontSize: 22 }}>MK</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 16 }}>Musa Kato</div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.fg3, marginTop: 2 }}>★ 4.9 · 2,184 rides</div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ width: 44, height: 44, borderRadius: 999, background: C.aub, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.95.37 1.88.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.93.35 1.86.59 2.81.72a2 2 0 0 1 1.72 2z"/></svg>
            </div>
            <div style={{ width: 44, height: 44, borderRadius: 999, background: C.aub50, color: C.aub, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
          </div>
        </div>

        {/* Bike info */}
        <div style={{ marginTop: 14, background: C.aub, color: C.white, borderRadius: 12, padding: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Bike</div>
            <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY, fontWeight: 800, fontSize: 24, marginTop: 4, letterSpacing: '-0.02em' }}>UAJ 027F</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Code</div>
            <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 24, marginTop: 4, color: C.mag, letterSpacing: '-0.02em' }}>4 2 7</div>
          </div>
        </div>

        {/* Trip */}
        <div style={{ marginTop: 12, fontFamily: FONT_BODY, fontSize: 12, color: C.fg3, display: 'flex', justifyContent: 'space-between' }}>
          <span>To <strong style={{ color: C.fg1 }}>Acacia Mall</strong> · 2.4 km</span>
          <span style={{ fontFamily: FONT_MONO, color: C.aub, fontWeight: 700 }}>UGX 4,200</span>
        </div>

        <Button variant="ghost" full style={{ marginTop: 12, color: C.fg2 }}>Cancel</Button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 03 ACTIVE TRIP — in motion
// ═══════════════════════════════════════════════════════
function ActiveTripScreen() {
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Map */}
      <div style={{
        flex: 1, position: 'relative',
        background: '#F2EAE7',
        backgroundImage:
          'linear-gradient(to right, rgba(64,16,60,0.06) 1px, transparent 1px),' +
          'linear-gradient(to bottom, rgba(64,16,60,0.06) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        overflow: 'hidden',
      }}>
        <svg width="100%" height="100%" viewBox="0 0 390 380" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
          <path d="M40,300 C 100,260 160,220 220,180 S 340,80 380,40" stroke={C.aub200} strokeWidth="4" fill="none" strokeLinecap="round"/>
          <path d="M40,300 C 100,260 160,220 220,180" stroke={C.mag} strokeWidth="4" fill="none" strokeLinecap="round"/>
        </svg>
        <div style={{ position: 'absolute', left: 30, top: 290, width: 14, height: 14, borderRadius: 999, background: C.aub, border: `3px solid ${C.white}` }}/>
        <div style={{ position: 'absolute', left: 215, top: 170, width: 36, height: 36, borderRadius: 999, background: C.mag, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(210,12,125,0.4)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/>
            <path d="M6 17 L10 9 L14 9 L17 14"/>
          </svg>
        </div>
        <div style={{ position: 'absolute', right: 30, top: 30, width: 18, height: 18, borderRadius: 999, background: C.aub, border: `4px solid ${C.white}` }}/>

        <div style={{
          position: 'absolute', top: 16, left: 16,
          background: C.white, padding: '8px 14px', borderRadius: 999,
          fontFamily: FONT_MONO, fontSize: 11, fontWeight: 700, color: C.aub,
          boxShadow: '0 4px 12px rgba(64,16,60,0.10)',
        }}>● TRIP IN PROGRESS</div>
      </div>

      {/* Sheet */}
      <div style={{
        background: C.aub, color: C.white,
        borderTopLeftRadius: 24, borderTopRightRadius: 24,
        padding: '18px 20px 24px', position: 'relative', overflow: 'hidden',
      }}>
        <PlusMinusBg color="rgba(255,255,255,0.04)" size={20} gap={56}/>
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>ETA</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 52, lineHeight: 1, marginTop: 4, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.04em' }}>
                7<span style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)' }}> min</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Fare</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 36, color: C.mag, lineHeight: 1, marginTop: 4, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em' }}>4,200</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>UGX</div>
            </div>
          </div>

          {/* Route */}
          <div style={{ marginTop: 22, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.10)', display: 'flex', gap: 12 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, paddingTop: 4 }}>
              <div style={{ width: 10, height: 10, borderRadius: 999, background: 'rgba(255,255,255,0.4)' }}/>
              <div style={{ width: 2, height: 32, background: 'rgba(255,255,255,0.2)' }}/>
              <div style={{ width: 10, height: 10, borderRadius: 999, background: C.mag }}/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>Kololo · 7th st</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>picked up · 06:12</div>
              <div style={{ marginTop: 14, fontFamily: FONT_BODY, fontWeight: 700, fontSize: 13 }}>Acacia Mall</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>2.4 km · ETA 06:19</div>
            </div>
          </div>

          {/* Driver micro card */}
          <div style={{ marginTop: 18, padding: 12, background: 'rgba(255,255,255,0.06)', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 999, background: C.mag, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY, fontWeight: 800, fontSize: 15 }}>MK</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 14 }}>Musa Kato</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>UAJ 027F · ★ 4.9</div>
            </div>
            <Button variant="accent" style={{ padding: '8px 14px', fontSize: 12 }}>Share trip</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { HailScreen, MatchScreen, ActiveTripScreen });
