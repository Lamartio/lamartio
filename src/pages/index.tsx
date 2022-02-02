import * as React from "react"
import {FunctionComponent} from "react"
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "../theme";
import {Header} from "../components/Header";
import {Welcome} from "../components/Welcome";
import {About} from "../components/About";
import {Contact} from "../components/Contact";
import {Work} from "../components/Work";

const IndexPage: FunctionComponent = () => {
    return <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container>
            <Header/>
            <Welcome/>
            <About/>
            <Work/>
            <Contact/>
        </Container>
    </ThemeProvider>
}

export default IndexPage