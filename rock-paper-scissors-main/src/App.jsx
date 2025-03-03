import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/SelectScreen";
import Footer from './components/Footer';
import Modal from "./components/Modal";
import ResultScreen from "./components/ResultScreen";
import "./App.css";

function App() {
  const [score, setScore] = useState(() => {
    const savedScore = localStorage.getItem("score");
    return savedScore !== null ? Number(savedScore) : 12;
  });

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

  const updateScore = (result) => {
    setScore((prevScore) => {
      if (result === "win") return prevScore + 1;
      if (result === "lose") return prevScore - 1;
      return prevScore;
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetScore = () => {
    setScore(12);
  };

  return (
    <Router>
      <Header score={score} />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route
          path="/result"
          element={<ResultScreen updateScore={updateScore} score={score} />}
        />
      </Routes>
      <Footer openModal={() => setIsModalOpen(true)} resetScore={resetScore} />
      {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
    </Router>
  );
}

export default App;
