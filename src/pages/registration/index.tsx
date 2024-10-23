import { useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "@services/firebase";
import View from "./view";
import { useState } from "react";
import { useAuth } from "@hooks/useAuth";
import { IRegister } from "@interface/auth";

const RegistrationPage = () => {
  const [form, setForm] = useState<IRegister>({
    name: "",
    password: "",
    email: "",
    password2: "",
  });
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    setIsRegister(true);
    const user = await registerWithEmailAndPassword(
      form.name,
      form.email,
      form.password
    );
    if (user != null) {
      login({
        userId: user.uid ?? "",
        name: user.displayName ?? "",
        email: user.email ?? "",
        voteStatus: null,
      });
      navigate("/vote");
    }
  };

  return (
    <View
      form={form}
      setForm={setForm}
      onLogin={handleLogin}
      onRegister={() => {
        navigate(-1);
      }}
      isRegister={isRegister}
    />
  );
};

export default RegistrationPage;
