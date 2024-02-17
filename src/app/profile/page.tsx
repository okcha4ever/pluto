"use client";
import { Footer } from "@/components/ReusableComponents/Footer";
import { Navbar } from "@/components/ReusableComponents/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useFetchCompany from "@/hooks/companyHooks/useFetchCompany";

function page() {
  const { data } = useFetchCompany();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8">
        {data && data.length > 0 && (
          <div className="container mx-auto max-w-5xl">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="md:flex md:items-center md:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center">
                    <Avatar>
                      <AvatarImage
                        alt="Profile picture"
                        src={data[0].ceo.image}
                      />
                      <AvatarFallback>TC</AvatarFallback>
                    </Avatar>
                    <div className="ml-5">
                      <h2 className="text-2xl font-bold leading-7 text-[#2c54ea] sm:truncate sm:text-3xl">
                        {""} {data[0].ceo.name}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-2">
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <h3 className="text-2xl font-medium leading-6 text-gray-900">
                    About me
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {data[0].ceo.name}
                    <br />
                    Age: 29
                    <br />
                    Location: Seattle, WA
                    <br />
                  </p>
                </div>
                <div className="mt-6 rounded-lg bg-white p-6 shadow-lg">
                  <h3 className="text-2xl font-medium leading-6 text-gray-900">
                    Launch
                  </h3>
                </div>
              </div>

              <div className="mt-8 md:mt-0">
                <div className="rounded-lg bg-white p-6 shadow-lg">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Latest comments
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default page;
