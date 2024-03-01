import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "../components/layout/Header";
import AuthProvider from "@/components/AuthProvider";

const josefin = Josefin_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Health Network",
  description: "Food & Training Network",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <AuthProvider>
          <Header></Header>
          {children}
          <Footer></Footer>
        </AuthProvider>
      </body>
    </html>
  );
}
