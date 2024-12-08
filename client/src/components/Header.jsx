import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useGetToCart from "./CustomHooks/useGetToCart";
import Modal from "@mui/material/Modal";
import "../App.css";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#2e4053",
  borderRadius: "2em",
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Header() {
  var cart = useGetToCart();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const nav = useRef();
  let lastPos = 0;
  const history = useNavigate();

  useEffect(() => {
    // Check the login state when the component mounts
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // If token exists in localStorage, mark user as logged in
    }

    const handleScroll = () => {
      const currPos = document.documentElement.scrollTop;
      const ele = nav.current;

      if (ele) {
        // Ensure ele is defined
        currPos > lastPos
          ? ele.classList.add("navmove")
          : ele.classList.remove("navmove");
        lastPos = currPos <= 0 ? 0 : currPos;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignOut = () => {
    // Remove token from localStorage and update state
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    history.push("/"); // Redirect to homepage or login page
  };

  return (
    <>
      <CssBaseline />
      <Grid
        ref={nav}
        id="nav"
        container
        sx={{
          background: "linear-gradient(to bottom,#48c9b0,#117864)",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: "0px",
          zIndex: 99,
          boxShadow: "0px 2px 5px",
        }}
      >
        <Grid
          padding={1}
          container
          sx={{
            background: "linear-gradient(to bottom,#b2babb,#515a5a)",
            justifyContent: "space-between",
            color: "white",
            alignItems: "center",
          }}
        >
          <Grid item>
            <Typography className="btn" variant="subtitle1">
              couponDeal
            </Typography>
          </Grid>
          <Grid item sx={{ display: { xs: "none", md: "flex" }, gap: "10px" }}>
            <Link className="btn" to="/">
              Home
            </Link>
            <Link className="btn" to="/Sell">
              Coupons
            </Link>
            <Typography>
              <Link to="/Earn" className="btn">
                Earn
              </Link>{" "}
            </Typography>
            <Typography>
              <Link to="About" className="btn">
                About Us
              </Link>{" "}
            </Typography>
          </Grid>
          <Grid item xs={{ display: "flex" }}>
            {!isLoggedIn ? (
              <Link to="Signup">
                <CustomButton variant="contained" disableRipple>
                  Signup
                </CustomButton>
              </Link>
            ) : (
              <Button variant="contained" disableRipple onClick={handleSignOut}>
                Signout
              </Button>
            )}
            <IconButton onClick={handleOpen}>
              {
                cart ? 
                <Box
                componeent="div"
                sx={{
                  position: "absolute",
                  fontSize: "10px",
                  backgroundColor: "yellow",
                  padding: "5px",
                  color: "black",
                  marginBottom: "35px",
                  borderRadius: "20px",
                }}
              >
                {cart ? cart.length : 0}
              </Box> : null
              }
              <ShoppingCartIcon sx={{ color: "white" }} />
            </IconButton>
            <Link to="Account">
              <IconButton>
                <PersonIcon sx={{ color: "white" }} />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Box  sx={{overflow:'scroll', scrollBehavior:'smooth', height:'80vh'}}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              {cart ? "Your Items" : "Cart is Empty"}
            </Typography>
            <Typography id="modal-modal-description" sx={{ p: 1 }}>
              {cart
                ? cart.map((item, index) => (
                    <Paper
                      elevation={5}
                      sx={{ marginBottom: "10px", padding: "5px" }}
                    >
                      <Typography variant="subtitle1">{item.Cname}</Typography>
                      <Typography variant="caption">{item.Cdesc}</Typography>
                      <Button variant="contained" > Checkout</Button>
                    </Paper>
                  ))
                : null}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
