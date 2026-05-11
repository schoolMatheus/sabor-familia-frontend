import "./sideBar.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/UseAuth";
import HomeIcon from "../../../assets/icon/menu/HomeIcon";
import SearchIcon from "../../../assets/icon/menu/SearchIcon";
import ChatIcon from "../../../assets/icon/menu/ChatIcon";
import HeartIcon from "../../../assets/icon/menu/HeartIcon"; 
import PlusIcon from "../../../assets/icon/menu/PlusIcon";
import UserIcon from "../../../assets/icon/menu/UserIcon";
import SettingsIcon from "../../../assets/icon/menu/SettingsIcon";

function Sidebar() {
  const navigate = useNavigate();
  const { perfil } = useAuth();

  const links = [
    { label: "Início",          icon: <HomeIcon />,     path: "/home" },
    { label: "Buscar",          icon: <SearchIcon />,   path: "/explorar" },
    { label: "Mensagens",       icon: <ChatIcon />,     path: "/mensagens" },
    { label: "Favoritos",       icon: <HeartIcon />,    path: "/favoritos" },
    { label: "Adicionar receita", icon: <PlusIcon />,   path: "/receita/nova" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo" onClick={() => navigate("/home")}>
        <div className="sidebar-logo-icon">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" fill="#BA7517" opacity="0.15" />
            <path d="M20 8 C14 8 10 13 10 18 C10 24 15 28 20 32 C25 28 30 24 30 18 C30 13 26 8 20 8Z"
              fill="#BA7517" opacity="0.7" />
            <circle cx="20" cy="18" r="5" fill="#BA7517" />
          </svg>
        </div>
        <div className="sidebar-logo-text">
          <span className="sidebar-brand">Sabor</span>
          <span className="sidebar-brand-sub">da Família</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {links.map(({ label, icon, path }) => (
          <button
            key={path}
            className={`sidebar-link ${window.location.pathname === path ? "active" : ""}`}
            onClick={() => navigate(path)}
          >
            {icon}
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <button className="sidebar-link" onClick={() => navigate(`/perfil/${perfil?.id}`)}>
          {perfil?.detalhes?.fotoPerfilUrl ? (
            <img src={perfil.detalhes.fotoPerfilUrl} className="sidebar-avatar" alt="avatar" />
          ) : (
            <UserIcon />
          )}
          <span>Perfil</span>
        </button>
        <button className="sidebar-link" onClick={() => navigate("/configuracoes")}>
          <SettingsIcon />
          <span>Configurações</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
