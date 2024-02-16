import { CompanyProps } from "@/types/CompanyProps";
import axios from "axios";
import { useQuery } from "react-query";

const useFetchCompany = (id?: string) => {
  const fetchCompany = async () => {
    if (id) {
      const { data } = await axios.get(`/api/company?id=${id}`);
      return data;
    }
    const { data } = await axios.get(`/api/company`);
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["company"],
    queryFn: fetchCompany,
  });

  const categoryKeys = [
    ...new Set(data?.map((company: CompanyProps) => company.category)),
  ];

  return { data, categoryKeys, error, isLoading };
};

export default useFetchCompany;
