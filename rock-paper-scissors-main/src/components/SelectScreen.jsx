import { useNavigate } from "react-router-dom";
import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import rock from "../assets/images/icon-rock.svg";
import "../assets/styles/SelectScreen.css";

function SelectScreen() {
  const navigate = useNavigate();
  const choices = ["paper", "scissors", "rock"];

  const handleClick = (event) => {
    const playerChoice = event.currentTarget.dataset.value;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    navigate("/result", { state: { playerChoice, computerChoice } });
  };

  return (
    <div className="content-container">
      <button
        data-value="paper"
        onClick={handleClick}
        style={{ borderColor: "blue" }}
      >
        <img src={paper} />
      </button>
      <button
        data-value="scissors"
        onClick={handleClick}
        style={{ borderColor: "orange" }}
      >
        <img src={scissors} />
      </button>
      <button
        data-value="rock"
        onClick={handleClick}
        style={{ borderColor: "red" }}
      >
        <img src={rock} />
      </button>
    </div>
  );
}

export default SelectScreen;
