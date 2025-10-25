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
          <p className="text-xs text-gray-500 mt-1">
            This email will be displayed on your contact section
          </p>
        </div>

        <div>
          <Label className=" mb-2">Contact Phone</Label>
          <Input
            type="tel"
            value={data.phone || ""}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full"
            placeholder="+1 (555) 123-4567"
          />
          <p className="text-xs text-gray-500 mt-1">
            Optional: Phone number for direct contact
          </p>
        </div>
      </div>

      <div>
        <Label className=" mb-2">Contact Message *</Label>
        <textarea
          value={data.message || ""}
          onChange={(e) => handleChange("message", e.target.value)}
          rows="6"
          className="w-full p-3 border rounded-md"
          placeholder="Hi! I'm always interested in new opportunities and collaborations. Whether you have a project in mind, want to discuss potential partnerships, or just want to say hello, I'd love to hear from you. Feel free to reach out!"
        />
        <p className="text-xs text-gray-500 mt-1">
          Write a welcoming message that encourages people to contact you. This
          will be displayed in your contact section.
        </p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
        <h4 className="font-medium mb-2">Contact Section Preview</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Your contact section will display:
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
          <li>• Your personalized contact message</li>
          <li>• Email address for inquiries</li>
          <li>• Phone number (if provided)</li>
          <li>• A contact form for visitors to reach you</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactFormSection;
