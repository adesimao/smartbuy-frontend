import { useEffect, useState } from "react";
import api from "../../services/api";

function Home() {
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    api
      .get("/")
      .then((res) => setMensagem(res.data))
      .catch((err) => console.error("Erro ao conectar:", err));
  }, []);

  return (
    <div>
      <h1>Bem-vindo ao SmartBuy 👋</h1>
      <p>Sistema de gestão de compras pessoais</p>
      <p>{mensagem}</p>
    </div>
  );
}

export default Home;
