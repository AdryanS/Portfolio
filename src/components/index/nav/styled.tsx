import styled from "styled-components";

export const ContainerNav = styled.div`
  width: 96px;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
`;

export const NavBar = styled.nav`
  width: 64px;
  height: 100%;
  background-color: var(--cinza);
  box-shadow: var(--preto) 0px 4px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 16px;
  }
`;

export const NavbuttonHover = styled.div`
  width: 32px;
  height: 48px;
  background-color: var(--cinza);
  border-radius: 0px 25px 25px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
