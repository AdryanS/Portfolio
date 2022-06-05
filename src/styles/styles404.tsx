import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    main {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
    }

    div {
        width: 320px;
    }

    .LottieFileDiv {
        width: 488px;
    }
    
    @media (max-width: 990px) {
        main {
            justify-content: center;
            flex-direction: column-reverse;
        }

        .LottieFileDiv {
            width: 320px;
            height: 256px;
            margin-bottom: 32px;
        }
    }
`;

export const StylesErrorText = styled.h1`
    height: 80px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 64px;
    line-height: 78px;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    
    color: #FC4343;
    @media (max-width: 990px) {
        width: 100%;
        font-size: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;


export const StylesText = styled.h3`
    height: 40px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 41px;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    
    color: #FFFFFF;

    @media (max-width: 990px) {
        width: 100%;
        font-size: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;


export const StylesInfoText = styled.h3`
    height: 40px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 41px;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    
    color: #FFFFFF;
    @media (max-width: 990px) {
        width: 100%;
        font-size: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const StylesSecundaryInfoText = styled.p`
    height: 64px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 32px;
    display: flex;
    align-items: center;

    color: #FFFFFF;
    @media (max-width: 990px) {
        width: 100%;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
`;

export const StylesButton = styled.button`
    width: 320px;
    height: 48px;
    background: #5352ED;
    border-radius: 7px;
    border-style: none;
    margin-top: 32px;
    p{
        width: 100%;
        height: 100%;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;

        color: #FFFFFF;
    }

    @media (max-width: 990px) {
        width: 100%;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;