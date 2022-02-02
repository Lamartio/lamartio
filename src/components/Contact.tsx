import * as React from "react";
import {FunctionComponent} from "react";
import {Box, Button, Stack, Typography} from "@mui/material";
import {Row} from "./Row";


export const Contact: FunctionComponent = () =>
    <Row badge={<Typography variant="h3" component="span">🤝</Typography>}>
        <Typography variant="h3" component="div" sx={{mt: 6}}>
            Contact
        </Typography>
        <p>
            That's it for now! I hoped you enjoyed my story and found the interest to work together. If you are,
            don't hesitate to come in contact ;)
        </p>
        <Stack direction="column" spacing={1} sx={{width: 200}}>
            <Button
                component="span"
                variant="contained"
                onClick={() => window.open("mailto:lamarti.danny@gmail.com")}>
                send me an email
            </Button>
            <Button
                component="span"
                variant="contained"
                onClick={() => window.open("https://www.linkedin.com/in/dannylamarti")}>
                visit my LinkedIn
            </Button>
            <Button
                component="span"
                variant="contained"
                onClick={() => window.open("https://github.com/Lamartio")}>
                visit my Github
            </Button>
        </Stack>
        <Box sx={{my: 10}}/>
    </Row>