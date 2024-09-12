import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EpisodePage from "./pages/EpisodePage";
import CharacterPage from "./pages/CharacterPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/episode/:id" element={<EpisodePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Routes>
    </Router>
  );
};

export default App
