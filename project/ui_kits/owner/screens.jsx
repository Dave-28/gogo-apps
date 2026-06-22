// owner/screens.jsx — fleet owner app
// For boda owners who lease 1-5 bikes to riders & earn per swap.

// ═══════════════════════════════════════════════════════
// 01 FLEET — today's earnings + bike list
// ═══════════════════════════════════════════════════════
function FleetScreen() {
  const bikes = [
    { plate: 'UAJ 027F', rider: 'Musa Kato', km: 64, ugx: '38k', battery: 28, status: 'riding' },
    { plate: 'UAH 119B', rider: 'Jane Akello', km: 42, ugx: '24k', battery: 78, status: 'riding' },
    { plate: 'UAK 802L', rider: 'David Okello', km: 0, ugx: '0', battery: 100, status: 'idle' },
  ];
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="14" y2="18"/></svg>}
        title="MY FLEET"
        trailing={
          <div style={{ width: 32, height: 32, borderRadius: 999, background: C.aub, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY, fontWeight: 800, fontSize: 13 }}>JS</div>
        }
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 24px' }}>
        {/* Today hero */}
        <div style={{ background: C.aub, borderRadius: 20, padding: 22, color: C.white, position: 'relative', overflow: 'hidden' }}>
          <PlusMinusBg color="rgba(255,255,255,0.04)" size={20} gap={56}/>
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>TODAY · 3 BIKES</div>
            <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 76, lineHeight: 0.95, marginTop: 6, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.04em' }}>
              62k<span style={{ fontSize: 22, color: 'rgba(255,255,255,0.55)', marginLeft: 6 }}>UGX</span>
            </div>
            <div style={{ display: 'flex', gap: 18, marginTop: 18, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.10)' }}>
              <div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Distance</div>
                <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 700, fontSize: 18, marginTop: 4 }}>106 km</div>
              </div>
              <div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Swaps</div>
                <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 700, fontSize: 18, marginTop: 4 }}>5</div>
              </div>
              <div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>vs avg</div>
                <div style={{ fontFamily: FONT_MONO, fontWeight: 700, fontSize: 14, marginTop: 6, color: '#F08FBE' }}>+ 14%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mini chart */}
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, padding: '14px 16px', marginTop: 12 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
            <Caption>This week</Caption>
            <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.fg3 }}>UGX 384k</span>
          </div>
          {/* simple bar chart */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 56 }}>
            {[34, 52, 41, 68, 58, 71, 62].map((v, i) => (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{
                  width: '100%', height: `${v}%`,
                  background: i === 6 ? C.mag : C.aub,
                  borderRadius: 3,
                }}/>
                <span style={{ fontFamily: FONT_MONO, fontSize: 9, color: C.fg3 }}>{['M','T','W','T','F','S','S'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bikes */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 22, marginBottom: 10 }}>
          <Caption>Bikes</Caption>
          <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.fg3 }}>2 active · 1 idle</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {bikes.map((b, i) => (
            <div key={i} style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, padding: 14 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: b.status === 'riding' ? 'rgba(210,12,125,0.08)' : C.aub50,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={b.status === 'riding' ? C.mag : C.fg3} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/>
                      <path d="M6 17 L10 9 L14 9 L17 14"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY_TIGHT, fontWeight: 800, fontSize: 16, color: C.aub, letterSpacing: '-0.01em' }}>{b.plate}</div>
                    <div style={{ fontSize: 11, color: C.fg3, marginTop: 2 }}>{b.rider}</div>
                  </div>
                </div>
                {b.status === 'riding'
                  ? <Pill tone="mag">● live</Pill>
                  : <Pill tone="soft">idle</Pill>
                }
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 14, paddingTop: 12, borderTop: `1px solid ${C.hairline}` }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: C.fg3, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Today</div>
                  <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 20, color: C.aub, marginTop: 4, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>{b.ugx}<span style={{ fontSize: 10, color: C.fg3, marginLeft: 3 }}>UGX</span></div>
                </div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: C.fg3, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Km</div>
                  <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 20, color: C.aub, marginTop: 4, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>{b.km}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <BatterySVG size={22} charged={b.battery}/>
                  <span style={{ fontFamily: FONT_MONO, fontSize: 12, color: b.battery >= 40 ? C.fg2 : '#E08200', fontWeight: 600 }}>{b.battery}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 02 BIKE DETAIL — one bike's live status
