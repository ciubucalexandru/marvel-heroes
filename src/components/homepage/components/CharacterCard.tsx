import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { MarvelCharacter } from "../../../utils/types";

type Props = {
    character: MarvelCharacter | null;
};

const CharacterCard: React.FC<Props> = ({ character }) => {
    const navigate = useNavigate();

    return (
        <Card
            sx={{ width: "350px", marginTop: "50px", backgroundColor: "#202020", color: "white" }}
            onClick={() => navigate(`/characters/${character?.id}`)}
        >
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
                    <Typography
                        variant="body2"
                        style={{
                            display: "-webkit-box",
                            overflow: "hidden",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                        }}
                    >
                        {character?.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CharacterCard;
