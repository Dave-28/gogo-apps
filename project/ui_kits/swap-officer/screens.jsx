// swap-officer/screens.jsx — production web app at the swap station.
// Three screens that mirror the live tool: Home, Close Battery Swap (Scan
// Asset step), and My Pending Swaps. Desktop-first, deep navy, GOGO magenta
// for the single accent.

const SCREEN_W = 1280;
const SCREEN_H = 800;

// ═══════════════════════════════════════════════════════════════════════
// Shared shell — the sidebar + top strip + main content slot.
// ═══════════════════════════════════════════════════════════════════════
function StaffShell({ active, children, progress = 0 }) {
  return (
    <div style={{
      width: SCREEN_W, height: SCREEN_H, background: DC.bg,
      color: DC.fg1, fontFamily: DFONT_BODY,
      display: 'flex', flexDirection: 'column', position: 'relative',
      overflow: 'hidden',
    }}>
      {progress > 0 && <ProgressBar pct={progress}/>}
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <TopStrip/>
          {children}
        </main>
        <Sidebar active={active}/>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// 01 HOME — 3 × 3 grid of swap-officer actions
// ═══════════════════════════════════════════════════════════════════════
function HomeScreen() {
  const cards = [
    { icon: IK.swap,      chip: DC.chip.blue,   title: 'Battery Swap',
      sub: 'Swap batteries for customer vehicles.' },
    { icon: IK.swap,      chip: DC.chip.peach,  title: 'Swap (Beta)',
      sub: 'Unified swap flow — close, open, or receive a battery.' },
    { icon: IK.checklist, chip: DC.chip.violet, title: 'My Pending Swaps',
      sub: 'View swaps pending closure.' },

    { icon: IK.card,      chip: DC.chip.peach,  title: 'Push Payment',
      sub: 'Create payment requests for clients.' },
    { icon: IK.truck,     chip: DC.chip.teal,   title: 'Battery Transfer',
      sub: 'Transfer batteries between stations.' },
    { icon: IK.warning,   chip: DC.chip.rose,   title: 'Battery Repossession',
      sub: 'Repossess batteries from clients.' },

    { icon: IK.history,   chip: DC.chip.mint,   title: 'History',
      sub: 'View your swap history.' },
    { icon: IK.user,      chip: DC.chip.slate,  title: 'Profile',
      sub: 'View your account details.' },
    { icon: IK.ticket,    chip: DC.chip.pink,   title: 'Bike Tickets',
      sub: 'Search for bike tickets.' },
  ];
  return (
    <StaffShell active="home" progress={28}>
      <div style={{ flex: 1, padding: '64px 64px', overflow: 'auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {cards.map((c, i) => <ActionCard key={i} {...c}/>)}
        </div>
      </div>
    </StaffShell>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// 02 CLOSE BATTERY SWAP — step indicator + Scan Asset card
// ═══════════════════════════════════════════════════════════════════════
function StepIndicator({ steps, current }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: 12, padding: '12px 0 22px',
    }}>
      {steps.map((s, i) => {
        const isActive = i === current;
        const isDone = i < current;
        return (
          <React.Fragment key={i}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: isActive ? '6px 14px 6px 6px' : 0,
              borderRadius: 999,
              background: isActive ? 'rgba(210,12,125,0.16)' : 'transparent',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 999,
                background: isActive ? DC.mag : isDone ? 'rgba(210,12,125,0.16)' : 'transparent',
                border: isActive ? 'none' : `1px solid ${DC.hairline2}`,
                color: isActive ? '#fff' : isDone ? DC.mag : DC.fg3,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <I size={16} sw={2}>{s.icon}</I>
              </div>
              {isActive && (
                <span style={{
                  fontFamily: DFONT_BODY, fontSize: 13, fontWeight: 600,
                  color: DC.mag, textTransform: 'capitalize',
                }}>{s.label}</span>
              )}
            </div>
            {i < steps.length - 1 && (
              <div style={{
                width: 28, height: 1.5, background: DC.hairline2, borderRadius: 1,
              }}/>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function CloseSwapScreen() {
  const steps = [
    { label: 'Asset',   icon: IK.bike },
    { label: 'Video',   icon: IK.cam },
    { label: 'Power',   icon: IK.bolt },
    { label: 'Confirm', icon: IK.check },
    { label: 'Receipt', icon: IK.doc },
  ];
  return (
    <StaffShell active="swap" progress={62}>
      <Crumbs items={[
        { icon: IK.home, label: 'Home' },
        { icon: IK.lock, label: 'Close Battery Swap' },
      ]}/>

      <div style={{ flex: 1, padding: '14px 32px 32px', overflow: 'auto' }}>
        <StepIndicator steps={steps} current={0}/>

        {/* Scan Asset card */}
        <div style={{
          maxWidth: 720, margin: '0 auto',
          background: DC.surface, border: `1px solid ${DC.hairline}`,
          borderRadius: 16, padding: 28,
        }}>
          {/* Card header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 18 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 10,
              background: DC.chip.violet.bg, color: DC.chip.violet.fg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <I size={22} sw={2}>{IK.bike}</I>
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: DC.fg1 }}>Scan Asset</div>
              <div style={{ fontSize: 13, color: DC.fg3, marginTop: 3 }}>
                Search for the asset registration number
              </div>
            </div>
          </div>

          {/* Scanner viewport */}
          <div style={{
            position: 'relative', width: '100%', aspectRatio: '1.6 / 1',
            borderRadius: 12, overflow: 'hidden',
            background: 'radial-gradient(circle at 50% 45%, #2A3145 0%, #1A2034 70%, #11172A 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {/* Dashed scan window */}
            <div style={{
              position: 'absolute', left: '22%', top: '14%',
              right: '22%', bottom: '14%',
              border: '1.5px dashed rgba(248,113,113,0.55)',
              borderRadius: 12,
            }}>
              {/* Four red corner ticks */}
              {[
                { top: -2,    left: -2,   border: '4px solid #F87171', clip: 'borderTop borderLeft', rotation: 0   },
              ].map(()=>null)}
              <CornerTick pos="tl"/><CornerTick pos="tr"/><CornerTick pos="bl"/><CornerTick pos="br"/>
            </div>

            {/* Centred camera glyph */}
            <div style={{ color: '#F4F5FA', opacity: 0.85, position: 'relative' }}>
              <svg width="74" height="74" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="1.4"
                   strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8h4l2-3h6l2 3h4z"/>
                <circle cx="12" cy="13" r="3.6"/>
              </svg>
            </div>
          </div>

          {/* Below scanner */}
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: 10, marginTop: 22,
          }}>
            <button style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: DC.surface2, color: DC.fg1,
              border: `1px solid ${DC.hairline2}`,
              borderRadius: 10, padding: '10px 18px',
              fontFamily: DFONT_BODY, fontWeight: 600, fontSize: 14,
              cursor: 'pointer',
            }}>
              <I size={16}>{IK.search}</I>
              Manual Input
            </button>
            <div style={{ fontSize: 12, color: DC.fg3 }}>
              Scan QR code or enter manually
            </div>
          </div>
        </div>
      </div>
    </StaffShell>
  );
}

function CornerTick({ pos }) {
  // pos = tl | tr | bl | br — draws a 22px L bracket inside the dashed window
  const v = pos[0] === 't' ? 'top' : 'bottom';
  const h = pos[1] === 'l' ? 'left' : 'right';
  const len = 22, thick = 3;
  const c = '#F87171';
  const s = { position: 'absolute' };
  s[v] = -2; s[h] = -2;
  return (
    <>
      <div style={{ ...s, width: len, height: thick, background: c, borderRadius: 1 }}/>
      <div style={{ ...s, width: thick, height: len, background: c, borderRadius: 1 }}/>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// 03 MY PENDING SWAPS — two cards with negative-balance warning
// ═══════════════════════════════════════════════════════════════════════
function PendingSwapCard({ plate, swapId, asset, amount, projected, warn }) {
  const neg = projected.startsWith('-');
  return (
    <div style={{
      background: DC.surface, border: `1px solid ${DC.hairline}`,
      borderRadius: 14, padding: 22,
    }}>
      {/* Header — plate + swap id */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ color: DC.fg3, display: 'flex' }}><I size={20}>{IK.bike}</I></span>
        <span style={{
          fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DISPLAY_TIGHT,
          fontWeight: 800, fontSize: 22, color: DC.fg1, letterSpacing: '-0.01em',
        }}>{plate}</span>
      </div>
      <div style={{ fontFamily: DFONT_MONO, fontSize: 12, color: DC.fg3, marginTop: 4 }}>
        Swap #{swapId}
      </div>

      {/* Asset block */}
      <div style={{ marginTop: 18, marginBottom: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ color: DC.fg3, display: 'flex' }}><I size={16}>{IK.battery}</I></span>
          <span style={{
            fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DISPLAY_TIGHT,
            fontWeight: 700, fontSize: 16, color: DC.fg1,
          }}>{asset}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, color: DC.fg3 }}>
          <I size={14}>{IK.bolt}</I>
          <span style={{ fontFamily: DFONT_MONO, fontSize: 12 }}>Serial: {asset}</span>
        </div>
      </div>

      {/* Amount + projected */}
      <div style={{
        marginTop: 16, paddingTop: 16,
        borderTop: `1px solid ${DC.hairline}`,
        display: 'grid', gap: 8,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 14, color: DC.fg2 }}>Swap Amount:</span>
          <span style={{
            fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DATA,
            fontWeight: 800, fontSize: 16, color: DC.fg1,
            fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.01em',
          }}>{amount}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 14, color: DC.fg2 }}>Projected Balance:</span>
          <span style={{
            fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DATA,
            fontWeight: 800, fontSize: 16,
            color: neg ? DC.bad : DC.ok,
            fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.01em',
          }}>{neg ? projected.replace('-', '−') : projected}</span>
        </div>
      </div>

      {/* Warning banner */}
      {warn && (
        <div style={{
          marginTop: 14, padding: '10px 12px',
          background: 'rgba(244,63,94,0.10)',
          border: `1px solid rgba(244,63,94,0.30)`,
          borderRadius: 10,
          display: 'flex', alignItems: 'center', gap: 10,
          color: '#FB7185', fontSize: 13, fontWeight: 500,
        }}>
          <I size={16}>{IK.warning}</I>
          {warn}
        </div>
      )}

      {/* Action */}
      <button style={{
        marginTop: 16, width: '100%',
        background: DC.mag, color: '#fff', border: 'none',
        borderRadius: 10, padding: '14px 0',
        fontFamily: DFONT_BODY, fontWeight: 700, fontSize: 15,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        cursor: 'pointer', letterSpacing: '0.01em',
      }}>
        <I size={16} sw={2.2}>{IK.dollar}</I>
        Close Swap
      </button>
    </div>
  );
}

function PendingSwapsScreen() {
  return (
    <StaffShell active="pend" progress={0}>
      <Crumbs items={[
        { icon: IK.home,  label: 'Home' },
        { icon: IK.clock, label: 'My Pending Swaps' },
      ]}/>

      <div style={{ flex: 1, padding: '22px 32px 32px', overflow: 'auto' }}>
        {/* Summary strip */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 18,
        }}>
          <div>
            <div style={{
              fontFamily: DFONT_DISPLAY, fontVariationSettings: DVFS_DISPLAY_TIGHT,
              fontWeight: 800, fontSize: 22, color: DC.fg1, letterSpacing: '-0.01em',
            }}>2 pending</div>
            <div style={{ fontSize: 13, color: DC.fg3, marginTop: 2 }}>
              Both need closing before end of shift
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={pillBtnStyle()}>
              <I size={15}>{IK.filter}</I> All bays
            </button>
            <button style={pillBtnStyle()}>
              <I size={15}>{IK.history}</I> Sort: newest
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          <PendingSwapCard
            plate="UGC321L" swapId="822"
            asset="04-0309-TAILK-01"
            amount="UGX 6,522" projected="-UGX 7,738"
            warn="This swap will result in a negative balance"
          />
          <PendingSwapCard
            plate="UMA829GY" swapId="7442"
            asset="04-0309-TAICX-01"
            amount="UGX 5,419" projected="-UGX 6,635"
            warn="This swap will result in a negative balance"
          />
        </div>
      </div>
    </StaffShell>
  );
}

function pillBtnStyle() {
  return {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    background: DC.surface, color: DC.fg2,
    border: `1px solid ${DC.hairline2}`,
    borderRadius: 999, padding: '8px 14px',
    fontFamily: DFONT_BODY, fontWeight: 600, fontSize: 13,
    cursor: 'pointer',
  };
}

Object.assign(window, {
  HomeScreen, CloseSwapScreen, PendingSwapsScreen,
  SCREEN_W, SCREEN_H,
});
