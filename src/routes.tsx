import React from "react";
import {
  AppBar,
  Box,
  Container,
  createTheme,
  CssBaseline,
  MenuItem,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { StarredContext, StarredContextProps } from "./context/starred_context";
function MainRoutes() {
  let { count } = React.useContext(StarredContext) as StarredContextProps;

  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar>
          <Toolbar component="nav">
            <MenuItem>
              <Typography textAlign="center">
                <Link to="/" style={{ color: "white" }}>
                  Home
                </Link>
              </Typography>
            </MenuItem>
            {/* I will just add count here , 
                we can also make a component to show all starred articles */}
            <MenuItem>
              <Typography textAlign="center">
                <Link to="/" style={{ color: "white" }}>
                  Count :{" "}
                  <span style={{ color: "yellow", fontSize: "20px" }}>
                    {" "}
                    {count}
                  </span>
                </Link>
                {/* I will just add count here , 
                we can also make a component to show all starred articles */}
              </Typography>
            </MenuItem>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Container>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default MainRoutes;
