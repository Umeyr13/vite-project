/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React from 'react';


const CharacterCard = ({ character }) => {
    return (
        <div>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
        </div>
    );
};

export default CharacterCard;
