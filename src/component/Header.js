import Toolbar from "@mui/material/Toolbar";
import ChairAltIcon from "@mui/icons-material/ChairAlt";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider} from "@emotion/react";
import {createTheme} from "@mui/material/styles";

const defaultTheme = createTheme();

const Header = () => {
    return(
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar position="relative" sx={{ bgcolor: '#8B4513' }}>
                <Toolbar>
                    <ChairAltIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Carp
                    </Typography>
                    <Box sx={{ flexGrow: 5 }} /> {/* This creates a flexible space to push the following elements to the right */}
                    <Typography variant="subtitle1" sx={{ mr: 2 }}>
                        Profile
                    </Typography>
                    <Typography variant="subtitle1">
                        Logout
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header;