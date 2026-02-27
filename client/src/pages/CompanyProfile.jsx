import { useState } from "react";
import { enrichCompany } from "../services/api";

const CompanyProfile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEnrich = async () => {
    setLoading(true);
    const result = await enrichCompany("https://stripe.com");
    setData(result);
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Company Profile</h1>

      <button
        onClick={handleEnrich}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Enrich
      </button>

      {loading && <p className="mt-4">Loading...</p>}

      {data && (
        <div className="mt-6 bg-white shadow p-4 rounded">
          <h2 className="font-bold">Summary</h2>
          <p>{data.summary}</p>

          <h2 className="font-bold mt-3">What They Do</h2>
          <ul>
            {data.whatTheyDo.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>

          <h2 className="font-bold mt-3">Keywords</h2>
          <p>{data.keywords.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default CompanyProfile;