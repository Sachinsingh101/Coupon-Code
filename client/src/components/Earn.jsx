import { Grid, Typography, Box, Stack } from "@mui/material";
import Sachin from "../assets/run.gif";

const Earn = () => {
  return (
    <>
      <Grid container mt={10} mb={20} sx={{ justifyContent: "center" }}>
        <Grid item>
          <Stack>
            <Typography m={3} variant="button">
              We are working on this feature
            </Typography>
            <Box component="img" src={Sachin} />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Earn;
