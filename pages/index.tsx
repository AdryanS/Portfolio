import React from 'react';

// import { Container } from './styles';

const Home: React.FC = () => {
  return(
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#181818",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1 style={{
          margin: "0px",
          color: "#858585"
        }}
      >
        Projeto Com TypeScript E NextJS
      </h1>
    </div>
  );
}

export default Home;