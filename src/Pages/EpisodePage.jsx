import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CharacterCard from "../components/CharacterCard.jsx";

const EpisodePage = () => {
    const { id } = useParams();
    const [episode, setEpisode] = useState(null);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetchEpisode();
    }, [id]);

    const fetchEpisode = async () => {
        try {
            const result = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
            setEpisode(result.data);
            const characterPromises = result.data.characters.map((url) => axios.get(url));
            const characterResults = await Promise.all(characterPromises);
            setCharacters(characterResults.map((res) => res.data));
        } catch (error) {
            console.error("Error fetching episode details", error);
        }
    };

    if (!episode) return <div>Loading...</div>;

    return (
        <div>
            <h1>{episode.name}</h1>
            <p>Air date: {episode.air_date}</p>
            <p>Episode: {episode.episode}</p>
            <h2>Characters</h2>
            <div className="character-list">
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </div>
    );
};

export default EpisodePage;
