"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Language, ThemeName, useSitePreference } from "@/components/site-preferences";
import { supabase } from "@/lib/supabase";

const themeChoices: ThemeName[] = ["rose", "ocean", "forest", "violet"];
const languageChoices: Language[] = ["zh", "en"];

export default function Settings() {
  const { t, theme, language, setTheme, setLanguage } = useSitePreference();

  const onDeploy = () => {
    window.open("https://vercel.com/new", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">{t("设置", "Settings")}</h1>

      <div className="card space-y-3 p-4">
        <h2 className="text-lg font-medium">{t("页面美化", "UI Personalization")}</h2>
        <Input placeholder={t("昵称", "Nickname")} />
        <Input placeholder={t("头像 URL", "Avatar URL")} />

        <div>
          <p className="mb-2 text-sm text-zinc-600">{t("主题颜色", "Theme color")}</p>
          <div className="flex flex-wrap gap-2">
            {themeChoices.map((item) => (
              <Button
                key={item}
                className={theme === item ? "ring-2 ring-offset-2" : ""}
                style={theme === item ? { ringColor: "var(--theme-primary)" } : {}}
                onClick={() => setTheme(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm text-zinc-600">{t("页面语言", "Language")}</p>
          <div className="flex gap-2">
            {languageChoices.map((item) => (
              <Button key={item} className={language === item ? "ring-2 ring-offset-2" : ""} onClick={() => setLanguage(item)}>
                {item === "zh" ? "中文" : "English"}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <Button>{t("保存资料", "Save profile")}</Button>
          <Button className="bg-zinc-500" onClick={() => supabase.auth.signOut()}>
            {t("退出登录", "Sign out")}
          </Button>
          <Button onClick={onDeploy}>{t("一键部署", "One-click Deploy")}</Button>
        </div>
      </div>
    </div>
  );
}
