import axios from "axios";
import { useMutation } from "react-query";

export const useDeleteComment = () => {
  const handleDeleteComment = async () => {
    const { data }: { data: string } =
      await axios.delete(`/api/comment/delete`);
    return data;
  };
  const { data, error, isLoading, mutateAsync } = useMutation({
    mutationFn: handleDeleteComment,
    //onSuccess: () => {},
  });
  return { data, error, isLoading, mutateAsync };
};
