import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";

import FormContainer from "../../components/Form/Container";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(form.name, form.email, form.password);
      navigate("/login");
    } catch (err) {
      setError(
        err?.response?.data?.message || "Erro ao registrar. Tente novamente!"
      );
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <FormContainer>
        <h2>Crie sua conta</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Nome completo"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            value={form.password}
            onChange={handleChange}
            required
          />
          <Button type="submit">Cadastrar</Button>
          <p style={{ color: "#333", marginTop: "0.5rem" }}>
            <Link to='/login'>Já tem uma conta, faça login 👉➡️</Link>
          </p>
          {error && (
            <p style={{ color: "#dc3545", marginTop: "0.5rem" }}>{error}</p>
          )}
        </form>
      </FormContainer>
    </div>
  );
}

export default Register;
