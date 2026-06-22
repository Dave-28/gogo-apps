// bike-maintenance/screens.jsx — technician ticketing app for bikes

// ═══════════════════════════════════════════════════════
// 01 TICKETS QUEUE — open work, prioritized
// ═══════════════════════════════════════════════════════
function TicketsQueueScreen() {
  const tickets = [
    { id: '#T‑4218', plate: 'UAJ 027F', issue: 'Rear brake pad worn', sev: 'high', age: '2 h' },
    { id: '#T‑4217', plate: 'UAK 802L', issue: 'Headlight flickering at idle', sev: 'med', age: '4 h' },
    { id: '#T‑4215', plate: 'UAH 119B', issue: '60-day service due', sev: 'low', age: '1 d' },
    { id: '#T‑4214', plate: 'UAJ 559M', issue: 'Throttle response lag', sev: 'med', age: '1 d' },
    { id: '#T‑4211', plate: 'UAL 102K', issue: 'Mirror cracked', sev: 'low', age: '2 d' },
  ];
  const sevColor = { high: '#C82342', med: '#E08200', low: '#0E8F5A' };
  const sevLabel = { high: 'HIGH', med: 'MED', low: 'LOW' };
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="14" y2="18"/></svg>}
        title="BIKE TICKETS"
        trailing={<div style={{ width: 32, height: 32, borderRadius: 999, background: C.aub, color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY, fontWeight: 800, fontSize: 13 }}>R</div>}
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 24px' }}>
        {/* Counters */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {[
            { l: 'Open', v: '14', tone: 'aub' },
            { l: 'Today', v: '5', tone: 'mag' },
            { l: 'Avg time', v: '34m', tone: 'aub' },
          ].map((s, i) => (
            <div key={i} style={{
              background: s.tone === 'mag' ? C.mag : C.aub, color: C.white,
              borderRadius: 12, padding: 14,
            }}>
              <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.l}</div>
              <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 32, lineHeight: 1, marginTop: 6, fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.03em' }}>{s.v}</div>
            </div>
          ))}
        </div>

        {/* Filter chips */}
        <div style={{ display: 'flex', gap: 6, marginTop: 18, overflowX: 'auto' }}>
          {[
            ['All · 14', true], ['High · 3', false], ['Med · 6', false], ['Low · 5', false], ['Mine · 4', false],
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

        {/* Ticket list */}
        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {tickets.map((t, i) => (
            <div key={i} style={{
              background: C.white, border: `1px solid ${C.hairline}`,
              borderLeft: `4px solid ${sevColor[t.sev]}`,
              borderRadius: 10, padding: '12px 14px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{
                    fontFamily: FONT_MONO, fontSize: 11, fontWeight: 700,
                    color: sevColor[t.sev], background: `${sevColor[t.sev]}1A`,
                    padding: '2px 8px', borderRadius: 999,
                  }}>{sevLabel[t.sev]}</span>
                  <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.fg3 }}>{t.id}</span>
                </div>
                <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.fg3 }}>{t.age}</span>
              </div>
              <div style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 14, marginTop: 6, color: C.fg1 }}>{t.issue}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.fg3} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/>
                  <path d="M6 17 L10 9 L14 9 L17 14"/>
                </svg>
                <span style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY_TIGHT, fontWeight: 800, fontSize: 13, color: C.aub, letterSpacing: '-0.01em' }}>{t.plate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 02 INSPECTION — active ticket
// ═══════════════════════════════════════════════════════
function InspectionScreen() {
  const checks = [
    { l: 'Front brake pads', state: 'pass', v: '6mm · OK' },
    { l: 'Rear brake pads', state: 'fail', v: '1.2mm · replace' },
    { l: 'Brake fluid level', state: 'pass', v: 'full' },
    { l: 'Chain tension', state: 'warn', v: 'slack 28mm' },
    { l: 'Tires — front', state: 'pass', v: '4.8mm tread' },
    { l: 'Tires — rear', state: 'pass', v: '4.2mm tread' },
    { l: 'Headlight', state: 'pending', v: '—' },
  ];
  const stateColor = { pass: '#0E8F5A', fail: '#C82342', warn: '#E08200', pending: C.fg4 };
  const stateLabel = { pass: '+', fail: '−', warn: '!', pending: '·' };
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        title="#T‑4218"
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>}
        trailing={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>}
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 24px' }}>
        {/* Bike */}
        <div style={{ background: C.aub, color: C.white, borderRadius: 16, padding: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Bike</div>
            <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY, fontWeight: 800, fontSize: 28, marginTop: 4, letterSpacing: '-0.02em' }}>UAJ 027F</div>
            <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: 'rgba(255,255,255,0.65)', marginTop: 4 }}>14,820 km · last service 14d ago</div>
          </div>
          <Pill tone="mag">HIGH</Pill>
        </div>

        {/* Issue summary */}
        <div style={{ marginTop: 12, background: C.white, border: `1px solid ${C.hairline}`, borderLeft: `4px solid #C82342`, borderRadius: 10, padding: 14 }}>
          <div style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 700, color: '#C82342', textTransform: 'uppercase', letterSpacing: '0.10em' }}>Reported by rider</div>
          <div style={{ fontWeight: 600, fontSize: 14, marginTop: 6 }}>"Rear brake squealing &amp; soft pedal"</div>
          <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.fg3, marginTop: 4 }}>Musa Kato · 08:24 · 1 photo</div>
        </div>

        {/* Progress */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 22, marginBottom: 10 }}>
          <Caption>Inspection · 5/7</Caption>
          <span style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.fg3 }}>~ 8 min left</span>
        </div>
        <div style={{ height: 6, borderRadius: 999, background: C.hairline, overflow: 'hidden', marginBottom: 14 }}>
          <div style={{ width: '71%', height: '100%', background: C.mag }}/>
        </div>

        {/* Checklist */}
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, overflow: 'hidden' }}>
          {checks.map((c, i) => (
            <div key={i} style={{
              padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12,
              borderBottom: i < checks.length - 1 ? `1px solid ${C.hairline}` : 'none',
            }}>
              <div style={{
                width: 26, height: 26, borderRadius: 999,
                background: stateColor[c.state],
                color: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DISPLAY,
                fontWeight: 800, fontSize: 16, lineHeight: 1,
                opacity: c.state === 'pending' ? 0.4 : 1,
              }}>{stateLabel[c.state]}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: c.state === 'pending' ? C.fg3 : C.fg1 }}>{c.l}</div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.fg3, marginTop: 2 }}>{c.v}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
          <Button variant="secondary" full>Add part</Button>
          <Button variant="accent" full>Close ticket</Button>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// 03 BIKE HISTORY — service log
