import React from "react";

const SkillsFormSection = ({data = {}, onChange}) => {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const handleArrayChange = (field, value) => {
    const array = value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item);
    handleChange(field, array);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>

      <div>
        <label className="block text-sm font-medium mb-2">
          Technical Skills *
        </label>
        <textarea
          value={data.technical ? data.technical.join(", ") : ""}
          onChange={(e) => handleArrayChange("technical", e.target.value)}
          rows="3"
          className="w-full p-3 border rounded-md"
          placeholder="JavaScript, React, Node.js, Python, AWS, Docker (comma-separated)"
        />
        <p className="text-xs text-gray-500 mt-1">
          List your programming languages, frameworks, and tools
        </p>
      </div>
    </div>
  );
};

export default SkillsFormSection;
