import * as React from "react";
import {FunctionComponent} from "react";
import {Avatar, Box, Chip, Divider, Grid, Paper, Stack, styled, Typography} from "@mui/material";
import {deepPurple} from "@mui/material/colors";


const ListItem = styled('li')(({theme}) => ({
    margin: theme.spacing(0.5),
}));

const Company: FunctionComponent = () =>
    <Paper variant="outlined" sx={{whiteSpace: 'inherit'}}>
        <Stack
            sx={{p: 2}}
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0}
        >
            <Avatar sx={{bgcolor: deepPurple[500]}} variant="rounded">OP</Avatar>
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
                <Divider textAlign="left" sx={{flexGrow: 1}}>
                    <Typography variant="caption">
                        03-2021
                    </Typography>
                </Divider>
                <Divider textAlign="right" sx={{flexGrow: 1}}>
                    <Typography variant="caption">
                        03-2017
                    </Typography>
                </Divider>
            </Stack>
            <Typography sx={{whiteSpace: 'inherit'}}>
                <Box component="ul" sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    p: 0.5,
                    m: 0,
                }}>
                    <ListItem><Chip label="Android"/></ListItem>
                    <ListItem><Chip label="iOS"/></ListItem>
                    <ListItem><Chip label="Web"/></ListItem>
                    <ListItem><Chip label="Android"/></ListItem>
                    <ListItem><Chip label="Android"/></ListItem>
                    <ListItem><Chip label="Android"/></ListItem>
                </Box>
            </Typography>
        </Stack>

    </Paper>

export const Employment: FunctionComponent = () =>
    <Grid container spacing={3}>
        <Grid item xs={12} sm={5} md={4}>
            <Divider orientation="vertical">
                <Company/>
            </Divider>
        </Grid>
        <Grid item xs={12} sm={7} md={8}>
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
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, animi autem dolor eum
                exercitationem facere fuga fugiat harum hic in ipsum maiores minus non obcaecati omnis totam.
                Amet
                aspernatur autem culpa dignissimos error eveniet facilis, fugit illo incidunt itaque iusto
                molestias
                quaerat repudiandae totam veritatis! A ex repellendus unde!
            </p>
        </Grid>
    </Grid>