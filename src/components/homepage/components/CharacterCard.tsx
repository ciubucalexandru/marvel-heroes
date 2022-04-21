import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { MarvelCharacter } from "../../../utils/types";
import { COLORS } from "../../../utils/constants";
import { styled } from "@mui/material/styles";

type Props = {
    character: MarvelCharacter | null;
};

const RootCard = styled(Card)(({ theme }) => ({
    width: "350px",
    marginTop: "50px",
    backgroundColor: COLORS.LIGHT_GRAY,
    color: "white",
    [theme.breakpoints.down("md")]: {
        width: "500px",
    },
    [theme.breakpoints.down("sm")]: {
        width: "80%",
        minWidth: "360px",
    },
}));

const MultipleLineTypography = styled(Typography)(({ theme }) => ({
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
}));

const CharacterCard: React.FC<Props> = ({ character }) => {
    const navigate = useNavigate();

    return (
        <RootCard onClick={() => navigate(`/characters/${character?.id}`)}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="400"
                    src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
                    alt={character?.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {character?.name}
                    </Typography>
                    <MultipleLineTypography variant="body2">{character?.description}</MultipleLineTypography>
                </CardContent>
            </CardActionArea>
        </RootCard>
    );
};

export default CharacterCard;
