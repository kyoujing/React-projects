import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../assets/styles/Header.css";

function Header({ score }) {
  const location = useLocation();
  const isResultScreen = location.pathname === "/result";

  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (isResultScreen) {
      setShowScore(false);
      const timer = setTimeout(() => {
        setShowScore(true);
      }, 3500);
      return () => clearTimeout(timer);
    } else {
      setShowScore(true);
    }
  }, [isResultScreen]);

  return (
    <header className="header-container">
      <div className="header-left"></div>
      <div className="header-right">
        <span className="score-title">SCORE</span>
        {showScore ? <span className="score-value">{score}</span> : null}
      </div>
    </header>
  );
}

export default Header;
