"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Chrome, MenuIcon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";

export function Hero() {
  const { data: session } = useSession();
  console.log(session?.user.occupation);
  return (
    <section className="bg-[#2c54ea] text-white">
      <div className="absolute right-32 top-[230px] z-0">
        <Image
          src={"/assets/galaxy.svg"}
          height={120}
          width={120}
          alt="galaxy"
        />
      </div>
      <div className="absolute left-28 top-[170px] z-0">
        <Image
          src={"/assets/palnet.svg"}
          height={100}
          width={100}
          alt="galaxy"
        />
      </div>
      <nav className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold">
            <Image
              src="/assets/logo.png"
              alt="Pluto"
              width={100}
              height={100}
              layout="fixed"
            />
          </span>
        </div>
        <div className="hidden space-x-6 md:flex">
          <Link className="hover:underline" href="#">
            Home
          </Link>
          <Link className="hover:underline" href="#">
            Service
          </Link>
          <Link className="hover:underline" href="#">
            Invest
          </Link>
          <Link className="hover:underline" href="#">
            Contact
          </Link>
        </div>
        <Button
          onClick={() => signIn("google")}
          className="hidden rounded-3xl bg-white text-black hover:bg-slate-300 md:block"
        >
          Get Started
        </Button>
        <div className="md:hidden">
          <MenuIcon className="h-6 w-6" />
        </div>
      </nav>
      <div className="container mx-auto px-4 py-10 text-center">
        <h1 className="mb-6 text-5xl font-bold leading-tight">
          Pluto, Future of Startups.
        </h1>
        <p className="text-md z-50 mb-8">
          Transforming visions into achievements in our universe of
          opportunities.
        </p>
        <div className="flex justify-center space-x-4">
          <Button
            onClick={() => signIn("google")}
            className="flex items-center space-x-2 rounded-3xl bg-white text-[#2c54ea] hover:bg-slate-300"
          >
            <Chrome className="h-4 w-4" />
            <span className="text-black">Sign Up with Google</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
