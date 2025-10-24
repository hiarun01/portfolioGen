import {Link} from "react-router-dom";
import {Button} from "./ui/button";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 py-20 text-center">
      <h1 className="text-5xl font-extrabold mb-4">Build Your Portfolio.</h1>
      <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300 mb-8">
        Build Portfolio Fast, Select a Template, fill your details, and get a
        stunning portfolio website in minutes.
      </p>
      <div className="flex items-center justify-center">
        <Link to="/form" className="mr-4">
          <Button>Generate your portfolio</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
