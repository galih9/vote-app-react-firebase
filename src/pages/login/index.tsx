import { getCities } from "../../firebase";
import View from "./view";
import React, { useEffect, useState } from "react";

const LoginPage = () => {
  const [city, setCity] = useState<string[]>([]);

  const fetchData = async () => {
    const data  = await getCities();
    var datas: string[] = [];
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        datas.push(element.name);
    }
    setCity(datas)
  }

  useEffect(() => {
    fetchData();
  },[])

  return <View listCity={city} />;
};

export default LoginPage;
