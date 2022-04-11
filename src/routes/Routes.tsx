import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterDetails from "../components/details-page/CharacterDetails";
import MarvelHomepage from "../components/homepage/MarvelHomepage";

const MarvelRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MarvelHomepage />} />
                <Route path="/characters" element={<MarvelHomepage />} />
                <Route path="/characters/:characterId" element={<CharacterDetails />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default MarvelRoutes;
