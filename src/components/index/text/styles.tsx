import styled from "styled-components";

export const Container  = styled.div`
    color: var(--branco);
    p {
        width: 152px;
        height: 32px;
        background: rgba(38, 38, 38, 0.25);
        border: 1px solid #5352ED;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px 10px 10px 0;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        filter: drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.15));
        backdrop-filter: blur( 3.5px );
        -webkit-backdrop-filter: blur( 3.5px );
        box-shadow: inset 0px 0px 5px 1px rgba(0, 0, 0, 0.15);
    }

    h1 {
        height: 80px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        line-height: 87px;
        display: flex;
        align-items: center;
        margin-top: 8px;
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