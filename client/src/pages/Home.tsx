import { useEffect, useMemo, useRef, useState } from "react";
import { LeafletMap } from "@/components/LeafletMap";
import { ASSETS } from "@/lib/assets";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car, ChevronRight, Crosshair, Footprints, MapPin, Maximize2, MessageCircle, Minimize2, Navigation, Phone, Route, Trash2, X } from "lucide-react";

type Language = "tr" | "en" | "de" | "fr";
type OfficeId = "t2" | "t1_domestic" | "parking" | "shuttle";
type RouteProfile = "foot" | "car";
type Coordinates = { lat: number; lng: number };
type ActiveRoute = { origin: Coordinates; destination: Coordinates; targetId: OfficeId; profile: RouteProfile };
type Prompt = "t2" | "t2Process" | "t2Wait" | "t3" | "transport" | null;

type Copy = {
  airportGuide: string; eyebrow: string; headline: string; headlineAccent: string; headlineEnd: string; body: string;
  location: string; locating: string; active: string; denied: string; mapPreview: string; target: string;
  getDirections: string; routeEstimate: string; routeLoading: string; routeUnavailable: string;
  followLocation: string; followingLocation: string; terminalQuestion: string; terminalDescription: string;
  t2Label: string; t3Label: string; t2PromptTitle: string; t2PromptBody: string; t3PromptTitle: string;
  t3PromptBody: string; t2ProcessTitle: string; t2ProcessBody: string; shuttleWaitTitle: string; shuttleWaitBody: string; yes: string; no: string;
  chooseTransport: string; walking: string; driving: string; continueText: string; clearRoute: string;
  terminal2Office: string; domesticTerminal: string; parking: string; shuttle: string; officeBeforeExit: string;
  contactPreference: string; normalCall: string; openPhone: string; whatsapp: string; openChat: string; close: string; fullScreen: string; terminalSelection: string; contact: string; quickHelp: string;
};

