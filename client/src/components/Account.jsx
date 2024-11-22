import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Divider, IconButton } from "@mui/material";
import Orders from "./Orders";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import User from "./User";
function Account() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid md={12} mt={15} mb={5} container sx={{ justifyContent: "center" }}>
        <Grid item md={10} sx={{ display: "flex", justifyContent: "center" }}>
          <Paper elevation={5} sx={{ padding: "15px" }}>
            <Stack
              direction="row"
              sx={{ justifyContent: "center", alignItems: "center" }}
              spacing={5}
            >
              <Paper
                elevation={5}
                sx={{ display: "flex", padding: "25px", borderRadius: "50%" }}
              >
                <IconButton>
                  <label style={{position:'absolute'}} htmlFor="userImg">
                    <AddAPhotoIcon sx={{'&:hover':{cursor:'pointer'}}} />
                   </label>
                  <input id="userImg" style={{display:'none'}} type="file" />
                </IconButton>
              </Paper>
              <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                <Tabs value={value} onChange={handleChange} centered>
                  <Tab label="About" />
                  <Tab label="Orders" />
                  <Tab label="Sells" />
                </Tabs>
              </Box>
            </Stack>
            <Divider sx={{marginTop:'10px'}} />
            <Stack>
                {
                    value==0 ? <User /> : value==1 ? <Orders /> : "Three"
                }
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Account;
