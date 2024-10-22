import { useNavigate } from "react-router-dom";
import { getCities } from "../../firebase";
import View from "./view";
import React, { useEffect, useState } from "react";

const LoginPage = () => {
  const [city, setCity] = useState<string[]>([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const data = await getCities();
    var datas: string[] = [];
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      datas.push(element.name);
    }
    setCity(datas);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogin = () => {
    navigate("/vote");
  };

  return <View listCity={city} onLogin={handleLogin} />;
};

export default LoginPage;
