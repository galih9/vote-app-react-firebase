import { getUsersVote } from "@services/firebase";
import View from "./view";
import { useEffect, useState } from "react";
import { IVoter } from "@interface/vote";

const VoterStatusPage = () => {
  const [candidates, setCandidates] = useState<IVoter[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
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
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <View listVoter={candidates} isLoading={isLoading} />;
};

export default VoterStatusPage;
