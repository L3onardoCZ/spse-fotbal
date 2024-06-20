import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Prestižní programátoři ze 2.I"/>
        <meta name="description" content="Oficiální stránka pro školní fotbalový turnaj SPŠE 2024" />
        <meta name="keywords" content="Fotbal, SPSE, SPŠE, Turnaj, Futsal, Plzeň" />
        <meta property="og:title" content="SPŠE & GOLETO Fotbalový Turnaj 2024" />
        <meta property="og:description" content="Oficiální stránka pro školní fotbalový turnaj odehrávájící se 21. června 2024" />
        <meta property="og:image" content="https://media.discordapp.net/attachments/1017145792315805800/1244332439128510464/A3plakat_SPSE-02.jpg?ex=66750724&is=6673b5a4&hm=d9a4319ef43a3245291c686ee50ed98f5c345969a1ac503a2dedf8ef9a7760ac&=&width=1506&height=1064" />
        <meta property="og:image:width" content="1506" />
        <meta property="og:image:height" content="1064" />
        <link rel="icon" type="image/x-icon" href="/trophy.png" />

        <meta name="theme-color" content="#252830" />
      </head>
     
        <body className={poppins.className}>
          {children}
          <Toaster />
          <Analytics />
          <SpeedInsights />
        </body>


    </html>
  );
}
