"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Navbar } from "@/components/ReusableComponents/Navbar";
import { Footer } from "@/components/ReusableComponents/Footer";
import useFetchCompany from "@/hooks/useFetchCompany";

const cardData = [
  {
    title: "Hypertext Markup Language",
    imgSrc: "https://picsum.photos/200/300",
    badgeText: "5.0",
  },
  {
    title: "Hypertext Markup Language",
    imgSrc: "https://picsum.photos/200/300",
    badgeText: "5.0",
  },
  {
    title: "Hypertext Markup Language",
    imgSrc: "https://picsum.photos/200/300",
    badgeText: "5.0",
  },
];

const commentsData = [
  {
    username: "@user1",
    avatarSrc: "/placeholder.svg?height=40&width=40",
    commentText:
      "Great work on the new feature, Emily! Can't wait to get started using it. Looking forward to your next update!",
  },
  {
    username: "@user2",
    avatarSrc: "/placeholder.svg?height=40&width=40",
    commentText: "Very helpful, as always.",
  },
];

function page({ params }: { params: { id: string } }) {
  const { data, error, isLoading } = useFetchCompany(params.id);
  console.log(data);

  return (
    <>
      <Navbar />

      <div className="min-h-[100vh]">
        {data && (
          <div className="min-h-screen bg-gray-100 p-16">
            <div className="mx-auto max-w-6xl">
              <h1 className="mb-6 p-5 text-4xl font-bold text-[#3B49DF]">
                Our Services / Start-ups
              </h1>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-white p-6 shadow-md md:col-span-2">
                  <div className="mb-4 flex items-center justify-start space-x-4">
                    <Avatar>
                      <AvatarImage
                        alt="Profile picture"
                        src={data[0].ceo.image}
                      />
                      <AvatarFallback>AN</AvatarFallback>
                    </Avatar>
                    <p>{data[0].name}</p>
                  </div>

                  <div className="flex">
                    <p>{data[0].description}</p>
                  </div>

                  <div className="space-y-2"></div>
                  <h2 className="mb-4 mt-6 text-xl font-semibold text-blue-800">
                    Comments:
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg bg-gray-200 p-4">
                      <div className="flex flex-col items-center space-y-3">
                        <div className="inline-flex w-full items-center justify-start space-x-2">
                          <Avatar>
                            <AvatarImage
                              alt="User avatar"
                              src="/placeholder.svg?height=40&width=40"
                            />
                            <AvatarFallback>ST</AvatarFallback>
                          </Avatar>
                          <p className="font-semibold">Saint Tata</p>
                        </div>
                        <p className="text-sm">
                          Their portfolio showcases a diverse range of projects,
                          from sleek tech startup branding to socially conscious
                          design initiatives. What sets Alex apart is their
                          ability to infuse modern aesthetics with a touch of
                          raw authenticity, drawing inspiration from urban
                          landscapes and street art. With a keen eye for detail
                          and a commitment to simplicity, Alex crafts visually
                          compelling solutions that leave a lasting impression.
                        </p>
                      </div>
                    </div>
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
        )}
        <Footer />
      </div>
    </>
  );
}

export default page;
