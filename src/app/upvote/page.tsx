import { Navbar } from "@/components/ReuseAbleComponents/navbar";
import { Button } from "@/components/ui/button";
import Card from "../../components/ReuseAbleComponents/Card";
import { Footer } from "@/components/ReuseAbleComponents/Footer";
import { CompanyProps } from "@/types/Card";

function page() {
  const dataCards: CompanyProps[] = [
    {
      id: 1,
      name: "Trello",
      description:
        "Trello lets you work more collaboratively and get more done.",
    },
    {
      id: 2,
      name: "Slack",
      description: "Slack is a new way to communicate with your team.",
    },
    {
      id: 3,
      name: "Zoom",
      description:
        "Zoom is the leader in modern enterprise video communications.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-blue-600">
          Upvote for the best
        </h1>
        <div className="border-b border-gray-200 py-2"></div>
        <div className="mt-4">
          <span className="text-lg font-semibold">Categories:</span>
          <div className="mt-2 flex space-x-2">
            <Button className="bg-gray-200 text-gray-700">Technologies</Button>
            <Button className="bg-gray-200 text-gray-700">Productivity</Button>
            <Button className="bg-blue-200 text-blue-700">SaaS</Button>
          </div>
        </div>
      </div>
      {dataCards &&
        dataCards.map((company: CompanyProps, i) => (
          <Card key={i} data={company as CompanyProps} />
        ))}
      <Footer />
    </div>
  );
}

export default page;
