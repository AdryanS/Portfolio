import { AboutSection } from "./__components/about-section";
import BackgroundParticle from "./__components/background";
import { IntroSection } from "./__components/intro-section";
import { StackSection } from "./__components/stack-session";

export default function Home() {
  return (
    <main className="">
      <BackgroundParticle />
      <IntroSection />
      <AboutSection />
      <StackSection />
      <section id="contact">
        <h1 className="text-primary">Investiment</h1>
      </section>
      <section id="faq">
        <h1 className="text-primary">faq</h1>
      </section>
    </main>
  );
}
