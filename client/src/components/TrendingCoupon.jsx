import "../App.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import Box from '@mui/material/Box';
function TrendingCoupon() {
  return (
    <>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={8}>
          <Stack direction="row" spacing={2}>
            <Typography className="trending">
                <Box class="anime"></Box>
                Trending  
            </Typography>
            <Typography className="trending">High Discount</Typography>
            <Typography className="trending">Low Budget</Typography>
            <Typography className="trending">Newly Added</Typography>
          </Stack>
          <Divider sx={{marginTop:'5px'}} />
        </Grid>
      </Grid>
    </>
  );
}

export default TrendingCoupon;
