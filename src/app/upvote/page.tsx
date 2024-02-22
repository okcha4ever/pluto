"use client";
import { Navbar } from "@/components/ReusableComponents/Navbar";
import { Button } from "@/components/ui/button";
import Card from "../../components/ReusableComponents/Card";
import { Footer } from "@/components/ReusableComponents/Footer";
import useFetchCompany from "@/hooks/companyHooks/useFetchCompany";
import { type Company } from "@prisma/client";
import Link from "next/link";

function Page() {
  const {
    data,
    categoryKeys,
  }: {
    data: Company[] | undefined;
    categoryKeys: string[] | undefined;
  } = useFetchCompany();

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <div className="mx-auto max-w-4xl px-4 py-8">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-blue-600">
            Upvote for the best
          </h1>
          <div className="border-b border-gray-200 py-2"></div>
          <div className="mt-4">
            <span className="text-lg font-semibold">Categories:</span>
            <div className="mt-2 flex items-center justify-between space-x-2">
              {categoryKeys ? (
                categoryKeys.map((category: string, i: number) => (
                  <Button
                    key={i}
                    className="bg-gray-200 text-gray-700 hover:text-white"
                  >
                    {category}
                  </Button>
                ))
              ) : (
                <div className="text-gray-500">Loading...</div>
              )}
              <Link
                className="rounded-xl bg-[#2c54ea] p-2 text-white hover:bg-gray-200 hover:text-black "
                href="/publish"
              >
                Publish
              </Link>
            </div>
          </div>
        </div>
        {data?.map((company: Company, i: number) => (
          <Card key={i} data={company} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Page;
