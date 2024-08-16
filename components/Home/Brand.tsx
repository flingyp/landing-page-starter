import React from "react";
import Marquee from "react-fast-marquee";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiVercel,
  SiGithub,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
} from "react-icons/si";

const brandList = [
  {
    logo: SiReact,
  },
  {
    logo: SiNextdotjs,
  },
  {
    logo: SiTypescript,
  },
  {
    logo: SiVercel,
  },
  {
    logo: SiGithub,
  },
  {
    logo: SiTailwindcss,
  },
  {
    logo: SiHtml5,
  },
  {
    logo: SiCss3,
  },
  {
    logo: SiJavascript,
  },
  {
    logo: SiNodedotjs,
  },
];

export default function Brand() {
  return (
    <section className="mx-auto mb-12 w-3/4 box-border">
      <Marquee
        className="cursor-pointer"
        autoFill={true}
        pauseOnHover={true}
        speed={50}
      >
        {brandList.map((Brand, index) => {
          return <Brand.logo key={index} size={60} className="mr-16" />;
        })}
      </Marquee>
    </section>
  );
}
