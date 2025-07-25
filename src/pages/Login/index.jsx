import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../redux/authSlice";
import { loginUser } from "../../services/authService";

import FormContainer from "../../components/Form/Container";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUser(form.email, form.password);
      dispatch(loginSuccess(data));
      navigate("/dashboard");
    } catch (err) {
      setError("Credenciais inválidas ou erro no servidor.");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <FormContainer>
        <h2>Entrar</h2>
        <form onSubmit={handleSubmit}>
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
          <Button type="submit">Entrar</Button>
          <p style={{ color: "#333", marginTop: "0.5rem" }}>
            <Link to='/register'>Não tem uma conta, cadastre-se 👉➡️</Link>
          </p>
          {error && (
            <p style={{ color: "#dc3545", marginTop: "0.5rem" }}>{error}</p>
          )}
        </form>
      </FormContainer>
    </div>
  );
}

export default Login;
