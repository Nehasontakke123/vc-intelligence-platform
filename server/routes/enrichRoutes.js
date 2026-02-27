import express from "express";
import { enrichCompany } from "../controllers/enrichController.js";
import Company from "../models/companyModel.js";

const router = express.Router();

// POST → Enrich company
router.post("/", enrichCompany);

// GET → Get all companies
router.get("/", async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching companies" });
  }
});

export default router;