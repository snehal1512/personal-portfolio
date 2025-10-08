import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff", // white background
        color: "#000",
        py: 3,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        px: 4,
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      <Typography variant="h6" fontWeight="bold" sx={{ mb: { xs: 2, sm: 0 } }}>
        Snehal Thorat
      </Typography>
      <Box>
        <IconButton
          component="a"
          href="https://www.instagram.com/snehal_1512"
          target="_blank"
          rel="noopener"
          sx={{ color: "#000" }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/snehalthoratt"
          target="_blank"
          rel="noopener"
          sx={{ color: "#000" }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/snehal1512"
          target="_blank"
          rel="noopener"
          sx={{ color: "#000" }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component="a"
          href="/contact"
          sx={{ color: "#000" }}
        >
          <EmailIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
