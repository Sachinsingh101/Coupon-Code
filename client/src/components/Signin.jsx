import React from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Box, Paper, Divider } from "@mui/material";

const Login = () => {
  return (
    <Box
      mt={5}
      mb={5}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        pt: 8,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          background: "linear-gradient(to top left, #00bcd4, #4caf50)",
          p: 3,
          borderRadius: 2,
          maxWidth: 400,
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{
            color: "#fff",
            textShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          LOGIN
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <Box mb={2}>
            <Typography variant="body1" fontWeight="bold" sx={{ color: "#fff", mb: 1 }}>
              Email
            </Typography>
            <TextField
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              fullWidth
              variant="outlined"
              InputProps={{
                style: { backgroundColor: "#fff", borderRadius: 8 },
              }}
            />
          </Box>
          <Box mb={3}>
            <Typography variant="body1" fontWeight="bold" sx={{ color: "#fff", mb: 1 }}>
              Password
            </Typography>
            <TextField
              id="password"
              name="password"
              type="password"
              placeholder="Enter Password"
              fullWidth
              variant="outlined"
              InputProps={{
                style: { backgroundColor: "#fff", borderRadius: 8 },
              }}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              height: 40,
              backgroundColor: "#2196f3",
              "&:hover": {
                backgroundColor: "#1976d2",
              },
            }}
          >
            Login
          </Button>
        </Box>
        <Divider sx={{ my: 3, backgroundColor: "#fff" }} />
        <Typography
          variant="body2"
          align="center"
          sx={{ color: "#000", mt: 2 }}
        >
          New to CouponDeal?{" "}
          <Link
            to="/Signup"
            style={{
              fontWeight: "bold",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Sign Up Now
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;