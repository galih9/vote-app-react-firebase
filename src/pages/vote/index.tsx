import { useUser } from "@hooks/useUser";
import {
  commenceVote,
  getCandidates,
  getPublishStatus,
  getUserDetail,
} from "@services/firebase";
import View from "./view";
import { useEffect, useState } from "react";
import { ICandidates } from "@interface/vote";

const VotePage = () => {
  const [candidates, setCandidates] = useState<ICandidates[]>([]);
  const [voteStatus, setVoteStatus] = useState(false);
  const [voteLoading, setLoading] = useState(false);
  const [published, setPublished] = useState(false);

  const { getUserId } = useUser();

  const fetchData = async () => {
    const stat = await getPublishStatus();
    setPublished(stat);
    console.log(stat);
    if (!stat) {
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
    } else {
      setVoteStatus(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View
      published={published}
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
            setLoading(true);
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
