import axios from "axios";
import { useMutation } from "react-query";

const useDeleteCompany = async (id: string) => {
  const handleData = async () => {
    const { data } = await axios.delete(`/api/company/delete?id=${id}`);
    return data;
  };

  const { data, error, isLoading, mutateAsync } = useMutation({
    mutationFn: handleData,
    onSuccess: () => {
    },
  });

  return { data, error, isLoading, mutateAsync };
};

export default useDeleteCompany;
