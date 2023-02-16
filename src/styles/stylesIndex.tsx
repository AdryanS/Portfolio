import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    background: #272829
}


.styleBody {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.styleProject {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
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
        .paragraph {
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

        .mgbt {
            margin-bottom: 32px;
        }
    } 

}

`;

export default GlobalStyle;