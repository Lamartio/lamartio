import {Typography} from "@mui/material";
import * as React from "react";
import {FunctionComponent} from "react";
import {MDXProvider, MDXProviderComponents} from "@mdx-js/react";

export const muiComponents: MDXProviderComponents = {
    h1: ({children}) => <Typography gutterBottom variant="h1">{children}</Typography>,
    h2: ({children}) => <Typography gutterBottom variant="h2">{children}</Typography>,
    h3: ({children}) => <Typography gutterBottom variant="h3">{children}</Typography>,
    h4: ({children}) => <Typography gutterBottom variant="h4">{children}</Typography>,
    h5: ({children}) => <Typography gutterBottom variant="h5">{children}</Typography>,
    h6: ({children}) => <Typography gutterBottom variant="h6">{children}</Typography>,
    p: ({children}) => <Typography gutterBottom variant="body1">{children}</Typography>
};

export const MuiMDXProvider: FunctionComponent<{ components?: MDXProviderComponents | ((components: MDXProviderComponents) => MDXProviderComponents) }> = ({children, components}) =>
    <MDXProvider components={{...muiComponents, ...components}}>
        {children}
    </MDXProvider>