"use client";
import { Navbar } from "@/components/ReusableComponents/Navbar";
import { Button } from "@/components/ui/button";
import Card from "../../components/ReusableComponents/Card";
import { Footer } from "@/components/ReusableComponents/Footer";
import useFetchCompany from "@/hooks/companyHooks/useFetchCompany";
import { Company } from "@prisma/client";

function Page() {
  const { data, categoryKeys, isLoading, error } = useFetchCompany();

  return (
    <div className="w-min-[100vh]">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-blue-600">
          Upvote for the best
        </h1>
        <div className="border-b border-gray-200 py-2"></div>
        <div className="mt-4">
          {categoryKeys.length > 0 && (
            <>
              <span className="text-lg font-semibold">Categories:</span>
              <div className="mt-2 flex space-x-2">
                {(categoryKeys as string[]).map(
                  (category: string, i: number) => (
                    <Button
                      key={i}
                      className="bg-gray-200 text-gray-700 hover:text-white"
                    >
                      {category}
                    </Button>
                  ),
                )}
              </div>
            </>
          )}
        </div>
      </div>
      {data?.map((company: Company, i: number) => (
        <Card key={i} data={company as Company} />
      ))}
      <Footer />
    </div>
  );
}

export default Page;
