export function ServicesSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#2C54EA]">Our Services</h2>
          <p className="mt-2 text-lg text-gray-600">
            What we offer for both <span className="text-[#2C54EA]"></span>{" "}
            Investors and{" "}
            <span className="text-[#2C54EA]">Start-up Founders</span>
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="rounded-lg bg-[#2C54EA] p-6 text-white">
              <h3 className="text-center text-4xl font-bold">Investors</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  Review registered start-up looking for potential investors
                </li>
                <li>Up-vote start-ups deserving of recognition</li>
              </ul>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="rounded-lg bg-[#2C54EA] p-6 text-white">
              <h3 className="text-center text-4xl font-bold">Start-ups</h3>
              <ul className="mt-4 space-y-2">
                <li>Register your start-up in our platform</li>
                <li>
                  Get the chance of being chosen by the best investors in the
                  industry
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
