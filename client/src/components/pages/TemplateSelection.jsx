import {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {Button} from "../ui/button";
import {createPortfolio} from "../../api/api";

const TemplateSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state?.formData; // Get form data from navigation state
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [loading, setLoading] = useState(false);

  // Portfolio template options - Only 2 templates
  const templates = [
    {
      id: "modern",
      name: "Modern",
      description:
        "Contemporary design with bold elements, vibrant colors, and dynamic layouts",
    },
    {
      id: "minimal",
      name: "Minimal Sleek Design",
      description:
        "Ultra-clean, sophisticated design with elegant simplicity and refined aesthetics",
    },
  ];

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  const handleContinue = async () => {
    if (!selectedTemplate) {
      alert("Please select a template to continue");
      return;
    }

    setLoading(true);

    try {
      // Prepare the data to send to API
      const portfolioData = {
        ...formData,
        selectedTemplate: selectedTemplate.id,
        templateName: selectedTemplate.name,
      };

      console.log("Submitting portfolio data:", portfolioData);

      // Call the API to create portfolio
      const result = await createPortfolio(portfolioData);

      if (result.success) {
        navigate("/dashboard", {
          state: {
            newPortfolio: result.data,
            selectedTemplate: selectedTemplate,
          },
        });
      } else {
        console.error("API Error:", result);
        alert("Failed to create portfolio");
      }
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    navigate("/form", {state: {formData}});
  };

  if (!formData) {
    return (
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No Form Data Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Please complete the portfolio form first.
          </p>
          <Button onClick={() => navigate("/form")}>Go to Form</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Choose Your Portfolio Template
          </h1>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {templates.map((template) => (
            <div
              key={template.id}
              className="border rounded-xl p-6 cursor-pointer "
              onClick={() => handleTemplateSelect(template)}
            >
              <h3 className="text-xl font-bold mb-2">{template.name}</h3>
              <p className="text-gray-600 dark:text-gray-700 mb-4 text-sm">
                {template.description}
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <Button variant="outline" onClick={handleGoBack}>
            ← Back to Form
          </Button>

          {/*selected template info */}
          <div className="text-center">
            {selectedTemplate && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Selected:{" "}
                <span className="font-medium">{selectedTemplate.name}</span>
              </p>
            )}
            <Button
              onClick={handleContinue}
              disabled={!selectedTemplate || loading}
              className="px-8 py-3"
            >
              {loading ? "Creating..." : "Generate Portfolio"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelection;
