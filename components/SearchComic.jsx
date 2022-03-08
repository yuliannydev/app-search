import React from "react";
import { Input, Label, SectionSearch } from "../styles/styles";

function SearchComic({ search, setSearch, filterComics }) {
  const handleChange = (event) => {
    setSearch(event.target.value);
    filterComics(event.target.value);
  };

  return (
    <SectionSearch>
      <Label id="search" htmlFor="search" />
      <Input
        id="search"
        type="search"
        placeholder="Enter comic to search"
        value={search}
        onChange={handleChange}
      />
    </SectionSearch>
  );
}

export default SearchComic;
