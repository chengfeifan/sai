"use client";

import { useSitePreference } from "@/components/site-preferences";

const daysTogether = Math.floor((Date.now() - new Date("2022-02-14").getTime()) / 86400000);

export default function Dashboard() {
  const { t } = useSitePreference();
  const cards: [string, string, string, string][] = [
    ["在一起", "days together", `${daysTogether} 天`, `${daysTogether} days`],
    ["最新时间线", "Latest timeline", "一起散步看晚霞", "Evening walk at sunset"],
    ["最新照片", "Latest photo", "上周旅行合影", "Trip photo from last week"],
    ["最新博客", "Latest blog", "《雨天窝在家》", '"Cozy Rainy Day"'],
    ["纪念日倒计时", "Anniversary countdown", "距离周年还有 86 天", "86 days before anniversary"],
    ["随机回忆", "Random memory", "第一次一起做饭，盐放多了。", "Our first cooking night, too much salt."],
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">{t("我们的仪表盘", "Our Dashboard")}</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map(([zhT, enT, zhD, enD]) => (
          <div key={zhT} className="card p-4">
            <h2 className="font-medium">{t(zhT, enT)}</h2>
            <p className="text-sm text-zinc-500">{t(zhD, enD)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
