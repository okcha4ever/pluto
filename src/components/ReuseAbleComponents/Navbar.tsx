import { Input } from "@/components/ui/input";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { FlagIcon, MenuIcon, MicroscopeIcon } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="bg-[#3b49df] p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="Pluto"
            width={100}
            height={100}
            layout="fixed"
          />{" "}
        </div>
        <div className="mx-4 flex-1">
          <div className="relative">
            <Input
              className="w-full rounded-full pl-10 pr-10"
              placeholder="Search for anything"
              type="search"
            />
            <MicroscopeIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-500" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage
              alt="User avatar"
              src="/placeholder.svg?height=32&width=32"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <MenuIcon className="h-6 w-6 text-white" />
        </div>
      </div>
    </nav>
  );
}
