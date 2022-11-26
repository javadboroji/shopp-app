import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { newContext } from '../Context.js/Context';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function ModalEdit({ product }) {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const { open, setOpen, products, setProducts, } = React.useContext(newContext)
    const [input, setInput] = React.useState(product.title)
    const [inpPrice, setInpPrice] = React.useState(product.price)
    const [inpDes, setInpDes] = React.useState(product.description)

    const handleClose = () => {
        setOpen(false);
    };
    const inputChangeHandler = (e) => {
        setInput(e.target.value)
    }
    const inputPriceChangeHandler = (e) => {
        setInpPrice(e.target.value)
    }
    const inputDescriptionChangeHandler = (e) => {
        setInpDes(e.target.value)
    }
    const editValueHandler = (data) => {
        const newProduct = products.map(item => {
            if (item.id === data.id) {
                return { ...item, title:input, price: inpPrice, description: inpDes }
            }
            return item
        })
        setProducts(newProduct)
        setOpen(false);
    }
    useEffect(() => {
        setInput(product.title)
        setInpPrice(product.price)
        setInpDes(product.description)
    }, [product,products])
    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField fullWidth id="standard-basic-i" label="" variant="standard" value={input || ''} onChange={(e) => inputChangeHandler(e)} />
                        <TextField fullWidth id="standard-basic" label="" variant="standard" value={inpPrice || ''} onChange={(e) => inputPriceChangeHandler(e)} />
                        <TextField id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            fullWidth
                            rows={4}
                           
                            value={inpDes || ''}
                            onChange={(e) => inputDescriptionChangeHandler(e)}
                        />
                    </Box>
                </DialogContent>

                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Disagree
                    </Button>
                    <Button onClick={()=>editValueHandler(product)} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}