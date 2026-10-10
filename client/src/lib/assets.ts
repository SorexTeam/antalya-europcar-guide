const OFFLINE_ASSET_BASE = "/offline-assets";

function assetPath(offlineName: string) {
  return `${OFFLINE_ASSET_BASE}/${offlineName}`;
}

export const ASSETS = {
  logo: assetPath("europcar-logo.png"),
  headerLogo: assetPath("europcar-e-logo.webp"),
  hero: assetPath("terminal-hero.webp"),
  terminal2: assetPath("terminal-2-office.webp"),
  terminal1: assetPath("terminal-1-office.webp"),
  parking: assetPath("parking-transfer.webp"),
  rentACarOffice: assetPath("rent-a-car-office.webp"),
  airportShuttle: assetPath("airport-shuttle.webp"),
  europcarShuttleT2: assetPath("europcar-shuttle-t2.webp"),
  fuelStation: assetPath("fuel-station.webp"),
};
