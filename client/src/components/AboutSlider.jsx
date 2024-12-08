import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Grid } from "@mui/material";

import About from "./About.jsx";

const AboutSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 10,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <Grid container sx={{justifyContent:'center'}}>
        <Grid mt={5} mb={5} item xs={12} sm={8} md={4}>
          <div className="slider-container">
            <Slider {...settings}>
              <About />
              <About />
              <About />
              <About />
            </Slider>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutSlider;
