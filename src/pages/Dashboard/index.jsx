import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Olá, {user?.name || "usuário"}</h1>
      <p>Email: {user?.email || "seuemail@smartbuy.com"}</p>
      <p>Bem-vindo ao SmartBuy 🎯</p>
      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#dc3545",
          color: "#fff",
          borderRadius: "6px",
        }}
        onClick={handleLogout}
      >
        Sair
      </button>
    </div>
  );
}

export default Dashboard;
