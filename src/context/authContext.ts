import { createContext } from "react";
import { UserType } from "../types/auth";

interface AuthContext {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
});