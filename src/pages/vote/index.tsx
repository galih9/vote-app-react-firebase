import { getCandidates, getCities } from "../../firebase";
import View from "./view";
import React, { useEffect, useState } from "react";

export interface ICandidates {
  name: string;
  img: string;
  voteCount: number;
}

const VotePage = () => {
  const [candidates, setCandidates] = useState<ICandidates[]>([]);

  const fetchData = async () => {
    const data = await getCandidates();
    var datas: ICandidates[] = [];
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      datas.push({
        name: element.name,
        img: element.img,
        voteCount: element.voteCount,
      });
    }
    setCandidates(datas);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <View listCandidates={candidates} />;
};

export default VotePage;
