"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Navbar } from "@/components/ReusableComponents/Navbar";
import { Footer } from "@/components/ReusableComponents/Footer";
import useFetchCompany from "@/hooks/companyHooks/useFetchCompany";
import { InputForm } from "@/components/Input";
import useFetchComments from "@/hooks/commentHooks/useFetchComments";
import CommentItem from "@/components/ReusableComponents/Comment";
import { Comment } from "@prisma/client";
import UpvoteButton from "@/components/UpvoteButton";
import { useSession } from "next-auth/react";

interface CommentWithUser extends Comment {
  User: {
    name: string;
    image: string;
  };
}

function page({ params }: { params: { id: string } }) {
  const { data: session } = useSession();
  const { data } = useFetchCompany(params.id);
  const {
    data: comments,
    error: commentError,
    isLoading: commentLoading,
  } = useFetchComments(params.id) as {
    data: CommentWithUser[];
    error: any;
    isLoading: boolean;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        {data && data.length > 0 ? (
          <div className="min-h-screen bg-gray-100 p-16">
            <div className="mx-auto max-w-6xl">
              <h1 className="mb-6 p-5 text-4xl font-bold text-[#3B49DF]">
                Our Services / Start-ups
              </h1>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-md md:col-span-2">
                  <div className="flex">
                    <p>{data[0].description}</p>
                    <div className="p-4">
                      {" "}
                      <UpvoteButton
                        data={data[0]}
                        uid={session?.user.id ?? ""}
                      />
                    </div>
                  </div>

                  <h2 className="mb-4 mt-6 text-xl font-semibold text-blue-800">
                    Comments:
                  </h2>
                  <div className="space-y-4">
                    {comments?.map((comment: CommentWithUser, i: number) => (
                      <CommentItem
                        key={i}
                        content={comment.content}
                        user={{
                          name: comment.User.name,
                          image: comment.User.image,
                        }}
                      />
                    ))}
                  </div>

                  <div className="mt-5">
                    <InputForm companyId={params.id} />
                  </div>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <img
                    alt="Profile portrait"
                    className="mb-4 rounded-lg"
                    height="300"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "300/300",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                  <p className="text-center">Alex Nguyen</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative bottom-0 min-h-screen"></div>
        )}

        <div className="relative bottom-0">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default page;

{
}
