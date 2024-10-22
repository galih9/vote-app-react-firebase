import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { useSessionStorage } from "./useSessionStorage";
import { UserType } from "../types/auth";

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItemSession } = useSessionStorage();

  const getUserName = (): string | null => {
    const item = sessionStorage.getItem("user");
    if (item) {
      const data = JSON.parse(item);
      return data.name;
    } else {
      return null;
    }
  };

  const getUserId = (): string | null => {
    const item = sessionStorage.getItem("user");
    if (item) {
      const data = JSON.parse(item);
      return data.userId;
    } else {
      return null;
    }
  };

  const addUser = (user: UserType) => {
    setUser(user);
    if (sessionStorage.getItem("user")) {
      setItemSession("user", "");
    } else {
      setItemSession("user", JSON.stringify(user));
    }
  };

  const removeUser = () => {
    setUser(null);
    if (sessionStorage.getItem("user")) {
      setItemSession("user", "");
    }
  };

  return { user, addUser, removeUser, getUserName, getUserId };
};
