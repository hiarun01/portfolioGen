import {Button} from "./ui/button";
import {Label} from "./ui/label";
import {Input} from "./ui/input";
import {useEffect} from "react";

const ProjectsFormSection = ({data = [], onChange}) => {
  const addProject = () => {
    const newProject = {
      id: Date.now(),
      name: "",
      description: "",
      liveUrl: "",
      githubUrl: "",
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
      const newProject = {
        id: Date.now(),
        name: "",
        description: "",
        liveUrl: "",
        githubUrl: "",
      };
      onChange([newProject]);
    }
  }, [data.length, onChange]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Projects</h3>
        <Button onClick={addProject} variant="outline" size="sm">
          Add Project
        </Button>
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

          <div className="grid grid-cols-1 gap-4">
            <div>
              <Label className=" mb-2">Project Name *</Label>
              <Input
                type="text"
                value={project.name}
                onChange={(e) =>
                  updateProject(project.id, "name", e.target.value)
                }
                className="w-full "
                placeholder="My Awesome Project"
              />
            </div>

            <div>
              <Label className=" mb-2">Live URL</Label>
              <Input
                type="url"
                value={project.liveUrl}
                onChange={(e) =>
                  updateProject(project.id, "liveUrl", e.target.value)
                }
                className="w-full"
                placeholder="https://myproject.com"
              />
            </div>

            <div>
              <Label className="block mb-2">GitHub URL</Label>
              <Input
                type="url"
                value={project.githubUrl}
                onChange={(e) =>
                  updateProject(project.id, "githubUrl", e.target.value)
                }
                className="w-full"
                placeholder="https://github.com/user/project"
              />
            </div>
          </div>

          <div className="mt-4">
            <Label className="block text-sm font-medium mb-2">
              Description *
            </Label>
            <textarea
              value={project.description}
              onChange={(e) =>
                updateProject(project.id, "description", e.target.value)
              }
              rows="3"
              className="w-full border rounded-md p-3"
              placeholder="Describe what the project does and your role..."
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsFormSection;
