import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response);

        // console.log(data);
        const person = response.data.results.filter(character =>
          character.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setCharacters(person);
      })
      .catch(error => {
        console.log("There are no characters here Morty!");
      });
  }, [searchTerm]);

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="character-list">
      <h2> here!</h2>

      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={searchTerm}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>

      {characters.map((character, index) => {
        console.log(character);
        return <CharacterCard key={index} character={character} />;
      })}

      {/* <ul>
        {characters.map(item => (
          <li key={character}>{character}</li>
        ))}
      </ul> */}
    </section>
  );
}
