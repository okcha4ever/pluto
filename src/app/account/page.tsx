import { Footer } from "@/components/ReusableComponents/Footer";
import { Navbar } from "@/components/ReusableComponents/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Define an array of card objects
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
    commentText: "Great work on the new feature, Emily! Can't wait to get started using it. Looking forward to your next update!",
  },
  {
    username: "@user2",
    avatarSrc: "/placeholder.svg?height=40&width=40",
    commentText: "Very helpful, as always.",
  }, ];

export default function Account() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=100&width=100" />
                    <AvatarFallback>EB</AvatarFallback>
                  </Avatar>
                  <div className="ml-5">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Emily Brown</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-medium leading-6 text-gray-900">About me</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Name: David Paul
                  <br />
                  Age: 29
                  <br />
                  Location: Seattle, WA
                  <br />
                  Background: Holds a bachelor's degree in Computer Science from a top university.
                  <br />
                  Experience: Worked in both startups and established tech companies, specializing in full-stack web
                  development.
                  <br />
                  Tech Stack: Proficient in languages such as JavaScript, Python, and Java, with expertise in frameworks
                  like React, Django, and Spring Boot.
                </p>
              </div>
              <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-medium leading-6 text-gray-900">Launch</h3>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {cardData.map((card, index) => (
                    <Card key={index} className="w-full">
                      <CardHeader>
                        <CardTitle>{card.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <img
                          alt={`${card.title} Post`}
                          src={card.imgSrc}
                          style={{
                            aspectRatio: "250/150",
                            objectFit: "cover",
                          }}
                          height="150"
                          width="250"
                        />
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Badge variant="default">{card.badgeText}</Badge>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-0">
              
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Latest comments</h3>
              <div className="mt-4 space-y-4">
                {commentsData.map((comment, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage alt={comment.username} src={comment.avatarSrc} />
                      <AvatarFallback>{comment.username.toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm text-gray-500">{comment.username}</p>
                      <p className="mt-1 text-sm text-gray-600">
                        {comment.commentText}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
                </div>
              </div>
          
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
