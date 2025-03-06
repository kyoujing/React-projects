import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../assets/styles/ResultScreen.css";
import PaperIcon from "../assets/images/icon-paper.svg";
import ScissorsIcon from "../assets/images/icon-scissors.svg";
import RockIcon from "../assets/images/icon-rock.svg";

function ResultScreen({ updateScore, score }) {
  const navigate = useNavigate();
  const location = useLocation();
  const playerChoice = location.state?.playerChoice || "unknown";
  const choices = ["paper", "scissors", "rock"];

  const [computerChoice, setComputerChoice] = useState(null);
  const [resultText, setResultText] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const choiceToImg = {
    paper: { img: PaperIcon, borderColor: "blue" },
    scissors: { img: ScissorsIcon, borderColor: "orange" },
    rock: { img: RockIcon, borderColor: "red" },
  };

  useEffect(() => {
    if (isGameFinished) return;

    const changeCount = Math.floor(Math.random() * 15) + 6;
    const changeInterval = 2000 / changeCount;
    let currentCount = 0;

    const interval = setInterval(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(randomChoice);
      currentCount++;

      if (currentCount >= changeCount) {
        clearInterval(interval);

        const finalChoice = choices[Math.floor(Math.random() * choices.length)];

        setComputerChoice(finalChoice);

        setTimeout(() => {
          let result;
          if (playerChoice === finalChoice) {
            result = "IT'S A DRAW";
          } else if (
            (playerChoice === "paper" && finalChoice === "rock") ||
            (playerChoice === "scissors" && finalChoice === "paper") ||
            (playerChoice === "rock" && finalChoice === "scissors")
          ) {
            result = "YOU WIN";
            updateScore("win");
          } else {
            result = "YOU LOSE";
            updateScore("lose");
          }
          setResultText(result);
          setShowResult(true);
          setIsGameFinished(true);
        }, 1000);
      }
    }, changeInterval);

    return () => clearInterval(interval);
  }, [playerChoice, updateScore, isGameFinished]);

  function handleBack() {
    navigate("/");
  }

  const showPlayAgainButton = (score) => score > 0 && score < 24;

  return (
    <div className="result-container">
      <div className="player-choice">
        <h2>YOU PICKED</h2>
        <img
          src={choiceToImg[playerChoice]?.img}
          alt={playerChoice}
          style={{ borderColor: choiceToImg[playerChoice]?.borderColor }}
        />
      </div>

      {showResult && (
        <div className="result">
          <h1>{resultText}</h1>
          {showPlayAgainButton(score) && (
            <button onClick={handleBack}>PLAY AGAIN</button>
          )}
        </div>
      )}
      <div className="computer-choice">
        <h2>THE HOUSE PICKED</h2>
        {computerChoice && (
          <img
            src={choiceToImg[computerChoice]?.img}
            alt={computerChoice}
            style={{ borderColor: choiceToImg[computerChoice]?.borderColor }}
          />
        )}
      </div>
    </div>
  );
}

export default ResultScreen;
