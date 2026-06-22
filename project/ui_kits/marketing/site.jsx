// site.jsx — GOGO marketing landing page
// Real product context: electric motorcycles + swap stations + swap officers.
// The + and − in the GOGO mark are read here as charged battery / empty battery.

const M_AUB = '#40103C';
const M_AUB900 = '#1A0A18';
const M_AUB600 = '#553949';
const M_AUB200 = '#EAE3E0';
const M_AUB100 = '#F2EAE7';
const M_AUB50 = '#FAF6F4';
const M_HAIR = '#EAE3E0';
const M_MAG = '#D20C7D';
const M_MAG100 = '#FCE2EE';
const M_WHITE = '#FFFFFF';
const M_FG2 = '#553949';
const M_FG3 = '#7A5C68';
const M_SUCCESS = '#0E8F5A';

const M_FONT_D = "'Roboto', system-ui, sans-serif";
const M_FONT_B = "'Roboto', system-ui, sans-serif";
const M_FONT_M = "ui-monospace, 'SF Mono', Menlo, monospace";
const M_VFS_D = '"wght" 800, "wdth" 110';
const M_VFS_DT = '"wght" 800, "wdth" 100';

// ─── Battery glyph (SVG primitive — repeats everywhere) ───
function BatterySVG({ size = 80, charged = 100, color = M_MAG, dim = '#3a0c37' }) {
  // size = body width (terminal sticks out a bit more)
  const bodyW = size;
  const bodyH = size * 1.55;
  const cornerR = size * 0.14;
  const padding = size * 0.10;
  const innerH = bodyH - padding * 2 - size * 0.20; // leave room for label area
  const fillH = innerH * (charged / 100);
  return (
    <svg width={bodyW} height={bodyH + size * 0.10} viewBox={`0 0 ${bodyW} ${bodyH + size * 0.10}`}>
      {/* terminal */}
      <rect x={bodyW * 0.30} y="0" width={bodyW * 0.40} height={size * 0.08}
            rx={size * 0.03} fill={M_AUB}/>
      {/* body */}
      <rect x="0" y={size * 0.08} width={bodyW} height={bodyH}
            rx={cornerR} fill={M_AUB}/>
      {/* charge fill */}
      <rect x={padding} y={size * 0.08 + padding + (innerH - fillH)}
            width={bodyW - padding * 2} height={fillH}
            rx={cornerR * 0.5} fill={color}/>
      {/* + glyph in white */}
      <g transform={`translate(${bodyW / 2}, ${size * 0.08 + padding + innerH + size * 0.18})`}>
        <text textAnchor="middle" dominantBaseline="middle"
              fontFamily={M_FONT_D} fontWeight="800"
              fontSize={size * 0.42} fill={M_WHITE}
              style={{ fontVariationSettings: '"wght" 800, "wdth" 110' }}>
          {charged >= 50 ? '+' : '−'}
        </text>
      </g>
    </svg>
  );
}

// ─── Site nav ───
function SiteNav() {
  const linkS = { fontFamily: M_FONT_B, fontWeight: 500, fontSize: 14, color: M_AUB900, textDecoration: 'none', letterSpacing: '0.01em' };
  return (
    <header style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '20px 48px', background: M_WHITE, borderBottom: `1px solid ${M_HAIR}`,
    }}>
      <img src="../../assets/logo-full-colour.png" alt="GOGO" style={{ height: 26 }} />
      <nav style={{ display: 'flex', gap: 28 }}>
        <a href="#" style={linkS}>Riders</a>
        <a href="#" style={linkS}>Stations</a>
        <a href="#" style={linkS}>Fleets</a>
        <a href="#" style={linkS}>Coverage</a>
      </nav>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <a href="#" style={{ ...linkS, fontWeight: 600 }}>Sign in</a>
        <button style={{
          background: M_AUB, color: M_WHITE, border: 'none', borderRadius: 999,
          padding: '10px 18px', fontFamily: M_FONT_B, fontWeight: 600, fontSize: 14,
          cursor: 'pointer',
        }}>Become a rider</button>
      </div>
    </header>
  );
}

