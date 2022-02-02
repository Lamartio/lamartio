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
        tags: ['Kotlin', 'Java', 'Typescript', 'Swift', 'C#', 'NodeJs']
    },
    {
        color: 'success' as ChipColor,
        name: 'certificates',
        tags: ['PSM 1', 'Holobody', '10X (TBA)']
    },
]

export const TLDR: FunctionComponent = () => {
    return <Row badge={<Typography variant="h3" component="span">✨</Typography>}>
            {data.map(({tags, name, color}) => {
                return <Box
                    key={name}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexWrap: 'wrap',
                        listStyle: 'none',
                        py: 0.5,
                        m: 0,
                    }}>
                    {tags.map((e, i) => <Chip key={i} label={e} color={color} sx={{mr: .5}}/>)}
                </Box>
            })}
    </Row>
}