import * as React from "react";
import {FunctionComponent} from "react";
import {Divider, Paper, Stack, Typography} from "@mui/material";


export type EmploymentInfoData = { employer: string, occupation: string, start: string, end: string }

export const EmploymentInfo: FunctionComponent<{ data: EmploymentInfoData }> =
    ({data: {employer, occupation, start, end}}) =>
        <Paper elevation={0} sx={{whiteSpace: 'inherit'}}>
            <Stack
                sx={{px: 2}}
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={0}
            >
                {/*<Avatar sx={{bgcolor: deepPurple[500]}} variant="rounded">OP</Avatar>*/}
                <Typography variant="h5" sx={{textOverflow: 'ellipsis'}}>
                    {employer}
                </Typography>
                <Typography variant="h6" sx={{textOverflow: 'ellipsis'}}>
                    {occupation}
                </Typography>

                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={0}
                    sx={{width: 1}}
                >
                    <Divider sx={{flexGrow: 1}}>
                        <Typography variant="caption">
                            {start}
                        </Typography>
                    </Divider>
                    <Divider sx={{flexGrow: 1}}>
                        <Typography variant="caption">
                            {end}
                        </Typography>
                    </Divider>
                </Stack>
            </Stack>
        </Paper>