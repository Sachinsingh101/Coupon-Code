import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import  CssBaseline from '@mui/material/CssBaseline';
import Typography  from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import SearchCoupon from './SearchCoupon';
import MenuIcon from '@mui/icons-material/Menu';
export default function Header(){
  return (
      
    <>
      <CssBaseline />
      <Grid container sx={{background:'linear-gradient(to bottom,#48c9b0,#117864)',justifyContent:'center',alighItems:'center'}}>
      <Grid padding={1}
       container sx={{background:'linear-gradient(to bottom,#b2babb,#515a5a)', 
       justifyContent:'space-between',
       color:'white', alignItems:'center',
       }}
       >
        <Grid item>
           <Typography variant="subtitle1">
             couponDeal
           </Typography>

        </Grid>
        <Grid item  sx={{display:{xs:'none',md:'flex'}, gap:'10px'}}>
          <Typography>Home</Typography>
          <Typography>Coupons</Typography>
          <Typography>Sell Coupon</Typography>
          <Typography>Contact</Typography>
        </Grid>
        <Grid item xs={{display:'flex'}}>
          <IconButton>
            <PersonIcon  sx={{color:'white'}} />
          </IconButton>
          <IconButton sx={{display:{xs:'',md:'none'}}}>
            <MenuIcon sx={{color:'white'}} />
          </IconButton>
        </Grid>
      </Grid>
      </Grid>
      <SearchCoupon />
    </>
  );
}