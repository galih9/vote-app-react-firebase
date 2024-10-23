import toast from "react-hot-toast";
import { getPublishStatus, setPublishStatus } from "../../../services/firebase";
import View from "./view";
import React, { useEffect, useState } from "react";

export interface IVoter {
  name: string;
  email: string;
  voteStatus: boolean;
}

const SettingsPage = () => {
  const [candidates, setCandidates] = useState<IVoter[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isPublished, setPublished] = useState<boolean>(false);

  const fetchData = async () => {
    const stat = await getPublishStatus();
    setPublished(stat);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View
      listVoter={candidates}
      isLoading={isLoading}
      isPublished={isPublished}
      setPublished={async () => {
        setLoading(true);
        await setPublishStatus(!isPublished);
        toast.success("Published");
        setLoading(false);
        setPublished(!isPublished);
      }}
    />
  );
};

export default SettingsPage;
