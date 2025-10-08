import React from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

// Example blog/travel data
const blogs = [
  {
    title: "My Trip to Switzerland",
    description: "Exploring the Alps and beautiful lakes in 2024.",
    image: "/assets/switzerland.jpg",
    link: "#",
  },
  {
    title: "Tech Blog: React Projects",
    description: "Sharing my learnings from building React apps.",
    image: "/assets/reactblog.jpg",
    link: "#",
  },
  {
    title: "Hiking Adventures",
    description: "Documenting my hikes in national parks.",
    image: "/assets/hiking.jpg",
    link: "#",
  },
];

const Blogs = () => {
  return (
    <PageWrapper>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
          Blogs & Travel
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card elevation={3}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={blog.image}
                    alt={blog.title}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {blog.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href={blog.link} target="_blank">
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </PageWrapper>
  );
};

export default Blogs;
