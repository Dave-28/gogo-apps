// screens.jsx — GOGO rider app, six core screens
// Battery-swap for boda riders. Each screen leans hard on the brand
// language: oversized type, +/− glyphs at scale, charged-vs-empty
// as a primary visual contrast.

// ═══════════════════════════════════════════════════════
// 1. WELCOME / ONBOARDING
// ═══════════════════════════════════════════════════════
function WelcomeScreen() {
  return (
    <div style={{
      background: C.aub, height: '100%', color: C.white,
      position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      <PlusMinusBg color="rgba(255,255,255,0.05)" size={32} gap={72}/>
      <div style={{ height: 64 }}/>
      <div style={{ padding: '0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
        <img src="../../assets/logo-inverse.png" alt="GOGO" style={{ height: 28 }} />
        <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>v 2.4</span>
      </div>

      <div style={{ padding: '60px 28px 0', position: 'relative', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: C.mag, textTransform: 'uppercase', letterSpacing: '0.14em' }}>
          BATTERY · SWAP · NETWORK
        </div>
        <div style={{
          fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY,
          fontWeight: 800, fontSize: 120, lineHeight: 0.86,
          letterSpacing: '-0.05em', textTransform: 'uppercase',
          marginTop: 18,
        }}>
          GO<br/>
          <span style={{ color: C.mag }}>+</span><br/>
          SWAP.
        </div>
        <div style={{ fontFamily: FONT_BODY, fontSize: 16, lineHeight: 1.45, color: 'rgba(255,255,255,0.7)', marginTop: 22, maxWidth: 280 }}>
          14 stations across Kampala. 60‑second swaps. Pay per pack — never charge.
        </div>

        {/* big rotating battery cluster */}
        <div style={{ position: 'absolute', right: -30, bottom: 180, display: 'flex', gap: 12, transform: 'rotate(-10deg)' }}>
          <div style={{ transform: 'translateY(20px)' }}><BatterySVG size={70} charged={100} color={C.mag}/></div>
          <div style={{ transform: 'translateY(-10px)' }}><BatterySVG size={70} charged={42} color="#E08200"/></div>
          <div style={{ transform: 'translateY(30px)' }}><BatterySVG size={70} charged={14} color="#7A5C68"/></div>
        </div>

        <div style={{ marginTop: 'auto', paddingBottom: 36, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Button variant="accent" full style={{ fontSize: 17, padding: '16px 22px' }}>
            CREATE ACCOUNT
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Button>
          <Button variant="ghost" full style={{ color: C.white, fontSize: 15 }}>
            I already ride
          </Button>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 2. HOME — battery + nearest swap
// ═══════════════════════════════════════════════════════
function HomeScreen({ onTab }) {
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="14" y2="18"/></svg>}
        title="HEY MUSA"
        trailing={
          <div style={{
            width: 32, height: 32, borderRadius: 999, background: C.aub, color: C.white,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY,
            fontWeight: 800, fontSize: 13,
          }}>M</div>
        }
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 24px' }}>

        {/* Battery hero — big percent + range */}
        <div style={{
          background: C.aub, borderRadius: 20, padding: 22, color: C.white,
          position: 'relative', overflow: 'hidden',
        }}>
          <PlusMinusBg color="rgba(255,255,255,0.04)" size={20} gap={56}/>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#F08FBE', textTransform: 'uppercase', letterSpacing: '0.12em' }}>− SWAP SOON</div>
              <div style={{
                fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA,
                fontWeight: 800, fontSize: 96, lineHeight: 0.9,
                letterSpacing: '-0.05em', fontVariantNumeric: 'tabular-nums', marginTop: 6,
              }}>28<span style={{ fontSize: 32, color: 'rgba(255,255,255,0.5)' }}>%</span></div>
            </div>
            <BatterySVG size={76} charged={28} color="#E08200"/>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', marginTop: 18, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.10)' }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Range</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 700, fontSize: 20, marginTop: 4 }}>~ 32 km</div>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Pack</div>
              <div style={{ fontFamily: FONT_MONO, fontWeight: 700, fontSize: 14, marginTop: 6 }}>GG‑0421</div>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Bike</div>
              <div style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 14, marginTop: 4 }}>UAJ 027F</div>
            </div>
          </div>
        </div>

        {/* Recommended swap */}
        <div style={{
          marginTop: 12, background: C.mag, borderRadius: 16, padding: '16px 18px',
          display: 'flex', alignItems: 'center', gap: 14, color: C.white,
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 999, background: 'rgba(255,255,255,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY,
            fontWeight: 800, fontSize: 22,
          }}>+</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Swap now</div>
            <div style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 16, marginTop: 2 }}>Nakawa · 5/7 ready</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA,
              fontWeight: 800, fontSize: 28, lineHeight: 1,
              fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em',
            }}>4<span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}> min</span></div>
          </div>
        </div>

        {/* Today stats */}
        <Caption style={{ marginTop: 22, marginBottom: 8 }}>Today</Caption>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
          {[
            ['Swaps', '3', null],
            ['Distance', '64', 'km'],
            ['Spent', '18k', null],
          ].map(([l, v, u]) => (
            <div key={l} style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, padding: 12 }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: C.fg3, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l}</div>
              <div style={{
                fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA,
                fontWeight: 800, fontSize: 28, color: C.aub, lineHeight: 1, marginTop: 6,
                fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em',
              }}>{v}{u && <span style={{ fontSize: 12, color: C.fg3, marginLeft: 2 }}>{u}</span>}</div>
            </div>
          ))}
        </div>

        {/* Recent swaps mini list */}
        <Caption style={{ marginTop: 22, marginBottom: 8 }}>Recent swaps</Caption>
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, overflow: 'hidden' }}>
          {[
            { name: 'Nakawa', when: '08:42 · 58 sec', officer: 'Sarah', amt: '6,000' },
            { name: 'Kabalagala', when: 'Yest · 64 sec', officer: 'Peter', amt: '6,000' },
          ].map((s, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
              borderBottom: i === 0 ? `1px solid ${C.hairline}` : 'none',
            }}>
              <BatterySVG size={26} charged={100}/>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{s.name}</div>
                <div style={{ fontSize: 11, color: C.fg3, marginTop: 1 }}>{s.when} · {s.officer}</div>
              </div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 12, color: C.fg2 }}>UGX {s.amt}</div>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="home" onTab={onTab}/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 3. STATIONS — map + list
