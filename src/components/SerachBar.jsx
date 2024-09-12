import { useState } from "react";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ setSearchQuery }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSearch = () => {
        setSearchQuery(inputValue);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Arama"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
