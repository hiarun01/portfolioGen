import Hero from "../Hero";
import HowItWorks from "../HowItWorks";

const Home = () => {
  return (
    <main className="bg-white h-fit text-black dark:bg-black dark:text-white">
      <Hero />
      <HowItWorks />
    </main>
  );
};

export default Home;