// ═══════════════════════════════════════════════════════
function BikeDetailScreen() {
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        title="UAJ 027F"
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>}
        trailing={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82M9.5 4.21a1.65 1.65 0 0 0 1 1.51"/></svg>}
      />
      {/* Map */}
      <div style={{
        height: 180, position: 'relative',
        background: '#F2EAE7',
        backgroundImage:
          'linear-gradient(to right, rgba(64,16,60,0.06) 1px, transparent 1px),' +
          'linear-gradient(to bottom, rgba(64,16,60,0.06) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        overflow: 'hidden',
      }}>
        <svg width="100%" height="100%" viewBox="0 0 390 180" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
          <path d="M40,140 C 120,140 160,80 220,60" stroke={C.mag} strokeWidth="3" fill="none" strokeLinecap="round"/>
        </svg>
        <div style={{ position: 'absolute', left: 40, top: 134, width: 14, height: 14, borderRadius: 999, background: C.aub, border: `3px solid ${C.white}` }}/>
        <div style={{ position: 'absolute', left: 220, top: 54, width: 20, height: 20, borderRadius: 999, background: C.mag, border: `3px solid ${C.white}`, boxShadow: '0 0 0 8px rgba(210,12,125,0.20)' }}/>
        <div style={{ position: 'absolute', right: 16, top: 16, background: C.white, padding: '6px 10px', borderRadius: 999, fontFamily: FONT_MONO, fontSize: 10, fontWeight: 700, color: C.aub, boxShadow: '0 2px 8px rgba(64,16,60,0.10)' }}>
          ● live · Kololo
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 20px 24px' }}>
        {/* Rider chip */}
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, padding: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 999, background: C.mag, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY, fontWeight: 800, fontSize: 15 }}>MK</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 14 }}>Musa Kato</div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.fg3, marginTop: 2 }}>Riding since 06:08 · ★ 4.9</div>
          </div>
          <Button variant="ghost" style={{ padding: '6px 14px', fontSize: 12 }}>Call</Button>
        </div>

        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 14 }}>
          <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, padding: 14 }}>
            <Caption>Today</Caption>
            <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 32, color: C.aub, lineHeight: 1, marginTop: 6, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em' }}>
              38k<span style={{ fontSize: 13, color: C.fg3, marginLeft: 3 }}>UGX</span>
            </div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: '#0E8F5A', marginTop: 6, fontWeight: 600 }}>+ 12% vs target</div>
          </div>
          <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, padding: 14 }}>
            <Caption>Battery</Caption>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6 }}>
              <BatterySVG size={32} charged={28}/>
              <div>
                <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 24, color: '#E08200', lineHeight: 1, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>28%</div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: C.fg3, marginTop: 2 }}>GG‑0421</div>
              </div>
            </div>
          </div>
        </div>

        {/* Health checks */}
        <Caption style={{ marginTop: 22, marginBottom: 8 }}>Bike health</Caption>
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, padding: 14 }}>
          {[
            { l: 'Motor', v: '98%', tone: 'good' },
            { l: 'Brakes', v: '76%', tone: 'warn' },
            { l: 'Tires', v: '88%', tone: 'good' },
            { l: 'Last service', v: '14 days', tone: 'good' },
          ].map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 0', borderBottom: i < 3 ? `1px solid ${C.hairline}` : 'none' }}>
              <span style={{ fontSize: 13, color: C.fg2 }}>{r.l}</span>
              <span style={{ fontFamily: FONT_MONO, fontSize: 13, fontWeight: 700, color: r.tone === 'good' ? '#0E8F5A' : '#E08200' }}>{r.v}</span>
            </div>
          ))}
        </div>
        <Button variant="secondary" full style={{ marginTop: 14 }}>+ Schedule service</Button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 03 SETTLEMENT — weekly payout
