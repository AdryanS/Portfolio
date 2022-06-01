import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top:64px ;
    div {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        filter: drop-shadow(6px 6px 5px rgba(0, 0, 0, 0.15));
        background-color: var(--roxo);
    }
    
    .margin {
        margin: 0 96px;
    }
`;