// ═══════════════════════════════════════════════════════
function MapScreen({ onTab, onGo }) {
  const stations = [
    { name: 'Nakawa', dist: '1.2 km', eta: '4 min', officer: 'Sarah', ready: 5, total: 7, recommended: true },
    { name: 'Kabalagala', dist: '2.4 km', eta: '7 min', officer: 'Peter', ready: 7, total: 8 },
    { name: 'Ntinda', dist: '3.1 km', eta: '11 min', officer: 'Grace', ready: 2, total: 7 },
    { name: 'Bugolobi', dist: '3.8 km', eta: '13 min', officer: 'James', ready: 6, total: 8 },
  ];
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        title="STATIONS"
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>}
        trailing={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>}
      />
      <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Map */}
        <div style={{
          height: 220, position: 'relative', background: '#F2EAE7',
          backgroundImage:
            'linear-gradient(to right, rgba(64,16,60,0.06) 1px, transparent 1px),' +
            'linear-gradient(to bottom, rgba(64,16,60,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          overflow: 'hidden',
        }}>
          <svg width="100%" height="100%" viewBox="0 0 390 220" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
            <path d="M0,100 C 80,100 120,140 180,140 S 280,100 390,100" stroke="rgba(64,16,60,0.14)" strokeWidth="3" fill="none"/>
            <path d="M140,0 L140,220" stroke="rgba(64,16,60,0.10)" strokeWidth="2" fill="none"/>
            <path d="M0,40 L390,40" stroke="rgba(64,16,60,0.08)" strokeWidth="2" fill="none"/>
            {/* magenta route line to recommended station */}
            <path d="M80,168 Q 140,150 200,92" stroke={C.mag} strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="6 6"/>
          </svg>

          {/* rider */}
          <div style={{
            position: 'absolute', left: 70, top: 162,
            width: 14, height: 14, borderRadius: 999, background: C.aub, border: `3px solid ${C.white}`,
            boxShadow: '0 0 0 8px rgba(64,16,60,0.16)',
          }}/>
          {/* recommended station */}
          <div style={{ position: 'absolute', left: 200, top: 56, transform: 'translateX(-50%)' }}>
            <div style={{ background: C.mag, color: C.white, padding: '4px 10px', borderRadius: 999, fontFamily: FONT_BODY, fontWeight: 700, fontSize: 11, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>NAKAWA · 4 MIN</div>
            <div style={{ display: 'flex', justifyContent: 'center' }}><BatterySVG size={28} charged={100}/></div>
          </div>
          {/* other stations */}
          {[{ x: 60, y: 50 }, { x: 310, y: 40 }, { x: 350, y: 120 }, { x: 270, y: 180 }].map((s, i) => (
            <div key={i} style={{ position: 'absolute', left: s.x, top: s.y, transform: 'translate(-50%, -50%)' }}>
              <BatterySVG size={18} charged={i % 2 ? 100 : 35}/>
            </div>
          ))}
        </div>

        {/* Sheet */}
        <div style={{
          flex: 1, background: C.white, marginTop: -18,
          borderTopLeftRadius: 22, borderTopRightRadius: 22,
          paddingTop: 8, overflowY: 'auto',
          boxShadow: '0 -8px 24px rgba(64,16,60,0.10)',
        }}>
          <div style={{ width: 40, height: 4, background: C.hairline, borderRadius: 999, margin: '6px auto 12px' }}/>
          <div style={{ padding: '0 20px 8px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <Caption>Nearby stations</Caption>
            <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.fg3 }}>14 live</span>
          </div>
          {stations.map((s, i) => (
            <div key={i} onClick={onGo} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '14px 20px',
              borderTop: i === 0 ? `1px solid ${C.hairline}` : 'none',
              borderBottom: `1px solid ${C.hairline}`,
              background: s.recommended ? 'rgba(210,12,125,0.05)' : C.white,
              cursor: 'pointer',
            }}>
              <BatterySVG size={28} charged={s.ready / s.total * 100}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 15, color: C.fg1 }}>{s.name}</div>
                  {s.recommended && <Pill tone="mag">+ go</Pill>}
                </div>
                <div style={{ fontFamily: FONT_BODY, fontSize: 12, color: C.fg3, marginTop: 2 }}>
                  {s.dist} · {s.eta} · {s.officer}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 8 }}>
                  {Array.from({ length: s.total }).map((_, j) => (
                    <SlotMini key={j} charged={j < s.ready ? 100 : 20}/>
                  ))}
                  <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.fg3, marginLeft: 6, fontVariantNumeric: 'tabular-nums' }}>{s.ready}/{s.total}</span>
                </div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.aub} strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="map" onTab={onTab}/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 4. LIVE SWAP — countdown
