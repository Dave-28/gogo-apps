// battery-maintenance/screens.jsx — battery technician app
// Battery-specific ticketing & pack health

// ═══════════════════════════════════════════════════════
// 01 PACK QUEUE — flagged packs
// ═══════════════════════════════════════════════════════
function PackQueueScreen() {
  const packs = [
    { id: 'GG‑0421', cycles: 842, health: 88, issue: 'Imbalance · cell 7', sev: 'high', station: 'Nakawa' },
    { id: 'GG‑0307', cycles: 1124, health: 76, issue: 'Capacity ↓ 24%', sev: 'high', station: 'Ntinda' },
    { id: 'GG‑0902', cycles: 612, health: 92, issue: 'Temp spike during charge', sev: 'med', station: 'Kabalagala' },
    { id: 'GG‑1241', cycles: 412, health: 96, issue: 'Routine 500-cycle check', sev: 'low', station: 'Bugolobi' },
  ];
  const sevColor = { high: '#C82342', med: '#E08200', low: '#0E8F5A' };
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="14" y2="18"/></svg>}
        title="PACK CARE"
        trailing={<div style={{ width: 32, height: 32, borderRadius: 999, background: C.aub, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY, fontWeight: 800, fontSize: 13 }}>I</div>}
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 24px' }}>
        {/* Hero */}
        <div style={{ background: C.aub, color: C.white, borderRadius: 16, padding: 18, position: 'relative', overflow: 'hidden' }}>
          <PlusMinusBg color="rgba(255,255,255,0.04)" size={20} gap={56}/>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>FLAGGED PACKS</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 56, lineHeight: 1, marginTop: 4, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.04em' }}>14</div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 6 }}>of 1,284 active · 1.1%</div>
            </div>
            <BatterySVG size={56} charged={88} color="#E08200"/>
          </div>
          <div style={{ position: 'relative', display: 'flex', gap: 22, marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.10)' }}>
            <div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>High</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 18, color: '#F08FBE', marginTop: 4 }}>3</div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Med</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 18, marginTop: 4 }}>6</div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Low</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 18, marginTop: 4 }}>5</div>
            </div>
          </div>
        </div>

        {/* Filter row */}
        <div style={{ display: 'flex', gap: 6, marginTop: 16, overflowX: 'auto' }}>
          {[
            ['All · 14', true], ['Imbalance · 4', false], ['Capacity · 5', false], ['Thermal · 3', false],
          ].map(([l, on], i) => (
            <div key={i} style={{
              padding: '6px 12px', borderRadius: 999,
              background: on ? C.aub : C.white,
              color: on ? C.white : C.aub,
              border: `1px solid ${on ? C.aub : C.hairline}`,
              fontFamily: FONT_BODY, fontSize: 12, fontWeight: 600,
              whiteSpace: 'nowrap',
            }}>{l}</div>
          ))}
        </div>

        {/* Packs */}
        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {packs.map((p, i) => (
            <div key={i} style={{
              background: C.white, border: `1px solid ${C.hairline}`,
              borderLeft: `4px solid ${sevColor[p.sev]}`,
              borderRadius: 10, padding: '12px 14px',
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <BatterySVG size={36} charged={p.health} color={p.sev === 'high' ? '#C82342' : p.sev === 'med' ? '#E08200' : '#0E8F5A'}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY_TIGHT, fontWeight: 800, fontSize: 14, color: C.aub, letterSpacing: '-0.01em' }}>{p.id}</span>
                  <span style={{ fontFamily: FONT_MONO, fontSize: 10, fontWeight: 700, color: sevColor[p.sev], background: `${sevColor[p.sev]}1A`, padding: '2px 6px', borderRadius: 999 }}>
                    {p.sev.toUpperCase()}
                  </span>
                </div>
                <div style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 13, marginTop: 4 }}>{p.issue}</div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.fg3, marginTop: 2 }}>{p.cycles} cycles · {p.station}</div>
              </div>
              <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 18, color: p.health >= 90 ? '#0E8F5A' : p.health >= 80 ? '#E08200' : '#C82342', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.02em' }}>{p.health}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 02 PACK DETAIL — cell-level health
