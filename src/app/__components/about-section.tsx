import Image from "next/image";
import Link from "next/link";

import { Github, Linkedin, Instagram, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            Olá! Sou desenvolvedor full-stack com maior foco e aptidão em
            front-end. Tenho experiência em diversas tecnologias, como NextJS,
            NuxtJS e NodeJS.
          </p>
          <p className="mt-6 text-base text-muted-foreground">
            Participei de projetos como o desenvolvimento de aplicativos nativos
            Android, focado em transporte e pagamentos online, onde utilizei
            tecnologias como Expo. Mais recentemente, trabalhei no
            desenvolvimento de uma plataforma de streaming, utilizando
            websockets para comunicação em tempo real, API CRUD, e sistemas de
            autenticação. Minha formação técnica é em Desenvolvimento Web, e
            minhas habilidades incluem TypeScript, TailwindCSS, Git, e Figma.
          </p>
          <p className="mt-6 text-base text-muted-foreground">
            Estou em busca de uma oportunidade em TI para ampliar horizontes,
            meu currículo profissional e carreira como Desenvolvedor.
          </p>
          <div className="flex flex-row justify-between items-center">
            <div className="my-6 flex justify-center md:justify-start gap-6">
              <Link
                className="group -m-1 p-1"
                href="https://github.com/AdryanS"
              >
                <Github className="g-6 w-6 text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300" />
              </Link>
              <Link
                className="group -m-1 p-1"
                href="https://www.linkedin.com/in/adryan-samuel/"
              >
                <Linkedin className="g-6 w-6 text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300" />
              </Link>
              <Link
                className="group -m-1 p-1"
                href="https://instagram.com/dev.adryan"
              >
                <Instagram className="g-6 w-6 text-zinc-500 transition group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300" />
              </Link>
            </div>

            <Button className="bg-background/0 border border-primary text-muted-foreground hover:bg-background/40 hover:text-secondary-foreground/70">
              <a
                href="CurriculoAdryanRodrigues.pdf"
                download={"CurriculoAdryanRodrigues.pdf"}
                className="flex flex-row justify-center gap-2"
              >
                Baixar CV <Download size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
