import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@emotion/react";
import Link from "@mui/material/Link";
import {createTheme} from "@mui/material/styles";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const defaultTheme = createTheme();

const Footer = () => {
    return(
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Carp
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    All rights reserved!
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    )
}

export default Footer;