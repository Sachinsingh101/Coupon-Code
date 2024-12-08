
import {
  Paper,
  Grid,
  Box,
  Divider,
  Typography,
  IconButton,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Sachin from "../assets/Sachin.jpg";
import VerifiedIcon from "@mui/icons-material/Verified";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const Skillstyled = styled("span")(({ theme }) => ({
  border: "0px solid red",
  margin: "2px",
  borderRadius: "50px",
  padding: "5px",
  color: "white",
  backgroundColor: "#707070",
}));

function About() {
  return (
    <>
      <Grid mt={5} container sx={{ justifyContent: "center" }}>
        <Grid item xs={10} sx={{ display: "flex", justifyContent:'center' }}>
            <Paper
              elevation={5}
              sx={{ padding: "10px", margin: "5px", width: "100%" }}
            >
              <Box component="img" src={Sachin} width="100%" loading="lazy"  />
              <Box
                component="div"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box>
                  <IconButton>
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton>
                    <InstagramIcon />
                  </IconButton>
                  <IconButton>
                    <EmailIcon />
                  </IconButton>
                </Box>
                <VerifiedIcon sx={{ alignSelf: "center", color: "green" }} />
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              ></Box>
              <Typography sx={{ color: "#707070" }} variant="caption">
                Contributions
              </Typography>
              <Box
                component="div"
                mt={2}
                sx={{ display: "flex", flexWrap: "wrap" }}
              >
                <Skillstyled>Ui Development</Skillstyled>
                <Skillstyled>Integration</Skillstyled>
                <Skillstyled>Back-End</Skillstyled>
                <Skillstyled>Project Settings</Skillstyled>
              </Box>
              <Divider sx={{ marginTop: "10px" }} />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Developer Talk
                </AccordionSummary>
                <AccordionDetails>
                  Hello, My self Sachin. Welcome to my website. Excited to
                  contribute, learn and grow. Lets get connectd To know more.
                </AccordionDetails>
              </Accordion>
            </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default About;
