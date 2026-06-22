// swap-ops/screens.jsx — operations-team web app.
// Reuses dark-theme tokens (DC) from swap-officer/dark-components.jsx —
// loaded as a sibling script in index.html.

const OPS_W = 1440;
const OPS_H = 900;

// ─── Ops sidebar (left, narrow icon-prominent) ─────────────────────────
function OpsSidebar({ active }) {
  const groups = [
    {
      label: 'Live',
      items: [
        { id: 'over',  label: 'Overview',     icon: IK.grid },
        { id: 'stat',  label: 'Stations',     icon: IK.station },
        { id: 'swap',  label: 'Swap Log',     icon: IK.swap },
        { id: 'alert', label: 'Alerts',       icon: IK.alert, badge: 3 },
      ],
    },
    {
      label: 'Network',
      items: [
        { id: 'rid',  label: 'Riders',       icon: IK.users },
        { id: 'bat',  label: 'Batteries',    icon: IK.battery },
        { id: 'bike', label: 'Bikes',        icon: IK.bike },
        { id: 'tech', label: 'Technicians',  icon: IK.user },
      ],
    },
    {
      label: 'Reports',
      items: [
        { id: 'fin',  label: 'Revenue',      icon: IK.trend },
        { id: 'use',  label: 'Utilisation',  icon: IK.checklist },
        { id: 'exp',  label: 'Exports',      icon: IK.download },
      ],
    },
  ];
  return (
    <aside style={{
      width: 240, flexShrink: 0, background: DC.bg2,
      borderRight: `1px solid ${DC.hairline}`,
      display: 'flex', flexDirection: 'column',
      padding: '20px 12px 14px',
    }}>
      <div style={{ padding: '4px 10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <GogoMark height={26}/>
        <span style={{
          fontFamily: DFONT_MONO, fontSize: 10, fontWeight: 700,
          color: DC.mag, letterSpacing: '0.14em',
          background: 'rgba(210,12,125,0.14)',
          padding: '3px 6px', borderRadius: 4,
        }}>OPS</span>
      </div>

      {groups.map((g, gi) => (
        <div key={gi} style={{ marginTop: gi === 0 ? 6 : 18 }}>
          <div style={{
            fontFamily: DFONT_BODY, fontSize: 10, fontWeight: 700,
            color: DC.fg4, textTransform: 'uppercase', letterSpacing: '0.16em',
            padding: '4px 12px 6px',
          }}>{g.label}</div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {g.items.map(it => {
              const isActive = it.id === active;
              return (
                <div key={it.id} style={{
                  display: 'flex', alignItems: 'center', gap: 11,
                  padding: '8px 12px', borderRadius: 7,
                  background: isActive ? DC.surface2 : 'transparent',
                  color: isActive ? DC.fg1 : DC.fg2,
                  fontFamily: DFONT_BODY, fontSize: 13, fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer', position: 'relative',
                }}>
                  {isActive && <div style={{
                    position: 'absolute', left: 0, top: 7, bottom: 7, width: 2.5,
                    borderRadius: 999, background: DC.mag,
                  }}/>}
                  <span style={{ color: isActive ? DC.mag : DC.fg3, display: 'flex' }}>
                    <I size={16}>{it.icon}</I>
                  </span>
                  <span style={{ flex: 1 }}>{it.label}</span>
                  {it.badge && (
                    <span style={{
                      fontFamily: DFONT_MONO, fontSize: 10, fontWeight: 700,
                      color: '#fff', background: DC.bad,
                      padding: '1px 6px', borderRadius: 999, minWidth: 18,
                      textAlign: 'center',
                    }}>{it.badge}</span>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      ))}

      <div style={{ flex: 1 }}/>

      <div style={{
        background: DC.surface, border: `1px solid ${DC.hairline}`,
        borderRadius: 10, padding: 12, marginBottom: 10,
      }}>
        <div style={{ fontSize: 10, color: DC.fg3, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase' }}>
          Network status
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: DC.ok,
            boxShadow: `0 0 0 3px rgba(34,197,94,0.18)` }}/>
          <span style={{ fontSize: 13, color: DC.fg1, fontWeight: 600 }}>All systems go</span>
        </div>
        <div style={{ fontFamily: DFONT_MONO, fontSize: 10, color: DC.fg3, marginTop: 6 }}>
          18 / 18 stations live
        </div>
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '8px 8px', borderTop: `1px solid ${DC.hairline}`, paddingTop: 12,
      }}>
        <div style={{
          width: 30, height: 30, borderRadius: 7,
          background: DC.chip.aubL.bg, color: DC.chip.aubL.fg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DISPLAY,
          fontWeight: 800, fontSize: 12,
        }}>SN</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: DC.fg1 }}>Sarah Nakamura</div>
          <div style={{ fontSize: 10, color: DC.fg3, marginTop: 1 }}>Ops Lead · Kampala</div>
        </div>
      </div>
    </aside>
  );
}

// ─── Ops top bar ────────────────────────────────────────────────────────
function OpsTopbar({ title, sub }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px 32px', borderBottom: `1px solid ${DC.hairline}`,
      background: DC.bg,
    }}>
      <div>
        <div style={{
          fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DISPLAY,
          fontWeight: 800, fontSize: 24, color: DC.fg1,
          letterSpacing: '-0.01em', textTransform: 'uppercase',
        }}>{title}</div>
        <div style={{ fontSize: 13, color: DC.fg3, marginTop: 3 }}>{sub}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {/* Search */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: DC.surface, border: `1px solid ${DC.hairline2}`,
          borderRadius: 8, padding: '7px 12px',
          width: 240, color: DC.fg3,
        }}>
          <I size={15}>{IK.search}</I>
          <span style={{ fontSize: 13 }}>Search station, rider, pack…</span>
          <span style={{ marginLeft: 'auto', fontFamily: DFONT_MONO, fontSize: 10,
            color: DC.fg4, border: `1px solid ${DC.hairline2}`,
            padding: '1px 5px', borderRadius: 3 }}>⌘K</span>
        </div>
        {/* Date range pill */}
        <button style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: DC.surface, color: DC.fg1,
          border: `1px solid ${DC.hairline2}`,
          borderRadius: 8, padding: '7px 12px',
          fontFamily: DFONT_BODY, fontWeight: 600, fontSize: 13,
          cursor: 'pointer',
        }}>
          <I size={15}>{IK.clock}</I>
          Today · 14 May
          <I size={14}>{IK.chevD}</I>
        </button>
        {/* Live indicator */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(34,197,94,0.10)', color: DC.ok,
          border: `1px solid rgba(34,197,94,0.30)`,
          borderRadius: 8, padding: '7px 12px',
          fontFamily: DFONT_BODY, fontWeight: 700, fontSize: 12, letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          <span style={{ width: 7, height: 7, borderRadius: 999, background: DC.ok,
            boxShadow: `0 0 0 3px rgba(34,197,94,0.22)` }}/>
          Live
        </div>
      </div>
    </div>
  );
}