// ═══════════════════════════════════════════════════════
function BikeHistoryScreen() {
  const log = [
    { date: '14 May', t: 'Service · 10,000 km', tag: 'SERVICE', cost: '142k', who: 'R. Mukasa' },
    { date: '02 May', t: 'Chain replaced', tag: 'PART', cost: '48k', who: 'R. Mukasa' },
    { date: '18 Apr', t: 'Rear tire (Pirelli)', tag: 'PART', cost: '180k', who: 'I. Owino' },
    { date: '01 Apr', t: 'Service · 8,000 km', tag: 'SERVICE', cost: '95k', who: 'R. Mukasa' },
    { date: '14 Mar', t: 'Headlight bulb', tag: 'PART', cost: '12k', who: 'I. Owino' },
  ];
  return (
    <div style={{ background: C.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <AppTopBar
        title="UAJ 027F"
        leading={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>}
        trailing={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>}
      />
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 24px' }}>
        <div style={{ fontFamily: FONT_BODY, fontSize: 11, fontWeight: 700, color: C.fg3, textTransform: 'uppercase', letterSpacing: '0.12em' }}>ODOMETER</div>
        <div style={{ fontFamily: FONT_DISPLAY, fontVariationSettings: VFS_DATA, fontWeight: 800, fontSize: 76, lineHeight: 0.95, color: C.aub, letterSpacing: '-0.05em', marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>
          14,820<span style={{ fontSize: 22, color: C.fg3, marginLeft: 8 }}>km</span>
        </div>
        <div style={{ display: 'flex', gap: 18, marginTop: 4, fontFamily: FONT_MONO, fontSize: 12 }}>
          <span style={{ color: '#0E8F5A', fontWeight: 600 }}>+ 264 km / week</span>
          <span style={{ color: C.fg3 }}>next service: 15,000 km</span>
        </div>

        {/* Health bars */}
        <div style={{ marginTop: 22, background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, padding: 14 }}>
          <Caption style={{ marginBottom: 12 }}>Health · live</Caption>
          {[
            { l: 'Motor', v: 98 },
            { l: 'Brakes', v: 38, tone: 'warn' },
            { l: 'Tires', v: 76 },
            { l: 'Battery harness', v: 92 },
          ].map((h, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: i < 3 ? 8 : 0 }}>
              <span style={{ width: 100, fontSize: 12, color: C.fg2 }}>{h.l}</span>
              <div style={{ flex: 1, height: 8, background: C.hairline, borderRadius: 999, overflow: 'hidden' }}>
                <div style={{ width: `${h.v}%`, height: '100%', background: h.tone === 'warn' ? '#E08200' : C.mag }}/>
              </div>
              <span style={{ width: 36, textAlign: 'right', fontFamily: FONT_MONO, fontSize: 12, fontWeight: 700, color: h.tone === 'warn' ? '#E08200' : C.fg1 }}>{h.v}%</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <Caption style={{ marginTop: 22, marginBottom: 8 }}>Service log</Caption>
        <div style={{ background: C.white, border: `1px solid ${C.hairline}`, borderRadius: 12, overflow: 'hidden' }}>
          {log.map((l, i) => (
            <div key={i} style={{ padding: '12px 14px', display: 'flex', gap: 10, borderBottom: i < log.length - 1 ? `1px solid ${C.hairline}` : 'none' }}>
              <div style={{ width: 56, fontFamily: FONT_MONO, fontSize: 11, color: C.fg3, fontWeight: 600, paddingTop: 2 }}>{l.date}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontFamily: FONT_MONO, fontSize: 9, fontWeight: 700, background: l.tag === 'SERVICE' ? C.aub : C.mag, color: C.white, padding: '2px 6px', borderRadius: 4, letterSpacing: '0.04em' }}>{l.tag}</span>
                  <span style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: 13 }}>{l.t}</span>
                </div>
                <div style={{ fontFamily: FONT_MONO, fontSize: 11, color: C.fg3, marginTop: 4 }}>{l.who} · UGX {l.cost}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TicketsQueueScreen, InspectionScreen, BikeHistoryScreen });
