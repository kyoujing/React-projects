import DarkModeButton from "./DarkModeButton";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <h2>
        <Link to="/">Where in the world?</Link>
      </h2>
      <DarkModeButton />
    </header>
  );
}

export default Header;
