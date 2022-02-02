import * as React from "react";
import {FunctionComponent} from "react";
import {Avatar, Box, Paper, Stack, Typography} from "@mui/material";
import {StaticImage} from "gatsby-plugin-image";
import {Row} from "./Row";

export const imageSize = 128

const Badge: FunctionComponent = () =>
    <Box
        sx={{width: imageSize, height: imageSize, display: 'inline-block'}}>
        <Avatar
            sx={{width: imageSize, height: imageSize}}>
            <StaticImage width={imageSize} height={imageSize} src="../images/le_moi.jpg"
                         alt="Danny Lamarti"/>
        </Avatar>
    </Box>

export const About: FunctionComponent = () =>
    <Row badge={<Badge/>}>
        <Stack direction="column" alignItems="flex-start">
            <Typography gutterBottom variant="h3">
                About me
            </Typography>
            <p>
                Back in 2011, while studying Civil Engineering, I got the assignment to make a little mock app for
                aiding the construction site. Not knowing how, but enthusiastic about what, I started learning
                myself how to make Android applications. After graduating I said goodbye to my Civil Engineering
                career and dove in the world of programming.
            </p>
            <Typography variant="h5">
                The great journey 🚚
            </Typography>
            <p>
                In January 2020 I sold my house and quit my job to start a live of adventure. With no more
                belongings holding me, I bought a van, remodelled it to a camper and started touring through europe.
                During this time I decided to develop myself and my health and that led me to my certification of
                Holistic Transformational Health Coach (in short: Holobody) and fitness trainer of the 10X method.
            </p>

            <Paper variant="outlined" sx={{p: .5}}>
                <StaticImage
                    width={imageSize}
                    layout="fullWidth"
                    src="../images/certificate_holobody_coach.jpg"
                             alt="Holobody certificate"
                />
            </Paper>
        </Stack>
    </Row>