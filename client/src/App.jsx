
import Header from './components/Header.jsx'
import Box from '@mui/material/Box'
import  Container  from '@mui/material/Container';
import Brands from './components/Brands.jsx'
import TrendingCoupon from './components/TrendingCoupon.jsx';
import Coupons from './components/Coupons.jsx';
function App(){
  return (
    <>

        <Header />
        <Brands />
        <TrendingCoupon />
        <Coupons />

    </>
  )
}

export default App;