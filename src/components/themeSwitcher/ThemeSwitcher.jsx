"use client";

import styles from "./themeSwitcher.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux/slice";

const ThemeSwitcher = () => {
  const { theme } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <span className={styles.themeLabel}>
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </span>
      <div
        className={styles.themeSwitcher}
        onClick={() => dispatch(toggleTheme())}
      >
        <div
          className={styles.toggler}
          style={theme === "light" ? { left: "2.5px" } : { right: "2.5px" }}
        ></div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
