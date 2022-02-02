import * as React from "react";
import {FunctionComponent} from "react";
import {Box, Button, Typography} from "@mui/material";
import {Row} from "./Row";


export const Contact: FunctionComponent = () =>
    <Row badge={<Typography variant="h3" component="span">🤝</Typography>}>
        <Typography variant="h3" component="div">
            Contact
        </Typography>
        <p>
            That's it for now! I hoped you enjoyed my story and found the interest to work together. If you are,
            don't hesitate to come in contact ;)
        </p>
        <Button
            component="span"
            sx={{mx: 'auto'}}
            variant="contained"
            onClick={() => window.open("mailto:lamarti.danny@gmail.com")}>
            Send me an email
        </Button>
        <Box sx={{my: 10}}/>
    </Row>