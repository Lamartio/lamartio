import * as React from "react";
import {FunctionComponent} from "react";
import {Box, Button, Divider, Grid, Typography} from "@mui/material";


export const Contact: FunctionComponent = () =>
    <Grid container spacing={3}>
        <Grid item xs={12} sm={5} md={4}>
            <Divider orientation="vertical">
                <Typography variant="h1" component="span">
                    🤝
                </Typography>
            </Divider>
        </Grid>
        <Grid item xs={12} sm={7} md={8}>
            <Typography variant="h1" component="div">
                Contact
            </Typography>
            <Typography variant="body1" component="div" sx={{my: 2}}>
                That's it for now! I hoped you enjoyed my story and found the interest to work together. If you are,
                don't hesitate to come in contact ;)
            </Typography>
            <Button
                component="span"
                sx={{mx: 'auto'}}
                variant="contained"
                onClick={() => window.open("mailto:lamarti.danny@gmail.com")}>
                Send me an email
            </Button>
            <Box sx={{my: 10}}/>
        </Grid>
    </Grid>