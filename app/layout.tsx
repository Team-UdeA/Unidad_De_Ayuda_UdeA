import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-hidden" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
            <div className="relative flex flex-col h-screen ">
              <Navbar />
              <main className="overflow-auto rounded-large">
                {children}
              </main>
              <footer className="w-full flex items-center justify-center pb-0">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://github.com/orgs/Team-UdeA/repositories"
                  title="nextui.org homepage"
                >
                  <span className="text-default-600">Powered Team</span>
                  <p className="text-primary">UdeA</p>
                </Link>
              </footer>
            </div>
        </Providers>
      </body>
    </html>
  );
}
