import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import SearchCoupon from "./SearchCoupon";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'
import Signup from "./Signup";

const CustomButton = styled(Button)(({theme}) =>({
   backgroundColor:'#2e4053',
   borderRadius:'2em'
}))

import "../App.css";
export default function Header() {
  // Navigation Bar setting
  const nav = useRef();
  var lastPos = 0;
  var currPos = 0;
  window.addEventListener("scroll", () => {
    currPos = document.documentElement.scrollTop;
    const ele = nav.current;
    currPos > lastPos
      ? ele.classList.add("navmove")
      : ele.classList.remove("navmove");
    lastPos = currPos <= 0 ? 0 : currPos;
  });

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
          alighItems: "center",
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
            <Typography className="btn">Earn</Typography>
            <Typography className="btn">About Us</Typography>
          </Grid>
          <Grid item xs={{ display: "flex" }}>
            <Link to="Signup"><CustomButton  variant="contained" disableRipple  >Signup</CustomButton></Link>
            <Link to="Account">
              <IconButton>
                <PersonIcon sx={{ color: "white" }} />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
