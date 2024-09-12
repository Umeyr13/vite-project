/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import React from 'react';

const EpisodeCard = ({ episode }) => {
    return (
        <div>
            <h2>{episode.name}</h2>
            <p>Episode: {episode.episode}</p>
            <p>Air Date: {episode.air_date}</p>
        </div>
    );
};

export default EpisodeCard;
