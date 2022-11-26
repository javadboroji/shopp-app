import React, { useEffect, useState, useContext } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ModalEdit from './ModalEdit';
import { newContext } from '../Context.js/Context';
import "./index.css"
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Admin({ currentItems }) {
  const theme = useTheme();
  const matches = useMediaQuery('(max-width:600px)');
  const { open, setOpen } = useContext(newContext)
  const [modalInp, setModalInp] = useState('')
  
  const btnEditHandler = (elm) => {
 
    setModalInp(elm);
     setOpen(true)

  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ minHeight: 350, marginTop: '7rem' }}>
       
        {
          currentItems && currentItems.map(product => {
            return (
              <Grid key={product.id} container spacing={2} justifyContent="center"
                alignItems="center" className='admin--shadow-item'>
                <Grid item xs={12} sm={12} md={6} lg={2} className={matches ? 'admin-mobile-design' : ""}>
                  <img src={product.image} alt={product.image} className='img--admin' />

                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                  <span className='admin-des-item'> Name :</span><p className={matches && 'text--center'}>{product.title}</p>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={2}>
                  <span className='admin-des-item'> Price :</span> <p className={matches && 'text--center'}> ${product.price}</p>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3}>
                 
                  <IconButton aria-label="edit" onClick={() => btnEditHandler(product)}>
                    <BorderColorIcon />
                  </IconButton>
                </Grid>

                <ModalEdit product={modalInp} />
              </Grid>

            )
          })
        }

      </Box>
    </>
  )
}

export default Admin