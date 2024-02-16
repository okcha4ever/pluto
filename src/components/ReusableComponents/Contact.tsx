import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="bg-[#e6e7ff] py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg sm:items-center sm:justify-start sm:p-12 md:flex-row">
          <div className="mb-4 sm:mb-0 sm:flex sm:flex-col">
            <h2 className="mb-2 whitespace-nowrap text-2xl font-bold text-[#2C54EA]">
              Contact Us
            </h2>
          </div>
          <div className="flex w-full items-center justify-start">
            <Input
              className="mx-5  w-2/3 sm:mb-0 sm:mr-4"
              placeholder="Your email address"
            />
            <Button className="bg-[#2C54EA]">Submit</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
