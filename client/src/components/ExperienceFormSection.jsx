import React from "react";
import {Button} from "./ui/button";
import {Input} from "./ui/input";
import {Label} from "./ui/label";

const ExperienceFormSection = ({data = [], onChange}) => {
  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
      location: "",
    };
    onChange([...data, newExperience]);
  };

  const removeExperience = (id) => {
    onChange(data.filter((exp) => exp.id !== id));
  };

  const updateExperience = (id, field, value) => {
    onChange(
      data.map((exp) => (exp.id === id ? {...exp, [field]: value} : exp))
    );
  };

  // Initialize with one experience if empty
  React.useEffect(() => {
    if (data.length === 0) {
      const newExperience = {
        id: Date.now(),
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
        location: "",
      };
      onChange([newExperience]);
    }
  }, [data.length, onChange]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Work Experience</h3>
        <Button onClick={addExperience} variant="outline" size="sm">
          Add Experience
        </Button>
      </div>

      {data.map((experience, index) => (
        <div
          key={experience.id}
          className="p-4 border border-gray-200 rounded-lg dark:border-gray-700"
        >
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-medium">Experience #{index + 1}</h4>
            {data.length > 1 && (
              <Button
                onClick={() => removeExperience(experience.id)}
                variant="destructive"
                size="sm"
              >
                Remove
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="block text-sm font-medium mb-2">
                Company *
              </Label>
              <Input
                type="text"
                value={experience.company}
                onChange={(e) =>
                  updateExperience(experience.id, "company", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent dark:bg-gray-800 dark:border-gray-600"
                placeholder="Tech Company Inc."
              />
            </div>

            <div>
              <Label className="block text-sm font-medium mb-2">
                Position *
              </Label>
              <Input
                type="text"
                value={experience.position}
                onChange={(e) =>
                  updateExperience(experience.id, "position", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent dark:bg-gray-800 dark:border-gray-600"
                placeholder="Senior Developer"
              />
            </div>

            <div>
              <Label className="block text-sm font-medium mb-2">Location</Label>
              <Input
                type="text"
                value={experience.location}
                onChange={(e) =>
                  updateExperience(experience.id, "location", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent dark:bg-gray-800 dark:border-gray-600"
                placeholder="New York, NY"
              />
            </div>

            <div>
              <Label className="block text-sm font-medium mb-2">
                Start Date *
              </Label>
              <Input
                type="month"
                value={experience.startDate}
                onChange={(e) =>
                  updateExperience(experience.id, "startDate", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent dark:bg-gray-800 dark:border-gray-600"
              />
            </div>

            <div>
              <Label className="block text-sm font-medium mb-2">End Date</Label>
              <Input
                type="month"
                value={experience.endDate}
                onChange={(e) =>
                  updateExperience(experience.id, "endDate", e.target.value)
                }
                disabled={experience.current}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent dark:bg-gray-800 dark:border-gray-600 disabled:opacity-50"
              />
            </div>
          </div>

          <div className="mt-4">
            <Label className="block text-sm font-medium mb-2">
              Job Description
            </Label>
            <textarea
              value={experience.description}
              onChange={(e) =>
                updateExperience(experience.id, "description", e.target.value)
              }
              rows="4"
              className="w-full p-3 border  rounded-md"
              placeholder="Describe your responsibilities, achievements, and impact..."
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceFormSection;
