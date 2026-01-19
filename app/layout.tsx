import type { Metadata } from "next";
import "./globals.css";
import KeyboardShortcuts from "./components/KeyboardShortcuts";

export const metadata: Metadata = {
  title: "Todo App - Quản lý công việc thông minh",
  description: "Ứng dụng quản lý công việc thân thiện và hiện đại, giúp bạn tổ chức công việc hiệu quả hơn.",
  keywords: ["todo list", "task management", "productivity", "quản lý công việc"],
  authors: [{ name: "Todo App" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0891B2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>✓</text></svg>" />
      </head>
      <body className="antialiased">
        <KeyboardShortcuts />
        {children}
      </body>
    </html>
  );
}
