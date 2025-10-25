import {Input} from "./ui/input";
import {Label} from "./ui/label";

const ContactFormSection = ({data = {}, onChange}) => {
  const handleChange = (field, value) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Provide your contact details and a personalized message for potential
          clients or employers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className=" mb-2">Contact Email *</Label>
          <Input
            type="email"
            value={data.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <Label className=" mb-2">Phone Number*</Label>
          <Input
            type="tel"
            value={data.phone || ""}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      <div>
        <Label className=" mb-2">Contact Message *</Label>
        <textarea
          value={data.message || ""}
          onChange={(e) => handleChange("message", e.target.value)}
          rows="3"
          className="w-full p-3 border rounded-md"
          placeholder="write a message to encourage people to reach out to you..."
        />
      </div>
    </div>
  );
};

export default ContactFormSection;
