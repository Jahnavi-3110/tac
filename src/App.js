import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./Components/Category/category";
import Welcome from "./Components/Welcome/welcome";
import FeaturesResource from "./Components/Featured Topics and Additional Resources/FeatureTop_AddResource";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route exact path="/cat" element={<Category />} />
        <Route exact path="/wel" element={<Welcome />} />
        <Route exact path="/features_resource" element={<FeaturesResource />} />
      </Routes>
    </Router>
  );
}

export default App;