const TRANSLATIONS: Record<Language, Copy> = {
  tr: {
    airportGuide: "Antalya Airport Guide", eyebrow: "Terminalden doğru hedefe", headline: "Doğru hedefe", headlineAccent: "tek seçimle", headlineEnd: "ulaş.", body: "Terminalinizi seçin; gerekli uyarıyı okuyun ve rent a car otoparkına veya T2 shuttle bekleme alanına yönelin.", location: "Konumumu kullan", locating: "Konum aranıyor", active: "Konum aktif", denied: "Konum izni kullanılmadı. Rota için konum izni verin.", mapPreview: "Harita", target: "Seçili hedef", getDirections: "Yol Tarifi Al", routeEstimate: "Tahmini rota", routeLoading: "Rota hesaplanıyor", routeUnavailable: "Rota hesaplanamadı", followLocation: "Konumumu Takip Et", followingLocation: "Konum takipte", terminalQuestion: "Hangi terminalden çıktınız?", terminalDescription: "Sadece terminalinizi seçin; sonraki yönlendirmeyi uygulama hazırlayacak.", t2Label: "Dış Hatlar Terminal 2 (T2)", t3Label: "İç Hatlar Terminali (T3)", t2PromptTitle: "Terminal 2 ofisimiz çıkış kapısından önce", t2PromptBody: "Terminal 2 Ofisimize uğradıktan sonra shuttle bekleme alanına yönlendirmemi ister misiniz?", t2ProcessTitle: "İşlemleriniz tamamlandı mı?", t2ProcessBody: "Shuttle’a yönlendirmeden önce Europcar ofisindeki işlemlerinizin tamamlanıp tamamlanmadığını doğrulayalım. İşlemler tamamlanmadıysa Terminal 2 ofisine yönlendireceğiz.", t3PromptTitle: "İç Hatlar ofisimiz çıkış kapısından önce", t3PromptBody: "İç Hatlar ofisimiz yerine doğrudan Rent a Car Otoparkı’ndaki ofisimize gitmek ister misiniz?", shuttleWaitTitle: "Shuttle bekleme bilgisi", shuttleWaitBody: "Shuttle süreleri yoğunluğa göre 30–40 dakika bekleme süresi olabilir.", yes: "Evet", no: "Hayır", chooseTransport: "Otoparka nasıl gitmek istersiniz?", walking: "Yaya", driving: "Araçla", continueText: "Devam et", clearRoute: "Rotayı temizle", terminal2Office: "Terminal 2 Ofisi", domesticTerminal: "İç Hatlar Terminali", parking: "Rent a Car Otoparkı", shuttle: "T2 Shuttle Bekleme Alanı", officeBeforeExit: "Ofis terminal çıkış kapısından önce", contactPreference: "İletişim tercihi", normalCall: "Normal arama", openPhone: "Telefon uygulamasını aç", whatsapp: "WhatsApp", openChat: "Sohbeti aç", close: "Kapat", fullScreen: "Tam ekran", terminalSelection: "Terminal seçimi", contact: "İletişim", quickHelp: "Hızlı yardım",
  },
  en: {
    airportGuide: "Antalya Airport Guide", eyebrow: "From terminal to the right destination", headline: "Reach the right", headlineAccent: "destination", headlineEnd: "directly.", body: "Choose your terminal, read the relevant notice, then continue to the rent-a-car parking or T2 shuttle waiting area.", location: "Use my location", locating: "Finding location", active: "Location active", denied: "Location permission was not granted. Allow location for routing.", mapPreview: "Map", target: "Selected destination", getDirections: "Get directions", routeEstimate: "Estimated route", routeLoading: "Calculating route", routeUnavailable: "Route unavailable", followLocation: "Follow My Location", followingLocation: "Location tracking", terminalQuestion: "Which terminal did you exit?", terminalDescription: "Choose only your terminal; the app will prepare the next guidance.", t2Label: "International Terminal 2 (T2)", t3Label: "Domestic Terminal (T3)", t2PromptTitle: "Our Terminal 2 office is before the exit doors", t2PromptBody: "After visiting the Terminal 2 office, would you like directions to the shuttle waiting area?", t3PromptTitle: "Our domestic office is before the exit doors", t3PromptBody: "Would you like to go directly to our office in the Rent a Car Parking instead?", t2ProcessTitle: "Have your procedures been completed?", t2ProcessBody: "Before directing you to the shuttle, let’s confirm that your Europcar office procedures are complete. If not, we will direct you to the Terminal 2 office.", shuttleWaitTitle: "Shuttle waiting information", shuttleWaitBody: "Depending on crowd levels, shuttle waiting time may be 30–40 minutes.", yes: "Yes", no: "No", chooseTransport: "How would you like to reach the parking?", walking: "Walking", driving: "By car", continueText: "Continue", clearRoute: "Clear route", terminal2Office: "Terminal 2 Office", domesticTerminal: "Domestic Terminal", parking: "Rent a Car Parking", shuttle: "T2 Shuttle Waiting Area", officeBeforeExit: "Office is before the terminal exit doors", contactPreference: "Contact preference", normalCall: "Phone call", openPhone: "Open phone app", whatsapp: "WhatsApp", openChat: "Open chat", close: "Close", fullScreen: "Full screen", terminalSelection: "Terminal selection", contact: "Contact", quickHelp: "Quick help",
  },
  de: {
    airportGuide: "Antalya Flughafen Guide", eyebrow: "Vom Terminal zum richtigen Ziel", headline: "Direkt zum", headlineAccent: "richtigen Ziel", headlineEnd: "gehen.", body: "Wählen Sie Ihr Terminal, lesen Sie den Hinweis und gehen Sie zum Mietwagenparkhaus oder zum T2-Shuttlepunkt.", location: "Meinen Standort nutzen", locating: "Standort wird gesucht", active: "Standort aktiv", denied: "Standortfreigabe wurde nicht erteilt. Für die Route freigeben.", mapPreview: "Karte", target: "Ausgewähltes Ziel", getDirections: "Wegbeschreibung", routeEstimate: "Geschätzte Route", routeLoading: "Route wird berechnet", routeUnavailable: "Route nicht verfügbar", followLocation: "Meinen Standort verfolgen", followingLocation: "Standort wird verfolgt", terminalQuestion: "Aus welchem Terminal sind Sie gekommen?", terminalDescription: "Wählen Sie nur Ihr Terminal; die nächste Führung wird vorbereitet.", t2Label: "Internationales Terminal 2 (T2)", t3Label: "Inlandsterminal (T3)", t2PromptTitle: "Unser Büro in Terminal 2 liegt vor den Ausgangstüren", t2PromptBody: "Möchten Sie nach dem Terminal-2-Büro zum Shuttle-Wartebereich geführt werden?", t3PromptTitle: "Unser Inlandbüro liegt vor den Ausgangstüren", t3PromptBody: "Möchten Sie stattdessen direkt zu unserem Büro im Rent-a-Car-Parkhaus gehen?", t2ProcessTitle: "Sind Ihre Vorgänge abgeschlossen?", t2ProcessBody: "Bevor Sie zum Shuttle gehen, bestätigen Sie bitte, dass Ihre Vorgänge im Europcar-Büro abgeschlossen sind. Andernfalls führen wir Sie zum Büro in Terminal 2.", shuttleWaitTitle: "Information zum Shuttle", shuttleWaitBody: "Je nach Auslastung kann die Shuttle-Wartezeit 30–40 Minuten betragen.", yes: "Ja", no: "Nein", chooseTransport: "Wie möchten Sie zum Parkhaus gelangen?", walking: "Zu Fuß", driving: "Mit dem Auto", continueText: "Weiter", clearRoute: "Route löschen", terminal2Office: "Terminal-2-Büro", domesticTerminal: "Inlandsterminal", parking: "Rent-a-Car-Parkhaus", shuttle: "T2 Shuttle-Wartebereich", officeBeforeExit: "Das Büro liegt vor den Terminal-Ausgangstüren", contactPreference: "Kontaktoption", normalCall: "Normaler Anruf", openPhone: "Telefon-App öffnen", whatsapp: "WhatsApp", openChat: "Chat öffnen", close: "Schließen", fullScreen: "Vollbild", terminalSelection: "Terminalauswahl", contact: "Kontakt", quickHelp: "Schnelle Hilfe",
  },
  fr: {
    airportGuide: "Guide Aéroport d’Antalya", eyebrow: "Du terminal vers la bonne destination", headline: "Allez vers la", headlineAccent: "bonne destination", headlineEnd: "directement.", body: "Choisissez votre terminal, lisez l’avertissement puis rejoignez le parking Rent a Car ou le point shuttle T2.", location: "Utiliser ma position", locating: "Recherche de la position", active: "Position active", denied: "L’autorisation de position n’a pas été accordée. Autorisez-la pour l’itinéraire.", mapPreview: "Carte", target: "Destination sélectionnée", getDirections: "Obtenir l’itinéraire", routeEstimate: "Itinéraire estimé", routeLoading: "Calcul de l’itinéraire", routeUnavailable: "Itinéraire indisponible", followLocation: "Suivre ma position", followingLocation: "Position suivie", terminalQuestion: "De quel terminal êtes-vous sorti ?", terminalDescription: "Choisissez uniquement votre terminal; la prochaine indication sera préparée.", t2Label: "Terminal international 2 (T2)", t3Label: "Terminal domestique (T3)", t2PromptTitle: "Notre bureau du Terminal 2 est avant les portes de sortie", t2PromptBody: "Après le bureau du Terminal 2, souhaitez-vous être guidé vers le point d’attente shuttle ?", t3PromptTitle: "Notre bureau domestique est avant les portes de sortie", t3PromptBody: "Souhaitez-vous aller directement à notre bureau du parking Rent a Car ?", t2ProcessTitle: "Vos démarches sont-elles terminées ?", t2ProcessBody: "Avant de vous diriger vers le shuttle, confirmons que vos démarches au bureau Europcar sont terminées. Sinon, nous vous dirigerons vers le bureau du Terminal 2.", shuttleWaitTitle: "Information shuttle", shuttleWaitBody: "Selon l’affluence, l’attente du shuttle peut durer 30 à 40 minutes.", yes: "Oui", no: "Non", chooseTransport: "Comment souhaitez-vous rejoindre le parking ?", walking: "À pied", driving: "En voiture", continueText: "Continuer", clearRoute: "Effacer l’itinéraire", terminal2Office: "Bureau Terminal 2", domesticTerminal: "Terminal domestique", parking: "Parking Rent a Car", shuttle: "Point d’attente shuttle T2", officeBeforeExit: "Le bureau est avant les portes de sortie", contactPreference: "Option de contact", normalCall: "Appel normal", openPhone: "Ouvrir l’application téléphone", whatsapp: "WhatsApp", openChat: "Ouvrir la conversation", close: "Fermer", fullScreen: "Plein écran", terminalSelection: "Choix du terminal", contact: "Contact", quickHelp: "Aide rapide",
  },
};

