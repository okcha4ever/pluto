import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { CompanyProps } from "@/types/Card";

export default function Card({ data }: { data: CompanyProps }) {
  return (
    <div className=" mx-auto my-10 rounded-lg border bg-white p-4 shadow-md">
      {/* Check if dataData is available before rendering */}
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