import {useState} from "react";

import PersonalFormSection from "../PersonalFormSection";
import SkillsFormSection from "../SkillsFormSection";
import ProjectsFormSection from "../ProjectsFormSection";
import ExperienceFormSection from "../ExperienceFormSection";
import {Button} from "../ui/button";

const Form = () => {
  const [activeSection, setActiveSection] = useState("personal");
  const [formData, setFormData] = useState({
    personal: {},
    skills: {},
    projects: [],
    experience: [],
  });

  // Form Sections
  const sections = [
    {id: "personal", label: "Personal Details", component: PersonalFormSection},
    {id: "skills", label: "Skills", component: SkillsFormSection},
    {id: "projects", label: "Projects", component: ProjectsFormSection},
    {id: "experience", label: "Experience", component: ExperienceFormSection},
  ];

  // Update Form Data
  const updateFormData = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const handleSubmit = () => {
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
          {" "}
          {activeSection === "experience" && (
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