const CONTACTS = [
  { label: "INFO / BİLGİ", number: "+90 533 282 44 69" },
  { label: "EMERGENCY / ACİL", number: "+90 533 681 41 11" },
  { label: "GOLDCAR ANTALYA", number: "+90 536 861 61 54" },
];
const LANGUAGE_OPTIONS = [{ id: "tr" as const, code: "TR", flag: "TR", label: "Türkçe" }, { id: "en" as const, code: "EN", flag: "EN", label: "English" }, { id: "de" as const, code: "DE", flag: "DE", label: "Deutsch" }, { id: "fr" as const, code: "FR", flag: "FR", label: "Français" }];
const TERMINAL_TARGETS = [
  { id: "t2" as const, short: "T2" },
  { id: "t1_domestic" as const, short: "T3" },
];
const OFFICES = [
  { id: "t2" as OfficeId, label: "Terminal 2 Ofisi", short: "T2", description: "Dış hatlar terminal çıkış kapısından önceki ofis.", distance: "36.899370, 30.799694", walk: "Terminal önü", color: "coral", position: { lat: 36.899370, lng: 30.799694 }, photo: ASSETS.terminal2, photoAlt: "Terminal 2 Europcar ofisi" },
  { id: "t1_domestic" as OfficeId, label: "İç Hatlar Terminali", short: "T3", description: "İç hatlar terminal çıkış kapısından önceki ofis.", distance: "36.910780, 30.802042", walk: "İç hatlar", color: "amber", position: { lat: 36.910780, lng: 30.802042 }, photo: ASSETS.terminal1, photoAlt: "İç hatlar Europcar ofisi" },
  { id: "parking" as OfficeId, label: "Rent a Car Otoparkı", short: "P", description: "Havalimanındaki ana Europcar teslim noktası.", distance: "36.914344, 30.804022", walk: "Otopark", color: "teal", position: { lat: 36.914344, lng: 30.804022 }, photo: ASSETS.parking, photoAlt: "Rent a Car otoparkı" },
  { id: "shuttle" as OfficeId, label: "T2 Shuttle Bekleme", short: "S", description: "Terminal 2 shuttle bekleme ve biniş alanı.", distance: "36.900453, 30.801735", walk: "Shuttle", color: "coral", position: { lat: 36.900453, lng: 30.801735 }, photo: null, photoAlt: "T2 shuttle bekleme alanı" },
];

