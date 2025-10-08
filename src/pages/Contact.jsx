import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Avatar,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import profilePic from "../assets/mainprofile.jpeg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID", // replace with your Service ID
        "YOUR_TEMPLATE_ID", // replace with your Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: "snehalthorat1512@gmail.com",
        },
        "YOUR_PUBLIC_KEY" // replace with your Public Key
      )
      .then((response) => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
        >
          Contact Me
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            mt: 4,
            justifyContent: "center",
          }}
        >
          {/* Left Card: Contact Info */}
          <Card
            sx={{
              flex: 1,
              minWidth: 280,
              maxWidth: 350,
              p: 3,
              boxShadow: 6,
              borderRadius: 3,
              background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Avatar src={profilePic} sx={{ width: 120, height: 120 }} />
              <Typography variant="h6" fontWeight="bold">
                Snehal Thorat
              </Typography>
              <Typography variant="body1">
                Email:{" "}
                <Link href="mailto:snehalthorat1512@gmail.com">
                  snehalthorat1512@gmail.com
                </Link>
              </Typography>
              <Typography variant="body1">Phone: +1 (817) 883-1150</Typography>
              <Typography variant="body1">
                LinkedIn:{" "}
                <Link
                  href="https://www.linkedin.com/in/snehalthoratt/"
                  target="_blank"
                >
                  View Profile
                </Link>
              </Typography>
              <Typography variant="body1">
                GitHub:{" "}
                <Link href="https://github.com/snehal1512" target="_blank">
                  View Profile
                </Link>
              </Typography>
            </CardContent>
          </Card>

          {/* Right Card: Contact Form */}
          <Card
            sx={{
              flex: 2,
              minWidth: 300,
              maxWidth: 600,
              p: 3,
              boxShadow: 6,
              borderRadius: 3,
            }}
          >
            <CardContent>
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <TextField
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <TextField
                    label="Message"
                    name="message"
                    multiline
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    sx={{ mt: 1 }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </Box>
              </motion.form>
            </CardContent>
          </Card>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Contact;
