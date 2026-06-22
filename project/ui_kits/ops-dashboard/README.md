# GOGO Ops Dashboard — UI kit

Internal tool for station ops, fleet ops, and finance. Lets staff:

1. **Monitor stations** at a glance — battery stock, swaps/hr, offline status.
2. **Track the fleet** — bikes deployed, riders active, swaps logged.
3. **Drill into a station** — battery slot grid, swap log, technician notes.
4. **Manage riders** — KYC status, balance, account flags.

## Files

| File | What |
|---|---|
| `index.html` | Live prototype: Operations Overview (Stations dashboard) at 1440 px. Sidebar links cycle between Overview, Stations, Riders, Billing. |
| `stations.html` | Station list + filters |
| `station-detail.html` | Drill-down: slot grid, recent swaps |
| `riders.html` | Rider directory + KYC |

## Build notes

Brand-driven reconstruction. Sidebar is Purple Eclipse, content surfaces are warm-white. Electric Rose reserved for primary action and the "live" / selected state. No coloured shadows, no gradients.