async function fetchRoute(origin: Coordinates, destination: Coordinates, profile: RouteProfile) {
  const service = profile === "car" ? "routed-car" : "routed-foot";
  const url = `https://routing.openstreetmap.de/${service}/route/v1/driving/${origin.lng},${origin.lat};${destination.lng},${destination.lat}?overview=full&geometries=geojson`;
  const response = await fetch(url, { headers: { Accept: "application/json" } });
  if (!response.ok) throw new Error(`Route request failed: ${response.status}`);
  const data = await response.json() as { routes?: Array<{ distance?: number; duration?: number; geometry?: { coordinates?: Array<[number, number]> } }> };
  const route = data.routes?.[0];
  return { path: route?.geometry?.coordinates?.map(([lng, lat]) => ({ lat, lng })) ?? [], distance: route?.distance ?? 0, duration: route?.duration ?? 0 };
}
function formatSummary(distance: number, duration: number) { return { distance: distance >= 1000 ? `${(distance / 1000).toFixed(1)} km` : `${Math.round(distance)} m`, duration: `${Math.max(1, Math.ceil(duration / 60))} dk` }; }
function readLanguage(): Language { if (typeof window === "undefined") return "tr"; const value = window.localStorage.getItem("europcar-language"); return value === "en" || value === "de" || value === "fr" ? value : "tr"; }

type ContactAction = { label: string; number: string } | null;

