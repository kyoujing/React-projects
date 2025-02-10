import "../styles/Search.css";
import searchIcon from "../assets/search-outline.svg";

function Search({ searchTerm, setSearchTerm }) {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form className="searchBar">
      <button type="button">
        <img src={searchIcon} alt="Search icon" />
      </button>
      <input
        type="text"
        className="input-field"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for a country..."
      />
    </form>
  );
}

export default Search;
