# GOGO Rider App — UI kit

Customer-facing mobile app for boda-boda riders. Lets a rider:

1. **See the map** — find the nearest Swap Station with live battery availability.
2. **Reserve a swap** — lock a battery for the next 15 minutes before riding over.
3. **Swap** — scan, drop, pick up. The whole flow takes 90 seconds.
4. **Check earnings & wallet** — see swaps this week, top up balance, view history.
5. **Manage profile** — saved bike, KYC, support.

## Files

| File | What |
|---|---|
| `index.html` | Live prototype: launches into the Home/Map screen on a 390×844 iOS frame. Tap the bottom tabs to switch between Home, Swap, Wallet, Profile. The Swap flow is clickable (Find → Reserve → Confirm). |
| `home-map.html` | Home with map + station list |
| `swap-reserve.html` | Reserve a battery |
| `swap-confirm.html` | Confirmation screen |
| `wallet.html` | Balance + history |
| `profile.html` | Account + saved bike |

## Build notes

These screens are **brand-driven reconstructions**, not lifts from production code (no codebase or Figma was attached). The visual vocabulary is straight from the brand book: Purple Eclipse for surfaces, Electric Rose for action, pill buttons, Mundial type, the Bolt as the only decorative device.

Lucide is loaded from CDN as a placeholder icon set until GOGO produces an in-house filled-bold library.
