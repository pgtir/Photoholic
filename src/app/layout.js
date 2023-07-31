import "./globals.css";
import { Poppins } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ThemeProvider } from "@/themeProvider/ThemeProvider";
import StoreProvider from "@/redux/StoreProvider";
import AppBar from "@/components/appbar/Appbar";

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
    <StoreProvider>
      <html lang="en">
        <body className={poppins.className}>
          <ThemeProvider>
            <div className="container">
              <AppBar/>
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
