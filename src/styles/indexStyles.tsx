import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
.styleBody {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.styleInfos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1328px;
}

@media (max-width: 1440px) {
    .styleInfos {
        width: 992px;
    } 
}

@media (max-width: 1080px) {
    .styleInfos {
        width: 656px;

        h1 {
            font-size: 40px;
        }

        h2 {
            font-size: 24px;
        }
        p {
            font-size:16px;
        }
    } 
}

@media (max-width: 700px) {

    .styleBody { 
        width: 100%;
        height: 100%;
    }
    .styleInfos {
        height: 100%;
        margin-top: 128px;
        width: 320px;
        flex-direction: column;
        justify-content: center;

        div:first-child {
            margin-bottom: 32px;
        }
    } 

}

`;

export default GlobalStyle;