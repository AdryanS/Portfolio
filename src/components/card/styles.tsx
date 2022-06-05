import styled from "styled-components";

export const Container = styled.div`
    width: 320px;
    height: 384px;
    margin-bottom: 32px;

    animation: 3s opacit ease-in;

    background: rgba( 38, 38, 38, 0.05 );
    backdrop-filter: blur( 3.5px );
    -webkit-backdrop-filter: blur( 3.5px );
    border-radius: 10px;
    /* justify-content: center; */
    display: flex;
    align-items: center;
    flex-direction: column;
    
    border: 1px solid #5352ED;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.25);
    box-shadow: inset 0px 0px 5px 1px rgba(0, 0, 0, 0.15);

    h3 {
        width: 272px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 29px;
        
        display: flex;
        align-items: center;
        margin: 32px 0 16px 0;
        
        color: #F2F4F6;
    }
    p {
        width: 272px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        display: flex;
        align-items: center;

        /* cinza */

        color: var(--cinza-claro);
        margin-bottom: 8px;
    }

    /* button {
        width: 192px;
        height: 32px;
        margin-top: calc(32px - 8px);
        background: var(--roxo);
        border-radius: 7px;
        border-style: none;
        transition: all 0.3s ease-in-out;
        filter: saturate(0);

        p {
            width:100%;
            height: 100%;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--branco);
        }
    }

    button :hover{
        filter: brightness(1.2) saturate(0);
    } */

    @keyframes opacit {
        0% {
            filter: opacity(0);
            backdrop-filter: blur( 0 );
            -webkit-backdrop-filter: blur( 0 );
        }
        75% {
            filter: opacity(0);
            backdrop-filter: blur( 0 );
            -webkit-backdrop-filter: blur( 0 );
        }
        100% {
            filter: opacity(1) ;
            backdrop-filter: blur( 3.5px );
            -webkit-backdrop-filter: blur( 3.5px );
        }
    }
`;