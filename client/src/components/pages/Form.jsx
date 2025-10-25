import {useState} from "react";
import {useLocation} from "react-router-dom";
import HeroFormSection from "../HeroFormSection";
import SkillsFormSection from "../SkillsFormSection";
import PortfolioFormSection from "../PortfolioFormSection";
import ContactFormSection from "../ContactFormSection";

import {Button} from "../ui/button";

const Form = () => {
  const location = useLocation();

  const [activeSection, setActiveSection] = useState("hero");
  const [formData, setFormData] = useState(
    location.state?.formData || {
      hero: {},
      skills: {},
      portfolio: [],
      contact: {},
    }
  );

  // Form Sections
  const sections = [
    {id: "hero", label: "Hero Section", component: HeroFormSection},
    {id: "skills", label: "Skills Section", component: SkillsFormSection},
    {
      id: "portfolio",
      label: "Portfolio Section",
      component: PortfolioFormSection,
    },
    {id: "contact", label: "Contact Section", component: ContactFormSection},
  ];

  // Update Form Data
  const updateFormData = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const handleSubmit = () => {
    // Basic validation
    const {hero, skills, portfolio, contact} = formData;

    if (!hero.fullName || !hero.profileImage || !hero.about) {
      alert("Please fill in all required hero section fields.");
      setActiveSection("hero");
      return;
    }

    if (!skills.skills || skills.skills.length === 0) {
      alert("Please add at least one skill.");
      setActiveSection("skills");
      return;
    }

    if (!portfolio || portfolio.length < 1) {
      alert("Please add at least 1 project in your portfolio.");
      setActiveSection("portfolio");
      return;
    }

    // Check if at least 1 project is properly filled
    const validProjects = portfolio.filter(
      (p) => p.title && p.description && p.image
    );
    if (validProjects.length < 1) {
      alert(
        "Please complete at least 1 project with title, description, and image."
      );
      setActiveSection("portfolio");
      return;
    }

    if (!contact.email || !contact.message) {
      alert("Please fill in the required contact information.");
      setActiveSection("contact");
      return;
    }

    console.log("Portfolio Form Data:", formData);
  };

  // Active Component
  const ActiveComponent = sections.find(
    (s) => s.id === activeSection
  )?.component; //

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Portfolio Information Form
        </h2>

        {/* Navigation Tabs */}
        <nav className="mb-8">
          <ul className="flex gap-2 border-b border-gray-200 dark:border-gray-700">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                    activeSection === section.id
                      ? "border-black text-black dark:border-white dark:text-white"
                      : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Active Form Section */}
        <div className="mb-8">
          {ActiveComponent && (
            <ActiveComponent
              data={formData[activeSection]}
              onChange={(data) => updateFormData(activeSection, data)}
            />
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          {activeSection === "contact" && (
            <Button onClick={handleSubmit} className="px-8 py-3">
              Generate Portfolio
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
