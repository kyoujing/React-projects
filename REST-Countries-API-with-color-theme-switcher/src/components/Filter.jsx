import "../styles/Filter.css";
import { useState } from "react";
import ArrowDownIcon from "../assets/arrow-down-outline.svg";

function Filter({ selectedRegion, setSelectedRegion }) {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleSelect = (region) => {
    setSelectedRegion(region);
    setIsOpen(false);
  };

  return (
    <div className="filter-dropdown">
      <button
        className="dropdown-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {selectedRegion === "All" ? "Filter By Region" : selectedRegion}
        <img src={ArrowDownIcon} className="dropdown-img" />
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((region) => (
            <li key={region} onClick={() => handleSelect(region)}>
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Filter;
