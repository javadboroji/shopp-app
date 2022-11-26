import React, { useEffect, useState ,useContext} from 'react'
import { newContext } from '../Context.js/Context';
import { Container, 
    Row ,
    Button,
    Card,
    CardGroup} from 'react-bootstrap'
import { useParams } from "react-router-dom"
import axios from 'axios';
import RelatedProducts from './RelatedProducts';

function SinglePost() {
    const { id } = useParams()
    const [product, setProduct] = useState("")
    const [err, setErr] = useState("")
    const {shoppingCartHandler} = useContext(newContext)
    const getSingleProduct = () => {
        return (axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => setErr(err.message))
        )
    }
    useEffect(() => {
        getSingleProduct()
    }, [product])
    return (
        <Container className='my-5'>
            <Row>
             
                {product&&
                   
                        <CardGroup key={product.id}>
                            <Card className='mt-3 card--shadow--singlepost'>
                               <Card.Img variant="top" src={product.image} className=" card--img" />
                                <Card.Body >
                                    <Card.Title className='text-center'> {product.title}</Card.Title>

                                </Card.Body>
                                <Card.Text className="mx-3 px-3">
                                    {product.description}
                                </Card.Text>
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
}
            </Row>
            <Row>
                <RelatedProducts cat={product.category}/>
            </Row>
        </Container>
    )
}


export default SinglePost