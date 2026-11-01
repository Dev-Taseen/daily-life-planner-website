import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Daily Life Planner",
  description: "Plan your day, organize routines, manage tasks, and stay on track with Daily Life Planner.",
  icons: { icon: "/app-icon.png", apple: "/app-icon.png" },
  applicationName: "Daily Life Planner"
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
