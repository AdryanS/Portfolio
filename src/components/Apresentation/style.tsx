import styled from "styled-components";

interface imageI {
    imageURL?: string;
}

export const StyledImageBKG = styled.div<imageI>`
    width: 100%;
    height: calc(100vh - 150px);
    background-image: ${ props => props.imageURL };
`