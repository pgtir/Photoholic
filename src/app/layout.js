import "./globals.css";
import { Poppins } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import AppBar from "@/components/AppBar/Appbar";
import { ThemeProvider } from "@/context/ThemeContext";

config.autoAddCss = false;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Photoholic",
  description:
    "A social media platform where photographers around the world can share their work and interact with fellow photoholics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
          <div className="container">
            <AppBar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
