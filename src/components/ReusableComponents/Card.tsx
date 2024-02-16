import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Company } from "@prisma/client";
import Image from "next/image";
import { Button } from "../ui/button";
import useUpvote from "@/hooks/useUpvote";
import { useSession } from "next-auth/react";
import { ArrowUpSquareIcon } from "lucide-react";
import useFetchCompany from "@/hooks/useFetchCompany";
import Link from "next/link";

export default function Card({ data }: { data: Company }) {
  const { data: session } = useSession();
  const {
    mutateAsync,
    isLoading,
    data: upvoteData,
  } = useUpvote(data.id, session?.user.id as string);
  const {
    data: companies,
    error,
    isLoading: isCompanyLoading,
  } = useFetchCompany(data.id);
  console.log(companies);

  return (
    <div className=" mx-auto my-10 max-w-4xl rounded-lg border bg-white p-4 shadow-md ">
      {data && (
        <div className="flex w-full">
          <Avatar>
            <AvatarImage
              alt="Profile picture"
              src="/placeholder.svg?height=40&width=40"
            />
            <AvatarFallback>TC</AvatarFallback>
          </Avatar>
          <Link href={"/startup/" + data.id}>
            <div className="ml-3">
              <p className="text-sm font-semibold text-gray-900">
                {(data as { name: string }).name}
              </p>
              <p className="text-xs text-gray-500">{data.description}</p>
            </div>
          </Link>
          <button
            onClick={() => mutateAsync()}
            className="flex flex-col items-center justify-center"
          >
            <ArrowUpSquareIcon
              color={
                data.upvotes.includes(session?.user.id as string)
                  ? "white"
                  : "#3B49DF"
              }
              fill={
                data.upvotes.includes(session?.user.id as string)
                  ? "#3B49DF"
                  : "white"
              }
            />
            {data.increment}
          </button>
        </div>
      )}
    </div>
  );
}
