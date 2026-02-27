import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyProfile from "./pages/CompanyProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CompanyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;