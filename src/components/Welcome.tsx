import * as React from "react";
import {FunctionComponent} from "react";
import {Stack, Typography} from "@mui/material";
import {Row} from "./Row";

export const Welcome: FunctionComponent = () =>
    <Row badge={<Typography variant="h3" component="span">👋</Typography>}>
        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-end"
            spacing={0}>
            <Typography variant="h3" component="span">
                <br/>
                <br/>
                <br/>
                Hi there!
                <br/>
                <br/>
            </Typography>
            <Typography variant="body1" component="span">
                I'm Danny! A freelance senior software developer specialized in...
            </Typography>
            <ul style={{listStyle: 'square'}}>
                <li><Typography variant="body1" component="span">Android</Typography></li>
                <li><Typography variant="body1" component="span">iOS</Typography></li>
                <li><Typography variant="body1" component="span">Web</Typography></li>
            </ul>
            <Typography variant="body1" component="span">
                So I'm mostly making a great user experience.
            </Typography>
            <Typography variant="body1" component="span">
                But that's not all! Wish to know more?
            </Typography>
            <Typography variant="h1" component="span">
                <br/>
                <br/>
            </Typography>
        </Stack>
    </Row>