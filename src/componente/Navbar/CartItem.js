import React,{useContext} from 'react'
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { newContext } from '../Context.js/Context';
import { Link } from 'react-router-dom';
function CartItem() {
  const {TotlaPrice,shoppingCart} = useContext(newContext)
  return (
    <>
    <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
      <Badge color="secondary" badgeContent={shoppingCart.length>0 ? shoppingCart.length :0}>
        <Link to='/shoppcart'> <ShoppingCartIcon color='info'/> </Link>
      </Badge>
    </Stack>
    </>
  )
}

export default CartItem