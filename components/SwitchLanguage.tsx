"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LocalKey, defaultLocale } from "@/lib/locales";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function SwitchLanguage() {
  const selectItemList: { value: LocalKey; label: string }[] = [
    {
      value: "zh-CN",
      label: "简体中文",
    },
    {
      value: "en-US",
      label: "English",
    },
  ];

  const pathname = usePathname();
  const [defaultLanguage, setDefaultLanguage] = useState(
    pathname?.split("/")[1] || defaultLocale
  );
  const curLanguageItem = useMemo(() => {
    return selectItemList.filter((item) => item.value === defaultLanguage)[0];
  }, [defaultLanguage]);

  const router = useRouter();
  const handleChangeLanguage = (value: string) => {
    router.push(`/${value}`);
  };

  return (
    <Select
      defaultValue={curLanguageItem.value}
      onValueChange={(value) => handleChangeLanguage(value)}
    >
      <SelectTrigger className="w-28">
        <SelectValue placeholder={curLanguageItem.label} />
      </SelectTrigger>

      <SelectContent>
        {selectItemList.map((item) => {
          return (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
