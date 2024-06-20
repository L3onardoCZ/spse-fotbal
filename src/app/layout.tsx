import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

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
        <meta name="keywords" content="Fotbal, SPSE, SPŠE, Turnaj, Futsal" />
        <meta property="og:title" content="SPŠE & GOLETO Fotbalový Turnaj 2024" />
        <meta property="og:description" content="Oficiální stránka pro školní fotbalový turnaj odehrávájící se 21. června 2024" />
        <meta property="og:image" content="./plakat.jpg" />
        <link rel="icon" type="image/x-icon" href="/public/trophy.png" />

      </head>
     
        <body className={poppins.className}>
          {children}
          <Toaster />
        </body>


    </html>
  );
}
