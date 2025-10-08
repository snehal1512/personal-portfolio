import React, { useState } from "react";
import { Container, Box, Typography, Button, Avatar, Tabs, Tab, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import profilePic from "../assets/mainprofile.jpeg";

const About = () => {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const education = [
    {
      school: "The University of Texas at Arlington",
      degree: "M.S., Computer Science",
      gpa: "4.0 GPA",
      duration: "Jan 2024 – Dec 2025",
      courses:
        "Design and Analysis of Algorithms, Data Analysis and Modelling Techniques, Database Systems, Data Mining, Cloud Computing and Big Data, Software Engineering, Machine Learning, Artificial Intelligence"
    },
    {
      school: "Savitribai Phule Pune University",
      degree: "B.E., Information Technology",
      gpa: "3.7 GPA",
      duration: "Aug 2017 – Jul 2021",
      courses:
        "Data Structures and Algorithms, DBMS, Software Engineering, Cloud Computing, Operating Systems, Data Science & Big Data Analytics, Machine Learning, Object Oriented Programming, Distributed Systems"
    }
  ];

  const experience = [
    {
      role: "Software Developer Intern",
      company: "PAYCOM – TX, USA",
      duration: "May 2025 – Aug 2025",
      points: [
        "Developed and maintained a full-stack analytics dashboard using React, Next.js, and Node.js.",
        "Designed and integrated RESTful APIs and database schemas in MySQL for optimized backend performance.",
        "Implemented TypeScript for enhanced code quality and maintainability.",
        "Collaborated with cross-functional teams to deliver intuitive user experiences."
      ]
    },
    {
      role: "Web Developer",
      company: "UTA Office of Information Technology – TX, USA",
      duration: "Oct 2024 – May 2025",
      points: [
        "Built and maintained modular components in Sitecore CMS using Razor, HTML/CSS, and C#.",
        "Managed and customized CampusPress sites, including themes, plugins, and PHP/JS tweaks.",
        "Utilized ServiceNow to manage ITSM workflows and automate processes.",
        "Conducted content audits and SEO improvements using metadata standards and analytics tools."
      ]
    },
    {
      role: "Business Intelligence Developer",
      company: "ENCORA INC. – Pune, IN",
      duration: "Mar 2023 – Jan 2024",
      points: [
        "Led development of complex data models and ETL processes, optimizing data retrieval.",
        "Implemented BI tools: Snowflake, Looker, Snap Logic, Symmetric DS, Ansible, and JIRA.",
        "Optimized queries improving performance and delivered actionable insights.",
        "Provided ongoing support to stakeholders enhancing reliability of BI solutions."
      ]
    },
    {
      role: "Software Developer",
      company: "ACCENTURE – Pune, IN",
      duration: "Jul 2021 – Jan 2023",
      points: [
        "Developed comprehensive applications solving operational, data, and security challenges.",
        "Resolved performance bottlenecks improving database and query performance.",
        "Launched an enhanced solution framework, increasing team efficiency.",
        "Framework improvements led to higher customer satisfaction and system reliability."
      ]
    }
  ];

  return (
    <PageWrapper>
      <Container maxWidth="md" sx={{ py: 8 }}>
        {/* Intro Section */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 6 }}>
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <Avatar src={profilePic} alt="Snehal Thorat" sx={{ width: 200, height: 200, mb: 3 }} />
          </motion.div>
          <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom textAlign="center">
              About Me
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph textAlign="center">
              Hi! I’m Snehal Thorat, a passionate Software Engineer and Data Enthusiast. I love building applications that solve real-world problems and exploring new technologies.
            </Typography>
            <Button variant="contained" color="primary" href="/resume.pdf" target="_blank" sx={{ mt: 2 }}>
              Download Resume
            </Button>
          </motion.div>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Tabs
            value={tab}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
            sx={{ mb: 4 }}
          >
            <Tab label="Education" />
            <Tab label="Experience" />
          </Tabs>

          {/* Education Cards */}
          {tab === 0 && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {education.map((edu, index) => (
                <Card key={index} sx={{ p: 3, boxShadow: 3 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {edu.school}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {edu.degree} | {edu.gpa} | {edu.duration}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {edu.courses}
                  </Typography>
                </Card>
              ))}
            </Box>
          )}

          {/* Experience Cards */}
          {tab === 1 && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {experience.map((exp, index) => (
                <Card key={index} sx={{ p: 3, boxShadow: 3 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {exp.role}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {exp.company} | {exp.duration}
                  </Typography>
                  <ul style={{ marginTop: 8 }}>
                    {exp.points.map((point, i) => (
                      <li key={i}>
                        <Typography variant="body2">{point}</Typography>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </Box>
          )}
        </Box>
      </Container>
    </PageWrapper>
  );
};

export default About;
