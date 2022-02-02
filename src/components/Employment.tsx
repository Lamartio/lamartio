import * as React from "react";
import {FunctionComponent} from "react";
import {Divider, Paper, Stack, styled, Typography} from "@mui/material";
import {Row} from "./Row";


const ListItem = styled('li')(({theme}) => ({
    margin: theme.spacing(0.5),
}));

const Company: FunctionComponent = () =>
    <Paper   elevation={0} sx={{whiteSpace: 'inherit'}}>
        <Stack
            sx={{px: 2}}
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0}
        >
            {/*<Avatar sx={{bgcolor: deepPurple[500]}} variant="rounded">OP</Avatar>*/}
            <Typography variant="h5" sx={{textOverflow: 'ellipsis'}}>
                Elements Interactive
            </Typography>
            <Typography variant="h6" sx={{textOverflow: 'ellipsis'}}>
                Senior (Android) developer
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
                        03-2017
                    </Typography>
                </Divider>
                <Divider sx={{flexGrow: 1}}>
                    <Typography variant="caption">
                        03-2021
                    </Typography>
                </Divider>
            </Stack>
        </Stack>

    </Paper>

export const Employment: FunctionComponent = () =>
    <Row badge={<Company/>}>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, animi autem dolor eum
            exercitationem facere fuga fugiat harum hic in ipsum maiores minus non obcaecati omnis totam.
            Amet
            aspernatur autem culpa dignissimos error eveniet facilis, fugit illo incidunt itaque iusto
            molestias
            quaerat repudiandae totam veritatis! A ex repellendus unde!
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, animi autem dolor eum
            exercitationem facere fuga fugiat harum hic in ipsum maiores minus non obcaecati omnis totam.
            Amet
            aspernatur autem culpa dignissimos error eveniet facilis, fugit illo incidunt itaque iusto
            molestias
            quaerat repudiandae totam veritatis! A ex repellendus unde!
        </p>
    </Row>