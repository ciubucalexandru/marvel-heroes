import React, { useEffect } from "react";
import { Box, CircularProgress, Container, Pagination, PaginationItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharactersListTrigger } from "../../actions/CharactersListActions";
import { AppState } from "../../store/store";
import { MarvelCharacter } from "../../utils/types";
import MarvelHeader from "../MarvelHeader";
import CharacterCard from "./components/CharacterCard";
import { NavLink, useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/constants";

// pentru theme
// negru background light: #202020
// negru background dark: #151515
// rosu background: #f00c18
// border color: #393939

const MarvelHomepage: React.FC = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const { characters, total, isLoading } = useSelector((state: AppState) => state.charactersList);

    useEffect(() => {
        dispatch(fetchCharactersListTrigger(parseInt(searchParams.get("page") || "1")));
    }, [searchParams]);

    if (isLoading) {
        return (
            <>
                <MarvelHeader />
                <Container
                    sx={{
                        paddingTop: "20px",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignContent: "center",
                        height: visualViewport.height,
                    }}
                >
                    <CircularProgress style={{ color: "#f00c18" }} />
                </Container>
            </>
        );
    }

    const pagesCount = Math.ceil(total / PAGE_SIZE);

    return (
        <>
            <MarvelHeader />
            <Container
                fixed
                sx={{ paddingTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}
            >
                {characters.map((character: MarvelCharacter) => (
                    <CharacterCard character={character} key={character.id} />
                ))}

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        margin: "50px 0",
                    }}
                >
                    <Pagination
                        count={pagesCount}
                        page={parseInt(searchParams.get("page") || "1")}
                        renderItem={(item: any) => (
                            <PaginationItem
                                component={NavLink}
                                sx={{ backgroundColor: "#f00c18", color: "white" }}
                                to={`/characters${item.page === 1 ? "" : `?page=${item.page}`}`}
                                {...item}
                            />
                        )}
                    />
                </Box>
            </Container>
        </>
    );
};

export default MarvelHomepage;
