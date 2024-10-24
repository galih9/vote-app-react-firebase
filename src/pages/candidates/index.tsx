import { getCandidates } from "@services/firebase";
import View from "./view";
import { useEffect, useState } from "react";
import { ICandidates } from "@interface/vote";

const CandidatesPage = () => {
  const [candidates, setCandidates] = useState<ICandidates[]>([]);

  const fetchData = async () => {
    const data = await getCandidates();
    var datas: ICandidates[] = [];
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      datas.push({
        name: element.name ?? "-",
        img: element.img ?? "-",
        voteCount: element.voteCount ?? 0,
      });
    }
    setCandidates(datas);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <View listCandidates={candidates} />;
};

export default CandidatesPage;
