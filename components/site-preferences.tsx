"use client";

import Link from "next/link";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type ThemeName = "rose" | "ocean" | "forest" | "violet";
export type Language = "zh" | "en";

type PreferenceState = {
  theme: ThemeName;
  language: Language;
  setTheme: (theme: ThemeName) => void;
  setLanguage: (language: Language) => void;
  t: (zh: string, en: string) => string;
};

const THEME_MAP: Record<ThemeName, { primary: string; secondary: string; bg: string; cardBorder: string }> = {
  rose: { primary: "#d9777f", secondary: "#f8dedd", bg: "#fffaf8", cardBorder: "#ffe4e6" },
  ocean: { primary: "#0ea5e9", secondary: "#dbeafe", bg: "#f4fbff", cardBorder: "#bfdbfe" },
  forest: { primary: "#16a34a", secondary: "#dcfce7", bg: "#f5fff8", cardBorder: "#bbf7d0" },
  violet: { primary: "#8b5cf6", secondary: "#ede9fe", bg: "#f8f6ff", cardBorder: "#ddd6fe" },
};

const PreferenceContext = createContext<PreferenceState | null>(null);

export function SitePreferenceProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>("rose");
  const [language, setLanguage] = useState<Language>("zh");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeName | null;
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedTheme && THEME_MAP[savedTheme]) setTheme(savedTheme);
    if (savedLanguage === "zh" || savedLanguage === "en") setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const colors = THEME_MAP[theme];
    const root = document.documentElement;
    root.style.setProperty("--theme-primary", colors.primary);
    root.style.setProperty("--theme-secondary", colors.secondary);
    root.style.setProperty("--theme-bg", colors.bg);
    root.style.setProperty("--theme-card-border", colors.cardBorder);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  const value = useMemo(
    () => ({
      theme,
      language,
      setTheme,
      setLanguage,
      t: (zh: string, en: string) => (language === "zh" ? zh : en),
    }),
    [theme, language],
  );

  return <PreferenceContext.Provider value={value}>{children}</PreferenceContext.Provider>;
}

export function useSitePreference() {
  const ctx = useContext(PreferenceContext);
  if (!ctx) throw new Error("useSitePreference must be used inside SitePreferenceProvider");
  return ctx;
}

export function SiteNav() {
  const { t } = useSitePreference();
  return (
    <header className="border-b bg-white/80 backdrop-blur" style={{ borderColor: "var(--theme-card-border)" }}>
      <nav className="mx-auto flex max-w-6xl gap-4 px-4 py-3 text-sm" style={{ color: "var(--theme-primary)" }}>
        <Link href="/dashboard">{t("仪表盘", "Dashboard")}</Link>
        <Link href="/timeline">{t("时间线", "Timeline")}</Link>
        <Link href="/albums">{t("相册", "Albums")}</Link>
        <Link href="/blog">{t("博客", "Blog")}</Link>
        <Link href="/anniversaries">{t("纪念日", "Anniversaries")}</Link>
        <Link href="/settings">{t("设置", "Settings")}</Link>
      </nav>
    </header>
  );
}
