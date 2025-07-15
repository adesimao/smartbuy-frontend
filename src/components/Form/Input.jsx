import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  font-size: 1rem;
  background-color: #f9f9f9;
  color: #212529;

  &:focus {
    border-color: #06f;
    outline: none;
    background-color: #fff;
  }
`;

export default Input;
