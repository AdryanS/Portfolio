import { AboutSection } from "./__components/about-section";
import BackgroundParticle from "./__components/background";
import { IntroSection } from "./__components/intro-section";
import { StackSection } from "./__components/stack-session";

export default function Home() {
  return (
    <main>
      <BackgroundParticle />
      <IntroSection />
      <AboutSection />
      <StackSection />
    </main>
  );
}
