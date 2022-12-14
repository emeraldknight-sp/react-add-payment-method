import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  .form-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      color: var(--cyan-500);
      font-size: 10px;
    }
  }

  .flex {
    display: flex;
    gap: 1rem;
  }

  .flex .input-wrapper {
    flex: 1;
  }

  .flex .input-wrapper input {
    width: 60%;
  }

  label {
    font-weight: 600;
    font-size: var(--body-form);
    line-height: 1.5rem;
    letter-spacing: 0.01px;
    text-transform: uppercase;
    color: var(--gray-100);
  }

  input {
    background: var(--gray-600);
    border: 1px solid var(--gray-600);
    border-radius: 4px;
    height: 40px;
    padding-inline: 1.2rem;

    color: var(--white);
    text-transform: uppercase;
    outline: none;
  }

  @media (min-width: 375px) {
    .flex .input-wrapper input {
      width: 67%;
    }
  }

  @media (min-width: 375px) {
    .flex .input-wrapper input {
      width: 72%;
    }
  }

  @media (min-width: 768px) {
    .flex .input-wrapper input {
      width: 84%;
    }
  }

  @media (min-width: 1024px) {
    width: 300px;

    .flex .input-wrapper input {
      width: 72%;
    }
  }
`;
