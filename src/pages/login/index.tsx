import { useNavigate } from "react-router-dom";
import { logInWithEmailAndPassword } from "@services/firebase";
import View from "./view";
import { useState } from "react";
import { useAuth } from "@hooks/useAuth";
import { ILogin } from "@interface/auth";

const LoginPage = () => {
  const [form, setForm] = useState<ILogin>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useAuth();

  const handleLogin = async () => {
    setIsLoading(true);

    await logInWithEmailAndPassword(form.email, form.password).then((v) => {
      if (v) {
        const userData = {
          userId: v.uid || "",
          name: v.displayName || "",
          email: v.email || "",
        };
        login(userData);
        navigate("/vote");
      }
    });
    setIsLoading(false);
  };

  return (
    <View
      form={form}
      setForm={setForm}
      isLoading={isLoading}
      onLogin={handleLogin}
      onRegister={() => {
        navigate("/registration");
      }}
    />
  );
};

export default LoginPage;
