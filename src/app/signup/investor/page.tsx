
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function signup() {
  return (
    <div className="max-w-lg mx-auto my-12 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-blue-800">Welcome investor</h1>
      <div className="mt-8">
        
        <form className="mt-6 grid grid-cols-1 gap-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <Input id="name" placeholder="eg: Rasoul Anis" />
          </div>
          
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="company-type">
              Field
            </label>
            <Input id="field" placeholder="eg: web developer" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="description">
              description
            </label>
            <Input id="description" placeholder="Tell us about you!" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <Input id="email" placeholder="eg : email@gmail.com" type="email" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="email">
              Upload an image
            </label>
            <Input id="img" type="file" />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Submit</Button>
        </form>
      </div>
    </div>
  );
};

