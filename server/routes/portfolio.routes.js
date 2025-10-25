import express from "express";
import {
  createPortfolio,
  getAllPortfolios,
  getPortfolioById,
} from "../controllers/portfolio.controller.js";
import {get} from "mongoose";

const router = express.Router();

// POST - Create a new portfolio (submit form data)
router.post("/create", createPortfolio);

// GET - Get all portfolios (fetch all data)
router.get("/get", getAllPortfolios);

// GET - Get portfolio by ID
router.get("/get/:id", getPortfolioById);

export default router;
