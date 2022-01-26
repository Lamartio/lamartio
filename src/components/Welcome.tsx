import * as React from "react";
import {FunctionComponent} from "react";
import {Divider, Grid, Stack, Typography} from "@mui/material";

export const Welcome: FunctionComponent = () =>
    <Grid container spacing={3}>
        <Grid item xs={12} sm={5} md={4}>
            <Divider orientation="vertical">
                <Typography variant="h1" component="span">
                    👋
                </Typography>
            </Divider>
        </Grid>
        <Grid item xs={12} sm={7} md={8}>
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-end"
                spacing={0}
            >
                <Typography variant="h1" component="span">
                    Hi There!
                    <br/>
                    <br/>
                </Typography>
                <Typography variant="h6" component="span">
                    I'm Danny! A freelance senior software developer specialized in...
                </Typography>
                <ul style={{listStyle: 'square'}}>
                    <li><Typography variant="h6" component="span">Android</Typography></li>
                    <li><Typography variant="h6" component="span">iOS</Typography></li>
                    <li><Typography variant="h6" component="span">Web</Typography></li>
                </ul>
                <Typography variant="h6" component="span">
                    So I'm mostly making a great user experience.
                </Typography>
                <Typography variant="h6" component="span">
                    But that's not all!!! Wish to know more?
                </Typography>
                <Typography variant="h1" component="span">
                    <br/>
                    <br/>
                </Typography>
            </Stack>
        </Grid>
    </Grid>