import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CharacterPage = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetchCharacter();
    }, [id]);

    const fetchCharacter = async () => {
        try {
            const result = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
            setCharacter(result.data);
        } catch (error) {
            console.error("Error fetching character details", error);
        }
    };

    if (!character) return <div>Loading...</div>;

    return (
        <div>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
        </div>
    );
};

export default CharacterPage;
