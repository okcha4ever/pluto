import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { type Company } from "@prisma/client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import UpvoteButton from "../UpvoteButton";

export default function Card({ data }: { data: Company }) {
  const { data: session } = useSession();

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
          <UpvoteButton data={data} uid={session?.user.id ?? ""} />
        </div>
      )}
    </div>
  );
}
