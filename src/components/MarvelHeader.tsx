import React from "react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router";
import MarvelIcon from "../marvel-icon.jpg";
import { COLORS } from "../utils/constants";
import { styled } from "@mui/material/styles";

const RootBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    height: "70px",
    backgroundColor: COLORS.LIGHT_GRAY,
    padding: "0px 100px",
    borderBottom: "1px solid #393939",
    alignContent: "center",
}));

const MarvelHeader: React.FC = () => {
    const navigate = useNavigate();

    return (
        <RootBox>
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
        </RootBox>
    );
};

export default MarvelHeader;
