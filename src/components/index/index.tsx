import React from "react";

import { Container } from "./styled";
import { IndexBackground } from "./background";
import Navegation from "./nav";

const Home: React.FC = () => {
  return (
    <Container>
      <IndexBackground className="bkg" />
      <Navegation />
    </Container>
  );
};

export default Home;
