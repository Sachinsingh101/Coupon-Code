import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";

function Signup() {
  return (
    <Box mt={12} 
      mb={5}
      sx={{
        pt: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "120vh",
      }}
    >
      <Box
        component="form"
        sx={{
          background: "linear-gradient(to top left, cyan, green)",
          p: 4,
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          width: "100%",
          maxWidth: 400,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color="white"
          textAlign="center"
          mb={3}
          sx={{ textShadow: "0px 2px 4px rgba(0,0,0,0.6)" }}
        >
          SIGN UP
        </Typography>
        <Box mb={2}>
          <Typography
            component="label"
            htmlFor="name"
            sx={{ color: "white", fontWeight: "bold", mb: 1, display: "block" }}
          >
            Name
          </Typography>
          <TextField
            id="name"
            name="name"
            type="text"
            placeholder="Enter Your Name"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              sx: { backgroundColor: "white", borderRadius: 1 },
            }}
          />
        </Box>
        <Box mb={2}>
          <Typography
            component="label"
            htmlFor="email"
            sx={{ color: "white", fontWeight: "bold", mb: 1, display: "block" }}
          >
            Email
          </Typography>
          <TextField
            id="email"
            name="email"
            type="email"
            placeholder="Enter Email"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              sx: { backgroundColor: "white", borderRadius: 1 },
            }}
          />
        </Box>
        <Box mb={2}>
          <Typography
            component="label"
            htmlFor="password"
            sx={{ color: "white", fontWeight: "bold", mb: 1, display: "block" }}
          >
            Password
          </Typography>
          <TextField
            id="password"
            name="password"
            type="password"
            placeholder="Enter Password"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              sx: { backgroundColor: "white", borderRadius: 1 },
            }}
          />
        </Box>
        <Box mb={3}>
          <Typography
            component="label"
            htmlFor="confirmpassword"
            sx={{ color: "white", fontWeight: "bold", mb: 1, display: "block" }}
          >
            Confirm Password
          </Typography>
          <TextField
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            fullWidth
            variant="outlined"
            size="small"
            InputProps={{
              sx: { backgroundColor: "white", borderRadius: 1 },
            }}
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          sx={{
            backgroundColor: "#1e88e5",
            color: "white",
            fontWeight: "bold",
            py: 1,
            borderRadius: 1,
            "&:hover": { backgroundColor: "#1565c0" },
          }}
        >
          Sign Up
        </Button>
        <Divider sx={{ my: 3, backgroundColor: "rgba(255,255,255,0.5)" }} />
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ color: "black", mt: 2 }}
        >
          Already User?{" "}
          <Link
            to="/Signin"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "none",
              marginLeft: "4px",
            }}
          >
            Login Now
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Signup;