import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../../utils/constants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

type Props = {
    summaryText: string;
    detailsContent: string[];
};

const RootAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: COLORS.LIGHT_GRAY,
    marginTop: "25px",
    color: "white",
    width: "100%",
}));

const ContentAccordion: React.FC<Props> = ({ summaryText, detailsContent }) => {
    if (!detailsContent.length) {
        return null;
    }

    return (
        <RootAccordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: "2rem", color: "white" }} />}>
                <Typography variant="h2">{summaryText}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <List sx={{ width: "100%" }}>
                    {detailsContent.map((content: any) => (
                        <ListItem key={content}>
                            <ListItemText primary={content} />
                        </ListItem>
                    ))}
                </List>
            </AccordionDetails>
        </RootAccordion>
    );
};

export default ContentAccordion;
