import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function CommentItem({
  content,
  user,
}: {
  content: string;
  user: {
    name: string;
    image: string;
  };
}) {
  return (
    <div className="flex flex-col items-start space-y-3 rounded-xl border-[1px] border-gray-200 p-3">
      <div className="inline-flex w-full items-center justify-start space-x-2">
        <Avatar>
          <AvatarImage
            className="h-12 w-12 rounded-full object-cover"
            alt="User avatar"
            src={user.image}
          />
        </Avatar>
        <p className="p-5 font-semibold">{user.name}</p>
      </div>
      <p className="text-sm">{content}</p>
    </div>
  );
}
