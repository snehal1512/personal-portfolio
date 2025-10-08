import React from "react";
import { Container, Typography, Button, Box, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import profilePic from "../assets/mainprofile.jpeg";

const Home = () => {
  return (
    <PageWrapper>
      <Container maxWidth="md" sx={{ py: 10 }}>
        {/* Intro Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            mb: 8,
          }}
        >
          <motion.img
            src={profilePic}
            alt="Snehal Thorat"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              marginBottom: "1.5rem",
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Hi, I’m Snehal Thorat 👋
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Software Engineer | Data Enthusiast | Problem Solver
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              I enjoy building impactful software solutions, exploring data, and learning new technologies.
            </Typography>

            <Button
              component={Link}
              to={`${process.env.PUBLIC_URL}/about`}
              variant="contained"
              color="primary"
              sx={{ mr: 2 }}
            >
              About Me
            </Button>

            <Button
              component={Link}
              to={`${process.env.PUBLIC_URL}/projects`}
              variant="outlined"
              color="primary"
            >
              View Projects
            </Button>
          </motion.div>
        </Box>

        {/* Highlights Section */}
        <Grid container spacing={4}>
          {[
            {
              title: "Projects",
              desc: "Explore my portfolio of software development and data-driven projects.",
              link: "/projects",
            },
            {
              title: "Hackathons",
              desc: "Check out hackathon experiences and innovative solutions I’ve contributed to.",
              link: "/hackathons",
            },
            {
              title: "Blogs",
              desc: "Read about my thoughts on technology, learning, and career growth.",
              link: "/blogs",
            },
          ].map((card, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    p: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: 4,
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {card.desc}
                    </Typography>
                    <Button
                      component={Link}
                      to={`${process.env.PUBLIC_URL}${card.link}`}
                      size="small"
                      color="primary"
                    >
                      Learn More →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </PageWrapper>
  );
};

export default Home;