// ─── Marketing landing ───
function SiteHero() {
  return (
    <div style={{ background: M_AUB50, fontFamily: M_FONT_B, color: M_AUB900 }}>
      <SiteNav/>

      {/* HERO */}
      <section style={{ padding: '56px 48px 56px', display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '6px 14px', borderRadius: 999, background: M_MAG100, color: '#95075A', marginBottom: 22 }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: M_MAG }}/>
            <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>14 stations live · Kampala</span>
          </div>
          <h1 style={{
            margin: 0,
            fontFamily: M_FONT_D, fontVariationSettings: M_VFS_D,
            fontWeight: 800, fontSize: 112, lineHeight: 0.9,
            letterSpacing: '-0.04em', textTransform: 'uppercase',
            color: M_AUB,
          }}>
            SWAP IN<br/>
            <span style={{ color: M_MAG }}>60</span> SECONDS.<br/>
            RIDE ALL DAY.
          </h1>
          <p style={{
            maxWidth: 480, marginTop: 22, marginBottom: 28,
            fontSize: 17, lineHeight: 1.5, color: M_FG2,
          }}>
            Pull into any GOGO station. Hand the empty battery to a swap officer.
            Ride out with a fresh one. No plug, no waiting.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button style={{
              background: M_MAG, color: M_WHITE, border: 'none', borderRadius: 999,
              padding: '16px 28px', fontFamily: M_FONT_B, fontWeight: 700, fontSize: 16,
              cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              FIND A STATION
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <button style={{
              background: 'transparent', color: M_AUB, border: `1px solid ${M_AUB}`, borderRadius: 999,
              padding: '15px 24px', fontFamily: M_FONT_B, fontWeight: 600, fontSize: 16, cursor: 'pointer',
            }}>Lease a bike</button>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 40, marginTop: 40 }}>
            {[['60s', 'swap time'], ['14', 'stations'], ['2,400', 'riders'], ['18M', 'km swapped']].map(([v, l]) => (
              <div key={l}>
                <div style={{
                  fontFamily: M_FONT_D, fontVariationSettings: M_VFS_DT,
                  fontWeight: 800, fontSize: 32, color: M_AUB, lineHeight: 1,
                  fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em',
                }}>{v}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: M_FG3, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual — battery swap diagram */}
        <div style={{ position: 'relative', height: 520 }}>
          {/* Dark station card */}
          <div style={{
            position: 'absolute', top: 0, right: 0, width: 380, height: 460,
            background: M_AUB, borderRadius: 24, padding: 24, color: M_WHITE,
            boxShadow: '0 24px 60px rgba(64,16,60,0.22)',
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Nakawa station</div>
              <div style={{ fontFamily: M_FONT_M, fontSize: 11, color: M_MAG }}>● open</div>
            </div>
            <div style={{
              fontFamily: M_FONT_D, fontVariationSettings: M_VFS_D,
              fontWeight: 800, fontSize: 32, lineHeight: 1, textTransform: 'uppercase',
              letterSpacing: '-0.02em', marginTop: 8,
            }}>SLOT STATUS</div>

            {/* Slot grid (8 slots, mix of charged / charging / empty) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginTop: 16 }}>
              {[
                { c: 100, color: M_MAG },
                { c: 100, color: M_MAG },
                { c: 85, color: M_MAG },
                { c: 100, color: M_MAG },
                { c: 42, color: '#E08200' },
                { c: 18, color: '#7A5C68' },
                { c: 100, color: M_MAG },
                { c: 65, color: M_MAG },
              ].map((s, i) => {
                const innerH = 78;
                const fillH = innerH * (s.c / 100);
                return (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: 8,
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                  }}>
                    {/* battery glyph */}
                    <svg width="36" height="56" viewBox="0 0 36 56">
                      <rect x="11" y="0" width="14" height="4" rx="1" fill="rgba(255,255,255,0.4)"/>
                      <rect x="0" y="4" width="36" height="52" rx="5" fill="rgba(255,255,255,0.12)"/>
                      <rect x="4" y={4 + 4 + (innerH * 0.55 - fillH * 0.55)}
                            width="28" height={fillH * 0.55} rx="2" fill={s.color}/>
                    </svg>
                    <div style={{ fontFamily: M_FONT_M, fontSize: 11, color: 'rgba(255,255,255,0.7)', fontVariantNumeric: 'tabular-nums' }}>{s.c}%</div>
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.10)' }}>
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Ready now</div>
                <div style={{
                  fontFamily: M_FONT_D, fontVariationSettings: M_VFS_DT,
                  fontWeight: 800, fontSize: 28, color: M_WHITE, lineHeight: 1.1,
                  fontVariantNumeric: 'tabular-nums',
                }}>5<span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}> /8</span></div>
              </div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Swap officer</div>
                <div style={{ fontFamily: M_FONT_B, fontSize: 14, fontWeight: 600, color: M_WHITE, marginTop: 4 }}>Sarah · on duty</div>
              </div>
            </div>
          </div>

          {/* Floating: empty battery in */}
          <div style={{
            position: 'absolute', left: 0, top: 30, width: 218,
            background: M_WHITE, border: `1px solid ${M_HAIR}`, borderRadius: 16,
            padding: 14, boxShadow: '0 8px 24px rgba(64,16,60,0.10)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <BatterySVG size={36} charged={14} color="#7A5C68"/>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: M_FG3, textTransform: 'uppercase', letterSpacing: '0.08em' }}>− RETURNED</div>
                <div style={{ fontWeight: 600, fontSize: 14, marginTop: 3 }}>14% — 8:42 am</div>
              </div>
            </div>
          </div>

          {/* Arrow connecting empty → full */}
          <div style={{
            position: 'absolute', left: 200, top: 235,
            fontFamily: M_FONT_D, fontVariationSettings: M_VFS_D,
            fontWeight: 800, fontSize: 32, color: M_AUB, letterSpacing: '-0.02em',
          }}>↓</div>

          {/* Floating: full battery out */}
          <div style={{
            position: 'absolute', left: 0, top: 320, width: 240,
            background: M_WHITE, border: `1px solid ${M_HAIR}`, borderRadius: 16,
            padding: 14, boxShadow: '0 8px 24px rgba(64,16,60,0.10)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <BatterySVG size={36} charged={100} color={M_MAG}/>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: M_MAG, textTransform: 'uppercase', letterSpacing: '0.08em' }}>+ SWAPPED IN</div>
                <div style={{ fontWeight: 600, fontSize: 14, marginTop: 3 }}>100% — 8:43 am</div>
                <div style={{ fontFamily: M_FONT_M, fontSize: 11, color: M_SUCCESS, fontWeight: 600, marginTop: 2 }}>+ 58 sec total</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — three steps */}
      <section style={{ background: M_AUB100, padding: '64px 48px' }}>
        <div style={{ fontFamily: M_FONT_B, fontSize: 11, fontWeight: 700, color: M_MAG, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 14 }}>HOW IT WORKS</div>
        <h2 style={{
          margin: 0, marginBottom: 36,
          fontFamily: M_FONT_D, fontVariationSettings: M_VFS_D,
          fontWeight: 800, fontSize: 56, lineHeight: 1, letterSpacing: '-0.03em',
          textTransform: 'uppercase', color: M_AUB, maxWidth: 700,
        }}>NO PLUGS. NO CHARGING. JUST A SWAP.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {[
            {
              n: '01',
              title: 'RIDE IN',
              body: 'Pull into any GOGO station on your electric motorcycle. Open the GOGO app or just wave at the swap officer.',
              icon: (
                <svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke={M_AUB} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="14" cy="46" r="9"/>
                  <circle cx="50" cy="46" r="9"/>
                  <path d="M14 46 L26 26 L40 26 L46 36"/>
                  <path d="M26 26 L36 26"/>
                  <path d="M50 46 L46 36"/>
                  <rect x="30" y="20" width="14" height="10" rx="2"/>
                </svg>
              ),
            },
            {
              n: '02',
              title: 'SWAP BATTERY',
              body: "The officer pulls your empty pack and clicks a charged one into the bay. Locked, sealed, signed for. 60 seconds.",
              icon: (
                <svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke={M_AUB} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="8" y="18" width="20" height="28" rx="3"/>
                  <rect x="14" y="14" width="8" height="4" rx="1"/>
                  <rect x="36" y="18" width="20" height="28" rx="3"/>
                  <rect x="42" y="14" width="8" height="4" rx="1"/>
                  <path d="M28 26 L36 32 L28 38"/>
                  <path d="M36 38 L28 32 L36 26" stroke={M_MAG}/>
                </svg>
              ),
            },
            {
              n: '03',
              title: 'RIDE OUT',
              body: 'Back on the road with a fresh 100% pack. Pay per swap — no charging bills, no overnight downtime, no range anxiety.',
              icon: (
                <svg width="44" height="44" viewBox="0 0 64 64" fill="none" stroke={M_AUB} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="34 6 18 36 32 36 30 58 48 26 34 26 34 6" fill={M_MAG} stroke={M_MAG} strokeLinejoin="round"/>
                </svg>
              ),
            },
          ].map(step => (
            <div key={step.n} style={{
              background: M_WHITE, borderRadius: 16, padding: 24,
              border: `1px solid ${M_HAIR}`,
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                {step.icon}
                <span style={{
                  fontFamily: M_FONT_M, fontSize: 12, fontWeight: 600,
                  color: M_FG3, letterSpacing: '0.08em',
                }}>{step.n}</span>
              </div>
              <div style={{
                fontFamily: M_FONT_D, fontVariationSettings: M_VFS_DT,
                fontWeight: 800, fontSize: 22, marginTop: 18, color: M_AUB,
                textTransform: 'uppercase', letterSpacing: '-0.01em',
              }}>{step.title}</div>
              <div style={{ fontSize: 14, lineHeight: 1.5, color: M_FG2, marginTop: 10 }}>
                {step.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DUAL FEATURE: bikes + stations */}
      <section style={{ padding: '64px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        {/* Bikes */}
        <div style={{ background: M_AUB, color: M_WHITE, borderRadius: 24, padding: 36, position: 'relative', overflow: 'hidden' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: M_MAG, textTransform: 'uppercase', letterSpacing: '0.12em' }}>FOR RIDERS</div>
          <h3 style={{
            margin: '14px 0 16px',
            fontFamily: M_FONT_D, fontVariationSettings: M_VFS_D,
            fontWeight: 800, fontSize: 40, lineHeight: 0.95, textTransform: 'uppercase',
            letterSpacing: '-0.03em',
          }}>OUR<br/>BIKES.</h3>
          <p style={{ maxWidth: 360, color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.5, marginBottom: 22 }}>
            Purpose-built electric motorcycles for boda riders. Same range as petrol on a single swap. Lease, own, or pay-as-you-ride.
          </p>

          {/* Motorcycle illustration */}
          <svg viewBox="0 0 360 140" width="100%" style={{ marginTop: 8, marginBottom: 18 }}>
            <circle cx="60" cy="100" r="28" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3"/>
            <circle cx="60" cy="100" r="10" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
            <circle cx="290" cy="100" r="28" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="3"/>
            <circle cx="290" cy="100" r="10" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
            {/* frame */}
            <path d="M60,100 L130,50 L240,50 L290,100" stroke="rgba(255,255,255,0.9)" strokeWidth="3" fill="none" strokeLinecap="round"/>
            {/* battery on frame */}
            <rect x="155" y="40" width="70" height="36" rx="6" fill={M_MAG}/>
            <rect x="180" y="34" width="20" height="6" rx="2" fill={M_MAG}/>
            <text x="190" y="64" fill={M_WHITE} fontFamily={M_FONT_D} fontWeight="800" fontSize="22" textAnchor="middle"
                  style={{ fontVariationSettings: '"wght" 800, "wdth" 110' }}>+</text>
            {/* seat */}
            <path d="M115,55 L155,55 L150,46 L120,46 Z" fill="rgba(255,255,255,0.95)"/>
            {/* handlebar */}
            <path d="M240,50 L260,30 M255,30 L268,30" stroke="rgba(255,255,255,0.9)" strokeWidth="3" strokeLinecap="round" fill="none"/>
          </svg>

          <div style={{ display: 'flex', gap: 24 }}>
            {[['120', 'km / swap'], ['1.6', 'sec 0–30'], ['UGX 6k', '/ swap']].map(([v, l]) => (
              <div key={l}>
                <div style={{
                  fontFamily: M_FONT_D, fontVariationSettings: M_VFS_DT,
                  fontWeight: 800, fontSize: 24, color: M_WHITE, lineHeight: 1,
                  fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em',
                }}>{v}</div>
                <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stations */}
        <div style={{ background: M_WHITE, border: `1px solid ${M_HAIR}`, borderRadius: 24, padding: 36 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: M_MAG, textTransform: 'uppercase', letterSpacing: '0.12em' }}>OUR NETWORK</div>
          <h3 style={{
            margin: '14px 0 16px',
            fontFamily: M_FONT_D, fontVariationSettings: M_VFS_D,
            fontWeight: 800, fontSize: 40, lineHeight: 0.95, textTransform: 'uppercase',
            letterSpacing: '-0.03em', color: M_AUB,
          }}>SWAP<br/>STATIONS.</h3>
          <p style={{ maxWidth: 360, color: M_FG2, fontSize: 14, lineHeight: 1.5, marginBottom: 18 }}>
            14 stations across Kampala — and growing. Every station is staffed by a trained swap officer who handles the battery so you don't have to.
          </p>

          {/* Tiny map of station dots */}
          <div style={{
            position: 'relative', height: 180, borderRadius: 12,
            background: M_AUB100,
            backgroundImage:
              `linear-gradient(to right, rgba(64,16,60,0.06) 1px, transparent 1px),` +
              `linear-gradient(to bottom, rgba(64,16,60,0.06) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
            border: `1px solid ${M_HAIR}`,
            overflow: 'hidden',
          }}>
            {/* dots — roughly Kampala-ish scatter */}
            {[
              [40, 60], [85, 35], [110, 80], [60, 120], [145, 50],
              [180, 110], [215, 45], [240, 130], [285, 70], [320, 100],
              [355, 50], [380, 130], [400, 75], [420, 110],
            ].map(([x, y], i) => (
              <div key={i} style={{
                position: 'absolute', left: x, top: y,
                width: 10, height: 10, borderRadius: 999,
                background: i === 6 ? M_MAG : M_AUB,
                border: `2px solid ${M_WHITE}`,
                boxShadow: i === 6 ? '0 0 0 6px rgba(210,12,125,0.18)' : 'none',
              }}/>
            ))}
            {/* "Nakawa" label */}
            <div style={{
              position: 'absolute', left: 230, top: 18,
              fontFamily: M_FONT_M, fontSize: 10, fontWeight: 600,
              color: M_MAG, background: M_WHITE, padding: '2px 8px', borderRadius: 999,
              border: `1px solid ${M_MAG}`,
            }}>Nakawa · open</div>
          </div>

          <div style={{ display: 'flex', gap: 24, marginTop: 22 }}>
            {[['14', 'live now'], ['+8', 'this quarter'], ['24/7', 'staffed']].map(([v, l]) => (
              <div key={l}>
                <div style={{
                  fontFamily: M_FONT_D, fontVariationSettings: M_VFS_DT,
                  fontWeight: 800, fontSize: 24, color: M_AUB, lineHeight: 1,
                  fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em',
                }}>{v}</div>
                <div style={{ fontSize: 10, fontWeight: 600, color: M_FG3, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 6 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER STRIP */}
      <section style={{ background: M_AUB900, color: M_WHITE, padding: '36px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          fontFamily: M_FONT_D, fontVariationSettings: M_VFS_D,
          fontWeight: 800, fontSize: 28, textTransform: 'uppercase', letterSpacing: '-0.01em', maxWidth: 700,
        }}>
          Empty in, <span style={{ color: M_MAG }}>+</span> charged out. <br/>
          The grid that pays for the next ride.
        </div>
        <a href="#" style={{
          color: M_WHITE, textDecoration: 'none', fontFamily: M_FONT_B,
          fontWeight: 600, fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 8,
          borderBottom: `1px solid ${M_MAG}`, paddingBottom: 4,
        }}>
          See coverage map →
        </a>
      </section>
    </div>
  );
}

Object.assign(window, { SiteHero, SiteNav, BatterySVG });
