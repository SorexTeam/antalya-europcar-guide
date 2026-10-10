import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const homeSource = readFileSync(fileURLToPath(new URL("./Home.tsx", import.meta.url)), "utf8");
const appSource = readFileSync(path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../App.tsx"), "utf8");

describe("multilingual route guidance", () => {
  it("includes Chinese and Russian in the persisted language model and menus", () => {
    expect(homeSource).toContain('type Language = "tr" | "en" | "de" | "fr" | "zh" | "ru";');
    expect(homeSource).toContain('id: "zh"');
    expect(homeSource).toContain('id: "ru"');
    expect(homeSource).toContain('value === "zh" || value === "ru"');
    expect(appSource).toContain('type AppLanguage = "tr" | "en" | "de" | "fr" | "zh" | "ru";');
    expect(appSource).toContain('["tr", "en", "de", "fr", "zh", "ru"]');
  });

  it("keeps the map width full while setting the non-fullscreen height to 75svh", () => {
    expect(homeSource).toContain('h-[75svh] w-full');
    expect(homeSource).toContain('sm:h-[465px]');
  });

  it("offers walking and driving controls on the map and uses the selected profile", () => {
    expect(homeSource).toContain('setRouteProfile("foot")');
    expect(homeSource).toContain('setRouteProfile("car")');
    expect(homeSource).toContain('startRoute(selectedId, routeProfile)');
    expect(homeSource).toContain('Never draw a straight line between two walking points');
    expect(homeSource).toContain('return { path: routedPath');
    expect(homeSource).toContain('prompt === "t3"');
    expect(homeSource).toContain('startRoute("t1_domestic", routeProfile)');
    expect(homeSource).toContain('photo: ASSETS.europcarShuttleT2');
    expect(homeSource).toContain('photo: ASSETS.rentACarOffice');
    expect(homeSource).toContain('parkingDescription');
    expect(homeSource).toContain('Araçların ana teslim noktasıdır.');
    expect(homeSource).toContain('alternatives=true');
  });

  it("includes the airport shuttle and five fuel station coordinates", () => {
    expect(homeSource).toContain('36.899912141304696');
    expect(homeSource).toContain('36.93486284766029');
    expect(homeSource).toContain('36.93694191165896');
    expect(homeSource).toContain('36.93719643895428');
    expect(homeSource).toContain('36.90817107965459');
    expect(homeSource).toContain('36.911084227377785');
    expect(homeSource).toContain('quickHelp: "Bize ulaşın"');
    expect(homeSource).toContain('airportShuttle');
    expect(homeSource).toContain('fuelStation');
  });

  it("keeps Europcar and airport shuttle pins distinct", () => {
    expect(homeSource).toContain('kind: "europcar-shuttle"');
    expect(homeSource).toContain('kind: "airport-shuttle"');
    expect(homeSource).toContain('ASSETS.fuelStation');
  });
});