export default function Home() {
  const [language, setLanguage] = useState<Language>(readLanguage);
  const copy = TRANSLATIONS[language];
  const [selectedId, setSelectedId] = useState<OfficeId>("t2");
  const [locationState, setLocationState] = useState<"idle" | "loading" | "ready" | "denied">("idle");
  const [userPosition, setUserPosition] = useState<Coordinates | null>(null);
  const [activeRoute, setActiveRoute] = useState<ActiveRoute | null>(null);
  const [pendingRoute, setPendingRoute] = useState<{ targetId: OfficeId; profile: RouteProfile } | null>(null);
  const [routeStatus, setRouteStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [routePath, setRoutePath] = useState<Coordinates[]>([]);
  const [routeSummary, setRouteSummary] = useState<{ distance: string; duration: string } | null>(null);
  const [followUser, setFollowUser] = useState(false);
  const [mapLoading, setMapLoading] = useState(true);
  const [mapMenuOpen, setMapMenuOpen] = useState(false);
  const [mapFullscreen, setMapFullscreen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [languageTransition, setLanguageTransition] = useState(false);
  const [prompt, setPrompt] = useState<Prompt>(null);
  const [contactAction, setContactAction] = useState<ContactAction>(null);
  const [imagePreview, setImagePreview] = useState<{ src: string; alt: string } | null>(null);
  const mapSectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!imagePreview) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setImagePreview(null); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [imagePreview]);
  const localizedOffices = useMemo(() => OFFICES.map((office) => ({ ...office, localizedLabel: office.id === "t2" ? copy.terminal2Office : office.id === "t1_domestic" ? copy.domesticTerminal : office.id === "parking" ? copy.parking : copy.shuttle })), [copy]);
  const selected = localizedOffices.find((office) => office.id === selectedId) ?? localizedOffices[0];
  const routeRequested = activeRoute !== null || pendingRoute !== null;
  const routeDisplay = routeSummary ? `${routeSummary.duration} · ${routeSummary.distance}` : null;

  const changeLanguage = (next: Language) => { setLanguage(next); window.localStorage.setItem("europcar-language", next); setLanguageMenuOpen(false); setLanguageTransition(true); window.setTimeout(() => setLanguageTransition(false), 360); };
  const requestLocation = () => {
    if (!navigator.geolocation) { setLocationState("denied"); return; }
    setLocationState("loading");
    navigator.geolocation.getCurrentPosition((position) => { setUserPosition({ lat: position.coords.latitude, lng: position.coords.longitude }); setLocationState("ready"); }, () => setLocationState("denied"), { enableHighAccuracy: true, timeout: 8000, maximumAge: 30000 });
  };
  useEffect(() => { requestLocation(); }, []);
  useEffect(() => {
    if (!userPosition || !pendingRoute) return;
    const destination = localizedOffices.find((office) => office.id === pendingRoute.targetId);
    if (!destination) return;
    setActiveRoute({ origin: userPosition, destination: destination.position, targetId: destination.id, profile: pendingRoute.profile });
    setPendingRoute(null);
  }, [userPosition, pendingRoute, localizedOffices]);
  useEffect(() => {
    if (!activeRoute) return;
    let cancelled = false;
    const destination = localizedOffices.find((office) => office.id === activeRoute.targetId);
    if (!destination) return;
    setRouteStatus("loading"); setRoutePath([]); setRouteSummary(null);
    fetchRoute(activeRoute.origin, destination.position, activeRoute.profile).then((route) => { if (cancelled) return; setRoutePath(route.path); setRouteSummary(route.path.length >= 2 ? formatSummary(route.distance, route.duration) : null); setRouteStatus(route.path.length >= 2 ? "ready" : "error"); }).catch(() => { if (!cancelled) { setRoutePath([]); setRouteSummary(null); setRouteStatus("error"); } });
    return () => { cancelled = true; };
  }, [activeRoute, localizedOffices]);

  const clearRoute = () => { setActiveRoute(null); setPendingRoute(null); setRoutePath([]); setRouteSummary(null); setRouteStatus("idle"); };
  const startRoute = (targetId: OfficeId, profile: RouteProfile) => {
    mapSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    const destination = localizedOffices.find((office) => office.id === targetId);
    if (!destination) return;
    clearRoute();
    setSelectedId(targetId);
    if (!navigator.geolocation) { setLocationState("denied"); setRouteStatus("error"); return; }
    setLocationState("loading");
    navigator.geolocation.getCurrentPosition((position) => {
      const origin = { lat: position.coords.latitude, lng: position.coords.longitude };
      setUserPosition(origin);
      setLocationState("ready");
      setActiveRoute({ origin, destination: destination.position, targetId, profile });
    }, () => { setLocationState("denied"); setRouteStatus("error"); }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 });
  };
  const selectTerminal = (id: OfficeId) => { clearRoute(); setSelectedId(id); setPrompt(id === "t2" ? "t2" : "t3"); };
  const handleGetDirections = () => { if (selectedId === "t2") setPrompt("t2"); else if (selectedId === "t1_domestic") setPrompt("t3"); else startRoute(selectedId, "foot"); };
  const handleFollow = () => { setFollowUser((value) => !value); if (!userPosition) requestLocation(); };
  const openContact = (contact: { label: string; number: string }, mode: "call" | "whatsapp") => { const digits = contact.number.replace(/\D/g, ""); window.location.href = mode === "whatsapp" ? `https://wa.me/${digits}` : `tel:+${digits}`; setContactAction(null); };

  return (
    <main className={`min-h-screen overflow-x-hidden bg-[#F4F0E8] text-[#009900] ${languageTransition ? "language-content-fade" : ""}`}>
      <section className="relative overflow-hidden bg-[#009900] px-5 pb-12 pt-5 text-[#FFFFFE] sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(#FFFFFE_0.8px,transparent_0.8px)] [background-size:20px_20px]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-[14px] bg-[#F8E300]"><img src={ASSETS.headerLogo} alt="Europcar Antalya" className="h-7 w-7 rounded-lg object-cover" /></div><div><p className="font-display text-sm font-bold">Europcar</p><p className="text-[10px] uppercase tracking-[0.2em] text-[#FFFFFE]/60">{copy.airportGuide}</p></div></div>
            <div className="relative"><button type="button" aria-label="Language" onClick={() => setLanguageMenuOpen((value) => !value)} className="flex h-9 items-center gap-2 rounded-full border border-[#FFFFFE]/20 bg-[#FFFFFE]/10 px-3 text-xs font-bold"><span>{LANGUAGE_OPTIONS.find((item) => item.id === language)?.code}</span></button>{languageMenuOpen && <div className="absolute right-0 top-11 z-50 min-w-[160px] rounded-2xl bg-[#FFFFFE] p-1.5 text-[#009900] shadow-2xl">{LANGUAGE_OPTIONS.map((item) => <button key={item.id} type="button" onClick={() => changeLanguage(item.id)} className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-xs font-bold hover:bg-[#009900]/10"><span>{item.flag}</span>{item.label}</button>)}</div>}</div>
          </header>
          <div className="max-w-2xl pb-7 pt-10"><p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#F8E300]">{copy.eyebrow}</p><h1 className="mt-3 font-display text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-6xl">{copy.headline} <span className="text-[#F8E300]">{copy.headlineAccent}</span> {copy.headlineEnd}</h1><p className="mt-5 max-w-xl text-sm leading-6 text-[#FFFFFE]/70 sm:text-base">{copy.body}</p><div className="mt-5 flex flex-wrap items-center gap-2"><Badge className="border-[#FFFFFE]/20 bg-[#FFFFFE]/10 text-[#FFFFFE]">{locationState === "loading" ? copy.locating : locationState === "ready" ? copy.active : "GPS"}</Badge>{locationState === "denied" && <span className="text-xs text-[#FFFFFE]/70">{copy.denied}</span>}</div></div>
        </div>
      </section>
      <section className="relative z-20 mx-auto -mt-6 max-w-7xl px-3 pb-10 sm:px-8 lg:px-12">
        <div ref={mapSectionRef} className={`overflow-hidden border border-[#FFFFFE]/60 bg-[#D9D2C5] shadow-2xl ${mapFullscreen ? "fixed inset-0 z-[100] rounded-none border-0" : "relative rounded-[28px]"}`}>
          <button type="button" onClick={handleGetDirections} disabled={routeStatus === "loading"} className="absolute left-4 top-4 z-30 flex h-11 items-center gap-2 rounded-full bg-[#009900] px-4 text-[11px] font-bold text-[#FFFFFE] shadow-lg disabled:opacity-70"><Navigation className="h-3.5 w-3.5 text-[#F8E300]" />{routeStatus === "loading" ? copy.routeLoading : copy.getDirections}</button>
          <div className="absolute right-4 top-4 z-40"><button type="button" onClick={() => setMapMenuOpen((value) => !value)} className="flex h-11 items-center gap-2 rounded-full border border-[#FFFFFE]/60 bg-[#FFFFFE]/95 px-3.5 text-[11px] font-bold text-[#009900] shadow-xl"><MapPin className="h-3.5 w-3.5" />{copy.mapPreview}</button>{mapMenuOpen && <div className="absolute right-0 top-12 w-[244px] rounded-[22px] border border-[#009900]/10 bg-[#FFFFFE]/95 p-2 text-[#009900] shadow-2xl backdrop-blur-xl"><p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#009900]/50">{copy.mapPreview}</p><button type="button" onClick={() => { handleFollow(); setMapMenuOpen(false); }} className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[11px] font-bold ${followUser ? "bg-[#009900] text-white" : "bg-[#009900]/[0.06]"}`}><Crosshair className="h-4 w-4 text-[#F8E300]" />{followUser ? copy.followingLocation : copy.followLocation}</button><button type="button" onClick={() => { setMapFullscreen((value) => !value); setMapMenuOpen(false); }} className="mt-1 flex w-full items-center gap-3 rounded-xl bg-[#009900]/[0.06] px-3 py-3 text-left text-[11px] font-bold"><Maximize2 className="h-4 w-4" />{mapFullscreen ? copy.close : copy.fullScreen}</button>{routeRequested && <button type="button" onClick={() => { clearRoute(); setMapMenuOpen(false); }} className="mt-1 flex w-full items-center gap-3 rounded-xl bg-[#F8E300]/20 px-3 py-3 text-left text-[11px] font-bold"><Trash2 className="h-4 w-4" />{copy.clearRoute}</button>}<p className="mt-2 rounded-xl bg-[#009900]/[0.05] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.1em] text-[#009900]/50">OpenStreetMap · Europcar</p></div>}</div>
          {mapFullscreen && <button type="button" onClick={() => setMapFullscreen(false)} aria-label={copy.close} className="absolute bottom-5 right-5 z-40 grid h-11 w-11 place-items-center rounded-full bg-[#009900] text-[#FFFFFE] shadow-xl"><Minimize2 className="h-4 w-4" /></button>}
          <div className={`relative h-[100svh] w-full overflow-hidden bg-[#D8D1C5] sm:h-[620px] ${mapFullscreen ? "h-[100dvh]" : ""}`}><LeafletMap offices={localizedOffices} selectedId={selectedId} userPosition={userPosition} routePath={routePath} followUser={followUser} onMapReady={() => setMapLoading(false)} onUserInteract={() => setFollowUser(false)} onSelect={(id) => setSelectedId(id as OfficeId)} />{mapLoading && <div className="map-skeleton" role="status"><span className="map-skeleton__road map-skeleton__road--one" /><span className="map-skeleton__road map-skeleton__road--two" /><span className="map-skeleton__pin" /></div>}{routeRequested && routeStatus === "loading" && <div className="route-loading-overlay" role="status"><div className="route-loading-card"><span className="route-loading-spinner" /><div><p className="text-sm font-bold">{copy.routeLoading}</p><p className="mt-1 text-[11px] opacity-60">{selected.localizedLabel}</p></div></div></div>}{routeRequested && routeStatus === "ready" && <div className="route-ready-badge"><span className="route-ready-pulse" />{copy.routeEstimate}</div>}{routeRequested && <div className="map-route-summary" role="status"><Route className="h-4 w-4 text-[#F8E300]" /><div><p>{routeStatus === "loading" ? copy.routeLoading : copy.routeEstimate}</p><strong>{routeDisplay ?? selected.localizedLabel}</strong></div></div>}</div>
        </div>

        {!mapFullscreen && <div className="mt-6 overflow-hidden rounded-[28px] bg-[#FFFFFE] shadow-[0_24px_80px_rgba(22,58,61,0.12)]"><div className="relative">{selected.photo ? <button type="button" onClick={() => setImagePreview({ src: selected.photo!, alt: selected.photoAlt })} className="block w-full cursor-zoom-in text-left" aria-label={`${selected.localizedLabel} fotoğrafını büyüt`}><img src={selected.photo} alt={selected.photoAlt} className="office-photo" /></button> : <div className="flex h-[190px] items-center justify-center bg-[#009900]/[0.06] px-6 text-center text-sm font-bold text-[#009900]/60">{selected.localizedLabel}</div>}<div className="absolute bottom-3 left-3 rounded-full bg-[#009900]/95 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#FFFFFE]">{selected.short} · {selected.localizedLabel}</div></div><div className="p-5 sm:p-7"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#009900]/45">{copy.target}</p><h2 className="mt-2 font-display text-2xl font-bold">{selected.localizedLabel}</h2><p className="mt-2 text-sm leading-6 text-[#009900]/60">{selected.description}</p><p className="mt-3 text-xs font-bold text-[#009900]/50">{selected.distance}</p></div></div>}

        <div className="mt-6 rounded-[28px] bg-[#FFFFFE] p-5 shadow-[0_24px_80px_rgba(22,58,61,0.12)] sm:p-7"><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F8E300]">{copy.terminalSelection}</p><h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.04em]">{copy.terminalQuestion}</h2></div><p className="max-w-sm text-sm leading-6 text-[#009900]/55">{copy.terminalDescription}</p></div><div className="mt-6 grid gap-3 sm:grid-cols-2">{TERMINAL_TARGETS.map((terminal) => { const label = terminal.id === "t2" ? copy.t2Label : copy.t3Label; const office = localizedOffices.find((item) => item.id === terminal.id)!; return <button key={terminal.id} type="button" onClick={() => selectTerminal(terminal.id)} className={`flex items-center justify-between rounded-2xl border p-4 text-left transition active:scale-[0.98] ${selectedId === terminal.id ? "border-[#F8E300] bg-[#F8E300]/10" : "border-[#009900]/10 hover:border-[#009900]/30"}`}><span><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#F8E300] font-display text-sm font-bold text-[#009900]">{terminal.short}</span><strong className="mt-4 block font-display text-lg">{label}</strong><small className="mt-1 block text-xs text-[#009900]/55">{office.description}</small></span><ChevronRight className="h-5 w-5 text-[#009900]/35" /></button>; })}</div></div>

        <div className="mt-6 rounded-[28px] bg-[#FFFFFE] p-5 shadow-[0_24px_80px_rgba(22,58,61,0.10)] sm:p-7"><div className="flex items-end justify-between gap-4"><div><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F8E300]">{copy.contact}</p><h2 className="mt-2 font-display text-3xl font-bold">{copy.quickHelp}</h2></div><Phone className="h-5 w-5 text-[#F8E300]" /></div><div className="mt-5 grid gap-3 sm:grid-cols-3">{CONTACTS.map((contact) => <button type="button" key={contact.number} onClick={() => setContactAction(contact)} className="rounded-2xl border border-[#009900]/15 bg-[#009900]/[0.04] p-4 text-left"><div className="flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#009900]/55">{contact.label}</span><span className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#F8E300]" /><MessageCircle className="h-4 w-4 text-[#25D366]" /></span></div><p className="mt-3 font-display text-lg font-bold">{contact.number}</p></button>)}</div></div>
      </section>

      {imagePreview && <div className="fixed inset-0 z-[150] grid place-items-center bg-[#003d00]/85 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-label="Büyütülmüş fotoğraf" onClick={() => setImagePreview(null)}><div className="relative flex max-h-[92svh] w-full max-w-3xl items-center justify-center" onClick={(event) => event.stopPropagation()}><img src={imagePreview.src} alt={imagePreview.alt} className="max-h-[88svh] w-auto max-w-full rounded-2xl object-contain shadow-2xl" /><button type="button" onClick={() => setImagePreview(null)} aria-label={copy.close} className="fixed right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-[#FFFFFE] text-[#009900] shadow-xl"><X className="h-5 w-5" /></button></div></div>}

      {prompt && <div className="fixed inset-0 z-[120] grid place-items-center bg-[#003d00]/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true"><div className="w-full max-w-md rounded-[28px] bg-[#FFFFFE] p-6 text-[#009900] shadow-2xl"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#F8E300]">{prompt === "transport" ? <Car className="h-6 w-6" /> : <Navigation className="h-6 w-6" />}</div><h2 className="mt-5 font-display text-2xl font-bold">{prompt === "t2" ? copy.t2PromptTitle : prompt === "t2Process" ? copy.t2ProcessTitle : prompt === "t3" ? copy.t3PromptTitle : prompt === "t2Wait" ? copy.shuttleWaitTitle : copy.chooseTransport}</h2><p className="mt-3 text-sm leading-6 text-[#009900]/65">{prompt === "t2" ? copy.t2PromptBody : prompt === "t2Process" ? copy.t2ProcessBody : prompt === "t3" ? copy.t3PromptBody : prompt === "t2Wait" ? copy.shuttleWaitBody : ""}</p>{prompt === "transport" ? <div className="mt-6 grid grid-cols-2 gap-3"><button type="button" onClick={() => { setPrompt(null); startRoute("parking", "foot"); }} className="flex flex-col items-center gap-2 rounded-2xl border border-[#009900]/15 bg-[#009900]/[0.05] p-4 font-bold"><Footprints className="h-6 w-6 text-[#009900]" />{copy.walking}</button><button type="button" onClick={() => { setPrompt(null); startRoute("parking", "car"); }} className="flex flex-col items-center gap-2 rounded-2xl border border-[#F8E300]/50 bg-[#F8E300]/15 p-4 font-bold"><Car className="h-6 w-6 text-[#009900]" />{copy.driving}</button></div> : <div className="mt-6 flex gap-3">{prompt === "t2Wait" ? <Button type="button" onClick={() => { setPrompt(null); startRoute("shuttle", "foot"); }} className="flex-1 bg-[#009900] text-[#FFFFFE]">{copy.continueText}</Button> : <><Button type="button" onClick={() => setPrompt(prompt === "t2" ? "t2Process" : prompt === "t2Process" ? "t2Wait" : "transport")} className="flex-1 bg-[#009900] text-[#FFFFFE]">{copy.yes}</Button><Button type="button" onClick={() => { if (prompt === "t2Process") { setPrompt(null); startRoute("t2", "foot"); } else setPrompt(null); }} variant="outline" className="flex-1 border-[#009900]/20 text-[#009900]">{copy.no}</Button></>}</div>}<button type="button" onClick={() => setPrompt(null)} className="mt-4 w-full text-center text-xs font-bold text-[#009900]/50">{copy.close}</button></div></div>}

      {contactAction && <div className="fixed inset-0 z-[110] grid place-items-center bg-[#003d00]/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true"><div className="w-full max-w-sm rounded-[26px] bg-[#FFFFFE] p-5 text-[#009900] shadow-2xl"><div className="flex items-center justify-between"><h2 className="font-display text-xl font-bold">{copy.contactPreference}</h2><button type="button" onClick={() => setContactAction(null)} aria-label={copy.close}><X className="h-5 w-5" /></button></div><p className="mt-2 text-sm text-[#009900]/60">{contactAction.label}<br /><strong>{contactAction.number}</strong></p><div className="mt-5 grid grid-cols-2 gap-3"><button type="button" onClick={() => openContact(contactAction, "call")} className="rounded-2xl bg-[#009900] p-4 text-sm font-bold text-[#FFFFFE]"><Phone className="mx-auto mb-2 h-5 w-5" />{copy.normalCall}</button><button type="button" onClick={() => openContact(contactAction, "whatsapp")} className="rounded-2xl bg-[#25D366] p-4 text-sm font-bold text-white"><MessageCircle className="mx-auto mb-2 h-5 w-5" />{copy.whatsapp}</button></div></div></div>}
    </main>
  );
}
