import React, { useContext } from 'react'
import { newContext } from '../Context.js/Context'
import ProductItem from './ProductItem'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


  
function Products() {
    const { products, error } = useContext(newContext)
    return (
        <Box sx={{flexGrow:1}}>
            <Grid container spacing={2}  justifyContent="center" alignItems="center"  sx={{width:'80%',margin:'auto'}} >
            {
                    products ? products.map((item, index) => {
                        return (
                            <ProductItem key={index} product={item} />
                        )
                    }) :
                        <h3>  Not Found :{error}</h3>
                }
            </Grid>
           
        </Box>
                
        
    )
}

export default Products