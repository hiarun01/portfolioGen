const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto py-5 px-6 text-center">
      <h2 className="text-4xl font-bold">How it works</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">1. Choose a Template</h3>
          <p>Select any template that fits your style. </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">
            2. Fill in Your Details
          </h3>
          <p>
            Full Up your information, including skills, projects, and
            experience.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">
            3. Generate Your Portfolio
          </h3>
          <p>
            and get a beautiful, responsive portfolio website ready to share
            with the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
