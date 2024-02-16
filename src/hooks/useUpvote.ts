import axios from "axios";
import { useMutation } from "react-query";

function useUpvote(id: string) {
  const handleUpvote = async () => {
    const { data } = await axios.post(`/api/company/update?id=${id}}`);
    return data;
  };

  const { data, error, isLoading, mutateAsync } = useMutation({
    mutationFn: handleUpvote,
    onSuccess: () => {
      console.log("Upvoted successfully");
    },
  });

  return { data, error, isLoading, mutateAsync };
}

export default useUpvote;