// ═══════════════════════════════════════════════════════
function ChargingScreen({ onTab }) {
  return (
    <div style={{ background: C.aub, height: '100%', display: 'flex', flexDirection: 'column', color: C.white, position: 'relative', overflow: 'hidden' }}>
      <PlusMinusBg color="rgba(255,255,255,0.04)" size={26} gap={68}/>
      <AppTopBar
        dark
        title="LIVE SWAP"
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>}
        trailing={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>}
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 20px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
        <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: 'rgba(255,255,255,0.5)', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
          Nakawa · bay 03 · #SW‑8842
        </div>

        <div style={{ marginTop: 20 }}>
          <SwapCountdown secondsLeft={38} total={60}/>
        </div>

        {/* Battery transition */}
        <div style={{
          marginTop: 32, background: 'rgba(255,255,255,0.06)', borderRadius: 16,
          padding: '16px 18px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
        }}>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <BatterySVG size={44} charged={14} color="#7A5C68"/>
            <div style={{ fontFamily: FONT_BODY, fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.10em', marginTop: 8 }}>− RETURNED</div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 13, color: 'rgba(255,255,255,0.75)', marginTop: 2 }}>14%</div>
          </div>
          <div style={{
            fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY,
            fontWeight: 800, fontSize: 36, color: C.mag, letterSpacing: '-0.02em',
          }}>→</div>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <BatterySVG size={44} charged={100} color={C.mag}/>
            <div style={{ fontFamily: FONT_BODY, fontSize: 10, fontWeight: 700, color: C.mag, textTransform: 'uppercase', letterSpacing: '0.10em', marginTop: 8 }}>+ SWAPPING IN</div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 13, color: C.white, marginTop: 2 }}>100%</div>
          </div>
        </div>

        {/* Officer card */}
        <div style={{
          marginTop: 12, background: 'rgba(255,255,255,0.06)', borderRadius: 16,
          padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 999, background: C.mag,
            color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY, fontWeight: 800, fontSize: 18,
          }}>SN</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 15 }}>Sarah Namuli</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>Swap officer · ★ 4.9</div>
          </div>
          <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 22, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>UGX&nbsp;6,000</div>
        </div>

        <Button variant="accent" full style={{ marginTop: 18, fontSize: 16 }}>Confirm &amp; pay</Button>
      </div>
      <TabBar active="go" onTab={onTab}/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 5. SWAP HISTORY — streak + receipts
