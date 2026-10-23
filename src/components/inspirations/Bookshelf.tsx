import { useId, useState } from "react";
import { inspirationBooks, inspirations } from "@/data/inspirations";
import { useLanguage } from "@/i18n/LanguageContext";
export default function Bookshelf() {
  const { tl, language } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);
  const panelId = useId();
  const book = inspirationBooks.find(item => item.id === openId);
  return <div>
    <div className="inspiration-bookshelf" role="group" aria-label={tl(inspirations.books.title)}>{inspirationBooks.map((item, i) => <button key={item.id} type="button" aria-expanded={openId === item.id} aria-controls={panelId} onClick={() => setOpenId(openId === item.id ? null : item.id)} className="inspiration-book">{item.cover ? <img src={item.cover} alt={tl(item.coverAlt)} className="w-full h-full object-contain" /> : <span className="inspiration-book-cover"><span className="label-uppercase">0{i + 1}</span><span className="text-base md:text-xl font-medium">{tl(item.title)}</span><span className="text-sm">{tl(item.author)}</span><span className="text-xs mt-auto">[COVER: {item.id}]</span></span>}<span className="sr-only">{language === "pl" ? " — otwórz notatki" : " — open notes"}</span></button>)}</div>
    <div id={panelId} className="inspiration-book-notes" role="region" aria-label={language === "pl" ? "Notatki z lektury" : "Reading notes"}>{book ? <><h3 className="heading-small">{tl(book.title)}</h3><p className="mt-2 text-muted-foreground">{tl(book.author)}</p><dl className="grid md:grid-cols-3 gap-6 mt-8">{(["thought", "learned", "why"] as const).map(key => <div key={key}><dt className="label-uppercase">{tl(inspirations.books.labels[key])}</dt><dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{tl(book[key])}</dd></div>)}</dl></> : <p className="text-sm text-muted-foreground">{tl(inspirations.books.empty)}</p>}</div>
  </div>;
}
