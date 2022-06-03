import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 64px;
    div {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        filter: drop-shadow(6px 6px 5px rgba(0, 0, 0, 0.15));
        background: rgba(38, 38, 38, 0.75);
        border: 1px solid #5352ED;
        border-radius: 6px;
        backdrop-filter: blur(2px);

        a {
            width: 32px;
            height: 32px;
        }
    }
    
    .margin {
        margin: 0 58px;
    }

    @media (max-width: 700px) {
        width: 100%;
        justify-content: space-evenly;
        align-items: center;
    }
`;