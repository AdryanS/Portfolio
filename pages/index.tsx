import React, { useState, useEffect } from "react";

// import { Container } from './styles';

const mensagem = [
  {
    1: "Ola, Mara?",
    2: "Esse site foi feito para você",
    3: "Não tenho muito para falar mas queria dizer que",
    4: "Obrigado",
    5: "você me ajudou na melhor hora",
    6: "VOCÊ E FODA DEMAIS",
    7: "Tenho orgulho de vocè",
    8: "te amo ❤",
  },
];

const Home: React.FC = () => {
  const [number, setNumber] = useState(1);

  useEffect(() => {}, [number]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#181818",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {mensagem.map((a) => (
        <h1
          key={number}
          style={{
            padding: "15px",
            color: "#c7c7c7",
            textAlign: "center",
          }}
        >
          {a[number]}
        </h1>
      ))}
      <button
        onClick={() => setNumber(number + 1)}
        style={{
          width: "200px",
          height: "30px",
          borderStyle: "none",
          backgroundColor: "#c7c7c7",
        }}
      >
        proximo
      </button>
    </div>
  );
};

export default Home;
