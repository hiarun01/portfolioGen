import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "../ui/button";
import {getAllPortfolios} from "../../api/api";

const Dashboard = () => {
  const navigate = useNavigate();
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all portfolios from API
  const fetchPortfolios = async () => {
    try {
      const response = await getAllPortfolios();
      if (response.success) {
        setPortfolios(response.data);
      }
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const handleViewPortfolio = (portfolio) => {
    // Navigate to portfolio template renderer
    navigate(`/portfolio/${portfolio._id}`, {
      state: {
        portfolio, // Pass the portfolio data
        template: portfolio.selectedTemplate || portfolio.templateName, // Pass the template name
      },
    });
  };

  const handleCreateNew = () => {
    navigate("/form");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="h-12 w-12"></div>
          <p>Loading portfolios...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  text-black dark:bg-black ">
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 border-b rounded-md border-gray-200 dark:border-gray-700 pb-4">
          <div>
            <h1 className="text-2xl font-bold mb-4">Portfolio Gallery</h1>
            <p className=" text-gray-600 dark:text-gray-400">
              Browse and view all created portfolios
            </p>
          </div>
          <Button onClick={handleCreateNew} className="px-6 py-3">
            + Create New Portfolio
          </Button>
        </div>

        {/* Portfolio Cards Grid */}
        {portfolios.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">No Portfolios Found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Create your first portfolio to get started!
            </p>
            <Button onClick={handleCreateNew}>Create Portfolio</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolios.map((portfolio) => (
              <div
                key={portfolio._id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 hover:shadow-lg transition-shadow cursor-pointer bg-white dark:bg-gray-900"
                onClick={() => handleViewPortfolio(portfolio)}
              >
                {/* header section */}
                <div className="flex items-center mb-4">
                  <img
                    src={portfolio.hero.profileImage}
                    alt={portfolio.hero.fullName}
                    className="w-10 h-10 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {portfolio.hero?.fullName}
                    </h3>
                  </div>
                </div>
                {/* about section */}
                <p className="text-gray-600 text-sm dark:text-gray-400 mb-5">
                  {portfolio.hero?.about.slice(0, 80) ||
                    "No description provided."}
                  ...
                </p>

                {/* skills section */}

                <div className="text-center">
                  <Button
                    onClick={() => handleViewPortfolio(portfolio)}
                    className="w-full px-4 py-2"
                  >
                    View Portfolio
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
