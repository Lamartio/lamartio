import * as React from "react";
import {FunctionComponent} from "react";
import {Divider, Grid} from "@mui/material";

export const Row: FunctionComponent<{ badge?: JSX.Element }> = ({badge, children}) =>
    <Grid container spacing={3}>
        <Grid item xs={12} sm={5} md={4}>
            {
                badge
                    ? <Divider orientation="vertical">{badge}</Divider>
                    : <Divider orientation="vertical" sx={{width: '1px', pl: '1px', mx: 'auto'}}/>
            }
        </Grid>
        <Grid item xs={12} sm={7} md={8}>
            {children}
        </Grid>
    </Grid>