import "../assets/styles/Footer.css";

function Footer({ openModal, resetScore }) {
  return (
    <div className="rules">
      <button className="resetScore-button" onClick={resetScore}>
        RESET SCORE
      </button>
      <button className="rule-button" onClick={openModal}>
        RULES
      </button>
    </div>
  );
}

export default Footer;
