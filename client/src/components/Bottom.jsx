import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {styled} from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const LinkStyled = styled(Link)(({theme}) => ({
    color:'white',
    textDecoration:'none'
}))
const Bottom = () =>{
    return(
        <>
            <Grid container
            sx={{background: "linear-gradient(to bottom,#b2babb,#515a5a)",
             justifyContent:'center',border:'10px groove #b2babb'}}>
                <Grid item xs={12} sm={12} md={3} sx={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                    <Typography variant="h6">Services</Typography>
                    <Typography variant="subtitle"><LinkStyled to="/Sell" > Promote Coupon</LinkStyled></Typography>
                    <Typography variant="subtitle"><LinkStyled to="/Sell">Sell Coupon</LinkStyled> </Typography>
                    <Typography variant="subtitle"><LinkStyled to="/Earn">Earn</LinkStyled> </Typography>
                    <Typography variant="subtitle"><LinkStyled to="/About">About Us</LinkStyled> </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={3} sx={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                    <Typography variant="h6">Policies</Typography>
                    <Typography variant="subtitle"><LinkStyled to="#">Browsing Guide</LinkStyled> </Typography>
                    <Typography variant="subtitle"><LinkStyled to="#">Complaint</LinkStyled> </Typography>
                    <Typography variant="subtitle"><LinkStyled to="#">Enquiry</LinkStyled> </Typography>
                    <Typography variant="subtitle"><LinkStyled to="#">Account Deletion</LinkStyled> </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{alignSelf:'center', textAlign:'center'}} >
                    <Typography variant="body" sx={{color:'white'}} >All Rights Reserved</Typography>
                    <Typography variant="subtitle2" sx={{color:'white'}} >@CouponCode Pvt. Ltd. </Typography>
                    <Typography variant="subtitle1" sx={{color:'white'}} > Copying any part of this website is Illegal </Typography>
                    <Stack spacing={5} direction="row" sx={{justifyContent:'center'}}  > 
                        <IconButton>
                            <LinkedInIcon sx={{color:'#ecf0f1'}} />
                        </IconButton>
                        <IconButton>
                            <FacebookIcon sx={{color:'#3498db'}} />
                        </IconButton>
                        <IconButton>
                           <XIcon  sx={{color:'#2c3e50'}}/>
                        </IconButton>
                    </Stack>
                    
                </Grid>
            </Grid>
        </>
    )
}

export default Bottom;