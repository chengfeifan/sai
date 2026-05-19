import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="min-h-screen">
          <header className="border-b border-rose-100 bg-white/80 backdrop-blur">
            <nav className="mx-auto max-w-6xl px-4 py-3 flex gap-4 text-sm text-rose-700">
              <Link href="/dashboard">Dashboard</Link><Link href="/timeline">Timeline</Link><Link href="/albums">Albums</Link><Link href="/blog">Blog</Link><Link href="/anniversaries">Anniversaries</Link><Link href="/settings">Settings</Link>
            </nav>
          </header>
          <main className="mx-auto max-w-6xl p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
