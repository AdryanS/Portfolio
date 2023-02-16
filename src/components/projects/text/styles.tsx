import styled from 'styled-components';

export const Container = styled.div`
  padding: 96px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 48px;
    font-weight: 600;
    color: var(--branco)
  }

  span {
    content: '';
    display: block;
    margin-top: 32px;
    width: 415px;
    height: 2px;
    border-radius: 50%;
    background: var(--branco);
  }

  @media (max-width: 1366px) {
    padding: 64px 32px;

    h2 {
        font-size: 42px;
    }

    span {
        width: 320px;
    }
  }
`;
