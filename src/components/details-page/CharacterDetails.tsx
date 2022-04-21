import { Box, CircularProgress, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchCharacterDetailsTrigger } from "../../actions/CharacterDetailsActions";
import { AppState } from "../../store/store";
import { COLORS } from "../../utils/constants";
import { styled } from "@mui/material/styles";
import MarvelHeader from "../MarvelHeader";
import ContentAccordion from "./ContentAccordion";

const RootBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    marginTop: "50px",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
}));

const RootContainer = styled(Container)(({ theme }) => ({
    backgroundColor: COLORS.DARK_GRAY,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: "100px",
}));

const ImageBox = styled(Box)(({ theme }) => ({
    width: "45%",
    minWidth: "360px",
    [theme.breakpoints.down("md")]: {
        width: "90%",
    },
}));

const DescriptionBox = styled(Box)(({ theme }) => ({
    width: "45%",
    flexDirection: "column",
    display: "flex",
    color: "white",
    [theme.breakpoints.down("md")]: {
        width: "90%",
    },
}));

const ContentBox = styled(Box)(({ theme }) => ({
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "25px",
    [theme.breakpoints.down("md")]: {
        width: "90%",
    },
}));

const LoadingContainer = styled(Container)(({ theme }) => ({
    paddingTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    height: visualViewport.height,
}));

const CharacterDetails: React.FC = () => {
    const dispatch = useDispatch();
    const { characterId } = useParams();
    const { isLoading, characterDetails } = useSelector((state: AppState) => state.characterDetails);

    useEffect(() => {
        const characterIdNumber = characterId ? parseInt(characterId) : undefined;
        characterIdNumber && dispatch(fetchCharacterDetailsTrigger(characterIdNumber));
    }, []);

    if (!characterId) {
        return (
            <main style={{ padding: "1rem" }}>
                <p>No such a character!</p>
            </main>
        );
    }

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

    return (
        <>
            <MarvelHeader />
            <RootContainer>
                <RootBox>
                    <ImageBox>
                        <img
                            src={`${characterDetails?.thumbnail.path}.${characterDetails?.thumbnail.extension}`}
                            alt={characterDetails?.name}
                            width="100%"
                            height="100%"
                        />
                    </ImageBox>
                    <DescriptionBox sx={{}}>
                        <Typography variant="h1">{characterDetails?.name}</Typography>
                        <Typography variant="body1">
                            {characterDetails?.description || "No description available."}
                        </Typography>
                    </DescriptionBox>
                </RootBox>
                <ContentBox>
                    <ContentAccordion
                        summaryText="Comics"
                        detailsContent={characterDetails?.comics.items.map((comic: any) => comic.name) || []}
                    />
                    <ContentAccordion
                        summaryText="Stories"
                        detailsContent={characterDetails?.stories.items.map((story: any) => story.name) || []}
                    />
                    <ContentAccordion
                        summaryText="Events"
                        detailsContent={characterDetails?.events.items.map((event: any) => event.name) || []}
                    />
                    <ContentAccordion
                        summaryText="Series"
                        detailsContent={characterDetails?.series.items.map((series: any) => series.name) || []}
                    />
                </ContentBox>
            </RootContainer>
        </>
    );
};

export default CharacterDetails;
