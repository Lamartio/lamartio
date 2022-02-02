import * as React from "react";
import {FunctionComponent} from "react";
import {Row} from "./Row";
import {Typography} from "@mui/material";
import {graphql, useStaticQuery} from "gatsby";
import {TLDR} from "./TLDR";
import {Employment} from "./Employment";

export const Career: FunctionComponent = () => {
    const data = useStaticQuery(graphql`
        {
            allMdx(
                filter: {slug: {regex: "/^employment.*$/"}}
                sort: {fields: frontmatter___startMillis, order: DESC}
            ) {
                edges {
                    node {
                        id
                        body
                        slug
                        frontmatter {
                            start
                            end
                            employer
                            occupation
                            link
                        }
                    }
                }
            }
        }
    `)
    const nodes: any[] = data.allMdx.edges.map((n: any) => n.node);

    return <>
        <Row>
            <Typography gutterBottom variant="h3" sx={{mt:10}}>Career</Typography>
        </Row>
        <TLDR/>
        {nodes.map(node => <Employment key={node.id} data={node}/>)}
    </>;
}