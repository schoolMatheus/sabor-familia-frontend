import { useLogin } from "../../hooks/UsePerfil";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/UseAuth";
import "./login.css";

export function Login() {
  const { login, loading, error } = useLogin();
  const { salvarAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    const perfil = await login(nome, email);
    if (perfil) {
      salvarAuth(perfil); 
      navigate("/home");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Sabor da Família</h1>
        <p>Entre com seu nome e e-mail</p>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Nome</label>
            <input name="nome" placeholder="Seu nome completo" required />
          </div>
          <div className="field">
            <label>E-mail</label>
            <input name="email" type="email" placeholder="exemplo@email.com" required />
          </div>

          <button className="btn-submit" type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
