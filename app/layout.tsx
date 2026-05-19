import "./globals.css";
import { SiteNav, SitePreferenceProvider } from "@/components/site-preferences";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <SitePreferenceProvider>
          <div className="min-h-screen">
            <SiteNav />
            <main className="mx-auto max-w-6xl p-4">{children}</main>
          </div>
        </SitePreferenceProvider>
      </body>
    </html>
  );
}
