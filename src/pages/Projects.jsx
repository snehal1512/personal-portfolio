import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import PageWrapper from "../components/PageWrapper";
import swillswap_img from "../assets/skillswap.png"
import netflix_img from "../assets/netflix.jpg"
import emotionalchatbot_img from "../assets/emochatbot.jpg"
import graphql_img from "../assets/graphql.png"
import resumeassistant_img from "../assets/resume-assistant.png"

const projects = [
  {
    title: "SkillSwap",
    description:
      "A skill-sharing platform where users can teach and learn skills from each other. Built using React, Node.js, MongoDB, and Gemini API for AI-based user matching.",
    image: `${swillswap_img}`,
    github: "https://github.com/snehal1512/skillswap",
  },
  {
    title: "Netflix Clone",
    description:
      "A Netflix-style movie streaming app built with React and Firebase for secure authentication and real-time data handling.",
    image: `${netflix_img}`,
    github: "https://github.com/snehal1512/netflix-clone",
  },
  {
    title: "Resume Assistant",
    description:
      "An AI-powered resume builder using OpenAI API that suggests phrasing, formatting, and structure improvements dynamically.",
    image: `${resumeassistant_img}`,
    github: "https://github.com/snehal1512/resume-assistant",
  },
  {
    title: "Emotional Assistant Chatbot",
    description:
      "A chatbot built with Flask and HuggingFace Transformers that provides empathy-based responses using sentiment detection.",
    image: `${emotionalchatbot_img}`,
    github: "https://github.com/snehal1512/emotional-assistant-chatbot",
  },
  {
    title: "GraphQL API",
    description:
      "Developed a scalable GraphQL API for an e-commerce platform, optimizing data fetching and reducing query latency by 40%.",
    image: `${graphql_img}`,
    github: "https://github.com/snehal1512/graphql",
  },
  {
    title: "Movie Ticket Booking Web App",
    description:
      "A MERN-based movie ticket booking app with seat selection and secure payments, achieving 50% load time reduction.",
    image: `${swillswap_img}`,
    github: "",
  },
  {
    title: "Feast Hub – Food Delivery App",
    description:
      "Developed a Flutter + Firebase food delivery app with 500+ downloads. Integrated third-party APIs for tracking and secure payments.",
    image: `${swillswap_img}`,
    github: "",
  },
  {
    title: "Store Inventory Prediction System",
    description:
      "Built an ML model achieving 96% accuracy for store inventory forecasting using Python and data visualization.",
    image: `${swillswap_img}`,
    github: "",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Developed my personal website using React, MUI, and Framer Motion to showcase my skills, projects, and experiences.",
    image: `${swillswap_img}`,
    github: "https://github.com/snehal1512/personal-portfolio",
  },
];

const Projects = () => {
  return (
    <PageWrapper>
      <Container
        maxWidth="lg"
        sx={{
          py: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
        >
          Projects
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          mb={6}
        >
          Explore my featured and academic projects — a blend of creativity,
          data-driven solutions, and real-world problem-solving.
        </Typography>

        {/* GRID - 3 cards per row */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {projects.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4} // ensures 3 per row on desktop
              key={index}
              display="flex"
              justifyContent="center"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{ width: "100%", maxWidth: 350 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: "20px",
                    boxShadow: 4,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      boxShadow: 10,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: "cover",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      color="primary"
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        minHeight: "90px",
                        lineHeight: 1.5,
                      }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>

                  {project.github && (
                    <Box textAlign="center" pb={2}>
                      <Button
                        variant="contained"
                        startIcon={<GitHubIcon />}
                        href={project.github}
                        target="_blank"
                        sx={{
                          textTransform: "none",
                          borderRadius: "12px",
                          px: 3,
                        }}
                      >
                        View on GitHub
                      </Button>
                    </Box>
                  )}
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </PageWrapper>
  );
};

export default Projects;
