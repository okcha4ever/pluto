import axios from "axios";
import { useMutation } from "react-query";
import { queryClient } from "@/providers/MyReactQueryProvider";
import type { Company } from "@prisma/client";
function useUpvote(id: string, userId: string) {
  const handleUpvote = async () => {
    const { data }: { data: Company } = await axios.patch(
      `/api/company/update?id=${id}`,
      {
        userId,
      },
    );
    return data;
  };

  const { data, error, isLoading, mutateAsync } = useMutation({
    mutationFn: handleUpvote, 
    onSuccess: async () => {
      await queryClient.invalidateQueries("company");
    },
  });

  return { data, error, isLoading, mutateAsync };
}

export default useUpvote;
