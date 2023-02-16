import styled from "styled-components";

export const Container = styled.div`
  width: 256px;
  height: 168px;
  background: #2c2d2e;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 16px;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 24px;
  box-sizing: border-box;

  img {
    width: 64px;
    height: 64px;
    border-radius: 6px;
    margin: 8px;
    object-fit: cover;
    object-position: top;
  }

  h3 {
    width: 80px;
    color: var(--branco);
    font-weight: 300;
    margin-left: 16px;
    width: 128px;
    text-align: center;
    font-size: 24px;
  }
`;

export const BlackBackgroundExit = styled.span`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  animation: 1s opacit ease-in;
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);

  @keyframes opacit {
    0% {
      filter: opacity(0);
      backdrop-filter: blur(0);
      -webkit-backdrop-filter: blur(0);
    }
    75% {
      filter: opacity(0);
      backdrop-filter: blur(0);
      -webkit-backdrop-filter: blur(0);
    }
    100% {
      filter: opacity(1);
      backdrop-filter: blur(3.5px);
      -webkit-backdrop-filter: blur(3.5px);
    }
  }
`;

export const PopUp = styled.div`
  width: 600px;
  height: 500px;
  background-color: var(--preto);
  position: fixed;
  z-index: 1;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  top: calc(50% - 500px / 2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;

  animation: 0.5s opacit ease-in;

  img {
    width: 200px;
    height: 200px;
    margin-top: 40px;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    object-fit: cover;
    object-position: center;
  }

  .textsStack {
    width: 400px;

    h2 {
      font-size: 24px;
      font-weight: 700;
      margin-top: 16px;
      color: var(--branco);
    }

    h3 {
      font-size: 14px;
      font-weight: 400;
      margin-top: 16px;
      color: var(--branco);
    }
    p {
      font-size: 12px;
      font-weight: 400;
      margin-top: 8px;
      margin-bottom: 32px;
      color: var(--branco-100);
    }
  }

  .buttons {
    width: 400px;
    display: flex;
    justify-content: space-between;
    a {
      padding: 8px 48px;
      text-decoration: none;
      background-color: var(--roxo);
      border-radius: 4px;
      font-weight: 500;
      font-size: 14px;
      color: var(--branco);
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
  }
  
  .ExitPopUp {
    display: none;
  }

  @keyframes opacit {
    0% {
      filter: opacity(0);
      backdrop-filter: blur(0);
      -webkit-backdrop-filter: blur(0);
    }
    100% {
      filter: opacity(1);
      backdrop-filter: blur(3.5px);
      -webkit-backdrop-filter: blur(3.5px);
    }
  }

  @media screen and (max-width: 700px) {
    width: 300px;
    height: 400px;
    margin: 64px;
    top: 34px;
    padding: 24px 64px;
    
    img {
      width: 60%;
      height: 180px;
    }

    .textsStack {
      width: 300px;

      h2 {
        font-size: 18px;
      }
      
      h3 {
        font-size: 12px;
      }
      p {
        font-size: 10px;
        margin-bottom: 16px; 
      }
    }

    .buttons {
    width: 300px;
    a {
      padding: 8px 32px;
    }
  }
}
`;
