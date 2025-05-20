import type { Metadata } from "next";
import ImagePreloader from "./components/ImagePreloader";


// font
import { Geist, Geist_Mono } from "next/font/google";

// CSS
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: '{ sammySeal }',
  icons: {
    icon: '/favicon-sammy.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ImagePreloader />
        {children}
        <div className="credits">
          <span className="credits">Original artwork by Matthew Hill</span>
        </div>
      </body>
    </html>
  );
}

