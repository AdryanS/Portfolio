import styled from "styled-components";

export const Container = styled.div`
    width: 320px;
    height: 384px;
    margin-bottom: 32px;

    background: #D9D9D9 url("https://avatars.githubusercontent.com/u/70078649?v=4") center no-repeat;
    background-size: cover;
    filter: drop-shadow(6px 6px 5px rgba(0, 0, 0, 0.15)) saturate(0) brightness(0.9) opacity(1);
    border-radius: 35px;
    animation: 3s opacit ease-in;

    @keyframes opacit {
        0% {
            filter: opacity(0) saturate(0);
        }
        75% {
            filter: opacity(0) saturate(0);
        }
        100% {
            filter: opacity(1) saturate(0);
        }
    }
`;