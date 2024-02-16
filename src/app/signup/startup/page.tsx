
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {ChevronDownCircle} from "lucide-react"

export default function signup() {
  return (
    <div className="max-w-lg mx-auto my-12 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-blue-800">Welcome,Lets make your ideas real !</h1>
      <div className="mt-8">
        <form className="mt-6 grid grid-cols-1 gap-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <Input id="name" placeholder="Your startup name" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700" htmlFor="address">
                Address
              </label>
              <Input id="address" placeholder="eg: annaba, algeria" />
            </div>
            
          </div>
          <div className="relative w-full">
  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-10 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
    <option>Business</option>
    <option>Services</option>
    <option>Freelance</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <ChevronDownCircle/>
    </div>
</div>
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="description">
              Company description
            </label>
            <Input id="description" placeholder="Company description" />
          </div>
          <label className="text-sm font-medium text-gray-700" htmlFor="email">
              Upload an image
            </label>
            <Input id="img" type="file"/>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Submit</Button>
        </form>
      </div>
    </div>
  )
}

