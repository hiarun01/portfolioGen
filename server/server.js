import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import portfolioRoutes from "./routes/portfolio.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio Generator API is running",
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use("/api/", portfolioRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
