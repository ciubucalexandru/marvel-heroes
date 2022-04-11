import React from "react";
import { useParams } from "react-router";

const CharacterDetails: React.FC = () => {
    const { characterId } = useParams();

    if (!characterId) {
        return (
            <main style={{ padding: "1rem" }}>
                <p>No such a character!</p>
            </main>
        );
    }

    return <div>The character id is {characterId}</div>;
};

export default CharacterDetails;
