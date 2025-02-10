import { useParams, useNavigate } from "react-router-dom";
import countryData from "../data.json";
import "../styles/CountryDetail.css";
import backIcon from "../assets/arrow-back-outline.svg";

function CountryDetail() {
  const { name } = useParams();
  const navigate = useNavigate();

  const country = countryData.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );

  if (!country) {
    return <h1 className="error-message">Country not found!</h1>;
  }

  const renderCapital = (capitalName) => {
    if (!capitalName) return null;
    return (
      <p>
        <strong>Capital:</strong>
        <span> {capitalName}</span>
      </p>
    );
  };

  const renderBorders = (borders) => {
    if (!borders || borders.length === 0) return null;

    return (
      <div className="border-countries">
        <strong>
          {borders.length === 1 ? "Border Country: " : "Border Countries: "}
        </strong>
        {borders.map((borderCode) => {
          const borderCountry = countryData.find(
            (c) => c.alpha3Code === borderCode
          );

          return (
            <span
              role="button"
              tabIndex={0}
              key={borderCode}
              onClick={() =>
                borderCountry &&
                navigate(`/country/${borderCountry.name.toLowerCase()}`)
              }
            >
              {borderCountry ? borderCountry.name : borderCode}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <button className="back-btn" onClick={() => navigate("/")}>
        <img src={backIcon} className="back-icon" alt="Back" />
        Back
      </button>
      <div className="country-container">
        <div className="country-content">
          <div className="flag-image-container">
            <img
              src={country.flags.svg}
              alt={`${country.name} flag`}
              className="flag-image"
            />
          </div>
          <div className="country-details">
            <h1>{country.name}</h1>
            <div className="country-stats">
              <div className="stats-left">
                <p>
                  <strong>Native Name:</strong> {country.nativeName}
                </p>
                <p>
                  <strong>Population:</strong>{" "}
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <strong>Region:</strong> {country.region}
                </p>
                <p>
                  <strong>Sub Region:</strong> {country.subregion}
                </p>
                {renderCapital(country.capital)}
              </div>
              <div className="stats-right">
                <p>
                  <strong>Top Level Domain:</strong> {country.topLevelDomain}
                </p>
                <p>
                  <strong>Currencies:</strong>{" "}
                  {country.currencies
                    .map((currency) => currency.name)
                    .join(", ")}
                </p>
                <p>
                  <strong>Languages:</strong>{" "}
                  {country.languages.map((lang) => lang.name).join(", ")}
                </p>
              </div>
            </div>
            {renderBorders(country.borders)}
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryDetail;
