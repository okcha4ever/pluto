import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { type CompanyProps } from "@/types/CompanyProps";
import { Company } from "@prisma/client";

export default function Card({ data }: { data: Company }) {
  return (
    <div className=" mx-auto my-10 rounded-lg border bg-white p-4 shadow-md">
      {data && (
        <div className="flex w-full">
          <Avatar>
            <AvatarImage
              alt="Profile picture"
              src="/placeholder.svg?height=40&width=40"
            />
            <AvatarFallback>TC</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <p className="text-sm font-semibold text-gray-900">
              {(data as { name: string }).name}
            </p>
            <p className="text-xs text-gray-500">{data.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
