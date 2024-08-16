import { getLocale, LocalKey } from "@/lib/locales";

import Hero from "@/components/Home/Hero";
import Brand from "@/components/Home/Brand";

interface PageProps {
  params: {
    lang: string;
  };
  [key: string]: unknown;
}

export default async function Page(props: PageProps) {
  const lang = props.params.lang as LocalKey;
  const localeDict = await getLocale(lang);

  // <p>{localeDict["Lading Page Starter"]}</p>
  // <p>{localeDict["description"]}</p>

  return (
    <>
      <Hero />
      <Brand />
    </>
  );
}
