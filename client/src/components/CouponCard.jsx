import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Banner1 from "../assets/banner1.png";

export default function CouponCard() {
  return (
    <>
      <Card sx={{ maxWidth: 200 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="100"
          image={Banner1}
        />
        <CardContent>
          <Typography>Play Store</Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Google Developer Coupon
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Buy</Button>
          <Button size="small">Add to Cart</Button>
        </CardActions>
      </Card>
    </>
  );
}
