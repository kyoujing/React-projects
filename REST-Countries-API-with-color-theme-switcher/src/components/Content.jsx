import { useState } from "react";
import "../styles/Content.css";
import Search from "./Search";
import Filter from "./Filter";
import CountryList from "./CountryList";
import CountryData from "../data.json";

function Content() {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = CountryData.filter((item) => {
    const matchesRegion =
      selectedRegion === "All" || item.region === selectedRegion;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="content">
      <section className="search-filter-container">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filter
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </section>
      <div className="main-content">
        <CountryList filteredData={filteredData} />
      </div>
    </div>
  );
}

export default Content;
