/**
 * Terminal Signal / App shell
 * Light, warm navigation shell with a single focused wayfinding route.
 */
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { ASSETS } from "./lib/assets";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

type AppLanguage = "tr" | "en" | "de" | "fr";

const welcomeCopy: Record<AppLanguage, { native: string; title: string; subtitle: string; continue: string; slogan: string }> = {
  tr: { native: "Türkçe", title: "Dilini seç", subtitle: "Europcar Antalya Havalimanı rehberini nasıl kullanmak istersin?", continue: "Devam et", slogan: "Kendi yolunu keşfet" },
  en: { native: "English", title: "Choose your language", subtitle: "How would you like to use the Europcar Antalya Airport guide?", continue: "Continue", slogan: "Moving your way" },
  de: { native: "Deutsch", title: "Sprache auswählen", subtitle: "Wie möchtest du den Europcar Antalya Flughafenführer nutzen?", continue: "Weiter", slogan: "Unterwegs auf Ihre Weise" },
  fr: { native: "Français", title: "Choisissez votre langue", subtitle: "Comment souhaitez-vous utiliser le guide Europcar de l’aéroport d’Antalya ?", continue: "Continuer", slogan: "En route, à votre façon" },
};

function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const duration = media.matches ? 650 : 1850;
    const startedAt = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const next = Math.min(100, ((now - startedAt) / duration) * 100);
      setProgress(next);
      if (next < 100) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    const timer = window.setTimeout(onComplete, duration + 90);
    return () => { window.cancelAnimationFrame(frame); window.clearTimeout(timer); };
  }, [onComplete]);

  return (
    <div className={`splash-screen ${reducedMotion ? "splash-screen--reduced" : ""}`} role="status" aria-label="Europcar Antalya Airport Guide yükleniyor">
      <div className="splash-orbit splash-orbit--one" />
      <div className="splash-orbit splash-orbit--two" />
      <div className="splash-brand-lockup">
        <div className="splash-logo-frame"><img src={ASSETS.logo} alt="Europcar" /></div>
        <div className="splash-rule" />
        <p>Moving your way</p>
      </div>
      <div className="splash-loading" aria-label={`Loading ${Math.round(progress)} percent`}><div className="splash-loading__meta"><span>ANTALYA AIRPORT GUIDE</span><span>{Math.round(progress)}%</span></div><div className="splash-loading__track"><span style={{ width: `${progress}%` }} /></div></div>
    </div>
  );
}

function LanguageWelcome({ onSelect }: { onSelect: (language: AppLanguage) => void }) {
  const [selected, setSelected] = useState<AppLanguage>("tr");
  const copy = welcomeCopy[selected];
  const languages: AppLanguage[] = ["tr", "en", "de", "fr"];
  return <div className="language-welcome" role="dialog" aria-modal="true" aria-labelledby="language-welcome-title"><div className="language-welcome__card"><div className="language-welcome__mark"><img src={ASSETS.logo} alt="Europcar" /></div><p className="language-welcome__eyebrow">EUROPCAR · ANTALYA AIRPORT</p><h1 id="language-welcome-title">{copy.title}</h1><p className="language-welcome__subtitle">{copy.subtitle}</p><div className="language-welcome__options">{languages.map((language) => <button key={language} type="button" onClick={() => setSelected(language)} className={`language-welcome__option ${selected === language ? "is-selected" : ""}`}><span className="language-welcome__flag">{language === "tr" ? "TR" : language === "en" ? "EN" : language.toUpperCase()}</span><span>{welcomeCopy[language].native}</span><span className="language-welcome__check">{selected === language ? "✓" : ""}</span></button>)}</div><button type="button" className="language-welcome__continue" onClick={() => onSelect(selected)}>{copy.continue}<span>↗</span></button></div></div>;
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showLanguageWelcome, setShowLanguageWelcome] = useState(false);
  const completeSplash = () => { setShowSplash(false); setShowLanguageWelcome(!window.localStorage.getItem("europcar-language")); };
  const chooseLanguage = (language: AppLanguage) => { window.localStorage.setItem("europcar-language", language); window.dispatchEvent(new CustomEvent("app-language-change", { detail: language })); setShowLanguageWelcome(false); };

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          {showSplash && <SplashScreen onComplete={completeSplash} />}
          {!showSplash && showLanguageWelcome && <LanguageWelcome onSelect={chooseLanguage} />}
          <div className={showSplash || showLanguageWelcome ? "app-shell app-shell--hidden" : "app-shell"}><Router /></div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
