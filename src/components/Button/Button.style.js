import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--cyan-500);
  color: var(--gray-800);
  font-weight: bolder;
  font-size: var(--body-button);
  height: 50px;
  width: 100%;

  border: 1px solid var(--cyan-500);
  border-radius: 4px;

  transition: filter 0.3s;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
`;
