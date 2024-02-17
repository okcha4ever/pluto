import useUpvote from "@/hooks/upvoteHooks/useUpvote";
import { Company } from "@prisma/client";
import { ArrowUpSquareIcon } from "lucide-react";
import React from "react";

function UpvoteButton({
  data,

  uid,
}: {
  data: Company;
  uid: string;
}) {
  const {
    mutateAsync,
    isLoading,
    data: upvoteData,
  } = useUpvote(data.id, uid as string);

  return (
    <button
      onClick={() => mutateAsync()}
      className="flex flex-col items-center justify-center"
    >
      <ArrowUpSquareIcon
        color={data.upvotes.includes(uid as string) ? "white" : "#3B49DF"}
        fill={data.upvotes.includes(uid as string) ? "#3B49DF" : "white"}
      />
      {data.increment}
    </button>
  );
}

export default UpvoteButton;
