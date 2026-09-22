/**
 * Terminal Signal / Leaflet map
 * OpenStreetMap surface with brand-led Europcar markers and a live location dot.
 */
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ASSETS } from "@/lib/assets";

type OfficeMarker = {
  id: string;
  label: string;
  short: string;
  position: { lat: number; lng: number };
};

type LeafletMapProps = {
  offices: OfficeMarker[];
  selectedId: string;
  userPosition: { lat: number; lng: number } | null;
  routePath: { lat: number; lng: number }[];
  followUser: boolean;
  onMapReady?: () => void;
  onUserInteract?: () => void;
  onSelect: (id: string) => void;
};

const BRAND_ICON = ASSETS.logo;
const BRAND_ICON_FALLBACK = "/offline-assets/europcar-logo.png";

function makeOfficeIcon(short: string) {
  return L.divIcon({
    className: "europcar-leaflet-marker",
    html: `<span class="europcar-marker-shell"><img src="${BRAND_ICON}" onerror="this.onerror=null;this.src='${BRAND_ICON_FALLBACK}'" alt="" /><b>${short}</b></span>`,
    iconSize: [56, 64],
    iconAnchor: [28, 64],
    popupAnchor: [0, -62],
  });
}

const userIcon = L.divIcon({
  className: "europcar-user-marker",
  html: '<span class="europcar-user-dot"><i></i></span>',
  iconSize: [28, 28],
  iconAnchor: [14, 14],
});

export function LeafletMap({ offices, selectedId, userPosition, routePath, followUser, onMapReady, onUserInteract, onSelect }: LeafletMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});
  const userMarkerRef = useRef<L.Marker | null>(null);
  const routeLayerRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const map = L.map(containerRef.current, { zoomControl: true, attributionControl: true }).setView([36.905, 30.802], 14);
    const tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: '&copy; OpenStreetMap contributors' }).addTo(map);
    mapRef.current = map;
    map.on("dragstart", () => onUserInteract?.());
    let reportedReady = false;
    const reportReady = () => {
      if (reportedReady) return;
      reportedReady = true;
      onMapReady?.();
    };
    tiles.once("load", reportReady);
    const readyTimeout = window.setTimeout(reportReady, 900);
    window.setTimeout(() => map.invalidateSize(), 80);
    return () => { window.clearTimeout(readyTimeout); map.remove(); mapRef.current = null; };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    offices.forEach((office) => {
      const existing = markersRef.current[office.id];
      if (existing) {
        existing.setLatLng([office.position.lat, office.position.lng]);
        existing.setIcon(makeOfficeIcon(office.short));
        return;
      }
      const marker = L.marker([office.position.lat, office.position.lng], { icon: makeOfficeIcon(office.short), title: office.label }).addTo(map);
      marker.bindTooltip(office.label, { direction: "top", offset: [0, -48], opacity: 0.96 });
      let longPressTimer: number | null = null;
      let longPressTriggered = false;
      const selectOffice = () => { onSelect(office.id); map.panTo([office.position.lat, office.position.lng]); };
      marker.on("mouseover", () => marker.openTooltip());
      marker.on("mouseout", () => marker.closeTooltip());
      marker.on("touchstart", () => {
        longPressTriggered = false;
        longPressTimer = window.setTimeout(() => { longPressTriggered = true; selectOffice(); marker.openTooltip(); }, 520);
      });
      marker.on("touchmove", () => { if (longPressTimer) window.clearTimeout(longPressTimer); longPressTimer = null; });
      marker.on("touchend", () => { if (longPressTimer) window.clearTimeout(longPressTimer); longPressTimer = null; });
      marker.on("click", () => { if (longPressTriggered) { longPressTriggered = false; return; } selectOffice(); });
      markersRef.current[office.id] = marker;
    });
  }, [offices, onSelect]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const office = offices.find((item) => item.id === selectedId);
    if (office) map.panTo([office.position.lat, office.position.lng]);
    Object.entries(markersRef.current).forEach(([id, marker]) => marker.setZIndexOffset(id === selectedId ? 1000 : 0));
  }, [offices, selectedId]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (routeLayerRef.current) routeLayerRef.current.remove();
    routeLayerRef.current = null;
    if (routePath.length >= 2) {
      const points = routePath.map((point) => [point.lat, point.lng] as L.LatLngExpression);
      const layer = L.layerGroup([
        L.polyline(points, { color: "#009900", opacity: 0.34, weight: 13, lineCap: "round", lineJoin: "round" }),
        L.polyline(points, { color: "#F8E300", opacity: 0.98, weight: 6, lineCap: "round", lineJoin: "round" }),
      ]).addTo(map);
      routeLayerRef.current = layer;
      map.fitBounds(L.latLngBounds(points), { padding: [36, 36], maxZoom: 17, animate: true });
    }
  }, [routePath]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !userPosition) return;
    const latLng: L.LatLngExpression = [userPosition.lat, userPosition.lng];
    if (!userMarkerRef.current) userMarkerRef.current = L.marker(latLng, { icon: userIcon, zIndexOffset: 2000, title: "Canlı konum" }).addTo(map);
    else userMarkerRef.current.setLatLng(latLng);
    if (followUser) map.panTo(latLng, { animate: true, duration: 0.45 });
  }, [userPosition, followUser]);

  return <div ref={containerRef} className="h-full w-full" aria-label="Antalya Havalimanı OpenStreetMap" />;
}
