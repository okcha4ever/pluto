"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Upload from "@/components/ReusableComponents/Upload";
import useAddCompany from "@/hooks/companyHooks/useAddCompany";
import { CompanyProps } from "@/types/CompanyProps";

interface Inputs extends Omit<CompanyProps, "id"> {
  image: any;
}

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [imageData, setImageData] = useState<string>("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    if (status !== "loading" && !session) router.replace("/");
  }, [session, router, status]);

  useEffect(() => {
    if (session?.user?.id) {
      setValue("ceoId", session.user.id);
    }
  }, [session, setValue]);

  if (status === "loading") return <div>Loading...</div>;

  const onSubmit = async (data: Inputs) => {
    const companyData: CompanyProps = {
      name: data.name,
      description: data.description,
      type: data.type,
      category: data.category,
      ceoId: data.ceoId,
      image: imageData ? imageData : "",
    };

    try {
       useAddCompany(companyData);

      router.push("/upvote");
    } catch (error) {
      console.error("Failed to add company:", error);
    }
  };

  const handleImageSelect = (base64: string) => {
    setImageData(base64);
  };

  const handleImageRemove = (error: string) => {
    console.error(error);
    setImageData("");
  };

  return (
    <div className="mx-auto my-12 max-w-lg rounded-lg bg-white p-6 shadow-lg">
      <div className="mx-auto my-12 max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <h1 className="text-center text-4xl font-bold text-blue-800">
          Welcome Investor
        </h1>
        <div className="mt-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 grid grid-cols-1 gap-y-4"
          >
            <div>
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <Input
                id="name"
                placeholder="eg: StartUp title"
                {...register("name")}
              />
            </div>
            <div>
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="description"
              >
                Description
              </label>
              <Input
                id="description"
                placeholder="Tell us about you!"
                {...register("description")}
              />
            </div>
            <div>
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="category"
              >
                Category
              </label>
              <Input
                id="Category"
                placeholder="eg: Technology, Health, etc."
                {...register("category")}
              />
            </div>
            <div>
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="type"
              >
                Type of Company
              </label>
              <Input
                id="type"
                placeholder="eg: LLC, Corporation, etc."
                {...register("type")}
                {...register("type")}
              />
            </div>{" "}
            <Upload onSelect={handleImageSelect} onRemove={handleImageRemove} />
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>{" "}
    </div>
  );
}
