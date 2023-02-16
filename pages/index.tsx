import BackgroundParticle from "src/components/background";
import { IndexText } from "src/components/home/text";
import { IndexCard } from "src/components/home/card";
import { ProjectText } from "src/components/projects/text";
import { ProjectMain } from "src/components/projects/main";
import { StackText } from "src/components/stack/text";
import { StackMain } from "src/components/stack/main";

import GlobalStyle from "src/styles/stylesIndex";

const Index: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <main id="Home" className="styleBody">
        <BackgroundParticle />
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
      <footer
        style={{
          width: "100%",
          height: "300px",
          background:
            "linear-gradient(180deg, rgba(39,40,41,1) 10%, #111111 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
          href="mailto: adryx7000@gmail.com"
          style={{
            textDecoration: "none",
            color: "#f2f4f6",
            fontSize: "20px",
            fontWeight: 600,
            marginTop: "20px",
          }}
        >
          <p>Email: <span style={{color: "#5352ed",}}>adryx7000@gmail.com</span></p>
        </a>
      </footer>
    </>
  );
};

export default Index;
