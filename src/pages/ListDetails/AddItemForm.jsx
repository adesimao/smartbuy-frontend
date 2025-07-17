import { useState } from "react";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import styled from "styled-components";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1rem 0;
`;

function AddItemForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", category: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.category.trim()) return;
    await onAdd(form);
    setForm({ name: "", category: "" });
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        name="name"
        placeholder="Nome do item"
        value={form.name}
        onChange={handleChange}
        required
      />
      <Input
        name="category"
        placeholder="Categoria"
        value={form.category}
        onChange={handleChange}
        required
      />
      <Button type="submit">Adicionar item</Button>
    </Wrapper>
  );
}

export default AddItemForm;
