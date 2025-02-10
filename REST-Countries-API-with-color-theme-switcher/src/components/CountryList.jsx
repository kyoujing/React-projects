import { Link } from "react-router-dom";
import "../styles/CountryList.css";

function CountryList({ filteredData }) {
  const renderCapital = (capitalName) => {
    if (!capitalName) return null;
    return (
      <p>
        Capital:
        <span> {capitalName}</span>
      </p>
    );
  };

  return (
    <ul className="country-list">
      {filteredData.length > 0 ? (
        filteredData.map((country) => (
          <li key={country.name} className="country">
            <Link to={`/country/${country.name}`} className="country-link">
              <div className="flag-container">
                <img
                  src={country.flags.png}
                  className="flag"
                  alt={`${country.name} flag`}
                />
              </div>
              <h3>{country.name}</h3>
              <p>
                Population: <span>{country.population.toLocaleString()}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              {renderCapital(country.capital)}
            </Link>
          </li>
        ))
      ) : (
        <p className="error-message">No countries found</p>
      )}
    </ul>
  );
}

export default CountryList;
