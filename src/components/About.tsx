import * as React from "react";
import {FunctionComponent} from "react";
import {Avatar, Box, Stack} from "@mui/material";
import {StaticImage} from "gatsby-plugin-image";
import {Row} from "./Row";
import {graphql, useStaticQuery} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import {MuiMDXProvider} from "./MuiMDXProvider";

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

export const About: FunctionComponent = () => {
    const data = useStaticQuery(graphql`
        {
            allMdx(filter: {slug: {eq: "about"}}) {
                edges {
                    node {
                        id
                        body
                        slug
                    }
                }
            }
        }
    `)

    return <Row badge={<Badge/>}>
        <Stack direction="column" alignItems="flex-start">
            <MuiMDXProvider>
                <MDXRenderer>{data.allMdx.edges[0].node.body}</MDXRenderer>
            </MuiMDXProvider>
        </Stack>
    </Row>;
}