// ═══════════════════════════════════════════════════════
function HistoryScreen({ onTab }) {
  // 35 days, varied
  const streak = [
    2,3,1,3,3,2,0, 3,3,2,3,3,3,1, 2,3,3,3,2,3,3,
    3,2,3,3,3,3,2, 3,3,3,3,3,3,2,
  ];
  const swaps = [
    { d: 'Today · 08:42', s: 'Nakawa', o: 'Sarah', km: '14', amt: '6,000' },
    { d: 'Today · 06:10', s: 'Nakawa', o: 'Sarah', km: '38', amt: '6,000' },
    { d: 'Yest · 19:25', s: 'Kabalagala', o: 'Peter', km: '42', amt: '6,000' },
    { d: 'Yest · 12:08', s: 'Ntinda', o: 'Grace', km: '36', amt: '6,000' },
  ];
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        title="HISTORY"
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>}
        trailing={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 18L18 6M6 6l12 12" style={{ opacity: 0 }}/><path d="M3 6h18M6 12h12M9 18h6"/></svg>}
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 24px' }}>
        {/* Big total */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <div style={{
            fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA,
            fontWeight: 800, fontSize: 96, lineHeight: 0.95,
            letterSpacing: '-0.05em', color: C.aub, fontVariantNumeric: 'tabular-nums', marginTop: 8,
          }}>87</div>
          <div>
            <div style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 14, color: C.aub }}>swaps</div>
            <div style={{ fontSize: 11, color: C.fg3, marginTop: 2 }}>last 35 days</div>
          </div>
          <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: '#0E8F5A', fontWeight: 600 }}>+ 12 vs prior</div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.fg3, marginTop: 2 }}>UGX 522,000</div>
          </div>
        </div>

        {/* Streak heatmap */}
        <Caption style={{ marginTop: 22, marginBottom: 8 }}>Swap streak</Caption>
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, padding: 14 }}>
          <SwapStreak data={streak}/>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, justifyContent: 'flex-end', fontFamily: FONT_MONO, fontSize: 10, color: C.fg3 }}>
            <span>less</span>
            {[0, 1, 2, 3].map(v => {
              const op = v === 0 ? 1 : (v === 1 ? 0.35 : v === 2 ? 0.7 : 1);
              return <div key={v} style={{ width: 10, height: 10, borderRadius: 2, background: v === 0 ? C.hairline : C.mag, opacity: op }}/>;
            })}
            <span>more</span>
          </div>
        </div>

        {/* Distance + cost summary */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 14 }}>
          <div style={{ background: C.aub, color: C.white, borderRadius: 12, padding: 14 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Distance</div>
            <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 36, lineHeight: 1, marginTop: 6, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em' }}>
              3,420<span style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)' }}> km</span>
            </div>
          </div>
          <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, padding: 14 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: C.fg3, textTransform: 'uppercase', letterSpacing: '0.08em' }}>vs petrol</div>
            <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 36, lineHeight: 1, marginTop: 6, color: '#0E8F5A', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em' }}>
              − 38<span style={{ fontSize: 14, color: C.fg3 }}>%</span>
            </div>
          </div>
        </div>

        {/* Receipts */}
        <Caption style={{ marginTop: 22, marginBottom: 8 }}>Recent</Caption>
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, overflow: 'hidden' }}>
          {swaps.map((s, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
              borderBottom: i < swaps.length - 1 ? `1px solid ${C.hairline}` : 'none',
            }}>
              <BatterySVG size={24} charged={100}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{s.s} · {s.o}</div>
                <div style={{ fontSize: 11, color: C.fg3, marginTop: 1 }}>{s.d} · {s.km} km ridden after</div>
              </div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 13, color: C.fg2 }}>UGX {s.amt}</div>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="trips" onTab={onTab}/>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 6. WALLET / SWAP PASS
