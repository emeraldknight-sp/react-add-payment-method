import styled from "styled-components";

export const StyledAddPaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background-color: var(--background);
  color: var(--white);

  @media (min-width: 768px) {
    height: 100%;
  }

  @media (min-width: 1024px) {
    height: 100vh;
  }
`;
