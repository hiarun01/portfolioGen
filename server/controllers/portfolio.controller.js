import Portfolio from "../models/portfolio.model.js";

// portfolio Submit form data
export const createPortfolio = async (req, res) => {
  try {
    const {hero, skills, portfolio, contact} = req.body;

    // Basic validation
    if (!hero || !skills || !portfolio || !contact) {
      return res.status(400).json({
        success: false,
        message: "All sections (hero, skills, portfolio, contact) are required",
      });
    }

    // Create new portfolio
    const newPortfolio = new Portfolio({
      hero,
      skills,
      portfolio,
      contact,
    });

    const savedPortfolio = await newPortfolio.save();

    res.status(201).json({
      success: true,
      message: "Portfolio created successfully",
      data: savedPortfolio,
    });
  } catch (error) {
    console.error("Create portfolio error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create portfolio",
      error: error.message,
    });
  }
};

//Get all portfolios
export const getAllPortfolios = async (req, res) => {
  try {
    console.log("Fetching all portfolios...");

    // Get all portfolios
    const portfolios = await Portfolio.find().sort({createdAt: -1});

    res.json({
      success: true,
      message: "Portfolios fetched successfully",
      data: portfolios,
    });
  } catch (error) {
    console.error("Get portfolios error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch portfolios",
      error: error.message,
    });
  }
};

// Get portfolio by ID
export const getPortfolioById = async (req, res) => {
  try {
    const {id} = req.params;

    // Find portfolio by ID
    const portfolio = await Portfolio.findById(id);
    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: "Portfolio not found",
      });
    }

    res.json({
      success: true,
      data: portfolio,
    });
  } catch (error) {
    console.error("Get portfolio error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch portfolio",
      error: error.message,
    });
  }
};
