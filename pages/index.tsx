import BackgroundParticle from "src/components/background";
import { IndexText } from "src/components/home/text";
import { IndexCard } from "src/components/home/card";
import {ProjectText} from "src/components/projects/text";
import {ProjectMain} from "src/components/projects/main";
import { StackText } from "src/components/stack/text";
import {StackMain} from "src/components/stack/main";

import GlobalStyle from "src/styles/stylesIndex";

const Index: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <main id="Home" className="styleBody">
        <BackgroundParticle/>
        <div className="styleInfos">
          <IndexText />
          <IndexCard />
        </div>
      </main>
      <div id="Projetos" className="styleProject">
        <ProjectText />
        <ProjectMain />
      </div>
      <div id="Stack" className="styleProject">
        <StackText />
        <StackMain />
      </div>
    </>
  );
};

export default Index;
