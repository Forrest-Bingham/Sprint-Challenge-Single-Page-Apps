import React from "react";
import "../index.css";

// export default function CharacterCard() {
//   return <span>todo: character</span>;
// }

const CharacterCard = props => {
  return (
    <div className="card-wrapper">
      {props.character.name}
      <img src={props.character.image} alt="Rick and Morty Character Image" />
    </div>
  );
};
export default CharacterCard;
