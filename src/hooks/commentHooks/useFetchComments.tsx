import type { Comment } from "@prisma/client";
import axios from "axios";
import { useQuery } from "react-query";

const useFetchComments = (id: string) => {
  const fetchComments = async () => {
    const { data }: { data: Comment } = await axios.get(
      `/api/comment?id=${id}`,
    );
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["comment"],
    queryFn: fetchComments,
  });

  return { data, error, isLoading };
};

export default useFetchComments;
