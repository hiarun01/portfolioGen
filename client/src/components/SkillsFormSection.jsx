import React from "react";

const SkillsFormSection = ({data = {}, onChange}) => {
  const [skillsText, setSkillsText] = React.useState(() => {
    // Initialize from existing data only once
    return data.skills && Array.isArray(data.skills)
      ? data.skills.join(", ")
      : "";
  });

  const handleSkillsChange = (value) => {
    // Always update the text state first for smooth typing
    setSkillsText(value);

    // Convert to array for data storage
    const array = value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item.length > 0);

    // Update parent data
    onChange({
      ...data,
      skills: array,
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Skills</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Add your skills and expertise. These will be displayed as tags on your
        portfolio.
      </p>

      <div>
        <label className="block text-sm font-medium mb-2">
          Skills & Expertise *
        </label>
        <textarea
          value={skillsText}
          onChange={(e) => handleSkillsChange(e.target.value)}
          rows="4"
          className="w-full p-3 border rounded-md"
          placeholder="JavaScript, React, Node.js, Python, AWS, Docker, UI/UX Design, Project Management, Data Analysis (comma-separated)"
        />
      </div>
    </div>
  );
};

export default SkillsFormSection;
