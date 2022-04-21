import React, { useEffect } from "react";
import { Box, CircularProgress, Container, Pagination, PaginationItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharactersListTrigger } from "../../actions/CharactersListActions";
import { AppState } from "../../store/store";
import { MarvelCharacter } from "../../utils/types";
import MarvelHeader from "../MarvelHeader";
import CharacterCard from "./components/CharacterCard";
import { NavLink, useSearchParams } from "react-router-dom";
import { COLORS, PAGE_SIZE } from "../../utils/constants";
import { styled } from "@mui/material/styles";

const LoadingContainer = styled(Container)(({ theme }) => ({
    paddingTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    height: visualViewport.height,
}));

const PaginationBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    margin: "50px 0",
}));

const RootContainer = styled(Container)(({ theme }) => ({
    paddingTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
        justifyContent: "center",
    },
    [theme.breakpoints.down("lg")]: {
        justifyContent: "space-evenly",
    },
}));

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
                <LoadingContainer>
                    <CircularProgress style={{ color: COLORS.MARVEL_RED }} />
                </LoadingContainer>
            </>
        );
    }

    const pagesCount = Math.ceil(total / PAGE_SIZE);

    return (
        <>
            <MarvelHeader />
            <RootContainer>
                {characters.map((character: MarvelCharacter) => (
                    <CharacterCard character={character} key={character.id} />
                ))}

                <PaginationBox>
                    <Pagination
                        count={pagesCount}
                        page={parseInt(searchParams.get("page") || "1")}
                        size="large"
                        renderItem={(item: any) => (
                            <PaginationItem
                                component={NavLink}
                                sx={{ backgroundColor: COLORS.MARVEL_RED, color: "white" }}
                                to={`/characters${item.page === 1 ? "" : `?page=${item.page}`}`}
                                {...item}
                            />
                        )}
                    />
                </PaginationBox>
            </RootContainer>
        </>
    );
};

export default MarvelHomepage;
