import { StyledForm } from "./Form.style";

export const Form = ({ children, onSubmit }) => {
  return (
    <StyledForm className="cc" onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
};
