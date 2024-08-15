import { getLocale, LocalKey } from "@/lib/locales";
import SwitchLanguage from "@/components/SwitchLanguage";
import SwitchTheme from "@/components/SwitchTheme";

interface PageProps {
  params: {
    lang: string;
  };
  [key: string]: unknown;
}

export default async function Page(props: PageProps) {
  const lang = props.params.lang as LocalKey;
  const localeDict = await getLocale(lang);

  return (
    <main className="pt-[80px]">
      <p>{localeDict["Lading Page Starter"]}</p>
      <p>{localeDict["description"]}</p>

      <SwitchLanguage />
      <SwitchTheme />
    </main>
  );
}