// ─── KPI tile ───────────────────────────────────────────────────────────
function KpiTile({ label, value, unit, delta, deltaTone = 'ok', chip, spark, footer }) {
  return (
    <div style={{
      background: DC.surface, border: `1px solid ${DC.hairline}`,
      borderRadius: 12, padding: 18, display: 'flex', flexDirection: 'column',
      minHeight: 132,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{
          fontFamily: DFONT_BODY, fontSize: 11, fontWeight: 700,
          color: DC.fg3, textTransform: 'uppercase', letterSpacing: '0.10em',
        }}>{label}</div>
        {chip && (
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: chip.bg, color: chip.fg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <I size={16}>{chip.icon}</I>
          </div>
        )}
      </div>
      <div style={{
        fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DATA,
        fontWeight: 800, fontSize: 36, color: DC.fg1, lineHeight: 1.05,
        marginTop: 10, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.025em',
      }}>
        {value}
        {unit && <span style={{ fontSize: 16, color: DC.fg3, marginLeft: 6, fontWeight: 600 }}>{unit}</span>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 12 }}>
        {delta && (
          <div style={{
            fontFamily: DFONT_MONO, fontSize: 12, fontWeight: 700,
            color: deltaTone === 'ok' ? DC.ok : deltaTone === 'bad' ? DC.bad : DC.fg3,
          }}>{delta}</div>
        )}
        {spark && <Sparkline data={spark} tone={deltaTone}/>}
      </div>
      {footer && <div style={{ fontSize: 11, color: DC.fg3, marginTop: 8 }}>{footer}</div>}
    </div>
  );
}

