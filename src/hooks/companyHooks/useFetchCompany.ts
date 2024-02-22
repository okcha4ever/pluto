import type { Company, User } from "@prisma/client";
import axios from "axios";
import { useQuery } from "react-query";

type ExtendedCompany = Company & {
  ceo: User;
};

const useFetchCompany = (id?: string) => {
  const fetchCompany = async () => {
    if (id) {
      //tried multiple times to fix this but it's not working end up with this messy code
      const { data }: { data: ExtendedCompany[] } = await axios.get(
        `/api/company?id=${id}`,
      );
      return data;
    }
    const { data }: { data: ExtendedCompany[] } = await axios.get(`/api/company`);
    return data;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["company"],
    queryFn: fetchCompany,
  });

  const categoryKeys = Array.isArray(data)
    ? [...new Set(data.flatMap((company: Company) => company.category))]
    : undefined;

  return { data, categoryKeys, error, isLoading };
};

export default useFetchCompany;
