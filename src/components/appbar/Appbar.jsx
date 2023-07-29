import styles from "./appbar.module.css";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import { Satisfy } from "next/font/google";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";

const logoFont = Satisfy({
  subsets: ["latin"],
  weight: ["400"],
});

const AppBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} className={styles.img} />
        <h2 className={logoFont.className}>Photoholic</h2>
      </div>
      <ThemeSwitcher />
    </div>
  );
};

export default AppBar;
