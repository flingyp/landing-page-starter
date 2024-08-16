"use client";

import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";

type ThemeMode = "dark" | "light" | "system";

export default function SwitchTheme() {
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");

  useEffect(() => {
    // 获取当前本地存储的主题设置
    const localThemeMode = localStorage.getItem(
      "lading-page-starter-themeMode"
    );
    // 获取系统主题
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (!localThemeMode) {
      setThemeMode(mediaQuery.matches ? "dark" : "light");
      switchTheme("system");
    } else {
      setThemeMode(localThemeMode as ThemeMode);
      switchTheme(localThemeMode as ThemeMode);
    }
  }, []);

  /**
   * 修改主题模式
   * @param value
   */
  const handleChangeTheme = (value: ThemeMode) => {
    setThemeMode(value);
    localStorage.setItem("lading-page-starter-themeMode", value);
    switchTheme(value);
  };

  /**
   * 切换主题
   * @param value
   */
  const switchTheme = (value: ThemeMode) => {
    if (value === "system") {
      // 获取系统主题
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      if (mediaQuery.matches) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    } else if (value === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return themeMode === "system" ? (
    <RiComputerLine
      className="cursor-pointer"
      size={20}
      onClick={() => handleChangeTheme("light")}
    />
  ) : themeMode === "light" ? (
    <LuSun
      className="cursor-pointer"
      size={20}
      onClick={() => handleChangeTheme("dark")}
    />
  ) : (
    <LuMoon
      className="cursor-pointer"
      size={20}
      onClick={() => handleChangeTheme("system")}
    />
  );
}
