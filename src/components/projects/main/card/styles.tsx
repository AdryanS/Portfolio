import styled from 'styled-components';

export const Container = styled.div`
    width: 320px;
    height: 185px;
    background: #2C2D2E;
    box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        width: 180px;
        height: 100px;
        border-radius: 6px;
        margin: 8px;
    }

    h3 {
        color: var(--branco);
        font-size: 14px;
        font-weight: 500;
        margin: 8px;
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

    img {
        width: 400px;
        height: 240px;
        margin-top: 40px;
        border-radius: 4px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.10);
    }

    .textsProjects {
        width: 400px;

        h2 {
            font-size: 24px;
            font-weight: 700;
            margin-top: 8px;
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
            text-decoration:none;
            background-color: var(--roxo);
            border-radius: 4px;
            font-weight: 500;
            font-size: 14px;
            color: var(--branco);
        }
    }

    .ExitPopUp{
        display: none;
    }
`;