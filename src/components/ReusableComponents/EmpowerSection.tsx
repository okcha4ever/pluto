import { CheckIcon } from "lucide-react";

const EmpowerSection = () => {
  return (
    <div className="mx-auto max-w-4xl py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-blue-600">
        Empower Your Journey with Pluto
      </h1>
      <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
        <div className="flex items-center gap-2">
          <CheckIcon className="text-blue-600" />
          <span className="font-medium">Seamless Experience</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckIcon className="text-blue-600" />
          <span className="font-medium">Prioritize Honesty</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckIcon className="text-blue-600" />
          <span className="font-medium">Quality Service</span>
        </div>
      </div>
    </div>
  );
};

export default EmpowerSection;
