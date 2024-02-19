"use client";

import { useState } from "react";

import { SearchMAnufacture } from "./";

const SearchBar = () => {
  const [manufacture, setManufacture] = useState("");

  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMAnufacture
          manufacture={manufacture}
          setManufacture={setManufacture}
        />
      </div>
    </form>
  );
};

export default SearchBar;
