import { useState } from "react";
import { AuthContext } from "./AuthContext";
import type { PerfilResponse } from "../dto/perfil/response/PerfilResponse";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [usuarioId, setUsuarioId] = useState<number | null>(null);
  const [perfil, setPerfil] = useState<PerfilResponse | null>(null);

  const salvarAuth = (perfil: PerfilResponse) => {
    setUsuarioId(perfil.usuarioId);
    setPerfil(perfil);
  };

  const limparAuth = () => {
    setUsuarioId(null);
    setPerfil(null);
  };

  return (
    <AuthContext.Provider value={{ usuarioId, perfil, salvarAuth, limparAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
