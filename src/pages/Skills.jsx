import React from "react";
import { Container, Typography, Box, Chip, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { FaLaptopCode, FaTools, FaCloud, FaDatabase } from "react-icons/fa";

const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "C++", "JavaScript", "HTML", "CSS", "PHP", "React"],
    color: "primary",
    icon: <FaLaptopCode size={24} />,
  },
  {
    category: "Tools & Platforms",
    skills: ["Snowflake", "Looker", "Snap Logic", "Visual Studio", "GitHub", "Jira", "Confluence", "ServiceNow", "Tableau", "Docker"],
    color: "secondary",
    icon: <FaTools size={24} />,
  },
  {
    category: "Cloud",
    skills: ["AWS", "Azure Cloud Services"],
    color: "success",
    icon: <FaCloud size={24} />,
  },
  {
    category: "Databases",
    skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "GraphQL"],
    color: "warning",
    icon: <FaDatabase size={24} />,
  },
];

const Skills = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8, position: "relative", overflow: "hidden" }}>
      {/* Floating Background Animation */}
      <motion.div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "rgba(255, 200, 150, 0.1)",
          top: "-50px",
          left: "-50px",
          zIndex: 0,
        }}
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(150, 200, 255, 0.08)",
          bottom: "-50px",
          right: "-50px",
          zIndex: 0,
        }}
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
      />

      <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center" sx={{ zIndex: 1, position: "relative" }}>
        My Technical Skills
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4, position: "relative", zIndex: 1 }}>
        {skillsData.map((category, idx) => (
          <Grid item xs={12} md={6} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Card
                sx={{
                  p: 3,
                  borderRadius: 3,
                  height: "100%",
                  background: "linear-gradient(135deg, #ffffff, #f7f7f7)",
                  boxShadow: 6,
                  cursor: "pointer",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                    {category.icon}
                    <Typography variant="h6" fontWeight="bold">
                      {category.category}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
                    {category.skills.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        color={category.color}
                        sx={{ fontWeight: "bold", cursor: "default" }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
