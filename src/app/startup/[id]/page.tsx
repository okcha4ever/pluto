"use client";
import { Navbar } from "@/components/ReusableComponents/Navbar";
import { Footer } from "@/components/ReusableComponents/Footer";
import useFetchCompany from "@/hooks/companyHooks/useFetchCompany";
import { InputForm } from "@/components/Input";
import useFetchComments from "@/hooks/commentHooks/useFetchComments";
import CommentItem from "@/components/ReusableComponents/Comment";
import type { Comment, User } from "@prisma/client";
import UpvoteButton from "@/components/UpvoteButton";
import { useSession } from "next-auth/react";
import Image from "next/image";

type ExtendedComment = Comment & {
  user: User;
};

function Page({ params }: { params: { id: string } }) {
  const { data: session } = useSession();
  const { data } = useFetchCompany(params.id);
  const { data: comments } = useFetchComments(params.id);

  if (!data) {
    return <div className="relative bottom-0 min-h-screen"></div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {
          <div className="min-h-screen bg-gray-100 p-16">
            <div className="mx-auto max-w-6xl">
              <h1 className="mb-6 p-5 text-4xl font-bold text-[#3B49DF]">
                Our Services / Start-ups
              </h1>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-md md:col-span-2">
                  <div className="flex ">
                    <Image
                      alt="Profile portrait"
                      className="mb-4 rounded-lg"
                      width="120"
                      height="120"
                      src={data[0]?.ceo.image ?? ""}
                      style={{
                        aspectRatio: "120/120",
                        objectFit: "cover",
                      }}
                    />
                    <ul>
                      <li className="flex p-2">
                        <label className="mr-2">Fullname:</label>
                        <p className="text-center">{data[0]?.ceo.name}</p>
                      </li>
                      <li className="flex p-2">
                        <label className="mr-2">Email: </label>
                        <p className="text-center"> {data[0]?.ceo.email}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="flex">
                    <p>{data[0]?.description}</p>
                    <div className="p-4">
                      {data[0] && (
                        <UpvoteButton
                          data={data[0]}
                          uid={session?.user.id ?? ""}
                        />
                      )}
                    </div>
                  </div>

                  <h2 className="mb-4 mt-6 text-xl font-semibold text-blue-800">
                    Comments:
                  </h2>
                  <div className="space-y-4">
                    {Array.isArray(comments) &&
                      comments.map((comment: ExtendedComment, i: number) => (
                        <CommentItem
                          key={i}
                          content={comment.content}
                          user={{
                            name: comment.user.name ?? "",
                            image: comment.user.image ?? "",
                          }}
                        />
                      ))}
                  </div>

                  <div className="mt-5">
                    <InputForm companyId={params.id} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

        <div className="relative bottom-0">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Page;
