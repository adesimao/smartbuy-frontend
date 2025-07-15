import styled from "styled-components";

const FormContainer = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.123);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  h2 {
    font-size: 1.5rem;
    color: #212529;
    text-align: center;
  }

  @media (min-width: 768px;) {
    padding: 3rem 2rem;
  }
`;

export default FormContainer;
