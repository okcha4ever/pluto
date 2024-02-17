import axios from "axios";
import { useMutation } from "react-query";

export const useDeleteComment = () => {
  const handleDeleteComment = async (id: string) => {
    const { data } = await axios.delete(`/api/comment/delete?id=${id}`);
    return data;
  };
  const { data, error, isLoading, mutateAsync } = useMutation({
    mutationFn: handleDeleteComment,
    onSuccess: () => {
    },
  });
  return { data, error, isLoading, mutateAsync };
};
