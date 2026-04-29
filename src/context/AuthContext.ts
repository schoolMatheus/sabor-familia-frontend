import { createContext} from "react";
import type { PerfilResponse } from "../dto/perfil/response/PerfilResponse";

export interface AuthContextData {
  usuarioId: number | null;
  perfil: PerfilResponse | null;
  salvarAuth: (perfil: PerfilResponse) => void;
  limparAuth: () => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);
