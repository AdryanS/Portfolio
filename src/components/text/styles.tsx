import styled from "styled-components";

export const Container  = styled.div`
    width: 608px;
    height: 294px;
    margin: 256px 0 0 140px ;
    color: var(--branco);
    p {
        width:128px;
        height: 32px;
        background-color: var(--roxo);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px 10px 10px 0;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        filter: drop-shadow(6px 6px 5px rgba(0, 0, 0, 0.15));
    }

    h1 {
        height: 80px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        display: flex;
        align-items: center;
    }
    h2 {
        height: 38px;
        color: rgba(255, 255, 255, 0.6);
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 300;
        font-size: 28px;
        display: flex;
        align-items: center;
        margin-top: 16px;
    }
`;