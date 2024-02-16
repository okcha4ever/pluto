import axios from "axios";
import { useMutation } from "react-query";
import { queryClient } from "@/providers/MyReactQueryProvider"
function useUpvote(id: string, userId: string) {
  const handleUpvote = async () => {
    const { data } = await axios.patch(`/api/company/update?id=${id}`, {
      userId,
    });
    return data;
  };

  const { data, error, isLoading, mutateAsync } = useMutation({
    mutationFn: handleUpvote,
    onSuccess: () => {
      console.log("Upvoted successfully")
      queryClient.invalidateQueries("company");
    },
  });

  return { data, error, isLoading, mutateAsync };
}

export default useUpvote;
