import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const defaults = { scale: 100, motion: false, contrast: false };
export default function AccessibilityTools() {
  const { language } = useLanguage();
  const pl = language === "pl";
  const location = useLocation();
  const [settings, setSettings] = useState(() => {
    try {
      const s = JSON.parse(localStorage.getItem("accessibility-settings") || "{}");
      return { scale: [100,125,150,175,200].includes(s.scale) ? s.scale : 100, motion: s.motion === true, contrast: s.contrast === true };
    } catch { return defaults; }
  });
  const [reading, setReading] = useState(false);
  const [message, setMessage] = useState("");
  const details = useRef<HTMLDetailsElement>(null);
  const summary = useRef<HTMLElement>(null);
  const generation = useRef(0);
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;
  const stop = () => { generation.current++; if (supported) speechSynthesis.cancel(); setReading(false); };
  useEffect(() => {
    document.documentElement.style.fontSize = `${settings.scale}%`;
    document.documentElement.dataset.reduceMotion = String(settings.motion);
    document.documentElement.dataset.highContrast = String(settings.contrast);
    try { localStorage.setItem("accessibility-settings", JSON.stringify(settings)); } catch { /* Storage may be unavailable. */ }
    window.dispatchEvent(new Event("accessibility-change"));
  }, [settings]);
  useEffect(() => {
    generation.current++;
    if (supported) speechSynthesis.cancel();
    setReading(false);
    return () => { generation.current++; if (supported) speechSynthesis.cancel(); };
  }, [location.pathname, language, supported]);
  const read = () => {
    stop();
    setMessage("");
    const root = document.getElementById("main-content");
    if (!root || !supported) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    const parts: string[] = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const el = node instanceof Element ? node : node.parentElement;
      if (!el || el.closest('[aria-hidden="true"], [hidden], script, style, button, svg')) continue;
      const style = getComputedStyle(el);
      if (style.display === "none" || style.visibility === "hidden" || !el.getClientRects().length) continue;
      if (node instanceof HTMLImageElement && node.alt) parts.push(node.alt);
      else if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) parts.push(node.textContent.trim());
    }
    const chunks = parts.join(" ").match(/[^.!?]+[.!?]*/g)?.flatMap(s => s.match(/.{1,180}(?:\s|$)|.{1,180}/g) || []) || [];
    if (!chunks.length) { setMessage(pl ? "Brak tekstu do odczytania." : "No text to read."); return; }
    const id = generation.current;
    const speak = (index: number) => {
      if (id !== generation.current) return;
      if (index >= chunks.length) { setReading(false); return; }
      const utterance = new SpeechSynthesisUtterance(chunks[index]);
      utterance.lang = pl ? "pl-PL" : "en-GB";
      utterance.onend = () => speak(index + 1);
      utterance.onerror = () => { if (id === generation.current) { setReading(false); setMessage(pl ? "Odczyt niedostępny. Spróbuj ponownie lub użyj czytnika ekranu." : "Reading unavailable. Try again or use a screen reader."); } };
      speechSynthesis.speak(utterance);
    };
    setReading(true); speak(0);
  };
  return <details ref={details} className="accessibility-tools" onKeyDown={e => { if (e.key === "Escape") { details.current?.removeAttribute("open"); summary.current?.focus(); } }}>
    <summary ref={summary}>{pl ? "Dostępność" : "Accessibility"}</summary>
    <div className="accessibility-panel">
      <h2 className="text-lg font-medium">{pl ? "Ustawienia dostępności" : "Accessibility settings"}</h2>
      <label className="block mt-4">{pl ? "Wielkość tekstu" : "Text size"}
        <select className="block w-full border border-border p-2 mt-2 bg-background" value={settings.scale} onChange={e => setSettings({ ...settings, scale: Number(e.target.value) })}>
          {[100,125,150,175,200].map(n => <option key={n} value={n}>{n}%</option>)}
        </select>
      </label>
      <label className="flex items-center gap-3 py-3"><input type="checkbox" checked={settings.motion} onChange={e => setSettings({...settings, motion:e.target.checked})} />{pl ? "Zatrzymaj animacje i karuzele" : "Stop animations and carousels"}</label>
      <label className="flex items-center gap-3 py-3"><input type="checkbox" checked={settings.contrast} onChange={e => setSettings({...settings, contrast:e.target.checked})} />{pl ? "Zwiększony kontrast" : "Higher contrast"}</label>
      {supported ? <button type="button" className="border border-border w-full p-3 mt-2" onClick={reading ? stop : read}>{reading ? (pl ? "Zatrzymaj czytanie" : "Stop reading") : (pl ? "Czytaj treść strony" : "Read page aloud")}</button> : <p>{pl ? "Ta przeglądarka nie obsługuje odczytu głosowego." : "This browser does not support speech synthesis."}</p>}
      <p className="text-sm mt-3">{pl ? "Odczyt obejmuje tekst i opisy zdjęć. Głosy zależą od przeglądarki i systemu." : "Reads text and image descriptions. Voices depend on your browser and system."}</p>
      <button type="button" className="underline py-3" onClick={() => { stop(); setSettings(defaults); }}>{pl ? "Przywróć ustawienia" : "Reset settings"}</button>
      <p role="status" className="text-sm">{message}</p>
    </div>
  </details>;
}
