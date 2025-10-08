import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import TypingText from "../components/TypingText";
import profilePic from "../assets/profile.jpeg";
import skillsPic from "../assets/skills.png";
import projectsPic from "../assets/projects.png";
import educationPic from "../assets/education.png"; 
import blogsPic from "../assets/blog.jpeg"; 
import hackathonsPic from "../assets/hackathons.png"; 
import mainprofile_pic from "../assets/mainprofile.jpeg";

// First row cards
const cards = [
  { title: "About Me", description: "Get to know me", link: "/about", image: profilePic },
  { title: "Projects", description: "My latest work", link: "/projects", image: projectsPic },
  { title: "Skills", description: "Technologies I use", link: "/skills", image: skillsPic },
];

// Second row cards
const secondaryCards = [
  { title: "Education & Experience", description: "Education & Work Experience", link: "/about", image: educationPic },
  { title: "Blogs", description: "Read my thoughts", link: "/blogs", image: blogsPic },
  { title: "Hackathons", description: "My hackathon experiences", link: "/hackathons", image: hackathonsPic },
];

const Home = () => {
  const navigate = useNavigate(); // ✅ React Router hook

  return (
    <PageWrapper>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "center",
          px: 2,
          pt: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background floating circles */}
        <motion.div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.15)",
            top: "-50px",
            left: "-50px",
            zIndex: 0,
          }}
          animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            bottom: "-50px",
            right: "-50px",
            zIndex: 0,
          }}
          animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        />

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ zIndex: 1 }}
        >
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Hi, I'm Snehal Thorat
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            <TypingText texts={["Software Engineer", "Data Enthusiast", "Full Stack Developer"]} />
          </Typography>
        </motion.div>

        {/* Profile Section */}
        <Box sx={{ zIndex: 1, maxWidth: 800, width: "100%", mb: 6 }}>
          <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center", boxShadow: 3 }}>
            <CardMedia
              component="img"
              sx={{ width: 200, height: 200, borderRadius: "50%", mt: 2 }}
              image={mainprofile_pic}
              alt="Snehal Thorat"
            />
            <CardContent sx={{ textAlign: "center", p: 3 }}>
              <Typography variant="body1" color="text.secondary" paragraph>
                I'm a passionate Software Engineer with a deep interest in data science and full-stack development. Currently, I'm pursuing my Master's degree in Computer Science at The University of Texas at Arlington.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                I have experience working with various technologies and frameworks, and I'm always eager to learn and grow in the tech industry.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Feel free to explore my portfolio to learn more about my work and projects.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Divider */}
        <Divider sx={{ width: "60%", borderBottomWidth: 2, borderColor: "rgba(0,0,0,0.2)", mb: 6 }} />

        {/* First Row Cards */}
        <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center", mt: 4, zIndex: 1 }}>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
            >
              <Card
                sx={{
                  width: 220,
                  height: 260,
                  cursor: "pointer",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  backgroundColor: "white",
                }}
                onClick={() => navigate(card.link)} // ✅ Fixed navigation
              >
                <CardMedia component="img" height="140" image={card.image} alt={card.title} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>

        {/* Second Row Cards */}
        <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center", mt: 6, zIndex: 1 }}>
          {secondaryCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
            >
              <Card
                sx={{
                  width: 220,
                  height: 260,
                  cursor: "pointer",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  backgroundColor: "white",
                }}
                onClick={() => navigate(card.link)} // ✅ Fixed navigation
              >
                <CardMedia component="img" height="140" image={card.image} alt={card.title} />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default Home;
