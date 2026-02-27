import axios from "axios";

export const enrichCompany = async (url) => {
  const res = await axios.post("http://localhost:5000/api/enrich", {
    name: "Stripe",
    url,
  });

  return res.data;
};