import * as React from "react"
import {FunctionComponent} from "react"
import {Container, CssBaseline, Divider, Grid, ThemeProvider, Typography} from "@mui/material";
import {theme} from "../theme";
import {Header} from "../components/Header";
import {Employment} from "../components/Employment";
import {Welcome} from "../components/Welcome";
import {About} from "../components/About";
import {Contact} from "../components/Contact";
import {TLDR} from "../components/TLDR";

const Work: FunctionComponent = ({children}) =>
    <>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={5} md={4}>
                <Divider orientation="vertical" sx={{width:'1px', pl: '1px', mx: 'auto'}}/>
            </Grid>
            <Grid item xs={12} sm={7} md={8}>
                <Typography variant="h3">Work</Typography>

            </Grid>
        </Grid>
    {children}
</>

const IndexPage: FunctionComponent = () => {
    return <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container>
            <Header/>
            <Welcome/>
            <About/>
            <Work>
                <TLDR/>
            </Work>
            <Employment/>
            <Contact/>
        </Container>
    </ThemeProvider>
}

export default IndexPage