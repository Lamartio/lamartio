import * as React from 'react';
import {FunctionComponent} from 'react';
import MuiLink from '@mui/material/Link';
import {Link as GatsbyLink} from 'gatsby';

const Link: FunctionComponent<{ to: string }> = (props) => <MuiLink component={GatsbyLink} {...props} />;

export default Link;