import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import CharacterList from "./CharacterList";

// const characters = [
// <CharacterList
// ];

// const list = <CharacterList />;
//

const SearchForm = props => {
  const list = props.characters;
  console.log("People!", list);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  // useEffect(() => {
  //   const results = list.filter(person =>
  //     person.toLowerCase().includes(searchTerm)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm]);

  return (
    <section className="search-form">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />

      <ul>
        {searchResults.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default SearchForm;
