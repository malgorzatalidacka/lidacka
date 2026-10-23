import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AccessibilityTools from "@/components/AccessibilityTools";
import { useLanguage } from "@/i18n/LanguageContext";
interface LayoutProps { children: ReactNode; }
const Layout = ({ children }: LayoutProps) => {
  const { language } = useLanguage();
  return <div className="min-h-screen flex flex-col">
    <a className="skip-link" href="#main-content">{language === "pl" ? "Przejdź do treści" : "Skip to content"}</a>
    <Header />
    <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
    <Footer />
    <AccessibilityTools />
  </div>;
};
export default Layout;
