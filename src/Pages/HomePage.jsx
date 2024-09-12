import { useState, useEffect } from "react";
import axios from "axios";
import EpisodeCard from "../components/EpisodeCard";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SerachBar";

const HomePage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchEpisodes();
    }, [page, searchQuery]);

    const fetchEpisodes = async () => {
        try {
            const result = await axios.get(
                `https://rickandmortyapi.com/api/episode?page=${page}&name=${searchQuery}`
            );
            setEpisodes(result.data.results);
        } catch (error) {
            console.error("Error fetching episodes", error);
        }
    };

    return (
        <div>
            <h1>Episodes</h1>
            <SearchBar setSearchQuery={setSearchQuery} />
            <div className="episode-list">
                {episodes.map((episode) => (
                    <EpisodeCard key={episode.id} episode={episode} />
                ))}
            </div>
            <Pagination currentPage={page} setPage={setPage} />
        </div>
    );
};

export default HomePage;
