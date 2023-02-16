import BackgroundParticle from "src/components/background";
import { IndexText } from "src/components/index/text";
import { IndexCard } from "src/components/index/card";
import {ProjectText} from "src/components/projects/text";
import {ProjectMain} from "src/components/projects/main";

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
    </>
  );
};

export default Index;
