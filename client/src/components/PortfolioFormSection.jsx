import {Button} from "./ui/button";
import {Label} from "./ui/label";
import {Input} from "./ui/input";
import {useEffect} from "react";

const PortfolioFormSection = ({data = [], onChange}) => {
  const addProject = () => {
    const newProject = {
      id: Date.now(),
      title: "",
      description: "",
      image: "",
    };

    onChange([...data, newProject]);
  };

  const removeProject = (id) => {
    onChange(data.filter((project) => project.id !== id));
  };

  const updateProject = (id, field, value) => {
    onChange(
      data.map((project) =>
        project.id === id ? {...project, [field]: value} : project
      )
    );
  };

  // Initialize with one project if empty
  useEffect(() => {
    if (data.length === 0) {
      const projects = Array.from({length: 1}, (_, index) => ({
        id: Date.now() + index,
        title: "",
        description: "",
        image: "",
      }));
      onChange(projects);
    }
  }, [data.length, onChange]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold">Portfolio Projects</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Showcase your best projects with title, image, and description.
          </p>
        </div>
        {data.length < 6 && (
          <Button onClick={addProject} variant="outline" size="sm">
            Add Project
          </Button>
        )}
      </div>

      {data.map((project, index) => (
        <div
          key={project.id}
          className="p-4 border border-gray-200 rounded-lg dark:border-gray-700"
        >
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-medium">Project #{index + 1}</h4>
            {data.length > 1 && (
              <Button onClick={() => removeProject(project.id)} size="sm">
                Remove
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label className="mb-2">Project Title *</Label>
              <Input
                type="text"
                value={project.title || ""}
                onChange={(e) =>
                  updateProject(project.id, "title", e.target.value)
                }
                className="w-full"
                placeholder="My Awesome Project"
              />
            </div>

            <div>
              <Label className="mb-2">Project Image *</Label>
              <Input
                type="url"
                value={project.image || ""}
                onChange={(e) =>
                  updateProject(project.id, "image", e.target.value)
                }
                className="w-full"
                placeholder="https://example.com/project-screenshot.jpg"
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter the URL of your project's main image or screenshot
              </p>
            </div>
          </div>

          <div className="mt-4">
            <Label className="block text-sm font-medium mb-2">
              Project Description *
            </Label>
            <textarea
              value={project.description || ""}
              onChange={(e) =>
                updateProject(project.id, "description", e.target.value)
              }
              rows="3"
              className="w-full border rounded-md p-3"
              placeholder="Describe what the project does, technologies used, your role, and key features..."
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioFormSection;
