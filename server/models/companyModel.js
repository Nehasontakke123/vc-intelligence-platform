import mongoose from "mongoose";

const sourceSchema = new mongoose.Schema({
  url: String,
  timestamp: Date,
});

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    summary: String,
    whatTheyDo: [String],
    keywords: [String],
    signals: [String],
    sources: [sourceSchema],
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);

export default Company;