// ═══════════════════════════════════════════════════════
function PackDetailScreen() {
  // 16 cells, one bad
  const cells = [
    3.82, 3.81, 3.83, 3.82, 3.84, 3.82, 3.41, 3.83,
    3.81, 3.82, 3.83, 3.82, 3.84, 3.81, 3.82, 3.83,
  ];
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        title="GG‑0421"
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>}
        trailing={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>}
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 24px' }}>
        {/* Hero stats */}
        <div style={{ background: C.aub, color: C.white, borderRadius: 16, padding: 18, position: 'relative', overflow: 'hidden' }}>
          <PlusMinusBg color="rgba(255,255,255,0.04)" size={18} gap={50}/>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 18 }}>
            <BatterySVG size={64} charged={88} color="#E08200"/>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>HEALTH (SoH)</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 56, lineHeight: 0.95, marginTop: 4, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.04em' }}>
                88<span style={{ fontSize: 22, color: 'rgba(255,255,255,0.55)' }}>%</span>
              </div>
              <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: '#F08FBE', marginTop: 6 }}>− 4% in last 60 days</div>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.10)' }}>
            <div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Cycles</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 700, fontSize: 18, marginTop: 4 }}>842</div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>In service</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 700, fontSize: 18, marginTop: 4 }}>14 mo</div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>Capacity</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 700, fontSize: 18, marginTop: 4 }}>43.2 Ah</div>
            </div>
          </div>
        </div>

        {/* Cell grid */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 22, marginBottom: 10 }}>
          <Caption>Cells · 16</Caption>
          <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: '#C82342', fontWeight: 600 }}>− cell 7 imbalanced</span>
        </div>
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, padding: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 6 }}>
            {cells.map((v, i) => {
              const bad = v < 3.6;
              return (
                <div key={i} style={{
                  padding: 6, borderRadius: 6, textAlign: 'center',
                  background: bad ? '#FFE9EE' : C.aub50,
                  border: bad ? `1.5px solid #C82342` : 'transparent',
                }}>
                  <div style={{ fontFamily: FONT_MONO, fontSize: 9, color: C.fg3, fontWeight: 700 }}>C{i+1}</div>
                  <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 11, marginTop: 2, color: bad ? '#C82342' : C.aub, fontVariantNumeric: 'tabular-nums' }}>{v.toFixed(2)}</div>
                </div>
              );
            })}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontFamily: FONT_MONO, fontSize: 10, color: C.fg3 }}>
            <span>min 3.41 V</span>
            <span>avg 3.81 V</span>
            <span>max 3.84 V · Δ 0.43 V</span>
          </div>
        </div>

        {/* Mini history graph */}
        <Caption style={{ marginTop: 22, marginBottom: 8 }}>SoH · 90 days</Caption>
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, padding: 14, height: 110, position: 'relative' }}>
          <svg viewBox="0 0 280 70" style={{ width: '100%', height: '100%' }}>
            <polyline
              points="0,8 30,9 60,11 90,13 120,14 150,18 180,22 210,28 240,32 280,36"
              stroke={C.mag} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <line x1="0" y1="50" x2="280" y2="50" stroke={C.hairline} strokeDasharray="2 4"/>
            <text x="2" y="48" fontFamily={FONT_MONO} fontSize="8" fill={C.fg3}>80% retire threshold</text>
          </svg>
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
          <Button variant="secondary" full>Rebalance</Button>
          <Button variant="accent" full>Open ticket</Button>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 03 DISPOSITION — what to do with the pack
// ═══════════════════════════════════════════════════════
function DispositionScreen() {
  const options = [
    { l: 'Rebalance', sub: 'Active cell balancing · 4–6 h on bench', tag: 'RECOMMENDED', tone: 'mag' },
    { l: 'Replace cell 7', sub: 'Out for 2–3 days · cost UGX 280k', tag: 'OPTION', tone: 'aub' },
    { l: 'Retire from fleet', sub: 'Move to grid-storage 2nd life · final', tag: 'OPTION', tone: 'aub' },
  ];
  return (
    <div style={{ background: C.aub, height: '100%', color: C.white, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <PlusMinusBg color="rgba(255,255,255,0.04)" size={22} gap={60}/>
      <AppTopBar
        dark
        title="DISPOSITION"
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>}
        trailing={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>}
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 20px 22px', position: 'relative' }}>
        {/* Pack chip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 6 }}>
          <BatterySVG size={56} charged={88} color="#E08200"/>
          <div>
            <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY, fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em' }}>GG‑0421</div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>842 cycles · SoH 88% · imbalance 0.43V</div>
          </div>
        </div>

        <div style={{
          fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY,
          fontWeight: 800, fontSize: 36, lineHeight: 1, marginTop: 30,
          textTransform: 'uppercase', letterSpacing: '-0.03em',
        }}>
          WHAT NEXT,<br/>
          <span style={{ color: C.mag }}>+</span> ISAAC?
        </div>

        {/* Options */}
        <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {options.map((o, i) => (
            <div key={i} style={{
              background: o.tone === 'mag' ? C.mag : 'rgba(255,255,255,0.06)',
              borderRadius: 14, padding: 16,
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 999,
                background: o.tone === 'mag' ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.10)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY,
                fontWeight: 800, fontSize: 16,
              }}>{String(i+1).padStart(2,'0')}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontFamily: FONT_BODY, fontWeight: 700, fontSize: 15 }}>{o.l}</span>
                  <span style={{ fontFamily: FONT_MONO, fontSize: 9, fontWeight: 700, background: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: 999, letterSpacing: '0.04em' }}>{o.tag}</span>
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 4 }}>{o.sub}</div>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </div>
          ))}
        </div>

        {/* Notes */}
        <Caption style={{ marginTop: 22, marginBottom: 8, color: 'rgba(255,255,255,0.55)' }}>Tech note</Caption>
        <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 12, padding: 14, fontFamily: FONT_BODY, fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
          Cell 7 was previously rebalanced 60 days ago. If imbalance recurs after this rebalance, escalate to replace.
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { PackQueueScreen, PackDetailScreen, DispositionScreen });
