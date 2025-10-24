import {Input} from "./ui/input";
import {Label} from "./ui/label";

const PersonalFormSection = ({data = {}, onChange}) => {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-4">Personal Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
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
          <Label className="mb-2">Email *</Label>
          <Input
            type="email"
            value={data.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <Label className=" mb-2">Phone </Label>
          <Input
            type="tel"
            value={data.phone || ""}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full "
            placeholder="Enter Your phone number"
          />
        </div>
      </div>

      <div>
        <Label className=" mb-2">About Me *</Label>
        <textarea
          value={data.about || ""}
          onChange={(e) => handleChange("about", e.target.value)}
          rows="4"
          className="w-full p-3 border rounded-md"
          placeholder="Tell people about yourself, your passion, and what you do..."
        />
      </div>
    </div>
  );
};

export default PersonalFormSection;