// ═══════════════════════════════════════════════════════
function SettlementScreen() {
  const bikes = [
    { plate: 'UAJ 027F', rider: 'Musa K.', gross: '186,000', share: '74,400' },
    { plate: 'UAH 119B', rider: 'Jane A.', gross: '142,000', share: '56,800' },
    { plate: 'UAK 802L', rider: 'David O.', gross: '56,000', share: '22,400' },
  ];
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        title="PAYOUT"
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>}
        trailing={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>}
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 24px' }}>
        <div style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 700, color: C.fg3, textTransform: 'uppercase', letterSpacing: '0.12em' }}>WEEK 19 · MAY 6 – 12</div>
        <div style={{
          fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA,
          fontWeight: 800, fontSize: 76, lineHeight: 0.95, color: C.aub,
          letterSpacing: '-0.04em', marginTop: 4, fontVariantNumeric: 'tabular-nums',
        }}>153,600</div>
        <div style={{ fontFamily: FONT_MONO, fontSize: 13, color: C.fg2, marginTop: 4 }}>UGX · your 40% share</div>

        {/* Bar split */}
        <div style={{ marginTop: 18, background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, padding: 14 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
            <Caption>Revenue split</Caption>
            <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.fg3 }}>UGX 384k gross</span>
          </div>
          <div style={{ display: 'flex', height: 14, borderRadius: 999, overflow: 'hidden' }}>
            <div style={{ flex: 40, background: C.aub }}/>
            <div style={{ flex: 50, background: C.mag }}/>
            <div style={{ flex: 10, background: C.aub400 }}/>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: 11 }}>
            <span><span style={{ display: 'inline-block', width: 8, height: 8, background: C.aub, borderRadius: 2, marginRight: 6 }}/>Owner · 40%</span>
            <span><span style={{ display: 'inline-block', width: 8, height: 8, background: C.mag, borderRadius: 2, marginRight: 6 }}/>Rider · 50%</span>
            <span><span style={{ display: 'inline-block', width: 8, height: 8, background: C.aub400, borderRadius: 2, marginRight: 6 }}/>GOGO · 10%</span>
          </div>
        </div>

        {/* Per bike */}
        <Caption style={{ marginTop: 22, marginBottom: 8 }}>Per bike</Caption>
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, overflow: 'hidden' }}>
          {bikes.map((b, i) => (
            <div key={i} style={{ padding: '14px 16px', borderBottom: i < bikes.length - 1 ? `1px solid ${C.hairline}` : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY_TIGHT, fontWeight: 800, fontSize: 16, color: C.aub, letterSpacing: '-0.01em' }}>{b.plate}</div>
                  <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.fg3, marginTop: 2 }}>{b.rider} · gross UGX {b.gross}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 20, color: C.mag, lineHeight: 1, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>+ {b.share}</div>
                  <div style={{ fontFamily: FONT_MONO, fontSize: 10, color: C.fg3, marginTop: 4 }}>UGX</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payout to */}
        <Caption style={{ marginTop: 22, marginBottom: 8 }}>Payout to</Caption>
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, padding: 14, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 28, borderRadius: 6, background: C.aub, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY_TIGHT, fontWeight: 800, fontSize: 10 }}>MTN</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, fontSize: 14 }}>MTN Mobile Money</div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.fg3, marginTop: 2 }}>·•·•·• 0427 · J. SSEMUGOOMA</div>
          </div>
        </div>

        <Button variant="accent" full style={{ marginTop: 14 }}>Send · UGX 153,600</Button>
      </div>
    </div>
  );
}

Object.assign(window, { FleetScreen, BikeDetailScreen, SettlementScreen });
