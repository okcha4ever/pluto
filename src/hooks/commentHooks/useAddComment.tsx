import axios from "axios";
import { useMutation } from "react-query";

export const useAddComment = () => {
  const handleAddComment = async ({
    companyId,
    userId,
    content,
  }: {
    companyId: string;
    userId: string;
    content: string;
  }) => {
    const { data } = await axios.post(`/api/comment/add?id=${companyId}`, {
      companyId,
      userId,
      content,
    });
    return data;
  };

  return useMutation(handleAddComment, {
    onSuccess: () => {
    },
  });
};
