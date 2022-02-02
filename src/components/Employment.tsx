import * as React from "react";
import {FunctionComponent} from "react";
import {Box, Typography} from "@mui/material";
import {Row} from "./Row";
import {MDXRenderer} from "gatsby-plugin-mdx";
import {MuiMDXProvider} from "./MuiMDXProvider";
import {EmploymentInfo, EmploymentInfoData} from "./EmploymentInfo";

export type EmploymentData = { data: { body: string, frontmatter: EmploymentInfoData } }

export const Employment: FunctionComponent<EmploymentData> = ({data}) => {

    return <Row badge={<EmploymentInfo data={data.frontmatter}/>}>
        <Typography gutterBottom variant="h5">{data.frontmatter.employer}</Typography>
        <Box sx={{pb: 3}}>
            <MuiMDXProvider>
                <MDXRenderer>{data.body}</MDXRenderer>
            </MuiMDXProvider>
        </Box>
    </Row>;
}