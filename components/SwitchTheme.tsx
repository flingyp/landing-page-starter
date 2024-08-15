"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { LuSun, LuMoon, LuSettings } from "react-icons/lu";

export default function SwitchTheme() {
  const [isDark, setIsDark] = useState(false);
  const [selectedMode, setSelectedMode] = useState("system");

  useEffect(() => {
    // 获取系统初始主题
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    setIsDark(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDark(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  // 根据选择切换主题
  const switchTheme = () => {
    if (selectedMode === "system") {
      // 获取系统主题
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDark(mediaQuery.matches);
      if (mediaQuery.matches) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    } else {
      setIsDark(selectedMode === "dark");
      if (selectedMode === "dark") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  };

  useEffect(() => {
    switchTheme();
  }, [selectedMode, isDark]);

  const handleChangeTheme = (value: "dark" | "light" | "system") => {
    setSelectedMode(value);
  };

  return (
    <Select defaultValue="system" onValueChange={handleChangeTheme}>
      <SelectTrigger className="w-28">
        <SelectValue placeholder="system" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">
          <div className="flex items-center space-x-1">
            <LuSun className="inline-block" size={14} />
            <span>Light</span>
          </div>
        </SelectItem>
        <SelectItem value="dark">
          <div className="flex items-center space-x-1">
            <LuMoon className="inline-block" size={14} />
            <span>Dark</span>
          </div>
        </SelectItem>
        <SelectItem value="system">
          <div className="flex items-center space-x-1">
            <LuSettings className="inline-block" size={14} />
            <span>System</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
