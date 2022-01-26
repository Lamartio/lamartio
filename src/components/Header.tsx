import {FunctionComponent} from "react";
import {Divider, Stack, Typography} from "@mui/material";
import * as React from "react";

export const Header: FunctionComponent = () =>
    <Stack
        direction={{xs: 'column', sm: 'row'}}
        justifyContent="flex-start"
        alignItems={{xs: 'stretch', sm: 'center'}}
        spacing={2}
        sx={{mb:4}}
    >
        <Typography variant="h3" component="span" sx={{ textAlign: 'center' }}>Danny Lamarti</Typography>
        <Divider textAlign='right' sx={{flexGrow: 1}}>
            <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                divider={<Divider orientation="vertical" flexItem/>}
            >
                <Typography variant="subtitle2" component="span">
                    about
                </Typography>
                <Typography variant="subtitle2" component="span">
                    work
                </Typography>
                <Typography variant="subtitle2" component="span">
                    contact
                </Typography>
            </Stack>
        </Divider>
    </Stack>