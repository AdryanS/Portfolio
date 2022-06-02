import BackgroundParticle from "src/components/background";
import { Text } from "src/components/text";
import { Card } from "src/components/card";

import GlobalStyle from "src/styles/indexStyles";

const Index: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="styleBody">
        <BackgroundParticle/>
        <div className="styleInfos">
          <Text />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Index;
