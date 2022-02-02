import * as React from "react";
import {FunctionComponent} from "react";
import {Box, Chip, Typography} from "@mui/material";
import {OverridableStringUnion} from "@mui/types";
import {ChipPropsColorOverrides} from "@mui/material/Chip/Chip";
import {Row} from "./Row";


type ChipColor = OverridableStringUnion<'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning', ChipPropsColorOverrides>

const data = [
    {
        color: 'primary' as ChipColor,
        name: 'platforms',
        tags: ['Android', 'iOS', 'web', 'Firebase', 'Xamarin']
    },
    {
        color: 'secondary' as ChipColor,
        name: 'languages',
        tags: ['Kotlin', 'Java', 'Typescript', 'Swift', 'C#', 'NodeJs', 'Git', 'webGL', 'TDD']
    },
    {
        color: 'success' as ChipColor,
        name: 'certificates',
        tags: ['PSM 1', 'Holobody', '10X (TBA)']
    },
]

export const TLDR: FunctionComponent = () =>
    <Row badge={<Typography variant="h5" component="span">TL;DR</Typography>}>
        <Box sx={{mb: 3}}>
            {data.map(({tags, name, color}) =>
                <Box
                    key={name}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap',
                        listStyle: 'none',
                        py: 0.5,
                        m: 0,
                    }}>
                    {tags.map((tag, i) => <Chip key={i} label={tag} color={color} sx={{mr: .5}}/>)}
                </Box>
            )}
        </Box>
    </Row>