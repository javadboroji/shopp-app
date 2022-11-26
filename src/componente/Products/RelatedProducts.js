import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './index.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button ,CardActions} from '@mui/material';
import { Link } from 'react-router-dom';

function RelatedProducts({ cat }) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const [product, setProduct] = useState([])


    const getSingleProductRelated = () => {
        return (axios.get(`https://fakestoreapi.com/products/category/${cat}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err.message))
        )
    }
    useEffect(() => {
        getSingleProductRelated()
    }, [product])
    return (
        <>
            <h1 className='my-3'> RelatedProducts </h1>
            <Carousel responsive={responsive} autoPlay={true}>
                {product.map(product => {
                    return (

                        <Card key={product.id} sx={{ maxWidth: 400, padding: 1 }} style={{height:530}}>
                            <CardActionArea>

                                <CardMedia
                                    component="img"
                                    height="300"
                                    className='card--img'
                                    image={product.image}
                                    alt={product.image}
                                />

                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.title}
                                    </Typography>


                                    <CardActions>
                                       <Link to={`/product/${product.id}`}> Learn More </Link>
                                    </CardActions>

                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })}

            </Carousel>
        </>
    )
}

export default RelatedProducts