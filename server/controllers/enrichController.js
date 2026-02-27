import { scrapeWebsite } from "../services/scrapeService.js";
import Company from "../models/companyModel.js";

export const enrichCompany = async (req, res) => {
  try {
    const { url, name } = req.body;

    const data = await scrapeWebsite(url);

    const savedCompany = await Company.create({
      name,
      website: url,
      ...data,
    });

    res.status(200).json(savedCompany);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Enrichment failed" });
  }
};