import { getLocale, LocalKey } from "@/lib/locales";

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
    <main>
      <p>{localeDict["Lading Page Starter"]}</p>
      <p>{localeDict["description"]}</p>
    </main>
  );
}
