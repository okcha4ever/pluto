import type { Company } from "@prisma/client";
import axios from "axios";
import { useQuery } from "react-query";

const useFetchCompany = () => {
  const fetchCompany = async () => {
    const { data }: { data: Company[] } = await axios.get("/api/company");
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["company"],
    queryFn: fetchCompany,
  });

  return { data, error, isLoading };
};

export default useFetchCompany;
