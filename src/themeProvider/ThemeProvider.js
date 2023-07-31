"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";

export const ThemeProvider = ({ children }) => {
  const { theme }  = useSelector((state) => state.app)

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme])

  return (
      <div className={`theme ${theme}`}>
        {children}
      </div>
  );
};
