import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/DarkModeButton.css";
import darkModeIcon from "../assets/moon-outline.svg";

function DarkModeButton() {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <button
      className="dark-mode-btn"
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      <img src={darkModeIcon} alt="Dark Mode Icon" />
      <strong>{isDarkMode ? "Light Mode" : "Dark Mode"}</strong>
    </button>
  );
}

export default DarkModeButton;
