import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider"
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Popisek stranky" />
        <meta name="keywords" content="Keywords stranky" />
      </head>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
      <body className={poppins.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
