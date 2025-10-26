import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Create a new portfolio
export const createPortfolio = async (portfolioData) => {
  try {
    const response = await api.post("/create", portfolioData);
    return response.data;
  } catch (error) {
    console.error("Create portfolio error:", error);
    throw error;
  }
};

// Get all portfolios
export const getAllPortfolios = async () => {
  try {
    const response = await api.get("/get");
    return response.data;
  } catch (error) {
    console.error("Get all portfolios error:", error);
    throw error;
  }
};

// Get portfolio by ID
export const getPortfolioById = async (id) => {
  try {
    const response = await api.get(`/get/${id}`);
    return response.data;
  } catch (error) {
    console.error("Get portfolio by ID error:", error);
    throw error;
  }
};
