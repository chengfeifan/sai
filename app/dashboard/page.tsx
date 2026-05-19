const daysTogether = Math.floor((Date.now() - new Date('2022-02-14').getTime()) / 86400000);
export default function Dashboard() {
  return <div className="space-y-4"><h1 className="text-2xl font-semibold">我们的仪表盘</h1><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">{[
    [`在一起 ${daysTogether} 天`,`爱意每天+1`],["最新时间线","一起散步看晚霞"],["最新照片","上周旅行合影"],["最新博客","《雨天窝在家》"],["纪念日倒计时","距离周年还有 86 天"],["随机回忆","第一次一起做饭，盐放多了。"]
  ].map(([t,d]) => <div key={t} className="card p-4"><h2 className="font-medium">{t}</h2><p className="text-sm text-zinc-500">{d}</p></div>)}</div></div>
}
