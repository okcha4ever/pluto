export function HowItWorks() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-[#2C54EA]">
          How it works ?
        </h2>
        <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <div className="h-[320px] p-4">
            <div className="flex h-full flex-col items-center rounded-lg bg-[#2C54EA] p-8 text-center text-white">
              <span className="mb-4 text-6xl font-black">1</span>
              <h3 className="mb-4 text-2xl font-extrabold">Sign up</h3>
              <p>Begin your journey by entering our platform</p>
            </div>
          </div>
          <div className="h-[320px] p-4">
            <div className="flex h-full flex-col items-center rounded-lg bg-[#2C54EA] p-8 text-center text-white">
              <span className="mb-4 text-6xl font-black">2</span>
              <h3 className="mb-4 text-2xl font-extrabold">Apply</h3>
              <p>
                Apply your start-up into our system (skip if you want to only
                invest)
              </p>
            </div>
          </div>
          <div className="h-[320px] p-4">
            <div className="flex h-full flex-col items-center rounded-lg bg-[#2C54EA] p-8 text-center text-white">
              <span className="mb-4 text-6xl font-black">3</span>
              <h3 className="mb-4 text-2xl font-extrabold">Believe</h3>
              <p>
                Wait for your start-up of choice to take place in the world or
                be contacted with potential
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
