import {
  getCandidates,
  getCities,
  getUsersVote,
} from "../../services/firebase";
import View from "./view";
import React, { useEffect, useState } from "react";

export interface IVoter {
  name: string;
  email: string;
  voteStatus: boolean;
}

const VoterStatusPage = () => {
  const [candidates, setCandidates] = useState<IVoter[]>([]);

  const fetchData = async () => {
    const data = await getUsersVote();
    var datas: IVoter[] = [];
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      datas.push({
        name: element.name ?? "-",
        email: element.email ?? "-",
        voteStatus: element.voteStatus ?? false,
      });
    }
    setCandidates(datas);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <View listVoter={candidates} />;
};

export default VoterStatusPage;
