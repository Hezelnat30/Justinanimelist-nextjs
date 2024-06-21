import { League_Spartan } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "Justin Anime List",
  description: "First Justin Website using Next.Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-color-dark ${spartan.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
