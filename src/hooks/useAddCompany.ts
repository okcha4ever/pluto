import { CompanyProps } from "@/types/Card";
import axios from "axios";
import { useMutation } from "react-query";

const useAddCompany = (postData: CompanyProps) => {
  const addCompany = async () => {
    const { data } = await axios.post("/api/company", postData);
    return data;
  };

  const { data, error, isLoading, mutateAsync } = useMutation({
    mutationFn: addCompany,
    onSuccess: () => {
      console.log("Company added successfully");
    },
  });

  return { data, error, isLoading, mutateAsync };
};

export default useAddCompany;
