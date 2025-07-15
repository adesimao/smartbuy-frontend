import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #0066ff;
  color: #fff;
  font-weight: 600;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0052cc;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Button;
