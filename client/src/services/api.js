import axios from "axios";

export const enrichCompany = async (url) => {
  const res = await axios.post("https://vc-intelligence-platform-xi.vercel.app/api/enrich", {
    name: "Stripe",
    url,
  });

  return res.data;
};