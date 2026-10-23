import type { InspirationMedia as Media } from "@/data/inspirations";
import { useLanguage } from "@/i18n/LanguageContext";
export default function InspirationMedia({ media, aspect = "aspect-[4/3]" }: { media: Media; aspect?: string }) {
  const { tl } = useLanguage();
  return <figure>{media.src ? <img src={media.src} alt={tl(media.alt)} loading="lazy" className={`${aspect} w-full object-cover`} /> : <div className={`${aspect} flex min-w-0 items-center justify-center border border-dashed border-border bg-secondary p-6 text-center`}><span className="max-w-sm text-sm text-foreground/70 break-words">{media.placeholder}</span></div>}{media.caption && <figcaption className="mt-4 text-sm text-muted-foreground leading-relaxed">{tl(media.caption)}</figcaption>}</figure>;
}