// ═══════════════════════════════════════════════════════
function WalletScreen({ onTab }) {
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        title="WALLET"
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>}
        trailing={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>}
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 24px' }}>

        {/* Wallet card */}
        <div style={{
          background: C.aub, borderRadius: 20, padding: 22, color: C.white,
          position: 'relative', overflow: 'hidden', minHeight: 200,
        }}>
          <PlusMinusBg color="rgba(255,255,255,0.05)" size={22} gap={56}/>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Balance</div>
              <div style={{
                fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA,
                fontWeight: 800, fontSize: 56, lineHeight: 1, marginTop: 8,
                fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.04em',
              }}>42,000</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 6 }}>UGX · ≈ 7 swaps</div>
            </div>
            <img src="../../assets/logo-inverse.png" alt="GOGO" style={{ height: 22, opacity: 0.85 }}/>
          </div>

          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', marginTop: 22, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.10)' }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Rider ID</div>
              <div style={{ fontFamily: FONT_MONO, fontWeight: 700, fontSize: 13, marginTop: 4 }}>GG‑2042‑MK</div>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Since</div>
              <div style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 13, marginTop: 4 }}>Jan 2024</div>
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Tier</div>
              <div style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 13, color: C.mag, marginTop: 4 }}>+ DAILY</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 12 }}>
          <Button variant="accent" style={{ width: '100%' }}>+ Top up</Button>
          <Button variant="secondary" style={{ width: '100%' }}>Auto‑pay</Button>
        </div>

        {/* Swap pass */}
        <Caption style={{ marginTop: 22, marginBottom: 8 }}>Swap pass · 10‑pack</Caption>
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, padding: '14px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 16, color: C.aub }}>4 swaps left</div>
              <div style={{ fontSize: 11, color: C.fg3, marginTop: 2 }}>Buy 10, get 1 free. Renews on swap #11.</div>
            </div>
            <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 24, color: C.aub, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>
              4<span style={{ fontSize: 12, color: C.fg3 }}>/10</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 4, marginTop: 12 }}>
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} style={{
                flex: 1, height: 10, borderRadius: 2,
                background: i < 6 ? C.aub200 : (i < 9 ? C.mag : C.mag),
                opacity: i < 6 ? 1 : (i === 9 ? 1 : 1),
              }}/>
            ))}
          </div>
        </div>

        {/* Payment methods */}
        <Caption style={{ marginTop: 22, marginBottom: 8 }}>Pay with</Caption>
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, overflow: 'hidden' }}>
          {[
            { name: 'MTN Mobile Money', sub: '·•·•·• 0427', active: true, badge: 'MTN' },
            { name: 'Airtel Money', sub: '·•·•·• 1804', active: false, badge: 'AIR' },
            { name: 'Card · Visa', sub: '·•·•·• 4242', active: false, badge: 'VISA' },
          ].map((p, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
              borderBottom: i < 2 ? `1px solid ${C.hairline}` : 'none',
            }}>
              <div style={{
                width: 40, height: 28, borderRadius: 6,
                background: p.active ? C.aub : C.hairline,
                color: p.active ? C.white : C.fg3,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY_TIGHT,
                fontWeight: 800, fontSize: 10, letterSpacing: '0.02em',
              }}>{p.badge}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{p.name}</div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.fg3, marginTop: 1 }}>{p.sub}</div>
              </div>
              {p.active
                ? <Pill tone="mag">+ default</Pill>
                : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.aub} strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
              }
            </div>
          ))}
        </div>
      </div>
      <TabBar active="me" onTab={onTab}/>
    </div>
  );
}

Object.assign(window, { WelcomeScreen, HomeScreen, MapScreen, ChargingScreen, HistoryScreen, WalletScreen });
