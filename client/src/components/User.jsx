import "../App.css";
import Grid from "@mui/material/Grid";
import { Typography, Paper, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useRef, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #a6acaf ",
  boxShadow: 24,
  

};

function User() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const password = "Sachin@123";

  return (
    <>
      <Grid container mt={3}>
        <Grid item md={12}>
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Typography variant="heading1">Name</Typography>
            <Typography variant="subtitle1">Sachin Kumar</Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="heading1">Email</Typography>
            <Typography variant="subtitle1">sachinmail@gmail.com</Typography>
          </Stack>
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Typography variant="heading1">Password</Typography>
            <Typography variant="subtitle1">mypass@123</Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="heading1">LifeTime Earning</Typography>
            <Typography variant="subtitle1">500</Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography variant="heading1">Balance</Typography>
            <Typography variant="subtitle1">200</Typography>
          </Stack>
          <Stack direction="row" sx={{ justifyContent: "left" }}>
            <Button variant="contained" onClick={handleOpen}>
              Update Profile
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid item>
              <Paper elevation={10} sx={{ padding: "10px" }}>
                <Typography variant="heading1">Update Pofile</Typography>
                <form
                  action="www.google.com"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <TextField type="text" placeholder="Enter Your name" />
                  <TextField
                    type="password"
                    placeholder="Reset Your password"
                  />
                  <Button type="submit">Submit</Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

export default User;
