import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import SmoothScroll from "../components/SmoothScroll";
import Cursor from "../components/Cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-poppins'
});

export const metadata = {
  title: "ScaleUp Accounting Limited | Smart Accounting for Scaling Businesses",
  description:
    "ScaleUp Accounting Limited is a UK-based accounting firm helping growing businesses with smart, scalable financial solutions, tax planning, and compliance.",
  keywords: [
    "accounting firm UK",
    "chartered accountant UK",
    "tax services UK",
    "business accounting",
    "scaleup accounting"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} overflow-x-hidden`}>
      <body className="bg-[#FDFCFB] text-[#0A1A2F] font-body overflow-x-hidden antialiased selection:bg-[#C8A96A]/30 selection:text-[#0A1A2F]">
        <SmoothScroll>{children}</SmoothScroll>
        <Cursor />
      </body>
    </html>
  );
}
