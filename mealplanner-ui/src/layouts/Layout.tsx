import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import ResponsiveAppBar from "./ResponsiveAppBar";

export const Layout = () => {
  const location = useLocation();
  const isTermsPage = location.pathname === '/terms';
  
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        {!isTermsPage && <ResponsiveAppBar />}
        <Outlet />
        <Footer />
      </Box>
    </React.Fragment>
  );
};
