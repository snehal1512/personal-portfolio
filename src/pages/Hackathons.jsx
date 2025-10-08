import React, { useState } from "react";
import { Container, Typography, Card, CardContent, Button, Collapse, Box } from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";
import PageWrapper from "../components/PageWrapper";
import hackuta1_img from "../assets/hackuta1.JPG";
import hackuta2_img from "../assets/hackuta2.JPG";
import hackuta3_img from "../assets/hackuta3.jpeg";
import codeathon_img from "../assets/codeathon.jpeg";

const hackathons = [
  {
    title: "Paycom Hackathon",
    images: [codeathon_img],
    project: {
      name: "Swag Tracker Application",
      description:
        "Developed a full-stack application using React for the frontend and C# (.NET) for the backend. The app features admin and user roles, allowing admins to create events and manage swag items, while users can view upcoming events and see what swag will be distributed. Implemented a real-time interface to track event swag inventory and enhance user engagement. Focused on intuitive UI/UX, role-based access, and smooth data management for seamless event planning.",
    },
  },
  {
    title: "HackUTA 2025",
    images: [hackuta1_img, hackuta2_img, hackuta3_img],
    project: {
      name: "SkillSwap App",
      description:
        "Developed a full-stack MERN application integrating Auth0 for secure authentication and the Gemini API to match users based on skills, similar to popular matching apps. Enabled users to connect, share, and learn new skills in real-time while ensuring smooth performance and a seamless user experience.",
    },
  },
];

const Hackathons = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <PageWrapper>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
          Hackathon Experiences
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ minWidth: 280, flex: "1 1 280px" }}
            >
              <Card elevation={3} sx={{ minHeight: 400 }}>
                {/* Image Slider */}
                <Box sx={{ width: "100%", height: 300 }}>
                  <Slider {...sliderSettings}>
                    {hackathon.images.map((img, idx) => (
                      <Box key={idx}>
                        <img
                          src={img}
                          alt={`${hackathon.title} ${idx + 1}`}
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                            borderTopLeftRadius: 4,
                            borderTopRightRadius: 4,
                          }}
                        />
                      </Box>
                    ))}
                  </Slider>
                </Box>

                <CardContent>
                  {/* Title */}
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {hackathon.title}
                  </Typography>

                  {/* Project Name + Description */}
                  <Button
                    size="small"
                    onClick={() => handleExpand(index)}
                    sx={{ textTransform: "none", padding: 0 }}
                  >
                    {hackathon.project.name} - {expandedIndex === index ? "Hide" : "View Description"}
                  </Button>
                  <Collapse in={expandedIndex === index}>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {hackathon.project.description}
                    </Typography>
                  </Collapse>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </PageWrapper>
  );
};

export default Hackathons;