function Sparkline({ data, tone = 'ok' }) {
  const W = 92, H = 28;
  const max = Math.max(...data), min = Math.min(...data);
  const r = max - min || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * W;
    const y = H - ((v - min) / r) * (H - 4) - 2;
    return `${x},${y}`;
  }).join(' ');
  const color = tone === 'bad' ? DC.bad : tone === 'warn' ? DC.warn : DC.mag;
  return (
    <svg width={W} height={H}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── Bar chart (swaps by hour) ──────────────────────────────────────────
function BarChart({ data }) {
  // data: [{ hr, val, target }]
  const max = Math.max(...data.map(d => Math.max(d.val, d.target || 0)));
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 168, padding: '4px 0' }}>
      {data.map((d, i) => {
        const h = (d.val / max) * 100;
        const peak = d.val === Math.max(...data.map(x => x.val));
        return (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end' }}>
              <div style={{
                width: '100%', height: h + '%',
                background: peak ? DC.mag : 'rgba(210,12,125,0.45)',
                borderRadius: '4px 4px 0 0',
                position: 'relative',
              }}>
                {peak && (
                  <div style={{
                    position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)',
                    marginBottom: 4,
                    fontFamily: DFONT_MONO, fontSize: 11, fontWeight: 700, color: DC.fg1,
                  }}>{d.val}</div>
                )}
              </div>
            </div>
            <div style={{ fontFamily: DFONT_MONO, fontSize: 10, color: DC.fg3 }}>{d.hr}</div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Station card ───────────────────────────────────────────────────────
function StationCard({ name, area, status, queue, ready, total, swapsToday, target }) {
  const dot = status === 'live' ? DC.ok : status === 'busy' ? DC.warn : status === 'down' ? DC.bad : DC.fg3;
  const onTarget = swapsToday >= target;
  return (
    <div style={{
      background: DC.surface, border: `1px solid ${DC.hairline}`,
      borderRadius: 12, padding: 16,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: DC.fg1 }}>{name}</div>
          <div style={{ fontFamily: DFONT_MONO, fontSize: 11, color: DC.fg3, marginTop: 2 }}>{area}</div>
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: status === 'live' ? 'rgba(34,197,94,0.10)' :
                      status === 'busy' ? 'rgba(245,158,11,0.10)' :
                      status === 'down' ? 'rgba(244,63,94,0.10)' : 'rgba(123,131,160,0.10)',
          color: dot, padding: '3px 8px', borderRadius: 999,
          fontFamily: DFONT_MONO, fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: dot }}/>
          {status}
        </div>
      </div>

      {/* Slot fill bar */}
      <div style={{ marginTop: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={{ fontSize: 11, color: DC.fg3, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Ready</span>
          <span style={{
            fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DATA,
            fontWeight: 800, fontSize: 14, color: DC.fg1,
            fontVariantNumeric: 'tabular-nums',
          }}>{ready}<span style={{ color: DC.fg3 }}> / {total}</span></span>
        </div>
        <div style={{
          height: 6, background: DC.hairline, borderRadius: 999, marginTop: 6, overflow: 'hidden',
          display: 'flex',
        }}>
          <div style={{ width: `${(ready/total)*100}%`, background: DC.mag }}/>
        </div>
      </div>

      {/* Footer stats */}
      <div style={{
        marginTop: 14, paddingTop: 12, borderTop: `1px solid ${DC.hairline}`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div>
          <div style={{ fontSize: 10, color: DC.fg3, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase' }}>Queue</div>
          <div style={{
            fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DATA,
            fontWeight: 800, fontSize: 18, color: DC.fg1, marginTop: 2,
            fontVariantNumeric: 'tabular-nums',
          }}>{queue}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 10, color: DC.fg3, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase' }}>Today</div>
          <div style={{
            fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DATA,
            fontWeight: 800, fontSize: 18,
            color: onTarget ? DC.ok : DC.fg1, marginTop: 2,
            fontVariantNumeric: 'tabular-nums',
          }}>{swapsToday}<span style={{ color: DC.fg3, fontSize: 12 }}> / {target}</span></div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// 01 OVERVIEW
// ═══════════════════════════════════════════════════════════════════════
function OverviewScreen() {
  const stations = [
    { name: 'Nakawa Bay',   area: 'Kampala · East',    status: 'live', queue: 2, ready: 6, total: 8, swapsToday: 47, target: 40 },
    { name: 'Kabalagala',   area: 'Kampala · Central', status: 'busy', queue: 5, ready: 3, total: 8, swapsToday: 38, target: 40 },
    { name: 'Ntinda Hub',   area: 'Kampala · North',   status: 'live', queue: 1, ready: 7, total: 8, swapsToday: 52, target: 45 },
    { name: 'Wandegeya',    area: 'Kampala · Central', status: 'live', queue: 0, ready: 8, total: 8, swapsToday: 29, target: 35 },
    { name: 'Lugogo Mall',  area: 'Kampala · East',    status: 'busy', queue: 4, ready: 2, total: 8, swapsToday: 41, target: 40 },
    { name: 'Bweyogerere',  area: 'Wakiso · East',     status: 'live', queue: 1, ready: 5, total: 8, swapsToday: 22, target: 30 },
    { name: 'Entebbe Rd',   area: 'Wakiso · South',    status: 'down', queue: 0, ready: 0, total: 8, swapsToday: 0,  target: 30 },
    { name: 'Mukono Hub',   area: 'Mukono · Central',  status: 'live', queue: 0, ready: 6, total: 8, swapsToday: 18, target: 25 },
  ];

  const recent = [
    { time: '14:38:21', station: 'Ntinda Hub',  rider: 'Musa Kato',     plate: 'UAJ 027F', pack: 'GG-0421', amt: 'UGX 6,000', status: 'closed' },
    { time: '14:36:02', station: 'Kabalagala',  rider: 'Jane Akello',   plate: 'UAH 119B', pack: 'GG-1182', amt: 'UGX 6,000', status: 'closed' },
    { time: '14:35:44', station: 'Nakawa Bay',  rider: 'David Okello',  plate: 'UAK 802L', pack: 'GG-0903', amt: 'UGX 6,000', status: 'closed' },
    { time: '14:33:18', station: 'Lugogo Mall', rider: 'Brian Ssali',   plate: 'UBC 441K', pack: 'GG-2204', amt: 'UGX 6,000', status: 'pending', warn: true },
    { time: '14:31:09', station: 'Ntinda Hub',  rider: 'Mariam Nansubuga', plate: 'UAR 312X', pack: 'GG-0552', amt: 'UGX 6,000', status: 'closed' },
    { time: '14:28:50', station: 'Wandegeya',   rider: 'Peter Lubega',  plate: 'UAW 829G', pack: 'GG-1741', amt: 'UGX 6,000', status: 'closed' },
    { time: '14:27:11', station: 'Kabalagala',  rider: 'Sarah Birungi', plate: 'UAY 102C', pack: 'GG-0316', amt: 'UGX 6,000', status: 'closed' },
    { time: '14:24:33', station: 'Mukono Hub',  rider: 'Tom Ssemakula', plate: 'UBA 776P', pack: 'GG-2087', amt: 'UGX 6,000', status: 'closed' },
  ];

  const hours = [
    { hr: '6',  val: 18 }, { hr: '7',  val: 34 }, { hr: '8',  val: 52 },
    { hr: '9',  val: 61 }, { hr: '10', val: 49 }, { hr: '11', val: 44 },
    { hr: '12', val: 58 }, { hr: '13', val: 72 }, { hr: '14', val: 67 },
    { hr: '15', val: 0  }, { hr: '16', val: 0  }, { hr: '17', val: 0 },
  ];

  return (
    <div style={{
      width: OPS_W, height: OPS_H, background: DC.bg, color: DC.fg1,
      fontFamily: DFONT_BODY, display: 'flex', overflow: 'hidden',
    }}>
      <OpsSidebar active="over"/>
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <OpsTopbar title="Overview" sub="Live look at the network — swaps, stations, and what needs attention right now."/>

        <div style={{ flex: 1, overflow: 'auto', padding: '22px 28px 32px' }}>
          {/* KPI row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
            <KpiTile label="Swaps · today" value="455" delta="+12% vs yest"
              chip={{ bg: DC.chip.pink.bg, fg: DC.chip.pink.fg, icon: IK.swap }}
              spark={[28, 31, 38, 45, 52, 47, 49, 61, 58, 67, 72, 80]}/>
            <KpiTile label="Revenue · today" value="2.73" unit="M UGX" delta="+8%"
              chip={{ bg: DC.chip.mint.bg, fg: DC.chip.mint.fg, icon: IK.dollar }}
              spark={[40, 42, 48, 50, 55, 52, 58, 62, 67, 70, 73, 78]}/>
            <KpiTile label="Active stations" value="17" unit="/ 18" delta="1 down — Entebbe Rd"
              deltaTone="bad"
              chip={{ bg: DC.chip.teal.bg, fg: DC.chip.teal.fg, icon: IK.station }}/>
            <KpiTile label="Avg swap time" value="1.18" unit="min" delta="−8 sec"
              chip={{ bg: DC.chip.violet.bg, fg: DC.chip.violet.fg, icon: IK.clock }}
              spark={[88, 82, 75, 78, 74, 72, 70, 71, 68, 70, 69, 71]}/>
            <KpiTile label="Active riders" value="312" delta="+24 today"
              chip={{ bg: DC.chip.blue.bg, fg: DC.chip.blue.fg, icon: IK.users }}
              spark={[260, 268, 275, 280, 288, 295, 298, 302, 304, 308, 310, 312]}/>
          </div>

          {/* Chart + Alerts row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: 14, marginTop: 14 }}>
            {/* Bar chart */}
            <div style={{
              background: DC.surface, border: `1px solid ${DC.hairline}`,
              borderRadius: 12, padding: 18,
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: 11, color: DC.fg3, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase' }}>Swaps by hour</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 6 }}>
                    <span style={{
                      fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DATA,
                      fontWeight: 800, fontSize: 28, color: DC.fg1,
                      fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em',
                    }}>72</span>
                    <span style={{ fontSize: 12, color: DC.fg3 }}>peak · 13:00</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  {['Today', '7d', '30d'].map((l, i) => (
                    <button key={l} style={{
                      background: i === 0 ? DC.surface2 : 'transparent',
                      color: i === 0 ? DC.fg1 : DC.fg3,
                      border: `1px solid ${i === 0 ? DC.hairline2 : 'transparent'}`,
                      borderRadius: 7, padding: '5px 12px',
                      fontFamily: DFONT_BODY, fontWeight: 600, fontSize: 12,
                      cursor: 'pointer',
                    }}>{l}</button>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: 16 }}>
                <BarChart data={hours}/>
              </div>
            </div>

            {/* Alerts */}
            <div style={{
              background: DC.surface, border: `1px solid ${DC.hairline}`,
              borderRadius: 12, padding: 18,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: 11, color: DC.fg3, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase' }}>Needs attention</div>
                <span style={{
                  fontFamily: DFONT_MONO, fontSize: 10, fontWeight: 700,
                  color: DC.bad, background: 'rgba(244,63,94,0.10)',
                  border: `1px solid rgba(244,63,94,0.30)`,
                  padding: '2px 7px', borderRadius: 999,
                }}>3 OPEN</span>
              </div>

              <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { icon: IK.station, tone: 'bad',  title: 'Entebbe Rd offline',     sub: '12 min ago · power fault · technician dispatched' },
                  { icon: IK.battery, tone: 'warn', title: 'Kabalagala low on ready packs', sub: '3 / 8 ready · queue at 5 riders' },
                  { icon: IK.warning, tone: 'warn', title: 'Pack GG-0412 cell drift', sub: 'cell #3 down 8% · flag for rebalance' },
                ].map((a, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 12, padding: '10px 0',
                    borderTop: i > 0 ? `1px solid ${DC.hairline}` : 'none',
                  }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: 8,
                      background: a.tone === 'bad' ? 'rgba(244,63,94,0.14)' : 'rgba(245,158,11,0.14)',
                      color: a.tone === 'bad' ? DC.bad : DC.warn,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <I size={16}>{a.icon}</I>
                    </div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: DC.fg1 }}>{a.title}</div>
                      <div style={{ fontSize: 11, color: DC.fg3, marginTop: 2 }}>{a.sub}</div>
                    </div>
                    <span style={{ color: DC.fg4, display: 'flex' }}><I size={14}>{IK.chev}</I></span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stations grid */}
          <div style={{ marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{
                fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DISPLAY_TIGHT,
                fontWeight: 800, fontSize: 18, color: DC.fg1, letterSpacing: '-0.01em',
              }}>Stations · live</div>
              <div style={{ fontSize: 12, color: DC.fg3, marginTop: 2 }}>17 live · 1 down · sorted by current queue</div>
            </div>
            <button style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              color: DC.fg2, background: 'transparent', border: 'none',
              fontFamily: DFONT_BODY, fontWeight: 600, fontSize: 13, cursor: 'pointer',
            }}>
              View all stations <I size={14}>{IK.chev}</I>
            </button>
          </div>
          <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {stations.map((s, i) => <StationCard key={i} {...s}/>)}
          </div>

          {/* Recent swaps */}
          <div style={{ marginTop: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DISPLAY_TIGHT,
                  fontWeight: 800, fontSize: 18, color: DC.fg1, letterSpacing: '-0.01em',
                }}>Recent swaps</div>
                <div style={{ fontSize: 12, color: DC.fg3, marginTop: 2 }}>Streaming · last 8 closed swaps across the network</div>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={pillBtn()}><I size={14}>{IK.filter}</I> Filter</button>
                <button style={pillBtn()}><I size={14}>{IK.download}</I> Export</button>
              </div>
            </div>

            <div style={{
              marginTop: 12,
              background: DC.surface, border: `1px solid ${DC.hairline}`,
              borderRadius: 12, overflow: 'hidden',
            }}>
              {/* header */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '110px 1.2fr 1.4fr 1fr 1fr 1fr 100px',
                gap: 16, padding: '12px 18px',
                borderBottom: `1px solid ${DC.hairline}`,
                fontSize: 10, color: DC.fg3, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase',
              }}>
                <span>Time</span><span>Station</span><span>Rider</span>
                <span>Plate</span><span>Pack</span><span>Amount</span><span>Status</span>
              </div>
              {recent.map((r, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '110px 1.2fr 1.4fr 1fr 1fr 1fr 100px',
                  gap: 16, padding: '12px 18px',
                  borderTop: i > 0 ? `1px solid ${DC.hairline}` : 'none',
                  fontSize: 13, color: DC.fg1, alignItems: 'center',
                }}>
                  <span style={{ fontFamily: DFONT_MONO, fontSize: 12, color: DC.fg2 }}>{r.time}</span>
                  <span style={{ color: DC.fg1, fontWeight: 600 }}>{r.station}</span>
                  <span>{r.rider}</span>
                  <span style={{ fontFamily: DFONT_MONO, fontSize: 12, color: DC.fg2 }}>{r.plate}</span>
                  <span style={{ fontFamily: DFONT_MONO, fontSize: 12, color: DC.fg2 }}>{r.pack}</span>
                  <span style={{
                    fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DATA,
                    fontWeight: 700, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.01em',
                  }}>{r.amt}</span>
                  <span>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 6,
                      background: r.status === 'closed' ? 'rgba(34,197,94,0.10)' : 'rgba(245,158,11,0.10)',
                      color: r.status === 'closed' ? DC.ok : DC.warn,
                      padding: '2px 8px', borderRadius: 999,
                      fontFamily: DFONT_MONO, fontSize: 10, fontWeight: 700, letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}>
                      <span style={{ width: 5, height: 5, borderRadius: 999,
                        background: r.status === 'closed' ? DC.ok : DC.warn }}/>
                      {r.status}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// 02 STATIONS — detailed list view
// ═══════════════════════════════════════════════════════════════════════
function StationsScreen() {
  const rows = [
    { name: 'Ntinda Hub',    area: 'Kampala · North',    status: 'live', queue: 1, ready: 7, total: 8, swaps: 52, rev: '312k', uptime: 99.8, officer: 'Sarah Nakamura' },
    { name: 'Nakawa Bay',    area: 'Kampala · East',     status: 'live', queue: 2, ready: 6, total: 8, swaps: 47, rev: '282k', uptime: 99.9, officer: 'James Okot' },
    { name: 'Lugogo Mall',   area: 'Kampala · East',     status: 'busy', queue: 4, ready: 2, total: 8, swaps: 41, rev: '246k', uptime: 99.6, officer: 'Mary Achieng' },
    { name: 'Kabalagala',    area: 'Kampala · Central',  status: 'busy', queue: 5, ready: 3, total: 8, swaps: 38, rev: '228k', uptime: 98.9, officer: 'Paul Mugisha' },
    { name: 'Wandegeya',     area: 'Kampala · Central',  status: 'live', queue: 0, ready: 8, total: 8, swaps: 29, rev: '174k', uptime: 100,  officer: 'Grace Atim' },
    { name: 'Bweyogerere',   area: 'Wakiso · East',      status: 'live', queue: 1, ready: 5, total: 8, swaps: 22, rev: '132k', uptime: 99.2, officer: 'Henry Kasule' },
    { name: 'Mukono Hub',    area: 'Mukono · Central',   status: 'live', queue: 0, ready: 6, total: 8, swaps: 18, rev: '108k', uptime: 99.7, officer: 'Lillian Namutebi' },
    { name: 'Najjera',       area: 'Wakiso · North',     status: 'live', queue: 2, ready: 4, total: 8, swaps: 33, rev: '198k', uptime: 99.5, officer: 'Eric Mubiru' },
    { name: 'Bugolobi',      area: 'Kampala · East',     status: 'live', queue: 1, ready: 7, total: 8, swaps: 27, rev: '162k', uptime: 99.9, officer: 'Diana Apio' },
    { name: 'Entebbe Rd',    area: 'Wakiso · South',     status: 'down', queue: 0, ready: 0, total: 8, swaps: 0,  rev: '—',    uptime: 87.3, officer: 'Brian Ochan' },
    { name: 'Kireka',        area: 'Wakiso · East',      status: 'live', queue: 1, ready: 6, total: 8, swaps: 31, rev: '186k', uptime: 99.4, officer: 'Sandra Nakato' },
    { name: 'Kawempe',       area: 'Kampala · North',    status: 'live', queue: 0, ready: 5, total: 8, swaps: 25, rev: '150k', uptime: 99.8, officer: 'Joseph Wamala' },
  ];
  return (
    <div style={{
      width: OPS_W, height: OPS_H, background: DC.bg, color: DC.fg1,
      fontFamily: DFONT_BODY, display: 'flex', overflow: 'hidden',
    }}>
      <OpsSidebar active="stat"/>
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <OpsTopbar title="Stations" sub="All 18 stations · status, throughput, and on-shift officer."/>

        <div style={{ flex: 1, overflow: 'auto', padding: '22px 28px 32px' }}>
          {/* Filter strip */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, alignItems: 'center' }}>
            <button style={tabBtn(true)}>All <span style={tabCount()}>18</span></button>
            <button style={tabBtn(false)}>Live <span style={tabCount('ok')}>17</span></button>
            <button style={tabBtn(false)}>Busy <span style={tabCount('warn')}>3</span></button>
            <button style={tabBtn(false)}>Down <span style={tabCount('bad')}>1</span></button>
            <div style={{ flex: 1 }}/>
            <button style={pillBtn()}><I size={14}>{IK.pin}</I> Map view</button>
            <button style={pillBtn()}><I size={14}>{IK.filter}</I> Region: all</button>
          </div>

          <div style={{
            background: DC.surface, border: `1px solid ${DC.hairline}`,
            borderRadius: 12, overflow: 'hidden',
          }}>
            {/* header */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 1fr 90px 1.2fr 100px 100px 100px 1fr 36px',
              gap: 14, padding: '14px 20px',
              borderBottom: `1px solid ${DC.hairline}`,
              fontSize: 10, color: DC.fg3, fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase',
            }}>
              <span>Station</span><span>Area</span><span>Status</span>
              <span>Ready / queue</span><span>Swaps</span><span>Revenue</span><span>Uptime</span>
              <span>On shift</span><span/>
            </div>
            {rows.map((r, i) => {
              const dot = r.status === 'live' ? DC.ok : r.status === 'busy' ? DC.warn : DC.bad;
              return (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '1.4fr 1fr 90px 1.2fr 100px 100px 100px 1fr 36px',
                  gap: 14, padding: '14px 20px',
                  borderTop: i > 0 ? `1px solid ${DC.hairline}` : 'none',
                  fontSize: 13, color: DC.fg1, alignItems: 'center',
                }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>{r.name}</div>
                    <div style={{ fontFamily: DFONT_MONO, fontSize: 10, color: DC.fg4, marginTop: 2 }}>STN-{String(i+101).padStart(4,'0')}</div>
                  </div>
                  <span style={{ color: DC.fg2 }}>{r.area}</span>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    color: dot,
                    fontFamily: DFONT_MONO, fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: dot }}/>
                    {r.status}
                  </span>
                  <div>
                    <div style={{
                      fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DATA,
                      fontWeight: 700, fontSize: 13,
                      fontVariantNumeric: 'tabular-nums',
                    }}>{r.ready}<span style={{ color: DC.fg3 }}>/{r.total}</span>
                      <span style={{ color: DC.fg3, marginLeft: 8, fontSize: 11 }}>· {r.queue} in queue</span>
                    </div>
                    <div style={{
                      height: 4, background: DC.hairline, borderRadius: 999, marginTop: 5, overflow: 'hidden',
                    }}>
                      <div style={{ width: `${(r.ready/r.total)*100}%`, height: '100%', background: DC.mag }}/>
                    </div>
                  </div>
                  <span style={{
                    fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DATA,
                    fontWeight: 700, fontVariantNumeric: 'tabular-nums',
                  }}>{r.swaps}</span>
                  <span style={{
                    fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DATA,
                    fontWeight: 700, fontVariantNumeric: 'tabular-nums',
                  }}>UGX {r.rev}</span>
                  <span style={{
                    fontFamily: DFONT_MONO, fontSize: 12,
                    color: r.uptime < 95 ? DC.bad : r.uptime < 99.5 ? DC.warn : DC.ok,
                  }}>{r.uptime}%</span>
                  <span style={{ color: DC.fg2 }}>{r.officer}</span>
                  <span style={{ color: DC.fg3, display: 'flex', justifyContent: 'flex-end' }}><I size={16}>{IK.more}</I></span>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

// helpers
function pillBtn() {
  return {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    background: DC.surface, color: DC.fg2,
    border: `1px solid ${DC.hairline2}`,
    borderRadius: 8, padding: '6px 12px',
    fontFamily: DFONT_BODY, fontWeight: 600, fontSize: 12,
    cursor: 'pointer',
  };
}
function tabBtn(active) {
  return {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    background: active ? DC.surface2 : 'transparent',
    color: active ? DC.fg1 : DC.fg2,
    border: `1px solid ${active ? DC.hairline2 : 'transparent'}`,
    borderRadius: 8, padding: '7px 14px',
    fontFamily: DFONT_BODY, fontWeight: 600, fontSize: 13,
    cursor: 'pointer',
  };
}
function tabCount(tone) {
  return {
    fontFamily: 'ui-monospace, monospace', fontSize: 11, fontWeight: 700,
    background: tone === 'ok'  ? 'rgba(34,197,94,0.12)' :
                tone === 'warn'? 'rgba(245,158,11,0.12)' :
                tone === 'bad' ? 'rgba(244,63,94,0.12)' : DC.hairline,
    color: tone === 'ok'  ? DC.ok :
           tone === 'warn'? DC.warn :
           tone === 'bad' ? DC.bad : DC.fg3,
    padding: '1px 7px', borderRadius: 999, minWidth: 16, textAlign: 'center',
  };
}

Object.assign(window, {
  OverviewScreen, StationsScreen, OPS_W, OPS_H,
});
