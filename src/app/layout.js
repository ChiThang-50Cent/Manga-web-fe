import Header from "./components/header";
import Footer from "./components/footer";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MangaDox",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="bg-gray-300">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
