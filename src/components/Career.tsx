import * as React from "react";
import {FunctionComponent} from "react";
import {Row} from "./Row";
import {Typography} from "@mui/material";
import {TLDR} from "./TLDR";

export const Career: FunctionComponent = () => {
    return <>
        <Row>
            <Typography gutterBottom variant="h3" sx={{mt:10}}>Career</Typography>
        </Row>
        <TLDR/>
    </>;
}