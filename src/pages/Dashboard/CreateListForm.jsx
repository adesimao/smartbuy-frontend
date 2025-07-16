import { useState } from "react";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import styled from "styled-components";

const Wrapper = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin-bottom: 1.5rem;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

function CreateListForm({ onCreate }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    await onCreate(name);
    setName("");
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome da nova lista"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Button type="submit">Criar</Button>
    </Wrapper>
  );
}

export default CreateListForm;
