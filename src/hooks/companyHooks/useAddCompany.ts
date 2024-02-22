import type { CompanyProps } from "@/types/CompanyProps";
import axios from "axios";
import { useMutation } from "react-query";

const UseAddCompany = (postData: CompanyProps) => {
  const addCompany = async () => {
    const { data }: { data: CompanyProps } = await axios.post("/api/company", postData);
    return data;
  };

  const { data, error, isLoading, mutateAsync } = useMutation({
    mutationFn: addCompany,
  });

  return { data, error, isLoading, mutateAsync };
};

export default UseAddCompany;
