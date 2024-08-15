export type LocalKey = "zh-CN" | "en-US";

export const defaultLocale: LocalKey = "zh-CN";
export const locales: LocalKey[] = ["zh-CN", "en-US"];

const LocalesMap: Record<LocalKey, () => Promise<any>> = {
  "zh-CN": () =>
    import("../locales/zh-CN.json").then((module) => module.default),
  "en-US": () =>
    import("../locales/en-US.json").then((module) => module.default),
};
export const getLocale = async (locale: LocalKey) => LocalesMap[locale]();
