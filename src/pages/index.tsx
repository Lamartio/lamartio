import * as React from "react"
import {FunctionComponent} from "react"
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "../theme";
import {Header} from "../components/Header";
import {Employment} from "../components/Employment";
import {Welcome} from "../components/Welcome";
import {About} from "../components/About";
import {Contact} from "../components/Contact";

const IndexPage: FunctionComponent = () => {
    return <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container>
            <Header/>
            <Welcome/>
            <About/>
            <Employment/>
            <Contact/>
        </Container>
    </ThemeProvider>
}

export default IndexPage
