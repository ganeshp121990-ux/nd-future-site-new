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
  title: "ScaleUp Accounting Limited",
  description: "Smart accounting for scaling business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-creme text-deepBlue font-body">
        <SmoothScroll>{children}</SmoothScroll>
        <Cursor />
      </body>
    </html>
  );
}
