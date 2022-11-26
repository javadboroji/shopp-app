import React, { useContext,useState } from 'react'
import './index.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack, Button, ButtonGroup } from '@mui/material';
import { styled } from '@mui/material/styles';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { newContext } from '../Context.js/Context';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function ShoppCart() {
 
    const { shoppingCart ,shoppingCartHandler,shoppingCartRemove,TotlaPrice} = useContext(newContext)
  
    return (
        <div className='shopping--cart'>
            <Box sx={{ flexGrow: 1 }} style={{ minHeight: 350, marginTop: '7rem' }} >

                {
                    shoppingCart ? shoppingCart.map(item => {
                        {TotlaPrice.push(item.price*item.amount )}
                        return (
                            <Grid key={item.id} container spacing={2} justifyContent="center"
                                alignItems="center" className='admin--shadow-item'>
                                <Grid item xs={12} sm={12} md={3} lg={3} justifyContent="center">
                                    <img src={item.image} alt={item.image} className='cart-image' />
                                </Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3}>
                                    <ButtonGroup>
                                        <Button
                                            aria-label="reduce"
                                            onClick={() => {
                                                shoppingCartRemove(item,-1);
                                            }}
                                        >
                                            <RemoveIcon fontSize="small" />
                                        </Button>
                                        <h5 className='mx-3'>{item.amount}</h5>
                                        <Button
                                            aria-label="increase"
                                            onClick={() => {
                                                shoppingCartHandler(item);
                                            }}
                                        >
                                            <AddIcon fontSize="small" />
                                        </Button>

                                    </ButtonGroup>
                                </Grid>
                                <Grid item xs={6} sm={6} md={3} lg={3}>
                                    <h5 className='admin-des-item'> Price :</h5>
                                    <h5> {item.price}$</h5>
                                </Grid>
                                <Grid item xs={6} sm={6} md={3} lg={3}>
                                    <h5 className='admin-des-item'> Total :</h5>
                                    <h5> ${ item.price*item.amount}</h5>
                                   
                                </Grid>

                            </Grid>

                        )
                    }) :
                        <h3> Shopping Cart Empty</h3>
                }
                <Grid container spacing={2} justifyContent="end" direction="row"
                    alignItems="center" className='admin--shadow-item '>
                    <Grid item xs={12} md={8} >
                        <Button variant="outlined" className='btn-cart'>CheckOut</Button>
                    </Grid>
                    <Grid xs={12} md={3} item className='mx-3'>
                        <div className='subtotla-bg'>
                            <p className='mx-3 admin-des-item'>SubTotla:</p>
                            <h5>${TotlaPrice.length>0&& TotlaPrice.map(item=>item).reduce((a,b)=>a+b,0)}</h5>
                        </div>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}

export default ShoppCart