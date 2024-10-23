import { useUser } from "../../hooks/useUser";
import {
  commenceVote,
  getCandidates,
  getCities,
  getUserDetail,
} from "../../services/firebase";
import View from "./view";
import React, { useEffect, useState } from "react";

export interface ICandidates {
  name: string;
  img: string;
  voteCount: number;
}

const VotePage = () => {
  const [candidates, setCandidates] = useState<ICandidates[]>([]);
  const [voteStatus, setVoteStatus] = useState(false);
  const [voteLoading, setLoading] = useState(false);

  const { getUserId } = useUser();

  const fetchData = async () => {
    const data = await getCandidates();
    var datas: ICandidates[] = [];
    const id = getUserId();
    if (id) {
      const users = await getUserDetail(id);
      setVoteStatus(users?.data().voteStatus ?? false);
    }
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

  return (
    <View
      listCandidates={candidates}
      voteStatus={voteStatus}
      onRevote={() => {
        setVoteStatus(false);
      }}
      isLoading={voteLoading}
      onVote={async (e) => {
        const id = getUserId();
        if (id) {
          const users = await getUserDetail(id);
          if (users) {
            setLoading(true)
            console.log(users?.data(),e);
            await commenceVote(users?.data().uid, e);
            setVoteStatus(true);
            setLoading(false);
          }
        }
      }}
    />
  );
};

export default VotePage;
