import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pages = ["Home", "About", "Projects", "Skills", "Hackathons", "Contact"];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#fff" }} elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold" sx={{ color: "#000000" }}>
          Snehal Thorat
        </Typography>
        <Box>
          {pages.map((page) => (
            <Button
              key={page}
              component={Link}
              to={`/${page === "Home" ? "" : page.toLowerCase()}`}
              sx={{ mx: 1, color: "#000000" }} // button text color set to black
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
