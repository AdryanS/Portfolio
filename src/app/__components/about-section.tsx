import Image from "next/image";
import Link from "next/link";

import { Github, Linkedin, Instagram } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="container flex flex-col md:max-w-[64rem] py-8 md:py-12 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
        <div className="lg:pl-20 flex justify-center">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/avatar.jpeg"
              width={800}
              height={800}
              quality="95"
              priority={true}
              alt="Imagem Feita por ia"
              className="aspect-square rotate-3 rounded-lg object-cover bg-zinc-100 dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2 text-center md:text-start">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl">
            @dev.adryan
          </h1>
          <p className="mt-6 text-base text-muted-foreground">
            Olá, sou Adryan, 18 Anos, natural de Goianésia, Goiás, mas residente
            em Brasília-DF. Atuo como Desenvolvedor Full-Stack, com maior
            aptidão em Front-End desde 2019, onde comecei a aprender ainda no
            Ensino Fundamental Estou em busca de uma oportunidade em TI para
            ampliar horizontes, meu currículo profissional e carreira como
            Desenvolvedor.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-6">
            <Link className="group -m-1 p-1" href="https://github.com/AdryanS">
              <Github className="g-6 w-6 text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300" />
            </Link>
            <Link className="group -m-1 p-1" href="https://www.linkedin.com/in/adryan-samuel/">
              <Linkedin className="g-6 w-6 text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300" />
            </Link>
            <Link className="group -m-1 p-1" href="https://instagram.com/dev.adryan">
              <Instagram className="g-6 w-6 text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
