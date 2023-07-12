import "./globals.css";
import { Metadata } from "next";
import LogoNav from "./components/ui/LogoNav";
import NavBarMobile from "./components/ui/NavBarMobile";
import { Footer } from "./components/sections/Footer";

export const metadata: Metadata = {
  title: "Stir Digital",
  description: "Placing your business at the forefront of the digital world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="block min-h-[100%] overflow-x-hidden scroll-smooth bg-main">
        <NavBarMobile />
        <LogoNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
