import React,{useContext} from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link, useParams } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { newContext } from '../Context.js/Context'; 
import './index.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function ProductItem({ product }) {
    const {shoppingCartHandler} = useContext(newContext)
    return (

        <Grid item xs={12} md={6} lg={4}>
            <CardGroup>
                <Card className='mt-3 card--shadow'>
                    <Link to={`product/${product.id}`}><Card.Img variant="top" src={product.image} className=" card--img" /> </Link>
                    <Card.Body>
                        <Card.Title className='text-center'> {product.title}</Card.Title>

                    </Card.Body>
                    <div className='d-flex  justify-content-between align-items-center my-3'>
                        <div className='d-flex'>
                            <span className='card--des-color mx-4'> Price :</span>
                            <h5>
                                {product.price}$
                            </h5>
                        </div>
                        <Button variant="outline-success mx-4 " onClick={()=>shoppingCartHandler(product)}>Add To Card</Button>{' '}
                    </div>
                    <Card.Footer>
                        <small className="text-muted">
                            <span className='card--des-color'>category:</span>
                            {product.category}</small>
                    </Card.Footer>
                </Card>

            </CardGroup>
        </Grid>


    )
}

export default ProductItem