"use client"

import { useContext } from "react"
import styles from "./themeSwitcher.module.css"
import { ThemeContext } from "@/context/ThemeContext"

const ThemeSwitcher = () => {
  const { toggleTheme,theme } = useContext(ThemeContext)
  return (
    <div className={styles.container}>
      <h4 className={styles.themeLabel} >Switch Theme</h4>
      <div className={styles.themeSwitcher} onClick={toggleTheme}>
        <div className={styles.toggler} style={theme === "light" ? {left: "2.5px"} : {right: "2.5px"}} >
        </div>
      </div>
    </div>
  )
}

export default ThemeSwitcher