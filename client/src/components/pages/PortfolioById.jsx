import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {Button} from "../ui/button";
import ModernTemplate from "../templates/ModernTemplate";
import MinimalTemplate from "../templates/MinimalTemplate";
import {getPortfolioById} from "../../api/api";

const PortfolioById = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch portfolio data
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await getPortfolioById(id);

        if (response.success) {
          setPortfolio(response.data);
        } else {
          setError("Portfolio not found");
        }
      } catch {
        setError("Failed to load portfolio");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPortfolio();
    }
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading portfolio...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-500">
            {error || "Portfolio Not Found"}
          </h2>
          <Button onClick={() => navigate("/profiles")}>
            ← Back to Profiles
          </Button>
        </div>
      </div>
    );
  }

  // Get template type
  const templateType =
    portfolio.selectedTemplate || portfolio.templateName || "minimal";

  return (
    <div className="relative">
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Button
          onClick={() => navigate("/dashboard")}
          variant="outline"
          className="bg-white/90 backdrop-blur-sm"
        >
          ← Back
        </Button>
      </div>

      {/* Render Template */}
      {templateType.toLowerCase() === "modern" ? (
        <ModernTemplate portfolio={portfolio} />
      ) : (
        <MinimalTemplate portfolio={portfolio} />
      )}
    </div>
  );
};

export default PortfolioById;
