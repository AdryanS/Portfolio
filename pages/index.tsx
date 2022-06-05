import BackgroundParticle from "src/components/background";
import { Text } from "src/components/text";
import { Card } from "src/components/card";

import GlobalStyle from "src/styles/stylesIndex";

const Index: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <main className="styleBody">
        <BackgroundParticle/>
        <div className="styleInfos">
          <Text />
          <Card />
        </div>
      </main>
    </>
  );
};

export default Index;
