import * as React from "react";
import {FunctionComponent} from "react";
import {Avatar, Box, Divider, Grid, Stack, Typography} from "@mui/material";
import {StaticImage} from "gatsby-plugin-image";


export const imageSize = 128

export const About: FunctionComponent = () =>
    <Grid container spacing={3}>
        <Grid item xs={12} sm={5} md={4}>
            <Divider orientation="vertical" >
                <Box
                    sx={{ width: imageSize, height: imageSize, display: 'inline-block' }}>
                <Avatar
                    sx={{ width: imageSize, height: imageSize }}>
                    <StaticImage  width={imageSize} height={imageSize} src="../images/le_moi.jpg" alt="Danny Lamarti"  />
                </Avatar>
                </Box>
            </Divider>
        </Grid>
        <Grid item xs={12} sm={7} md={8}>
            <Stack direction="column" alignItems="flex-start">
                <Typography variant="h1" component="span">
                   About me
                </Typography>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit inventore magnam porro quod sequi suscipit ut voluptatibus! Consequatur et excepturi, exercitationem facilis nesciunt nihil officia perferendis quas sit veritatis voluptates.
            </Stack>
        </Grid>
    </Grid>