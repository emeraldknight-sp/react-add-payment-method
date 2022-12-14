import styled from "styled-components";

export const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  background-color: var(--gray-800);
  width: 100%;
  height: 90%;

  padding: 28px 18px;
  margin: 2rem 0;

  border: 1px solid var(--border);
  border-radius: 6px;

  @media (min-width: 768px) {
    padding: 48px 28px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
