import {Input} from "./ui/input";
import {Label} from "./ui/label";

const HeroFormSection = ({data = {}, onChange}) => {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Hero Section</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        This information will be prominently displayed at the top of your
        portfolio website.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className=" mb-2">Full Name *</Label>
          <Input
            type="text"
            value={data.fullName || ""}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="w-full"
            placeholder="John Doe"
          />
        </div>

        <div>
          <Label className="mb-2">Profile Image *</Label>
          <Input
            type="url"
            value={data.profileImage || ""}
            onChange={(e) => handleChange("profileImage", e.target.value)}
            className="w-full"
            placeholder="https://example.com/your-photo.jpg"
          />
          <p className="text-xs text-gray-500 mt-1">
            Enter the URL of your professional headshot or profile picture
          </p>
        </div>
      </div>

      <div>
        <Label className=" mb-2">About Us / Hero Description *</Label>
        <textarea
          value={data.about || ""}
          onChange={(e) => handleChange("about", e.target.value)}
          rows="4"
          className="w-full p-3 border rounded-md"
          placeholder="Write a compelling introduction about yourself, your profession, and what makes you unique. This will be prominently displayed in your hero section..."
        />
        <p className="text-xs text-gray-500 mt-1">
          This description will be displayed prominently at the top of your
          portfolio website
        </p>
      </div>
    </div>
  );
};

export default HeroFormSection;
