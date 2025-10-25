import express from "express";
import {
  createPortfolio,
  getAllPortfolios,
} from "../controllers/portfolio.controller.js";

const router = express.Router();

// POST - Create a new portfolio (submit form data)
router.post("/", createPortfolio);

// GET - Get all portfolios (fetch all data)
router.get("/", getAllPortfolios);

export default router;
