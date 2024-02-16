import axios from "axios";
import { useMutation } from "react-query";

export const useAddComment = (postId: string) => {
  const handleAddComment = async (comment: string) => {
    const { data } = await axios.post(`/api/comment/add`, {
      postId,
      comment,
    });
    return data;
  };

  const { data, error, isLoading, mutateAsync } = useMutation({
    mutationFn: handleAddComment,
    onSuccess: () => {
      console.log("Comment added successfully");
    },
  });
  return { data, error, isLoading, mutateAsync };
};
