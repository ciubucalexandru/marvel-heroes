import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import MarvelIcon from "../marvel-icon.jpg";

const MarvelHeader: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-start",
                height: "70px",
                backgroundColor: "#202020",
                padding: "0px 100px",
                borderBottom: "1px solid #393939",
                alignContent: "center",
            }}
        >
            <img
                src={MarvelIcon}
                alt="Marvel Logo"
                style={{
                    cursor: "pointer",
                }}
                onClick={() => {
                    navigate("/characters");
                }}
            />
        </Box>
    );
};

export default MarvelHeader;
